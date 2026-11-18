import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

const round2 = (n: number) => Math.round(n * 100) / 100;
const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

const MKT_BRANDS = [
  "VoltRide",
  "GlowSkin",
  "Breeze Smoothies",
  "AeroPods",
  "FreshSip",
  "VelvetCocoa",
  "Cornwall Ice",
  "Peak Trail",
  "SolarSip",
  "PureOat",
  "UrbanKicks",
  "NordicHome",
] as const;

const OPS_PLANTS = [
  "Sunderland Plant",
  "Coventry Robotics",
  "Yorkshire Pottery",
  "Bristol Bikes",
  "Clyde Kayaks",
  "Severn Packaging",
  "Malvern Leather",
  "Tyne Solar",
  "Trent Appliances",
  "Avon Ceramics",
  "Peak Furniture",
  "Thames Roastery",
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
    id: "marketing-and-operations.mkt-market-share",
    topicId: "marketing-and-operations",
    title: "Marketing: Market Share %, Market Growth % & PED",
    level: 1,
    guideRef: "markets-ped-competition",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const brand = rng.pick(MKT_BRANDS);

      if (tier === 1) {
        if (rng.bool(0.55)) {
          const totalMkt = rng.pick([40, 50, 60, 80, 100, 120, 150, 200, 250, 400, 500]);
          const sharePct = rng.pick([5, 8, 10, 12, 15, 16, 18, 20, 24, 25, 30, 35, 40]);
          const firmSales = round2((totalMkt * sharePct) / 100);
          return {
            prompt: `${brand} achieves annual sales of **£${firmSales}m** in a total market worth **£${totalMkt}m**. Calculate ${brand}'s **market share** (as a %).`,
            answer: { type: "number", value: sharePct, display: `${sharePct}%` },
            traps: safeTraps(sharePct, [
              { val: round2(totalMkt / firmSales), feedback: "Upside down! Market Share = (Firm's Sales ÷ Total Market Sales) × 100." },
              { val: round2(totalMkt - firmSales), feedback: "Subtracting gives rivals' sales in £m — divide Firm's Sales by Total Market Sales × 100!" },
            ]),
            hint: "Market Share = (Firm's Sales ÷ Total Market Sales) × 100.",
            solution: [
              `Market Share = (£${firmSales}m ÷ £${totalMkt}m) × 100 = **${sharePct}%**.`,
            ],
          };
        }
        const pctP = rng.pick([5, 8, 10, 12, 15, 20, 25]);
        const mult = rng.pick([0.4, 0.5, 0.6, 0.8, 1.2, 1.5, 1.8, 2.0, 2.4, 2.5, 3.0]);
        const pctQ = round2(pctP * mult);
        return {
          prompt: `When ${brand} changes price by **${pctP}%**, quantity demanded changes by **${pctQ}%**. Calculate the **magnitude (positive value) of PED**.`,
          answer: { type: "number", value: mult, tolerance: 0.01, display: `${mult}` },
          traps: safeTraps(mult, [
            { val: round2(pctP / pctQ), feedback: "Upside down! Put `% Change in Quantity Demanded` on top and `% Change in Price` on the bottom." },
          ], 0.01),
          hint: "|PED| = % Change in Quantity Demanded ÷ % Change in Price.",
          solution: [
            `|PED| = ${pctQ}% ÷ ${pctP}% = **${mult}**.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const oldMkt = rng.int(40, 240);
          const growthPct = rng.pick([5, 8, 10, 12, 15, 20, 25, 30, 35, 40]);
          const newMkt = round2(oldMkt * (1 + growthPct / 100));
          return {
            prompt: `Total UK market sales in ${brand}'s sector grew from **£${oldMkt}m** last year to **£${newMkt}m** this year. Calculate the **percentage market growth** (as a %).`,
            answer: { type: "number", value: growthPct, tolerance: 0.02, display: `${growthPct}%` },
            traps: safeTraps(growthPct, [
              { val: round2(((newMkt - oldMkt) / newMkt) * 100), feedback: `Divide by the ORIGINAL market size (£${oldMkt}m), not the new £${newMkt}m figure!` },
              { val: round2(newMkt - oldMkt), feedback: "Divide the £m increase by the original market size × 100 to get percentage growth!" },
            ]),
            hint: "Market Growth % = ((New Market − Old Market) ÷ Old Market) × 100.",
            solution: [
              `Change = £${newMkt}m − £${oldMkt}m = £${round2(newMkt - oldMkt)}m.`,
              `Market Growth = (£${round2(newMkt - oldMkt)}m ÷ £${oldMkt}m) × 100 = **${growthPct}%**.`,
            ],
          };
        }
        const mktSize = rng.int(55, 320);
        const firmSales = rng.int(8, Math.floor(mktSize * 0.45));
        const share = round2((firmSales / mktSize) * 100);
        return {
          prompt: `${brand} Ltd generated **£${firmSales}m** of revenue inside a **£${mktSize}m** market. Calculate ${brand}'s **market share** to **2 decimal places** (as a %).`,
          answer: { type: "number", value: share, tolerance: 0.02, display: `${share}%` },
          traps: safeTraps(share, [
            { val: round2((mktSize / firmSales) * 100), feedback: "Divide the firm's sales by total market sales (`Firm ÷ Market × 100`)." },
          ]),
          hint: "Market Share = (Firm's Sales ÷ Total Market Sales) × 100, rounded to 2 d.p.",
          solution: [
            `Market Share = (£${firmSales}m ÷ £${mktSize}m) × 100 = **${share}%** (to 2 d.p.).`,
          ],
        };
      }

      // Tier 3: New Total Revenue after a PED price change
      const oldP = rng.pick([10, 20, 25, 40, 50, 80, 100]);
      const oldQ = rng.int(12, 60) * 100;
      const ped = rng.pick([0.4, 0.5, 1.5, 2.0, 2.5]);
      const hike = ped < 1;
      const pPct = rng.pick([10, 20]);
      const newP = hike ? round2(oldP * (1 + pPct / 100)) : round2(oldP * (1 - pPct / 100));
      const qPct = round2(ped * pPct);
      const newQ = hike ? Math.round(oldQ * (1 - qPct / 100)) : Math.round(oldQ * (1 + qPct / 100));
      const newRev = Math.round(newP * newQ);
      return {
        prompt: `${brand} currently sells **${oldQ.toLocaleString("en-GB")} units** at **£${oldP}** each (\`|PED| = ${ped}\`). If it **${hike ? "raises" : "cuts"} price by ${pPct}%** to **£${newP}**, calculate the **new Total Revenue** (in £).`,
        answer: { type: "number", value: newRev, display: gbp(newRev) },
        traps: safeTraps(newRev, [
          { val: Math.round(newP * oldQ), feedback: `You kept quantity unchanged at ${oldQ.toLocaleString("en-GB")}! Apply |PED| = ${ped} to find the ${qPct}% quantity response first.` },
          { val: oldP * oldQ, feedback: "That is the OLD Total Revenue before the price change!" },
        ]),
        hint: `Quantity changes by ${ped} × ${pPct}% = ${qPct}% in the opposite direction to price; then multiply New Price × New Quantity.`,
        solution: [
          `Quantity ${hike ? "falls" : "rises"} by ${ped} × ${pPct}% = ${qPct}%, to ${newQ.toLocaleString("en-GB")} units.`,
          `New Total Revenue = £${newP} × ${newQ.toLocaleString("en-GB")} = **${gbp(newRev)}**.`,
        ],
      };
    },
  },
  {
    id: "marketing-and-operations.mkt-mix-research",
    topicId: "marketing-and-operations",
    title: "Marketing Mix: Cost-Plus Pricing & Channel Margin Calculations",
    level: 2,
    guideRef: "marketing-mix-4ps",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const brand = rng.pick(MKT_BRANDS);

      if (tier === 1) {
        const unitCost = rng.pick([8, 10, 12, 15, 16, 20, 24, 25, 30, 40, 50, 60, 80]);
        const mkPct = rng.pick([20, 25, 30, 35, 40, 45, 50, 60, 75, 80]);
        const added = round2((unitCost * mkPct) / 100);
        const price = round2(unitCost + added);
        return {
          prompt: `${brand} makes a product with a **unit cost of £${unitCost}** and uses **cost-plus pricing with a ${mkPct}% markup**. Calculate the **selling price** (in £).`,
          answer: { type: "number", value: price, tolerance: 0.01, display: `£${price}` },
          traps: safeTraps(price, [
            { val: added, feedback: `£${added} is just the ${mkPct}% markup — add it onto the £${unitCost} unit cost!` },
          ], 0.01),
          hint: "Selling Price = Unit Cost × (1 + Markup% ÷ 100).",
          solution: [
            `Markup added = ${mkPct}% of £${unitCost} = £${added}.`,
            `Selling Price = £${unitCost} + £${added} = **£${price}**.`,
          ],
        };
      }

      if (tier === 2) {
        const matCost = rng.int(6, 35);
        const ovhCost = rng.int(4, 22);
        const totalUnit = matCost + ovhCost;
        const mkPct = rng.pick([25, 30, 35, 40, 45, 55, 65, 75]);
        const price = round2(totalUnit * (1 + mkPct / 100));
        return {
          prompt: `${brand} incurs **£${matCost} in direct materials** plus **£${ovhCost} in allocated overhead** per item, and applies a **${mkPct}% cost-plus markup** on total unit cost. Calculate the **selling price** to 2 d.p. (in £).`,
          answer: { type: "number", value: price, tolerance: 0.01, display: `£${price}` },
          traps: safeTraps(price, [
            { val: round2(matCost * (1 + mkPct / 100)), feedback: `Include the £${ovhCost} overhead in Total Unit Cost (£${totalUnit}) before applying the ${mkPct}% markup!` },
            { val: round2((totalUnit * mkPct) / 100), feedback: "Add the markup onto Total Unit Cost to get the Selling Price!" },
          ], 0.01),
          hint: "Sum direct materials + overhead per unit first, then multiply by `(1 + Markup% / 100)`.",
          solution: [
            `Total Unit Cost = £${matCost} + £${ovhCost} = £${totalUnit}.`,
            `Selling Price = £${totalUnit} × ${round2(1 + mkPct / 100)} = **£${price}**.`,
          ],
        };
      }

      // Tier 3: Producer -> Retailer two-stage distribution markup
      const makeCost = rng.int(12, 48);
      const mfgMk = rng.pick([25, 30, 40, 50]);
      const rtlMk = rng.pick([40, 50, 60, 75, 100]);
      const wholesale = round2(makeCost * (1 + mfgMk / 100));
      const retail = round2(wholesale * (1 + rtlMk / 100));
      return {
        prompt: `${brand} manufactures an item for **£${makeCost}** and sells it to retailers at a **${mfgMk}% markup**. Retailers then apply a **${rtlMk}% markup** on their wholesale buying price. Calculate the **final retail price** (in £, to 2 d.p.).`,
        answer: { type: "number", value: retail, tolerance: 0.02, display: `£${retail}` },
        traps: safeTraps(retail, [
          { val: wholesale, feedback: `£${wholesale} is the wholesale price — now apply the retailer's ${rtlMk}% markup onto £${wholesale}!` },
          { val: round2(makeCost * (1 + (mfgMk + rtlMk) / 100)), feedback: "Compound the two markups sequentially (`Cost × (1 + m1) × (1 + m2)`), do not add the percentages together!" },
        ]),
        hint: "Find Wholesale Price first, then multiply Wholesale Price by `(1 + Retail Markup% / 100)`.",
        solution: [
          `Wholesale Price = £${makeCost} × ${round2(1 + mfgMk / 100)} = £${wholesale}.`,
          `Final Retail Price = £${wholesale} × ${round2(1 + rtlMk / 100)} = **£${retail}**.`,
        ],
      };
    },
  },
  {
    id: "marketing-and-operations.ops-unit-cost-productivity",
    topicId: "marketing-and-operations",
    title: "Operations: Labour Productivity & Unit Labour Cost",
    level: 1,
    guideRef: "production-lean-jit",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const plant = rng.pick(OPS_PLANTS);

      if (tier === 1) {
        const workers = rng.int(6, 40);
        const prod = rng.int(12, 85);
        const output = workers * prod;
        return {
          prompt: `${plant} employs **${workers} workers** who produce **${output.toLocaleString("en-GB")} units** per week. Calculate weekly **labour productivity** (in units per worker).`,
          answer: { type: "number", value: prod, display: `${prod} units per worker` },
          traps: safeTraps(prod, [
            { val: output, feedback: `${output.toLocaleString("en-GB")} is Total Output — divide by ${workers} workers for Labour Productivity!` },
          ]),
          hint: "Labour Productivity = Total Output ÷ Number of Workers.",
          solution: [
            `Labour Productivity = ${output.toLocaleString("en-GB")} ÷ ${workers} = **${prod}** units per worker.`,
          ],
        };
      }

      if (tier === 2) {
        const workers = rng.int(8, 32);
        const oldProd = rng.int(20, 65);
        const gain = rng.int(6, 28);
        const newProd = oldProd + gain;
        const oldOut = workers * oldProd;
        const newOut = workers * newProd;
        return {
          prompt: `At ${plant}, **${workers} workers** previously built **${oldOut.toLocaleString("en-GB")} units/week**. After Kaizen training, the same **${workers} workers** build **${newOut.toLocaleString("en-GB")} units/week**. By how many **units per worker** did weekly **labour productivity** rise?`,
          answer: { type: "number", value: gain, display: `${gain} units per worker` },
          traps: safeTraps(gain, [
            { val: newProd, feedback: `${newProd} is the NEW productivity — subtract the old productivity (${oldProd}) to find the increase!` },
            { val: newOut - oldOut, feedback: `${newOut - oldOut} is the increase in Total Output — divide by ${workers} workers!` },
          ]),
          hint: "Compute `(New Output − Old Output) ÷ Number of Workers`.",
          solution: [
            `Old productivity = ${oldOut.toLocaleString("en-GB")} ÷ ${workers} = ${oldProd} units/worker.`,
            `New productivity = ${newOut.toLocaleString("en-GB")} ÷ ${workers} = ${newProd} units/worker.`,
            `Increase = ${newProd} − ${oldProd} = **${gain}** units per worker.`,
          ],
        };
      }

      const wage = rng.pick([450, 500, 540, 600, 630, 720]);
      const prod = rng.pick([15, 18, 20, 24, 25, 30, 36, 45, 50]);
      const workers = rng.int(10, 35);
      const output = workers * prod;
      const unitLabCost = round2(wage / prod);
      return {
        prompt: `${plant} pays each of its **${workers} workers** **£${wage} per week**, and total weekly output is **${output.toLocaleString("en-GB")} units**. Calculate the **labour cost per unit** (in £, to 2 d.p.).`,
        answer: { type: "number", value: unitLabCost, tolerance: 0.01, display: `£${unitLabCost}` },
        traps: safeTraps(unitLabCost, [
          { val: prod, feedback: `${prod} is Labour Productivity (units per worker) — divide the £${wage} weekly wage by ${prod}!` },
          { val: workers * wage, feedback: `£${(workers * wage).toLocaleString("en-GB")} is the total wage bill — divide by ${output.toLocaleString("en-GB")} units!` },
        ], 0.01),
        hint: "Labour Cost per Unit = Total Wage Bill ÷ Total Output (or Weekly Wage ÷ Productivity).",
        solution: [
          `Total weekly wages = ${workers} × £${wage} = ${gbp(workers * wage)}.`,
          `Labour Cost per Unit = ${gbp(workers * wage)} ÷ ${output.toLocaleString("en-GB")} = **£${unitLabCost}**.`,
        ],
      };
    },
  },
  {
    id: "marketing-and-operations.ops-lean-quality",
    topicId: "marketing-and-operations",
    title: "Operations: Average Unit Cost, Scale Economies & Quality Defect Rates",
    level: 2,
    guideRef: "economies-scale-quality",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const plant = rng.pick(OPS_PLANTS);

      if (tier === 1) {
        if (rng.bool(0.55)) {
          const output = rng.pick([500, 800, 1000, 1200, 2000, 2500, 4000, 5000]);
          const fcPerUnit = rng.int(4, 18);
          const vcPerUnit = rng.int(5, 22);
          const fc = output * fcPerUnit;
          const vc = output * vcPerUnit;
          const auc = fcPerUnit + vcPerUnit;
          return {
            prompt: `${plant} incurs **Fixed Costs of ${gbp(fc)}** and **Variable Costs of ${gbp(vc)}** to manufacture **${output.toLocaleString("en-GB")} units**. Calculate the **Average Unit Cost** (in £).`,
            answer: { type: "number", value: auc, display: `£${auc}` },
            traps: safeTraps(auc, [
              { val: vcPerUnit, feedback: `£${vcPerUnit} only covers Variable Costs — add Fixed Costs (${gbp(fc)}) before dividing by ${output.toLocaleString("en-GB")}!` },
              { val: fc + vc, feedback: `${gbp(fc + vc)} is Total Cost — divide by ${output.toLocaleString("en-GB")} units for Average Unit Cost!` },
            ]),
            hint: "Average Unit Cost = (Fixed Costs + Variable Costs) ÷ Output.",
            solution: [
              `Total Cost = ${gbp(fc)} + ${gbp(vc)} = ${gbp(fc + vc)}.`,
              `Average Unit Cost = ${gbp(fc + vc)} ÷ ${output.toLocaleString("en-GB")} = **£${auc}**.`,
            ],
          };
        }
        const batch = rng.pick([1000, 2000, 2500, 4000, 5000, 8000, 10000]);
        const defPct = rng.pick([1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6]);
        const defects = Math.round((batch * defPct) / 100);
        return {
          prompt: `During end-of-line Quality Control at ${plant}, **${defects} defective units** were rejected out of **${batch.toLocaleString("en-GB")} units** produced. Calculate the **defect rate** (as a %).`,
          answer: { type: "number", value: defPct, tolerance: 0.01, display: `${defPct}%` },
          traps: safeTraps(defPct, [
            { val: 100 - defPct, feedback: `${100 - defPct}% is the pass rate — divide rejected units (${defects}) by total units (${batch.toLocaleString("en-GB")}) × 100!` },
          ], 0.01),
          hint: "Defect Rate % = (Defective Units ÷ Total Units Produced) × 100.",
          solution: [
            `Defect Rate = (${defects} ÷ ${batch.toLocaleString("en-GB")}) × 100 = **${defPct}%**.`,
          ],
        };
      }

      if (tier === 2) {
        const output = rng.pick([1500, 2000, 2500, 4000, 5000, 8000]);
        const fcUnit = rng.int(5, 16);
        const vcUnit = rng.int(8, 25);
        const fc = output * fcUnit;
        const auc = fcUnit + vcUnit;
        return {
          prompt: `${plant} has monthly **Fixed Costs of ${gbp(fc)}** and a **Variable Cost of £${vcUnit} per unit**. Calculate its **Average Unit Cost** at an output of **${output.toLocaleString("en-GB")} units** (in £).`,
          answer: { type: "number", value: auc, display: `£${auc}` },
          traps: safeTraps(auc, [
            { val: fcUnit, feedback: `£${fcUnit} is Fixed Cost per unit — remember to add the £${vcUnit} Variable Cost per unit!` },
          ]),
          hint: "Total Cost = Fixed Costs + (Variable Cost per unit × Output); then divide by Output.",
          solution: [
            `Total Cost = ${gbp(fc)} + (£${vcUnit} × ${output.toLocaleString("en-GB")}) = ${gbp(fc + vcUnit * output)}.`,
            `Average Unit Cost = ${gbp(fc + vcUnit * output)} ÷ ${output.toLocaleString("en-GB")} = **£${auc}**.`,
          ],
        };
      }

      // Tier 3: Economies of scale unit-cost drop across two output scales
      const q1 = rng.pick([2000, 4000, 5000]);
      const q2 = q1 * rng.pick([2, 3, 4]);
      const fc1Unit = rng.int(10, 22);
      const fc1 = q1 * fc1Unit;
      const vc1 = rng.int(16, 32);
      const vc2 = vc1 - rng.int(2, 6);
      const fc2 = q2 * rng.int(4, fc1Unit - 3);
      const auc1 = round2(fc1 / q1 + vc1);
      const auc2 = round2(fc2 / q2 + vc2);
      const drop = round2(auc1 - auc2);
      return {
        prompt: `At **${q1.toLocaleString("en-GB")} units**, ${plant} has Fixed Costs of **${gbp(fc1)}** and Variable Cost of **£${vc1}/unit**. Expanding to **${q2.toLocaleString("en-GB")} units** unlocks bulk-buying (**VC = £${vc2}/unit**) while Fixed Costs become **${gbp(fc2)}**. By how much does **Average Unit Cost fall** (in £)?`,
        answer: { type: "number", value: drop, tolerance: 0.02, display: `£${drop}` },
        traps: safeTraps(drop, [
          { val: auc2, feedback: `£${auc2} is the NEW Average Unit Cost — subtract it from the OLD Average Unit Cost (£${auc1})!` },
          { val: auc1, feedback: `£${auc1} is the OLD Average Unit Cost — compute the new unit cost at ${q2.toLocaleString("en-GB")} units and subtract!` },
        ]),
        hint: "Calculate Average Unit Cost before and after expansion, then subtract After from Before.",
        solution: [
          `Before (${q1.toLocaleString("en-GB")}): Unit Cost = (${gbp(fc1)} ÷ ${q1.toLocaleString("en-GB")}) + £${vc1} = £${auc1}.`,
          `After (${q2.toLocaleString("en-GB")}): Unit Cost = (${gbp(fc2)} ÷ ${q2.toLocaleString("en-GB")}) + £${vc2} = £${auc2}.`,
          `Unit cost reduction = £${auc1} − £${auc2} = **£${drop}**.`,
        ],
      };
    },
  },
  {
    id: "marketing-and-operations.mkt-research-synoptic",
    topicId: "marketing-and-operations",
    title: "Market Research Sampling & Target-Segment Revenue Forecasting",
    level: 3,
    guideRef: "market-research-segmentation",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const brand = rng.pick(MKT_BRANDS);
      const sample = rng.pick([200, 250, 400, 500, 600, 800, 1000]);
      const p1 = rng.pick([40, 45, 50, 55, 60, 65, 70, 75, 80]);
      const g1 = Math.round((sample * p1) / 100);

      if (tier === 1) {
        return {
          prompt: `${brand} conducts a primary survey of **${sample} shoppers**, and **${p1}%** say they buy eco-refill packs. How many shoppers in the sample buy eco-refill packs?`,
          answer: { type: "number", value: g1, display: `${g1} customers` },
          traps: safeTraps(g1, [
            { val: sample - g1, feedback: `${sample - g1} is the ${100 - p1}% who do NOT buy eco-refills!` },
          ]),
          hint: `Multiply ${p1}% by ${sample}.`,
          solution: [
            `Respondents = ${p1}% × ${sample} = **${g1}**.`,
          ],
        };
      }

      const p2 = rng.pick([20, 25, 40, 50]);
      // Multiple of 400 guarantees sample * p1 * p2 / 10000 is an exact integer!
      const cleanSample = rng.int(1, 15) * 400;
      const cleanG1 = Math.round((cleanSample * p1) / 100);
      const cleanG2 = Math.round((cleanG1 * p2) / 100);

      if (tier === 2) {
        return {
          prompt: `${brand} surveys **${cleanSample} customers**. **${p1}%** belong to its target fitness segment, and **${p2}%** of that fitness segment say they would purchase weekly. How many surveyed customers would purchase weekly?`,
          answer: { type: "number", value: cleanG2, display: `${cleanG2} customers` },
          traps: safeTraps(cleanG2, [
            { val: cleanG1, feedback: `${cleanG1} is the ${p1}% fitness segment — now take ${p2}% of ${cleanG1}!` },
            { val: Math.round((cleanSample * p2) / 100), feedback: `Take ${p2}% of the ${cleanG1} fitness-segment respondents, not of all ${cleanSample}!` },
          ]),
          hint: `Find ${p1}% of ${cleanSample}, then find ${p2}% of that group.`,
          solution: [
            `Target fitness segment = ${p1}% × ${cleanSample} = ${cleanG1}.`,
            `Weekly buyers = ${p2}% × ${cleanG1} = **${cleanG2}** consumers.`,
          ],
        };
      }

      const townPop = rng.int(15, 60) * 1000;
      const price = rng.int(8, 25);
      const projectedBuyers = Math.round((townPop * p1 * p2) / 10000);
      const projectedRev = projectedBuyers * price;
      return {
        prompt: `In a representative sample for ${brand}, **${p1}%** of residents drink iced matcha, and **${p2}%** of iced-matcha drinkers would buy a **£${price}** starter tin. Scaling to a local town of **${townPop.toLocaleString("en-GB")} residents**, forecast total launch **Revenue** (in £).`,
        answer: { type: "number", value: projectedRev, display: gbp(projectedRev) },
        traps: safeTraps(projectedRev, [
          { val: projectedBuyers, feedback: `${projectedBuyers.toLocaleString("en-GB")} is the projected number of buyers — multiply by £${price} per tin for Revenue!` },
        ]),
        hint: `Compute Town Population × (${p1}/100) × (${p2}/100) × £${price}.`,
        solution: [
          `Projected buyers = ${townPop.toLocaleString("en-GB")} × ${p1}% × ${p2}% = ${projectedBuyers.toLocaleString("en-GB")} buyers.`,
          `Forecast Revenue = ${projectedBuyers.toLocaleString("en-GB")} × £${price} = **${gbp(projectedRev)}**.`,
        ],
      };
    },
  },
];
