import type { Drill } from "./types.ts";
import { big, clean, roundTo } from "./helpers.ts";

const FIRMS = [
  "Harbour Dental",
  "Velo Courier",
  "Saffron Bistro",
  "CloudNine IT",
  "Bramble Garden",
  "Metro Fitness",
  "NorthStar Hotels",
  "Kestrel Print",
  "Orchid Care",
  "Summit Retail",
] as const;

export const drills: Drill[] = [
  {
    id: "people-communication-recruitment.doc-channel-selector",
    topicId: "people-communication-recruitment",
    title: "Recruitment documents, training types & communication barriers",
    level: 1,
    guideRef: "recruitment-selection",
    generate(rng, tier) {
      const firm = rng.pick(FIRMS);

      if (tier === 1) {
        // Job Description vs Person Specification item classifier (20+ items × 10 firms = 200 distinct!)
        const jdItems = [
          "annual salary of £29,500 plus pension",
          "reports directly to the Regional Operations Manager",
          "37.5 contracted hours per week (Monday to Friday)",
          "responsible for locking the warehouse and checking stock at 6 p.m.",
          "job title: Customer Experience Supervisor",
          "28 days paid annual holiday entitlement",
          "based at the Leeds city-centre branch",
          "daily duty of reconciling till receipts against EPOS totals",
          "supervises a team of four part-time baristas",
          "prepares monthly supplier purchase orders",
        ];
        const psItems = [
          "minimum 3 years of previous B2B sales experience",
          "essential: Grade 6 or above in IGCSE Mathematics and English",
          "fluent spoken Mandarin and English",
          "essential: certified forklift operator licence",
          "desirable: BSc degree in Computer Science or Software Engineering",
          "calm, patient manner when handling upset customers",
          "advanced proficiency in spreadsheet modelling",
          "proven track record of leading agile project teams",
          "essential: Level 2 Food Safety and Hygiene certificate",
          "valid clean driving licence held for at least 2 years",
        ];
        const isJd = rng.bool();
        const detail = isJd ? rng.pick(jdItems) : rng.pick(psItems);
        return {
          prompt: `**${firm} Ltd** is drafting recruitment documents and writes the clause: *"${detail}"*. Does this clause belong in the **Job Description** or the **Person Specification**?`,
          answer: isJd
            ? { type: "text", accept: ["job description", "jd"], display: "Job Description" }
            : { type: "text", accept: ["person specification", "ps", "person spec"], display: "Person Specification" },
          solution: [
            isJd
              ? `"${detail}" describes the **role, duties, pay, hours or reporting line**, so it belongs in the **Job Description**.`
              : `"${detail}" specifies **qualifications, experience, skills or personal traits** of the ideal candidate, so it belongs in the **Person Specification**.`,
          ],
          hint: "Rule: Role duties/hours/pay = Job Description; Human qualifications/experience/skills = Person Specification.",
          traps: [
            isJd
              ? {
                  spec: { type: "text", accept: ["person specification", "person spec"] },
                  feedback: "Person Specification covers human qualifications/experience/skills; duties, pay, hours and reporting lines belong in the JOB DESCRIPTION!",
                }
              : {
                  spec: { type: "text", accept: ["job description"] },
                  feedback: "Job Description covers role duties/pay/hours; candidate qualifications, experience and skills belong in the PERSON SPECIFICATION!",
                },
          ],
        };
      }

      if (tier === 2) {
        // Induction vs On-the-job vs Off-the-job scenario classifier (varied durations/costs/firms!)
        const days = rng.int(2, 5);
        const fee = rng.int(4, 18) * 100;
        const kindIdx = rng.int(0, 2);
        if (kindIdx === 0) {
          const hires = rng.int(2, 12);
          return {
            prompt: `**${firm} Ltd** welcomes **${hires} brand-new starters** on Monday morning with a ${days}-hour tour of fire exits, health-and-safety rules, IT passwords and team introductions before they start their roles. Which type of training is this (**induction**, **on-the-job** or **off-the-job**)?`,
            answer: {
              type: "text",
              accept: ["induction", "induction training"],
              display: "induction training",
            },
            solution: [
              `First-day orientation covering premises tours, fire safety, IT logins and company policies for new hires is **induction training**.`,
            ],
            hint: "Orientation specifically for brand-new recruits on Day 1/Week 1.",
            traps: [
              {
                spec: { type: "text", accept: ["on-the-job", "on the job", "on-the-job training"] },
                feedback: "Shadowing at the workstation is on-the-job; Day-1 safety tours, logins and intros for new hires is INDUCTION training!",
              },
            ],
          };
        }
        if (kindIdx === 1) {
          const weeks = rng.int(2, 8);
          return {
            prompt: `At **${firm} Ltd**, a junior technician spends **${weeks} weeks** at the normal workbench shadowing a senior mentor and serving real clients under supervision (£0 external tuition fee). Which type of training is this (**induction**, **on-the-job** or **off-the-job**)?`,
            answer: {
              type: "text",
              accept: ["on-the-job", "on the job", "on-the-job training", "on the job training"],
              display: "on-the-job training",
            },
            solution: [
              `Learning practical tasks at the normal workstation by shadowing/coaching alongside an experienced colleague is **on-the-job training**.`,
            ],
            hint: "Learning while working at the actual bench/till inside the workplace.",
            traps: [
              {
                spec: { type: "text", accept: ["induction", "induction training"] },
                feedback: "Induction is Day-1 orientation; multi-week shadowing at the real workstation is ON-THE-JOB training!",
              },
              {
                spec: { type: "text", accept: ["off-the-job", "off the job", "off-the-job training"] },
                feedback: "Off-the-job takes place away from normal work (e.g. external college); workstation shadowing is ON-THE-JOB!",
              },
            ],
          };
        }
        return {
          prompt: `**${firm} Ltd** pays **£${big(fee)}** to send an employee away from the workplace for a **${days}-day** specialist certification course at an external technical college. Which type of training is this (**induction**, **on-the-job** or **off-the-job**)?`,
          answer: {
            type: "text",
            accept: ["off-the-job", "off the job", "off-the-job training", "off the job training"],
            display: "off-the-job training",
          },
          solution: [
            `Studying away from the normal workstation at an external specialist college or training centre is **off-the-job training**.`,
          ],
          hint: "Training conducted away from the normal workplace by external specialists.",
          traps: [
            {
              spec: { type: "text", accept: ["on-the-job", "on the job", "on-the-job training"] },
              feedback: "Because the employee leaves the normal workstation to attend an external college, this is OFF-THE-JOB training!",
            },
          ],
        };
      }

      // Tier 3: FTE (Full-Time Equivalent) conversion for flexible part-time/job-share staffing
      const fullTimeHrs = rng.pick([35, 37.5, 40]);
      const ptStaff = rng.int(4, 18) * 2; // even count so clean decimals
      const ptHrs = fullTimeHrs === 37.5 ? rng.pick([15, 22.5]) : rng.pick([14, 16, 20, 24, 28]);
      const fte = roundTo((ptStaff * ptHrs) / fullTimeHrs, 2);
      return {
        prompt: `At **${firm} Ltd**, a standard full-time contract is **${fullTimeHrs} hours per week**. The branch employs **${ptStaff} part-time staff** working **${ptHrs} hours per week** each. Calculate how many **Full-Time Equivalent (FTE)** workers these part-time staff represent (give exact number to at most 2 d.p.).`,
        answer: { type: "number", value: fte, tolerance: 0.01, display: `${fte} FTE` },
        solution: [
          `Total weekly part-time hours = ${ptStaff} × ${ptHrs} = ${clean(ptStaff * ptHrs)} hours.`,
          `Full-Time Equivalent (FTE) = ${clean(ptStaff * ptHrs)} ÷ ${fullTimeHrs} = **${fte} FTE**.`,
        ],
        hint: "Multiply part-time staff count by their weekly hours, then divide by standard full-time weekly hours.",
        traps: [
          {
            spec: { type: "number", value: clean(ptStaff * ptHrs) },
            feedback: `${clean(ptStaff * ptHrs)} is total weekly hours — divide by ${fullTimeHrs} hours to convert into Full-Time Equivalents!`,
          },
        ],
      };
    },
  },
  {
    id: "people-communication-recruitment.recruitment-turnover-cost",
    topicId: "people-communication-recruitment",
    title: "Labour turnover, recruitment agency fees & internal savings",
    level: 2,
    guideRef: "recruitment-selection",
    generate(rng, tier) {
      const firm = rng.pick(FIRMS);

      if (tier === 1) {
        const avgStaff = rng.pick([20, 25, 40, 50, 80, 100, 120, 200, 250, 400]);
        const leavers = rng.int(2, Math.floor(avgStaff * 0.35));
        const turnoverPct = roundTo((leavers / avgStaff) * 100, 2);
        return {
          prompt: `**${firm} Ltd** employed an average of **${avgStaff} staff** this year, during which **${leavers} employees** left the business. Calculate **labour turnover** as a percentage (to up to 2 d.p. if needed).`,
          answer: { type: "number", value: turnoverPct, tolerance: 0.01, display: `${turnoverPct}%` },
          solution: [
            `Formula: {{Labour Turnover (%) = (Leavers / Average Staff) * 100}}.`,
            `(${leavers} ÷ ${avgStaff}) × 100 = **${turnoverPct}%**.`,
          ],
          hint: "Divide the number of leavers by average staff employed, then multiply by 100.",
          traps: [
            {
              spec: { type: "number", value: roundTo(100 - turnoverPct, 2), tolerance: 0.01 },
              feedback: `${roundTo(100 - turnoverPct, 2)}% is the retention complement — labour turnover measures the % who LEFT!`,
            },
          ],
        };
      }

      const salary = rng.int(28, 72) * 1000;
      const agencyPct = rng.pick([12, 15, 18, 20, 22]);
      const adsAndTests = rng.int(4, 15) * 100;
      const agencyFee = clean((salary * agencyPct) / 100);
      const extTotal = agencyFee + adsAndTests;

      if (tier === 2) {
        return {
          prompt: `**${firm} Ltd** recruits a specialist manager externally on a Year 1 salary of **£${big(salary)}**. The recruitment agency charges **${agencyPct}% of Year 1 salary**, plus **£${big(adsAndTests)}** for aptitude testing and reference checks. Calculate the **total external recruitment cost** in £.`,
          answer: { type: "number", value: extTotal, display: `£${big(extTotal)}` },
          solution: [
            `Recruitment agency fee = £${big(salary)} × ${agencyPct}% = £${big(agencyFee)}.`,
            `Add testing & reference costs (£${big(adsAndTests)}): £${big(agencyFee)} + £${big(adsAndTests)} = **£${big(extTotal)}**.`,
          ],
          hint: `Find ${agencyPct}% of £${big(salary)}, then add £${big(adsAndTests)}.`,
          traps: [
            {
              spec: { type: "number", value: agencyFee },
              feedback: `£${big(agencyFee)} is the agency fee alone — add the £${big(adsAndTests)} testing/reference cost!`,
            },
          ],
        };
      }

      // Tier 3: Compare External recruitment vs Internal promotion + cheaper junior backfill
      const juniorBackfillCost = rng.int(9, 24) * 100;
      const inductionLostDays = rng.int(4, 8);
      const dailyVal = rng.pick([150, 180, 200, 250]);
      const fullExtCost = extTotal + inductionLostDays * dailyVal;
      const saving = fullExtCost - juniorBackfillCost;
      return {
        prompt: `**${firm} Ltd** needs a Department Head (**£${big(salary)}** salary). **External recruitment** costs a **${agencyPct}% agency fee** on salary, **£${big(adsAndTests)}** in ads, and **${inductionLostDays} days** of lost induction output valued at **£${dailyVal}/day**. **Internal promotion** costs £0 agency fee, zero lost induction days, and **£${big(juniorBackfillCost)}** to advertise and backfill the promoted worker's junior post. How much **cheaper (£)** is internal promotion?`,
        answer: { type: "number", value: saving, display: `£${big(saving)}` },
        solution: [
          `External cost = (£${big(salary)} × ${agencyPct}% = £${big(agencyFee)}) + £${big(adsAndTests)} + (${inductionLostDays} × £${dailyVal} = £${big(inductionLostDays * dailyVal)}) = £${big(fullExtCost)}.`,
          `Internal promotion + junior backfill cost = £${big(juniorBackfillCost)}.`,
          `Net saving from internal promotion = £${big(fullExtCost)} − £${big(juniorBackfillCost)} = **£${big(saving)}**.`,
        ],
        hint: "Sum all three external cost items (agency % + ads + lost induction days), then subtract the junior backfill cost!",
        traps: [
          {
            spec: { type: "number", value: fullExtCost },
            feedback: `£${big(fullExtCost)} is the external cost — remember to subtract the £${big(juniorBackfillCost)} cost of backfilling the knock-on junior vacancy!`,
          },
          {
            spec: { type: "number", value: extTotal - juniorBackfillCost },
            feedback: `Don't forget to include the ${inductionLostDays} lost induction days (${inductionLostDays} × £${dailyVal}) in the external cost!`,
          },
        ],
      };
    },
  },
  {
    id: "people-communication-recruitment.training-wage-law",
    topicId: "people-communication-recruitment",
    title: "Off-the-job training ROI & minimum-wage cost calculator",
    level: 3,
    guideRef: "training-employment-law",
    generate(rng, tier) {
      const firm = rng.pick(FIRMS);

      if (tier === 1) {
        const workers = rng.int(6, 28);
        const wkHours = rng.pick([16, 20, 25, 30, 35]);
        const weeks = rng.pick([48, 50, 52]);
        const risePence = rng.pick([60, 75, 80, 90, 110, 120, 140]);
        const riseGbp = risePence / 100;
        const totalHours = workers * wkHours * weeks;
        const extraBill = clean(totalHours * riseGbp);
        return {
          prompt: `**${firm} Ltd** employs **${workers} staff** working **${wkHours} hours/week** each for **${weeks} weeks/year**. New employment legislation raises the **National Minimum Wage** by **£${riseGbp.toFixed(2)} per hour**. Calculate the **increase in ${firm} Ltd's annual wage bill**, in £.`,
          answer: { type: "number", value: extraBill, display: `£${big(extraBill)}` },
          solution: [
            `Total annual worker hours = ${workers} × ${wkHours} × ${weeks} = ${big(totalHours)} hours.`,
            `Increase in annual wage bill = ${big(totalHours)} × £${riseGbp.toFixed(2)} = **£${big(extraBill)}**.`,
          ],
          hint: "Multiply workers × weekly hours × weeks per year × hourly wage increase.",
          traps: [
            {
              spec: { type: "number", value: clean(workers * wkHours * riseGbp) },
              feedback: `£${big(clean(workers * wkHours * riseGbp))} is the WEEKLY increase — multiply by ${weeks} weeks for the annual increase!`,
            },
          ],
        };
      }

      const trainees = rng.int(3, 10);
      const courseFeePerHead = rng.int(6, 18) * 100;
      const daysAway = rng.int(2, 5);
      const lostOutputPerDay = rng.pick([120, 150, 180, 200]);
      const directFees = trainees * courseFeePerHead;
      const lostOutput = trainees * daysAway * lostOutputPerDay;
      const totalTrainCost = directFees + lostOutput;

      if (tier === 2) {
        return {
          prompt: `**${firm} Ltd** sends **${trainees} technicians** on a **${daysAway}-day** external **off-the-job** course costing **£${big(courseFeePerHead)} per technician** in tuition fees. Each day a technician is away costs **£${lostOutputPerDay}** in lost workshop output. Calculate the **total economic cost** of this training (tuition fees + lost output), in £.`,
          answer: { type: "number", value: totalTrainCost, display: `£${big(totalTrainCost)}` },
          solution: [
            `Direct tuition fees = ${trainees} × £${big(courseFeePerHead)} = £${big(directFees)}.`,
            `Lost workshop output = ${trainees} technicians × ${daysAway} days × £${lostOutputPerDay} = £${big(lostOutput)}.`,
            `Total training cost = £${big(directFees)} + £${big(lostOutput)} = **£${big(totalTrainCost)}**.`,
          ],
          hint: "Add total tuition fees across all technicians PLUS (technicians × days away × daily lost output).",
          traps: [
            {
              spec: { type: "number", value: directFees },
              feedback: `£${big(directFees)} is only the tuition invoice — include the £${big(lostOutput)} of lost output across the ${daysAway} days away!`,
            },
          ],
        };
      }

      // Tier 3: Net 1-year gain after off-the-job training cost + higher productivity
      const annualGainPerTech = rng.int(22, 48) * 100;
      const grossGain = trainees * annualGainPerTech;
      const netGain = grossGain - totalTrainCost;
      return {
        prompt: `**${firm} Ltd** sends **${trainees} staff** on a **${daysAway}-day off-the-job** course (**£${big(courseFeePerHead)}** fee per person; **£${lostOutputPerDay}/day** lost output per person while away). Over the next 12 months, higher speed and fewer errors generate **£${big(annualGainPerTech)}** of extra contribution **per trained employee**. Calculate the **net Year 1 profit change (£)** from this training programme.`,
        answer: { type: "number", value: netGain, display: `${netGain < 0 ? "−" : ""}£${big(Math.abs(netGain))}` },
        solution: [
          `Total training cost = (${trainees} × £${big(courseFeePerHead)}) + (${trainees} × ${daysAway} × £${lostOutputPerDay}) = £${big(directFees)} + £${big(lostOutput)} = £${big(totalTrainCost)}.`,
          `Total annual productivity gain = ${trainees} × £${big(annualGainPerTech)} = £${big(grossGain)}.`,
          `Net Year 1 profit change = £${big(grossGain)} − £${big(totalTrainCost)} = **${netGain < 0 ? "−" : ""}£${big(Math.abs(netGain))}**.`,
        ],
        hint: "Compute total productivity gain (staff × annual gain) minus total training cost (tuition + lost output days).",
        traps: [
          {
            spec: { type: "number", value: grossGain - directFees },
            feedback: `You deducted the £${big(directFees)} tuition fee, but forgot to subtract the £${big(lostOutput)} of lost output on the ${daysAway} training days!`,
          },
        ],
      };
    },
  },
  {
    id: "people-communication-recruitment.comm-distortion-cost",
    topicId: "people-communication-recruitment",
    title: "Communication chain distortion & error-reduction savings",
    level: 2,
    guideRef: "barriers-to-communication",
    generate(rng, tier) {
      const firm = rng.pick(FIRMS);

      if (tier === 1) {
        const staff = rng.int(12, 60);
        const minsSaved = rng.pick([12, 18, 24, 30, 36]);
        const wagePerHr = rng.pick([12, 14, 15, 16, 18, 20, 22, 24]);
        const days = 5;
        const hrsPerWk = roundTo((staff * minsSaved * days) / 60, 2);
        const valSaved = roundTo(hrsPerWk * wagePerHr, 2);
        return {
          prompt: `By curbing 'Reply All' **information overload**, **${firm} Ltd** saves each of its **${staff} staff** an average of **${minsSaved} minutes per day** across a **5-day** working week. If average pay is **£${wagePerHr} per hour**, calculate the weekly productive labour value reclaimed, in £ (to 2 d.p. if needed).`,
          answer: { type: "number", value: valSaved, tolerance: 0.01, display: `£${big(valSaved)}` },
          solution: [
            `Total minutes saved per week = ${staff} × ${minsSaved} × 5 = ${big(staff * minsSaved * 5)} minutes.`,
            `Convert to hours (÷ 60) = ${hrsPerWk} hours/week.`,
            `Weekly value at £${wagePerHr}/hr = ${hrsPerWk} × £${wagePerHr} = **£${big(valSaved)}**.`,
          ],
          hint: "Convert minutes saved into hours by dividing by 60, then multiply by staff × 5 days × hourly pay!",
          traps: [
            {
              spec: { type: "number", value: clean(staff * minsSaved * 5 * wagePerHr) },
              feedback: "Remember to divide minutes by 60 to convert into hours before multiplying by the hourly £ wage!",
            },
          ],
        };
      }

      if (tier === 2) {
        const handoffs = rng.pick([3, 4, 5]);
        const retainPct = rng.pick([80, 85, 90]);
        const r = retainPct / 100;
        const finalPct = roundTo(Math.pow(r, handoffs) * 100, 1);
        return {
          prompt: `In **${firm} Plc**'s tall hierarchy, a verbal instruction passes down **${handoffs} sequential management handoffs** with zero written backup. Each handoff retains **${retainPct}%** of the previous message's accuracy. Calculate the **percentage accuracy** reaching shop-floor workers, rounded to **1 decimal place**.`,
          answer: { type: "number", value: finalPct, tolerance: 0.06, display: `${finalPct}%` },
          solution: [
            `Retention factor per handoff = ${retainPct}% = ${r}.`,
            `Across ${handoffs} sequential handoffs: {{${r}^${handoffs} * 100}} = **${finalPct}%** accuracy.`,
          ],
          hint: `Multiply ${r} by itself ${handoffs} times (${r}^${handoffs}), then multiply by 100 and round to 1 d.p.`,
          traps: [
            {
              spec: { type: "number", value: 100 - (100 - retainPct) * handoffs },
              feedback: `Accuracy compounds multiplicatively (${r}^${handoffs} × 100), slightly different from subtracting ${100 - retainPct}% ${handoffs} times!`,
            },
          ],
        };
      }

      // Tier 3: Net saving from introducing two-way EPOS/intranet communication system
      const wrongOrdersBefore = rng.int(180, 500);
      const cutPct = rng.pick([60, 70, 75, 80, 85]);
      const costPerError = rng.pick([20, 25, 30, 35, 40]);
      const softwareSub = rng.int(12, 32) * 100;
      const errorsAvoided = clean((wrongOrdersBefore * cutPct) / 100);
      const grossSaved = roundTo(errorsAvoided * costPerError, 2);
      const netSaved = roundTo(grossSaved - softwareSub, 2);
      return {
        prompt: `Poor horizontal communication between sales and warehouse staff at **${firm} Ltd** caused **${wrongOrdersBefore} dispatch errors** last year, costing **£${costPerError} per error** to fix. Installing a shared cloud intranet & two-way feedback scanner costs **£${big(softwareSub)}/year** and cuts dispatch errors by **${cutPct}%**. Calculate the **net annual cost saving (£)** (to 2 d.p. if needed).`,
        answer: { type: "number", value: netSaved, tolerance: 0.01, display: `£${big(netSaved)}` },
        solution: [
          `Dispatch errors eliminated = ${wrongOrdersBefore} × ${cutPct}% = ${errorsAvoided} errors.`,
          `Gross error-rework money saved = ${errorsAvoided} × £${costPerError} = £${big(grossSaved)}.`,
          `Subtract £${big(softwareSub)} annual software subscription: £${big(grossSaved)} − £${big(softwareSub)} = **£${big(netSaved)}**.`,
        ],
        hint: "Find errors avoided × £ cost per error, then subtract the annual software subscription cost.",
        traps: [
          {
            spec: { type: "number", value: grossSaved, tolerance: 0.01 },
            feedback: `£${big(grossSaved)} is the gross error saving — subtract the £${big(softwareSub)} annual software cost for the NET saving!`,
          },
        ],
      };
    },
  },
];
