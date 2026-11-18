import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { WatchHub } from "@/components/WatchHub";

export const metadata: Metadata = {
  title: "Watch — Boardroom Bananas & Interactive Studios",
  description: "7 narrated Boardroom Bananas sitcom episodes, Examiner Trap roasts, 60s Shorts and interactive finance labs for Pearson Edexcel IGCSE Business (4BS1).",
};

export default function WatchPage() {
  const items = TOPICS.map((t, idx) => ({
    id: t.id,
    num: idx + 1,
    title: t.title,
    icon: t.icon,
    strand: t.strand,
    summary: t.summary,
  }));
  return <WatchHub topics={items} />;
}
