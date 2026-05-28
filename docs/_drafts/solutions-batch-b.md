# Batch B drafts — equipment-leasing, asset-based-lending, inventory-financing

> Draft expansions for `src/data/solutions.tsx`. Voice = Mike (Michael Kodinsky). Customer-name-safe — anonymized to industry + size + scenario only. As of 2026.

---

## equipment-leasing

### fullDesc (300–500 words)

Here's the deal on equipment financing. If you're buying a piece of machinery, a fleet of vehicles, a clean room, an imaging suite — anything with a serial number and a useful life — financing the asset directly is almost always cheaper than pulling that same money off a working-capital line. Why? Because the equipment itself is the collateral. If something happens in your business, God forbid, the lender can go get the equipment, turn around and sell it, and recover their money. That hard asset is what makes the rate cheaper. Working capital, by contrast, is underwritten on your revenue and the lender's faith that the business stays profitable — so it costs more. We've seen plenty of operators try to fund a piece of equipment off their line of credit because it's the easiest path, and end up paying double-digit interest on something that should have been in the single digits.

As of 2026, what good terms actually look like: 60-month terms are typical, sometimes 72, with rates that start in the high single digits and run into the low teens depending on the credit and the asset. Some of our lenders will defer payments three months on the front end so you can get the equipment installed and earning before the first invoice hits. Five-year terms at high single digits to low teens, monthly payments, three months deferred — that's wonderful, and we place that all day long.

A couple of things most people miss. First, if the equipment is manufactured abroad, that's pretty much par for the course in the equipment leasing space — the borrower pays for it, ships it, clears it through U.S. customs, and then the lender reimburses on the back end. Plan for that bridge. Second, if the credit is thin or the business is young, what we call a "story credit" deal can still get done — you just need a lender willing to see the story through that lens. And third, if your manufacturer offers direct financing and the terms are reasonable, take it. We'll tell you that to your face. Our value is then helping you put the working capital alongside it.

The other half of this product is the sale-leaseback. If you already own equipment free and clear, you've already paid for it once — why is its equity locked up? A sale-leaseback lets a lender take title to the equipment and lease it back to you, putting cash on your balance sheet without disrupting operations. We typically see this when an owner wants growth capital but doesn't want to touch real estate, take on a personal guarantee, or run an MCA. The equipment was sitting there anyway. Now it's also working capital.

### features (8–12 bullets)

- Loan range $100K to $50M+ as of 2026
- 36 to 84 month terms; 60-month is the sweet spot
- Rates from high single digits to low teens, asset-and-credit dependent
- Three months of deferred payments available on many deals
- Advance rates 70%–85% of liquidation value
- Equipment appraisal or vendor invoice/spec sheet required
- Sale-leaseback structure for equipment you already own free and clear
- International equipment: borrower bridges the purchase, lender reimburses post-customs
- "Story credit" deals available for thinner credit profiles with a viable growth narrative
- Vendor/manufacturer financing evaluated and negotiated alongside third-party options
- Works for B2B and B2C, titled vehicles, clean rooms, imaging suites, fleet, production lines
- Pairs naturally with a working-capital line so the equipment doesn't drain operating cash

### bestFor (6–10 scenarios)

- A manufacturer adding production capacity to support a new customer or contract
- A medical imaging center buying a PET, MRI, or ultrasound to expand service lines
- A construction or trades operator replacing or expanding free-and-clear fleet
- A non-emergency medical transport company financing wheelchair-lift vehicles after a bank decline
- A manufacturer importing equipment built abroad that needs to bridge customs
- An owner with free-and-clear equipment who wants to unlock that equity via sale-leaseback
- A growing business whose bank line is being drained by equipment purchases that belong on their own paper
- A young or thinner-credit business with a clear growth story that a believer-lender can underwrite
- A specialty manufacturer whose international vendor requires deposits before production starts
- An operator deciding between vendor financing and a third-party lessor who wants help comparing the offers

### FAQ candidates (5 new entries — match faq-data.ts shape)

```typescript
{
  id: 'why-equipment-cheaper-than-working-capital',
  q: 'Why is equipment financing cheaper than a working capital loan?',
  a: 'Because the equipment is the collateral. If something happens in your business, the lender can repossess and sell the asset to recover their money — that hard-asset backstop is what makes the rate cheaper. Working capital is underwritten on revenue alone, so the lender is taking more risk and prices for it. As of 2026, we typically see equipment in the high single digits to low teens versus working capital in the mid-teens or higher.',
  relatedSolutions: ['equipment-leasing', 'working-capital-loans']
},
{
  id: 'what-is-equipment-sale-leaseback',
  q: 'What is a sale-leaseback and when does it make sense?',
  a: 'A sale-leaseback is a way to get cash out of equipment you already own free and clear. The lender effectively buys the equipment from you and leases it back over a 3-to-5-year period, so the asset stays in place and operating but the equity is unlocked as working capital. It makes sense when you want growth capital without touching real estate, taking on a personal guarantee, or running an MCA — the equipment was already paid for, so why leave that equity locked up?',
  relatedSolutions: ['equipment-leasing']
},
{
  id: 'equipment-international-customs',
  q: 'How does equipment financing work if the equipment is manufactured overseas?',
  a: 'That is pretty much par for the course in the equipment leasing space — the borrower pays for the equipment, ships it, and clears it through U.S. customs, and then the lender reimburses on the back end once it is delivered. You will want to plan for that bridge in your cash flow. We help structure the timing so the gap between deposit and reimbursement does not strangle the rest of operations.',
  relatedSolutions: ['equipment-leasing']
},
{
  id: 'equipment-deferred-payments',
  q: 'Can I defer payments while my equipment is being installed?',
  a: 'Often yes. Many of our equipment lenders will defer the first three payments so the asset can get installed, commissioned, and revenue-generating before the first invoice hits. That is especially useful for medical equipment, custom production lines, or anything with a meaningful ramp-up window. We negotiate that in upfront because it materially changes the cash impact in year one.',
  relatedSolutions: ['equipment-leasing']
},
{
  id: 'vendor-financing-vs-equipment-leasing',
  q: 'Should I use the manufacturer\'s financing or a third-party equipment lender?',
  a: 'If the manufacturer offers direct financing and the terms are reasonable, take it — we will tell you that to your face. Our value then shifts to the working capital piece you still need alongside the equipment. When the vendor financing is mediocre or unavailable, we run the deal through several third-party equipment lessors and let them compete for your business.',
  relatedSolutions: ['equipment-leasing', 'working-capital-loans']
}
```

---

## asset-based-lending

### fullDesc (300–500 words)

Asset-based lending is the next step up from a maxed-out bank line. That is the cleanest way to describe it. When a company has real hard assets — accounts receivable, inventory, equipment, sometimes real estate — but the bank's credit box does not quite fit anymore (maybe growth is outpacing them, maybe there was a soft year on the tax return, maybe the receivables are growing faster than the line can scale), ABL is the structure that picks up where the bank stopped. As of 2026, most ABL deals we place sit in the $3M to $25M range, priced at Prime plus 1% to 5%, with advance rates of 70%–90% on receivables and 50%–75% on inventory layered underneath.

Here is how I frame it: I sort of put underwriting into two buckets. One is asset-backed — receivables, inventory, equipment, real estate. The other is revenue-based, where the lender is underwriting your trailing 12-month cash flows. ABL lives squarely in bucket one. The lender sets up a borrowing base, usually weekly or monthly, where you certify how much eligible AR and inventory you have, and they advance against it. Your customers remit payment into a lockbox or sweep account in your name, the line pays down automatically, and the availability rises again as new receivables come on. It is a revolving structure, much like a bank line — the difference is the lender is going to live inside your asset base in a way a bank generally will not.

Factoring and ABL are cousins. Both create a revolving line collateralized by AR, and both can layer inventory underneath at a lower advance rate. The difference is that factoring is a recurring sale of an asset and does not show up on the balance sheet as debt, while ABL is true debt with a borrowing-based certificate. For larger, more sophisticated operators with clean financials and good reporting, ABL usually wins on cost and presentation. For smaller deals or distressed credits, factoring is often the right tool.

What ABL is really good at: funding growth that is outpacing a bank, supporting an acquisition or a buyout, restructuring expensive debt (especially stacked MCAs) into one revolving structure, or stabilizing a manufacturer with a long production cycle that needs to borrow against WIP and finished inventory while customers take 60 to 90 days to pay. Setup takes 6 to 8 weeks, which is why we often bridge the first step with a faster revenue-based facility and run ABL as step two. One-then-three, as I sometimes call it. The bridge buys time; the ABL is the home the business is moving into.

### features (8–12 bullets)

- Facility sizes typically $250K to $25M; most placements are $3M and up
- Pricing at Prime + 1%–5% as of 2026
- 70%–90% advance on eligible accounts receivable
- 50%–75% advance on eligible inventory layered underneath the AR
- Equipment and commercial real estate can be added to expand availability
- Revolving structure: pays down as customers remit, refills as new AR comes on
- Weekly or monthly borrowing-based certificate required
- Lockbox, DACA, or sweep account set up at closing
- Setup timeline: 6 to 8 weeks (field exam, audit, legal)
- Often paired with a fast revenue-based bridge to stabilize while ABL is assembled
- Strong fit for B2B manufacturers, distributors, staffing firms, and government contractors
- True debt on the balance sheet (unlike factoring, which is a sale of an asset)

### bestFor (6–10 scenarios)

- A $10M–$50M manufacturer outgrowing a bank line and needing $3M+ in revolving capacity
- A custom manufacturer with a 9-month production cycle borrowing against WIP and finished inventory
- A distributor or wholesaler with strong B2B receivables and inventory turns that need more runway
- A staffing agency declined by a bank on owner credit, where the AR is what should be underwritten
- A growing business with blue-chip or government customer concentration and slow-pay terms
- An acquisition where the target's assets can support the purchase price
- A company restructuring stacked MCAs or expensive non-bank debt into one revolving line
- A government contractor needing a facility (not spot funding) because assignment of claims slows AR
- A company that has hit the ceiling on factoring and is ready for the lower-cost ABL graduation
- A business whose bank has signaled they want them off the line and needs a soft landing

### FAQ candidates (5 new entries)

```typescript
{
  id: 'abl-vs-bank-line-of-credit',
  q: 'How is asset-based lending different from a bank line of credit?',
  a: 'A bank line is underwritten primarily on your financial statements and covenants — leverage ratios, debt service coverage, owner credit. ABL is underwritten on the live value of your assets, mostly receivables and inventory, certified weekly or monthly through a borrowing base. As of 2026, ABL is generally where companies go when they have real assets but no longer fit a bank credit box — pricing runs Prime plus 1% to 5%, which is higher than a bank but still well below most non-bank alternatives.',
  relatedSolutions: ['asset-based-lending', 'working-capital-loans']
},
{
  id: 'abl-vs-factoring-difference',
  q: 'What is the difference between asset-based lending and factoring?',
  a: 'Factoring and ABL are cousins — both are revolving structures collateralized by your receivables, with optional inventory layered underneath. The difference is that factoring is a recurring sale of an asset and does not show up on your balance sheet as debt, while ABL is true debt with a weekly or monthly borrowing-base certificate. ABL usually wins on cost for larger, well-run operators; factoring is often the right tool for smaller deals or businesses with rougher financials.',
  relatedSolutions: ['asset-based-lending', 'invoice-factoring']
},
{
  id: 'abl-minimum-deal-size',
  q: 'Is there a minimum deal size for asset-based lending?',
  a: 'Most bank-owned ABL desks start at $3M to $5M minimums, which is why we place most of our ABL in the $3M and up range. Below that, we usually steer clients to factoring or a structured revenue-based line because the underwriting cost of a true ABL does not pencil out for the lender on a smaller facility. We will tell you honestly if you are below the threshold and route you to the right product.',
  relatedSolutions: ['asset-based-lending', 'invoice-factoring']
},
{
  id: 'abl-setup-timeline',
  q: 'How long does it take to set up an ABL facility?',
  a: 'Six to eight weeks is typical from term sheet to funded. ABL involves a field exam, an asset audit, legal documents, lockbox setup, and a borrowing-base mechanics build-out — so it is not fast. That is why we often run a bridge first when timing is tight: a fast revenue-based line in week one, ABL home in week eight. We call it the one-then-three approach, and it keeps the business operating while the permanent structure is assembled.',
  relatedSolutions: ['asset-based-lending', 'working-capital-loans']
},
{
  id: 'abl-borrowing-base-explained',
  q: 'What is a borrowing base and how does it work?',
  a: 'A borrowing base is a weekly or monthly certificate where you tell the lender, in writing, exactly how much eligible receivable and inventory you have right now. The lender advances a percentage against each category — say 85% on AR, 60% on inventory — and that becomes the live ceiling on what you can borrow. As customers pay into the lockbox, the line pays down automatically, and as new invoices and inventory come on, your availability rises. It is the engine that lets ABL scale with your business in real time.',
  relatedSolutions: ['asset-based-lending']
}
```

---

## inventory-financing

### fullDesc (300–500 words)

Inventory financing is for companies whose growth is being held back by stock they cannot afford to hold. The classic case, as of 2026, is the e-commerce or direct-to-consumer brand — picture an $8M to $40M consumer goods company selling on Amazon, Shopify, and a few wholesale doors — that needs to pre-stock inventory two months before the holiday season but does not have B2B receivables to factor against. They sell to consumers, so there is no commercial AR to lend against. The inventory itself is the asset, and an inventory lender is the product that bridges the gap.

Here is how it works mechanically. There are lenders that can advance on inventory and, in most cases, they are paying your vendors directly rather than handing you cash. They will front you, say, $100K worth of product against an approved supplier, ship it into your warehouse or fulfillment center, and then give you a cycle — typically 90 days — to sell through and pay them back. So you are holding onto your operating cash, the inventory hits your stockroom or Amazon FBA, and you are paying for the capital only against the goods that are moving. Advance rates run up to 85% of liquidation value, sometimes as low as 40%–50% on cost depending on the lender. Pricing as of 2026 is generally Prime plus 6% to 12% on the better facilities, with standalone inventory deals coming in higher.

A couple of honest notes. Most inventory lenders want a senior lien position on inventory, which means if you already have a bank line or a factoring facility with inventory in the collateral package, there is paperwork to work through. Two of the lenders we work with will do a true standalone inventory deal, but they want to see a 13-week cash flow forecast and a math-driven explanation — not a story, a math story — for why the inventory will turn into cash before the line term is up. If you cannot put that on paper, the deal will not go.

For e-commerce specifically, one of our asset-based lenders has a standalone inventory financing program built only for e-commerce inventory, structured as a revolving line at roughly Prime plus 2%. That is unusually attractive pricing for inventory financing, but it requires a senior position on inventory and clean reporting. For DTC brands that do not own real estate, this is often the cheapest capital available — because there are no commercial receivables to factor, and ABL minimums usually do not fit a $5M–$15M e-commerce shop. We have also seen rate-sensitive owners with free-and-clear real estate skip inventory financing entirely and pull working capital off the property at single-digit rates — that is the cheapest path when the asset is there. When it is not, inventory financing is the realistic answer, and we will set that expectation honestly.

### features (8–12 bullets)

- Facility sizes $500K to $20M as of 2026
- Revolving line structure available with most lenders
- Advance rates up to 85% of liquidation value; standalone deals often closer to 40%–60% of cost
- Pricing typically Prime + 6%–12%; specialty e-commerce inventory programs as low as Prime + 2%
- Lender usually pays your vendors directly rather than wiring cash to you
- 90-day repayment cycle is the common shape, lender-dependent
- Inventory audit, count, or third-party verification required
- Senior lien on inventory typically required (works around existing AR or bank facilities with planning)
- 13-week cash flow forecast and math-driven sell-through analysis required for standalone deals
- Strong fit for e-commerce, DTC, CPG, and seasonal retail with no factorable B2B AR
- Can be layered with PO funding and working capital loans for a complete cycle solution
- Pairs naturally with seasonal pre-stocking ahead of holiday or peak periods

### bestFor (6–10 scenarios)

- An Amazon-first or DTC e-commerce brand pre-stocking inventory ahead of Q4 holiday
- A specialty consumer goods company at $8M–$40M with no B2B receivables to factor against
- A CPG brand whose growth is capped by how much inventory they can hold at any one time
- A seasonal retailer needing to buy ahead of peak when operating cash is at its low point
- A manufacturer with growing finished-goods inventory between production and customer delivery
- An importer holding goods after customs clearance but before shipment to end customers
- A DTC brand whose owner is rate-sensitive and does not own real estate to leverage instead
- A company that has outgrown a small-business inventory program but is too small for full ABL
- A subscription or bundle business needing to fund the next cycle's inventory build
- An operator pairing inventory financing with PO funding to cover production-through-sell-through

### FAQ candidates (5 new entries)

```typescript
{
  id: 'inventory-financing-for-ecommerce',
  q: 'Why is inventory financing the right product for e-commerce brands?',
  a: 'Because e-commerce and direct-to-consumer brands typically have no B2B receivables to factor against — they sell to consumers, not businesses, so there is no commercial AR for a factoring line to attach to. The inventory itself is the asset. As of 2026, we place e-commerce inventory facilities as low as Prime plus 2% with one specialty lender, though most standalone inventory deals run higher. It is often the cheapest realistic capital for a DTC brand that does not own real estate.',
  relatedSolutions: ['inventory-financing']
},
{
  id: 'how-inventory-financing-pays-vendors',
  q: 'Does inventory financing give me cash or pay my suppliers directly?',
  a: 'In most cases the lender is paying your vendors directly rather than handing you cash. That is actually a feature, not a bug — your operating cash stays untouched, the inventory ships into your warehouse or Amazon FBA, and you are only paying for the capital that is actively tied up in product. Most facilities give you a 90-day cycle to sell through and pay it back, then the next purchase can cycle through the line again.',
  relatedSolutions: ['inventory-financing']
},
{
  id: 'standalone-inventory-vs-abl-inventory',
  q: 'What is the difference between standalone inventory financing and inventory inside an ABL?',
  a: 'Inside an ABL, inventory is layered underneath your AR — usually at a 50% to 75% advance rate and capped at a percentage of eligible AR. Standalone inventory is a different animal: the inventory itself is the entire collateral package, advance rates are often lower (40% to 60% of cost), and only two or three lenders we work with will do a true standalone deal. Standalone is the answer when there is no B2B AR to anchor an ABL, which is exactly the situation most e-commerce and DTC brands are in.',
  relatedSolutions: ['inventory-financing', 'asset-based-lending']
},
{
  id: 'inventory-financing-cash-forecast',
  q: 'What does an inventory lender need to see to approve a deal?',
  a: 'On a standalone inventory facility, the lender will want a 13-week cash flow forecast and what I call a math-driven story — not a narrative, a numbers explanation — for why the inventory will turn into cash before the line term is up. They also want an inventory count or third-party verification, a senior lien position on inventory, and clean reporting on sell-through velocity. If you cannot put that math on paper, the deal will not go.',
  relatedSolutions: ['inventory-financing']
},
{
  id: 'inventory-financing-vs-real-estate-cashout',
  q: 'When should I use inventory financing versus a real estate cash-out for inventory?',
  a: 'If you own real estate free and clear or with significant equity behind it, that is almost always the cheapest capital — single-digit rates against the property versus Prime plus 6% to 12% on inventory. Rate-sensitive owners with property usually skip inventory financing entirely and pull working capital off the building. If there is no real estate to leverage, inventory financing is the realistic answer, and we will set that expectation honestly.',
  relatedSolutions: ['inventory-financing']
}
```
