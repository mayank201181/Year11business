# "Boardroom Bananas: Edexcel 4BS1" S01E02 "SPICED Up And Priced Out"
# Topics 1.4–1.7: Location, Globalisation & MNCs, Exchange Rates (SPICED/WPIDEC), Interest Rates, Tax & PESTLE.

EP = dict(
    topic="location-globalisation-external",
    logline="Dad rents a remote mountaintop warehouse to dodge rent and celebrates a crashing pound while importing Ecuadorian bananas on a variable-rate loan. "
            "Vani, Ledger and Examiner Sterling untangle location, MNCs, SPICED, interest rates and PESTLE."
)

D_MNC = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<text x="350" y="42" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047" text-anchor="middle">MNC IMPACT ON HOST COUNTRY</text>
<rect x="14" y="60" width="328" height="244" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
<rect x="358" y="60" width="328" height="244" rx="12" fill="#7f1d1d" stroke="#f87171" stroke-width="3"/>
<text x="178" y="102" font-family="sans-serif" font-size="29" font-weight="bold" fill="#86efac" text-anchor="middle">BENEFITS (+)</text>
<text x="32" y="152" font-family="sans-serif" font-size="28" fill="#fff">• Local jobs &amp; pay</text>
<text x="32" y="200" font-family="sans-serif" font-size="28" fill="#fff">• Corporation Tax</text>
<text x="32" y="248" font-family="sans-serif" font-size="28" fill="#fff">• Tech &amp; training</text>
<text x="522" y="102" font-family="sans-serif" font-size="29" font-weight="bold" fill="#fca5a5" text-anchor="middle">DRAWBACKS (−)</text>
<text x="376" y="152" font-family="sans-serif" font-size="28" fill="#fff">• Profit sent home</text>
<text x="376" y="200" font-family="sans-serif" font-size="28" fill="#fff">• Hurts local firms</text>
<text x="376" y="248" font-family="sans-serif" font-size="28" fill="#fff">• Low pay / pollution</text>
</svg>"""

D_SPICED = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="14" y="14" width="328" height="226" rx="12" fill="#1e3a8a" stroke="#38bdf8" stroke-width="3"/>
<rect x="358" y="14" width="328" height="226" rx="12" fill="#581c87" stroke="#c084fc" stroke-width="3"/>
<text x="178" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#7dd3fc" text-anchor="middle">SPICED (£ UP ↑)</text>
<text x="178" y="94" font-family="sans-serif" font-size="28" fill="#bae6fd" text-anchor="middle">£1=$1.20 → $1.50</text>
<text x="30" y="144" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">✓ Imports CHEAPER</text>
<text x="30" y="192" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">✗ Exports DEARER</text>
<text x="522" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#e9d5ff" text-anchor="middle">WPIDEC (£ DOWN ↓)</text>
<text x="522" y="94" font-family="sans-serif" font-size="28" fill="#f3e8ff" text-anchor="middle">£1=$1.50 → $1.00</text>
<text x="374" y="144" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">✗ Imports DEARER</text>
<text x="374" y="192" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">✓ Exports CHEAPER</text>
<rect x="14" y="252" width="672" height="54" rx="10" fill="#1e293b"/>
<text x="350" y="288" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">£ → Foreign: MULTIPLY · Foreign → £: DIVIDE</text>
</svg>"""

D_RATES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="140" y="14" width="420" height="52" rx="10" fill="#dc2626"/>
<text x="350" y="50" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fff" text-anchor="middle">INTEREST RATES RISE ↑</text>
<rect x="14" y="82" width="328" height="222" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
<rect x="358" y="82" width="328" height="222" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="178" y="124" font-family="sans-serif" font-size="29" font-weight="bold" fill="#fcd34d" text-anchor="middle">CONSUMERS</text>
<text x="30" y="172" font-family="sans-serif" font-size="28" fill="#fff">• Loans cost more</text>
<text x="30" y="218" font-family="sans-serif" font-size="28" fill="#fff">• Saving pays more</text>
<text x="30" y="268" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">→ Luxury sales ↓</text>
<text x="522" y="124" font-family="sans-serif" font-size="29" font-weight="bold" fill="#7dd3fc" text-anchor="middle">BUSINESSES</text>
<text x="374" y="172" font-family="sans-serif" font-size="28" fill="#fff">• Debt interest ↑</text>
<text x="374" y="218" font-family="sans-serif" font-size="28" fill="#fff">• Profit squeezed</text>
<text x="374" y="268" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">→ Delay expansion</text>
</svg>"""

D_TRAP2 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#1e1b4b"/>
<rect x="16" y="16" width="668" height="56" rx="10" fill="#be185d"/>
<text x="350" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fff" text-anchor="middle">12-MARK EXTERNAL SHOCK TRAPS</text>
<text x="28" y="116" font-family="sans-serif" font-size="28" fill="#fda4af">✗ Strong £ is NOT bad for every firm!</text>
<text x="28" y="170" font-family="sans-serif" font-size="28" fill="#86efac">✓ Check AO2: Importer, exporter, or both?</text>
<text x="28" y="224" font-family="sans-serif" font-size="28" fill="#7dd3fc">✓ Inelastic luxury exports suffer LESS.</text>
<text x="28" y="280" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">✓ High rates hurt debt-heavy luxury firms.</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Pack your snow boots! I leased Rao Banana Headquarters on top of a foggy Scottish mountain! Zero footfall, zero rivals, dirt cheap rent!", mood="excited", shot="wide", prop="map")
L("mum", "Vikram, how do fresh bananas reach customers when the nearest road is a muddy goat track?", mood="annoyed", shot="two")
L("vani", "Wait, where are the bananas coming from?", mood="thinking", shot="close")
L("dad", "Ecuador! I ordered six hundred dollars of fruit on a variable rate bank loan! And rejoice, the pound just crashed, so imports are half price!", mood="smug", shot="close", prop="phone")
L("vani", "Dad! A weak pound makes imports DEARER, AND the central bank just hiked interest rates!", mood="shock", shot="close")
L("mum", "Tell me you kept the receipt for that mountain.", mood="worried", shot="close")
freeze("HALF PRICE IMPORTS?!", 2.4, narrator="Narrator: Dad had confused economics with wishful thinking.")

confess("dad", "VIKRAM RAO · Aspiring Multinational Tycoon")
L("dad", "How hard can global business be? Spin a globe, point somewhere sunny, and watch foreign currency turn into free money.", mood="smug", prop="globe", gap=0.5)

title()

# ---------------- ACT 1: LOCATION & MULTINATIONALS ----------------
scene("mountain", [("vani", 260), ("dad", 560)], "DAD'S BARGAIN SCOTTISH WAREHOUSE")
L("dad", "Behold! Cheap land! Although the delivery lorry is stuck behind three sheep, there is zero mobile signal, and no staff live within forty miles.", mood="worried", shot="wide")
poof("centi", 920)
L("centi", "Topic one point four. Location decisions balance proximity to market, labour, raw materials, and competitors against rent, transport links, and government grants.", mood="teach", shot="close",
  boardClear=True, board="LOCATION: market, labour, raw materials")
L("vani", "A retail smoothie shop needs high street footfall close to customers. Heavy manufacturing locates near bulky raw materials to slash transport costs.", mood="happy", shot="close",
  board="Retail: footfall · E-commerce: footloose")
L("centi", "Only footloose e commerce or software firms can locate in cheaper remote regions, provided broadband and courier links work, often attracted by government regional grants.", mood="teach", shot="close",
  board="Grants + infrastructure vs rent costs")
L("dad", "Forget mountains! I shall build factories in ten countries and become a Multinational Corporation, M N C!", mood="determined", shot="close")
L("centi", "An M N C produces goods or services in more than one country, fuelled by globalisation, container shipping, e commerce, and free trade blocs.", mood="teach", shot="close",
  boardClear=True, board="MNC: produces in 2+ countries", diagram=D_MNC)
L("vani", "When an M N C invests in a host country, it creates jobs, pays corporation tax, brings modern technology and training, and buys from local suppliers.", mood="happy", shot="close",
  board="Host PROS: jobs, tax, skills, tech")
L("centi", "Yet host countries also face drawbacks. M N C s repatriate profits back to their home country, squeeze small local rivals out of business, and may exploit lax environmental or wage laws.", mood="teach", shot="close",
  board="Host CONS: profit repatriation, rivals hit")
L("dad", "Note to self. Pay decent wages, do not anger the host government.", mood="thinking", shot="close")

# ---------------- ACT 2: TRADE, TARIFFS & EXCHANGE RATES ----------------
card("ACT TWO: CURRENCY CHAOS", "Meanwhile at the container port...", 2.3)
scene("hawker", [("vani", 240), ("mum", 540), ("dad", 780), ("uncle", 1000)], "PORT CAFE · Uncle Hock Checks The Invoice")
L("mum", "Vikram! Your Ecuadorian banana bill jumped from four hundred pounds to six hundred pounds, PLUS a twenty percent import tariff!", mood="shock", shot="wide", prop="phone")
L("uncle", "Ouch! Protectionism strikes again. Governments put tariffs and quotas on imports to shield domestic farmers from foreign competition.", mood="happy", shot="close", prop="plate")
L("vani", "A tariff is a tax on imports that pushes up their price, whereas a quota is a physical cap on how many tonnes can enter the country.", mood="teach", shot="close",
  boardClear=True, board="TARIFF: import tax · QUOTA: volume cap")
L("dad", "Okay, tariffs hurt, yet why did the currency crash raise my pound bill?", mood="annoyed", shot="close")
poof("centi", 380)
L("centi", "Memorise S P I C E D and W P I D E C! Exchange rates measure the price of one currency in terms of another.", mood="teach", shot="close",
  boardClear=True, board="SPICED: Strong £ → Imp Cheap, Exp Dear", diagram=D_SPICED)
L("vani", "When the pound appreciates, say from one dollar twenty to one dollar fifty, Strong Pound makes Imports Cheaper and Exports Dearer!", mood="happy", shot="close",
  board="Convert foreign → £: DIVIDE by rate")
L("centi", "And when the pound depreciates from one dollar fifty down to one dollar, Weak Pound makes Imports Dearer and Exports Cheaper.", mood="teach", shot="close",
  board="WPIDEC: Weak £ → Imp Dear, Exp Cheap")
L("vani", "Check the maths! Convert foreign currency into pounds by dividing by the rate.", mood="determined", shot="close")
L("vani", "Six hundred dollars divided by one point five was four hundred pounds. Divided by one, it jumps to six hundred pounds!", mood="happy", shot="close")
L("uncle", "Whereas if you exported British banana jam to New York, a weak pound makes it cheaper in dollars, boosting exports!", mood="smug", shot="close")
L("dad", "Right! Import when strong, export when weak!", mood="happy", shot="close")

# ---------------- ACT 3: FISCAL, MONETARY & PESTLE ----------------
scene("kitchen", [("mum", 260), ("vani", 580), ("dad", 920)])
L("dad", "Hold everything! Three more alerts! Corporation Tax rose, central bank interest rates rose, AND eco activists are protesting plastic banana bags!", mood="worried", shot="wide", prop="tablet")
L("mum", "Welcome to Topics one point six and one point seven. First, government fiscal policy adjusts taxation and public spending.", mood="teach", shot="close",
  boardClear=True, board="FISCAL: direct tax (Income, Corp) + VAT")
L("vani", "Direct taxes hit income or profit directly. Higher Income Tax lowers consumers' disposable income, while higher Corporation Tax cuts retained profit available for expansion.", mood="happy", shot="close",
  board="Indirect tax (VAT) raises retail prices")
L("mum", "Indirect taxes like V A T are added to spending, pushing prices up. Meanwhile, government infrastructure spending or subsidies can cut business costs.", mood="smug", shot="close",
  board="Govt spending/subsidies boost demand")
L("vani", "Second, monetary policy uses central bank interest rates. Look at the chain reaction when interest rates rise!", mood="teach", shot="close",
  boardClear=True, board="MONETARY: interest rates ↑ → spending ↓", diagram=D_RATES)
L("mum", "Consumers pay more on mortgages and credit cards, and earn more by saving in banks, so spending on non essential treats drops.", mood="teach", shot="close",
  board="Loans & overdrafts cost more interest")
L("vani", "And businesses pay higher interest on overdrafts and variable loans, raising overheads and delaying new machinery investment!", mood="thinking", shot="close",
  board="ETHICS & PESTLE: costs ↑ vs brand loyalty")
L("dad", "What about the eco pressure group outside? Compostable bags cost three pence extra per bunch!", mood="annoyed", shot="close")
L("vani", "That is P E S T L E, legislation, and ethics! Ignoring pressure groups risks viral boycotts, whereas sustainable packaging builds a U S P that justifies a premium price.", mood="determined", shot="close")

# ---------------- ACT 4: EXAMINER STERLING TRAP ----------------
card("EXAMINER 12-MARK TRAP", "Examiner Sterling grades Paper 2 scripts.", 2.3)
scene("classroom", [("vani", 260), ("dad", 580), ("teacher", 920)], "EDEXCEL 4BS1 EXAM HALL")
L("teacher", "Pens down! Every summer I read the exact same blunder. A strong pound is bad for businesses.", mood="annoyed", shot="wide", prop="book")
L("dad", "Wait, under S P I C E D exports get dearer, so surely that hurts?", mood="worried", shot="close")
L("teacher", "Only exporters! If a British cafe imports Brazilian coffee beans and sells locally, a strong pound slashes its raw material costs!", mood="teach", shot="close",
  boardClear=True, board="TRAP: Never say FX helps/hurts ALL firms!", diagram=D_TRAP2)
L("vani", "And if a firm both imports parts AND exports luxury cars, weigh both sides and check price elasticity of demand!", mood="happy", shot="close",
  board="Evaluate PED + % imported vs exported")
L("teacher", "Spot on! Luxury exports are price inelastic. And high interest rates hurt debt heavy luxury firms, while discount grocers gain shoppers!", mood="determined", shot="close",
  board="High rates: luxury hurt, value grocers gain!", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Sorted! I moved next to the high street station, switched to paper bands, and hedged my currency contract!", mood="happy", shot="two", prop="plate")
L("mum", "Impressive! Did you cancel the Scottish mountain warehouse lease?", mood="smug", shot="close")
L("dad", "Slight snag. Three Highland sheep are now subletting it as a luxury wool spa.", mood="shock", shot="close")
sfx("trombone")
L("vani", "Honestly, the sheep have better location strategy than Dad.", mood="deadpan", shot="close", gap=0.5)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "5 seconds on the clock with Ledger!", 2.6)
challenge(1, "Under SPICED, when £ appreciates, do UK imports become cheaper or dearer?", "CHEAPER", "Strong Pound → Imports Cheaper, Exports Dearer",
  "Question one. Under S P I C E D, when the pound appreciates and gets stronger, do imports become cheaper or dearer?",
  "Cheaper! Strong Pound makes Imports Cheaper and Exports Dearer.")
challenge(2, "If £1 = $1.50, how much in pounds does a $600 US shipment cost?", "£400", "Foreign → £: divide $600 ÷ 1.50 = £400",
  "Question two. If one pound equals one dollar fifty, how much in pounds does a six hundred dollar shipment cost?",
  "Four hundred pounds. Divide six hundred dollars by the exchange rate of one point five.")
challenge(3, "What do we call a government tax placed on imported goods?", "A TARIFF", "Tariff = tax on imports · Quota = physical volume limit",
  "Question three. What do we call a government tax placed on imported goods?",
  "A tariff. Remember, a tariff taxes imports to raise their price, whereas a quota caps the physical volume.")
end_card()
