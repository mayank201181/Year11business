import type { Drill } from "./types.ts";
import { big, clean, roundTo } from "./helpers.ts";

const FIRMS = [
  "Maple Bakehouse",
  "Harbour Cycles",
  "Vertex Print",
  "Orchid Florals",
  "Cedar Joinery",
  "Kestrel Logistics",
  "Saffron Kitchen",
  "Nimbus Tech",
  "Bramble Landscapes",
  "Solstice Café",
] as const;

const FOUNDERS = [
  "Aisha",
  "Liam",
  "Priya",
  "Mateo",
  "Chloe",
  "Tariq",
  "Hannah",
  "Rohan",
  "Mei",
  "Noah",
] as const;

export const drills: Drill[] = [
  {
    id: "business-activity.liability-payout",
    topicId: "business-activity",
    title: "Unlimited vs limited liability loss calculator",
    level: 1,
    guideRef: "unincorporated-incorporated",
    generate(rng, tier) {
      const firm = rng.pick(FIRMS);
      const owner = rng.pick(FOUNDERS);
      const invested = rng.int(8, 34) * 1000;
      const assets = rng.int(10, 40) * 1000;
      const unpaidGap = rng.int(36, 95) * 1000;
      const totalDebt = assets + unpaidGap;

      if (tier === 1) {
        const isLtd = rng.bool();
        if (isLtd) {
          return {
            prompt: `${owner} invested **£${big(invested)}** buying shares to set up **${firm} Ltd** (a private limited company). The company collapses with total debts of **£${big(totalDebt)}** and business assets worth **£${big(assets)}**. Under **limited liability**, what is ${owner}'s **maximum total financial loss** (including the original share investment), in £?`,
            answer: { type: "number", value: invested, display: `£${big(invested)}` },
            solution: [
              `Unpaid corporate shortfall = £${big(totalDebt)} − £${big(assets)} = £${big(unpaidGap)}.`,
              `Because **${firm} Ltd** is incorporated with **limited liability**, creditors cannot claim ${owner}'s personal savings or home.`,
              `${owner}'s maximum total loss is capped at the original share capital invested: **£${big(invested)}**.`,
            ],
            hint: "Check the legal structure (`Ltd`): can creditors touch personal assets beyond the share capital invested?",
            traps: [
              {
                spec: { type: "number", value: unpaidGap },
                feedback: `£${big(unpaidGap)} is the company's unpaid debt shortfall — under limited liability, shareholders do NOT pay corporate debts above their £${big(invested)} share capital!`,
              },
              {
                spec: { type: "number", value: invested + unpaidGap },
                feedback: `That would be a sole trader's total loss under unlimited liability! An Ltd caps ${owner}'s total loss at £${big(invested)}.`,
              },
            ],
          };
        }
        const totalLoss = invested + unpaidGap;
        return {
          prompt: `${owner} operates **${firm}** as an unincorporated **sole trader**, having invested **£${big(invested)}** of startup savings. The business closes with total debts of **£${big(totalDebt)}** while its business assets sell for **£${big(assets)}**. How much **extra personal money** must ${owner} pay from personal assets/savings to clear the remaining business debts, in £?`,
          answer: { type: "number", value: unpaidGap, display: `£${big(unpaidGap)}` },
          solution: [
            `Sale of business assets covers £${big(assets)} of the £${big(totalDebt)} debt.`,
            `Remaining unpaid business debt = £${big(totalDebt)} − £${big(assets)} = **£${big(unpaidGap)}**.`,
            `Because a sole trader has **unlimited liability** (no separate legal identity), ${owner} must pay the full **£${big(unpaidGap)}** from personal funds (on top of losing the initial £${big(invested)} invested, making £${big(totalLoss)} overall).`,
          ],
          hint: "Subtract the asset sale proceeds from total debts — sole traders have unlimited liability for the shortfall.",
          traps: [
            {
              spec: { type: "number", value: 0 },
              feedback: "£0 extra applies to an incorporated Ltd/Plc! A sole trader has unlimited liability and must pay the remaining debt shortfall.",
            },
            {
              spec: { type: "number", value: totalDebt },
              feedback: `Remember that selling the business assets first pays off £${big(assets)} of the £${big(totalDebt)} debt.`,
            },
          ],
        };
      }

      if (tier === 2) {
        const ratios: Array<[number, number]> = [
          [3, 1],
          [3, 2],
          [4, 1],
          [5, 3],
          [7, 3],
        ];
        const [r1, r2] = rng.pick(ratios);
        const sumR = r1 + r2;
        const unit = rng.int(6, 22) * 1000;
        const profit = unit * sumR;
        const share1 = unit * r1;
        return {
          prompt: `${owner} and a co-founder run **${firm}** under a **Deed of Partnership** that splits profits and losses in the ratio **${r1} : ${r2}** (${owner} first). In Year 2, the partnership earns **£${big(profit)}** in total profit. Calculate ${owner}'s profit share in £.`,
          answer: { type: "number", value: share1, display: `£${big(share1)}` },
          solution: [
            `Total ratio parts = {{${r1} + ${r2} = ${sumR}}}.`,
            `Value of 1 part = £${big(profit)} ÷ ${sumR} = £${big(unit)}.`,
            `${owner}'s share (${r1} parts) = ${r1} × £${big(unit)} = **£${big(share1)}**.`,
          ],
          hint: "Add both parts of the Deed of Partnership ratio first to find the value of 1 part.",
          traps: [
            {
              spec: { type: "number", value: profit / 2 },
              feedback: "A 50 : 50 split only applies when there is NO Deed of Partnership! Use the stated ratio.",
            },
            {
              spec: { type: "number", value: unit * r2 },
              feedback: `£${big(unit * r2)} is the other partner's share (${r2} parts); ${owner} receives ${r1} parts.`,
            },
          ],
        };
      }

      // Tier 3: Compare personal asset exposure if unincorporated sole trader vs converting to Ltd
      const savingsSaved = unpaidGap;
      return {
        prompt: `${owner} is deciding whether to keep **${firm}** as a **sole trader** or incorporate as **${firm} Ltd** (investing **£${big(invested)}** in shares). Suppose a major contract fails next year, leaving **£${big(totalDebt)}** in business debts and **£${big(assets)}** in realisable business assets. How much **less** would ${owner} lose in total by incorporating as an **Ltd** rather than staying a **sole trader**, in £?`,
        answer: { type: "number", value: savingsSaved, display: `£${big(savingsSaved)}` },
        solution: [
          `Unpaid debt above business assets = £${big(totalDebt)} − £${big(assets)} = £${big(unpaidGap)}.`,
          `As a **sole trader** (unlimited liability), ${owner} loses the £${big(invested)} invested **plus** £${big(unpaidGap)} from personal assets = £${big(invested + unpaidGap)}.`,
          `As a **shareholder in ${firm} Ltd** (limited liability), ${owner}'s loss is capped at the £${big(invested)} share capital.`,
          `Personal wealth protected by incorporating = £${big(invested + unpaidGap)} − £${big(invested)} = **£${big(savingsSaved)}**.`,
        ],
        hint: "Compare total loss under unlimited liability (investment + unpaid debt gap) with total loss under limited liability (investment only).",
        traps: [
          {
            spec: { type: "number", value: invested },
            feedback: `£${big(invested)} is lost in BOTH cases — calculate the extra personal debt shortfall saved by limited liability.`,
          },
          {
            spec: { type: "number", value: totalDebt },
            feedback: `Business assets cover £${big(assets)} of the debt first, so the uncovered debt gap is £${big(totalDebt)} − £${big(assets)}.`,
          },
        ],
      };
    },
  },
  {
    id: "business-activity.market-share-smart",
    topicId: "business-activity",
    title: "Market share & SMART sales growth targets",
    level: 2,
    guideRef: "business-objectives",
    generate(rng, tier) {
      const firm = rng.pick(FIRMS);
      if (tier === 1) {
        const marketM = rng.pick([2, 4, 5, 8, 10, 20, 25, 40, 50]);
        const pct = rng.int(4, 35);
        const market = marketM * 100000; // £200k to £5m
        const sales = clean((market * pct) / 100);
        return {
          prompt: `**${firm} Ltd** records annual revenue of **£${big(sales)}** in a regional market with total annual sales of **£${big(market)}**. Calculate **${firm} Ltd**'s market share as a percentage.`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          solution: [
            `Formula: {{"Market Share (%)" = ("Firm Sales" / "Total Market Sales") * 100}}.`,
            `Substitute: (£${big(sales)} ÷ £${big(market)}) × 100 = **${pct}%**.`,
          ],
          hint: "Divide the firm's sales by total market sales, then multiply by 100.",
          traps: [
            {
              spec: { type: "number", value: roundTo(pct / 100, 4) },
              feedback: "Remember to multiply the decimal proportion by 100 to express market share as a percentage!",
            },
          ],
        };
      }

      if (tier === 2) {
        const oldSales = rng.int(12, 60) * 10000;
        const growthPct = rng.pick([5, 8, 10, 12, 15, 20, 25, 30]);
        const newSales = clean(oldSales * (1 + growthPct / 100));
        return {
          prompt: `**${firm} Ltd** grew its annual sales from **£${big(oldSales)}** in Year 1 to **£${big(newSales)}** in Year 2 against a SMART sales growth objective. Calculate the **percentage increase in sales** from Year 1 to Year 2.`,
          answer: { type: "number", value: growthPct, display: `${growthPct}%` },
          solution: [
            `Increase in sales = £${big(newSales)} − £${big(oldSales)} = £${big(newSales - oldSales)}.`,
            `Percentage growth = {{((New - Old) / Old) * 100}} = (£${big(newSales - oldSales)} ÷ £${big(oldSales)}) × 100 = **${growthPct}%**.`,
          ],
          hint: "Divide the change in sales by the ORIGINAL (Year 1) sales, then multiply by 100.",
          traps: [
            {
              spec: { type: "number", value: roundTo(((newSales - oldSales) / newSales) * 100, 2) },
              feedback: "You divided by Year 2 sales — always divide by the ORIGINAL Year 1 sales figure!",
            },
          ],
        };
      }

      // Tier 3: Required extra sales to hit a SMART market share target when total market also grows
      const curMarket = rng.pick([2000000, 4000000, 5000000, 8000000, 10000000]);
      const mktGrowth = rng.pick([5, 10, 15, 20]);
      const nextMarket = clean(curMarket * (1 + mktGrowth / 100));
      const targetShare = rng.pick([8, 10, 12, 15, 18, 20]);
      const curSales = rng.int(10, 35) * 10000;
      const neededSales = clean((nextMarket * targetShare) / 100);
      if (neededSales <= curSales) {
        const adjustedNeeded = curSales + 120000;
        const simpleMarket = rng.pick([3000000, 5000000, 6000000]);
        const shareReq = rng.pick([15, 20, 25]);
        const reqRev = clean((simpleMarket * shareReq) / 100);
        return {
          prompt: `Total market sales next year are forecast to reach **£${big(simpleMarket)}**. **${firm} Plc** sets a SMART objective to capture **${shareReq}%** market share next year. What annual revenue must **${firm} Plc** achieve to meet this target, in £?`,
          answer: { type: "number", value: reqRev, display: `£${big(reqRev)}` },
          solution: [
            `Required revenue = Total Forecast Market × Target Market Share = £${big(simpleMarket)} × ${shareReq}% = **£${big(reqRev)}**.`,
          ],
          hint: `Find ${shareReq}% of the £${big(simpleMarket)} forecast market.`,
          traps: [
            {
              spec: { type: "number", value: adjustedNeeded },
              feedback: "Multiply total forecast market sales by the target percentage divided by 100.",
            },
          ],
        };
      }
      const extraSales = neededSales - curSales;
      return {
        prompt: `This year **${firm} Ltd** earned **£${big(curSales)}** in a regional market worth **£${big(curMarket)}**. Next year the total market will grow by **${mktGrowth}%**, and ${firm} Ltd's SMART target is to reach **${targetShare}% market share**. By how much must ${firm} Ltd **increase its annual revenue** (in £) to hit that target?`,
        answer: { type: "number", value: extraSales, display: `£${big(extraSales)}` },
        solution: [
          `Next year's total market size = £${big(curMarket)} × (1 + ${mktGrowth}/100) = £${big(nextMarket)}.`,
          `Revenue required for ${targetShare}% share = £${big(nextMarket)} × ${targetShare}% = £${big(neededSales)}.`,
          `Required increase in revenue = £${big(neededSales)} − £${big(curSales)} = **£${big(extraSales)}**.`,
        ],
        hint: "Step 1: grow the total market by the forecast %. Step 2: take the target % of that new market. Step 3: subtract this year's sales.",
        traps: [
          {
            spec: { type: "number", value: neededSales },
            feedback: `£${big(neededSales)} is the total target revenue — subtract current revenue (£${big(curSales)}) to find the required increase!`,
          },
          {
            spec: { type: "number", value: clean((curMarket * targetShare) / 100 - curSales) },
            feedback: `Remember that the total market itself grows by ${mktGrowth}% next year before taking ${targetShare}%!`,
          },
        ],
      };
    },
  },
  {
    id: "business-activity.franchise-royalty",
    topicId: "business-activity",
    title: "Franchisee royalties, fees & operating profit",
    level: 2,
    guideRef: "franchises-social-public",
    generate(rng, tier) {
      const owner = rng.pick(FOUNDERS);
      const brand = rng.pick(["RoostKing", "FitPulse", "BeanWave", "SparkClean", "WokExpress", "TutorZone"]);
      const rev = rng.int(16, 55) * 10000;
      const royaltyPct = rng.pick([5, 6, 7, 8, 9, 10]);

      if (tier === 1) {
        const royalty = clean((rev * royaltyPct) / 100);
        return {
          prompt: `${owner} operates a **${brand}** outlet as a **franchisee**. Branch revenue this year is **£${big(rev)}**, and the franchise contract charges a **${royaltyPct}% ongoing royalty on revenue**. Calculate the annual royalty ${owner} must pay to the franchisor, in £.`,
          answer: { type: "number", value: royalty, display: `£${big(royalty)}` },
          solution: [
            `Franchise royalties are calculated as a percentage of **revenue** (turnover).`,
            `Royalty = £${big(rev)} × ${royaltyPct}% = **£${big(royalty)}**.`,
          ],
          hint: `Multiply branch revenue (£${big(rev)}) by ${royaltyPct} ÷ 100.`,
          traps: [
            {
              spec: { type: "number", value: rev - royalty },
              feedback: `£${big(rev - royalty)} is revenue remaining after the royalty — the question asks for the royalty paid to the franchisor.`,
            },
          ],
        };
      }

      const mktPct = rng.pick([1, 2, 3]);
      const localCosts = clean(Math.round((rev * rng.int(58, 76)) / 10000) * 100);
      const totalFeeDeduction = clean((rev * (royaltyPct + mktPct)) / 100);
      const opProfit = rev - localCosts - totalFeeDeduction;

      if (tier === 2) {
        return {
          prompt: `As a **${brand} franchisee**, ${owner} generates **£${big(rev)}** in annual revenue. The franchisor charges a **${royaltyPct}% royalty** plus a **${mktPct}% national advertising levy** on all revenue. Local branch wages, rent and ingredients cost **£${big(localCosts)}**. Calculate ${owner}'s annual operating profit, in £.`,
          answer: { type: "number", value: opProfit, display: `£${big(opProfit)}` },
          solution: [
            `Combined franchisor charges = (${royaltyPct}% + ${mktPct}%) of £${big(rev)} = ${royaltyPct + mktPct}% × £${big(rev)} = £${big(totalFeeDeduction)}.`,
            `Total branch expenses = £${big(localCosts)} + £${big(totalFeeDeduction)} = £${big(localCosts + totalFeeDeduction)}.`,
            `Operating profit = £${big(rev)} − £${big(localCosts + totalFeeDeduction)} = **£${big(opProfit)}**.`,
          ],
          hint: "Remember royalties and marketing levies are based on REVENUE, not on profit after local costs!",
          traps: [
            {
              spec: { type: "number", value: roundTo((rev - localCosts) * (1 - (royaltyPct + mktPct) / 100), 2) },
              feedback: "Trap! Franchise royalties are charged on total REVENUE (£" + big(rev) + "), not on profit after local costs!",
            },
            {
              spec: { type: "number", value: rev - localCosts - clean((rev * royaltyPct) / 100) },
              feedback: `Don't forget to subtract the ${mktPct}% national advertising levy (£${big(clean((rev * mktPct) / 100))}) as well!`,
            },
          ],
        };
      }

      // Tier 3: First-year net return after one-off start-up franchise fee as well
      const startupFee = rng.int(15, 35) * 1000;
      const netAfterStartup = opProfit - startupFee;
      return {
        prompt: `${owner} pays a one-off **£${big(startupFee)} start-up franchise fee** to open a **${brand}** branch. In Year 1, revenue is **£${big(rev)}**, local running costs are **£${big(localCosts)}**, and ongoing franchisor fees are **${royaltyPct}% royalty + ${mktPct}% marketing levy** on revenue. Calculate ${owner}'s net Year 1 surplus/deficit **after deducting the upfront start-up fee** as well (use a minus sign if negative), in £.`,
        answer: { type: "number", value: netAfterStartup, display: `${netAfterStartup < 0 ? "−" : ""}£${big(Math.abs(netAfterStartup))}` },
        solution: [
          `Ongoing franchisor charges = ${royaltyPct + mktPct}% × £${big(rev)} = £${big(totalFeeDeduction)}.`,
          `Year 1 trading profit before upfront fee = £${big(rev)} − £${big(localCosts)} − £${big(totalFeeDeduction)} = £${big(opProfit)}.`,
          `Net Year 1 surplus after £${big(startupFee)} start-up fee = £${big(opProfit)} − £${big(startupFee)} = **${netAfterStartup < 0 ? "−" : ""}£${big(Math.abs(netAfterStartup))}**.`,
        ],
        hint: "Subtract local costs, revenue-based royalties/levies, AND the one-off start-up fee from Year 1 revenue.",
        traps: [
          {
            spec: { type: "number", value: opProfit },
            feedback: `£${big(opProfit)} is trading profit before deducting the £${big(startupFee)} one-off start-up franchise fee.`,
          },
        ],
      };
    },
  },
  {
    id: "business-activity.sector-stakeholder-calc",
    topicId: "business-activity",
    title: "Economic sector shares & stakeholder wage trade-offs",
    level: 3,
    guideRef: "sectors-and-success",
    generate(rng, tier) {
      if (tier === 1) {
        const total = rng.pick([200, 250, 400, 500, 800, 1000]);
        const primPct = rng.int(3, 12);
        const secPct = rng.int(15, 28);
        const tertPct = 100 - primPct - secPct;
        const primVal = clean((total * primPct) / 100);
        const secVal = clean((total * secPct) / 100);
        return {
          prompt: `An economy has a total GDP of **$ ${big(total)} billion**. Its **primary sector** generates **$ ${big(primVal)} billion** and its **secondary sector** generates **$ ${big(secVal)} billion**, with the rest coming from the **tertiary sector**. What **percentage** of total GDP comes from the tertiary sector?`,
          answer: { type: "number", value: tertPct, display: `${tertPct}%` },
          solution: [
            `Tertiary GDP = $${big(total)}bn − ($${big(primVal)}bn + $${big(secVal)}bn) = $${big(clean(total - primVal - secVal))}bn.`,
            `Tertiary share = (${clean(total - primVal - secVal)} ÷ ${total}) × 100 = **${tertPct}%**.`,
          ],
          hint: "Subtract primary and secondary output from total GDP first, then divide by total GDP × 100.",
          traps: [
            {
              spec: { type: "number", value: clean(total - primVal - secVal) },
              feedback: "That is the dollar output in billions — convert it into a percentage of total GDP!",
            },
            {
              spec: { type: "number", value: primPct + secPct },
              feedback: `${primPct + secPct}% is the combined primary + secondary share; subtract from 100% to get the tertiary share.`,
            },
          ],
        };
      }

      const firm = rng.pick(FIRMS);
      const staff = rng.int(12, 45);
      const avgWage = rng.int(22, 36) * 1000;
      const wageRisePct = rng.pick([4, 5, 6, 8, 10]);
      const curOpProfit = rng.int(120, 290) * 1000;
      const wageBill = staff * avgWage;
      const extraWage = clean((wageBill * wageRisePct) / 100);
      const newOpProfit = curOpProfit - extraWage;

      if (tier === 2) {
        return {
          prompt: `**${firm} Ltd** employs **${staff} workers** on an average annual salary of **£${big(avgWage)}**. Current annual operating profit is **£${big(curOpProfit)}**. Trade union representatives negotiate a **${wageRisePct}% pay rise** for all staff. Assuming revenue and other costs stay constant in the short run, calculate **new operating profit** in £.`,
          answer: { type: "number", value: newOpProfit, display: `£${big(newOpProfit)}` },
          solution: [
            `Current annual wage bill = ${staff} × £${big(avgWage)} = £${big(wageBill)}.`,
            `Extra cost of a ${wageRisePct}% pay rise = £${big(wageBill)} × ${wageRisePct}% = £${big(extraWage)}.`,
            `New operating profit = £${big(curOpProfit)} − £${big(extraWage)} = **£${big(newOpProfit)}**.`,
          ],
          hint: "Multiply staff count by average salary to get the total wage bill, take the % rise, and subtract from operating profit.",
          traps: [
            {
              spec: { type: "number", value: extraWage },
              feedback: `£${big(extraWage)} is the extra wage cost — subtract it from £${big(curOpProfit)} to find the new operating profit!`,
            },
            {
              spec: { type: "number", value: roundTo(curOpProfit * (1 - wageRisePct / 100), 2) },
              feedback: `Apply the ${wageRisePct}% increase to the WAGE BILL (${staff} × £${big(avgWage)}), not directly to operating profit!`,
            },
          ],
        };
      }

      // Tier 3: Productivity boost partially or more than offsets the wage rise!
      const revGainPct = rng.pick([2, 3, 4, 5]);
      const curRev = rng.int(120, 260) * 10000;
      const revGain = clean((curRev * revGainPct) / 100);
      const netProfitAfterBoth = curOpProfit - extraWage + revGain;
      return {
        prompt: `**${firm} Ltd** (${staff} employees on **£${big(avgWage)}** average pay; current revenue **£${big(curRev)}**; current operating profit **£${big(curOpProfit)}**) awards a **${wageRisePct}% pay rise**. Higher morale cuts staff mistakes and lifts annual revenue by **${revGainPct}%** with zero extra material costs. Calculate **${firm} Ltd**'s new operating profit, in £.`,
        answer: { type: "number", value: netProfitAfterBoth, display: `£${big(netProfitAfterBoth)}` },
        solution: [
          `Extra wage cost = (${staff} × £${big(avgWage)}) × ${wageRisePct}% = £${big(wageBill)} × ${wageRisePct}% = £${big(extraWage)}.`,
          `Extra revenue from higher morale = £${big(curRev)} × ${revGainPct}% = £${big(revGain)}.`,
          `New operating profit = £${big(curOpProfit)} − £${big(extraWage)} + £${big(revGain)} = **£${big(netProfitAfterBoth)}**.`,
        ],
        hint: "Adjust current operating profit by subtracting the extra wage bill cost and adding the extra revenue gained.",
        traps: [
          {
            spec: { type: "number", value: newOpProfit },
            feedback: `You deducted the £${big(extraWage)} wage rise, but forgot to add the ${revGainPct}% (£${big(revGain)}) revenue gain from improved staff morale!`,
          },
        ],
      };
    },
  },
];
