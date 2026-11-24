import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "motivation-organisation-m1",
    title: "Paper 1 — Motivation Theories & Financial Rewards",
    questions: [
      {
        id: "motivation-organisation-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "motivation-theories",
        question:
          "Which motivation theorist argued that employees are motivated primarily by money and should be paid per unit produced (**piece-rate**)?",
        options: [
          "Frederick Winslow Taylor",
          "Abraham Maslow",
          "Frederick Herzberg",
          "Elton Mayo",
        ],
        answerIndex: 0,
        hints: [
          "Think of 'Scientific Management', time-and-motion stopwatch studies, and factory division of labour.",
        ],
        explanation:
          "**F.W. Taylor** (Scientific Management) viewed workers as 'economic man' driven mainly by financial gain, advocating strict task specialisation and piece-rate wages rather than Maslow's psychological pyramid or Herzberg's intrinsic motivators.",
      },
      {
        id: "motivation-organisation-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "motivation-theories",
        question:
          "In Abraham Maslow's Hierarchy of Needs, which tier sits **immediately above** Physiological needs?",
        options: [
          "Social (love and belonging) needs",
          "Safety and security needs",
          "Esteem needs",
          "Self-actualisation",
        ],
        answerIndex: 1,
        hints: [
          "Recall the 5 tiers from bottom to top: survival wages come first — what does a worker worry about next (contracts, H&S, sick pay)?",
        ],
        explanation:
          "Maslow's pyramid rises in order: **Physiological → Safety/Security → Social → Esteem → Self-actualisation**. Once basic living needs are met, permanent contracts and safe working conditions come next.",
      },
      {
        id: "motivation-organisation-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motivation-theories",
        question:
          "According to Frederick Herzberg's Two-Factor Theory, which of the following is classified as a **motivator** rather than a hygiene factor?",
        options: [
          "Clean, air-conditioned factory working conditions",
          "A permanent employment contract with pension rights",
          "Delegated responsibility for solving client problems",
          "Fair company administration and break policies",
        ],
        answerIndex: 2,
        hints: [
          "Hygiene factors surround the job (conditions, security, rules); motivators are built into the challenge of the work itself.",
          "Look for something that gives an employee vertical growth and personal ownership.",
        ],
        explanation:
          "**Delegated responsibility** (along with achievement, recognition, interesting work and advancement) is a **Herzberg motivator** that creates job satisfaction. Working conditions, job security and company policy are **hygiene factors** that merely prevent dissatisfaction.",
      },
      {
        id: "motivation-organisation-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motivation-theories",
        question:
          "GreenLeaf Café employs an average of **25 baristas** across its three branches. Over the past 12 months, **5 baristas** left the business. What is GreenLeaf Café's annual **labour turnover**?",
        options: ["5%", "15%", "20%", "25%"],
        answerIndex: 2,
        hints: [
          "Use Labour Turnover (%) = (Staff leaving ÷ Average number of staff) × 100.",
          "Compute (5 ÷ 25) × 100.",
        ],
        explanation:
          "Labour turnover = {{(5 / 25) * 100 = 20%}}. Confusing the headcount (25) with the percentage (25%) is a classic exam slip.",
      },
      {
        id: "motivation-organisation-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-rewards",
        question:
          "Nadia runs a small **sole trader** hair salon employing 4 stylists (Paper 1 context). Which financial method of motivation is **legally impossible** for Nadia to offer her stylists?",
        options: [
          "Sales commission on haircare products sold",
          "An annual Christmas bonus tied to salon profit",
          "Fringe benefits such as free styling and staff discounts",
          "An employee share ownership scheme",
        ],
        answerIndex: 3,
        hints: [
          "Check the legal ownership structure in the stem: Nadia is an *unincorporated* sole trader.",
          "Which reward exists only in incorporated companies (Ltds and PLCs)?",
        ],
        explanation:
          "A **sole trader** is unincorporated and **has no shares** to issue! Share ownership schemes can only be offered by private limited companies (**Ltd**) or public limited companies (**Plc**).",
      },
      {
        id: "motivation-organisation-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-rewards",
        question:
          "A warehouse packer is paid under a differentiated piece-rate scheme:\n\n| Weekly Output Band | Piece Rate per Box |\n|---|---|\n| First 200 boxes | £1.20 per box |\n| Every box above 200 | £1.60 per box |\n\nIf Samir packs **260 boxes** in a week, what is his gross pay?",
        options: ["£312", "£336", "£392", "£416"],
        answerIndex: 1,
        hints: [
          "Split the 260 boxes into the first 200 boxes and the extra 60 boxes above 200.",
          "Calculate (200 × £1.20) + (60 × £1.60).",
        ],
        explanation:
          "First 200 boxes = {{200 * 1.20 = 240}} (£240). Extra 60 boxes = {{60 * 1.60 = 96}} (£96). Total gross pay = {{240 + 96 = 336}} (**£336**). Multiplying all 260 boxes by £1.60 (£416) or £1.20 (£312) ignores the tiered band.",
      },
      {
        id: "motivation-organisation-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-rewards",
        question:
          "An electronics sales executive receives a monthly basic salary of **£1,500** plus **3% commission** on monthly sales **above £12,000**. In November she generates **£32,000** in sales. What is her gross pay for November?",
        options: ["£2,100", "£2,460", "£2,160", "£960"],
        answerIndex: 0,
        hints: [
          "Commission applies only to sales *above* £12,000 — subtract £12,000 from £32,000 first.",
          "Calculate 3% of £20,000, then add the £1,500 base salary.",
        ],
        explanation:
          "Commissionable sales = {{32000 - 12000 = 20000}} (£20,000). Commission = {{20000 * 0.03 = 600}} (£600). Total gross pay = {{1500 + 600 = 2100}} (**£2,100**). Taking 3% of all £32,000 (£2,460) forgets the £12,000 threshold.",
      },
      {
        id: "motivation-organisation-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "financial-rewards",
        question:
          "Which of the following is an example of a **fringe benefit (perk)** rather than direct cash pay?",
        options: [
          "Overtime paid at 1.5 times the hourly wage",
          "Piece-rate payment per garment stitched",
          "A 5% sales commission on new client contracts",
          "Private medical insurance and a subsidised staff gym",
        ],
        answerIndex: 3,
        hints: [
          "Fringe benefits are non-cash extras with monetary value provided alongside wages or salary.",
        ],
        explanation:
          "**Private medical insurance and a subsidised gym** (along with company cars and staff discounts) are non-cash **fringe benefits** that aid retention, whereas overtime, piece-rate and commission are direct cash payments.",
      },
      {
        id: "motivation-organisation-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motivation-theories",
        question:
          "Why does high **labour motivation** typically improve a manufacturer's **operating profit margin**?",
        options: [
          "Higher labour productivity reduces average labour cost per unit and cuts recruitment spending from lower staff turnover",
          "Higher motivation automatically reduces corporation tax rates charged by the government",
          "Motivated staff eliminate all fixed rent and insurance expenses",
          "Higher motivation guarantees that raw material suppliers lower their wholesale prices",
        ],
        answerIndex: 0,
        hints: [
          "Connect motivation to output per worker (unit cost) and staff retention (HR overhead expenses).",
          "Eliminate statements about external tax rates, fixed rent or supplier commodity prices.",
        ],
        explanation:
          "Motivated employees produce more units per hour (**lower unit labour cost**) and stay longer (**lower recruitment and induction training expenses**), lifting both gross and operating profit margins.",
      },
      {
        id: "motivation-organisation-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-rewards",
        question:
          "A luxury Swiss watchmaker relies on master craftsmen spending 40 hours hand-assembling each watch with zero defects. Which pay method is **most appropriate** to protect brand quality?",
        options: [
          "Pure piece-rate pay per watch completed",
          "100% sales commission with zero base pay",
          "A competitive annual salary with a quality-audited annual bonus",
          "Zero-hours casual daily cash payments",
        ],
        answerIndex: 2,
        hints: [
          "What would happen to precision craftsmanship if watchmakers were paid purely per watch rushed out?",
          "Master craftsmen need income security (Maslow safety) plus recognition for zero-defect excellence.",
        ],
        explanation:
          "Precision luxury goods require patience and zero defects; **annual salary** removes any incentive to rush, while a **quality-audited bonus** rewards precision. Pure piece-rate would encourage corner-cutting and ruin brand reputation.",
      },
      {
        id: "motivation-organisation-m1-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "motivation-theories",
        question:
          "Factory X has 20 workers producing 4,000 units per week. After introducing team bonuses and job rotation, 2 workers retire without being replaced, and the remaining **18 workers** produce **4,320 units** per week. By what percentage has **labour productivity** (output per worker) increased?",
        options: ["8%", "20%", "10%", "16%"],
        answerIndex: 1,
        hints: [
          "Calculate original output per worker (4,000 ÷ 20) and new output per worker (4,320 ÷ 18) first!",
          "Do NOT just find the % rise in total output (8%) — productivity is output *per worker*.",
        ],
        explanation:
          "Original productivity = {{4000 / 20 = 200}} units/worker. New productivity = {{4320 / 18 = 240}} units/worker. Percentage increase = {{((240 - 200) / 200) * 100 = 20%}}. Picking 8% confuses total output growth with labour productivity!",
      },
      {
        id: "motivation-organisation-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-rewards",
        question:
          "What is a well-known drawback of **profit-sharing** schemes in a large **Paper 2 PLC** employing 25,000 staff?",
        options: [
          "Employees want the company to waste materials to reduce profit",
          "Profit sharing forces the business to pay huge bonuses even in a loss-making year",
          "Profit sharing is illegal for public limited companies",
          "An individual worker sees very little direct link between their own daily effort and total group profit ('free-rider' dilution)",
        ],
        answerIndex: 3,
        hints: [
          "Think about how much 1 shelf-stacker's extra effort changes the annual profit of a 25,000-person supermarket giant.",
          "Also consider whether lazy colleagues still get the same percentage share.",
        ],
        explanation:
          "In a giant PLC, overall profit depends on macro factors, board strategy and 24,999 other staff — so one individual's hard work feels diluted, and underperforming 'free riders' receive the same profit-share percentage.",
      },
      {
        id: "motivation-organisation-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motivation-theories",
        question:
          "A tech firm already pays top-quartile salaries and offers permanent contracts, yet senior developers feel bored and unchallenged. Using **Maslow's Hierarchy of Needs**, which action will best motivate these developers?",
        options: [
          "Installing extra vending machines in the hallway (Physiological)",
          "Issuing high-visibility vests for office corridors (Safety)",
          "Giving developers 20% innovation time to lead experimental AI products (Self-actualisation)",
          "Rewriting the staff handbook on punctuality (Hygiene policy)",
        ],
        answerIndex: 2,
        hints: [
          "Under Maslow, once lower tiers (physiological and safety) are satisfied, offering more of them no longer motivates.",
          "Which choice targets creative fulfilment at the peak of the pyramid?",
        ],
        explanation:
          "Because salary and job security already satisfy Tiers 1–2, Maslow states management must target higher unsatisfied needs — **self-actualisation** via creative autonomy and challenging innovation projects.",
      },
      {
        id: "motivation-organisation-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-rewards",
        question:
          "Liam is contracted to work **36 standard hours** per week at **£11.00 per hour**, with overtime paid at **double time (2×)**. In December he works **41 hours** in one week. What is his gross pay for that week?",
        options: ["£451.00", "£478.50", "£506.00", "£902.00"],
        answerIndex: 2,
        hints: [
          "Separate the 41 hours into 36 standard hours and 5 overtime hours.",
          "Double time means £11.00 × 2 = £22.00 per overtime hour.",
        ],
        explanation:
          "Standard pay = {{36 * 11 = 396}} (£396). Overtime = {{41 - 36 = 5}} hours at {{11 * 2 = 22}} (£22/hr) = £110. Total gross pay = {{396 + 110 = 506}} (**£506.00**).",
      },
      {
        id: "motivation-organisation-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "motivation-theories",
        question:
          "Which statement **accurately** contrasts Maslow's Hierarchy of Needs with Herzberg's Two-Factor Theory?",
        options: [
          "Maslow treats basic pay as a potential motivator when survival needs are unmet, whereas Herzberg classifies basic pay strictly as a hygiene factor that prevents dissatisfaction",
          "Herzberg argues workers must climb five strict sequential steps, whereas Maslow splits workplace factors into two groups",
          "Both Maslow and Herzberg agree with F.W. Taylor that teamworking and recognition are pointless distractions",
          "Maslow applies only to public limited companies, whereas Herzberg applies only to sole traders",
        ],
        answerIndex: 0,
        hints: [
          "Think about how a low-paid worker struggling to buy food reacts to a wage rise under Maslow Tier 1 vs how Herzberg labels wages.",
          "Eliminate reversals of the five-tier pyramid and two-factor split.",
        ],
        explanation:
          "For **Maslow**, unmet **physiological/safety** needs (paid for by wages) actively motivate until satisfied; for **Herzberg**, base pay is a **hygiene factor** that stops dissatisfaction rather than creating intrinsic job satisfaction.",
      },
    ],
  },
  {
    id: "motivation-organisation-m2",
    title: "Paper 2 — Non-Financial Motivation & Organisational Hierarchies",
    questions: [
      {
        id: "motivation-organisation-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "non-financial-motivation",
        question:
          "Supermarket staff spend two hours on checkouts, two hours restocking bakery shelves, and two hours on click-and-collect packing. Which non-financial motivation method is this?",
        options: [
          "Job enrichment",
          "Job rotation",
          "Profit sharing",
          "Delayering",
        ],
        answerIndex: 1,
        hints: [
          "Workers are switching periodically between tasks of a similar skill level to reduce boredom.",
        ],
        explanation:
          "**Job rotation** switches employees systematically across same-level tasks, reducing monotony and creating multi-skilled cover when colleagues are off sick.",
      },
      {
        id: "motivation-organisation-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "non-financial-motivation",
        question:
          "Which change at an architectural practice is a genuine example of **job enrichment** (rather than job enlargement)?",
        options: [
          "Asking junior technicians to photocopy blueprints for three teams instead of one",
          "Requiring receptionists to water office plants and sort post alongside answering phones",
          "Training architectural assistants to run client sustainability briefings and sign off minor design revisions independently",
          "Rotating cleaners between the ground floor and second floor each Tuesday",
        ],
        answerIndex: 2,
        hints: [
          "Job enlargement adds *more* tasks at the same low level; job enrichment adds *vertical* skill, autonomy and authority.",
          "Which scenario hands over higher-level client responsibility and decision sign-off?",
        ],
        explanation:
          "Leading client briefings and signing off design revisions adds **vertical complexity, skill and authority** (**job enrichment** — a Herzberg motivator). Photocopying more plans or watering plants is horizontal **job enlargement**.",
      },
      {
        id: "motivation-organisation-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "organisational-charts",
        question: "What is meant by a manager's **span of control**?",
        options: [
          "The total number of years the manager has worked at the company",
          "The number of layers from the CEO to the shop floor",
          "The number of subordinates who report directly to that manager",
          "The geographical radius of branches visited by the manager",
        ],
        answerIndex: 2,
        hints: [
          "Focus on the direct vertical reporting lines immediately beneath one manager on an org chart.",
        ],
        explanation:
          "**Span of control** is strictly the number of **direct subordinates** immediately accountable to a single manager — never all staff further down the pyramid.",
      },
      {
        id: "motivation-organisation-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "organisational-charts",
        question:
          "Study the headcount summary of Apex Logistics Ltd's organisational chart:\n\n| Layer | Role | Reporting Rule |\n|---|---|---|\n| 1 | 1 Managing Director | Directly manages all 4 Regional Managers |\n| 2 | 4 Regional Managers | Each directly manages 5 Depot Supervisors |\n| 3 | 20 Depot Supervisors | Each directly supervises 9 Drivers |\n| 4 | 180 Drivers | Frontline staff |\n\nWhat is **one Regional Manager's** span of control?",
        options: ["4", "5", "45", "50"],
        answerIndex: 1,
        hints: [
          "Read the row for Regional Managers carefully: who reports *directly* to ONE Regional Manager?",
          "Do NOT include the 45 drivers two tiers below!",
        ],
        explanation:
          "Each Regional Manager directly manages **5** Depot Supervisors, so their span of control is **5**. Counting 45 or 50 mistakenly includes indirect subordinates (Drivers).",
      },
      {
        id: "motivation-organisation-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "organisational-charts",
        question:
          "Which statement about **delegation** earns full marks in an Edexcel 4BS1 exam?",
        options: [
          "The manager passes both authority and final legal accountability down to the subordinate",
          "Subordinates vote to remove a layer of middle management",
          "Head office takes back all local decision-making from branch managers",
          "The manager passes authority to carry out a task down to a subordinate, while ultimate responsibility remains with the manager",
        ],
        answerIndex: 3,
        hints: [
          "Remember the Golden Rule: what goes DOWN vs what stays UP with the manager?",
          "If a delegated task goes wrong, can the manager blame the junior worker to escape board accountability?",
        ],
        explanation:
          "Delegation transfers **authority** to execute tasks downward (empowering staff and freeing senior time), but **ultimate responsibility/accountability** always remains with the delegating manager.",
      },
      {
        id: "motivation-organisation-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "organisational-charts",
        question:
          "Compared with a **flat** organisational structure, a **tall** organisational structure typically features:",
        options: [
          "A wider span of control and faster upward communication",
          "A narrower span of control, more management layers and more promotion opportunities",
          "Lower management salary overheads and shorter chains of command",
          "Zero middle managers and total frontline autonomy",
        ],
        answerIndex: 1,
        hints: [
          "Picture a tall, skinny pyramid: many levels from top to bottom, few direct reports per manager.",
          "Think about both supervision tightness and rungs on the career ladder.",
        ],
        explanation:
          "A **tall hierarchy** has **many layers**, a **long chain of command**, a **narrow span of control** (enabling close supervision) and **plenty of step-up promotion rungs** — at the cost of higher salary overheads and slower communication.",
      },
      {
        id: "motivation-organisation-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "organisational-charts",
        question:
          "MetroBank PLC **delayers** 25 regional middle-manager roles, each paid an annual salary of **£50,000**. Each redundant manager receives a one-off redundancy payment of **£20,000**. What is MetroBank's **net cost saving in Year 1**?",
        options: ["£1,250,000", "£750,000", "£500,000", "£1,750,000"],
        answerIndex: 1,
        hints: [
          "Calculate total annual salaries saved (25 × £50,000) first.",
          "Subtract the one-off Year 1 redundancy cost (25 × £20,000).",
        ],
        explanation:
          "Salaries removed = {{25 * 50000 = 1250000}} (£1,250,000). One-off redundancy cost = {{25 * 20000 = 500000}} (£500,000). Net Year 1 saving = {{1250000 - 500000 = 750000}} (**£750,000**).",
      },
      {
        id: "motivation-organisation-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "non-financial-motivation",
        question:
          "Why does organising factory operatives into **autonomous workgroups (cell production)** help satisfy Maslow's **social** and **esteem** needs?",
        options: [
          "Operatives work in silent individual isolation with zero shared production or quality targets",
          "Teammates collaborate in a cohesive unit (belonging) and take shared pride in defect-free modules (recognition)",
          "Cell production legally guarantees every factory operative receives voting PLC shares immediately",
          "Autonomous manufacturing teams remove the employer's legal duty to follow health and safety rules",
        ],
        answerIndex: 1,
        hints: [
          "Link team collaboration to Maslow Tier 3 (social) and peer/quality ownership to Tier 4 (esteem).",
          "Eliminate absurd claims about silent isolation or abolishing safety rules.",
        ],
        explanation:
          "Small self-managing teams foster **camaraderie and mutual support** (Social Tier 3) while giving members collective **responsibility and pride** in complete modules (Esteem Tier 4).",
      },
      {
        id: "motivation-organisation-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "organisational-charts",
        question:
          "Why can an excessively **long chain of command** harm competitiveness in a fast-moving fashion retailer?",
        options: [
          "Store managers have nobody above them to ask for advice",
          "Long chains of command make it impossible to hire specialist finance staff",
          "Narrow spans of control force every manager to supervise 40 staff",
          "Frontline feedback on trending styles takes weeks to filter up through middle layers and gets distorted along the way",
        ],
        answerIndex: 3,
        hints: [
          "Think about how fast TikTok/seasonal fashion trends move and what happens when 7 management tiers sit between shop assistants and buyers.",
          "Recall communication distortion ('Chinese whispers') and slow approval delays.",
        ],
        explanation:
          "Each extra layer delays decisions and filters/distorts customer intelligence, so fast-fashion rivals with **flatter chains of command** restock trending garments weeks earlier.",
      },
      {
        id: "motivation-organisation-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "organisational-charts",
        question:
          "In which workplace is a **wide span of control** (e.g. 12 subordinates per manager) **most likely to succeed** without hurting quality?",
        options: [
          "Trainee scaffolders working at height on complex construction sites",
          "Experienced, self-reliant software engineers following clear agile sprint targets",
          "Newly hired kitchen porters handling industrial fryers on their first shift",
          "Junior surgeons performing their first emergency operations",
        ],
        answerIndex: 1,
        hints: [
          "Wide spans mean each subordinate gets *less* minute-by-minute supervision.",
          "Which group already has high expertise, low safety hazard, and clear self-directed workflows?",
        ],
        explanation:
          "**Wide spans of control** work well when subordinates are **highly skilled, experienced and self-disciplined** with clear targets. High-risk or novice roles (scaffolders, new fry cooks, trainee surgeons) require **narrow spans** and close supervision.",
      },
      {
        id: "motivation-organisation-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "non-financial-motivation",
        question:
          "A luxury hotel chain empowers receptionists to authorise up to **£100** in complimentary upgrades or meal vouchers to resolve guest complaints immediately without calling a duty manager. What is the **primary risk** of this empowerment policy?",
        options: [
          "Guests will be annoyed that their problem was solved too quickly",
          "Without clear training and monitoring, inconsistent or overly generous giveaways could inflate costs",
          "Duty managers will have more paperwork to sign for every £10 voucher",
          "Empowerment turns receptionists into autocratic leaders",
        ],
        answerIndex: 1,
        hints: [
          "What happens to profit margins if an untrained receptionist hands out £100 upgrades for tiny complaints?",
          "Empowerment trades tight cost control for speed and staff motivation.",
        ],
        explanation:
          "**Empowerment** speeds service recovery and motivates staff, but if employees lack commercial training or boundaries, **inconsistent decisions and excessive giveaways** can erode profit margins.",
      },
      {
        id: "motivation-organisation-m2-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "organisational-charts",
        question:
          "In a functional organisational structure, which department is responsible for preparing **cash-flow forecasts**, paying suppliers and monitoring **budgets**?",
        options: [
          "Human Resources (HR)",
          "Operations",
          "Finance",
          "Marketing",
        ],
        answerIndex: 2,
        hints: [
          "Match cash-flow, accounts, payables and budgets to the money function.",
        ],
        explanation:
          "The **Finance** department manages cash flow, budgets, financial accounts and supplier/customer payments; HR handles recruitment/training, Marketing handles the 4Ps, and Operations manages production/quality.",
      },
      {
        id: "motivation-organisation-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "organisational-charts",
        question:
          "What is a major **human-resource disadvantage** when a company moves from a **tall** to a **flat** structure through delayering?",
        options: [
          "Communication between the CEO and frontline workers becomes much slower",
          "Total annual middle-management salary expenses permanently rise",
          "Frontline staff lose all opportunities for delegation",
          "Survivors face heavier workloads and fewer middle-management promotion rungs, risking stress and demotivation",
        ],
        answerIndex: 3,
        hints: [
          "Think about how remaining staff feel right after colleagues are made redundant and middle rungs disappear.",
          "Remember Maslow's safety need (job insecurity) and career advancement.",
        ],
        explanation:
          "Delayering removes middle rungs on the promotion ladder, widens remaining managers' spans of control (**risk of overload/stress**), and damages **job-security morale** after redundancies.",
      },
      {
        id: "motivation-organisation-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "non-financial-motivation",
        question:
          "CallCare Ltd has 50 agents working 200 days a year each (total possible working days = **10,000 days**). Before introducing job enrichment and flexible team pods, 600 days were lost to absence. Afterwards, absence falls to **350 days**. By how many **percentage points** did CallCare's absenteeism rate fall?",
        options: ["2.5 percentage points", "25 percentage points", "41.7 percentage points", "3.5 percentage points"],
        answerIndex: 0,
        hints: [
          "Calculate the old absenteeism rate: (600 ÷ 10,000) × 100 = 6.0%.",
          "Calculate the new absenteeism rate: (350 ÷ 10,000) × 100 = 3.5%, then subtract to find the percentage-point drop!",
        ],
        explanation:
          "Old rate = {{(600 / 10000) * 100 = 6.0%}}. New rate = {{(350 / 10000) * 100 = 3.5%}}. Drop = {{6.0 - 3.5 = 2.5}} **percentage points** (whereas 41.7% is the relative % reduction, not percentage points).",
      },
      {
        id: "motivation-organisation-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "organisational-charts",
        question:
          "Why might a busy hospital director **delegate** rota scheduling to ward sisters?",
        options: [
          "So the hospital director becomes legally immune from responsibility if wards are dangerously understaffed",
          "To free the director's time for hospital strategy while empowering ward sisters who know nurses' availability best",
          "To lengthen the hospital's chain of command and deliberately slow down routine shift swaps",
          "Because delegating rota duties removes the need for upward or downward communication between tiers",
        ],
        answerIndex: 1,
        hints: [
          "Consider both the benefit to the senior leader (time for strategic tasks) and the benefit of local knowledge.",
          "Eliminate the trap claiming legal accountability disappears!",
        ],
        explanation:
          "Effective delegation frees senior executives to focus on **strategic planning**, develops subordinates' skills (**Herzberg responsibility**), and improves decisions using **frontline knowledge** — while ultimate accountability stays at the top.",
      },
    ],
  },
  {
    id: "motivation-organisation-m3",
    title: "Paper 3 — Centralisation, Leadership & Mixed Exam Synthesis",
    questions: [
      {
        id: "motivation-organisation-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "centralisation-leadership",
        question:
          "In a **centralised** retail chain with 80 stores, where are major decisions on pricing, store layout and supplier contracts made?",
        options: [
          "Individually by each local store's Saturday part-time staff",
          "By senior executives at Head Office",
          "Separately by each store manager according to local whim",
          "By external trade unions",
        ],
        answerIndex: 1,
        hints: [
          "Centralised = power concentrated at the centre (Head Office).",
        ],
        explanation:
          "**Centralisation** concentrates strategic and key operational authority at **Head Office**, ensuring uniform brand standards and bulk-buying power across all 80 branches.",
      },
      {
        id: "motivation-organisation-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "centralisation-leadership",
        question:
          "Which of the following is the **strongest commercial advantage** of **centralised** purchasing for a 150-hotel multinational group (Paper 2)?",
        options: [
          "Every hotel chef can invent completely different brand logos",
          "Local hotel managers feel maximum autonomy over capital budgets",
          "Menus automatically adapt overnight to every village festival without head-office approval",
          "Head office negotiates large bulk-buying discounts (purchasing economies of scale) on linen, toiletries and booking software",
        ],
        answerIndex: 3,
        hints: [
          "What happens to unit supplier prices when Head Office orders 150,000 towels on one contract instead of 150 tiny orders?",
          "Connect centralisation to *economies of scale*.",
        ],
        explanation:
          "Centralising procurement aggregates demand across all 150 hotels, securing **purchasing economies of scale** (lower unit costs) and consistent guest quality.",
      },
      {
        id: "motivation-organisation-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "centralisation-leadership",
        question:
          "A global supermarket expands into Indonesia and Malaysia. Why would **decentralising** fresh-food buying and local promotions to country managers be beneficial?",
        options: [
          "Country managers understand local halal requirements, tropical produce and regional festivals far better than London directors",
          "Decentralisation guarantees zero duplication of marketing roles across countries",
          "Decentralisation ensures identical winter soup displays in Jakarta and London",
          "Decentralisation eliminates the need for financial budgets",
        ],
        answerIndex: 0,
        hints: [
          "Think about cultural, religious and climate differences across countries.",
          "Who reacts faster to a local competitor's weekend promotion in Jakarta?",
        ],
        explanation:
          "**Decentralisation** places decisions close to local consumers, allowing rapid adaptation to cultural/dietary norms, climate and local rivals while empowering regional leaders.",
      },
      {
        id: "motivation-organisation-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "centralisation-leadership",
        question:
          "Which leadership style involves a leader making decisions **alone**, issuing strict **one-way downward** instructions and closely supervising staff?",
        options: [
          "Democratic",
          "Laissez-faire",
          "Autocratic",
          "Consultative",
        ],
        answerIndex: 2,
        hints: [
          "Think of 'auto' = self-rule: one person holds total authority and expects immediate compliance.",
        ],
        explanation:
          "**Autocratic** leaders retain decision-making power at the top, communicate one-way downwards and expect strict adherence to instructions.",
      },
      {
        id: "motivation-organisation-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "centralisation-leadership",
        question:
          "A food-processing factory discovers potential bacterial contamination in Batch #402 at 08:00 AM. Which leadership style should the Operations Director use immediately, and why?",
        options: [
          "Laissez-faire — let shift workers decide individually over the next week whether to recall jars",
          "Democratic — run a two-day staff survey before pausing the bottling line",
          "Autocratic — issue instant, non-negotiable orders halting production and isolating Batch #402 to protect public safety",
          "Decentralised — let each delivery driver decide whether to mention the recall to shops",
        ],
        answerIndex: 2,
        hints: [
          "Public health and legal survival require split-second action with zero ambiguity.",
          "When is autocratic leadership superior to democratic consultation?",
        ],
        explanation:
          "In a **product-safety crisis**, speed and 100% compliance matter most — **autocratic** command halts dispatch immediately without dangerous consultation delays.",
      },
      {
        id: "motivation-organisation-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "centralisation-leadership",
        question:
          "An award-winning animation studio employs 22 veteran concept artists and PhD graphics programmers. Why is a **laissez-faire** leadership style effective here?",
        options: [
          "Creative experts thrive on artistic freedom and intrinsic self-actualisation without micromanagement stifling originality",
          "Veteran artists are unskilled and require hourly stopwatch checks",
          "Laissez-faire leadership guarantees strict identical routines across every artist",
          "Laissez-faire removes the need to set any film release date or budget",
        ],
        answerIndex: 0,
        hints: [
          "Consider the skill, self-motivation and creative nature of senior artists.",
          "How would F.W. Taylor micromanagement affect an animation studio?",
        ],
        explanation:
          "**Laissez-faire** works when employees are **highly skilled, self-motivated experts** performing creative or R&D work — broad goals guide the project while autonomy unlocks **Maslow self-actualisation**.",
      },
      {
        id: "motivation-organisation-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "centralisation-leadership",
        question:
          "A dental practice owner holds weekly huddles inviting dentists, hygienists and receptionists to propose appointment-booking improvements before choosing the new software. Which leadership style is she using?",
        options: [
          "Autocratic",
          "Laissez-faire",
          "Scientific management",
          "Democratic",
        ],
        answerIndex: 3,
        hints: [
          "She actively consults staff via two-way communication before taking the final decision.",
          "Contrast one-way orders (autocratic) and hands-off freedom (laissez-faire) with consultative decision-making.",
        ],
        explanation:
          "**Democratic** (consultative) leadership gathers frontline views via **two-way communication** before deciding, improving software fit and winning staff buy-in during change.",
      },
      {
        id: "motivation-organisation-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "motivation-theories",
        question:
          "Look at the two-year HR data for BrightSpark Electricals Ltd:\n\n| Metric | Year 1 | Year 2 (after pay freeze & autocratic targets) |\n|---|---|---|\n| Average staff headcount | 40 | 40 |\n| Staff resignations | 4 | 14 |\n| Total installations completed | 2,400 | 2,080 |\n\nWhich pair of figures correctly states **Year 2 labour turnover (%)** and **Year 2 labour productivity**?",
        options: [
          "Turnover = 35%; Productivity = 52 installations per worker",
          "Turnover = 10%; Productivity = 60 installations per worker",
          "Turnover = 14%; Productivity = 52 installations per worker",
          "Turnover = 35%; Productivity = 60 installations per worker",
        ],
        answerIndex: 0,
        hints: [
          "Year 2 Labour Turnover = (14 ÷ 40) × 100.",
          "Year 2 Labour Productivity = 2,080 ÷ 40 installations per worker.",
        ],
        explanation:
          "Year 2 turnover = {{(14 / 40) * 100 = 35%}} (up sharply from 10% in Year 1). Year 2 productivity = {{2080 / 40 = 52}} installations per worker (down from 60 in Year 1) as experienced electricians quit.",
      },
      {
        id: "motivation-organisation-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-rewards",
        question:
          "A small startup café (Paper 1, 6 staff) has tight cash flow during its first winter, so it cannot afford a 10% wage rise. Which low-cost **Herzberg motivator** is best suited to boost barista commitment?",
        options: [
          "Floating shares on the London Stock Exchange to launch a public employee share-option scheme",
          "Giving baristas responsibility to design seasonal drinks and publicly praising customer favourites",
          "Cutting winter heating and break facilities in the staff room to save utility overheads",
          "Switching every barista onto pure piece-rate wages paid strictly per espresso shot poured",
        ],
        answerIndex: 1,
        hints: [
          "Eliminate stock-exchange flotation (impossible for a tiny café) and piece-rate rushing.",
          "Which zero-cash change provides *creative responsibility* and *recognition*?",
        ],
        explanation:
          "Designing seasonal specials (**job enrichment / responsibility**) paired with public recognition directly activates **Herzberg's motivators** and **Maslow's esteem tier** without draining scarce winter cash.",
      },
      {
        id: "motivation-organisation-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "organisational-charts",
        question:
          "If a company keeps the **same 120 frontline workers** but **delayers** two tiers of middle supervision, what MUST happen to the **span of control** of the remaining managers?",
        options: [
          "It becomes narrower",
          "It drops to zero",
          "It stays identical while layers increase",
          "It becomes wider",
        ],
        answerIndex: 3,
        hints: [
          "120 workers still need managing, and there are now *fewer* managers above them!",
          "Divide 120 workers among fewer managers — does each manager oversee more or fewer direct reports?",
        ],
        explanation:
          "With fewer managers supervising the same workforce, each remaining manager has **more direct subordinates** — so the **span of control widens**.",
      },
      {
        id: "motivation-organisation-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "centralisation-leadership",
        question:
          "Why do many fast-growing tech startups hit a 'coordination crisis' if the founder keeps using a **laissez-faire** style once headcount grows from 8 co-founders to 180 mixed-experience staff?",
        options: [
          "New junior hires lack the founders' shared vision, causing duplicated work, missed deadlines and confusion without structure",
          "Laissez-faire management forces the founder to personally sign off every routine stationery and software order",
          "Statutory employment legislation prohibits laissez-faire leadership once a company exceeds 50 full-time staff",
          "Laissez-faire delegation automatically converts the startup into a tall, centralised autocratic hierarchy",
        ],
        answerIndex: 0,
        hints: [
          "Compare 8 veteran co-founders in one room with 180 staff including new graduates across multiple teams.",
          "What is the classic drawback of hands-off leadership when experience levels vary?",
        ],
        explanation:
          "Laissez-faire relies on high expertise and self-direction; as inexperienced hires join at scale, lack of clear direction, KPIs and feedback causes **role confusion, drift and missed deadlines**.",
      },
      {
        id: "motivation-organisation-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-rewards",
        question:
          "An B2B software firm pays account managers:\n- Basic annual salary: **£28,000**\n- Performance-Related Pay (PRP) bonus: **12% of basic salary** if client retention exceeds 95%\n- Commission: **2% on new licence sales**\n\nIn a year where Maya achieves **97% client retention** and sells **£150,000** of new licences, what is her total annual remuneration?",
        options: ["£31,360", "£31,000", "£34,360", "£46,000"],
        answerIndex: 2,
        hints: [
          "Since 97% > 95%, Maya earns the 12% PRP bonus on £28,000: 0.12 × £28,000 = £3,360.",
          "Add 2% commission on £150,000 (0.02 × £150,000 = £3,000) plus the £28,000 base salary.",
        ],
        explanation:
          "Base = £28,000; PRP bonus = {{28000 * 0.12 = 3360}} (£3,360); Commission = {{150000 * 0.02 = 3000}} (£3,000). Total = {{28000 + 3360 + 3000 = 34360}} (**£34,360**).",
      },
      {
        id: "motivation-organisation-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "non-financial-motivation",
        question:
          "Why can **job rotation** temporarily **reduce** hourly output on a precision electronics line even though workers enjoy the variety?",
        options: [
          "Job rotation makes workers completely unable to cover absent colleagues",
          "Job rotation forces the company to double every manager's salary",
          "Rotating tasks violates health and safety law",
          "Workers lose specialist muscle-memory speed each time they switch stations and spend minutes resetting tools",
        ],
        answerIndex: 3,
        hints: [
          "Recall F.W. Taylor and Adam Smith on division of labour: why is doing ONE task repeatedly faster per hour than switching?",
          "Think about changeover time and specialist dexterity when moving between workstations.",
        ],
        explanation:
          "Switching stations sacrifices some **division-of-labour specialisation** and incurs changeover time — a classic evaluation counterbalance to rotation's flexibility and boredom-reduction benefits.",
      },
      {
        id: "motivation-organisation-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "centralisation-leadership",
        question:
          "Which pairing of **organisational structure, locus of power, leadership style and theorist** forms the most internally consistent management model?",
        options: [
          "Tall hierarchy · Centralised control · Autocratic leadership · F.W. Taylor",
          "Tall hierarchy · Decentralised autonomy · Laissez-faire leadership · F.W. Taylor",
          "Flat hierarchy · Centralised micromanagement · Autocratic leadership · Herzberg enrichment",
          "Flat hierarchy · Narrow span of control · Long chain of command · Maslow Tier 1",
        ],
        answerIndex: 0,
        hints: [
          "Check every element inside each quartet for internal consistency!",
          "Taylorism pairs tight supervision (narrow span = tall), top-down rules (centralised + autocratic) and piece-rate control.",
        ],
        explanation:
          "**Tall + Centralised + Autocratic + Taylor** all emphasise tight top-down control, narrow spans of supervision and standardised task execution; the other combinations contradict themselves (e.g. flat hierarchies cannot have narrow spans and long chains).",
      },
      {
        id: "motivation-organisation-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "centralisation-leadership",
        question:
          "In an Edexcel 4BS1 **9-mark 'Justify'** question asking whether a 300-employee hotel group should adopt **centralised** or **decentralised** decision-making, what must a Grade 9 answer include to reach Level 3?",
        options: [
          "Detailed textbook definitions of every motivation theorist written without mentioning the hotel group",
          "Equal undecided weight given to both options, concluding that 'either option could work nicely'",
          "Contextualised chains for the hotel group, a counter-argument/drawback, and a decisive 'it depends on' verdict",
          "Short bullet-point one-word lists summarising advantages with zero logical connectives or context",
        ],
        answerIndex: 2,
        hints: [
          "Recall the **AJIM** framework for Edexcel 4BS1 9-mark Justify questions (AO2 application + AO3 analysis + AO4 evaluation).",
          "Sitting on the fence or omitting hotel context caps marks severely.",
        ],
        explanation:
          "Full-mark 9-mark **Justify** answers apply **AO2 hotel context** throughout logical **AO3 chains**, weigh a genuine **counterbalance**, and reach a clear **AO4 judgement** showing what success *depends on* (e.g. boutique individuality vs budget brand consistency).",
      },
    ],
  },
];
