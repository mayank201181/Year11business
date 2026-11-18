import type { Metadata } from "next";
import { SkillsMap } from "@/components/SkillsMap";
import { TOPICS } from "@/lib/server/content";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Skills & Finance Drills Map",
  description: "Every Pearson Edexcel IGCSE Business (4BS1) calculation, ratio and retrieval skill — from New to Mastered — with one-tap adaptive practice.",
};

export default function SkillsPage() {
  return <SkillsMap readyTopicIds={TOPICS.map((t) => t.id)} />;
}
