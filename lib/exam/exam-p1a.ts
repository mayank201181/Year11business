import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p1a",
  title: "Paper 1A: Investigating Small Business (< 50 Employees — Mock A)",
  calculator: true,
  minutes: 90,
  questions: [
    // -------------------------------------------------------------------------
    // 1. BUSINESS ACTIVITY (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1a-q01",
      topicId: "business-activity",
      guideRef: "unincorporated-incorporated",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**BotaniGlow Eco-Skincare Ltd** employs 9 staff in Brighton, manufacturing organic facial oils with £85,000 in annual share capital. One director suggests raising £40,000 by advertising shares to the general public on the London Stock Exchange.\n\nWhy is this method of raising finance **not legally possible** for BotaniGlow Eco-Skincare Ltd in its current form?",
      options: [
        "Private limited companies cannot sell shares on a public stock exchange; shares can only be transferred privately with existing shareholders' agreement.",
        "Incorporated businesses with fewer than 50 employees have unlimited liability and therefore cannot issue any share capital.",
        "Only sole traders and partnerships are allowed to list shares on an alternative public stock market.",
        "Private limited companies are owned by the government and must fund all expansion from tax revenue.",
      ],
      answerIndex: 0,
      hints: [
        "Look closely at the suffix 'Ltd' — is BotaniGlow a private limited company or a public limited company (Plc)?",
        "Check who is legally allowed to buy shares in an Ltd versus a Plc.",
      ],
      explanation:
        "As a private limited company (Ltd), BotaniGlow can only issue shares privately to invited investors (such as family, friends or business angels) with the consent of existing shareholders. Only a public limited company (Plc), which requires substantial minimum share capital and strict regulatory disclosure unsuitable for a 9-staff firm, can float shares to the general public on a stock exchange.",
    },
    {
      id: "exam-p1a-q02",
      topicId: "business-activity",
      guideRef: "business-objectives",
      kind: "mcq",
      difficulty: "core",
      question:
        "**Copper Kettle Roasters** opened four months ago in Leeds as an independent coffee bar with 6 employees. Two national coffee chains operate on the same street.\n\nWhich primary objective is **most realistic** for Copper Kettle Roasters during its first 12 months of trading?",
      options: [
        "Paying record annual dividends to institutional stock-market shareholders",
        "Achieving business survival by generating enough cash inflows to cover rent, wages and bean suppliers",
        "Acquiring both national coffee chains through a hostile takeover",
        "Becoming the UK market-share leader in roasted coffee within six months",
      ],
      answerIndex: 1,
      hints: [
        "Think about the biggest threat facing a brand-new 6-employee café surrounded by established rivals.",
        "Before a start-up can chase market dominance or expansion, what must it achieve first to avoid insolvency?",
      ],
      explanation:
        "New small start-ups face high initial set-up costs, low brand awareness and fierce competition, so survival — keeping cash inflows sufficient to pay immediate bills — is the overriding Year 1 objective. Stock-market dividends and hostile takeovers apply to large PLCs rather than a 6-staff independent café.",
    },
    {
      id: "exam-p1a-q03",
      topicId: "business-activity",
      guideRef: "unincorporated-incorporated",
      kind: "short",
      difficulty: "warmup",
      question:
        "Tariq runs **GreenEdge Garden Design** as a **sole trader** with 4 employees. Because the business has no separate legal identity from Tariq, his personal savings and car could be seized to pay trade suppliers if the business fails.\n\nState the **two-word legal term** that describes Tariq's financial responsibility for business debts.",
      answer: {
        type: "text",
        accept: ["unlimited liability"],
        display: "unlimited liability",
      },
      traps: [
        {
          spec: { type: "text", accept: ["limited liability"] },
          feedback:
            "Careful — limited liability protects incorporated shareholders (Ltd/Plc) so they only risk what they invested. A sole trader risks personal assets too!",
        },
      ],
      hints: [
        "An unincorporated sole trader has no legal boundary between business debts and personal possessions.",
        "Contrast 'limited liability' (for Ltds) with its opposite for sole traders and ordinary partnerships.",
      ],
      solution: [
        "A sole trader is unincorporated, meaning there is no separate legal identity between Tariq and GreenEdge Garden Design.",
        "Therefore Tariq has **unlimited liability** — his personal assets can be used to settle unpaid business debts.",
      ],
      commonError: "Confusing unlimited liability (sole traders/partnerships) with limited liability (Ltd/Plc).",
    },
    {
      id: "exam-p1a-q04",
      topicId: "business-activity",
      guideRef: "stakeholders-conflicts",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "**Hearth & Crumb Bakery** is an artisan sourdough bakery in Bristol employing 18 staff. The two co-owners decide to freeze staff hourly pay for 12 months so they can retain £28,000 to buy an energy-efficient electric deck oven.\n\n**Explain** one stakeholder conflict caused by this decision. *(3 marks)*",
      hints: [
        "Identify the exact goal of the co-owners versus the conflicting goal of the 18 bakery staff.",
        "Build a 3-step chain of reasoning (AO1/AO2 → linked consequence → outcome on conflict/morale).",
      ],
      modelAnswer:
        "The co-owners want to minimise wage costs so they can reinvest retained earnings into upgrading bakery equipment and boosting long-term profitability. However, the baker and counter staff want higher hourly wages to keep pace with rising living costs, creating resentment that may lower staff morale or increase labour turnover.",
      markScheme: [
        {
          point: "Identifies the owners' objective (controlling wage costs / funding reinvestment or long-term profit).",
          keywords: ["reinvest", "profit", "lower cost", "wage cost", "retain", "long-term"],
        },
        {
          point: "Contrasts with employees' objective (higher wages / maintaining real income / standard of living).",
          keywords: ["higher wage", "higher pay", "living cost", "cost of living", "standard of living", "income"],
        },
        {
          point: "Develops the resulting clash or business impact (e.g. falling morale, industrial tension or staff leaving).",
          keywords: ["morale", "turnover", "demotivat", "resent", "dispute", "leave", "quit"],
        },
      ],
      commonError: "Describing only one stakeholder group without explaining why both goals cannot be satisfied simultaneously.",
    },

    // -------------------------------------------------------------------------
    // 2. LOCATION, GLOBALISATION & EXTERNAL FACTORS (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1a-q05",
      topicId: "location-globalisation-external",
      guideRef: "location-decisions",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**PixelCraft Studio** is a 7-employee web-design agency serving small-business clients across the UK via video calls and cloud software. Unlike a high-street hairdresser, PixelCraft is described as **footloose**.\n\nWhich location factor is **most important** for PixelCraft Studio?",
      options: [
        "Being right next to raw iron-ore and coal deposits to cut bulk transport costs",
        "Renting a ground-floor unit on a crowded shopping street with heavy pedestrian footfall",
        "Fast, reliable broadband connectivity combined with affordable office rent",
        "Locating inside an international container port for daily shipping tankers",
      ],
      answerIndex: 2,
      hints: [
        "What does 'footloose' mean when clients never need to walk past a physical shop window?",
        "How does a 7-person web-design team deliver work to clients while keeping fixed overheads low?",
      ],
      explanation:
        "Because PixelCraft delivers digital services online rather than relying on passing shoppers or heavy raw materials, it does not need expensive high-street footfall. High-speed digital infrastructure and low rent keep fixed costs down while allowing seamless client work.",
    },
    {
      id: "exam-p1a-q06",
      topicId: "location-globalisation-external",
      guideRef: "trade-exchange-rates",
      kind: "short",
      difficulty: "core",
      question:
        "**BotaniGlow Eco-Skincare Ltd** (9 employees, UK) imports **1,500 amber glass dropper bottles** from a specialist supplier in France priced at **€1.92 per bottle**.\n\nThe exchange rate is **£1 = €1.20**.\n\nCalculate the total cost of the order in pounds (**£**).",
      answer: {
        type: "number",
        value: 2400,
        display: "£2,400",
      },
      traps: [
        {
          spec: { type: "number", value: 3456 },
          feedback:
            "You multiplied €2,880 by 1.20 instead of dividing! Since £1 buys €1.20, converting euros back into pounds requires dividing by 1.20.",
        },
        {
          spec: { type: "number", value: 2880 },
          feedback: "£2,880 is the total in euros (€2,880) — divide by the exchange rate (1.20) to convert into pounds (£).",
        },
        {
          spec: { type: "number", value: 1.6 },
          feedback: "£1.60 is the price of a single bottle in pounds — multiply by all 1,500 bottles!",
        },
      ],
      hints: [
        "First find the total order price in euros: 1,500 × €1.92.",
        "Since £1 = €1.20, divide the euro total by 1.20 to convert back into £.",
      ],
      solution: [
        "Total cost in euros = 1,500 × €1.92 = €2,880.",
        "Convert € to £ by dividing by 1.20: €2,880 ÷ 1.20 = **£2,400**.",
      ],
      commonError: "Multiplying by 1.20 instead of dividing when converting foreign currency back into domestic currency (£).",
    },
    {
      id: "exam-p1a-q07",
      topicId: "location-globalisation-external",
      guideRef: "government-policies",
      kind: "mcq",
      difficulty: "core",
      question:
        "**Cotswold Bespoke Kitchens** employs 14 cabinetmakers and fits custom timber kitchens priced around £18,000, which homeowners usually fund using home-improvement loans. The central bank raises base **interest rates** from 3.5% to 5.25%.\n\nWhat is the **most likely** combination of impacts on Cotswold Bespoke Kitchens?",
      options: [
        "Lower monthly repayments on its existing variable-rate overdraft and surging demand for luxury kitchens",
        "Lower corporation tax bills and cheaper imported timber from Scandinavia",
        "Guaranteed government grants covering all workshop wages",
        "Higher interest charges on variable-rate borrowing and falling customer orders as household credit becomes dearer",
      ],
      answerIndex: 3,
      hints: [
        "Consider both sides: how higher interest rates affect the firm's own variable borrowing AND homeowners' willingness to borrow £18,000 for a new kitchen.",
        "Big-ticket discretionary purchases are sensitive to mortgage and loan costs.",
      ],
      explanation:
        "Higher central bank interest rates raise the cost of variable-rate overdrafts and loans for the 14-staff workshop while also increasing mortgage payments and consumer loan costs for households, reducing discretionary spending on £18,000 custom kitchens.",
    },
    {
      id: "exam-p1a-q08",
      topicId: "location-globalisation-external",
      guideRef: "external-pestle-ethics",
      kind: "written",
      difficulty: "core",
      marks: 6,
      question:
        "**BotaniGlow Eco-Skincare Ltd** (9 employees, Brighton) currently buys standard plastic lotion pumps from an overseas wholesaler. The directors plan to switch 100% of products to certified refillable bamboo-and-glass jars and fair-trade shea butter, increasing variable unit costs by 18%.\n\n**Analyse** the likely impact of this ethical decision on BotaniGlow Eco-Skincare Ltd. *(6 marks)*",
      hints: [
        "Edexcel 6-mark 'Analyse' needs two developed chains of reasoning (or one benefit + one drawback) fully applied to BotaniGlow's 9-staff skincare context.",
        "Connect the ethical USP to brand differentiation and price inelasticity on one side, and the +18% unit cost to profit margins or break-even output on the other.",
      ],
      modelAnswer:
        "Switching to refillable glass-and-bamboo jars strengthens BotaniGlow's ethical brand image among eco-conscious skincare buyers in Brighton. This clear unique selling point makes demand less price sensitive, allowing the small firm to charge a premium price and build loyal repeat sales against mass-market cosmetics brands.\n\nHowever, a sharp rise in variable packaging and ingredient costs will squeeze BotaniGlow's gross profit margin unless selling prices are raised by at least the same amount. Because a 9-staff firm buys in small batches without purchasing economies of scale, passing all of the extra cost onto shoppers risks pricing budget-conscious customers out and raising its break-even output.",
      markScheme: [
        {
          point: "Identifies an ethical marketing advantage (stronger brand image / unique selling point / avoids greenwashing criticism).",
          keywords: ["brand image", "reputation", "unique selling point", "usp", "differenti", "loyal"],
        },
        {
          point: "Applies to skincare market / eco-conscious shoppers willing to pay more (lower price sensitivity / premium pricing).",
          keywords: ["premium price", "price inelastic", "less price sensitive", "skincare", "eco-conscious", "higher price"],
        },
        {
          point: "Links benefit to commercial outcome (repeat custom, revenue growth or competitive edge over mass-market brands).",
          keywords: ["repeat", "revenue", "sales", "competitive advantage", "mass-market"],
        },
        {
          point: "Identifies the financial drawback of higher costs (squeezed gross profit margin or lower contribution per unit).",
          keywords: ["gross profit margin", "profit margin", "contribution", "squeeze", "narrow"],
        },
        {
          point: "Applies small-firm constraint (9 staff / small orders mean no bulk-buying economies of scale).",
          keywords: ["economies of scale", "bulk", "small batch", "small firm"],
        },
        {
          point: "Develops financial consequence (higher break-even point or lost sales if prices are increased too far).",
          keywords: ["break-even", "breakeven", "price out", "pricing", "fewer sales", "lose customer"],
        },
      ],
      commonError: "Writing generic statements ('it is good for the planet') without linking to BotaniGlow's costs, pricing power, and small-batch scale.",
    },

    // -------------------------------------------------------------------------
    // 3. PEOPLE: COMMUNICATION, RECRUITMENT & TRAINING (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1a-q09",
      topicId: "people-communication-recruitment",
      guideRef: "recruitment-selection",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**VeloPulse Indoor Cycling Studio** (12 employees, Singapore) is recruiting a weekend spin coach. The studio manager writes two recruitment documents: one listing duties, hours and S$28/hour pay, and a second listing essential cycling certifications, first-aid qualification and energetic coaching personality.\n\nWhat is the correct name for the **second document** (listing qualifications, skills and personal qualities)?",
      options: [
        "Person specification",
        "Contract of employment",
        "Curriculum vitae (CV)",
        "Job description",
      ],
      answerIndex: 0,
      hints: [
        "Separate the document about the *post* (duties, pay, reporting line) from the document about the *candidate* (qualifications, experience, qualities).",
        "Which recruitment document specifies the ideal *person*?",
      ],
      explanation:
        "A person specification sets out the essential and desirable qualifications, experience, skills and personal attributes required of the ideal candidate. A job description outlines the role itself (title, tasks, hours and pay), whereas a CV is submitted by the applicant.",
    },
    {
      id: "exam-p1a-q10",
      topicId: "people-communication-recruitment",
      guideRef: "training-employment-law",
      kind: "short",
      difficulty: "warmup",
      question:
        "**Hearth & Crumb Bakery** (18 employees) hires three new weekend counter assistants. Before serving any customers on their first morning, they spend three hours touring the bakehouse, learning fire-exit routes, food-allergen rules and meeting the team.\n\nName this type of introductory training.",
      answer: {
        type: "text",
        accept: ["induction training", "induction"],
        display: "induction training",
      },
      traps: [
        {
          spec: { type: "text", accept: ["off-the-job training", "off the job training", "off-the-job"] },
          feedback:
            "Off-the-job training takes place away from the normal workplace (e.g. an external college course). First-day workplace orientation for new hires is induction training!",
        },
        {
          spec: { type: "text", accept: ["on-the-job training", "on the job training", "on-the-job"] },
          feedback:
            "More specific! First-day orientation covering health & safety, fire exits, policies and team introductions for new starters has its own Edexcel term: induction training.",
        },
      ],
      hints: [
        "This specific training happens when a new starter first joins an organisation to help them settle in safely.",
        "It covers workplace tour, health and safety, allergen rules and team introductions.",
      ],
      solution: [
        "First-day orientation introducing new recruits to workplace layout, safety procedures, policies and colleagues is **induction training**.",
      ],
      commonError: "Writing 'on-the-job training' instead of the specific term 'induction training' for new-starter orientation.",
    },
    {
      id: "exam-p1a-q11",
      topicId: "people-communication-recruitment",
      guideRef: "barriers-to-communication",
      kind: "mcq",
      difficulty: "core",
      question:
        "**Kestrel Precision Parts** employs 32 workers in Sheffield making bespoke aerospace valves. Two CAD engineers email 12-page technical specification sheets full of unfamiliar abbreviations to workshop machinists, resulting in 40 valves being cut to the wrong tolerance.\n\nWhich **barrier to communication** primarily caused this costly error?",
      options: [
        "Excessive geographical time-zone differences across continents",
        "Use of complex technical jargon and information overload without two-way feedback",
        "Too many layers of multinational regional directors distorting verbal messages",
        "Failure of public social-media advertising channels",
      ],
      answerIndex: 1,
      hints: [
        "All 32 staff work in Sheffield, so it isn't global time zones or a giant MNC hierarchy.",
        "Look at *how* the instructions were written: 12 pages of dense abbreviations with no check that machinists understood.",
      ],
      explanation:
        "Sending 12-page emails packed with specialist CAD abbreviations creates technical jargon and information overload, while the lack of a brief face-to-face handover prevents two-way feedback to confirm understanding before machining starts.",
    },
    {
      id: "exam-p1a-q12",
      topicId: "people-communication-recruitment",
      guideRef: "recruitment-selection",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "**VeloPulse Indoor Cycling Studio** (12 employees, Singapore) experiences 80% of its class bookings between 6:30–8:30 am and 6:00–8:30 pm, with quiet afternoons.\n\n**Explain** one advantage to VeloPulse of employing spin instructors on **part-time contracts** rather than full-time contracts. *(3 marks)*",
      hints: [
        "Match staffing hours to VeloPulse's sharp morning and evening demand peaks.",
        "Link flexible scheduling → avoiding idle wage costs in quiet afternoons → lower unit labour costs / higher profit.",
      ],
      modelAnswer:
        "Part-time contracts give VeloPulse workforce flexibility to schedule instructors purely during peak early-morning and evening rush classes. Consequently, the studio avoids paying fixed full-time salaries for idle staff during quiet mid-afternoon hours, keeping wage expenses low and protecting operating profit.",
      markScheme: [
        {
          point: "Identifies staffing flexibility to match peak class times.",
          keywords: ["flexib", "peak", "rush", "match demand", "busy hour"],
        },
        {
          point: "Explains avoidance of paying staff when classes are empty / idle afternoon periods.",
          keywords: ["idle", "empty", "unoccupied", "wasted hour", "dead time", "quiet hour", "mid-afternoon"],
        },
        {
          point: "Links to financial benefit (lower wage costs, improved cash flow or higher operating profit).",
          keywords: ["wage cost", "labour cost", "operating profit", "save money", "lower cost", "overhead"],
        },
      ],
      commonError: "Stating 'part-time workers are cheaper' without explaining *why* (matching hours to peak spin-class demand and avoiding idle afternoon pay).",
    },

    // -------------------------------------------------------------------------
    // 4. PEOPLE: MOTIVATION & ORGANISATION (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1a-q13",
      topicId: "motivation-organisation",
      guideRef: "motivation-theories",
      kind: "mcq",
      difficulty: "core",
      question:
        "**Willowbrook Dental Practice** employs 24 staff. The practice principal wants to apply **Frederick Herzberg's Two-Factor Theory** to genuinely motivate experienced dental nurses rather than merely preventing dissatisfaction.\n\nAccording to Herzberg, which initiative acts as a true **motivator**?",
      options: [
        "Repainting the staff break room and repairing the air-conditioning unit",
        "Ensuring monthly payslips arrive on time without payroll errors",
        "Issuing an updated health-and-safety handbook for clinical waste",
        "Empowering experienced dental nurses to design and lead children's preventative oral-health workshops",
      ],
      answerIndex: 3,
      hints: [
        "Separate Herzberg's **hygiene factors** (working conditions, basic pay administration, policies) from **motivators** (responsibility, achievement, personal growth).",
        "Which option enriches the nurses' role with real autonomy and challenge?",
      ],
      explanation:
        "In Herzberg's Two-Factor Theory, clean break rooms, accurate payroll and safety policies are hygiene factors — their absence causes dissatisfaction, but their presence alone does not motivate. Giving dental nurses responsibility and autonomy to run patient workshops provides job enrichment, a true motivator.",
    },
    {
      id: "exam-p1a-q14",
      topicId: "motivation-organisation",
      guideRef: "organisational-charts",
      kind: "short",
      difficulty: "warmup",
      question:
        "**Harbourside Florist** employs **25 people** in total:\n- **1** Owner-Manager (Mei)\n- **3** Team Leaders who report directly to Mei\n- **21** Florists and Delivery Drivers split **equally** under the 3 Team Leaders\n\nCalculate the **span of control** of **each Team Leader**.",
      answer: {
        type: "number",
        value: 7,
        display: "7 subordinates",
      },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "3 is Mei's (the Owner-Manager's) span of control — the question asks for each Team Leader's span of control!",
        },
        {
          spec: { type: "number", value: 21 },
          feedback: "21 is the total number of florists and drivers across all 3 Team Leaders — divide equally by 3!",
        },
        {
          spec: { type: "number", value: 25 },
          feedback: "25 is the entire workforce. Span of control is the number of subordinates reporting directly to one Team Leader.",
        },
      ],
      hints: [
        "Span of control means the number of subordinates who report *directly* to one manager/supervisor.",
        "21 florists and drivers are divided equally among 3 Team Leaders.",
      ],
      solution: [
        "Each Team Leader directly supervises an equal share of the 21 florists and drivers.",
        "Span of control per Team Leader = 21 ÷ 3 = **7** subordinates.",
      ],
      commonError: "Giving the owner's span of control (3) or total layers of hierarchy (3) instead of subordinates per Team Leader (21 ÷ 3 = 7).",
    },
    {
      id: "exam-p1a-q15",
      topicId: "motivation-organisation",
      guideRef: "centralisation-leadership",
      kind: "mcq",
      difficulty: "core",
      question:
        "**Arbor Studio** is an 11-employee architectural firm in Edinburgh designing bespoke zero-carbon homes. Every project requires creative problem-solving from qualified architects and structural engineers.\n\nWhy is a **democratic leadership style** likely to be more effective at Arbor Studio than an autocratic style?",
      options: [
        "Qualified architects need constant supervision because bespoke design involves repetitive, unskilled assembly tasks",
        "Consultative decision-making eliminates any need to meet client deadlines or building regulations",
        "Involving skilled architects in design decisions taps specialist expertise and boosts ownership and creativity",
        "Democratic leadership guarantees every decision is made instantly without team discussion during emergencies",
      ],
      answerIndex: 2,
      hints: [
        "Consider the skill level of Arbor Studio's 11 employees and the creative nature of bespoke zero-carbon homes.",
        "How do highly trained professionals respond when consulted versus micro-managed?",
      ],
      explanation:
        "Highly qualified architects possess specialist technical and creative insight; consulting them improves bespoke eco-design quality while fulfilling higher-order esteem and autonomy needs. Autocratic micro-management would stifle creativity and alienate skilled professionals.",
    },
    {
      id: "exam-p1a-q16",
      topicId: "motivation-organisation",
      guideRef: "financial-rewards",
      kind: "written",
      difficulty: "challenge",
      marks: 6,
      question:
        "**Kestrel Precision Parts** (32 employees, Sheffield) manufactures high-tolerance steel valves for medical oxygen tanks. Currently, workshop machinists earn a time-rate wage of £14.50 per hour. To raise output, the operations partner proposes switching machinists solely to **piece-rate pay** (£3.80 per valve produced).\n\n**Analyse** the likely impact on Kestrel Precision Parts of switching to piece-rate pay. *(6 marks)*",
      hints: [
        "Weigh Taylor's link between output and pay (productivity gain) against the severe quality risk in *medical oxygen valves*!",
        "Develop two clear chains of reasoning anchored in Kestrel's 32-staff precision engineering context.",
      ],
      modelAnswer:
        "Tying machinists' pay directly to every valve completed creates a strong financial incentive aligned with F.W. Taylor's theory, encouraging faster machining and fewer wasted minutes. Higher weekly labour productivity spreads Kestrel's fixed workshop rent across more units, lowering average unit cost and helping meet urgent customer orders.\n\nConversely, because Kestrel produces safety-critical medical oxygen valves, machinists rushing to maximise piece-rate earnings may cut corners on micrometre tolerance checks. Rising defect rates would mean scrapped steel, expensive rework, or failed client safety audits that could destroy the 32-staff firm's reputation.",
      markScheme: [
        {
          point: "Identifies financial incentive / Taylorist link between output and earnings.",
          keywords: ["taylor", "incentive", "faster", "more output", "productivity"],
        },
        {
          point: "Develops operational/cost benefit (higher labour productivity lowers average unit cost or meets order deadlines).",
          keywords: ["unit cost", "fixed", "spread", "deadline", "urgent order"],
        },
        {
          point: "Identifies the quality / rushing risk of piece-rate pay.",
          keywords: ["rush", "cut corner", "quality", "defect", "mistake", "error"],
        },
        {
          point: "Applies directly to Kestrel's precision medical valve context.",
          keywords: ["oxygen", "medical", "safety-critical", "micrometre", "precision"],
        },
        {
          point: "Develops cost/reputation consequence of defects (scrap waste, rework, product recall or lost contracts).",
          keywords: ["scrap", "rework", "waste", "reputation", "audit", "contract"],
        },
        {
          point: "Notes impact on machinist income security or inspection overheads (extra quality control checks needed).",
          keywords: ["inspection", "quality control", "stress", "machine breakdown", "check"],
        },
      ],
      commonError: "Praising higher output under piece-rate without spotting that rushing precision medical valves risks catastrophic quality defects.",
    },

    // -------------------------------------------------------------------------
    // 5. FINANCE: SOURCES, CASH FLOW & BREAK-EVEN (5 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1a-q17",
      topicId: "sources-cashflow-breakeven",
      guideRef: "internal-external-finance",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**Hearth & Crumb Bakery** (18 employees) supplies sourdough platters to six Bristol hotels on 30-day credit terms. This Friday, the bakery must pay £3,200 for organic flour and wages, leaving a temporary 12-day cash shortfall until hotel invoices are settled.\n\nWhich source of finance is **most suitable** to cover this 12-day shortfall?",
      options: [
        "Arranging a flexible bank overdraft facility",
        "Taking out a 20-year commercial property mortgage",
        "Selling its main commercial bread oven in a sale-and-scrap deal",
        "Floating shares on the stock exchange through an initial public offering",
      ],
      answerIndex: 0,
      hints: [
        "Match the *time horizon* of the finance to a 12-day working-capital gap.",
        "Which short-term external facility charges interest only on the exact daily amount overdrawn and clears automatically once hotel payments arrive?",
      ],
      explanation:
        "A bank overdraft is flexible short-term external finance designed for temporary cash-flow timing gaps: Hearth & Crumb only pays interest for the 12 days its account is negative, and the balance clears as soon as the hotel credit invoices arrive. A 20-year mortgage is for long-term property, selling essential ovens halts baking, and an IPO is impossible for a small bakery.",
    },
    {
      id: "exam-p1a-q18",
      topicId: "sources-cashflow-breakeven",
      guideRef: "cash-flow-forecasting",
      kind: "short",
      difficulty: "core",
      question:
        "**Hearth & Crumb Bakery** (18 employees) prepares its cash-flow forecast for **November**:\n\n| Cash-Flow Item | November (£) |\n|---|---|\n| Total Cash Inflows | 18,600 |\n| Total Cash Outflows | 21,500 |\n| Opening Bank Balance | 1,500 |\n\nCalculate the **Closing Bank Balance** (£) at the end of November. *(Include a minus sign if the balance is negative.)*",
      answer: {
        type: "number",
        value: -1400,
        display: "−£1,400",
      },
      traps: [
        {
          spec: { type: "number", value: -2900 },
          feedback: "−£2,900 is the Net Cash Flow (Inflows − Outflows). Remember to add the Opening Bank Balance of £1,500!",
        },
        {
          spec: { type: "number", value: 1400 },
          feedback: "Watch the sign! Outflows (£21,500) exceed inflows (£18,600) by £2,900, pushing the £1,500 opening balance into a −£1,400 deficit.",
        },
        {
          spec: { type: "number", value: 4400 },
          feedback: "Since Cash Outflows are larger than Cash Inflows, Net Cash Flow is −£2,900 (not +£2,900). Add −£2,900 to £1,500.",
        },
      ],
      hints: [
        "Step 1: Net Cash Flow = Total Cash Inflows − Total Cash Outflows.",
        "Step 2: Closing Balance = Opening Balance + Net Cash Flow (watch negative signs carefully!).",
      ],
      solution: [
        "Net Cash Flow = £18,600 − £21,500 = −£2,900.",
        "Closing Bank Balance = £1,500 + (−£2,900) = **−£1,400**.",
      ],
      commonError: "Stopping at Net Cash Flow (−£2,900) or omitting the minus sign on an overdrawn closing balance.",
    },
    {
      id: "exam-p1a-q19",
      topicId: "sources-cashflow-breakeven",
      guideRef: "breakeven-calculation",
      kind: "short",
      difficulty: "core",
      question:
        "**VeloPulse Indoor Cycling Studio** (12 employees, Singapore) sells unlimited monthly ride memberships using the following monthly cost and price data:\n\n- Selling price per monthly membership: **S$120**\n- Variable cost per membership (towel laundry, chilled electrolyte bottle, payment gateway fee): **S$24**\n- Monthly fixed costs (studio lease, bike maintenance contract, staff salaries, insurance): **S$57,600**\n\nCalculate the monthly **break-even output** (number of memberships).",
      answer: {
        type: "number",
        value: 600,
        display: "600 units",
      },
      traps: [
        {
          spec: { type: "number", value: 480 },
          feedback:
            "You divided Fixed Costs by Selling Price (57,600 ÷ 120)! Always divide Fixed Costs by Contribution per unit (Selling Price − Variable Cost = S$96).",
        },
        {
          spec: { type: "number", value: 2400 },
          feedback: "You divided Fixed Costs by Variable Cost (57,600 ÷ 24) instead of Contribution per unit (120 − 24 = 96).",
        },
        {
          spec: { type: "number", value: 96 },
          feedback: "S$96 is the Contribution per membership — now divide Fixed Costs (S$57,600) by S$96!",
        },
      ],
      hints: [
        "First calculate Contribution per membership = Selling Price − Variable Cost per membership.",
        "Break-Even Output = Fixed Costs ÷ Contribution per unit.",
      ],
      solution: [
        "Contribution per membership = S$120 − S$24 = S$96.",
        "Break-even output = S$57,600 ÷ S$96 = **600** memberships.",
      ],
      commonError: "Dividing Fixed Costs by Selling Price (S$120) instead of Contribution per unit (S$120 − S$24 = S$96).",
    },
    {
      id: "exam-p1a-q20",
      topicId: "sources-cashflow-breakeven",
      guideRef: "breakeven-charts-mos",
      kind: "short",
      difficulty: "core",
      question:
        "In December, **Hearth & Crumb Bakery** (18 employees) launches festive sourdough hampers. Its December **break-even output** is **440 hampers**, and actual December sales reach **625 hampers**.\n\nCalculate Hearth & Crumb's **Margin of Safety** in hampers (units).",
      answer: {
        type: "number",
        value: 185,
        display: "185 units",
      },
      traps: [
        {
          spec: { type: "number", value: 1065 },
          feedback: "Margin of Safety subtracts Break-Even Output from Actual Output (625 − 440), rather than adding them.",
        },
        {
          spec: { type: "number", value: -185 },
          feedback: "Actual sales (625) are above break-even (440), so Margin of Safety = Actual Output − Break-Even Output = +185 hampers.",
        },
        {
          spec: { type: "number", value: 29.6 },
          feedback: "The question asks for Margin of Safety in hampers (units), not as a percentage: 625 − 440.",
        },
      ],
      hints: [
        "Margin of Safety measures how far actual sales can fall before the bakery makes a loss.",
        "Formula: Margin of Safety = Actual Output − Break-Even Output.",
      ],
      solution: [
        "Margin of Safety = Actual Output − Break-Even Output.",
        "Margin of Safety = 625 − 440 = **185** hampers.",
      ],
      commonError: "Adding actual and break-even output together or subtracting in the wrong order.",
    },
    {
      id: "exam-p1a-q21",
      topicId: "sources-cashflow-breakeven",
      guideRef: "internal-external-finance",
      kind: "written",
      difficulty: "challenge",
      marks: 9,
      question:
        "**Severn Flow Heating** is a 16-employee plumbing and heat-pump partnership in Worcester. Clean-air zones are expanding next month, so the partners need **three new electric vans** costing **£90,000** in total. The partnership holds £95,000 in retained cash reserves.\n\nThe two options are:\n- **Option 1**: Pay £90,000 upfront using **retained profit**.\n- **Option 2**: Acquire the three electric vans via a 4-year **leasing** agreement (£2,150 per month including servicing and battery warranty).\n\n**Assess** which funding method Severn Flow Heating should choose. *(9 marks)*",
      hints: [
        "Weigh Option 1 (zero interest/monthly obligations, full asset ownership vs draining £90k of the £95k liquidity cushion!) against Option 2 (smooth cash outflows + maintenance/battery cover vs higher total cost £103,200 and never owning the vans).",
        "Finish with a clear, contextualised recommendation for this 16-employee partnership.",
      ],
      modelAnswer:
        "Using retained profit avoids external debt and interest charges completely: whereas four years of lease payments total £103,200 (48 × £2,150), buying outright for £90,000 saves £13,200 and puts three electric vans on the partnership's balance sheet as non-current assets. However, spending £90,000 out of £95,000 cash reserves leaves just £5,000 in working capital, creating an acute insolvency risk if commercial heat-pump clients pay invoices late.\n\nBy contrast, leasing preserves almost the entire £95,000 cash buffer to fund heat-pump inventory and 16 plumbers' wages, while fixed £2,150 monthly payments simplify cash-flow forecasting. Crucially for electric commercial vehicles, leasing includes servicing and battery-degradation cover and lets the partnership upgrade to longer-range vans after four years, though Severn Flow never owns the vans and pays £13,200 more overall.\n\nOverall, Severn Flow Heating should choose leasing (or lease at least two of the vans): for an unincorporated 16-staff partnership with unlimited liability, draining 95% of its cash reserves down to £5,000 is far more dangerous than paying an extra £3,300 per year for bundled maintenance and protected liquidity.",
      markScheme: [
        {
          point: "Identifies key advantage of retained profit (no interest / cheaper overall than leasing).",
          keywords: ["no interest", "interest-free", "avoid interest", "cheaper overall", "save"],
        },
        {
          point: "Uses quantitative comparison (48 × £2,150 = £103,200 vs £90,000, saving £13,200) or asset ownership.",
          keywords: ["103,200", "103200", "13,200", "13200", "own the van", "non-current asset"],
        },
        {
          point: "Analyses drawback of retained profit in context (leaves only £5,000 liquidity buffer / opportunity cost).",
          keywords: ["5,000", "5000", "liquidity", "working capital", "buffer", "insolven"],
        },
        {
          point: "Identifies cash-flow advantage of leasing (spreads outflows smoothly / preserves cash reserves for wages & stock).",
          keywords: ["preserve", "spread", "predictable", "cash-flow", "cash flow", "wage"],
        },
        {
          point: "Applies operational benefit of leasing to electric vans (maintenance, battery warranty, upgrading technology after 4 years).",
          keywords: ["maintenance", "battery", "upgrade", "obsolesc", "warranty"],
        },
        {
          point: "Analyses drawback of leasing (never owns the asset and higher total outflow over 4 years).",
          keywords: ["never own", "do not own", "higher total", "more expensive over"],
        },
        {
          point: "Links risk to partnership legal structure (unlimited liability makes cash-flow crisis hazardous to partners).",
          keywords: ["unlimited liability", "personal asset", "unincorporated"],
        },
        {
          point: "Makes a clear, explicit final recommendation between retained profit and leasing.",
          keywords: ["overall", "should choose", "recommend", "better option"],
        },
        {
          point: "Justifies the recommendation by weighing liquidity safety against the £13,200 extra cost.",
          keywords: ["more dangerous", "outweigh", "protect liquidity", "worth the extra", "3,300"],
        },
      ],
      commonError: "Saying 'retained profit is free so always best' without noticing £95k − £90k leaves only £5,000 cash for 16 staff!",
    },

    // -------------------------------------------------------------------------
    // 6. FINANCE: ACCOUNTS & RATIOS (5 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1a-q22",
      topicId: "accounts-ratios",
      guideRef: "profitability-ratios",
      kind: "short",
      difficulty: "core",
      question:
        "**BotaniGlow Eco-Skincare Ltd** (9 employees) reports the following annual figures:\n\n- **Revenue**: £180,000\n- **Cost of Sales**: £120,000\n\nCalculate BotaniGlow's **Markup** as a percentage (**%**).",
      answer: {
        type: "number",
        value: 50,
        display: "50%",
      },
      traps: [
        {
          spec: { type: "number", value: 33.33, tolerance: 0.05 },
          feedback:
            "33.33% is the Gross Profit Margin (Gross Profit ÷ Revenue × 100)! Markup divides Gross Profit (£60,000) by Cost of Sales (£120,000).",
        },
        {
          spec: { type: "number", value: 150 },
          feedback: "You divided Revenue (£180,000) by Cost of Sales (£120,000). Subtract Cost of Sales first so the numerator is Gross Profit (£60,000).",
        },
        {
          spec: { type: "number", value: 60000 },
          feedback: "£60,000 is Gross Profit in pounds — divide by Cost of Sales (£120,000) and multiply by 100 to find percentage Markup.",
        },
      ],
      hints: [
        "Step 1: Gross Profit = Revenue − Cost of Sales.",
        "Step 2: Never confuse Margin with Markup! Markup (%) = (Gross Profit ÷ Cost of Sales) × 100.",
      ],
      solution: [
        "Gross Profit = £180,000 − £120,000 = £60,000.",
        "Markup = (£60,000 ÷ £120,000) × 100 = **50%**.",
      ],
      commonError: "Dividing Gross Profit by Revenue (giving 33.33% Gross Profit Margin) instead of dividing by Cost of Sales (50% Markup).",
    },
    {
      id: "exam-p1a-q23",
      topicId: "accounts-ratios",
      guideRef: "income-statement",
      kind: "short",
      difficulty: "core",
      question:
        "Below is an extract from the Statement of Comprehensive Income for **Oakleaf Independent Bookshop Ltd** (22 employees):\n\n| Item | £ |\n|---|---|\n| Revenue | 245,000 |\n| Cost of Sales | 132,000 |\n| Rent, Salaries & Administrative Expenses | 74,500 |\n\nCalculate **Operating Profit** (£).",
      answer: {
        type: "number",
        value: 38500,
        display: "£38,500",
      },
      traps: [
        {
          spec: { type: "number", value: 113000 },
          feedback: "£113,000 is Gross Profit (Revenue − Cost of Sales). Subtract Operating Expenses (£74,500) to reach Operating Profit!",
        },
        {
          spec: { type: "number", value: 170500 },
          feedback: "You subtracted Expenses (£74,500) from Revenue but forgot to deduct Cost of Sales (£132,000)!",
        },
        {
          spec: { type: "number", value: 187500 },
          feedback: "You added Expenses (£74,500) to Gross Profit (£113,000) — expenses must be subtracted!",
        },
      ],
      hints: [
        "First find Gross Profit = Revenue − Cost of Sales.",
        "Then subtract Rent, Salaries & Administrative Expenses from Gross Profit to get Operating Profit.",
      ],
      solution: [
        "Gross Profit = £245,000 − £132,000 = £113,000.",
        "Operating Profit = £113,000 − £74,500 = **£38,500**.",
      ],
      commonError: "Stopping at Gross Profit (£113,000) instead of deducting overhead expenses (£74,500).",
    },
    {
      id: "exam-p1a-q24",
      topicId: "accounts-ratios",
      guideRef: "liquidity-ratios",
      kind: "short",
      difficulty: "challenge",
      question:
        "Extract from the Statement of Financial Position of **Kestrel Precision Parts Ltd** (32 employees):\n\n| Balance Sheet Item | £ |\n|---|---|\n| Cash and Bank | 9,000 |\n| Trade Receivables | 25,000 |\n| Inventory (specialist steel alloys) | 30,000 |\n| Current Liabilities (overdraft & trade payables) | 40,000 |\n\nCalculate the **Acid-Test (Quick) Ratio** to **2 decimal places**.",
      answer: {
        type: "number",
        value: 0.85,
        display: "0.85 : 1",
      },
      traps: [
        {
          spec: { type: "number", value: 1.6 },
          feedback:
            "1.6 : 1 is the Current Ratio (64,000 ÷ 40,000)! For the Acid-Test Ratio you MUST subtract Inventory (£30,000) from Current Assets first.",
        },
        {
          spec: { type: "number", value: 0.225, tolerance: 0.006 },
          feedback: "You only included Cash (£9,000) — Trade Receivables (£25,000) are also liquid assets included in the Acid-Test numerator!",
        },
        {
          spec: { type: "number", value: 1.18, tolerance: 0.01 },
          feedback: "Upside down! Divide Liquid Assets (£34,000) by Current Liabilities (£40,000), not the other way round.",
        },
      ],
      hints: [
        "Total Current Assets = Cash (£9,000) + Trade Receivables (£25,000) + Inventory (£30,000) = £64,000.",
        "Acid-Test Ratio = (Current Assets − Inventory) ÷ Current Liabilities.",
      ],
      solution: [
        "Current Assets − Inventory = £9,000 + £25,000 = £34,000 (excluding £30,000 steel inventory).",
        "Acid-Test Ratio = £34,000 ÷ £40,000 = **0.85 : 1** (or **0.85**).",
      ],
      commonError: "Forgetting to subtract Inventory (£30,000) and calculating the Current Ratio (1.6 : 1) instead.",
    },
    {
      id: "exam-p1a-q25",
      topicId: "accounts-ratios",
      guideRef: "roce-performance",
      kind: "mcq",
      difficulty: "core",
      question:
        "**Wye Valley Creamery Ltd** (28 employees) reports a **Return on Capital Employed (ROCE)** of **14.5%** for the year, up from 11.2% last year. Over the same period, UK bank savings interest rates stood at **4.5%**.\n\nWhich interpretation of this ROCE figure is **most accurate**?",
      options: [
        "For every £100 of sales revenue, the creamery kept £14.50 after paying corporation tax",
        "The creamery earned £14.50 operating profit per £100 capital invested, beating 4.5% bank deposits by 10 points",
        "The creamery holds £14.50 of liquid cash reserves for every £1 of short-term current liabilities",
        "The creamery is financially guaranteed never to experience a short-term seasonal cash-flow deficit",
      ],
      answerIndex: 1,
      hints: [
        "Recall the ROCE formula: (Operating Profit ÷ Capital Employed) × 100.",
        "Why do investors benchmark ROCE against the risk-free bank interest rate (4.5%)?",
      ],
      explanation:
        "ROCE measures how efficiently long-term capital employed generates operating profit (£14.50 per £100 invested). Earning 14.5% — rising year-on-year and beating 4.5% risk-free savings by 10 percentage points — rewards the owners for taking entrepreneurial risk. Profit per £100 of revenue is OPM/NPM, not ROCE, and profitable firms can still run out of cash.",
    },
    {
      id: "exam-p1a-q26",
      topicId: "accounts-ratios",
      guideRef: "liquidity-ratios",
      kind: "written",
      difficulty: "challenge",
      marks: 9,
      question:
        "**Cedar & Stitch Upholstery Ltd** employs 26 craftspeople restoring boutique hotel furniture. Its directors apply to a regional bank for a **£65,000 5-year expansion loan**, submitting last year's ratios:\n\n- **Operating Profit Margin**: 13.5% (up from 9.8% the year before)\n- **Current Ratio**: 1.8 : 1\n- **Acid-Test Ratio**: 0.65 : 1\n\n**Assess** how useful these financial ratios are to the bank manager when deciding whether to approve the £65,000 loan. *(9 marks)*",
      hints: [
        "Explain what the ratios *do* reveal (rising OPM shows debt-servicing profitability; gap between Current Ratio 1.8 and Acid-Test 0.65 shows heavy working capital tied up in upholstery fabrics/work-in-progress!).",
        "Then critique the *limitations* of ratios alone (historical backward-looking snapshot, window dressing, missing qualitative data like hotel order book, existing gearing/collateral, economic outlook) and conclude!",
      ],
      modelAnswer:
        "The ratios give the bank valuable quantitative evidence of both profitability and short-term liquidity risk. An Operating Profit Margin rising from 9.8% to 13.5% shows Cedar & Stitch controls workshop overheads well, reassuring the lender that monthly loan interest can be covered out of trading profits. Meanwhile, comparing the healthy Current Ratio (1.8 : 1) against the low Acid-Test Ratio (0.65 : 1) immediately flags that most current assets are tied up in slow-moving upholstery fabric inventory, meaning Cedar & Stitch holds only 65p of liquid assets per £1 of short-term debt.\n\nHowever, relying solely on two years of ratios is insufficient because published accounts are backward-looking historical snapshots and could be distorted by window dressing just before the balance-sheet date. Ratios also omit crucial qualitative and forward-looking evidence — such as whether the 26-staff firm has signed new boutique hotel contracts, whether it owns freehold workshop property as collateral, or whether rising hospitality interest rates might freeze hotel refurbishments.\n\nOverall, financial ratios are an essential starting diagnostic for screening credit risk, particularly exposing the 0.65 : 1 quick-ratio squeeze, but the bank manager should only approve the £65,000 loan after combining them with a forward 12-month cash-flow forecast, gearing checks and proof of confirmed hotel orders.",
      markScheme: [
        {
          point: "Interprets rising Operating Profit Margin (9.8% → 13.5%) as ability to service loan interest from profits.",
          keywords: ["service", "repay", "interest", "overhead", "13.5"],
        },
        {
          point: "Contrasts Current Ratio (1.8) with Acid-Test Ratio (0.65) to diagnose heavy cash tied up in fabric/inventory.",
          keywords: ["tied up", "fabric", "inventory", "slow-moving", "65p", "liquid"],
        },
        {
          point: "Explains why 0.65 : 1 below the ~1 : 1 benchmark alerts the bank to short-term repayment vulnerability.",
          keywords: ["benchmark", "1 : 1", "1:1", "short-term debt", "default", "vulnerab"],
        },
        {
          point: "Identifies limitation: accounts and ratios are historical / backward-looking snapshots.",
          keywords: ["historical", "backward", "past", "out of date", "snapshot"],
        },
        {
          point: "Identifies limitation: potential window dressing or seasonal balance-sheet distortion.",
          keywords: ["window dressing", "manipulat", "distort", "artificial"],
        },
        {
          point: "Applies missing non-financial / forward-looking factors in context (signed hotel contracts, collateral/security, gearing).",
          keywords: ["collateral", "security", "order book", "contract", "gearing", "cash-flow forecast"],
        },
        {
          point: "Considers external market context (hospitality demand / interest rates affecting hotel refurbishments).",
          keywords: ["hospitality", "refurbish", "recession", "economic"],
        },
        {
          point: "Reaches a clear overall judgement on usefulness (necessary screening tool, not sufficient alone).",
          keywords: ["overall", "starting", "diagnostic", "not sufficient", "combine"],
        },
        {
          point: "Specifies what the bank must pair with ratios to decide (12-month cash-flow forecast and security/order evidence).",
          keywords: ["cash-flow forecast", "cash flow forecast", "confirmed", "combine", "alongside"],
        },
      ],
      commonError: "Listing ratio definitions without spotting what the gap between 1.8 : 1 and 0.65 : 1 reveals about upholstery inventory, or forgetting qualitative factors like collateral and future hotel orders.",
    },

    // -------------------------------------------------------------------------
    // 7. MARKETING & BUSINESS OPERATIONS (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p1a-q27",
      topicId: "marketing-and-operations",
      guideRef: "market-research-segmentation",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**Crumb & Flora** is a 9-employee vegan patisserie in Manchester. Before launching a pistachio-rose tart, the founder invites 20 local customers to taste three recipe prototypes and discuss texture, sweetness and packaging in depth.\n\nHow is this market research best classified, and what is its main strength?",
      options: [
        "Secondary quantitative research — cheap national census statistics covering millions of households",
        "Secondary qualitative research — competitor company accounts downloaded from the internet",
        "Primary qualitative research — first-hand insight into *why* target customers prefer specific flavours before full launch",
        "Primary quantitative research — statistically representative percentages of the entire UK population",
      ],
      answerIndex: 2,
      hints: [
        "Is tasting prototypes with 20 customers first-hand field data (primary) or existing desk data (secondary)?",
        "Does an in-depth flavour discussion generate rich opinions/reasons (qualitative) or large-scale numerical tables (quantitative)?",
      ],
      explanation:
        "Running a tasting focus group collects brand-new first-hand data tailored to Crumb & Flora's tart (primary research) and explores detailed sensory opinions and motivations (qualitative data), though 20 people is too small to be statistically representative of the UK.",
    },
    {
      id: "exam-p1a-q28",
      topicId: "marketing-and-operations",
      guideRef: "production-lean-jit",
      kind: "short",
      difficulty: "core",
      question:
        "**Hearth & Crumb Bakery** employs **15 full-time bakers** (alongside 3 counter staff) who together bake **2,400 sourdough loaves per week**.\n\nCalculate the weekly **labour productivity per baker** (in loaves).",
      answer: {
        type: "number",
        value: 160,
        display: "160 loaves per worker",
      },
      traps: [
        {
          spec: { type: "number", value: 133.33, tolerance: 0.05 },
          feedback: "Careful — the question asks for labour productivity *per baker* (divide 2,400 by the 15 bakers, not all 18 staff)!",
        },
        {
          spec: { type: "number", value: 36000 },
          feedback: "Labour productivity divides Total Output by Number of Bakers (2,400 ÷ 15), rather than multiplying!",
        },
        {
          spec: { type: "number", value: 342.86, tolerance: 0.05 },
          feedback: "You divided by 7 days — divide weekly output (2,400 loaves) by the 15 bakers!",
        },
      ],
      hints: [
        "Formula: Labour Productivity = Total Output ÷ Number of Workers.",
        "Read carefully: divide 2,400 loaves by the **15 bakers**.",
      ],
      solution: [
        "Labour Productivity per baker = Total Weekly Output ÷ Number of Bakers.",
        "2,400 ÷ 15 = **160** loaves per baker per week.",
      ],
      commonError: "Dividing by all 18 employees when the question specifies productivity per baker (15 bakers).",
    },
    {
      id: "exam-p1a-q29",
      topicId: "marketing-and-operations",
      guideRef: "production-lean-jit",
      kind: "mcq",
      difficulty: "core",
      question:
        "**Hearth & Crumb Bakery** (18 employees) bakes 120 country sourdough loaves at 5:00 am, cleans and resets the deck ovens at 6:30 am to bake 150 cinnamon buns, and then bakes 90 olive focaccias at 8:00 am.\n\nWhich method of production is Hearth & Crumb using, and why does it suit an 18-employee bakery?",
      options: [
        "Flow production — identical loaves roll off an automated 24-hour conveyor belt with zero product variety",
        "Job production — every single cinnamon bun is uniquely custom-engineered to an individual architect's blueprint",
        "Cell robotics — autonomous car-assembly robots eliminate all skilled bakers",
        "Batch production — groups of identical items are baked together before switching recipes, balancing variety for local shoppers with lower unit costs than one-off items",
      ],
      answerIndex: 3,
      hints: [
        "Notice how a group of identical loaves is baked together, then equipment is reset for the next group (cinnamon buns, then focaccia).",
        "Is that job, batch, or continuous flow production?",
      ],
      explanation:
        "Baking set quantities of one product before resetting ovens for the next variety is classic batch production. It lets a small 18-staff bakery offer customers tempting product choice while achieving much higher output and lower unit costs than making items one-by-one (job production).",
    },
    {
      id: "exam-p1a-q30",
      topicId: "marketing-and-operations",
      guideRef: "marketing-mix-4ps",
      kind: "written",
      difficulty: "challenge",
      marks: 12,
      question:
        "**VeloPulse Indoor Cycling Studio** employs 12 staff in Singapore, charging a premium **S$38 per drop-in ride** (variable cost S$6 per rider; monthly fixed costs S$48,000). Last month, a 24-hour budget fitness chain opened 200 metres away offering spin classes inside a S$79/month gym pass, causing VeloPulse's weekly bookings to dip by 14%.\n\nTo win back riders, VeloPulse's founder is choosing between two strategies:\n- **Strategy 1**: **Cut drop-in prices by 25%** (down to S$28.50 per ride) and run promotional social-media discount codes.\n- **Strategy 2**: **Keep the S$38 premium price**, invest S$22,000 in live heart-rate performance screens, and launch **niche prenatal and executive-recovery cycling classes**.\n\n**Evaluate** both strategies and recommend which one VeloPulse should adopt. *(12 marks — use AJIM evaluation)*",
      hints: [
        "Do the numbers! Under Strategy 1, cutting price from S$38 to S$28.50 slashes contribution per ride from S$32 (38 − 6) down to S$22.50 (28.50 − 6) — pushing break-even up from 1,500 rides to 2,134 rides!",
        "Weigh Strategy 1 (price-elastic casual riders vs price war against a giant chain with economies of scale) against Strategy 2 (niche differentiation & price-inelastic loyalty vs S$22k capital outlay & narrow market segment), then deliver a full **AJIM** conclusion (Answer, Justify, It depends on, Most important factor).",
      ],
      modelAnswer:
        "Cutting prices to S$28.50 (Strategy 1) directly targets price-sensitive riders tempted away by the new S$79/month gym chain and uses low-cost social-media promotions to refill empty off-peak bikes quickly. However, the financial arithmetic is punishing for a 12-staff boutique studio: contribution per ride falls from S$32 (S$38 − S$6) down to S$22.50 (S$28.50 − S$6), forcing monthly break-even output up from 1,500 rides to 2,134 rides just to cover the S$48,000 fixed rent and salaries. Entering a price war against a multi-site budget gym chain with superior purchasing and marketing economies of scale also erodes VeloPulse's boutique brand image while still looking expensive next to S$79/month unlimited access.\n\nStrategy 2 protects the high S$32 unit contribution by building a coherent marketing mix that aligns premium pricing with strengthened non-price differentiation across Product and Place experience. Live heart-rate leaderboards and specialist prenatal and executive-recovery classes target affluent Singapore niche segments that a self-service budget gym cannot safely replicate, making demand far more price inelastic and boosting rider retention. Yet Strategy 2 requires S$22,000 of upfront capital expenditure — adding S$22,000 in cash outflows when bookings have already fallen 14% — and prenatal cycling requires specialist instructor training.\n\nOverall, VeloPulse should adopt Strategy 2 rather than slashing prices (Answer). A 12-employee boutique studio can never undercut a mass-market budget gym on price without destroying its contribution margin and overstretching studio capacity past 2,134 rides per month (Justify). Whether Strategy 2 succeeds depends on VeloPulse's cash reserves to fund the S$22,000 screen upgrade without triggering a short-term cash deficit, and whether local demographics around the studio include enough expectant mothers and corporate executives (It depends on). Ultimately, sustainable USP differentiation that preserves the S$32 contribution per rider is the decisive factor for long-term small-business survival (Most important).",
      markScheme: [
        {
          point: "Analyses benefit of Strategy 1 (appeals to price-elastic riders and fills spare bike capacity quickly via social media).",
          keywords: ["price-sensitive", "price elastic", "spare capacity", "off-peak", "refill"],
        },
        {
          point: "Uses case figures on Strategy 1: contribution drops from S$32 to S$22.50 (or break-even rises from 1,500 to ~2,134 rides).",
          keywords: ["32", "22.50", "1,500", "1500", "2,134", "2133", "2134"],
        },
        {
          point: "Analyses strategic flaw of Strategy 1 (cannot win a price war against a large budget chain with economies of scale; damages boutique brand).",
          keywords: ["price war", "economies of scale", "erode", "dilute", "brand image"],
        },
        {
          point: "Analyses benefit of Strategy 2 (heart-rate tech + specialist classes build a clear USP / non-price differentiation).",
          keywords: ["differenti", "usp", "unique selling", "non-price", "leaderboard"],
        },
        {
          point: "Links Strategy 2's niche segmentation to lower price elasticity of demand and keeping the S$32 contribution.",
          keywords: ["inelastic", "niche", "affluent", "retention", "loyal"],
        },
        {
          point: "Analyses drawback of Strategy 2 (upfront S$22,000 capital outflow when revenue is dipping + specialist instructor training cost).",
          keywords: ["capital expenditure", "upfront", "outflow", "training", "cash reserve"],
        },
        {
          point: "Compares coherent 4Ps alignment (Strategy 1 mixes boutique cost base with budget price; Strategy 2 aligns premium Price with specialist Product).",
          keywords: ["marketing mix", "4ps", "coherent", "consistent", "align"],
        },
        {
          point: "AJIM — Answer: states a clear, unambiguous recommendation between Strategy 1 and Strategy 2.",
          keywords: ["should adopt", "recommend", "overall", "choose strategy"],
        },
        {
          point: "AJIM — Justify: backs choice with small-business scale vs mass-market rival and contribution protection.",
          keywords: ["undercut", "mass-market", "capacity", "protect"],
        },
        {
          point: "AJIM — It depends on (1): studio liquidity / ability to finance the S$22,000 investment safely.",
          keywords: ["depends on", "liquidity", "cash deficit", "afford"],
        },
        {
          point: "AJIM — It depends on (2): size of local Singapore corporate / prenatal target demographic.",
          keywords: ["demographic", "expectant", "corporate", "market size", "sufficient demand"],
        },
        {
          point: "AJIM — Most important factor: concludes why defending unit contribution / differentiation outweighs short-term discounting.",
          keywords: ["decisive", "ultimately", "most important", "long-term survival", "sustainable"],
        },
      ],
      commonError: "Recommending a 25% price cut without calculating that unit contribution plunges from S$32 to S$22.50, or omitting 'It depends on' conditions in a 12-mark evaluation.",
    },
  ],
};
