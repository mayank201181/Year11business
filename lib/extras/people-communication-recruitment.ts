import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In 1999 NASA lost its **$125 million Mars Climate Orbiter** in deep space because one engineering team in Colorado sent thruster numbers in **pound-seconds** while the navigation team in California read them as **newton-seconds** — history's most expensive lesson in missing a two-way communication feedback check!",
  didYouKnow: [
    "Replacing a single skilled employee who quits typically costs a business **30% to 100% of their annual salary** once recruitment ads, agency fees, management interview hours, induction and slow early output are added up!",
    "Studies of workplace **information overload** show office workers check email or chat notifications an average of **every 6 minutes** — and take over **20 minutes** to regain deep focus after an unnecessary 'Reply All' thread.",
    "Over **35% of new hires who quit within their first 90 days** cite **absent or chaotic induction training** as the #1 reason they walked away.",
    "Under UK & international equal-opportunities laws, blind-CV recruitment (stripping names, ages and schools during initial shortlisting against the **Person Specification**) has been shown to boost interview diversity by up to **40%**.",
  ],
  activities: [
    {
      title: "The 60-Second Job Description vs Person Specification Split",
      emoji: "📋",
      materials: ["8 sticky notes or slips of paper", "Timer"],
      steps: [
        "Write 8 items for a 'Head Barista' vacancy on separate slips: *'£13.50/hour'*, *'2 years espresso machine experience'*, *'Reports to Café Manager'*, *'Level 2 Food Hygiene Certificate'*, *'Opens café at 6:30 a.m. & orders milk'*, *'Calm under lunchtime queue pressure'*, *'38 hours/week'*, *'Friendly customer communication skills'*.",
        "Start a 60-second timer and sort all 8 slips into two piles: **Job Description** vs **Person Specification** (and mark each Person Spec slip *Essential* or *Desirable*).",
        "Check the rule: every item about the **role/contract** belongs in the Job Description (4 slips); every item about the **human's qualifications/experience/traits** belongs in the Person Specification (4 slips)!",
      ],
      maths:
        "Getting 8/8 in under 60 seconds locks in free AO1/AO2 marks — and stops you ever mixing up the two most-confused HR documents in Edexcel 4BS1!",
    },
    {
      title: "The Tall-Hierarchy 'Whisper Chain' Distortion Test",
      emoji: "📣",
      materials: ["4 friends or family members", "A 25-word business instruction"],
      steps: [
        "Write a 25-word store update on a card: *'Starting Tuesday 14th, move gluten-free muffins to Shelf 3 at £2.80, cut oat-milk orders by 15%, and log wastage before 5 p.m.'*",
        "Whisper it once (one-way, zero questions allowed!) down a 4-person chain of command and ask Person 4 to write down what they heard.",
        "Count how many of the **5 key facts** (*Tuesday 14th, Shelf 3, £2.80, −15% oat milk, 5 p.m.*) survived intact — then repeat allowing **two-way feedback** and a plain written checklist!",
      ],
      maths:
        "Even if each verbal handoff keeps **80%** of details accurate, after 4 layers only {{0.8^4 = 41%}} ({{2}} out of {{5}} facts!) survives — proving why **delayering** and **written + feedback loops** slash operational errors.",
    },
  ],
  history: {
    title: "Aviation's 'Cockpit Resource Management' Communication Revolution",
    story:
      "In the 1970s, aircraft were becoming mechanically safer than ever, yet investigators noticed a chilling pattern in black-box voice recorders: junior co-pilots and flight engineers had often *spotted* low fuel or an icy wing warning minutes before an accident, **but stayed silent or hinted too politely** because steep, autocratic cockpit hierarchies discouraged upward communication to the Captain! NASA and commercial airlines responded by inventing **Crew Resource Management (CRM)** — mandatory **off-the-job simulator training** teaching flat, plain-language two-way communication where every crew member is trained and empowered to speak up immediately and confirm every instruction back aloud (`read-back feedback loop`). Hospitals later copied the exact same aviation communication protocol in operating theatres, cutting surgical errors worldwide by over a third.",
  },
};
