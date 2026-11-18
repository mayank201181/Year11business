import { Suspense } from "react";
import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { buildTopicCramPack } from "@/lib/cram";
import { CramSheet } from "@/components/CramSheet";

export const metadata: Metadata = {
  title: "Exam Cram Sheet — Edexcel 4BS1 Business",
  description:
    "Select any 1, 3, or 4 Edexcel IGCSE Business (4BS1) topics in your test for an instant printable Exam Cram & Grade 9 Mark-Savers Sheet.",
};

export default function CramPage() {
  const packs = TOPICS.map(buildTopicCramPack);
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Building Exam Cram Sheet…</p>}>
      <CramSheet packs={packs} subjectLabel="Edexcel 4BS1 Business" />
    </Suspense>
  );
}
