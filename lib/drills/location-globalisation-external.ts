import type { Drill } from "./types.ts";
import { big, clean, roundTo } from "./helpers.ts";

const UK_FIRMS = [
  "Cotswold Knitwear",
  "Severn Robotics",
  "Albion Tea",
  "Thames Audio",
  "Pennine Cycles",
  "Solent Marine",
  "Caledonia Spirits",
  "Camden Roasters",
  "Wessex Ceramics",
  "Mercia Biosensors",
] as const;

const CURRENCIES = [
  { code: "USD", sym: "$", name: "US dollars", rates: [1.2, 1.25, 1.3, 1.4, 1.5, 1.6] },
  { code: "EUR", sym: "€", name: "euros", rates: [1.1, 1.15, 1.2, 1.25, 1.3] },
] as const;

export const drills: Drill[] = [
  {
    id: "location-globalisation-external.exchange-conversion",
    topicId: "location-globalisation-external",
    title: "Exchange-rate conversions & SPICED/WPIDEC price shocks",
    level: 1,
    guideRef: "trade-exchange-rates",
    generate(rng, tier) {
      const firm = rng.pick(UK_FIRMS);
      const cur = rng.pick(CURRENCIES);

      if (tier === 1) {
        const exportDir = rng.bool();
        const rate = rng.pick(cur.rates);
        if (exportDir) {
          const gbp = rng.int(8, 65) * 20;
          const foreign = roundTo(gbp * rate, 2);
          const wrongDiv = roundTo(gbp / rate, 2);
          return {
            prompt: `**${firm} Ltd** exports a batch of goods priced at **£${big(gbp)}** to a buyer paying in ${cur.name} (${cur.sym}). The exchange rate is **£1 = ${cur.sym}${rate.toFixed(2)}**. Calculate the price paid by the overseas buyer in **${cur.sym}** (to the nearest whole ${cur.code} if exact, or 2 d.p.).`,
            answer: { type: "number", value: foreign, tolerance: 0.01, display: `${cur.sym}${big(foreign)}` },
            solution: [
              `Converting Home (£) → Foreign (${cur.sym}): **multiply** by the exchange rate.`,
              `£${big(gbp)} × ${rate.toFixed(2)} = **${cur.sym}${big(foreign)}**.`,
            ],
            hint: `£1 buys ${cur.sym}${rate.toFixed(2)}, so multiply the £ price by ${rate.toFixed(2)}.`,
            traps: [
              {
                spec: { type: "number", value: wrongDiv, tolerance: 0.02 },
                feedback: `You divided instead of multiplying! Since £1 = ${cur.sym}${rate.toFixed(2)}, the ${cur.sym} figure must be LARGER than ${gbp}.`,
              },
            ],
          };
        }
        // Import: Foreign -> GBP (choose gbp first so division is 100% exact!)
        const exactGbp = rng.int(10, 80) * 20;
        const foreignInvoice = clean(exactGbp * rate);
        const wrongMult = roundTo(foreignInvoice * rate, 2);
        return {
          prompt: `**${firm} Ltd** imports components invoiced at **${cur.sym}${big(foreignInvoice)}** when the exchange rate is **£1 = ${cur.sym}${rate.toFixed(2)}**. Calculate the cost of this import in **£**.`,
          answer: { type: "number", value: exactGbp, display: `£${big(exactGbp)}` },
          solution: [
            `Converting Foreign (${cur.sym}) → Home (£): **divide** by the exchange rate.`,
            `${cur.sym}${big(foreignInvoice)} ÷ ${rate.toFixed(2)} = **£${big(exactGbp)}**.`,
          ],
          hint: `When converting ${cur.sym} back into £, divide the ${cur.sym} invoice by ${rate.toFixed(2)}.`,
          traps: [
            {
              spec: { type: "number", value: wrongMult, tolerance: 0.02 },
              feedback: `You multiplied instead of dividing! Convert ${cur.sym} → £ by dividing ${cur.sym}${big(foreignInvoice)} by ${rate.toFixed(2)}.`,
            },
          ],
        };
      }

      if (tier === 2) {
        // Appreciation/depreciation change in import £ cost
        const pairs: Array<[number, number]> = [
          [1.2, 1.5],
          [1.25, 1.6],
          [1.2, 1.6],
          [1.5, 1.2],
          [1.6, 1.25],
          [1.25, 1.0],
        ];
        const [r1, r2] = rng.pick(pairs);
        const baseUnit = rng.int(6, 45) * 100; // multiple of 100 so /1.2, /1.25, /1.5, /1.6 are clean when scaled by 6!
        const invoice = baseUnit * 6; // divisible by 1.2, 1.25, 1.5, 1.6!
        const oldGbp = roundTo(invoice / r1, 2);
        const newGbp = roundTo(invoice / r2, 2);
        const diff = roundTo(Math.abs(newGbp - oldGbp), 2);
        const appreciated = r2 > r1;
        return {
          prompt: `**${firm} Ltd** imports raw materials priced at **$ ${big(invoice)}** from a US supplier. The exchange rate moves from **£1 = $${r1.toFixed(2)}** to **£1 = $${r2.toFixed(2)}** (${appreciated ? "pound appreciates — SPICED" : "pound depreciates — WPIDEC"}). By how many **£** does the sterling cost of this shipment ${appreciated ? "**fall**" : "**increase**"}?`,
          answer: { type: "number", value: diff, tolerance: 0.01, display: `£${big(diff)}` },
          solution: [
            `Old sterling cost = $${big(invoice)} ÷ ${r1.toFixed(2)} = £${big(oldGbp)}.`,
            `New sterling cost = $${big(invoice)} ÷ ${r2.toFixed(2)} = £${big(newGbp)}.`,
            `Change in import cost = |£${big(newGbp)} − £${big(oldGbp)}| = **£${big(diff)}** (${appreciated ? "cheaper under SPICED" : "dearer under WPIDEC"}).`,
          ],
          hint: "Divide the $ invoice by the old exchange rate and by the new exchange rate, then find the £ difference.",
          traps: [
            {
              spec: { type: "number", value: newGbp },
              feedback: `£${big(newGbp)} is the NEW sterling cost — subtract to find how much the cost changed (£${big(diff)})!`,
            },
            {
              spec: { type: "number", value: roundTo(Math.abs(invoice * r2 - invoice * r1), 2) },
              feedback: "Remember to DIVIDE dollars by the £/$ exchange rate rather than multiplying!",
            },
          ],
        };
      }

      // Tier 3: Combined import cost + % tariff after exchange-rate shift
      const r = rng.pick([1.2, 1.25, 1.5, 1.6]);
      const gbpPreTariff = rng.int(12, 65) * 100;
      const usdInvoice = clean(gbpPreTariff * r);
      const tariffPct = rng.pick([8, 10, 12, 15, 20, 25]);
      const landedGbp = clean(gbpPreTariff * (1 + tariffPct / 100));
      return {
        prompt: `**${firm} Ltd** imports precision machinery from Chicago invoiced at **$${big(usdInvoice)}** when **£1 = $${r.toFixed(2)}**. Customs authorities also charge a **${tariffPct}% import tariff** on the sterling value. Calculate the **total landed cost in £** (including the tariff).`,
        answer: { type: "number", value: landedGbp, display: `£${big(landedGbp)}` },
        solution: [
          `Convert $${big(usdInvoice)} to £: $${big(usdInvoice)} ÷ ${r.toFixed(2)} = £${big(gbpPreTariff)}.`,
          `Import tariff (${tariffPct}%) = £${big(gbpPreTariff)} × ${tariffPct}% = £${big(clean((gbpPreTariff * tariffPct) / 100))}.`,
          `Total landed cost = £${big(gbpPreTariff)} + £${big(clean((gbpPreTariff * tariffPct) / 100))} = **£${big(landedGbp)}**.`,
        ],
        hint: "Step 1: divide the $ price by the exchange rate to get £. Step 2: add the import tariff percentage.",
        traps: [
          {
            spec: { type: "number", value: gbpPreTariff },
            feedback: `£${big(gbpPreTariff)} is the pre-tariff import cost — don't forget to add the ${tariffPct}% import tariff!`,
          },
          {
            spec: { type: "number", value: roundTo(usdInvoice * r * (1 + tariffPct / 100), 2) },
            feedback: "Divide (don't multiply!) by the exchange rate when converting $ into £.",
          },
        ],
      };
    },
  },
  {
    id: "location-globalisation-external.interest-tax-policy",
    topicId: "location-globalisation-external",
    title: "Interest-rate shocks & corporation tax calculations",
    level: 2,
    guideRef: "government-policies",
    generate(rng, tier) {
      const firm = rng.pick(UK_FIRMS);

      if (tier === 1) {
        const loan = rng.int(4, 30) * 50000;
        const oldRate = rng.pick([3, 3.5, 4, 4.5, 5]);
        const jump = rng.pick([1.5, 2, 2.5, 3, 3.5]);
        const newRate = clean(oldRate + jump);
        const extraInterest = clean((loan * jump) / 100);
        const newTotalInterest = clean((loan * newRate) / 100);
        return {
          prompt: `**${firm} Ltd** has a **£${big(loan)}** variable-rate bank loan. When the central bank raises base rates, the firm's annual loan interest rate rises from **${oldRate}%** to **${newRate}%**. By how much does **${firm} Ltd**'s annual interest expense **increase**, in £?`,
          answer: { type: "number", value: extraInterest, display: `£${big(extraInterest)}` },
          solution: [
            `Old annual interest = £${big(loan)} × ${oldRate}% = £${big(clean((loan * oldRate) / 100))}.`,
            `New annual interest = £${big(loan)} × ${newRate}% = £${big(newTotalInterest)}.`,
            `Annual increase = £${big(newTotalInterest)} − £${big(clean((loan * oldRate) / 100))} = **£${big(extraInterest)}** (${jump}% of £${big(loan)}).`,
          ],
          hint: `Find the rate rise (${newRate}% − ${oldRate}% = ${jump}%) and multiply by the £${big(loan)} loan.`,
          traps: [
            {
              spec: { type: "number", value: newTotalInterest },
              feedback: `£${big(newTotalInterest)} is the NEW total interest bill — subtract the old £${big(clean((loan * oldRate) / 100))} bill to get the increase!`,
            },
          ],
        };
      }

      if (tier === 2) {
        const pbt = rng.int(12, 65) * 10000;
        const corpTaxPct = rng.pick([15, 19, 20, 22, 25, 28]);
        const taxBill = clean((pbt * corpTaxPct) / 100);
        const afterTax = pbt - taxBill;
        return {
          prompt: `**${firm} Ltd** earns **£${big(pbt)}** in profit before tax. The government levies **corporation tax** at **${corpTaxPct}%**. Calculate **${firm} Ltd**'s **after-tax profit** available for retained profit and dividends, in £.`,
          answer: { type: "number", value: afterTax, display: `£${big(afterTax)}` },
          solution: [
            `Corporation tax payable = £${big(pbt)} × ${corpTaxPct}% = £${big(taxBill)}.`,
            `After-tax profit = £${big(pbt)} − £${big(taxBill)} = **£${big(afterTax)}**.`,
          ],
          hint: `Calculate ${corpTaxPct}% of £${big(pbt)} and subtract it from £${big(pbt)}.`,
          traps: [
            {
              spec: { type: "number", value: taxBill },
              feedback: `£${big(taxBill)} is the corporation tax paid to the government — subtract it from £${big(pbt)} for after-tax profit!`,
            },
          ],
        };
      }

      // Tier 3: Operating profit -> deduct variable loan interest -> deduct corporation tax!
      const loan = rng.int(4, 15) * 100000;
      const intRate = rng.pick([5, 6, 7, 8]);
      const interest = clean((loan * intRate) / 100);
      const pbtTarget = rng.int(12, 40) * 10000;
      const opProfit = pbtTarget + interest;
      const taxPct = rng.pick([20, 25]);
      const afterTax = clean(pbtTarget * (1 - taxPct / 100));
      return {
        prompt: `**${firm} Ltd** achieves an **operating profit of £${big(opProfit)}**. It carries a **£${big(loan)}** bank loan at **${intRate}%** annual interest, and pays **${taxPct}% corporation tax** on profit after interest. Calculate **${firm} Ltd**'s final **after-tax profit** for the year, in £.`,
        answer: { type: "number", value: afterTax, display: `£${big(afterTax)}` },
        solution: [
          `Loan interest expense = £${big(loan)} × ${intRate}% = £${big(interest)}.`,
          `Profit before tax = £${big(opProfit)} − £${big(interest)} = £${big(pbtTarget)}.`,
          `After-tax profit (after ${taxPct}% corporation tax) = £${big(pbtTarget)} × (1 − ${taxPct}/100) = **£${big(afterTax)}**.`,
        ],
        hint: "Deduct annual loan interest from operating profit FIRST to get profit before tax, then deduct corporation tax!",
        traps: [
          {
            spec: { type: "number", value: clean(opProfit * (1 - taxPct / 100) - interest) },
            feedback: "Deduct loan interest BEFORE calculating corporation tax (interest is tax-deductible before profit before tax)!",
          },
          {
            spec: { type: "number", value: pbtTarget },
            feedback: `£${big(pbtTarget)} is profit before tax — remember to deduct ${taxPct}% corporation tax as well!`,
          },
        ],
      };
    },
  },
  {
    id: "location-globalisation-external.location-site-choice",
    topicId: "location-globalisation-external",
    title: "Location cost, grant & contribution site comparison",
    level: 2,
    guideRef: "location-decisions",
    generate(rng, tier) {
      const firm = rng.pick(UK_FIRMS);

      if (tier === 1) {
        const buildCost = rng.int(18, 60) * 10000;
        const grantPct = rng.pick([10, 15, 20, 25, 30]);
        const grant = clean((buildCost * grantPct) / 100);
        const netCap = buildCost - grant;
        return {
          prompt: `To attract jobs to an enterprise zone, the regional government offers **${firm} Ltd** a **${grantPct}% capital location grant** towards a new **£${big(buildCost)}** workshop. How much **net capital (£)** must **${firm} Ltd** fund itself after receiving the grant?`,
          answer: { type: "number", value: netCap, display: `£${big(netCap)}` },
          solution: [
            `Government location grant = £${big(buildCost)} × ${grantPct}% = £${big(grant)}.`,
            `Net capital required from ${firm} Ltd = £${big(buildCost)} − £${big(grant)} = **£${big(netCap)}**.`,
          ],
          hint: `Subtract ${grantPct}% of £${big(buildCost)} from £${big(buildCost)}.`,
          traps: [
            {
              spec: { type: "number", value: grant },
              feedback: `£${big(grant)} is the grant received — subtract it from £${big(buildCost)} to find what the firm must fund itself!`,
            },
          ],
        };
      }

      const contribPerUnit = rng.pick([20, 25, 30, 40, 50]);
      const highStVol = rng.int(25, 50) * 100;
      const outVol = highStVol - rng.int(4, 10) * 100;
      const highStRent = rng.int(65, 110) * 1000;
      const outRent = rng.int(22, 42) * 1000;
      const fixedStaff = rng.int(50, 90) * 1000;

      if (tier === 2) {
        const profitOut = outVol * contribPerUnit - outRent - fixedStaff;
        return {
          prompt: `**${firm} Ltd** evaluates an **Out-of-Town Industrial Site** where annual rent is **£${big(outRent)}**, fixed staff wages are **£${big(fixedStaff)}**, forecast sales are **${big(outVol)} units**, and contribution per unit is **£${contribPerUnit}**. Calculate the annual **operating profit** at this site, in £.`,
          answer: { type: "number", value: profitOut, display: `£${big(profitOut)}` },
          solution: [
            `Total contribution = ${big(outVol)} × £${contribPerUnit} = £${big(outVol * contribPerUnit)}.`,
            `Total fixed costs = £${big(outRent)} + £${big(fixedStaff)} = £${big(outRent + fixedStaff)}.`,
            `Operating profit = £${big(outVol * contribPerUnit)} − £${big(outRent + fixedStaff)} = **£${big(profitOut)}**.`,
          ],
          hint: "Total Contribution (units × £ contribution) minus Total Fixed Costs (rent + staff wages).",
          traps: [
            {
              spec: { type: "number", value: outVol * contribPerUnit - outRent },
              feedback: `Don't forget to deduct the £${big(fixedStaff)} fixed staff wages as well as rent!`,
            },
          ],
        };
      }

      // Tier 3: Compare High Street vs Out-of-Town profit difference
      const profitHigh = highStVol * contribPerUnit - highStRent - fixedStaff;
      const profitOut = outVol * contribPerUnit - outRent - fixedStaff;
      let gap = Math.abs(profitHigh - profitOut);
      if (gap === 0) gap = contribPerUnit * 100;
      const actualHigh = profitHigh === profitOut ? profitHigh + gap : profitHigh;
      const adjHighRent = profitHigh === profitOut ? highStRent - gap : highStRent;
      const absDiff = Math.abs(actualHigh - profitOut);
      return {
        prompt: `**${firm} Ltd** earns **£${contribPerUnit} contribution per unit** (fixed wages **£${big(fixedStaff)}** at both sites). **Site Central** costs **£${big(adjHighRent)}** rent and sells **${big(highStVol)} units**; **Site Park** costs **£${big(outRent)}** rent and sells **${big(outVol)} units**. Calculate the **positive difference in annual operating profit (£)** between the two sites.`,
        answer: { type: "number", value: absDiff, display: `£${big(absDiff)}` },
        solution: [
          `Site Central profit = (${big(highStVol)} × £${contribPerUnit}) − £${big(adjHighRent)} − £${big(fixedStaff)} = £${big(actualHigh)}.`,
          `Site Park profit = (${big(outVol)} × £${contribPerUnit}) − £${big(outRent)} − £${big(fixedStaff)} = £${big(profitOut)}.`,
          `Difference between sites = |£${big(actualHigh)} − £${big(profitOut)}| = **£${big(absDiff)}**.`,
        ],
        hint: "Calculate operating profit at Site Central and at Site Park, then find the £ gap between them.",
        traps: [
          {
            spec: { type: "number", value: adjHighRent - outRent + 137 },
            feedback: "Compare BOTH the rent saving AND the difference in unit sales × contribution!",
          },
        ],
      };
    },
  },
  {
    id: "location-globalisation-external.mnc-ethics-tradeoff",
    topicId: "location-globalisation-external",
    title: "MNC profit repatriation & ethical sourcing margin check",
    level: 3,
    guideRef: "globalisation-mncs",
    generate(rng, tier) {
      const firm = rng.pick(UK_FIRMS);

      if (tier === 1) {
        const afterTaxM = rng.int(12, 80);
        const repatPct = rng.pick([60, 65, 70, 75, 80, 85]);
        const repatM = roundTo((afterTaxM * repatPct) / 100, 2);
        const retainedM = roundTo(afterTaxM - repatM, 2);
        return {
          prompt: `Multinational **${firm} Plc** earns **$ ${afterTaxM} million** in after-tax profit at its overseas assembly plant and **repatriates ${repatPct}%** back to its UK headquarters. How many **$ millions** are repatriated (give exact decimal if needed)?`,
          answer: { type: "number", value: repatM, tolerance: 0.01, display: `$${repatM} million` },
          solution: [
            `Profit repatriated = $${afterTaxM}m × ${repatPct}% = **$${repatM} million** (leaving $${retainedM}m reinvested in the host country).`,
          ],
          hint: `Multiply $${afterTaxM}m by ${repatPct} ÷ 100.`,
          traps: [
            {
              spec: { type: "number", value: retainedM === repatM ? afterTaxM : retainedM, tolerance: 0.01 },
              feedback: `Careful — calculate the ${repatPct}% sent back to headquarters, not the remainder kept locally!`,
            },
          ],
        };
      }

      if (tier === 2) {
        const opProfitM = rng.int(20, 90);
        const hostTaxPct = rng.pick([15, 20, 25]);
        const repatPct = rng.pick([60, 75, 80]);
        const afterTaxM = roundTo(opProfitM * (1 - hostTaxPct / 100), 2);
        const repatM = roundTo((afterTaxM * repatPct) / 100, 2);
        return {
          prompt: `**${firm} Plc**'s factory in a host country makes **$ ${opProfitM} million** operating profit, pays **${hostTaxPct}% host corporation tax**, and **repatriates ${repatPct}%** of its after-tax profit to its home country. Calculate the **$ millions** repatriated (to 2 d.p. if needed).`,
          answer: { type: "number", value: repatM, tolerance: 0.01, display: `$${repatM} million` },
          solution: [
            `After-tax profit in host country = $${opProfitM}m × (1 − ${hostTaxPct}/100) = $${afterTaxM}m.`,
            `Profit repatriated (${repatPct}%) = $${afterTaxM}m × ${repatPct}% = **$${repatM} million**.`,
          ],
          hint: "First deduct host corporation tax, then take the repatriation % of after-tax profit.",
          traps: [
            {
              spec: { type: "number", value: roundTo((opProfitM * repatPct) / 100, 2), tolerance: 0.01 },
              feedback: `Deduct the ${hostTaxPct}% host corporation tax BEFORE calculating profit repatriation!`,
            },
          ],
        };
      }

      // Tier 3: Ethical sourcing extra VC vs ethical price premium + volume lift
      const units = rng.int(10, 45) * 1000;
      const oldPrice = rng.int(10, 24);
      const oldVc = rng.int(4, oldPrice - 4);
      const extraVc = rng.pick([1, 2]);
      const extraPrice = rng.pick([2, 3, 4]);
      const volLiftPct = rng.pick([5, 10, 15, 20]);
      const oldContrib = units * (oldPrice - oldVc);
      const newUnits = clean(units * (1 + volLiftPct / 100));
      const newUnitContrib = oldPrice + extraPrice - (oldVc + extraVc);
      const newContrib = newUnits * newUnitContrib;
      const gain = newContrib - oldContrib;
      return {
        prompt: `**${firm} Ltd** sells **${big(units)} units** at **£${oldPrice}** each with variable costs of **£${oldVc}** per unit. Adopting certified Fairtrade & plastic-free inputs raises variable cost by **£${extraVc}/unit**, while stronger ethical branding lets it raise price by **£${extraPrice}/unit** and lifts sales volume by **${volLiftPct}%**. Calculate the **increase in total contribution (£)**.`,
        answer: { type: "number", value: gain, display: `£${big(gain)}` },
        solution: [
          `Old contribution = ${big(units)} × (£${oldPrice} − £${oldVc}) = ${big(units)} × £${oldPrice - oldVc} = £${big(oldContrib)}.`,
          `New unit contribution = (£${oldPrice + extraPrice} − £${oldVc + extraVc}) = £${newUnitContrib}; new volume = ${big(units)} × (1 + ${volLiftPct}/100) = ${big(newUnits)} units.`,
          `New total contribution = ${big(newUnits)} × £${newUnitContrib} = £${big(newContrib)}.`,
          `Increase in contribution = £${big(newContrib)} − £${big(oldContrib)} = **£${big(gain)}**.`,
        ],
        hint: "Compare (New Volume × New Contribution per unit) against (Old Volume × Old Contribution per unit).",
        traps: [
          {
            spec: { type: "number", value: newContrib },
            feedback: `£${big(newContrib)} is the NEW total contribution — subtract the original £${big(oldContrib)} to get the increase!`,
          },
        ],
      };
    },
  },
];
