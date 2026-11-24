import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p2a",
  title: "Paper 2A: Investigating Large Business (> 250 Employees — Mock A)",
  calculator: true,
  minutes: 90,
  questions: [
    // -------------------------------------------------------------------------
    // 1. BUSINESS ACTIVITY (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2a-q01",
      topicId: "business-activity",
      guideRef: "unincorporated-incorporated",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**StrideCore Sportswear Plc** employs 14,000 staff worldwide and its shares are traded daily on the London Stock Exchange. Millions of shares are owned by pension funds, while day-to-day strategic decisions are taken by a salaried Board of Directors.\n\nWhich structural feature of a large public limited company does this illustrate?",
      options: [
        "Unlimited personal financial liability of institutional pension-fund shareholders for company debt",
        "Divorce between ownership and control, risking tension if directors favour growth over dividends",
        "Legal inability to maintain a separate corporate legal identity from the Chief Executive Officer",
        "Statutory prohibition preventing listed PLCs from publishing audited annual financial statements",
      ],
      answerIndex: 1,
      hints: [
        "Notice *who owns* StrideCore Plc (thousands of external shareholders) versus *who runs* it (salaried directors).",
        "What is the Edexcel term for this split in large PLCs?",
      ],
      explanation:
        "In large PLCs, external shareholders own the company while salaried directors control daily strategy — known as the divorce between ownership and control. Shareholders still enjoy limited liability, and PLCs must publish audited annual accounts by law.",
    },
    {
      id: "exam-p2a-q02",
      topicId: "business-activity",
      guideRef: "business-objectives",
      kind: "mcq",
      difficulty: "core",
      question:
        "**VoltDrive Motors Plc** (3,200 employees) achieved steady UK profits between 2021 and 2024, then announced a new 2026 corporate objective: *'Capture 15% of the European electric commercial-van market while cutting factory carbon emissions per vehicle by 40% before 2029.'*\n\nWhy do large PLCs like VoltDrive evolve their objectives as they grow and markets change?",
      options: [
        "Once an incorporated company exceeds 250 staff, pursuing profit becomes illegal under company law",
        "Large stock-listed PLCs face zero external rival competition and never require measurable SMART targets",
        "Short-term start-up survival remains the sole corporate objective of mature FTSE-listed multinationals",
        "Established PLCs move beyond survival toward market share and ESG goals for investors, regulators and fleets",
      ],
      answerIndex: 3,
      hints: [
        "Compare a fragile start-up fighting for survival with an established 3,200-worker PLC competing across Europe.",
        "Why combine a SMART market-share goal with a measurable carbon-reduction target?",
      ],
      explanation:
        "Once survival and domestic profitability are secure, large PLCs shift toward international market-share expansion and measurable social/environmental targets to win corporate fleet contracts, comply with tightening emissions rules and attract ESG-focused investors.",
    },
    {
      id: "exam-p2a-q03",
      topicId: "business-activity",
      guideRef: "unincorporated-incorporated",
      kind: "short",
      difficulty: "warmup",
      question:
        "**VoltDrive Motors Plc** (3,200 employees) issues **4,500,000 new ordinary shares** on the stock exchange at an issue price of **£2.40 per share**. Investment-bank underwriting and legal fees for the share issue total **£300,000**.\n\nCalculate the **net capital raised** (£) by VoltDrive Motors Plc after deducting fees.",
      answer: {
        type: "number",
        value: 10500000,
        display: "£10,500,000",
      },
      traps: [
        {
          spec: { type: "number", value: 10800000 },
          feedback: "£10,800,000 is the gross share proceeds (4,500,000 × £2.40) — subtract the £300,000 underwriting fees!",
        },
        {
          spec: { type: "number", value: 11100000 },
          feedback: "Underwriting fees (£300,000) reduce the cash VoltDrive keeps — subtract £300,000 from £10,800,000 rather than adding!",
        },
        {
          spec: { type: "number", value: 1875000 },
          feedback: "Multiply the number of shares (4,500,000) by £2.40 rather than dividing!",
        },
      ],
      hints: [
        "Step 1: Gross proceeds = 4,500,000 × £2.40.",
        "Step 2: Subtract the £300,000 underwriting and legal fees.",
      ],
      solution: [
        "Gross share issue proceeds = 4,500,000 × £2.40 = £10,800,000.",
        "Net capital raised = £10,800,000 − £300,000 = **£10,500,000**.",
      ],
      commonError: "Forgetting to deduct the £300,000 share-issue underwriting fees from gross proceeds.",
    },
    {
      id: "exam-p2a-q04",
      topicId: "business-activity",
      guideRef: "stakeholders-conflicts",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "**FreshMart Supermarkets Plc** employs 45,000 staff across 620 UK supermarkets. To boost annual shareholder dividends, the Board demands an immediate 9% cut in the wholesale farm-gate price paid to its British dairy-farm suppliers.\n\n**Explain** how this decision creates a stakeholder conflict. *(3 marks)*",
      hints: [
        "Contrast what institutional shareholders want (wider margins & higher dividends) with what dairy suppliers need (fair farm-gate prices covering feed/energy costs).",
        "Finish the 3-mark chain with the consequence (farms terminating contracts, protests or supply shortages).",
      ],
      modelAnswer:
        "External institutional investors seek lower Cost of Sales at the grocery chain so higher operating profits fund larger dividend payouts. Conversely, dairy farmers rely on fair milk prices to cover rising cattle-feed costs, so squeezing supplier margins may push farms into losses or provoke supply boycotts that leave chiller shelves empty.",
      markScheme: [
        {
          point: "Identifies shareholders' goal (lower Cost of Sales / higher profits / larger dividend returns).",
          keywords: ["dividend", "cost of sales", "investor", "higher operating profit", "return"],
        },
        {
          point: "Contrasts with suppliers' goal (fair prices / covering farm production costs / staying viable).",
          keywords: ["fair", "farmer", "feed", "supplier margin", "viable", "cover"],
        },
        {
          point: "Develops resulting conflict or consequence (boycotts, bad PR, farms collapsing or milk shortages).",
          keywords: ["boycott", "shortage", "empty", "losses", "protest", "reputation"],
        },
      ],
      commonError: "Mentioning customers instead of directly contrasting shareholders' dividend demands with dairy suppliers' survival margins.",
    },

    // -------------------------------------------------------------------------
    // 2. LOCATION, GLOBALISATION & EXTERNAL FACTORS (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2a-q05",
      topicId: "location-globalisation-external",
      guideRef: "trade-exchange-rates",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "To protect domestic carmakers, a foreign government imposes a strict **physical limit of 15,000 imported electric cars per year** from UK manufacturers such as **3,200-employee VoltDrive Motors Plc**.\n\nWhat is this trade barrier called?",
      options: [
        "Export subsidy",
        "Ad valorem tariff",
        "Import quota",
        "Free-trade bloc deregulation",
      ],
      answerIndex: 2,
      hints: [
        "Distinguish a tax on imported goods (tariff) from a physical cap on the *quantity* of imports allowed (quota).",
        "15,000 vehicles per year is a physical volume limit.",
      ],
      explanation:
        "An import quota places a legal ceiling on the physical quantity (15,000 units) of a foreign product allowed into a country over a given period, whereas a tariff is a customs tax added to import prices.",
    },
    {
      id: "exam-p2a-q06",
      topicId: "location-globalisation-external",
      guideRef: "trade-exchange-rates",
      kind: "short",
      difficulty: "core",
      question:
        "**StrideCore Sportswear Plc** (14,000 employees) exports **16,000 pairs** of marathon running shoes from its UK distribution hub to a US department-store group at a wholesale price of **£34 per pair**.\n\nThe exchange rate is **£1 = $1.25**.\n\nCalculate the total invoice value in **US dollars ($)**.",
      answer: {
        type: "number",
        value: 680000,
        display: "$680,000",
      },
      traps: [
        {
          spec: { type: "number", value: 435200 },
          feedback:
            "You divided £544,000 by 1.25! Since £1 buys $1.25, multiply the pound amount by 1.25 when converting FROM £ INTO US dollars.",
        },
        {
          spec: { type: "number", value: 544000 },
          feedback: "£544,000 is the invoice total in pounds — multiply by 1.25 to convert into US dollars ($)!",
        },
        {
          spec: { type: "number", value: 42.5 },
          feedback: "$42.50 is the dollar price of ONE pair of shoes — multiply by all 16,000 pairs!",
        },
      ],
      hints: [
        "Step 1: Total UK wholesale value = 16,000 × £34.",
        "Step 2: Since £1 = $1.25, multiply the £ total by 1.25 to convert into $.",
      ],
      solution: [
        "Total wholesale value in pounds = 16,000 × £34 = £544,000.",
        "Total value in US dollars = £544,000 × 1.25 = **$680,000**.",
      ],
      commonError: "Dividing by 1.25 instead of multiplying when converting sterling (£) into foreign currency ($).",
    },
    {
      id: "exam-p2a-q07",
      topicId: "location-globalisation-external",
      guideRef: "globalisation-mncs",
      kind: "mcq",
      difficulty: "core",
      question:
        "**KovaTech Electronics Corp** (8,500 employees) builds an assembly plant inside the **ASEAN Free Trade Area** so its smart refrigerators can be shipped across member countries without paying 18% external import duties.\n\nWhich strategic motive for becoming a multinational corporation (MNC) does this best illustrate?",
      options: [
        "Circumventing external trade barriers by producing inside a regional trade bloc",
        "Eliminating all corporate responsibility for health-and-safety law at home",
        "Converting from an incorporated company back into a sole trader",
        "Guaranteeing zero competition from domestic appliance brands",
      ],
      answerIndex: 0,
      hints: [
        "Look at the 18% import duty avoided by manufacturing *inside* the ASEAN trade bloc.",
        "Why do MNCs locate factories inside customs unions and free-trade areas?",
      ],
      explanation:
        "Establishing production facilities inside a regional trade bloc allows an MNC to sell tariff-free across member states, avoiding the 18% protectionist tariff charged on goods exported from outside the bloc.",
    },
    {
      id: "exam-p2a-q08",
      topicId: "location-globalisation-external",
      guideRef: "globalisation-mncs",
      kind: "written",
      difficulty: "core",
      marks: 6,
      question:
        "**KovaTech Electronics Corp** (8,500 employees globally) announces **$180 million of foreign direct investment (FDI)** to construct a new smart-appliance factory near Hai Phong, **Vietnam**, creating 2,200 local jobs.\n\n**Analyse** the likely impacts of this multinational investment on **Vietnam as the host country**. *(6 marks)*",
      hints: [
        "Edexcel Paper 2 classic! Develop ONE positive chain for Vietnam (employment/multiplier, skills & technology transfer, export GDP/tax revenue) AND ONE negative chain (profit repatriation, squeezing local SMEs, environmental/infrastructure strain or low-skilled assembly jobs).",
        "Anchor both paragraphs clearly in KovaTech's $180m / 2,200-job electronics plant.",
      ],
      modelAnswer:
        "Recruiting 2,200 local staff injects substantial wage income into northern Vietnam, creating a positive local multiplier effect as factory workers spend earnings in nearby shops and housing. KovaTech's $180 million plant also transfers automated electronics manufacturing skills to Vietnamese technicians and boosts host-government corporation tax receipts and export earnings.\n\nOn the other hand, KovaTech may repatriate the bulk of its operating profits back to its overseas headquarters rather than reinvesting them inside Vietnam, limiting long-term national wealth gains. Furthermore, running a huge automated appliance plant increases industrial electricity demand and electronic waste, while higher MNC factory wages can poach skilled engineers away from smaller domestic Vietnamese manufacturers.",
      markScheme: [
        {
          point: "Identifies direct job creation (2,200 jobs) and develops local income/multiplier benefit.",
          keywords: ["multiplier", "local spend", "living standard", "unemployment", "wage income"],
        },
        {
          point: "Develops a second host-country gain (skills/technology transfer, infrastructure, export GDP or tax revenue).",
          keywords: ["skill", "technology transfer", "tax", "export", "gdp"],
        },
        {
          point: "Applies positive chain specifically to electronics/Hai Phong FDI context.",
          keywords: ["technician", "vietnamese", "northern", "appliance", "automated"],
        },
        {
          point: "Identifies profit repatriation (sending profits back to home headquarters).",
          keywords: ["repatriat", "headquarters", "send profit", "home country"],
        },
        {
          point: "Identifies environmental strain or crowding out / poaching labour from domestic Vietnamese firms.",
          keywords: ["waste", "pollution", "electricity", "poach", "domestic", "local firm"],
        },
        {
          point: "Develops why host-country downside limits net benefit (drain on balance of payments, low-level assembly roles or tax-break concessions).",
          keywords: ["limiting", "long-term", "concession", "tax break", "low-skilled"],
        },
      ],
      commonError: "Analysing benefits to KovaTech Corp instead of answering the question asked — impacts on **Vietnam (the host country)**!",
    },

    // -------------------------------------------------------------------------
    // 3. PEOPLE: COMMUNICATION, RECRUITMENT & TRAINING (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2a-q09",
      topicId: "people-communication-recruitment",
      guideRef: "recruitment-selection",
      kind: "mcq",
      difficulty: "core",
      question:
        "**SkyBridge Airlines Plc** (6,800 employees) is selecting 24 trainee airline pilots from 4,200 applicants. Alongside interviews and medicals, shortlisted candidates complete simulated cockpit emergencies and spatial-reasoning assessments.\n\nWhat is the main purpose of using **aptitude and psychometric testing** in large-scale PLC selection?",
      options: [
        "Replacing written employment contracts so newly hired trainee pilots work completely unpaid",
        "Objectively testing technical aptitude and stress resilience to cut costly training drop-outs",
        "Guaranteeing zero external recruitment advertising or job-board expenditure for the airline",
        "Allowing airline passengers to vote directly on annual cockpit crew salaries and shift rotas",
      ],
      answerIndex: 1,
      hints: [
        "Training a commercial airline pilot costs tens of thousands of pounds — why isn't a friendly 20-minute interview enough?",
        "Distinguish skill/spatial capability (aptitude) and personality/stress reaction (psychometric).",
      ],
      explanation:
        "Aptitude tests assess natural spatial and technical ability while psychometric tests evaluate personality traits and composure under cockpit stress, giving SkyBridge objective data across 4,200 applicants and preventing expensive training failures.",
    },
    {
      id: "exam-p2a-q10",
      topicId: "people-communication-recruitment",
      guideRef: "recruitment-selection",
      kind: "short",
      difficulty: "warmup",
      question:
        "**FreshMart Supermarkets Plc** (45,000 employees) fills 35 new Deputy Store Manager posts exclusively by promoting existing Department Supervisors advertised on the company intranet, without placing external job adverts.\n\nState the **two-word term** for this method of recruitment.",
      answer: {
        type: "text",
        accept: ["internal recruitment"],
        display: "internal recruitment",
      },
      traps: [
        {
          spec: { type: "text", accept: ["external recruitment"] },
          feedback: "External recruitment hires candidates from *outside* the organisation. Promoting existing FreshMart supervisors via the intranet is internal recruitment!",
        },
        {
          spec: { type: "text", accept: ["induction training"] },
          feedback: "Induction is training after appointment — filling vacancies from inside the existing workforce is internal recruitment.",
        },
      ],
      hints: [
        "Candidates already work *inside* FreshMart Supermarkets Plc.",
        "Contrast 'internal' versus 'external' recruitment.",
      ],
      solution: [
        "Appointing existing employees from within the organisation to fill vacant posts is **internal recruitment**.",
      ],
      commonError: "Confusing internal recruitment with on-the-job training.",
    },
    {
      id: "exam-p2a-q11",
      topicId: "people-communication-recruitment",
      guideRef: "effective-communication",
      kind: "mcq",
      difficulty: "core",
      question:
        "At **VoltDrive Motors Plc** (3,200 employees), assembly-line technicians submit weekly digital feedback to engineering directors highlighting battery-cable routing improvements.\n\nHow is this flow of internal communication classified?",
      options: [
        "External public-relations communication",
        "Horizontal inter-departmental marketing",
        "Downward autocratic instruction",
        "Upward formal communication",
      ],
      answerIndex: 3,
      hints: [
        "Trace the direction on the hierarchy: shop-floor technicians (bottom) → engineering directors (top).",
        "Is a structured weekly digital feedback portal formal or informal?",
      ],
      explanation:
        "Messages travelling from shop-floor operatives up the hierarchy to senior directors represent upward communication, and using an official weekly digital system makes it a formal channel that supports Kaizen continuous improvement.",
    },
    {
      id: "exam-p2a-q12",
      topicId: "people-communication-recruitment",
      guideRef: "barriers-to-communication",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "**StrideCore Sportswear Plc** employs 14,000 staff across 18 countries with **7 layers of management** between London headquarters and regional retail stores. An urgent sole-defect product recall instruction takes four days to reach store managers in East Asia, and two stores pull the wrong shoe model.\n\n**Explain** one reason why communication failed inside StrideCore Sportswear Plc. *(3 marks)*",
      hints: [
        "Use either the **7-layer tall chain of command** (distortion/delay at each middle-management tier) OR **18-country time-zone and language barriers**.",
        "Chain: tall hierarchy / time-zone & translation gap → message delayed and distorted → wrong shoe recalled / brand damage.",
      ],
      modelAnswer:
        "Passing instructions down a long seven-layer chain of command across 18 countries delays transmission across incompatible time zones and risks message distortion as middle managers summarise or translate details. Consequently, East Asian store teams received inaccurate model codes late, leaving defective running shoes on sale and harming customer safety.",
      markScheme: [
        {
          point: "Identifies structural/global barrier (long chain of command, time-zone lag or translation/language differences).",
          keywords: ["chain of command", "time zone", "time-zone", "translat", "language", "tall"],
        },
        {
          point: "Explains how the message degrades (delayed transmission or distortion/filtering by middle managers).",
          keywords: ["distort", "misinterpret", "filter", "inaccurate", "delay"],
        },
        {
          point: "Links to operational/reputational impact in context (defective shoes remain on shelves / wrong stock pulled / injured runners).",
          keywords: ["defective", "shelf", "shelves", "safety", "reputation", "inaccurate model"],
        },
      ],
      commonError: "Simply repeating '7 layers and 18 countries' from the question without explaining *distortion*, *time-zone lag*, or *translation error*.",
    },

    // -------------------------------------------------------------------------
    // 4. PEOPLE: MOTIVATION & ORGANISATION (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2a-q13",
      topicId: "motivation-organisation",
      guideRef: "financial-rewards",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**Medisyn Pharmaceuticals Plc** (1,400 employees) awards all permanent scientists and production staff free shares after three years' service under an **employee share-ownership scheme**.\n\nWhat is the main motivational advantage of share ownership for a large PLC?",
      options: [
        "Aligning employee effort with long-term PLC share-price growth and boosting staff retention over the three-year qualifying period",
        "Allowing scientists to claim unlimited piece-rate cash per test tube washed each hour",
        "Eliminating the need to pay monthly salaries under minimum-wage law",
        "Converting the PLC into a public-sector government department",
      ],
      answerIndex: 0,
      hints: [
        "Why require *three years' service* before shares vest, and what makes those shares more valuable?",
        "When staff become part-owners, their financial interest aligns with external shareholders!",
      ],
      explanation:
        "Employee share-ownership schemes turn staff into co-owners so they benefit directly from dividends and rising share prices, aligning their goals with shareholders while the three-year vesting rule reduces costly turnover of R&D scientists.",
    },
    {
      id: "exam-p2a-q14",
      topicId: "motivation-organisation",
      guideRef: "motivation-theories",
      kind: "short",
      difficulty: "core",
      question:
        "**FreshMart Supermarkets Plc** employs an average of **40,000 store colleagues** across the year. During the year, **3,400 store colleagues leave** the business.\n\nCalculate FreshMart's annual **labour turnover rate** as a percentage (**%**) to **1 decimal place**.",
      answer: {
        type: "number",
        value: 8.5,
        display: "8.5%",
      },
      traps: [
        {
          spec: { type: "number", value: 11.76, tolerance: 0.05 },
          feedback: "Upside down! Divide Number of Staff Leaving (3,400) by Average Number of Staff (40,000) × 100.",
        },
        {
          spec: { type: "number", value: 0.085 },
          feedback: "Multiply 0.085 by 100 to express labour turnover as a percentage (8.5%)!",
        },
        {
          spec: { type: "number", value: 91.5 },
          feedback: "91.5% is the staff *retention* rate — labour turnover measures the percentage who *left* (3,400 ÷ 40,000 × 100)!",
        },
      ],
      hints: [
        "Formula: Labour Turnover (%) = (Number of Staff Leaving ÷ Average Number of Staff Employed) × 100.",
        "Calculate (3,400 ÷ 40,000) × 100.",
      ],
      solution: [
        "Labour Turnover = (3,400 ÷ 40,000) × 100 = **8.5%**.",
      ],
      commonError: "Inverting the fraction (40,000 ÷ 3,400) or subtracting from 100% to give retention instead of turnover.",
    },
    {
      id: "exam-p2a-q15",
      topicId: "motivation-organisation",
      guideRef: "centralisation-leadership",
      kind: "mcq",
      difficulty: "core",
      question:
        "**GrandVista Hotels Plc** operates 85 luxury resorts across Europe, Asia and the Middle East (9,200 employees). Head office sets global brand safety standards, but gives each Regional Director **decentralised authority** over restaurant menus, seasonal room rates and local festivals.\n\nWhat is the main advantage of **decentralisation** for an international hotel group like GrandVista?",
      options: [
        "Guaranteed uniform pricing and identical pork-and-beef menus across every culture worldwide",
        "Total elimination of senior regional management salaries",
        "Faster responsiveness to local cultural tastes, religious dietary norms and regional tourism peaks",
        "Stronger central bulk-buying power from banning all local food suppliers",
      ],
      answerIndex: 2,
      hints: [
        "Compare cultural dining norms and peak holiday seasons in Dubai, Tokyo and Rome.",
        "Why would rigid London head-office control fail across diverse global hospitality markets?",
      ],
      explanation:
        "Decentralised decision-making empowers regional directors who understand local cultural, religious and seasonal demand conditions to adapt menus and pricing rapidly, boosting guest satisfaction and empowering local managers.",
    },
    {
      id: "exam-p2a-q16",
      topicId: "motivation-organisation",
      guideRef: "organisational-charts",
      kind: "written",
      difficulty: "core",
      marks: 6,
      question:
        "**FreshMart Supermarkets Plc** (45,000 employees) faces intense price competition from discount grocers. Its CEO announces **delayering**, removing **two tiers of regional area managers** (420 managerial posts) across its 620 UK stores.\n\n**Analyse** the likely impacts of delayering on FreshMart Supermarkets Plc. *(6 marks)*",
      hints: [
        "Develop ONE positive chain (huge annual salary overhead savings + shorter chain of command for faster price/promotion rollouts + wider empowerment for store managers).",
        "Develop ONE negative chain (one-off redundancy payouts + wider span of control overloading remaining directors + job-security fear hurting morale/loss of experienced retail mentors).",
      ],
      modelAnswer:
        "Removing 420 regional middle-management posts permanently slashes millions of pounds from FreshMart's annual salary overheads, allowing the supermarket chain to fund lower grocery prices against discounters while shortening the chain of command so pricing updates reach store floors faster.\n\nHowever, cutting two hierarchy tiers sharply widens the span of control for surviving senior directors, risking management overload and weaker supervision of underperforming stores. In the short run, statutory redundancy payouts create a hefty cash outflow, while fear of further job cuts damages morale and removes promotion pathways for ambitious store managers.",
      markScheme: [
        {
          point: "Identifies permanent reduction in management salary overheads.",
          keywords: ["salary", "overhead", "cost saving", "payroll"],
        },
        {
          point: "Links cost saving or shorter chain of command to supermarket competitiveness (funding lower prices / faster communication to stores).",
          keywords: ["shorter chain", "faster", "lower grocery", "competit", "price"],
        },
        {
          point: "Identifies widened span of control for remaining senior managers.",
          keywords: ["span of control", "widen", "overload", "stretch", "supervis"],
        },
        {
          point: "Identifies short-term financial cost of statutory redundancy payments.",
          keywords: ["redundan", "payout", "severance", "short-term cost"],
        },
        {
          point: "Develops human-resource drawback (insecurity lowers morale or fewer promotion opportunities).",
          keywords: ["morale", "insecur", "promotion", "anxiet"],
        },
        {
          point: "Applies cleanly to multi-store supermarket operations.",
          keywords: ["store", "discounter", "grocery", "supermarket"],
        },
      ],
      commonError: "Forgetting that delayering causes short-term redundancy costs and widens spans of control for surviving managers.",
    },

    // -------------------------------------------------------------------------
    // 5. FINANCE: SOURCES, CASH FLOW & BREAK-EVEN (5 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2a-q17",
      topicId: "sources-cashflow-breakeven",
      guideRef: "internal-external-finance",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**VoltDrive Motors Plc** (3,200 employees) spends £145 million installing automated laser-welding robots in its Sunderland plant, alongside £2.8 million on monthly electricity and lubricants.\n\nHow are these two outlays classified in business finance?",
      options: [
        "Both items are revenue expenditure because car factories operate welding robots every single day",
        "Both items are classified as internal sources of finance generated inside the factory",
        "Laser-welding robots are revenue expenditure; monthly electricity bills are capital expenditure",
        "Robots are capital expenditure (assets lasting > 1 year); electricity and oil are revenue expenditure",
      ],
      answerIndex: 3,
      hints: [
        "Distinguish spending on long-term non-current assets (> 1 year) from recurring day-to-day operational expenses.",
        "Which term describes £145m of factory robotics versus monthly power bills?",
      ],
      explanation:
        "Capital expenditure buys long-term non-current assets such as £145m welding robots that generate productive capacity over many years, whereas revenue expenditure covers ongoing day-to-day running costs like power and lubricants.",
    },
    {
      id: "exam-p2a-q18",
      topicId: "sources-cashflow-breakeven",
      guideRef: "breakeven-calculation",
      kind: "short",
      difficulty: "core",
      question:
        "**KovaTech Electronics Corp** (8,500 employees) manufactures smart air purifiers on an automated line in Penang:\n\n- Annual fixed factory overheads: **$2,250,000**\n- Wholesale selling price per purifier: **$150**\n- Variable cost per purifier (HEPA filter, sensors, casing): **$60**\n\nCalculate the annual **break-even output** (in units).",
      answer: {
        type: "number",
        value: 25000,
        display: "25,000 units",
      },
      traps: [
        {
          spec: { type: "number", value: 15000 },
          feedback: "You divided Fixed Costs by Selling Price ($150)! Divide by Contribution per unit ($150 − $60 = $90).",
        },
        {
          spec: { type: "number", value: 37500 },
          feedback: "You divided Fixed Costs by Variable Cost ($60) instead of Contribution per unit ($90)!",
        },
        {
          spec: { type: "number", value: 10714, tolerance: 1 },
          feedback: "Subtract Variable Cost from Selling Price ($150 − $60 = $90) — don't add them!",
        },
      ],
      hints: [
        "Contribution per purifier = $150 − $60 = $90.",
        "Break-Even Output = Fixed Costs ($2,250,000) ÷ Contribution per unit ($90).",
      ],
      solution: [
        "Contribution per unit = $150 − $60 = $90.",
        "Break-even output = $2,250,000 ÷ $90 = **25,000** units.",
      ],
      commonError: "Dividing Fixed Costs by Selling Price ($150) instead of Contribution per unit ($90).",
    },
    {
      id: "exam-p2a-q19",
      topicId: "sources-cashflow-breakeven",
      guideRef: "cash-flow-forecasting",
      kind: "short",
      difficulty: "core",
      question:
        "**VoltDrive Motors Plc** (3,200 employees) prepares its Quarter 3 cash-flow summary (all figures in **£ million**):\n\n| Q3 Cash-Flow Item | £ million |\n|---|---|\n| Opening Cash Balance | 6.8 |\n| Cash Inflows (fleet EV sales & green grant) | 92.4 |\n| Cash Outflows (battery cells, capex & payroll) | 85.0 |\n\nCalculate the **Closing Cash Balance** at the end of Quarter 3 **in £ million** *(e.g. write `14.2` for £14.2 million)*.",
      answer: {
        type: "number",
        value: 14.2,
        display: "14.2",
      },
      traps: [
        {
          spec: { type: "number", value: 7.4 },
          feedback: "7.4 (£7.4m) is Quarter 3's Net Cash Flow (92.4 − 85.0). Add the Opening Cash Balance of 6.8!",
        },
        {
          spec: { type: "number", value: -0.6 },
          feedback: "Inflows (92.4) are larger than Outflows (85.0), so Net Cash Flow is +7.4 (not −7.4)! Add +7.4 to 6.8.",
        },
      ],
      hints: [
        "Net Cash Flow = 92.4 − 85.0 (£ million).",
        "Closing Cash Balance = Opening Cash Balance (6.8) + Net Cash Flow.",
      ],
      solution: [
        "Net Cash Flow = £92.4m − £85.0m = +£7.4m.",
        "Closing Cash Balance = £6.8m + £7.4m = **14.2** (£14.2 million).",
      ],
      commonError: "Stopping at Net Cash Flow (7.4) and forgetting to add the Opening Balance (6.8).",
    },
    {
      id: "exam-p2a-q20",
      topicId: "sources-cashflow-breakeven",
      guideRef: "internal-external-finance",
      kind: "written",
      difficulty: "challenge",
      marks: 9,
      question:
        "**VoltDrive Motors Plc** (3,200 employees) plans to build a **£240 million solid-state battery assembly hall** in Sunderland. Existing long-term debt already stands at 48% of capital employed, and central bank interest rates are 5.25%. The Board is comparing:\n\n- **Source 1**: Raising £240 million via a **new ordinary share issue** on the stock exchange.\n- **Source 2**: Borrowing £240 million via a **10-year fixed-interest bank syndicate loan**.\n\n**Assess** which source of finance VoltDrive Motors Plc should choose. *(9 marks)*",
      hints: [
        "Use the crucial Paper 2 clues in the stem: **existing gearing is already 48%** and **interest rates are high at 5.25%**!",
        "Weigh Source 1 (permanent interest-free equity that lowers gearing vs dilution of existing shareholders' control/hostile takeover vulnerability + underwriting fees + future dividend expectations) against Source 2 (no ownership dilution vs heavy annual fixed interest ~£12.6m+/yr regardless of EV sales cycles), and conclude!",
      ],
      modelAnswer:
        "Issuing £240 million of new ordinary shares provides permanent long-term equity that never has to be repaid and carries zero mandatory annual interest charges — a major advantage while solid-state battery lines take years to reach full profitability. Crucially, because VoltDrive's long-term debt already represents 48% of capital employed, raising equity strengthens the balance sheet rather than pushing gearing to risky levels. However, issuing millions of new shares incurs heavy investment-bank underwriting costs, dilutes existing shareholders' voting power and future earnings per share, and could depress the share price.\n\nConversely, a 10-year syndicated bank loan preserves current shareholders' full ownership percentage and avoids permanent dividend claims once the loan is repaid. Yet borrowing an extra £240 million when central bank base rates stand at 5.25% locks VoltDrive into well over £12.6 million of compulsory annual interest outflows regardless of cyclical EV demand, pushing gearing sharply higher and raising financial risk if battery production is delayed.\n\nOverall, VoltDrive Motors Plc should choose the new ordinary share issue (or fund the majority via equity): with existing debt already near half of capital employed and interest rates elevated at 5.25%, taking on another £240 million of debt creates excessive fixed-interest vulnerability during a multi-year R&D ramp-up, outweighing temporary share dilution.",
      markScheme: [
        {
          point: "Explains key benefit of share capital: permanent capital with no repayment date and no mandatory interest payments.",
          keywords: ["permanent", "never has to be repaid", "no mandatory", "zero mandatory", "interest-free"],
        },
        {
          point: "Links equity benefit to multi-year battery ramp-up or already high 48% debt/gearing ratio.",
          keywords: ["gearing", "48%", "balance sheet", "ramp-up"],
        },
        {
          point: "Analyses drawbacks of share issue (dilution of ownership/voting control, underwriting fees or share-price pressure).",
          keywords: ["dilut", "voting", "underwriting", "earnings per share"],
        },
        {
          point: "Explains key benefit of bank loan (no dilution of existing shareholders' control / finite 10-year claim).",
          keywords: ["preserve", "no dilution", "full ownership", "once the loan is repaid"],
        },
        {
          point: "Uses high 5.25% interest-rate clue (heavy compulsory annual interest ~£12.6m+ even if EV profits dip).",
          keywords: ["5.25%", "12.6", "compulsory", "cyclical", "regardless"],
        },
        {
          point: "Develops financial risk of extra £240m debt on top of 48% gearing (credit-rating downgrade / covenant breach if delayed).",
          keywords: ["financial risk", "delayed", "excessive", "vulnerability"],
        },
        {
          point: "Contrasts flexible dividends (paid only when profitable) against legally binding loan interest.",
          keywords: ["dividend", "profitable", "outflow"],
        },
        {
          point: "States a clear, explicit recommendation between Source 1 and Source 2.",
          keywords: ["overall", "should choose", "recommend"],
        },
        {
          point: "Justifies choice directly using both the 48% existing debt burden and 5.25% interest-rate environment.",
          keywords: ["elevated", "outweigh", "near half", "multi-year"],
        },
      ],
      commonError: "Ignoring the two vital data clues in the stem (48% existing debt ratio and 5.25% interest rates) when comparing debt vs PLC share capital.",
    },
    {
      id: "exam-p2a-q21",
      topicId: "sources-cashflow-breakeven",
      guideRef: "breakeven-charts-mos",
      kind: "mcq",
      difficulty: "core",
      question:
        "On **StrideCore Sportswear Plc's** break-even chart for a factory producing 1.2 million trainers per year, global synthetic-rubber inflation raises **variable cost per pair by £4**, while selling price and fixed costs remain unchanged.\n\nHow does the break-even chart change?",
      options: [
        "The Total Cost line pivots steeper, raising the break-even output and shrinking the Margin of Safety",
        "The horizontal Fixed Cost line shifts vertically upwards while unit contribution rises",
        "The Total Revenue line becomes steeper, lowering the break-even point",
        "Break-even output falls because higher variable costs increase unit contribution",
      ],
      answerIndex: 0,
      hints: [
        "Fixed costs haven't changed, so the Total Cost y-intercept stays put — what happens to the *slope* of Total Costs when each extra pair costs £4 more?",
        "Smaller contribution per pair means StrideCore must sell *more* trainers to break even!",
      ],
      explanation:
        "Higher variable cost per unit steepens the gradient of the Total Cost line (starting from the same Fixed Cost intercept), cutting unit contribution by £4, pushing the break-even intersection to a higher output and narrowing the Margin of Safety.",
    },

    // -------------------------------------------------------------------------
    // 6. FINANCE: ACCOUNTS & RATIOS (5 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2a-q22",
      topicId: "accounts-ratios",
      guideRef: "profitability-ratios",
      kind: "short",
      difficulty: "core",
      question:
        "**StrideCore Sportswear Plc** (14,000 employees) reports the following annual income-statement figures:\n\n- **Revenue**: £800 million\n- **Gross Profit**: £360 million\n- **Distribution, Marketing & Administrative Expenses**: £268 million\n\nCalculate StrideCore's **Operating Profit Margin** as a percentage (**%**) to **1 decimal place**.",
      answer: {
        type: "number",
        value: 11.5,
        display: "11.5%",
      },
      traps: [
        {
          spec: { type: "number", value: 45 },
          feedback: "45% is the Gross Profit Margin (£360m ÷ £800m × 100)! First subtract £268m expenses from £360m to find Operating Profit (£92m).",
        },
        {
          spec: { type: "number", value: 25.56, tolerance: 0.05 },
          feedback: "You divided Operating Profit (£92m) by Gross Profit (£360m) — always divide by Revenue (£800m)!",
        },
        {
          spec: { type: "number", value: 92 },
          feedback: "£92 million is Operating Profit in £m — divide by Revenue (£800m) × 100 for Operating Profit Margin (%).",
        },
      ],
      hints: [
        "Step 1: Operating Profit = Gross Profit (£360m) − Expenses (£268m).",
        "Step 2: Operating Profit Margin (%) = (Operating Profit ÷ Revenue) × 100.",
      ],
      solution: [
        "Operating Profit = £360m − £268m = £92m.",
        "Operating Profit Margin = (£92m ÷ £800m) × 100 = **11.5%**.",
      ],
      commonError: "Calculating Gross Profit Margin (45%) or dividing Operating Profit by Gross Profit instead of Revenue.",
    },
    {
      id: "exam-p2a-q23",
      topicId: "accounts-ratios",
      guideRef: "roce-performance",
      kind: "short",
      difficulty: "core",
      question:
        "**VoltDrive Motors Plc** (3,200 employees) reports:\n\n- **Operating Profit**: £132 million\n- **Total Equity**: £520 million\n- **Non-Current Liabilities (green corporate bonds)**: £280 million\n\nCalculate **Return on Capital Employed (ROCE)** as a percentage (**%**) to **1 decimal place**.",
      answer: {
        type: "number",
        value: 16.5,
        display: "16.5%",
      },
      traps: [
        {
          spec: { type: "number", value: 25.38, tolerance: 0.05 },
          feedback: "Include Non-Current Liabilities (£280m) in Capital Employed: £520m + £280m = £800m!",
        },
        {
          spec: { type: "number", value: 55 },
          feedback: "Add Total Equity + Non-Current Liabilities (£520m + £280m = £800m) — don't subtract them!",
        },
        {
          spec: { type: "number", value: 800 },
          feedback: "£800 million is Capital Employed — now compute (132 ÷ 800) × 100!",
        },
      ],
      hints: [
        "Capital Employed = Total Equity (£520m) + Non-Current Liabilities (£280m).",
        "ROCE (%) = (Operating Profit ÷ Capital Employed) × 100.",
      ],
      solution: [
        "Capital Employed = £520m + £280m = £800m.",
        "ROCE = (£132m ÷ £800m) × 100 = **16.5%**.",
      ],
      commonError: "Dividing Operating Profit by Total Equity alone instead of Total Equity + Non-Current Liabilities.",
    },
    {
      id: "exam-p2a-q24",
      topicId: "accounts-ratios",
      guideRef: "liquidity-ratios",
      kind: "short",
      difficulty: "challenge",
      question:
        "Balance-sheet extract for **FreshMart Supermarkets Plc** (45,000 employees, in **£ million**):\n\n| Item | £ million |\n|---|---|\n| Inventory (grocery stock across 620 stores) | 660 |\n| Trade Receivables | 90 |\n| Cash and Cash Equivalents | 270 |\n| Current Liabilities (trade payables owed to suppliers) | 800 |\n\nCalculate FreshMart's **Acid-Test (Quick) Ratio** to **2 decimal places**.",
      answer: {
        type: "number",
        value: 0.45,
        display: "0.45 : 1",
      },
      traps: [
        {
          spec: { type: "number", value: 1.28, tolerance: 0.01 },
          feedback:
            "1.275 (1.28 : 1) is the Current Ratio (1,020 ÷ 800)! Exclude Inventory (£660m) from the numerator for the Acid-Test Ratio.",
        },
        {
          spec: { type: "number", value: 0.34, tolerance: 0.01 },
          feedback: "Include Trade Receivables (£90m) alongside Cash (£270m): (90 + 270) ÷ 800 = 0.45!",
        },
        {
          spec: { type: "number", value: 2.22, tolerance: 0.02 },
          feedback: "Upside down! Divide Liquid Assets (£360m) by Current Liabilities (£800m).",
        },
      ],
      hints: [
        "Liquid Assets = Current Assets − Inventory = Trade Receivables (£90m) + Cash (£270m) = £360m.",
        "Acid-Test Ratio = £360m ÷ £800m.",
      ],
      solution: [
        "Liquid Assets (excluding £660m grocery inventory) = £90m + £270m = £360m.",
        "Acid-Test Ratio = £360m ÷ £800m = **0.45 : 1** (or **0.45**).",
      ],
      commonError: "Including £660m of grocery inventory and calculating the Current Ratio (1.28 : 1) instead.",
    },
    {
      id: "exam-p2a-q25",
      topicId: "accounts-ratios",
      guideRef: "financial-position",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "On **KovaTech Electronics Corp's** Statement of Financial Position, where would **patents, automated semiconductor machinery and factory buildings** appear?",
      options: [
        "Current assets — because factories can be sold for cash at lunchtime",
        "Current liabilities — because machines use electricity every month",
        "Non-current assets — long-term productive resources held for more than one year",
        "Trade payables — short-term bills owed to component suppliers",
      ],
      answerIndex: 2,
      hints: [
        "Does KovaTech hold factories, semiconductor machines and patents to resell tomorrow (< 12 months) or to generate revenue over many years (> 12 months)?",
        "Are they assets owned or liabilities owed?",
      ],
      explanation:
        "Factories, automated machinery (tangible) and patents (intangible) are resources owned by KovaTech for long-term use (> 1 year) rather than immediate resale, placing them under non-current assets.",
    },
    {
      id: "exam-p2a-q26",
      topicId: "accounts-ratios",
      guideRef: "liquidity-ratios",
      kind: "written",
      difficulty: "challenge",
      marks: 9,
      question:
        "A financial newspaper warns investors to sell shares in **FreshMart Supermarkets Plc** (45,000 employees, 620 stores) because its **Acid-Test Ratio is only 0.45 : 1**, far below the textbook 1 : 1 benchmark.\n\n**Assess** whether an Acid-Test Ratio of 0.45 : 1 means FreshMart Supermarkets Plc is at serious risk of insolvency. *(9 marks)*",
      hints: [
        "First show why 0.45 : 1 *looks* alarming on textbook theory (only 45p of cash/receivables per £1 of short-term debt if all suppliers demanded payment today).",
        "Then unleash the **supermarket working-capital model**: shoppers pay instant cash/debit card at checkouts (tiny receivables), grocery inventory turns into cash in days (unlike slow-moving machinery!), and giant supermarkets enjoy 60-day supplier trade credit due to buyer power!",
      ],
      modelAnswer:
        "At face value, an Acid-Test Ratio of 0.45 : 1 sits well below the standard 1 : 1 textbook benchmark, showing FreshMart holds only 45p of cash and receivables for every £1 of current liabilities. If food suppliers lost confidence and demanded immediate cash on delivery, or if a sudden IT outage halted store checkouts, FreshMart could face an acute short-term liquidity squeeze.\n\nHowever, applying manufacturing benchmarks blindly to a 620-store supermarket chain is misleading because grocery retail operates a structurally negative working-capital cycle. Millions of shoppers pay instantly by card or cash at checkouts while perishable food inventory turns into cash within days — meaning FreshMart's inventory is almost as liquid as cash itself. Meanwhile, a 45,000-employee chain wields immense buyer power to negotiate 45-to-60-day trade credit from suppliers, inflating current liabilities interest-free long after the groceries have already been sold for cash.\n\nOverall, 0.45 : 1 does NOT signal imminent insolvency for FreshMart Supermarkets Plc, provided it is in line with rival supermarket chains and daily checkout cash inflows remain strong; investors should compare FreshMart against grocery-sector peers rather than a rigid 1 : 1 manufacturing rule.",
      markScheme: [
        {
          point: "Interprets 0.45 : 1 accurately (45p of liquid assets per £1 of current liabilities, below the 1 : 1 textbook norm).",
          keywords: ["45p", "1 : 1", "1:1", "benchmark", "textbook"],
        },
        {
          point: "Explains theoretical danger if suppliers withdraw credit terms or a sudden cash shock hits.",
          keywords: ["withdraw credit", "immediate cash", "lost confidence", "squeeze", "shock"],
        },
        {
          point: "Applies supermarket cash-sales model (customers pay immediately at checkouts, so receivables are naturally low).",
          keywords: ["checkout", "instant", "card", "immediately"],
        },
        {
          point: "Explains fast stock turnover in grocery retail (food inventory sells within days, unlike slow manufacturing stock).",
          keywords: ["within days", "fast", "perishable", "turns into cash", "stock turnover"],
        },
        {
          point: "Applies supermarket buyer power over suppliers (45–60 days trade credit inflates current liabilities safely).",
          keywords: ["buyer power", "trade credit", "60-day", "45-to-60", "supplier"],
        },
        {
          point: "Notes cash is collected from shoppers weeks before supplier invoices fall due.",
          keywords: ["long after", "before supplier", "already been sold", "negative working-capital"],
        },
        {
          point: "Notes limitation of a single balance-sheet date (need multi-year trend and industry peer comparison).",
          keywords: ["peer", "rival supermarket", "trend", "sector"],
        },
        {
          point: "Forms a clear overall judgement rejecting the newspaper's panic claim.",
          keywords: ["overall", "does not signal", "misleading", "not at serious"],
        },
        {
          point: "Qualifies judgement (safe provided daily sales velocity holds and suppliers retain confidence).",
          keywords: ["provided", "daily", "remain strong", "compare"],
        },
      ],
      commonError: "Concluding that 0.45 : 1 automatically means FreshMart is going bankrupt, missing how cash-rich supermarkets sell stock in days while paying suppliers in 60 days!",
    },

    // -------------------------------------------------------------------------
    // 7. MARKETING & BUSINESS OPERATIONS (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2a-q27",
      topicId: "marketing-and-operations",
      guideRef: "marketing-mix-4ps",
      kind: "mcq",
      difficulty: "core",
      question:
        "**KovaTech Electronics Corp** (8,500 employees) analyses its product portfolio using the **Boston Matrix**. Its flagship 4K OLED television holds a **34% market share** in a saturated market growing at just **0.5% per year**, generating huge net cash surpluses.\n\nHow is this 4K OLED television classified, and how should KovaTech use its cash surplus?",
      options: [
        "Dog — shut down all television factories tomorrow morning",
        "Cash Cow — 'milk' its strong net cash inflows to fund R&D and promotion for high-growth 'Stars' and 'Question Marks' (such as AI home robots)",
        "Question Mark — borrow billions to double factory capacity in a stagnant 0.5%-growth market",
        "Star — slash prices below variable cost until cash reserves hit zero",
      ],
      answerIndex: 1,
      hints: [
        "High market share (34%) + Low market growth (0.5%) = which quadrant of the Boston Matrix?",
        "How does a balanced multi-product PLC deploy cash generated by that quadrant?",
      ],
      explanation:
        "High market share in a low-growth mature market defines a Cash Cow. Because little heavy capacity investment is needed in a 0.5%-growth market, KovaTech can harvest ('milk') its strong cash inflows to finance R&D and marketing for emerging Question Marks and Stars.",
    },
    {
      id: "exam-p2a-q28",
      topicId: "marketing-and-operations",
      guideRef: "economies-scale-quality",
      kind: "short",
      difficulty: "core",
      question:
        "**KovaTech Electronics Corp** (8,500 employees) produces **120,000 curved gaming monitors per quarter** at its automated plant:\n\n- Quarterly Fixed Costs: **£7,800,000**\n- Quarterly Total Variable Costs: **£14,400,000**\n\nCalculate the **average unit cost** (£) per monitor.",
      answer: {
        type: "number",
        value: 185,
        display: "£185",
      },
      traps: [
        {
          spec: { type: "number", value: 120 },
          feedback: "£120 is only the variable cost per monitor (£14,400,000 ÷ 120,000) — include Fixed Costs (£7,800,000) in Total Cost first!",
        },
        {
          spec: { type: "number", value: 65 },
          feedback: "£65 is only the fixed cost per monitor (£7,800,000 ÷ 120,000) — add Variable Costs (£14,400,000) as well!",
        },
        {
          spec: { type: "number", value: 22200000 },
          feedback: "£22,200,000 is Total Cost — divide by output (120,000 monitors) to find average unit cost!",
        },
      ],
      hints: [
        "Step 1: Total Cost = Fixed Costs (£7,800,000) + Total Variable Costs (£14,400,000).",
        "Step 2: Average Unit Cost = Total Cost ÷ Output (120,000).",
      ],
      solution: [
        "Total Cost = £7,800,000 + £14,400,000 = £22,200,000.",
        "Average Unit Cost = £22,200,000 ÷ 120,000 = **£185** per monitor.",
      ],
      commonError: "Dividing only Variable Costs or only Fixed Costs by output instead of Total Costs.",
    },
    {
      id: "exam-p2a-q29",
      topicId: "marketing-and-operations",
      guideRef: "production-lean-jit",
      kind: "short",
      difficulty: "core",
      question:
        "At **VoltDrive Motors Plc** (3,200 total employees), **2,400 assembly-line technicians** manufacture **30,000 electric vehicles per year**.\n\nCalculate the annual **labour productivity per assembly-line technician** (in vehicles/units, to **1 decimal place**).",
      answer: {
        type: "number",
        value: 12.5,
        display: "12.5 units per worker",
      },
      traps: [
        {
          spec: { type: "number", value: 9.38, tolerance: 0.02 },
          feedback: "Read carefully: divide 30,000 vehicles by the **2,400 assembly-line technicians** (not all 3,200 employees)!",
        },
        {
          spec: { type: "number", value: 0.08 },
          feedback: "Upside down! Divide Total Output (30,000) by Number of Technicians (2,400).",
        },
      ],
      hints: [
        "Formula: Labour Productivity = Total Output ÷ Number of Assembly-Line Technicians.",
        "Calculate 30,000 ÷ 2,400.",
      ],
      solution: [
        "Labour Productivity = 30,000 ÷ 2,400 = **12.5** vehicles per technician per year.",
      ],
      commonError: "Dividing by total company headcount (3,200) instead of the 2,400 assembly-line technicians specified.",
    },
    {
      id: "exam-p2a-q30",
      topicId: "marketing-and-operations",
      guideRef: "economies-scale-quality",
      kind: "written",
      difficulty: "challenge",
      marks: 12,
      question:
        "Over five years, **StrideCore Sportswear Plc** has expanded from 5,500 to **14,000 employees** across 18 countries by acquiring three rival footwear brands. The CEO now proposes merging all global shoe production into **two giant mega-factories** in Southeast Asia producing 45 million pairs a year to maximise **economies of scale**. However, the Operations Director warns that **diseconomies of scale** and rising defect returns are already emerging.\n\n**Evaluate** whether centralising production into two giant mega-factories will lower average unit costs and improve StrideCore's competitiveness. *(12 marks — use AJIM evaluation)*",
      hints: [
        "Analyse the powerful **internal economies of scale** (bulk purchasing discounts on EVA foam/textiles, technical economies from 24/7 robotic flow lines, managerial/financial economies).",
        "Counter with **diseconomies of scale & concentration risks** (communication breakdown across 14,000 staff & acquired cultures, worker alienation on monotonous mega-lines hurting defect rates, coordination complexity, plus single-region disruption risk), and conclude with a sharp **AJIM** judgement (e.g. pairing mega-factories with **TQM / autonomous cell teams**!).",
      ],
      modelAnswer:
        "Consolidating 45 million pairs of footwear into two giant mega-factories unlocks substantial internal economies of scale for StrideCore Plc. Ordering synthetic mesh and EVA midsoles in massive volumes strengthens purchasing power to negotiate deep bulk discounts from Asian chemical suppliers, while high volumes justify technical economies of scale — spreading the fixed capital cost of automated laser-cutting and continuous flow-production lines thinly across millions of pairs to slash average unit cost.\n\nHowever, rapid takeover-led growth to 14,000 staff already shows signs of diseconomies of scale that mega-factories could worsen. Managing thousands of operatives on repetitive mass-production lines often breeds worker alienation, high absenteeism and careless stitching errors — driving up warranty returns and scrap costs so average unit cost starts rising again. Coordinating schedules, IT systems and different corporate cultures across three acquired brands also stretches senior management, causing bureaucratic delays and communication distortion.\n\nOverall, centralising into two mega-factories WILL improve StrideCore's cost competitiveness, provided management actively prevents quality and morale collapse (Answer). In global athleisure against giants like Nike and Adidas, purchasing and technical economies on 45 million pairs are indispensable for protecting gross margins and funding global sponsorship (Justify). Success depends on embedding Total Quality Management (TQM) and Kaizen cell teams inside both plants so workers take ownership of zero-defect standards rather than feeling alienated, and on whether concentrating 100% of output in one region exposes StrideCore to shipping bottlenecks or tariffs (It depends on). Ultimately, whether technical and purchasing cost savings outweigh rework and coordination diseconomies hinges on effective TQM and post-takeover cultural integration (Most important).",
      markScheme: [
        {
          point: "Analyses purchasing economies of scale (bulk buying discounts on foam/textiles across 45 million pairs).",
          keywords: ["purchasing", "bulk", "bargaining", "midsole", "mesh"],
        },
        {
          point: "Analyses technical economies of scale (automated flow machinery fixed costs spread across 45m units lowers average unit cost).",
          keywords: ["technical economies", "laser", "flow-production", "spread", "average unit cost"],
        },
        {
          point: "Links lower unit costs to competitive advantage (higher profit margins to fund R&D/sponsorship or sharper pricing).",
          keywords: ["gross margin", "sponsorship", "nike", "competit"],
        },
        {
          point: "Analyses worker alienation / monotony diseconomy on giant assembly lines (absenteeism, turnover and rising defect/scrap costs).",
          keywords: ["alienat", "absentee", "monoton", "scrap", "warranty"],
        },
        {
          point: "Analyses coordination & communication diseconomies across 14,000 staff and three acquired brand cultures.",
          keywords: ["coordinat", "bureaucra", "culture", "acquired", "distortion"],
        },
        {
          point: "Identifies geographic concentration risk (putting all 45m pairs in two Asian sites risks port strikes, tariffs or climate disruption).",
          keywords: ["concentrat", "tariff", "shipping", "bottleneck"],
        },
        {
          point: "Links operational quality management (TQM / Kaizen / cell teams) to preventing defect diseconomies.",
          keywords: ["total quality management", "tqm", "kaizen", "cell", "zero-defect"],
        },
        {
          point: "AJIM — Answer: gives a clear conditional recommendation on the mega-factory strategy.",
          keywords: ["overall", "will improve", "provided", "should"],
        },
        {
          point: "AJIM — Justify: explains why global sportswear rivals force StrideCore to capture scale efficiencies.",
          keywords: ["indispensable", "global athleisure", "45 million"],
        },
        {
          point: "AJIM — It depends on (1): successful implementation of TQM / employee empowerment on the factory floor.",
          keywords: ["depends on", "embedding", "ownership"],
        },
        {
          point: "AJIM — It depends on (2): supply-chain resilience / trade barriers when output is concentrated in two sites.",
          keywords: ["one region", "expose", "resilien"],
        },
        {
          point: "AJIM — Most important factor: concludes that post-merger integration & quality culture determine whether unit costs actually fall.",
          keywords: ["ultimately", "hinges on", "integration", "outweigh", "most important"],
        },
      ],
      commonError: "Assuming bigger factories *always* lower unit costs forever without analysing communication, coordination and alienation diseconomies of scale.",
    },
  ],
};
