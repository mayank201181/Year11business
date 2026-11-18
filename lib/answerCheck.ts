// ---------------------------------------------------------------------------
// Auto-marking for typed IGCSE Business (4BS1) numerical, ratio & text answers.
//
//   correct   — right value in an acceptable form
//   close     — right value but wrong form (e.g. not simplified), or a
//               near-miss worth a retry; does NOT count as a wrong answer
//   incorrect — wrong
//   invalid   — could not read the input as the expected kind of answer;
//               does not count as an attempt
// ---------------------------------------------------------------------------

import type { AnswerSpec } from "./types.ts";
import {
  countTerms,
  evalExpr,
  exprEquivalent,
  exprVars,
  extractNumbers,
  gcd,
  hasCommonFactorInBracket,
  hasGroup,
  hasLooseGroup,
  hasUncombinedTerm,
  isFactorised,
  normalizeInput,
  parseExpr,
  parseNumberAnswer,
  type Expr,
} from "./mathParse.ts";

export type CheckStatus = "correct" | "close" | "incorrect" | "invalid";

export interface CheckResult {
  status: CheckStatus;
  /** Short, kind feedback for the learner. */
  feedback?: string;
}

const EPS = 1e-9;

function near(a: number, b: number, tol?: number): boolean {
  const t = tol ?? EPS * Math.max(1, Math.abs(a), Math.abs(b));
  return Math.abs(a - b) <= t + 1e-12;
}

function fmt(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return String(parseFloat(n.toPrecision(10)));
}

/** Canonical display string for an answer spec (may contain {{ }} maths markup). */
export function displayAnswer(spec: AnswerSpec): string {
  if (spec.display) return spec.display;
  switch (spec.type) {
    case "number":
      return fmt(spec.value).replace(/^-/, "−");
    case "fraction": {
      const neg = spec.n * spec.d < 0;
      const n = Math.abs(spec.n), d = Math.abs(spec.d);
      if (spec.form === "mixed" && n > d) {
        const w = Math.floor(n / d), r = n % d;
        return `{{${neg ? "-" : ""}${w}${r ? ` ${r}/${d}` : ""}}}`;
      }
      return `{{${neg ? "-" : ""}${n}/${d}}}`;
    }
    case "list":
      return spec.values.map(fmt).join(spec.ordered ? ", " : ", ").replace(/-/g, "−");
    case "ratio":
      return spec.parts.map(fmt).join(" : ");
    case "expression":
      return `{{${spec.expr}}}`;
    case "text":
      return spec.accept[0] ?? "";
  }
}

/** Normalise free text for comparison. */
export function normText(s: string): string {
  return normalizeInput(s)
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\.$/, "")
    .replace(/[“”"']/g, "");
}

export function checkAnswer(spec: AnswerSpec, raw: string): CheckResult {
  const input = (raw ?? "").trim();
  if (!input) return { status: "invalid", feedback: "Type an answer first." };
  try {
    switch (spec.type) {
      case "number":
        return checkNumber(spec, input);
      case "fraction":
        return checkFraction(spec, input);
      case "list":
        return checkList(spec, input);
      case "ratio":
        return checkRatio(spec, input);
      case "expression":
        return checkExpression(spec, input);
      case "text":
        return checkText(spec, input);
    }
  } catch {
    return { status: "invalid", feedback: "I couldn't read that — try writing it another way." };
  }
}

function withPi(e: Expr, pi: number): Expr {
  switch (e.t) {
    case "num": return e.v === Math.PI ? { t: "num", v: pi } : e;
    case "var": return e;
    case "neg": case "group": case "fn": return { ...e, a: withPi(e.a, pi) };
    default: return { ...e, a: withPi(e.a, pi), b: withPi(e.b, pi) };
  }
}

function piNumberValues(input: string): number[] | null {
  const s = stripEquation(input);
  if (!input.includes("π") && !/(?<![a-z])pi(?![a-z])/i.test(s)) return null;
  for (const text of [s, stripTrailingUnit(s, new Set())]) {
    const e = text === null ? null : parseExpr(text);
    if (e && exprVars(e).size === 0) return [Math.PI, 3.14, 22 / 7].map((pi) => evalExpr(withPi(e, pi), {}));
  }
  return null;
}

function roundsTo(v: number, target: number): boolean {
  const text = String(target);
  if (text.includes("e")) return false;
  const dp = text.split(".")[1]?.length ?? 0;
  return Math.abs(v - target) <= 0.5 * 10 ** -dp + 1e-9;
}

function checkNumber(spec: Extract<AnswerSpec, { type: "number" }>, input: string): CheckResult {
  const pi = piNumberValues(input);
  if (pi !== null) {
    if (pi.some((v) => near(v, spec.value, spec.tolerance) || roundsTo(v, spec.value))) {
      return { status: "close", feedback: "That's the exact value in terms of π — now work it out as a decimal, rounded as the question asks." };
    }
    return { status: "incorrect" };
  }
  {
    // "2.4 million" / "£50 thousand" typed for a full-size answer.
    const g = stripBusUnits(input);
    const q = g && g.mult !== 1 ? parseNumberAnswer(g.num) : null;
    if (q && near(q.value * g!.mult, spec.value, spec.tolerance)) return { status: "correct" };
  }
  let p = parseNumberAnswer(input);
  if (!p) {
    // Business answers often carry currencies, units, or ": 1" liquidity ratio suffixes:
    // "£12,500", "S$4.50 per unit", "24.5%", "1.5 : 1", "450 units", "−£800".
    const g = stripBusUnits(input);
    if (g) {
      const q = parseNumberAnswer(g.num);
      if (q) {
        const scaled = g.mult !== 1 && near(q.value * g.mult, spec.value, spec.tolerance) ? { ...q, value: q.value * g.mult } : q;
        p = scaled;
      }
    }
  }
  if (!p) {
    return { status: "invalid", feedback: "Type a single number, like 1200, −350, 24.5 or 1.5." };
  }
  const allowFraction = spec.allowFraction !== false;
  if (!allowFraction && p.frac) {
    if (near(p.value, spec.value, spec.tolerance)) {
      return { status: "close", feedback: "Right value — now write it as a decimal." };
    }
    return { status: "incorrect" };
  }
  if (spec.standardForm && near(p.value, spec.value, spec.tolerance ?? 1e-9 * Math.abs(spec.value))) {
    const m = p.standardForm ? Math.abs(p.standardForm.mantissa) : NaN;
    if (!(m >= 1 && m < 10)) {
      return { status: "close", feedback: "Right value — now write it in standard form, A × 10^n with 1 ≤ A < 10." };
    }
    return { status: "correct" };
  }
  if (near(p.value, spec.value, spec.tolerance)) return { status: "correct" };
  if (spec.value !== 0 && near(p.value, -spec.value, spec.tolerance)) {
    return { status: "incorrect", feedback: "Check the sign (+ or −)." };
  }
  const bothWhole = Number.isInteger(spec.value) && Number.isInteger(p.value);
  if (!bothWhole && spec.value !== 0 && Math.abs(p.value - spec.value) <= 0.01 * Math.abs(spec.value)) {
    return { status: "close", feedback: "Very close — check your rounding (Edexcel 4BS1 usually asks for 2 decimal places)." };
  }
  return { status: "incorrect" };
}

function checkFraction(spec: Extract<AnswerSpec, { type: "fraction" }>, input: string): CheckResult {
  const target = spec.n / spec.d;
  const p = parseNumberAnswer(input);
  if (!p) return { status: "invalid", feedback: "Type a fraction like 3/4 or a mixed number like 1 1/2." };
  if (!p.frac) {
    if (p.kind === "integer" && Number.isInteger(target) && near(p.value, target)) return { status: "correct" };
    if (near(p.value, target, 1e-9)) {
      if (spec.allowDecimal) return { status: "correct" };
      return { status: "close", feedback: "Right value — now write it as a fraction." };
    }
    return { status: "incorrect" };
  }
  const f = p.frac;
  const num = (f.whole * f.d + f.n) * (f.negative ? -1 : 1);
  const den = f.d;
  const equal = num * spec.d === spec.n * den;
  if (!equal) {
    if (spec.n !== 0 && num * spec.n === spec.d * den) {
      return { status: "incorrect", feedback: "That's the reciprocal — is it upside down?" };
    }
    if (num * spec.d === -spec.n * den && spec.n !== 0) {
      return { status: "incorrect", feedback: "Check the sign (+ or −)." };
    }
    return { status: "incorrect" };
  }
  if (spec.form === "mixed" && Math.abs(num) > den && p.kind !== "mixed") {
    return { status: "close", feedback: "Right value — now write it as a mixed number." };
  }
  if (spec.form === "improper" && p.kind === "mixed") {
    return { status: "close", feedback: "Right value — now write it as an improper (top-heavy) fraction." };
  }
  if (spec.simplest && gcd(f.n, f.d) !== 1) {
    return { status: "close", feedback: "Equivalent — but simplify it fully." };
  }
  if (spec.simplest && p.kind === "mixed" && f.n >= f.d) {
    return { status: "close", feedback: "Equivalent — tidy the mixed number (the fraction part should be less than 1)." };
  }
  return { status: "correct" };
}

function isPrimeInt(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let d = 2; d * d <= n; d++) if (n % d === 0) return false;
  return true;
}

function expandPowerProduct(input: string): number[] | null {
  const s = normalizeInput(input)
    .replace(/^\d+\s*=\s*/, "")
    .replace(/(\d)\s*[xX]\s*(?=\d)/g, "$1*");
  if (s.includes(",") || !/[*^]/.test(s)) return null;
  const out: number[] = [];
  for (const part of s.split("*")) {
    const m = part.trim().match(/^(\d+)(?:\s*\^\s*\(?\s*(\d+)\s*\)?)?$/);
    if (!m) return null;
    const e = m[2] === undefined ? 1 : Number(m[2]);
    if (e < 1 || e > 30) return null;
    for (let i = 0; i < e; i++) out.push(Number(m[1]));
  }
  return out;
}

function checkList(spec: Extract<AnswerSpec, { type: "list" }>, input: string): CheckResult {
  const product = !spec.ordered && spec.values.length > 1 && spec.values.every(isPrimeInt) ? expandPowerProduct(input) : null;
  let got = product ?? extractNumbers(input);
  if (!product && got?.length !== spec.values.length) {
    const alt = extractNumbers(input, true);
    if (alt?.length === spec.values.length) got = alt;
  }
  if (!got) return { status: "invalid", feedback: "Separate your answers with commas, e.g. 28, 35." };
  if (got.length !== spec.values.length) {
    const feedback = `I was expecting ${spec.values.length} value${spec.values.length === 1 ? "" : "s"}.`;
    const pool = [...spec.values];
    const partRight = got.length < spec.values.length && got.every((g) => {
      const i = pool.findIndex((v) => near(g, v, spec.tolerance));
      if (i >= 0) pool.splice(i, 1);
      return i >= 0;
    });
    return { status: partRight ? "close" : "incorrect", feedback };
  }
  if (spec.ordered) {
    const ok = spec.values.every((v, i) => near(got[i], v, spec.tolerance));
    if (ok) return { status: "correct" };
    const reversed = spec.values.every((v, i) => near(got[got.length - 1 - i], v, spec.tolerance));
    if (reversed && spec.values.length === 2) {
      return { status: "incorrect", feedback: "Right numbers, wrong order — check the order the question asks for." };
    }
    return { status: "incorrect" };
  }
  const remaining = [...got];
  for (const v of spec.values) {
    const i = remaining.findIndex((g) => near(g, v, spec.tolerance));
    if (i < 0) return { status: "incorrect" };
    remaining.splice(i, 1);
  }
  return { status: "correct" };
}

function checkRatio(spec: Extract<AnswerSpec, { type: "ratio" }>, input: string): CheckResult {
  const s = normalizeInput(input).replace(/\bto\b/gi, ":");
  const parts = s.split(":").map((x) => parseNumberAnswer(x.trim()));
  if (parts.length < 2 || parts.some((x) => !x)) {
    return { status: "invalid", feedback: "Write a ratio with colons, like 1.5 : 1 or 3 : 4." };
  }
  const got = parts.map((x) => x!.value);
  if (got.length !== spec.parts.length) return { status: "incorrect", feedback: `This ratio has ${spec.parts.length} parts.` };
  const exact = got.every((g, i) => near(g, spec.parts[i]));
  if (exact) return { status: "correct" };
  const k = got[0] / spec.parts[0];
  const proportional = Number.isFinite(k) && k !== 0 && got.every((g, i) => near(g, spec.parts[i] * k, 1e-9 * Math.max(1, Math.abs(g))));
  if (proportional) {
    if (spec.simplest) return { status: "close", feedback: "Equivalent — but simplify it fully." };
    return { status: "correct" };
  }
  const reversed = [...got].reverse();
  if (reversed.every((g, i) => near(g, spec.parts[i]))) {
    return { status: "incorrect", feedback: "Right numbers, wrong order — keep the order the question uses." };
  }
  return { status: "incorrect" };
}

function stripEquation(input: string): string {
  const s = normalizeInput(input);
  if (!s.includes("=")) return s;
  const sides = s.split("=");
  if (sides.length !== 2) return s;
  const [l, r] = sides.map((x) => x.trim());
  if (/^[a-z]$/i.test(l)) return r;
  if (/^[a-z]$/i.test(r)) return l;
  return s;
}

function stripTrailingUnit(input: string, vars: Set<string>): string | null {
  const m = normalizeInput(input).match(/^(.*?\S)\s*(mm|cm|km|m|ml|l|kg|g|units?|degrees|°)(\s*\^?\s*[23])?\.?$/i);
  if (!m) return null;
  for (const ch of m[2].toLowerCase()) if (vars.has(ch)) return null;
  return m[1];
}

function checkExpression(spec: Extract<AnswerSpec, { type: "expression" }>, input: string): CheckResult {
  const expected = parseExpr(stripEquation(spec.expr));
  if (!expected) return { status: "invalid", feedback: "This question's answer couldn't be checked automatically." };
  let got = parseExpr(stripEquation(input));
  if (!got || !exprEquivalent(expected, got)) {
    const unitless = stripTrailingUnit(input, exprVars(expected));
    const retry = unitless === null ? null : parseExpr(stripEquation(unitless));
    if (retry && exprEquivalent(expected, retry)) got = retry;
  }
  if (!got) {
    return { status: "invalid", feedback: "I couldn't read that expression. Use * or nothing for ×, ^ for powers, e.g. 3x^2 + 2(x − 1)." };
  }
  if (!exprEquivalent(expected, got)) return { status: "incorrect" };
  if (/pi/i.test(normalizeInput(spec.expr)) && !/pi/i.test(normalizeInput(input))) {
    return { status: "close", feedback: "Right value — but leave your answer in terms of π (keep π as a symbol)." };
  }
  const form = spec.form ?? "any";
  if (form === "factorised" && !isFactorised(got)) {
    return { status: "close", feedback: "That's equivalent — but it isn't factorised. Take out the common factor into a bracket." };
  }
  if (form === "factorised" && hasCommonFactorInBracket(got) && !hasCommonFactorInBracket(expected)) {
    return { status: "close", feedback: "Equivalent and factorised — but not fully. There's still a common factor inside the bracket." };
  }
  if (form === "expanded" && hasGroup(got)) {
    return { status: "close", feedback: "That's equivalent — now multiply out the brackets." };
  }
  if (form === "simplified") {
    if (hasLooseGroup(got) && !hasGroup(expected)) {
      return { status: "close", feedback: "That's equivalent — now remove the brackets and simplify." };
    }
    if (countTerms(got) > countTerms(expected)) {
      return { status: "close", feedback: "That's equivalent — but collect the like terms to simplify fully." };
    }
  }
  if ((form === "simplified" || form === "expanded") && hasUncombinedTerm(got) && !hasUncombinedTerm(expected)) {
    return { status: "close", feedback: "That's equivalent — now finish each term: multiply or cancel the numbers, and combine powers of the same letter." };
  }
  return { status: "correct" };
}

function checkText(spec: Extract<AnswerSpec, { type: "text" }>, input: string): CheckResult {
  const candidates = spec.display && !spec.accept.includes(spec.display) ? [...spec.accept, spec.display] : spec.accept;
  const n = normText(input);
  if (candidates.some((a) => normText(a) === n)) return { status: "correct" };
  const ns = softPhrase(input);
  if (!ns) return { status: "incorrect" };
  // Guard against phrase-level confusable swaps before softPhrase matching
  for (const a of candidates) {
    if (hasConfusableSwap(a, input)) continue;
    const as = softPhrase(a);
    if (as && as === ns) return { status: "correct" };
  }
  for (const a of spec.accept) {
    if (wordsMatchWithTypo(a, input)) {
      return { status: "correct", feedback: `Accepted — check the spelling: “${a}”.` };
    }
  }
  return { status: "incorrect" };
}

const NO_PLURAL_STRIP = new Set([
  "business", "gross", "loss", "sales", "goods", "ethics", "economics", "logistics",
  "maslow", "kaizen", "focus", "census", "status", "bonus", "surplus", "plus", "bus", "gas", "yes",
  "lagos", "laos", "paris", "wales", "texas",
]);

function stemWord(w: string): string {
  if (w.length < 4 || NO_PLURAL_STRIP.has(w) || /(?:ss|us|is)$/.test(w)) return w;
  if (w.endsWith("ies") && w.length >= 5) return `${w.slice(0, -3)}y`;
  if (w.endsWith("es") && /(?:sh|ch|x|z|o)es$/.test(w)) return w.slice(0, -2);
  if (w.endsWith("s")) return w.slice(0, -1);
  return w;
}

function splitBusWords(s: string): string[] {
  return normalizeInput(s)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[“”"'.,!?;:()/\\–—-]/g, " ")
    .replace(/\b(the|a|an)\b/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function softPhrase(s: string): string {
  return splitBusWords(s).map(stemWord).join("");
}

/**
 * Distinct Edexcel 4BS1 Business terms that share stems or small edit distance
 * and must NEVER be accepted for one another via typo forgiveness.
 */
export const CONFUSABLE_GROUPS: readonly (readonly string[])[] = [
  ["limited", "unlimited"],
  ["revenue", "profit", "turnover"],
  ["gross", "operating", "net"],
  ["markup", "margin", "mark"],
  ["control", "assurance"],
  ["induction", "on", "off", "shadowing"],
  ["description", "specification"],
  ["internal", "external", "international"],
  ["primary", "secondary", "tertiary"],
  ["private", "public"],
  ["ltd", "plc", "llp", "sole", "partnership"],
  ["inflow", "outflow", "inflows", "outflows"],
  ["opening", "closing"],
  ["fixed", "variable", "total", "average", "marginal"],
  ["receivables", "payables", "receivable", "payable"],
  ["debtors", "creditors", "debtor", "creditor"],
  ["assets", "liabilities", "asset", "liability", "equity"],
  ["current", "noncurrent", "acid", "quick"],
  ["import", "export", "imports", "exports", "imported", "exported"],
  ["appreciation", "depreciation", "appreciate", "depreciate"],
  ["spiced", "wpidec"],
  ["tariff", "quota", "tariffs", "quotas", "subsidy", "embargo"],
  ["economies", "diseconomies", "economy", "diseconomy"],
  ["centralised", "decentralised", "centralized", "decentralized"],
  ["autocratic", "democratic", "laissez"],
  ["tall", "flat", "wide", "narrow"],
  ["franchisor", "franchisee"],
  ["employer", "employee", "employers", "employees"],
  ["lessee", "lessor"],
  ["maslow", "herzberg", "taylor"],
  ["hygiene", "motivator", "motivators"],
  ["enlargement", "enrichment", "rotation", "empowerment"],
  ["skimming", "penetration", "predatory", "competitive", "promotional"],
  ["solvent", "insolvent", "solvency", "insolvency"],
  ["quantitative", "qualitative"],
  ["elastic", "inelastic"],
  ["direct", "indirect"],
  ["micro", "macro"],
  ["authority", "responsibility", "accountability"],
  ["job", "batch", "flow", "mass", "cell"],
  ["kaizen", "kanban"],
  ["above", "below"],
  ["fiscal", "monetary"],
  ["inflation", "deflation"],
  ["overdraft", "loan", "mortgage"],
];

function isConfusablePair(w1: string, w2: string): boolean {
  if (w1 === w2) return false;
  return CONFUSABLE_GROUPS.some((g) => g.includes(w1) && g.includes(w2));
}

function hasConfusableSwap(a: string, b: string): boolean {
  const wa = splitBusWords(a);
  const wb = splitBusWords(b);
  for (const x of wa) {
    for (const y of wb) {
      if (isConfusablePair(x, y) || isConfusablePair(stemWord(x), stemWord(y))) return true;
    }
  }
  return false;
}

/**
 * Typo tolerance must never turn one term into its opposite or a confusable term:
 * check word-by-word, requiring identical word count, identical first two letters per word,
 * exact stem match on short words (<6 letters) or words with digits, and not in CONFUSABLE_GROUPS.
 */
function wordsMatchWithTypo(a: string, b: string): boolean {
  if (hasConfusableSwap(a, b)) return false;
  const wa = splitBusWords(a);
  const wb = splitBusWords(b);
  if (wa.length === 0 || wa.length !== wb.length) return false;
  const totalLen = wa.reduce((sum, w) => sum + stemWord(w).length, 0);
  const maxPhraseEdits = totalLen >= 12 ? 2 : 1;
  let totalEdits = 0;
  for (let i = 0; i < wa.length; i++) {
    const sa = stemWord(wa[i]);
    const sb = stemWord(wb[i]);
    if (isConfusablePair(sa, sb) || isConfusablePair(wa[i], wb[i])) return false;
    if (sa === sb) continue;
    if (!/[a-z]/.test(sa) || /\d/.test(sa) || /\d/.test(sb)) return false;
    if (sa.length < 6 || sb.length < 5) return false;
    if (wa[i].slice(0, 2) !== wb[i].slice(0, 2)) return false;
    const maxWordEdits = sa.length >= 12 || (wa.length >= 2 && totalLen >= 12 && sa.length >= 8) ? 2 : 1;
    const d = editDistance(sa, sb);
    if (d > maxWordEdits) return false;
    totalEdits += d;
    if (totalEdits > maxPhraseEdits) return false;
  }
  return totalEdits >= 1;
}

function editDistance(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 2) return 99;
  // Optimal string alignment (Damerau-Levenshtein) so adjacent transpositions ("entreprenuer") count as 1 edit.
  const dp: number[][] = Array.from({ length: a.length + 1 }, () => Array<number>(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
      }
    }
  }
  return dp[a.length][b.length];
}

/** Check an answer, then (if wrong) look for a matching trap to give targeted feedback. */
export function checkWithTraps(spec: AnswerSpec, raw: string, traps?: { spec: AnswerSpec; feedback: string }[]): CheckResult {
  const r = checkAnswer(spec, raw);
  if (r.status !== "incorrect" || !traps?.length) return r;
  for (const t of traps) {
    try {
      if (checkAnswer(t.spec, raw).status === "correct") return { status: "incorrect", feedback: t.feedback };
    } catch {
      /* ignore bad trap */
    }
  }
  return r;
}

/** A canonical typed string that should satisfy the spec (used by validators). */
export function specSample(spec: AnswerSpec): string {
  switch (spec.type) {
    case "number": {
      if (spec.standardForm) {
        const e = Math.floor(Math.log10(Math.abs(spec.value)));
        return `${parseFloat((spec.value / Math.pow(10, e)).toPrecision(12))} x 10^${e}`;
      }
      return String(spec.value);
    }
    case "fraction": {
      const g = gcd(spec.n, spec.d) || 1;
      const n = spec.n / g, d = spec.d / g;
      const neg = n * d < 0 ? "-" : "";
      const an = Math.abs(n), ad = Math.abs(d);
      if (spec.form === "mixed" && an > ad) {
        const w = Math.trunc(an / ad), r = an % ad;
        return `${neg}${w}${r ? ` ${r}/${ad}` : ""}`;
      }
      return `${neg}${an}/${ad}`;
    }
    case "list": return spec.values.join(", ");
    case "ratio": return spec.parts.join(":");
    case "expression": return spec.expr;
    case "text": return spec.accept[0] ?? "";
  }
}

/** Self-check used by tests and the content validator: does the canonical answer pass its own spec? */
export function specSelfCheck(spec: AnswerSpec): CheckResult {
  return checkAnswer(spec, specSample(spec));
}

/**
 * Peel business currencies, ": 1" liquidity suffixes, scale words and units off a typed number:
 * "£12,500" → "12,500"; "1.5 : 1" → "1.5"; "2.4 million" → { num: "2.4", mult: 1e6 }.
 */
export function stripBusUnits(raw: string): { num: string; mult: number } | null {
  let s = normalizeInput(raw).trim();
  const orig = s;
  s = s.replace(/^(?:about|approx\.?|approximately|around|roughly|nearly|almost|~|≈)\s*/i, "");
  // Handle negative sign before currency symbol: "-£1,200" or "−S$500"
  let leadingNeg = "";
  const negCur = s.match(/^([−\-+])\s*(?:gbp|usd|sgd|eur|jpy|inr|s\$|a\$|us\$|hk\$|£|€|¥|₹|\$)\s*(.*)$/i);
  if (negCur) {
    leadingNeg = negCur[1] === "+" ? "" : "-";
    s = negCur[2];
  } else {
    s = s.replace(/^(?:gbp|usd|sgd|eur|jpy|inr|s\$|a\$|us\$|hk\$|£|€|¥|₹|\$)\s*/i, "");
  }
  // Liquidity ratio suffix ": 1" when spec expects a single number (e.g. Current Ratio 1.5 : 1)
  const ratioOne = s.match(/^([−\-+]?\d+(?:\.\d+)?)\s*:\s*1\s*\.?$/);
  if (ratioOne) {
    return { num: `${leadingNeg}${ratioOne[1]}`, mult: 1 };
  }
  let mult = 1;
  const unit = s.match(
    /^([−\-+]?[\d.,\s]*\d(?:\s*\/\s*\d+)?)\s*(thousand|million|billion|bn|m(?=\s|$)|k(?=\s|$))?\s*(?:units?|items?|products?|goods|loaves|cakes?|cupcakes?|bikes?|bicycles?|shirts?|t-shirts?|cups?|mugs?|coffees?|meals?|boxes|packs?|packets?|bottles?| pairs?|tickets?|orders?|bookings?|customers?|clients?|passengers?|visitors?|employees?|workers?|staff|people|managers?|subordinates?|layers?|levels?|shares?|stores?|shops?|branches?|factories|machines?|tonnes?|t|kg|litres?|l)?\s*(?:(?:per|a|an|\/)\s*(?:unit|item|worker|employee|person|hour|hr|day|week|wk|month|year|yr|annum)|p\.?a\.?|percentage\s*points?|%\s*points?|pp|per\s*cent|percent|%|gbp|usd|sgd|eur|pounds?|dollars?|euros?|pence|cents?|years?|yrs?|months?|mos?|weeks?|wks?|days?|hours?|hrs?|minutes?|mins?|times)?\s*\.?$/i,
  );
  if (!unit) return null;
  const word = (unit[2] ?? "").toLowerCase();
  if (word === "thousand" || word === "k") mult = 1e3;
  else if (word === "million" || word === "m") mult = 1e6;
  else if (word === "billion" || word === "bn") mult = 1e9;
  const num = `${leadingNeg}${unit[1].replace(/\s+/g, "")}`;
  if (num === orig.replace(/\s+/g, "")) return null;
  return { num, mult };
}

export const stripGeoUnits = stripBusUnits;
