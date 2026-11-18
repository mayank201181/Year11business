import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "motivation-organisation-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "motivation-theories",
      question:
        "A craft bakery employs an average of **20 staff** during the year, and **3 employees** resign. Calculate the bakery's annual **labour turnover (%)**.",
      answer: { type: "number", value: 15, display: "15%" },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback:
            "3 is the raw headcount of leavers — divide 3 by 20 and multiply by 100 to get the percentage!",
        },
        {
          spec: { type: "number", value: 0.15 },
          feedback:
            "Almost! Multiply 0.15 by 100 to express labour turnover as a percentage (15%).",
        },
      ],
      hints: [
        "Use Labour Turnover (%) = (Staff leaving ÷ Average staff) × 100.",
      ],
      solution: [
        "Substitute into the formula: {{(3 / 20) * 100 = 15%}}.",
      ],
      commonError:
        "Giving the decimal 0.15 or the raw number of leavers (3) instead of multiplying by 100 for a percentage.",
    },
    {
      id: "motivation-organisation-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "motivation-theories",
      question:
        "In Herzberg's Two-Factor Theory, improving **office lighting, safety equipment and basic hourly pay** will directly:",
      options: [
        "Eliminate job dissatisfaction without automatically motivating extra effort",
        "Guarantee lifelong self-actualisation for every worker",
        "Remove the need for any job enrichment or recognition",
        "Count as intrinsic motivators that replace supervision",
      ],
      answerIndex: 0,
      hints: [
        "Lighting, safety and base pay are all **hygiene factors** in Herzberg's model.",
      ],
      explanation:
        "Herzberg classifies working conditions, safety and base pay as **hygiene factors**: fixing them stops **dissatisfaction** (neutrality), whereas **motivators** (recognition, enrichment, advancement) are needed to spark true satisfaction.",
    },
    {
      id: "motivation-organisation-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "financial-rewards",
      question:
        "A garment machinist is paid a **piece-rate** of **£2.25 per hoodie** sewn. In a 5-day week she completes **180 hoodies**. Calculate her weekly gross pay in £.",
      answer: { type: "number", value: 405, display: "£405" },
      traps: [
        {
          spec: { type: "number", value: 2025 },
          feedback:
            "You multiplied 405 by 5 days — 180 hoodies is already her total output for the whole 5-day week!",
        },
      ],
      hints: [
        "Read carefully: 180 hoodies is already her weekly total, NOT daily output.",
        "Multiply 180 by £2.25.",
      ],
      solution: [
        "Weekly piece-rate pay = {{180 * 2.25 = 405}} (**£405**).",
      ],
      commonError:
        "Multiplying weekly output by 5 days when the stem already gives total weekly output.",
    },
    {
      id: "motivation-organisation-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "financial-rewards",
      question:
        "Toby earns a basic monthly salary of **£1,400** plus **5% commission** on all monthly sales **above £6,000**. In July his total sales are **£22,000**. Calculate Toby's gross pay for July in £.",
      answer: { type: "number", value: 2200, display: "£2,200" },
      traps: [
        {
          spec: { type: "number", value: 2500 },
          feedback:
            "You took 5% of all £22,000 (£1,100) — remember to subtract the £6,000 threshold first so commission applies only to £16,000!",
        },
        {
          spec: { type: "number", value: 800 },
          feedback:
            "£800 is the commission alone — don't forget to add his £1,400 basic monthly salary!",
        },
      ],
      hints: [
        "Subtract the £6,000 threshold from £22,000 to find commissionable sales (£16,000).",
        "Find 5% of £16,000, then add £1,400.",
      ],
      solution: [
        "Commissionable sales = {{22000 - 6000 = 16000}} (£16,000).",
        "Commission = {{16000 * 0.05 = 800}} (£800).",
        "Total July gross pay = {{1400 + 800 = 2200}} (**£2,200**).",
      ],
    },
    {
      id: "motivation-organisation-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "non-financial-motivation",
      question:
        "Give the exact two-word business term for redesigning a job by adding **vertically deeper** challenge, problem-solving authority and responsibility (associated with Herzberg).",
      answer: {
        type: "text",
        accept: ["job enrichment"],
        display: "Job enrichment",
      },
      traps: [
        {
          spec: { type: "text", accept: ["job enlargement"] },
          feedback:
            "Careful! **Job enlargement** adds *more horizontal tasks* at the same low skill level; vertical responsibility and challenge is **job enrichment**.",
        },
        {
          spec: { type: "text", accept: ["job rotation"] },
          feedback:
            "**Job rotation** switches workers between existing same-level tasks; adding vertical depth and authority is **job enrichment**.",
        },
      ],
      hints: [
        "Do NOT confuse horizontal 'enlargement' or switching 'rotation' with Herzberg's vertical redesign.",
        "Two words starting with 'Job enr...'",
      ],
      solution: [
        "**Job enrichment** increases vertical depth — autonomy, complex problem-solving and decision sign-off.",
      ],
    },
    {
      id: "motivation-organisation-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "organisational-charts",
      question:
        "On an organisational chart, 1 Operations Director sits directly above **5 Factory Managers**, and each Factory Manager directly supervises **9 Line Supervisors**. What is the **Operations Director's span of control**?",
      answer: { type: "number", value: 5, display: "5" },
      traps: [
        {
          spec: { type: "number", value: 50 },
          feedback:
            "50 counts both the 5 Factory Managers and all 45 Line Supervisors! Span of control counts ONLY direct reports (5).",
        },
        {
          spec: { type: "number", value: 45 },
          feedback:
            "45 is the total number of Line Supervisors two tiers below — span of control counts ONLY direct subordinates (5).",
        },
      ],
      hints: [
        "Golden rule: Span of control counts ONLY immediate direct subordinates one tier below.",
        "How many Factory Managers report directly to the 1 Operations Director?",
      ],
      solution: [
        "The Operations Director directly supervises **5** Factory Managers, so the span of control is **5**.",
      ],
    },
    {
      id: "motivation-organisation-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "organisational-charts",
      question:
        "When a department manager **delegates** budget preparation for an event to an assistant manager, what happens to **authority** and **ultimate responsibility**?",
      options: [
        "Authority passes to the assistant manager, while ultimate responsibility stays with the department manager",
        "Both authority and ultimate responsibility transfer permanently to the assistant manager",
        "Ultimate responsibility passes down, while authority stays at Head Office",
        "Neither authority nor responsibility changes hands",
      ],
      answerIndex: 0,
      hints: [
        "Remember: 'Authority goes down, accountability stays crowned!'",
        "Can a senior manager tell the CEO 'not my fault, my junior did it'?",
      ],
      explanation:
        "Delegation passes day-to-day **authority** downward so the assistant can act, while **ultimate responsibility (accountability)** stays with the delegating manager.",
    },
    {
      id: "motivation-organisation-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "organisational-charts",
      question:
        "A retail group **delayers** 12 area supervisor posts, each earning **£35,000** per year. Each redundant supervisor receives a one-off redundancy payout of **£10,000**. Calculate the **net cost saving in Year 1** in £.",
      answer: { type: "number", value: 300000, display: "£300,000" },
      traps: [
        {
          spec: { type: "number", value: 420000 },
          feedback:
            "£420,000 is the gross annual salary saving (from Year 2 onwards) — in Year 1 you must subtract the £120,000 redundancy cost!",
        },
      ],
      hints: [
        "Calculate annual salaries saved: 12 × £35,000 = £420,000.",
        "Subtract Year 1 one-off redundancy payouts: 12 × £10,000 = £120,000.",
      ],
      solution: [
        "Salaries saved = {{12 * 35000 = 420000}} (£420,000).",
        "Redundancy payout = {{12 * 10000 = 120000}} (£120,000).",
        "Net Year 1 saving = {{420000 - 120000 = 300000}} (**£300,000**).",
      ],
    },
    {
      id: "motivation-organisation-quiz-q09",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "centralisation-leadership",
      question:
        "Which leadership style gives highly qualified research scientists broad goals and near-complete freedom over how they design experiments?",
      options: [
        "Autocratic",
        "Paternalistic",
        "Democratic",
        "Laissez-faire",
      ],
      answerIndex: 3,
      hints: [
        "French for 'let it be' — hands-off freedom for self-motivated specialists.",
      ],
      explanation:
        "**Laissez-faire** leadership sets overarching objectives and steps back, ideal for expert R&D scientists and creative studios.",
    },
    {
      id: "motivation-organisation-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "motivation-theories",
      marks: 3,
      question:
        "Explain **one** benefit to a business of having a well-motivated workforce. *(Edexcel 4BS1 3-mark Explain — AO1 + AO3 chain)*",
      modelAnswer:
        "Well-motivated employees work with greater focus and discretionary effort, raising labour productivity (output per worker). Consequently, average labour cost per unit falls, enabling higher profit margins or more competitive prices.",
      markScheme: [
        {
          point: "AO1 (1m): Identifies higher labour productivity / lower labour turnover / lower absenteeism.",
          keywords: ["productivity", "output per worker", "turnover", "absenteeism", "retention"],
        },
        {
          point: "AO3a (1m): Links motivation to greater effort, fewer errors, or fewer staff resignations.",
          keywords: ["effort", "focus", "fewer errors", "resign", "recruitment", "training"],
        },
        {
          point: "AO3b (1m): Develops final financial impact — lower unit costs, lower recruitment bills, or higher profit margins.",
          keywords: ["unit cost", "cost per unit", "profit", "margin", "competitive"],
        },
      ],
      hints: [
        "Remember: an Edexcel 3-mark 'Explain' needs 1 clear point + 2 linked steps of reasoning (Point → Because → Therefore).",
        "Link motivation → output per worker (productivity) → unit cost & profit margin!",
      ],
      commonError:
        "Stopping at 'workers work harder so the business does well' without naming **labour productivity / unit costs** or **labour turnover / recruitment costs**.",
    },
  ],
  papers: [
    {
      id: "motivation-organisation-p1",
      title: "Practice Paper 1 — Paper 1 Small Business Focus (< 50 Staff)",
      questions: [
        {
          id: "motivation-organisation-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "motivation-theories",
          question:
            "Oakwood Carpentry employs **16 cabinetmakers** who together build **64 bespoke tables** per month. Calculate **monthly labour productivity** (tables per cabinetmaker).",
          answer: { type: "number", value: 4, display: "4 tables" },
          traps: [
            {
              spec: { type: "number", value: 0.25 },
              feedback:
                "Upside down! Labour productivity is Total Output ÷ Number of Workers (64 ÷ 16), not Workers ÷ Output.",
            },
          ],
          hints: [
            "Labour productivity = Total Output ÷ Number of Employees.",
          ],
          solution: [
            "Labour productivity = {{64 / 16 = 4}} tables per cabinetmaker per month.",
          ],
        },
        {
          id: "motivation-organisation-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "motivation-theories",
          question:
            "SunnySide Nursery employs an average of **25 nursery nurses**, and **4 nurses** leave during the year. Calculate SunnySide Nursery's **labour turnover (%)**.",
          answer: { type: "number", value: 16, display: "16%" },
          traps: [
            {
              spec: { type: "number", value: 0.16 },
              feedback: "Multiply 0.16 by 100 to state labour turnover as a percentage (16%).",
            },
          ],
          hints: [
            "Divide leavers (4) by average staff (25) and multiply by 100.",
          ],
          solution: [
            "Labour turnover = {{(4 / 25) * 100 = 16%}}.",
          ],
        },
        {
          id: "motivation-organisation-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "motivation-theories",
          question:
            "Which motivation theorist developed the **Two-Factor Theory** distinguishing **hygiene factors** from **motivators**? *(Type the surname or full name)*",
          answer: {
            type: "text",
            accept: ["Herzberg", "Frederick Herzberg"],
            display: "Frederick Herzberg",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Maslow", "Abraham Maslow"] },
              feedback:
                "Maslow created the 5-tier Hierarchy of Needs pyramid — the Two-Factor Theory (hygiene vs motivators) is **Herzberg**!",
            },
            {
              spec: { type: "text", accept: ["Taylor", "Frederick Taylor"] },
              feedback:
                "Taylor developed Scientific Management (piece-rate) — the Two-Factor Theory belongs to **Herzberg**!",
            },
          ],
          hints: [
            "Not Maslow (5 tiers) and not Taylor (piece-rate).",
            "Surname starts with 'H'.",
          ],
          solution: [
            "**Frederick Herzberg** (1959) proposed the Two-Factor Theory of hygiene factors and motivators.",
          ],
        },
        {
          id: "motivation-organisation-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "financial-rewards",
          question:
            "A fruit-picking farm pays casual pickers **£1.80 per punnet crate** picked. Over a week, Elena picks **235 crates**. Calculate Elena's gross weekly piece-rate pay in £.",
          answer: { type: "number", value: 423, display: "£423" },
          traps: [
            {
              spec: { type: "number", value: 130.56, tolerance: 0.05 },
              feedback: "You divided 235 by £1.80! Piece-rate pay multiplies output by rate per unit: 235 × £1.80.",
            },
          ],
          commonError: "Dividing crates by the piece rate instead of multiplying Units Produced × Rate per Unit.",
          hints: [
            "Piece-rate pay = Units produced × Rate per unit.",
            "Compute 235 × £1.80.",
          ],
          solution: [
            "Gross weekly pay = {{235 * 1.80 = 423}} (**£423**).",
          ],
        },
        {
          id: "motivation-organisation-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "financial-rewards",
          question:
            "Ben works **35 contracted hours** per week at **£12.00 per hour** in a pet shop. Any hours worked above 35 are paid at **time-and-a-half (1.5×)**. In a busy stocktake week Ben works **42 hours**. Calculate Ben's total gross pay for that week in £.",
          answer: { type: "number", value: 546, display: "£546" },
          traps: [
            {
              spec: { type: "number", value: 504 },
              feedback:
                "£504 pays all 42 hours at flat £12/hr — remember the 7 overtime hours earn £18/hr (1.5 × £12)!",
            },
            {
              spec: { type: "number", value: 756 },
              feedback:
                "£756 pays ALL 42 hours at the 1.5× overtime rate — only the 7 hours above 35 get £18/hr!",
            },
          ],
          hints: [
            "Split 42 hours into 35 standard hours (£12/hr) and 7 overtime hours.",
            "Overtime rate = 1.5 × £12 = £18/hr; add (35 × 12) + (7 × 18).",
          ],
          solution: [
            "Standard pay = {{35 * 12 = 420}} (£420).",
            "Overtime hours = {{42 - 35 = 7}} hours at {{12 * 1.5 = 18}} (£18/hr) = {{7 * 18 = 126}} (£126).",
            "Total gross pay = {{420 + 126 = 546}} (**£546**).",
          ],
        },
        {
          id: "motivation-organisation-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "financial-rewards",
          question:
            "Zara sells wedding photography packages for a boutique studio (12 staff). Her monthly pay formula is:\n- Basic salary: **£1,350**\n- Commission: **6%** on monthly bookings **above £5,000**\n\nIn June Zara secures **£19,000** in bookings. Calculate her June gross pay in £.",
          answer: { type: "number", value: 2190, display: "£2,190" },
          traps: [
            {
              spec: { type: "number", value: 2490 },
              feedback:
                "You calculated 6% of £19,000 (£1,140) — subtract the £5,000 threshold first so commission is 6% of £14,000!",
            },
            {
              spec: { type: "number", value: 840 },
              feedback:
                "£840 is her commission alone — add her £1,350 basic monthly salary!",
            },
          ],
          hints: [
            "Commissionable bookings = £19,000 − £5,000 = £14,000.",
            "Calculate 6% of £14,000, then add £1,350.",
          ],
          solution: [
            "Bookings above threshold = {{19000 - 5000 = 14000}} (£14,000).",
            "Commission = {{14000 * 0.06 = 840}} (£840).",
            "Total June pay = {{1350 + 840 = 2190}} (**£2,190**).",
          ],
        },
        {
          id: "motivation-organisation-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "motivation-theories",
          question:
            "A 15-employee digital print shop works 240 days per year (total possible staff-days = **3,600 days**). Last year **144 staff-days** were lost to sickness and unauthorised absence. Calculate the print shop's **absenteeism rate (%)**.",
          answer: { type: "number", value: 4, display: "4%" },
          traps: [
            {
              spec: { type: "number", value: 0.04 },
              feedback: "Multiply 0.04 by 100 to give the percentage (4%).",
            },
          ],
          hints: [
            "Absenteeism (%) = (Working days lost ÷ Total possible working days) × 100.",
            "Compute (144 ÷ 3,600) × 100.",
          ],
          solution: [
            "Absenteeism rate = {{(144 / 3600) * 100 = 4%}}.",
          ],
        },
        {
          id: "motivation-organisation-p1-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "organisational-charts",
          question:
            "In a small garden centre (23 staff), 1 Owner-Manager directly supervises **3 Department Leads** (Plants, Café, Till), and each Department Lead directly supervises **6 Assistants** (plus 1 part-time bookkeeper reporting directly to the Owner-Manager). Wait — read carefully! Counting **all** direct reports of the Owner-Manager (the 3 Department Leads + the 1 bookkeeper), what is the **Owner-Manager's span of control**?",
          answer: { type: "number", value: 4, display: "4" },
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback:
                "Don't miss the 1 part-time bookkeeper who also reports directly to the Owner-Manager! 3 + 1 = 4.",
            },
            {
              spec: { type: "number", value: 22 },
              feedback:
                "22 counts everyone below the Owner-Manager — span of control counts ONLY direct reports (3 Leads + 1 bookkeeper = 4)!",
            },
          ],
          hints: [
            "Count ONLY people who report *directly* to the Owner-Manager.",
            "3 Department Leads + 1 part-time bookkeeper = ?",
          ],
          solution: [
            "Direct subordinates of the Owner-Manager = 3 Department Leads + 1 bookkeeper = **4**.",
          ],
        },
        {
          id: "motivation-organisation-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "non-financial-motivation",
          question:
            "State the two-word non-financial motivation term where workers switch every few hours between **different tasks at the same skill level** to reduce monotony and provide sickness cover.",
          answer: {
            type: "text",
            accept: ["job rotation"],
            display: "Job rotation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["job enrichment"] },
              feedback:
                "**Job enrichment** adds vertical challenge and authority; switching between same-level tasks is **job rotation**.",
            },
            {
              spec: { type: "text", accept: ["job enlargement"] },
              feedback:
                "**Job enlargement** permanently piles on extra same-level tasks; switching stations periodically is **job rotation**.",
            },
          ],
          hints: [
            "Think 'Switch · Stretch · Step-Up' — this one is 'Switch'!",
            "Two words starting with 'Job rot...'",
          ],
          solution: [
            "**Job rotation** rotates employees periodically across same-tier tasks.",
          ],
        },
        {
          id: "motivation-organisation-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "non-financial-motivation",
          question:
            "A 20-person physiotherapy clinic spends **£350 per therapist** training **6 therapists** in sports acupuncture (**job enrichment**). Because therapists feel valued, annual staff resignations drop by **2 therapists**, saving **£3,400 per leaver** in agency recruitment fees. Calculate the clinic's **net financial gain** in Year 1 in £.",
          answer: { type: "number", value: 4700, display: "£4,700" },
          traps: [
            {
              spec: { type: "number", value: 6800 },
              feedback:
                "£6,800 is the gross recruitment saving — remember to subtract the £2,100 training cost (6 × £350)!",
            },
          ],
          hints: [
            "Gross recruitment saving = 2 × £3,400 = £6,800.",
            "Training cost = 6 × £350 = £2,100; subtract cost from saving.",
          ],
          solution: [
            "Recruitment fee savings = {{2 * 3400 = 6800}} (£6,800).",
            "Training outlay = {{6 * 350 = 2100}} (£2,100).",
            "Net Year 1 financial gain = {{6800 - 2100 = 4700}} (**£4,700**).",
          ],
        },
        {
          id: "motivation-organisation-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "centralisation-leadership",
          question:
            "Name the **leadership style** where a leader consults employees and encourages **two-way communication** before taking decisions.",
          answer: {
            type: "text",
            accept: ["democratic", "democratic leadership"],
            display: "Democratic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["laissez-faire", "laissez faire"] },
              feedback:
                "**Laissez-faire** steps back and leaves decisions almost entirely to specialists; consulting staff via two-way communication is **democratic**.",
            },
            {
              spec: { type: "text", accept: ["autocratic"] },
              feedback:
                "**Autocratic** uses one-way downward orders with zero consultation; consulting staff is **democratic**.",
            },
          ],
          hints: [
            "Between autocratic (1-way orders) and laissez-faire (hands-off).",
            "Starts with 'D'.",
          ],
          solution: [
            "**Democratic** leadership consults team members via two-way dialogue before making decisions.",
          ],
        },
        {
          id: "motivation-organisation-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "financial-rewards",
          marks: 3,
          question:
            "Explain **one** drawback of using **piece-rate pay** to remunerate factory workers. *(Edexcel 4BS1 3-mark Explain)*",
          modelAnswer:
            "Workers paid per unit have an incentive to rush assembly in order to maximise their daily output count. Consequently, defect rates and material wastage increase, damaging product quality and customer satisfaction unless costly quality-control checks are added.",
          markScheme: [
            {
              point: "AO1 (1m): Identifies rushing / corner-cutting or income insecurity when machinery stops.",
              keywords: ["rush", "speed", "cut corners", "fast", "fluctuat"],
            },
            {
              point: "AO3a (1m): Connects rushing to higher mistakes, defects, rejects or safety accidents.",
              keywords: ["defect", "mistake", "wastage", "error", "quality", "reject"],
            },
            {
              point: "AO3b (1m): Develops impact — damaged brand reputation, customer returns, or extra inspection costs.",
              keywords: ["reputation", "customer", "inspection", "satisfaction", "return"],
            },
          ],
          hints: [
            "What happens when Taylor's stopwatch incentives reward pure quantity per hour?",
            "Chain it in 3 steps: Rush unit count → More defects/wastage → Damaged reputation or higher inspection cost.",
          ],
          commonError:
            "Writing 'workers won't like it' without explaining the operational quality/wastage chain.",
        },
        {
          id: "motivation-organisation-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "organisational-charts",
          marks: 3,
          question:
            "Explain **one** benefit to a small business owner of **delegating** tasks to senior staff. *(Edexcel 4BS1 3-mark Explain)*",
          modelAnswer:
            "Passing day-to-day authority down frees up the owner's scarce schedule from routine admin. Therefore, the entrepreneur can concentrate on high-value strategic planning such as expansion, while empowering senior staff satisfies Herzberg's responsibility motivator and lowers turnover.",
          markScheme: [
            {
              point: "AO1 (1m): Identifies passing authority down / reducing workload on the owner.",
              keywords: ["authority", "frees", "workload", "routine", "empower"],
            },
            {
              point: "AO3a (1m): Explains owner can focus on strategic decisions OR subordinates feel trusted/developed.",
              keywords: ["strategic", "strategy", "expansion", "trusted", "herzberg", "motivator", "skills"],
            },
            {
              point: "AO3b (1m): Links to better long-term growth decisions or improved retention / lower labour turnover.",
              keywords: ["growth", "turnover", "retention", "productivity", "faster"],
            },
          ],
          hints: [
            "Be careful NEVER to say responsibility is passed away!",
            "Focus on freeing the founder's time for strategy + empowering senior staff (Herzberg).",
          ],
          commonError:
            "Falsely claiming delegation relieves the owner of final responsibility if mistakes happen.",
        },
        {
          id: "motivation-organisation-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "non-financial-motivation",
          marks: 6,
          question:
            "**Case Study (Paper 1 — 18 staff):** *Petal & Stem* is a boutique wedding florist run as a partnership. Despite paying above-average hourly wages, 6 florists resigned last year because they spent every day repeating identical bouquet templates set by the partners. **Analyse** how introducing **job enrichment** could improve *Petal & Stem*'s performance. *(6 marks — AO2 + AO3)*",
          modelAnswer:
            "Allowing experienced florists to consult directly with brides and design bespoke floral arches gives them vertical autonomy over creative floral arrangements rather than repeating fixed bouquet templates. According to Herzberg, meaningful creative ownership acts as a true motivator (unlike hourly wages, which are merely a hygiene factor), lifting job satisfaction so fewer skilled florists resign and saving recruitment costs.\n\nFurthermore, empowering florists to manage wedding venue installations builds bespoke design flair that differentiates the studio from supermarket flowers, enabling premium wedding package prices and stronger word-of-mouth bookings.",
          markScheme: [
            {
              point: "AO2 (1m): Applies job enrichment to floristry context (designing bespoke wedding arches / consulting brides rather than fixed bouquet templates).",
              keywords: ["bespoke", "brides", "wedding", "floral", "arches", "arrangements"],
            },
            {
              point: "AO3 (1m): Connects creative autonomy to Herzberg's motivators (contrasted with wage hygiene factor).",
              keywords: ["herzberg", "motivator", "hygiene", "autonomy", "satisfaction"],
            },
            {
              point: "AO3 (1m): Develops HR impact — cuts high labour turnover (fewer resignations) and reduces recruitment/training costs.",
              keywords: ["turnover", "recruitment", "retention", "training cost"],
            },
            {
              point: "AO2 (1m): Second contextualised strand — managing venue installations / tailoring creative client designs.",
              keywords: ["venue", "installations", "client", "supermarket", "package"],
            },
            {
              point: "AO3 (1m): Links tailored creativity to stronger differentiation / higher quality service.",
              keywords: ["differentiat", "quality", "word-of-mouth", "reputation"],
            },
            {
              point: "AO3 (1m): Develops commercial outcome — ability to charge premium prices / win repeat referrals.",
              keywords: ["premium", "prices", "bookings", "revenue", "profit"],
            },
          ],
          hints: [
            "6-mark Analyse = TWO developed contextual chains (3 marks each), weaving *florists, brides, bespoke wedding arrangements* throughout!",
            "Chain 1: Herzberg motivator vs wage hygiene → cuts resignations/recruitment cost. Chain 2: Bespoke bride consultations → differentiation & premium wedding prices.",
          ],
          commonError:
            "Writing generic textbook sentences about 'workers in a factory' with zero mention of bouquets, brides or weddings (scores zero AO2!).",
        },
        {
          id: "motivation-organisation-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "financial-rewards",
          marks: 9,
          question:
            "**Case Study (Paper 1 — 28 staff):** *VoltCycle*, a small electric-bike repair and sales shop, wants to boost revenue while protecting its reputation for honest mechanical safety advice. To motivate its 10 sales-mechanics, the founder is choosing between:\n- **Option 1**: Paying a **high 8% sales commission** on new e-bikes sold (with a lower basic wage)\n- **Option 2**: Introducing **team profit-sharing** plus **funded master-mechanic training (job enrichment)**\n\n**Justify** which option *VoltCycle* should choose. *(9 marks — use AJIM)*",
          modelAnswer:
            "VoltCycle should choose Option 2 (team profit-sharing plus master-mechanic enrichment). Because VoltCycle's brand relies on honest mechanical safety advice for electric-bike riders, Option 1's aggressive 8% commission risks mechanics pushing expensive new e-bikes onto commuters who only needed a cheap battery or brake repair, causing misselling complaints that ruin local trust.\n\nBy contrast, funded master-mechanic diagnostics training enriches technicians' roles with complex e-bike battery troubleshooting (a Herzberg motivator), while team profit-sharing rewards mechanics and workshop staff cooperatively without cutting basic wage security (Maslow's safety tier). Admittedly, profit-sharing only pays out at year-end and training requires upfront cash, whereas 8% commission is a variable cost paid only when bikes sell. However, for a specialist 28-person shop competing against online discounters on trusted expertise rather than pushy sales, protecting honest safety reputation and retaining certified mechanics is the decisive long-term driver of profit.",
          markScheme: [
            {
              point: "AO2 (1m): Clear recommendation applied to e-bike mechanics / battery & brake safety repairs.",
              keywords: ["battery", "brake", "mechanics", "commuters", "riders"],
            },
            {
              point: "AO3 (1m): Analyses why Option 1's 8% commission risks pushy misselling over honest repair advice.",
              keywords: ["misselling", "pushing", "pushy", "trust", "complaints"],
            },
            {
              point: "AO3 (1m): Links lower basic wage under Option 1 to income insecurity (Maslow safety need).",
              keywords: ["maslow", "safety", "insecurity", "security"],
            },
            {
              point: "AO2/AO3 (1m): Explains how master-mechanic diagnostics training provides Herzberg job enrichment.",
              keywords: ["herzberg", "motivator", "diagnostics", "troubleshooting"],
            },
            {
              point: "AO3 (1m): Explains how team profit-sharing fosters cooperation between sales and workshop staff.",
              keywords: ["cooperat", "workshop", "team", "together"],
            },
            {
              point: "AO3/AO4 (1m): Counter-argument — acknowledges commission is a variable cost aiding cash flow / training costs upfront cash.",
              keywords: ["variable cost", "upfront", "year-end", "cash"],
            },
            {
              point: "AO4 (1m): Evaluates 'it depends on' context — specialist local shop competing against online discounters.",
              keywords: ["online", "discounters", "specialist", "long-term"],
            },
            {
              point: "AO4 (1m): Weighs immediate sales push against repeat reputation and certified mechanic retention.",
              keywords: ["retaining", "certified", "reputation", "decisive"],
            },
            {
              point: "AO4 (1m): Concludes decisively with supported overall judgement (AJIM).",
              keywords: ["should choose", "driver of profit", "honest"],
            },
          ],
          hints: [
            "Pick ONE option clearly in line 1 (**A**nswer).",
            "Weave e-bike repairs, batteries, brakes and honest advice into your chains (**J**ustify + counter-argument).",
            "Finish with **I**t depends on & **M**ost decisive factor (brand trust vs short-term sales push).",
          ],
        },
      ],
    },
    {
      id: "motivation-organisation-p2",
      title: "Practice Paper 2 — Paper 2 Large Business Focus (> 250 Staff)",
      questions: [
        {
          id: "motivation-organisation-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "motivation-theories",
          question:
            "GlobalParcels PLC employs an average of **2,500 courier drivers**, and **450 drivers** resign during the year. Calculate GlobalParcels PLC's annual **labour turnover (%)**.",
          answer: { type: "number", value: 18, display: "18%" },
          traps: [
            {
              spec: { type: "number", value: 0.18 },
              feedback: "Multiply 0.18 by 100 to state labour turnover as a percentage (18%).",
            },
          ],
          hints: [
            "Labour turnover = (450 ÷ 2,500) × 100.",
          ],
          solution: [
            "Labour turnover = {{(450 / 2500) * 100 = 18%}}.",
          ],
        },
        {
          id: "motivation-organisation-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "motivation-theories",
          question:
            "AeroParts PLC automates tool setups and introduces autonomous team cells. Weekly output rises from **36,000 valves** across **300 workers** to **42,900 valves** across **300 workers**. Calculate the **percentage increase in labour productivity** *(give your answer to 2 decimal places)*.",
          answer: { type: "number", value: 19.17, tolerance: 0.1, display: "19.17%" },
          traps: [
            {
              spec: { type: "number", value: 23 },
              feedback:
                "23 valves per worker is the absolute increase (143 − 120) — divide 23 by the original 120 valves/worker and multiply by 100 for the percentage increase!",
            },
          ],
          hints: [
            "Old productivity = 36,000 ÷ 300 = 120 valves/worker; new productivity = 42,900 ÷ 300 = 143 valves/worker.",
            "Percentage increase = ((143 − 120) ÷ 120) × 100 (round to 2 d.p.).",
          ],
          solution: [
            "Original productivity = {{36000 / 300 = 120}} valves/worker.",
            "New productivity = {{42900 / 300 = 143}} valves/worker.",
            "Percentage increase = {{((143 - 120) / 120) * 100 = 19.17%}} (to 2 d.p.).",
          ],
        },
        {
          id: "motivation-organisation-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "organisational-charts",
          question:
            "Study the corporate structure of Horizon Hotels PLC:\n- Layer 1: **1 Chief Executive Officer (CEO)**\n- Layer 2: **5 Continental Vice-Presidents** reporting directly to the CEO\n- Layer 3: **8 Country Directors** reporting directly to **each** Vice-President\n- Layer 4: **12 Hotel General Managers** reporting directly to **each** Country Director\n\nCalculate the **total number of Hotel General Managers** in Layer 4.",
          answer: { type: "number", value: 480, display: "480" },
          traps: [
            {
              spec: { type: "number", value: 526 },
              feedback:
                "526 is the sum of ALL four layers (1 + 5 + 40 + 480) — the question asks strictly for the number of Hotel General Managers in Layer 4!",
            },
            {
              spec: { type: "number", value: 96 },
              feedback:
                "96 is the General Managers under just ONE Vice-President (8 × 12) — multiply by all 5 Vice-Presidents!",
            },
          ],
          hints: [
            "Find the total number of Country Directors in Layer 3 first: 5 × 8 = 40.",
            "Each of those 40 Country Directors oversees 12 Hotel General Managers: 40 × 12.",
          ],
          solution: [
            "Country Directors in Layer 3 = {{5 * 8 = 40}}.",
            "Hotel General Managers in Layer 4 = {{40 * 12 = 480}}.",
          ],
        },
        {
          id: "motivation-organisation-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "organisational-charts",
          question:
            "Retail giant CrestMart PLC **delayers** 40 regional merchandising manager posts, each paid **£52,000 per year** plus **£8,000 per year** in company-car fringe benefits. Each redundant manager receives a one-off redundancy package of **£22,000**. Calculate CrestMart PLC's **net cost saving in Year 1** in £.",
          answer: { type: "number", value: 1520000, display: "£1,520,000" },
          traps: [
            {
              spec: { type: "number", value: 1200000 },
              feedback:
                "You forgot the £8,000 company-car perk saved per manager! Each post removed saves £52,000 + £8,000 = £60,000/yr before subtracting the £22,000 redundancy payout.",
            },
            {
              spec: { type: "number", value: 2400000 },
              feedback:
                "£2,400,000 is the recurring annual saving from Year 2 onwards — subtract the one-off £880,000 redundancy cost in Year 1!",
            },
          ],
          hints: [
            "Total annual employment cost saved per manager = £52,000 salary + £8,000 car perk = £60,000.",
            "Multiply 40 × £60,000, then subtract one-off redundancy payouts of 40 × £22,000.",
          ],
          solution: [
            "Annual salary + perk saved per post = {{52000 + 8000 = 60000}} (£60,000); for 40 posts = {{40 * 60000 = 2400000}} (£2,400,000).",
            "Year 1 redundancy cost = {{40 * 22000 = 880000}} (£880,000).",
            "Net Year 1 saving = {{2400000 - 880000 = 1520000}} (**£1,520,000**).",
          ],
        },
        {
          id: "motivation-organisation-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "financial-rewards",
          question:
            "BioMed PLC allocates **4% of annual operating profit** to an equal **profit-sharing pool** split across all **800 employees**. If BioMed PLC earns **£14,000,000** operating profit this year, how much profit-share bonus does **each employee** receive in £?",
          answer: { type: "number", value: 700, display: "£700" },
          traps: [
            {
              spec: { type: "number", value: 560000 },
              feedback:
                "£560,000 is the entire 4% company pool — divide £560,000 equally among the 800 employees!",
            },
          ],
          hints: [
            "Find the 4% profit-sharing pool first: 0.04 × £14,000,000 = £560,000.",
            "Divide £560,000 by 800 employees.",
          ],
          solution: [
            "Total profit-sharing pool = {{14000000 * 0.04 = 560000}} (£560,000).",
            "Bonus per employee = {{560000 / 800 = 700}} (**£700**).",
          ],
        },
        {
          id: "motivation-organisation-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "centralisation-leadership",
          question:
            "A 60-branch gym chain currently lets each branch buy cleaning supplies locally (**decentralised**) for **£900 per branch per month**. Switching to **centralised** head-office bulk buying cuts supplier prices by **25%**, while central warehouse distribution costs **£4,500 per month** in total. Calculate the gym chain's **net monthly saving** in £.",
          answer: { type: "number", value: 9000, display: "£9,000" },
          traps: [
            {
              spec: { type: "number", value: 13500 },
              feedback:
                "£13,500 is the gross 25% discount — subtract the £4,500 monthly central warehouse cost!",
            },
          ],
          hints: [
            "Current monthly spend across 60 gyms = 60 × £900 = £54,000.",
            "25% bulk discount saves £13,500; subtract £4,500 warehouse distribution cost.",
          ],
          solution: [
            "Current decentralised spend = {{60 * 900 = 54000}} (£54,000/month).",
            "Gross 25% bulk saving = {{54000 * 0.25 = 13500}} (£13,500).",
            "Net monthly saving = {{13500 - 4500 = 9000}} (**£9,000**).",
          ],
        },
        {
          id: "motivation-organisation-p2-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "organisational-charts",
          question:
            "Give the single-word term for removing one or more layers of middle management to create a flatter hierarchy.",
          answer: {
            type: "text",
            accept: ["delayering"],
            display: "Delayering",
          },
          traps: [
            {
              spec: { type: "text", accept: ["delegation", "delegating"] },
              feedback:
                "**Delegation** passes authority down within existing tiers; removing a whole management layer is **delayering**.",
            },
          ],
          hints: [
            "Literally 'de-' + 'layering'!",
          ],
          solution: [
            "**Delayering** removes middle-management layers to shorten the chain of command and reduce fixed salaries.",
          ],
        },
        {
          id: "motivation-organisation-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "motivation-theories",
          question:
            "In Maslow's 5-tier Hierarchy of Needs, what is the name of the **highest (5th) tier** at the peak of the pyramid, representing reaching one's full creative potential?",
          answer: {
            type: "text",
            accept: ["self-actualisation", "self actualisation", "self-actualization", "self actualization"],
            display: "Self-actualisation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["esteem", "esteem needs"] },
              feedback:
                "**Esteem** is the 4th tier (recognition & status) — the 5th peak tier is **self-actualisation**!",
            },
          ],
          hints: [
            "Above Physiological, Safety, Social and Esteem.",
            "Hyphenated phrase starting with 'Self-act...'",
          ],
          solution: [
            "**Self-actualisation** sits at the peak (Tier 5) of Maslow's pyramid.",
          ],
        },
        {
          id: "motivation-organisation-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "financial-rewards",
          question:
            "A PLC regional sales director earns:\n- Basic annual salary: **£65,000**\n- Performance-Related Pay (PRP) bonus: **15% of basic salary** if regional profit beats budget\n- Share-option dividend cash payout: **£2,250**\n\nHer region beats budget this year. Calculate her **total annual remuneration** in £.",
          answer: { type: "number", value: 77000, display: "£77,000" },
          traps: [
            {
              spec: { type: "number", value: 74750 },
              feedback:
                "£74,750 includes salary + 15% PRP (£9,750) — don't forget to add the £2,250 share dividend payout!",
            },
          ],
          hints: [
            "Calculate 15% of £65,000 = £9,750.",
            "Sum £65,000 + £9,750 + £2,250.",
          ],
          solution: [
            "PRP bonus = {{65000 * 0.15 = 9750}} (£9,750).",
            "Total remuneration = {{65000 + 9750 + 2250 = 77000}} (**£77,000**).",
          ],
        },
        {
          id: "motivation-organisation-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "centralisation-leadership",
          question:
            "State the exact term for an organisational approach where major decision-making authority is delegated away from Head Office out to **regional or country divisions**.",
          answer: {
            type: "text",
            accept: ["decentralisation", "decentralised", "decentralization", "decentralized"],
            display: "Decentralisation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["centralisation", "centralised", "centralization", "centralized"] },
              feedback:
                "Opposite! **Centralisation** keeps decisions at Head Office; pushing decisions out to regional divisions is **decentralisation**.",
            },
          ],
          hints: [
            "Opposite of centralisation — starts with 'De...'",
            "Regional divisions gain autonomy rather than Head Office holding all power.",
          ],
          solution: [
            "**Decentralisation** empowers regional/country managers to tailor decisions to local markets.",
          ],
        },
        {
          id: "motivation-organisation-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "motivation-theories",
          question:
            "Call-centre PLC *TeleFirst* cuts annual labour turnover from **30%** to **18%** across an average workforce of **600 agents**. Recruiting and inducting each replacement agent costs **£2,500**. Calculate *TeleFirst*'s **annual recruitment and training cost saving** in £.",
          answer: { type: "number", value: 180000, display: "£180,000" },
          traps: [
            {
              spec: { type: "number", value: 72 },
              feedback:
                "72 is the reduction in the number of leavers — multiply 72 by £2,500 replacement cost per agent!",
            },
          ],
          hints: [
            "Turnover dropped by 12 percentage points (30% − 18% = 12%) across 600 agents: 0.12 × 600 = 72 fewer leavers.",
            "Multiply 72 fewer leavers by £2,500 per leaver.",
          ],
          solution: [
            "Old leavers = {{600 * 0.30 = 180}}; New leavers = {{600 * 0.18 = 108}}; Reduction = {{180 - 108 = 72}} fewer leavers.",
            "Annual cost saving = {{72 * 2500 = 180000}} (**£180,000**).",
          ],
        },
        {
          id: "motivation-organisation-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "organisational-charts",
          marks: 3,
          question:
            "Explain **one** disadvantage to a large multinational of operating a **tall organisational structure**. *(Edexcel 4BS1 3-mark Explain)*",
          modelAnswer:
            "A tall hierarchy creates a long vertical chain of command with many layers of middle management between senior executives and frontline staff. Consequently, upward market feedback takes longer to reach directors and messages become distorted, slowing responses to agile rivals while inflating fixed salary overheads.",
          markScheme: [
            {
              point: "AO1 (1m): Identifies long chain of command / many layers of middle management.",
              keywords: ["long", "chain of command", "middle management", "many layers"],
            },
            {
              point: "AO3a (1m): Explains slow communication or distortion of messages between top and bottom (or high salary cost).",
              keywords: ["distort", "slow", "delay", "feedback", "salary", "overheads"],
            },
            {
              point: "AO3b (1m): Develops competitive/profit impact — slow reaction to competitors or lower operating profit.",
              keywords: ["rivals", "competitors", "agile", "profit", "cost"],
            },
          ],
          hints: [
            "Focus on either the **long chain of command** (slow, distorted communication) or **middle-management salary overheads**.",
            "Build a 3-step chain: Many layers → Slow/distorted comms → Slow response to rivals.",
          ],
        },
        {
          id: "motivation-organisation-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "centralisation-leadership",
          marks: 6,
          question:
            "**Case Study (Paper 2 — 1,400 staff):** *NordicHome PLC* sells flat-pack furniture across 9 European and Asian countries. Currently all room-display themes, sofa sizes and prices are dictated from Stockholm Head Office (**centralised**), causing disappointing sales in compact Tokyo and Singapore apartments. **Analyse** the benefits to *NordicHome PLC* of moving to a **decentralised** structure. *(6 marks — AO2 + AO3)*",
          modelAnswer:
            "Allowing Asian country managers in Tokyo and Singapore to adapt sofa dimensions and showroom room-displays locally ensures furniture fits compact urban apartments rather than oversized Scandinavian layouts. Tailoring stock to local living spaces directly matches customer needs, lifting footfall conversion and international revenue.\n\nAdditionally, granting regional directors authority over local promotions and pricing empowers senior country leaders (satisfying Herzberg's responsibility motivator and Maslow's esteem tier). Motivated local directors react within days to rival furniture sales without waiting for Stockholm sign-off, improving regional market share and executive retention.",
          markScheme: [
            {
              point: "AO2 (1m): Applies decentralisation to Asian apartment sizes / sofa dimensions / room-displays.",
              keywords: ["sofa", "urban", "scandinavian", "showroom", "layouts", "dimensions"],
            },
            {
              point: "AO3 (1m): Explains closer match to local consumer needs / living conditions.",
              keywords: ["tailor", "local", "customer needs", "conversion"],
            },
            {
              point: "AO3 (1m): Develops commercial impact — higher international sales revenue / market share.",
              keywords: ["revenue", "market share", "footfall"],
            },
            {
              point: "AO2 (1m): Second contextualised strand — regional directors adjusting pricing/promotions without waiting for head office.",
              keywords: ["regional directors", "promotions", "rival", "sign-off"],
            },
            {
              point: "AO3 (1m): Links autonomy to Herzberg responsibility / Maslow esteem OR faster reaction speed.",
              keywords: ["herzberg", "maslow", "empower", "esteem", "within days"],
            },
            {
              point: "AO3 (1m): Develops impact — stronger executive retention or faster competitive defence.",
              keywords: ["retention", "motivated", "react"],
            },
          ],
          hints: [
            "Weave *sofas, compact Tokyo/Singapore apartments, room displays, Stockholm sign-off* into BOTH chains!",
            "Chain 1: Local product/layout fit → higher sales conversion. Chain 2: Faster local pricing + empowered country managers (Herzberg).",
          ],
        },
        {
          id: "motivation-organisation-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "organisational-charts",
          marks: 6,
          question:
            "**Case Study (Paper 2 — 4,200 staff):** Supermarket chain *FreshBasket PLC* faces fierce discount competition and plans to **delayer** 180 department-supervisor roles across its stores, widening each Store Manager's span of control from 5 to 16 staff. **Analyse** the likely impacts of this delayering on *FreshBasket PLC*. *(6 marks — balanced AO2 + AO3)*",
          modelAnswer:
            "Removing 180 department-supervisor salaries permanently cuts FreshBasket's fixed store wage overheads from Year 2 onwards, while shortening the chain of command between checkout assistants and Store Managers. Lower overhead costs let FreshBasket cut grocery prices to defend market share against discount rivals.\n\nHowever, tripling each Store Manager's direct reports to 16 bakery, till and chilled-aisle workers risks severe managerial overload and weaker floor supervision, especially alongside lump-sum Year 1 statutory redundancy payouts. Overstretched managers and anxious aisle staff fearful for job security (Maslow's safety tier) may make stock-rotation errors or quit, hurting fresh-food availability.",
          markScheme: [
            {
              point: "AO2 (1m): Applies benefit to grocery context (180 salaries / checkout & aisle staff / lower grocery prices).",
              keywords: ["grocery", "checkout", "aisle", "180"],
            },
            {
              point: "AO3 (1m): Links removing management layer to lower fixed salary overheads and shorter chain of command.",
              keywords: ["fixed", "overheads", "chain of command", "shortening"],
            },
            {
              point: "AO3 (1m): Develops competitive gain — funds lower retail prices to fight discount rivals.",
              keywords: ["prices", "market share", "defend"],
            },
            {
              point: "AO2 (1m): Applies drawback to store operations (bakery/chilled aisles, stock-rotation, Year 1 redundancy payouts).",
              keywords: ["bakery", "chilled", "stock-rotation", "redundancy"],
            },
            {
              point: "AO3 (1m): Analyses manager overload from wider supervision load and damaged Maslow job-security morale.",
              keywords: ["overload", "maslow", "security", "anxious", "overstretched"],
            },
            {
              point: "AO3 (1m): Develops operational risk — errors, empty shelves or higher staff turnover.",
              keywords: ["errors", "availability", "quit", "supervision"],
            },
          ],
          hints: [
            "Because the prompt asks for *likely impacts*, give 1 developed positive chain (wage cost savings → price competitiveness) and 1 developed negative chain (overload + redundancy cost + Maslow safety fear).",
            "Anchor both chains in grocery store specifics: 180 supervisors, checkout/bakery/chilled aisles, and discount supermarket rivals.",
          ],
        },
        {
          id: "motivation-organisation-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "centralisation-leadership",
          marks: 12,
          question:
            "**Case Study (Paper 2 — 950 staff):** *CloudPulse PLC* develops cybersecurity software for banks. Following a major hacking incident at a client bank, the newly appointed CEO replaces the former founder's **democratic / laissez-faire** culture with strict **autocratic** leadership, daily attendance tracking and mandatory code sign-offs. **Evaluate** whether this shift to autocratic leadership will improve *CloudPulse PLC*'s performance. *(12 marks — Edexcel 4BS1 Evaluate, use AJIM)*",
          modelAnswer:
            "In the immediate aftermath of a banking cyber-breach, shifting to autocratic command brings urgent crisis discipline: non-negotiable security patches and mandatory code sign-offs eliminate sloppy vulnerabilities quickly, reassuring nervous banking clients that data leaks are contained without slow committee debates.\n\nHowever, cybersecurity software relies on elite, mobile PhD engineers who previously thrived on autonomous problem-solving (Maslow's self-actualisation and Herzberg's responsibility motivators). Imposing permanent one-way autocratic surveillance and rigid clock-watching strips away professional trust, triggering resentment and high labour turnover as rival tech giants poach CloudPulse's best coders — crippling product innovation and inflating specialist recruitment costs.\n\nOverall, permanent autocratic leadership will damage CloudPulse's long-term performance. Effectiveness depends critically on **timing and task stage**: strict autocratic direction is justified for a temporary 30-day emergency security audit to save banking contracts, but once compliance protocols are restored, the CEO must transition back to a **democratic** framework that consults senior engineers so CloudPulse retains top cybersecurity talent.",
          markScheme: [
            {
              point: "AO2 (1m): Applies autocratic speed to the banking cyber-breach / security patch emergency.",
              keywords: ["cyber", "breach", "patches", "banking", "vulnerabilities"],
            },
            {
              point: "AO3 (1m): Explains rapid crisis response without consultation delays.",
              keywords: ["urgent", "crisis", "quickly", "debates", "immediate"],
            },
            {
              point: "AO3 (1m): Links mandatory compliance to restoring client confidence and retaining bank contracts.",
              keywords: ["reassur", "confidence", "contracts", "leaks"],
            },
            {
              point: "AO2 (1m): Applies counter-argument to elite software coders / PhD cybersecurity engineers.",
              keywords: ["engineers", "coders", "phd", "tech"],
            },
            {
              point: "AO3 (1m): Connects micromanagement to loss of Herzberg autonomy / Maslow self-actualisation.",
              keywords: ["herzberg", "maslow", "self-actualisation", "trust", "surveillance"],
            },
            {
              point: "AO3 (1m): Develops HR/commercial damage — rivals poach talent, raising labour turnover and recruitment costs.",
              keywords: ["poach", "turnover", "recruitment", "innovation"],
            },
            {
              point: "AO4 (1m): Weighs short-term emergency containment against long-term R&D talent retention.",
              keywords: ["short-term", "long-term", "temporary", "permanent"],
            },
            {
              point: "AO4 (1m): Identifies key 'it depends on' contingency — crisis phase vs ongoing R&D stage.",
              keywords: ["depends", "timing", "stage", "audit"],
            },
            {
              point: "AO4 (1m): Proposes nuanced synthesis — autocratic for 30-day emergency fix, then democratic consultation.",
              keywords: ["transition", "restore", "consult"],
            },
            {
              point: "AO4 (1m): Sustains clear evaluative thread throughout rather than listing generic textbook points.",
              keywords: ["overall", "justified", "protocols"],
            },
            {
              point: "AO4 (1m): Judges why talent retention is the decisive constraint in specialist software.",
              keywords: ["talent", "specialist", "retains"],
            },
            {
              point: "AO4 (1m): Reaches a decisive, context-grounded final judgement.",
              keywords: ["damage", "framework", "compliance"],
            },
          ],
          hints: [
            "12-mark Evaluate = balanced two-sided contextual analysis + deep **AJIM** evaluation!",
            "Argue WHY autocratic works for the *immediate banking breach crisis*, THEN argue WHY keeping it permanently destroys *Herzberg/Maslow motivation* among elite coders.",
            "Conclude with a nuanced time-phased judgement: autocratic for the 30-day crisis audit, then revert to democratic consultation.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "motivation-organisation-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "motivation-theories",
      question:
        "Precision Assemblers Ltd employs **25 workers** who assemble **3,000 circuit boards** per week at a fixed wage of **£600 per worker per week**. Management introduces autonomous cell teamworking plus a **£50 weekly enrichment allowance** per worker, raising pay to **£650 per worker per week**. Five workers transfer to a new division, and the remaining **20 workers** assemble **3,250 circuit boards** per week. Calculate the **reduction in labour cost per circuit board** (in £, to 2 decimal places).",
      answer: { type: "number", value: 1, display: "£1.00" },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback:
            "£4.00 is the NEW labour cost per board (£13,000 ÷ 3,250) — subtract £4.00 from the original £5.00 per board to find the reduction!",
        },
        {
          spec: { type: "number", value: 5 },
          feedback:
            "£5.00 is the ORIGINAL labour cost per board (£15,000 ÷ 3,000) — find the new unit labour cost and take the difference!",
        },
      ],
      hints: [
        "Step 1: Find original weekly wage bill (25 × £600 = £15,000) and divide by 3,000 boards to get original labour cost per board.",
        "Step 2: Find new weekly wage bill (20 × £650 = £13,000) and divide by 3,250 boards to get new labour cost per board.",
        "Step 3: Subtract new labour cost per board from original labour cost per board.",
      ],
      solution: [
        "Original weekly wage bill = {{25 * 600 = 15000}} (£15,000); original labour cost per board = {{15000 / 3000 = 5.00}} (£5.00).",
        "New weekly wage bill = {{20 * 650 = 13000}} (£13,000); new labour cost per board = {{13000 / 3250 = 4.00}} (£4.00).",
        "Reduction in labour cost per board = {{5.00 - 4.00 = 1.00}} (**£1.00** per board — even though individual weekly pay rose!).",
      ],
    },
    {
      id: "motivation-organisation-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "financial-rewards",
      question:
        "A B2B software salesperson is offered two rival annual remuneration packages:\n- **Package A**: Basic salary **£30,000** + **4% commission** on **all** annual sales\n- **Package B**: Basic salary **£24,000** + **10% commission** ONLY on annual sales **above £150,000**\n\nCalculate the exact **annual sales revenue (in £)** at which Package A and Package B pay the **exact same** total remuneration.",
      answer: { type: "number", value: 350000, display: "£350,000" },
      traps: [
        {
          spec: { type: "number", value: 100000 },
          feedback:
            "You forgot the £150,000 threshold on Package B! Below £150,000, Package B pays £0 commission (£24,000 total) while Package A pays > £30,000.",
        },
        {
          spec: { type: "number", value: 250000 },
          feedback:
            "At £250,000, Package A pays £40,000 while Package B pays £24,000 + 10% × £100,000 = £34,000 — keep going higher!",
        },
      ],
      hints: [
        "Notice that for sales ≤ £150,000, Package A pays at least £30,000 while Package B pays flat £24,000, so they can only cross when annual sales S > £150,000.",
        "Write total pay for S > £150,000: Package A = 30,000 + 0.04S; Package B = 24,000 + 0.10(S − 150,000).",
        "Expand Package B to 9,000 + 0.10S, set equal to 30,000 + 0.04S, and solve 0.06S = 21,000.",
      ],
      solution: [
        "For sales {{S > 150000}}, Package A pay = {{30000 + 0.04S}}.",
        "Package B pay = {{24000 + 0.10 * (S - 150000) = 9000 + 0.10S}}.",
        "Equate both packages: {{30000 + 0.04S = 9000 + 0.10S}} → {{0.06S = 21000}} → {{S = 350000}} (**£350,000**, where both pay £44,000).",
      ],
    },
    {
      id: "motivation-organisation-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "organisational-charts",
      question:
        "Vanguard Engineering Ltd currently has a 4-layer hierarchy:\n- **1 CEO** directly managing **4 Functional Directors**\n- Each Functional Director directly manages **4 Team Managers** (16 Team Managers in total)\n- Each Team Manager directly supervises **6 Operatives** (96 Operatives in total)\n\nTo flatten the hierarchy, Vanguard **delayers all 16 Team Managers**, reassigning all **96 Operatives** to report directly and equally across the **4 Functional Directors**. By how many direct subordinates does **one Functional Director's span of control** increase?",
      answer: { type: "number", value: 20, display: "20" },
      traps: [
        {
          spec: { type: "number", value: 24 },
          feedback:
            "24 is the NEW span of control (96 ÷ 4) — subtract the Functional Director's ORIGINAL span of control (4) to find the increase!",
        },
        {
          spec: { type: "number", value: 92 },
          feedback:
            "96 Operatives are shared equally across ALL 4 Functional Directors (24 each), not all reporting to 1 Director!",
        },
      ],
      hints: [
        "First state one Functional Director's ORIGINAL direct span of control (4 Team Managers).",
        "After delayering the Team Managers, divide the 96 Operatives equally among the 4 Functional Directors to find the NEW span of control.",
        "Subtract old span from new span: 24 − 4.",
      ],
      solution: [
        "Original span of control per Functional Director = **4** (4 Team Managers).",
        "New span of control per Functional Director = {{96 / 4 = 24}} Operatives.",
        "Increase in span of control = {{24 - 4 = 20}} direct subordinates.",
      ],
    },
    {
      id: "motivation-organisation-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "financial-rewards",
      question:
        "A ceramics workshop pays potters under a quality-adjusted piece-rate rule:\n- **Passed mugs only** are paid: **£3.00 per mug** for the first **100 passed mugs**, and **£4.20 per mug** for every passed mug **above 100**.\n- Rejected mugs earn **£0**.\n- A **£45 weekly zero-defect bonus** is added **only if** rejected mugs are **strictly below 2%** of total mugs produced.\n\nIn Week 12, Aisha produces **150 mugs in total**, of which **4 mugs** crack and are rejected. Calculate Aisha's **gross weekly pay** in £ (to 2 decimal places).",
      answer: { type: "number", value: 493.2, display: "£493.20" },
      traps: [
        {
          spec: { type: "number", value: 538.2 },
          feedback:
            "Check her defect rate: 4 ÷ 150 = 2.67%, which is NOT below 2% — so she does NOT qualify for the £45 bonus!",
        },
        {
          spec: { type: "number", value: 510 },
          feedback:
            "£510 pays for all 150 mugs — remember the 4 cracked mugs are rejected and unpaid, leaving 146 passed mugs!",
        },
      ],
      hints: [
        "Step 1: Find how many mugs passed inspection: 150 − 4 = 146 passed mugs.",
        "Step 2: Calculate tiered piece-rate on 146 passed mugs: (100 × £3.00) + (46 × £4.20).",
        "Step 3: Check whether 4 ÷ 150 is below 2% before adding any £45 quality bonus!",
      ],
      solution: [
        "Passed mugs = {{150 - 4 = 146}} mugs.",
        "Piece-rate pay = {{(100 * 3.00) + (46 * 4.20) = 300 + 193.20 = 493.20}} (£493.20).",
        "Defect rate = {{(4 / 150) * 100 = 2.67%}}, which exceeds the 2% cap, so bonus = £0. Total pay = **£493.20**.",
      ],
    },
    {
      id: "motivation-organisation-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "organisational-charts",
      question:
        "Apex Insurance PLC **delayers 30 middle-management roles**, each costing **£54,000 per year** in salary. Each redundant manager receives a one-off redundancy settlement of **£28,000**. To compensate **15 remaining senior managers** for absorbing wider spans of control, each of the 15 senior managers receives a permanent **£12,000 per year** responsibility allowance. How many **months** of net recurring wage savings are needed to pay back the one-off redundancy cost?",
      answer: { type: "number", value: 7, display: "7 months" },
      traps: [
        {
          spec: { type: "number", value: 6.22, tolerance: 0.05 },
          feedback:
            "You forgot to subtract the £180,000/yr responsibility allowance paid to the 15 senior managers!",
        },
      ],
      hints: [
        "Step 1: Calculate total one-off redundancy cost = 30 × £28,000 = £840,000.",
        "Step 2: Calculate net annual payroll saving = (30 × £54,000) − (15 × £12,000) = £1,440,000 per year.",
        "Step 3: Convert £1,440,000/yr into a monthly saving (÷ 12 = £120,000/month), then divide £840,000 by £120,000.",
      ],
      solution: [
        "One-off redundancy outlay = {{30 * 28000 = 840000}} (£840,000).",
        "Gross salaries removed = {{30 * 54000 = 1620000}} (£1,620,000/yr); extra allowances = {{15 * 12000 = 180000}} (£180,000/yr).",
        "Net annual saving = {{1620000 - 180000 = 1440000}} (£1,440,000/yr) = {{1440000 / 12 = 120000}} (£120,000/month).",
        "Payback time = {{840000 / 120000 = 7}} **months**.",
      ],
    },
    {
      id: "motivation-organisation-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "motivation-theories",
      question:
        "On 1 January, *SwiftHaul Ltd* employed **74 lorry drivers**. By 31 December — after replacing every driver who resigned AND expanding its fleet — it employed **86 lorry drivers**. Using the mean of start-of-year and end-of-year headcount, *SwiftHaul*'s annual **labour turnover** was **22.5%**. Calculate the **total number of new drivers recruited** during the year.",
      answer: { type: "number", value: 30, display: "30 drivers" },
      traps: [
        {
          spec: { type: "number", value: 18 },
          feedback:
            "18 is the number of drivers who LEFT (22.5% of 80) — SwiftHaul had to hire 18 replacements PLUS 12 extra drivers to grow from 74 to 86!",
        },
        {
          spec: { type: "number", value: 12 },
          feedback:
            "12 is only the net headcount increase (86 − 74) — don't forget the replacements hired for the 18 drivers who resigned!",
        },
      ],
      hints: [
        "Step 1: Find the average number of staff over the year: (74 + 86) ÷ 2 = 80 drivers.",
        "Step 2: Use Labour Turnover = 22.5% of 80 to find how many drivers LEFT during the year (0.225 × 80 = 18).",
        "Step 3: Use Closing Staff = Opening Staff − Leavers + Recruits (86 = 74 − 18 + Recruits) to solve for Recruits!",
      ],
      solution: [
        "Average headcount = {{(74 + 86) / 2 = 80}} drivers.",
        "Drivers leaving = {{80 * 0.225 = 18}} leavers.",
        "Solve {{74 - 18 + \"Recruits\" = 86}} → {{\"Recruits\" = 86 - 56 = 30}} **new drivers recruited**.",
      ],
    },
    {
      id: "motivation-organisation-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "motivation-theories",
      question:
        "A private hospital pays nurses competitive market salaries and provides spotless rest lounges, yet annual nurse turnover hits 28%. Exit interviews reveal nurses feel ignored by autocratic hospital executives and spend 60% of shifts ticking duplicate admin checklists instead of leading patient-care plans. Synthesising **Herzberg** and **organisational theory**, which intervention addresses the root cause?",
      options: [
        "Raising canteen meal subsidies by £1 a day while adding another layer of compliance supervisors",
        "Combining democratic ward consultation with job enrichment — delegating patient-pathway authority to senior nurses and streamlining duplicate admin",
        "Switching nurses to F.W. Taylor piece-rate pay per patient discharged per hour",
        "Centralising all patient-care timetable decisions at Head Office",
      ],
      answerIndex: 1,
      hints: [
        "Competitive salaries and spotless lounges mean **hygiene factors** are already satisfied — adding £1 canteen subsidies won't fix 28% turnover!",
        "Why would Taylor piece-rate per patient discharged be catastrophic in healthcare?",
        "Match the exit-interview complaints (ignored voice + robotic admin) to democratic consultation + Herzberg job enrichment.",
      ],
      explanation:
        "Since **hygiene factors** (salary, lounges) are already adequate, turnover stems from autocratic alienation and lack of **Herzberg motivators**. **Democratic consultation** restores two-way voice while **job enrichment / delegation** restores meaningful clinical autonomy.",
    },
    {
      id: "motivation-organisation-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "centralisation-leadership",
      question:
        "A growing restaurant group is deciding whether to switch from **decentralised** local pastry buying to a **centralised** procurement hub. Operating the central chilled hub adds **£18,000 per month** in fixed rent and refrigerated logistics. Currently each restaurant spends **£6,000 per month** buying pastries locally; centralised bulk contracts cut ingredient prices by **20%**. Calculate the exact **number of restaurants** at which monthly bulk-buying savings **break even** with the £18,000 monthly hub cost.",
      answer: { type: "number", value: 15, display: "15 restaurants" },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback:
            "3 divides £18,000 by the full £6,000 spend — each restaurant only SAVES 20% of £6,000 (£1,200/month)!",
        },
      ],
      hints: [
        "Step 1: Calculate the monthly bulk-buying saving per restaurant: 20% of £6,000.",
        "Step 2: Divide the £18,000 monthly fixed hub cost by the monthly saving per restaurant.",
        "Check: £18,000 ÷ £1,200 = ?",
      ],
      solution: [
        "Monthly ingredient saving per restaurant = {{6000 * 0.20 = 1200}} (£1,200/month).",
        "Break-even restaurant count = {{18000 / 1200 = 15}} **restaurants** (above 15 branches, centralisation saves net cash).",
      ],
    },
    {
      id: "motivation-organisation-ch-q09",
      kind: "written",
      difficulty: "challenge",
      guideRef: "organisational-charts",
      marks: 9,
      question:
        "**Case Study (Paper 2 — 340 staff):** *Grandhaven Boutique Hotels PLC* operates five 5-star coastal spa hotels. Guest trip-reviews complain that simple requests (such as late check-out or dietary swaps) require staff to ask three layers of duty managers for permission. Profits fell 12% last year. To restore profitability, the Board is choosing between:\n- **Option 1**: **Delayering** two tiers of hotel duty managers and **empowering** receptionists and chefs to resolve guest requests immediately\n- **Option 2**: Keeping the **tall hierarchy** and introducing a **performance-related bonus** for duty managers\n\n**Justify** which option *Grandhaven Boutique Hotels PLC* should choose. *(9 marks — use AJIM)*",
      modelAnswer:
        "Grandhaven should choose Option 1 (delayering duty managers and empowering frontline spa, reception and kitchen staff). Trip-review complaints stem directly from a slow, tall chain of command requiring three managerial sign-offs for minor late check-outs or dietary swaps. Removing redundant duty-manager tiers simultaneously cuts fixed salary overheads (helping reverse the 12% profit drop) and shortens communication lines so empowered receptionists delight 5-star guests on the spot — activating Herzberg's responsibility motivator.\n\nConversely, Option 2 preserves the bureaucratic bottleneck and inflates payroll costs with manager bonuses when profits are already falling, without fixing slow guest service. Admittedly, Option 1 incurs short-term Year 1 statutory redundancy payouts and risks costly errors if receptionists grant free late check-outs without hospitality training. Nevertheless, provided Grandhaven sets clear spending limits (such as £75 discretion) and trains frontline teams, faster bespoke 5-star guest responsiveness and leaner fixed overheads make Option 1 far more effective.",
      markScheme: [
        {
          point: "AO2 (1m): Clear choice applied to 5-star spa hotels / late check-out & dietary requests.",
          keywords: ["spa", "check-out", "dietary", "receptionists", "chefs"],
        },
        {
          point: "AO3 (1m): Links delayering to shorter chain of command and faster frontline guest service.",
          keywords: ["chain of command", "shorter", "faster", "spot", "bottleneck"],
        },
        {
          point: "AO3 (1m): Connects removing middle tiers to lower fixed salary overheads to reverse the 12% profit fall.",
          keywords: ["fixed", "salary", "overheads", "12%"],
        },
        {
          point: "AO3 (1m): Links frontline empowerment to Herzberg responsibility motivators.",
          keywords: ["herzberg", "motivator", "empower", "responsibility"],
        },
        {
          point: "AO2/AO3 (1m): Explains why Option 2 fails — keeps slow sign-off delays while adding bonus costs.",
          keywords: ["bureaucratic", "payroll", "bonus", "sign-off"],
        },
        {
          point: "AO3/AO4 (1m): Counter-argument on Option 1 — Year 1 redundancy costs and risk of untrained staff errors.",
          keywords: ["redundancy", "short-term", "errors", "training"],
        },
        {
          point: "AO4 (1m): Evaluates 'it depends on' condition — clear financial limits / training for frontline staff.",
          keywords: ["limits", "discretion", "trains", "provided"],
        },
        {
          point: "AO4 (1m): Weighs one-off redundancy outflow against recurring luxury reputation & overhead recovery.",
          keywords: ["5-star", "bespoke", "responsiveness", "leaner"],
        },
        {
          point: "AO4 (1m): Reaches a decisive, supported overall judgement (AJIM).",
          keywords: ["should choose", "more effective", "restore"],
        },
      ],
      hints: [
        "Diagnose the root cause in the stem first: 3 layers of sign-off delaying late check-outs + 12% profit drop!",
        "Show how Option 1 solves BOTH problems (shorter chain + lower fixed salaries + Herzberg empowerment), while Option 2 worsens payroll without speeding service.",
        "Include Year 1 redundancy cost + training/discretion limits as your AJIM counterbalance and 'it depends on' condition.",
      ],
    },
  ],
};

