import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "When Rolls-Royce unveiled its giant RB211 jet engine in 1971, airlines rushed to place billion-dollar orders — yet the company went bankrupt in weeks because towering R&D cash outflows drained its bank balance long before airlines paid on delivery!",
  didYouKnow: [
    "According to U.S. Bank and UK insolvency studies, **82% of small businesses that fail cite cash-flow problems** — and nearly half were recording an accounting profit on their final tax return!",
    "Supermarket giants like **Tesco and Sainsbury's** collect cash from shoppers at the till in **0 days**, while paying big brand suppliers on **60-day trade credit** — turning negative working capital into an interest-free cash engine!",
    "Smartwatch pioneer **Pebble** broke Kickstarter records in 2012 by raising **$10.3 million via crowdfunding** after traditional venture capitalists turned down its prototype.",
    "Gillette's classic **'razor-and-blades' model** sells the handle near break-even (tiny Contribution) while earning ~80% Contribution margins on replacement blade cartridges to cover global factory Fixed Costs.",
    "Before the Concorde supersonic airliner was retired, its towering fuel Variable Costs meant British Airways raised ticket prices sharply after discovering corporate passengers were **price inelastic** — slashing Break-Even passenger load factors overnight!",
  ],
  activities: [
    {
      title: "Pop-Up Bubble-Tea Stall: Live Break-Even Stress Test",
      emoji: "🧋",
      materials: [
        "Sheet of grid paper + ruler + 3 coloured pens",
        "Calculator",
      ],
      steps: [
        "Price a Saturday school-fair bubble-tea stall: Table hire + blender rental (**Fixed Costs**) = **£60**; tea, tapioca pearls, cup & straw (**Variable Cost**) = **£1.20/cup**; **Selling Price** = **£4.20/cup**.",
        "Calculate **Contribution per cup** (£3.00) and **Break-Even Output** (20 cups), then plot `FC`, `TC` and `TR` up to 50 cups.",
        "**Shock Test**: Rain halves forecast footfall from 45 cups to 22 cups AND ice bags add £12 to Fixed Costs — re-calculate your new Break-Even Output (24 cups) and watch your Margin of Safety flip negative!",
        "Design one pricing or cost-sharing move (e.g. sharing blender hire with a waffle stall) to pull Break-Even back below 22 cups.",
      ],
      maths:
        "Initial `BEP = £60 ÷ (£4.20 − £1.20) = 20 cups` (`MoS = 25 cups`). Adding £12 FC lifts `BEP` to `£72 ÷ £3.00 = 24 cups`, turning 22 cups into a `−£6` loss!",
    },
    {
      title: "The 60-Day Credit Trap: Cash-vs-Profit Card Game",
      emoji: "💳",
      materials: [
        "20 Monopoly notes or coins representing £1,000 each (starting Opening Balance = £6,000)",
        "3 envelopes labelled Month 1, Month 2, Month 3",
      ],
      steps: [
        "Each month you sell 5 units at £3,000 each (**£15,000 Revenue**) and pay £9,000 cash immediately for materials and rent (**+£6,000 Accounting Profit every month!**).",
        "Catch: Customers pay on **60-day credit**, so put Month 1's £15,000 cash receipt inside the **Month 3** envelope!",
        "Pay Month 1's £9,000 cash outflow from your £6,000 pile — watch your cash balance hit **(£3,000)** in Month 1 and **(£12,000)** in Month 2 even though your accountant says you've earned **+£12,000 cumulative profit**!",
      ],
      maths:
        "Proves viscerally why `Profit = +£12,000` across Months 1–2 coexists with `Closing Cash Balance = −£12,000` until Month 3 receivables arrive.",
    },
  ],
  history: {
    title: "Walter Rautenstrauch & The Birth of the 'Break-Even Chart' (1920s)",
    story:
      "During the 1920–21 industrial recession, Columbia University engineering professor **Walter Rautenstrauch** noticed factory owners slashing prices blindly to keep machines busy — without realising some orders weren't even covering raw materials, while others generated vital cash towards fixed factory mortgages. Coining the phrase **'break-even point'**, Rautenstrauch drew the first modern `Total Revenue vs Total Cost` crossover chart (`The Successful Control of Profits`, 1930), giving businesses and bank managers a single visual stress-test that remains a cornerstone of Edexcel IGCSE Business a century later.",
  },
};
