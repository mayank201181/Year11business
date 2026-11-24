import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p1b",
  title: "Paper 1B: Investigating Small Business (< 50 Employees — Mock B)",
  calculator: true,
  minutes: 90,
  questions: [
    // -------------------------------------------------------------------------
    // 1. BUSINESS ACTIVITY (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1b-q01",
      topicId: "business-activity",
      guideRef: "sectors-and-success",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**Paws & Bubbles** employs 8 dog groomers in Cardiff, washing, clipping and styling pets for local households.\n\nIn which **sector of economic activity** does Paws & Bubbles operate, and why?",
      options: [
        "Primary sector — because dogs are living animals raised on agricultural land",
        "Secondary sector — because groomers use manufactured electric clippers and dryers",
        "Tertiary sector — because it provides a direct personal pet-care service to consumers",
        "Public sector — because local councils license animal-welfare premises",
      ],
      answerIndex: 2,
      hints: [
        "Distinguish extracting raw materials (primary), manufacturing physical goods (secondary), and supplying services (tertiary).",
        "Don't confuse economic sectors (primary/secondary/tertiary) with ownership sectors (private/public).",
      ],
      explanation:
        "Dog grooming provides a direct service to pet owners rather than extracting raw resources (primary) or manufacturing finished goods (secondary), placing Paws & Bubbles firmly in the tertiary sector.",
    },
    {
      id: "exam-p1b-q02",
      topicId: "business-activity",
      guideRef: "sectors-and-success",
      kind: "mcq",
      difficulty: "core",
      question:
        "**ByteFix Repairs Ltd** (10 employees) recorded £42,000 of accounting profit last year repairing laptops for local schools on 60-day payment terms, yet was forced into administration last month.\n\nWhat is the **most likely** reason a profitable small business like ByteFix failed?",
      options: [
        "Employing fewer than 50 staff automatically breaches UK competition legislation",
        "Recording positive accounting profit increases corporation tax above 100% of sales",
        "Private limited companies must return all share capital to shareholders every 12 months",
        "Cash-flow insolvency — cash was tied up in 60-day school receivables while rent, parts and wages had to be paid immediately",
      ],
      answerIndex: 3,
      hints: [
        "Remember the golden Edexcel Finance rule: **Cash ≠ Profit**!",
        "Look at the 60-day credit terms given to schools versus immediate weekly bills for parts, rent and wages.",
      ],
      explanation:
        "Revenue is recorded in profit calculations as soon as invoices are sent, even if schools take 60 days to pay cash. When immediate cash outflows for spare parts, rent and staff wages exceed cash inflows, a profitable small firm suffers cash-flow insolvency.",
    },
    {
      id: "exam-p1b-q03",
      topicId: "business-activity",
      guideRef: "franchises-social-public",
      kind: "short",
      difficulty: "warmup",
      question:
        "**BrightSpark Coding Tutors** operates in Birmingham with 19 employees as a **franchisee** of a national STEM-education brand. Under the franchise agreement, the Birmingham centre pays an annual **royalty of 8% of revenue** to the franchisor.\n\nLast year, the Birmingham centre earned **£165,000** in tuition revenue.\n\nCalculate the annual **royalty payment** (£) owed to the franchisor.",
      answer: {
        type: "number",
        value: 13200,
        display: "£13,200",
      },
      traps: [
        {
          spec: { type: "number", value: 151800 },
          feedback: "£151,800 is the revenue remaining *after* deducting the 8% royalty — give the 8% royalty payment itself!",
        },
        {
          spec: { type: "number", value: 1320 },
          feedback: "Check your decimal place: 8% is 0.08 (not 0.008). Multiply £165,000 × 0.08.",
        },
        {
          spec: { type: "number", value: 20625 },
          feedback: "You divided £165,000 by 8 instead of finding 8% (£165,000 × 8 ÷ 100).",
        },
      ],
      hints: [
        "8% of revenue means (8 ÷ 100) × £165,000.",
        "Calculate £165,000 × 0.08.",
      ],
      solution: [
        "Annual royalty = 8% of £165,000 = 0.08 × £165,000 = **£13,200**.",
      ],
      commonError: "Dividing by 8 instead of multiplying by 0.08, or subtracting the royalty from revenue.",
    },
    {
      id: "exam-p1b-q04",
      topicId: "business-activity",
      guideRef: "unincorporated-incorporated",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "**PeakTrail Custom Bikes** is an unincorporated partnership in the Lake District with 11 employees. Founders Hannah and Dev are inviting a specialist wheel-builder, Sam, to invest £30,000 and join as a third partner.\n\n**Explain** one reason why the partners should draw up a formal **Deed of Partnership**. *(3 marks)*",
      hints: [
        "What happens under default partnership law if profits, capital contributions and voting duties are NOT agreed in writing?",
        "Connect written rules on profit-sharing/workload → preventing costly disputes → smooth running of the 11-staff bike workshop.",
      ],
      modelAnswer:
        "A Deed of Partnership legally sets out how profits, capital contributions, workload and voting rights are divided between Hannah, Dev and Sam. Without this binding document, profits might have to be split equally even if Sam invests less capital than the founders, so clear written terms prevent future legal disputes that could disrupt custom bike orders.",
      markScheme: [
        {
          point: "Identifies what a Deed of Partnership specifies (profit/loss split, capital invested, roles or voting rights).",
          keywords: ["profit", "voting", "workload", "capital", "split", "share"],
        },
        {
          point: "Explains the risk without a deed (unfair equal split despite unequal investment/effort, or ambiguity when a partner leaves).",
          keywords: ["equal", "unfair", "default", "less capital", "ambigui", "disagree"],
        },
        {
          point: "Links to business benefit (prevents costly legal disputes / maintains harmonious decision-making).",
          keywords: ["dispute", "conflict", "argument", "court", "disrupt", "smooth"],
        },
      ],
      commonError: "Claiming a Deed of Partnership gives limited liability — ordinary partnerships still carry unlimited liability even with a Deed!",
    },

    // -------------------------------------------------------------------------
    // 2. LOCATION, GLOBALISATION & EXTERNAL FACTORS (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1b-q05",
      topicId: "location-globalisation-external",
      guideRef: "government-policies",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "The government increases the rate of **Value Added Tax (VAT)** — an indirect tax on goods and services — from 20% to 22%. How is this most likely to affect **8-employee Bistro Verde**, an independent Italian restaurant?",
      options: [
        "Menu prices inclusive of VAT rise or restaurant margins shrink, dampening discretionary dining out",
        "Bistro Verde's corporation tax rate automatically falls to zero",
        "Staff income-tax deductions disappear, raising every waiter's take-home pay",
        "Imported Italian olive oil becomes exempt from all customs checks",
      ],
      answerIndex: 0,
      hints: [
        "VAT is an indirect tax added to the selling price of restaurant meals.",
        "Either Bistro Verde passes higher VAT onto diners (higher menu prices) or absorbs it (narrower profit margins).",
      ],
      explanation:
        "Higher VAT is an indirect tax on spending: Bistro Verde must either raise menu prices — reducing demand for non-essential restaurant meals — or absorb the extra tax out of its own revenue, squeezing profit margins.",
    },
    {
      id: "exam-p1b-q06",
      topicId: "location-globalisation-external",
      guideRef: "trade-exchange-rates",
      kind: "short",
      difficulty: "core",
      question:
        "**Nyonya Spice Pantry Pte Ltd** (14 employees, Singapore) exports **900 gift crates** of Peranakan laksa paste to a specialist food hall in London priced at **S$10.80 per crate**.\n\nThe exchange rate is **£1 = S$1.80**.\n\nCalculate the total price paid by the London food hall in pounds (**£**).",
      answer: {
        type: "number",
        value: 5400,
        display: "£5,400",
      },
      traps: [
        {
          spec: { type: "number", value: 17496 },
          feedback: "You multiplied S$9,720 by 1.80! Because £1 = S$1.80, divide the Singapore dollar total by 1.80 to convert into £.",
        },
        {
          spec: { type: "number", value: 9720 },
          feedback: "S$9,720 is the invoice total in Singapore dollars — divide by 1.80 to convert into pounds (£).",
        },
        {
          spec: { type: "number", value: 6 },
          feedback: "£6 is the converted price of just ONE crate (S$10.80 ÷ 1.80) — multiply by all 900 crates!",
        },
      ],
      hints: [
        "First calculate the total order value in Singapore dollars: 900 × S$10.80.",
        "Since £1 = S$1.80, divide the S$ total by 1.80 to convert into pounds (£).",
      ],
      solution: [
        "Total export order in Singapore dollars = 900 × S$10.80 = S$9,720.",
        "Price in pounds = S$9,720 ÷ 1.80 = **£5,400**.",
      ],
      commonError: "Multiplying by 1.80 instead of dividing when converting S$ into £.",
    },
    {
      id: "exam-p1b-q07",
      topicId: "location-globalisation-external",
      guideRef: "external-pestle-ethics",
      kind: "mcq",
      difficulty: "core",
      question:
        "A local environmental **pressure group** discovers that a 34-employee dye house has been discharging untreated fabric rinse into a river and launches a viral local boycott campaign.\n\nWhy is even a small 34-employee firm vulnerable to pressure-group action?",
      options: [
        "Pressure groups have legal authority to pass new Acts of Parliament and imprison directors directly",
        "Adverse local publicity and retailer boycotts can rapidly cancel wholesale orders and trigger heavy regulatory fines",
        "Pressure groups set the central bank base interest rate for polluting workshops",
        "Small businesses are legally banned from replying to social-media posts",
      ],
      answerIndex: 1,
      hints: [
        "Separate what pressure groups *actually* do (publicity, boycotts, lobbying regulators) from powers only Parliament/courts/central banks hold.",
        "How do independent clothing clients react if their supplier is shamed for river pollution?",
      ],
      explanation:
        "Pressure groups cannot pass laws directly, but viral boycotts damage reputation with ethical clothing buyers — causing immediate cancelled orders — while alerting environmental regulators who can impose clean-up fines that cripple a 34-staff firm.",
    },
    {
      id: "exam-p1b-q08",
      topicId: "location-globalisation-external",
      guideRef: "trade-exchange-rates",
      kind: "written",
      difficulty: "core",
      marks: 6,
      question:
        "**Loom & Thistle Knitwear Ltd** employs 29 staff in the Scottish Borders. It **imports superfine merino yarn from Italy** (paid in €) and **exports 40% of its finished jumpers to independent boutiques in the USA** (priced in $). Over six months, **the pound (£) appreciates strongly** against both the euro and the US dollar.\n\n**Analyse** the likely impact of this stronger pound on Loom & Thistle Knitwear Ltd. *(6 marks)*",
      hints: [
        "Apply **SPICED** (**S**trong **P**ound **I**mports **C**heaper **E**xports **D**earer) to *both* halves of Loom & Thistle's supply chain!",
        "Explain the benefit on Italian merino yarn costs AND the threat to US boutique jumper sales.",
      ],
      modelAnswer:
        "Under SPICED (Strong Pound, Imports Cheaper, Exports Dearer), an appreciating pound means each £1 buys more euros, cutting the sterling bill for Loom & Thistle's Italian wool raw materials. Cheaper imported fleece reduces direct Cost of Sales and widens the mill's gross profit margin on knitwear sold across Britain.\n\nHowever, a stronger pound simultaneously makes finished Scottish jumpers more expensive in US dollars for American boutiques, which account for 40% of sales. Unless the 29-staff mill cuts its sterling export price — squeezing unit margins — US stockists may switch to domestic knitwear rivals, causing export sales to fall.",
      markScheme: [
        {
          point: "Correctly applies exchange-rate appreciation to imports (imports become cheaper in £ / £ buys more €).",
          keywords: ["imports", "imported", "cheaper", "more euro", "spiced"],
        },
        {
          point: "Applies to Loom & Thistle's Italian merino yarn input.",
          keywords: ["merino", "yarn", "italy", "italian", "raw material"],
        },
        {
          point: "Develops financial gain (lower Cost of Sales / wider gross profit margin).",
          keywords: ["cost of sales", "gross profit", "margin", "lower unit cost"],
        },
        {
          point: "Correctly applies appreciation to exports (exports become dearer / more expensive in US dollars).",
          keywords: ["export", "dearer", "more expensive", "dollar"],
        },
        {
          point: "Applies to the 40% revenue exposure from US boutiques.",
          keywords: ["boutique", "american", "40%", "us ", "usa"],
        },
        {
          point: "Develops commercial consequence (falling US export demand or forced £ price cut that squeezes margins).",
          keywords: ["demand fall", "fewer order", "switch", "cut its", "export sales"],
        },
      ],
      commonError: "Getting SPICED backwards, or analysing only US exports while ignoring cheaper imported Italian merino yarn.",
    },

    // -------------------------------------------------------------------------
    // 3. PEOPLE: COMMUNICATION, RECRUITMENT & TRAINING (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1b-q09",
      topicId: "people-communication-recruitment",
      guideRef: "effective-communication",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "The owner of **21-employee SunGrid Solar Installers** needs to issue complex new roof-harness safety regulations that every electrician must sign and refer back to on scaffolding sites.\n\nWhich **communication channel** is most appropriate?",
      options: [
        "An informal corridor chat with whichever two electricians walk past the office",
        "A public Instagram promotional reel aimed at homeowners",
        "A brief unrecorded phone call during noisy roof drilling",
        "A formal written safety briefing document paired with a mandatory toolbox demonstration and signed acknowledgement",
      ],
      answerIndex: 3,
      hints: [
        "Safety-critical instructions need a permanent record, 100% reach across all 21 staff, and proof of understanding.",
        "Why would informal verbal chats fail health-and-safety compliance?",
      ],
      explanation:
        "Health-and-safety regulations require formal written documentation so electricians have an accurate permanent reference and SunGrid holds legal proof of compliance, reinforced by a practical demonstration to verify understanding.",
    },
    {
      id: "exam-p1b-q10",
      topicId: "people-communication-recruitment",
      guideRef: "recruitment-selection",
      kind: "short",
      difficulty: "warmup",
      question:
        "**Meadowlark Wedding Catering** (16 core staff) hires casual waiting staff on an arrangement where **the employer does not guarantee any minimum weekly hours**, offering shifts only when marquee weddings are booked.\n\nState the exact name of this type of employment contract.",
      answer: {
        type: "text",
        accept: ["zero-hours contract", "zero hours contract", "zero-hour contract", "zero hour contract"],
        display: "zero-hours contract",
      },
      traps: [
        {
          spec: { type: "text", accept: ["part-time contract", "part time contract", "part-time"] },
          feedback:
            "Part-time contracts still guarantee a set number of hours each week (e.g. 16 hours/week). A contract with *zero* guaranteed minimum hours is a zero-hours contract!",
        },
        {
          spec: { type: "text", accept: ["job share", "job sharing"] },
          feedback: "Job share splits one full-time post between two workers with agreed hours. No guaranteed minimum hours is a zero-hours contract.",
        },
      ],
      hints: [
        "Look at the defining feature: **0** guaranteed minimum hours per week.",
        "Workers are called in on demand when wedding banquets take place.",
      ],
      solution: [
        "An employment contract with no guaranteed minimum hours, where staff are called in as and when required, is a **zero-hours contract**.",
      ],
      commonError: "Writing 'part-time contract' (which still has fixed contracted weekly hours) instead of 'zero-hours contract'.",
    },
    {
      id: "exam-p1b-q11",
      topicId: "people-communication-recruitment",
      guideRef: "training-employment-law",
      kind: "mcq",
      difficulty: "core",
      question:
        "**Oakwood Joinery Ltd** (27 employees) rejects a highly experienced cabinetmaker's job application solely because she is 56 years old, stating in an email that the workshop wants 'younger energy'.\n\nWhich area of **employment legislation** has Oakwood Joinery breached, and what is a likely business consequence?",
      options: [
        "Equal opportunities / anti-discrimination law (age discrimination), risking an employment tribunal claim, compensation payout and reputational damage",
        "National Minimum Wage legislation, requiring automatic closure of all private limited companies",
        "Consumer protection law on faulty goods, forcing a recall of wooden tables",
        "Monetary policy rules set by the central bank's interest-rate committee",
      ],
      answerIndex: 0,
      hints: [
        "Age, gender, race, disability and religion are protected characteristics under equal-opportunities / anti-discrimination law.",
        "What legal and reputational penalties follow unlawful recruitment discrimination?",
      ],
      explanation:
        "Rejecting a qualified candidate because of her age breaches anti-discrimination / equal opportunities employment law, exposing the 27-staff firm to costly employment tribunal compensation, legal fees, damaged local employer branding and the loss of skilled talent.",
    },
    {
      id: "exam-p1b-q12",
      topicId: "people-communication-recruitment",
      guideRef: "training-employment-law",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "**BrightSpark Coding Tutors** (19 employees, Birmingham) pays £4,500 for four of its tutors to attend an external university short course in **Python & AI Robotics** (**off-the-job training**).\n\n**Explain** one benefit to BrightSpark Coding Tutors of using off-the-job training here. *(3 marks)*",
      hints: [
        "Think about whether anyone *inside* a 19-person tutoring centre already possesses cutting-edge AI robotics expertise.",
        "Chain: external specialist skills brought back → launch new high-demand AI courses → attract more students / charge premium fees.",
      ],
      modelAnswer:
        "Attending an external university course lets tutors learn cutting-edge AI robotics skills from specialist lecturers that nobody inside the 19-staff centre currently possesses. Tutors can then bring those new modules back to BrightSpark, enabling the centre to launch premium AI holiday camps that attract new fee-paying pupils.",
      markScheme: [
        {
          point: "Identifies access to specialist external expertise not available in-house (or distraction-free learning).",
          keywords: ["specialist", "expert", "not available", "in-house", "up-to-date", "new skill"],
        },
        {
          point: "Applies to BrightSpark's curriculum (bringing AI / Python robotics teaching back to the centre).",
          keywords: ["curriculum", "module", "camp", "class", "pupil", "student"],
        },
        {
          point: "Links to business outcome (competitive differentiation, higher enrolment revenue or motivated tutors).",
          keywords: ["attract", "enrol", "revenue", "premium", "fee", "competit"],
        },
      ],
      commonError: "Confusing off-the-job training (external specialist courses) with on-the-job shadowing.",
    },

    // -------------------------------------------------------------------------
    // 4. PEOPLE: MOTIVATION & ORGANISATION (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1b-q13",
      topicId: "motivation-organisation",
      guideRef: "motivation-theories",
      kind: "mcq",
      difficulty: "core",
      question:
        "At **15-employee FreshBox Meal Prep**, packers work alone in chilled rooms on temporary week-by-week contracts with a high dismissal rate. The owner introduces an 'Employee of the Month' certificate, yet staff turnover stays high.\n\nUsing **Abraham Maslow's Hierarchy of Needs**, why has the certificate failed to motivate packers?",
      options: [
        "Maslow argued that workers are motivated solely by hourly piece-rate cash and have zero psychological needs",
        "Lower-level security and social needs remain unsatisfied due to insecure contracts and isolated shifts, so higher-level esteem recognition cannot motivate effectively",
        "Maslow stated that self-actualisation must always be satisfied before physiological survival needs",
        "Certificates reduce wages below the statutory National Minimum Wage",
      ],
      answerIndex: 1,
      hints: [
        "Recall Maslow's 5-tier pyramid from bottom to top: Physiological → Safety/Security → Social/Belonging → Esteem → Self-Actualisation.",
        "Can an Esteem badge work when Safety (job security) and Social belonging (isolated rooms) below it are missing?",
      ],
      explanation:
        "In Maslow's Hierarchy of Needs, lower tiers must largely be met before higher tiers motivate behaviour. Because week-by-week insecurity leaves Safety needs unmet and isolated rooms starve Social needs, an Esteem certificate higher up the pyramid fails to curb staff turnover.",
    },
    {
      id: "exam-p1b-q14",
      topicId: "motivation-organisation",
      guideRef: "non-financial-motivation",
      kind: "short",
      difficulty: "core",
      question:
        "At **Nyonya Spice Pantry Pte Ltd** (14 employees), production staff switch workstations every two hours — moving systematically from spice grinding to paste cooking, jar filling and carton sealing — to reduce repetitive strain and build multi-skilled cover.\n\nState the **two-word non-financial motivation method** being used.",
      answer: {
        type: "text",
        accept: ["job rotation"],
        display: "job rotation",
      },
      traps: [
        {
          spec: { type: "text", accept: ["job enrichment"] },
          feedback:
            "Careful — job enrichment gives workers vertically *more challenging* tasks and decision-making responsibility. Switching systematically across same-level workstations every two hours is job rotation!",
        },
        {
          spec: { type: "text", accept: ["job enlargement"] },
          feedback:
            "Close! Job enlargement permanently widens a worker's list of similar-level duties, whereas moving systematically between stations on a schedule is **job rotation**.",
        },
      ],
      hints: [
        "Workers *rotate* on a schedule between several tasks of similar skill level.",
        "Be precise — don't confuse rotation with enrichment or enlargement!",
      ],
      solution: [
        "Moving employees systematically between different workstations of similar complexity to relieve monotony and build flexible cover is **job rotation**.",
      ],
      commonError: "Confusing job rotation (scheduled switching between tasks) with job enrichment (adding higher-level responsibility).",
    },
    {
      id: "exam-p1b-q15",
      topicId: "motivation-organisation",
      guideRef: "organisational-charts",
      kind: "mcq",
      difficulty: "core",
      question:
        "**VeloFix Couriers** employs 19 bicycle couriers and 1 founder-dispatcher in a **flat organisational structure** with only two layers of hierarchy.\n\nWhich combination accurately describes VeloFix's **chain of command** and the founder's **span of control**?",
      options: [
        "Long chain of command and narrow span of control (1 subordinate)",
        "Long chain of command and wide span of control (19 subordinates)",
        "Short chain of command and wide span of control (19 subordinates)",
        "Short chain of command and zero span of control",
      ],
      answerIndex: 2,
      hints: [
        "With only 2 layers of hierarchy, is the vertical path from founder to courier long or short?",
        "How many couriers report *directly* to the single founder-dispatcher?",
      ],
      explanation:
        "A flat 2-layer structure has a very short chain of command (messages pass directly from founder to couriers without middle managers) and gives the founder a wide span of control of 19 direct reports.",
    },
    {
      id: "exam-p1b-q16",
      topicId: "motivation-organisation",
      guideRef: "organisational-charts",
      kind: "written",
      difficulty: "core",
      marks: 6,
      question:
        "Priya founded **SunGrid Solar Installers** (21 employees) and currently approves every household solar quote herself, causing a 10-day delay in sending prices to homeowners. She decides to **delegate** authority for approving standard domestic quotes (up to £12,000) to her two senior site electricians.\n\n**Analyse** the likely impact of this delegation on SunGrid Solar Installers. *(6 marks)*",
      hints: [
        "Remember the golden Edexcel rule on delegation: Priya passes down **authority**, NOT ultimate **accountability/responsibility**!",
        "Develop one chain on faster customer quotes + freeing Priya's strategic time + empowering senior electricians, and a second chain on pricing mistakes if electricians lack costing training.",
      ],
      modelAnswer:
        "Delegating standard quote sign-off cuts the 10-day bottleneck, so homeowners receive rapid solar proposals before rival installers win the job, while freeing Priya's time to negotiate trade-supplier discounts and commercial contracts. Trusting the two senior electricians with £12,000 authority also enriches their roles, boosting esteem and retention.\n\nHowever, although Priya delegates decision-making authority, ultimate responsibility for profitable pricing remains with her as owner. Without clear costing templates and training, an electrician might underestimate scaffolding or inverter costs on a complex roof, locking SunGrid into loss-making installations.",
      markScheme: [
        {
          point: "Explains operational speed benefit (removes 10-day bottleneck / faster quotes win more homeowner orders).",
          keywords: ["faster", "delay", "bottleneck", "quick", "win"],
        },
        {
          point: "Explains benefit to Priya's workload (frees owner time for strategic tasks / commercial growth) or empowers senior electricians.",
          keywords: ["free", "strategic", "empower", "esteem", "enrich", "trust"],
        },
        {
          point: "States key Edexcel concept: authority is passed down, while ultimate responsibility stays with Priya.",
          keywords: ["responsibility", "accountab", "authority"],
        },
        {
          point: "Identifies risk of costing/pricing error by electricians.",
          keywords: ["underestimat", "mistake", "error", "misprice", "wrong price"],
        },
        {
          point: "Applies error to solar installation context (roof complexity, scaffolding or inverter costs).",
          keywords: ["scaffold", "inverter", "roof", "installation"],
        },
        {
          point: "Develops financial/control consequence (squeezed profit margins or need for training/clear pricing guidelines).",
          keywords: ["loss-making", "margin", "training", "guideline", "template"],
        },
      ],
      commonError: "Claiming delegation hands away ultimate responsibility — managers delegate authority, never final accountability!",
    },

    // -------------------------------------------------------------------------
    // 5. FINANCE: SOURCES, CASH FLOW & BREAK-EVEN (5 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1b-q17",
      topicId: "sources-cashflow-breakeven",
      guideRef: "internal-external-finance",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**Nyonya Spice Pantry Pte Ltd** (14 employees) negotiates 45 days to pay its glass-jar supplier *after* receiving the jars, allowing the firm to cook, sell paste and collect cash from supermarkets first.\n\nWhat is this short-term source of finance called?",
      options: [
        "Trade credit",
        "Venture capital",
        "Share capital flotation",
        "Sale of non-current property",
      ],
      answerIndex: 0,
      hints: [
        "Buying stock/inputs now from a B2B supplier and paying the invoice 30–60 days later is one of the most vital interest-free short-term finance sources for SMEs.",
        "Check the exact two-word term.",
      ],
      explanation:
        "Trade credit lets a business receive raw materials or jars immediately and settle the supplier's invoice 30–60 days later, easing working-capital pressure without interest charges (provided Nyonya Spice Pantry pays on time to protect supplier goodwill and early-payment discounts).",
    },
    {
      id: "exam-p1b-q18",
      topicId: "sources-cashflow-breakeven",
      guideRef: "costs-revenue-profit",
      kind: "short",
      difficulty: "core",
      question:
        "**PeakTrail Custom Bikes** (11 employees) builds and sells **40 custom gravel bikes** in April:\n\n- Selling price per bike: **£1,450**\n- Variable cost per bike (alloy frame, drivetrain, tyres): **£680**\n- Monthly fixed costs (workshop rent, salaries, insurance): **£16,000**\n\nCalculate PeakTrail's **monthly profit** (£) in April.",
      answer: {
        type: "number",
        value: 14800,
        display: "£14,800",
      },
      traps: [
        {
          spec: { type: "number", value: 30800 },
          feedback: "£30,800 is Total Contribution (40 × £770). Remember to subtract monthly Fixed Costs of £16,000 to reach Profit!",
        },
        {
          spec: { type: "number", value: 41320 },
          feedback: "You only subtracted the variable cost of ONE bike (£680) instead of all 40 bikes (40 × £680 = £27,200)!",
        },
        {
          spec: { type: "number", value: 43200 },
          feedback: "£43,200 is Total Costs (£16,000 + £27,200). Subtract Total Costs from Total Revenue (£58,000) to find Profit!",
        },
      ],
      hints: [
        "Total Revenue = 40 × £1,450. Total Variable Costs = 40 × £680.",
        "Total Costs = Fixed Costs (£16,000) + Total Variable Costs; Profit = Total Revenue − Total Costs.",
      ],
      solution: [
        "Total Revenue = 40 × £1,450 = £58,000.",
        "Total Variable Costs = 40 × £680 = £27,200; Total Costs = £16,000 + £27,200 = £43,200.",
        "Monthly Profit = £58,000 − £43,200 = **£14,800**.",
      ],
      commonError: "Forgetting to multiply variable cost (£680) by all 40 bikes, or stopping at Total Contribution (£30,800).",
    },
    {
      id: "exam-p1b-q19",
      topicId: "sources-cashflow-breakeven",
      guideRef: "breakeven-calculation",
      kind: "short",
      difficulty: "challenge",
      question:
        "**Solis Cargo E-Bikes Ltd** (22 employees) assembles electric delivery trikes for local bakeries and florists:\n\n- Quarterly fixed costs: **£84,000**\n- Selling price per cargo e-bike: **£1,600**\n- Variable cost per cargo e-bike: **£1,000**\n\nCalculate the **number of cargo e-bikes** Solis must sell in a quarter to achieve a **target quarterly profit of £36,000**.",
      answer: {
        type: "number",
        value: 200,
        display: "200 bikes",
      },
      traps: [
        {
          spec: { type: "number", value: 140 },
          feedback: "140 bikes is the Break-Even Output (£84,000 ÷ £600) — that gives £0 profit! Add the £36,000 target profit to Fixed Costs before dividing by £600.",
        },
        {
          spec: { type: "number", value: 75 },
          feedback: "You divided (£84,000 + £36,000) by Selling Price (£1,600) instead of Contribution per bike (£1,600 − £1,000 = £600)!",
        },
        {
          spec: { type: "number", value: 80 },
          feedback: "You subtracted £36,000 from £84,000 instead of adding it! Total contribution must cover Fixed Costs PLUS Target Profit.",
        },
      ],
      hints: [
        "Contribution per e-bike = £1,600 − £1,000 = £600.",
        "Target-profit output formula: (Fixed Costs + Target Profit) ÷ Contribution per unit.",
      ],
      solution: [
        "Contribution per cargo e-bike = £1,600 − £1,000 = £600.",
        "Required total contribution = Fixed Costs (£84,000) + Target Profit (£36,000) = £120,000.",
        "Output required = £120,000 ÷ £600 = **200** bikes.",
      ],
      commonError: "Calculating break-even output (140 bikes) and forgetting to add the £36,000 target profit to the numerator.",
    },
    {
      id: "exam-p1b-q20",
      topicId: "sources-cashflow-breakeven",
      guideRef: "cash-flow-forecasting",
      kind: "short",
      difficulty: "core",
      question:
        "**Loom & Thistle Knitwear Ltd** (29 employees) prepares its spring cash-flow forecast:\n\n| Item | March (£) | April (£) |\n|---|---|---|\n| Cash Inflows | 34,500 | 29,000 |\n| Cash Outflows | 26,000 | 27,400 |\n| Opening Bank Balance | (1,800) | **?** |\n\n*(Note: Brackets `(1,800)` denote a negative balance of −£1,800.)*\n\nCalculate the **Opening Bank Balance for April** (£).",
      answer: {
        type: "number",
        value: 6700,
        display: "£6,700",
      },
      traps: [
        {
          spec: { type: "number", value: 8500 },
          feedback: "£8,500 is March's Net Cash Flow (£34,500 − £26,000). Combine it with March's Opening Balance of −£1,800 to find March's Closing Balance (= April's Opening Balance)!",
        },
        {
          spec: { type: "number", value: 10300 },
          feedback: "Careful with brackets! `(1,800)` means **−£1,800**, so March Closing Balance = −£1,800 + £8,500 = £6,700 (not +£1,800 + £8,500).",
        },
        {
          spec: { type: "number", value: 8300 },
          feedback: "£8,300 is April's *Closing* Balance (£6,700 + £1,600) — the question asks for April's *Opening* Balance!",
        },
      ],
      hints: [
        "April's Opening Bank Balance is identical to **March's Closing Bank Balance**.",
        "March Net Cash Flow = £34,500 − £26,000 = £8,500; add this to March's Opening Balance of −£1,800.",
      ],
      solution: [
        "March Net Cash Flow = £34,500 − £26,000 = +£8,500.",
        "March Closing Bank Balance = −£1,800 + £8,500 = £6,700.",
        "April Opening Bank Balance = March Closing Bank Balance = **£6,700**.",
      ],
      commonError: "Treating `(1,800)` in brackets as +£1,800 instead of −£1,800, or giving April's Closing Balance instead of Opening Balance.",
    },
    {
      id: "exam-p1b-q21",
      topicId: "sources-cashflow-breakeven",
      guideRef: "breakeven-charts-mos",
      kind: "written",
      difficulty: "challenge",
      marks: 9,
      question:
        "**PeakTrail Custom Bikes** (11 employees) plans to invest £24,000 in welding jigs to launch a titanium gravel bike priced at £2,800. Partner Dev constructs a **break-even chart** showing a break-even point of 20 bikes per year and a forecast Margin of Safety of 12 bikes.\n\n**Assess** the usefulness of break-even analysis to PeakTrail Custom Bikes when making this launch decision. *(9 marks)*",
      hints: [
        "Analyse the *benefits* (visual target of 20 bikes, Margin of Safety cushion of 12 bikes = 37.5% buffer, quick 'what-if' modelling if titanium tubing prices rise and bank loan persuasion).",
        "Analyse the *limitations* in context (assumes every bike is sold at one identical £2,800 price whereas custom bikes vary in spec/discounts; assumes linear variable costs; static snapshot ignoring seasonal cycling demand), then weigh up an overall judgement!",
      ],
      modelAnswer:
        "Break-even analysis gives Hannah and Dev an immediate, clear sales target: PeakTrail needs fewer than two titanium bikes per month (20 per year) to cover the £24,000 jig investment, and a 12-bike Margin of Safety shows orders could drop by 37.5% (12 out of 32 forecast bikes) before incurring a loss. Dev can also run rapid 'what-if' sensitivity checks — for instance, testing how break-even shifts upward if imported titanium tubing rises in cost — and attach the chart to persuade a local bank to finance the welding jigs.\n\nHowever, standard break-even charts rely on simplifying assumptions that rarely hold in an 11-staff custom bike workshop. The model assumes every titanium bike sells at an identical £2,800 price and has constant unit variable cost, whereas bespoke riders choose different carbon wheels or gearing upgrades and trade buyers negotiate discounts, curving both revenue and cost lines. Crucially, break-even assumes every frame welded is actually sold and ignores cash-flow timing if frame deposits arrive months apart from supplier bills.\n\nOverall, break-even analysis is a valuable quick screening and risk-checking tool before committing £24,000, especially for testing titanium cost sensitivity, provided the partners treat the 20-bike figure as an estimate and pair it with market research and a monthly cash-flow forecast.",
      markScheme: [
        {
          point: "Explains clarity of target output (20 titanium bikes) and Margin of Safety risk buffer (12 bikes / 37.5% cushion before loss).",
          keywords: ["target", "buffer", "cushion", "37.5%", "before incurring a loss", "before making a loss"],
        },
        {
          point: "Explains 'what-if' sensitivity modelling (testing impact of rising titanium tubing costs or price changes).",
          keywords: ["what-if", "sensitivity", "titanium", "shift"],
        },
        {
          point: "Notes benefit for securing external finance (supporting a bank loan application for the £24,000 jigs).",
          keywords: ["bank", "lender", "loan", "persuade"],
        },
        {
          point: "Identifies key limitation: assumes a single selling price / straight-line revenue.",
          keywords: ["single price", "identical", "one price", "linear", "discount"],
        },
        {
          point: "Applies limitation to PeakTrail's bespoke bikes (custom wheel/gearing specs mean each bike has different prices and variable costs).",
          keywords: ["bespoke", "upgrade", "wheel", "gearing", "spec"],
        },
        {
          point: "Identifies limitation: assumes all output produced is sold (or ignores seasonal cycling demand / cash-flow timing).",
          keywords: ["actually sold", "all output", "cash-flow", "cash flow", "seasonal"],
        },
        {
          point: "Notes static nature / garbage-in-garbage-out if Dev's 32-bike demand forecast is over-optimistic.",
          keywords: ["forecast", "optimistic", "estimate", "inaccurate", "static"],
        },
        {
          point: "Forms a clear overall judgement on usefulness for the £24,000 launch decision.",
          keywords: ["overall", "valuable", "screening", "useful starting"],
        },
        {
          point: "Qualifies judgement with complementary tools needed (primary market research + cash-flow forecast).",
          keywords: ["market research", "pair it", "alongside", "combine"],
        },
      ],
      commonError: "Reciting generic textbook limitations without linking them to custom bike specifications (varying component prices) and the £24,000 jig outlay.",
    },

    // -------------------------------------------------------------------------
    // 6. FINANCE: ACCOUNTS & RATIOS (5 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1b-q22",
      topicId: "accounts-ratios",
      guideRef: "profitability-ratios",
      kind: "short",
      difficulty: "core",
      question:
        "**Loom & Thistle Knitwear Ltd** (29 employees) reports annual **Revenue of £320,000** and **Cost of Sales of £120,000**.\n\nCalculate Loom & Thistle's **Gross Profit Margin** as a percentage (**%**) to **1 decimal place**.",
      answer: {
        type: "number",
        value: 62.5,
        display: "62.5%",
      },
      traps: [
        {
          spec: { type: "number", value: 166.7, tolerance: 0.1 },
          feedback:
            "166.7% is the Markup (Gross Profit ÷ Cost of Sales × 100)! Gross Profit Margin divides Gross Profit (£200,000) by Revenue (£320,000).",
        },
        {
          spec: { type: "number", value: 37.5 },
          feedback: "37.5% is Cost of Sales ÷ Revenue! First subtract Cost of Sales from Revenue (£320,000 − £120,000 = £200,000 Gross Profit).",
        },
        {
          spec: { type: "number", value: 200000 },
          feedback: "£200,000 is Gross Profit in £ — divide by Revenue (£320,000) and multiply by 100 for Gross Profit Margin (%).",
        },
      ],
      hints: [
        "Step 1: Gross Profit = Revenue (£320,000) − Cost of Sales (£120,000).",
        "Step 2: Gross Profit Margin (%) = (Gross Profit ÷ Revenue) × 100.",
      ],
      solution: [
        "Gross Profit = £320,000 − £120,000 = £200,000.",
        "Gross Profit Margin = (£200,000 ÷ £320,000) × 100 = **62.5%**.",
      ],
      commonError: "Dividing by Cost of Sales (Markup = 166.7%) instead of Revenue (Gross Profit Margin = 62.5%).",
    },
    {
      id: "exam-p1b-q23",
      topicId: "accounts-ratios",
      guideRef: "financial-position",
      kind: "short",
      difficulty: "core",
      question:
        "Extract from the Statement of Financial Position of **Nyonya Spice Pantry Pte Ltd** (14 employees):\n\n| Item | S$ |\n|---|---|\n| Inventory (spices & glass jars) | 19,000 |\n| Trade Receivables | 16,500 |\n| Cash at Bank | 11,000 |\n| Trade Payables | 12,000 |\n| Bank Overdraft | 6,000 |\n\nCalculate **Working Capital (Net Current Assets)** in **S$**.",
      answer: {
        type: "number",
        value: 28500,
        display: "S$28,500",
      },
      traps: [
        {
          spec: { type: "number", value: 9500 },
          feedback: "Working Capital includes Inventory in Current Assets (S$46,500 − S$18,000) — only the Acid-Test Ratio excludes Inventory!",
        },
        {
          spec: { type: "number", value: 46500 },
          feedback: "S$46,500 is Total Current Assets — subtract Total Current Liabilities (S$12,000 + S$6,000 = S$18,000)!",
        },
        {
          spec: { type: "number", value: 2.58, tolerance: 0.02 },
          feedback: "2.58 : 1 is the Current Ratio (dividing). Working Capital *subtracts* Current Liabilities from Current Assets!",
        },
      ],
      hints: [
        "Add up all three Current Assets: Inventory + Trade Receivables + Cash.",
        "Add up both Current Liabilities (Trade Payables + Overdraft), then use Working Capital = Current Assets − Current Liabilities.",
      ],
      solution: [
        "Total Current Assets = S$19,000 + S$16,500 + S$11,000 = S$46,500.",
        "Total Current Liabilities = S$12,000 + S$6,000 = S$18,000.",
        "Working Capital = S$46,500 − S$18,000 = **S$28,500**.",
      ],
      commonError: "Dividing Current Assets by Current Liabilities (Current Ratio) instead of subtracting them for Working Capital.",
    },
    {
      id: "exam-p1b-q24",
      topicId: "accounts-ratios",
      guideRef: "roce-performance",
      kind: "short",
      difficulty: "challenge",
      question:
        "**Loom & Thistle Knitwear Ltd** (29 employees) reports the following figures at year-end:\n\n- **Operating Profit**: £45,000\n- **Total Equity (Shareholders' Funds)**: £170,000\n- **Non-Current Liabilities (long-term loan)**: £80,000\n\nCalculate **Return on Capital Employed (ROCE)** as a percentage (**%**).",
      answer: {
        type: "number",
        value: 18,
        display: "18%",
      },
      traps: [
        {
          spec: { type: "number", value: 26.47, tolerance: 0.05 },
          feedback:
            "You divided Operating Profit by Total Equity (£170,000) alone! Capital Employed = Total Equity (£170,000) + Non-Current Liabilities (£80,000) = £250,000.",
        },
        {
          spec: { type: "number", value: 50 },
          feedback: "You subtracted £80,000 from £170,000 instead of adding them! Capital Employed sums Equity + Non-Current Liabilities (£250,000).",
        },
        {
          spec: { type: "number", value: 250000 },
          feedback: "£250,000 is Capital Employed — now calculate (Operating Profit ÷ Capital Employed) × 100!",
        },
      ],
      hints: [
        "First find Capital Employed = Total Equity + Non-Current Liabilities.",
        "ROCE (%) = (Operating Profit ÷ Capital Employed) × 100.",
      ],
      solution: [
        "Capital Employed = £170,000 + £80,000 = £250,000.",
        "ROCE = (£45,000 ÷ £250,000) × 100 = **18%**.",
      ],
      commonError: "Omitting Non-Current Liabilities (£80,000) when calculating Capital Employed.",
    },
    {
      id: "exam-p1b-q25",
      topicId: "accounts-ratios",
      guideRef: "income-statement",
      kind: "mcq",
      difficulty: "core",
      question:
        "**BrightSpark Coding Tutors Ltd** (19 employees) had the same Gross Profit Margin of **68%** in both 2024 and 2025, yet its **Operating Profit Margin fell sharply from 19% to 9%** in 2025.\n\nWhat best explains why Gross Profit Margin stayed constant while Operating Profit Margin halved?",
      options: [
        "Cost of Sales per workbook more than doubled while classroom rent fell",
        "Corporation tax rates increased after Operating Profit had already been calculated",
        "Revenue rose faster than all direct and indirect costs combined",
        "Overhead expenses (such as Birmingham classroom rent, heating and marketing salaries) surged relative to revenue",
      ],
      answerIndex: 3,
      hints: [
        "What sits *between* Gross Profit and Operating Profit on the Statement of Comprehensive Income?",
        "Operating Profit = Gross Profit − Overhead Expenses (rent, admin, marketing, utilities).",
      ],
      explanation:
        "Because Gross Profit Margin was unchanged at 68%, direct Cost of Sales stayed strictly in proportion to revenue. A drop in Operating Profit Margin from 19% to 9% must therefore come from rising indirect overhead expenses (such as classroom rent, energy bills or admin salaries) between Gross Profit and Operating Profit.",
    },
    {
      id: "exam-p1b-q26",
      topicId: "accounts-ratios",
      guideRef: "profitability-ratios",
      kind: "written",
      difficulty: "challenge",
      marks: 9,
      question:
        "**Nyonya Spice Pantry Pte Ltd** (14 employees, Singapore) produces heritage Peranakan cooking pastes sold in gourmet grocers. Its Gross Profit Margin is 54%, while its **Operating Profit Margin** has slipped to **7.5%**. To lift Operating Profit Margin back above 14%, the managing director is comparing:\n\n- **Plan 1**: Switch from fresh Malaysian kampong chillies and shallots to **cheaper dehydrated bulk chilli powder** (cutting Cost of Sales by 15%).\n- **Plan 2**: Lease a **compact semi-automatic jar-labelling machine** (S$650/month) so two evening casual packers are no longer needed, trimming S$2,400/month from overhead wages.\n\n**Assess** which plan Nyonya Spice Pantry should choose to improve its Operating Profit Margin. *(9 marks)*",
      hints: [
        "Connect Plan 1 to GPM + OPM *if* sales hold, BUT spot the fatal brand damage to a *heritage gourmet Peranakan paste* if dehydrated powder ruins authentic flavour!",
        "Connect Plan 2 to net monthly overhead savings (S$2,400 − S$650 = S$1,750/month net gain!) while protecting recipe authenticity, weighed against redundancy/morale impact and machine breakdown risk.",
      ],
      modelAnswer:
        "Plan 1 directly lowers Cost of Sales by 15% without any capital commitment, immediately widening both Gross Profit Margin and Operating Profit Margin on every jar sold. However, Nyonya Spice Pantry competes in gourmet grocers on authentic Peranakan flavour; replacing fresh chillies with dehydrated powder ruins taste and aroma, risking customer backlash, delisting by premium retailers and a steep fall in sales that destroys total operating profit.\n\nPlan 2 leaves the prized recipe untouched and attacks indirect overheads instead: paying S$650 per month on the lease while cutting S$2,400 in casual packing wages delivers a net saving of S$1,750 per month (S$21,000 per year) without any upfront lump sum, directly lifting Operating Profit Margin and label consistency. However, redundancy among casual packers may hurt staff morale across the remaining 12 workers, and a mechanical breakdown on the single labeller could halt dispatch.\n\nOverall, Nyonya Spice Pantry should adopt Plan 2: for a 14-staff gourmet food brand, authentic ingredient quality is its core USP, so saving S$1,750 net per month via back-room automation is far safer than risking irreversible brand damage under Plan 1.",
      markScheme: [
        {
          point: "Explains how Plan 1 boosts Gross Profit Margin and flows through to Operating Profit Margin via lower Cost of Sales.",
          keywords: ["cost of sales", "gross profit margin", "widen", "direct cost"],
        },
        {
          point: "Analyses severe risk of Plan 1 in context (dehydrated powder ruins heritage Peranakan flavour / gourmet USP).",
          keywords: ["flavour", "taste", "authentic", "usp", "quality", "gourmet"],
        },
        {
          point: "Develops commercial consequence of Plan 1 (lost repeat customers / delisted by premium grocers, shrinking revenue).",
          keywords: ["repeat", "delist", "reputation", "fall in sales", "backlash"],
        },
        {
          point: "Uses figures on Plan 2: S$2,400 wage saving minus S$650 lease = S$1,750/month (or S$21,000/year) net expense cut.",
          keywords: ["1,750", "1750", "21,000", "21000", "net"],
        },
        {
          point: "Explains how Plan 2 raises Operating Profit Margin while preserving recipe quality and improving label consistency.",
          keywords: ["preserve", "untouched", "consistent", "overhead"],
        },
        {
          point: "Analyses drawback of Plan 2 (staff morale / redundancy anxiety in a small 14-person team or breakdown risk).",
          keywords: ["morale", "redundan", "anxiety", "jam", "breakdown"],
        },
        {
          point: "Notes cash-flow advantage of leasing the labeller (no large upfront lump sum for a small firm).",
          keywords: ["upfront", "lump sum", "smooth", "lease"],
        },
        {
          point: "Makes a clear, explicit recommendation between Plan 1 and Plan 2.",
          keywords: ["overall", "should adopt", "should choose", "recommend"],
        },
        {
          point: "Justifies choice by contrasting irreversible brand/USP damage against manageable back-office automation.",
          keywords: ["safer", "core usp", "irreversib", "outweigh", "protect"],
        },
      ],
      commonError: "Picking cheaper ingredients mechanically from the GPM formula without realising gourmet shoppers buy Nyonya Spice Pantry for authentic fresh flavour!",
    },

    // -------------------------------------------------------------------------
    // 7. MARKETING & BUSINESS OPERATIONS (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1b-q27",
      topicId: "marketing-and-operations",
      guideRef: "marketing-mix-4ps",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**PeakTrail Custom Bikes** (11 employees) calculates that a hand-welded gravel frame costs £900 in total to make and adds a fixed 45% percentage mark-up to set a selling price of £1,305.\n\nWhich **pricing strategy** is PeakTrail using?",
      options: [
        "Predatory pricing",
        "Cost-plus pricing",
        "Penetration pricing",
        "Promotional loss-leader pricing",
      ],
      answerIndex: 1,
      hints: [
        "Look at the exact method: Unit Cost (£900) **plus** a percentage mark-up (45%).",
        "Which pricing strategy guarantees every unit sold covers its cost plus a set margin, even if it ignores competitor prices?",
      ],
      explanation:
        "Adding a fixed percentage mark-up (45%) onto unit cost (£900) to reach £1,305 is cost-plus pricing. It is simple and guarantees profit per bespoke bike sold, though it ignores what competitors charge or how much cyclists are willing to pay.",
    },
    {
      id: "exam-p1b-q28",
      topicId: "marketing-and-operations",
      guideRef: "markets-ped-competition",
      kind: "short",
      difficulty: "core",
      question:
        "Total annual sales in Singapore's artisanal Peranakan cooking-paste niche market equal **S$3,840,000**. **Nyonya Spice Pantry Pte Ltd** (14 employees) achieves annual sales of **S$480,000** in this market.\n\nCalculate Nyonya Spice Pantry's **market share** as a percentage (**%**) to **1 decimal place**.",
      answer: {
        type: "number",
        value: 12.5,
        display: "12.5%",
      },
      traps: [
        {
          spec: { type: "number", value: 8 },
          feedback: "Upside down! Divide the firm's sales (S$480,000) by total market sales (S$3,840,000) × 100, not total market ÷ firm.",
        },
        {
          spec: { type: "number", value: 0.125 },
          feedback: "0.125 is the decimal proportion — multiply by 100 to express market share as a percentage (12.5%)!",
        },
        {
          spec: { type: "number", value: 14.29, tolerance: 0.05 },
          feedback: "Divide by *total* market sales (S$3,840,000), including Nyonya Spice Pantry's own sales — don't subtract S$480,000 from the denominator!",
        },
      ],
      hints: [
        "Formula: Market Share (%) = (Firm's Sales ÷ Total Market Sales) × 100.",
        "Compute (480,000 ÷ 3,840,000) × 100.",
      ],
      solution: [
        "Market Share = (S$480,000 ÷ S$3,840,000) × 100 = **12.5%**.",
      ],
      commonError: "Inverting the fraction (3,840,000 ÷ 480,000 = 8) or forgetting to multiply by 100.",
    },
    {
      id: "exam-p1b-q29",
      topicId: "marketing-and-operations",
      guideRef: "economies-scale-quality",
      kind: "mcq",
      difficulty: "core",
      question:
        "At **29-employee Loom & Thistle Knitwear Ltd**, every knitter and linker checks garment tension and seams at **their own stage** of production before passing a cardigan forward, rather than relying solely on one inspector at the packing bench.\n\nWhat is this approach to quality called, and what is its key advantage over end-of-line **Quality Control**?",
      options: [
        "Mass flow inspection — defective cardigans are deliberately shipped out to discount outlet stores",
        "Diseconomies of scale — hiring five extra workshop supervisors deliberately slows down daily knitting",
        "Quality Assurance — defects are caught at source, cutting wasted merino yarn and boosting staff pride",
        "Desk sampling — checking only one cardigan per month to eliminate all staff quality-training costs",
      ],
      answerIndex: 2,
      hints: [
        "Contrast checking finished goods at the very end (**Quality Control**) with building self-checking standards into every step (**Quality Assurance**).",
        "What happens to expensive merino wool waste if a dropped stitch is spotted immediately rather than after an entire jumper is finished?",
      ],
      explanation:
        "Embedding quality checks into every stage of production by the workers themselves is Quality Assurance. Spotting a dropped stitch immediately prevents wasting hours of linking and costly Italian merino yarn on a finished reject, while increasing worker ownership.",
    },
    {
      id: "exam-p1b-q30",
      topicId: "marketing-and-operations",
      guideRef: "production-lean-jit",
      kind: "written",
      difficulty: "challenge",
      marks: 12,
      question:
        "**Loom & Thistle Knitwear Ltd** (29 employees, Scottish Borders) currently holds **£42,000 of buffer stock** of dyed merino wool imported by lorry and ferry from northern Italy, renting an adjacent storeroom for **£7,800 per year**. To free up working capital, a new operations manager proposes switching to **Just-in-Time (JIT) inventory management**, ordering small weekly wool deliveries only as boutique orders arrive.\n\n**Evaluate** whether Loom & Thistle Knitwear Ltd should switch from holding buffer stock to Just-in-Time (JIT) production. *(12 marks — use AJIM evaluation)*",
      hints: [
        "Analyse the attractions of JIT (unlocks up to £42,000 tied-up working capital, saves £7,800/year storeroom rent, eliminates moth/damp damage and out-of-fashion dye colours).",
        "Analyse why JIT is perilous for a **29-employee Scottish mill importing from Italy** (cross-border ferry/weather delays halt all 29 knitters; loses bulk-shipping/purchasing discounts on tiny weekly drops; inability to meet sudden winter cold-snap orders), then deliver a full **AJIM** conclusion!",
      ],
      modelAnswer:
        "Switching to Just-in-Time (JIT) would unlock most of the £42,000 working capital currently frozen in dyed wool inventory, boosting Loom & Thistle's Acid-Test liquidity and freeing cash for knitwear marketing or loom upgrades. Giving up the adjacent storeroom also cuts £7,800 from annual fixed overheads and eliminates wastage from moth damage, damp or leftover seasonal dye shades that fall out of fashion.\n\nHowever, pure JIT carries severe supply-chain vulnerability for a 29-employee mill in the rural Scottish Borders relying on cross-border road-and-ferry shipments from northern Italy. Any Channel ferry strike, customs hold-up or winter storm would starve the knitting machines of yarn, forcing Loom & Thistle to pay 29 skilled staff to stand idle and miss crucial autumn boutique delivery windows. Moreover, ordering tiny weekly wool drops sacrifices supplier bulk-delivery discounts and raises transport unit costs, potentially wiping out the £7,800 rent saving.\n\nOverall, Loom & Thistle should NOT switch to pure Just-in-Time, and should instead retain a leaner strategic buffer stock of core neutral yarns (Answer). Unlike a giant car factory surrounded by local tier-1 suppliers, a small 29-staff rural mill has minimal bargaining power over Italian spinners to guarantee split-second deliveries, and one missed autumn shipment could permanently lose US and UK boutique stockists (Justify). The optimal stock level depends on lead-time reliability from the Italian mill and whether seasonal colour trends can be forecast accurately from spring trade-fair pre-orders (It depends on). Ultimately, continuity of production across an international supply chain outweighs the £7,800 warehouse saving for a small specialist knitwear manufacturer (Most important).",
      markScheme: [
        {
          point: "Analyses working-capital / liquidity benefit of JIT (frees up to £42,000 cash tied up in wool stock / improves Acid-Test ratio).",
          keywords: ["42,000", "42000", "working capital", "tied up", "acid-test", "liquidity"],
        },
        {
          point: "Uses overhead/waste benefit in context (saves £7,800/year storeroom rent + avoids moth/damp damage or obsolete seasonal dye colours).",
          keywords: ["7,800", "7800", "storeroom", "moth", "obsolete", "fashion"],
        },
        {
          point: "Analyses cross-border supply-chain risk for rural Scotland ← northern Italy (ferry delays, customs or winter weather).",
          keywords: ["ferry", "customs", "cross-border", "delay", "storm", "disrupt"],
        },
        {
          point: "Develops operational impact of stock-outs (29 skilled workers paid while idle + missed boutique delivery deadlines).",
          keywords: ["idle", "halt", "stoppage", "deadline", "boutique"],
        },
        {
          point: "Analyses loss of bulk-purchasing / frequent small-delivery freight costs wiping out rent savings.",
          keywords: ["bulk", "discount", "freight", "transport cost", "delivery cost"],
        },
        {
          point: "Analyses small-firm bargaining weakness (29-staff mill lacks clout over overseas Italian suppliers to enforce strict JIT schedules).",
          keywords: ["bargaining power", "clout", "small", "leverage"],
        },
        {
          point: "Notes loss of responsiveness to sudden winter cold-snap re-orders without buffer stock.",
          keywords: ["sudden", "surge", "rush order", "re-order", "winter"],
        },
        {
          point: "AJIM — Answer: states a clear recommendation (reject pure JIT / adopt hybrid lean buffer for core yarns).",
          keywords: ["should not", "reject pure", "leaner", "hybrid", "overall"],
        },
        {
          point: "AJIM — Justify: contrasts rural cross-border SME vulnerability against local-supplier factory conditions needed for JIT.",
          keywords: ["unlike", "tier-1", "international supply", "permanently lose"],
        },
        {
          point: "AJIM — It depends on (1): reliability/lead time of Italian yarn supplier or customs friction.",
          keywords: ["depends on", "lead-time", "lead time", "reliab"],
        },
        {
          point: "AJIM — It depends on (2): predictability of seasonal pre-orders / core vs fashion dye colours.",
          keywords: ["pre-order", "predictab", "core neutral", "seasonal"],
        },
        {
          point: "AJIM — Most important factor: concludes why production continuity / customer reliability outweighs £7,800 storage cost.",
          keywords: ["ultimately", "continuity", "outweigh", "most important", "decisive"],
        },
      ],
      commonError: "Praising JIT textbook savings without noticing that shipping wool from Italy to rural Scotland gives a 29-staff mill long, fragile lead times!",
    },
  ],
};
