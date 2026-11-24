# "Boardroom Bananas: Edexcel 4BS1" S01E04 "Pyramid Scheme Of Needs"
# Topics 2.4–2.5: Taylor, Maslow, Herzberg, Financial & Non-Financial Motivation, Tall/Flat Hierarchies, Delegation & Leadership.

EP = dict(
    topic="motivation-organisation",
    logline="Dad builds a nine-layer hierarchy for three people, pays Kai piece-rate per peeled banana with a stopwatch, and tries to delegate legal blame onto Vani. "
            "Ledger and Examiner Sterling sort Maslow, Herzberg, spans of control and leadership."
)

D_MASLOW = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="140" y="14" width="420" height="52" rx="10" fill="#a855f7"/>
<rect x="108" y="74" width="484" height="52" rx="10" fill="#ec4899"/>
<rect x="76" y="134" width="548" height="52" rx="10" fill="#3b82f6"/>
<rect x="44" y="194" width="612" height="52" rx="10" fill="#10b981"/>
<rect x="16" y="254" width="668" height="52" rx="10" fill="#f59e0b"/>
<text x="350" y="50" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff" text-anchor="middle">5. Self-Actualisation</text>
<text x="350" y="110" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff" text-anchor="middle">4. Esteem (praise, promotion)</text>
<text x="350" y="170" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff" text-anchor="middle">3. Social (teams, belonging)</text>
<text x="350" y="230" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff" text-anchor="middle">2. Safety (contracts, H&amp;S)</text>
<text x="350" y="290" font-family="sans-serif" font-size="28" font-weight="bold" fill="#0f172a" text-anchor="middle">1. Physiological (living wage, rest)</text>
</svg>"""

D_HERZ = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<text x="350" y="40" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047" text-anchor="middle">HERZBERG TWO-FACTOR THEORY</text>
<rect x="14" y="58" width="328" height="248" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<rect x="358" y="58" width="328" height="248" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
<text x="178" y="98" font-family="sans-serif" font-size="29" font-weight="bold" fill="#7dd3fc" text-anchor="middle">HYGIENE</text>
<text x="178" y="136" font-family="sans-serif" font-size="28" fill="#fca5a5" text-anchor="middle">Stops unhappiness</text>
<text x="30" y="188" font-family="sans-serif" font-size="28" fill="#fff">• Basic pay &amp; H&amp;S</text>
<text x="30" y="236" font-family="sans-serif" font-size="28" fill="#fff">• Policy &amp; security</text>
<text x="30" y="284" font-family="sans-serif" font-size="28" fill="#cbd5e1">≠ True motivation</text>
<text x="522" y="98" font-family="sans-serif" font-size="29" font-weight="bold" fill="#86efac" text-anchor="middle">MOTIVATORS</text>
<text x="522" y="136" font-family="sans-serif" font-size="28" fill="#a7f3d0" text-anchor="middle">Drives satisfaction</text>
<text x="374" y="188" font-family="sans-serif" font-size="28" fill="#fff">• Achievement</text>
<text x="374" y="236" font-family="sans-serif" font-size="28" fill="#fff">• Praise &amp; growth</text>
<text x="374" y="284" font-family="sans-serif" font-size="28" fill="#fde047">• Job enrichment</text>
</svg>"""

D_ORG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="14" y="14" width="328" height="292" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="3"/>
<rect x="358" y="14" width="328" height="292" rx="12" fill="#14532d" stroke="#4ade80" stroke-width="3"/>
<text x="178" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#c7d2fe" text-anchor="middle">TALL</text>
<rect x="143" y="70" width="70" height="22" rx="5" fill="#818cf8"/>
<rect x="92" y="104" width="66" height="20" rx="5" fill="#6366f1"/><rect x="198" y="104" width="66" height="20" rx="5" fill="#6366f1"/>
<rect x="92" y="136" width="66" height="20" rx="5" fill="#4f46e5"/><rect x="198" y="136" width="66" height="20" rx="5" fill="#4f46e5"/>
<text x="30" y="198" font-family="sans-serif" font-size="28" fill="#fff">• Narrow span</text>
<text x="30" y="244" font-family="sans-serif" font-size="28" fill="#fca5a5">✗ Slow comm</text>
<text x="30" y="290" font-family="sans-serif" font-size="28" fill="#86efac">✓ Close control</text>
<text x="522" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#86efac" text-anchor="middle">FLAT</text>
<rect x="487" y="76" width="70" height="24" rx="5" fill="#4ade80"/>
<rect x="380" y="124" width="58" height="22" rx="5" fill="#22c55e"/><rect x="454" y="124" width="58" height="22" rx="5" fill="#22c55e"/>
<rect x="528" y="124" width="58" height="22" rx="5" fill="#22c55e"/><rect x="602" y="124" width="58" height="22" rx="5" fill="#22c55e"/>
<text x="374" y="198" font-family="sans-serif" font-size="28" fill="#fff">• Wide span</text>
<text x="374" y="244" font-family="sans-serif" font-size="28" fill="#86efac">✓ Fast + delegate</text>
<text x="374" y="290" font-family="sans-serif" font-size="28" fill="#fca5a5">✗ Boss overload</text>
</svg>"""

D_TRAP4 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#1e1b4b"/>
<rect x="16" y="16" width="668" height="56" rx="10" fill="#be185d"/>
<text x="350" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fff" text-anchor="middle">9 &amp; 12-MARK PEOPLE TRAPS</text>
<text x="28" y="116" font-family="sans-serif" font-size="28" fill="#fda4af">✗ Hygiene factors do NOT motivate!</text>
<text x="28" y="170" font-family="sans-serif" font-size="28" fill="#86efac">✓ Hygiene prevents dissatisfaction only.</text>
<text x="28" y="224" font-family="sans-serif" font-size="28" fill="#fda4af">✗ Delegation never passes blame!</text>
<text x="28" y="280" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">✓ Passes authority; boss keeps duty!</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("kitchen", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Silence in the hierarchy! I am Supreme Chief Executive, reporting to Senior Vice President Vikram, down seven layers to Vani, Junior Sticker Intern!", mood="smug", shot="wide", prop="tablet")
L("mum", "Vikram, there are three people in this kitchen, and six of those managers are you in different hats.", mood="deadpan", shot="two")
L("dad", "Plus I hired Kai on piece rate! Five pence per peeled banana, timed with a stopwatch! And I delegated health inspections to Vani, so if anything goes wrong, Vani takes the blame!", mood="excited", shot="close")
L("vani", "Dad! Delegation passes authority, NEVER ultimate responsibility, and Kai just quit after ten minutes!", mood="shock", shot="close")
freeze("LEGALLY VANI'S FAULT?!", 2.4, narrator="Narrator: It was one hundred percent still Dad's fault.")

confess("vani", "VANISHREE RAO · Junior Sticker Intern Under Protest")
L("vani", "High absenteeism, sky high labour turnover, and a boss barking down a nine layer chain of command. Ledger, bring out the motivation theorists!", mood="deadpan", prop="calculator", gap=0.5)

title()

# ---------------- ACT 1: TAYLOR, MASLOW & HERZBERG ----------------
scene("living", [("vani", 260), ("dad", 560)])
poof("centi", 920)
L("centi", "Topic two point four. Motivated staff deliver higher labour productivity, lower absenteeism, better customer service, and lower labour turnover, saving huge recruitment costs.", mood="teach", shot="close",
  boardClear=True, board="MOTIVATION → productivity ↑, turnover ↓")
L("dad", "Exactly why I copied Frederick Winslow Taylor! Measure every worker with a stopwatch and pay piece rate per unit!", mood="smug", shot="close")
L("centi", "Taylor's scientific management assumes workers are motivated purely by money. Piece rate boosts speed, yet workers rush quality, suffer boredom, and cannot measure output in team or service roles.", mood="teach", shot="close",
  board="TAYLOR: money only → piece-rate, rushed")
L("vani", "Next comes Abraham Maslow's five tier Hierarchy of Needs! You must satisfy each lower level before the level above can motivate anyone.", mood="happy", shot="close",
  boardClear=True, board="MASLOW: 5 tiers (bottom → top)", diagram=D_MASLOW)
L("centi", "Bottom up! One, physiological needs, fair living pay and breaks. Two, safety needs, job contracts and safe equipment. Three, love and social belonging, teamwork.", mood="teach", shot="close",
  board="1 Physiol · 2 Safety · 3 Social")
L("vani", "Four, esteem needs, praise, awards, and status. Five, self actualisation at the peak, creative challenge and reaching full potential!", mood="happy", shot="close",
  board="4 Esteem · 5 Self-actualisation")
L("dad", "Easy! I bought air freshener for the staff toilet. Watch Kai work twice as fast!", mood="excited", shot="close")
L("vani", "Dad, nobody blends smoothies faster because the bathroom smells of lemon.", mood="deadpan", shot="close")
L("centi", "Correct! Frederick Herzberg split workplace factors into Hygiene Factors and Motivators.", mood="teach", shot="close",
  boardClear=True, board="HERZBERG: Hygiene vs Motivators", diagram=D_HERZ)
L("vani", "Hygiene factors like basic pay, clean conditions, company policy, and job security ONLY prevent dissatisfaction!", mood="teach", shot="close",
  board="Hygiene: ONLY prevents dissatisfaction!")
L("vani", "Take them away and staff complain, yet adding soap alone never creates lasting drive.", mood="thinking", shot="close")
L("centi", "True motivation requires Herzberg's Motivators, achievement, recognition, interesting work, responsibility, and promotion!", mood="teach", shot="close",
  board="Motivators: achievement, enrichment")

# ---------------- ACT 2: FINANCIAL & NON-FINANCIAL REWARDS ----------------
card("ACT TWO: REWARDING KAI", "Back at the smoothie counter...", 2.3)
scene("checkout", [("vani", 240), ("mum", 560), ("cashier", 1000)], "SMOOTHIE BAR · Fixing Kai's Pay Package")
L("cashier", "If your dad wants me back, ditch the stopwatch. What rewards are on offer?", mood="annoyed", shot="wide")
L("mum", "Financial methods include hourly wages, annual salaries, commission, bonuses, profit sharing, share ownership, and fringe benefits.", mood="teach", shot="close",
  boardClear=True, board="FINANCIAL: wage, salary, commission, bonus")
L("vani", "Commission drives higher sales, though pushy selling can annoy shoppers.", mood="thinking", shot="close",
  board="Profit share · Share schemes · Perks")
L("vani", "Profit sharing unites the team, though slow workers still collect a share!", mood="happy", shot="close")
L("cashier", "Fair pay covers hygiene factors. What stops me dying of boredom?", mood="thinking", shot="close")
L("vani", "Non financial methods! Job rotation switches tasks between blending, till, and stock to beat boredom.", mood="happy", shot="close",
  boardClear=True, board="JOB ROTATION: switch tasks, less boredom")
L("mum", "Job enlargement adds similar tasks, whereas job enrichment gives deeper challenge and autonomy, like creating our summer menu!", mood="smug", shot="close",
  board="JOB ENRICHMENT: challenge & autonomy!")
L("cashier", "Designing mango chilli smoothies? Deal! Pure Herzberg job enrichment.", mood="excited", shot="close",
  board="Teamworking & empowerment boost morale")

# ---------------- ACT 3: HIERARCHIES, DELEGATION & LEADERSHIP ----------------
scene("hawker", [("vani", 240), ("mum", 540), ("dad", 780), ("uncle", 1000)], "ORGANISATION REBOOT WITH UNCLE HOCK")
L("uncle", "Now burn that nine layer chart, Vikram! Topic two point five compares tall and flat structures.", mood="happy", shot="wide", prop="plate")
L("vani", "Span of control is how many subordinates report directly to one manager!", mood="teach", shot="close",
  boardClear=True, board="SPAN OF CONTROL = direct subordinates", diagram=D_ORG)
L("vani", "A tall structure has many layers and a narrow span, giving close control and promotions, yet slow distorted communication.", mood="happy", shot="close")
L("mum", "Delayering cuts middle layers to make a flat structure with a wide span! Messages move fast, though managers risk overload.", mood="teach", shot="close",
  board="DELAYERING: cut layers → flat, lower cost")
L("vani", "And remember delegation, Dad! You pass authority to make daily decisions down, while ultimate responsibility stays with you!", mood="determined", shot="close",
  board="DELEGATION: pass authority, KEEP blame!")
L("dad", "What about centralised versus decentralised, and my autocratic megaphone?", mood="thinking", shot="close")
L("uncle", "Centralised keeps decisions at head office for consistency and bulk buying.", mood="happy", shot="close",
  boardClear=True, board="Centralised (control) vs Decentralised")
L("uncle", "Decentralised lets local branch managers adapt fast to local customers!", mood="happy", shot="close")
L("vani", "For leadership, Autocratic suits crises or unskilled work, Democratic consults skilled teams, and Laissez faire suits creative experts!", mood="happy", shot="close",
  board="Autocratic · Democratic · Laissez-faire")
L("dad", "So shouting through a megaphone at skilled designers makes them quit!", mood="shock", shot="close")

# ---------------- ACT 4: EXAMINER STERLING TRAP ----------------
card("EXAMINER 9-MARK TRAP", "Examiner Sterling flags two phrasing errors.", 2.3)
scene("classroom", [("vani", 260), ("dad", 580), ("teacher", 920)], "EDEXCEL 4BS1 EXAM HALL")
L("teacher", "Freeze! Every mark scheme in Topic Two penalises two sloppy sentences!", mood="annoyed", shot="wide", prop="book")
L("dad", "Let me guess! Clean toilets motivate workers, and delegation lets managers dodge blame?", mood="worried", shot="close")
L("teacher", "Both score zero! Under Herzberg, pay and conditions are hygiene factors that ONLY prevent dissatisfaction.", mood="teach", shot="close",
  boardClear=True, board="TRAP 1: Hygiene prevents dissatisfaction!", diagram=D_TRAP4)
L("teacher", "Genuine satisfaction comes from motivators like achievement, recognition, and job enrichment!", mood="teach", shot="close")
L("vani", "And delegation passes authority downward to empower staff, while the manager keeps ultimate accountability for mistakes!", mood="happy", shot="close",
  board="TRAP 2: Authority ↓, Responsibility STAYS!")
L("teacher", "Top marks! Always tailor rewards to the case study workforce, factory lines differ from design studios.", mood="determined", shot="close", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Behold our flat democratic smoothie bar! Team vote on who scrubs the blender tonight.", mood="happy", shot="two", prop="bucket")
L("mum", "I vote Vikram.", mood="smug", shot="close")
L("vani", "I vote Vikram. Democracy wins two to one!", mood="happy", shot="close")
L("dad", "I miss autocracy already.", mood="sad", shot="close")
sfx("trombone")

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "5 seconds per question with Ledger!", 2.6)
challenge(1, "In Herzberg's theory, what do hygiene factors prevent?", "DISSATISFACT.", "Hygiene prevents dissatisfaction; Motivators motivate",
  "Question one. In Herzberg's two factor theory, what do hygiene factors prevent?",
  "Dissatisfaction! Hygiene factors prevent dissatisfaction, whereas motivators create genuine satisfaction.")
challenge(2, "What is the number of subordinates reporting directly to one manager?", "SPAN CONTROL", "Tall = narrow span · Flat = wide span of control",
  "Question two. What do we call the number of subordinates reporting directly to one manager?",
  "Span of control! A flat hierarchy has a wide span of control, while a tall hierarchy has a narrow span.")
challenge(3, "In delegation, what is passed down to the subordinate?", "AUTHORITY", "Authority goes down; Responsibility stays with the boss!",
  "Question three. When a manager delegates a task, what is passed down to the subordinate?",
  "Authority to carry out the task is passed down, while ultimate responsibility stays with the manager.")
end_card()
