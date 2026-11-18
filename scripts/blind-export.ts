// Usage:
//   npx tsx scripts/blind-export.ts                  → exports all topics + exam papers to .audit-tmp/questions/<id>.json
//   npx tsx scripts/blind-export.ts <id> [outDir]    → exports a single topic or exam paper
// Writes every MCQ + short question WITHOUT answer keys, explanations, or hints,
// for independent Layer 1 cold blind-solving.
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { AnswerSpec, ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXAM_IDS = ["exam-p1a", "exam-p1b", "exam-p2a", "exam-p2b"] as const;

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

function form(a: AnswerSpec): string {
  switch (a.type) {
    case "number":
      return `a single number${a.allowFraction === false ? " (as a decimal, not a fraction)" : ""}${a.standardForm ? " in standard form like 3.2 x 10^4" : ""}`;
    case "fraction":
      return `a fraction${a.simplest ? " in simplest form" : ""}${a.form === "mixed" ? " written as a mixed number like 2 1/3" : a.form === "improper" ? " written as an improper fraction" : ""}`;
    case "list":
      return `${a.values.length} numbers separated by commas${a.ordered ? " IN THE ORDER THE QUESTION ASKS" : " (any order)"}`;
    case "ratio":
      return `a ratio with ${a.parts.length} parts like 1.5:1 or 3:4${a.simplest ? " in simplest form" : ""}`;
    case "expression":
      return `an algebraic expression in plain text like 3x+2${a.form && a.form !== "any" ? ` (${a.form})` : ""}`;
    case "text":
      return "a short business term / phrase";
  }
}

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

function stripAnswers(qs: Question[]) {
  return qs
    .filter((q) => q.kind !== "written")
    .map((q) =>
      q.kind === "mcq"
        ? {
            id: q.id,
            kind: "mcq" as const,
            question: q.question,
            ...(q.diagram ? { hasDiagram: true, diagram: q.diagram } : {}),
            options: q.options.map((o, i) => ({ i, text: o })),
          }
        : {
            id: q.id,
            kind: "short" as const,
            question: q.question,
            ...(q.diagram ? { hasDiagram: true, diagram: q.diagram } : {}),
            answerFormat: form(q.answer),
          },
    );
}

const [argId, argOut] = process.argv.slice(2);

if (!argId) {
  const outDir = path.join(root, ".audit-tmp", "questions");
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  let total = 0;
  for (const t of TOPIC_META) {
    const items = stripAnswers(await questionsFor(t.id));
    if (!items.length) continue;
    writeFileSync(path.join(outDir, `${t.id}.json`), JSON.stringify(items, null, 2));
    total += items.length;
    console.log(`  ${t.id}: ${items.length} auto-marked questions`);
  }
  for (const e of EXAM_IDS) {
    const items = stripAnswers(await questionsFor(e));
    if (!items.length) continue;
    writeFileSync(path.join(outDir, `${e}.json`), JSON.stringify(items, null, 2));
    total += items.length;
    console.log(`  ${e}: ${items.length} auto-marked questions`);
  }
  const combinedExam = stripAnswers(await questionsFor("exam"));
  if (combinedExam.length) {
    writeFileSync(path.join(outDir, "exam.json"), JSON.stringify(combinedExam, null, 2));
    console.log(`  exam (combined p1a+p1b+p2a+p2b): ${combinedExam.length} auto-marked questions`);
  }
  console.log(`Exported ${total} blind questions → ${outDir}`);
} else {
  const outDir = argOut ? path.resolve(argOut) : path.join(root, ".audit-tmp", "questions");
  mkdirSync(outDir, { recursive: true });
  const items = stripAnswers(await questionsFor(argId));
  const fileName = argOut ? `${argId}.questions.json` : `${argId}.json`;
  writeFileSync(path.join(outDir, fileName), JSON.stringify(items, null, 2));
  console.log(`${items.length} questions → ${path.join(outDir, fileName)}`);
}
