// Usage:
//   npx tsx scripts/blind-compare.ts                 → compares all .audit-tmp/blind/*.json against all topics + exams
//   npx tsx scripts/blind-compare.ts <id> <outDir>   → compares a single topic or exam paper
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { checkAnswer, displayAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXAM_IDS = ["exam-p1a", "exam-p1b", "exam-p2a", "exam-p2b"] as const;

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

async function questionsFor(id: string): Promise<Question[]> {
  if (id === "exam") {
    const all: Question[] = [];
    for (const e of EXAM_IDS) all.push(...(((await load<ExamPaper>(`lib/exam/${e}.ts`, "paper"))?.questions) ?? []));
    return all;
  }
  if ((EXAM_IDS as readonly string[]).includes(id)) {
    return ((await load<ExamPaper>(`lib/exam/${id}.ts`, "paper"))?.questions) ?? [];
  }
  const practice = await load<TopicPractice>(`lib/topics/${id}/practice.ts`, "practice");
  return [
    ...(practice?.quiz ?? []),
    ...((await load<Paper[]>(`lib/topics/${id}/mcq.ts`, "mcqPapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.papers ?? []).flatMap((p) => p.questions),
    ...((await load<Paper[]>(`lib/topics/${id}/practice2.ts`, "morePapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.challenge ?? []),
  ];
}

interface BlindEntry {
  id: string;
  answer: unknown;
  note?: string;
}

function parseBlindJson(raw: unknown): BlindEntry[] {
  if (Array.isArray(raw)) {
    return raw
      .filter((x): x is Record<string, unknown> => !!x && typeof x === "object" && typeof (x as { id?: unknown }).id === "string")
      .map((x) => ({
        id: String(x.id),
        answer: "answer" in x ? x.answer : "answerIndex" in x ? x.answerIndex : x.value,
        note: typeof x.note === "string" ? x.note : undefined,
      }));
  }
  if (raw && typeof raw === "object") {
    const obj = raw as Record<string, unknown>;
    if (Array.isArray(obj.answers)) return parseBlindJson(obj.answers);
    if (Array.isArray(obj.items)) return parseBlindJson(obj.items);
    // Support dictionary format: { "<qid>": <answer> }
    return Object.entries(obj).map(([id, val]) => {
      if (val && typeof val === "object" && !Array.isArray(val) && ("answer" in val || "answerIndex" in val)) {
        const v = val as Record<string, unknown>;
        return { id, answer: "answer" in v ? v.answer : v.answerIndex, note: typeof v.note === "string" ? v.note : undefined };
      }
      return { id, answer: val };
    });
  }
  return [];
}

function compareSet(qs: Question[], answers: BlindEntry[]) {
  const autoQs = qs.filter((q) => q.kind !== "written");
  const byId = new Map(autoQs.map((q) => [q.id, q]));
  const latestById = new Map<string, BlindEntry>();
  for (const a of answers) {
    if (byId.has(a.id)) latestById.set(a.id, a);
  }
  const mismatches: unknown[] = [];
  let agree = 0;
  for (const [qid, a] of latestById) {
    const q = byId.get(qid)!;
    if (q.kind === "mcq") {
      let idx = Number(a.answer);
      if (!Number.isInteger(idx) && typeof a.answer === "string") {
        const letter = a.answer.trim().toUpperCase();
        if (["A", "B", "C", "D"].includes(letter)) idx = letter.charCodeAt(0) - 65;
        else {
          const matchIdx = q.options.findIndex((o) => o.trim().toLowerCase() === a.answer!.toString().trim().toLowerCase());
          if (matchIdx >= 0) idx = matchIdx;
        }
      }
      if (idx === q.answerIndex) agree++;
      else {
        mismatches.push({
          id: q.id,
          kind: "mcq",
          solver: { index: a.answer, text: Number.isInteger(idx) ? q.options[idx] : undefined },
          key: { index: q.answerIndex, text: q.options[q.answerIndex] },
          solverNote: a.note,
        });
      }
    } else if (q.kind === "short") {
      const r = checkAnswer(q.answer, String(a.answer ?? ""));
      if (r.status === "correct") agree++;
      else {
        mismatches.push({
          id: q.id,
          kind: "short",
          solver: a.answer,
          checker: r,
          key: displayAnswer(q.answer),
          spec: q.answer,
          solverNote: a.note,
        });
      }
    }
  }
  const unanswered = autoQs.filter((q) => !latestById.has(q.id)).map((q) => q.id);
  const total = autoQs.length;
  const pct = total > 0 ? ((agree / total) * 100).toFixed(1) + "%" : "0.0%";
  return {
    report: {
      totalAutoQuestions: total,
      compared: latestById.size,
      agree,
      mismatches: mismatches.length,
      unanswered: unanswered.length,
      agreementPct: pct,
    },
    mismatches,
    unanswered,
  };
}

const [argId, argOut] = process.argv.slice(2);

if (!argId) {
  const blindDir = path.join(root, ".audit-tmp", "blind");
  const allQs: Question[] = [];
  for (const t of TOPIC_META) allQs.push(...(await questionsFor(t.id)));
  for (const e of EXAM_IDS) allQs.push(...(await questionsFor(e)));

  const answers: BlindEntry[] = [];
  if (existsSync(blindDir)) {
    for (const f of readdirSync(blindDir).filter((f) => f.endsWith(".json") && !f.endsWith(".mismatches.json"))) {
      const raw = JSON.parse(readFileSync(path.join(blindDir, f), "utf8"));
      answers.push(...parseBlindJson(raw));
    }
  }
  const res = compareSet(allQs, answers);
  mkdirSync(path.join(root, ".audit-tmp"), { recursive: true });
  writeFileSync(path.join(root, ".audit-tmp", "blind-report.json"), JSON.stringify(res, null, 2));
  console.log(JSON.stringify(res.report, null, 2));
  if (res.mismatches.length > 0) {
    console.log("\nMismatches:");
    for (const m of res.mismatches.slice(0, 40)) console.log(JSON.stringify(m));
  }
  if (res.unanswered.length > 0) {
    console.log(`\nUnanswered (${res.unanswered.length}): ${res.unanswered.slice(0, 20).join(", ")}${res.unanswered.length > 20 ? " ..." : ""}`);
  }
  if (res.mismatches.length > 0 || res.unanswered.length > 0) process.exit(1);
} else {
  const outDir = argOut ? path.resolve(argOut) : path.join(root, ".audit-tmp", "blind");
  const qs = await questionsFor(argId);
  const answers: BlindEntry[] = [];
  if (existsSync(outDir)) {
    for (const f of readdirSync(outDir).filter((f) => (f.startsWith(`${argId}.answers`) || f === `${argId}.json`) && f.endsWith(".json"))) {
      answers.push(...parseBlindJson(JSON.parse(readFileSync(path.join(outDir, f), "utf8"))));
    }
  }
  const res = compareSet(qs, answers);
  writeFileSync(path.join(outDir, `${argId}.mismatches.json`), JSON.stringify(res, null, 2));
  console.log(JSON.stringify({ topic: argId, ...res.report }));
  if (res.mismatches.length > 0 || res.unanswered.length > 0) process.exit(1);
}
