# AIEO/GEO Implementation Guide
## Serve Funding Next.js Optimization

**Status:** Phase 1 Started ✅
**Last Updated:** November 25, 2025
**Files Created:** 3 core files ready for development

---

## 📁 MASTER FILES CREATED

### 1. **src/data/company-info.ts** ← VERIFY EVERYTHING HERE
   - **Purpose:** Single source of truth for all company data
   - **What to do:** Fill in all [VERIFY: ...] placeholders with actual info
   - **Update frequency:** Review quarterly
   - **Contains:**
     - Company basics (name, contact, founding date)
     - Founder/team information
     - Core values (TRUST framework)
     - All 10 funding solutions with rates/terms
     - 3-step process (Discovery > Diligence > Delivery)
     - Competitive positioning messaging
     - Qualification criteria
     - Verification checklist

### 2. **src/lib/schema-generators.ts** ← READY TO USE
   - **Purpose:** Reusable functions to generate JSON-LD schema markup
   - **Pre-built generators for:**
     - Organization schema (global)
     - Financial Service schema (funding types)
     - FAQ page schema
     - Blog post/Article schema
     - Breadcrumb schema
     - Person schema (founder/team)
     - Review/testimonial schema (case studies)
     - How-to schema (process steps)

### 3. **src/app/layout.tsx** ← LIVE ✅
   - **What changed:** Added Organization schema to global header
   - **Result:** All pages now have FinancialService schema
   - **Next:** Fill in phone, email, founder name in company-info.ts

---

## 🎯 IMPLEMENTATION ROADMAP (4 Weeks)

### WEEK 1: INFORMATION VERIFICATION & SETUP ✅ (IN PROGRESS)

**Tasks:**
- [ ] Review src/data/company-info.ts
- [ ] Fill in ALL [VERIFY: ...] placeholders with accurate info:
  - Phone number
  - Email address
  - Physical address
  - Founder name & background story
  - Years of experience
  - Total capital facilitated
  - Founder education/credentials
  - LinkedIn URL
  - Minimum revenue/credit score by product
  - Rate ranges by product
  - Closing timelines
  - Process details
  - Competitive differentiators vs banks vs online lenders
  - Customer satisfaction metrics
  - Disqualifier criteria
  - Industry restrictions
- [ ] Validate all product information with lender partners
- [ ] Test Organization schema in layout.tsx
  - Go to: https://search.google.com/test/rich-results
  - Paste rendered HTML
  - Confirm schema validates

**Deliverable:** Fully verified company-info.ts file

---

### WEEK 2: RESTRUCTURE FAQ & ADD SCHEMA

**Tasks:**
- [ ] Create new comprehensive FAQ page: `src/app/faq/page.tsx`
  - Use 224 questions from MARKET-RESEARCH-MOST-SEARCHED-QUESTIONS.md
  - Organize into categories (General, By Product Type, Industry-Specific, etc.)
  - Create SearchParams for filtering by category
  - Add question-based headings (not category headings)

- [ ] Add FAQPage schema to FAQ page
  ```typescript
  import { getFAQPageSchema } from '@/lib/schema-generators'

  // Map your FAQs to schema format and render script tag
  ```

- [ ] Test FAQ schema validation
  - URL: https://validator.schema.org/
  - Check all questions/answers render correctly

- [ ] Update layout to link to new FAQ

**Deliverable:** Production-ready FAQ page with FAQPage schema

---

### WEEK 3: UPDATE SOLUTIONS PAGE WITH SCHEMA

**Tasks:**
- [ ] Restructure solutions page to use question-based headings
  - Change heading: "The Right Funding for Your Business" → Keep (hero)
  - Change section headings to question format:
    - "Asset-Based Lending" → "What is Asset-Based Lending?"
    - Add immediate answer after heading
    - Keep features list as before

- [ ] Add Service schema for each funding solution
  ```typescript
  // In solutions/page.tsx, loop through fundingSolutions and render:
  fundingSolutions.map(solution => (
    <script
      key={solution.id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getFinancialServiceSchema(solution))
      }}
    />
  ))
  ```

- [ ] Add mini-FAQ section under each solution
  - Use fundingSolutions[X].commonQuestions from company-info.ts
  - Make searchable/filterable

- [ ] Test Solutions page schema
  - Validate each solution's Service schema
  - Check rich results eligibility

**Deliverable:** Solutions page with 10x Service schema + question-based content

---

### WEEK 4: ADD CASE STUDY & PROCESS SCHEMA

**Tasks:**
- [ ] Add Review schema to case studies
  ```typescript
  // In fundings/page.tsx, loop through caseStudies:
  caseStudies.map(study => (
    <script
      key={study.title}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getReviewSchema({
          companyName: study.company,
          title: study.title,
          description: study.description,
          fullStory: study.fullStory,
          amount: study.amount,
          ratingValue: 5
        }))
      }}
    />
  ))
  ```

- [ ] Add How-To schema for 3-step process
  ```typescript
  // Use serveFundingProcess from company-info.ts
  // Create How-To schema with Discovery > Diligence > Delivery
  ```

- [ ] Add breadcrumb schema to key pages
  ```typescript
  // Create Breadcrumb: Home > Solutions > [Specific Solution]
  // Create Breadcrumb: Home > FAQ > [Category]
  ```

- [ ] Test all schema on actual pages
  - Google Rich Results Test
  - Schema.org Validator
  - Page rendering (no JavaScript errors)

**Deliverable:** Complete schema markup on all key pages

---

## 📊 VERIFICATION CHECKLIST

Before going live, verify:

### Company Information
- [ ] Phone number correct
- [ ] Email validated
- [ ] Address confirmed
- [ ] Founder name matches LinkedIn
- [ ] Founding year accurate (2021)

### Product Data
- [ ] All rates & terms current (with dates)
- [ ] Min/max amounts accurate
- [ ] Closing timelines realistic
- [ ] Advance rates match lender agreements
- [ ] Feature descriptions match what you deliver
- [ ] Qualification criteria match actual lender requirements

### Schema Validation
- [ ] Organization schema valid
- [ ] All Service schemas valid
- [ ] FAQ schema valid (all Q&A pairs render)
- [ ] Review schemas valid
- [ ] No console errors when pages load

### Content Accuracy
- [ ] All process steps documented
- [ ] Competitive messaging verified by founder
- [ ] Customer metrics accurate
- [ ] Industry-specific info correct

---

## 🔍 HOW TO USE COMPANY-INFO.TS

### Reference Data in Components
```typescript
// In any component
import { fundingSolutions, serveFundingProcess, companyInfo } from '@/data/company-info'

// Access specific solution
const ablSolution = fundingSolutions.find(s => s.id === 'asset-based-lending')
console.log(ablSolution.ratesAndTerms.interestRate) // "Prime + 1.5% to Prime + 5%"

// Use in JSX
<h1>{companyInfo.name}</h1>
<p>{companyInfo.contact.phone}</p>

// Use process in How-To schema
const schema = getHowToSchema({
  name: "Serve Funding Process",
  description: "How we help you get funded",
  steps: serveFundingProcess.map(step => ({
    name: step.name,
    description: step.description
  }))
})
```

### Update Information
```typescript
// Instead of hardcoding data in 10 different files,
// Update once in src/data/company-info.ts:
// All components automatically get new data on next build
```

---

## 🚀 TESTING & VALIDATION

### After Each Phase, Test:

1. **Schema Validation**
   - https://validator.schema.org/
   - Paste page HTML
   - Confirm all schema validates

2. **Google Rich Results**
   - https://search.google.com/test/rich-results
   - Test each page type
   - Confirm eligible for rich snippets

3. **Visual Testing**
   - Load page in browser
   - Check for JavaScript errors (F12 console)
   - Verify page displays correctly
   - Check mobile view

4. **Query Testing (Weekly)**
   - Search in ChatGPT: "What is asset-based lending?"
   - Search in Claude: "Invoice factoring vs traditional loans"
   - Search in Perplexity: "How much does working capital cost?"
   - Document if Serve Funding is mentioned
   - Track improvement over time

---

## 📈 NEXT PHASES (Beyond Week 4)

### Phase 2: FAQ EXPANSION & BLOG (Weeks 5-8)
- [ ] Publish comprehensive blog posts (2-3 per week)
  - "Asset-Based Lending: Complete Guide 2025"
  - "Invoice Factoring vs Loans: Which is Better?"
  - "Working Capital Funding for [Industry]"
  - Add Article schema to all posts

- [ ] Expand FAQ from 70 → 150+ questions
  - Add more industry-specific questions
  - Add comparison questions
  - Add payment/cost questions

### Phase 3: AUTHOR & FOUNDER SCHEMA (Weeks 9-10)
- [ ] Add founder bio page with Person schema
- [ ] Create author profiles for blog posts
- [ ] Add testimonial/review pages

### Phase 4: TRACKING & OPTIMIZATION (Ongoing)
- [ ] Set up Google Search Console
- [ ] Track which questions drive traffic
- [ ] Monitor AI visibility (weekly testing)
- [ ] Update content based on search trends
- [ ] Quarterly review of rates/terms

---

## 📋 KEY FILES REFERENCE

| File | Purpose | When to Update |
|------|---------|-----------------|
| src/data/company-info.ts | Master data hub | Quarterly (rates, team, metrics) |
| src/lib/schema-generators.ts | Schema functions | Rarely (only if schema types change) |
| src/app/layout.tsx | Global schema | When company info updates |
| src/app/faq/page.tsx | FAQ content | Monthly (add new questions) |
| src/app/solutions/page.tsx | Solution descriptions | Quarterly (update terms) |
| src/app/fundings/page.tsx | Case studies | Ongoing (add new cases) |

---

## ⚠️ IMPORTANT: VERIFICATION MUST BE COMPLETED FIRST

Before publishing, ensure:

✅ **All [VERIFY: ...] placeholders filled in**
✅ **Rates and terms confirmed with lenders**
✅ **Founder information accurate**
✅ **Process steps match actual workflow**
✅ **Competitive messaging approved by founder**
✅ **Schema validates without errors**

---

## 📞 QUESTIONS TO ASK FOUNDER

Before completing company-info.ts, collect:

1. **Your Background:** Full name, education, work history, why you started Serve Funding
2. **Company Metrics:** Total capital facilitated, # of clients, average deal size, repeat rate
3. **Lender Relationships:** Which 3-5 lender partners are most important? Do they know their rates/terms?
4. **Competitive Advantage:** How are you better than banks? Online lenders? Other advisors?
5. **Process Details:** How long does Discovery actually take? Diligence? Delivery?
6. **Qualification Rules:** What's minimum revenue? Credit score? What disqualifies someone?
7. **Success Stories:** Why did each case study work? What was the outcome?

---

## 🎯 SUCCESS METRICS (Track After Implementation)

### Month 1:
- Schema validates: 100%
- Pages render correctly: 100%
- No console errors: Yes

### Month 3:
- FAQ page found organically: Yes
- Solutions pages ranking for funding-type queries: Some
- ChatGPT mentions Serve Funding: Occasional

### Month 6:
- Consistent AI referrals visible in analytics
- Claude and Perplexity mention Serve Funding regularly
- Traffic to key FAQ pages increases 50%+

### Month 12:
- Established authority on alternative funding topics
- 5-10x improvement in AI referral visibility
- Competitive moat vs. non-optimized competitors

---

## 🚀 READY TO START?

1. Open `src/data/company-info.ts`
2. Search for `[VERIFY:` (39 occurrences)
3. Fill in each with actual information
4. Commit changes
5. Move to Week 2 tasks

**The master file is now your single source of truth. Everything else flows from it.**
