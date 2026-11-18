import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "sources-cashflow-breakeven",
  title: "Sources of Finance, Cash Flow & Break-Even Analysis",
  strand: "Finance",
  icon: "💷",
  summary:
    "Choose internal vs external short- and long-term finance in context, distinguish cash from profit across 6-month cash-flow forecasts, and master costs, contribution, break-even charts and margin of safety.",
  intro:
    "More startups collapse with **full order books and healthy paper profits** than from lack of ideas — because they run out of **liquid cash** to pay Friday's wages! In Pearson Edexcel IGCSE Business (4BS1 Topics 3.1–3.3), Finance is where crisp arithmetic meets commercial judgement. Whether advising a sole-trader food truck on **Paper 1** (< 50 staff) or a global manufacturer on **Paper 2** (> 250 staff), Grade 9 answers match the **time horizon of finance to the asset**, never confuse **cash with profit**, and calculate **contribution, break-even output and margin of safety** with zero rounding slips.",
  guide: [
    {
      id: "internal-external-finance",
      heading: "Internal & external sources of finance (short vs long term)",
      discovery: {
        problem:
          "A sole trader running a profitable street-food van needs £800 for festival ingredients next weekend AND £45,000 for a custom electric catering van lasting 6 years. His friend suggests: 'Take out a 7-year bank mortgage for the £800 ingredients, and issue shares on the London Stock Exchange for the £45,000 van!' Identify the **two fatal errors** in his friend's advice.",
        idea:
          "First, **match finance term to expenditure type**: £800 of weekend ingredients is **revenue expenditure** (day-to-day running cost), requiring **short-term finance** (trade credit, retained profit or a brief overdraft) — never a multi-year loan! Second, a **sole trader** is unincorporated and **cannot issue shares** at all (and only a **PLC**, never even an Ltd, can float shares on a public stock exchange!). For the £45,000 **capital expenditure** van, **hire purchase**, **leasing** or a **5-year bank loan** fits properly.",
      },
      body: `### Step 1: Capital vs Revenue Expenditure
- **Capital expenditure**: Spending on **non-current (fixed) assets** lasting **more than 1 year** — e.g. property, CNC machinery, delivery vans, EPOS computer systems. *Funded by **long-term** finance (> 1 year).*
- **Revenue expenditure**: Day-to-day running expenses consumed within 12 months — e.g. raw materials, inventory, wages, electricity, rent, marketing. *Funded by working capital / **short-term** finance (< 1 year).*

### Step 2: Internal Sources of Finance (Raised Inside the Business)

| Internal Source | How It Works | Advantages | Drawbacks & Opportunity Cost |
|---|---|---|---|
| **Owner's personal savings** | Entrepreneur injects personal cash (classic **Paper 1** sole trader / partnership startup source). | Zero interest charges; zero dilution of control; instant availability. | Usually limited in size; puts personal nest-egg at risk (especially with **unlimited liability**). |
| **Retained profit** | Profit kept inside the business after corporation tax and shareholder dividends are paid. | **No interest**, no repayment schedule, no loss of ownership control; strengthens balance sheet. | Unavailable to brand-new or loss-making firms; carries an **opportunity cost** (cannot be paid as dividends or earn bank interest). |
| **Sale of surplus assets** | Selling unused land, old vans or idle machinery (or **sale-and-leaseback** of a building). | Unlocks tied-up capital debt-free with no interest. | One-off only; slow to find a buyer; sale-and-leaseback creates permanent future rent outflows. |

### Step 3: External Sources of Finance (Short-Term vs Long-Term)

| Horizon | External Source | Key Mechanics, Pros & Cons (Edexcel 4BS1) |
|---|---|---|
| **Short-term (< 1 yr)** | **Bank overdraft** | Permission for current account to go **negative** up to an agreed limit. Flexible (interest paid *only* on the exact daily overdrawn amount), ideal for seasonal cash dips — **but** carries high variable APR and is **repayable on demand** by the bank! |
| **Short-term (< 1 yr)** | **Trade credit** | Buying stock/materials now and paying the supplier **30–90 days later**. Interest-free boost to cash flow, **but** late payment forfeits early-settlement cash discounts and damages supplier trust. |
| **Short-term (< 1 yr)** | **Debt factoring** | Selling unpaid customer invoices (trade receivables) to a factoring company for ~85–90% immediate cash. Instant liquidity, **but** the factor keeps 10–15% of profit margin. |
| **Long-term (> 1 yr)** | **Bank loan** | Lump sum borrowed and repaid in fixed monthly instalments + interest over 1–10 years. Predictable budgeting and no ownership loss, **but** banks often demand **collateral (security)** and high central-bank interest rates raise fixed finance costs. |
| **Long-term (> 1 yr)** | **Commercial mortgage** | 15–30 year loan secured specifically on land/premises. Low interest rate, **but** bank repossesses property on default. |
| **Long-term (> 1 yr)** | **Hire purchase (HP) vs Leasing** | **HP**: Deposit + monthly instalments; business **owns** the van/machine after the final payment. **Leasing**: Monthly rental; **never owns** the asset, *but* the lessor covers maintenance and upgrades obsolete tech! |
| **Long-term (> 1 yr)** | **Share capital (Equity)** | Permanent capital with **no interest** or repayment date! **Private Ltd**: sold privately to invited family/angels. **PLC ONLY**: floated publicly on a Stock Exchange (IPO) for £millions — risks **dilution of control** and hostile takeover! |
| **Long-term (> 1 yr)** | **Venture capital & Crowdfunding** | **Venture capitalists** invest equity + expertise into high-growth risky SMEs (demanding 20–40% equity stake). **Crowdfunding** raises small sums from thousands of online backers (doubles as market research & PR!). **Government grants** need no repayment, though strict location/green criteria apply. |`,
      diagram: `<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision map comparing Internal Finance, Short-Term External Finance and Long-Term External Finance by ownership type">
  <rect x="0" y="0" width="680" height="270" rx="14" fill="var(--surface-2)" />
  <text x="340" y="26" font-size="14" font-weight="800" text-anchor="middle" fill="var(--ink)">Matching Sources of Finance to Purpose, Horizon &amp; Legal Ownership</text>

  <rect x="20" y="46" width="204" height="206" rx="11" fill="var(--surface)" stroke="var(--good)" stroke-width="2" />
  <text x="122" y="68" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--good)">INTERNAL (No Interest!)</text>
  <text x="34" y="92" font-size="10.5" font-weight="700" fill="var(--ink)">1. Retained Profit</text>
  <text x="34" y="108" font-size="9.5" fill="var(--ink-2)">Established profitable firms only</text>
  <text x="34" y="132" font-size="10.5" font-weight="700" fill="var(--ink)">2. Owner's Savings</text>
  <text x="34" y="148" font-size="9.5" fill="var(--ink-2)">Paper 1 startups / sole traders</text>
  <text x="34" y="172" font-size="10.5" font-weight="700" fill="var(--ink)">3. Selling Surplus Assets</text>
  <text x="34" y="188" font-size="9.5" fill="var(--ink-2)">One-off cash from idle equipment</text>
  <rect x="32" y="206" width="180" height="34" rx="6" fill="var(--good-soft)" />
  <text x="122" y="227" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--good)">Keep 100% Control · Opp. Cost!</text>

  <rect x="238" y="46" width="204" height="206" rx="11" fill="var(--surface)" stroke="#d97706" stroke-width="2" />
  <text x="340" y="68" font-size="12.5" font-weight="800" text-anchor="middle" fill="#d97706">SHORT-TERM EXTERNAL (&lt;1 yr)</text>
  <text x="252" y="92" font-size="10.5" font-weight="700" fill="var(--ink)">1. Bank Overdraft</text>
  <text x="252" y="108" font-size="9.5" fill="var(--ink-2)">Flexible dip; high APR, on-demand</text>
  <text x="252" y="132" font-size="10.5" font-weight="700" fill="var(--ink)">2. Trade Credit (30–90d)</text>
  <text x="252" y="148" font-size="9.5" fill="var(--ink-2)">Interest-free stock; lose discounts</text>
  <text x="252" y="172" font-size="10.5" font-weight="700" fill="var(--ink)">3. Debt Factoring</text>
  <text x="252" y="188" font-size="9.5" fill="var(--ink-2)">Instant cash on invoices (−fee%)</text>
  <rect x="250" y="206" width="180" height="34" rx="6" fill="var(--accent-soft)" />
  <text x="340" y="227" font-size="9.5" font-weight="700" text-anchor="middle" fill="#a16207">For Revenue Expenditure / Cash Gap</text>

  <rect x="456" y="46" width="204" height="206" rx="11" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" />
  <text x="558" y="68" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--brand)">LONG-TERM EXTERNAL (&gt;1 yr)</text>
  <text x="470" y="92" font-size="10.5" font-weight="700" fill="var(--ink)">• Bank Loan / Mortgage</text>
  <text x="470" y="108" font-size="9.5" fill="var(--ink-2)">Fixed monthly repayments + interest</text>
  <text x="470" y="130" font-size="10.5" font-weight="700" fill="var(--ink)">• Hire Purchase vs Leasing</text>
  <text x="470" y="146" font-size="9.5" fill="var(--ink-2)">HP = own at end | Lease = rent/fix</text>
  <text x="470" y="168" font-size="10.5" font-weight="700" fill="var(--ink)">• Share Issue / VC / Crowd</text>
  <text x="470" y="184" font-size="9.5" fill="var(--bad)">Shares = Ltd/Plc ONLY (Never Sole!)</text>
  <rect x="468" y="206" width="180" height="34" rx="6" fill="var(--brand-soft)" />
  <text x="558" y="227" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--brand)">For Capital Expenditure / Expansion</text>
</svg>`,
      diagramCaption:
        "Match short-term working-capital needs to short-term sources and multi-year capital assets to long-term sources — always checking legal ownership first!",
      workedExamples: [
        {
          title: "Comparing Bank Loan Total Repayment vs Leasing",
          problem:
            "A print shop needs a £30,000 digital press for 4 years. **Option A (Bank Loan)**: Borrow £30,000 repaid over 48 months at £740 per month. **Option B (Leasing)**: Lease the press for £790 per month for 48 months (maintenance included; press returned at end). Calculate the **total interest paid on the Bank Loan** and the **4-year cash outflow difference** between Option B and Option A.",
          steps: [
            "Total repaid under Option A (Bank Loan) = {{48 * 740 = 35520}} (£35,520).",
            "Total interest paid on Bank Loan = {{35520 - 30000 = 5520}} (£5,520).",
            "Total lease payments under Option B = {{48 * 790 = 37920}} (£37,920); Option B costs {{37920 - 35520 = 2400}} (£2,400) more in cash outflows (though includes free maintenance!).",
          ],
          answer: "Loan interest = £5,520; Leasing costs £2,400 more over 4 years",
          yourTurn: {
            question:
              "A bakery borrows **£24,000** via a 3-year (36-month) bank loan repaid at **£750 per month**. Calculate the **total interest** paid over the 36 months in £.",
            answer: { type: "number", value: 3000, display: "£3,000" },
            solution:
              "Total repaid = 36 × £750 = £27,000. Total interest = £27,000 − £24,000 = £3,000.",
          },
        },
        {
          title: "Hire Purchase Total Cost Calculation",
          problem:
            "A courier firm acquires a van with a cash price of £22,000 using **Hire Purchase**: a **15% deposit** upfront followed by **36 monthly instalments of £610**. Calculate the **total Hire Purchase cost** and the **HP finance charge** above the cash price.",
          steps: [
            "Upfront 15% deposit = {{22000 * 0.15 = 3300}} (£3,300).",
            "36 monthly instalments = {{36 * 610 = 21960}} (£21,960).",
            "Total HP cost = {{3300 + 21960 = 25260}} (£25,260); finance charge = {{25260 - 22000 = 3260}} (£3,260).",
          ],
          answer: "Total HP cost = £25,260; Finance charge = £3,260",
          yourTurn: {
            question:
              "A café buys an espresso machine (cash price £8,000) on **Hire Purchase**: a **20% deposit** plus **24 monthly payments of £310**. Calculate the **total Hire Purchase cost** in £.",
            answer: { type: "number", value: 9040, display: "£9,040" },
            solution:
              "Deposit = 20% × £8,000 = £1,600. Monthly payments = 24 × £310 = £7,440. Total HP cost = £1,600 + £7,440 = £9,040.",
          },
        },
      ],
      keyPoints: [
        "**Internal finance** (retained profit, owner's savings, asset sales) avoids interest and keeps 100% control, though retained profit is unavailable to startups.",
        "**Short-term external finance** (overdraft, trade credit, debt factoring) bridges temporary working-capital cash gaps (< 1 year).",
        "**Long-term external finance** (bank loan, mortgage, HP, leasing, share capital, venture capital, crowdfunding) funds multi-year **capital expenditure**.",
        "**Grade 9 Ownership Check**: Sole traders & partnerships = NO shares; Private Ltd = private share issue only; **PLC ONLY** = Stock Exchange flotation!",
      ],
      whyItWorks:
        "Financing a 10-year factory with an on-demand bank overdraft risks sudden insolvency if the bank calls in the overdraft, while funding weekly stock with a 10-year loan racks up years of needless interest long after the stock is sold.",
      strategies: [
        "In 9/12-mark finance essays, check 4 things in the case study: **1. Legal structure**, **2. Startup vs established profit**, **3. Existing gearing/debt & interest rates**, **4. Owner's desire to keep control**.",
      ],
      thinkDeeper:
        "Why might a rapidly updating tech design agency prefer **leasing** £120,000 of workstation computers every 24 months rather than buying them via **Hire Purchase**, even if leasing costs slightly more over 4 years?",
    },
    {
      id: "cash-flow-forecasting",
      heading: "Cash vs profit & 6-month cash-flow forecasts",
      discovery: {
        problem:
          "In March, *Apex Catering* signs a £40,000 corporate banquet contract, spends £22,000 cash immediately on lobster, staff wages and van fuel, and delivers the banquet on 28 March. The corporate client has **60-day trade credit terms** (paying in late May). Calculate *Apex*'s **March profit** vs *Apex*'s **March net cash flow** — and explain how a profitable firm can go bust!",
        idea:
          "**March Profit** = Revenue (£40,000 earned when delivered) − Costs (£22,000) = **+£18,000 profit**! Yet **March Cash Inflow** = **£0** (client pays in May!) while **March Cash Outflow** = **£22,000**, giving **March Net Cash Flow = −£22,000**! If *Apex* lacks cash reserves or an overdraft in March, wages and rent bounce and the business becomes **insolvent** despite £18,000 profit!",
      },
      body: `### Cash vs Profit — The #1 Edexcel 4BS1 Finance Distinction
- **Cash** is the **liquid money** sitting in the business's bank account and tills right now to pay immediate bills.
- **Profit** = **Total Revenue − Total Costs** recorded over an accounting period when sales are *agreed/invoiced* (even if customers haven't paid cash yet!).
- **Three reasons Cash ≠ Profit in a month**:
  1. **Credit sales / Trade credit**: Revenue is booked today (+Profit), but cash arrives 30–90 days later (£0 Cash now).
  2. **Capital expenditure / Loan principal**: Buying a £30,000 van cash drains £30,000 from the bank today, whereas only annual depreciation hits the income statement.
  3. **Timing of bulk inventory**: Paying cash upfront in September for Christmas stock creates a huge September cash outflow before December sales occur.

### Reading & Completing a 6-Month Cash-Flow Forecast
Watch **brackets ( )** carefully on Edexcel exam tables: **(1,400) means −£1,400 (a negative figure / deficit)!**

- **Total Cash Inflows (Receipts)**: Cash sales, receipts from trade receivables, loan/share cash received, asset sales.
- **Total Cash Outflows (Payments)**: Raw materials, wages, rent, utilities, loan repayments, tax, equipment purchases.
- **Three Golden Cash-Flow Equations**:
  1. **{{"Net Cash Flow" = "Total Cash Inflows" - "Total Cash Outflows"}}**
  2. **{{"Closing Balance" = "Opening Balance" + "Net Cash Flow"}}**
  3. **{{"Opening Balance (Month t)" = "Closing Balance (Month t - 1)"}}** *(The chain rule!)*

| (£) | Jan | Feb | Mar | Apr | May | Jun |
|---|---|---|---|---|---|---|
| **Opening Balance** | 2,500 | 3,700 | 1,400 | **(1,800)** | (300) | 3,900 |
| **Total Cash Inflows** | 9,200 | 7,500 | 6,800 | 10,500 | 13,200 | 14,000 |
| **Total Cash Outflows** | 8,000 | 9,800 | 10,000 | 9,000 | 9,000 | 9,500 |
| **Net Cash Flow** | 1,200 | (2,300) | (3,200) | 1,500 | 4,200 | 4,500 |
| **Closing Balance** | 3,700 | 1,400 | **(1,800)** | (300) | 3,900 | 8,400 |

Notice **April**: even though April's **Net Cash Flow is positive (+£1,500)**, April's **Closing Balance is still negative (300) (−£300)** because April started with March's overdrawn Opening Balance of **−£1,800** ({{-1800 + 1500 = -300}})!

### How to Solve a Forecast Cash Deficit
1. **Arrange a bank overdraft** in advance (proving foresight to the bank manager!).
2. **Shorten customer credit terms** / offer small early-payment discounts / use **debt factoring** to speed inflows.
3. **Negotiate longer trade credit** (e.g. 60 days instead of 30) with suppliers or **delay non-urgent capital purchases** / lease instead of buying outright.`,
      diagram: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six-month Cash-Flow Closing Balance timeline showing seasonal overdraft dip in March and April before recovery">
  <rect x="0" y="0" width="680" height="260" rx="14" fill="var(--surface-2)" />
  <text x="340" y="26" font-size="13.5" font-weight="800" text-anchor="middle" fill="var(--ink)">6-Month Closing Cash Balance Trajectory &amp; Overdraft Danger Zone</text>

  <rect x="65" y="170" width="575" height="58" fill="var(--bad-soft)" opacity="0.7" />
  <text x="630" y="218" font-size="10" font-weight="700" text-anchor="end" fill="var(--bad)">NEGATIVE CLOSING BALANCE = OVERDRAFT NEEDED</text>

  <line x1="65" y1="45" x2="65" y2="228" stroke="var(--ink-2)" stroke-width="1.8" />
  <line x1="65" y1="170" x2="640" y2="170" stroke="var(--ink)" stroke-width="2" />
  <text x="56" y="174" font-size="10.5" font-weight="800" text-anchor="end" fill="var(--ink)">£0</text>
  <text x="56" y="64" font-size="10" text-anchor="end" fill="var(--ink-2)">+£8k</text>
  <text x="56" y="117" font-size="10" text-anchor="end" fill="var(--ink-2)">+£4k</text>
  <text x="56" y="210" font-size="10" text-anchor="end" fill="var(--bad)">−£2k</text>

  <polyline points="110,121 202,151 294,194 386,174 478,118 570,58" fill="none" stroke="var(--brand)" stroke-width="3.2" />

  <circle cx="110" cy="121" r="6" fill="var(--good)" />
  <text x="110" y="109" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">£3,700</text>
  <text x="110" y="246" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Jan</text>

  <circle cx="202" cy="151" r="6" fill="var(--good)" />
  <text x="202" y="139" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">£1,400</text>
  <text x="202" y="246" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Feb</text>

  <circle cx="294" cy="194" r="6.5" fill="var(--bad)" />
  <text x="294" y="213" font-size="10" font-weight="800" text-anchor="middle" fill="var(--bad)">(£1,800)</text>
  <text x="294" y="246" font-size="11" font-weight="700" text-anchor="middle" fill="var(--bad)">Mar</text>

  <circle cx="386" cy="174" r="6.5" fill="var(--bad)" />
  <text x="386" y="192" font-size="10" font-weight="800" text-anchor="middle" fill="var(--bad)">(£300)</text>
  <text x="386" y="246" font-size="11" font-weight="700" text-anchor="middle" fill="var(--bad)">Apr</text>

  <circle cx="478" cy="118" r="6" fill="var(--good)" />
  <text x="478" y="105" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">£3,900</text>
  <text x="478" y="246" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">May</text>

  <circle cx="570" cy="58" r="6" fill="var(--good)" />
  <text x="570" y="48" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">£8,400</text>
  <text x="570" y="246" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Jun</text>
</svg>`,
      diagramCaption:
        "A 6-month forecast spots March and April's temporary liquidity deficit months in advance so the firm can arrange a £2,000 overdraft calmly before cheques bounce.",
      workedExamples: [
        {
          title: "Solving Missing Cells with Negative (Bracketed) Balances",
          problem:
            "In October, a surf shop's **Opening Balance** is **(£1,200)** [i.e. −£1,200], **Total Cash Inflows** are **£8,500**, and **Total Cash Outflows** are **£6,900**. Calculate October's **Net Cash Flow**, October's **Closing Balance**, and November's **Opening Balance**.",
          steps: [
            "October Net Cash Flow = Inflows − Outflows = {{8500 - 6900 = 1600}} (+£1,600).",
            "October Closing Balance = Opening Balance + Net Cash Flow = {{-1200 + 1600 = 400}} (+£400).",
            "November Opening Balance = October Closing Balance = **£400**.",
          ],
          answer: "Net Cash Flow = £1,600; October Closing Balance = £400; November Opening Balance = £400",
          yourTurn: {
            question:
              "In February, a florist has an **Opening Balance** of **−£900** [shown as `(900)`], **Cash Inflows** of **£7,400**, and **Cash Outflows** of **£5,800**. Calculate February's **Closing Balance** in £.",
            answer: { type: "number", value: 700, display: "£700" },
            solution:
              "Net Cash Flow = £7,400 − £5,800 = +£1,600. Closing Balance = −£900 + £1,600 = £700.",
          },
        },
        {
          title: "Working Backwards to Find Missing Outflows",
          problem:
            "In August, a glamping site starts with an **Opening Balance** of **£3,400**, receives **Cash Inflows** of **£11,000**, and finishes August with a **Closing Balance** of **£5,100**. Calculate August's **Total Cash Outflows**.",
          steps: [
            "Find August Net Cash Flow from Closing − Opening: {{5100 - 3400 = 1700}} (+£1,700).",
            "Since {{1700 = 11000 - \"Outflows\"}}, rearrange: {{\"Outflows\" = 11000 - 1700 = 9300}} (£9,300).",
          ],
          answer: "£9,300",
          yourTurn: {
            question:
              "In May, a bike shop has an **Opening Balance** of **£2,100**, **Cash Inflows** of **£9,500**, and a **Closing Balance** of **£1,300**. Calculate May's **Total Cash Outflows** in £.",
            answer: { type: "number", value: 10300, display: "£10,300" },
            solution:
              "Net Cash Flow = £1,300 − £2,100 = −£800. Therefore £9,500 − Outflows = −£800 → Outflows = £9,500 + £800 = £10,300.",
          },
        },
      ],
      keyPoints: [
        "**Cash ≠ Profit**: A profitable business **overtrading** on generous credit terms can run out of liquid cash and become **insolvent**.",
        "**Brackets `(2,500)`** in an Edexcel table ALWAYS mean **negative `−£2,500`**.",
        "**Next month's Opening Balance** ALWAYS equals **previous month's Closing Balance**.",
        "**Limitation of cash-flow forecasts**: Figures are **estimates** vulnerable to unexpected external shocks (inflation spikes, rival price wars, late-paying debtors, machine breakdowns).",
      ],
      whyItWorks:
        "Suppliers, landlords and HMRC refuse to accept 'unpaid customer invoices' as legal tender — tracking the exact calendar week cash enters and leaves the current account prevents accidental insolvency.",
      strategies: [
        "Rewrite every `(X)` as `−X` on rough paper BEFORE adding Opening Balance + Net Cash Flow so you never flip signs!",
      ],
      thinkDeeper:
        "Why is rapid sales growth ('overtrading') paradoxically one of the most dangerous moments for a small manufacturer's cash balance?",
    },
    {
      id: "costs-revenue-profit",
      heading: "Fixed, variable & total costs, revenue and profit",
      discovery: {
        problem:
          "A gelato kiosk pays £2,400/month rent and salaries, and spends £0.80 per scoop on milk, waffle cones and spoons. In rainy November it sells 1,000 scoops; in sunny July it sells 6,000 scoops. Without raising prices, why does the **average total cost per scoop** plummet from **£3.20** in November down to **£1.20** in July?",
        idea:
          "**Variable cost per scoop** stays £0.80 in both months, while **Fixed Costs** stay £2,400 regardless of output! In November, £2,400 ÷ 1,000 = £2.40 fixed cost per scoop (`£2.40 + £0.80 = £3.20`). In July, £2,400 is **spread across 6,000 scoops** (£2,400 ÷ 6,000 = £0.40 fixed cost per scoop → `£0.40 + £0.80 = £1.20`), slashing unit cost!",
      },
      body: `Every profitability and break-even question in Edexcel 4BS1 builds on six exact cost and revenue definitions:

| Concept | Definition & Examples | Exact Formula |
|---|---|---|
| **Fixed Costs (FC)** | Overheads that **do NOT change** with output in the short run (paid even if output = 0!). *Examples: rent, business rates, management salaries, insurance, loan interest, depreciation.* | Horizontal flat line at £FC |
| **Variable Costs (VC)** | Costs that **change in direct proportion** to output (if output = 0, VC = £0). *Examples: raw materials, packaging, components, piece-rate wages, sales commission.* | {{"Total VC" = "VC per unit" * "Output"}} |
| **Semi-variable Costs** | Carry both a fixed standing charge and a variable usage element (e.g. electricity, mobile phone tariff, van fleet). | Fixed standing fee + usage rate |
| **Total Costs (TC)** | Sum of all fixed and variable costs at a given output level. | {{"TC" = "FC" + "Total VC"}} |
| **Average Unit Cost (AC)** | Cost of producing a single unit on average; falls as output spreads fixed costs (**economies of scale**). | {{"Average Cost" = "Total Cost" / "Output"}} |
| **Total Revenue (TR)** | Total income earned from selling output before deducting any costs (*also called Turnover or Sales Revenue — NEVER call it profit!*). | {{"TR" = "Selling Price" * "Quantity Sold"}} |
| **Profit or Loss** | Surplus (if positive) or loss (if negative) remaining after deducting Total Costs from Total Revenue. | {{"Profit" = "TR" - "TC"}} |`,
      diagram: `<svg viewBox="0 0 680 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cost behaviour graph showing flat Fixed Costs, rising Variable Costs from origin, and Total Costs starting at Fixed Costs">
  <rect x="0" y="0" width="680" height="255" rx="14" fill="var(--surface-2)" />
  <text x="340" y="25" font-size="13.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Behaviour of Fixed Costs (FC), Variable Costs (VC) &amp; Total Costs (TC = FC + VC)</text>

  <line x1="75" y1="42" x2="75" y2="216" stroke="var(--ink)" stroke-width="2" />
  <line x1="75" y1="216" x2="615" y2="216" stroke="var(--ink)" stroke-width="2" />
  <text x="345" y="242" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Output (Units Produced)</text>
  <text x="26" y="132" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)" transform="rotate(-90 26 132)">Costs (£)</text>

  <line x1="75" y1="158" x2="585" y2="158" stroke="#d97706" stroke-width="3" stroke-dasharray="7,4" />
  <text x="590" y="162" font-size="11" font-weight="800" fill="#d97706">FC (Flat)</text>
  <text x="68" y="162" font-size="10" font-weight="700" text-anchor="end" fill="#d97706">£FC</text>
  <text x="68" y="220" font-size="10" font-weight="700" text-anchor="end" fill="var(--ink)">£0</text>

  <line x1="75" y1="216" x2="585" y2="108" stroke="#0d9488" stroke-width="2.8" />
  <text x="590" y="112" font-size="11" font-weight="800" fill="#0d9488">VC</text>

  <line x1="75" y1="158" x2="585" y2="50" stroke="var(--bad)" stroke-width="3.2" />
  <text x="590" y="54" font-size="11" font-weight="800" fill="var(--bad)">TC = FC + VC</text>

  <circle cx="75" cy="158" r="5.5" fill="var(--bad)" />
  <rect x="115" y="54" width="235" height="46" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5" />
  <text x="232" y="72" font-size="10.5" font-weight="800" text-anchor="middle" fill="var(--bad)">Crucial Graph Rule: At Output = 0,</text>
  <text x="232" y="89" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink)">TC starts at £FC (NEVER at £0!)</text>
</svg>`,
      diagramCaption:
        "Because Fixed Costs are paid even at zero output, the Total Cost (TC) line starts on the vertical axis at £FC and runs parallel to Variable Costs (VC).",
      workedExamples: [
        {
          title: "Full Cost, Revenue, Profit & Average Cost Breakdown",
          problem:
            "A candle workshop has monthly **Fixed Costs of £3,600**, **Variable Cost of £4.50 per candle**, and sells each candle for **£12.00**. In November it makes and sells **800 candles**. Calculate: (a) **Total Costs**, (b) **Average Cost per candle**, (c) **Total Revenue**, and (d) **Monthly Profit**.",
          steps: [
            "(a) Total Variable Costs = {{800 * 4.50 = 3600}} (£3,600); Total Costs = {{3600 + 3600 = 7200}} (£7,200).",
            "(b) Average Cost per candle = {{7200 / 800 = 9.00}} (£9.00 per candle).",
            "(c) Total Revenue = {{800 * 12.00 = 9600}} (£9,600).",
            "(d) Monthly Profit = {{9600 - 7200 = 2400}} (£2,400).",
          ],
          answer: "TC = £7,200; AC = £9.00; TR = £9,600; Profit = £2,400",
          yourTurn: {
            question:
              "A skateboard maker has monthly **Fixed Costs of £4,200**, **Variable Cost of £18 per board**, and sells **500 boards** at **£35 each**. Calculate the monthly **Profit** in £.",
            answer: { type: "number", value: 4300, display: "£4,300" },
            solution:
              "TR = 500 × £35 = £17,500. Total VC = 500 × £18 = £9,000. TC = £4,200 + £9,000 = £13,200. Profit = £17,500 − £13,200 = £4,300.",
          },
        },
      ],
      keyPoints: [
        "**Fixed Costs** stay constant as output changes (in the short run); **Variable Costs** equal `VC per unit × Output`.",
        "At **zero output**, `VC = £0`, so **`TC = FC`** — never draw TC starting at the origin!",
        "**Revenue** (`Price × Quantity`) is top-line sales inflow; **Profit** (`TR − TC`) is what remains after all costs.",
        "**Average Unit Cost** (`TC ÷ Output`) falls as output rises because fixed overheads are spread across more units.",
      ],
      whyItWorks:
        "Separating fixed overheads from per-unit variable costs reveals whether a loss-making product is genuinely unviable (Price < VC) or simply needs higher sales volume to cover fixed rent (Price > VC).",
      strategies: [
        "Watch time periods in Edexcel stems! If Rent is given **per month** (£2,000/mo) and the question asks for **annual** Total Cost, multiply Fixed Costs by **12** first!",
      ],
      thinkDeeper:
        "Are 'Fixed Costs' truly fixed forever? What happens to factory rent if output expands beyond 100% capacity and the firm must rent a second warehouse ('stepped fixed costs')?",
    },
    {
      id: "breakeven-calculation",
      heading: "Contribution & break-even output calculations",
      discovery: {
        problem:
          "A smoothie stall pays **£1,800/month** rent (Fixed Costs). Each smoothie sells for **£5.00** and uses **£2.00** of fruit and cup (Variable Cost). A hurried student divides £1,800 ÷ £5.00 = **360 smoothies** and claims the stall breaks even at 360 smoothies! Check the profit at 360 smoothies to expose the trap, then find the true break-even output.",
        idea:
          "At 360 smoothies, Revenue = `360 × £5 = £1,800`, which barely pays the rent — leaving **£0** for the `360 × £2 = £720` of fruit! The stall suffers a **£720 loss**! Each £5 smoothie must pay its own £2 fruit cost FIRST, leaving **£3.00 of Contribution per unit** (`SP − VC`) towards paying off the £1,800 Fixed Costs: `£1,800 ÷ £3.00 = 600 smoothies`!",
      },
      body: `### Contribution: The Building Block of Break-Even
- **Contribution per unit** = **{{"Selling Price (SP)" - "Variable Cost per unit (VC)"}}**
  - *Meaning*: How much each unit sold **contributes** first towards paying off **Fixed Costs**, and — once Fixed Costs are covered — directly into **Profit**!
- **Total Contribution** = **{{"Contribution per unit" * "Quantity Sold"}}** (or **Total Revenue − Total Variable Costs**).
- **Shortcut Profit Equation**: **{{"Profit" = "Total Contribution" - "Fixed Costs"}}**.

### Break-Even Output & Target-Profit Output Formulas
**Break-even** is the exact level of output where **Total Revenue = Total Costs** (making **£0 profit and £0 loss**).

| Target | Exact Edexcel 4BS1 Formula | Rounding Rule |
|---|---|---|
| **Break-Even Output (units)** | {{"Fixed Costs" / ("Selling Price" - "Variable Cost per unit")}} | If you get a decimal (e.g. **416.2** cakes), **round UP to the next whole unit (417)** to avoid a tiny loss (unless asked to 2 d.p.)! |
| **Break-Even Revenue (£)** | {{"Break-Even Output" * "Selling Price"}} | Total £ sales at the break-even point. |
| **Output for Target Profit** | {{("Fixed Costs" + "Target Profit") / "Contribution per unit"}} | Treat Target Profit like an extra fixed hurdle that Contribution bricks must stack up to cover! |`,
      diagram: `<svg viewBox="0 0 680 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual breakdown of Selling Price into Variable Cost and Contribution per unit stacking to cover Fixed Costs">
  <rect x="0" y="0" width="680" height="235" rx="14" fill="var(--surface-2)" />
  <text x="340" y="26" font-size="13.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Why You MUST Divide Fixed Costs by Contribution (SP − VC), Never SP!</text>

  <rect x="34" y="54" width="160" height="154" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" />
  <text x="114" y="74" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--ink)">1 Unit Sold (SP = £15)</text>
  <rect x="52" y="86" width="124" height="62" rx="6" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2" />
  <text x="114" y="112" font-size="11" font-weight="800" text-anchor="middle" fill="var(--good)">Contribution = £9</text>
  <text x="114" y="130" font-size="9.5" text-anchor="middle" fill="var(--ink)">(Pays Fixed Costs!)</text>
  <rect x="52" y="154" width="124" height="42" rx="6" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.8" />
  <text x="114" y="179" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--bad)">Variable Cost = £6</text>

  <line x1="206" y1="125" x2="254" y2="125" stroke="var(--good)" stroke-width="3" />
  <polygon points="254,125 242,118 242,132" fill="var(--good)" />

  <rect x="266" y="54" width="380" height="154" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="2" />
  <text x="456" y="76" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">Stacking £9 Contribution Bricks to Cover £36,000 Fixed Costs</text>
  <text x="456" y="108" font-size="13" font-weight="800" text-anchor="middle" fill="var(--brand)">Break-Even = £36,000 ÷ (£15 − £6) = 4,000 units</text>
  <text x="456" y="136" font-size="11" text-anchor="middle" fill="var(--ink-2)">• Units 1 to 4,000: every £9 brick pays off the £36,000 Fixed Costs</text>
  <text x="456" y="158" font-size="11" font-weight="700" text-anchor="middle" fill="var(--good)">• Unit 4,001 onwards: every £9 brick becomes PURE PROFIT!</text>
  <text x="456" y="186" font-size="10.5" font-weight="800" text-anchor="middle" fill="var(--bad)">TRAP: £36,000 ÷ £15 = 2,400 units loses £14,400!</text>
</svg>`,
      diagramCaption:
        "Every unit's Variable Cost (£6) is already spoken for by materials; only the £9 Contribution brick (`SP − VC`) is left to chip away at Fixed Costs.",
      workedExamples: [
        {
          title: "Break-Even Output & Target-Profit Output",
          problem:
            "A phone-case printer has monthly **Fixed Costs of £6,300**, **Variable Cost per case of £3.00**, and a **Selling Price of £10.00**. Calculate: (a) **Contribution per case**, (b) **Break-even output**, and (c) the monthly output needed to earn a **target profit of £2,800**.",
          steps: [
            "(a) Contribution per case = {{10.00 - 3.00 = 7.00}} (£7.00).",
            "(b) Break-even output = {{6300 / 7.00 = 900}} cases.",
            "(c) Target-profit output = {{(6300 + 2800) / 7.00 = 9100 / 7 = 1300}} cases.",
          ],
          answer: "Contribution = £7.00; Break-even = 900 cases; Output for £2,800 profit = 1,300 cases",
          yourTurn: {
            question:
              "A tote-bag studio has monthly **Fixed Costs of £4,800**, **Variable Cost of £4 per bag**, and **Selling Price of £12 per bag**. Calculate the **break-even output** in bags.",
            answer: { type: "number", value: 600, display: "600 bags" },
            solution:
              "Contribution per bag = £12 − £4 = £8. Break-even output = £4,800 ÷ £8 = 600 bags.",
          },
        },
        {
          title: "Working Backwards from Break-Even to Find Selling Price",
          problem:
            "A artisan jam maker has annual **Fixed Costs of £18,000** and **Variable Cost of £1.50 per jar**. She wants to **break even at 6,000 jars**. What **Selling Price per jar** must she charge?",
          steps: [
            "Required Contribution per jar = {{\"Fixed Costs\" / \"Break-Even Output\" = 18000 / 6000 = 3.00}} (£3.00).",
            "Since {{\"SP\" - 1.50 = 3.00}}, Selling Price = {{3.00 + 1.50 = 4.50}} (**£4.50** per jar).",
          ],
          answer: "£4.50 per jar",
          yourTurn: {
            question:
              "A water-bottle brand has monthly **Fixed Costs of £10,000**, **Variable Cost of £5 per bottle**, and wants to **break even at 1,000 bottles**. What **Selling Price** (in £) must it set?",
            answer: { type: "number", value: 15, display: "£15" },
            solution:
              "Needed Contribution per bottle = £10,000 ÷ 1,000 = £10. Selling Price = £10 + £5 = £15.",
          },
        },
      ],
      keyPoints: [
        "**Contribution per unit** = `Selling Price − Variable Cost per unit` (**never** confuse with profit per unit!).",
        "**Break-Even Output** = `Fixed Costs ÷ Contribution per unit`.",
        "Once break-even is reached, **every extra unit sold adds `Contribution per unit` straight to Profit** (`Profit = Margin of Safety × Contribution per unit`!).",
        "If `Fixed Costs ÷ Contribution` is non-integer for whole items (e.g. `312.4` kayaks), **313 kayaks** are required so Revenue ≥ Total Costs.",
      ],
      whyItWorks:
        "At output `Q`, `Profit = Q × SP − (FC + Q × VC) = Q × (SP − VC) − FC`. Setting `Profit = 0` immediately yields `Q = FC ÷ (SP − VC)`!",
      strategies: [
        "Write `C = SP − VC` on your exam script FIRST before touching `FC` — this single habit eliminates the #1 calculation error in IGCSE Business!",
      ],
      thinkDeeper:
        "Suppose a hotel room sits empty tonight at 9 PM. Fixed hotel costs are £10,000/night (equivalent to £100/room), and laundry/cleaning Variable Cost is £18. If a last-minute walk-in guest offers £55, does accepting £55 *increase* or *decrease* tonight's total hotel profit?",
    },
    {
      id: "breakeven-charts-mos",
      heading: "Break-even charts, margin of safety & evaluation",
      discovery: {
        problem:
          "Two cafés both forecast selling **1,000 coffees a day**. Café Alpha breaks even at **950 coffees/day**; Café Beta breaks even at **550 coffees/day**. If roadworks outside cut footfall by **20%** for a month, what happens to each café — and which exact metric measures this survival buffer?",
        idea:
          "A 20% drop cuts sales from 1,000 to **800 coffees/day**. Café Alpha plunges **150 coffees below** its 950 break-even into **loss**, whereas Café Beta stays **250 coffees above** its 550 break-even in **profit**! That buffer is the **Margin of Safety** (`Actual/Forecast Output − Break-Even Output`): Alpha's tiny **50-coffee** Margin of Safety left it fragile, while Beta's **450-coffee** Margin of Safety absorbed the shock.",
      },
      body: `### Reading & Drawing a Break-Even Chart
1. **Horizontal axis (x)**: Output / Units; **Vertical axis (y)**: Costs & Revenue (£).
2. **Fixed Cost (FC) line**: Horizontal flat line starting at **(0, FC)**.
3. **Total Cost (TC) line**: Starts at **(0, FC)** and slopes upwards ({{TC = FC + VC * Q}}).
4. **Total Revenue (TR) line**: Starts at the **origin (0, 0)** and slopes upwards more steeply than TC ({{TR = SP * Q}}).
5. **Break-Even Point (BEP)**: The exact **intersection of TR and TC**! Drop down to the x-axis for **Break-Even Output**, and read across to the y-axis for **Break-Even Revenue (£)**.
6. **Loss Wedge** (left of BEP, where **TC > TR**) vs **Profit Wedge** (right of BEP, where **TR > TC**).

### Margin of Safety (MoS)
- **Formula**: **{{"Margin of Safety" = "Actual (or Forecast) Output" - "Break-Even Output"}}**
- **Shortcut Profit Check**: **{{"Profit" = "Margin of Safety" * "Contribution per unit"}}**!

### How Cost & Price Shocks Shift the Chart
| Business Change | Which Line Moves? | Effect on Break-Even Output & Margin of Safety |
|---|---|---|
| **Selling Price rises** *(assuming demand holds)* | **TR pivots steeper** upwards from **(0,0)** | Contribution rises → **BEP falls** (shifts left) → **MoS widens**. *(Caveat: price-elastic demand may shrink actual sales!)* |
| **Fixed Costs rise** *(e.g. rent hike)* | **FC & TC shift parallel UP** | **BEP rises** (shifts right) → **MoS shrinks**. |
| **Variable Cost per unit rises** *(e.g. raw materials up)* | **TC pivots steeper** upwards from **(0, FC)** | Contribution shrinks → **BEP rises** (shifts right) → **MoS shrinks**. |

### Grade 9 Evaluation: Limitations of Break-Even Analysis (AO4)
1. **Assumes every unit produced is sold** (zero unsold stock / wastage — unrealistic in fashion or fresh food!).
2. **Assumes straight linear TR and TC lines** — in reality, firms cut prices to sell higher volume (curving TR down) and win **bulk-buying discounts** at high output (flattening TC) or hit overtime/capacity steps.
3. **Single-product model** — awkward for multi-product supermarkets selling thousands of lines with different margins.
4. **Static snapshot based on forecasts** — garbage-in, garbage-out if demand or cost estimates prove inaccurate.`,
      diagram: `<svg viewBox="0 0 680 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Annotated Break-Even Chart showing Fixed Costs, Total Costs, Total Revenue, Break-Even Point at 400 units, Loss and Profit wedges, and Margin of Safety to 700 units">
  <rect x="0" y="0" width="680" height="285" rx="14" fill="var(--surface-2)" />
  <text x="340" y="24" font-size="13.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Break-Even Chart: FC = £4,000 · VC = £10/u · SP = £20/u · Forecast = 700 units</text>

  <polygon points="80,180 320,132 80,228" fill="#c2410c" opacity="0.16" />
  <polygon points="320,132 500,60 500,96" fill="#15803d" opacity="0.20" />

  <line x1="80" y1="38" x2="80" y2="228" stroke="var(--ink)" stroke-width="2" />
  <line x1="80" y1="228" x2="610" y2="228" stroke="var(--ink)" stroke-width="2" />
  <text x="345" y="274" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Output (Units)</text>
  <text x="24" y="136" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)" transform="rotate(-90 24 136)">Costs &amp; Revenue (£)</text>

  <line x1="80" y1="180" x2="580" y2="180" stroke="#d97706" stroke-width="2.4" stroke-dasharray="6,4" />
  <text x="585" y="184" font-size="10.5" font-weight="800" fill="#d97706">FC (£4k)</text>
  <text x="72" y="184" font-size="9.5" font-weight="700" text-anchor="end" fill="#d97706">£4k</text>
  <text x="72" y="136" font-size="9.5" font-weight="700" text-anchor="end" fill="var(--brand)">£8k</text>
  <text x="72" y="231" font-size="9.5" font-weight="700" text-anchor="end" fill="var(--ink)">£0</text>

  <line x1="80" y1="180" x2="560" y2="84" stroke="var(--bad)" stroke-width="2.8" />
  <text x="565" y="88" font-size="11" font-weight="800" fill="var(--bad)">TC</text>

  <line x1="80" y1="228" x2="530" y2="48" stroke="var(--good)" stroke-width="3" />
  <text x="536" y="52" font-size="11" font-weight="800" fill="var(--good)">TR</text>

  <line x1="320" y1="132" x2="320" y2="228" stroke="var(--brand)" stroke-width="1.8" stroke-dasharray="4,3" />
  <line x1="80" y1="132" x2="320" y2="132" stroke="var(--brand)" stroke-width="1.8" stroke-dasharray="4,3" />
  <circle cx="320" cy="132" r="6.5" fill="var(--brand)" />
  <text x="312" y="118" font-size="11" font-weight="800" text-anchor="end" fill="var(--brand)">BEP (400u, £8k)</text>
  <text x="320" y="244" font-size="10" font-weight="800" text-anchor="middle" fill="var(--brand)">400</text>

  <line x1="500" y1="60" x2="500" y2="228" stroke="var(--good)" stroke-width="1.8" stroke-dasharray="4,3" />
  <text x="500" y="244" font-size="10" font-weight="800" text-anchor="middle" fill="var(--good)">700</text>

  <line x1="322" y1="255" x2="498" y2="255" stroke="var(--good)" stroke-width="3.5" />
  <text x="410" y="266" font-size="10" font-weight="800" text-anchor="middle" fill="var(--good)">Margin of Safety = 300u</text>

  <text x="165" y="188" font-size="10.5" font-weight="800" fill="var(--bad)">LOSS</text>
  <text x="452" y="96" font-size="10.5" font-weight="800" fill="var(--good)">PROFIT (£3k)</text>
</svg>`,
      diagramCaption:
        "Break-Even Point sits where TR crosses TC at 400 units (£8,000); operating at 700 units creates a 300-unit Margin of Safety and £3,000 profit (`300 × £10 contribution`).",
      workedExamples: [
        {
          title: "Break-Even, Margin of Safety & Profit Check",
          problem:
            "A kayak rental hub has seasonal **Fixed Costs of £12,000**, **Variable Cost of £8 per booking**, **Selling Price of £28 per booking**, and forecasts **850 bookings**. Calculate: (a) **Break-even bookings**, (b) **Margin of Safety**, and (c) **Forecast Profit**.",
          steps: [
            "(a) Contribution per booking = {{28 - 8 = 20}} (£20); Break-even = {{12000 / 20 = 600}} bookings.",
            "(b) Margin of Safety = Actual/Forecast − Break-even = {{850 - 600 = 250}} bookings.",
            "(c) Forecast Profit = Margin of Safety × Contribution = {{250 * 20 = 5000}} (£5,000) — check: `TR (£23,800) − TC (£18,800) = £5,000`!",
          ],
          answer: "Break-even = 600 bookings; Margin of Safety = 250 bookings; Profit = £5,000",
          yourTurn: {
            question:
              "A ceramic planter maker has monthly **Fixed Costs of £5,400**, **Variable Cost of £6 per planter**, **Selling Price of £15 per planter**, and sells **780 planters** in May. Calculate the **Margin of Safety** in planters.",
            answer: { type: "number", value: 180, display: "180 planters" },
            solution:
              "Contribution = £15 − £6 = £9. Break-even = £5,400 ÷ £9 = 600 planters. Margin of Safety = 780 − 600 = 180 planters.",
          },
        },
      ],
      keyPoints: [
        "**Break-Even Point** is where `TR` intersects `TC` (`Profit = £0`).",
        "**Margin of Safety** = `Actual/Forecast Output − Break-Even Output` (how far sales can fall before losses begin).",
        "Higher `FC` or higher `VC` **raises** break-even and **shrinks** Margin of Safety; higher `SP` **lowers** break-even (if quantity holds).",
        "Always evaluate break-even's **unrealism**: assumes `Output = Sales`, constant single price, and strictly linear variable costs without bulk discounts.",
      ],
      whyItWorks:
        "Visualising TR and TC together turns abstract cost spreadsheets into an instant 'what-if' stress test that banks demand inside startup business plans before approving loans.",
      strategies: [
        "Double-check your Profit answer two ways in the exam: `TR − TC` AND `Margin of Safety × Contribution per unit` — if both match, your arithmetic is 100% bulletproof!",
      ],
      thinkDeeper:
        "If a luxury chocolatier raises Selling Price by 25%, Break-Even Output falls sharply on paper — yet actual Margin of Safety could turn *negative*! Explain how Price Elasticity of Demand causes this paradox.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Why is Cash NOT the same as Profit?",
        back: "**Profit** = `Total Revenue − Total Costs` recorded when sales are invoiced. **Cash** is actual liquid money in the bank now. Credit sales (paid 60 days later), upfront stock buying and capital asset purchases make monthly Cash ≠ Profit!",
      },
      {
        front: "State the three golden equations of a Cash-Flow Forecast.",
        back: "1. `Net Cash Flow = Cash Inflows − Cash Outflows`\n2. `Closing Balance = Opening Balance + Net Cash Flow`\n3. `Next Month's Opening Balance = Previous Month's Closing Balance`",
      },
      {
        front: "What do brackets like `(1,850)` mean in an Edexcel cash-flow table?",
        back: "A **negative figure (`−£1,850`)** — either a negative Net Cash Flow (deficit) or an overdrawn bank balance.",
      },
      {
        front: "Distinguish between Capital Expenditure and Revenue Expenditure.",
        back: "• **Capital expenditure**: Buying non-current assets lasting **> 1 year** (machinery, vans, buildings) → long-term finance.\n• **Revenue expenditure**: Day-to-day running costs (< 1 year: stock, wages, rent, utilities) → short-term finance.",
      },
      {
        front: "Name the three main Internal Sources of Finance.",
        back: "1. **Owner's personal savings** (startups)\n2. **Retained profit** (established profitable firms)\n3. **Sale of surplus assets** (one-off cash from unused equipment/land)",
      },
      {
        front: "Compare a Bank Overdraft with a Bank Loan.",
        back: "• **Overdraft**: Short-term flexible negative current-account facility; daily variable interest; **repayable on demand**.\n• **Bank loan**: Long-term lump sum repaid in fixed monthly instalments + interest over 1–10 years; often needs collateral.",
      },
      {
        front: "What is the key legal difference between Hire Purchase (HP) and Leasing?",
        back: "• **Hire Purchase**: Deposit + monthly instalments; business **owns** the asset after the final payment.\n• **Leasing**: Monthly rental; business **never owns** the asset, *but* lessor usually maintains and upgrades it.",
      },
      {
        front: "Which businesses can issue shares privately vs on a public Stock Exchange?",
        back: "• **Sole traders & partnerships**: **NEVER** (no shares!).\n• **Private Limited Company (Ltd)**: Private share issue to invited investors.\n• **Public Limited Company (Plc) ONLY**: Public Stock Exchange flotation (IPO).",
      },
      {
        front: "Define Fixed Costs, Variable Costs and Total Costs.",
        back: "• **Fixed Costs (FC)**: Do not vary with output (rent, salaries, insurance).\n• **Variable Costs (VC)**: Vary directly with output (`VC per unit × Output`).\n• **Total Costs (TC)** = `FC + Total VC`.",
      },
      {
        front: "State the formula for Contribution per unit and Break-Even Output.",
        back: "• `Contribution per unit = Selling Price − Variable Cost per unit`\n• `Break-Even Output = Fixed Costs ÷ Contribution per unit`",
      },
      {
        front: "State the formula for Output needed to achieve a Target Profit.",
        back: "`Target Profit Output = (Fixed Costs + Target Profit) ÷ Contribution per unit`",
      },
      {
        front: "Define Margin of Safety and state its formula.",
        back: "The amount by which actual/forecast output exceeds break-even output (how far sales can fall before making a loss):\n`Margin of Safety = Actual (or Forecast) Output − Break-Even Output`.",
      },
      {
        front: "Where do the FC, TC and TR lines start on the vertical axis of a Break-Even Chart?",
        back: "• **FC**: Starts at `(0, FC)` and runs horizontally.\n• **TC**: Starts at **`(0, FC)`** and slopes up.\n• **TR**: Starts at **`(0, 0)`** and slopes up steeper than TC.",
      },
      {
        front: "Give three Grade 9 AO4 limitations of Break-Even Analysis.",
        back: "1. Assumes **all output is sold** (zero unsold stock/wastage).\n2. Assumes **linear costs & single price** (ignores bulk discounts and price cuts needed to boost volume).\n3. Based on **forecasts** & best suited to a **single product**.",
      },
      {
        front: "What is Debt Factoring, and what is its main trade-off?",
        back: "Selling unpaid customer invoices (receivables) to a specialist factor for ~85–90% **immediate cash** — solves cash deficits fast, *but* sacrifices 10–15% profit margin to the factor's fee.",
      },
      {
        front: "What is Crowdfunding, and why is it doubly useful for consumer startups?",
        back: "Raising small sums online from thousands of backers (Kickstarter/Crowdcube) — provides startup finance **and** acts as real-world **market research / viral promotion** before mass production.",
      },
    ],
    mustKnow: [
      "Select appropriate **internal vs external** and **short-term vs long-term** finance matched to legal structure (**Paper 1 sole trader/Ltd** vs **Paper 2 Plc**), asset life, gearing and control.",
      "Explain precisely why **Cash ≠ Profit** (credit sales, upfront stock, capital expenditure) and why profitable firms suffer **cash-flow insolvency**.",
      "Complete any missing cell in a **6-month Cash-Flow Forecast** (`Net Cash Flow`, `Opening Balance`, `Closing Balance`, or reverse `Inflows`/`Outflows`), handling `(bracketed)` negative balances accurately.",
      "Recommend and evaluate practical cures for a negative closing cash balance (overdraft, chasing receivables/factoring, extending supplier trade credit, leasing vs buying).",
      "Calculate **Fixed Costs**, **Total Variable Costs**, **Total Costs**, **Average Unit Cost**, **Total Revenue** and **Profit/Loss** cleanly across daily, monthly and annual periods.",
      "Calculate **Contribution per unit (`SP − VC`)**, **Total Contribution**, **Break-Even Output (`FC ÷ Contribution`)**, **Break-Even Revenue** and **Target-Profit Output**.",
      "Construct and interpret **Break-Even Charts** (BEP, Loss/Profit wedges, **Margin of Safety**, and line shifts when `SP`, `FC` or `VC` changes).",
      "Evaluate the **limitations of break-even** (`Output = Sales` assumption, linear lines ignoring bulk discounts/PED, multi-product complexity).",
      "Master **Edexcel 4BS1 Command Words**: *State/Define* (1m), *Calculate* (2m — always write working for method marks!), *Outline* (2m in context), *Explain* (3m AO1+AO3, no context needed), *Analyse* (6m AO2+AO3), *Justify* (9m) & *Evaluate* (12m).",
      "Apply **AJIM** on 9-mark and 12-mark Finance decisions: weigh **interest rates/gearing**, **cash-flow strain**, **ownership dilution** and **short-run vs long-run cost**.",
      "Always check **time-period units** (weekly vs monthly vs 6-month vs annual) before combining Fixed Costs and Variable Costs!",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'Because the company made £50,000 profit this quarter, it definitely has £50,000 cash in the bank to pay suppliers.'",
        right: "Write instead (Grade 9): '**Profit is not cash**: if the £50,000 profit came from **60-day credit sales**, cash inflows have not yet arrived, so the business could still suffer a **negative closing cash balance (insolvency)**.'",
      },
      {
        wrong: "Never write: 'Break-Even Output = Fixed Costs ÷ Selling Price.'",
        right: "Write instead (Grade 9): '**Break-Even Output = Fixed Costs ÷ Contribution per unit (`Selling Price − Variable Cost per unit`)** — each unit must cover its own Variable Cost first!'",
      },
      {
        wrong: "Never write: 'The sole trader café on Paper 1 should raise £30,000 by floating shares on the Stock Exchange.'",
        right: "Write instead (Grade 9): 'A sole trader is **unincorporated** and cannot issue shares (and only **PLCs** can float on a Stock Exchange); instead, recommend a **bank loan**, **hire purchase/leasing**, **crowdfunding** or **taking on a partner**.'",
      },
      {
        wrong: "Never write: 'In April, Opening Balance is `(1,800)` and Net Cash Flow is `1,500`, so Closing Balance is `3,300`.'",
        right: "Write instead (Grade 9): 'Brackets `(1,800)` mean **−£1,800**, so `Closing Balance = −1,800 + 1,500 = −£300` [written `(300)`]!'",
      },
      {
        wrong: "Never write: 'Retained profit is completely free finance with zero disadvantages.'",
        right: "Write instead (Grade 9): 'While retained profit carries **no interest or ownership dilution**, it carries an **opportunity cost** (shareholders receive lower **dividends**, potentially depressing investor satisfaction) and is unavailable to startups.'",
      },
      {
        wrong: "Never write: 'On a break-even chart, the Total Cost line starts at £0 at the origin.'",
        right: "Write instead (Grade 9): 'At zero output, **Fixed Costs must still be paid**, so the **Total Cost (TC) line starts on the vertical axis at £FC**, whereas **Total Revenue (TR)** starts at `(0, 0)`.'",
      },
      {
        wrong: "Never write: 'A business should use a bank overdraft to buy a £100,000 factory machine over 8 years.'",
        right: "Write instead (Grade 9): 'Overdrafts are **high-interest short-term facilities repayable on demand**; multi-year **capital expenditure** should be matched to **long-term finance** such as a bank loan, hire purchase or leasing.'",
      },
      {
        wrong: "Never write: 'Contribution per unit is the exact same thing as profit per unit.'",
        right: "Write instead (Grade 9): '**Contribution (`SP − VC`)** ignores **Fixed Costs** — it first pays off Fixed Costs up to break-even, and only becomes profit *after* Fixed Costs are fully covered.'",
      },
    ],
    examMistakes: [
      "Dividing Fixed Costs by `Selling Price` instead of `Contribution (SP − VC)` on 2-mark Break-Even calculations.",
      "Treating bracketed cash-flow numbers `(2,400)` as positive `+2,400` instead of `−2,400`, wrecking both Closing Balance and next month's Opening Balance!",
      "Forgetting to multiply **monthly Fixed Costs by 12** when revenue and output figures are given **per year**.",
      "Confusing **Total Revenue** (`Price × Quantity`) with **Profit** (`TR − TC`).",
      "Recommending **retained profit** to a brand-new **Paper 1 startup** that hasn't traded for a single day yet!",
      "Recommending **venture capital** or **PLC flotation** without mentioning the **loss/dilution of ownership control** for the founders.",
      "Writing generic pros/cons of a bank loan without mentioning the case study's **existing debt (gearing)** or whether central-bank **interest rates** are rising.",
      "Forgetting that raising Selling Price only lowers Break-Even *if* customers still buy — price-elastic demand can cause actual sales and Margin of Safety to collapse!",
    ],
    mnemonics: [
      {
        topic: "Cash-Flow Forecast Chain",
        device: "I − O = N, then O + N = C (and C slides to next O!)",
        explanation:
          "**I**nflows − **O**utflows = **N**et Cash Flow; **O**pening + **N**et = **C**losing; **C**losing becomes next month's **O**pening!",
      },
      {
        topic: "Break-Even Denominator",
        device: "Cover Your Own Variable First! (FC ÷ [SP − VC])",
        explanation:
          "Never divide FC by SP — subtract VC from SP first to get the **Contribution** brick.",
      },
      {
        topic: "Internal Sources Trio",
        device: "PROS Inside: Profit · Reserves/Savings · Old Assets",
        explanation:
          "**P**rofit retained, **O**wner's **S**avings, and selling **O**ld surplus assets are the 3 internal sources.",
      },
      {
        topic: "HP vs Leasing Ownership",
        device: "Hire Purchase = Home Permanently | Lease = Loaned Equipment",
        explanation:
          "With **HP** you own the asset at the final payment; with a **Lease** ownership stays with the leasing company (who maintains it).",
      },
    ],
    realWorld: [
      {
        title: "Carillion PLC Collapse — Profit on Paper, Cash Broke",
        detail:
          "Construction giant Carillion reported £millions in accounting profits right before collapsing into liquidation with just £29m cash against £7bn liabilities — proving **cash-flow insolvency** kills even FTSE companies when client payments lag!",
        emoji: "🏗️",
      },
      {
        title: "BrewDog 'Equity for Punks' — Crowdfunding + Brand Army",
        detail:
          "Scottish craft brewer BrewDog bypassed traditional banks to raise tens of millions via **equity crowdfunding** from over 200,000 beer fans — turning investors into loyal ambassadors while funding new breweries.",
        emoji: "🍺",
      },
      {
        title: "Ryanair & EasyJet Aircraft Leasing vs Buying",
        detail:
          "Airlines blend long-term **aircraft leasing** (avoiding £80m upfront cash outflow per jet and keeping fleets modern/fuel-efficient) with secured **long-term loans** on core aircraft.",
        emoji: "✈️",
      },
      {
        title: "Seasonal Toy & Ice-Cream Makers — Overdrafts & Trade Credit",
        detail:
          "Toymakers spend heavily on factory inventory from June to October before 65% of cash inflows arrive in November–December — relying on **60-day supplier trade credit** and **seasonal bank overdrafts** to bridge the autumn cash trough.",
        emoji: "🧸",
      },
      {
        title: "Cinema Popcorn & Coffee — High Contribution Covering High Fixed Rent",
        detail:
          "A £5.50 cinema popcorn costs ~£0.50 in maize and tub (`Contribution = £5.00`!), generating massive Contribution bricks to pay off high fixed multiplex rent and film licensing fees.",
        emoji: "🍿",
      },
    ],
    videos: [
      {
        title: "Edexcel IGCSE Business 3.1 Internal & External Sources of Finance",
        channel: "TakingTheBiz / Tutor2u Search",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+business+internal+external+sources+of+finance",
      },
      {
        title: "Cash vs Profit & Completing Cash-Flow Forecasts — IGCSE Business",
        channel: "Tutor2u / Bizconsesh Search",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+business+cash+flow+forecast+cash+vs+profit",
      },
      {
        title: "Fixed Costs, Variable Costs, Total Costs & Revenue — IGCSE Business",
        channel: "Bizconsesh Search",
        url: "https://www.youtube.com/results?search_query=igcse+business+fixed+variable+total+costs+revenue+profit",
      },
      {
        title: "Break-Even Output, Charts & Margin of Safety — Edexcel IGCSE Business",
        channel: "TakingTheBiz / Tutor2u Search",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+business+break+even+charts+margin+of+safety+contribution",
      },
    ],
    formulas: [
      {
        name: "Net Cash Flow (NCF)",
        formula: '{{"Total Cash Inflows" - "Total Cash Outflows"}}',
        note: "Negative NCF is written in brackets on Edexcel tables, e.g. (1,500) = −£1,500.",
      },
      {
        name: "Closing Cash Balance",
        formula: '{{"Opening Balance" + "Net Cash Flow"}}',
        note: "Next month's Opening Balance ALWAYS equals this month's Closing Balance.",
      },
      {
        name: "Total Variable Costs (TVC)",
        formula: '{{"Variable Cost per unit" * "Output"}}',
        note: "Zero at zero output; rises linearly with production volume.",
      },
      {
        name: "Total Costs (TC)",
        formula: '{{"Fixed Costs" + "Total Variable Costs"}}',
        note: "At Output = 0, Total Costs equal Fixed Costs.",
      },
      {
        name: "Average Unit Cost (AC)",
        formula: '{{"Total Costs" / "Output"}}',
        note: "Falls as output increases because Fixed Costs are spread over more units.",
      },
      {
        name: "Total Revenue (TR)",
        formula: '{{"Selling Price" * "Quantity Sold"}}',
        note: "Also called Sales Revenue or Turnover — never confuse with Profit!",
      },
      {
        name: "Profit (or Loss)",
        formula: '{{"Total Revenue" - "Total Costs"}}',
        note: "Equivalently: Total Contribution − Fixed Costs, or Margin of Safety × Contribution per unit.",
      },
      {
        name: "Contribution per Unit",
        formula: '{{"Selling Price" - "Variable Cost per unit"}}',
        note: "Amount each unit contributes towards Fixed Costs and then Profit.",
      },
      {
        name: "Total Contribution",
        formula: '{{"Contribution per unit" * "Quantity Sold"}}',
        note: "Also equals Total Revenue − Total Variable Costs.",
      },
      {
        name: "Break-Even Output (units)",
        formula: '{{"Fixed Costs" / ("Selling Price" - "Variable Cost per unit")}}',
        note: "Where Total Revenue = Total Costs (Profit = £0).",
      },
      {
        name: "Target-Profit Output (units)",
        formula: '{{("Fixed Costs" + "Target Profit") / "Contribution per unit"}}',
        note: "Units needed to cover both Fixed Costs and a desired profit goal.",
      },
      {
        name: "Margin of Safety (units)",
        formula: '{{"Actual (or Forecast) Output" - "Break-Even Output"}}',
        note: "Buffer showing how many units sales can fall before the firm enters a loss.",
      },
    ],
  },
};
