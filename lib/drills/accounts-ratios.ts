import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

const round2 = (n: number) => Math.round(n * 100) / 100;
const gbp = (n: number) => (n < 0 ? `−£${Math.abs(n).toLocaleString("en-GB")}` : `£${n.toLocaleString("en-GB")}`);

const FIRMS = [
  "Harbour Roasters",
  "NorthStar Bikes",
  "Luna Candles",
  "Velvet Bean Café",
  "Kestrel Electronics",
  "Bramble Bakery",
  "Apex Packaging",
  "Orchard Foods",
  "Tidal Surfboards",
  "Summit Sportswear",
  "Willow Florist",
  "Cedar Furniture",
] as const;

function safeTraps(real: number, candidates: Array<{ val: number; feedback: string }>, tol = 0.02): Trap[] {
  const seen = new Set<number>();
  const out: Trap[] = [];
  for (const c of candidates) {
    const v = round2(c.val);
    if (!Number.isFinite(v) || Math.abs(v - real) <= tol + 0.02 || seen.has(v)) continue;
    seen.add(v);
    out.push({ spec: { type: "number", value: v, tolerance: tol }, feedback: c.feedback });
  }
  return out;
}

export const drills: Drill[] = [
  {
    id: "accounts-ratios.income-statement",
    topicId: "accounts-ratios",
    title: "Statement of Comprehensive Income: GP, OP & Profit for the Year",
    level: 1,
    guideRef: "income-statement",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const firm = rng.pick(FIRMS);
      const scale = tier === 1 ? 1000 : tier === 2 ? 500 : 250;
      const revUnits = rng.int(120, 480);
      const cosUnits = rng.int(40, Math.floor(revUnits * 0.55));
      const expUnits = rng.int(25, Math.floor((revUnits - cosUnits) * 0.65));
      const rev = revUnits * scale;
      const cos = cosUnits * scale;
      const gp = rev - cos;
      const exp = expUnits * scale;
      const op = gp - exp;

      if (tier === 1) {
        if (rng.bool(0.5)) {
          return {
            prompt: `${firm} earns **Revenue of ${gbp(rev)}**, **Cost of Sales of ${gbp(cos)}**, and **Overhead Expenses of ${gbp(exp)}**. Calculate **Gross Profit** (in £).`,
            answer: { type: "number", value: gp, display: gbp(gp) },
            traps: safeTraps(gp, [
              { val: op, feedback: `${gbp(op)} is Operating Profit! Gross Profit only subtracts Cost of Sales (${gbp(cos)}) from Revenue (${gbp(rev)}).` },
              { val: rev + cos, feedback: "Subtract Cost of Sales from Revenue rather than adding!" },
            ]),
            hint: "Gross Profit = Revenue − Cost of Sales (ignore Overhead Expenses for now).",
            solution: [
              `Gross Profit = Revenue − Cost of Sales = ${gbp(rev)} − ${gbp(cos)} = **${gbp(gp)}**.`,
            ],
          };
        }
        return {
          prompt: `${firm} reports **Revenue of ${gbp(rev)}**, **Cost of Sales of ${gbp(cos)}**, and **Overhead Expenses of ${gbp(exp)}**. Calculate **Operating Profit** (in £).`,
          answer: { type: "number", value: op, display: gbp(op) },
          traps: safeTraps(op, [
            { val: gp, feedback: `${gbp(gp)} is Gross Profit — remember to subtract Overhead Expenses (${gbp(exp)}) to reach Operating Profit!` },
          ]),
          hint: "First find Gross Profit (Revenue − Cost of Sales), then subtract Overhead Expenses.",
          solution: [
            `Gross Profit = ${gbp(rev)} − ${gbp(cos)} = ${gbp(gp)}.`,
            `Operating Profit = ${gbp(gp)} − ${gbp(exp)} = **${gbp(op)}**.`,
          ],
        };
      }

      const finTaxUnits = rng.int(5, Math.max(6, Math.floor(op / scale * 0.35)));
      const finTax = finTaxUnits * scale;
      const netProfit = op - finTax;

      if (tier === 2) {
        return {
          prompt: `${firm} Ltd reports **Revenue of ${gbp(rev)}**, **Cost of Sales of ${gbp(cos)}**, **Expenses of ${gbp(exp)}**, and **Finance Costs plus Tax of ${gbp(finTax)}**. Calculate **Profit for the Year** (in £).`,
          answer: { type: "number", value: netProfit, display: gbp(netProfit) },
          traps: safeTraps(netProfit, [
            { val: op, feedback: `${gbp(op)} is Operating Profit — subtract Finance Costs plus Tax (${gbp(finTax)}) to get Profit for the Year!` },
            { val: gp, feedback: `${gbp(gp)} is Gross Profit — continue down the ladder through Expenses and Finance Costs/Tax.` },
          ]),
          hint: "Walk down the ladder: Revenue − Cost of Sales − Expenses − Finance Costs & Tax.",
          solution: [
            `Gross Profit = ${gbp(rev)} − ${gbp(cos)} = ${gbp(gp)}.`,
            `Operating Profit = ${gbp(gp)} − ${gbp(exp)} = ${gbp(op)}.`,
            `Profit for the Year = ${gbp(op)} − ${gbp(finTax)} = **${gbp(netProfit)}**.`,
          ],
        };
      }

      if (rng.bool(0.5)) {
        const divUnits = rng.int(4, Math.max(5, Math.floor((netProfit / scale) * 0.5)));
        const div = divUnits * scale;
        const retained = netProfit - div;
        return {
          prompt: `${firm} Ltd earns **Revenue of ${gbp(rev)}**, **Cost of Sales of ${gbp(cos)}**, **Expenses of ${gbp(exp)}**, **Interest & Tax of ${gbp(finTax)}**, and pays **${gbp(div)} in Dividends**. Calculate **Retained Profit** (in £).`,
          answer: { type: "number", value: retained, display: gbp(retained) },
          traps: safeTraps(retained, [
            { val: netProfit, feedback: `${gbp(netProfit)} is Profit for the Year — subtract Dividends (${gbp(div)}) to isolate Retained Profit!` },
            { val: op, feedback: `${gbp(op)} is Operating Profit — still deduct Interest & Tax (${gbp(finTax)}) and Dividends (${gbp(div)}).` },
          ]),
          hint: "Find Profit for the Year first, then subtract Dividends.",
          solution: [
            `Gross Profit = ${gbp(rev)} − ${gbp(cos)} = ${gbp(gp)}; Operating Profit = ${gbp(gp)} − ${gbp(exp)} = ${gbp(op)}.`,
            `Profit for the Year = ${gbp(op)} − ${gbp(finTax)} = ${gbp(netProfit)}.`,
            `Retained Profit = ${gbp(netProfit)} − ${gbp(div)} = **${gbp(retained)}**.`,
          ],
        };
      }

      return {
        prompt: `In an incomplete Income Statement for ${firm} Ltd, **Revenue is ${gbp(rev)}**, **Overhead Expenses are ${gbp(exp)}**, and **Operating Profit is ${gbp(op)}**. Work backwards to find **Cost of Sales** (in £).`,
        answer: { type: "number", value: cos, display: gbp(cos) },
        traps: safeTraps(cos, [
          { val: gp, feedback: `${gbp(gp)} is Gross Profit (${gbp(op)} + ${gbp(exp)})! Subtract Gross Profit from Revenue (${gbp(rev)}) to find Cost of Sales.` },
        ]),
        hint: "Add Overhead Expenses back to Operating Profit to get Gross Profit, then subtract from Revenue.",
        solution: [
          `Gross Profit = Operating Profit + Expenses = ${gbp(op)} + ${gbp(exp)} = ${gbp(gp)}.`,
          `Cost of Sales = Revenue − Gross Profit = ${gbp(rev)} − ${gbp(gp)} = **${gbp(cos)}**.`,
        ],
      };
    },
  },
  {
    id: "accounts-ratios.balance-sheet",
    topicId: "accounts-ratios",
    title: "Statement of Financial Position: Working Capital, Net Assets & Capital Employed",
    level: 1,
    guideRef: "financial-position",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const firm = rng.pick(FIRMS);
      const nca = rng.int(180, 650) * 1000;
      const inv = rng.int(20, 90) * 1000;
      const rec = rng.int(15, 70) * 1000;
      const cash = rng.int(10, 50) * 1000;
      const ca = inv + rec + cash;
      const cl = rng.int(30, 140) * 1000;
      const ncl = rng.int(60, 260) * 1000;
      const wc = ca - cl;
      const netAssets = nca + wc - ncl;
      const capEmp = netAssets + ncl; // = nca + ca - cl

      if (tier === 1) {
        return {
          prompt: `${firm} holds **Current Assets of ${gbp(ca)}** and **Current Liabilities of ${gbp(cl)}** (plus Non-Current Assets of ${gbp(nca)}). Calculate **Working Capital** (in £).`,
          answer: { type: "number", value: wc, display: gbp(wc) },
          traps: safeTraps(wc, [
            { val: ca + cl, feedback: "Subtract Current Liabilities from Current Assets (`CA − CL`), do not add!" },
            { val: nca + wc, feedback: "Ignore Non-Current Assets — Working Capital is strictly `Current Assets − Current Liabilities`." },
          ]),
          hint: "Working Capital (Net Current Assets) = Current Assets − Current Liabilities.",
          solution: [
            `Working Capital = ${gbp(ca)} − ${gbp(cl)} = **${gbp(wc)}**.`,
          ],
        };
      }

      if (tier === 2) {
        return {
          prompt: `${firm} Ltd has **Total Equity of ${gbp(netAssets)}**, **Non-Current Liabilities of ${gbp(ncl)}**, and **Current Liabilities of ${gbp(cl)}**. Calculate **Capital Employed** (in £).`,
          answer: { type: "number", value: capEmp, display: gbp(capEmp) },
          traps: safeTraps(capEmp, [
            { val: capEmp + cl, feedback: `Do NOT include Current Liabilities (${gbp(cl)})! Capital Employed = Total Equity + Non-Current Liabilities only.` },
            { val: netAssets - ncl, feedback: "Add Non-Current Liabilities onto Total Equity to find total long-term funds invested." },
          ]),
          hint: "Capital Employed = Total Equity + Non-Current Liabilities (exclude short-term Current Liabilities!).",
          solution: [
            `Capital Employed = ${gbp(netAssets)} + ${gbp(ncl)} = **${gbp(capEmp)}**.`,
          ],
        };
      }

      return {
        prompt: `${firm} Ltd holds **Non-Current Assets of ${gbp(nca)}**, **Inventory of ${gbp(inv)}**, **Receivables of ${gbp(rec)}**, and **Cash of ${gbp(cash)}**. It owes **Current Liabilities of ${gbp(cl)}** and **Non-Current Liabilities of ${gbp(ncl)}**. Calculate **Net Assets** (in £).`,
        answer: { type: "number", value: netAssets, display: gbp(netAssets) },
        traps: safeTraps(netAssets, [
          { val: capEmp, feedback: `${gbp(capEmp)} is Capital Employed — remember to subtract Non-Current Liabilities (${gbp(ncl)}) too!` },
          { val: nca + ca + cl + ncl, feedback: "Net Assets = Total Assets − Total Liabilities." },
        ]),
        hint: "Sum all Assets (Non-Current + Inventory + Receivables + Cash) and subtract all Liabilities (Current + Non-Current).",
        solution: [
          `Total Assets = ${gbp(nca)} + ${gbp(inv)} + ${gbp(rec)} + ${gbp(cash)} = ${gbp(nca + ca)}.`,
          `Total Liabilities = ${gbp(cl)} + ${gbp(ncl)} = ${gbp(cl + ncl)}.`,
          `Net Assets = ${gbp(nca + ca)} − ${gbp(cl + ncl)} = **${gbp(netAssets)}**.`,
        ],
      };
    },
  },
  {
    id: "accounts-ratios.margin-vs-markup",
    topicId: "accounts-ratios",
    title: "Profitability Ratios: GPM %, OPM % & Markup %",
    level: 2,
    guideRef: "profitability-ratios",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const firm = rng.pick(FIRMS);

      if (tier === 1) {
        const rev = rng.pick([100, 120, 150, 160, 200, 240, 250, 300, 400, 500]) * 1000;
        const gpmPct = rng.pick([20, 25, 30, 35, 40, 45, 50, 60]);
        const gp = (rev * gpmPct) / 100;
        const cos = rev - gp;
        const markup = round2((gp / cos) * 100);
        if (rng.bool(0.55)) {
          return {
            prompt: `${firm} earns **Revenue of ${gbp(rev)}** with **Cost of Sales of ${gbp(cos)}**. Calculate its **Gross Profit Margin** (as a %).`,
            answer: { type: "number", value: gpmPct, display: `${gpmPct}%` },
            traps: safeTraps(gpmPct, [
              { val: markup, feedback: `${markup}% is the Markup (GP ÷ Cost of Sales)! Gross Profit Margin divides Gross Profit by Revenue (${gbp(rev)}).` },
              { val: 100 - gpmPct, feedback: `${100 - gpmPct}% is Cost of Sales ÷ Revenue — find Gross Profit (${gbp(gp)}) first!` },
            ]),
            hint: "Find Gross Profit (Revenue − Cost of Sales), divide by Revenue, and multiply by 100.",
            solution: [
              `Gross Profit = ${gbp(rev)} − ${gbp(cos)} = ${gbp(gp)}.`,
              `GPM = (${gbp(gp)} ÷ ${gbp(rev)}) × 100 = **${gpmPct}%**.`,
            ],
          };
        }
        const costBase = rng.pick([8, 10, 12, 15, 16, 20, 24, 25, 40, 50, 80]);
        const mkPct = rng.pick([25, 40, 50, 60, 75, 80, 100, 125, 150]);
        const unitGp = round2((costBase * mkPct) / 100);
        const price = round2(costBase + unitGp);
        const gpmTrap = round2((unitGp / price) * 100);
        return {
          prompt: `${firm} buys an item for **£${costBase}** (Cost of Sales) and sells it for **£${price}** (Revenue). Calculate the **Markup** percentage.`,
          answer: { type: "number", value: mkPct, display: `${mkPct}%` },
          traps: safeTraps(mkPct, [
            { val: gpmTrap, feedback: `${gpmTrap}% is the Gross Profit Margin (GP ÷ Selling Price)! Markup divides Gross Profit (£${unitGp}) by Cost of Sales (£${costBase}).` },
          ]),
          hint: "Markup = (Gross Profit ÷ Cost of Sales) × 100 — divide by buying cost, NOT selling price!",
          solution: [
            `Gross Profit = £${price} − £${costBase} = £${unitGp}.`,
            `Markup = (£${unitGp} ÷ £${costBase}) × 100 = **${mkPct}%**.`,
          ],
        };
      }

      const rev = rng.int(18, 75) * 10000;
      const cos = rng.int(7, Math.floor((rev / 10000) * 0.58)) * 10000;
      const gp = rev - cos;
      const exp = rng.int(3, Math.max(4, Math.floor((gp / 10000) * 0.65))) * 10000;
      const op = gp - exp;
      const gpm = round2((gp / rev) * 100);
      const opm = round2((op / rev) * 100);
      const markup = round2((gp / cos) * 100);

      if (tier === 2) {
        if (rng.bool(0.5)) {
          return {
            prompt: `${firm} Ltd reports **Revenue of ${gbp(rev)}**, **Cost of Sales of ${gbp(cos)}**, and **Overhead Expenses of ${gbp(exp)}**. Calculate its **Operating Profit Margin** to **2 decimal places** (as a %).`,
            answer: { type: "number", value: opm, tolerance: 0.02, display: `${opm}%` },
            traps: safeTraps(opm, [
              { val: gpm, feedback: `${gpm}% is the Gross Profit Margin! Subtract Overhead Expenses (${gbp(exp)}) before dividing by Revenue.` },
            ]),
            hint: "Operating Profit = Revenue − Cost of Sales − Expenses; then divide by Revenue × 100.",
            solution: [
              `Gross Profit = ${gbp(rev)} − ${gbp(cos)} = ${gbp(gp)}.`,
              `Operating Profit = ${gbp(gp)} − ${gbp(exp)} = ${gbp(op)}.`,
              `OPM = (${gbp(op)} ÷ ${gbp(rev)}) × 100 = **${opm}%** (to 2 d.p.).`,
            ],
          };
        }
        return {
          prompt: `${firm} Ltd earns **Revenue of ${gbp(rev)}** and incurs **Cost of Sales of ${gbp(cos)}**. Calculate its **Markup** percentage to **2 decimal places**.`,
          answer: { type: "number", value: markup, tolerance: 0.02, display: `${markup}%` },
          traps: safeTraps(markup, [
            { val: gpm, feedback: `${gpm}% is the Gross Profit Margin (dividing by Revenue)! For Markup, divide Gross Profit (${gbp(gp)}) by Cost of Sales (${gbp(cos)}).` },
          ]),
          hint: "Markup = ((Revenue − Cost of Sales) ÷ Cost of Sales) × 100.",
          solution: [
            `Gross Profit = ${gbp(rev)} − ${gbp(cos)} = ${gbp(gp)}.`,
            `Markup = (${gbp(gp)} ÷ ${gbp(cos)}) × 100 = **${markup}%** (to 2 d.p.).`,
          ],
        };
      }

      // Tier 3: Convert Markup % to GPM % or reverse GPM + OPM to Expenses
      const mkChoice = rng.pick([25, 30, 40, 50, 60, 75, 80, 100, 120, 150]);
      if (rng.bool(0.45)) {
        const unitCost = rng.int(12, 95);
        const derivedGpm = round2((mkChoice / (100 + mkChoice)) * 100);
        return {
          prompt: `${firm} prices a product costing **£${unitCost}** using a **Markup of ${mkChoice}%**. Calculate the resulting **Gross Profit Margin** to **2 decimal places** (as a %).`,
          answer: { type: "number", value: derivedGpm, tolerance: 0.02, display: `${derivedGpm}%` },
          traps: safeTraps(derivedGpm, [
            { val: mkChoice, feedback: `${mkChoice}% is the Markup on Cost! Selling Price is £${round2(unitCost * (1 + mkChoice / 100))}, so divide Gross Profit by Selling Price.` },
          ]),
          hint: "Find Gross Profit (`Markup% × Cost`) and Selling Price (`Cost + GP`), then compute `(GP ÷ Selling Price) × 100`.",
          solution: [
            `Gross Profit = ${mkChoice}% of £${unitCost} = £${round2((unitCost * mkChoice) / 100)}.`,
            `Selling Price = £${unitCost} + £${round2((unitCost * mkChoice) / 100)} = £${round2(unitCost * (1 + mkChoice / 100))}.`,
            `GPM = (${mkChoice} ÷ ${100 + mkChoice}) × 100 = **${derivedGpm}%** (to 2 d.p.).`,
          ],
        };
      }
      const cleanRev = rng.int(20, 90) * 10000;
      const gPct = rng.pick([38, 42, 45, 48, 52, 55, 60]);
      const oPct = rng.pick([11, 14, 16, 18, 21, 24]);
      const expenses = Math.round((cleanRev * (gPct - oPct)) / 100);
      return {
        prompt: `${firm} Plc achieved **Revenue of ${gbp(cleanRev)}**, a **Gross Profit Margin of ${gPct}%**, and an **Operating Profit Margin of ${oPct}%**. Calculate its **Overhead Expenses** (in £).`,
        answer: { type: "number", value: expenses, display: gbp(expenses) },
        traps: safeTraps(expenses, [
          { val: Math.round((cleanRev * gPct) / 100), feedback: "That is Gross Profit! Subtract Operating Profit to isolate Overhead Expenses." },
          { val: Math.round((cleanRev * oPct) / 100), feedback: "That is Operating Profit! Overhead Expenses = Gross Profit − Operating Profit." },
        ]),
        hint: "Expenses equal `(GPM% − OPM%) × Revenue`.",
        solution: [
          `Gross Profit = ${gPct}% × ${gbp(cleanRev)} = ${gbp(Math.round((cleanRev * gPct) / 100))}.`,
          `Operating Profit = ${oPct}% × ${gbp(cleanRev)} = ${gbp(Math.round((cleanRev * oPct) / 100))}.`,
          `Overhead Expenses = ${gPct - oPct}% × ${gbp(cleanRev)} = **${gbp(expenses)}**.`,
        ],
      };
    },
  },
  {
    id: "accounts-ratios.liquidity-ratios",
    topicId: "accounts-ratios",
    title: "Liquidity Stress-Tester: Current Ratio & Acid-Test Ratio",
    level: 2,
    guideRef: "liquidity-ratios",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const firm = rng.pick(FIRMS);

      if (tier === 1) {
        const cl = rng.pick([20, 25, 40, 50, 80, 100, 120, 200]) * 1000;
        const mult = rng.pick([0.6, 0.75, 0.8, 0.9, 1.1, 1.2, 1.25, 1.4, 1.5, 1.6, 1.75, 1.8, 2.0, 2.2]);
        const inv = rng.int(10, 65) * 1000;
        if (rng.bool(0.5)) {
          const ca = Math.round(cl * mult);
          const acidTrap = round2((ca - Math.min(inv, ca - 5000)) / cl);
          return {
            prompt: `${firm} holds **Current Assets of ${gbp(ca)}** and **Current Liabilities of ${gbp(cl)}**. Calculate its **Current Ratio** (as a decimal to 2 d.p., or as X : 1).`,
            answer: { type: "number", value: mult, tolerance: 0.01, display: `${mult} : 1` },
            traps: safeTraps(mult, [
              { val: round2(cl / ca), feedback: "Upside down! Divide Current Assets by Current Liabilities (`CA ÷ CL`)." },
              { val: acidTrap, feedback: "Do not subtract Inventory when calculating the Current Ratio!" },
            ], 0.01),
            hint: "Current Ratio = Current Assets ÷ Current Liabilities.",
            solution: [
              `Current Ratio = ${gbp(ca)} ÷ ${gbp(cl)} = **${mult} : 1**.`,
            ],
          };
        }
        const liquid = Math.round(cl * mult);
        const ca = liquid + inv;
        const crTrap = round2(ca / cl);
        return {
          prompt: `${firm} has **Current Assets of ${gbp(ca)}** (including **Inventory of ${gbp(inv)}**) and **Current Liabilities of ${gbp(cl)}**. Calculate its **Acid-Test Ratio** (as a decimal to 2 d.p., or as X : 1).`,
          answer: { type: "number", value: mult, tolerance: 0.01, display: `${mult} : 1` },
          traps: safeTraps(mult, [
            { val: crTrap, feedback: `${crTrap} : 1 is the Current Ratio! Subtract Inventory (${gbp(inv)}) from Current Assets (${gbp(ca)}) first.` },
          ], 0.01),
          hint: "Acid-Test Ratio = (Current Assets − Inventory) ÷ Current Liabilities.",
          solution: [
            `Liquid Assets = ${gbp(ca)} − ${gbp(inv)} = ${gbp(liquid)}.`,
            `Acid-Test Ratio = ${gbp(liquid)} ÷ ${gbp(cl)} = **${mult} : 1**.`,
          ],
        };
      }

      const cl = rng.int(35, 160) * 1000;
      const inv = rng.int(25, 110) * 1000;
      const rec = rng.int(15, 75) * 1000;
      const cash = rng.int(8, 55) * 1000;
      const ca = inv + rec + cash;
      const cr = round2(ca / cl);
      const at = round2((rec + cash) / cl);

      if (tier === 2) {
        return {
          prompt: `${firm} Ltd holds **Inventory of ${gbp(inv)}**, **Trade Receivables of ${gbp(rec)}**, and **Cash of ${gbp(cash)}**. Its **Current Liabilities are ${gbp(cl)}**. Calculate its **Acid-Test Ratio** to **2 decimal places** (or as X : 1).`,
          answer: { type: "number", value: at, tolerance: 0.01, display: `${at} : 1` },
          traps: safeTraps(at, [
            { val: cr, feedback: `${cr} : 1 is the Current Ratio! Exclude Inventory (${gbp(inv)}) so only Receivables + Cash remain in the numerator.` },
            { val: round2((rec + cash - inv) / cl), feedback: "Do NOT subtract Inventory from (Receivables + Cash) — Inventory was already listed separately!" },
          ], 0.01),
          hint: "When individual items are listed, Acid-Test numerator is simply `Trade Receivables + Cash`!",
          solution: [
            `Liquid Assets = Trade Receivables (${gbp(rec)}) + Cash (${gbp(cash)}) = ${gbp(rec + cash)}.`,
            `Acid-Test Ratio = ${gbp(rec + cash)} ÷ ${gbp(cl)} = **${at} : 1** (to 2 d.p.).`,
          ],
        };
      }

      // Tier 3: Find missing Inventory from Current Ratio and Acid-Test Ratio
      const cleanCl = rng.int(12, 60) * 10000;
      const crClean = round2(rng.int(14, 26) / 10);
      const atClean = round2(rng.int(4, 12) / 10);
      const totalCa = Math.round(cleanCl * crClean);
      const totalLiq = Math.round(cleanCl * atClean);
      const missingInv = totalCa - totalLiq;
      return {
        prompt: `${firm} Plc has **Current Liabilities of ${gbp(cleanCl)}**, a **Current Ratio of ${crClean} : 1**, and an **Acid-Test Ratio of ${atClean} : 1**. Calculate the exact value of its **Inventory** (in £).`,
        answer: { type: "number", value: missingInv, display: gbp(missingInv) },
        traps: safeTraps(missingInv, [
          { val: totalCa, feedback: `${gbp(totalCa)} is Total Current Assets — subtract Liquid Assets (${gbp(totalLiq)}) to isolate Inventory!` },
          { val: totalLiq, feedback: `${gbp(totalLiq)} is Liquid Assets (Receivables + Cash) — subtract it from Current Assets (${gbp(totalCa)})!` },
        ]),
        hint: "Inventory = `(Current Ratio − Acid-Test Ratio) × Current Liabilities`.",
        solution: [
          `Current Assets = ${crClean} × ${gbp(cleanCl)} = ${gbp(totalCa)}.`,
          `Liquid Assets = ${atClean} × ${gbp(cleanCl)} = ${gbp(totalLiq)}.`,
          `Inventory = ${gbp(totalCa)} − ${gbp(totalLiq)} = **${gbp(missingInv)}**.`,
        ],
      };
    },
  },
  {
    id: "accounts-ratios.roce-synoptic",
    topicId: "accounts-ratios",
    title: "Return on Capital Employed (ROCE) Multi-Step Bridge",
    level: 3,
    guideRef: "roce-performance",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const firm = rng.pick(FIRMS);

      if (tier === 1) {
        const capEmp = rng.pick([200, 250, 300, 400, 500, 600, 800, 1000]) * 1000;
        const roce = rng.pick([8, 10, 12, 14, 15, 16, 18, 20, 22, 25]);
        const op = Math.round((capEmp * roce) / 100);
        const rev = op * rng.int(5, 10);
        return {
          prompt: `${firm} Ltd earns **Operating Profit of ${gbp(op)}** (on Revenue of ${gbp(rev)}) using **Capital Employed of ${gbp(capEmp)}**. Calculate **ROCE** (as a %).`,
          answer: { type: "number", value: roce, display: `${roce}%` },
          traps: safeTraps(roce, [
            { val: round2((op / rev) * 100), feedback: "You divided by Revenue (giving OPM)! ROCE divides Operating Profit by Capital Employed." },
          ]),
          hint: "ROCE = (Operating Profit ÷ Capital Employed) × 100 — ignore Revenue!",
          solution: [
            `ROCE = (${gbp(op)} ÷ ${gbp(capEmp)}) × 100 = **${roce}%**.`,
          ],
        };
      }

      if (tier === 2) {
        const equity = rng.int(22, 65) * 10000;
        const ncl = rng.int(10, 35) * 10000;
        const capEmp = equity + ncl;
        const gp = rng.int(18, 42) * 10000;
        const exp = rng.int(6, Math.floor((gp / 10000) * 0.6)) * 10000;
        const op = gp - exp;
        const roce = round2((op / capEmp) * 100);
        return {
          prompt: `${firm} Ltd reports **Gross Profit of ${gbp(gp)}** and **Overhead Expenses of ${gbp(exp)}**. On its Balance Sheet, **Total Equity is ${gbp(equity)}** and **Non-Current Liabilities are ${gbp(ncl)}**. Calculate **ROCE** to **2 decimal places** (as a %).`,
          answer: { type: "number", value: roce, tolerance: 0.02, display: `${roce}%` },
          traps: safeTraps(roce, [
            { val: round2((gp / capEmp) * 100), feedback: "Use Operating Profit (`Gross Profit − Expenses`), NOT Gross Profit, in the numerator!" },
            { val: round2((op / equity) * 100), feedback: "Include Non-Current Liabilities inside Capital Employed (`Equity + Non-Current Liabilities`)!" },
          ]),
          hint: "Find Operating Profit (`GP − Expenses`) and Capital Employed (`Equity + Non-Current Liabilities`), then divide × 100.",
          solution: [
            `Operating Profit = ${gbp(gp)} − ${gbp(exp)} = ${gbp(op)}.`,
            `Capital Employed = ${gbp(equity)} + ${gbp(ncl)} = ${gbp(capEmp)}.`,
            `ROCE = (${gbp(op)} ÷ ${gbp(capEmp)}) × 100 = **${roce}%** (to 2 d.p.).`,
          ],
        };
      }

      const totalAssets = rng.int(90, 260) * 10000;
      const cl = rng.int(15, 45) * 10000;
      const capEmp = totalAssets - cl;
      const rocePct = rng.pick([10, 12, 14, 15, 16, 18, 20]);
      const op = Math.round((capEmp * rocePct) / 100);
      return {
        prompt: `${firm} Plc holds **Total Assets of ${gbp(totalAssets)}**, **Current Liabilities of ${gbp(cl)}**, and achieved a **ROCE of ${rocePct}%**. Calculate its **Operating Profit** (in £).`,
        answer: { type: "number", value: op, display: gbp(op) },
        traps: safeTraps(op, [
          { val: Math.round((totalAssets * rocePct) / 100), feedback: `Subtract Current Liabilities (${gbp(cl)}) from Total Assets (${gbp(totalAssets)}) first to get Capital Employed!` },
        ]),
        hint: "Capital Employed = Total Assets − Current Liabilities; then multiply by ROCE%.",
        solution: [
          `Capital Employed = ${gbp(totalAssets)} − ${gbp(cl)} = ${gbp(capEmp)}.`,
          `Operating Profit = ${rocePct}% × ${gbp(capEmp)} = **${gbp(op)}**.`,
        ],
      };
    },
  },
];
