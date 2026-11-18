import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Did you know a FTSE 250 company can report £150 million of accounting profit, pay out millions in shareholder bonuses, and still go bust on a Monday morning because its Acid-Test Ratio quietly collapsed?",
  didYouKnow: [
    "Why it is called the **Acid-Test Ratio**: California Gold Rush miners dropped nitric acid onto nuggets — fake 'fool's gold' fizzed and dissolved while pure gold survived. Stripping **Inventory** out of Current Assets is the financial acid test that dissolves 'fool's liquidity'!",
    "Supermarket giants like **Tesco** and **Costco** often sell an entire pallet of groceries for checkout cash *weeks before* they have to pay the food manufacturer's 60-day invoice — effectively using supplier trade credit as interest-free working capital.",
    "A **50% Gross Profit Margin** requires a **100% Markup** (`£50 cost + £50 GP = £100 price`), whereas a **50% Markup** only delivers a **33.33% Gross Profit Margin** (`£100 cost + £50 GP = £150 price`)!",
    "Published Plc annual reports can exceed **250 pages**, yet institutional analysts can diagnose bloated overheads, window dressing or capital inefficiency in under three minutes using just five ratios: GPM, OPM, ROCE, Current and Acid-Test.",
    "Under UK company law, incorporated **Ltd** and **Plc** businesses must file statutory accounts at **Companies House** where anyone — including curious IGCSE students and rival competitors — can inspect them for free!",
  ],
  activities: [
    {
      title: "High-Street Plc Annual Report Detective",
      emoji: "🕵️‍♀️",
      materials: [
        "Investor Relations webpage of two contrasting Plcs (e.g. Greggs Plc vs Burberry Group Plc)",
        "Calculator & notebook",
      ],
      steps: [
        "Download the latest Statement of Comprehensive Income and Statement of Financial Position for **Greggs** (value bakery) and **Burberry** (luxury fashion).",
        "Compute **Gross Profit Margin**, **Operating Profit Margin**, **ROCE**, **Current Ratio** and **Acid-Test Ratio** (to 2 d.p.) for both companies.",
        "Compare which firm has the wider GPM vs which turns over stock faster with a leaner Acid-Test Ratio.",
        "Write one Grade 9 paragraph explaining why comparing Burberry's GPM directly against Greggs' GPM without business-model context would mislead an investor.",
      ],
      maths:
        "Luxury brands earn high GPM on slow-moving inventory (requiring higher Acid-Test cover), while fast-food bakeries earn high ROCE via rapid daily cash stock turnover.",
    },
    {
      title: "The £10 Smoothie Stand Margin-vs-Markup Challenge",
      emoji: "🥤",
      materials: ["3 household kitchen items with grocery receipt prices", "Sticky notes for selling prices"],
      steps: [
        "Pick a smoothie recipe whose fruit, oat milk and cup cost exactly **£2.40** (Cost of Sales).",
        "Price it using a **150% Markup** (`£2.40 + 1.5 × £2.40 = £6.00`) and calculate the resulting **Gross Profit Margin** (`£3.60 ÷ £6.00 × 100 = 60%`).",
        "Now test what happens if fruit inflation pushes Cost of Sales up to **£3.00** while competition freezes your £6.00 price: recompute both GPM (`50%`) and Markup (`100%`).",
        "Check that in every single case **Markup % > GPM %** whenever Gross Profit is positive!",
      ],
      maths:
        "Demonstrates `GPM = Markup / (100 + Markup) × 100` and why raw-material inflation squeezes margins unless passed on.",
    },
  ],
  history: {
    title: "Fra Luca Pacioli (1494): The Renaissance Friar Who Taught the World to Balance",
    story:
      "In 1494 in Venice — while tutoring his friend **Leonardo da Vinci** in geometry — Franciscan friar **Luca Pacioli** published *Summa de Arithmetica*, containing the first printed manual of Venetian **double-entry bookkeeping**. Pacioli warned merchants that they should never go to sleep at night until debits equalled credits. Five centuries later, every Statement of Financial Position in Edexcel 4BS1 still rests on Pacioli's exact symmetry: **Total Assets − Total Liabilities = Total Equity**.",
  },
};
