import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "people-communication-recruitment-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "recruitment-selection",
      question:
        "Which recruitment document (**Job Description** or **Person Specification**) sets out the **essential qualifications, previous experience and personal skills** needed by an applicant?",
      answer: {
        type: "text",
        accept: ["person specification", "person spec"],
        display: "Person Specification",
      },
      solution: [
        "The **Person Specification** profiles the ideal *human* candidate (qualifications, experience, skills), whereas the **Job Description** outlines the *role* (duties, hours, pay, reporting line).",
      ],
      commonError: "Swapping Person Specification with Job Description!",
      traps: [
        {
          spec: { type: "text", accept: ["job description"] },
          feedback: "Trap! Job Description lists duties, pay and hours of the ROLE; qualifications and skills of the human belong in the PERSON SPECIFICATION!",
        },
      ],
      hints: [
        "Qualifications and skills belong to the PERSON (`______ Specification`).",
      ],
    },
    {
      id: "people-communication-recruitment-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "training-employment-law",
      question:
        "What type of training (**induction**, **on-the-job** or **off-the-job**) is given to brand-new employees during their first days to introduce fire exits, company rules, IT logins and colleagues?",
      answer: {
        type: "text",
        accept: ["induction", "induction training"],
        display: "induction training",
      },
      solution: [
        "**Induction training** orientates new starters into workplace safety, systems and culture on arrival.",
      ],
      commonError: "Confusing Day-1 orientation (induction) with ongoing bench shadowing (on-the-job).",
      traps: [
        {
          spec: { type: "text", accept: ["on-the-job", "on the job", "on-the-job training"] },
          feedback: "Shadowing tasks at the workstation is on-the-job; Day-1 tours, safety rules and logins for new starters is INDUCTION training!",
        },
      ],
      hints: [
        "Starts with 'i' — Day-1 orientation for new hires.",
      ],
    },
    {
      id: "people-communication-recruitment-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "effective-communication",
      question:
        "Why does **two-way communication** typically lead to higher staff morale and fewer mistakes than one-way communication?",
      options: [
        "Employees can ask clarifying questions (feedback loop) and feel their frontline views are respected",
        "Two-way communication eliminates consultation delays and never uses any senior management time",
        "Two-way communication legally removes the need to keep written policies or shift records",
        "Two-way communication relies on specialised technical jargon that shortens staff briefings",
      ],
      answerIndex: 0,
      explanation:
        "A **two-way feedback loop** verifies accurate understanding before mistakes happen and empowers workers by listening to their input.",
      hints: [
        "Think about both error checking (feedback loop) AND how staff feel when listened to.",
      ],
    },
    {
      id: "people-communication-recruitment-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "recruitment-selection",
      question:
        "Cedar Bakery Ltd employed an average of **40 staff** this year, and **6 employees** left during the year. Calculate **labour turnover** as a percentage.",
      answer: { type: "number", value: 15, display: "15%" },
      solution: [
        "Labour Turnover (%) = (Leavers ÷ Average Staff) × 100 = (6 ÷ 40) × 100 = **15%**.",
      ],
      commonError: "Giving 85% (retention rate) instead of 15% labour turnover.",
      traps: [
        {
          spec: { type: "number", value: 85 },
          feedback: "85% is the retention complement — labour turnover measures the % who LEFT (6 ÷ 40 × 100 = 15%)!",
        },
      ],
      hints: [
        "Formula: (Staff Leaving ÷ Average Staff) × 100.",
        "Compute (6 ÷ 40) × 100.",
      ],
    },
    {
      id: "people-communication-recruitment-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "training-employment-law",
      question:
        "ParkSide Café employs **10 waiters** working **20 hours per week** each for **50 weeks a year**. If the National Minimum Wage rises by **£0.95 per hour**, calculate the increase in ParkSide Café's **annual wage bill**, in £.",
      answer: { type: "number", value: 9500, display: "£9,500" },
      solution: [
        "Total annual hours = 10 × 20 × 50 = 10,000 hours.",
        "Annual wage bill increase = 10,000 × £0.95 = **£9,500**.",
      ],
      commonError: "Calculating only one week (10 × 20 × £0.95 = £190) instead of multiplying by 50 weeks.",
      traps: [
        {
          spec: { type: "number", value: 190 },
          feedback: "£190 is the WEEKLY increase — multiply by 50 weeks for the annual increase (£9,500)!",
        },
      ],
      hints: [
        "Total hours/yr = 10 staff × 20 hrs × 50 weeks = 10,000 hours.",
        "Multiply 10,000 hours by £0.95.",
      ],
    },
    {
      id: "people-communication-recruitment-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "barriers-to-communication",
      question:
        "In a 7-layer multinational, instructions from the CEO pass down five middle-management layers before reaching store staff, arriving distorted and four days late. Which organisational barrier is primarily responsible?",
      options: [
        "An excessively tall hierarchy with a long chain of command",
        "Excessively wide span of control in a 2-layer flat start-up",
        "Zero-hours employment contracts",
        "External recruitment agency fees",
      ],
      answerIndex: 0,
      explanation:
        "Many hierarchical layers create a **long vertical chain of command**, delaying transmission and causing cumulative message distortion.",
      hints: [
        "Notice the 7 layers and 5 middle-management handoffs!",
        "Long chains of command are a hallmark of tall hierarchies.",
      ],
    },
    {
      id: "people-communication-recruitment-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "recruitment-selection",
      question:
        "Apex Tech Ltd hires a Lead Developer on a **£60,000** salary via an external recruitment agency charging **15% of Year 1 salary**, plus **£800** in coding-test fees. Calculate the **total external recruitment cost** in £.",
      answer: { type: "number", value: 9800, display: "£9,800" },
      solution: [
        "Agency fee = 15% × £60,000 = £9,000.",
        "Total cost = £9,000 + £800 = **£9,800**.",
      ],
      commonError: "Forgetting to add the £800 coding-test fee (£9,000).",
      traps: [
        {
          spec: { type: "number", value: 9000 },
          feedback: "£9,000 is the 15% agency fee — add the £800 coding-test fee as well (£9,800)!",
        },
      ],
      hints: [
        "Find 15% of £60,000 (£9,000) first.",
        "Add £800 for the coding tests.",
      ],
    },
    {
      id: "people-communication-recruitment-quiz-q08",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "training-employment-law",
      question:
        "Which of the following is protected against unfair treatment in recruitment and pay under **equal-opportunities / anti-discrimination legislation**?",
      options: [
        "Gender, race/ethnicity, disability, age and religion",
        "Only candidates holding a PLC share certificate",
        "Refusing to turn up for shifts on time",
        "Lacking an essential medical licence required on the Person Specification",
      ],
      answerIndex: 0,
      explanation:
        "Anti-discrimination laws outlaw bias based on **protected characteristics** (*gender, race, disability, age, religion*), while allowing objective merit selection on genuine essential qualifications and punctuality.",
      hints: [
        "Distinguish protected personal characteristics from job competence!",
      ],
    },
    {
      id: "people-communication-recruitment-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "barriers-to-communication",
      question:
        "**Case Study — Swiftvan Logistics (38 employees):** Swiftvan's depot manager pins new parcel-scanning instructions written only in complex English IT terms onto a back-corridor noticeboard, even though half of Swiftvan's night-shift loaders speak Polish or Romanian as their first language.\n\n**Outline** one way Swiftvan Logistics could overcome its communication barriers. *(2 marks)*",
      marks: 2,
      modelAnswer:
        "Swiftvan could replace the IT jargon with visual step-by-step parcel-scanning diagrams translated into Polish and Romanian, demonstrated live at night-shift handover with a quick two-way check.",
      markScheme: [
        {
          point: "Recommends a valid fix (plain language / visual diagrams / translated instructions / live two-way shift demonstration).",
          keywords: ["plain", "visual", "diagrams", "translated", "translate", "demonstrated", "two-way"],
        },
        {
          point: "Applies explicitly to Swiftvan context (parcel-scanning, night-shift loaders, Polish or Romanian).",
          keywords: ["parcel", "scanning", "night-shift", "loaders", "polish", "romanian"],
        },
      ],
      commonError: "Writing 'communicate more clearly' without referencing Polish/Romanian translations or parcel-scanning diagrams.",
      hints: [
        "Fix BOTH barriers in the stem: IT jargon + Polish/Romanian night-shift loaders!",
        "Mention *translated visual parcel-scanning guides* for 2/2 marks.",
      ],
    },
    {
      id: "people-communication-recruitment-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "training-employment-law",
      question:
        "**Explain** one benefit to a business of providing **induction training** to all newly recruited employees. *(3 marks)*",
      marks: 3,
      modelAnswer:
        "Induction training familiarises new starters with workplace layout, health-and-safety procedures, IT systems and colleagues from Day 1. This reduces early anxiety and mistakes so recruits become productive much faster. Consequently, fewer new hires quit during their first months, lowering labour turnover and repeat recruitment costs.",
      markScheme: [
        {
          point: "AO1: States that induction familiarises new recruits with safety rules, systems, premises and colleagues.",
          keywords: ["safety", "systems", "colleagues", "familiarises", "settle"],
        },
        {
          point: "AO3 Link 1: Explains that new hires feel welcomed / make fewer early errors / reach full productivity faster.",
          keywords: ["anxiety", "mistakes", "errors", "productive", "faster"],
        },
        {
          point: "AO3 Link 2: Connects to lower early staff turnover / higher retention saving repeat recruitment costs.",
          keywords: ["turnover", "quit", "retention", "recruitment costs"],
        },
      ],
      commonError: "Describing advanced specialist external college courses (off-the-job) instead of Day-1 induction orientation!",
      hints: [
        "Keep strictly to **induction** (settling in new hires on Day 1/Week 1).",
        "Chain 3 steps: Knows safety/systems/team → settles faster with fewer early mistakes → lower early staff turnover & recruitment costs.",
      ],
    },
  ],
  papers: [
    {
      id: "people-communication-recruitment-p1",
      title: "Practice Paper 1 — Small Business: Communication, Hiring & Training (<50 Staff)",
      questions: [
        {
          id: "people-communication-recruitment-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "recruitment-selection",
          question:
            "Which recruitment document (**Job Description** or **Person Specification**) states the **job title, main daily duties, working hours and reporting line**?",
          answer: {
            type: "text",
            accept: ["job description"],
            display: "Job Description",
          },
          solution: [
            "Duties, hours, pay and reporting lines describe the **role**, so they sit in the **Job Description**.",
          ],
          commonError: "Writing 'Person Specification' (which covers human qualifications and skills).",
          traps: [
            {
              spec: { type: "text", accept: ["person specification", "person spec"] },
              feedback: "Person Specification covers candidate qualifications/skills; role duties, hours and reporting lines belong in the JOB DESCRIPTION!",
            },
          ],
          hints: [
            "Duties and hours describe the JOB (`______ Description`).",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "effective-communication",
          question:
            "When a café owner emails next week's shift rota down to her six baristas, is that **upward**, **downward** or **horizontal** internal communication?",
          answer: {
            type: "text",
            accept: ["downward", "downward communication", "downwards"],
            display: "downward",
          },
          solution: [
            "Instructions and rotas sent from an owner/manager to subordinates travel **downward**.",
          ],
          commonError: "Writing 'upward' (which goes from baristas up to the owner).",
          traps: [
            {
              spec: { type: "text", accept: ["upward", "upwards", "horizontal"] },
              feedback: "Owner → baristas moves from higher authority to subordinates: DOWNWARD communication!",
            },
          ],
          hints: [
            "Check direction: Manager (top) → Baristas (below).",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "recruitment-selection",
          question:
            "Bloom Florist Ltd employs **6 part-time florists** who each work **20 hours per week**. If a full-time florist contract is **40 hours per week**, how many **Full-Time Equivalent (FTE)** staff do those 6 part-timers equal?",
          answer: { type: "number", value: 3, display: "3 FTE" },
          solution: [
            "Total part-time hours = 6 × 20 = 120 hours/week.",
            "FTE = 120 ÷ 40 = **3 FTE**.",
          ],
          commonError: "Giving 120 (total hours) or 6 (raw headcount) instead of dividing by 40 hours.",
          traps: [
            {
              spec: { type: "number", value: 120 },
              feedback: "120 is total weekly hours — divide by 40 hours per full-time worker to get 3 FTE!",
            },
          ],
          hints: [
            "Total weekly hours = 6 × 20 = 120 hours.",
            "Divide 120 hours by 40 hours per full-time post.",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "recruitment-selection",
          question:
            "Bramble Inn (25 average employees) saw **7 staff** leave over the past 12 months. Calculate Bramble Inn's annual **labour turnover** percentage.",
          answer: { type: "number", value: 28, display: "28%" },
          solution: [
            "Labour Turnover (%) = (7 ÷ 25) × 100 = **28%**.",
          ],
          commonError: "Giving 72% (staff who stayed) or forgetting × 100 (0.28).",
          traps: [
            {
              spec: { type: "number", value: 72 },
              feedback: "72% stayed — labour turnover is the % who LEFT (7 ÷ 25 × 100 = 28%)!",
            },
          ],
          hints: [
            "Divide 7 leavers by 25 average staff, then multiply by 100.",
            "7 ÷ 25 = 0.28 → × 100.",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "recruitment-selection",
          question:
            "What type of flexible contract guarantees **0 minimum weekly hours**, offering shifts only when the employer needs cover?",
          answer: {
            type: "text",
            accept: [
              "zero-hours",
              "zero-hours contract",
              "zero hours",
              "zero hours contract",
              "zero-hour contract",
            ],
            display: "zero-hours contract",
          },
          solution: [
            "A **zero-hours contract** sets no guaranteed minimum weekly hours, giving employers high flexibility while creating income uncertainty for workers.",
          ],
          commonError: "Writing 'part-time contract' (which guarantees fixed weekly hours, e.g. 16 hrs/wk).",
          traps: [
            {
              spec: { type: "text", accept: ["part-time", "part time", "part-time contract"] },
              feedback: "Part-time contracts guarantee fixed weekly hours (e.g. 15 hrs/wk); guaranteeing 0 minimum hours is a ZERO-HOURS contract!",
            },
          ],
          hints: [
            "Clue is right in the question: '0 minimum weekly hours' → `____-hours contract`.",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "training-employment-law",
          question:
            "AutoFix Garage Ltd sends **3 mechanics** on a **3-day external off-the-job** hybrid-battery course (`course fee = £750 per mechanic`). Each day a mechanic is away loses **£160** in workshop labour contribution. Calculate the **total economic cost** of training all 3 mechanics, in £.",
          answer: { type: "number", value: 3690, display: "£3,690" },
          solution: [
            "Direct tuition fees = 3 × £750 = £2,250.",
            "Lost workshop contribution = 3 mechanics × 3 days × £160 = £1,440.",
            "Total training cost = £2,250 + £1,440 = **£3,690**.",
          ],
          commonError: "Counting only the £2,250 tuition invoice or forgetting to multiply lost output by BOTH 3 mechanics AND 3 days!",
          traps: [
            {
              spec: { type: "number", value: 2250 },
              feedback: "£2,250 is tuition fees alone — add lost workshop contribution (3 mechanics × 3 days × £160 = £1,440)!",
            },
            {
              spec: { type: "number", value: 2730 },
              feedback: "Multiply £160/day by BOTH 3 days AND 3 mechanics (9 person-days = £1,440), then add £2,250!",
            },
          ],
          hints: [
            "Course fees = 3 × £750 = £2,250.",
            "Lost output = 3 mechanics × 3 days × £160 = £1,440; add both together!",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "barriers-to-communication",
          question:
            "Cutting unnecessary group chat alerts saves each of `Pixel Studio Ltd`'s **16 designers** an average of **15 minutes per day** across a **5-day week**. If designers are paid **£22 per hour**, calculate the weekly productive wage value reclaimed, in £.",
          answer: { type: "number", value: 440, display: "£440" },
          solution: [
            "15 minutes = 0.25 hours/day → over 5 days = 1.25 hours/designer/week.",
            "Total hours reclaimed across 16 designers = 16 × 1.25 = 20 hours/week.",
            "Value at £22/hr = 20 × £22 = **£440**.",
          ],
          commonError: "Forgetting to divide 15 minutes by 60 (multiplying by 15 instead of 0.25 hours!).",
          traps: [
            {
              spec: { type: "number", value: 26400 },
              feedback: "Convert 15 minutes into HOURS first (15 ÷ 60 = 0.25 hours) before multiplying by £22/hr!",
            },
          ],
          hints: [
            "15 minutes/day × 5 days = 75 minutes = 1.25 hours per designer per week.",
            "Multiply 16 designers × 1.25 hours × £22/hr.",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "recruitment-selection",
          question:
            "What two-letter abbreviation (or two-word Latin name) denotes the summary document of education, skills and employment history that an applicant submits with a cover letter?",
          answer: {
            type: "text",
            accept: ["cv", "curriculum vitae", "resume", "c.v."],
            display: "CV",
          },
          solution: [
            "A **CV** (**Curriculum Vitae** / resume) summarises an applicant's qualifications, skills and work history for shortlisting against the Person Specification.",
          ],
          commonError: "Confusing a candidate's CV with the employer's Person Specification!",
          traps: [
            {
              spec: { type: "text", accept: ["person specification", "job description"] },
              feedback: "Job Description & Person Specification are written by the EMPLOYER; the document sent in by the APPLICANT is a CV!",
            },
          ],
          hints: [
            "Two initials standing for *Curriculum Vitae*!",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "training-employment-law",
          question:
            "Sunny Childcare Nursery employs **14 nursery assistants** working **35 hours/week** for **52 weeks/year**. If the statutory minimum wage rises from **£11.00 to £11.80 per hour**, calculate the increase in Sunny Childcare's **annual wage bill**, in £.",
          answer: { type: "number", value: 20384, display: "£20,384" },
          solution: [
            "Total annual hours = 14 × 35 × 52 = 25,480 hours.",
            "Hourly increase = £11.80 − £11.00 = £0.80.",
            "Annual wage bill increase = 25,480 × £0.80 = **£20,384**.",
          ],
          commonError: "Giving one week's increase (14 × 35 × £0.80 = £392) instead of 52 weeks.",
          traps: [
            {
              spec: { type: "number", value: 392 },
              feedback: "£392 is the WEEKLY increase — multiply by 52 weeks for the full annual wage increase (£20,384)!",
            },
          ],
          hints: [
            "Annual hours = 14 × 35 × 52 = 25,480 hours.",
            "Multiply 25,480 by £0.80.",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "recruitment-selection",
          question:
            "**Case Study — Whisk & Crumb Patisserie (11 employees):** Owner Camille needs to hire an Evening Pastry Chef to bake croissants and macarons from 4 p.m. to 11 p.m. Before writing the job advert, she drafts a **Person Specification**.\n\n**Outline** one essential item Camille should include on the **Person Specification** for Whisk & Crumb Patisserie. *(2 marks)*",
          marks: 2,
          modelAnswer:
            "Camille should specify a Level 2 Food Hygiene qualification and at least two years of laminated croissant or macaron pastry experience so the new chef can bake unsupervised on evening shifts.",
          markScheme: [
            {
              point: "States a genuine Person Specification attribute (qualification, experience or skill — NOT hours/pay/duties!).",
              keywords: ["qualification", "certificate", "experience", "skill", "skills"],
            },
            {
              point: "Applies explicitly to Whisk & Crumb context (pastry, croissants, macarons, Food Hygiene or evening baking).",
              keywords: ["pastry", "croissants", "macarons", "hygiene", "bake", "baking"],
            },
          ],
          commonError: "Writing 'must work 4 p.m. to 11 p.m. and bake croissants' — working hours and duties belong on the **Job Description**, scoring 0/2 for a Person Specification!",
          hints: [
            "**Trap alert:** Do NOT write hours (4–11 p.m.) or duties — those are Job Description items!",
            "Name a *qualification* or *experience* tied to *croissants / macarons / food hygiene*!",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "effective-communication",
          question:
            "**Explain** one way poor internal communication can reduce the profitability of a business. *(3 marks)*",
          marks: 3,
          modelAnswer:
            "Unclear or delayed horizontal communication between sales and operations causes staff to order the wrong raw materials or produce incorrect batch quantities. Fixing defective or late customer orders generates wasted scrap expenses and re-delivery costs. Consequently, total operating costs rise while dissatisfied customers switch to rivals, squeezing net profit.",
          markScheme: [
            {
              point: "AO1: Identifies operational errors, wrong orders, missed deadlines or low staff morale caused by miscommunication.",
              keywords: ["wrong", "incorrect", "errors", "mistakes", "missed", "morale"],
            },
            {
              point: "AO3 Link 1: Explains cost/revenue mechanism (wasted scrap, re-delivery costs, refunds or higher staff turnover).",
              keywords: ["wasted", "scrap", "re-delivery", "refunds", "dissatisfied"],
            },
            {
              point: "AO3 Link 2: Connects directly to higher total costs / lost repeat sales lowering net profit.",
              keywords: ["operating costs", "rivals", "net profit", "squeezing"],
            },
          ],
          commonError: "Stopping at 'workers make mistakes' (1/3) without tracing how mistakes inflate costs or lose customer revenue to reduce profit!",
          hints: [
            "Chain 3 steps: Miscommunication → wrong orders / wasted stock & rework costs → higher expenses & lost repeat customers reduce profit.",
            "Remember generic 3-mark *Explain* needs 2 linked 'therefore/consequently' connectors!",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "training-employment-law",
          question:
            "**Explain** one disadvantage to a small business of using **on-the-job training** rather than off-the-job training. *(3 marks)*",
          marks: 3,
          modelAnswer:
            "During on-the-job training, an experienced colleague must pause or slow down their own work to demonstrate tasks and check the trainee's output. Furthermore, any sloppy shortcuts or bad habits used by that colleague are copied directly by the new recruit. As a result, overall workshop productivity dips and quality defects may persist.",
          markScheme: [
            {
              point: "AO1: Identifies mentor slowdown OR passing on bad habits/shortcuts (or lack of fresh outside expertise).",
              keywords: ["slow down", "bad habits", "shortcuts", "pause"],
            },
            {
              point: "AO3 Link 1: Explains how the experienced worker's output drops or poor techniques are replicated.",
              keywords: ["copied", "demonstrate", "replicated", "check"],
            },
            {
              point: "AO3 Link 2: Connects to lower short-term productivity or persistent quality errors.",
              keywords: ["productivity", "defects", "quality"],
            },
          ],
          commonError: "Saying 'on-the-job training has expensive college tuition fees' — that is **off-the-job** training!",
          hints: [
            "Focus on what goes wrong at the workbench: **mentor slows down** + **bad habits copied**!",
            "Link those two mechanisms to lower productivity / quality defects.",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "recruitment-selection",
          question:
            "**Case Study — Splash Kayak Tours (16 summer staff, 3 permanent staff):** Splash Kayak Tours runs guided sea-kayaking trips in Pembrokeshire, Wales, earning 85% of its annual revenue between May and September. Founder Rhys hires university kayak instructors on **seasonal temporary contracts** each summer rather than employing all 16 instructors full-time all year.\n\n**Analyse** the benefits to Splash Kayak Tours of using **seasonal contracts** for its kayak instructors. *(6 marks)*",
          marks: 6,
          modelAnswer:
            "Hiring 16 kayak instructors on May-to-September seasonal contracts matches Splash Kayak Tours' wage outflows directly to the summer months when 85% of Pembrokeshire tourist bookings occur. Avoiding paying 16 full-time salaries during stormy winter months slashes quiet-season fixed overheads, preventing winter cash-flow deficits.\n\nSecond, recruiting energetic university kayakers every spring lets Rhys flex headcount up or down each year depending on advance summer group bookings without facing costly permanent redundancy payouts if wet weather dampens tourism.",
          markScheme: [
            {
              point: "Benefit 1: Aligns labour costs with seasonal summer demand / avoids paying idle winter wages.",
              keywords: ["winter", "fixed", "overheads", "matches", "idle"],
            },
            {
              point: "AO2 context integrated (16 kayak instructors, May–September, 85% revenue, Pembrokeshire sea-kayaking).",
              keywords: ["kayak", "85%", "pembrokeshire", "september", "16"],
            },
            {
              point: "Chain 1 developed: Protects winter cash flow / lowers annual break-even cost.",
              keywords: ["cash-flow", "deficits", "salaries"],
            },
            {
              point: "Benefit 2: Numerical workforce flexibility year-to-year without redundancy costs.",
              keywords: ["flex", "redundancy", "bookings", "university"],
            },
            {
              point: "Chain 2 developed: Reduces financial risk if bad weather or recession lowers summer tourist numbers.",
              keywords: ["weather", "tourism", "risk"],
            },
            {
              point: "Two distinct analytical chains sustained cleanly in context.",
              keywords: ["second", "without", "preventing"],
            },
          ],
          commonError: "Writing drawbacks of seasonal contracts — **Analyse the benefits (6)** awards marks strictly for two developed positive chains!",
          hints: [
            "6-mark *Analyse the benefits* = **2 positive contextual chains** (no drawbacks needed!).",
            "Chain 1: 85% revenue in May–Sept → zero idle instructor wages in stormy winter → protects cash flow.",
            "Chain 2: Easy to flex instructor numbers each spring based on Pembrokeshire bookings with zero redundancy payouts.",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "recruitment-selection",
          question:
            "**Case Study — BrightSmile Orthodontics (19 employees):** BrightSmile's Practice Manager is retiring after 12 years. The clinic owners can either **promote Amir internally** (their popular Head Dental Nurse of 6 years, who knows every patient and booking system but has never managed clinic accounts or Instagram marketing) OR **recruit externally** via a healthcare agency charging £6,500.\n\n**Assess** whether BrightSmile Orthodontics should appoint the new Practice Manager via **internal** or **external** recruitment. *(9 marks)*",
          marks: 6,
          modelAnswer:
            "Promoting Amir internally saves the £6,500 healthcare agency fee and guarantees instant cultural fit: after 6 years as Head Dental Nurse, Amir already trusts the 19-person orthodontic team, knows patient records and needs almost zero induction. Promoting from within also motivates other dental nurses by proving BrightSmile rewards loyalty.\n\nHowever, internal promotion leaves a knock-on vacancy for a specialist Head Dental Nurse (who still must be recruited!) and fails to bring fresh outside expertise in clinic financial accounts and Instagram patient marketing — two vital commercial skills Amir currently lacks.\n\nOverall, BrightSmile **should promote Amir internally** (**AJIM**), because trust, clinical compliance and smooth staff morale inside a close-knit 19-person orthodontic surgery are far harder to teach an outsider than bookkeeping! **It depends on** whether BrightSmile invests £1,500–£2,000 of the £6,500 agency saving into a short **off-the-job** finance and digital-marketing course for Amir (still coming out over £4,500 ahead net, assuming a junior nurse can be backfilled smoothly).",
          markScheme: [
            {
              point: "Case FOR Internal (Amir): Saves £6,500 agency fee + knows orthodontic systems/patients + boosts nurse team morale.",
              keywords: ["6,500", "agency", "induction", "motivates", "loyalty"],
            },
            {
              point: "Rich AO2 context throughout (Amir, Head Dental Nurse, 6 years, 19 employees, clinic accounts, Instagram marketing).",
              keywords: ["amir", "dental nurse", "orthodontic", "accounts", "instagram"],
            },
            {
              point: "Case FOR External / AGAINST Internal: Knock-on Head Dental Nurse vacancy + Amir lacks accounting & Instagram marketing skills.",
              keywords: ["knock-on", "vacancy", "fresh", "lacks"],
            },
            {
              point: "Clear AJIM recommendation choosing one route decisively.",
              keywords: ["overall", "should promote"],
            },
            {
              point: "Smart 'It depends on' synoptic link to training: using part of the £6,500 agency saving to fund off-the-job finance/marketing training for Amir!",
              keywords: ["it depends on", "off-the-job", "course", "4,500"],
            },
            {
              point: "Balanced two-sided reasoning prior to weighed conclusion.",
              keywords: ["however", "backfilled"],
            },
          ],
          commonError: "Ignoring Amir's missing accounting/Instagram skills OR ignoring that £6,500 saved on agency fees can easily pay to train Amir in those exact skills!",
          hints: [
            "Weigh Amir's 6-year clinical/team trust + £6,500 saved against his lack of accounting/Instagram skills + knock-on nurse vacancy.",
            "Spot the Grade 9 synoptic bridge: spend £1,500 of the £6,500 agency saving on **off-the-job** accounting/marketing training for Amir!",
            "Conclude cleanly using **AJIM**.",
          ],
        },
        {
          id: "people-communication-recruitment-p1-q15",
          kind: "short",
          difficulty: "core",
          guideRef: "recruitment-selection",
          question:
            "What single word names the recruitment stage where HR narrows 90 application forms down to the top 6 candidates invited to interview by matching against the Person Specification?",
          answer: {
            type: "text",
            accept: ["shortlisting", "shortlist", "short-listing", "screening"],
            display: "shortlisting",
          },
          solution: [
            "**Shortlisting** filters all applicants against essential and desirable Person Specification criteria to select the strongest candidates for interview.",
          ],
          commonError: "Writing 'induction' (post-hire) or 'job analysis' (pre-advert).",
          hints: [
            "Creating the 'short list' of candidates invited to interview: `___________ing`.",
            "Happens right after applications close and right before interviews/tests.",
          ],
        },
      ],
    },
    {
      id: "people-communication-recruitment-p2",
      title: "Practice Paper 2 — Large Business: Global Communication, HR & Law (>250 Staff)",
      questions: [
        {
          id: "people-communication-recruitment-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "effective-communication",
          question:
            "When `SuperMart Plc` emails an updated delivery schedule to an external dairy supplier, is this **internal** or **external** communication?",
          answer: {
            type: "text",
            accept: ["external", "external communication"],
            display: "external",
          },
          solution: [
            "Suppliers are external stakeholders outside the company, making this **external communication**.",
          ],
          commonError: "Writing 'internal' because email was used.",
          traps: [
            {
              spec: { type: "text", accept: ["internal", "internal communication"] },
              feedback: "Even though it's an operational email, a dairy SUPPLIER is an outside organisation — EXTERNAL communication!",
            },
          ],
          hints: [
            "Check whether the recipient (dairy supplier) works inside SuperMart Plc or outside it.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "barriers-to-communication",
          question:
            "In a tall 6-layer PLC, a verbal operational update passes through **4 sequential handoffs**, with each handoff retaining **90%** (`0.90`) of the previous message's accuracy. Calculate the **percentage accuracy** reaching shop-floor staff (to 2 d.p., e.g. `65.61`).",
          answer: { type: "number", value: 65.61, tolerance: 0.05, display: "65.61%" },
          solution: [
            "Across 4 sequential handoffs at 0.90 retention each: {{0.90^4 * 100 = 0.6561 * 100 = 65.61%}}.",
          ],
          commonError: "Subtracting 4 × 10% = 60% instead of compounding 0.90^4 = 65.61%.",
          traps: [
            {
              spec: { type: "number", value: 60 },
              feedback: "Retention compounds multiplicatively: 0.90 × 0.90 × 0.90 × 0.90 × 100 = 65.61%!",
            },
          ],
          hints: [
            "Compute 0.9 × 0.9 × 0.9 × 0.9.",
            "Multiply 0.6561 by 100.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "recruitment-selection",
          question:
            "FastFashion Plc employs an average of **2,400 warehouse staff** and experiences **540 leavers** in a year. Calculate FastFashion Plc's **labour turnover** percentage.",
          answer: { type: "number", value: 22.5, display: "22.5%" },
          solution: [
            "Labour Turnover (%) = (540 ÷ 2,400) × 100 = **22.5%**.",
          ],
          commonError: "Dividing 2,400 by 540 (4.44%) or giving 77.5%.",
          traps: [
            {
              spec: { type: "number", value: 77.5 },
              feedback: "77.5% is the retention complement — labour turnover is (540 ÷ 2,400) × 100 = 22.5%!",
            },
          ],
          hints: [
            "Use (Leavers ÷ Average Staff) × 100.",
            "Compute (540 ÷ 2,400) × 100.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "recruitment-selection",
          question:
            "During graduate selection at `FinBank Plc`, candidates complete an online questionnaire assessing personality traits, leadership style and stress resilience. What type of test is this (`____________ test`)?",
          answer: {
            type: "text",
            accept: ["psychometric", "psychometric test", "psychometric testing", "personality test"],
            display: "psychometric test",
          },
          solution: [
            "A **psychometric test** evaluates personality traits, behavioural preferences and cultural fit, whereas an **aptitude test** measures practical technical skill.",
          ],
          commonError: "Confusing psychometric (personality/attitude) with aptitude (technical skill).",
          traps: [
            {
              spec: { type: "text", accept: ["aptitude", "aptitude test"] },
              feedback: "Aptitude tests measure technical skill (e.g. maths/coding); personality & behavioural questionnaires are PSYCHOMETRIC tests!",
            },
          ],
          hints: [
            "Starts with 'psycho-' — assesses personality and attitude traits.",
            "Contrasts with practical aptitude tests.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "training-employment-law",
          question:
            "ValueStay Hotels Plc employs **1,200 housekeepers** working **30 hours/week** each for **52 weeks/year**. When the statutory Living Wage rises by **£0.75 per hour**, calculate the increase in ValueStay's **annual wage bill in £ millions** (to 3 d.p. if needed, e.g. `1.404`).",
          answer: { type: "number", value: 1.404, tolerance: 0.005, display: "£1.404 million" },
          solution: [
            "Total annual hours = 1,200 × 30 × 52 = 1,872,000 hours.",
            "Extra annual wage cost = 1,872,000 × £0.75 = £1,404,000 = **£1.404 million**.",
          ],
          commonError: "Giving £1,404,000 when asked in **£ millions** (`1.404`).",
          traps: [
            {
              spec: { type: "number", value: 1404000 },
              feedback: "Right figure in £, now divide by 1,000,000 to express in £ MILLIONS (1.404) as requested!",
            },
          ],
          hints: [
            "Annual hours = 1,200 × 30 × 52 = 1,872,000 hours; multiply by £0.75 (£1,404,000).",
            "Divide by 1,000,000 to express in £ millions (`1.404`).",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "barriers-to-communication",
          question:
            "What single word describes removing one or more layers of middle management to flatten a tall hierarchy and speed up vertical communication?",
          answer: {
            type: "text",
            accept: ["delayering", "de-layering", "delayer"],
            display: "delayering",
          },
          solution: [
            "**Delayering** removes middle-management layers, shortening the chain of command and cutting communication distortion.",
          ],
          commonError: "Writing 'delegation' (passing authority to a subordinate) instead of 'delayering' (removing a whole hierarchy tier).",
          traps: [
            {
              spec: { type: "text", accept: ["delegation", "redundancy"] },
              feedback: "Delegation passes authority to a subordinate; removing an entire management layer to flatten the chart is DELAYERING!",
            },
          ],
          hints: [
            "Removing a 'layer' from an organisation chart: `de________`.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "training-employment-law",
          question:
            "AeroJet Plc trains **20 avionics engineers** via a **5-day off-the-job** simulator course (`fee = £2,200 per engineer`; `lost hangar contribution = £300 per engineer per day`). Over the next year, faster fault diagnosis saves **£4,500 per engineer**. Calculate AeroJet Plc's **net Year 1 saving (£)** across all 20 engineers.",
          answer: { type: "number", value: 16000, display: "£16,000" },
          solution: [
            "Cost per engineer = £2,200 fee + (5 × £300 = £1,500 lost contribution) = £3,700.",
            "Net Year 1 gain per engineer = £4,500 − £3,700 = £800.",
            "Total across 20 engineers = 20 × £800 = **£16,000** (£90,000 gain − £74,000 total cost).",
          ],
          commonError: "Forgetting the £1,500/engineer lost hangar output (£46,000).",
          traps: [
            {
              spec: { type: "number", value: 46000 },
              feedback: "Don't forget to deduct lost hangar contribution (20 engineers × 5 days × £300 = £30,000) as well as course fees!",
            },
          ],
          hints: [
            "Total cost per engineer = £2,200 + (5 × £300) = £3,700.",
            "Net gain per engineer = £4,500 − £3,700 = £800; multiply by 20 engineers!",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "effective-communication",
          question:
            "What single word describes unofficial workplace gossip and rumours spreading outside formal company channels (*the _________*)?",
          answer: {
            type: "text",
            accept: ["grapevine", "the grapevine", "informal", "rumour mill"],
            display: "grapevine",
          },
          solution: [
            "Informal word-of-mouth workplace communication is traditionally known as **the grapevine**.",
          ],
          commonError: "Writing 'intranet' (which is an official formal company network).",
          hints: [
            "'Heard it through the _________': classic business term for informal corridor gossip.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "recruitment-selection",
          question:
            "At `OmniCall Plc` (full-time = **37.5 hours/week**), a regional centre employs **30 part-time evening agents** contracted for **15 hours/week** each, plus **22 full-time agents**. Calculate the centre's total **Full-Time Equivalent (FTE)** workforce.",
          answer: { type: "number", value: 34, display: "34 FTE" },
          solution: [
            "Part-time FTE = (30 × 15) ÷ 37.5 = 450 ÷ 37.5 = 12 FTE.",
            "Add 22 full-time agents: 12 + 22 = **34 FTE**.",
          ],
          commonError: "Giving 12 FTE (forgetting the 22 full-timers) or 52 (headcount).",
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "12 FTE is the part-timers alone — add the 22 full-time agents for 34 FTE in total!",
            },
            {
              spec: { type: "number", value: 52 },
              feedback: "52 is raw headcount — convert the 30 part-timers (450 hrs ÷ 37.5 = 12 FTE) before adding 22!",
            },
          ],
          hints: [
            "Part-time hours = 30 × 15 = 450 hours; divide by 37.5 (= 12 FTE).",
            "Add the 22 full-time agents.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "barriers-to-communication",
          question:
            "**Case Study — NordicFurniture Plc (4,200 employees):** NordicFurniture Plc designs flat-pack wardrobes in Sweden, manufactures panels in Poland, and runs UK customer call centres in Newcastle. Customers complain that UK call-centre staff wait four days for email replies from Polish factory planners about missing wardrobe screws.\n\n**Outline** one communication barrier causing delays at NordicFurniture Plc. *(2 marks)*",
          marks: 2,
          modelAnswer:
            "Geographical and language barriers between the Polish panel factory and Newcastle call centre slow horizontal email replies over missing flat-pack wardrobe screws.",
          markScheme: [
            {
              point: "Identifies a valid barrier (geographical separation, language difference, poor horizontal link or email overload).",
              keywords: ["geographical", "language", "horizontal", "overload", "distance"],
            },
            {
              point: "Applies explicitly to NordicFurniture Plc context (Poland/Polish, Newcastle, Sweden, flat-pack wardrobes or screws).",
              keywords: ["poland", "polish", "newcastle", "wardrobe", "wardrobes", "screws"],
            },
          ],
          commonError: "Writing 'bad communication' without naming a specific barrier OR omitting Poland/Newcastle/wardrobes.",
          hints: [
            "Name the barrier (*geographical / language / horizontal disconnect*) AND link to *Polish factory / Newcastle call centre / wardrobe screws*!",
            "Outline (2 marks) = 1 point + 1 context link.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "training-employment-law",
          question:
            "**Explain** one way **anti-discrimination (equal opportunities) legislation** can improve the competitiveness of a large business. *(3 marks)*",
          marks: 3,
          modelAnswer:
            "Anti-discrimination law requires recruitment and promotion decisions to be based strictly on merit against objective skills rather than gender, race, age or disability. This widens the pool of talented applicants the firm attracts and builds a diverse workforce that better understands diverse customer segments. Consequently, higher employee creativity and productivity strengthen competitive advantage.",
          markScheme: [
            {
              point: "AO1: States that hiring/promotion is based on merit without bias on gender, race, age or disability.",
              keywords: ["merit", "gender", "race", "age", "disability", "unbiased"],
            },
            {
              point: "AO3 Link 1: Explains that this widens the applicant talent pool and creates a diverse workforce reflecting diverse customers.",
              keywords: ["pool", "talent", "diverse", "customers"],
            },
            {
              point: "AO3 Link 2: Connects to higher innovation/productivity/reputation improving competitiveness.",
              keywords: ["creativity", "innovation", "productivity", "competitive"],
            },
          ],
          commonError: "Writing only about avoiding fines instead of explaining how merit-based diversity actively *improves* competitiveness!",
          hints: [
            "Chain 3 steps: Merit-based selection → wider talent pool & diverse customer insight → higher innovation & productivity.",
            "Remember 3-mark *Explain* needs 2 linked steps of cause-and-effect!",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "effective-communication",
          question:
            "**Case Study — MediEquip Plc (3,100 employees):** MediEquip Plc manufactures hospital infusion pumps across five countries. Currently, sales directors fly business-class every fortnight from Tokyo, Frankfurt and Chicago to London for a 3-hour update meeting (costing £480,000/yr in flights and hotels). The HR director proposes replacing fortnightly flights with **cloud video conferencing** plus a shared live dashboard.\n\n**Analyse** how switching to video conferencing and cloud dashboards would affect MediEquip Plc. *(6 marks)*",
          marks: 6,
          modelAnswer:
            "Switching from fortnightly business-class flights across Tokyo, Frankfurt and Chicago to video conferencing directly eliminates most of the £480,000 annual travel and hotel expense while recovering dozens of unproductive airport travel hours for senior sales directors. Lower operating overheads immediately boost MediEquip Plc's Operating Profit Margin and cut corporate carbon emissions.\n\nFurthermore, pairing video calls with a live cloud dashboard gives hospital-pump production and regional sales teams instant 24/7 shared data rather than waiting two weeks between flights, speeding up responses to urgent hospital tenders despite time-zone gaps.",
          markScheme: [
            {
              point: "Strand 1: Cuts the £480,000/yr flight/hotel overheads and reclaims wasted executive travel time.",
              keywords: ["480,000", "travel", "hotel", "flights", "overheads"],
            },
            {
              point: "Chain 1 developed: Raises Operating Profit Margin (and lowers carbon footprint).",
              keywords: ["operating profit", "margin", "carbon"],
            },
            {
              point: "AO2 context integrated (Tokyo, Frankfurt, Chicago, hospital infusion pumps, fortnightly).",
              keywords: ["tokyo", "frankfurt", "chicago", "infusion", "pumps", "hospital"],
            },
            {
              point: "Strand 2: Live cloud dashboard provides real-time 24/7 horizontal data across global hubs (or evaluate time-zone/rapport trade-off if analytical).",
              keywords: ["dashboard", "24/7", "real-time", "time-zone", "tenders"],
            },
            {
              point: "Chain 2 developed: Faster coordination on hospital orders / fewer stock mismatches than waiting two weeks.",
              keywords: ["faster", "urgent", "two weeks", "coordination"],
            },
            {
              point: "Two distinct developed chains anchored tightly to MediEquip Plc.",
              keywords: ["mediequip", "furthermore"],
            },
          ],
          commonError: "Listing bullet points ('saves money, saves time, helps environment') without developing two structured 3-step contextual chains.",
          hints: [
            "Use the exact case-study figures: *£480,000/yr flights from Tokyo/Frankfurt/Chicago* + *hospital infusion pumps*!",
            "Chain 1: Cuts £480k travel overheads & dead flight hours → higher Operating Profit Margin.",
            "Chain 2: Real-time cloud dashboard vs 2-week gap → faster coordination on hospital pump tenders across time zones.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q13",
          kind: "written",
          difficulty: "challenge",
          guideRef: "training-employment-law",
          question:
            "**Case Study — SwiftAir Plc (6,800 employees):** Budget airline SwiftAir Plc is buying 25 next-generation fuel-efficient jets with a brand-new digital cockpit and cabin safety layout. Training all 450 pilots and 1,100 cabin crew via external **off-the-job** aviation academy courses would cost **£9.2 million** and ground several flights for three weeks. The Finance Director suggests training **everyone purely on-the-job** during live passenger flights to save £9.2m.\n\n**Evaluate** whether SwiftAir Plc should use **off-the-job** or **on-the-job** training for its new fleet. *(12 marks)*",
          marks: 6,
          modelAnswer:
            "Off-the-job aviation simulator training is non-negotiable for the 450 pilots: learning a brand-new digital cockpit for the first time on live passenger flights carries catastrophic safety and regulatory risks, and civil aviation law strictly mandates certified simulator hours before carrying passengers! Specialist external instructors ensure zero pilot bad habits are transferred onto the 25 next-generation jets.\n\nHowever, spending £9.2m and grounding aircraft for three weeks to send all 1,100 cabin crew to external academies creates severe short-run cash outflows and cancelled ticket revenue for a budget airline operating on thin margins. Routine trolley service and boarding flow inside the new cabin are far lower risk and easier to demonstrate practically.\n\nOverall, SwiftAir Plc should adopt a **role-split hybrid strategy** rather than pure on-the-job training (**AJIM**): mandatory **off-the-job simulator certification** for all 450 pilots (and emergency evacuation drills), combined with **train-the-trainer on-the-job mentoring** for routine cabin service across the 1,100 crew! **It depends on** regulatory safety thresholds vs task risk: where error threatens lives and SwiftAir's operating licence, off-the-job wins unconditionally despite the cost; for routine cabin hospitality, supervised on-the-job shadowing protects budget margins safely.",
          markScheme: [
            {
              point: "Case FOR Off-the-Job: Mandatory safety/regulatory simulator training for 450 pilots on a brand-new digital cockpit + zero risk to live passengers.",
              keywords: ["simulator", "450", "pilots", "cockpit", "safety", "passengers"],
            },
            {
              point: "Case AGAINST pure Off-the-Job / FOR On-the-Job: £9.2m cost + 3 weeks grounded flights hurts a thin-margin budget airline; routine cabin tasks suit shadowing.",
              keywords: ["9.2m", "9.2 million", "ground", "budget", "1,100", "cabin"],
            },
            {
              point: "Rich AO2 context woven throughout (25 next-generation jets, 450 pilots vs 1,100 cabin crew).",
              keywords: ["25", "jets", "swiftair"],
            },
            {
              point: "Rejection of Finance Director's dangerous pure on-the-job proposal for cockpit pilots.",
              keywords: ["non-negotiable", "catastrophic", "licence"],
            },
            {
              point: "Top-band AJIM synthesis splitting **pilots (off-the-job)** from **routine cabin service (on-the-job mentoring)**.",
              keywords: ["overall", "hybrid", "split"],
            },
            {
              point: "'It depends on' safety/regulatory criticality of each role.",
              keywords: ["it depends on", "regulatory", "risk"],
            },
          ],
          commonError: "Treating the 450 pilots and 1,100 cabin crew identically instead of spotting the planted role split!",
          hints: [
            "**Spot the planted Grade 9 split in the case study:** 450 **pilots** (digital cockpit!) vs 1,100 **cabin crew**!",
            "Can a budget airline legally or safely train pilots 'on-the-job' on live passenger flights?! Never!",
            "Use **AJIM** to split the roles: **off-the-job simulators** for pilots + emergency drills, **on-the-job mentoring** for routine cabin service!",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "recruitment-selection",
          question:
            "What term describes hiring a candidate from **outside** the existing workforce (via job boards, LinkedIn or headhunters) to bring fresh ideas and a wider applicant pool (*_________ recruitment*)?",
          answer: {
            type: "text",
            accept: ["external", "external recruitment"],
            display: "external recruitment",
          },
          solution: [
            "**External recruitment** advertises outside the firm to tap a wider pool of skills and fresh perspectives.",
          ],
          commonError: "Writing 'internal recruitment'.",
          traps: [
            {
              spec: { type: "text", accept: ["internal", "internal recruitment"] },
              feedback: "Internal promotes existing staff; hiring from outside via job boards/agencies is EXTERNAL recruitment!",
            },
          ],
          hints: [
            "Opposite of internal recruitment!",
            "Brings fresh outside ideas at higher advertising/agency cost.",
          ],
        },
        {
          id: "people-communication-recruitment-p2-q15",
          kind: "short",
          difficulty: "core",
          guideRef: "training-employment-law",
          question:
            "What three-letter abbreviation stands for **Personal Protective Equipment** (such as hard hats, safety goggles, high-vis vests and steel-toe boots) required under Health and Safety law?",
          answer: {
            type: "text",
            accept: ["ppe", "personal protective equipment"],
            display: "PPE",
          },
          solution: [
            "**PPE** (**Personal Protective Equipment**) is mandated by workplace Health & Safety legislation to prevent injuries.",
          ],
          commonError: "Writing 'PRP' (Performance-Related Pay).",
          hints: [
            "Personal Protective Equipment → three initials!",
            "Hard hats, goggles, gloves and safety boots.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "people-communication-recruitment-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "training-employment-law",
      question:
        "`Precision Aero Ltd` pays **£3,600 per engineer** in tuition fees plus **4 days of lost output at £225/day** to put **8 engineers** through an off-the-job composites course. Immediately after qualifying, **2 of the 8 engineers** are poached by a rival (generating £0 post-training return for Precision Aero and having no clawback clause!). Each of the **6 remaining engineers** generates **£6,800** of extra contribution over the next 12 months. Calculate Precision Aero Ltd's **net Year 1 profit gain (£)** across the whole 8-person programme.",
      answer: { type: "number", value: 4800, display: "£4,800" },
      solution: [
        "Full training cost per engineer = £3,600 + (4 × £225 = £900) = £4,500.",
        "Total cost paid across ALL 8 engineers = 8 × £4,500 = £36,000.",
        "Total contribution gained from the 6 retained engineers = 6 × £6,800 = £40,800.",
        "Net Year 1 profit gain = £40,800 − £36,000 = **£4,800** (poaching wiped out 2 × £6,800 = £13,600 of upside!).",
      ],
      commonError: "Calculating training cost for only 6 engineers (£27,000) — Precision Aero already paid to train ALL 8 before 2 were poached!",
      traps: [
        {
          spec: { type: "number", value: 13800 },
          feedback: "Careful! Precision Aero paid training + lost-output costs (£4,500 each) for ALL 8 engineers (£36,000), even though only 6 stayed!",
        },
        {
          spec: { type: "number", value: 12000 },
          feedback: "Don't forget to deduct the 4 days × £225 (£900) lost output for each of the 8 engineers (£7,200)!",
        },
      ],
      hints: [
        "Step 1: Cost per engineer = £3,600 + (4 × £225) = £4,500; paid for ALL 8 engineers = £36,000!",
        "Step 2: Contribution return comes ONLY from the 6 engineers who stayed: 6 × £6,800 = £40,800.",
        "Step 3: Subtract £36,000 from £40,800!",
      ],
    },
    {
      id: "people-communication-recruitment-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "training-employment-law",
      question:
        "FreshMart Supermarket employs **40 shelf-stackers** on **£11.00/hr** (`35 hrs/wk` each) and **8 Team Leaders** on **£12.50/hr** (`40 hrs/wk` each), all working **52 weeks/year**. When the National Minimum Wage rises to **£12.00/hr**, FreshMart raises shelf-stackers to £12.00/hr AND gives Team Leaders a pay rise that preserves their **exact £1.50/hr cash pay differential** above shelf-stackers (raising Team Leaders to **£13.50/hr**). Calculate the **total annual wage-bill increase (£)** across both groups combined.",
      answer: { type: "number", value: 89440, display: "£89,440" },
      solution: [
        "Shelf-stackers (+£1.00/hr): 40 × 35 × 52 × £1.00 = £72,800.",
        "Team Leaders (+£1.00/hr to £13.50 to keep the £1.50 gap): 8 × 40 × 52 × £1.00 = £16,640.",
        "Total annual wage-bill increase = £72,800 + £16,640 = **£89,440**.",
      ],
      commonError: "Counting only the £72,800 shelf-stacker rise and forgetting the £16,640 Team Leader differential rise.",
      traps: [
        {
          spec: { type: "number", value: 72800 },
          feedback: "£72,800 is the shelf-stackers alone — add the 8 Team Leaders' £1.00/hr differential rise (8 × 40 × 52 × £1 = £16,640)!",
        },
      ],
      hints: [
        "Both shelf-stackers (£11.00 → £12.00) AND Team Leaders (£12.50 → £13.50) rise by £1.00 per hour!",
        "Shelf-stackers annual hours = 40 × 35 × 52 = 72,800 hrs; Team Leaders annual hours = 8 × 40 × 52 = 16,640 hrs.",
        "Sum (72,800 + 16,640) × £1.00!",
      ],
    },
    {
      id: "people-communication-recruitment-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "recruitment-selection",
      question:
        "Hotel Group `CoastStay Ltd` employed **160 staff** on 1 January and **200 staff** on 31 December (`use simple average of start and end headcount`). During the year, **45 employees** left, and each replacement hire cost **£1,600** in recruitment and induction. If better upward communication and training cut next year's **labour turnover percentage** by **10 percentage points** (at an average headcount of **200 staff**, compared with keeping this year's 25% turnover rate on those 200 staff) for an annual HR programme cost of **£14,000**, calculate CoastStay's **net annual saving (£)** next year.",
      answer: { type: "number", value: 18000, display: "£18,000" },
      solution: [
        "This year's average staff = (160 + 200) ÷ 2 = 180 staff.",
        "This year's labour turnover % = (45 ÷ 180) × 100 = 25%.",
        "Next year's turnover % (−10 percentage points) = 15% on 200 average staff = 30 leavers (instead of 25% × 200 = 50 leavers → **20 fewer leavers**!).",
        "Gross recruitment saving = 20 × £1,600 = £32,000; subtract £14,000 HR programme cost = **£18,000** net saving!",
      ],
      commonError: "Dividing 45 by 200 instead of average headcount 180, or forgetting to deduct the £14,000 programme cost.",
      traps: [
        {
          spec: { type: "number", value: 32000 },
          feedback: "£32,000 is the gross recruitment saving (20 × £1,600) — subtract the £14,000 HR programme cost for the net saving (£18,000)!",
        },
      ],
      hints: [
        "Step 1: Average staff this year = (160 + 200) ÷ 2 = 180 → Current turnover % = (45 ÷ 180) × 100 = 25%.",
        "Step 2: Cutting turnover by 10 percentage points (25% → 15%) across 200 staff avoids 10% × 200 = 20 leavers (20 × £1,600 = £32,000).",
        "Step 3: Subtract the £14,000 HR programme cost from £32,000!",
      ],
    },
    {
      id: "people-communication-recruitment-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "barriers-to-communication",
      question:
        "Before delayering, `OmniManufacturing Plc` had **6 layers** (`5 sequential handoffs` from CEO to machinist), with each verbal handoff retaining **80%** accuracy. After delayering **2 middle layers** (`leaving 3 sequential handoffs`) AND introducing plain-English tablets that lift per-handoff retention to **95%**, by how many **percentage points** does final message accuracy at the machinist level improve? Give your answer rounded to **1 decimal place**.",
      answer: { type: "number", value: 53, tolerance: 0.15, display: "53.0 percentage points" },
      solution: [
        "Before: 5 handoffs at 0.80 = {{0.80^5 * 100 = 0.32768 * 100 = 32.768%}}.",
        "After: 3 handoffs at 0.95 = {{0.95^3 * 100 = 0.857375 * 100 = 85.7375%}}.",
        "Improvement = 85.7375 − 32.768 = 52.9695 → **53.0 percentage points** (to 1 d.p.).",
      ],
      commonError: "Using 6 and 4 powers instead of the explicitly stated 5 and 3 handoffs.",
      traps: [
        {
          spec: { type: "number", value: 85.7, tolerance: 0.1 },
          feedback: "85.7% is the NEW accuracy — subtract the old 32.8% accuracy to find the improvement (+53.0 percentage points)!",
        },
      ],
      hints: [
        "Before accuracy = 0.80^5 × 100 = 32.77%.",
        "After accuracy = 0.95^3 × 100 = 85.74%.",
        "Subtract 32.77% from 85.74% and round to 1 d.p.!",
      ],
    },
    {
      id: "people-communication-recruitment-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "recruitment-selection",
      question:
        "In a tight labour market with **3.2% national unemployment**, `TechForge Ltd` insists on **12 essential criteria** on its Person Specification (including *'PhD + 8 years Rust + fluent German'*) for a £38,000 junior backend role, receiving **zero qualified applicants** after two months. What is the HR diagnosis?",
        options: [
          "Inflated 'Essential' Person Spec criteria for £38k pay caused an artificial shortage — shift extras to 'Desirable' and train",
          "TechForge Ltd accidentally listed too many candidate skills inside its legal Deed of Partnership instead of its Job Description",
          "Low 3.2% national unemployment makes external recruitment agencies and specialist tech job boards completely free of charge",
          "Reclassifying optional candidate attributes from Essential to Desirable directly violates statutory Health and Safety law",
        ],
        answerIndex: 0,
        explanation:
          "During **low unemployment** (scarce labour supply), demanding senior PhD specs at a £38k junior salary yields 0 matches; separating genuine **Essential** must-haves from **Desirable** trainables widens the shortlist cleanly.",
        hints: [
          "Look at the mismatch: 3.2% low unemployment + £38k junior pay vs demanding a PhD + 8 years + fluent German as *Essential*!",
          "Why does a Person Specification split criteria into **Essential** vs **Desirable**?",
          "Hire for core aptitude and train the desirable extras!",
        ],
      },
    {
      id: "people-communication-recruitment-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "recruitment-selection",
      question:
        "`CallHub Ltd` receives **400 applications** for a customer-support cohort. Shortlisting against the Person Specification keeps **25%** of applicants; **60%** of shortlisted candidates pass the telephone aptitude test; **50%** of those passing the test receive job offers after panel interviews; and **80%** of offered candidates accept after reference checks. How many **new starters** actually join CallHub Ltd?",
      answer: { type: "number", value: 24, display: "24 starters" },
      solution: [
        "Shortlisted = 400 × 25% = 100 candidates.",
        "Pass aptitude test = 100 × 60% = 60 candidates.",
        "Offered jobs = 60 × 50% = 30 candidates.",
        "Accept & start = 30 × 80% = **24 new starters**.",
      ],
      commonError: "Adding percentages instead of multiplying sequentially down the selection funnel.",
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "30 candidates received offers — multiply by the 80% acceptance rate to get 24 actual starters!",
        },
      ],
      hints: [
        "Step down the funnel stage by stage: 400 × 0.25 = 100 shortlisted.",
        "100 × 0.60 = 60 pass aptitude → 60 × 0.50 = 30 offered.",
        "30 × 0.80 = 24 accept and start!",
      ],
    },
    {
      id: "people-communication-recruitment-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "effective-communication",
      question:
        "**Case Study — Artisan Bakehouse Group Ltd (46 employees across 3 Yorkshire cafés & 1 central bakery):** Every morning, wrong pastry counts arrive at the three cafés because café supervisors text handwritten photo orders late at night to the head baker's personal phone, causing **£1,400/month** of wasted eclairs and angry morning commuters. Founder Sam considers buying a **£6,000 shared tablet EPOS ordering system** connecting all 3 cafés horizontally to the central bakery in real time.\n\n**Assess** whether Artisan Bakehouse Group Ltd should invest £6,000 in the shared EPOS communication system. *(9 marks)*",
      marks: 6,
      modelAnswer:
        "Installing the £6,000 shared tablet EPOS system eliminates informal late-night photo texts, replacing illegible handwriting with standardised, real-time horizontal stock data between the 3 Yorkshire cafés and central bakery. Even if it cuts only 75% of the £1,400/month eclair wastage (£1,050/month saved = £12,600/year), the £6,000 investment pays for itself in under 6 months while protecting morning commuter loyalty.\n\nHowever, £6,000 is a noticeable immediate cash outflow for a 46-staff SME, and bakers or café supervisors unfamiliar with EPOS tablets may resist change or enter wrong quantities unless trained — Plus Wi-Fi outages could disrupt overnight bake lists.\n\nOverall, Sam should definitely invest in the EPOS system (**AJIM**), because a sub-6-month payback on £16,800/yr of avoidable pastry waste is financially compelling and essential before opening any further Yorkshire branches. **It depends on** providing hands-on **on-the-job training** for supervisors and bakers plus a simple offline backup sheet if café Wi-Fi drops.",
      markScheme: [
        {
          point: "Case FOR EPOS: Eliminates informal handwritten photo-text errors via real-time horizontal communication.",
          keywords: ["horizontal", "real-time", "handwritten", "epos", "standardised"],
        },
        {
          point: "Quantitative AO2 payback calculation (£1,400/mo = £16,800/yr waste vs £6,000 capex → ~4–6 month payback!).",
          keywords: ["1,400", "16,800", "6,000", "months", "eclairs"],
        },
        {
          point: "Case AGAINST EPOS: £6,000 upfront cash outflow + staff training time + Wi-Fi/tech failure risk.",
          keywords: ["cash outflow", "wi-fi", "outages", "resist"],
        },
        {
          point: "Clear AJIM decision backing the investment.",
          keywords: ["overall", "should definitely", "compelling"],
        },
        {
          point: "'It depends on' training staff properly on the tablets and keeping a backup protocol.",
          keywords: ["it depends on", "on-the-job", "backup"],
        },
        {
          point: "Contextual richness (3 Yorkshire cafés, central bakery, morning commuters, 46 staff).",
          keywords: ["yorkshire", "commuters", "bakery"],
        },
      ],
      commonError: "Missing the killer calculation: £1,400/month × 12 = £16,800/year of eclair waste vs just £6,000 one-off cost!",
      hints: [
        "Annualise the waste! £1,400/month × 12 = **£16,800/year** vs a one-off **£6,000** EPOS cost (<6 months payback!).",
        "Balance horizontal real-time accuracy + commuter satisfaction against upfront £6k cash hit, staff training & Wi-Fi failure.",
        "Close with **AJIM** (*depends on* training supervisors & keeping an offline backup!).",
      ],
    },
    {
      id: "people-communication-recruitment-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "recruitment-selection",
      question:
        "**Case Study — QuickDrop Groceries Plc (3,400 delivery riders & picker staff):** QuickDrop Groceries promises 20-minute urban grocery delivery via an app. Currently 80% of its riders are on **zero-hours contracts**. While this keeps quiet Tuesday-morning wage costs tiny, rider turnover has hit **92% per year**, late/missing grocery bags have sparked viral complaints, and the government is consulting on tighter legal restrictions on zero-hours contracts.\n\n**Evaluate** whether QuickDrop Groceries Plc should move its riders onto **guaranteed part-time and full-time permanent contracts**. *(12 marks)*",
      marks: 6,
      modelAnswer:
        "Moving riders onto guaranteed permanent full-time and part-time contracts provides predictable weekly income security and holiday pay, directly tackling QuickDrop's crippling 92% annual labour turnover. Retaining experienced urban riders cuts constant recruitment and induction spending, ensures riders know local apartment shortcuts to hit the 20-minute delivery USP, and reduces missing grocery-bag errors — while preempting tightening employment legislation.\n\nHowever, app-based grocery orders spike sharply on Friday evenings and rainy Sundays while dipping on Tuesday mornings. Replacing zero-hours flexibility with guaranteed permanent hours locks QuickDrop into high fixed wage bills during quiet off-peak slots, raising unit delivery cost in a fiercely price-competitive grocery market.\n\nOverall, QuickDrop **should transition away** from 80% zero-hours reliance toward a **core-and-flex workforce model** (**AJIM**), because 92% turnover and viral late-bag complaints destroy the repeat customer trust on which a 20-minute convenience app survives! **It depends on** roster design: putting ~70% of riders onto **guaranteed part-time contracts** anchored around predictable evening/weekend peaks while keeping a small **20%–30% student/flexible pool** captures loyalty and service quality without paying idle Tuesday-morning full-time wages.",
      markScheme: [
        {
          point: "Case FOR Permanent/Part-time: Income security slashes 92% rider turnover, cuts recruitment/induction bills, and improves 20-min delivery accuracy.",
          keywords: ["92%", "turnover", "security", "20-minute", "induction"],
        },
        {
          point: "Legal/external insight: Preempts tightening employment legislation & protects brand reputation from viral complaints.",
          keywords: ["legislation", "viral", "complaints", "bags"],
        },
        {
          point: "Case AGAINST abandoning zero-hours: Grocery app demand fluctuates wildly (rainy weekends vs quiet Tuesdays) — guaranteed hours inflate fixed idle wage costs.",
          keywords: ["tuesday", "fixed", "peaks", "idle", "margins"],
        },
        {
          point: "Decisive AJIM verdict rejecting 80% zero-hours reliance.",
          keywords: ["overall", "transition"],
        },
        {
          point: "High-level 'It depends on' workforce-mix synthesis (~70% peak-timed part-time permanent + small flexible surge pool).",
          keywords: ["it depends on", "part-time", "pool", "70%"],
        },
        {
          point: "Sustained Paper 2 scale & context (3,400 riders/pickers, urban grocery app).",
          keywords: ["3,400", "riders", "grocery"],
        },
      ],
      commonError: "Treating the choice as '100% zero-hours vs 100% 40-hour full-time' instead of proposing peak-scheduled **guaranteed part-time** contracts in the AJIM conclusion!",
      hints: [
        "Use every case-study clue: *20-minute delivery USP*, *80% zero-hours*, *92% rider turnover*, *quiet Tuesday mornings*, *impending employment law*!",
        "Weigh retention & 20-min service quality against paying fixed idle wages during off-peak hours.",
        "Land a Grade 9 **AJIM** blend: shift core riders onto **peak-timed guaranteed part-time contracts** + small surge pool!",
      ],
    },
  ],
};
