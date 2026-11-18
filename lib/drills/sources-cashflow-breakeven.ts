import type { Drill, Rng } from "./types.ts";

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function nonEqualTraps(
  ans: number,
  candidates: { val: number; feedback: string; tolerance?: number }[],
) {
  const out = candidates
    .filter((c) => Math.abs(c.val - ans) > 1e-6)
    .map((c) => ({
      spec: { type: "number" as const, value: c.val, ...(c.tolerance ? { tolerance: c.tolerance } : {}) },
      feedback: c.feedback,
    }));
  return out.length ? out : undefined;
}

const FIRMS = [
  "Harbour Gelato",
  "Coastline Kayaks",
  "VoltCycle Ltd",
  "KokoBean Chocolates",
  "Peak Climbing Gym",
  "Urban Backpack Co",
  "PureGlow Skincare",
  "AlpineSki PLC",
  "Tideway Surfboards",
  "SolarWash Ltd",
] as const;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
] as const;

const ITEMS = [
  "backpacks",
  "smoothies",
  "kettles",
  "candles",
  "skateboards",
  "planters",
  "water bottles",
  "coffee bags",
] as const;

function fmtBracket(n: number): string {
  return n < 0 ? `(${Math.abs(n).toLocaleString("en-GB")})` : n.toLocaleString("en-GB");
}

export const drills: Drill[] = [
  {
    id: "sources-cashflow-breakeven.finance-costs",
    topicId: "sources-cashflow-breakeven",
    title: "Loan Interest, Hire Purchase & Debt Factoring Costs",
    level: 1,
    guideRef: "internal-external-finance",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(FIRMS);

      if (tier === 1) {
        // Debt factoring immediate cash received
        const invoice = rng.int(12, 65) * 1000;
        const feePct = rng.pick([8, 10, 12, 15]);
        const advPct = 100 - feePct;
        const cashReceived = (invoice * advPct) / 100;
        const fee = invoice - cashReceived;
        return {
          prompt: `**${firm}** sells **£${invoice.toLocaleString("en-GB")}** of unpaid customer invoices to a **debt factoring** company that advances **${advPct}%** immediately (retaining a ${feePct}% fee). Calculate the **immediate cash received** in £.`,
          answer: {
            type: "number",
            value: cashReceived,
            display: `£${cashReceived.toLocaleString("en-GB")}`,
          },
          hint: `Multiply £${invoice.toLocaleString("en-GB")} by ${advPct}% (0.${advPct}).`,
          solution: [
            `Immediate cash = {{${invoice} * ${advPct / 100} = ${cashReceived}}} (**£${cashReceived.toLocaleString("en-GB")}**).`,
          ],
          traps: [
            {
              spec: { type: "number", value: fee },
              feedback: `£${fee.toLocaleString("en-GB")} is the ${feePct}% factoring fee — subtract it from £${invoice.toLocaleString("en-GB")} for the cash received!`,
            },
          ],
        };
      }

      if (tier === 2) {
        // Hire purchase total cost or finance charge
        const cashPrice = rng.int(8, 35) * 1000;
        const depPct = rng.pick([10, 15, 20, 25]);
        const deposit = (cashPrice * depPct) / 100;
        const months = rng.pick([24, 36, 48]);
        const minMonthly = Math.ceil(((cashPrice - deposit) * 1.08) / months / 5) * 5;
        const monthly = minMonthly + rng.int(1, 6) * 5;
        const totalHP = deposit + months * monthly;
        const extraCharge = totalHP - cashPrice;
        const askExtra = rng.bool(0.5);

        return {
          prompt: `**${firm}** acquires equipment (cash price **£${cashPrice.toLocaleString("en-GB")}**) via **Hire Purchase**: a **${depPct}% deposit** upfront plus **${months} monthly payments of £${monthly}**. Calculate the **${askExtra ? "extra HP finance charge above the cash price" : "total Hire Purchase cost"}** in £.`,
          answer: {
            type: "number",
            value: askExtra ? extraCharge : totalHP,
            display: `£${(askExtra ? extraCharge : totalHP).toLocaleString("en-GB")}`,
          },
          hint: askExtra
            ? `Find Total HP cost = (${depPct}% × £${cashPrice.toLocaleString("en-GB")}) + (${months} × £${monthly}), then subtract £${cashPrice.toLocaleString("en-GB")}.`
            : `Total HP cost = Upfront deposit (${depPct}% × £${cashPrice.toLocaleString("en-GB")}) + (${months} × £${monthly}).`,
          solution: [
            `Deposit = {{${cashPrice} * ${depPct / 100} = ${deposit}}} (£${deposit.toLocaleString("en-GB")}).`,
            `Instalments = {{${months} * ${monthly} = ${months * monthly}}} (£${(months * monthly).toLocaleString("en-GB")}).`,
            askExtra
              ? `Total HP = £${totalHP.toLocaleString("en-GB")}; extra finance charge = {{${totalHP} - ${cashPrice} = ${extraCharge}}} (**£${extraCharge.toLocaleString("en-GB")}**).`
              : `Total HP cost = {{${deposit} + ${months * monthly} = ${totalHP}}} (**£${totalHP.toLocaleString("en-GB")}**).`,
          ],
          traps: [
            {
              spec: { type: "number", value: askExtra ? totalHP : months * monthly },
              feedback: askExtra
                ? `£${totalHP.toLocaleString("en-GB")} is the total HP cost — subtract the £${cashPrice.toLocaleString("en-GB")} cash price!`
                : `Don't forget to add the £${deposit.toLocaleString("en-GB")} upfront deposit!`,
            },
          ],
        };
      }

      // Tier 3: Comparing 3-month Bank Overdraft interest vs Debt Factoring fee
      const inv = rng.int(40, 120) * 1000;
      const facPct = rng.pick([8, 9, 10, 12]);
      const facFee = (inv * facPct) / 100;
      const odAmount = rng.int(25, Math.floor((inv * 0.85) / 1000)) * 1000;
      const odRatePct = rng.pick([8, 12, 16]);
      const months = 3;
      const odInterest = round2(odAmount * (odRatePct / 100) * (months / 12));
      const diff = round2(facFee - odInterest);

      return {
        prompt: `**${firm}** compares two ways to cover a 3-month cash gap:\n- **Debt Factoring**: Pay a **${facPct}% fee** on **£${inv.toLocaleString("en-GB")}** of invoices\n- **Bank Overdraft**: Overdraw **£${odAmount.toLocaleString("en-GB")}** for **3 months** (1/4 year) at **${odRatePct}% p.a.** simple interest\n\nBy how much in £ is the **Bank Overdraft cheaper** than Debt Factoring?`,
        answer: { type: "number", value: diff, display: `£${diff.toLocaleString("en-GB")}` },
        hint: `Compute Factoring fee (${facPct}% of £${inv.toLocaleString("en-GB")}) minus 3-month Overdraft interest (£${odAmount.toLocaleString("en-GB")} × ${odRatePct}% × 3/12).`,
        solution: [
          `Factoring fee = {{${inv} * ${facPct / 100} = ${facFee}}} (£${facFee.toLocaleString("en-GB")}).`,
          `3-month overdraft interest = {{${odAmount} * ${odRatePct / 100} * 0.25 = ${odInterest}}} (£${odInterest.toLocaleString("en-GB")}).`,
          `Overdraft saving = {{${facFee} - ${odInterest} = ${diff}}} (**£${diff.toLocaleString("en-GB")}**).`,
        ],
        traps: [
          {
            spec: { type: "number", value: odInterest },
            feedback: `£${odInterest.toLocaleString("en-GB")} is the overdraft interest — subtract it from the £${facFee.toLocaleString("en-GB")} factoring fee!`,
          },
        ],
      };
    },
  },
  {
    id: "sources-cashflow-breakeven.cash-flow-solver",
    topicId: "sources-cashflow-breakeven",
    title: "Cash-Flow Forecast Opening, Net & Closing Balance Solver",
    level: 2,
    guideRef: "cash-flow-forecasting",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(FIRMS);
      const mIdx = rng.int(0, MONTHS.length - 2);
      const month = MONTHS[mIdx];
      const nextMonth = MONTHS[mIdx + 1];

      if (tier === 1) {
        const opening = rng.int(5, 40) * 100;
        const inflows = rng.int(45, 130) * 100;
        const outflows = rng.int(45, 135) * 100;
        const ncf = inflows - outflows;
        const closing = opening + ncf;
        return {
          prompt: `In **${month}**, **${firm}** has an **Opening Balance of £${opening.toLocaleString("en-GB")}**, **Total Cash Inflows of £${inflows.toLocaleString("en-GB")}**, and **Total Cash Outflows of £${outflows.toLocaleString("en-GB")}**. Calculate ${month}'s **Closing Balance** in £ *(include a minus sign if negative)*.`,
          answer: {
            type: "number",
            value: closing,
            display: closing >= 0 ? `£${closing.toLocaleString("en-GB")}` : `−£${Math.abs(closing).toLocaleString("en-GB")}`,
          },
          hint: "Net Cash Flow = Inflows − Outflows; Closing Balance = Opening Balance + Net Cash Flow.",
          solution: [
            `Net Cash Flow = {{${inflows} - ${outflows} = ${ncf}}}.`,
            `Closing Balance = {{${opening} + (${ncf}) = ${closing}}}.`,
          ],
          traps:
            ncf !== closing
              ? [
                  {
                    spec: { type: "number", value: ncf },
                    feedback: `${ncf} is ${month}'s Net Cash Flow — add the £${opening.toLocaleString("en-GB")} Opening Balance!`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        // Bracketed negative Opening Balance!
        const negOpen = -rng.int(6, 32) * 100; // negative!
        const inflows = rng.int(60, 150) * 100;
        const outflows = rng.int(45, 135) * 100;
        const ncf = inflows - outflows;
        const closing = negOpen + ncf;
        const signFlipTrap = Math.abs(negOpen) + ncf;

        return {
          prompt: `Study **${month}**'s cash-flow forecast for **${firm}**:\n\n| ${month} (£) | Value |\n|---|---|\n| Opening Balance | **${fmtBracket(negOpen)}** |\n| Total Cash Inflows | ${inflows.toLocaleString("en-GB")} |\n| Total Cash Outflows | ${outflows.toLocaleString("en-GB")} |\n\nCalculate **${nextMonth}'s Opening Balance** in £ *(include a minus sign if negative)*.`,
          answer: {
            type: "number",
            value: closing,
            display: closing >= 0 ? `£${closing.toLocaleString("en-GB")}` : `−£${Math.abs(closing).toLocaleString("en-GB")}`,
          },
          hint: `Remember brackets ${fmtBracket(negOpen)} mean −£${Math.abs(negOpen).toLocaleString("en-GB")}, AND ${nextMonth}'s Opening Balance equals ${month}'s Closing Balance!`,
          solution: [
            `${month} Net Cash Flow = {{${inflows} - ${outflows} = ${ncf}}}.`,
            `${month} Closing Balance = {{${negOpen} + (${ncf}) = ${closing}}} → equals **${nextMonth}'s Opening Balance**.`,
          ],
          traps: [
            {
              spec: { type: "number", value: signFlipTrap },
              feedback: `Bracket trap! ${fmtBracket(negOpen)} is NEGATIVE (−${Math.abs(negOpen)}), not +${Math.abs(negOpen)}!`,
            },
          ],
        };
      }

      // Tier 3: Reverse missing Outflows or Inflows with bracketed Closing Balance
      const opening = rng.int(12, 42) * 100;
      const closing = -rng.int(5, 25) * 100; // negative closing!
      const ncf = closing - opening; // negative
      const inflows = rng.int(75, 165) * 100;
      const outflows = inflows - ncf; // inflows + |ncf|
      const signTrapOut = inflows - (Math.abs(closing) - opening);

      return {
        prompt: `In **${month}**, **${firm}** starts with an **Opening Balance of £${opening.toLocaleString("en-GB")}**, receives **Total Cash Inflows of £${inflows.toLocaleString("en-GB")}**, and ends ${month} with a **Closing Balance of ${fmtBracket(closing)}**. Calculate ${month}'s **Total Cash Outflows** in £.`,
        answer: {
          type: "number",
          value: outflows,
          display: `£${outflows.toLocaleString("en-GB")}`,
        },
        hint: `Find Net Cash Flow = Closing (−${Math.abs(closing)}) − Opening (+${opening}) = ${ncf}, then solve ${inflows} − Outflows = ${ncf}.`,
        solution: [
          `Net Cash Flow = {{${closing} - ${opening} = ${ncf}}}.`,
          `Total Cash Outflows = {{${inflows} - (${ncf}) = ${outflows}}} (**£${outflows.toLocaleString("en-GB")}**).`,
        ],
        traps:
          signTrapOut !== outflows
            ? [
                {
                  spec: { type: "number", value: signTrapOut },
                  feedback: `Watch the brackets! ${fmtBracket(closing)} means −£${Math.abs(closing).toLocaleString("en-GB")}, NOT +£${Math.abs(closing).toLocaleString("en-GB")}!`,
                },
              ]
            : undefined,
      };
    },
  },
  {
    id: "sources-cashflow-breakeven.costs-revenue-profit",
    topicId: "sources-cashflow-breakeven",
    title: "Fixed, Variable & Total Costs, Average Cost & Profit",
    level: 1,
    guideRef: "costs-revenue-profit",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(FIRMS);
      const item = rng.pick(ITEMS);

      if (tier === 1) {
        const fc = rng.int(12, 55) * 100;
        const vc = rng.int(3, 16);
        const sp = vc + rng.int(5, 18);
        const qty = rng.int(4, 15) * 100;
        const tr = sp * qty;
        const tc = fc + vc * qty;
        const profit = tr - tc;
        return {
          prompt: `**${firm}** sells **${qty.toLocaleString("en-GB")} ${item}** per month at **£${sp}** each. Monthly **Fixed Costs** are **£${fc.toLocaleString("en-GB")}** and **Variable Cost** is **£${vc}** per unit. Calculate **monthly profit (or loss)** in £.`,
          answer: {
            type: "number",
            value: profit,
            display: profit >= 0 ? `£${profit.toLocaleString("en-GB")}` : `−£${Math.abs(profit).toLocaleString("en-GB")}`,
          },
          hint: "Profit = Total Revenue (Price × Qty) − Total Costs (FC + VC × Qty).",
          solution: [
            `Total Revenue = {{${qty} * ${sp} = ${tr}}} (£${tr.toLocaleString("en-GB")}).`,
            `Total Costs = {{${fc} + (${qty} * ${vc}) = ${tc}}} (£${tc.toLocaleString("en-GB")}).`,
            `Profit = {{${tr} - ${tc} = ${profit}}}.`,
          ],
          traps: [
            {
              spec: { type: "number", value: tr - vc * qty },
              feedback: `Don't forget to subtract the £${fc.toLocaleString("en-GB")} Fixed Costs!`,
            },
          ],
        };
      }

      if (tier === 2) {
        // Monthly FC -> Annual Profit trap!
        const monthlyFC = rng.int(10, 45) * 100;
        const annualFC = monthlyFC * 12;
        const vc = rng.int(4, 15);
        const sp = vc + rng.int(7, 20);
        const annualQty = rng.int(25, 90) * 100;
        const tr = annualQty * sp;
        const tc = annualFC + annualQty * vc;
        const profit = tr - tc;
        const oneMonthTrap = tr - (monthlyFC + annualQty * vc);

        return {
          prompt: `**${firm}** pays **£${monthlyFC.toLocaleString("en-GB")} per month** in Fixed Costs, **£${vc}** Variable Cost per unit, and sells **${annualQty.toLocaleString("en-GB")} ${item} per year** at **£${sp}** each. Calculate **annual profit** in £.`,
          answer: {
            type: "number",
            value: profit,
            display: profit >= 0 ? `£${profit.toLocaleString("en-GB")}` : `−£${Math.abs(profit).toLocaleString("en-GB")}`,
          },
          hint: `Multiply monthly Fixed Costs (£${monthlyFC.toLocaleString("en-GB")}) by 12 FIRST to get annual Fixed Costs!`,
          solution: [
            `Annual Fixed Costs = {{${monthlyFC} * 12 = ${annualFC}}} (£${annualFC.toLocaleString("en-GB")}).`,
            `Annual Revenue = {{${annualQty} * ${sp} = ${tr}}}; Annual VC = {{${annualQty} * ${vc} = ${annualQty * vc}}}.`,
            `Annual Profit = {{${tr} - (${annualFC} + ${annualQty * vc}) = ${profit}}}.`,
          ],
          traps: [
            {
              spec: { type: "number", value: oneMonthTrap },
              feedback: `Time-period trap! Multiply £${monthlyFC.toLocaleString("en-GB")}/month by 12 months (£${annualFC.toLocaleString("en-GB")}) for annual Fixed Costs!`,
            },
          ],
        };
      }

      // Tier 3: Average Cost drop when output expands (economies of spreading FC)
      const q1 = rng.pick([500, 800, 1000, 1200]);
      const mult = rng.pick([2, 4]);
      const q2 = q1 * mult;
      const fcPerUnit1 = rng.int(4, 16); // integer so FC = q1 * fcPerUnit1 and q2 divides cleanly!
      const fc = q1 * fcPerUnit1 * mult; // divisible by both q1 and q2!
      const vc = rng.int(5, 22);
      const ac1 = fc / q1 + vc;
      const ac2 = fc / q2 + vc;
      const drop = ac1 - ac2;

      return {
        prompt: `**${firm}** has Fixed Costs of **£${fc.toLocaleString("en-GB")}** and Variable Cost of **£${vc}** per unit. When output increases from **${q1.toLocaleString("en-GB")}** to **${q2.toLocaleString("en-GB")} ${item}**, by how much (in £) does **average unit cost** fall?`,
        answer: { type: "number", value: drop, display: `£${drop}` },
        hint: `Compute Average Cost at ${q1} units (TC ÷ ${q1}) minus Average Cost at ${q2} units (TC ÷ ${q2}).`,
        solution: [
          `At ${q1} units: AC = {{(${fc} / ${q1}) + ${vc} = ${ac1}}} (£${ac1}).`,
          `At ${q2} units: AC = {{(${fc} / ${q2}) + ${vc} = ${ac2}}} (£${ac2}).`,
          `Fall in average unit cost = {{${ac1} - ${ac2} = ${drop}}} (**£${drop}**).`,
        ],
        traps: nonEqualTraps(drop, [
          {
            val: ac2,
            feedback: `£${ac2} is the NEW average cost — subtract £${ac2} from the original £${ac1} to find the reduction!`,
          },
        ]),
      };
    },
  },
  {
    id: "sources-cashflow-breakeven.breakeven-target",
    topicId: "sources-cashflow-breakeven",
    title: "Contribution, Break-Even & Target-Profit Output",
    level: 2,
    guideRef: "breakeven-calculation",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(FIRMS);
      const item = rng.pick(ITEMS);

      if (tier === 1) {
        const vc = rng.int(2, 18);
        const contrib = rng.int(4, 20);
        const sp = vc + contrib;
        const bep = rng.int(15, 90) * 10;
        const fc = bep * contrib;
        const spTrap = round2(fc / sp);

        return {
          prompt: `**${firm}** has monthly **Fixed Costs of £${fc.toLocaleString("en-GB")}**, **Variable Cost of £${vc}** per unit, and **Selling Price of £${sp}** per unit. Calculate monthly **break-even output** in ${item}.`,
          answer: { type: "number", value: bep, display: `${bep} units` },
          hint: `First find Contribution per unit (£${sp} − £${vc} = £${contrib}), then divide £${fc.toLocaleString("en-GB")} by £${contrib}.`,
          solution: [
            `Contribution per unit = {{${sp} - ${vc} = ${contrib}}} (£${contrib}).`,
            `Break-even output = {{${fc} / ${contrib} = ${bep}}} **units**.`,
          ],
          traps:
            spTrap !== bep
              ? [
                  {
                    spec: { type: "number", value: spTrap, tolerance: 0.5 },
                    feedback: `Never divide Fixed Costs by Selling Price (£${sp}) — divide by Contribution (£${sp} − £${vc} = £${contrib})!`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        // Target profit output
        const vc = rng.int(3, 22);
        const contrib = rng.int(5, 25);
        const sp = vc + contrib;
        const bep = rng.int(20, 80) * 10;
        const extraUnits = rng.int(10, 50) * 10;
        const fc = bep * contrib;
        const targetProfit = extraUnits * contrib;
        const ans = bep + extraUnits;

        return {
          prompt: `**${firm}** faces monthly **Fixed Costs of £${fc.toLocaleString("en-GB")}**, **Variable Cost of £${vc}** per unit, and **Selling Price of £${sp}** per unit. Calculate the monthly output needed to earn a **target profit of £${targetProfit.toLocaleString("en-GB")}**.`,
          answer: { type: "number", value: ans, display: `${ans} units` },
          hint: `Use Target Output = (Fixed Costs + Target Profit) ÷ (£${sp} − £${vc}).`,
          solution: [
            `Contribution per unit = {{${sp} - ${vc} = ${contrib}}} (£${contrib}).`,
            `Target output = {{(${fc} + ${targetProfit}) / ${contrib} = ${fc + targetProfit} / ${contrib} = ${ans}}} **units**.`,
          ],
          traps: [
            {
              spec: { type: "number", value: bep },
              feedback: `${bep} units only breaks even (£0 profit) — add £${targetProfit.toLocaleString("en-GB")} target profit to £${fc.toLocaleString("en-GB")} before dividing by £${contrib}!`,
            },
          ],
        };
      }

      // Tier 3: Reverse Selling Price or Variable Cost from given BEP
      const bep = rng.int(20, 95) * 10;
      const contrib = rng.int(4, 24);
      const fc = bep * contrib;
      const vc = rng.int(3, 19);
      const sp = vc + contrib;
      const askSP = rng.bool(0.5);

      if (askSP) {
        return {
          prompt: `**${firm}** has monthly **Fixed Costs of £${fc.toLocaleString("en-GB")}**, **Variable Cost of £${vc}** per unit, and wants to **break even at ${bep.toLocaleString("en-GB")} ${item}**. Calculate the required **Selling Price per unit** in £.`,
          answer: { type: "number", value: sp, display: `£${sp}` },
          hint: `Find required Contribution per unit = £${fc.toLocaleString("en-GB")} ÷ ${bep}, then add Variable Cost (£${vc}).`,
          solution: [
            `Required Contribution = {{${fc} / ${bep} = ${contrib}}} (£${contrib}/unit).`,
            `Selling Price = {{${contrib} + ${vc} = ${sp}}} (**£${sp}**).`,
          ],
          traps: [
            {
              spec: { type: "number", value: contrib },
              feedback: `£${contrib} is the Contribution per unit — add the £${vc} Variable Cost per unit to get Selling Price!`,
            },
          ],
        };
      }
      return {
        prompt: `**${firm}** has monthly **Fixed Costs of £${fc.toLocaleString("en-GB")}**, **Selling Price of £${sp}** per unit, and currently **breaks even at ${bep.toLocaleString("en-GB")} ${item}**. Calculate its **Variable Cost per unit** in £.`,
        answer: { type: "number", value: vc, display: `£${vc}` },
        hint: `Find Contribution per unit = £${fc.toLocaleString("en-GB")} ÷ ${bep}, then subtract from Selling Price (£${sp}).`,
        solution: [
          `Contribution per unit = {{${fc} / ${bep} = ${contrib}}} (£${contrib}/unit).`,
          `Variable Cost per unit = {{${sp} - ${contrib} = ${vc}}} (**£${vc}**).`,
        ],
        traps: nonEqualTraps(vc, [
          {
            val: contrib,
            feedback: `£${contrib} is the Contribution per unit — subtract £${contrib} from £${sp} Selling Price to find Variable Cost!`,
          },
        ]),
      };
    },
  },
  {
    id: "sources-cashflow-breakeven.margin-of-safety",
    topicId: "sources-cashflow-breakeven",
    title: "Margin of Safety & Shock Stress-Tester",
    level: 3,
    guideRef: "breakeven-charts-mos",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(FIRMS);
      const item = rng.pick(ITEMS);

      if (tier === 1) {
        const bep = rng.int(15, 75) * 10;
        const mos = rng.int(8, 45) * 10;
        const actual = bep + mos;
        return {
          prompt: `**${firm}** breaks even at **${bep.toLocaleString("en-GB")} ${item}** per month and forecasts monthly sales of **${actual.toLocaleString("en-GB")} ${item}**. Calculate its **Margin of Safety** in units.`,
          answer: { type: "number", value: mos, display: `${mos} units` },
          hint: "Margin of Safety = Forecast (or Actual) Output − Break-Even Output.",
          solution: [
            `Margin of Safety = {{${actual} - ${bep} = ${mos}}} **units**.`,
          ],
          traps: [
            {
              spec: { type: "number", value: actual + bep },
              feedback: "Subtract Break-Even Output from Actual Output — don't add them!",
            },
          ],
        };
      }

      if (tier === 2) {
        // Compute BEP first, then Margin of Safety
        const vc = rng.int(3, 18);
        const contrib = rng.int(5, 22);
        const sp = vc + contrib;
        const bep = rng.int(20, 75) * 10;
        const fc = bep * contrib;
        const mos = rng.int(9, 45) * 10;
        const actual = bep + mos;

        return {
          prompt: `**${firm}** has monthly **Fixed Costs of £${fc.toLocaleString("en-GB")}**, **Variable Cost of £${vc}** per unit, **Selling Price of £${sp}** per unit, and sells **${actual.toLocaleString("en-GB")} ${item}**. Calculate its **Margin of Safety** in units.`,
          answer: { type: "number", value: mos, display: `${mos} units` },
          hint: `First calculate Break-Even Output = £${fc.toLocaleString("en-GB")} ÷ (£${sp} − £${vc}), then subtract from ${actual.toLocaleString("en-GB")}.`,
          solution: [
            `Contribution = {{${sp} - ${vc} = ${contrib}}} (£${contrib}); Break-even = {{${fc} / ${contrib} = ${bep}}} units.`,
            `Margin of Safety = {{${actual} - ${bep} = ${mos}}} **units**.`,
          ],
          traps: nonEqualTraps(mos, [
            {
              val: bep,
              feedback: `${bep} is the Break-Even Output — subtract ${bep} from ${actual} to get Margin of Safety!`,
            },
            {
              val: mos * contrib,
              feedback: `£${(mos * contrib).toLocaleString("en-GB")} is the Profit in £ — Margin of Safety is ${mos} units!`,
            },
          ]),
        };
      }

      // Tier 3: Price rise + elastic demand drop -> new Profit via MoS * Contribution
      const vc = rng.int(4, 14);
      const oldContrib = rng.pick([8, 10, 12, 15, 20]);
      const oldSP = vc + oldContrib;
      const oldBEP = rng.int(30, 70) * 10;
      const fc = oldBEP * oldContrib; // exact!
      const priceJump = rng.pick([2, 4, 5]);
      const newSP = oldSP + priceJump;
      const newContrib = newSP - vc;
      // Pick fc or adjust fc? Let's ask for NEW PROFIT directly (always clean integer!)
      const oldQty = oldBEP + rng.int(20, 45) * 10;
      const dropPct = rng.pick([20, 25, 30]);
      const newQty = Math.round((oldQty * (100 - dropPct)) / 100);
      const newProfit = newQty * newContrib - fc;
      const naiveProfit = oldQty * newContrib - fc;

      return {
        prompt: `**${firm}** (**FC = £${fc.toLocaleString("en-GB")}**, **VC = £${vc}/unit**) raises Selling Price from **£${oldSP} to £${newSP}**. Because demand is price elastic, monthly sales fall from **${oldQty.toLocaleString("en-GB")}** down to **${newQty.toLocaleString("en-GB")} ${item}**. Calculate **${firm}**'s **new monthly profit (or loss)** in £.`,
        answer: {
          type: "number",
          value: newProfit,
          display: newProfit >= 0 ? `£${newProfit.toLocaleString("en-GB")}` : `−£${Math.abs(newProfit).toLocaleString("en-GB")}`,
        },
        hint: `Find new Contribution per unit (£${newSP} − £${vc} = £${newContrib}), multiply by new sales (${newQty}), and subtract £${fc.toLocaleString("en-GB")} Fixed Costs.`,
        solution: [
          `New Contribution per unit = {{${newSP} - ${vc} = ${newContrib}}} (£${newContrib}).`,
          `New Total Contribution = {{${newQty} * ${newContrib} = ${newQty * newContrib}}} (£${(newQty * newContrib).toLocaleString("en-GB")}).`,
          `New monthly profit = {{${newQty * newContrib} - ${fc} = ${newProfit}}}.`,
        ],
        traps: [
          {
            spec: { type: "number", value: naiveProfit },
            feedback: `You used the OLD quantity (${oldQty}) — elastic demand reduced actual sales to ${newQty} units!`,
          },
        ],
      };
    },
  },
];
