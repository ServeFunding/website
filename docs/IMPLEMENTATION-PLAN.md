# Implementation Plan — Website + Chatbot Knowledge Base

> **Last updated:** 2026-05-28
> **Purpose:** This doc captures the full plan for the dual workstream we agreed on: (1) finish filling content gaps using the new `docs/_source-extractions/` material, (2) upgrade the chatbot to use the website as its knowledge base and answer in Mike's voice with page citations. Written so any future session — including post-compaction — can pick up cleanly.

---

## Where we are right now

**Live on `dev` (PR #43 → main):**

- 28 blog posts (24 original + 4 new pillars: Two Buckets, MCA Term Sheet, Layered Capital, Real Estate Cheapest, plus Factoring + MCA-vs-RBF)
- `/solutions` + 12 solution detail pages
- `/solutions/compare` — pillar comparison page (all 12 alternatives)
- `/compare` + 5 head-to-head comparison pages (factoring vs ABL, SBA vs WC, WC vs LOC, bridge vs term, equipment vs sale-leaseback)
- `/industries` + 6 industry guides (staffing, healthcare, manufacturing, gov-contractors, construction, ecommerce-dtc)
- `/glossary` — 32 plain-English terms with DefinedTerm schema
- `/bankers` — referral hub for commercial bankers (folded into Partners dropdown)
- `/faq` — 40+ FAQs in 5 sections with FAQPage schema
- `/fundings` — case studies with Review schema
- `/llms.txt` + `/llms-full.txt` — full canonical knowledge base in plain text

**Voice corpus on disk in `docs/`:**

- Original 5 KB docs (mike-voice-patterns, product-explanations, objections-and-responses, prospect-faqs, qualifying-questions) — built from 12 hand-picked Fathom calls
- `industry-scripts.md` — vertical-specific Mike framings (construction, staffing, GovCon, e-comm/DTC, healthcare, manufacturing)
- `_source-extractions/` — 5 batch files mining ~20 additional Fathom calls
- `linkedin-post-themes.md` — 50 public LinkedIn posts
- Process docs: `START-HERE.md`, `content-gaps-triage.md`, `questions-for-kyler.md`, `recording-script-for-mike.md`

**Chatbot today:** `src/components/Chatbot.tsx` + `src/app/api/chat/route.ts` + `src/lib/ai.ts`. Uses `claude-haiku-4-5-20251001`, system prompt built from `companyInfo`, `coreValues`, `fundingSolutions`, `topLevelFAQs`. Generic voice — does NOT use the docs corpus, the new comparison/industry/glossary data, or any of the 28 blog posts. Doesn't cite pages. Doesn't surface a booking CTA contextually.

---

## The two workstreams

### A) Content gap-filling (from the new source-extractions)

Per `content-gaps-triage.md`, about half of the 38 originally-flagged gaps can be filled from material Mike has already said on Fathom calls — no new recording required. The other half is on `recording-script-for-mike.md` for him to knock out in one 25–40 min sitting.

**A1 — Sourceable now (no Mike recording needed):**
- Equipment leasing + sale-leaseback — full explanation with Mike's analogy from DANNIK/Maria Rojas/Daryl
- PO funding alone (no downstream AR) — Sourcetobottle, Mal Tech Fleet, DANNIK/SupplySci WIP material
- Government contract financing mechanics — Stan Ciepcielinski, Mal Tech Fleet, Oliver Weilandt
- Bridge / unsecured — when & why over secured — Josh Waddell, Doug Van Poppel, Lewis
- Real estate cash-out for working capital — Amit Pandey, Designer Eyes, Carlos, Lawson
- Objections: "think about it," "go direct," "bad broker experience" — Lynn LendingTree, Daryl NY spam, Carlos, Stephen Deason OnDeck
- Industry deep-dive pages enhanced: construction (Doug Arthur, Sal Cataldo, Nick Scaff), staffing, GovCon, e-comm/DTC, manufacturing — all already mined into `industry-scripts.md`

**A2 — Needs Mike recording (`recording-script-for-mike.md`):**
- Factor-rate → APR clean teaching walkthrough
- Why bank rates are cheaper (in his voice)
- What the 2% success fee buys (clean before/after framing)
- A few personal-story polishes (founding story, "why I left direct lending," family piece, "Here to Serve" biblical origin)
- Forward-looking opinions (AI in lending, MCA industry trajectory, embedded finance, tariff financing)

**A3 — Business decisions only Mike can make:**
- Which lender partners can we publicly name
- Which transcripted-but-not-yet-published deals do we have permission to share
- Public version of the personal story (what's safe to publish)

**Tasks in A1 (the immediately-doable ones):**
1. Refactor `industry-scripts.md` content into the existing `/industries/[id]` pages — replace the original mined content with the richer per-industry framings now in the docs
2. Expand `product-explanations.md` material into the existing `/solutions/[id]` pages — specifically equipment leasing, PO funding, government contracts, bridge, real-estate (the products flagged as half-covered in original 12)
3. Update the existing FAQ data (`src/data/faq-data.ts`) to incorporate the new objection-handling material (think-about-it, go-direct, bad-broker)
4. Possibly: 2-3 new pillar blog posts from `_source-extractions/` material on the products most under-served by existing content (PO funding standalone, government contract financing, bridge structures)

### B) Chatbot upgrade

**Goal (per user):** the chatbot becomes the conversational layer on top of the website knowledge base. Sounds like Mike. Cites pages it's referencing (ideally with text-fragment highlights). Guides users around the site. Prompts a booking call when the conversation reaches a natural decision point.

**Architecture phases:**

**B1 — Voice grounding (lowest-risk, biggest immediate visible change):**
- Rewrite `buildAIContext()` in `src/lib/ai.ts` to assemble a much richer system prompt:
  - Mike's voice patterns from `docs/mike-voice-patterns.md` (signature phrases, rhythm, analogies-by-name)
  - Mike's product explanations verbatim (factoring triangle, lockbox, water-in-a-cup, drug, basement-to-ladder, band-aid)
  - The complete objection handling patterns
  - The qualifying-question framework with the curiosity-aside conventions
- Strip prospect names from the corpus before sending to model (a name-redaction filter at context-build time — never let prospect names reach the LLM context)
- Switch model from `claude-haiku-4-5-20251001` to `claude-sonnet-4-6` (or current Sonnet) for the richer voice handling; keep Haiku as a fallback for high-volume / non-conversational queries
- Enable prompt caching so the large voice-corpus system prompt is paid for once per cache window

**B2 — Page-aware grounding with citations:**
- Build a structured site index at build time (a JSON file emitted alongside the static export) listing every page with: URL, title, h2 headings, a 200-word summary, and the data type (solution, comparison, industry, blog post, glossary term, FAQ)
- Pass the index into the system prompt as a compact directory
- Teach the model (via system prompt instructions + few-shot examples) to:
  - When answering a question, cite the specific page(s) it's drawing from
  - Return citations as markdown links with text-fragment URLs where possible (`https://servefunding.com/blog/x#:~:text=specific%20phrase%20to%20highlight` — Chrome/Edge/Safari render these natively)
  - Use Mike's analogies by name (don't paraphrase)
- Update the Chatbot UI to render the citation links in a "Sources" section below each response

**B3 — Conversational guidance + booking CTA:**
- Add intent detection: when the conversation reaches a natural "this prospect would benefit from a discovery call" moment, the bot surfaces a booking CTA (link to `/discover`)
- The "natural moments" are: (a) prospect has shared revenue + use of funds + timeline, (b) prospect asks "how do I get started," (c) prospect is currently in distress (MCA-stacked, payroll emergency, declined by bank)
- Implement as a structured-output side-channel — the bot returns a regular reply + a JSON tag (e.g. `<intent>book-discovery</intent>`) that the UI catches and uses to render the booking CTA inline
- Add a follow-up FAQ surface: when the bot links to a page, the UI shows 2-3 related questions the user might want to ask next, derived from the FAQ data of the linked page

**B4 — Tool use / function calling (optional, larger lift):**
- If B1-B3 produce mixed accuracy, upgrade to tool use:
  - `search_site(query: string)` — returns top-K pages with summaries
  - `get_page_content(url: string)` — returns full text of a specific page
  - `book_discovery_call()` — surfaces the booking modal directly
- This is the "agentic" version the user mentioned. Costs more per query but produces cleaner citations and lets the bot be more specific.

**B5 — Polish + observability:**
- Telemetry: log every chatbot conversation (with PII redaction) to a Supabase table; review weekly for missed citation opportunities, off-voice responses, missed booking-CTA moments
- A/B the "voice" — run conversations through Mike's review pattern (same subagent loop we use for blog posts) and tune the system prompt based on what Mike flags

---

## Phasing & sequencing

The honest answer for what to do in what order:

**This session (already mid-flight, will continue after this plan doc is committed):**
- (A1.3) Expand FAQ data with the new objection-handling material (think-about-it, go-direct, bad-broker) — small data-file edit, ~30 min
- (B1) Voice-grounding upgrade of `buildAIContext()` — rewrite to pull from docs/, add name-redaction filter, switch to Sonnet, enable caching — ~1 hr
- Build + commit + push as a discrete PR-43 commit

**Next session(s) — content workstream:**
- (A1.1) Industry-scripts material → industry pages (~2 hr for all 6)
- (A1.2) Product-explanations material → solution detail pages (~2 hr for the 5 half-covered products)
- (A1.4) 2-3 new pillar blog posts: "How PO Funding Actually Works," "Government Contract Financing for Subcontractors," "Bridge Capital: When to Use It and When Not To" — each ~3 hr with subagent review

**Next session(s) — chatbot workstream:**
- (B2) Build the static site index at build time + teach the bot to cite — ~3 hr
- (B3) Conversational guidance + booking CTA via structured outputs — ~3 hr
- (B5) Telemetry + Mike-review loop — ~2 hr

**After Mike records:**
- (A2) Drop his recording into `docs/`, regenerate the voice corpus, re-run the chatbot system-prompt builder, fill the last gaps in the website content

**Estimated total time to "done":**
- Content workstream: 8–12 hours of focused work
- Chatbot workstream: 6–10 hours
- Mike recording: 25–40 min on his end + 2 hr of post-processing on our end

---

## Compaction continuity — what to do if context is reset

If a future session picks this up after `/compact`, the entrypoints are:

1. **This file** (`docs/IMPLEMENTATION-PLAN.md`) — what the plan is, what's done, what's next
2. **`docs/START-HERE.md`** — the KB overview
3. **`docs/content-gaps-triage.md`** — what's sourceable now vs. needs Mike
4. **`docs/recording-script-for-mike.md`** — what's pending on Mike's side
5. **`CLAUDE.md`** — repo conventions, git workflow, SEO rules
6. **`.claude/skills/create-blog-post/SKILL.md`** — the workflow for new posts including the voice cheat sheet
7. **Memory:** `feedback_no_customer_info_in_public_content` — the customer-info rule

The current PR-43 state is on the `dev` branch at the latest commit. Build status is 102/102 SEO valid, 77 routes.

---

## Open questions

These are the things I'd want a quick yes/no from the user on before going deeper on B2+:

1. **Model choice for the chatbot.** Stay on Haiku for cost, or move to Sonnet for richer voice? My recommendation: Sonnet for the chat surface, Haiku for the lightweight intent classifier (B3). Prompt caching makes Sonnet workable cost-wise.
2. **Tool use vs. monolithic system prompt.** B2-B3 can be done with a giant system prompt (simpler, slower for cold queries, more expensive per call without caching) OR via tool use (cleaner, more accurate, more engineering). Recommendation: start with the giant system prompt + caching, upgrade to tool use only if accuracy is mixed.
3. **Where to store the site index.** Static JSON file at build time (simplest), or a Supabase table the bot queries at runtime (more flexible, supports semantic search later). Recommendation: static JSON for B2, migrate to Supabase if/when B4 happens.
4. **Voice-corpus redaction.** The docs have prospect names. The chatbot's system prompt must never include those names. Should the redaction be (a) a build-time filter that generates a sanitized version of each docs file, or (b) a runtime filter that scrubs the corpus as it's loaded into the system prompt? Recommendation: build-time filter, with the sanitized output committed to a separate `docs/_sanitized/` directory so we can audit what the bot sees.
