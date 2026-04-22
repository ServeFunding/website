---
name: create-blog-post
description: Create a new Serve Funding blog post (Markdoc .mdoc file in /posts/, with matching cover image in /public/blog/). Use when the user asks to draft, create, add, or publish a blog post. Handles frontmatter, renderer constraints, cover image generation via the n8n webhook, WebP conversion, and the dev → PR → main git workflow.
---

# Create a Serve Funding blog post

A blog post on this site is a single `.mdoc` file in `/posts/` plus a cover image in `/public/blog/`. The file-based router at `src/app/blog/[blog-id]/page.tsx` picks up the slug automatically — no route code to write.

## Prerequisites (install once per machine)

- **Node 20+** and the repo's deps installed: `npm install` in the repo root.
- **`cwebp`** for PNG → WebP conversion. On macOS: `brew install webp`. On Ubuntu: `sudo apt install webp`.
- **`gh`** (GitHub CLI) authenticated against the `ServeFunding/website` repo: `gh auth login`.
- **Clone is clean** and you're on an up-to-date `dev` branch: `git checkout dev && git pull`.

If any of these are missing the skill's commands will fail partway through. Verify before starting, not after.

## Ground rules (do not skip)

1. **Workflow is `dev` → PR → `main`.** Never push directly to `main`. Check out `dev`, commit there, open a PR. (If you see a lone commit on `main` from someone who skipped this, flag it — Kyler did this once and it desynced `dev`.)
2. **`npm run build` runs `scripts/verify-seo.ts` FIRST.** If frontmatter fails length rules, the build dies before Next.js even starts — which means **Vercel deploys fail silently** and the post never reaches production. Hard limits:
   - **Title ≤ 54 chars.** The template appends ` | Serve Funding` (16 chars) for a 70-char OG-title budget. Count carefully.
   - **Excerpt 120–160 chars.** This doubles as the meta description.
   - **Subtitle** has no hard limit but keep it under ~100 chars for mobile.
   - Run `npx tsx scripts/verify-seo.ts` locally before committing. It prints exact char counts on failure.
3. **Markdoc constraints — silent rendering failures if violated:**
   - Never use `---` (horizontal rules) in the body. Only in the frontmatter delimiters at the very top. Renders as `<hr>` → React hydration error → 500 in prod.
   - Never use checkbox syntax (`- [ ]` / `- [x]`). Markdoc ignores it and prints literal `[ ]`. Use plain bullets.
   - Only use standard markdown + the two supported custom tags (`callout`, `relatedPosts`). Anything else may render blank.
4. **Cover images must be `.webp`.** PNG/JPG work but break the convention and hurt Lighthouse. Always convert.
5. **Future-dated posts disappear.** [src/lib/blog-utils.ts](src/lib/blog-utils.ts) filters posts where `date > today` out of both the index AND the static route list — `/blog/{slug}` 404s until the date arrives. If you want it live now, date it today or earlier.

## Inputs to collect from the user

Before writing anything, confirm:

- **Topic / angle** — what question does this answer? What's the hook?
- **Category** — one of: `Insights`, `Case Study`, `Business Growth`, `Values`. (Yes, there's also a stray `"Case Studies"` on one file — prefer `Case Study` singular.)
- **Related solutions** — IDs from [src/data/solutions.tsx](src/data/solutions.tsx). Valid options: `working-capital-loans`, `invoice-factoring`, `equipment-leasing`, `asset-based-lending`, `inventory-financing`, `purchase-order-funding`, `government-contracts`, `real-estate-lending`, `unsecured-debt`, `bridge-funding`, `sba-loans`, `debt-refinance`.
- **Related industries** — free-form lowercase strings, e.g. `construction`, `manufacturing`, `healthcare`, `staffing`, `retail`, `hospitality`, `services`.
- **Author** — default `"Michael Kodinsky"` with `authorImage: "/Michael Headshot.webp"`. Ask if it should be someone else.

If the user gives you just a topic, make reasonable picks and surface your choices in the response — don't gate progress on a perfect answer.

## Step 1 — Write the `.mdoc` file

Path: `/posts/{kebab-case-slug}.mdoc`. The slug IS the URL, so choose it deliberately.

Template:

```markdown
---
title: "Headline — concrete, specific, ideally a question or contrarian claim"
subtitle: "One sentence that earns the click"
excerpt: "1–2 sentence preview for the blog index card. Keep under ~200 chars."
author: "Michael Kodinsky"
date: "YYYY-MM-DD"
category: "Insights"
image: "/blog/{slug}.webp"
relatedSolutions: ["solution-id-1", "solution-id-2"]
relatedIndustries: ["construction", "manufacturing"]
authorImage: "/Michael Headshot.webp"
---

Opening hook — one short punchy line, no heading above it.

A paragraph of setup that frames the problem from the reader's POV.

## First real section heading (H2)

Body copy. Standard markdown. Use `**bold**` for emphasis, not ALL CAPS.

{% callout type="tip" title="The Truth" %}
Short insight the reader should walk away with.
{% /callout %}

## Second section

More content. Prefer concrete numbers and real scenarios over generic claims.

{% relatedPosts category="Insights" limit="3" /%}
```

Callout types: `info` (blue), `warning` (amber), `tip` (green), `danger` (red).

**Voice checklist:**
- Educational, not salesy. Answer the reader's real question.
- Specific numbers and named industries beat hedged abstractions.
- Link to FAQ answers and `/solutions/{id}` pages inline where natural.
- 600–1500 words is the normal range. Case studies can be shorter.

## Step 2 — Generate the cover image

Use the n8n webhook. Prompts must describe **professional photography** — real people, business context. Never illustrations, cartoons, or abstract graphics. Look at `/public/blog/Meeting1.webp`, `Cofee.webp`, `Walking.webp` for the target aesthetic.

```bash
SLUG="your-post-slug"
PROMPT="Professional photograph of [people] in [setting] [doing action], [business context]"

curl -X POST https://aiascend.app.n8n.cloud/webhook/generate-image \
  -H "Content-Type: application/json" \
  -d "{\"prompt\": \"$PROMPT\"}" \
  -o "/tmp/${SLUG}.png" -s

cwebp "/tmp/${SLUG}.png" -o "public/blog/${SLUG}.webp"
rm "/tmp/${SLUG}.png"
```

**Prompt patterns by topic:**
- Funding decisions: `Professional photograph of diverse business team in modern office discussing financial decisions, reviewing charts and documents`
- Cash flow / operations: `Professional photograph of business professionals managing warehouse or inventory operations, real people in operational setting`
- Lender relationships: `Professional photograph of business meeting between advisor and business owner, collaboration and trust, handshake in modern office`
- Growth / revenue: `Professional photograph of professionals reviewing growth charts and revenue reports at meeting table`

**Verify** the WebP is in `public/blog/{slug}.webp` and is 40–150 KB. If it came out >300 KB, re-run `cwebp` with `-q 75`.

## Step 3 — Local preview AND build verification

```bash
npm run dev
```

Open `http://localhost:3000/blog/{slug}`. Check:
- Hero renders with cover image (not a broken icon)
- No 500 error (that's the `---` trap)
- Callouts are colored, not raw `{% callout %}` text
- Related posts widget populates

Then — **this is not optional** — run the same build Vercel runs:

```bash
npm run build
```

If this fails with an SEO error, fix the frontmatter and re-run. Skipping this step is how the invoice-factoring-myths post sat broken on production for a day: the deploy silently failed on title/excerpt length and nobody noticed until someone checked the live URL.

## Step 4 — Commit and PR

```bash
git checkout dev
git pull
git add posts/{slug}.mdoc public/blog/{slug}.webp
git commit -m "content: add {short post description}"
git push
gh pr create --base main --head dev --title "content: {title}" --body "Adds {short summary}."
```

One commit per post is the norm. If the user hasn't asked you to commit, stop after Step 3 and show them the files — don't create commits unprompted.

## Common mistakes — check for these before finishing

- **Title > 54 chars or excerpt > 160 chars** → `verify-seo` fails → Vercel build fails → post never deploys. Always run `npm run build` locally.
- `---` appears on a line by itself inside the body → will 500 in prod. Grep `grep -n '^---$' posts/{slug}.mdoc` should return exactly two lines (1 and ~12).
- Image path in frontmatter doesn't match the file you saved (`.jpg` vs `.webp`, wrong slug).
- `relatedSolutions` contains an ID that doesn't exist in `src/data/solutions.tsx` → broken links in the "Related Solutions" widget.
- Author image path has wrong capitalization (`/Michael Headshot.webp` is correct, case-sensitive on Linux deploys).
- Post dated in the future → hidden until the date arrives (filter in `src/lib/blog-utils.ts`). Check this first if a committed post isn't showing.
- Pushed straight to `main` instead of via `dev` → PR. Always use the PR flow.

## Debugging checklist: "the post isn't showing on production"

Run these in order:

1. `git log origin/main -- posts/{slug}.mdoc` — is the commit actually on main?
2. `gh api repos/ServeFunding/website/commits/{sha}/status --jq '.state'` — did Vercel fail? If `failure`, check `target_url` for the build log.
3. `npm run build` locally — reproduces Vercel's failure mode, usually an SEO length error.
4. Check the post's `date:` field — if it's in the future, it's deliberately hidden.
5. Check the author image path's capitalization.

## Fully worked example — from topic to live post

User says: "Add a post about whether SBA loans are worth the paperwork for a $500K ask."

```bash
# 1. Make sure the repo is clean and on dev
git checkout dev && git pull

# 2. Pick a slug
SLUG="sba-loans-worth-the-paperwork-at-500k"

# 3. Create the .mdoc file (see template in Step 1). Keep:
#    title ≤ 54 chars, excerpt 120–160 chars, date today or earlier
#    e.g. title: "Are SBA Loans Worth the Paperwork at $500K?"  (44 chars ✓)

# 4. Generate and convert the cover image
curl -X POST https://aiascend.app.n8n.cloud/webhook/generate-image \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Professional photograph of small business owner reviewing loan documents with advisor at modern office desk, stacks of paperwork, thoughtful expression"}' \
  -o "/tmp/${SLUG}.png" -s
cwebp "/tmp/${SLUG}.png" -o "public/blog/${SLUG}.webp"
rm "/tmp/${SLUG}.png"

# 5. Verify
npx tsx scripts/verify-seo.ts   # must report "All SEO metadata passes"
npm run build                    # must exit 0
npm run dev                      # open http://localhost:3000/blog/${SLUG}

# 6. Ship — only if the user asked you to commit
git add posts/${SLUG}.mdoc public/blog/${SLUG}.webp
git commit -m "content: add SBA loan paperwork post"
git push
gh pr create --base main --head dev \
  --title "content: SBA loans worth the paperwork" \
  --body "Adds /blog/${SLUG} — answers whether SBA paperwork burden pencils out at a \$500K ask."

# 7. Confirm deploy succeeded after merge
SHA=$(git rev-parse origin/main)
gh api repos/ServeFunding/website/commits/${SHA}/status --jq '.state'
# Expect: "success". If "failure", see debugging checklist above.
```
