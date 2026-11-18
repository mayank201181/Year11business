import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "motivation-organisation",
  title: "Motivation Theories, Rewards & Organisational Structures",
  strand: "People",
  icon: "🏗️",
  summary:
    "Master Taylor, Maslow and Herzberg, match financial and non-financial rewards to business size, and analyse tall vs flat hierarchies, delegation, centralisation and leadership styles.",
  intro:
    "Why do employees at one café greet customers warmly and stay for years, while staff at a rival outlet call in sick and quit within months? In Pearson Edexcel IGCSE Business (4BS1 Topics 2.4–2.5), People decisions connect psychology directly to unit costs and profit margins. Whether you are advising a 15-person artisan bakery on **Paper 1** (< 50 staff) or a 40,000-worker global retailer on **Paper 2** (> 250 staff), Grade 9 answers link **motivation methods** and **organisational structures** directly to **labour productivity**, **labour turnover**, **absenteeism**, **unit costs** and **customer loyalty**.",
  guide: [
    {
      id: "motivation-theories",
      heading: "Why motivation matters: Taylor, Maslow & Herzberg",
      discovery: {
        problem:
          "A call-centre director raises every agent's hourly pay by 15% and installs air-conditioned break rooms, expecting customer-satisfaction scores to soar. Six weeks later, complaints are cut in half — yet productivity and enthusiasm remain completely flat. Using motivation theory, explain why fixing pay and working conditions stopped grumbling without sparking extra effort.",
        idea:
          "Frederick Herzberg's **Two-Factor Theory** separates **hygiene factors** (pay, working conditions, company policy, job security) from **motivators** (achievement, recognition, interesting work, responsibility, promotion). Upgrading hygiene factors removes *dissatisfaction* — staff stop complaining — but does **not** create genuine *satisfaction* or drive extra effort unless **motivators** such as autonomy, recognition and career progression are built into the job itself.",
      },
      body: `**Motivation** is the internal and external desire that drives employees to work productively towards business objectives. Well-motivated staff transform four measurable performance indicators:

| Metric | Formula / Meaning | Impact of High Motivation |
|---|---|---|
| **Labour Productivity** | {{"Total Output" / "Number of Employees"}} | Higher output per worker lowers **average labour cost per unit**, boosting competitiveness and Gross Profit Margin. |
| **Labour Turnover** | {{("Staff Leaving in Year" / "Average Number of Staff") * 100}} | Lower turnover slashes **recruitment, selection and induction training costs** and preserves experienced customer relationships. |
| **Absenteeism** | {{("Working Days Lost" / "Total Possible Working Days") * 100}} | Fewer sick/unauthorised days prevent rota disruption, overtime bills and temporary agency fees. |
| **Quality & Service** | Defect rate & repeat custom | Engaged workers take pride in zero-defect work, reducing wastage and generating word-of-mouth loyalty. |

### The Three Core Theorists (Edexcel 4BS1)

1. **Frederick Winslow Taylor (Scientific Management, 1911)**
   - **Core belief**: Workers are motivated primarily by **money** ("economic man"). Left alone, workers "soldier" (work at the slowest acceptable pace).
   - **Method**: Observe jobs using **time-and-motion studies**, break tasks into simple repetitive steps, provide specialist tools, set a daily output quota, and pay **differentiated piece-rate** wages (paid per unit produced, with a higher rate once the quota is beaten).
   - **Evaluation**: Effective in standardised warehouse picking or garment assembly, where individual output is easy to count. However, workers can rush and **sacrifice quality**, repetitive division of labour causes boredom and alienation, and teamwork/service roles (nurses, teachers, R&D engineers) have no countable "unit" of output.

2. **Abraham Maslow (Hierarchy of Needs, 1943)**
   - **Core belief**: Humans have **five tiers of psychological needs** arranged in a pyramid. Lower-level needs must be substantially satisfied before the next tier motivates behaviour; once a need is satisfied, offering *more* of that same tier no longer motivates!
   - **The 5 Tiers (bottom to top)**:
     1. **Physiological needs**: Basic survival — fair living wage, rest breaks, drinking water, heating/ventilation.
     2. **Safety / security needs**: Permanent employment contracts, safe machinery/PPE, sick pay, pension schemes.
     3. **Social (love & belonging) needs**: Teamworking, supportive colleagues, staff socials, inclusive communication.
     4. **Esteem needs**: Recognition, praise, job titles, status awards ("Employee of the Month"), merit promotions.
     5. **Self-actualisation**: Reaching full creative potential — challenging projects, innovation time, complete autonomy.
   - **Evaluation**: Reminds managers to tailor rewards (a zero-hours casual worker worries about **safety/security**, whereas a well-paid senior architect craves **self-actualisation**). However, individuals rank needs differently, and economic shocks (redundancy rumours) cause employees to regress down the pyramid overnight.

3. **Frederick Herzberg (Two-Factor Theory, 1959)**
   - **Hygiene (maintenance) factors**: Company policy & administration, supervision quality, salary/wages, peer relationships, physical working conditions, job security. *If inadequate, they cause **job dissatisfaction**; when fixed, they create "zero dissatisfaction" (neutrality), NOT motivation.*
   - **Motivators**: Achievement, recognition for achievement, the work itself (meaningful/varied), responsibility, advancement/promotion. *Only motivators generate true **job satisfaction** and discretionary effort, achieved via **job enrichment**.*
   - **Paper 1 vs Paper 2 application**: On **Paper 1** (< 50 staff), a boutique café owner cannot afford huge bonuses, so personal praise (**esteem/recognition**) and letting baristas design seasonal menus (**job enrichment**) are low-cost motivators. On **Paper 2** (> 250 staff), a global bank must pair competitive salaries (**hygiene**) with structured graduate promotion tracks (**motivators**) to stop rival firms poaching talent.`,
      diagram: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maslow 5-tier Hierarchy of Needs compared alongside Herzberg Hygiene Factors and Motivators">
  <rect x="0" y="0" width="680" height="300" rx="14" fill="var(--surface-2)" />
  <text x="205" y="26" font-size="14" font-weight="800" text-anchor="middle" fill="var(--ink)">Maslow's 5-Tier Hierarchy</text>
  <text x="520" y="26" font-size="14" font-weight="800" text-anchor="middle" fill="var(--ink)">Herzberg's Two-Factor Link</text>

  <polygon points="205,40 255,86 155,86" fill="#7c3aed" opacity="0.9" />
  <text x="205" y="72" font-size="10.5" font-weight="700" text-anchor="middle" fill="#ffffff">Self-Actualisation</text>

  <polygon points="152,90 258,90 292,136 118,136" fill="#0e7490" opacity="0.92" />
  <text x="205" y="117" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">4. Esteem (Recognition, Status)</text>

  <polygon points="115,140 295,140 328,186 82,186" fill="#0d9488" opacity="0.92" />
  <text x="205" y="167" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">3. Social (Teamwork, Belonging)</text>

  <polygon points="79,190 331,190 364,236 46,236" fill="#d97706" opacity="0.92" />
  <text x="205" y="217" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">2. Safety (Contracts, H&amp;S, Pension)</text>

  <polygon points="43,240 367,240 398,284 12,284" fill="#c2410c" opacity="0.92" />
  <text x="205" y="266" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">1. Physiological (Living Wage, Breaks)</text>

  <rect x="420" y="44" width="236" height="106" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2" />
  <text x="538" y="66" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--good)">MOTIVATORS (Create Satisfaction)</text>
  <text x="434" y="88" font-size="11" fill="var(--ink)">• Achievement &amp; challenging work</text>
  <text x="434" y="106" font-size="11" fill="var(--ink)">• Recognition &amp; delegated responsibility</text>
  <text x="434" y="124" font-size="11" fill="var(--ink)">• Advancement &amp; personal growth</text>
  <text x="434" y="141" font-size="10" font-weight="700" fill="var(--good)">→ Maps to Maslow Tiers 4 &amp; 5</text>

  <rect x="420" y="168" width="236" height="114" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2" />
  <text x="538" y="190" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--bad)">HYGIENE FACTORS (Stop Gripes)</text>
  <text x="434" y="212" font-size="11" fill="var(--ink)">• Base pay / wage &amp; job security</text>
  <text x="434" y="230" font-size="11" fill="var(--ink)">• Safe conditions &amp; company policy</text>
  <text x="434" y="248" font-size="11" fill="var(--ink)">• Supervision &amp; peer relations</text>
  <text x="434" y="268" font-size="10" font-weight="700" fill="var(--bad)">→ Maps to Maslow Tiers 1–3 (No extra push!)</text>
</svg>`,
      diagramCaption:
        "Maslow's bottom three tiers correspond closely to Herzberg's Hygiene Factors (preventing dissatisfaction), whereas the top two tiers match Herzberg's Motivators (driving genuine commitment).",
      workedExamples: [
        {
          title: "Calculating Labour Turnover & Productivity Impact",
          problem:
            "Harbour Fresh Ltd employs an average of 40 warehouse pickers. During the year, 10 pickers resign. Each worker left to replace costs £1,800 in recruitment and training. Calculate Harbour Fresh Ltd's annual **labour turnover (%)** and total **replacement cost**.",
          steps: [
            "Write the labour turnover formula: {{(\"Staff Leaving\" / \"Average Staff\") * 100}}.",
            "Substitute the values: {{(10 / 40) * 100 = 25%}}.",
            "Multiply leavers by replacement cost per worker: {{10 * 1800 = 18000}} (£18,000).",
          ],
          answer: "Labour turnover = 25%; Annual replacement cost = £18,000",
          yourTurn: {
            question:
              "A boutique hotel employs an average of 32 staff over the year, and 8 employees leave to join competitors. Calculate the hotel's annual **labour turnover (%)**.",
            answer: { type: "number", value: 25, display: "25%" },
            solution: "Labour turnover = (8 ÷ 32) × 100 = 25%.",
          },
        },
        {
          title: "Diagnosing Theorists in Exam Scenarios",
          problem:
            " stitchCo pays machinists £2.40 per finished shirt with zero base salary and strict stopwatch targets. Defect rates jump from 2% to 9%. Calculate the weekly pay of a machinist who sews 175 shirts, and identify which theorist's flaw explains the 9% defect spike.",
          steps: [
            "Calculate piece-rate pay: {{175 * 2.40 = 420}} (£420).",
            "Link to **F.W. Taylor**: pure piece-rate incentivises speed over care, so machinists rush seams to maximise unit count, driving up rejects and rework costs.",
          ],
          answer: "£420; F.W. Taylor's scientific management flaw (rushing compromises quality).",
          yourTurn: {
            question:
              "A packer is paid £1.50 per crate packed under a Taylor piece-rate system and packs 240 crates in a week. Calculate their weekly pay in £.",
            answer: { type: "number", value: 360, display: "£360" },
            solution: "Weekly piece-rate pay = 240 × £1.50 = £360.",
          },
        },
      ],
      keyPoints: [
        "High motivation raises **labour productivity**, lowers **absenteeism** and cuts **labour turnover** (reducing recruitment and training bills).",
        "**F.W. Taylor** treated workers as motivated solely by money, advocating division of labour and **piece-rate pay** — fast output, but risks poor quality and boredom.",
        "**Maslow's 5 tiers**: Physiological → Safety → Social → Esteem → Self-actualisation; satisfied tiers stop motivating.",
        "**Herzberg's Two-Factor Theory**: **Hygiene factors** (pay, conditions, security) only prevent dissatisfaction; **Motivators** (recognition, responsibility, achievement) create true satisfaction.",
      ],
      whyItWorks:
        "Pay rises feel exciting for a fortnight, then become the employee's expected baseline budget. Because humans adapt rapidly to comfort (Herzberg's hygiene baseline), sustained discretionary effort only comes when daily tasks satisfy intrinsic psychological needs for mastery, autonomy and visible recognition.",
      strategies: [
        "Match the theorist to the symptom: high grievances/strikes = broken **hygiene factors**; low complaints but sluggish output = missing **motivators**.",
        "Always quantify HR problems using **labour turnover %** or **output per worker** to earn AO2/AO3 marks.",
      ],
      thinkDeeper:
        "Can money EVER act as a Herzberg motivator rather than a hygiene factor? Consider how an unexpected merit bonus tied publicly to winning a major client differs psychologically from an automatic inflation pay rise.",
    },
    {
      id: "financial-rewards",
      heading: "Financial methods of motivation",
      discovery: {
        problem:
          "An estate agency pays negotiators a £20,000 basic salary plus 2% commission on every property sold. A luxury jeweller nearby switches to 100% commission with £0 basic salary, expecting sales to double. Instead, staff argue over walk-in customers and three experienced jewellers resign. Why did removing the basic salary backfire?",
        idea:
          "100% commission destroys **Maslow's safety/security need** (income becomes unpredictable during quiet months) and triggers destructive internal rivalry over customers, harming **social needs** and long-term brand trust. Blending a guaranteed **basic salary** (security) with **commission** (incentive) balances hygiene protection with performance drive.",
      },
      body: `**Financial rewards (remuneration)** use monetary payments or quantifiable perks to attract, retain and incentivise workers. Choosing the right package depends on whether individual output is measurable, whether quality trumps speed, and whether the firm is a cash-tight **Paper 1 SME** or a listed **Paper 2 PLC**.

| Remuneration Method | How It Works | Best Suited For & Key Evaluation |
|---|---|---|
| **Time-rate wage** | Paid per hour worked (e.g. £12.50/hr); extra hours often paid at overtime rates (e.g. 1.5×). | Retail assistants, security guards. Easy to calculate and protects quality, but rewards *time spent* rather than output — requires supervision. |
| **Piece-rate wage** | Paid a fixed amount per unit produced (Taylor). | Fruit picking, garment sewing. Directly boosts speed, but workers may ignore quality/safety and income fluctuates if machines break down. |
| **Annual salary** | Fixed yearly sum paid in 12 equal monthly instalments. | Teachers, accountants, managers. Gives **financial security** (Maslow Tier 2) and predictable fixed labour budgets, but carries no automatic link to extra effort. |
| **Commission** | Percentage of sales revenue generated (usually atop a base salary). | Car dealerships, B2B tech sales. Drives hungry revenue growth, but risks aggressive **misselling** that damages repeat custom. |
| **Performance-Related Pay (PRP) / Bonus** | Lump-sum payment for hitting agreed appraisal targets (KPIs). | Corporate managers, bankers. Focuses staff on SMART objectives, though subjective appraisals can cause resentment or short-termism. |
| **Profit sharing** | Staff receive a percentage share of annual company profits. | Partnerships, John Lewis Partnership, PLCs. Unites staff and shareholders behind cost control and sales, though individual effort feels diluted in a 10,000-staff firm. |
| **Share ownership (Save-As-You-Earn / options)** | Employees receive or buy discounted shares in the company. | **Incorporated Ltds/PLCs ONLY** (impossible for sole traders or partnerships!). Encourages multi-year loyalty and retention. |
| **Fringe benefits (Perks)** | Non-cash extras with monetary value: private healthcare, company car, gym membership, staff discounts, subsidised canteen. | Boosts retention and employer branding (often tax-efficient), though adds to **fixed overhead costs** regardless of daily output. |

### Paper 1 (< 50 Staff) vs Paper 2 (> 250 Staff) Exam Trap
- **Never** recommend **employee share ownership** to a **sole trader** or **partnership** on Paper 1 — unincorporated businesses do not have shares! Instead, recommend modest sales commission, free staff meals, staff discounts or a team profit-share bonus.
- On **Paper 2**, PLCs can issue share options to retain senior software engineers without draining immediate cash flow, though existing shareholders suffer mild **dilution** of ownership.`,
      diagram: `<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Financial remuneration spectrum from guaranteed security to high output incentive">
  <rect x="0" y="0" width="680" height="250" rx="14" fill="var(--surface-2)" />
  <text x="340" y="28" font-size="14" font-weight="800" text-anchor="middle" fill="var(--ink)">Financial Rewards: Income Security vs Direct Output Incentive</text>

  <line x1="60" y1="125" x2="620" y2="125" stroke="var(--ink-2)" stroke-width="3" />
  <polygon points="620,125 608,118 608,132" fill="var(--ink-2)" />
  <polygon points="60,125 72,118 72,132" fill="var(--ink-2)" />
  <text x="64" y="108" font-size="11" font-weight="700" fill="var(--brand)">High Income Security (Maslow Safety)</text>
  <text x="616" y="108" font-size="11" font-weight="700" text-anchor="end" fill="var(--good)">High Direct Output Push (Taylor)</text>

  <rect x="46" y="142" width="128" height="84" rx="9" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" />
  <text x="110" y="162" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--brand)">Salary + Perks</text>
  <text x="110" y="180" font-size="10" text-anchor="middle" fill="var(--ink-2)">Fixed monthly pay</text>
  <text x="110" y="196" font-size="10" text-anchor="middle" fill="var(--ink-2)">Predictable firm cost</text>
  <text x="110" y="212" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">Risk: Coasting</text>

  <rect x="190" y="142" width="136" height="84" rx="9" fill="var(--surface)" stroke="#0d9488" stroke-width="2" />
  <text x="258" y="162" font-size="11.5" font-weight="800" text-anchor="middle" fill="#0d9488">Time-Rate Wage</text>
  <text x="258" y="180" font-size="10" text-anchor="middle" fill="var(--ink-2)">Paid £ per hour</text>
  <text x="258" y="196" font-size="10" text-anchor="middle" fill="var(--ink-2)">Protects care/quality</text>
  <text x="258" y="212" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">Needs supervision</text>

  <rect x="342" y="142" width="144" height="84" rx="9" fill="var(--surface)" stroke="#d97706" stroke-width="2" />
  <text x="414" y="162" font-size="11.5" font-weight="800" text-anchor="middle" fill="#d97706">PRP / Profit Share</text>
  <text x="414" y="180" font-size="10" text-anchor="middle" fill="var(--ink-2)">Tied to KPIs / profit</text>
  <text x="414" y="196" font-size="10" text-anchor="middle" fill="var(--ink-2)">Aligns team goals</text>
  <text x="414" y="212" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">Appraisal disputes</text>

  <rect x="502" y="142" width="136" height="84" rx="9" fill="var(--surface)" stroke="var(--good)" stroke-width="2" />
  <text x="570" y="162" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--good)">Commission / Piece</text>
  <text x="570" y="180" font-size="10" text-anchor="middle" fill="var(--ink-2)">% of sales or £/unit</text>
  <text x="570" y="196" font-size="10" text-anchor="middle" fill="var(--ink-2)">Variable labour cost</text>
  <text x="570" y="212" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">Misselling / defects</text>

  <rect x="170" y="46" width="340" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="340" y="65" font-size="11" font-weight="800" text-anchor="middle" fill="var(--ink)">Grade 9 Hybrid Sweet Spot: Base Salary + Commission / Bonus</text>
  <text x="340" y="81" font-size="10" text-anchor="middle" fill="var(--ink-2)">Satisfies Maslow Safety/Hygiene AND rewards top performers</text>
</svg>`,
      diagramCaption:
        "Remuneration systems trade off employee income security (left) against direct output/sales incentives (right); hybrid packages combine both strengths.",
      workedExamples: [
        {
          title: "Base Salary + Sales Commission + Overtime",
          problem:
            "Priya works for a solar-panel installer on a basic monthly salary of £1,600 plus **4% commission** on all sales above £10,000 in a month. In May she sells £35,000 worth of solar panels. Calculate Priya's total gross pay for May.",
          steps: [
            "Find commissionable sales above the £10,000 threshold: {{35000 - 10000 = 25000}} (£25,000).",
            "Calculate 4% commission on £25,000: {{25000 * 0.04 = 1000}} (£1,000).",
            "Add basic monthly salary: {{1600 + 1000 = 2600}} (£2,600).",
          ],
          answer: "£2,600",
          yourTurn: {
            question:
              "Marcus earns a basic monthly salary of £1,800 plus **5% commission** on all sales above £8,000. Last month his total sales were £24,000. Calculate Marcus's total pay for the month in £.",
            answer: { type: "number", value: 2600, display: "£2,600" },
            solution:
              "Commissionable sales = £24,000 − £8,000 = £16,000. Commission = 5% × £16,000 = £800. Total pay = £1,800 + £800 = £2,600.",
          },
        },
        {
          title: "Time-Rate + Overtime Multiplier",
          problem:
            "A bakery assistant is contracted for 35 hours a week at £12 per hour, with any overtime hours paid at **time-and-a-half (1.5×)**. During Easter week she works 43 hours. Calculate her gross weekly wage.",
          steps: [
            "Standard pay for 35 hours: {{35 * 12 = 420}} (£420).",
            "Overtime hours worked: {{43 - 35 = 8}} hours.",
            "Overtime hourly rate: {{12 * 1.5 = 18}} (£18/hr); overtime pay: {{8 * 18 = 144}} (£144).",
            "Total weekly wage: {{420 + 144 = 564}} (£564).",
          ],
          answer: "£564",
          yourTurn: {
            question:
              "A warehouse operative works 38 standard hours at £10 per hour plus 6 hours of overtime paid at **1.5×** the standard rate. Calculate his total weekly wage in £.",
            answer: { type: "number", value: 470, display: "£470" },
            solution:
              "Standard pay = 38 × £10 = £380. Overtime rate = £15/hr; overtime pay = 6 × £15 = £90. Total = £380 + £90 = £470.",
          },
        },
      ],
      keyPoints: [
        "**Time-rate** protects quality when output cannot be rushed; **piece-rate** maximises speed but threatens quality unless paired with inspection.",
        "**Commission** turns part of the wage bill into a **variable cost** that rises only when revenue is earned, easing cash flow for startups — but can cause pushy selling.",
        "**Share ownership** aligns staff with long-term share price growth, but is **legally impossible** for unincorporated sole traders and partnerships.",
        "**Fringe benefits** (healthcare, cars, discounts) differentiate employers in tight labour markets without permanently inflating hourly overtime rates.",
      ],
      whyItWorks:
        "From a Finance perspective, shifting part of remuneration from fixed salaries to commission or profit-sharing lowers **fixed costs** and reduces **break-even output** during recessions, while automatically rewarding staff during boom months.",
      strategies: [
        "Check ownership type FIRST: Sole trader / Partnership = NO share schemes!",
        "Check job nature SECOND: Craft/healthcare/luxury service = avoid pure piece-rate or aggressive commission.",
      ],
      thinkDeeper:
        "If two sales reps earn identical £36,000 annual packages — Rep A on £36,000 fixed salary and Rep B on £18,000 salary + £18,000 commission — whose package gives the business a lower break-even point, and why?",
    },
    {
      id: "non-financial-motivation",
      heading: "Non-financial methods of motivation",
      discovery: {
        problem:
          "A supermarket manager tells checkout operators: 'Great news — to enrich your jobs, instead of just scanning groceries on Till 1, you will now also pack bags on Till 2 and sweep trolleys outside!' Morale actually drops. Which method did the manager *really* introduce, and how does true **job enrichment** differ?",
        idea:
          "Adding extra tasks of the **same low skill and responsibility level** is **job enlargement** (critics call it 'more of the same boring work'), NOT **job enrichment**! True **job enrichment** (Herzberg) gives employees **vertical** growth — higher-skill challenges, problem-solving authority (e.g. authorising £20 customer refunds on the spot without calling a supervisor) and ownership of a complete unit of work.",
      },
      body: `Cash-strapped startups on **Paper 1** and service giants on **Paper 2** rely heavily on **non-financial motivation** because it satisfies **Maslow's social, esteem and self-actualisation tiers** and **Herzberg's motivators** without permanently inflating the weekly wage bill.

### Job Redesign: The Big Three (Never Confuse Them!)

| Method | Definition | Example in a Hotel | Benefits & Drawbacks |
|---|---|---|---|
| **Job Rotation** | Workers switch periodically between different tasks at the **same skill level**. | Moving 2 hours on reception check-in, 2 hours on concierge, 2 hours in breakfast service. | Cuts physical/mental monotony and builds a **multi-skilled flexible workforce** to cover sickness; however, none of the individual tasks is more challenging, and switching loses specialist speed. |
| **Job Enlargement** | Giving workers a **wider horizontal range** of tasks at a similar complexity level. | Asking housekeepers to restock mini-bars and inspect lightbulbs alongside making beds. | Makes a role feel less fragmented, but staff quickly resent it as **unpaid extra workload** unless paired with fair time allowances. |
| **Job Enrichment** | Giving workers **vertically deeper** complexity, challenge, decision-making authority and feedback (Herzberg). | Letting senior receptionists resolve guest complaints independently, design VIP welcome packages and mentor trainees. | Directly triggers **Herzberg motivators** (achievement, responsibility) and prepares internal promotion candidates; however, requires **training** and some staff dislike extra pressure. |

### Empowerment, Teamworking & Recognition
- **Empowerment**: Giving frontline employees genuine autonomy over *how* they organise their work and solve customer problems (e.g. Ritz-Carlton's famous rule allowing staff to spend up to $2,000 to rescue a guest's stay without asking a manager). Speeds up customer service and boosts **esteem**, though poorly trained staff could make costly errors.
- **Autonomous workgroups / Teamworking (Cell production)**: Organising staff into small self-managing teams responsible for an entire product module or client account. Satisfies **Maslow's social belonging need**, encourages peer quality-checking (Kaizen), and reduces absenteeism because teammates do not want to let peers down.
- **Praise, Recognition & Career Progression**: Public praise, internal promotion pathways and funded professional qualifications satisfy **esteem** and **advancement** while slashing external recruitment fees.`,
      diagram: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Job Rotation, Job Enlargement and Job Enrichment">
  <rect x="0" y="0" width="680" height="260" rx="14" fill="var(--surface-2)" />
  <text x="340" y="28" font-size="14" font-weight="800" text-anchor="middle" fill="var(--ink)">Job Redesign: Horizontal Variety vs Vertical Depth (Herzberg)</text>

  <rect x="24" y="48" width="196" height="192" rx="12" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" />
  <text x="122" y="72" font-size="13" font-weight="800" text-anchor="middle" fill="var(--brand)">1. Job Rotation</text>
  <circle cx="82" cy="118" r="22" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8" />
  <text x="82" y="122" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">Task A</text>
  <circle cx="162" cy="118" r="22" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8" />
  <text x="162" y="122" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">Task B</text>
  <path d="M 104 106 Q 122 90 140 106" fill="none" stroke="var(--brand)" stroke-width="2" />
  <path d="M 140 130 Q 122 146 104 130" fill="none" stroke="var(--brand)" stroke-width="2" />
  <text x="122" y="172" font-size="10.5" text-anchor="middle" fill="var(--ink)">Switch between same-level</text>
  <text x="122" y="188" font-size="10.5" text-anchor="middle" fill="var(--ink)">tasks every few hours</text>
  <text x="122" y="216" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">+ Multi-skilled cover</text>

  <rect x="242" y="48" width="196" height="192" rx="12" fill="var(--surface)" stroke="#d97706" stroke-width="2" />
  <text x="340" y="72" font-size="13" font-weight="800" text-anchor="middle" fill="#d97706">2. Job Enlargement</text>
  <rect x="262" y="102" width="46" height="32" rx="6" fill="var(--accent-soft)" stroke="#d97706" stroke-width="1.6" />
  <text x="285" y="122" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Task A</text>
  <rect x="317" y="102" width="46" height="32" rx="6" fill="var(--accent-soft)" stroke="#d97706" stroke-width="1.6" />
  <text x="340" y="122" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--ink)">+ Task B</text>
  <rect x="372" y="102" width="46" height="32" rx="6" fill="var(--accent-soft)" stroke="#d97706" stroke-width="1.6" />
  <text x="395" y="122" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--ink)">+ Task C</text>
  <text x="340" y="172" font-size="10.5" text-anchor="middle" fill="var(--ink)">Horizontal expansion:</text>
  <text x="340" y="188" font-size="10.5" text-anchor="middle" fill="var(--ink)">more tasks, same skill tier</text>
  <text x="340" y="216" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">! Risk: 'More work, same pay'</text>

  <rect x="460" y="48" width="196" height="192" rx="12" fill="var(--surface)" stroke="var(--good)" stroke-width="2" />
  <text x="558" y="72" font-size="13" font-weight="800" text-anchor="middle" fill="var(--good)">3. Job Enrichment</text>
  <rect x="498" y="88" width="120" height="24" rx="5" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <text x="558" y="104" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--good)">Solve &amp; Decide ↑</text>
  <rect x="498" y="118" width="120" height="24" rx="5" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <text x="558" y="134" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Plan &amp; Quality-Check</text>
  <text x="558" y="172" font-size="10.5" text-anchor="middle" fill="var(--ink)">Vertical depth: challenge,</text>
  <text x="558" y="188" font-size="10.5" text-anchor="middle" fill="var(--ink)">authority &amp; ownership</text>
  <text x="558" y="216" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">+ True Herzberg Motivator</text>
</svg>`,
      diagramCaption:
        "Rotation switches tasks, Enlargement widens horizontal task count, and Enrichment adds vertical responsibility and challenge.",
      workedExamples: [
        {
          title: "Evaluating Cost vs Return of Training for Job Enrichment",
          problem:
            "A software support firm spends £600 per technician training 12 junior technicians so they can diagnose complex server faults themselves (**job enrichment**). Annual staff leavers drop from 5 to 1, saving £4,500 in recruitment costs per leaver. Calculate the **net annual financial gain** in Year 1.",
          steps: [
            "Total training cost: {{12 * 600 = 7200}} (£7,200).",
            "Reduction in leavers: {{5 - 1 = 4}} fewer leavers.",
            "Recruitment cost saved: {{4 * 4500 = 18000}} (£18,000).",
            "Net financial gain in Year 1: {{18000 - 7200 = 10800}} (£10,800).",
          ],
          answer: "£10,800 net saving in Year 1",
          yourTurn: {
            question:
              "A dental clinic spends £400 each training 8 receptionists in patient care coordination (**job enrichment**). Staff turnover falls by 3 employees that year, saving £2,500 per employee in recruitment fees. Calculate the clinic's **net saving** in Year 1 in £.",
            answer: { type: "number", value: 4300, display: "£4,300" },
            solution:
              "Training cost = 8 × £400 = £3,200. Turnover savings = 3 × £2,500 = £7,500. Net saving = £7,500 − £3,200 = £4,300.",
          },
        },
      ],
      keyPoints: [
        "**Job rotation** reduces repetition and creates cover flexibility, but does not raise task difficulty.",
        "**Job enlargement** adds horizontal tasks at the same skill level — risk of feeling exploited if pay is unchanged.",
        "**Job enrichment** adds vertical responsibility, autonomy and skill (Herzberg's key recommendation), though it often requires upfront training.",
        "**Empowerment** and **autonomous teamworking** satisfy Maslow's social and esteem needs while speeding up frontline customer problem-solving.",
      ],
      whyItWorks:
        "Non-financial methods don't suffer from diminishing cash returns: trusting an employee with real decision-making signals respect (Maslow Tier 4) and turns problem-solving into personal pride (Maslow Tier 5), while keeping fixed payroll costs lean.",
      strategies: [
        "Spot the verb in the case study: *switching stations* = **rotation**; *extra chores* = **enlargement**; *authority/budget/mentoring* = **enrichment**.",
        "In 9-mark and 12-mark answers, note that non-financial motivation FAILS if basic **hygiene factors** (living wage, safe conditions) are broken first!",
      ],
      thinkDeeper:
        "Why might a worker on the National Minimum Wage struggling to pay rent resent 'Employee of the Month' certificates and 'empowerment workshops' unless their base hourly pay is addressed first?",
    },
    {
      id: "organisational-charts",
      heading: "Tall vs flat hierarchies, span of control & delegation",
      discovery: {
        problem:
          "A regional supermarket chain has 6 layers of hierarchy. To cut £900,000 in salaries, the CEO **delayers** two entire tiers of regional supervisors. Every remaining store manager's **span of control** jumps from 4 to 14 staff, and the CEO tells managers: 'Delegate stock ordering to team leaders so you aren't accountable if shelves run empty!' Spot the TWO dangerous flaws in the CEO's plan.",
        idea:
          "First, jumping to a **wide span of control** of 14 overnight can overload managers if team leaders are untrained, causing supervision errors. Second — the classic **Edexcel 4BS1 Grade 9 rule** — **delegation passes down AUTHORITY to carry out a task, NEVER ultimate RESPONSIBILITY (accountability)!** If a team leader misorders stock, the store manager still carries ultimate responsibility.",
      },
      body: `An **organisational structure** shows how roles, authority, communication lines and functional departments (**HR, Finance, Marketing, Operations**) are arranged inside a business.

### Essential Organisational Chart Vocabulary
- **Hierarchy (Layers / Levels)**: The number of management tiers from the Managing Director / CEO at the top down to frontline operatives at the bottom.
- **Chain of command**: The formal vertical line of authority down which instructions pass and upward feedback/accountability flows. *Longer chains slow decisions and distort messages ("Chinese whispers").*
- **Span of control**: The number of **subordinates** reporting **directly** to one manager (count ONLY the direct vertical links immediately beneath that manager — never their subordinates' subordinates!).
- **Delayering**: Removing one or more whole layers of middle management to flatten the hierarchy, cut fixed salary overheads and shorten the chain of command (at the short-term cost of **redundancy payments**, lost managerial expertise and heavier workloads).
- **Delegation**: Passing **authority** to make specific decisions or complete tasks down to a subordinate — while **ultimate responsibility remains with the manager**.

### Tall vs Flat Structures (Inverse Relationship!)
For a fixed workforce size, **layers of hierarchy** and **span of control** move in opposite directions:

| Feature | Tall Structure (Many Layers, Narrow Span e.g. 3) | Flat Structure (Few Layers, Wide Span e.g. 10) |
|---|---|---|
| **Chain of command** | **Long** — slow upward/downward communication; high risk of message distortion. | **Short** — rapid communication between frontline staff and senior leaders; agile response to rivals. |
| **Supervision & control** | **Close supervision** — ideal for **unskilled**, high-risk or newly recruited staff needing tight checking. | **High delegation & trust** — empowers skilled staff (Herzberg motivator), but managers risk overload. |
| **Management wage bill** | **High fixed overhead** — many middle managers drawing salaries and perks. | **Lean overhead** — fewer middle-management salaries, lowering unit costs. |
| **Promotion ladder** | **Many rungs** — frequent step-up promotions motivate ambitious staff (Maslow esteem). | **Few rungs** — harder to offer title promotions, so firms must use **job enrichment** instead. |`,
      diagram: `<svg viewBox="0 0 680 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of a Tall Organisational Hierarchy with narrow span of control versus a Flat Hierarchy with wide span of control">
  <rect x="0" y="0" width="680" height="275" rx="14" fill="var(--surface-2)" />

  <text x="165" y="26" font-size="13.5" font-weight="800" text-anchor="middle" fill="var(--bad)">Tall Hierarchy (4 Layers · Span = 2)</text>
  <rect x="130" y="40" width="70" height="26" rx="5" fill="#c2410c" />
  <text x="165" y="57" font-size="10" font-weight="700" text-anchor="middle" fill="#ffffff">CEO</text>

  <line x1="165" y1="66" x2="105" y2="92" stroke="var(--ink-2)" stroke-width="1.6" />
  <line x1="165" y1="66" x2="225" y2="92" stroke="var(--ink-2)" stroke-width="1.6" />
  <rect x="72" y="92" width="66" height="24" rx="5" fill="#d97706" />
  <text x="105" y="108" font-size="9.5" font-weight="700" text-anchor="middle" fill="#ffffff">Director A</text>
  <rect x="192" y="92" width="66" height="24" rx="5" fill="#d97706" />
  <text x="225" y="108" font-size="9.5" font-weight="700" text-anchor="middle" fill="#ffffff">Director B</text>

  <line x1="105" y1="116" x2="75" y2="144" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="105" y1="116" x2="135" y2="144" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="225" y1="116" x2="195" y2="144" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="225" y1="116" x2="255" y2="144" stroke="var(--ink-2)" stroke-width="1.5" />
  <rect x="50" y="144" width="50" height="22" rx="4" fill="var(--surface)" stroke="#d97706" stroke-width="1.6" />
  <text x="75" y="159" font-size="8.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Sup 1</text>
  <rect x="110" y="144" width="50" height="22" rx="4" fill="var(--surface)" stroke="#d97706" stroke-width="1.6" />
  <text x="135" y="159" font-size="8.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Sup 2</text>
  <rect x="170" y="144" width="50" height="22" rx="4" fill="var(--surface)" stroke="#d97706" stroke-width="1.6" />
  <text x="195" y="159" font-size="8.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Sup 3</text>
  <rect x="230" y="144" width="50" height="22" rx="4" fill="var(--surface)" stroke="#d97706" stroke-width="1.6" />
  <text x="255" y="159" font-size="8.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Sup 4</text>

  <circle cx="62" cy="196" r="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />
  <circle cx="88" cy="196" r="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />
  <circle cx="122" cy="196" r="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />
  <circle cx="148" cy="196" r="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />
  <circle cx="182" cy="196" r="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />
  <circle cx="208" cy="196" r="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />
  <circle cx="242" cy="196" r="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />
  <circle cx="268" cy="196" r="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />
  <line x1="75" y1="166" x2="62" y2="186" stroke="var(--ink-2)" stroke-width="1.2" />
  <line x1="75" y1="166" x2="88" y2="186" stroke="var(--ink-2)" stroke-width="1.2" />
  <line x1="135" y1="166" x2="122" y2="186" stroke="var(--ink-2)" stroke-width="1.2" />
  <line x1="135" y1="166" x2="148" y2="186" stroke="var(--ink-2)" stroke-width="1.2" />
  <line x1="195" y1="166" x2="182" y2="186" stroke="var(--ink-2)" stroke-width="1.2" />
  <line x1="195" y1="166" x2="208" y2="186" stroke="var(--ink-2)" stroke-width="1.2" />
  <line x1="255" y1="166" x2="242" y2="186" stroke="var(--ink-2)" stroke-width="1.2" />
  <line x1="255" y1="166" x2="268" y2="186" stroke="var(--ink-2)" stroke-width="1.2" />
  <text x="165" y="232" font-size="10.5" text-anchor="middle" fill="var(--ink)">• Long chain: slow comms, high salaries</text>
  <text x="165" y="250" font-size="10.5" text-anchor="middle" fill="var(--ink)">• Close control + clear promotion steps</text>

  <line x1="335" y1="20" x2="335" y2="258" stroke="var(--line)" stroke-width="2" stroke-dasharray="5,5" />

  <text x="508" y="26" font-size="13.5" font-weight="800" text-anchor="middle" fill="var(--good)">Flat Hierarchy (2 Layers · Span = 7)</text>
  <rect x="463" y="56" width="90" height="30" rx="6" fill="#15803d" />
  <text x="508" y="75" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Founder / MD</text>

  <line x1="508" y1="86" x2="376" y2="152" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="508" y1="86" x2="420" y2="152" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="508" y1="86" x2="464" y2="152" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="508" y1="86" x2="508" y2="152" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="508" y1="86" x2="552" y2="152" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="508" y1="86" x2="596" y2="152" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="508" y1="86" x2="640" y2="152" stroke="var(--ink-2)" stroke-width="1.5" />

  <circle cx="376" cy="166" r="14" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <circle cx="420" cy="166" r="14" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <circle cx="464" cy="166" r="14" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <circle cx="508" cy="166" r="14" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <circle cx="552" cy="166" r="14" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <circle cx="596" cy="166" r="14" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <circle cx="640" cy="166" r="14" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <text x="508" y="206" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--good)">Delegation = Authority ↓ · Responsibility stays ↑</text>
  <text x="508" y="232" font-size="10.5" text-anchor="middle" fill="var(--ink)">• Short chain: fast agile communication</text>
  <text x="508" y="250" font-size="10.5" text-anchor="middle" fill="var(--ink)">• Low salary cost, high trust (risk: overload)</text>
</svg>`,
      diagramCaption:
        "A tall hierarchy pairs many layers with a narrow span of control; delayering into a flat hierarchy widens the span of control, cuts salary overheads and requires effective delegation.",
      workedExamples: [
        {
          title: "Counting Direct Span of Control vs Total Workforce",
          problem:
            "In an engineering company, 1 Managing Director directly manages 4 Functional Directors (HR, Finance, Marketing, Operations). Each Functional Director directly manages 5 Team Leaders, and each Team Leader directly supervises 6 Operatives. State the **Managing Director's span of control** and calculate the **total number of employees** in the firm.",
          steps: [
            "**MD's span of control**: Count ONLY direct reports immediately below the MD = **4** (the 4 Functional Directors — NEVER count the 20 Team Leaders or 120 Operatives!).",
            "Count each layer: Layer 1 (MD) = 1; Layer 2 (Directors) = 4; Layer 3 (Team Leaders) = {{4 * 5 = 20}}; Layer 4 (Operatives) = {{20 * 6 = 120}}.",
            "Total workforce = {{1 + 4 + 20 + 120 = 145}} employees.",
          ],
          answer: "MD's span of control = 4; Total workforce = 145 employees",
          yourTurn: {
            question:
              "A retail chain has 1 CEO who directly manages 3 Regional Directors. Each Regional Director manages 6 Store Managers, and each Store Manager directly supervises 8 Sales Assistants. What is a **Regional Director's span of control**?",
            answer: { type: "number", value: 6, display: "6" },
            solution:
              "A Regional Director directly supervises 6 Store Managers, so their span of control is 6 (only direct subordinates count).",
          },
        },
        {
          title: "Delayering Payback vs Redundancy Cost",
          problem:
            "A Paper 2 insurer delayers 15 middle-management posts, each earning £48,000 per year. Each redundant manager receives a one-off statutory and contractual redundancy package of £18,000. Calculate the **net financial saving in Year 1** and the **annual saving in Year 2 onwards**.",
          steps: [
            "Annual gross salary saving: {{15 * 48000 = 720000}} (£720,000 per year).",
            "One-off Year 1 redundancy cost: {{15 * 18000 = 270000}} (£270,000).",
            "Net saving in Year 1: {{720000 - 270000 = 450000}} (£450,000); Year 2+ saving = £720,000/yr.",
          ],
          answer: "Year 1 net saving = £450,000; Year 2+ annual saving = £720,000",
          yourTurn: {
            question:
              "A logistics firm delayers 8 area supervisors each paid £40,000 a year, paying each a one-off redundancy settlement of £12,000. Calculate the **net saving in Year 1** in £.",
            answer: { type: "number", value: 224000, display: "£224,000" },
            solution:
              "Annual salary saved = 8 × £40,000 = £320,000. Redundancy cost = 8 × £12,000 = £96,000. Year 1 net saving = £320,000 − £96,000 = £224,000.",
          },
        },
      ],
      keyPoints: [
        "**Span of control** = ONLY the number of **direct** subordinates immediately beneath one manager.",
        "**Tall hierarchies** have narrow spans, close supervision and promotion rungs, but slow communication and high fixed salary costs.",
        "**Flat hierarchies** (often created via **delayering**) cut middle-manager salaries and speed communication, but widen spans and risk manager burnout.",
        "**Delegation** passes **authority** down to empower subordinates and free senior time, while **ultimate responsibility stays with the manager**.",
      ],
      whyItWorks:
        "Every extra management tier adds both a fixed salary cost and an extra relay node in communication. Removing unnecessary relays speeds market reaction time — provided frontline teams are trained and trusted enough not to need constant checking.",
      strategies: [
        "On org-chart questions, trace ONLY the vertical lines touching the named manager's box from below to read Span of Control.",
        "Always distinguish **authority** (delegated) from **responsibility/accountability** (retained by the manager).",
      ],
      thinkDeeper:
        "Why does an air-traffic control centre or nuclear power plant deliberately retain a **narrow span of control** and multiple check layers even though its engineers are highly qualified?",
    },
    {
      id: "centralisation-leadership",
      heading: "Centralised vs decentralised & leadership styles",
      discovery: {
        problem:
          "Global burger chain BiteKing operates in 40 countries. Head office in London dictates identical beef menus, pricing and TV adverts worldwide (**centralised**). Sales boom in the UK and USA, but flop disastrously in India and Japan. Why did strict centralisation fail internationally, and what should remain centralised vs decentralised?",
        idea:
          "Strict **centralisation** ignores local cultural, religious and taste differences (e.g. vegetarian/paneer demand in India or teriyaki flavours in Japan). Smart **Paper 2 multinationals** use a **hybrid approach**: keep brand logo, food-safety standards and global packaging **centralised** (for **purchasing economies of scale** and brand consistency), while **decentralising** menu flavours, local pricing and store hiring to national/regional managers who understand local consumers.",
      },
      body: `### Centralised vs Decentralised Decision-Making

- **Centralised organisation**: Strategic and operational decisions (budgets, pricing, product range, supplier contracts, HR policies) are kept tightly at **Head Office** by senior executives.
  - *Advantages*: Strong **brand consistency** across every branch; **purchasing economies of scale** through bulk head-office buying; prevents inexperienced branch managers making costly mistakes; rapid unified direction in a crisis.
  - *Drawbacks*: Slow to react to **local market tastes/competitors**; demotivates branch managers who feel treated like robots (no **Herzberg autonomy**); head-office executives are distant from frontline customers.
- **Decentralised organisation**: Decision-making authority is delegated out to **regional divisions, local branches or country managers**.
  - *Advantages*: Fast adaptation to local culture, climate and rival promotions; **empowers** local managers (satisfying **Maslow esteem** and **Herzberg responsibility**); frees senior directors to focus on long-term corporate strategy.
  - *Drawbacks*: Risk of inconsistent customer experience or rogue local spending; duplication of admin roles; loss of bulk-buying discounts if each branch orders separately.

### The Three Leadership Styles (Edexcel 4BS1)

| Leadership Style | How Decisions & Communication Work | When It Works Best & Key Risks |
|---|---|---|
| **Autocratic** | Leader holds all power, tells staff *what* to do and *how* to do it; **one-way downward** communication; minimal delegation. | **Best for**: Emergencies/crises (fire evacuation, cash-flow rescue), military/safety-critical tasks, or supervising **unskilled/temporary** staff. **Risk**: Crushes creativity, breeds resentment and drives high **labour turnover** among skilled professionals. |
| **Democratic** | Leader consults employees, encourages **two-way communication**, delegates authority and weighs team ideas before deciding (persuasive or consultative). | **Best for**: Experienced, skilled teams (hospitals, retail revamps, engineering). **Benefits**: Better decisions using frontline insight + strong **Herzberg recognition/buy-in**. **Risk**: Consultation takes **time**, slowing urgent crisis decisions. |
| **Laissez-faire** ("let it be") | Leader sets broad objectives and boundaries, then steps back, giving specialists near-total freedom over methods and schedules. | **Best for**: Highly creative, self-motivated experts (video-game studios, R&D labs, fashion designers, senior architects). **Risk**: Without self-discipline or clear KPIs, coordination collapses, deadlines slip and staff feel unsupported ("absent leadership"). |`,
      diagram: `<svg viewBox="0 0 680 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tannenbaum-style leadership continuum from Autocratic through Democratic to Laissez-faire alongside Centralised versus Decentralised control">
  <rect x="0" y="0" width="680" height="265" rx="14" fill="var(--surface-2)" />
  <text x="340" y="26" font-size="14" font-weight="800" text-anchor="middle" fill="var(--ink)">Leadership Continuum &amp; Locus of Organisational Power</text>

  <polygon points="40,52 640,52 40,94" fill="#c2410c" opacity="0.22" />
  <polygon points="640,52 640,94 40,94" fill="#15803d" opacity="0.22" />
  <rect x="40" y="52" width="600" height="42" rx="6" fill="none" stroke="var(--ink-2)" stroke-width="1.5" />
  <text x="54" y="70" font-size="10.5" font-weight="800" fill="var(--bad)">Leader Control &amp; Centralisation High</text>
  <text x="626" y="86" font-size="10.5" font-weight="800" text-anchor="end" fill="var(--good)">Team Autonomy &amp; Decentralisation High</text>

  <rect x="30" y="112" width="194" height="134" rx="10" fill="var(--surface)" stroke="var(--bad)" stroke-width="2" />
  <text x="127" y="134" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--bad)">Autocratic</text>
  <text x="44" y="154" font-size="10.5" fill="var(--ink)">• 1-way downward orders</text>
  <text x="44" y="172" font-size="10.5" fill="var(--ink)">• Fast in crisis / turnaround</text>
  <text x="44" y="190" font-size="10.5" fill="var(--ink)">• Suits unskilled / high-risk</text>
  <text x="44" y="212" font-size="10" font-weight="700" fill="var(--bad)">− High skilled staff turnover</text>
  <text x="44" y="230" font-size="10" font-weight="700" fill="var(--ink-2)">Matches: Taylor &amp; Tall/Central</text>

  <rect x="243" y="112" width="194" height="134" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" />
  <text x="340" y="134" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--brand)">Democratic</text>
  <text x="257" y="154" font-size="10.5" fill="var(--ink)">• 2-way consultation &amp; input</text>
  <text x="257" y="172" font-size="10.5" fill="var(--ink)">• Delegates authority fairly</text>
  <text x="257" y="190" font-size="10.5" fill="var(--ink)">• Taps frontline ideas</text>
  <text x="257" y="212" font-size="10" font-weight="700" fill="var(--bad)">− Slower when urgent</text>
  <text x="257" y="230" font-size="10" font-weight="700" fill="var(--ink-2)">Matches: Maslow Esteem</text>

  <rect x="456" y="112" width="194" height="134" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="2" />
  <text x="553" y="134" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--good)">Laissez-faire</text>
  <text x="470" y="154" font-size="10.5" fill="var(--ink)">• Sets vision, hands-off methods</text>
  <text x="470" y="172" font-size="10.5" fill="var(--ink)">• Sparks R&amp;D &amp; creative flair</text>
  <text x="470" y="190" font-size="10.5" fill="var(--ink)">• Needs expert self-starters</text>
  <text x="470" y="212" font-size="10" font-weight="700" fill="var(--bad)">− Drift if targets unclear</text>
  <text x="470" y="230" font-size="10" font-weight="700" fill="var(--ink-2)">Matches: Self-Actualisation</text>
</svg>`,
      diagramCaption:
        "No single leadership style is 'best' in every situation — Grade 9 answers judge fit against workforce skill, task creativity and urgency.",
      workedExamples: [
        {
          title: "Purchasing Economies in Centralised vs Decentralised Buying",
          problem:
            "A 20-branch café chain currently lets each branch manager buy coffee beans locally (**decentralised**) at £14 per kg for 150 kg per branch per month. Moving to **centralised** head-office bulk purchasing secures a 15% supplier discount, though central distribution adds £3,200 per month in van delivery costs. Calculate the chain's **net monthly saving**.",
          steps: [
            "Current decentralised monthly spend: {{20 * 150 * 14 = 42000}} (£42,000).",
            "15% bulk discount on beans: {{42000 * 0.15 = 6300}} (£6,300 gross bean saving).",
            "Subtract central delivery cost (£3,200): {{6300 - 3200 = 3100}} (£3,100 net monthly saving).",
          ],
          answer: "£3,100 net monthly saving",
          yourTurn: {
            question:
              "A 10-store florist chain spends £2,000 per store per month buying ribbons locally (**decentralised**). Centralised bulk buying cuts the ribbon bill by 20%, but costs £1,100 per month in central courier fees. Calculate the **net monthly saving** in £.",
            answer: { type: "number", value: 2900, display: "£2,900" },
            solution:
              "Current spend = 10 × £2,000 = £20,000. 20% discount = £4,000 saved. Subtract £1,100 courier fee = £2,900 net monthly saving.",
          },
        },
      ],
      keyPoints: [
        "**Centralisation** delivers brand consistency and **purchasing economies of scale**, whereas **decentralisation** empowers local managers and adapts rapidly to regional customers.",
        "**Autocratic** leadership suits crises and unskilled routine work; **Democratic** suits skilled teams and change management; **Laissez-faire** suits expert R&D and creative studios.",
        "In **AJIM** 9/12-mark evaluations, never say 'autocratic is always bad' — judge leadership against **urgency**, **worker skill/experience** and **business culture**.",
      ],
      whyItWorks:
        "Decision power works best where the best *information* lives: head office sees company-wide bulk costs and brand risk, while local managers see shifting street-level customer tastes.",
      strategies: [
        "Use **It Depends On (AJIM)**: Urgency of crisis? Skill level of workforce? Need for uniform global brand vs local cultural adaptation?",
      ],
      thinkDeeper:
        "When a startup founder (Paper 1, 8 staff) grows into a 500-employee PLC (Paper 2), why must the founder almost always shift away from centralised autocratic control — and why do many founders struggle psychologically to let go?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the key difference between Herzberg's Hygiene Factors and Motivators?",
        back: "**Hygiene factors** (pay, working conditions, job security, supervision) only **prevent dissatisfaction** when adequate. **Motivators** (achievement, recognition, responsibility, challenging work, promotion) create genuine **job satisfaction** and extra effort.",
      },
      {
        front: "List Maslow's 5 tiers of needs in exact order from bottom to top.",
        back: "1. **Physiological** (living wage, breaks)\n2. **Safety / Security** (contracts, H&S, pension)\n3. **Social / Belonging** (teamwork, colleagues)\n4. **Esteem** (recognition, status, praise)\n5. **Self-actualisation** (full creative potential)",
      },
      {
        front: "What did F.W. Taylor believe motivates workers, and what pay method did he champion?",
        back: "Taylor (*Scientific Management*) believed workers are motivated primarily by **money**. He broke jobs into simple timed steps and paid **differentiated piece-rate** (paid per unit produced).",
      },
      {
        front: "Why can pure piece-rate pay damage a business's brand reputation?",
        back: "Workers rush to maximise unit count, increasing **defects/wastage** and cutting corners on safety unless expensive **quality control** inspections are added.",
      },
      {
        front: "Why must you NEVER recommend employee share ownership for a sole trader or partnership?",
        back: "Sole traders and partnerships are **unincorporated** businesses and legally **have no shares** — only Ltds and PLCs can issue employee shares.",
      },
      {
        front: "Distinguish carefully between Job Rotation, Job Enlargement and Job Enrichment.",
        back: "• **Rotation**: Switching periodically between same-level tasks (variety + cover).\n• **Enlargement**: Adding *more* horizontal tasks at the same skill level.\n• **Enrichment**: Adding *vertical* challenge, autonomy and decision-making responsibility (Herzberg).",
      },
      {
        front: "Define 'Span of Control' and state the golden counting rule on an org chart.",
        back: "The number of subordinates reporting **directly** to one manager. Count ONLY the immediate vertical links one tier directly below that manager!",
      },
      {
        front: "Define 'Chain of Command' and explain what happens when it is too long.",
        back: "The vertical line of authority down which orders pass and upward feedback travels. A long chain slows decisions and distorts communication between senior leaders and customers.",
      },
      {
        front: "What is the Grade 9 exam rule on Delegation (Authority vs Responsibility)?",
        back: "Delegation passes **authority** to perform a task down to a subordinate, **NEVER ultimate responsibility (accountability)** — the manager remains accountable for the outcome.",
      },
      {
        front: "What is 'Delayering', and what is its main short-term cost vs long-term benefit?",
        back: "Removing whole layer(s) of middle management to flatten the hierarchy. **Short-term cost**: statutory redundancy payments & anxiety. **Long-term benefit**: lower annual salary overheads & faster communication.",
      },
      {
        front: "Compare Tall vs Flat organisational structures across 3 dimensions.",
        back: "• **Tall**: Many layers, narrow span, close supervision, many promotion steps, high management wage cost, slow comms.\n• **Flat**: Few layers, wide span, high delegation/trust, lean wage bill, fast comms, risk of manager overload.",
      },
      {
        front: "Give two advantages of Centralisation and two advantages of Decentralisation.",
        back: "• **Centralised**: Uniform brand standards + **purchasing economies of scale** (bulk buying).\n• **Decentralised**: Fast response to **local tastes/rivals** + empowers local branch managers.",
      },
      {
        front: "When is Autocratic leadership genuinely effective in Edexcel 4BS1?",
        back: "During urgent **crises** (cash-flow emergencies, product recalls, safety evacuations) or when directing **unskilled, inexperienced or temporary** workers needing clear step-by-step control.",
      },
      {
        front: "When does Laissez-faire leadership succeed — and when does it fail?",
        back: "**Succeeds** with highly skilled, self-motivated specialists (R&D scientists, software architects, creative designers). **Fails** when workers lack experience or clear KPIs, causing missed deadlines.",
      },
      {
        front: "State the Labour Turnover (%) formula and explain why high turnover hurts profit.",
        back: "(Number of staff leaving in a year ÷ Average number of staff) × 100. High turnover inflates **advertising, selection and induction training costs** while disrupting customer service.",
      },
      {
        front: "What are Fringe Benefits (Perks)? Give three examples.",
        back: "Non-cash rewards with financial value alongside pay — e.g. **company car**, **private medical insurance**, **staff discounts**, gym membership or subsidised meals.",
      },
    ],
    mustKnow: [
      "Calculate **Labour Turnover (%)**, **Labour Productivity (output per worker)**, **Piece-rate pay**, **Overtime pay** and **Salary + Commission** accurately to 2 d.p. where needed.",
      "Compare **Taylor** (money + piece-rate), **Maslow** (5-tier pyramid, progression once lower needs met) and **Herzberg** (hygiene factors stop dissatisfaction vs motivators drive satisfaction).",
      "Match financial rewards (time-rate, piece-rate, salary, commission, bonus/PRP, profit sharing, share ownership, fringe benefits) to **Paper 1 SMEs (< 50 staff)** vs **Paper 2 PLCs (> 250 staff)**.",
      "Distinguish **job rotation** (switching), **job enlargement** (horizontal extra tasks) and **job enrichment** (vertical authority & challenge).",
      "Read any **organisational chart**: identify **layers of hierarchy**, **chain of command**, **direct span of control**, and functional departments.",
      "Evaluate **delayering**: balance Year 1 **redundancy costs** and wider spans of control against recurring **salary savings** and faster communication.",
      "State accurately that **delegation transfers authority down, while ultimate responsibility remains with the manager**.",
      "Weigh **centralised** (consistency, bulk buying) against **decentralised** (local market responsiveness, manager empowerment) structures.",
      "Evaluate **Autocratic, Democratic and Laissez-faire** leadership styles in context rather than treating Democratic as automatically best.",
      "Master **Edexcel 4BS1 Command Words**: *Define/State* (AO1, 1m), *Calculate* (AO2, 2m — show formula/working!), *Outline* (AO1+AO2 context, 2m), *Explain* (AO1+AO3 2-step chain, 3m — NO context needed on Paper 1/2 3-markers!), *Analyse* (AO2+AO3 2 chains, 6m), *Justify* (9m) & *Evaluate* (12m).",
      "Use **AJIM** on 9-mark *Justify* and 12-mark *Evaluate* essays: **A**nswer option clearly → **J**ustify with 2 contextualised chains + counterbalance → **I**t depends on (skill level, cash position, urgency, Paper 1 vs Paper 2 scale) → **M**ost important factor.",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'Delegation means the manager passes responsibility for mistakes down to the subordinate.'",
        right: "Write instead (Grade 9): 'Delegation passes **authority** to complete the task and make day-to-day decisions down to a subordinate, while **ultimate responsibility (accountability)** remains with the manager.'",
      },
      {
        wrong: "Never write: 'According to Herzberg, increasing wages and upgrading the staff canteen are strong motivators that boost productivity.'",
        right: "Write instead (Grade 9): 'In Herzberg's Two-Factor Theory, pay and working conditions are **hygiene factors**: improving them removes **job dissatisfaction** and cuts turnover, but genuine **motivation** requires **motivators** such as job enrichment, recognition and promotion.'",
      },
      {
        wrong: "Never write: 'Giving assembly workers extra cleaning and packing duties is job enrichment.'",
        right: "Write instead (Grade 9): 'Adding extra tasks at the same low skill level is **job enlargement** (horizontal expansion); **job enrichment** requires **vertical** depth such as quality-sign-off authority, problem-solving and mentoring.'",
      },
      {
        wrong: "Never write: 'The sole trader bakery on Paper 1 should motivate its 6 bakers using an employee share ownership scheme.'",
        right: "Write instead (Grade 9): 'A sole trader is **unincorporated** and has **no shares** to issue; instead, the owner should use a team **bonus**, **free/discounted bakery perks** or **job enrichment** (creating seasonal recipes).'",
      },
      {
        wrong: "Never write: 'Because the CEO sits above 4 Directors, 12 Managers and 60 Operatives, the CEO's span of control is 76.'",
        right: "Write instead (Grade 9): '**Span of control** counts ONLY **direct** subordinates one level immediately below the manager — so the CEO's span of control is **4**.'",
      },
      {
        wrong: "Never write: 'Delayering immediately saves money with no financial downsides.'",
        right: "Write instead (Grade 9): 'While delayering cuts **recurring annual salary overheads**, in the **short run** the firm must pay lump-sum **redundancy costs**, and remaining managers face **wider spans of control** that risk burnout or mistakes.'",
      },
      {
        wrong: "Never write: 'Autocratic leadership is always poor management and businesses should always be democratic.'",
        right: "Write instead (Grade 9): '**Autocratic** leadership is superior during **urgent crises** or with **unskilled/temporary workers** needing strict safety supervision, whereas **democratic** leadership suits experienced teams when time allows consultation.'",
      },
      {
        wrong: "Never write: 'Once Maslow's safety need is met, offering even stronger job security keeps motivating staff to work harder.'",
        right: "Write instead (Grade 9): 'Under Maslow's Hierarchy of Needs, **a satisfied tier ceases to motivate** — management must target the **next unsatisfied tier up** (e.g. social teamworking or esteem recognition).'",
      },
    ],
    examMistakes: [
      "Writing generic textbook pros/cons on **6-mark Analyse**, **9-mark Justify** and **12-mark Evaluate** questions without weaving in the case study's actual product, staff skill level, employee headcount or financial constraint (**zero AO2 = capped at Level 1/2!**).",
      "Wasting 4 minutes inventing case-study context on **3-mark Explain** questions — in Edexcel 4BS1, *Explain one advantage/reason...* (3 marks) tests **AO1 (1) + AO3 (2)** only (point → because → therefore), with NO AO2 context required!",
      "Forgetting to subtract the **sales threshold** before multiplying by the commission percentage (e.g. '4% on sales above £10,000').",
      "Counting every employee below a manager on an organisational chart instead of counting **direct reports only** for Span of Control.",
      "Confusing **labour productivity** (output per worker) with **total output** — hiring 20% more staff raises total output even if individual motivation and productivity fell!",
      "Recommending **piece-rate** pay for customer-facing luxury retail, nursing or creative design where quality cannot be counted per unit.",
      "Ending a 9-mark *Justify* essay on the fence ('both options have pros and cons') instead of making a decisive recommendation backed by **AJIM**.",
    ],
    mnemonics: [
      {
        topic: "Maslow's 5 Tiers (Bottom to Top)",
        device: "Please Stay Safe, Every Star!",
        explanation:
          "**P**hysiological → **S**afety → **S**ocial → **E**steem → **S**elf-actualisation.",
      },
      {
        topic: "Job Redesign Trio (Rotation vs Enlargement vs Enrichment)",
        device: "Switch · Stretch · Step-Up",
        explanation:
          "Rotation = **Switch** stations; Enlargement = **Stretch** sideways (more same-level tasks); Enrichment = **Step-Up** vertically (challenge & authority).",
      },
      {
        topic: "Delegation Rule",
        device: "Authority Goes Down, Accountability Stays Crowned",
        explanation:
          "Subordinates gain day-to-day **authority**, while the manager at the top keeps ultimate **responsibility/accountability**.",
      },
      {
        topic: "9-Mark & 12-Mark Evaluation Structure",
        device: "AJIM",
        explanation:
          "**A**nswer decisively → **J**ustify in context (+ 1 counter-argument) → **I**t depends on (skill, urgency, cash, scale) → **M**ost decisive factor.",
      },
    ],
    realWorld: [
      {
        title: "John Lewis Partnership — Employee Co-Ownership & Profit Sharing",
        detail:
          "Waitrose and John Lewis staff are 'Partners' who share annual Partnership Bonus profits and elect representatives onto the Partnership Council (democratic voice) — historically delivering lower labour turnover and higher customer-service ratings than rival department stores.",
        emoji: "🏬",
      },
      {
        title: "Toyota Lean Cells — Teamworking, Job Rotation & Kaizen",
        detail:
          "Rather than pure isolated Taylorism, Toyota groups assembly workers into autonomous cells who rotate tasks every two hours, inspect quality at source and pull the *Andon* cord to suggest continuous improvements (empowerment + Maslow social/esteem).",
        emoji: "🚗",
      },
      {
        title: "McDonald's Global Hybrid — Centralised Core, Decentralised Menus",
        detail:
          "Golden Arches branding, kitchen hygiene protocols and global potato procurement are strictly **centralised** for economies of scale, while country teams **decentralise** local hits like the McAloo Tikki in India and Teriyaki Burger in Japan.",
        emoji: "🍔",
      },
      {
        title: "Valve & Supercell — Flat Hierarchies & Laissez-Faire Gaming Pods",
        detail:
          "Mobile gaming studio Supercell operates ultra-flat 'cells' of 5–10 developers with **laissez-faire** creative freedom to build or kill prototype games without middle-management red tape — thriving because every developer is an elite self-motivated specialist.",
        emoji: "🎮",
      },
      {
        title: "Asda & Big-Four Supermarket Delayering",
        detail:
          "UK supermarkets repeatedly delayered thousands of department-supervisor roles to fund lower grocery prices and raise entry-level hourly pay — cutting long-term wage bills but widening store managers' spans of control.",
        emoji: "🛒",
      },
    ],
    videos: [
      {
        title: "Edexcel IGCSE Business 2.4 Motivation Theories (Maslow, Herzberg, Taylor)",
        channel: "Tutor2u / TakingTheBiz Search",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+business+motivation+maslow+herzberg+taylor",
      },
      {
        title: "Financial vs Non-Financial Methods of Motivation — IGCSE Business",
        channel: "Bizconsesh / IGCSE Business Search",
        url: "https://www.youtube.com/results?search_query=igcse+business+financial+and+non+financial+motivation",
      },
      {
        title: "Organisational Structures: Tall vs Flat, Span of Control & Delayering",
        channel: "TakingTheBiz / Tutor2u Search",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+business+tall+flat+organisational+structure+span+of+control",
      },
      {
        title: "Autocratic, Democratic & Laissez-Faire Leadership Styles Explained",
        channel: "Bizconsesh Search",
        url: "https://www.youtube.com/results?search_query=igcse+business+autocratic+democratic+laissez+faire+leadership",
      },
    ],
    formulas: [
      {
        name: "Labour Productivity",
        formula: '{{"Total Output" / "Number of Employees"}}',
        note: "Measured in units per employee per time period; rising productivity lowers unit labour cost.",
      },
      {
        name: "Labour Turnover (%)",
        formula: '{{("Number of Staff Leaving" / "Average Number of Staff") * 100}}',
        note: "High % signals poor hygiene factors or weak leadership, inflating recruitment and training costs.",
      },
      {
        name: "Absenteeism Rate (%)",
        formula: '{{("Working Days Lost" / "Total Possible Working Days") * 100}}',
        note: "Tracks unauthorised/sick absence; disrupts operations and raises overtime bills.",
      },
      {
        name: "Piece-Rate Gross Pay",
        formula: '{{"Units Produced" * "Rate per Unit"}}',
        note: "F.W. Taylor's preferred incentive; fast output, but requires quality control.",
      },
      {
        name: "Time-Rate + Overtime Pay",
        formula: '{{("Standard Hours" * "Rate") + ("Overtime Hours" * "Overtime Rate")}}',
        note: "Time-and-a-half = 1.5 × standard hourly rate; double time = 2 × rate.",
      },
      {
        name: "Salary + Threshold Commission",
        formula: '{{"Base Salary" + (("Total Sales" - "Threshold") * "Commission %")}}',
        note: "Always check whether commission applies to ALL sales or only sales ABOVE a quota.",
      },
      {
        name: "Span of Control",
        formula: "Number of subordinates reporting DIRECTLY to one manager",
        note: "Count only the immediate tier directly underneath that manager on an org chart.",
      },
      {
        name: "Delayering Year 1 Net Saving",
        formula: '{{"Annual Salaries Removed" - "One-Off Redundancy Payments"}}',
        note: "From Year 2 onwards, the business enjoys the full recurring annual salary saving.",
      },
      {
        name: "Herzberg's Two-Factor Distinction",
        formula: "Hygiene Factors → Prevent Dissatisfaction | Motivators → Create Satisfaction",
        note: "Pay and conditions are hygiene factors; recognition, responsibility and enrichment are motivators.",
      },
      {
        name: "Delegation Rule",
        formula: "Authority passes DOWN to subordinate; Ultimate Responsibility stays UP with manager",
        note: "Empowers staff and frees managerial time, but requires clear briefings and training.",
      },
      {
        name: "Centralised vs Decentralised",
        formula: "Centralised = Head Office Control | Decentralised = Local Branch Autonomy",
        note: "Centralised wins on consistency & bulk buying; Decentralised wins on speed & local adaptation.",
      },
      {
        name: "Symmetric Workforce Size (Uniform Span s across k Management Links)",
        formula: '{{1 + s + s^2 + ... + s^k}}',
        note: "Sum every layer on the organisational chart when calculating total headcount.",
      },
    ],
  },
};
