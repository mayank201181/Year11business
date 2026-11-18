import type { Metadata } from "next";
import Link from "next/link";
import type { FormulaFact, Topic } from "@/lib/types";
import { TOPICS } from "@/lib/server/content";
import { STRANDS, metaById } from "@/lib/topics/meta";
import { Rich, RichInline } from "@/components/Rich";
import { PrintButton, PrintStyles } from "@/components/Certificate";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Edexcel 4BS1 Finance Formulas & Exam Technique Vault",
  description:
    "Every Pearson Edexcel IGCSE Business (4BS1 9–1) finance formula, ratio, Paper 1 vs Paper 2 context rule, AO1–AO4 command word and Grade 9 mark-saver in one printable vault.",
};

const STRAND_STYLE: Record<string, { text: string; border: string; dot: string }> = {
  "Activity & External": { text: "text-s-number", border: "border-s-number", dot: "bg-s-number" },
  People: { text: "text-s-ratio", border: "border-s-ratio", dot: "bg-s-ratio" },
  Finance: { text: "text-s-algebra", border: "border-s-algebra", dot: "bg-s-algebra" },
  Marketing: { text: "text-s-geometry", border: "border-s-geometry", dot: "bg-s-geometry" },
  Operations: { text: "text-s-stats", border: "border-s-stats", dot: "bg-s-stats" },
};

const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const COMMAND_WORDS = [
  {
    cmd: "State / Define (1–2m)",
    ao: "AO1 ONLY",
    rule: "Give the exact business term or definition — NO case-study context required on pure Define (1m), though State (1m) often asks for one point IN context.",
  },
  {
    cmd: "Outline (2m)",
    ao: "1 AO1 + 1 AO2",
    rule: "State ONE valid point + embed ONE specific detail from the case study (the product, staff count, rival, or figure). Zero context = capped at 1/2!",
  },
  {
    cmd: "Explain (3m)",
    ao: "1 AO1 + 2 AO3 (NO AO2!)",
    rule: "Edexcel 4BS1 quirk: 3-mark 'Explain one advantage/reason...' questions are generic textbook questions! Give 1 point + 2 linked strands ('because... therefore...').",
  },
  {
    cmd: "Calculate (2m)",
    ao: "AO2 Quantitative",
    rule: "Write the formula/working on line 1, then the exact answer to 2 d.p. (if needed) with correct units (£, %, : 1, units). Correct final answer earns 2/2 automatically.",
  },
  {
    cmd: "Analyse (6m)",
    ao: "3 AO2 + 3 AO3",
    rule: "Develop TWO distinct points (or one deeply chained argument) anchored heavily in the business's product, finances, and market — NO evaluation/conclusion needed.",
  },
  {
    cmd: "Assess / Justify (9m)",
    ao: "3 AO2 + 3 AO3 + 3 AO4",
    rule: "Compare Option 1 vs Option 2 (or pros vs cons) IN CONTEXT, then finish with an AJIM judgement: Answer + Justify why one wins + It Depends On + Most important factor.",
  },
  {
    cmd: "Evaluate (12m)",
    ao: "3 AO1 + 3 AO2 + 3 AO3 + 3 AO4",
    rule: "Define the core concept briefly (AO1), build balanced contextual chains on both sides (AO2+AO3), and write a decisive AJIM conclusion weighing short-run vs long-run.",
  },
];

const TOP_MARK_SAVERS = [
  {
    trap: "Writing generic textbook answers ('the business will get more customers and make more profit') on 2/6/9/12-mark case questions.",
    fix: "Swap generic words for the ACTUAL product, price, rivals, and numbers in the stem (e.g. 'repeat orders for artisanal sourdough loaves against supermarket bakeries') to unlock AO2!",
  },
  {
    trap: "Recommending a stock-market IPO / PLC share issue on Paper 1 (Small Business, < 50 staff).",
    fix: "Match finance to firm size! Paper 1 (< 50 staff) = overdraft, trade credit, crowd-funding, bank loan, or Angel/Ltd shares. Reserve PLC share issues & corporate bonds for Paper 2 (> 250 staff).",
  },
  {
    trap: "Confusing Cash with Profit ('high profit means plenty of cash in the bank').",
    fix: "Profit = Revenue − Total Costs (accruals, includes credit sales not yet paid); Cash = actual notes/bank balance today. Rapidly growing profitable firms go insolvent if trade receivables pay in 90 days!",
  },
  {
    trap: "Swapping Gross Profit Margin (GP ÷ Revenue × 100) with Markup (GP ÷ Cost of Sales × 100).",
    fix: "Margin ALWAYS divides by Revenue (sales); Markup divides by Cost of Sales (what the stock cost to buy/make).",
  },
  {
    trap: "Forgetting to subtract Inventory in the Acid-Test (Quick) Ratio.",
    fix: "Acid-Test = (Current Assets − Inventory) ÷ Current Liabilities : 1, because unsold stock is the least liquid current asset and may require discounting to turn into cash.",
  },
  {
    trap: "Saying delegation transfers final responsibility to subordinates.",
    fix: "Delegation passes AUTHORITY to perform a task downward, while ultimate ACCOUNTABILITY / RESPONSIBILITY stays with the manager.",
  },
];

/** A topic's formula list (tolerates a guide still being written without one). */
const formulasOf = (t: Topic): FormulaFact[] => t.learn?.formulas ?? [];

export default function FormulasPage() {
  const groups = STRANDS.map((strand) => ({
    strand,
    topics: TOPICS.filter((t) => (t.strand === strand || metaById(t.id)?.secondaryStrand === strand) && formulasOf(t).length > 0),
  })).filter((g) => g.topics.length > 0);
  const seenTopics = new Set<string>();
  let formulaCount = 0;
  for (const t of TOPICS) {
    if (formulasOf(t).length > 0) {
      seenTopics.add(t.id);
      formulaCount += formulasOf(t).length;
    }
  }
  const topicCount = seenTopics.size;

  return (
    <div className="space-y-6 print:space-y-3">
      <PrintStyles orientation="portrait" margin="12mm" />
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-wider text-brand">Pearson Edexcel IGCSE Business · 4BS1 (9–1)</p>
          <h1 className="mt-0.5 text-2xl font-black tracking-tight sm:text-3xl print:text-xl">Finance Formulas &amp; Grade 9 Exam Technique Vault</h1>
          <p className="mt-1 max-w-3xl text-ink-2 print:hidden">
            Note: Edexcel 4BS1 does <strong>NOT</strong> give you a formula sheet in the exam! Every ratio, break-even equation, Paper 1 vs Paper 2 rule, and command-word blueprint you must memorise is right here.
          </p>
          {formulaCount ? (
            <p className="mt-1 text-sm font-bold text-ink-2 print:text-xs print:font-normal">
              {formulaCount} formulas &amp; definitions across {topicCount} topic{topicCount === 1 ? "" : "s"} · Paper 1 &amp; Paper 2 Exam Blueprint
              <span className="hidden print:inline"> · Year 11 IGCSE Business (4BS1)</span>
            </p>
          ) : null}
        </div>
        <PrintButton label="Print vault" />
      </header>

      {/* Paper 1 vs Paper 2 + Command Words */}
      <section className="grid gap-4 lg:grid-cols-2 print:grid-cols-2" aria-label="Paper 1 vs Paper 2 comparison">
        <article className="card border-l-4 border-brand p-4 sm:p-5 print:p-3">
          <div className="text-xs font-black uppercase tracking-wider text-brand">Paper 1 · 1 hr 30 min · 80 Marks (50%)</div>
          <h2 className="mt-1 text-lg font-extrabold">Investigating Small Business (&lt; 50 Staff)</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-2">
            <li>• <strong>4 compulsory 20-mark scenarios</strong> on start-ups, sole traders, partnerships, franchises &amp; small Ltds (1–49 employees).</li>
            <li>• <strong>Finance &amp; Scale Filter:</strong> Recommend retained profit, overdrafts, trade credit, bank loans, crowd-funding or angel investors — <strong>NEVER</strong> a stock-exchange PLC share issue!</li>
            <li>• <strong>Operations &amp; Marketing Filter:</strong> Niche markets, job/small-batch production, social media &amp; local word-of-mouth, personal customer service, owner-manager span of control.</li>
          </ul>
        </article>
        <article className="card border-l-4 border-info p-4 sm:p-5 print:p-3">
          <div className="text-xs font-black uppercase tracking-wider text-info">Paper 2 · 1 hr 30 min · 80 Marks (50%)</div>
          <h2 className="mt-1 text-lg font-extrabold">Investigating Large Business (&gt; 250 Staff)</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-2">
            <li>• <strong>4 compulsory 20-mark scenarios</strong> on large PLCs, multinational corporations (MNCs) &amp; global brands (&gt; 250 employees).</li>
            <li>• <strong>Finance &amp; Scale Filter:</strong> Share capital (PLC rights/public issues), debentures/corporate bonds, global supply chains, internal economies &amp; diseconomies of scale.</li>
            <li>• <strong>Operations &amp; Global Filter:</strong> Flow automation, JIT/Kaizen/TQM, tariffs/quotas &amp; exchange rates (SPICED), tall vs delayered hierarchies, pressure groups &amp; shareholder dividend pressure.</li>
          </ul>
        </article>
      </section>

      {/* Command words & AJIM */}
      <section className="card p-4 sm:p-5 print:p-3" aria-labelledby="vault-cmd-h">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="vault-cmd-h" className="text-lg font-extrabold">
            🎯 Edexcel 4BS1 Command-Word Marks Blueprint &amp; AJIM Conclusion
          </h2>
          <span className="chip border-0 bg-brand-soft text-xs font-bold text-brand">AO1 27.5% · AO2 38.8% · AO3 22.5% · AO4 11.2%</span>
        </div>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs font-black uppercase tracking-wider text-ink-2">
                <th className="py-2 pr-3">Command Word</th>
                <th className="py-2 pr-3">Assessment Objectives</th>
                <th className="py-2">How to Score Full Marks Every Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {COMMAND_WORDS.map((c) => (
                <tr key={c.cmd} className="align-top">
                  <td className="py-2.5 pr-3 font-extrabold whitespace-nowrap">{c.cmd}</td>
                  <td className="py-2.5 pr-3 font-semibold text-brand whitespace-nowrap">{c.ao}</td>
                  <td className="py-2.5 text-ink-2">{c.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Never Write vs Write Instead */}
      <section className="card p-4 sm:p-5 print:p-3" aria-labelledby="vault-traps-h">
        <h2 id="vault-traps-h" className="text-lg font-extrabold">
          ⚡ Top 6 Grade 9 Marks-Savers: Never Write This ❌ → Write This Instead ✅
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {TOP_MARK_SAVERS.map((m, i) => (
            <div key={i} className="rounded-xl border border-line overflow-hidden">
              <div className="bg-bad-soft px-3.5 py-2.5 text-sm">
                <span className="font-black text-bad">❌ Trap: </span>
                <span className="line-through decoration-bad/50">{m.trap}</span>
              </div>
              <div className="bg-good-soft px-3.5 py-2.5 text-sm">
                <span className="font-black text-good">✅ Grade 9 Fix: </span>
                <span>{m.fix}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {groups.length > 1 ? (
        <nav className="no-print flex flex-wrap gap-2" aria-label="Jump to a strand">
          {groups.map((g) => (
            <a key={g.strand} href={`#strand-${slug(g.strand)}`} className="btn btn-secondary btn-sm min-h-10">
              <span aria-hidden className={`h-2 w-2 rounded-full ${STRAND_STYLE[g.strand]?.dot ?? "bg-brand"}`} />
              {g.strand}
            </a>
          ))}
        </nav>
      ) : null}

      {!groups.length ? (
        <section className="card p-6 text-center sm:p-8">
          <div className="text-4xl" aria-hidden>
            📋
          </div>
          <h2 className="mt-2 text-xl font-extrabold">Topic formulas are loading</h2>
          <p className="mx-auto mt-2 max-w-md text-ink-2">Topic-by-topic formulas and definitions populate automatically from the 7 syllabus guides.</p>
          <Link href="/topics" className="btn btn-primary mt-5">
            Browse topics
          </Link>
        </section>
      ) : (
        groups.map((g) => {
          const st = STRAND_STYLE[g.strand] ?? { text: "text-brand", border: "border-brand", dot: "bg-brand" };
          return (
            <section key={g.strand} id={`strand-${slug(g.strand)}`} className="scroll-mt-20" aria-labelledby={`strand-${slug(g.strand)}-h`}>
              <h2 id={`strand-${slug(g.strand)}-h`} className={`mb-3 flex items-center gap-2 text-lg font-black break-after-avoid print:mb-2 print:text-base ${st.text}`}>
                <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${st.dot}`} />
                {g.strand}
              </h2>
              <div className="gap-4 md:columns-2 print:columns-2 print:gap-5">
                {g.topics.map((t) => (
                  <article
                    key={`${g.strand}-${t.id}`}
                    className={`card mb-4 break-inside-avoid border-l-4 p-4 print:mb-3 print:rounded-lg print:p-2.5 print:text-[10pt] print:shadow-none ${st.border}`}
                    aria-labelledby={`f-${g.strand}-${t.id}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 id={`f-${g.strand}-${t.id}`} className="font-extrabold leading-snug">
                        <span aria-hidden>{t.icon} </span>
                        {t.title}
                      </h3>
                      <Link href={`/topic/${t.id}?tab=revise`} className="no-print -my-2 inline-flex min-h-10 shrink-0 items-center rounded-lg px-2 text-sm font-bold text-brand hover:bg-brand-soft" aria-label={`${t.title} marks-savers`}>
                        Marks-savers →
                      </Link>
                    </div>
                    <dl className="mt-2 divide-y divide-line">
                      {formulasOf(t).map((f, i) => (
                        <div key={`${t.id}-${i}`} className="py-2 first:pt-0 last:pb-0 print:py-1.5">
                          <dt className="text-xs font-extrabold uppercase tracking-wide text-ink-2 print:text-[8pt]">
                            <RichInline text={f.name} />
                          </dt>
                          <dd className="mt-0.5">
                            <Rich text={f.formula} className="text-[1.05rem] font-semibold text-ink print:text-[10.5pt]" />
                            {f.note ? <Rich text={f.note} className="mt-0.5 text-sm text-ink-2 print:text-[8.5pt]" /> : null}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
