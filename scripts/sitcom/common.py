# Shared cast, season list and beat helpers for "Boardroom Bananas: Edexcel 4BS1" (Season 1, IGCSE Business).
# build.py / lint_episode.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., logline=...) and call the helpers below.

VOICES = {
    "vani":    dict(voice="af_heart", speed=1.06, lang="en-us"),
    "tara":    dict(voice="af_heart", speed=1.06, lang="en-us"),
    "mum":     dict(voice="bf_emma", speed=1.08, lang="en-gb"),
    "dad":     dict(voice="bm_george", speed=1.02, lang="en-gb"),
    "centi":   dict(voice="am_fenrir", speed=0.98, lang="en-us"),
    "globo":   dict(voice="bm_lewis", speed=1.08, lang="en-gb"),
    "cashier": dict(voice="am_puck", speed=1.12, lang="en-us"),
    "teacher": dict(voice="af_sarah", speed=1.03, lang="en-us"),
    "uncle":   dict(voice="am_michael", speed=1.0, lang="en-us"),
}

SHOW = "BOARDROOM BANANAS"
SHOW_TAG = "EDEXCEL 4BS1"
SEASON_NUM = 1
TEACHER = "centi"   # Ledger (100-eyed CFO calculator monster) runs the holo-board & pause challenges

# Season 1 running order = Year 11 Business topic order (lib/topics/meta.ts).
# (num, topic id, short topic name, episode title)
SEASON = [
    (1, "business-activity", "Objectives & Ownership", "Unlimited Liability, Unlimited Regret"),
    (2, "location-globalisation-external", "Global & External", "SPICED Up And Priced Out"),
    (3, "people-communication-recruitment", "Recruitment & Training", "Reply All To Disaster"),
    (4, "motivation-organisation", "Motivation & Structure", "Pyramid Scheme Of Needs"),
    (5, "sources-cashflow-breakeven", "Cash Flow & Break-Even", "Profit Rich, Cash Broke"),
    (6, "accounts-ratios", "Accounts & Ratios", "Margin Of Error"),
    (7, "marketing-and-operations", "Marketing & Operations", "Just In Time For Chaos"),
]

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "mall", "checkout", "classroom", "hawker", "park",
        "beach", "desert", "polar", "mountain", "megacity", "reef", "weatherdesk"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll"}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "cushion", "book", "plate", "map", "dice", "calculator", "compass", "paintroller",
         "globe", "umbrella", "sunglasses", "binoculars", "bucket"}
SFX_NAMES = {"ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick", "door", "drawer"}

B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x): B.append(dict(type="poof", who=who, x=x))
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)

def _ep():
    ep = globals().get("EP") or {}
    row = next(r for r in SEASON if r[1] == ep["topic"])
    return row
def title(dur=5.5):
    num, _, _, t = _ep()
    B.append(dict(type="title", title=SHOW, tag=SHOW_TAG, sub=f"Season {SEASON_NUM} · Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else f"That's a wrap on Season {SEASON_NUM} — smash your 4BS1 exam, Vanishree!"
    B.append(dict(type="card", text=f"{SHOW}: {SHOW_TAG}", sub=sub, dur=dur))
