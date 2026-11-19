import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "business-activity",
  title: "Objectives, Stakeholders & Business Ownership",
  strand: "Activity & External",
  icon: "🏢",
  summary:
    "Master SMART financial and non-financial objectives, stakeholder trade-offs, legal structures from sole traders to PLCs, franchises, economic sectors and why firms succeed or fail.",
  intro:
    "Every Edexcel 4BS1 case study begins with two diagnostic clues you should circle in the first ten seconds: **how big the business is** (Paper 1 investigates small businesses with **fewer than 50 employees**; Paper 2 investigates large businesses with **more than 250 employees**) and **its legal ownership** (Sole Trader, Partnership, Private Limited Company `Ltd`, Public Limited Company `Plc`, Franchise, or Social Enterprise). Those two clues govern every answer you write — from whether the owner risks their personal home under unlimited liability to which objectives and finance options make realistic sense.",
  guide: [
    {
      id: "business-objectives",
      heading: "Financial & non-financial objectives",
      discovery: {
        problem:
          "Maya quits her £48,000 banking job to open a 4-staff artisan bakery in Bristol. In Year 1 her profit is only £19,000, yet she tells her sister the year was a triumph. Meanwhile, a 14,000-employee supermarket PLC reports £85 million profit — and its Chief Executive is sacked the next morning. How can £19,000 be a triumph while £85 million is a failure?",
        idea:
          "Success is judged against **objectives**, not raw profit alone! In Year 1 a start-up's primary financial objective is **survival** alongside non-financial goals like **independence, personal satisfaction and creative control**. By contrast, institutional shareholders in a mature Paper 2 PLC demand growing **profit, dividends and market share** — if rivals grew faster and £85m missed a SMART target of £140m, management failed its objective.",
      },
      body: `**Business objectives** are the stated, measurable targets an organisation works towards. In Edexcel 4BS1, examiners test whether you can match the right objective to the **stage, size and context** of the business rather than claiming every firm only wants maximum profit.

### Financial vs Non-Financial Objectives

| Category | Core Objectives | Typical Context (Paper 1 SME vs Paper 2 Large Firm) |
|---|---|---|
| **Financial** | **Survival** | New start-ups in their first 12–24 months or firms hit by recession / cash-flow shocks. |
| **Financial** | **Profit maximisation** ({{TR - TC}}) | Established Ltds and Paper 2 PLCs needing retained profit for expansion and dividends for shareholders. |
| **Financial** | **Sales / revenue growth** | Firms chasing economies of scale or breaking into new regional/online markets by cutting prices. |
| **Financial** | **Increased market share** | Large oligopolies (supermarkets, airlines, smartphone brands) seeking bargaining power over suppliers. |
| **Financial** | **Financial security** | Lifestyle sole traders aiming for a comfortable, stable income rather than risky rapid expansion. |
| **Non-financial** | **Social & ethical objectives** | Social enterprises and community cafés reinvesting surpluses into fair wages, local youth training or zero-waste packaging. |
| **Non-financial** | **Personal satisfaction & challenge** | Entrepreneurs turning a passion (bespoke guitars, physiotherapy clinic) into a thriving venture. |
| **Non-financial** | **Independence & control** | Founders who refuse external venture capital or PLC flotation so nobody can outvote them. |

### Setting SMART Objectives

Vague wishes such as *"we want to sell more"* fail to guide staff or measure performance. High-performing firms set **SMART** targets:
- **Specific** — clear metric and product/region (e.g. online vegan snack boxes in Manchester).
- **Measurable** — quantified with a number, percentage or currency ({{+15%}} revenue, {{12%}} market share).
- **Achievable / Agreed** — stretching yet realistic given current capacity, staff and budget.
- **Relevant / Realistic** — aligned with overall corporate strategy and market conditions.
- **Time-bound** — anchored to a deadline (e.g. *by 31 December Year 2*).

### Why Objectives Evolve Over Time
1. **Start-up to Growth:** Once a Paper 1 start-up survives Year 1 and builds loyal repeat customers, its priority shifts from **survival** to **profitability** or **sales growth**.
2. **Economic Shocks:** Rising interest rates, inflation or a new multinational rival can force an established firm to pause expansion and revert temporarily to **survival and cost control**.
3. **Ownership Change:** Converting from a family **Ltd** into a stock-exchange **Plc** brings external institutional shareholders who prioritise **short-term dividend yield and share-price growth** over founder lifestyle goals.`,
      diagram: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Evolution of business objectives from start-up survival to PLC market share alongside SMART criteria">
  <rect x="8" y="8" width="624" height="229" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="34" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">How Business Objectives Shift Across Growth Stages (Paper 1 SME → Paper 2 PLC)</text>
  <rect x="28" y="54" width="175" height="112" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>
  <text x="115" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">1. Start-Up (&lt;10 staff)</text>
  <text x="115" y="97" text-anchor="middle" font-size="11" fill="var(--ink)">• Survival (cover cash outflows)</text>
  <text x="115" y="116" text-anchor="middle" font-size="11" fill="var(--ink)">• Independence &amp; control</text>
  <text x="115" y="135" text-anchor="middle" font-size="11" fill="var(--ink)">• Personal satisfaction</text>
  <text x="115" y="154" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-2)">Paper 1 Sole Trader / Partnership</text>
  <line x1="205" y1="110" x2="229" y2="110" stroke="var(--brand)" stroke-width="2.5"/>
  <polygon points="233,110 224,105 224,115" fill="var(--brand)"/>
  <rect x="235" y="54" width="175" height="112" rx="10" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>
  <text x="322" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="var(--warn)">2. Growing SME (&lt;50 staff)</text>
  <text x="322" y="97" text-anchor="middle" font-size="11" fill="var(--ink)">• Profit growth (reinvest)</text>
  <text x="322" y="116" text-anchor="middle" font-size="11" fill="var(--ink)">• Sales volume expansion</text>
  <text x="322" y="135" text-anchor="middle" font-size="11" fill="var(--ink)">• Financial security / ethics</text>
  <text x="322" y="154" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-2)">Paper 1 Private Ltd</text>
  <line x1="412" y1="110" x2="436" y2="110" stroke="var(--good)" stroke-width="2.5"/>
  <polygon points="440,110 431,105 431,115" fill="var(--good)"/>
  <rect x="442" y="54" width="170" height="112" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="2"/>
  <text x="527" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">3. Large Corp (&gt;250 staff)</text>
  <text x="527" y="97" text-anchor="middle" font-size="11" fill="var(--ink)">• Market share dominance</text>
  <text x="527" y="116" text-anchor="middle" font-size="11" fill="var(--ink)">• Shareholder dividends</text>
  <text x="527" y="135" text-anchor="middle" font-size="11" fill="var(--ink)">• CSR &amp; global brand image</text>
  <text x="527" y="154" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-2)">Paper 2 Public Ltd (PLC)</text>
  <rect x="28" y="180" width="584" height="42" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/>
  <text x="320" y="205" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">SMART Filter: Specific • Measurable • Achievable • Relevant • Time-bound (e.g. &quot;Raise UK market share from 8% to 10% by Q4&quot;)</text>
</svg>`,
      diagramCaption:
        "Objectives are dynamic: a Paper 1 start-up prioritises survival and founder autonomy, whereas a Paper 2 PLC answers to institutional shareholders demanding market share and profit growth.",
      workedExamples: [
        {
          title: "Calculating Market Share Against a SMART Objective",
          problem:
            "Kopi Craft Ltd, a 32-employee speciality coffee roaster, set a SMART objective to achieve at least **12% market share** in its regional market by December. Its annual sales were **£660,000** inside a total regional market worth **£5,000,000**. Calculate Kopi Craft Ltd's market share and state whether it achieved its SMART objective.",
          steps: [
            "Write the market share formula: {{\"Market Share (%)\" = (\"Firm Sales\") / (\"Total Market Sales\") * 100}}.",
            "Substitute Kopi Craft Ltd's figures: {{(660000 / 5000000) * 100 = 0.132 * 100}}.",
            "Compute the percentage: **13.2%**, which exceeds the **12%** SMART target by **1.2 percentage points**.",
          ],
          answer: "13.2% — Yes, Kopi Craft Ltd beat its 12% SMART objective.",
          yourTurn: {
            question:
              "A local cycling retailer records annual sales of £360,000 in a regional bicycle market worth £2,400,000. Calculate its market share as a percentage.",
            answer: { type: "number", value: 15, display: "15%" },
            solution:
              "Market share = (£360,000 ÷ £2,400,000) × 100 = 0.15 × 100 = 15%.",
          },
        },
      ],
      keyPoints: [
        "Financial objectives include **survival, profit, sales growth, market share and financial security**.",
        "Non-financial objectives include **social/ethical impact, personal satisfaction, challenge, independence and control**.",
        "**SMART** objectives turn vague ambitions into Specific, Measurable, Achievable, Relevant and Time-bound targets that motivate staff and benchmark performance.",
        "Always tailor objectives to the case study: recommending aggressive global market-share wars for a cash-strapped 3-person sole trader loses AO2 application marks.",
      ],
      whyItWorks:
        "When targets are quantified and time-bound, managers can compare actual monthly performance against plan, spot variances early, and align department budgets (marketing, staffing, cash flow) toward one shared priority rather than pulling in opposite directions.",
      strategies: [
        "Match objective to life-cycle stage: first 12 months → survival; rapid expansion → sales/market share; lifestyle artisan → independence & financial security.",
        "Watch the short-run vs long-run trade-off: cutting prices boosts **sales volume and market share** immediately, but can squeeze **profit margins** if unit costs stay unchanged.",
      ],
      thinkDeeper:
        "Can pursuing a **non-financial** objective (such as paying suppliers 20% above Fairtrade minimums) actually *increase* long-run **financial** profit? Explain the mechanism using brand differentiation and price inelasticity.",
    },
    {
      id: "stakeholders-conflicts",
      heading: "Stakeholders & conflicting objectives",
      discovery: {
        problem:
          "VeloPlc announces a £40m factory automation plan: 180 assembly workers will be replaced by robotic arms that cut unit costs by 22% and run 24/7 with zero local emissions. List two groups cheering at the press conference and two groups protesting outside the gates.",
        idea:
          "**Shareholders** cheer higher long-run profits/dividends and **customers** welcome lower prices or consistent quality, while **employees/trade unions** fight redundancy and the **local community** fears lost household incomes in nearby shops. Virtually every major business decision creates winners and losers among **stakeholders**!",
      },
      body: `A **stakeholder** is any individual, group or organisation that has a direct interest in — and is affected by — the activities and decisions of a business.

*(Careful! Do **not** confuse **stakeholder** with **shareholder**: every shareholder is a stakeholder, but employees, customers and local residents are stakeholders without owning a single share.)*

### Internal vs External Stakeholders

| Stakeholder | Internal / External | What They Want (Primary Objective) | How They Influence the Business |
|---|---|---|---|
| **Owners / Shareholders** | Internal | High return on investment, capital growth, rising dividends (or independence for sole traders). | Voting at AGMs, replacing directors, injecting or withdrawing capital. |
| **Managers / Directors** | Internal | Revenue growth, bonuses, prestige, career security and departmental budgets. | Day-to-day strategic and operational decisions. |
| **Employees** | Internal | Job security, fair/rising wages, safe working conditions, career progression. | Productivity, customer service quality, industrial action / strikes via trade unions. |
| **Customers** | External | Value for money, reliable quality, ethical sourcing, fast service. | Repeat purchases, online reviews, boycotts / switching to rivals. |
| **Suppliers** | External | Prompt payment (short trade-credit periods), regular large orders, fair contract terms. | Refusing credit, raising component prices, prioritising rival buyers. |
| **Financiers / Banks** | External | Timely interest payments and full repayment of loan principal; healthy liquidity. | Calling in overdrafts, charging higher interest, refusing new loans. |
| **Local Community** | External | Local jobs, minimal noise/traffic/pollution, sponsorship of local facilities. | Planning objections, local petitions, negative media campaigns. |
| **Government** | External | Corporation/income/VAT tax receipts, job creation, legal & environmental compliance. | Passing laws, levying fines, granting subsidies, setting tax & interest rates. |

### Classic Edexcel 4BS1 Stakeholder Conflicts
1. **Employees vs Shareholders:** A {{10%}} pay rise motivates staff and cuts labour turnover, but increases operating expenses — reducing short-run **Operating Profit** and shareholder dividends unless productivity rises faster than wages.
2. **Suppliers vs Managers/Shareholders:** Extending supplier payment terms from 30 days to 90 days improves the buyer's **cash flow**, but starves small suppliers of working capital.
3. **Customers vs Shareholders:** Using cheaper ingredients boosts **Gross Profit Margin** in the short term, yet risks product recalls or reputational damage if quality falls.
4. **Expansion vs Local Community:** Opening a late-night distribution depot creates local jobs and tax revenue, yet increases lorry congestion, noise and carbon emissions for residents.`,
      diagram: `<svg viewBox="0 0 640 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stakeholder map showing internal stakeholders inside the firm and external stakeholders around it with key conflict arrows">
  <rect x="8" y="8" width="624" height="239" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Internal vs External Stakeholders &amp; Core Trade-Off Tensions</text>
  <rect x="205" y="78" width="230" height="114" rx="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="320" y="99" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">INTERNAL STAKEHOLDERS</text>
  <text x="320" y="121" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Owners / Shareholders (Profit &amp; Dividends)</text>
  <text x="320" y="143" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Managers (Bonuses &amp; Growth)</text>
  <text x="320" y="165" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Employees (Pay &amp; Job Security)</text>
  <text x="320" y="182" text-anchor="middle" font-size="10" fill="var(--bad)">⚡ Wage rises vs Dividend payouts</text>
  <rect x="24" y="54" width="150" height="52" rx="9" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="99" y="76" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Customers</text>
  <text x="99" y="94" text-anchor="middle" font-size="10" fill="var(--ink-2)">Low prices &amp; high quality</text>
  <rect x="24" y="156" width="150" height="52" rx="9" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="99" y="178" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Suppliers</text>
  <text x="99" y="196" text-anchor="middle" font-size="10" fill="var(--ink-2)">Fast payment &amp; fair prices</text>
  <rect x="466" y="54" width="150" height="52" rx="9" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="541" y="76" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Local Community</text>
  <text x="541" y="94" text-anchor="middle" font-size="10" fill="var(--ink-2)">Jobs, low noise &amp; clean air</text>
  <rect x="466" y="156" width="150" height="52" rx="9" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="541" y="178" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Government &amp; Banks</text>
  <text x="541" y="196" text-anchor="middle" font-size="10" fill="var(--ink-2)">Taxes, laws &amp; loan interest</text>
  <line x1="174" y1="84" x2="205" y2="112" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <line x1="174" y1="180" x2="205" y2="152" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <line x1="435" y1="112" x2="466" y2="84" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <line x1="435" y1="152" x2="466" y2="180" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <text x="320" y="232" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Grade 9 Evaluation Tip: Weigh short-term cost conflict against long-term alignment (motivated staff → better service → higher profit).</text>
</svg>`,
      diagramCaption:
        "Internal stakeholders work inside or own the business; external stakeholders sit outside it. Dashed lines mark frequent short-term trade-offs.",
      workedExamples: [
        {
          title: "Quantifying a Wage-vs-Profit Stakeholder Trade-Off",
          problem:
            "Harbour Hotel Ltd employs **40 staff** on an average salary of **£25,000** per year. Operating profit before any pay change is **£220,000**. Employees request an **8% pay rise**. Assuming revenue and productivity remain unchanged in the short run, calculate the new operating profit and explain the stakeholder conflict.",
          steps: [
            "Current annual wage bill = {{40 * £25000 = £1000000}}.",
            "Cost of an 8% pay rise = {{£1000000 * 0.08 = £80000}} ({{£2000}} extra per employee).",
            "New short-run operating profit = {{£220000 - £80000 = £140000}} (a **36.4%** drop in operating profit).",
            "Conflict: **Employees** gain £2,000 higher annual pay to cope with living costs, whereas **shareholders** suffer £80,000 lower profit available for dividends or refurbishment.",
          ],
          answer: "New operating profit = £140,000 (down £80,000, creating a direct short-run conflict between employees and shareholders).",
          yourTurn: {
            question:
              "A 20-worker engineering firm has a total annual wage bill of £600,000 and current operating profit of £150,000. If staff receive a 5% pay rise with no change in revenue, what is the new operating profit in £?",
            answer: { type: "number", value: 120000, display: "£120,000" },
            solution:
              "Extra wage cost = £600,000 × 0.05 = £30,000. New operating profit = £150,000 − £30,000 = £120,000.",
          },
        },
      ],
      keyPoints: [
        "**Internal stakeholders**: owners/shareholders, managers and employees.",
        "**External stakeholders**: customers, suppliers, financiers/banks, local community and government.",
        "Stakeholder objectives often clash in the **short run** (e.g. wages vs profits; late supplier payment vs supplier liquidity; cheap fossil energy vs community air quality).",
        "In **9-mark and 12-mark evaluations**, show how conflicts can align in the **long run** — e.g. paying fair wages cuts staff turnover and recruitment costs, lifting customer satisfaction and long-term shareholder value.",
      ],
      whyItWorks:
        "Mapping stakeholder power and interest prevents managers from making tunnel-vision financial cuts that trigger costly strikes, supplier boycotts, negative viral PR or government fines.",
      strategies: [
        "Always name **two distinct stakeholder groups** and trace the exact cash/cost/quality chain connecting them when a question asks about 'stakeholder conflict'.",
        "Use **time horizons** (short run vs long run) as your AJIM evaluation pivot: short-run cost pain often buys long-run stakeholder loyalty.",
      ],
      thinkDeeper:
        "Which stakeholder holds more real power over a 15-employee luxury restaurant: its bank providing a £40,000 overdraft, or local food reviewers on social media? Under what circumstances does that ranking flip?",
    },
    {
      id: "unincorporated-incorporated",
      heading: "Sole traders, partnerships, Ltds & Plcs",
      discovery: {
        problem:
          "Amir runs 'Amir's Catering' as a sole trader. He invested £15,000 of savings into kitchen vans. After a contaminated batch ruins his reputation, the business closes owing £95,000 to suppliers, while its vans sell for only £20,000. Meanwhile, his neighbour Priya invested £15,000 buying shares in 'Bento Box Ltd', which also collapses owing £95,000 above its assets. How much more money must Amir and Priya each pay out of their personal bank accounts or house equity?",
        idea:
          "Amir must pay the remaining **£75,000** ({{£95000 - £20000}}) from his personal savings, car or house because a sole trader is **unincorporated** with **unlimited liability** — in law, Amir *is* the business! Priya pays **£0 extra** (she loses only her original £15,000 share investment) because `Bento Box Ltd` is **incorporated** with **limited liability** and a separate legal identity.",
      },
      body: `The single sharpest legal boundary in IGCSE Business separates **unincorporated** businesses from **incorporated** companies.

### Unincorporated vs Incorporated Structures

| Feature | Sole Trader | Partnership (2–20+ partners) | Private Limited Company (Ltd) | Public Limited Company (Plc) |
|---|---|---|---|---|
| **Legal Status** | Unincorporated (no separate legal identity) | Unincorporated (governed by a **Deed of Partnership**) | **Incorporated** (separate legal entity) | **Incorporated** (separate legal entity) |
| **Liability** | **Unlimited liability** (personal assets at risk!) | **Unlimited liability** (jointly & severally liable; *LLPs* are the exception) | **Limited liability** (lose at most share capital invested) | **Limited liability** (lose at most share capital invested) |
| **Who Can Buy Shares?** | Cannot issue shares | Cannot issue shares (partners contribute capital) | Invited family, friends, private investors (board approval needed) | General public & institutional investors on a **Stock Exchange** |
| **Financial Privacy** | Private (only tax return to government) | Private | Must file annual accounts at Companies House | Full public scrutiny, audited accounts & media coverage |
| **Control & Continuity** | 100% owner control; **no continuity** if owner dies | Shared expertise & workload; risk of partner disputes unless Deed specifies profit/voting split | Founders usually stay directors; **continuity** survives death of a shareholder | High risk of **hostile takeover** (>50% shares bought) & **divorce between ownership and control** |
| **Edexcel Paper Fit** | **Paper 1** (<50 staff) | **Paper 1** (solicitors, dentists, family firms) | **Paper 1** SMEs & medium family firms | **Paper 2** (>250 staff; needs minimum £50,000 share capital in UK) |

### Key Concepts Examiners Test Every Year
- **Deed of Partnership:** A binding legal agreement setting out how much capital each partner contributes, how profits/losses are shared, voting rights, duties, and rules if a partner leaves. Without a Deed, profits and losses are split equally regardless of effort or capital!
- **Incorporation & Separate Legal Identity:** An **Ltd** or **Plc** can own property, sign contracts, sue and be sued in its **own corporate name**, and enjoys **perpetual continuity**.
- **Flotation / Initial Public Offering (IPO):** Going public as a **Plc** unlocks huge interest-free equity capital on the stock market, but brings heavy legal/underwriting fees, pressure for short-term dividends, **divorce between ownership (millions of shareholders) and control (board of directors)**, and vulnerability to a **hostile takeover** if a rival buys over **50%** of shares.`,
      diagram: `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Unincorporated Unlimited Liability versus Incorporated Limited Liability">
  <rect x="8" y="8" width="624" height="234" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="33" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Legal Firewall: Unlimited vs Limited Liability</text>
  <rect x="24" y="50" width="282" height="176" rx="12" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>
  <text x="165" y="73" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">UNINCORPORATED (Sole Trader / Partnership)</text>
  <rect x="46" y="88" width="102" height="62" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="97" y="113" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Business Debt</text>
  <text x="97" y="133" text-anchor="middle" font-size="11" fill="var(--bad)">Unpaid £75k</text>
  <line x1="150" y1="119" x2="178" y2="119" stroke="var(--bad)" stroke-width="2.5"/>
  <polygon points="182,119 173,114 173,124" fill="var(--bad)"/>
  <rect x="184" y="88" width="102" height="62" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="235" y="113" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Personal Home</text>
  <text x="235" y="133" text-anchor="middle" font-size="11" fill="var(--bad)">AT RISK!</text>
  <text x="165" y="176" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">No separate legal identity</text>
  <text x="165" y="196" text-anchor="middle" font-size="10" fill="var(--ink-2)">Creditors can seize personal house, car &amp; savings</text>
  <text x="165" y="213" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Unlimited Liability</text>
  <rect x="334" y="50" width="282" height="176" rx="12" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>
  <text x="475" y="73" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">INCORPORATED (Ltd / PLC)</text>
  <rect x="352" y="88" width="98" height="62" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="401" y="113" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Company Debt</text>
  <text x="401" y="133" text-anchor="middle" font-size="11" fill="var(--bad)">Unpaid £75k</text>
  <rect x="464" y="82" width="18" height="74" rx="4" fill="var(--good)"/>
  <text x="473" y="123" text-anchor="middle" font-size="9" font-weight="800" fill="#fff" transform="rotate(-90 473 123)">FIREWALL</text>
  <rect x="496" y="88" width="102" height="62" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="547" y="113" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Personal Home</text>
  <text x="547" y="133" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">PROTECTED</text>
  <text x="475" y="176" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Separate corporate legal identity</text>
  <text x="475" y="196" text-anchor="middle" font-size="10" fill="var(--ink-2)">Max loss = original share capital invested</text>
  <text x="475" y="213" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Limited Liability</text>
</svg>`,
      diagramCaption:
        "Incorporation erects a legal firewall between corporate debts and shareholders' personal possessions.",
      workedExamples: [
        {
          title: "Partnership Profit Split vs Incorporated Share Loss",
          problem:
            "Elena and Tariq run a physiotherapy clinic under a **Deed of Partnership** splitting profits and losses in the ratio **3 : 2** (Elena : Tariq). Part A: In Year 1 the clinic makes £85,000 profit — calculate Elena's share. Part B: If instead they had formed `PhysioCare Ltd` (Elena investing £18,000 in shares and Tariq £12,000) and the company collapsed with £90,000 of unpaid debts, how much would Elena lose in total?",
          steps: [
            "Part A — Total ratio parts = {{3 + 2 = 5}} parts.",
            "Value of 1 part = {{£85000 / 5 = £17000}}. Elena's share (3 parts) = {{3 * £17000 = £51000}} (Tariq gets {{£34000}}).",
            "Part B — Because `PhysioCare Ltd` is incorporated with **limited liability**, Elena cannot be forced to pay the £90,000 unpaid corporate debt from her personal savings. Her maximum total loss is capped at her **£18,000** share investment.",
          ],
          answer: "Part A: £51,000. Part B: £18,000 (capped by limited liability).",
          yourTurn: {
            question:
              "Two partners share profits in the ratio 3 : 1 according to their Deed of Partnership. If annual partnership profit is £96,000, how much does the senior partner (with 3 parts) receive in £?",
            answer: { type: "number", value: 72000, display: "£72,000" },
            solution:
              "Total parts = 3 + 1 = 4. One part = £96,000 ÷ 4 = £24,000. Senior partner receives 3 × £24,000 = £72,000.",
          },
        },
      ],
      keyPoints: [
        "**Sole traders and partnerships** are **unincorporated**: quick and cheap to set up with full privacy, but owners face **unlimited liability** and struggle to raise large equity finance.",
        "**Private limited companies (`Ltd`)** give founders **limited liability** and control over who buys shares, making `Ltd` the gold-standard upgrade for growing Paper 1 SMEs.",
        "**Public limited companies (`Plc`)** raise vast capital via stock-exchange share issues, but risk **hostile takeovers** and **divorce between ownership and control**.",
        "**Grade 9 Exam Rule:** Never advise a 6-person sole trader on Paper 1 to 'float on the stock exchange as a PLC' — recommend converting to a **Private Limited Company (`Ltd`)** or taking in a **partner** instead!",
      ],
      whyItWorks:
        "Without limited liability, ordinary savers and pension funds would never buy a £500 stake in an airline or factory if a lawsuit against that firm could cost them their family home. Incorporation unlocked modern large-scale capitalism by capping investor downside at 100% of their share purchase.",
      strategies: [
        "Check who owns **51%+ of voting shares**: retaining at least 51% in an `Ltd` lets a founder raise outside equity *without* losing ultimate control.",
        "Contrast **privacy + autonomy** (sole trader / `Ltd`) against **capital scale + takeover risk** (`Plc`) in 9-mark ownership evaluations.",
      ],
      thinkDeeper:
        "Even after converting from a sole trader to a new 5-staff `Ltd`, banks often ask the founder to sign a *personal guarantee* for a £50,000 business loan. What does that do to their 'limited liability' in practice?",
    },
    {
      id: "franchises-social-public",
      heading: "Franchises, social enterprises & public sector",
      discovery: {
        problem:
          "Zara has £60,000 to open a fast-food Chicken Shop. Option 1: launch her own brand 'Zara's Peri-Peri' keeping 100% of profits and choosing her own menu. Option 2: pay £25,000 upfront plus an 8% revenue royalty to open a 'RoostKing' franchise with national TV ads and tested suppliers. Which option has the lower failure rate in Year 1 — and what happens if her revenue hits £500,000 in Year 3?",
        idea:
          "Option 2 (**franchisee**) slashes Year 1 failure risk because customers already trust the `RoostKing` brand, banks lend more willingly, and staff training/supply chains are ready on Day 1. However, by Year 3 Zara must pay **£40,000 every year** ({{8% * £500000}}) in royalties and cannot add a single dish without `RoostKing` (the **franchisor**) approving it!",
      },
      body: `Beyond standard private firms, Edexcel 4BS1 examines **franchises**, **joint ventures**, **social enterprises**, **online/lifestyle firms** and **public corporations**.

### Franchisor vs Franchisee (Never Mix Them Up!)
- **Franchisor** = the **established brand owner** (e.g. Subway, Domino's, Anytime Fitness) selling the right to trade under its name and logo.
- **Franchisee** = the **local entrepreneur** who pays an initial **start-up franchise fee** plus ongoing **royalties** (typically a percentage of revenue, NOT profit!) and often must buy inventory from the franchisor.

| Perspective | Key Advantages | Key Drawbacks |
|---|---|---|
| **For the Franchisee** (Paper 1 Buyer) | Proven business model & recognised brand; national marketing & training provided; easier to secure bank loans. | High upfront fee + ongoing **revenue royalties** (paid even if making a loss!); strict rules kill menu/pricing independence; one rogue branch's scandal hurts all branches. |
| **For the Franchisor** (Paper 2 Brand Owner) | Rapid geographic expansion funded by franchisees' capital; motivated local owner-managers (better than salaried branch managers); steady royalty stream. | Shares potential outlet profits with franchisees; poor service/hygiene at one franchisee outlet damages global brand reputation; cost of auditing branches. |

### Other Important Organisational Forms
- **Joint Venture:** Two or more independent firms create a shared entity for a specific project or foreign market entry (e.g. a European carmaker + a local Asian battery maker), pooling expertise, local market knowledge and risk — though cultures and profit splits can clash.
- **Social Enterprise:** A revenue-generating business whose **primary objective is social or environmental** rather than maximising shareholder payouts (e.g. The Big Issue, Divine Chocolate, Patagonia). Unlike a pure charity relying on donations, a social enterprise **trades commercially** and reinvests most of its surplus into its mission.
- **Lifestyle & Online Businesses:** Run to fund the owner's preferred way of life or hobby (e.g. surf school, digital design studio), often using low-fixed-cost e-commerce platforms to reach global niches 24/7.
- **Public Sector / Public Corporations:** Owned and funded by the **government** on behalf of taxpayers (e.g. national health services, state rail networks, BBC). Primary aim: **universal public service, affordability and social welfare** rather than profit — though lack of competition can breed bureaucracy and inefficiency, leading some governments to **privatise** state industries.`,
      diagram: `<svg viewBox="0 0 640 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-way flow between Franchisor and Franchisee showing brand licence, training and marketing versus start-up fee and ongoing revenue royalties">
  <rect x="8" y="8" width="624" height="209" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="33" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">How a Franchise Contract Works (Franchisor ↔ Franchisee)</text>
  <rect x="28" y="62" width="190" height="128" rx="12" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>
  <text x="123" y="88" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">FRANCHISOR</text>
  <text x="123" y="108" text-anchor="middle" font-size="11" fill="var(--ink)">Established Brand Owner</text>
  <text x="123" y="128" text-anchor="middle" font-size="10" fill="var(--ink-2)">(e.g. Global Burger Chain)</text>
  <text x="123" y="152" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">+ Fast low-capital growth</text>
  <text x="123" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">− Brand reputation risk</text>
  <rect x="422" y="62" width="190" height="128" rx="12" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>
  <text x="517" y="88" text-anchor="middle" font-size="13" font-weight="800" fill="var(--warn)">FRANCHISEE</text>
  <text x="517" y="108" text-anchor="middle" font-size="11" fill="var(--ink)">Local Branch Entrepreneur</text>
  <text x="517" y="128" text-anchor="middle" font-size="10" fill="var(--ink-2)">(Paper 1 Small Business)</text>
  <text x="517" y="152" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">+ Proven brand &amp; training</text>
  <text x="517" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">− Royalties &amp; zero autonomy</text>
  <line x1="222" y1="96" x2="414" y2="96" stroke="var(--brand)" stroke-width="2.5"/>
  <polygon points="418,96 409,91 409,101" fill="var(--brand)"/>
  <text x="320" y="87" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Brand Licence + National Ads + Staff Training + EPOS</text>
  <line x1="418" y1="154" x2="226" y2="154" stroke="var(--warn)" stroke-width="2.5"/>
  <polygon points="222,154 231,149 231,159" fill="var(--warn)"/>
  <text x="320" y="145" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warn)">Upfront Start-Up Fee + % Revenue Royalties + Stock</text>
  <text x="320" y="175" text-anchor="middle" font-size="10" fill="var(--bad)">Trap: Royalties are usually % of REVENUE, payable even in a loss-making month!</text>
</svg>`,
      diagramCaption:
        "Franchising trades entrepreneurial freedom and ongoing revenue royalties in exchange for an established brand, training and lower start-up failure risk.",
      workedExamples: [
        {
          title: "Franchisee Net Surplus After Revenue Royalties",
          problem:
            "Dev buys a gym franchise. In Year 2, his branch earns **£320,000** in membership revenue. Under the franchise contract, he pays an **8% royalty** plus a **2% national marketing levy** on all revenue. His local rent, wages and utility expenses total **£245,000**. Calculate Dev's operating profit for Year 2.",
          steps: [
            "Total franchise deductions rate = {{8% + 2% = 10%}} of revenue.",
            "Payments to franchisor = {{£320000 * 0.10 = £32000}}.",
            "Total branch costs = {{£245000 + £32000 = £277000}}.",
            "Dev's Year 2 operating profit = {{£320000 - £277000 = £43000}}.",
          ],
          answer: "£43,000 operating profit (after paying £32,000 in royalties and marketing levies).",
          yourTurn: {
            question:
              "A bakery franchisee generates £250,000 of annual revenue. She pays a 6% revenue royalty to the franchisor and incurs £195,000 of other operating costs. Calculate her annual operating profit in £.",
            answer: { type: "number", value: 40000, display: "£40,000" },
            solution:
              "Royalty = £250,000 × 0.06 = £15,000. Operating profit = £250,000 − £195,000 − £15,000 = £40,000.",
          },
        },
      ],
      keyPoints: [
        "Always check whether the exam question asks about the **franchisor** (seller of the brand) or the **franchisee** (local buyer of the licence) — writing the wrong perspective scores **0 marks**!",
        "**Social enterprises** earn commercial trading revenue (not just donations) and reinvest surpluses into social/environmental goals.",
        "**Public corporations** belong to the **public sector** (state-owned); **Public Limited Companies (`Plc`)** belong to the **private sector** (owned by private shareholders on a stock exchange).",
        "**Privatisation** transfers state-owned assets to the private sector to inject profit incentives and investment, though critics warn private monopolies may raise prices or cut unprofitable rural services.",
      ],
      whyItWorks:
        "Franchising solves the classic growth bottleneck: the franchisor lacks local capital and on-site supervision for 500 towns, while local entrepreneurs have capital and drive but lack a trusted national brand.",
      strategies: [
        "Underline the last three letters: franchis**OR** = **O**riginator / **O**wner of brand; franchis**EE** = **E**ntrepreneur paying the f**EE**.",
        "Never confuse **Public Sector** (government-owned) with **Public Limited Company (`Plc`)** (private-sector company whose shares the public can buy).",
      ],
      thinkDeeper:
        "Why do franchisors charge royalties as a percentage of **revenue** rather than a percentage of **branch profit**? Think about how a franchisee might manipulate branch expenses!",
    },
    {
      id: "sectors-and-success",
      heading: "Economic sectors & business success or failure",
      discovery: {
        problem:
          "A profitable furniture maker (`OakCraft Ltd`) has a full order book worth £400,000 from luxury hotels, yet bailiffs padlock its workshop doors and declare the business insolvent on Friday morning. How can a profitable company go bust?",
        idea:
          "**Profit is not cash!** `OakCraft Ltd` bought timber and paid wages immediately in cash, while hotel clients took **90 days trade credit** to pay their invoices. Running out of liquid cash to pay due bills (**cash-flow insolvency**) is the #1 killer of small businesses — even profitable ones!",
      },
      body: `### Primary, Secondary & Tertiary Sectors

| Sector | Activity | Examples | Global Structural Trend |
|---|---|---|---|
| **Primary** | Extracting raw materials and natural resources from land or sea | Farming, fishing, forestry, mining, oil & lithium extraction | Dominates employment in **developing economies**; shrinks in share as mechanisation rises. |
| **Secondary** | Manufacturing, processing and construction turning raw materials into finished goods | Car factories, garment mills, food processing, housebuilding, solar-panel assembly | Grows rapidly during **industrialisation** in emerging economies (e.g. Vietnam, India, Mexico). |
| **Tertiary** | Providing commercial and personal **services** to consumers and other businesses | Retail, banking, healthcare, education, software/cloud IT, hospitality, logistics | Dominates GDP and employment (often **75%+**) in **developed economies** following **de-industrialisation**. |

**Interdependence (Chain of Production):** Every sector relies on the others — a coffee farmer (**primary**) needs machinery (**secondary**) and transport/banking (**tertiary**), while a high-street café (**tertiary**) collapses without roasted beans (**secondary**) and harvests (**primary**).

### Measuring Business Size (And Trap to Avoid!)
Examiners accept four valid size metrics:
1. **Number of employees** (Edexcel's own Paper 1 **<50** vs Paper 2 **>250** rule — watch out: highly automated factories have huge output with few workers!).
2. **Revenue / Turnover** (total sales value — useful within the same industry).
3. **Capital employed** (total long-term funds invested in assets).
4. **Market share** (firm sales relative to total market).
*(Trap: **Profit is NOT a reliable measure of business size** — a giant airline can make a £200m loss in a bad year while a 10-person boutique hedge fund makes £20m profit!)*

### Why Businesses Succeed — and Why New & Established Firms Fail
- **Internal Causes of Failure:**
  - **Poor cash-flow management** (overtrading, giving excessive credit to customers, tying cash up in unsold inventory).
  - **Lack of start-up finance / under-capitalisation** (no buffer for slow early months).
  - **Poor market research & weak marketing** (launching product-orientated goods nobody wants or mispricing).
  - **Management inexperience & poor cost control** (high rent, overstaffing).
  - **Failure to innovate** (Established giants like Blockbuster or Kodak ignoring technological disruption!).
- **External Causes of Failure:** Recession, sharp rises in central bank interest rates, aggressive price-cutting by larger rivals, exchange-rate shocks, or sudden supply-chain legislation.`,
      diagram: `<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sector shares across Developing, Industrialising and Developed economies plus top causes of business failure">
  <rect x="8" y="8" width="624" height="219" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Economic Sector Shifts &amp; Why Businesses Fail</text>
  <rect x="24" y="48" width="320" height="164" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="184" y="69" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Employment Share by Economy Type</text>
  <text x="78" y="92" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Developing</text>
  <rect x="53" y="100" width="50" height="52" fill="var(--good)"/>
  <rect x="53" y="152" width="50" height="22" fill="var(--accent)"/>
  <rect x="53" y="174" width="50" height="18" fill="var(--brand)"/>
  <text x="184" y="92" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Emerging</text>
  <rect x="159" y="100" width="50" height="24" fill="var(--good)"/>
  <rect x="159" y="124" width="50" height="40" fill="var(--accent)"/>
  <rect x="159" y="164" width="50" height="28" fill="var(--brand)"/>
  <text x="290" y="92" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Developed</text>
  <rect x="265" y="100" width="50" height="8" fill="var(--good)"/>
  <rect x="265" y="108" width="50" height="18" fill="var(--accent)"/>
  <rect x="265" y="126" width="50" height="66" fill="var(--brand)"/>
  <text x="184" y="205" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Green: Primary • Amber: Secondary • Cyan: Tertiary</text>
  <rect x="360" y="48" width="256" height="164" rx="10" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="488" y="69" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">Top 5 Business Killers</text>
  <text x="376" y="95" font-size="11" font-weight="700" fill="var(--ink)">1. Cash-flow insolvency (Profit ≠ Cash)</text>
  <text x="376" y="118" font-size="11" fill="var(--ink)">2. Poor market research / wrong 4Ps</text>
  <text x="376" y="141" font-size="11" fill="var(--ink)">3. Under-capitalisation at launch</text>
  <text x="376" y="164" font-size="11" fill="var(--ink)">4. Failure to innovate (e.g. e-commerce)</text>
  <text x="376" y="187" font-size="11" fill="var(--ink)">5. External shocks (rates, rivals, recession)</text>
</svg>`,
      diagramCaption:
        "Industrialisation shifts workers from primary to secondary manufacturing; de-industrialisation in developed economies shifts over 75% of employment and GDP into tertiary services.",
      workedExamples: [
        {
          title: "Sector Shares & De-Industrialisation Calculation",
          problem:
            "Country X has a total GDP of **$400 billion**. Its primary sector produces **$24 billion** and its secondary sector produces **$96 billion**, with the remainder generated by its tertiary sector. Calculate the percentage of GDP generated by the **tertiary sector** and classify Country X's stage of development.",
          steps: [
            "Tertiary output = {{$400bn - ($24bn + $96bn) = $400bn - $120bn = $280bn}}.",
            "Tertiary percentage of GDP = {{(280 / 400) * 100 = 70%}}.",
            "With **70%** in tertiary services and only **6%** in primary output, Country X is a **developed, service-led economy** that has experienced de-industrialisation.",
          ],
          answer: "70% tertiary GDP — developed service-based economy.",
          yourTurn: {
            question:
              "An island economy employs 500,000 workers in total: 45,000 in primary industries, 80,000 in secondary manufacturing, and the rest in tertiary services. What percentage of the workforce is in the tertiary sector?",
            answer: { type: "number", value: 75, display: "75%" },
            solution:
              "Tertiary workers = 500,000 − 45,000 − 80,000 = 375,000. Percentage = (375,000 ÷ 500,000) × 100 = 75%.",
          },
        },
      ],
      keyPoints: [
        "**Primary** extracts raw materials; **Secondary** manufactures/constructs; **Tertiary** delivers services.",
        "**Industrialisation** grows the secondary sector; **de-industrialisation** sees manufacturing share decline as tertiary services (finance, tech, tourism, healthcare) dominate developed economies.",
        "Measure business size via **employees, revenue, capital employed or market share** — never profit alone!",
        "Distinguish **new start-up failures** (lack of cash buffer, no brand recognition, poor market research) from **established corporate failures** (complacency, failure to innovate, diseconomies of scale).",
      ],
      whyItWorks:
        "As household incomes rise in growing economies, spending on basic food saturates while demand for healthcare, travel, entertainment, software and financial services expands much faster than GDP — pulling labour and investment into the tertiary sector.",
      strategies: [
        "When analysing why a firm failed in a case study, check **liquidity first** (trade receivables waiting to be paid vs immediate rent/supplier bills) before blaming overall demand.",
        "Link sectors together via **interdependence** when asked how a shock in farming/oil affects manufacturers or retailers.",
      ],
      thinkDeeper:
        "If UK manufacturing employs half as many workers today as in 1980, does that automatically mean the UK produces *half as many manufactured goods*? What role do automation and labour productivity play?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the employee size boundary between Edexcel 4BS1 Paper 1 and Paper 2?",
        back: "**Paper 1** examines small businesses (**fewer than 50 employees**); **Paper 2** examines large businesses (**more than 250 employees**).",
      },
      {
        front: "What does SMART stand for when setting business objectives?",
        back: "**S**pecific, **M**easurable, **A**chievable (or Agreed), **R**elevant (or Realistic), **T**ime-bound.",
      },
      {
        front: "Name 4 financial objectives and 4 non-financial objectives.",
        back: "**Financial:** survival, profit, sales growth, market share (plus financial security). **Non-financial:** social/ethical aims, personal satisfaction, challenge, independence & control.",
      },
      {
        front: "Distinguish between a shareholder and a stakeholder.",
        back: "A **shareholder** owns shares in an incorporated company (`Ltd`/`Plc`). A **stakeholder** is *anyone* affected by or able to affect the business (employees, customers, suppliers, banks, local community, government — plus shareholders).",
      },
      {
        front: "Define unlimited liability and name the two business forms that carry it.",
        back: "The owner and the business have **no separate legal identity**, so owners are personally liable for **all** unpaid business debts — risking their home, car and personal savings. Applies to **sole traders** and ordinary **partnerships**.",
      },
      {
        front: "Define limited liability and state why it attracts investors.",
        back: "Shareholders in an incorporated company (`Ltd` or `Plc`) can lose **at most the amount they invested in shares**; their personal possessions cannot be seized to pay company debts.",
      },
      {
        front: "What is a Deed of Partnership?",
        back: "A legally binding agreement between partners setting out capital contributions, profit/loss-sharing ratios, salaries, duties, voting rules and exit procedures.",
      },
      {
        front: "Give two key differences between a Private Limited Company (Ltd) and a Public Limited Company (Plc).",
        back: "1. **Share sales:** `Ltd` shares are sold privately with existing shareholder approval; `Plc` shares trade freely on a public **Stock Exchange**. 2. **Takeover risk:** A `Plc` risks a **hostile takeover** if an outsider buys >50% of shares.",
      },
      {
        front: "What is meant by 'divorce between ownership and control'?",
        back: "In a large `Plc`, millions of **shareholders** own the company (wanting high dividends), while salaried **directors/managers** control daily strategy (sometimes pursuing growth, perks or empire-building instead).",
      },
      {
        front: "Distinguish clearly between a franchisor and a franchisee.",
        back: "**Franchisor:** the established brand owner granting the licence in return for an upfront fee and ongoing royalties. **Franchisee:** the independent entrepreneur buying the right to run a local branch under that brand.",
      },
      {
        front: "What is a social enterprise?",
        back: "A commercial business that earns revenue by selling goods/services (not relying solely on charity donations) whose **primary objective is social or environmental**, reinvesting most surpluses into that mission.",
      },
      {
        front: "Distinguish between Primary, Secondary and Tertiary sectors.",
        back: "**Primary:** extracting raw materials (farming, mining). **Secondary:** manufacturing & construction. **Tertiary:** providing services (retail, banking, healthcare, IT).",
      },
      {
        front: "What is de-industrialisation?",
        back: "The long-term decline in the **secondary (manufacturing)** sector's share of GDP and employment in developed economies as the **tertiary (service)** sector expands.",
      },
      {
        front: "Name the four valid ways to measure business size — and the #1 invalid measure!",
        back: "**Valid:** number of employees, revenue/turnover, capital employed, market share. **Invalid:** **profit** (depends on efficiency and market cycle, not scale!).",
      },
      {
        front: "What does AJIM stand for in 9-mark (Assess) and 12-mark (Evaluate) Edexcel 4BS1 answers?",
        back: "**A**nswer the question directly → **J**ustify with two sided chains of reasoning in case-study context → **I**t depends on (key contingency/time horizon) → **M**ost important factor weighing why your chosen option wins.",
      },
    ],
    mustKnow: [
      "Contrast **financial objectives** (survival, profit, sales, market share, financial security) with **non-financial objectives** (social/ethical, personal satisfaction, challenge, independence/control) and explain why objectives shift over time.",
      "Write and audit **SMART** targets (Specific, Measurable, Achievable, Relevant, Time-bound).",
      "Classify **internal** (owners, managers, employees) and **external** (customers, suppliers, financiers, local community, government) stakeholders and analyse how one decision sparks conflicting impacts.",
      "Compare **unincorporated** structures (sole trader, partnership + Deed of Partnership) with **incorporated** companies (`Ltd`, `Plc`) across liability, legal identity, continuity, privacy, capital raising and takeover risk.",
      "Distinguish **franchisor** vs **franchisee** pros/cons — never write a franchisee answer when the question asks about the franchisor!",
      "Explain **joint ventures**, **social enterprises**, **lifestyle/online businesses**, **public corporations** and **privatisation**.",
      "Classify businesses into **primary, secondary and tertiary** sectors, calculate sector % shares, and explain **industrialisation**, **de-industrialisation** and **interdependence**.",
      "Evaluate causes of **business success and failure** for both new start-ups (cash-flow insolvency, under-capitalisation, poor research) and established firms (failure to innovate, competition, external shocks).",
      "Master **Edexcel 4BS1 AO1–AO4 Command Words**: *State/Define* (AO1 pure recall, no context needed on generic stems), *Outline* (2 marks: 1 point + **1 case-study AO2 link**!), *Explain* (3 marks: 1 point + 2 linked AO3 steps, generic unless the business is named), *Analyse* (6 marks: 2 developed chains **in AO2 context**).",
      "Nail **9-mark (*Assess*)** and **12-mark (*Evaluate*)** essays using **AJIM**: balanced pros & cons anchored tightly to the case study's numbers, staff count and product, capped by an *'It depends on...'* judgement!",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'The 12-employee bakery sole trader on Paper 1 should float on the Stock Exchange as a PLC to raise share capital.'",
        right: "Write instead (Grade 9): 'To gain limited liability and raise equity while keeping family control, the 12-staff bakery should incorporate as a Private Limited Company (Ltd) and invite private investors — PLC flotation requires at least £50,000 share capital and heavy listing fees suited only to large Paper 2 firms.'",
      },
      {
        wrong: "Never write: 'Limited liability means the business itself does not have to pay its debts if it loses money.'",
        right: "Write instead (Grade 9): 'The incorporated company still owes all its debts and its corporate assets will be liquidated; limited liability protects the **shareholders**, whose personal loss is capped at the capital they invested in shares, shielding their personal home and savings.'",
      },
      {
        wrong: "Never write: 'A Public Limited Company (PLC) is owned and run by the government in the public sector.'",
        right: "Write instead (Grade 9): 'A PLC is in the **private sector** — owned by private/institutional shareholders because members of the public can buy its shares on a stock exchange. State-owned bodies in the public sector are **public corporations**.'",
      },
      {
        wrong: "Never write: 'An advantage for the franchisor is that they receive training and an established brand name.'",
        right: "Write instead (Grade 9): 'Receiving brand recognition and training benefits the **franchisee** (the local branch buyer). An advantage for the **franchisor** (brand owner) is rapid expansion funded by franchisees' capital plus ongoing revenue royalties.'",
      },
      {
        wrong: "Never write: 'A social enterprise is a non-trading charity that survives only on public donations and volunteers.'",
        right: "Write instead (Grade 9): 'A social enterprise is a **commercial trading business** that generates revenue by selling goods or services competitively, but reinvests the majority of its profit into a social or environmental mission rather than paying maximum dividends.'",
      },
      {
        wrong: "Never write generic textbook sentences like 'This increases sales, customers and revenue for the business' on 2-mark Outline, 6-mark Analyse, 9-mark Assess or 12-mark Evaluate questions.",
        right: "Write instead (Grade 9): 'Weave **AO2 case-study context** into every paragraph — quote the exact product (e.g. artisan sourdough loaves), employee count (14 bakers), competitor threat, or financial figures from the extract so your answer could ONLY apply to that business!'",
      },
      {
        wrong: "Never write: 'Company X made £2m profit so it must be a larger business than Company Y which made £0.5m profit.'",
        right: "Write instead (Grade 9): 'Profit measures performance/efficiency, **not business size** — measure size using **revenue, number of employees, capital employed or market share**.'",
      },
    ],
    examMistakes: [
      "**Dropping AO2 Context on 2-mark *Outline* questions:** On Edexcel 4BS1, *'Outline one stakeholder conflict for Zara's salon (2)'* awards 1 mark for the point and 1 mark ONLY if linked to *stylists / hair products / salon appointments*! Generic 'workers want higher pay' caps you at 1/2.",
      "**Confusing 3-mark *Explain* rules:** Standard 4BS1 *'Explain one advantage of being a sole trader (3)'* does NOT name the case-study firm — it requires 1 point + **2 linked strands of reasoning** (e.g. keeps 100% of profit → no need to consult partners → faster decision-making). Don't stop after one 'because'!",
      "**Mixing up Franchisor and Franchisee:** Circle the last two letters (`-OR` vs `-EE`) in the question stem before writing a single word.",
      "**Saying 'unlimited liability means you lose everything':** Be precise — write *'owners have no separate legal identity from the business, so personal assets (such as their house or savings) can be seized to settle unpaid business debts'*.",
      "**Writing one-sided 9-mark (*Assess*) or 12-mark (*Evaluate*) essays:** Without counter-arguments AND a weighed **AJIM** conclusion (*It depends on...*), examiners cap your response below the top level band even if your knowledge is accurate.",
      "**Treating Cash and Profit as identical when explaining business failure:** Always specify **cash-flow insolvency** (inability to pay short-term payables/wages on time despite profitable credit sales).",
      "**Recommending equal profit splits without mentioning a Deed of Partnership:** Always cite a **Deed of Partnership** as the legal tool to prevent partner disputes over workload, capital and profit share.",
      "**Assuming non-financial objectives mean zero need for profit:** Even social enterprises and lifestyle sole traders must cover total costs (**break even / survive**) over time to stay solvent!",
    ],
    mnemonics: [
      {
        topic: "SMART Objectives",
        device: "SMART",
        explanation: "**S**pecific • **M**easurable • **A**chievable • **R**elevant • **T**ime-bound — check all 5 letters when auditing whether a target is actionable.",
      },
      {
        topic: "9-Mark & 12-Mark Evaluation Structure",
        device: "AJIM",
        explanation: "**A**nswer (clear judgement up front & at end) • **J**ustify (weighed contextual chains on both sides) • **I**t depends on (critical condition, e.g. founder's desire for 51% control or cash buffer) • **M**ost important factor.",
      },
      {
        topic: "Ownership Ladder (Paper 1 → Paper 2)",
        device: "S → P → Ltd → PLC",
        explanation: "**S**ole Trader (1 owner, unlimited) → **P**artnership (2–20+, unlimited, Deed) → **Ltd** (private shares, **limited**, family control) → **PLC** (stock exchange, **limited**, huge capital + hostile takeover risk).",
      },
      {
        topic: "Economic Sectors Chain",
        device: "Extract → Make → Serve (P-S-T)",
        explanation: "**P**rimary extracts raw materials → **S**econdary manufactures goods → **T**ertiary serves consumers & firms.",
      },
    ],
    realWorld: [
      {
        title: "Brompton Bicycle Ltd (Private Limited Company, UK)",
        detail: "Folding-bike manufacturer Brompton remained a **Private Limited Company (`Ltd`)** rather than floating as a `Plc` so CEO Will Butler-Adams and private shareholders could invest in long-term R&D and British craftsmanship without stock-market pressure for short-term quarterly dividends.",
        emoji: "🚲",
      },
      {
        title: "Subway & Domino's (Global Franchise Model)",
        detail: "Over **90%** of Domino's UK & Ireland stores are run by local **franchisees** who fund store fit-outs and pay ongoing revenue royalties, enabling rapid national coverage while local owner-operators stay laser-focused on delivery speed and staff scheduling.",
        emoji: "🍕",
      },
      {
        title: "Divine Chocolate & Cafédirect (Social Enterprises)",
        detail: "Co-owned with smallholder farmer cooperatives, Divine Chocolate competes on supermarket shelves (**commercial trading**) while reinvesting surpluses into farmer literacy, sustainable agroforestry and higher cocoa incomes (**social & environmental objectives**).",
        emoji: "🍫",
      },
      {
        title: "Gymshark: Garage Start-Up to Global Brand",
        detail: "Ben Francis started sewing gym wear in his parents' garage at 19 (**survival & personal challenge**), incorporated as `Gymshark Ltd` for **limited liability**, and later sold a minority 21% stake to General Atlantic — raising growth capital while retaining **>50% voting control**.",
        emoji: "🏋️",
      },
      {
        title: "Kodak & Blockbuster (Failure of Established Giants)",
        detail: "Both dominated global market share for decades yet collapsed into insolvency because leadership **failed to innovate** as digital photography and streaming disrupted their core tertiary/secondary markets.",
        emoji: "📼",
      },
    ],
    videos: [
      {
        title: "Edexcel IGCSE Business 4BS1 — Business Objectives & Stakeholders",
        channel: "Tutor2u Business",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+business+objectives+and+stakeholders+tutor2u",
      },
      {
        title: "Sole Traders, Partnerships, Ltd & PLC — Limited vs Unlimited Liability",
        channel: "TakingTheBiz",
        url: "https://www.youtube.com/results?search_query=sole+trader+partnership+ltd+plc+limited+liability+igcse+business",
      },
      {
        title: "Franchises, Social Enterprises & Public Corporations (IGCSE Business)",
        channel: "Bizconsesh",
        url: "https://www.youtube.com/results?search_query=franchises+and+social+enterprises+igcse+business+bizconsesh",
      },
      {
        title: "How to Answer 6, 9 & 12 Mark Questions in Edexcel IGCSE Business 4BS1",
        channel: "Edexcel Business Revision",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+business+4bs1+9+and+12+mark+exam+technique",
      },
    ],
    formulas: [
      {
        name: "Market Share (%)",
        formula: '{{"Firm Sales" / "Total Market Sales" * 100}}',
        note: "Give to 1 or 2 d.p. with a % sign; measures competitive position and SMART sales targets.",
      },
      {
        name: "Percentage Sales Growth (%)",
        formula: '{{("New Sales" - "Old Sales") / "Old Sales" * 100}}',
        note: "Used to verify whether a SMART sales growth objective was achieved.",
      },
      {
        name: "Total Profit",
        formula: '{{"Total Revenue" - "Total Costs"}}',
        note: "Primary financial objective for established private-sector firms (once survival is secured).",
      },
      {
        name: "Partnership Profit Share",
        formula: '{{"Partner Ratio Part" / "Total Ratio Parts" * "Total Profit"}}',
        note: "Governed by a Deed of Partnership; without a Deed, statutory law splits profits equally.",
      },
      {
        name: "Franchisee Royalty Payment",
        formula: '{{"Branch Revenue" * ("Royalty %" / 100)}}',
        note: "Charged on revenue (turnover), NOT profit — still payable in loss-making months!",
      },
      {
        name: "Sector Share of GDP or Employment (%)",
        formula: '{{"Sector Output" / "Total Economy Output" * 100}}',
        note: "Tracks industrialisation (rising secondary %) and de-industrialisation (dominant tertiary %).",
      },
      {
        name: "Unlimited Liability",
        formula: "Owner = Business in law (no separate legal identity; personal house & savings at risk)",
        note: "Applies to sole traders and ordinary partnerships.",
      },
      {
        name: "Limited Liability",
        formula: "Max Shareholder Loss = Original Share Capital Invested",
        note: "Applies to incorporated companies (`Ltd` and `Plc`) due to separate corporate legal identity.",
      },
      {
        name: "Majority Voting Control Threshold",
        formula: '{{"Voting Shares Held" > 50%}}',
        note: "Holding at least 51% prevents a hostile takeover (`Plc`) or being outvoted by outside investors (`Ltd`).",
      },
      {
        name: "Stakeholder vs Shareholder",
        formula: "All Shareholders ⊂ Stakeholders (Internal + External groups affected by firm)",
        note: "Internal: owners, managers, employees. External: customers, suppliers, banks, community, government.",
      },
    ],
  },
};
