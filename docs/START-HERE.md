# Missionary Bot Knowledge Base — Start Here

**What this is:** the training corpus for the Serve Funding Missionary Bot — an outbound AI chatbot meant to give small-business owners specific funding guidance and sound like Mike Kodinsky. Built from Mike's Fathom discovery calls (Dec 2025–May 2026).

**How it was built:** an initial pass on 12 hand-picked discovery calls produced the 5 core voice/FAQ docs. Tim reviewed those and sent back a 38-question gap list (`questions-for-kyler.md`). A second pass mined ~20 more calls to fill the sourceable gaps — producing `industry-scripts.md` and expanding `product-explanations.md` + `objections-and-responses.md`.

**Ground rule for every doc:** every quote is verbatim from a real call, with a Fathom timestamp link. No invented examples. Internal use — prospect names are real, so anything going public must be anonymized first.

---

## The KB — the actual deliverable (feed these to the bot)

| File | What's in it |
|---|---|
| `prospect-faqs.md` | Every distinct question prospects ask, clustered by theme (fees, timing, docs, differentiation, etc.) with the real concern underneath each. |
| `mike-voice-patterns.md` | How Mike talks — openers, transitions, signature phrases ("here to serve," "time is the only finite resource"), humor, the origin story, his rhythm. |
| `product-explanations.md` | Mike's plain-English explanations of every product (factoring, ABL, MCA, PO, WIP, equipment, SBA, bridge, RE cash-out, HELOC, factor-rate→APR, etc.) + his product-fit decision tree. **Largest doc.** |
| `objections-and-responses.md` | Pushback Mike hears and how he responds, verbatim (rate too high, go-direct, why-exclusive, bad-broker, distress urgency, etc.). |
| `qualifying-questions.md` | The questions Mike asks to qualify a prospect, in the order he asks them, with the conversational connectors that keep it from feeling like an intake form. |
| `industry-scripts.md` | How Mike tailors the pitch by vertical: construction, staffing, GovCon, e-comm/DTC, healthcare, manufacturing (+ thin professional-services). |

Every doc ends with a **"How the bot should use this"** section.

---

## Process / planning docs (for the team, not the bot)

| File | What's in it |
|---|---|
| `content-gaps-triage.md` | Tim's 38 gaps mapped 🟢 sourceable / 🟡 needs-Mike / 🔴 business-decision, with a status tracker. Start here to see what's done and what's left. |
| `recording-script-for-mike.md` | **The ask for Mike.** The ~13 things only he can answer (opinions, founding story, post-close experience) + 4 yes/no decisions + 5 small residuals, organized as a 25–40 min voice-memo guide in his call style. |
| `_source-extractions/` | The raw verbatim extractions from all the mined calls (5 batch files). Provenance behind every synthesized quote — useful if you want to trace a quote back or mine deeper. |

---

## What's left (the open loops)

1. **Mike records his voice memo** → see `recording-script-for-mike.md`. Tim drops the transcript in `_source-extractions/` and the quotes get folded into the KB docs the same way the existing ones were.
2. **You + Mike make the 🔴 decisions** (in the triage doc): publishable lender names, case-study permissions, personal-story framing. These unblock public content.
3. **Wire the KB into the bot** — these docs are the corpus; the bot still needs a system prompt / persona spec built on top of them.
4. **Repurpose for public** (landing pages, blog) — anonymize first; gated on #2.

---

*Last updated: 2026-05-27.*
