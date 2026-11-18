import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "60s Finance & Terms Sprint",
  description: "Quick-fire recall of Edexcel 4BS1 finance calculations, margins, liquidity ratios, break-even and key definitions across all 5 syllabus strands.",
};

export default function SprintPage() {
  return <SprintRunner />;
}
