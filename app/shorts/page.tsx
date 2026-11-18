import { Suspense } from "react";
import type { Metadata } from "next";
import { ShortsHub } from "@/components/ShortsHub";

export const metadata: Metadata = {
  title: "Concept Shorts — Edexcel 4BS1 Business",
  description: "Bite-sized vertical 9:16 concept Shorts for every topic in Pearson Edexcel IGCSE Business (4BS1).",
};

export default function ShortsPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading Concept Shorts…</p>}>
      <ShortsHub subjectLabel="Edexcel 4BS1 Business" />
    </Suspense>
  );
}
