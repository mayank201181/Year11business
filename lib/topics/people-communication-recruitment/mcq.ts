import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "people-communication-recruitment-m1",
    title: "Paper 1 — Core Concepts: Communication, Recruitment, Training & Law",
    questions: [
      {
        id: "people-communication-recruitment-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "effective-communication",
        question:
          "A factory machinist reports a loose conveyor guard to her shift supervisor during a morning huddle. Which direction of **internal communication** does this represent?",
        options: [
          "Upward internal communication",
          "Downward internal communication",
          "Horizontal internal communication",
          "External stakeholder communication",
        ],
        answerIndex: 0,
        explanation:
          "When a frontline subordinate communicates safety feedback, ideas or concerns **up** the chain of command to a supervisor/manager, it is **upward internal communication**.",
        hints: [
          "Check the hierarchy levels: machinist (subordinate) → shift supervisor (manager).",
          "Messages travelling from lower to higher levels inside the firm are upward.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "effective-communication",
        question:
          "The Marketing Manager and Operations Manager at `BeanCraft Ltd` (same management tier) hold a 15-minute call to align next month's promotional coffee-tin stock. What type of communication is this?",
        options: [
          "Downward communication",
          "Horizontal (lateral) internal communication",
          "External supplier communication",
          "Informal grapevine rumour",
        ],
        answerIndex: 1,
        explanation:
          "Official coordination between peers on the **same hierarchical level** across different functional departments is **horizontal (lateral) internal communication**.",
        hints: [
          "Notice both managers sit on the same tier of the hierarchy in different departments.",
          "Sideways coordination across departments is called horizontal or lateral.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "effective-communication",
        question:
          "A restaurant owner needs to give a chef a formal final disciplinary warning AND discuss poor hygiene performance empathetically. Which combination of communication media is most appropriate?",
        options: [
          "A public post on the restaurant's customer Instagram page",
          "A pinned note on the kitchen staffroom noticeboard",
          "A private face-to-face meeting backed up by a signed formal written letter",
          "A casual group WhatsApp message sent at midnight",
        ],
        answerIndex: 2,
        explanation:
          "Sensitive HR matters require a **private 1-to-1 face-to-face meeting** (for confidentiality, empathy and two-way feedback) paired with a **formal written letter** (creating a clear legal record against unfair dismissal claims).",
        hints: [
          "Think about both human confidentiality/two-way dialogue AND employment-law proof!",
          "Public noticeboards, Instagram or group chats breach privacy and destroy morale.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "barriers-to-communication",
        question:
          "A finance manager tells café baristas to *'optimise SKU working-capital velocity and EBITDA run-rate variance'*, leaving the baristas baffled. Which barrier to communication caused this failure?",
        options: [
          "Technological server failure",
          "Geographical time-zone distance",
          "Use of unexplained technical jargon",
          "Physical factory machinery noise",
        ],
        answerIndex: 2,
        explanation:
          "Using specialist finance acronyms (*SKU, EBITDA*) that non-specialist café staff do not understand is the classic barrier of **technical jargon**.",
        hints: [
          "Why couldn't the baristas act on the message even though they heard every word clearly?",
          "Specialist terminology unfamiliar to the audience is called jargon.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "barriers-to-communication",
        question:
          "Employees at `GlobalRetail Plc` receive an average of 135 internal emails every day, causing store managers to miss an urgent product-recall email buried in their inbox. What is the most effective way to overcome this **information overload**?",
        options: [
          "Require every employee to reply 'Received' to all 135 emails using Reply All",
          "Add two extra layers of middle management to forward more emails",
          "Restrict mass emails and send urgent recalls via a dedicated high-priority alert channel requiring two-way confirmation",
          "Stop all written communication across the company permanently",
        ],
        answerIndex: 2,
        explanation:
          "Curbing unnecessary mass emails and separating critical safety/recall alerts onto a **dedicated priority channel with a mandatory confirmation loop** directly eliminates **information overload**.",
        hints: [
          "'Reply All' makes inbox overload 100 times worse!",
          "How do you make critical recalls stand out while cutting daily inbox clutter?",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "recruitment-selection",
        question:
          "Which item belongs in a **Person Specification** rather than a **Job Description**?",
        options: [
          "Job title: Senior Bookkeeper",
          "Reports directly to the Finance Director",
          "Annual salary: £34,000 for 37.5 hours per week",
          "Essential: AAT Level 3 accounting qualification and 2 years of payroll experience",
        ],
        answerIndex: 3,
        explanation:
          "**Person Specification** lists the **qualifications, experience, skills and personal attributes** required of the candidate; job title, reporting line, hours and pay belong in the **Job Description**.",
        hints: [
          "Remember the golden rule: `Job Description = The Role`; `Person Specification = The Human's Qualifications & Skills`!",
          "Spot the option listing qualifications and experience.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "recruitment-selection",
        question:
          "An ice-cream kiosk in Brighton hires six university students exclusively for July and August to cope with summer beach crowds. Which type of employment contract is this?",
        options: [
          "Permanent full-time employment",
          "Job-share director contract",
          "Seasonal temporary employment",
          "Lifetime apprenticeship",
        ],
        answerIndex: 2,
        explanation:
          "Hiring extra staff specifically for predictable weather/calendar demand peaks (summer tourism, Christmas retail, harvest) without paying wages in winter is **seasonal employment**.",
        hints: [
          "Notice the roles exist strictly for July and August summer tourism!",
          "Matches labour capacity to predictable times of the year.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "What is the defining feature of a **zero-hours contract**?",
        options: [
          "The employee works 40 fixed hours every week for £0 pay",
          "Two part-time employees split one 36-hour permanent role equally",
          "The employer guarantees no minimum weekly hours and offers shifts only when customer demand requires",
          "The employee is legally barred from ever leaving the company",
        ],
        answerIndex: 2,
        explanation:
          "Under a **zero-hours contract**, the employer does not guarantee any minimum weekly hours (staff are paid only for hours actually worked when called in, and may decline shifts).",
        hints: [
          "Contrast a fixed 16-hour part-time contract against a contract guaranteeing 0 minimum hours.",
          "Workers still must be paid at least the legal minimum wage for every hour they DO work!",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "Which of the following is a genuine **drawback of internal recruitment** when filling a Store Manager vacancy?",
        options: [
          "It costs thousands of pounds in external headhunter fees",
          "The promoted deputy already understands the store's EPOS computer system",
          "Promoting an internal deputy creates a knock-on deputy vacancy that still needs to be filled and brings no fresh outside ideas",
          "Existing staff feel demotivated when they see colleagues win promotions",
        ],
        answerIndex: 2,
        explanation:
          "**Internal recruitment** draws from a small internal pool (no new external perspectives) and automatically leaves a **knock-on vacancy** in the promoted employee's previous job!",
        hints: [
          "What happens to the deputy manager's old job the morning after they step up to Store Manager?",
          "Also ask whether promoting from inside brings fresh ideas from rival retailers.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "recruitment-selection",
        question:
          "During the selection process, why does an employer contact a candidate's **referees** (previous employers or teachers)?",
        options: [
          "To verify the accuracy of the candidate's CV, past attendance, honesty and work performance",
          "To negotiate a bank overdraft for the company",
          "To design the company's new marketing logo",
          "To replace the need for a Job Description before advertising",
        ],
        answerIndex: 0,
        explanation:
          "**References** provide independent verification from past employers/tutors regarding a shortlisted candidate's character, punctuality, honesty and competence before confirming an offer.",
        hints: [
          "Candidates naturally present their best side at interview — how does HR check their real past track record?",
          "Referees confirm past employment history and reliability.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "training-employment-law",
        question:
          "On her first morning at a logistics warehouse, new starter Maya is given a tour of fire exits, shown where protective boots are stored, introduced to her supervisor, and set up on the payroll app. What type of training is Maya receiving?",
        options: [
          "Off-the-job university degree training",
          "Psychometric selection testing",
          "External headhunting",
          "Induction training",
        ],
        answerIndex: 3,
        explanation:
          "**Induction training** introduces brand-new recruits to workplace layout, health & safety rules, company policies and colleagues on Day 1/Week 1 so they settle in quickly and safely.",
        hints: [
          "Focus on *when* this happens (her very first morning) and *what* it covers (fire exits, tour, payroll, team intros).",
          "Orientation for new starters is called ________ training.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "training-employment-law",
        question:
          "What is a common **disadvantage** of relying solely on **on-the-job shadowing** to train new kitchen staff?",
        options: [
          "High external college tuition and hotel accommodation bills",
          "The experienced chef's own output slows down and any hygiene shortcuts or bad habits get copied by the trainee",
          "Trainees learn on equipment completely different from the restaurant's real ovens",
          "Zero food is ever prepared in the kitchen while shadowing occurs",
        ],
        answerIndex: 1,
        explanation:
          "With **on-the-job training**, the mentor/experienced chef works more slowly while explaining tasks, and any **bad habits** or sloppy shortcuts are passed straight on to the new recruit!",
        hints: [
          "Eliminate external college fees (that's off-the-job!).",
          "What happens if the senior worker being shadowed cuts corners or has to pause cooking to explain?",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "training-employment-law",
        question:
          "Why might a hospital send surgical nurses to an external medical simulation centre (**off-the-job training**) rather than training them solely on live wards?",
        options: [
          "Off-the-job simulation lets specialist instructors teach complex life-critical procedures safely without risking harm to real patients",
          "Off-the-job courses are always completely free of tuition and travel fees",
          "Nurses continue treating their full ward caseload simultaneously while away at the external centre",
          "Off-the-job certificates prevent rival private hospitals from ever offering nurses jobs",
        ],
        answerIndex: 0,
        explanation:
          "**Off-the-job training** provides specialist instruction away from live operational pressure — vital where mistakes on the job (surgery, aviation, high-voltage power) carry severe safety risks!",
        hints: [
          "Ask what happens if a trainee nurse practises a brand-new emergency procedure for the first time on a real patient!",
          "Off-the-job simulators allow safe practice under expert specialists.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "training-employment-law",
        question:
          "A job advert stating *'Wanted: Sales Assistant — only men aged under 25 may apply'* breaches which area of **employment legislation**?",
        options: [
          "Import tariff customs regulations",
          "Equal opportunities / anti-discrimination legislation (gender and age)",
          "Central bank monetary policy rules",
          "Patent and copyright law",
        ],
        answerIndex: 1,
        explanation:
          "Restricting applicants by **gender** (*men only*) and **age** (*under 25*) directly violates **equal opportunities / anti-discrimination employment law**.",
        hints: [
          "Spot the two protected characteristics unlawfully excluded in the advert: gender and age!",
          "Anti-discrimination laws require merit-based recruitment.",
        ],
      },
      {
        id: "people-communication-recruitment-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "training-employment-law",
        question:
          "How can strict compliance with **Health and Safety legislation** financially **benefit** a 45-employee roofing contractor over a 3-year period?",
        options: [
          "It eliminates the need to buy scaffolding, harnesses or hard hats",
          "Fewer falls and injuries reduce sick-pay absences, insurance premiums, legal fines and site shutdown delays",
          "It allows the firm to pay roofers below the National Minimum Wage",
          "It guarantees a 50% government location grant every month",
        ],
        answerIndex: 1,
        explanation:
          "While harnesses and scaffolding cost money upfront, preventing roofing accidents saves far larger sums in **lost working days, sick pay, compensation lawsuits, insurance hikes and site closures**.",
        hints: [
          "Think what happens financially to a roofing business when a worker falls off unsafe scaffolding!",
          "Preventing accidents lowers sick pay, legal fines and downtime.",
        ],
      },
    ],
  },
  {
    id: "people-communication-recruitment-m2",
    title: "Paper 2 — Data, Calculations & Case-Study Application",
    questions: [
      {
        id: "people-communication-recruitment-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "Harbour Hotel Ltd employed an average of **80 staff** last year, during which **18 staff** resigned to join rival hotels. What was Harbour Hotel Ltd's **labour turnover** percentage?",
        options: ["18.0%", "22.5%", "62.0%", "77.5%"],
        answerIndex: 1,
        explanation:
          "Labour Turnover (%) = {{(Leavers / Average Staff) * 100 = (18 / 80) * 100 = 22.5%}}. (18.0% forgets to divide by 80; 77.5% is the retention complement!)",
        hints: [
          "Use {{(Number of Staff Leaving / Average Staff Employed) * 100}}.",
          "Compute (18 ÷ 80) × 100.",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "At `FreshGrocer Plc`, a full-time contract is **40 hours per week**. A suburban branch employs **15 part-time checkout assistants** contracted for **16 hours per week** each, plus **8 full-time staff**. What is the branch's total **Full-Time Equivalent (FTE)** headcount?",
        options: ["6 FTE", "14 FTE", "23 FTE", "240 FTE"],
        answerIndex: 1,
        explanation:
          "Part-time weekly hours = {{15 * 16 = 240}} hours → {{240 / 40 = 6}} FTE. Add the **8 full-time staff**: {{6 + 8 = 14}} FTE in total! (6 FTE forgets the 8 full-timers; 23 is raw headcount.)",
        hints: [
          "Convert the 15 part-timers into FTE first: (15 × 16 hours) ÷ 40 hours = 6 FTE.",
          "Don't forget to add the 8 full-time staff on top of those 6 FTE!",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "training-employment-law",
        question:
          "CareHome Ltd employs **25 care assistants** working **30 hours per week** each for **52 weeks a year** on the statutory minimum wage. When legislation increases the minimum wage from **£11.20 to £12.10 per hour**, by how much does CareHome Ltd's **annual wage bill increase**?",
        options: ["£675", "£22,500", "£35,100", "£471,900"],
        answerIndex: 2,
        explanation:
          "Total annual hours = {{25 * 30 * 52 = 39000}} hours. Hourly wage rise = {{£12.10 - £11.20 = £0.90}}. Annual increase = {{39000 * £0.90 = £35100}}. (£675 is one single week; £471,900 is the entire new wage bill!)",
        hints: [
          "Find total hours worked per year: 25 workers × 30 hours/wk × 52 weeks = 39,000 hours.",
          "Multiply 39,000 hours by the £0.90 (£12.10 − £11.20) hourly rise.",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "CyberShield Plc needs a Lead Security Architect on a **£75,000** salary. **External recruitment** uses a headhunter charging **20% of Year 1 salary** plus **£1,500** in technical test fees. **Internal promotion** of a senior analyst costs £0 headhunter fee, **£1,800** in internal assessment + job-board ads to backfill the analyst post, and **£2,200** for a bridging cloud certificate. How much **cheaper** is the internal route?",
        options: ["£4,000", "£11,000", "£12,500", "£16,500"],
        answerIndex: 2,
        explanation:
          "External cost = {{(20% * £75000 = £15000) + £1500 = £16500}}. Internal route (including backfill + certificate) = {{£1800 + £2200 = £4000}}. Saving = {{£16500 - £4000 = £12500}}!",
        hints: [
          "External total = 20% of £75,000 (£15,000) + £1,500 = £16,500.",
          "Internal total = £1,800 + £2,200 = £4,000; subtract £4,000 from £16,500.",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "training-employment-law",
        question:
          "Precision CNC Ltd sends **5 machinists** on a **4-day off-the-job** robotics course costing **£900 per machinist** in course fees. Each day a machinist is away from the factory loses **£180** of net contribution. Over the next year, faster setup times generate **£2,600** extra contribution per trained machinist. What is the **net Year 1 profit gain** across all 5 machinists?",
        options: ["£3,600", "£4,900", "£8,100", "£8,500"],
        answerIndex: 1,
        explanation:
          "Direct fees = {{5 * £900 = £4500}}. Lost output = {{5 * 4 * £180 = £3600}} → Total training cost = {{£4500 + £3600 = £8100}}. Gross contribution gained = {{5 * £2600 = £13000}}. Net Year 1 profit gain = {{£13000 - £8100 = £4900}}! (£8,500 forgets the £3,600 lost output.)",
        hints: [
          "Calculate total cost = (5 × £900 fees = £4,500) + (5 machinists × 4 days × £180 lost output = £3,600) = £8,100.",
          "Subtract £8,100 from total annual productivity gain (5 × £2,600 = £13,000).",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "barriers-to-communication",
        question:
          "`GlobalBank Plc` operates offices in London (`UTC+0`), Singapore (`UTC+8`) and Sydney (`UTC+11`). When it is **10:00 a.m. in London**, it is **6:00 p.m. in Singapore** and **9:00 p.m. in Sydney**. Which communication strategy best overcomes this **time-zone barrier** without forcing Sydney staff onto exhausting late-night calls every day?",
        options: [
          "Banning all written documentation and demanding 3-hour live video calls at 11:00 p.m. Sydney time daily",
          "Combining concise recorded video handovers and shared cloud project boards with occasional rotating overlap calls",
          "Posting paper memos by airmail once a fortnight",
          "Using technical London banking slang with zero written summaries",
        ],
        answerIndex: 1,
        explanation:
          "**Asynchronous cloud tools + recorded video handovers** let each regional hub pick up clear, documented updates during normal local working hours, reserving live calls for rotating overlap slots.",
        hints: [
          "Look at the clock: 10 a.m. London is already 9 p.m. in Sydney!",
          "How can global teams pass work smoothly across time zones without burning out night-time staff?",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "A coding start-up asks shortlisted developer candidates to sit a 45-minute live bug-fixing exercise on a laptop during their interview afternoon. What selection method is this?",
        options: [
          "An aptitude / practical skills test",
          "A Deed of Partnership",
          "Induction health-and-safety training",
          "An external employer reference letter",
        ],
        answerIndex: 0,
        explanation:
          "Testing a candidate's practical ability to perform a core technical task (bug-fixing code, Excel modelling, welding) before hiring is an **aptitude / skills test**.",
        hints: [
          "Notice this happens *before* hiring (selection stage) and directly measures practical coding skill!",
          "Psychometric tests measure personality; _______ tests measure practical skill.",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "effective-communication",
        question:
          "After `VeloCourier Ltd` introduces a driver suggestion app (**upward two-way communication**), parcel damage drops from **3.0% to 1.2%** across **50,000 monthly deliveries**. Each damaged parcel previously cost VeloCourier **£15** in compensation. If the app costs **£900/month** to run, what is VeloCourier's **net monthly saving**?",
        options: ["£9,000", "£12,600", "£13,500", "£21,600"],
        answerIndex: 1,
        explanation:
          "Damage rate reduction = {{3.0% - 1.2% = 1.8%}} of 50,000 parcels = **900 fewer damaged parcels/month**. Gross compensation saved = {{900 * £15 = £13500}}. Subtract £900 app fee = **£12,600** net monthly saving!",
        hints: [
          "Fewer damaged parcels per month = (3.0% − 1.2%) × 50,000 = 1.8% × 50,000 = 900 parcels.",
          "Multiply 900 × £15 (£13,500) and subtract the £900 monthly app cost.",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "Two experienced paediatric physiotherapists (each wanting to work 2.5 days a week while raising young children) apply together to split one 5-day Senior Physiotherapist post at a clinic. What flexible working arrangement is this?",
        options: [
          "Zero-hours casual labour",
          "Seasonal agricultural work",
          "Off-the-job simulation",
          "Job sharing",
        ],
        answerIndex: 3,
        explanation:
          "**Job sharing** splits one full-time post, salary and set of responsibilities between two part-time employees — helping employers **retain experienced talent** while requiring smooth handover communication between the pair!",
        hints: [
          "Two staff divide a single full-time job role and schedule between them.",
          "Retains skilled working parents who cannot commit to 5 full days alone.",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "barriers-to-communication",
        question:
          "In a 6-layer retail PLC, store assistants complain that customer sizing complaints sent to Supervisors never reach Head Office buyers, while Head Office pricing updates arrive at tills three days late. Which structural reform directly fixes BOTH vertical communication delays?",
        options: [
          "Adding two new Deputy Regional Director tiers to check every memo",
          "Delayering middle hierarchy tiers and connecting stores directly to Head Office via a two-way retail intranet",
          "Replacing all store emails with postal letters",
          "Switching from limited liability to unlimited liability",
        ],
        answerIndex: 1,
        explanation:
          "**Delayering** shortens the **chain of command**, removing middle-management bottlenecks so both downward pricing updates and upward customer feedback travel faster with less distortion.",
        hints: [
          "Why are messages stalling across 6 management layers?",
          "Cutting intermediate layers = **delayering**!",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "Why do large retail chains (`>250` staff) usually prefer standardised **application forms** over free-format **CVs** when recruiting 500 seasonal store assistants?",
        options: [
          "Standardised forms collect identical comparable fields from all applicants, speeding up fair shortlisting against the Person Specification",
          "Application forms make external advertising free of charge",
          "CVs are illegal under UK consumer protection legislation",
          "Application forms guarantee zero staff turnover forever",
        ],
        answerIndex: 0,
        explanation:
          "When screening hundreds of entry-level applications, **standardised application forms** force every candidate to answer the exact same questions (availability, right to work, relevant skills) in the same layout — making comparison against the **Person Specification** faster and less biased than varied CV layouts.",
        hints: [
          "Imagine an HR officer comparing 500 wildly different 4-page creative CVs versus 500 identical 1-page forms!",
          "Uniform layout speeds up objective comparison against essential criteria.",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "training-employment-law",
        question:
          "An engineering SME spends **£4,800** putting an apprentice through an **off-the-job** welding diploma. Post-training, the welder generates **£400 per month** in higher net contribution. However, without a retention agreement, rival firms poach certified welders after an average of **9 months**. What happens financially if the welder is poached at Month 9 — and how many months must the welder stay just to **break even** on the £4,800 outlay?",
        options: [
          "Firm makes £1,200 net gain at Month 9; break-even stay is 6 months",
          "Firm suffers a £1,200 net loss at Month 9 (£3,600 gained vs £4,800 cost); break-even stay is 12 months",
          "Firm breaks even at Month 9; break-even stay is 9 months",
          "Firm loses the entire £4,800 at Month 9 because zero contribution was earned",
        ],
        answerIndex: 1,
        explanation:
          "In 9 months, extra contribution = {{9 * £400 = £3600}}, leaving a **£1,200 net loss** ({{£3600 - £4800 = -£1200}}) when poached! Break-even retention period = {{£4800 / £400 = 12}} months — illustrating why **training clawback agreements** or competitive post-qualification pay are vital!",
        hints: [
          "Calculate contribution earned in 9 months: 9 × £400 = £3,600, and compare against £4,800 cost!",
          "Divide £4,800 by £400/month to find exact break-even months.",
          "Shows quantitatively why rival poaching is the #1 threat to off-the-job ROI!",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "effective-communication",
        question:
          "A fashion e-commerce brand leaves 400 angry customer comments about late winter coats **unanswered** on its public TikTok and Instagram posts (`failed external communication`). What is the sharpest commercial risk?",
        options: [
          "Visible unanswered complaints deter thousands of prospective online buyers, raising customer-acquisition costs and cutting conversion rates",
          "The central bank immediately raises national interest rates",
          "Public complaints automatically convert the brand into a partnership",
          "Suppliers cut fabric prices to reward slow replies",
        ],
        answerIndex: 0,
        explanation:
          "Social media is **public external communication**: ignoring complaints in full view of prospective shoppers destroys brand trust, hurts conversion and triggers negative word-of-mouth.",
        hints: [
          "Unlike a private phone call, who else sees unanswered comments on TikTok and Instagram?",
          "Prospective shoppers abandon baskets when they see ignored delivery complaints.",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "training-employment-law",
        question:
          "Under **unfair dismissal** employment law, what could happen to a business that sacks a permanent employee on the spot because a manager disliked their football team, with zero performance misconduct or warnings?",
        options: [
          "The business faces an employment tribunal claim, financial compensation payouts, legal fees and reputational damage",
          "The business receives a tax rebate for cutting wage costs quickly",
          "Only public corporations are covered by unfair dismissal laws",
          "Unfair dismissal laws apply only to suppliers, never to employees",
        ],
        answerIndex: 0,
        explanation:
          "**Unfair dismissal legislation** requires a lawful reason (capability, gross misconduct, genuine redundancy) AND a fair disciplinary process — arbitrary sackings lead to costly **employment tribunals** and compensation awards.",
        hints: [
          "Can an employer legally fire permanent staff on a whim with zero valid reason or warning?",
          "Tribunal fines, legal costs and bad employer branding follow unlawful sackings.",
        ],
      },
      {
        id: "people-communication-recruitment-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "barriers-to-communication",
        question:
          "On a noisy bottling factory floor where staff wear ear defenders and speak three different native languages, which medium communicates **emergency machine-stop procedures** with fewest barriers?",
        options: [
          "A loudspeaker tannoy announcement read fast in idiomatic English",
          "A 14-page dense legal PDF emailed to office computers",
          "Universal colour-coded visual pictograms + translated laminated cards right beside the stop button, practised in a physical drill",
          "An informal rumour passed around the canteen",
        ],
        answerIndex: 2,
        explanation:
          "Noise defeats loudspeaker audio (**environmental barrier**) and language diversity defeats dense English text (**language barrier**); **universal visual symbols + translated cards + hands-on drills** bypass both barriers!",
        hints: [
          "Check BOTH barriers in the stem: (1) loud noise + ear defenders AND (2) three native languages!",
          "Visual pictograms + physical practice work instantly in zero seconds despite noise and language differences.",
        ],
      },
    ],
  },
  {
    id: "people-communication-recruitment-m3",
    title: "Paper 3 — Grade 9 Exam Traps, Strategy & Synoptic Judgement",
    questions: [
      {
        id: "people-communication-recruitment-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "recruitment-selection",
        question:
          "` Heritage Watch Co Ltd` (32 staff) has seen sales fall for three consecutive years because none of its long-serving staff understand TikTok shop marketing or e-commerce SEO. It needs to hire a **Head of Digital Growth**. Which recruitment evaluation earns Grade 9 AO4 marks?",
        options: [
          "Promote the longest-serving watch repairer internally because internal recruitment is always cheaper and faster",
          "Recruit EXTERNALLY despite higher agency/advertising costs, because the core strategic problem is an internal digital skills gap that internal promotion cannot solve",
          "Put all 32 watchmakers onto zero-hours contracts instead of hiring a marketer",
          "Avoid writing a Person Specification so anyone can apply",
        ],
        answerIndex: 1,
        explanation:
          "**Grade 9 Context Rule:** Cheap internal promotion is useless when **nobody inside the firm possesses the missing skill**! Paying external recruitment fees to inject **fresh e-commerce/TikTok expertise** directly solves the root cause of falling sales.",
        hints: [
          "Read the diagnosis in the stem: *none* of the existing 32 staff know TikTok shop or SEO!",
          "What would happen if you promoted internally when zero internal candidates have digital skills?",
          "Match recruitment source to the case study's strategic skills gap!",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "Which student sentence commits the **classic Edexcel 4BS1 document confusion** that loses marks?",
        options: [
          "'Shortlisting compares applicants' CVs against the essential criteria on the Person Specification.'",
          "'The Job Description states that the Warehouse Supervisor reports to the Logistics Manager and works 40 hours a week.'",
          "'The Person Specification requires applicants to hold a clean HGV licence and 3 years of logistics experience.'",
          "'The Job Description lists that the applicant must have an Honours degree in Marketing and strong leadership traits.'",
        ],
        answerIndex: 3,
        explanation:
          "Degrees and personal leadership traits belong in the **Person Specification** — putting candidate qualifications/traits inside the **Job Description** is the #1 Strand 2 exam mistake!",
        hints: [
          "Check each sentence against `Job Description = Role Duties/Hours/Reporting` vs `Person Specification = Degrees/Experience/Traits`!",
          "Three sentences are 100% accurate; spot the one that swaps the two documents!",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "training-employment-law",
        question:
          "Which student sentence commits the **classic Edexcel 4BS1 training confusion**?",
        options: [
          "'Induction training introduces a newly hired receptionist to fire exits, booking software logins and hotel colleagues on Day 1.'",
          "'On-the-job training lets a junior florist shadow the senior florist at the shop bench while arranging customer bouquets.'",
          "'Induction training is when an employee who has worked at the factory for five years attends an external night college to learn CAD software.'",
          "'Off-the-job training carries a risk that newly certified staff are poached by rival firms.'",
        ],
        answerIndex: 2,
        explanation:
          "A 5-year veteran employee attending an external night college is **off-the-job training** — **induction** applies strictly to **new starters** joining the business (or starting a brand-new site/post orientation)!",
        hints: [
          "Induction = Day-1/Week-1 orientation for NEW hires.",
          "Attending an external night college away from work after 5 years on payroll is OFF-the-job!",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "training-employment-law",
        question:
          "Boutique Hotel `SeaView Ltd` (28 staff) switched 70% of its front-desk and restaurant team onto **zero-hours contracts** to cut winter wage bills by **£18,000/year**. Within eight months, TripAdvisor ratings plunged from 4.8★ to 3.4★, annual staff turnover hit **65%**, and annual room revenue dropped by **£55,000** (`lost contribution = £42,000`). What is the net annual profit effect of the switch (ignoring extra recruitment costs)?",
        options: [
          "Annual operating profit rises by £18,000",
          "Annual operating profit rises by £24,000",
          "Annual operating profit falls by £37,000",
          "Annual operating profit falls by £24,000 (even before counting higher recruitment & induction expenses!)",
        ],
        answerIndex: 3,
        explanation:
          "Wage saving = **+£18,000**, while lost room contribution from poor service continuity = **−£42,000** → Net profit impact = {{+£18000 - £42000 = -£24000}} (**£24,000 lower profit**, and even worse once 65% turnover recruitment fees are deducted!). Luxury hospitality relies on consistent, loyal staff service.",
        hints: [
          "Use LOST CONTRIBUTION (£42,000), not gross revenue (£55,000), when comparing against the £18,000 wage saving!",
          "Compute +£18,000 − £42,000 = −£24,000.",
          "Shows why zero-hours contracts often backfire in high-service boutique hospitality!",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "effective-communication",
        question:
          "Why does encouraging **upward communication** (regular staff feedback forums and suggestion schemes) link directly to **Herzberg's motivators** and **Lean Kaizen**?",
        options: [
          "Upward communication replaces the legal requirement to pay the National Minimum Wage",
          "Upward communication increases the number of middle-management layers in a tall hierarchy",
          "Upward communication means customers never contact the business",
          "Listening to frontline workers' ideas gives them recognition and responsibility (boosting morale & retention) while uncovering practical shop-floor efficiency improvements",
        ],
        answerIndex: 3,
        explanation:
          "Inviting **upward communication** empowers frontline workers who see daily bottlenecks firsthand (**Kaizen continuous improvement**) while fulfilling psychological needs for **recognition and involvement**.",
        hints: [
          "Connect Strand 2.1 (upward voice) with Strand 2.4 (recognition/empowerment) and Strand 5 (Kaizen)!",
          "Workers closest to machines and customers spot waste fastest when managers actually listen.",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "training-employment-law",
        question:
          "When the statutory **National Minimum Wage** increases by **10%**, why might `AutoWash Plc` (automated car-wash tunnels employing 2 technicians per site) suffer a tiny **0.8%** rise in total costs, whereas `HandValet Ltd` (18 manual car cleaners per site) suffers an **8.5%** jump in total costs?",
        options: [
          "PLCs are legally exempt from paying the National Minimum Wage",
          "Minimum-wage rises apply only to firms with fewer than 50 employees",
          "AutoWash Plc is capital-intensive (wages are ~8% of total costs), whereas HandValet Ltd is labour-intensive on minimum-wage pay (wages are ~85% of total costs)",
          "Capital-intensive firms employ zero machines and 100% manual workers",
        ],
        answerIndex: 2,
        explanation:
          "**Grade 9 Evaluation Pivot:** Minimum-wage hikes depend on **labour intensity** and **current wage rates**! A **labour-intensive** service paying near the legal floor sees total costs surge (`85% × 10% = 8.5%`), whereas a **capital-intensive** firm (or high-pay law firm already paying £45/hr!) is barely touched!",
        hints: [
          "Compare what share of total costs comes from minimum-wage labour in an automated tunnel vs 18 hand-cleaners!",
          "10% of an 8% wage share = 0.8%; 10% of an 85% wage share = 8.5%!",
          "Also note: firms already paying WELL ABOVE minimum wage face zero direct mandatory rise (unless maintaining pay differentials).",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "What is 'wage differential pressure' when the National Minimum Wage rises from £10.50 to £11.50/hr at a supermarket where Team Leaders currently earn £12.00/hr?",
        options: [
          "Team Leaders ask to have their hourly pay cut to £10.50/hr",
          "Supermarket shelf-stackers must repay £1.00/hr in corporation tax",
          "Job Descriptions become illegal for Team Leaders",
          "Team Leaders demand a pay rise too (e.g. to £13.20/hr) to preserve the reward gap for their extra supervisory responsibility, amplifying total wage-bill inflation",
        ],
        answerIndex: 3,
        explanation:
          "If entry-level pay rises to £11.50 while supervisors stay on £12.00, the **50p gap** no longer rewards supervisory stress — forcing employers to raise supervisor pay too to maintain **pay differentials** and internal recruitment incentives!",
        hints: [
          "Would you take on all the stress of being Team Leader for just 50p/hr more than entry-level staff?",
          "Minimum-wage hikes ripple upward into supervisory pay bands!",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "barriers-to-communication",
        question:
          "A UK engineering firm acquires a family component supplier in Osaka, Japan. During video calls, British managers mistake polite Japanese nods and *'That may be difficult'* as agreement to a Friday deadline, causing a missed shipment. Which barrier occurred and what fixes it?",
        options: [
          "IT hardware failure — fixed by buying louder microphones",
          "Cultural communication differences — fixed by cross-cultural awareness training and written milestone confirmations with explicit two-way sign-off",
          "Excessively flat hierarchy — fixed by adding four layers of supervisors",
          "Consumer boycott — fixed by raising export tariffs",
        ],
        answerIndex: 1,
        explanation:
          "High-context vs direct **cultural norms** around saying 'no' are classic Paper 2 MNC communication barriers — solved via **cross-cultural training** plus **explicit written milestone confirmations**.",
        hints: [
          "Notice there was zero Wi-Fi crash and everyone heard the words, yet polite indirectness was misread!",
          "Cultural communication norms + written feedback loops prevent cross-border misunderstandings.",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "Why might a rapidly growing tech firm use **freelance contractors** for a 4-month website redesign rather than recruiting two permanent full-time web designers?",
        options: [
          "Freelancers bring specialist design skills immediately for the 4-month project with zero long-term salary, holiday pay or redundancy commitment once the site launches",
          "Freelancers charge £0 per hour under UK employment law",
          "Permanent full-time staff are forbidden from using computers",
          "Freelancers automatically own 51% of the company's voting shares",
        ],
        answerIndex: 0,
        explanation:
          "**Freelance specialists** provide instant high-level expertise for temporary/one-off projects without locking the firm into permanent fixed wage overheads after the project ends (though their daily rate is higher and loyalty lower).",
        hints: [
          "What would two permanent web designers do in Month 5 once the website redesign is finished?",
          "Freelancers match temporary specialist need without permanent payroll commitment.",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "recruitment-selection",
        question:
          "A call-centre hires **60 new agents** per year. Poor 2-hour rushed induction causes **40%** of new hires to quit within 90 days, forcing each quitter to be replaced at a recruitment cost of **£1,500 per replacement**. Investing **£180 per new hire** across all 60 hires for a proper 3-day mentored **induction programme** cuts 90-day quitter rates from **40% down to 15%**. What is the **net annual cost saving**?",
        options: ["£10,800", "£11,700", "£22,500", "£36,000"],
        answerIndex: 1,
        explanation:
          "**Before:** {{40% * 60 = 24}} early quitters × £1,500 = **£36,000** replacement cost. **After:** {{15% * 60 = 9}} quitters (15 fewer quitters!), saving {{15 * £1500 = £22500}} in replacement costs. Subtract induction investment ({{60 * £180 = £10800}}): Net annual saving = {{£22500 - £10800 = £11700}}!",
        hints: [
          "Quitters avoided = (40% − 15%) × 60 hires = 25% × 60 = 15 fewer quitters.",
          "Gross recruitment saving = 15 × £1,500 = £22,500.",
          "Subtract the cost of upgrading induction for all 60 hires (60 × £180 = £10,800)!",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "effective-communication",
        question:
          "When is **one-way downward communication** genuinely MORE appropriate than a lengthy two-way consultative team discussion?",
        options: [
          "During an employee's annual career development appraisal",
          "When brainstorming creative ideas for a new youth clothing range",
          "When resolving a sensitive grievance between two partners",
          "During an immediate building fire evacuation or urgent food-contamination recall where instant uniform compliance saves lives",
        ],
        answerIndex: 3,
        explanation:
          "In acute **emergencies / safety crises**, speed and unambiguous compliance outweigh consultation — crisp **one-way downward commands** prevent fatal delay!",
        hints: [
          "Would you hold a 30-minute two-way feedback debate while the kitchen fryer is on fire?",
          "Crisis/safety emergencies demand instant clear one-way instruction.",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "training-employment-law",
        question:
          "How can an employer legally reduce the financial risk of paying **£5,000** for an employee's **off-the-job** professional qualification, only for that employee to resign a week after passing?",
        options: [
          "Include a proportionate training-cost clawback agreement (requiring repayment on a sliding scale if they voluntarily leave within 12–24 months) alongside career progression",
          "Confiscate the employee's passport for five years",
          "Pay the employee half the National Minimum Wage during the course",
          "Refuse to give the employee an employment contract",
        ],
        answerIndex: 0,
        explanation:
          "Contractual **training repayment / clawback clauses** (sliding down to 0% over 12–24 months) combined with clear internal promotion opportunities protect off-the-job training ROI lawfully and ethically.",
        hints: [
          "Eliminate all unlawful options immediately!",
          "Accountancy, aviation and engineering firms use sliding-scale training clawback clauses.",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recruitment-selection",
        question:
          "A bakery wheelchair-accessible ramp costs **£2,400** to install so the business complies with disability **anti-discrimination law** both for job applicants and customers. Beyond avoiding legal fines, what commercial upside can this bring?",
        options: [
          "Widens the recruitment pool to skilled disabled bakers AND welcomes wheelchair-using customers and parents with prams, lifting footfall and brand reputation",
          "Exempts the bakery from food-hygiene inspections",
          "Guarantees raw flour prices fall by 20%",
          "Turns the bakery into a stock-exchange PLC",
        ],
        answerIndex: 0,
        explanation:
          "Inclusive accessibility simultaneously **widens labour supply** (merit-based hiring in tight labour markets) and **expands addressable customer footfall**.",
        hints: [
          "Think about BOTH sides of the door: talented disabled job candidates AND disabled shoppers / parents with buggies!",
          "Accessibility upgrades pay back through talent + wider customer access.",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "barriers-to-communication",
        question:
          "Why can **informal 'grapevine' communication** damage productivity during a rumoured company merger if directors stay silent?",
        options: [
          "Exaggerated redundancy rumours spread anxiety, distracting staff from work and prompting top performers to resign preemptively before facts are announced",
          "Informal corridor conversations cost £50 per minute in telecom bills",
          "Grapevine talk automatically triggers corporation tax rises",
          "Informal communication is impossible in firms with fewer than 250 staff",
        ],
        answerIndex: 0,
        explanation:
          "When formal leadership creates an information vacuum, **informal rumours** fuel insecurity — best talent jumps ship first and morale plunges until transparent formal two-way briefings restore trust.",
        hints: [
          "What do worried employees do when they hear rumours of closures and managers say nothing?",
          "Anxiety lowers focus and drives skilled workers to apply to rivals!",
        ],
      },
      {
        id: "people-communication-recruitment-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "training-employment-law",
        question:
          "In an Edexcel 4BS1 **12-mark 'Evaluate whether Oakwood Dental (14 staff) should use on-the-job or off-the-job training for its new digital 3D tooth-scanner'**, which **AJIM** judgement hits top Level 3 evaluation?",
        options: [
          "Both training methods have pros and cons so Oakwood Dental should flip a coin",
          "Use purely on-the-job shadowing from Day 1, even though zero dentists at Oakwood have ever used the brand-new 3D scanner before",
          "Send 1–2 lead dentists on manufacturer OFF-THE-JOB certification first (since zero in-house skill exists yet), who then cascade ON-THE-JOB shadowing to the remaining 12 staff — balancing clinical accuracy against small-practice budget and lost chair time",
          "Avoid all training so rivals never poach Oakwood's dentists",
        ],
        answerIndex: 2,
        explanation:
          "**Train-the-Trainer AJIM Synthesis:** When introducing **brand-new technology** nobody inside knows yet, pure on-the-job shadowing is impossible; training **1–2 champions off-the-job** who then **mentor peers on-the-job** captures expert precision at a fraction of sending all 14 staff away!",
        hints: [
          "Spot the catch: it's a *brand-new* 3D scanner, so nobody at the 14-staff practice knows how to use it on Day 1!",
          "Sending all 14 clinical staff off-the-job shuts the whole surgery and costs a fortune.",
          "Combining 1–2 off-the-job champions → cascading on-the-job mentoring is Grade 9 HR genius!",
        ],
      },
    ],
  },
];
