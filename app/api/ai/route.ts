import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { currentAccount } from "@/lib/server/auth";
import { blobConfigured } from "@/lib/server/blob";
import { clientId, throttle, takeDailyAllowance } from "@/lib/server/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const DEFAULT_MODEL = "claude-opus-5-5";
/** Models that accept the server-side refusal fallback ("default" form). */
const FALLBACK_MODELS = new Set(["claude-fable-5-1", "claude-opus-5-5", "claude-opus-5", "claude-sonnet-5-5"]);

const RESTING = "Advisor Sterling needs a rest — try again tomorrow.";
function dailyLimit(name: string, fallback: number): number {
  const n = Math.floor(Number(process.env[name]));
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

// Static (cacheable) system prompt — never interpolate per-request data here.
const SYSTEM = `You are Advisor Sterling, a sharp, warm, encouraging Edexcel IGCSE Business (4BS1 9–1) tutor inside Vanishree's Year 11 Business revision studio (Tanglin Trust School, Singapore).

How you teach (Art of Problem Solving style, adapted for Pearson Edexcel IGCSE Business 4BS1):
- If the learner asks about a question they are working on, do NOT give the full answer straight away. Ask one guiding question or give only the single next hint (e.g. "Check the employee count first — is this a Paper 1 (<50 staff) or Paper 2 (>250 staff) firm?", "Does Gross Profit Margin divide by Revenue or Cost of Sales?"), then stop. Let them do the thinking.
- Only give a complete model answer if they explicitly say they give up, or the context says they have already answered (then explain kindly what earns AO1/AO2/AO3/AO4 marks and what was missing).
- Coach Grade 9 Edexcel 4BS1 exam technique:
  * AO2 Context rule: generic textbook answers ("gets more customers and profit") earn 0 AO2 marks — show how to weave the case study's product, prices, rivals, and numbers into every chain.
  * 3-mark Explain = 1 AO1 + 2 AO3 linked strands (no context needed); 6-mark Analyse = 3 AO2 + 3 AO3; 9-mark Assess = AO2 + AO3 + AO4; 12-mark Evaluate = AO1 + AO2 + AO3 + AO4.
  * Close 9-mark and 12-mark questions with AJIM (Answer + Justify in context + It depends on + Most important factor).
  * Double-check every calculation (Break-Even = FC / (SP − VC), GPM = GP / Revenue × 100, Markup = GP / Cost of Sales × 100, ROCE = Operating Profit / Capital Employed × 100, Acid-Test = (Current Assets − Inventory) / Current Liabilities).

Style:
- Concise: usually 2–6 sentences. British spelling and £ / $ units matching the prompt. Friendly, calm, sharp.
- For calculations you may put fractions inside double curly braces, e.g. {{12000/40}}. You may use **bold** and simple "- " bullet lists. No headings, no LaTeX, no code blocks.

Safety and scope:
- Only help with IGCSE Business, economics/finance concepts, and exam study skills. For anything else, kindly steer back to Business.
- Never ask for or repeat personal information.`;

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

function cleanTurns(raw: unknown): ChatTurn[] {
  if (!Array.isArray(raw)) return [];
  const turns = raw
    .filter((m): m is ChatTurn => !!m && typeof m === "object" && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
    .slice(-10);
  while (turns.length && turns[0].role !== "user") turns.shift();
  const out: ChatTurn[] = [];
  for (const t of turns) {
    if (out.length && out[out.length - 1].role === t.role) out[out.length - 1] = { role: t.role, content: `${out[out.length - 1].content}\n\n${t.content}` };
    else out.push(t);
  }
  return out;
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "Advisor Sterling isn't switched on for this deployment yet — add ANTHROPIC_API_KEY to enable live AI hints." }, { status: 503 });
  }
  const account = await currentAccount().catch(() => null);
  const actor = account ? `acc-${account.id}` : `guest-${clientId(req)}`;
  if (!throttle(`ai:${actor}`, 30, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Advisor Sterling needs a short break — try again in a few minutes." }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const turns = cleanTurns(body.messages);
  if (!turns.length || turns[turns.length - 1].role !== "user") return NextResponse.json({ error: "Ask a question first." }, { status: 400 });
  const context = typeof body.context === "string" ? body.context.slice(0, 4000) : "";

  if (blobConfigured()) {
    try {
      const allowed =
        (await takeDailyAllowance(`ai-${actor}`, dailyLimit("AI_ACCOUNT_DAILY_LIMIT", 100))) && (await takeDailyAllowance("ai-site", dailyLimit("AI_DAILY_LIMIT", 300)));
      if (!allowed) return NextResponse.json({ error: RESTING }, { status: 429 });
    } catch {
      return NextResponse.json({ error: "Advisor Sterling couldn't answer just now. Please try again." }, { status: 503 });
    }
  }

  const messages: Anthropic.Beta.BetaMessageParam[] = turns.map((t, i) => ({
    role: t.role,
    content: i === 0 && context ? `What I'm working on in the app:\n${context}\n\n---\n\n${t.content}` : t.content,
  }));

  const model = process.env.AI_MODEL || DEFAULT_MODEL;
  const client = new Anthropic();
  try {
    const useFallback = FALLBACK_MODELS.has(model);
    const response = await client.beta.messages.create({
      model,
      max_tokens: 2000,
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      output_config: { effort: "low" },
      messages,
      ...(useFallback ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
    });
    if (response.stop_reason === "refusal") {
      return NextResponse.json({ reply: "Let's keep our chat focused on IGCSE Business (4BS1). Which topic or question are you working on?" });
    }
    const reply = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return NextResponse.json({ reply: reply || "I lost my place on the balance sheet — could you ask that again?" });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "Advisor Sterling is busy right now — try again in a minute." }, { status: 429 });
    }
    if (error instanceof Anthropic.APIError) {
      console.error("AI tutor API error", error.status, error.message);
      return NextResponse.json({ error: "Advisor Sterling couldn't answer just now. Please try again." }, { status: 502 });
    }
    console.error("AI tutor error", error);
    return NextResponse.json({ error: "Advisor Sterling couldn't answer just now. Please try again." }, { status: 500 });
  }
}
