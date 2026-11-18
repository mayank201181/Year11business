import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "people-communication-recruitment",
  title: "Communication, Recruitment, Selection & Training",
  strand: "People",
  icon: "🤝",
  summary:
    "Master internal and external communication channels, overcoming barriers, flexible contracts, Job Description vs Person Specification, internal vs external recruitment, induction/on/off-the-job training and employment law.",
  intro:
    "People are often a business's largest single operating expense — and its greatest source of competitive differentiation. In Edexcel 4BS1 **Strand 2 (People in Business)**, examiners test how a **Paper 1** 15-staff café or **Paper 2** 8,000-employee multinational communicates clearly across chains of command, hires the right staff using **Job Descriptions** and **Person Specifications**, develops skills via **induction, on-the-job and off-the-job training**, and complies with **employment legislation**.",
  guide: [
    {
      id: "effective-communication",
      heading: "Internal & external communication channels",
      discovery: {
        problem:
          "A hotel manager sends a 2,400-word group email at 11:45 p.m. announcing both a fire-exit change for 6:00 a.m. breakfast chefs AND redundancy consultations for three receptionists. By noon the next day, two chefs have blocked the fire exit and the entire reception team has walked out in fury. What went wrong?",
        idea:
          "The manager picked the **wrong communication channel** for **both** messages! Urgent operational safety instructions need clear visual signage + a brief **face-to-face handover**, whereas sensitive HR matters (redundancy/discipline) demand **private one-to-one face-to-face meetings** enabling empathy and two-way feedback — never a late-night group email!",
      },
      body: `**Communication** is the transmission of a message from a **sender** to a **receiver** via a chosen **medium/channel**, ideally confirmed by **two-way feedback** so understanding is verified.

### Direction & Scope of Communication
- **Internal communication:** Between people *inside* the organisation (e.g. operations director messaging shift supervisors).
  - **Downward:** Senior managers → subordinates (instructions, targets, policy updates).
  - **Upward:** Frontline employees → managers (customer feedback, safety hazards, Kaizen ideas, grievances — vital for democratic leadership & morale!).
  - **Horizontal (Lateral):** Colleagues at the *same* hierarchical level across departments (e.g. Marketing Manager coordinating launch stock with Operations Manager).
- **External communication:** Between the business and **external stakeholders** (customers, suppliers, banks, tax authorities, local community).
- **Formal vs Informal:** Formal channels follow official company systems (board minutes, appraisals, official email); informal channels ('the grapevine' / corridor chat) spread fast but risk rumour and inaccuracy.

### Choosing the Right Communication Medium

| Medium | Best Used For | Key Advantage | Key Limitation |
|---|---|---|---|
| **Face-to-face meeting / 1-to-1** | Sensitive HR appraisals, redundancies, negotiations, complex brainstorming | Instant **two-way feedback** + body language & tone build trust | Time-consuming; no automatic written record unless minuted; travel cost across branches |
| **Video conferencing** | Multi-site **Paper 2** global teams, remote interviews | Visual cues + live screen-sharing with zero travel expense | Time-zone clashes; Wi-Fi lag / tech failure; 'Zoom fatigue' |
| **Email / Instant Messaging** | Routine operational updates, attaching invoices/schedules to many staff at once | Fast, near-zero cost, creates a permanent **searchable written trail** | **Information overload** (ignored in full inboxes); tone easily misread; no guarantee it was read |
| **Formal Written Report / Letter** | Annual shareholder accounts, legal employment contracts, disciplinary warnings | Authoritative, legally binding precision for complex data | Slow to produce; zero immediate body-language feedback |
| **Noticeboards / Intranet / Social Media** | Shift rotas & factory safety signs (internal); promotions & customer service (external) | Visible to shift workers without computers; viral reach externally | Noticeboards go out of date; public social-media complaints can go viral if mishandled |

### Consequences of Poor Communication
1. **Operational mistakes & wasted costs:** Wrong supplier order quantities, missed delivery slots or defective batches.
2. **Low staff morale & high labour turnover:** Workers feel excluded, confused or undervalued when changes aren't explained or upward voice is ignored.
3. **Lost customers & damaged reputation:** Delayed replies to complaints or conflicting delivery promises drive buyers to rivals.`,
      diagram: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Downward, Upward and Horizontal internal communication alongside External stakeholder communication and Feedback loop">
  <rect x="8" y="8" width="624" height="224" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Communication Directions &amp; The Two-Way Feedback Loop</text>
  <rect x="170" y="50" width="140" height="42" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="240" y="75" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">Senior Directors</text>
  <rect x="44" y="136" width="170" height="48" rx="9" fill="var(--surface)" stroke="var(--line)" stroke-width="1.8"/>
  <text x="129" y="158" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Marketing Team</text>
  <text x="129" y="175" text-anchor="middle" font-size="10" fill="var(--ink-2)">(Campaigns &amp; Pricing)</text>
  <rect x="266" y="136" width="170" height="48" rx="9" fill="var(--surface)" stroke="var(--line)" stroke-width="1.8"/>
  <text x="351" y="158" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Operations Team</text>
  <text x="351" y="175" text-anchor="middle" font-size="10" fill="var(--ink-2)">(Factory Stock &amp; Shifts)</text>
  <line x1="210" y1="92" x2="145" y2="134" stroke="var(--brand)" stroke-width="2.2"/>
  <text x="142" y="114" font-size="10" font-weight="700" fill="var(--brand)">Downward ↓</text>
  <line x1="335" y1="134" x2="270" y2="92" stroke="var(--good)" stroke-width="2.2"/>
  <text x="320" y="114" font-size="10" font-weight="700" fill="var(--good)">↑ Upward (Feedback)</text>
  <line x1="214" y1="160" x2="266" y2="160" stroke="var(--warn)" stroke-width="2.2"/>
  <text x="240" y="152" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--warn)">↔ Horizontal</text>
  <rect x="462" y="64" width="154" height="120" rx="10" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.8"/>
  <text x="539" y="86" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warn)">EXTERNAL</text>
  <text x="539" y="108" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Customers (orders/care)</text>
  <text x="539" y="128" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Suppliers (JIT schedules)</text>
  <text x="539" y="148" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Banks &amp; Tax authorities</text>
  <text x="539" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Needs accuracy &amp; speed!</text>
  <text x="320" y="214" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Sender → Encodes Message → Medium/Channel → Receiver → Two-Way Feedback Confirms Understanding</text>
</svg>`,
      diagramCaption:
        "High-performing organisations combine clear downward targets, open upward staff voice, smooth horizontal department coordination and rapid external customer communication.",
      workedExamples: [
        {
          title: "Quantifying the Cost of Poor Horizontal Communication",
          problem:
            "At `FreshBite Foods Ltd`, the Marketing team launches a 'Buy-One-Get-One-Free' sandwich promotion without informing Operations (**failed horizontal communication**). Stores run out of 8,000 promotional packs (`lost contribution = £1.75 per pack`), while the following week Operations over-orders perishable ingredients, wasting **£4,200** of spoiled stock. Calculate the total financial hit to FreshBite Foods Ltd's operating profit.",
          steps: [
            "Lost contribution from stock-out = {{8000 * £1.75 = £14000}}.",
            "Direct cost of wasted perishable stock = **£4,200**.",
            "Total short-run hit to operating profit = {{£14000 + £4200 = £18200}} (plus unquantified long-term customer frustration!).",
          ],
          answer: "£18,200 reduction in operating profit.",
          yourTurn: {
            question:
              "Miscommunication between sales and dispatch causes 120 wrong orders to be shipped. Re-shipping and returns processing costs £18 per order, and 15 annoyed customers cancel contracts worth £200 contribution each. Calculate the total £ loss in contribution/costs.",
            answer: { type: "number", value: 5160, display: "£5,160" },
            solution:
              "Re-shipping cost = 120 × £18 = £2,160. Lost contract contribution = 15 × £200 = £3,000. Total loss = £2,160 + £3,000 = £5,160.",
          },
        },
      ],
      keyPoints: [
        "**One-way communication** sends instructions with no reply; **two-way communication** invites questions and feedback, improving accuracy and worker motivation.",
        "Match channel to purpose: **urgent + sensitive** = face-to-face; **detailed legal/financial** = written report/contract; **routine multi-person scheduling** = email/intranet.",
        "Horizontal coordination between **Marketing, Operations and Finance** prevents stock-outs and cash-flow surprises.",
      ],
      whyItWorks:
        "Two-way feedback closes the loop between what the sender *meant* and what the receiver *heard* before expensive operational errors occur.",
      strategies: [
        "In Paper 2 MNC questions, pair **video conferencing** (cuts international flight costs & carbon) with **written follow-up summaries** (prevents accent/language misunderstandings across time zones).",
      ],
      thinkDeeper:
        "Why does an informal office 'grapevine' grow loudest inside businesses where senior leaders communicate exclusively via infrequent, top-down formal memos?",
    },
    {
      id: "barriers-to-communication",
      heading: "Barriers to communication & how to overcome them",
      discovery: {
        problem:
          "An IT director emails 60 delivery drivers: *'Ensure OAuth2 MFA tokens are re-provisioned on MDM endpoints prior to 08:00 UTC rollover.'* At 8:05 a.m., zero drivers can log into their scanner vans and 1,400 parcels sit stranded in the depot. Name the exact communication barrier — and rewrite the message in 12 plain words!",
        idea:
          "The barrier is **technical jargon** (unfamiliar IT terminology aimed at non-specialist recipients)! Plain-language fix + feedback check: *'Open your van scanner before 8 a.m. and enter your SMS code — tap Confirm.'*",
      },
      body: `A **barrier to communication** is anything that blocks, delays or distorts a message between sender and receiver, causing misunderstanding or inaction.

### Major Barriers & Targeted Business Solutions

| Communication Barrier | Why It Happens (Paper 1 vs Paper 2) | Practical Business Fix |
|---|---|---|
| **Technical Jargon / Unclear Language** | Specialists (IT, finance, legal) use acronyms non-specialists don't understand. | Enforce **plain language**, visual step-by-step guides and ask recipients to paraphrase key steps (**feedback loop**). |
| **Excessively Tall Hierarchy** | In **Paper 2** firms with 7+ management layers, messages get delayed or distorted ('Chinese whispers') along a long **chain of command**. | **Delayer** middle management to create a flatter structure, or use direct intranet/town-hall broadcasts from CEO to shop floor. |
| **Information Overload** | Staff receive 120+ daily emails/Slack pings and miss the one critical safety or customer alert. | Prioritise urgent alerts on dedicated channels, run concise 5-minute daily stand-up huddles, and curb 'Reply All' culture. |
| **Geographical & Time-Zone Distance** | **Paper 2** MNCs coordinating London, Singapore and New York teams have narrow overlapping working hours. | Record asynchronous video briefings, share cloud dashboards, and schedule rotating overlap windows. |
| **Cultural & Language Differences** | Global teams or diverse workforces misread idioms, humour or indirect politeness norms. | Provide multilingual translations for safety/HR policies, cross-cultural training and clear written confirmations. |
| **Technological Failure / Poor Timing** | Server crashes, factory machinery noise drowning out verbal briefings, or sending shift changes at midnight. | Maintain backup channels (SMS/printed SOPs), brief staff in quiet breakrooms at shift handover, and respect working hours. |`,
      diagram: `<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of message distortion through a 5-layer tall hierarchy versus direct clear transmission with a feedback loop">
  <rect x="8" y="8" width="624" height="219" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Breaking Barriers: Tall-Chain Distortion vs Flat + Feedback Loop</text>
  <rect x="24" y="48" width="284" height="164" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="166" y="69" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">✗ Barrier-Heavy Chain (Paper 2 Tall Firm)</text>
  <text x="166" y="93" text-anchor="middle" font-size="10.8" fill="var(--ink)">CEO → Regional Dir → Plant Mgr → Supervisor → Worker</text>
  <text x="166" y="118" text-anchor="middle" font-size="10.5" fill="var(--bad)">⚡ Jargon + 140 emails/day + 8-hr time-zone lag</text>
  <text x="166" y="142" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">100% clarity → 85% → 72% → 61% → 52%!</text>
  <text x="166" y="168" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Result: Errors, rumours, missed deadlines</text>
  <text x="166" y="193" text-anchor="middle" font-size="10" fill="var(--ink-2)">Zero upward check until batch is ruined</text>
  <rect x="332" y="48" width="284" height="164" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="474" y="69" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">✓ Barrier-Free Loop (Grade 9 Fix)</text>
  <text x="474" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1. Plain language (zero jargon) + translations</text>
  <text x="474" y="119" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. Flatter chain (delayering / direct portal)</text>
  <text x="474" y="143" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">3. Right channel &amp; timing (quiet shift huddle)</text>
  <text x="474" y="167" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">4. Mandatory two-way feedback check</text>
  <text x="474" y="193" text-anchor="middle" font-size="10" fill="var(--ink-2)">Confirms 100% shared understanding before action</text>
</svg>`,
      diagramCaption:
        "Each extra hierarchical layer, unexplained acronym or unconfirmed email multiplies the risk of costly operational distortion.",
      workedExamples: [
        {
          title: "Message Accuracy Decay Along a Tall Chain of Command",
          problem:
            "In a tall multinational hierarchy, a verbal strategic instruction passes sequentially through **4 management handoffs** before reaching factory machinists. If each handoff retains **85%** of the previous speaker's accuracy (`15% distortion per layer`), what percentage of the original message accuracy reaches the machinists (to 1 d.p.)? Compare this with a delayered structure having only **2 handoffs**.",
          steps: [
            "With 4 handoffs at 0.85 retention each: {{0.85^4 * 100 = 0.5220 * 100 = 52.2%}} accuracy (nearly half the message is lost or distorted!).",
            "After delayering to 2 handoffs: {{0.85^2 * 100 = 0.7225 * 100 = 72.3%}} accuracy (plus adding a written checklist pushes accuracy near 100%).",
          ],
          answer: "52.2% accuracy across 4 handoffs vs 72.3% across 2 handoffs.",
          yourTurn: {
            question:
              "A supervisor trims email overload from 80 internal emails per employee per day down to 20, saving each of her 30 staff 15 minutes (0.25 hours) per day. If staff earn £16 per hour, how much productive wage value (£) is reclaimed per 5-day working week across the 30-person team?",
            answer: { type: "number", value: 600, display: "£600" },
            solution:
              "Hours saved per day across 30 staff = 30 × 0.25 = 7.5 hours/day. Over 5 days = 37.5 hours/week. Value at £16/hr = 37.5 × £16 = £600.",
          },
        },
      ],
      keyPoints: [
        "Name the **specific barrier** in exam answers (*technical jargon, tall chain of command, information overload, language/cultural gap, time zones, IT failure*) rather than writing vague 'bad communication'.",
        "Always pair a barrier with its **matching remedy** (e.g. *jargon → plain language & training*; *tall hierarchy → delayering / direct intranet*; *language barrier → multilingual visual signs*).",
        "**Two-way feedback** is the universal safeguard that catches misunderstandings early.",
      ],
      whyItWorks:
        "Removing intermediate human filters (delayering) and encoding messages in the receiver's everyday language eliminates noise before it compounds into defective output or safety incidents.",
      strategies: [
        "Connect **Strand 2.1 (Communication)** with **Strand 2.5 (Hierarchies)** on Paper 2: tall hierarchies create long chains of command that slow and distort vertical communication!",
      ],
      thinkDeeper:
        "Can *too much* communication be just as dangerous as *too little* communication inside a hospital or airline? Explain using **information overload**.",
    },
    {
      id: "recruitment-selection",
      heading: "Employment types, recruitment & selection",
      discovery: {
        problem:
          "A candidate asks an HR officer: *'Should I read the Job Description or the Person Specification to check whether I need an accounting degree and 3 years of Excel experience?'* Which document has that answer — and what is inside the other one?",
        idea:
          "Read the **Person Specification**! **Person** Specification = attributes of the **PERSON** (qualifications, experience, skills, personal traits — split into *essential* and *desirable*). **Job** Description = details of the **JOB** itself (job title, main duties/responsibilities, hours, pay band, location and who the role reports to)!",
      },
      body: `### Flexible Employment Types (Matching Contracts to Demand!)
- **Full-time** (typically 35+ hrs/week): Consistent core team, strong loyalty, lower unit recruitment/training admin, but high fixed wage commitment during quiet months.
- **Part-time** (<30 hrs/week) & **Job Share** (two part-timers splitting one full-time role): Ideal for extending opening hours or covering peak lunchtime/weekend rushes while retaining experienced working parents/students.
- **Temporary / Seasonal / Freelance:** Hired for fixed-term peaks (Christmas retail, summer fruit picking, specialist web-design project) without permanent payroll overheads.
- **Zero-hours contracts:** Employer guarantees **0 minimum hours** per week and calls staff in only when demand arises (workers can also decline shifts) — gives cafés/warehouses maximum flexibility and zero idle wage cost, *but* causes financial insecurity, higher staff turnover and variable customer service!

### The Recruitment & Selection Funnel (Step-by-Step Order!)
1. **Identify vacancy & conduct job analysis** (do we actually need to replace a leaver, or redistribute tasks?).
2. **Draw up Job Description** (title, duties, hours, pay, reporting line) **and Person Specification** (essential vs desirable qualifications, skills, experience).
3. **Advertise internally or externally** and collect **CVs (resumes), cover letters & application forms**.
4. **Shortlist** candidates by matching CVs/forms strictly against the **Person Specification**.
5. **Selection testing & interviews** (1-to-1 or panel interviews, **aptitude/skills tests**, **psychometric personality tests**, group assessment centres) + check **references** from past employers before issuing the job offer!

### Internal vs External Recruitment

| Method | Key Advantages | Key Drawbacks |
|---|---|---|
| **Internal Recruitment** (promoting/transferring existing staff via intranet/noticeboard) | Cheaper & faster (no external agency/ad fees); candidate already knows company culture & systems (minimal induction); **motivates** staff via clear career progression; managers already know candidate's reliability. | Small talent pool; brings **no fresh outside ideas**; creates **another internal vacancy** to fill; rejected internal rivals may feel resentful! |
| **External Recruitment** (job boards, LinkedIn, recruitment agencies, headhunters, newspapers) | Much **wider pool of applicants**; injects **fresh ideas, new tech skills and rival best practices**; avoids internal promotion jealousy. | Expensive (agencies charge 15%–25% of Year 1 salary!); slower selection & induction; higher risk of **culture clash** ('unknown quantity' despite interview polish). |`,
      diagram: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recruitment and selection funnel from Job Description and Person Specification down to Job Offer alongside Internal versus External contrast">
  <rect x="8" y="8" width="624" height="229" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Recruitment &amp; Selection Funnel + The #1 Document Trap</text>
  <polygon points="36,52 336,52 312,88 60,88" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="186" y="74" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">1. Job Description + Person Specification</text>
  <polygon points="60,94 312,94 288,130 84,130" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="186" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. Advertise (Internal / External) → CVs &amp; Forms</text>
  <polygon points="84,136 288,136 262,172 110,172" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="186" y="158" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">3. Shortlist against Person Specification</text>
  <polygon points="110,178 262,178 238,216 134,216" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="186" y="201" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--good)">4. Interview + Tests + Refs → Hire!</text>
  <rect x="356" y="52" width="258" height="78" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="485" y="73" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">JOB DESCRIPTION = THE ROLE</text>
  <text x="485" y="94" text-anchor="middle" font-size="10.5" fill="var(--ink)">Title, daily duties, hours, salary,</text>
  <text x="485" y="112" text-anchor="middle" font-size="10.5" fill="var(--ink)">location &amp; line manager reported to</text>
  <rect x="356" y="140" width="258" height="78" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="485" y="161" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">PERSON SPECIFICATION = HUMAN</text>
  <text x="485" y="182" text-anchor="middle" font-size="10.5" fill="var(--ink)">Essential &amp; desirable qualifications,</text>
  <text x="485" y="200" text-anchor="middle" font-size="10.5" fill="var(--ink)">years of experience, skills &amp; traits</text>
</svg>`,
      diagramCaption:
        "Examiners test Job Description vs Person Specification almost every series: Job = Duties & Pay; Person = Qualifications, Experience & Skills!",
      workedExamples: [
        {
          title: "Internal Promotion vs External Recruitment Agency Cost",
          problem:
            "`Apex Dental Ltd` needs a Practice Manager on a **£40,000** annual salary. **External recruitment** uses a specialist agency charging **18% of first-year salary**, plus £900 of job-board ads and 5 days of lost productivity during settling-in (`valued at £160/day`). **Internal promotion** of the senior receptionist costs £0 agency fee, plus £1,400 to advertise and recruit a replacement receptionist externally. How much cheaper is the internal promotion route in £?",
          steps: [
            "**External route cost:** Agency fee = {{18% * £40000 = £7200}} + £900 ads + {{(5 * £160 = £800)}} settling-in loss = **£8,900**.",
            "**Internal route cost:** £0 agency fee + **£1,400** to backfill the receptionist vacancy = **£1,400**.",
            "Net cost saving from internal recruitment = {{£8900 - £1400 = £7500}}.",
          ],
          answer: "£7,500 cheaper via internal promotion (£1,400 vs £8,900).",
          yourTurn: {
            question:
              "A firm hires a software engineer on a £55,000 salary through an external recruitment agency that charges a 20% fee on Year 1 salary, plus £1,200 in psychometric testing fees. Calculate the total external recruitment cost in £.",
            answer: { type: "number", value: 12200, display: "£12,200" },
            solution:
              "Agency fee = £55,000 × 0.20 = £11,000. Add testing fees (£1,200): £11,000 + £1,200 = £12,200.",
          },
        },
      ],
      keyPoints: [
        "**Job Description** = duties, responsibilities, pay & reporting line; **Person Specification** = qualifications, experience & personal skills.",
        "**Internal recruitment** saves time/money and boosts staff morale, *but* leaves a knock-on vacancy and brings zero outside innovation.",
        "**Part-time, seasonal and zero-hours** contracts align wage costs with fluctuating customer demand, though zero-hours contracts can hurt staff retention and service consistency.",
      ],
      whyItWorks:
        "Structured shortlisting against an objective Person Specification, followed by skills testing and reference checks, prevents expensive 'bad hires' and protects against unlawful bias.",
      strategies: [
        "In 9-mark Internal vs External questions, diagnose **what the business currently lacks**: if a failing firm needs digital turnaround skills nobody inside possesses, **External** wins despite agency fees!",
      ],
      thinkDeeper:
        "Why might relying purely on **unstructured chatty interviews** (with no aptitude test) lead a business to hire charismatic talkers who perform poorly on the actual job?",
    },
    {
      id: "training-employment-law",
      heading: "Induction, on/off-the-job training & employment law",
      discovery: {
        problem:
          "Garage owner Ben refuses to send his three mechanics on a £1,500 electric-vehicle (EV) diagnostic course, grumbling: *'What if I pay £4,500 to train them and they leave for a rival garage?'* His lead mechanic replies with one killer question. What did she ask?",
        idea:
          "*'What if you DON'T train us — and we STAY while half our customers switch to EVs we can't fix?'* Training carries short-run tuition costs and lost output hours, yet raises **productivity, quality, safety, multi-skilling and motivation** (Herzberg growth!).",
      },
      body: `### Three Types of Training (Never Confuse Induction with On-the-Job!)

| Training Type | What Happens | Main Advantages | Main Drawbacks |
|---|---|---|---|
| **Induction Training** | First-day/week orientation for **brand-new hires**: tour of premises, fire/health & safety rules, IT logins, company culture & introductions to colleagues. | Helps new starters settle quickly, cuts early anxiety/turnover, ensures legal **health & safety** compliance from Day 1. | New starter produces little output during induction; information overload if crammed into one afternoon. |
| **On-the-Job Training** | Learning **at the actual workplace** while doing the role — **shadowing** an experienced colleague, coaching, mentoring or job rotation. | **Low cost** (no external course/travel fees); tailored to the firm's exact machines & software; **some output is still produced** while learning. | Trainer's own productivity slows down; **bad habits** or shortcuts of existing staff get passed on; stressful in busy customer rushes. |
| **Off-the-Job Training** | Learning **away from the normal workstation** — specialist external college courses, flight/medical simulators, industry conferences. | Taught by **expert specialists** with up-to-date skills/qualifications; zero customer distractions; brings fresh ideas back. | **High direct cost** (course fees, travel, hotels) + **zero workplace output** on training days; newly qualified staff become **poachable** by rivals! |

### Legal Controls Over Employment
Governments pass **employment legislation** to protect workers from exploitation and ensure safe, fair workplaces:
1. **Equal Opportunities / Anti-Discrimination Laws:** Illegal to discriminate in job adverts, selection, pay or promotion on grounds of **gender, race/ethnicity, disability, age, religion or sexual orientation**. *(Benefit to firm: widens talent pool to hire purely on merit and builds diverse creative teams; Cost: auditing pay/accessibility adjustments.)*
2. **National Minimum Wage / Living Wage:** Sets a **legal hourly wage floor**. *(Impact: raises wage costs for Paper 1 hospitality/retail firms employing low-paid staff — squeezing margins unless prices or productivity rise — while boosting low-paid workers' motivation and local spending!)*
3. **Health & Safety Legislation:** Requires protective equipment (PPE), risk assessments, machine guards, safe temperatures and safety training. *(Costs money upfront, but cuts workplace accidents, sick pay, legal fines and reputational scandals!)*
4. **Protection Against Unfair Dismissal & Contracts:** Prevents employers sacking staff arbitrarily without fair disciplinary warnings or redundancy procedures.`,
      diagram: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Induction, On-the-job and Off-the-job training plus four pillars of Employment Law">
  <rect x="8" y="8" width="624" height="224" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Training Methods Comparison &amp; Employment Legislation Pillars</text>
  <rect x="22" y="48" width="188" height="114" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="116" y="69" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">1. INDUCTION (New Hire)</text>
  <text x="116" y="90" text-anchor="middle" font-size="10.5" fill="var(--ink)">Workplace tour, H&amp;S rules,</text>
  <text x="116" y="107" text-anchor="middle" font-size="10.5" fill="var(--ink)">IT logins &amp; team intros</text>
  <text x="116" y="130" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">+ Cuts early quitter rate</text>
  <text x="116" y="148" text-anchor="middle" font-size="10" fill="var(--bad)">− Zero Day-1 output</text>
  <rect x="226" y="48" width="188" height="114" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="320" y="69" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">2. ON-THE-JOB</text>
  <text x="320" y="90" text-anchor="middle" font-size="10.5" fill="var(--ink)">Shadowing / mentoring</text>
  <text x="320" y="107" text-anchor="middle" font-size="10.5" fill="var(--ink)">at real workstation</text>
  <text x="320" y="130" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">+ Cheap &amp; firm-specific</text>
  <text x="320" y="148" text-anchor="middle" font-size="10" fill="var(--bad)">− Passes on bad habits!</text>
  <rect x="430" y="48" width="188" height="114" rx="10" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.8"/>
  <text x="524" y="69" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warn)">3. OFF-THE-JOB</text>
  <text x="524" y="90" text-anchor="middle" font-size="10.5" fill="var(--ink)">External college, course</text>
  <text x="524" y="107" text-anchor="middle" font-size="10.5" fill="var(--ink)">or flight/medical simulator</text>
  <text x="524" y="130" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">+ Expert fresh skills</text>
  <text x="524" y="148" text-anchor="middle" font-size="10" fill="var(--bad)">− Expensive &amp; poaching risk</text>
  <rect x="22" y="174" width="596" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="320" y="200" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Employment Law: Anti-Discrimination (Merit) • Minimum Wage Floor • Health &amp; Safety (PPE) • Unfair Dismissal Rules</text>
</svg>`,
      diagramCaption:
        "Induction settles new hires; on-the-job builds practical daily routines cheaply; off-the-job injects specialist expertise unavailable inside the firm.",
      workedExamples: [
        {
          title: "National Minimum Wage Hike & Net Training Benefit Calculation",
          problem:
            "SunnySide Café Ltd employs **12 part-time baristas** working **20 hours per week** each for **50 weeks a year**. When the statutory minimum wage rises from **£10.50 to £11.50 per hour**, calculate the increase in SunnySide's annual wage bill. If spending **£1,800** on barista latte-art & speed training lifts weekly café contribution by **£340 per week** across all 50 weeks, calculate the **net annual profit change** after both the minimum-wage rise and the training!",
          steps: [
            "Total barista hours per year = {{12 * 20 * 50 = 12000}} hours.",
            "Extra wage cost at +£1.00/hr ({{£11.50 - £10.50}}) = {{12000 * £1.00 = £12000}}.",
            "Annual contribution gained from training = {{50 * £340 = £17000}}; less **£1,800** training fee = **+£15,200** net gain.",
            "Overall change in annual profit = {{+£15200 - £12000 = +£3200}} higher profit!",
          ],
          answer: "Wage bill rises by £12,000; overall annual profit still increases by £3,200 thanks to higher trained productivity!",
          yourTurn: {
            question:
              "A retail shop employs 8 assistants working 25 hours per week each for 52 weeks a year. If the legal minimum wage rises by £0.80 per hour, by how much does the annual wage bill increase, in £?",
            answer: { type: "number", value: 8320, display: "£8,320" },
            solution:
              "Total annual hours = 8 × 25 × 52 = 10,400 hours. Extra wage cost = 10,400 × £0.80 = £8,320.",
          },
        },
      ],
      keyPoints: [
        "**Induction** = settling new starters in (tour, H&S, policies); **On-the-job** = learning while working at the bench/till; **Off-the-job** = external specialist courses away from normal work.",
        "Always mention **passing on existing workers' bad habits** + **slowing the mentor down** as key drawbacks of **on-the-job training**!",
        "Always mention **poaching risk** (rivals hiring newly certified staff) + **lost output days** as key drawbacks of **off-the-job training**!",
        "Employment laws raise short-run compliance/wage costs, yet reduce accidents, widen the recruitment talent pool and cut costly staff turnover.",
      ],
      whyItWorks:
        "Investing in training raises output per worker hour (**labour productivity**), which lowers **unit labour cost** even when hourly statutory wages rise!",
      strategies: [
        "In 9/12-mark training essays, check **complexity & safety**: barista coffee pouring suits **on-the-job shadowing**, whereas high-voltage EV repair or pilot certification **requires off-the-job** simulation!",
      ],
      thinkDeeper:
        "How can a small Paper 1 engineering firm protect itself financially against rivals poaching an apprentice right after paying £6,000 for off-the-job college qualifications?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Distinguish between downward, upward and horizontal communication.",
        back: "**Downward:** managers → subordinates (instructions). **Upward:** workers → managers (feedback, ideas, grievances). **Horizontal:** peers at the same hierarchy level across departments (e.g. Marketing ↔ Operations).",
      },
      {
        front: "Why is two-way communication usually superior to one-way communication?",
        back: "Two-way communication includes a **feedback loop** confirming the receiver understood accurately, while making employees feel valued and listened to (boosting morale).",
      },
      {
        front: "Name 5 common barriers to effective communication.",
        back: "1. **Technical jargon**, 2. **Excessively tall hierarchy** (distortion along long chain of command), 3. **Information overload**, 4. **Language/cultural differences**, 5. **Geographical/time-zone distance** (plus IT failure / noisy environment).",
      },
      {
        front: "Distinguish clearly between a Job Description and a Person Specification.",
        back: "**Job Description** = details of the **JOB** (title, duties, responsibilities, hours, pay, reporting line). **Person Specification** = qualities of the **PERSON** (essential & desirable qualifications, experience, skills).",
      },
      {
        front: "State 3 advantages and 2 drawbacks of Internal Recruitment.",
        back: "**Pros:** cheaper (no external agency ads), faster settling-in (knows culture), motivates staff via promotion prospects. **Cons:** tiny applicant pool with **no fresh outside ideas**, and leaves **another internal vacancy** to fill!",
      },
      {
        front: "State 2 advantages and 2 drawbacks of External Recruitment.",
        back: "**Pros:** much wider talent pool + injects **fresh ideas/skills**. **Cons:** expensive recruitment ads/agency fees + slower induction & risk candidate doesn't fit company culture.",
      },
      {
        front: "What is a zero-hours contract, and what is its trade-off?",
        back: "Employer guarantees **zero minimum weekly hours**, calling staff in only when needed. **Pro:** maximum wage flexibility for seasonal/rush peaks. **Con:** worker income insecurity causes high labour turnover and lower loyalty.",
      },
      {
        front: "Put the main recruitment & selection stages in logical chronological order.",
        back: "Vacancy analysis → **Job Description & Person Specification** → Advertise (collect CVs & application forms) → **Shortlist** → **Interviews / aptitude tests** → Check **references** → Job offer.",
      },
      {
        front: "What is Induction Training?",
        back: "Structured orientation given to **new starters** in their first days (premises tour, fire/health & safety rules, IT systems, company ethos and colleague introductions) to help them settle quickly.",
      },
      {
        front: "Compare On-the-Job and Off-the-Job training.",
        back: "**On-the-job:** learning at the workstation (shadowing/coaching) — cheap & firm-specific, *but* mentor slows down and passes on **bad habits**. **Off-the-job:** external college/simulator — expert specialist skills, *but* expensive, zero output on course days & **poaching risk**!",
      },
      {
        front: "How do anti-discrimination / equal-opportunities laws benefit a business?",
        back: "Selecting purely on merit widens the **applicant talent pool**, creates a diverse workforce that understands diverse customers, improves brand reputation and avoids costly tribunal lawsuits.",
      },
      {
        front: "How does a rise in the National Minimum Wage affect a Paper 1 café?",
        back: "**Cost:** increases hourly wage bills for low-paid waiting/kitchen staff, squeezing margins unless menu prices or productivity rise. **Benefit:** can improve staff morale, retention and local consumer spending.",
      },
      {
        front: "What is an aptitude test vs a psychometric test in selection?",
        back: "**Aptitude test:** measures practical job-specific skill (e.g. coding bug fix, Excel test, typing speed). **Psychometric test:** assesses personality traits, teamwork style and attitude.",
      },
      {
        front: "How do you calculate Labour Turnover (%)?",
        back: "`Labour Turnover (%) = (Number of Staff Leaving in Year ÷ Average Number of Staff Employed) × 100` — high turnover signals poor communication, pay, induction or morale!",
      },
      {
        front: "What is the Grade 9 AJIM rule when choosing between On-the-Job and Off-the-Job training?",
        back: "Match training to **skill availability & safety risk**: if expertise already exists in-house for routine tasks → **On-the-job**; if introducing brand-new tech/safety compliance nobody inside knows → **Off-the-job** is essential!",
      },
    ],
    mustKnow: [
      "Classify **internal vs external**, **upward, downward & horizontal**, and **formal vs informal** communication, selecting appropriate media (face-to-face, video, email, report, noticeboard, social media).",
      "Diagnose specific **barriers to communication** (jargon, tall hierarchies, overload, language/culture, time zones, tech failure) and recommend practical fixes including **feedback loops** and **delayering**.",
      "Compare **full-time, part-time, job share, temporary, seasonal, freelance and zero-hours** contracts for both employer flexibility and employee security.",
      "Distinguish **Job Description** (role duties/pay) from **Person Specification** (human qualifications/skills) with 100% precision.",
      "Evaluate **Internal vs External recruitment** across cost, speed, morale, knock-on vacancies and fresh ideas.",
      "Explain selection tools (**CVs, application forms, shortlisting, interviews, aptitude/psychometric tests, references**).",
      "Evaluate **Induction**, **On-the-job** and **Off-the-job** training across direct fees, lost output, bad habits, specialist expertise and poaching risk.",
      "Analyse **employment legislation** impacts: anti-discrimination (gender, race, disability, age, religion), National Minimum/Living Wage, Health & Safety, and unfair dismissal.",
      "Apply **Edexcel 4BS1 Command Words**: *State* (1), *Outline* (2 = point + **AO2 context**), *Explain* (3 = 1 point + 2 linked AO3 steps), *Analyse* (6 = 2 contextual chains), *Assess* (9) & *Evaluate* (12).",
      "Deploy **AJIM** in 9/12-mark HR essays — e.g. weighing recruitment/training upfront costs against long-term **labour productivity** and **staff retention**!",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'A Job Description lists the GCSEs, degree and 3 years of experience an applicant needs.'",
        right: "Write instead (Grade 9): 'Qualifications, experience and personal skills belong in the **Person Specification**; the **Job Description** sets out the job title, daily duties, hours, pay and reporting line.'",
      },
      {
        wrong: "Never write: 'Induction training is when an experienced worker teaches an existing employee how to use a new machine for six months.'",
        right: "Write instead (Grade 9): '**Induction training** is strictly initial orientation for **new starters** joining the firm (fire safety, tour, policies, team intros); learning machine operation alongside a colleague is **on-the-job training**.'",
      },
      {
        wrong: "Never write: 'Internal recruitment means no recruitment is needed later because the role is filled.'",
        right: "Write instead (Grade 9): 'Promoting an existing supervisor **internally** fills the senior post, *but* automatically creates a **knock-on vacancy** in their old supervisor role that still has to be backfilled!'",
      },
      {
        wrong: "Never write: 'Part-time contracts and zero-hours contracts are the exact same thing.'",
        right: "Write instead (Grade 9): 'A **part-time contract** guarantees a fixed number of contracted weekly hours (e.g. 16 hours every week), whereas a **zero-hours contract** guarantees **zero** hours and offers shifts only when demand arises.'",
      },
      {
        wrong: "Never write: 'Email is always the best way to communicate with all employees because it is free and instant.'",
        right: "Write instead (Grade 9): 'While email suits routine schedules and creates a written trail, it causes **information overload**, lacks body-language empathy for sensitive HR discussions, and misses warehouse/kitchen staff without desk computers.'",
      },
      {
        wrong: "Never write: 'Employment laws like Health & Safety and anti-discrimination only create bad costs for businesses.'",
        right: "Write instead (Grade 9): 'Although PPE and compliance audits raise short-run overheads, Health & Safety cuts workplace injuries, sick pay and fines, while equal-opportunity hiring widens the talent pool to select the most productive candidates on merit.'",
      },
      {
        wrong: "Never write generic HR essays without using the firm's staff count, job role and product!",
        right: "Write instead (Grade 9): 'Anchor every 2, 6, 9 and 12-mark HR answer in **AO2 context** — name the exact role (e.g. *dental hygienist*, *forklift driver*, *software developer*) because training and recruitment for a forklift driver differ totally from a barista!'",
      },
    ],
    examMistakes: [
      "**Swapping Job Description and Person Specification:** Memorise `Job = Duties`, `Person = Degrees/Skills` — examiners set a 1-mark MCQ or 2-mark Outline on this pair almost every year!",
      "**Forgetting 'bad habits' and 'mentor slowdown' on On-the-Job training:** Don't just write 'on-the-job is good because it's cheap' — evaluate that the experienced colleague's own output drops and poor shortcuts get copied!",
      "**Forgetting 'poaching risk' on Off-the-Job training:** Once an employer pays £4,000 for an external industry certificate, that worker becomes much more attractive to rival firms unless tied in via a training repayment agreement.",
      "**Writing vague 'communication is bad' instead of naming the exact barrier:** Score instant AO1 credit by naming *technical jargon*, *information overload*, *tall chain of command* or *time-zone lag*.",
      "**Recommending expensive headhunters / national TV recruitment ads for a Paper 1 5-staff café:** Match recruitment channel to firm scale — local shop-window posters, social media or employee referrals fit a Paper 1 café; LinkedIn/specialist agencies fit a Paper 2 PLC director role!",
      "**Ignoring knock-on vacancies in Internal Recruitment evaluations:** Always note that promoting internally shifts the vacancy one rung down the hierarchy.",
      "**Confusing Labour Productivity with Total Output:** Training raises output *per worker* (`Total Output ÷ Workers`), lowering unit labour costs.",
    ],
    mnemonics: [
      {
        topic: "Job Description vs Person Specification",
        device: "JD = Duties • PS = Person's Skills",
        explanation: "**J**ob **D**escription = **D**uties, hours, pay & line manager; **P**erson **S**pecification = **P**erson's qualifications, experience & **S**kills.",
      },
      {
        topic: "Three Training Pillars",
        device: "I - ON - OFF",
        explanation: "**I**nduction (Day-1 tour & H&S) • **ON**-the-job (bench shadowing, cheap, bad-habit risk) • **OFF**-the-job (external specialist, costly, poaching risk).",
      },
      {
        topic: "Communication Loop",
        device: "S → M → C → R → F",
        explanation: "**S**ender → **M**essage → **C**hannel/Medium → **R**eceiver → **F**eedback (missing Feedback = #1 cause of error!).",
      },
      {
        topic: "9/12-Mark HR Evaluation",
        device: "AJIM",
        explanation: "**A**nswer clearly • **J**ustify both options in role context • **I**t depends on (whether skills already exist internally & retention clawback) • **M**ost important factor.",
      },
    ],
    realWorld: [
      {
        title: "McDonald's Flexible Scheduling & Hamburger University",
        detail: "Combines **part-time/flexible crew contracts** matched to lunchtime/evening rush peaks with structured **on-the-job station checklists** for crew and **off-the-job management training** at Hamburger University.",
        emoji: "🍔",
      },
      {
        title: "British Airways & Hospital Flight/Surgical Simulators (Off-the-Job)",
        detail: "Airline pilots cannot 'learn by making mistakes on-the-job' with 300 passengers onboard! High-stakes safety industries rely on **off-the-job simulator training** before supervised cockpit shadowing.",
        emoji: "✈️",
      },
      {
        title: "Timpson Ltd — Inclusive Merit-Based External Recruitment",
        detail: "Shoe-repair & key-cutting chain Timpson recruits ~10% of colleagues directly from prison rehabilitation programmes using short attitude-focused interviews and intensive **on-the-job mentoring**, achieving exceptional staff loyalty and low turnover.",
        emoji: "🔑",
      },
      {
        title: "GitLab & Global Tech Firms — Asynchronous Cloud Communication",
        detail: "With thousands of engineers across 60+ countries and 24 **time zones**, remote-first tech companies overcome geographical barriers via written plain-English handbooks and recorded video handovers instead of back-to-back meetings.",
        emoji: "💻",
      },
      {
        title: "Pret A Manger — Paid Trial Shifts & Peer Selection",
        detail: "Shortlisted barista candidates complete a paid 1-day shop-floor trial (**aptitude/teamwork assessment**), after which existing branch staff vote on whether the candidate fits the fast-paced café culture!",
        emoji: "☕",
      },
    ],
    videos: [
      {
        title: "Internal & External Communication + Barriers (Edexcel IGCSE Business)",
        channel: "TakingTheBiz",
        url: "https://www.youtube.com/results?search_query=communication+and+barriers+igcse+business+takingthebiz",
      },
      {
        title: "Recruitment & Selection: Job Description vs Person Specification",
        channel: "Tutor2u Business",
        url: "https://www.youtube.com/results?search_query=recruitment+selection+job+description+person+specification+tutor2u",
      },
      {
        title: "Induction, On-the-Job & Off-the-Job Training (IGCSE Business 4BS1)",
        channel: "Bizconsesh",
        url: "https://www.youtube.com/results?search_query=induction+on+the+job+off+the+job+training+igcse+business+bizconsesh",
      },
      {
        title: "Legal Controls Over Employment — Minimum Wage, Discrimination & H&S",
        channel: "Edexcel Business Revision",
        url: "https://www.youtube.com/results?search_query=legal+controls+over+employment+edexcel+igcse+business+4bs1",
      },
    ],
    formulas: [
      {
        name: "Labour Turnover (%)",
        formula: "{{(Number of Staff Leaving / Average Number of Staff) * 100}}",
        note: "High % signals poor communication, weak induction, low pay or zero-hours insecurity, inflating recruitment bills.",
      },
      {
        name: "Staff Retention Rate (%)",
        formula: "{{(Staff Staying Whole Year / Staff at Start of Year) * 100}}",
        note: "Strong induction, training and career promotion paths lift retention.",
      },
      {
        name: "Recruitment Agency Fee",
        formula: "{{First-Year Annual Salary * (Agency Fee % / 100)}}",
        note: "Major direct cost of external specialist recruitment.",
      },
      {
        name: "Total Off-the-Job Training Cost",
        formula: "{{Course Fees + Travel + (Training Days * Daily Lost Output Value)}}",
        note: "Includes both direct tuition invoices AND opportunity cost of lost workplace output.",
      },
      {
        name: "Net First-Year Training Benefit",
        formula: "{{Annual Productivity Gain + Error Savings - Total Training Cost}}",
        note: "Positive figure proves training investment increases operating profit.",
      },
      {
        name: "Minimum Wage Hike Annual Cost",
        formula: "{{Affected Workers * Weekly Hours * Weeks Worked * Hourly Pay Rise}}",
        note: "Hits labour-intensive retail, care and hospitality businesses hardest.",
      },
      {
        name: "Full-Time Equivalent (FTE) Headcount",
        formula: "{{Total Weekly Part-Time Hours / Standard Full-Time Weekly Hours}}",
        note: "Converts flexible part-time schedules into equivalent full-time posts (e.g. two 20-hr job-sharers = 1.0 FTE at 40 hrs).",
      },
      {
        name: "Job Description vs Person Specification",
        formula: "Job Description = Role Duties & Pay  |  Person Specification = Candidate Qualifications & Skills",
        note: "Shortlisting compares each applicant's CV/form strictly against the Person Specification.",
      },
      {
        name: "Chain-of-Command Retention",
        formula: "{{Accuracy Retained = Per-Layer Retention ^ Handoffs}}",
        note: "Shows mathematically why delayering tall hierarchies improves vertical communication clarity.",
      },
    ],
  },
};
