// ---------------------------------------------------------------------------
// REFERENCE EXAMPLE for Edexcel 4BS1 Business content authors — NOT imported.
//
//   lib/topics/<id>/guide.ts     → export const guide: TopicGuide
//   lib/topics/<id>/mcq.ts       → export const mcqPapers: Paper[]      (3 papers × 15 MCQs)
//   lib/topics/<id>/practice.ts  → export const practice: TopicPractice (quiz 10, papers p1–p2 × 15, challenge 8–10)
// ---------------------------------------------------------------------------
import type { Paper, TopicGuide, TopicPractice } from "./../types.ts";

export const guide: TopicGuide = {
  id: "example",
  title: "Example Business Topic",
  strand: "Finance",
  icon: "💷",
  summary: "Calculate contribution, break-even output and margin of safety.",
  intro: "Every profitable business starts by knowing how many units it must sell just to cover its fixed costs.",
  guide: [],
  learn: {
    flashcards: [],
    mustKnow: [],
    misconceptions: [],
    examMistakes: [],
    mnemonics: [],
    realWorld: [],
    videos: [],
    formulas: [],
  },
};

export const mcqPapers: Paper[] = [];
export const practice: TopicPractice = { quiz: [], papers: [], challenge: [] };
