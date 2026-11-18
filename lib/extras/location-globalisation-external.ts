import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Before Malcolm McLean loaded 58 metal shipping containers onto a converted oil tanker in 1956, unloading a cargo ship by hand cost **$5.86 per ton** and took a week — containerisation slashed that cost to **16 cents per ton**, igniting modern globalisation overnight!",
  didYouKnow: [
    "A single modern ultra-large container ship can carry **24,000 twenty-foot containers** — enough to hold **180 million tablets** or **48 million pairs of trainers** on one voyage from Asia to Europe.",
    "When the pound fell sharply after June 2016 (**WPIDEC**), luxury London department stores saw overseas tourist spending surge because American and Asian visitors suddenly found £1,000 handbags **15%–20% cheaper** in dollars and yuan!",
    "**Ireland's low 12.5%–15% corporation tax rate** combined with English-speaking graduates attracted European headquarters from Apple, Google, Meta and Pfizer — turning fiscal policy into one of the most powerful location magnets in Europe.",
    "Over **70% of consumers under 30** say they have boycotted or switched away from a brand after discovering unethical labour practices or **greenwashing** on social media.",
  ],
  activities: [
    {
      title: "The 5-Item Global Supply-Chain & Tariff Hunt",
      emoji: "🚢",
      materials: ["5 items in your room (clothes, charger, trainers, snack, stationery)", "Calculator"],
      steps: [
        "Check the 'Made in...' label on five items and list the host countries where they were manufactured.",
        "Pick one item priced at £50 in the UK and assume the retailer buys it wholesale from an overseas factory for **$30** at **£1 = $1.25**.",
        "Calculate the retailer's £ import cost today, then recalculate it under (a) a **strong pound** (`£1 = $1.50`), (b) a **weak pound** (`£1 = $1.00`), and (c) a **20% import tariff**.",
        "Write two sentences explaining whether the retailer should absorb the weak-pound/tariff shock or raise its £50 retail price!",
      ],
      maths:
        "At £1 = $1.25, $30 costs **£24.00**; at $1.50 (**SPICED**) it drops to **£20.00**; at $1.00 (**WPIDEC**) it jumps to **£30.00**; adding a 20% tariff pushes it to **£36.00** — cutting Gross Profit per item from £26 to £14!",
    },
    {
      title: "High-Street vs Cloud Location Trade-Off Audit",
      emoji: "📍",
      materials: ["Local property listing site or estimate", "Pen & paper"],
      steps: [
        "Pick a small business idea (e.g. vintage clothing store or custom cake studio).",
        "Compare opening on a busy local high street (estimate £3,500/month rent, high walk-in traffic) against an industrial kitchen/unit 3 miles away (£900/month rent + £400/month local courier & Instagram ads).",
        "If each item earns **£15 contribution**, calculate how many *extra* walk-in sales per month the high-street shop needs just to pay for its higher fixed rent!",
      ],
      maths:
        "Net monthly overhead difference = £3,500 − (£900 + £400) = **£2,200/month**; dividing by £15 unit contribution shows the high street must generate at least **147 extra sales every month** ({{2200 / 15 = 146.7}}) to beat the cheaper out-of-town + e-commerce model!",
    },
  ],
  history: {
    title: "The Smoot-Hawley Tariff Spiral of 1930",
    story:
      "In 1930, hoping to protect domestic farmers and factories at the start of the Great Depression, the US Congress passed the **Smoot-Hawley Tariff Act**, hiking import duties on more than 20,000 foreign goods to nearly **60%**. More than 1,000 economists signed an urgent petition begging the President to veto the bill, warning that foreign nations would retaliate immediately. Within months, Canada, Britain, France and dozens of trading partners slapped counter-tariffs onto American cars, wheat and machinery. Between 1929 and 1934, total world trade **collapsed by 66%**, starving exporters of orders and deepening global unemployment — directly inspiring post-war leaders to create GATT and the **World Trade Organization (WTO)** to prevent retaliatory protectionist spirals.",
  },
};
