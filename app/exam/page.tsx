import type { Metadata } from "next";
import { getExamPapers, topicSummaries } from "@/lib/server/content";
import { TOPIC_META } from "@/lib/topics/meta";
import { ExamView } from "@/components/ExamView";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Paper 1 & Paper 2 Mock Exams",
  description: "Full Pearson Edexcel IGCSE Business (4BS1) Paper 1 (< 50 staff) and Paper 2 (> 250 staff) mock exams, marked at the end with topic-by-topic diagnostics.",
};

export default function ExamPage() {
  const papers = getExamPapers();
  const topicTitles = Object.fromEntries(TOPIC_META.map((t) => [t.id, t.title]));
  const practiceTopics = topicSummaries()
    .filter((t) => t.ready && t.paperIds.length > 0)
    .map((t) => ({ id: t.id, title: t.title, icon: t.icon }));
  return <ExamView papers={papers} topicTitles={topicTitles} practiceTopics={practiceTopics} />;
}
