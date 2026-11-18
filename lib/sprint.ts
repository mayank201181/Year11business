// ---------------------------------------------------------------------------
// 60s Finance & Terms Sprint: quick-fire recall of Edexcel 4BS1 Business
// formulas, ratio calculations, ownership rules and key terminology.
//
// Pure (no React, no registry import) so it can be unit-tested directly by
// Node: callers pass in the drills (ALL_DRILLS in the app).
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "activity" | "people" | "finance" | "marketing" | "operations" | "mixed";
/** A mode tied to one strand (everything except "mixed"). */
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["activity", "people", "finance", "marketing", "operations", "mixed"];

/** Which strand each mode draws from. */
export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  activity: "Activity & External",
  people: "People",
  finance: "Finance",
  marketing: "Marketing",
  operations: "Operations",
};

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

/** Highest drill level used (1 = basics, 2 = core) — sprint items must be quick. */
export const SPRINT_MAX_LEVEL = 2;
/** Generation tier used for every sprint item (friendly numbers, core facts). */
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Two sample prompts (plain text). */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  activity: {
    label: "Activity & External",
    icon: "🏢",
    description: "Objectives, stakeholders, Sole Trader / Ltd / Plc liability, exchange rates (SPICED) & government policy.",
    example: "Does a sole trader have limited or unlimited liability? · Convert £200 at £1 = $1.25",
  },
  people: {
    label: "People in Business",
    icon: "🤝",
    description: "Communication barriers, recruitment documents, training types, Maslow/Herzberg/Taylor & hierarchies.",
    example: "Document listing qualifications & skills needed? · Maslow, Herzberg or Taylor: Two-Factor Theory?",
  },
  finance: {
    label: "Business Finance",
    icon: "💷",
    description: "Sources of finance, net cash flow, contribution, break-even output, GPM, Markup, ROCE & liquidity ratios.",
    example: "FC £4,000, SP £15, VC £5 → break-even output? · GP £30k, Revenue £100k → GPM %?",
  },
  marketing: {
    label: "Marketing",
    icon: "📣",
    description: "Primary vs secondary research, market share %, PED, Boston Matrix, Product Life Cycle & 4Ps pricing.",
    example: "Firm sales £18m in a £90m market → market share %? · High launch price for a new gadget?",
  },
  operations: {
    label: "Operations",
    icon: "⚙️",
    description: "Job, batch & flow production, labour productivity, average unit cost, JIT/Kaizen, economies of scale & TQM.",
    example: "Total cost £24,000 for 3,000 units → unit cost? · Continuous small improvements (Japanese term)?",
  },
  mixed: {
    label: "Mixed 4BS1 Exam Sprint",
    icon: "🎲",
    description: "All 5 Edexcel 4BS1 syllabus sections interleaved — finance calculations + rapid-fire terminology.",
    example: "Formulas, ratios and Grade 9 terms from across Paper 1 & Paper 2",
  },
};

export interface SprintItem {
  /** Identity for repeat-avoidance, retries and the missed list. */
  key: string;
  /** Question shown to the learner (markdown-lite + {{maths}}). */
  prompt: string;
  /** How the answer is checked (lib/answerCheck.ts). */
  answer: AnswerSpec;
  /** The correct answer as display text (may contain {{maths}}). */
  answerText: string;
  /** Predictable wrong answers with targeted feedback (from the drill). */
  traps?: Trap[];
  /** Optional inline SVG from the drill. */
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a sprint score: 1 per 5 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const TOPIC_BY_ID = new Map(TOPIC_META.map((t) => [t.id, t]));

/** The primary strand a topic belongs to (undefined for an unknown topic). */
export function strandOfTopic(topicId: string): Strand | undefined {
  return TOPIC_BY_ID.get(topicId)?.strand;
}

/** Resolve which strand a specific drill belongs to (splits combined topics like marketing-and-operations). */
export function strandOfDrill(drill: Drill): Strand | undefined {
  const meta = TOPIC_BY_ID.get(drill.topicId);
  if (!meta) return undefined;
  if (meta.secondaryStrand) {
    const slug = drill.id.slice(drill.topicId.length + 1);
    if (/^(?:ops|operations|prod|econ|qual|lean|unit-cost|productivity)/i.test(slug)) {
      return meta.secondaryStrand;
    }
  }
  return meta.strand;
}

/** The drills a mode draws from: level 1–2, in the mode's strand ("mixed": any known topic). */
export function sprintPool(mode: SprintMode, drills: readonly Drill[]): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfDrill(d);
    if (!strand) return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

/** Number of drills each mode can draw from (0 = not available yet). */
export function sprintPoolSizes(drills: readonly Drill[]): Record<SprintMode, number> {
  const out = {} as Record<SprintMode, number>;
  for (const m of SPRINT_MODES) out[m] = sprintPool(m, drills).length;
  return out;
}

/** Build a sprint item from one drill, or null if the drill fails or gives an unusable item. */
function itemFrom(drill: Drill, rng: Rng): SprintItem | null {
  try {
    const it = drill.generate(rng, SPRINT_TIER);
    const prompt = typeof it?.prompt === "string" ? it.prompt.trim() : "";
    if (!prompt || !it.answer) return null;
    const answerText = displayAnswer(it.answer);
    if (!answerText) return null;
    return {
      key: `${drill.id}::${prompt}::${answerText}`,
      prompt,
      answer: it.answer,
      answerText,
      traps: it.traps?.length ? it.traps : undefined,
      diagram: it.diagram || undefined,
      drillId: drill.id,
      topicId: drill.topicId,
    };
  } catch {
    return null;
  }
}

/**
 * One quick item from a pool of drills. Topics are picked evenly first, then a drill within it.
 */
export function sprintItem(pool: readonly Drill[], rng: Rng): SprintItem | null {
  if (!pool.length) return null;
  const byTopic = new Map<string, Drill[]>();
  for (const d of pool) {
    const list = byTopic.get(d.topicId);
    if (list) list.push(d);
    else byTopic.set(d.topicId, [d]);
  }
  const topics = [...byTopic.values()];
  let withDiagram: SprintItem | null = null;
  for (let i = 0; i < 12; i++) {
    const drill = rng.pick(rng.pick(topics));
    const item = itemFrom(drill, rng);
    if (!item) continue;
    if (!item.diagram) return item;
    withDiagram ??= item;
  }
  if (withDiagram) return withDiagram;
  for (const d of pool) {
    const item = itemFrom(d, rng);
    if (item) return item;
  }
  return null;
}
