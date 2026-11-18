import { Suspense } from "react";
import type { Metadata } from "next";
import { EpisodesHub } from "@/components/EpisodesHub";

export const metadata: Metadata = {
  title: "Sitcom Episodes — Boardroom Bananas: Edexcel 4BS1",
  description: "7 narrated animated sitcom episodes covering every Pearson Edexcel IGCSE Business (4BS1) topic, with Examiner Trap roasts and pause challenges.",
};

export default function EpisodesPage() {
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Loading episodes…</p>}>
      <EpisodesHub />
    </Suspense>
  );
}
