# "Boardroom Bananas: Edexcel 4BS1" S01E04 "Pyramid Scheme Of Needs"
# Topics 2.4–2.5: Taylor, Maslow, Herzberg, Financial & Non-Financial Motivation, Tall/Flat Hierarchies, Delegation & Leadership.

EP = dict(
    topic="motivation-organisation",
    logline="Dad builds a nine-layer hierarchy for three people, pays Kai piece-rate per peeled banana with a stopwatch, and tries to delegate legal blame onto Vani. "
            "Ledger and Examiner Sterling sort Maslow, Herzberg, spans of control and leadership."
)

D_MASLOW = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" rx="12" fill="#0f172a"/>
<polygon points="260,16 320,52 200,52" fill="#a855f7"/>
<polygon points="196,56 324,56 360,92 160,92" fill="#ec4899"/>
<polygon points="156,96 364,96 400,132 120,132" fill="#3b82f6"/>
<polygon points="116,136 404,136 440,172 80,172" fill="#10b981"/>
<polygon points="76,176 444,176 480,210 40,210" fill="#f59e0b"/>
<text x="260" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">5. Self-Actualisation</text>
<text x="260" y="79" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">4. Esteem (awards, promotion, status)</text>
<text x="260" y="119" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">3. Love &amp; Social (teamwork, belonging)</text>
<text x="260" y="159" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">2. Safety (job contracts, H&amp;S, pension)</text>
<text x="260" y="198" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">1. Physiological (living wage, rest breaks, water)</text>
</svg>"""

D_HERZ = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 205">
<rect width="520" height="205" rx="12" fill="#0f172a"/>
<text x="260" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047" text-anchor="middle">HERZBERG TWO-FACTOR THEORY</text>
<rect x="14" y="38" width="240" height="152" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<rect x="266" y="38" width="240" height="152" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
<text x="134" y="60" font-family="sans-serif" font-size="13" font-weight="bold" fill="#7dd3fc" text-anchor="middle">HYGIENE FACTORS</text>
<text x="134" y="78" font-family="sans-serif" font-size="11" fill="#fca5a5" text-anchor="middle">ONLY prevent dissatisfaction!</text>
<text x="26" y="104" font-family="sans-serif" font-size="12" fill="#fff">• Fair basic pay &amp; job security</text>
<text x="26" y="128" font-family="sans-serif" font-size="12" fill="#fff">• Safe, clean working conditions</text>
<text x="26" y="152" font-family="sans-serif" font-size="12" fill="#fff">• Company policy &amp; supervision</text>
<text x="26" y="176" font-family="sans-serif" font-size="11" fill="#cbd5e1">(Fixing these ≠ true motivation)</text>
<text x="386" y="60" font-family="sans-serif" font-size="13" font-weight="bold" fill="#86efac" text-anchor="middle">MOTIVATORS</text>
<text x="386" y="78" font-family="sans-serif" font-size="11" fill="#a7f3d0" text-anchor="middle">Create genuine satisfaction!</text>
<text x="278" y="104" font-family="sans-serif" font-size="12" fill="#fff">• Sense of achievement</text>
<text x="278" y="128" font-family="sans-serif" font-size="12" fill="#fff">• Recognition &amp; praise</text>
<text x="278" y="152" font-family="sans-serif" font-size="12" fill="#fff">• Job enrichment &amp; responsibility</text>
<text x="278" y="176" font-family="sans-serif" font-size="12" fill="#fde047">• Promotion &amp; personal growth</text>
</svg>"""

D_ORG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 205">
<rect width="520" height="205" rx="12" fill="#0f172a"/>
<rect x="14" y="16" width="240" height="174" rx="10" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<rect x="266" y="16" width="240" height="174" rx="10" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
<text x="134" y="38" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c7d2fe" text-anchor="middle">TALL HIERARCHY</text>
<rect x="104" y="50" width="60" height="18" rx="4" fill="#818cf8"/>
<rect x="70" y="78" width="54" height="16" rx="4" fill="#6366f1"/><rect x="144" y="78" width="54" height="16" rx="4" fill="#6366f1"/>
<rect x="70" y="104" width="54" height="16" rx="4" fill="#4f46e5"/><rect x="144" y="104" width="54" height="16" rx="4" fill="#4f46e5"/>
<text x="26" y="142" font-family="sans-serif" font-size="11" fill="#fff">• Many layers · NARROW span (2)</text>
<text x="26" y="160" font-family="sans-serif" font-size="11" fill="#fca5a5">• Slow distorted communication</text>
<text x="26" y="178" font-size="11" font-family="sans-serif" fill="#86efac">• Close supervision &amp; promotions</text>
<text x="386" y="38" font-family="sans-serif" font-size="14" font-weight="bold" fill="#86efac" text-anchor="middle">FLAT HIERARCHY</text>
<rect x="356" y="56" width="60" height="20" rx="4" fill="#4ade80"/>
<rect x="280" y="96" width="44" height="18" rx="4" fill="#22c55e"/><rect x="334" y="96" width="44" height="18" rx="4" fill="#22c55e"/>
<rect x="388" y="96" width="44" height="18" rx="4" fill="#22c55e"/><rect x="442" y="96" width="44" height="18" rx="4" fill="#22c55e"/>
<text x="278" y="142" font-family="sans-serif" font-size="11" fill="#fff">• Few layers · WIDE span (4+)</text>
<text x="278" y="160" font-family="sans-serif" font-size="11" fill="#86efac">• Fast direct comm + delegation</text>
<text x="278" y="178" font-family="sans-serif" font-size="11" fill="#fca5a5">• Managers risk overload!</text>
</svg>"""

D_TRAP4 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">
<rect width="520" height="185" rx="12" fill="#1e1b4b"/>
<rect x="16" y="14" width="488" height="38" rx="8" fill="#be185d"/>
<text x="260" y="38" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">EXAMINER 9 &amp; 12-MARK PEOPLE TRAPS</text>
<text x="28" y="78" font-family="sans-serif" font-size="13" fill="#fda4af">✗ TRAP 1: Saying Herzberg's hygiene factors (pay/safety) MOTIVATE staff!</text>
<text x="28" y="104" font-family="sans-serif" font-size="13" fill="#86efac">✓ Exact phrase: Hygiene factors PREVENT DISSATISFACTION; Motivators motivate.</text>
<text x="28" y="132" font-family="sans-serif" font-size="13" fill="#fda4af">✗ TRAP 2: Saying delegation passes ultimate RESPONSIBILITY to subordinates!</text>
<text x="28" y="158" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047">✓ Delegation passes AUTHORITY down; ultimate RESPONSIBILITY stays with the boss!</text>
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
