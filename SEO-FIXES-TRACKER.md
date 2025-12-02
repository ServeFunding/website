# SEO/AIEO Production Fixes Tracker

**Started:** December 2, 2025  
**Goal:** Fix critical SEO/AIEO issues before production launch

---

## 🎯 Tier 1 - Critical Fixes (Do Now)

### 1. 🚧 Add H1 Tag Support to Heading Component
- [x] Update heading.tsx to support h1 size
- [x] Style H1 with gradient (like H2) but larger and thinner font (font-light, larger size)
- [ ] Update all hero sections to use H1 instead of H2
  - [ ] Home page (page.tsx)
  - [ ] Solutions page
  - [ ] About Us page
  - [ ] Partners page
  - [ ] Contact page
  - [ ] Fundings page
  - [ ] Blog page
  - [ ] FAQ page

### 2. ⏳ Add Metadata Exports to All Pages
- [ ] solutions/page.tsx
- [ ] partners/page.tsx
- [ ] about-us/page.tsx
- [ ] contact-us/page.tsx
- [ ] fundings/page.tsx
- [ ] solutions/[solution-id]/page.tsx
- [ ] refer/page.tsx
- [ ] privacy-policy/page.tsx
- [ ] terms-of-service/page.tsx
- [ ] not-found.tsx

### 3. ⏳ Convert Homepage from Client to Server Component
- [ ] Refactor page.tsx to support metadata export
- [ ] Move client-side logic to separate client components
- [ ] Add proper metadata with unique title/description

### 4. ⏳ Fix Canonical URL Consistency
- [ ] Decide: servefunding.com vs servefunding.vercel.app
- [ ] Update all hardcoded URLs in metadata
- [ ] Update schema.org @id fields
- [ ] Update sitemap.xml URLs
- [ ] Update robots.txt sitemap reference

---

## 🔥 Tier 2 - High Priority (This Week)

### 5. ⏳ Generate Dynamic Sitemap
- [ ] Create app/sitemap.ts for Next.js dynamic sitemap
- [ ] Include all static pages
- [ ] Include all blog posts
- [ ] Include all solution detail pages
- [ ] Remove static sitemap.xml

### 6. ⏳ Add FAQ Schema to FAQ Page
- [ ] Implement faqPageSchema from seo.ts
- [ ] Add all FAQ questions/answers to schema
- [ ] Test with Google Rich Results Test

### 7. ⏳ Add Article Schema to Blog Posts
- [ ] Add BlogPosting schema to each blog post
- [ ] Include datePublished, dateModified
- [ ] Add author Person schema
- [ ] Add headline and image

### 8. ⏳ Add Proper Alt Text to All Images
- [ ] Review all Image/img tags
- [ ] Update logo alt text
- [ ] Update hero image alt text
- [ ] Update partner page images
- [ ] Update blog post images

---

## 📊 Tier 3 - Medium Priority (Next Week)

### 9. ⏳ Add Breadcrumb Schema
- [ ] Implement breadcrumb component
- [ ] Add BreadcrumbList schema
- [ ] Add to all sub-pages

### 10. ⏳ Add OpenGraph Images
- [ ] Create or select OG images for each page
- [ ] Add to metadata exports
- [ ] Test social sharing previews

### 11. ⏳ Optimize Meta Descriptions
- [ ] Review all meta descriptions for uniqueness
- [ ] Ensure 150-160 character length
- [ ] Include target keywords naturally
- [ ] Add compelling CTAs

### 12. ⏳ Add LastMod Dates to Blog Posts
- [ ] Add lastmod field to blog post metadata
- [ ] Display on blog post pages
- [ ] Include in Article schema

---

## 📈 Performance Monitoring

### Before Fixes:
- Core Web Vitals: TBD
- Mobile Score: TBD
- Desktop Score: TBD
- Indexed Pages: TBD

### After Fixes:
- Core Web Vitals: TBD
- Mobile Score: TBD
- Desktop Score: TBD
- Indexed Pages: TBD

---

## 🚀 Deployment Checklist

Before going to production:
- [ ] All Tier 1 fixes completed
- [ ] All Tier 2 fixes completed
- [ ] Test on Google Search Console
- [ ] Test on Bing Webmaster Tools
- [ ] Submit updated sitemap
- [ ] Verify schema markup with Google Rich Results Test
- [ ] Test social sharing on LinkedIn, Twitter, Facebook
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Verify all internal links work
- [ ] Check 404 page works properly

---

## Notes

- Primary domain decision needed: .com vs .vercel.app
- Consider adding structured data for case studies/testimonials
- Blog posting frequency for SEO: aim for 1-2 posts/month
