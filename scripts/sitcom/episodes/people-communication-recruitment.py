# "Boardroom Bananas: Edexcel 4BS1" S01E03 "Reply All To Disaster"
# Topics 2.1–2.3: Communication Channels & Barriers, Recruitment & Selection (JD vs PS, Internal vs External), Training & Law.

EP = dict(
    topic="people-communication-recruitment",
    logline="Dad sends a 40-page jargon email via Reply All at 3 AM and posts an illegal job advert mixing up a Job Description with a Person Specification. "
            "Vani, Ledger and Examiner Sterling rescue HR before an employment tribunal arrives."
)

D_COMM = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="14" y="14" width="328" height="292" rx="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3"/>
<rect x="358" y="14" width="328" height="292" rx="12" fill="#451a03" stroke="#f59e0b" stroke-width="3"/>
<text x="178" y="56" font-family="sans-serif" font-size="29" font-weight="bold" fill="#93c5fd" text-anchor="middle">COMM FLOWS</text>
<text x="30" y="108" font-family="sans-serif" font-size="28" fill="#fff">• Down: Boss → Staff</text>
<text x="30" y="156" font-family="sans-serif" font-size="28" fill="#fff">• Up: Staff → Boss</text>
<text x="30" y="204" font-family="sans-serif" font-size="28" fill="#fff">• Across: Depts ↔</text>
<text x="30" y="254" font-family="sans-serif" font-size="28" fill="#86efac">• Internal / External</text>
<text x="522" y="56" font-family="sans-serif" font-size="29" font-weight="bold" fill="#fcd34d" text-anchor="middle">BARRIERS &amp; FIX</text>
<text x="374" y="108" font-family="sans-serif" font-size="28" fill="#fca5a5">✗ Jargon &amp; overload</text>
<text x="374" y="156" font-family="sans-serif" font-size="28" fill="#fca5a5">✗ Tall chain noise</text>
<text x="374" y="204" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">✓ Plain + feedback</text>
<text x="374" y="254" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">✓ Flatter channels</text>
</svg>"""

D_RECRUIT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="14" y="14" width="328" height="218" rx="12" fill="#1e1b4b" stroke="#818cf8" stroke-width="3"/>
<rect x="358" y="14" width="328" height="218" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
<text x="178" y="54" font-family="sans-serif" font-size="29" font-weight="bold" fill="#a5b4fc" text-anchor="middle">JOB DESCRIPTION</text>
<text x="178" y="92" font-family="sans-serif" font-size="28" fill="#c7d2fe" text-anchor="middle">About the ROLE</text>
<text x="32" y="144" font-family="sans-serif" font-size="28" fill="#fff">• Title, hours, pay</text>
<text x="32" y="192" font-family="sans-serif" font-size="28" fill="#fff">• Main duties</text>
<text x="522" y="54" font-family="sans-serif" font-size="29" font-weight="bold" fill="#6ee7b7" text-anchor="middle">PERSON SPEC</text>
<text x="522" y="92" font-family="sans-serif" font-size="28" fill="#a7f3d0" text-anchor="middle">About CANDIDATE</text>
<text x="376" y="144" font-family="sans-serif" font-size="28" fill="#fff">• Qualifications</text>
<text x="376" y="192" font-family="sans-serif" font-size="28" fill="#fff">• Skills &amp; traits</text>
<rect x="14" y="246" width="672" height="60" rx="10" fill="#1e293b"/>
<text x="350" y="286" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">Internal: cheap/fast · External: fresh ideas</text>
</svg>"""

D_TRAIN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="16" y="16" width="668" height="86" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="3"/>
<text x="34" y="54" font-family="sans-serif" font-size="29" font-weight="bold" fill="#c7d2fe">1. INDUCTION</text>
<text x="664" y="54" font-family="sans-serif" font-size="28" fill="#86efac" text-anchor="end">✓ Cuts quitting</text>
<text x="34" y="90" font-family="sans-serif" font-size="28" fill="#fff">Day-1 tour, H&amp;S rules, IT &amp; culture</text>
<rect x="16" y="116" width="668" height="86" rx="12" fill="#065f46" stroke="#34d399" stroke-width="3"/>
<text x="34" y="154" font-family="sans-serif" font-size="29" font-weight="bold" fill="#a7f3d0">2. ON-THE-JOB</text>
<text x="664" y="154" font-family="sans-serif" font-size="28" fill="#fca5a5" text-anchor="end">✗ Bad habits</text>
<text x="34" y="190" font-family="sans-serif" font-size="28" fill="#fff">Mentor shadowing · Low cost, tailored</text>
<rect x="16" y="216" width="668" height="86" rx="12" fill="#7c2d12" stroke="#fb923c" stroke-width="3"/>
<text x="34" y="254" font-family="sans-serif" font-size="29" font-weight="bold" fill="#fed7aa">3. OFF-THE-JOB</text>
<text x="664" y="254" font-family="sans-serif" font-size="28" fill="#fca5a5" text-anchor="end">✗ Cost + leave</text>
<text x="34" y="290" font-family="sans-serif" font-size="28" fill="#fff">External specialist · Formal qual.</text>
</svg>"""

D_TRAP3 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#1e1b4b"/>
<rect x="16" y="16" width="668" height="56" rx="10" fill="#be185d"/>
<text x="350" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fff" text-anchor="middle">9-MARK HR &amp; TRAINING TRAPS</text>
<text x="28" y="116" font-family="sans-serif" font-size="28" fill="#fda4af">✗ Don't swap Job Desc &amp; Person Spec!</text>
<text x="28" y="170" font-family="sans-serif" font-size="28" fill="#86efac">✓ Till → On-the-job · IT → Off-the-job</text>
<text x="28" y="224" font-family="sans-serif" font-size="28" fill="#7dd3fc">✓ Laws: wage cost ↑ vs fines ↓ &amp; staff ↑</text>
<text x="28" y="280" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">✓ Poor comm → waste &amp; lost customers</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("kitchen", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Rise and shine! At three this morning I emailed a forty page memo titled Synergising Potassium Bandwidth, and clicked Reply All to every supplier and customer!", mood="excited", shot="wide", prop="phone")
L("mum", "Vikram! Three suppliers just cancelled because they thought Potassium Bandwidth was a computer virus!", mood="shock", shot="two")
L("dad", "Relax! I also posted our first H R recruitment advert. Wanted, men under twenty five, working eighty hours a week, paid exclusively in bruised bananas!", mood="smug", shot="close", prop="tablet")
L("vani", "Dad! In two sentences you broke age discrimination law, gender discrimination law, working hours law, AND the National Minimum Wage!", mood="shock", shot="close")
freeze("ILLEGAL JOB AD?!", 2.4, narrator="Narrator: Employment lawyers could smell Dad from three postcodes away.")

confess("vani", "VANISHREE RAO · Unpaid Head Of Compliance")
L("vani", "Dad treats Human Resources like a lawless game show. Ledger, open the People in Business textbook before someone handcuffs him.", mood="deadpan", prop="book", gap=0.5)

title()

# ---------------- ACT 1: COMMUNICATION CHANNELS & BARRIERS ----------------
scene("living", [("vani", 260), ("dad", 560)])
poof("centi", 920)
L("centi", "Topic two point one. Communication passes messages internally among staff or externally with customers and suppliers.", mood="teach", shot="close",
  boardClear=True, board="INTERNAL vs EXTERNAL communication", diagram=D_COMM)
L("vani", "Downward communication sends manager instructions to staff. Upward brings frontline feedback to bosses.", mood="happy", shot="close",
  board="Downward · Upward · Horizontal")
L("vani", "And horizontal communication coordinates peers across departments like Marketing and Finance!", mood="happy", shot="close")
L("dad", "Why did nobody read my forty page midnight email? Every word had four syllables!", mood="annoyed", shot="close")
L("centi", "Classic barriers! Jargon, information overload, bad timing, language gaps, faulty tech, and tall hierarchies distorting messages.", mood="teach", shot="close",
  board="Barriers: jargon, overload, tall chains")
L("vani", "Poor communication causes costly errors, missed deadlines, low staff morale, and lost customers.", mood="thinking", shot="close",
  boardClear=True, board="Poor comm → errors, low morale, lost sales")
L("centi", "Fix it with plain language, the right medium, flatter chains, and two way feedback loops.", mood="teach", shot="close",
  board="Fix: plain language + 2-way feedback")
L("dad", "Fine! Three bullet points, zero potassium bandwidth.", mood="happy", shot="close")
L("vani", "And stop clicking Reply All after bedtime!", mood="deadpan", shot="close")

# ---------------- ACT 2: CONTRACTS, RECRUITMENT & SELECTION ----------------
card("ACT TWO: HIRING KAI", "Dad tries to recruit at the supermarket till.", 2.3)
scene("checkout", [("vani", 240), ("dad", 560), ("cashier", 1000)], "SUPERMARKET TILL · Headhunting Kai")
L("dad", "Kai! Sign my zero hours smoothie contract! Job Description, charming, three A Levels, loves my jokes!", mood="excited", shot="wide", prop="tablet")
L("cashier", "Qualifications belong on a Person Specification, not a Job Description.", mood="deadpan", shot="close")
L("cashier", "And zero hours gives me zero guaranteed pay for rent!", mood="annoyed", shot="close")
L("vani", "Topic two point two! Employment types include full time, part time, job share, temporary, seasonal, freelance, and zero hours.", mood="happy", shot="close",
  boardClear=True, board="Contracts: FT, PT, seasonal, zero-hours")
L("cashier", "Zero hours and seasonal staff match wages to busy peaks, yet workers feel insecure and quit faster!", mood="thinking", shot="close",
  board="Zero-hours: flexible cost vs high turnover")
L("vani", "Now separate the two documents. A Job Description sets out the role, title, duties, hours, pay, and reporting line.", mood="teach", shot="close",
  boardClear=True, board="JOB DESCRIPTION = duties, hours, pay", diagram=D_RECRUIT)
L("vani", "A Person Specification profiles the ideal candidate, essential and desirable qualifications, experience, and skills!", mood="happy", shot="close",
  board="PERSON SPEC = qualifications & skills")
L("dad", "Should I promote Mum internally, or advertise externally?", mood="thinking", shot="close")
L("cashier", "Internal recruitment is cheaper, faster, motivates staff, and they already know the culture.", mood="smug", shot="close",
  board="Selection: CV → shortlist → interview/test")
L("cashier", "External recruitment costs more and needs longer induction, yet brings fresh ideas and a wider talent pool!", mood="happy", shot="close")
L("vani", "Then shortlist C V s and application forms against the Person Specification, run interviews or aptitude tests, and check references!", mood="happy", shot="close")

# ---------------- ACT 3: TRAINING & EMPLOYMENT LAW ----------------
scene("hawker", [("mum", 240), ("vani", 540), ("dad", 780), ("uncle", 1000)], "UNCLE HOCK'S TRAINING KITCHEN")
L("uncle", "Once hired, Vikram, Topic two point three starts! Every new starter needs day one induction training.", mood="happy", shot="wide", prop="plate")
L("mum", "Induction covers health and safety, workplace tour, logins, and team introductions so new staff settle fast and stay.", mood="teach", shot="close",
  boardClear=True, board="INDUCTION: Day-1 safety, tour & culture", diagram=D_TRAIN)
L("vani", "Next choose on the job versus off the job training! On the job means shadowing a mentor at work.", mood="happy", shot="close",
  board="ON-THE-JOB: cheap, tailored vs bad habits")
L("vani", "It is cheap, tailored, and still produces smoothies, though mentors may pass on bad habits!", mood="thinking", shot="close")
L("uncle", "Off the job uses external college or specialist courses, giving expert qualifications!", mood="teach", shot="close",
  board="OFF-THE-JOB: expert skills vs high cost")
L("uncle", "Watch the drawbacks though, course fees are high, output pauses, and newly qualified staff may jump to rivals!", mood="thinking", shot="close")
L("dad", "Wait, I pay for their diploma and they take it next door?", mood="shock", shot="close")
L("mum", "Now shred that illegal advert! Employment law bans discrimination by age, gender, race, religion, or disability.", mood="annoyed", shot="close",
  boardClear=True, board="LAW: Equal pay/anti-discrimination")
L("vani", "You must also obey National Minimum Wage laws, Health and Safety rules, and fair dismissal procedures!", mood="determined", shot="close",
  board="Minimum Wage · Health & Safety · Dismissal")
L("dad", "Compliance raises wage and safety costs!", mood="worried", shot="close")
L("mum", "Yes, yet it prevents tribunal fines, cuts workplace accidents, and attracts top staff!", mood="smug", shot="close",
  board="Cost ↑ short-term vs Reputation & safety ↑")

# ---------------- ACT 4: EXAMINER STERLING TRAP ----------------
card("EXAMINER 9-MARK TRAP", "Examiner Sterling audits HR exam answers.", 2.3)
scene("classroom", [("vani", 260), ("dad", 580), ("teacher", 920)], "EDEXCEL 4BS1 EXAM HALL")
L("teacher", "Attention! Two mistakes sink Topic Two answers every year! First, saying a Job Description lists qualifications.", mood="annoyed", shot="wide", prop="book")
L("dad", "Qualifications belong on the Person Specification! Duties go on the Job Description!", mood="happy", shot="close")
L("teacher", "Second, match training to A O two context! Never suggest pricey off the job university courses for weekend smoothie servers!", mood="teach", shot="close",
  boardClear=True, board="TRAP: Match training to job complexity!", diagram=D_TRAP3)
L("vani", "Whereas for complex software or airline safety, specialist off the job training is vital because mistakes on the job are costly!", mood="happy", shot="close",
  board="Simple role → On-job · Specialist → Off-job")
L("teacher", "Always weigh short term training fees against long term productivity, quality, and retention.", mood="determined", shot="close", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Fixed! Plain three line emails, legal minimum wage plus bonus, and a sharp Person Specification!", mood="happy", shot="two", prop="tablet")
L("mum", "Wonderful! Who applied?", mood="excited", shot="close")
L("dad", "Kai! He aced the interview, negotiated a pay rise, and promoted himself above me.", mood="shock", shot="close")
sfx("trombone")
L("vani", "External recruitment delivering fresh leadership already.", mood="smug", shot="close", gap=0.5)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "5 seconds per HR question with Ledger!", 2.6)
challenge(1, "Which document lists qualifications, skills & experience of the ideal candidate?", "PERSON SPEC", "Person Spec = candidate qualities · Job Desc = duties",
  "Question one. Which recruitment document lists the qualifications, skills, and experience of the ideal candidate?",
  "The Person Specification! The Job Description describes the tasks, pay, and hours of the job itself.")
challenge(2, "Training delivered away from the workplace by external specialists is called what?", "OFF-THE-JOB", "Off-the-job = external course · On-the-job = shadowing",
  "Question two. Training delivered away from the workplace by external specialists is called what?",
  "Off the job training. It builds specialist skills, though it costs more and pauses output.")
challenge(3, "Hiring an existing employee into a promoted role is what kind of recruitment?", "INTERNAL", "Internal = promote within · External = hire from outside",
  "Question three. Hiring an existing employee into a promoted role is called what kind of recruitment?",
  "Internal recruitment. It is cheaper, faster, and motivates staff, though it brings fewer fresh external ideas.")
end_card()
