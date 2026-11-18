import type { Drill, Rng } from "./types.ts";

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

const FIRMS_SME = [
  "Harbour Bakery",
  "Oakwood Joinery",
  "PixelPrint Studio",
  "GreenLeaf Café",
  "VoltCycle Workshop",
  "Petal & Stem Florist",
  "SunnySide Nursery",
  "Coastline Kayak Hire",
] as const;

const FIRMS_PLC = [
  "MetroMart PLC",
  "SwiftHaul Logistics PLC",
  "AeroParts Engineering PLC",
  "CloudPulse Tech PLC",
  "Horizon Hotels PLC",
  "CrestCare Pharmacies PLC",
  "NordicHome Retail PLC",
  "TeleFirst Contact PLC",
] as const;

const ROLES = [
  "baristas",
  "warehouse pickers",
  "machinists",
  "call-centre agents",
  "delivery drivers",
  "sales assistants",
  "technicians",
  "assemblers",
] as const;

export const drills: Drill[] = [
  {
    id: "motivation-organisation.turnover-productivity",
    topicId: "motivation-organisation",
    title: "Labour Turnover (%) & Productivity Calculator",
    level: 1,
    guideRef: "motivation-theories",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(tier === 1 ? FIRMS_SME : FIRMS_PLC);
      const role = rng.pick(ROLES);

      if (tier === 1) {
        const mode = rng.bool(0.5) ? "turnover" : "productivity";
        if (mode === "turnover") {
          const staff = rng.pick([20, 25, 40, 50, 80, 200]);
          const pct = rng.int(5, 35);
          const leavers = Math.max(1, Math.round((staff * pct) / 100));
          const ans = round2((leavers / staff) * 100);
          return {
            prompt: `**${firm}** employs an average of **${staff} ${role}**. During the year, **${leavers} ${role}** resign and leave the business. Calculate annual **labour turnover (%)** *(round to 2 d.p. if needed)*.`,
            answer: { type: "number", value: ans, tolerance: 0.02, display: `${ans}%` },
            hint: "Use Labour Turnover (%) = (Staff leaving ÷ Average number of staff) × 100.",
            solution: [
              `Apply formula: {{(${leavers} / ${staff}) * 100 = ${ans}%}}.`,
            ],
            traps: [
              {
                spec: { type: "number", value: round2(ans / 100) },
                feedback: "Multiply the decimal by 100 to state labour turnover as a percentage!",
              },
              ...(leavers !== ans
                ? [
                    {
                      spec: { type: "number" as const, value: leavers },
                      feedback: `${leavers} is the headcount of leavers — divide by ${staff} and multiply by 100!`,
                    },
                  ]
                : []),
            ],
          };
        }
        const workers = rng.int(8, 35);
        const perWorker = rng.int(12, 65);
        const totalOut = workers * perWorker;
        return {
          prompt: `At **${firm}**, **${workers} ${role}** produce a combined total of **${totalOut.toLocaleString("en-GB")} units** per week. Calculate weekly **labour productivity** (units per worker).`,
          answer: { type: "number", value: perWorker, display: `${perWorker} units` },
          hint: "Labour productivity = Total Output ÷ Number of Employees.",
          solution: [
            `Divide total output by headcount: {{${totalOut} / ${workers} = ${perWorker}}} units per worker.`,
          ],
          traps: [
            {
              spec: { type: "number", value: totalOut - workers },
              feedback: "Divide total output by the number of workers — don't subtract!",
            },
          ],
        };
      }

      if (tier === 2) {
        // Turnover cost calculation
        const staff = rng.pick([40, 50, 60, 80, 120, 150, 200, 250]);
        const pct = rng.pick([10, 15, 20, 25, 30]);
        const leavers = (staff * pct) / 100;
        const costPer = rng.int(12, 38) * 100;
        const totalCost = leavers * costPer;
        return {
          prompt: `**${firm}** employs an average of **${staff} ${role}** and experiences an annual **labour turnover of ${pct}%**. Recruiting and inducting each replacement costs **£${costPer.toLocaleString("en-GB")}**. Calculate **total annual replacement cost** in £.`,
          answer: {
            type: "number",
            value: totalCost,
            display: `£${totalCost.toLocaleString("en-GB")}`,
          },
          hint: "First find the number of leavers (Turnover % × Average staff), then multiply by replacement cost per leaver.",
          solution: [
            `Number of leavers = {{${staff} * ${pct / 100} = ${leavers}}} ${role}.`,
            `Total replacement cost = {{${leavers} * ${costPer} = ${totalCost}}} (**£${totalCost.toLocaleString("en-GB")}**).`,
          ],
          traps: [
            {
              spec: { type: "number", value: leavers },
              feedback: `${leavers} is the number of leavers — multiply by £${costPer.toLocaleString("en-GB")} replacement cost per worker!`,
            },
          ],
        };
      }

      // Tier 3: Productivity % change when BOTH output and headcount change
      const oldW = rng.pick([20, 25, 40, 50]);
      const oldProd = rng.pick([40, 60, 80, 100, 120]);
      const oldOut = oldW * oldProd;
      const deltaW = rng.pick([-5, -4, -2, 4, 5]);
      const newW = oldW + deltaW;
      const pctGain = rng.pick([10, 15, 20, 25, 30]);
      const newProd = (oldProd * (100 + pctGain)) / 100;
      const newOut = newW * newProd;
      const exactPct = pctGain;
      const rawOutPct = round2(((newOut - oldOut) / oldOut) * 100);

      return {
        prompt: `Before introducing job enrichment, **${firm}** employed **${oldW} ${role}** producing **${oldOut.toLocaleString("en-GB")} units** per week. Afterwards, **${newW} ${role}** produce **${newOut.toLocaleString("en-GB")} units** per week. Calculate the **percentage increase in labour productivity** (output per worker).`,
        answer: { type: "number", value: exactPct, tolerance: 0.05, display: `${exactPct}%` },
        hint: "Calculate old output per worker and new output per worker FIRST — don't just find % change in total output!",
        solution: [
          `Old productivity = {{${oldOut} / ${oldW} = ${oldProd}}} units/worker.`,
          `New productivity = {{${newOut} / ${newW} = ${newProd}}} units/worker.`,
          `Percentage increase = {{((${newProd} - ${oldProd}) / ${oldProd}) * 100 = ${exactPct}%}}.`,
        ],
        traps:
          rawOutPct !== exactPct
            ? [
                {
                  spec: { type: "number", value: rawOutPct, tolerance: 0.05 },
                  feedback: `${rawOutPct}% is the change in TOTAL output — divide by headcount (${oldW} vs ${newW}) first to find productivity per worker!`,
                },
              ]
            : undefined,
      };
    },
  },
  {
    id: "motivation-organisation.remuneration-pay",
    topicId: "motivation-organisation",
    title: "Piece-Rate, Overtime & Threshold Commission Pay",
    level: 2,
    guideRef: "financial-rewards",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(FIRMS_SME);
      const names = ["Amira", "Callum", "Priya", "Lucas", "Mei", "Tariq", "Freya", "Noah"] as const;
      const person = rng.pick(names);

      if (tier === 1) {
        const units = rng.int(110, 290);
        const ratePence = rng.pick([120, 140, 150, 175, 180, 220, 240, 250]);
        const rate = ratePence / 100;
        const pay = round2(units * rate);
        return {
          prompt: `At **${firm}**, ${person} is paid a piece-rate of **£${rate.toFixed(2)} per item** assembled and completes **${units} items** this week. Calculate ${person}'s gross weekly pay in £.`,
          answer: { type: "number", value: pay, display: `£${pay.toFixed(2)}` },
          hint: "Piece-rate pay = Units completed × Rate per unit.",
          solution: [
            `Multiply output by piece rate: {{${units} * ${rate.toFixed(2)} = ${pay.toFixed(2)}}} (**£${pay.toFixed(2)}**).`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Overtime 1.5x
          const stdHrs = rng.pick([35, 36, 37, 38, 40]);
          const extraHrs = rng.int(3, 11);
          const totalHrs = stdHrs + extraHrs;
          const hrRate = rng.int(10, 18);
          const otRate = round2(hrRate * 1.5);
          const pay = round2(stdHrs * hrRate + extraHrs * otRate);
          const flatTrap = stdHrs * hrRate + extraHrs * hrRate;
          return {
            prompt: `${person} works at **${firm}** on a **${stdHrs}-hour** weekly contract at **£${hrRate}/hour**, with overtime hours above ${stdHrs} paid at **time-and-a-half (1.5×)**. Last week ${person} worked **${totalHrs} hours**. Calculate ${person}'s gross weekly wage in £.`,
            answer: { type: "number", value: pay, display: `£${pay}` },
            hint: `Split ${totalHrs} hours into ${stdHrs} standard hours at £${hrRate}/hr and ${extraHrs} overtime hours at £${otRate}/hr.`,
            solution: [
              `Standard pay = {{${stdHrs} * ${hrRate} = ${stdHrs * hrRate}}} (£${stdHrs * hrRate}).`,
              `Overtime = {{${totalHrs} - ${stdHrs} = ${extraHrs}}} hrs at {{${hrRate} * 1.5 = ${otRate}}} (£${otRate}/hr) = £${round2(extraHrs * otRate)}.`,
              `Total gross pay = **£${pay}**.`,
            ],
            traps: [
              {
                spec: { type: "number", value: flatTrap },
                feedback: `£${flatTrap} pays overtime at flat standard rate — remember the ${extraHrs} overtime hours earn 1.5× (£${otRate}/hr)!`,
              },
            ],
          };
        }
        // Threshold commission
        const base = rng.int(13, 22) * 100;
        const thresh = rng.int(5, 14) * 1000;
        const extraSales = rng.int(8, 28) * 1000;
        const totalSales = thresh + extraSales;
        const pct = rng.pick([3, 4, 5, 6, 8]);
        const comm = round2((extraSales * pct) / 100);
        const totalPay = round2(base + comm);
        const noThreshTrap = round2(base + (totalSales * pct) / 100);
        return {
          prompt: `${person} sells equipment for **${firm}** on a basic monthly salary of **£${base.toLocaleString("en-GB")}** plus **${pct}% commission** on monthly sales **above £${thresh.toLocaleString("en-GB")}**. This month ${person}'s sales reach **£${totalSales.toLocaleString("en-GB")}**. Calculate ${person}'s gross monthly pay in £.`,
          answer: { type: "number", value: totalPay, display: `£${totalPay.toLocaleString("en-GB")}` },
          hint: `Subtract the £${thresh.toLocaleString("en-GB")} threshold from £${totalSales.toLocaleString("en-GB")} BEFORE taking ${pct}% commission!`,
          solution: [
            `Commissionable sales = {{${totalSales} - ${thresh} = ${extraSales}}} (£${extraSales.toLocaleString("en-GB")}).`,
            `Commission = {{${extraSales} * ${pct / 100} = ${comm}}} (£${comm.toLocaleString("en-GB")}).`,
            `Total monthly pay = {{${base} + ${comm} = ${totalPay}}} (**£${totalPay.toLocaleString("en-GB")}**).`,
          ],
          traps: [
            {
              spec: { type: "number", value: noThreshTrap },
              feedback: `You applied ${pct}% to all £${totalSales.toLocaleString("en-GB")} — remember to subtract the £${thresh.toLocaleString("en-GB")} threshold first!`,
            },
            {
              spec: { type: "number", value: comm },
              feedback: `£${comm} is commission only — add the £${base.toLocaleString("en-GB")} basic monthly salary!`,
            },
          ],
        };
      }

      // Tier 3: Differentiated two-band piece-rate + PRP quality bonus
      const quota = rng.pick([100, 150, 200]);
      const extra = rng.int(25, 95);
      const totalUnits = quota + extra;
      const r1 = rng.pick([1.5, 2.0, 2.5, 3.0]);
      const r2 = round2(r1 + rng.pick([0.6, 0.8, 1.0, 1.2]));
      const bonus = rng.int(3, 9) * 10;
      const basePiece = round2(quota * r1 + extra * r2);
      const hitQuality = rng.bool(0.6);
      const defectPct = hitQuality ? rng.pick([0.5, 1.0, 1.2, 1.5]) : rng.pick([2.5, 3.2, 4.0]);
      const ans = hitQuality ? round2(basePiece + bonus) : basePiece;
      const wrongBonus = hitQuality ? basePiece : round2(basePiece + bonus);

      return {
        prompt: `At **${firm}**, ${person} earns **£${r1.toFixed(2)}** per unit for the first **${quota} passed units** and **£${r2.toFixed(2)}** for each passed unit **above ${quota}**, plus a **£${bonus} quality bonus** strictly if their defect rate is **below 2.0%**. This week ${person} completes **${totalUnits} passed units** with a **${defectPct}%** defect rate. Calculate ${person}'s gross weekly pay in £.`,
        answer: { type: "number", value: ans, display: `£${ans.toFixed(2)}` },
        hint: `Compute (${quota} × £${r1.toFixed(2)}) + (${extra} × £${r2.toFixed(2)}), then check whether ${defectPct}% < 2.0% for the £${bonus} bonus.`,
        solution: [
          `First ${quota} units = {{${quota} * ${r1.toFixed(2)} = ${round2(quota * r1)}}}; extra ${extra} units = {{${extra} * ${r2.toFixed(2)} = ${round2(extra * r2)}}}.`,
          `Piece-rate subtotal = £${basePiece.toFixed(2)}.`,
          hitQuality
            ? `Defect rate ${defectPct}% < 2.0%, so add £${bonus} bonus → **£${ans.toFixed(2)}**.`
            : `Defect rate ${defectPct}% ≥ 2.0%, so quality bonus = £0 → **£${ans.toFixed(2)}**.`,
        ],
        traps: [
          {
            spec: { type: "number", value: wrongBonus },
            feedback: hitQuality
              ? `Since ${defectPct}% is below 2.0%, don't forget to add the £${bonus} quality bonus!`
              : `Check the defect rule: ${defectPct}% is NOT below 2.0%, so ${person} misses the £${bonus} quality bonus!`,
          },
        ],
      };
    },
  },
  {
    id: "motivation-organisation.job-redesign-theorists",
    topicId: "motivation-organisation",
    title: "Enrichment ROI & Absenteeism Solver",
    level: 1,
    guideRef: "non-financial-motivation",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(FIRMS_PLC);
      const role = rng.pick(ROLES);

      if (tier === 1) {
        const staff = rng.int(10, 45);
        const daysPerStaff = 200;
        const totalDays = staff * daysPerStaff;
        const rate = rng.pick([2, 3, 4, 5, 6, 8]);
        const lostDays = (totalDays * rate) / 100;
        return {
          prompt: `**${firm}** has **${staff} ${role}** working 200 days a year (**${totalDays.toLocaleString("en-GB")} total possible working days**). Last year **${lostDays} days** were lost to absence. Calculate the **absenteeism rate (%)**.`,
          answer: { type: "number", value: rate, display: `${rate}%` },
          hint: "Absenteeism (%) = (Working days lost ÷ Total possible working days) × 100.",
          solution: [
            `Absenteeism rate = {{(${lostDays} / ${totalDays}) * 100 = ${rate}%}}.`,
          ],
        };
      }

      if (tier === 2) {
        const trainees = rng.int(6, 24);
        const trainCostEach = rng.int(3, 9) * 100;
        const leaversSaved = rng.int(2, 7);
        const hireCost = rng.int(25, 55) * 100;
        const trainTotal = trainees * trainCostEach;
        const grossSave = leaversSaved * hireCost;
        const net = grossSave - trainTotal;
        return {
          prompt: `**${firm}** spends **£${trainCostEach}** per worker training **${trainees} ${role}** for **job enrichment**. As job satisfaction rises, **${leaversSaved} fewer ${role}** resign this year, saving **£${hireCost.toLocaleString("en-GB")}** per leaver in recruitment fees. Calculate the **net Year 1 financial gain (or net cost if negative)** in £.`,
          answer: { type: "number", value: net, display: net >= 0 ? `£${net.toLocaleString("en-GB")}` : `−£${Math.abs(net).toLocaleString("en-GB")}` },
          hint: "Calculate gross recruitment savings (leavers saved × fee per leaver) minus total training cost.",
          solution: [
            `Recruitment savings = {{${leaversSaved} * ${hireCost} = ${grossSave}}} (£${grossSave.toLocaleString("en-GB")}).`,
            `Training outlay = {{${trainees} * ${trainCostEach} = ${trainTotal}}} (£${trainTotal.toLocaleString("en-GB")}).`,
            `Net Year 1 financial result = {{${grossSave} - ${trainTotal} = ${net}}}.`,
          ],
          traps: [
            {
              spec: { type: "number", value: grossSave },
              feedback: `£${grossSave.toLocaleString("en-GB")} is the gross recruitment saving — subtract the £${trainTotal.toLocaleString("en-GB")} training outlay!`,
            },
          ],
        };
      }

      // Tier 3: Absenteeism reduction agency-cover savings
      const staff = rng.pick([40, 50, 80, 100, 150]);
      const workDays = 220;
      const totalDays = staff * workDays;
      const oldPct = rng.pick([6, 7, 8, 9]);
      const newPct = rng.pick([2, 3, 4]);
      const agencyPerDay = rng.int(11, 22) * 10;
      const savedDays = Math.round((totalDays * (oldPct - newPct)) / 100);
      const savedCash = savedDays * agencyPerDay;

      return {
        prompt: `After introducing autonomous team pods, **${firm}** (${staff} ${role} × ${workDays} working days = **${totalDays.toLocaleString("en-GB")} possible days/year**) cuts its absenteeism rate from **${oldPct}%** down to **${newPct}%**. Every absent day previously required **£${agencyPerDay}** in temporary agency cover. Calculate the **annual agency-cover cost saved** in £.`,
        answer: { type: "number", value: savedCash, display: `£${savedCash.toLocaleString("en-GB")}` },
        hint: `Find how many working days were saved (${oldPct}% − ${newPct}% of ${totalDays.toLocaleString("en-GB")} days), then multiply by £${agencyPerDay}/day.`,
        solution: [
          `Drop in absenteeism = {{${oldPct}% - ${newPct}% = ${oldPct - newPct}}} percentage points.`,
          `Working days saved = {{${totalDays} * ${(oldPct - newPct) / 100} = ${savedDays}}} days.`,
          `Agency cover saved = {{${savedDays} * ${agencyPerDay} = ${savedCash}}} (**£${savedCash.toLocaleString("en-GB")}**).`,
        ],
        traps: [
          {
            spec: { type: "number", value: savedDays },
            feedback: `${savedDays} is the number of absent days saved — multiply by £${agencyPerDay} per agency day!`,
          },
        ],
      };
    },
  },
  {
    id: "motivation-organisation.hierarchy-delayering",
    topicId: "motivation-organisation",
    title: "Span of Control, Headcount & Delayering Savings",
    level: 2,
    guideRef: "organisational-charts",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(FIRMS_PLC);

      if (tier === 1) {
        const dirs = rng.int(3, 7);
        const mgrsPerDir = rng.int(4, 9);
        const opsPerMgr = rng.int(5, 12);
        const askDir = rng.bool(0.5);
        const ans = askDir ? dirs : mgrsPerDir;
        const who = askDir ? "the CEO" : "one Functional Director";
        const trapTotal = 1 + dirs + dirs * mgrsPerDir + dirs * mgrsPerDir * opsPerMgr;
        return {
          prompt: `In **${firm}**, 1 CEO directly manages **${dirs} Functional Directors**. Each Functional Director directly manages **${mgrsPerDir} Team Managers**, and each Team Manager directly supervises **${opsPerMgr} Operatives**. State the **span of control** of **${who}**.`,
          answer: { type: "number", value: ans, display: `${ans}` },
          hint: "Span of control counts ONLY immediate direct subordinates one tier below!",
          solution: [
            askDir
              ? `The CEO directly manages **${dirs}** Functional Directors, so the CEO's span of control is **${dirs}**.`
              : `Each Functional Director directly manages **${mgrsPerDir}** Team Managers, so their span of control is **${mgrsPerDir}**.`,
          ],
          traps: [
            {
              spec: { type: "number", value: trapTotal - 1 },
              feedback: "Never count indirect subordinates further down the chart — count ONLY direct reports one level below!",
            },
          ],
        };
      }

      if (tier === 2) {
        const posts = rng.int(6, 32);
        const salary = rng.int(36, 58) * 1000;
        const redund = rng.int(10, 24) * 1000;
        const gross = posts * salary;
        const redCost = posts * redund;
        const netY1 = gross - redCost;
        return {
          prompt: `**${firm}** delayers **${posts} middle-management posts**, each paid **£${salary.toLocaleString("en-GB")}** per year. Each redundant manager receives a one-off redundancy payout of **£${redund.toLocaleString("en-GB")}**. Calculate **${firm}**'s **net cost saving in Year 1** in £.`,
          answer: { type: "number", value: netY1, display: `£${netY1.toLocaleString("en-GB")}` },
          hint: "Calculate annual salaries removed minus the one-off Year 1 redundancy payouts.",
          solution: [
            `Annual salaries removed = {{${posts} * ${salary} = ${gross}}} (£${gross.toLocaleString("en-GB")}).`,
            `Year 1 redundancy payout = {{${posts} * ${redund} = ${redCost}}} (£${redCost.toLocaleString("en-GB")}).`,
            `Net Year 1 saving = {{${gross} - ${redCost} = ${netY1}}} (**£${netY1.toLocaleString("en-GB")}**).`,
          ],
          traps: [
            {
              spec: { type: "number", value: gross },
              feedback: `£${gross.toLocaleString("en-GB")} is the Year 2+ recurring saving — subtract the one-off £${redCost.toLocaleString("en-GB")} redundancy cost in Year 1!`,
            },
          ],
        };
      }

      // Tier 3: Total headcount across 4 layers OR new span after delayering
      const dirs = rng.int(3, 6);
      const supsPerDir = rng.int(3, 6);
      const opsPerSup = rng.int(5, 10);
      const sups = dirs * supsPerDir;
      const ops = sups * opsPerSup;
      const totalStaff = 1 + dirs + sups + ops;
      if (rng.bool(0.5)) {
        return {
          prompt: `**${firm}** has a 4-tier hierarchy: **1 Managing Director** → **${dirs} Directors** → **${supsPerDir} Supervisors per Director** → **${opsPerSup} Operatives per Supervisor**. Calculate the **total workforce headcount** across all 4 layers.`,
          answer: { type: "number", value: totalStaff, display: `${totalStaff} staff` },
          hint: `Compute the headcount in each layer (1, ${dirs}, ${dirs}×${supsPerDir}, and Supervisors×${opsPerSup}) and sum all 4 layers.`,
          solution: [
            `Layer 1 = 1; Layer 2 = ${dirs}; Layer 3 = {{${dirs} * ${supsPerDir} = ${sups}}}; Layer 4 = {{${sups} * ${opsPerSup} = ${ops}}}.`,
            `Total headcount = {{1 + ${dirs} + ${sups} + ${ops} = ${totalStaff}}} staff.`,
          ],
          traps: [
            {
              spec: { type: "number", value: ops },
              feedback: `${ops} is only Layer 4 (Operatives) — add Layers 1, 2 and 3 (1 + ${dirs} + ${sups}) too!`,
            },
          ],
        };
      }
      const newSpan = ops / dirs; // exact integer: (dirs * supsPerDir * opsPerSup) / dirs = supsPerDir * opsPerSup!
      const spanJump = newSpan - supsPerDir;
      return {
        prompt: `In **${firm}**, **${dirs} Directors** each manage **${supsPerDir} Supervisors**, and each Supervisor manages **${opsPerSup} Operatives** (${ops} Operatives in total). If **all ${sups} Supervisors are delayered** and the ${ops} Operatives report directly and equally to the ${dirs} Directors, by how many direct subordinates does **each Director's span of control increase**?`,
        answer: { type: "number", value: spanJump, display: `${spanJump}` },
        hint: `Find the new span (${ops} ÷ ${dirs} = ${newSpan}) and subtract the Director's original span (${supsPerDir}).`,
        solution: [
          `Original Director span = **${supsPerDir}** Supervisors.`,
          `New Director span = {{${ops} / ${dirs} = ${newSpan}}} Operatives.`,
          `Increase in span of control = {{${newSpan} - ${supsPerDir} = ${spanJump}}}.`,
        ],
        traps: [
          {
            spec: { type: "number", value: newSpan },
            feedback: `${newSpan} is the NEW span of control — subtract the original span (${supsPerDir}) to find the increase!`,
          },
        ],
      };
    },
  },
  {
    id: "motivation-organisation.centralisation-economies",
    topicId: "motivation-organisation",
    title: "Centralised Bulk-Buying Economies vs Logistics Cost",
    level: 3,
    guideRef: "centralisation-leadership",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const firm = rng.pick(FIRMS_PLC);

      if (tier === 1) {
        const branches = rng.int(8, 35);
        const spendPer = rng.int(12, 45) * 100;
        const discPct = rng.pick([10, 15, 20, 25]);
        const grossSave = round2((branches * spendPer * discPct) / 100);
        return {
          prompt: `**${firm}** operates **${branches} branches**, each spending **£${spendPer.toLocaleString("en-GB")}/month** on local supplies (**decentralised**). Switching to **centralised** Head Office bulk contracts secures a **${discPct}%** supplier discount (with £0 extra delivery fee). Calculate the **monthly purchasing saving** in £.`,
          answer: { type: "number", value: grossSave, display: `£${grossSave.toLocaleString("en-GB")}` },
          hint: `Multiply ${branches} × £${spendPer.toLocaleString("en-GB")} for total monthly spend, then take ${discPct}%.`,
          solution: [
            `Total monthly spend = {{${branches} * ${spendPer} = ${branches * spendPer}}} (£${(branches * spendPer).toLocaleString("en-GB")}).`,
            `Bulk-buying saving (${discPct}%) = **£${grossSave.toLocaleString("en-GB")}**.`,
          ],
        };
      }

      if (tier === 2) {
        const branches = rng.int(12, 50);
        const spendPer = rng.int(15, 50) * 100;
        const discPct = rng.pick([12, 15, 20, 25]);
        const grossSave = round2((branches * spendPer * discPct) / 100);
        const hubCost = rng.int(15, 65) * 100;
        const netSave = round2(grossSave - hubCost);
        return {
          prompt: `Across **${branches} stores**, **${firm}** spends **£${spendPer.toLocaleString("en-GB")} per store per month** under decentralised buying. Moving to **centralised** Head Office purchasing cuts supplier prices by **${discPct}%**, while central van distribution costs **£${hubCost.toLocaleString("en-GB")} per month**. Calculate the **net monthly saving** in £.`,
          answer: { type: "number", value: netSave, display: `£${netSave.toLocaleString("en-GB")}` },
          hint: "Calculate the gross bulk-buying discount across all stores, then subtract the monthly central distribution cost.",
          solution: [
            `Total decentralised spend = {{${branches} * ${spendPer} = ${branches * spendPer}}}.`,
            `Gross ${discPct}% discount = £${grossSave.toLocaleString("en-GB")}.`,
            `Subtract £${hubCost.toLocaleString("en-GB")} distribution cost = **£${netSave.toLocaleString("en-GB")}**.`,
          ],
          traps: [
            {
              spec: { type: "number", value: grossSave },
              feedback: `£${grossSave.toLocaleString("en-GB")} is the gross supplier discount — subtract the £${hubCost.toLocaleString("en-GB")} central distribution cost!`,
            },
          ],
        };
      }

      // Tier 3: Break-even branch count for centralising procurement
      const spendPer = rng.pick([3000, 4000, 5000, 6000, 8000, 10000]);
      const discPct = rng.pick([10, 15, 20, 25]);
      const savePerBranch = (spendPer * discPct) / 100;
      const beBranches = rng.int(8, 32);
      const hubCost = savePerBranch * beBranches;

      return {
        prompt: `**${firm}** is evaluating a **centralised** Head Office warehouse costing **£${hubCost.toLocaleString("en-GB")} per month** in fixed rent and logistics. Each branch currently spends **£${spendPer.toLocaleString("en-GB")} per month** locally, and centralised bulk contracts save **${discPct}%** on ingredient bills. Calculate the exact **number of branches** needed for monthly bulk-buying savings to **equal** the £${hubCost.toLocaleString("en-GB")} hub cost.`,
        answer: { type: "number", value: beBranches, display: `${beBranches} branches` },
        hint: `Find the monthly saving per branch (${discPct}% of £${spendPer.toLocaleString("en-GB")}), then divide £${hubCost.toLocaleString("en-GB")} by that saving per branch.`,
        solution: [
          `Monthly saving per branch = {{${spendPer} * ${discPct / 100} = ${savePerBranch}}} (£${savePerBranch.toLocaleString("en-GB")}/branch).`,
          `Break-even branch count = {{${hubCost} / ${savePerBranch} = ${beBranches}}} **branches**.`,
        ],
        traps: [
          {
            spec: { type: "number", value: round2(hubCost / spendPer) },
            feedback: `Divide £${hubCost.toLocaleString("en-GB")} by the SAVING per branch (£${savePerBranch.toLocaleString("en-GB")}), not by the full £${spendPer.toLocaleString("en-GB")} spend!`,
          },
        ],
      };
    },
  },
];
