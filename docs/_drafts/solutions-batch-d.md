# Batch D drafts — real-estate-lending, unsecured-debt, bridge-funding

> Drafts for `src/data/solutions.tsx` (lines 183-245 replacement) plus FAQ candidates that match the shape in `src/data/faq-data.ts`. Voice: Michael Kodinsky, "capital that serves you." Numbers and ranges drawn from the existing `whatIs` capsules in solutions.tsx and from Mike's verbatim explanations in `docs/product-explanations.md` and `docs/_source-extractions/batch4-bridge-re-ecomm-mfg.md`. All prospect names anonymized to industry + size + scenario.

---

## real-estate-lending

### fullDesc (300-500 words, Mike's voice, narrative not bullets)

Here's the deal on real-estate lending: if you own commercial property — a building, a warehouse, owner-occupied space, an investment parcel — you may be sitting on the cheapest capital in your stack and not realize it. Real estate is the lender's favorite asset. It's not going anywhere, it's generally appreciating, and so the rates and terms attached to it are almost always going to beat what you can get on an asset-based line, an inventory loan, or a revenue-based product. That's not me selling — that's just the math of how risk gets priced.

The way I think about all business lending is in two underwriting buckets: asset-backed or revenue-based. Real estate is the asset that anchors the cheapest version of bucket one. If your property is free and clear, or there's real equity behind a first mortgage, we can usually pull capital out of it — a cash-out refinance, a second-position loan, a bridge, or in some cases a sell-leaseback — and redeploy that capital into the operating business. I tell owners all the time: you have dead equity sitting in property you already own. Let's put it to work.

A few real-world examples, anonymized. A specialty-eyewear DTC brand with a free-and-clear ~$3.35MM building wanted working capital to fund pre-season inventory and pay down vendor AP. The owner was rate-sensitive — wouldn't touch anything outside single digits — so an asset-based line on inventory was a non-starter at 15-25%. The right answer was a real-estate-backed cash-out with a layered line of credit on top, sized so the operating business comfortably covers the debt service. A surgeon mid-acquisition used a second mortgage on personal real estate as one of several layers in a larger M&A capital stack. Different deals, same logic: secure it with the property, get the lowest rate available, then build the rest of the structure around it.

As of 2026, we work facilities from $500K to $100MM+ across industrial, office, retail, multi-family, mixed-use, and investment portfolios. Bridge structures run 12-36 months (often interest-only); permanent loans amortize 25-30 years at roughly Prime + 2-7%. LTV depends on the asset — owner-occupied commercial typically goes 65%+; raw land caps closer to 50%. We work with banks, credit unions, institutional lenders, private credit, and equity funds, and we use DSCR-based or bank-statement-based underwriting depending on what the file supports. The right structure depends on what you're optimizing for: lowest rate, lowest debt service, maximum cash extraction, or speed. We'll walk through the tradeoffs before anyone signs anything.

### features (8-12 bullets, specific Mike-style detail)

- Facilities from $500K to $100MM+, across all commercial property types
- Cash-out refinance to redeploy dead equity into the operating business
- Bridge structures (12-36 months, often interest-only) for acquisition timing and short hold periods
- Permanent mortgages amortizing 25-30 years, typically Prime + 2-7% as of 2026
- Owner-occupied commercial real estate: 65%+ LTV typical; layered LOC option on top
- Investment / non-owner-occupied: DSCR-based underwriting against rental income
- Raw land: 50% LTV maximum and slower to close — set expectations early
- Sell-leaseback as a max-cash-extraction alternative when the owner is willing to give up the asset
- PROPCO/OPCO structures supported — lender will underwrite both
- SBA-style real-estate-backed structures available for businesses with a few rough years on the P&L (pro-forma underwrites)
- Pairs cleanly with an asset-based line or unsecured stretch capital to build a layered-capital stack
- Bank-friendly: most of these deals are referred in by bankers when the bank can't do the cash-out themselves

### bestFor (6-10 specific scenarios)

- Owners sitting on free-and-clear or lightly-mortgaged commercial property who need working capital
- Rate-sensitive owners (single-digit ceiling) where an asset-based line on inventory or AR is too expensive
- E-commerce / DTC operators with no factorable B2B AR but property to leverage for pre-season inventory
- Acquisition timing — buying a property where the permanent take-out isn't ready yet
- Business owners in slow-season, pre-funding peak inventory before revenue ramps
- M&A scenarios using personal or business real estate as one layer in a multi-product stack
- Operators with a few negative P&L years who can show a defensible pro forma on the property
- Investment portfolios needing DSCR-based refinance or cash-out
- Anyone whose banker said "we can't do the cash-out on the LTV you need" and referred them out

### FAQ candidates (5 new entries — typescript object literals)

```typescript
{
  id: 're-cash-out-working-capital',
  q: 'Can I use real estate I already own to fund the operating business?',
  a: 'Yes — and for the right profile, it\'s usually the cheapest capital in your stack. If your commercial property is free and clear or has real equity behind a first mortgage, a cash-out refinance or second-position loan pulls that "dead equity" out at rates that almost always beat an asset-based line or inventory loan. Real estate is the lender\'s favorite asset, so the rates reflect that. The right structure depends on whether you\'re optimizing for lowest rate, lowest debt service, or maximum cash out.',
  relatedSolutions: ['real-estate-lending', 'asset-based-lending', 'unsecured-debt']
},
{
  id: 're-ltv-by-asset-type',
  q: 'What LTV can I actually borrow against commercial real estate?',
  a: 'It depends on the asset. Owner-occupied commercial property typically supports 65%+ LTV, and you can often layer a line of credit on top that pushes effective leverage closer to 80% when the operating business is underwritten alongside. Investment / non-owner-occupied is DSCR-driven and varies with rental income. Raw land is a different animal — 50% LTV is the practical ceiling, and these deals close slower because fewer lenders touch them.',
  relatedSolutions: ['real-estate-lending']
},
{
  id: 're-bridge-vs-permanent',
  q: 'Should I take a bridge loan or a permanent mortgage on my property?',
  a: 'Depends on what you\'re optimizing for. A fully amortizing 25-year mortgage gives you the lowest rate but higher debt service because you\'re paying principal every month. A bridge is interest-only — the rate is a few points higher, but the monthly debt service is considerably lower, which matters a lot if cash is tight. If you can refinance into a permanent structure in 12-24 months at a better rate, the bridge often pencils out better in the meantime.',
  relatedSolutions: ['real-estate-lending', 'bridge-funding']
},
{
  id: 're-sell-leaseback',
  q: 'What is a sell-leaseback and when does it make sense?',
  a: 'Sell-leaseback is when you sell your owner-occupied property to an investor and immediately lease it back, so operations continue uninterrupted. It extracts the maximum cash — close to 100% of the value, versus 65-75% on a mortgage — but you give up the asset and take on a long-term lease obligation. It usually makes sense when an owner wants to pull the most capital possible to redeploy into the business and doesn\'t mind no longer owning the real estate.',
  relatedSolutions: ['real-estate-lending']
},
{
  id: 're-bad-years-can-i-still-qualify',
  q: 'My business had a few rough years. Can I still borrow against my real estate?',
  a: 'Often yes. We work with real-estate-backed SBA lenders and private-credit groups that don\'t get scared off by a couple of negative years on the P&L if the property and the forward story support it. They\'ll do pro-forma underwrites — looking at where the business is going, not just trailing twelve months. The property carries most of the underwriting weight, which is why real-estate-backed structures are often the path for owners who don\'t fit a clean bank credit box.',
  relatedSolutions: ['real-estate-lending', 'sba-loans']
}
```

---

## unsecured-debt

### fullDesc (300-500 words, Mike's voice, narrative not bullets)

Subordinated and unsecured credit is what I call stretch capital. It's the layer that sits on top of the secured stack — on top of an asset-based line, on top of a real-estate mortgage, on top of equipment financing — when you've already pledged the obvious collateral but still have a real growth opportunity to fund. The way layered-capital stacks actually get built in the real world is exactly this: you anchor the cheapest, most secured piece first, and then you stretch on top with subordinated or unsecured debt to get the total dollars where they need to be.

Here's the framework. All business lending falls into one of two underwriting buckets — asset-backed or revenue-based. Senior secured debt is the asset-backed bucket: you give a lender a UCC-1 on your AR or a mortgage on your building, and they price the deal cheaply because they have collateral. Subordinated and unsecured debt is what comes next when the senior is already in place. Subordinated debt sits behind the senior lender in the lien priority — it's still secured, but second-position, and it typically lends at 1-5× EBITDA depending on the cash-flow profile. Unsecured products skip the lien entirely: no UCC filing, sometimes no personal guarantee, priced higher because the lender is taking more risk. Both of these tools are how a business gets to a number bigger than what the senior lender alone is willing to do.

A few examples, anonymized. A surgeon mid-acquisition needed $1.475MM of bridge capital within weeks to cover year-end expenses while a hospital-system deal worked through close. The stack used a senior real-estate piece plus an unsecured stretch on top — neither alone got to the number; the layered structure did. A growing medical-device company layered a $240K unsecured term loan with an existing AR revolver to move inventory ahead of an upcoming tariff change. The AR line was already maxed against eligible receivables; the unsecured layer filled the gap without unwinding the senior facility.

As of 2026, we structure these from $50K to $20MM+. Terms typically run 6-36 months, often interest-only on the bridge variants. Pricing is Prime + 4-8% depending on the structure, the cash-flow strength, and how subordinated the position is. Some products carry no UCC filing; some carry no personal guarantee — both matter when you're trying to preserve flexibility for the senior lender. The honest framing: stretch capital costs more than the senior layer below it, by design. The question to ask is whether the incremental dollars unlock enough upside to justify the cost. When the answer is yes, this is the tool that makes the bigger picture work.

### features (8-12 bullets, specific Mike-style detail)

- Facility sizes from $50K to $20MM+, scaled to the size of the gap above your senior line
- Subordinated debt typically lends at 1-5× EBITDA — sized to cash flow, not collateral
- Unsecured term and bridge products with no UCC filing on some structures
- Personal-guarantee-free options on select products (rare, but real)
- Sits behind a senior ABL, AR factoring line, or real-estate mortgage — designed to layer cleanly
- Terms 6-36 months, often interest-only during the bridge period
- Pricing roughly Prime + 4-8% as of 2026, depending on cash flow and lien position
- Second-lien structures available for stacks that need a true secured stretch layer
- Faster underwriting than senior secured products — days to a few weeks, not months
- Bank-friendly: subordinated layers are often what makes the bank's senior deal possible at the size they're comfortable with
- Pairs with: senior ABL, AR factoring, real-estate cash-out, equipment financing
- Honest framing: this is the most expensive secured-stack layer by design — used when the incremental dollars unlock outsized upside

### bestFor (6-10 specific scenarios)

- M&A and acquisition deals where the senior lender can't get the whole number done alone
- Operators who've pledged their AR, inventory, and real estate and still need additional growth capital
- Companies with strong EBITDA but limited remaining collateral (the classic subordinated-debt fit)
- Bridge timing on transactions where a longer-term take-out is in motion but not yet closed
- Pre-tariff or pre-seasonal inventory stocking that exceeds the AR line's borrowing base
- Owner buyouts, partner buyouts, and leveraged buyouts needing a mezz-style layer
- Growth-stage businesses too large for revenue-based products but layered out on senior secured
- Project-based working capital where the senior facility doesn't size up to the need
- Bank-referred deals where the bank wants to keep its senior position clean and needs the stretch to come from elsewhere

### FAQ candidates (5 new entries — typescript object literals)

```typescript
{
  id: 'what-is-stretch-capital',
  q: 'What is "stretch capital" and when do I need it?',
  a: 'Stretch capital is the layer that sits on top of your senior secured debt — usually a subordinated or unsecured loan — when you\'ve already pledged your obvious collateral but still need more dollars to get the deal done. It\'s how layered-capital stacks actually get built: senior secured first (cheapest), then stretch on top to reach the full number. You need it when the senior lender can\'t size the facility large enough on its own and the incremental dollars unlock real upside.',
  relatedSolutions: ['unsecured-debt', 'asset-based-lending', 'real-estate-lending']
},
{
  id: 'subordinated-vs-unsecured',
  q: 'What\'s the difference between subordinated debt and unsecured debt?',
  a: 'Subordinated debt is still secured — there\'s a lien — but it sits behind your senior lender in priority, so if anything goes sideways, the senior gets paid first. It typically lends at 1-5× EBITDA. Unsecured debt skips the lien entirely: no UCC filing, sometimes no personal guarantee, priced higher because the lender has no collateral. Subordinated is more common in M&A and larger growth deals; unsecured shows up more on smaller bridge and gap-fill situations.',
  relatedSolutions: ['unsecured-debt']
},
{
  id: 'will-stretch-capital-mess-up-senior-line',
  q: 'Will subordinated or unsecured debt interfere with my existing bank or ABL line?',
  a: 'Not if it\'s structured correctly — that\'s the whole point. Subordinated lenders sign intercreditor agreements with your senior lender so the lien priority is documented and the bank stays comfortable. Some unsecured products carry no UCC filing at all, which makes them especially clean from the senior\'s perspective. The bank usually appreciates a well-structured stretch layer, because it lets them keep their senior position right-sized without having to overextend.',
  relatedSolutions: ['unsecured-debt', 'asset-based-lending']
},
{
  id: 'subordinated-debt-cost',
  q: 'How much does subordinated or unsecured stretch capital cost?',
  a: 'As of 2026, pricing typically runs Prime + 4-8% depending on cash-flow strength, lien position, and how subordinated the layer is. That\'s more expensive than the senior secured piece underneath — by design, because the lender is taking more risk. The honest question to ask isn\'t "is this cheap?" but "do the incremental dollars unlock enough upside to justify the cost?" When the answer is yes, this is the tool that gets the deal done.',
  relatedSolutions: ['unsecured-debt']
},
{
  id: 'unsecured-no-pg',
  q: 'Are there unsecured products with no personal guarantee?',
  a: 'A few, yes — they exist but they\'re rare and the underwriting bar is higher. Most stretch-capital products will ask for a PG, especially if the structure is unsecured and there\'s no collateral to anchor it. When a no-PG option is on the table, it tends to be priced at the higher end of the range and the lender is leaning heavily on the historical cash flow and the strength of the senior secured structure underneath. We surface these options when they fit; we don\'t promise them blind.',
  relatedSolutions: ['unsecured-debt']
}
```

---

## bridge-funding

### fullDesc (300-500 words, Mike's voice, narrative not bullets)

Bridge funding is event-driven capital. It exists to get you from where you are now to a specific thing that's about to happen — a contract closing, an acquisition funding, a property selling, a senior facility coming online — and then it exits. That's the whole job. The discipline of a good bridge structure is that you only pay interest for the days you actually use the money. If the event closes in 45 days, you carry the cost for 45 days, not for a year.

Here's how I usually frame it: bridge is a means to an end. The annualized rate sounds expensive on paper — call it 6-7% on an annualized basis at the lower end, higher on faster-moving deals — but when you understand it functions like a line of credit you can pay off in 60 days, the math looks different. You're giving up a few points on a strong-margin transaction to get the deal across the finish line. That tradeoff almost always works when the exit is real and visible.

Where bridge fits in the layered-capital stack: it's usually step one in a longer sequence. I think of it as a "one-then-three" approach — get the bridge in place fast because it can close in days, then run the longer, cheaper, larger facility in parallel knowing that takes six to eight weeks. A custom heavy-equipment manufacturer with a 9-month production cycle used a $1MM+ revenue-based bridge to keep the production line moving while we assembled the full asset-based facility behind it. A surgeon mid-acquisition needed $1.475MM of bridge inside of weeks to cover year-end while the hospital-system deal worked through close. Different industries, same logic: the bridge buys the time you need, and it exits when the bigger thing lands.

The discipline — the part that separates a good bridge from a bad one — is the exit. A bridge with no visible take-out isn't a bridge; it's expensive working capital. If the repayment source is "investors who are positively responding," that's not a bridge. If the repayment source is "an ABL we're already underwriting" or "a property under contract" or "a contract with a signed assignment of claims," that's a bridge. I'll walk away from the first scenario. I'll lean into the second.

As of 2026, we structure bridge facilities from $50K to $5MM+. Typical closes run 3-7 business days. The capital stays outstanding for 30-180 days in most cases. Pricing varies with speed and structure — roughly Prime + 4-8%, often interest-only — and most products carry aggressive early-payoff discounts so the incentive is aligned with paying it off as soon as the exit event lands. We use bridge to fund acquisition timing, contract mobilization, pre-season inventory, M&A gaps, and the runway between "we got declined for the senior facility today" and "the senior facility funds in 60 days."

### features (8-12 bullets, specific Mike-style detail)

- Facility sizes from $50K to $5MM+
- Typical close: 3-7 business days from clean file to funded
- Capital outstanding 30-180 days in most cases — built to exit, not to amortize
- Interest-only payment structures so debt service stays low while the bridge is live
- Early-payoff discounts on most products — you only pay interest for the days you use the money
- Pricing roughly Prime + 4-8% as of 2026, depending on speed and structure
- Sequencing logic: "one-then-three" — bridge first (days), longer facility in parallel (6-8 weeks)
- Event-driven exits supported: contract close, property sale, acquisition funding, ABL/senior take-out
- Pairs cleanly with: asset-based lending, real-estate cash-out, SBA take-out, contract financing
- Bank-friendly: protects the referring banker's relationship by avoiding a long-term commitment elsewhere
- Disqualification discipline: we won't structure a bridge with no visible exit (soft investor commitments, speculative appreciation)
- Works for both small operating gaps (sub-$250K) and large M&A timing gaps (multi-million)

### bestFor (6-10 specific scenarios)

- Acquisition timing gaps — covering year-end or working capital while M&A closes
- Asset-based or SBA facilities under way but 6-8 weeks from close — fund operations in the meantime
- Custom manufacturers mid-production cycle when customer deposits stop coming in
- Contract mobilization on a newly-won government, municipal, or large commercial deal
- Property transactions where the take-out mortgage isn't ready yet
- Pre-season inventory builds with a clean exit when receivables convert
- Owner-operators who've been declined by the bank today but are in motion on a longer-term refi
- M&A bridge layered with a senior real-estate or subordinated tranche
- Any deal where the exit event is real, visible, and on a known timeline

### FAQ candidates (5 new entries — typescript object literals)

```typescript
{
  id: 'what-makes-a-good-bridge',
  q: 'What makes a "good" bridge loan vs. a bad one?',
  a: 'The single most important variable is the exit. A good bridge has a visible, time-bound take-out — an ABL closing in 60 days, a property under contract, a senior facility under written term sheet, a contract with assignment of claims signed. A bad bridge has no defined exit and ends up rolling into another bridge, then another. If the repayment source is "investors who are positively responding," that\'s not a bridge — that\'s expensive working capital pretending to be one. We walk away from those.',
  relatedSolutions: ['bridge-funding']
},
{
  id: 'bridge-cost-sounds-expensive',
  q: 'The annualized rate on a bridge looks high. Is it actually expensive?',
  a: 'Not if you only carry it for the days you actually need it. Bridge products are built to exit fast, usually 30-180 days, and most carry aggressive early-payoff discounts so the effective cost scales with how long you hold the capital. A 6-7% annualized rate held for 60 days on a strong-margin deal is almost always worth it. The mistake is treating bridge like a long-term loan — that\'s when the annualized number actually hurts you.',
  relatedSolutions: ['bridge-funding']
},
{
  id: 'bridge-while-abl-set-up',
  q: 'Can I use a bridge while my asset-based line is being set up?',
  a: 'Yes — this is one of the most common ways we sequence capital. We call it a "one-then-three" approach: get a fast revenue-based or unsecured bridge in place in days, then run the asset-based facility in parallel knowing it takes 6-8 weeks to close. The bridge stabilizes operations during the gap; the ABL is the permanent structure. When the ABL funds, it takes out the bridge.',
  relatedSolutions: ['bridge-funding', 'asset-based-lending']
},
{
  id: 'how-fast-bridge',
  q: 'How fast can a bridge actually close?',
  a: 'As of 2026, typical bridge closes run 3-7 business days from a clean file. The variables that determine speed are how complete the financials are, whether the exit event is documented, and how clean the existing senior debt picture is. Truly fast (1-2 day) closes exist for established cash-flowing businesses with strong bank-statement history; complex collateral or thin documentation pushes closer to the two-week mark.',
  relatedSolutions: ['bridge-funding']
},
{
  id: 'bridge-vs-mca',
  q: 'Is bridge funding the same as a merchant cash advance?',
  a: 'No, and the distinction matters. A merchant cash advance is short-term capital with daily or weekly debits, typically no defined exit event, and pricing that gets dramatically worse if you stack multiple advances. A proper bridge is event-driven — it exits when a specific thing closes — and carries interest-only or monthly payment structures with aggressive early-payoff incentives. Bridge belongs in a layered-capital strategy; MCA usually doesn\'t.',
  relatedSolutions: ['bridge-funding', 'debt-refinance']
}
```

---

*Drafted 2026-05-28. Source-grounded against `docs/product-explanations.md`, `docs/mike-voice-patterns.md`, `docs/_source-extractions/batch4-bridge-re-ecomm-mfg.md`, `docs/industry-scripts.md`. All ranges and structural claims trace to existing `whatIs` capsules in `src/data/solutions.tsx` or verbatim Mike explanations. All real-deal references anonymized to industry + size + scenario.*
