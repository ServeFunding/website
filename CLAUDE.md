# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Serve Funding is a Next.js 16 web application for a working capital advisory company. The site showcases funding solutions, company information, and includes an AI-powered chatbot using Claude API. The architecture emphasizes data centralization, SEO optimization (AIEO - AI Engine Optimization), and schema markup for LLM visibility.

## Development Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Run production server
npm run lint         # Run Next.js linter
```

## Key Architecture Patterns

### 1. Centralized Data Model
All company information flows through a single master data source:
- **`src/data/company-info.ts`**: Master hub containing company basics, founder info, core values, process steps, and philosophy. This file is imported across multiple parts of the app, making it the source of truth.
- **`src/data/solutions.ts`**: Funding solutions and their metadata with titles, descriptions, features, and industry tags
- **`src/data/faq-data.ts`**: Comprehensive FAQ content organized by category (about Serve Funding, working capital, solutions, etc.) - **actively expanded with new content**
- **`/posts/` directory**: Blog posts stored as Markdoc files (.mdoc) with YAML frontmatter for metadata and markdown content. File-based system for easy content management.
- **`src/data/partners.ts`**: Partner types and testimonials for the partnerships page
- **`src/data/fundingData.ts`**: Case studies and success stories

**Why this matters**: Changes to company information update everywhere automatically. The file contains `[VERIFY:]` markers for items needing founder validation. Blog posts use file-based markdown for flexibility and FAQs are centralized for easy updates without touching page components.

### 2. AI Integration (Chatbot)
The chatbot is powered by Claude API via the Anthropic SDK:
- **API Route**: `src/app/api/chat/route.ts` - Handles POST requests with message history
- **AI Context Builder**: `src/lib/ai.ts` - `buildAIContext()` dynamically generates system prompts from company data, ensuring the chatbot stays synchronized with current company information
- **Component**: `src/components/Chatbot.tsx` - Floating widget with message history
- **Model**: Uses `claude-haiku-4-5-20251001` with max 1024 tokens
- **System Prompt**: Built from company info, solutions, values, and process - keeps AI responses in company voice

**Key Detail**: The system prompt is constructed in `buildAIContext()` and includes instructions for brevity (1-2 sentences max) and no markdown formatting.

### 3. SEO & Schema Markup (AIEO Strategy)
The app implements JSON-LD schema markup to improve visibility in AI responses:
- **Schema Generators**: `src/lib/schema-generators.ts` - Reusable functions for:
  - `getOrganizationSchema()` - Company-wide schema (FinancialService type)
  - Service schemas for each funding solution
  - FAQ schemas
  - Review/aggregateRating schemas
- **Where Used**: Schemas are embedded in pages as `<script type="application/ld+json">` tags
- **Goal**: Help LLMs (ChatGPT, Claude, Perplexity) understand and cite Serve Funding in their responses

**Implementation Plan**: Documented in README.md sections on AIEO/GEO. Week-1 checklist in `WEEK-1-VERIFICATION-CHECKLIST.md` requires founder to verify 46 data points before schema deployment.

### 4. Component Architecture
Uses CVA (class-variance-authority) for styled components:
- **Design System** (`src/components/ui/`): Reusable, styled components
  - `heading.tsx`, `text.tsx`, `button.tsx`, `card.tsx`, `section.tsx`, `container.tsx`
  - All accept variant props for different visual states (e.g., button variants: default, gold, outline, ghost, link, white)
  - Components use Tailwind CSS v4
- **Page Components** (`src/components/`): Business logic and layout
  - `Header.tsx` - Navigation with dropdown menus
  - `Footer.tsx` - Multi-section footer with links
  - `Chatbot.tsx` - Floating widget
  - `HeroCarousel.tsx`, `ProcessCard.tsx` - Feature components
  - `FAQSection.tsx` - FAQ display with styling
  - `CTA.tsx` - Reusable call-to-action section (use for all CTAs, don't write manual markup)
  - `HeroFadeIn.tsx` - Hero section with fade animation
  - `Breadcrumb.tsx` - Breadcrumb navigation
  - `PartnerInquiryForm.tsx` - Partner inquiry form component

**Styling Approach**: Tailwind CSS v4 with custom olive/gold color scheme defined in `tailwind.config.ts`. Classes use CVA patterns like `cn()` utility for conditional styling.

**Component Best Practices**:
- **CTAs**: Always use `<CTA />` component from `src/components/cta.tsx` instead of writing manual section markup. Props: `title`, `text`, `buttonText`, `href` (default `/contact-us`), `useBG` (for gray background).
- **Hero Sections**: Use `<HeroFadeIn />` for consistent page headers instead of manual Section/Container/Heading combinations.
- **Forms**: Use pre-built form components from `src/components/Forms.tsx` (e.g., `PartnerInquiryForm`, `DealInquiryForm`).

### 5. Page Structure
- **App Routes** (`src/app/`): Next.js 13+ App Router
  - Each page route is a folder with `page.tsx`
  - `layout.tsx` - Root layout wrapping all pages with Header/Footer
  - `not-found.tsx` - 404 page
  - `sitemap.ts` - Dynamic sitemap for SEO
- **Dynamic Routes**: `src/app/solutions/[solution-id]/` - Dynamic solution detail pages

### 6. AI/SEO Configuration
- **`src/lib/seo.ts`**: Metadata generation for SEO
- **`next.config.ts`**: Comprehensive config including:
  - Security headers (CSP, HSTS, X-Frame-Options, etc.)
  - Image optimization (remote patterns, formats, qualities)
  - Redirects (www → non-www, legacy WordPress URLs)
  - Caching headers for static assets and _next/static

### 7. Types
TypeScript types are organized by feature:
- `src/types/faq.ts` - FAQ type definitions
- `src/types/solutions.ts` - Solution/funding type definitions

## Common Development Tasks

### Adding a New Funding Solution
1. Add entry to `src/data/solutions.ts` with title, description, features, etc.
2. Update company info in `src/data/company-info.ts` if needed
3. Dynamic route `src/app/solutions/[solution-id]/page.tsx` automatically creates detail pages
4. Solution will be available in chatbot context via `buildAIContext()`

### Updating Company Information
1. Edit `src/data/company-info.ts` (single source of truth)
2. Changes propagate to:
   - Chatbot AI context (via `src/lib/ai.ts`)
   - Schema markup (via `src/lib/schema-generators.ts`)
   - All pages importing this data
3. No cache invalidation needed - data is built at request time

### Adding New Pages
1. Create folder in `src/app/[page-name]/`
2. Create `page.tsx` with content
3. Add navigation links in `src/components/Header.tsx` if needed
4. Use design system components from `src/components/ui/`

### Creating Educational/Reference Pages
Educational pages (like `/capital-strategy`) follow this pattern:
1. **Hero Section**: Use `<HeroFadeIn />` component with clear title and subtitle
2. **Overview Section**: Explain the concept in plain language
3. **Main Content**: Use `<Card />` and `<StaggerContainer />` for visual hierarchy
4. **Examples**: Real-world scenarios with specific numbers and outcomes
5. **Decision Framework**: Help visitors choose (use cards with comparisons)
6. **Key Takeaways**: Summary in `<Card>` components for easy scanning
7. **CTA**: End with `<CTA />` component pointing to `/contact-us`
8. **Metadata**: Include proper metadata object for SEO

**Pattern Example**: `/src/app/capital-strategy/page.tsx` demonstrates this structure with the collateral vs. speed vs. cost tradeoff explanation.

### Modifying the Chatbot
- System prompt: Edit `src/lib/ai.ts` `buildAIContext()` function
- UI/styling: Edit `src/components/Chatbot.tsx`
- API logic: Edit `src/app/api/chat/route.ts`
- Conversation flow: Logic is in `src/components/Chatbot.tsx` state management

### Understanding the Markdoc System
Markdoc is a markdown framework that powers the blog:
- **Config** (`src/markdoc/config.ts`): Defines available custom tags and their attributes
- **Renderer** (`src/markdoc/renderer.tsx`): Maps Markdoc AST nodes to React components with styling
- **Blog Utils** (`src/lib/blog-utils.ts`): Reads .mdoc files, parses YAML frontmatter, returns structured data
- **Flow**: User creates `.mdoc` file → `getBlogPosts()` reads file → Markdoc parser creates AST → Renderer outputs styled HTML
- **Styling**: All rendered elements auto-styled using Tailwind (olive/gold theme applied by renderer)
- **Performance**: All 14 blog posts pre-rendered at build time via static generation

### Adding Blog Posts (Markdoc-Based System)
Blog posts use Markdoc (.mdoc files) with YAML frontmatter for flexible content management:

**Step 1: Create a new file** in `/posts/[post-slug].mdoc` (slug derived from title, kebab-case)

**Step 2: Add YAML frontmatter** with required metadata:
```yaml
---
title: "Your Post Title Here"
subtitle: "Optional subtitle for extra context"
excerpt: "Short preview text for blog listing (1-2 sentences)"
author: "Author Name"
date: "2026-01-28"
category: "Insights"
image: "/blog/image-name.webp"
relatedSolutions: ["solution-id-1", "solution-id-2"]
relatedIndustries: ["healthcare", "manufacturing"]
authorImage: "/author-headshot.webp"
---
```

**Step 3: Write markdown content** with full markdown support:
- Standard markdown: `## Heading`, `**bold**`, `[link](url)`, `- lists`, `> blockquotes`
- Code blocks: ` ```language code``` `
- Tables: Standard markdown table syntax
- **Custom Callout Tags**: `{% callout type="info" title="Title" %}Content{% /callout %}`
  - Types: `info` (blue), `warning` (amber), `tip` (green), `danger` (red)
- **Related Posts Widget**: `{% relatedPosts category="Insights" limit="3" /%}`
  - Filter by `category` or `solution` ID
- All HTML auto-styled with olive/gold theme from design system

**Step 4: File-based routing** - Post automatically appears at `/blog/[post-slug]` without manual route creation

**Implementation Details**:
- Utility: `src/lib/blog-utils.ts` - `getBlogPosts()` reads .mdoc files and parses frontmatter
- Parser: `src/markdoc/config.ts` - Markdoc configuration with custom tags
- Renderer: `src/markdoc/renderer.tsx` - Transforms Markdoc AST to styled React components
- All 14 blog posts currently in `/posts/` as active examples

**Blog Content Strategy**:
- Focus on educational content that addresses the funding journey
- Each post should answer specific customer questions (use PODCAST-CONTENT-ANALYSIS.md for insights)
- Link posts to FAQ answers and solutions pages
- Real examples and metrics build credibility
- Use callout tags to emphasize key insights or warnings

### Adding or Expanding FAQ Content
1. Edit `src/data/faq-data.ts`
2. Add new entries to appropriate category (organize by topic for usability)
3. Keep answers concise but comprehensive (2-3 sentences typically)
4. Include specific examples or numbers when relevant
5. Link to related blog posts or solutions pages in answers when appropriate
6. FAQ answers appear automatically on `/faq` page and power the chatbot

**FAQ Best Practices**:
- Questions should target high-intent search terms
- Answers should be skimmable (use bold, lists where appropriate)
- Address objections and concerns directly
- Reference company expertise and real client scenarios

**Adding Videos to FAQ Answers** (Optional):
For trust-building, FAQs can now include embedded YouTube videos alongside text answers:

```typescript
{
  id: 'example-faq',
  q: 'What is Asset-Based Lending?',
  a: 'Short text answer (2-3 sentences for skimmable format)...',
  videoId: 'dQw4w9WgXcQ', // YouTube video ID only (no full URL)
  videoTranscript: 'Full video transcript for accessibility and searchability...',
  relatedSolutions: ['asset-based-lending']
}
```

**How it works**:
- Video appears in expanded accordion when user clicks FAQ
- Text answer shown first, video below for those who want more detail
- Transcript in collapsible `<details>` section for accessibility
- YouTube embedding is lazy-loaded for performance
- Transcripts improve SEO (indexed as text) and accessibility (ADA compliance)

**Video Guidelines**:
- Keep videos 2-3 minutes max for engagement
- Host on YouTube (best for indexing + analytics)
- Include captions on video itself
- Transcript should match video content verbatim
- Start with 1-2 FAQs with video to test engagement impact

### Adding SEO Schema to a Page
1. Import schema generator from `src/lib/schema-generators.ts`
2. Create schema object with page data
3. Embed in page as: `<script type="application/ld+json">{JSON.stringify(schema)}</script>`
4. Validate with Google Rich Results Test tool

## Environment Setup

Create `.env.local` in root:
```
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

This is required for the chatbot to function.

## Important Files to Know

| File | Purpose |
|------|---------|
| `src/data/company-info.ts` | Master data hub - single source of truth |
| `/posts/` | Blog post directory - Markdoc files with YAML frontmatter (14+ posts) |
| `src/lib/blog-utils.ts` | Blog utility functions - `getBlogPosts()`, `getBlogPost()`, frontmatter parsing |
| `src/markdoc/config.ts` | Markdoc configuration with custom tags (callout, relatedPosts) |
| `src/markdoc/renderer.tsx` | Transforms Markdoc AST to styled React components |
| `src/data/faq-data.ts` | FAQ content organized by category (20+ answers) |
| `src/data/solutions.ts` | Funding solutions catalog |
| `src/data/partners.ts` | Partner types and testimonials |
| `src/lib/ai.ts` | Chatbot AI context builder |
| `src/app/api/chat/route.ts` | Chatbot API endpoint |
| `src/lib/schema-generators.ts` | JSON-LD schema generation utilities |
| `src/components/cta.tsx` | Reusable CTA component (use for all CTAs!) |
| `src/components/HeroFadeIn.tsx` | Hero section component |
| `src/components/Breadcrumb.tsx` | Breadcrumb navigation |
| `next.config.ts` | Next.js configuration (headers, redirects, images) |
| `tailwind.config.ts` | Tailwind theme with olive/gold colors |
| `CLAUDE.md` | This file - guidelines for working with the codebase |
| `PODCAST-CONTENT-ANALYSIS.md` | Content gaps analysis from podcast - SEO/FAQ opportunities |

## Color Scheme

Custom theme in `tailwind.config.ts`:
- **Olive** (primary): `olive-900` (#2a231a) for dark text/backgrounds
- **Gold** (accent): `gold-500` (#c99c42) for highlights and CTAs

Use via Tailwind classes: `bg-olive-900`, `text-gold-500`, etc.

## TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- Target: ES2021
- Module resolution: bundler (Next.js 13+)

## Deployment

The app is configured for multiple deployment targets:
- **Vercel** (recommended) - handles Next.js optimally
- **Railway** - requires `ANTHROPIC_API_KEY` env var
- **Self-hosted** - standalone Next.js server via `npm run build && npm start`

Next.js output is set to `standalone` for containerized deployments.

## AIEO/Schema Markup Status

This is an ongoing initiative to improve visibility in AI responses:
- **Phase 1**: ✅ Complete - Base schemas and data structure in place
- **Week 1**: Founder verification of 46 data points (in `src/data/company-info.ts`)
- **Weeks 2-4**: Implementation roadmap in `IMPLEMENTATION-GUIDE.md`
  - Week 2: FAQ page + FAQPage schema
  - Week 3: Solutions page enhancements + Service schemas
  - Week 4: Case studies + Review schema

See `HOW-AI-SEES-YOUR-SITE.md` for technical architecture details.

## Performance Considerations

- Next.js Turbopack for faster builds
- Static page generation where possible
- Image optimization (multiple formats, quality levels, caching)
- API routes optimized for serverless
- Security headers configured in `next.config.ts`
- CSP policy allows specific third-party domains (HubSpot, Umami analytics)

## Key Dependencies

- **React 19.2.1** - UI framework
- **Next.js 16.0.7** - Framework with App Router
- **Framer Motion 12.23.24** - Animations
- **Tailwind CSS 4.1.17** - Styling with PostCSS
- **@anthropic-ai/sdk 0.70.1** - Claude API
- **Lucide React 0.554.0** - Icon library
- **class-variance-authority 0.7.1** - Component styling patterns
- **@markdoc/markdoc 0.4.0** - Markdown parsing and custom tag support
- **@markdoc/next.js 0.4.1** - Next.js integration for Markdoc
