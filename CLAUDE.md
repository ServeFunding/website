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
- **`src/data/solutions.ts`**: Funding solutions and their metadata
- **`src/data/faq-data.ts`**: FAQ content
- **`src/data/fundingData.ts`**: Case studies and success stories

**Why this matters**: Changes to company information update everywhere automatically. The file contains `[VERIFY:]` markers for items needing founder validation.

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

**Styling Approach**: Tailwind CSS v4 with custom olive/gold color scheme defined in `tailwind.config.ts`. Classes use CVA patterns like `cn()` utility for conditional styling.

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

### Modifying the Chatbot
- System prompt: Edit `src/lib/ai.ts` `buildAIContext()` function
- UI/styling: Edit `src/components/Chatbot.tsx`
- API logic: Edit `src/app/api/chat/route.ts`
- Conversation flow: Logic is in `src/components/Chatbot.tsx` state management

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
| `src/lib/ai.ts` | Chatbot AI context builder |
| `src/app/api/chat/route.ts` | Chatbot API endpoint |
| `src/lib/schema-generators.ts` | JSON-LD schema generation utilities |
| `next.config.ts` | Next.js configuration (headers, redirects, images) |
| `tailwind.config.ts` | Tailwind theme with olive/gold colors |
| `src/components/Header.tsx` | Navigation and dropdown menus |
| `src/components/Footer.tsx` | Footer structure and links |

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
