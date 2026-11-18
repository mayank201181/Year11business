import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "In 1914, Henry Ford shocked Wall Street by doubling factory wages overnight from $2.34 to $5.00 a day — not out of charity, but because 370% annual labour turnover meant he had to hire 52,000 workers a year just to keep 14,000 stations staffed!",
  didYouKnow: [
    "At luxury hotel chain **Ritz-Carlton**, every employee — from housekeeper to bellhop — is **empowered** to spend up to **$2,000 per guest incident** to fix a problem on the spot without asking a manager.",
    "Before Henry Ford introduced the $5/day wage and shortened shifts from 9 to 8 hours, assembly-line boredom under Taylorism was so extreme that workers simply walked out at lunchtime and never came back.",
    "Google's famous **'20% time'** policy (self-actualisation + laissez-faire autonomy for engineers) directly gave birth to **Gmail**, **AdSense** and **Google News**.",
    "Appliance giant **Haier** in China abolished 12,000 middle-management posts (**extreme delayering**), reorganising 75,000 employees into 4,000 self-managing 'micro-enterprises' of 10–15 people.",
    "In Herzberg's original 1959 Pittsburgh study of 200 engineers and accountants, **salary** appeared almost equally in stories of bad jobs and good jobs — proving bad pay makes people miserable, while long-lasting pride comes from **achievement and recognition**.",
  ],
  activities: [
    {
      title: "Paper-Plane Factory: Taylor Piece-Rate vs Autonomous Cell",
      emoji: "✈️",
      materials: [
        "20 sheets of A4 paper",
        "Smartphone stopwatch",
        "A strict quality ruler (wings must match within 3 mm!)",
      ],
      steps: [
        "**Round 1 (Taylor Piece-Rate)**: Time yourself for 2 minutes folding complete paper planes as fast as possible, scoring 10 points per plane folded regardless of symmetry.",
        "**Quality Audit**: Measure every Round 1 plane — reject any plane whose wings differ by more than 3 mm or fail a 3-metre glide test. Record your *passed* output and defect rate (%).",
        "**Round 2 (Enriched Cell Quality)**: Take 30 seconds first to improve your folding jig (Kaizen), then fold for 2 minutes where passed planes earn 15 points and any defect deducts 10 points.",
        "Compare **passed productivity** and **defect %** across Round 1 and Round 2!",
      ],
      maths:
        "Demonstrates F.W. Taylor's speed-vs-quality trade-off: pure piece-rate inflates raw output count while spiking defect wastage, whereas quality ownership raises usable productivity.",
    },
    {
      title: "Chinese Whispers: Tall vs Flat Chain of Command",
      emoji: "📣",
      materials: [
        "A 25-word customer complaint scenario written on a card",
        "Friends or family (or 5 voice-note recordings relayed in sequence)",
      ],
      steps: [
        "Write a detailed business message: *'Client B needs 40 vegan gluten-free boxes by 07:30 Friday at Gate 4 with a 12% trade discount.'*",
        "**Tall Chain (6 layers)**: Whisper or paraphrase the message from memory across 5 links without looking back at the card.",
        "**Flat Chain (2 layers)**: Relay the message across just 1 direct link with two-way clarification questions allowed.",
        "Count how many critical numbers/facts survived intact in the Tall vs Flat structure!",
      ],
      maths:
        "If each layer transmits 90% of detail accurately, after 1 link {{0.9^1 = 90%}} survives, whereas after 6 links {{0.9^6 = 53.1%}} survives — nearly half the message is distorted!",
    },
  ],
  history: {
    title: "The Hawthorne Lights Experiment That Stumped Engineers (1924–1932)",
    story:
      "At Western Electric's Hawthorne Works near Chicago, F.W. Taylor-inspired efficiency engineers dimmed and brightened factory lights to calculate the exact 'scientific' illumination that maximised relay-assembly output. To their astonishment, productivity jumped when they brightened the lights — AND jumped again when they dimmed the lights down to moonlight levels! Psychologist **Elton Mayo** discovered why: for the first time, managers had placed the six women in a close-knit team room, asked their opinions (**democratic consultation**), and paid warm attention to their achievements (**Maslow's social & esteem needs**). The 'Hawthorne Effect' overturned pure Taylorism and paved the way for Maslow and Herzberg's modern HR revolution.",
  },
};
