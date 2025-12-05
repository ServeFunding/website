# Serve Funding - Next.js Version

A modern Next.js 16 application for Serve Funding, a working capital advisory company specializing in alternative funding solutions for businesses.

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS v4 with custom theme colors (olive, gold)
- **UI Components**: React with Framer Motion animations
- **AI Integration**: Anthropic Claude API for chatbot
- **Icons**: Lucide React
- **Component Library**: Class Variance Authority (CVA) for component styling

## Project Structure

```
serve-funding/
├── src/
│   ├── app/                          # Next.js App Router (13+)
│   │   ├── api/chat/route.ts        # Claude chatbot API endpoint
│   │   ├── layout.tsx                # Root layout with Header/Footer
│   │   ├── page.tsx                  # Home page
│   │   ├── solutions/
│   │   │   ├── page.tsx              # Funding solutions overview
│   │   │   └── [solution-id]/        # Dynamic solution detail pages
│   │   ├── fundings/page.tsx         # Case studies & success stories
│   │   ├── faq/page.tsx              # FAQ page with SearchableUI
│   │   ├── about-us/page.tsx         # Company story & team
│   │   ├── partners/page.tsx         # Partner information
│   │   ├── contact-us/page.tsx       # Contact form
│   │   ├── blog/page.tsx             # Blog listing
│   │   ├── privacy-policy/page.tsx   # Privacy policy
│   │   ├── terms-of-service/page.tsx # Terms of service
│   │   ├── sitemap.ts                # Dynamic sitemap for SEO
│   │   ├── globals.css               # Global styles
│   │   └── not-found.tsx             # 404 page
│   ├── components/
│   │   ├── Header.tsx                # Navigation with dropdown menus
│   │   ├── Footer.tsx                # Footer with link sections
│   │   ├── Chatbot.tsx               # Floating AI chatbot widget
│   │   ├── ChatbotWrapper.tsx        # Wrapper for chatbot integration
│   │   ├── HeroCarousel.tsx          # Hero section animations
│   │   ├── ProcessCard.tsx           # Process step cards
│   │   ├── FAQSection.tsx            # FAQ display component
│   │   ├── LoadingSkeleton.tsx       # Loading states
│   │   ├── PerformanceMonitor.tsx    # Performance tracking
│   │   └── ui/                       # Design system (CVA components)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── heading.tsx
│   │       ├── text.tsx
│   │       ├── section.tsx
│   │       ├── container.tsx
│   │       ├── form-input.tsx
│   │       ├── form-select.tsx
│   │       ├── fade-in.tsx
│   │       └── stagger-container.tsx
│   ├── data/
│   │   ├── company-info.ts           # Master data hub (single source of truth)
│   │   ├── solutions.ts              # Funding solutions metadata
│   │   ├── faq-data.ts               # FAQ content
│   │   └── fundingData.ts            # Case studies
│   ├── lib/
│   │   ├── ai.ts                     # AI context builder & chatbot logic
│   │   ├── schema-generators.ts      # JSON-LD schema markup generators
│   │   ├── seo.ts                    # Metadata & SEO utilities
│   │   ├── header-nav.ts             # Navigation structure
│   │   ├── colors.ts                 # Color system
│   │   ├── layout.ts                 # Layout utilities
│   │   ├── tracking.ts               # Analytics
│   │   └── utils.ts                  # General utilities
│   └── types/
│       ├── faq.ts                    # FAQ type definitions
│       └── solutions.ts              # Solution type definitions
├── public/                           # Static assets (images, icons, fonts)
├── package.json
├── next.config.ts                    # Next.js config (headers, redirects, images)
├── tailwind.config.ts                # Tailwind theme (olive/gold colors)
├── tsconfig.json
├── postcss.config.mjs
└── CLAUDE.md                         # Developer guidance for AI assistants
```

## Key Features

### Design System
- **Heading**: Typography component with size and color variants
- **Text**: Flexible text component with size, weight, and color options
- **Button**: Versatile button with multiple variants (default, gold, outline, ghost, link, white)
- **Card**: Container component with different styling variants
- **Section**: Full-width section container with background options (white, gray, olive)
- **Container**: Responsive max-width wrapper

### Animations
- **FadeIn**: Fade and slide-up animation on scroll
- **StaggerContainer**: Container for staggered child animations
- **StaggerItem**: Child component with stagger animation
- Framer Motion integration throughout

### AI Chatbot
- Floating chatbot widget with conversation history
- Powered by Claude Haiku 4.5 (fast, cost-effective)
- Dynamic system prompt built from company data (`src/data/company-info.ts`)
- Brief responses (1-2 sentences max, no markdown)
- Conversation context maintained across messages
- Handles multi-turn discussions with company knowledge

### Navigation
- Fixed header with scroll detection
- Dropdown menus for Solutions, Partners, and About Us sections
- Mobile responsive hamburger menu
- Newsletter signup section
- Footer with multiple link sections

## Getting Started

### Prerequisites
- Node.js 18+ (recommended: 20.x or later)
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)
This project is optimized for Vercel deployment:

```bash
vercel
```

### Railway
For Railway deployment:
1. Connect your GitHub repository
2. Set `ANTHROPIC_API_KEY` environment variable
3. Deploy

### Self-Hosted
The project can be deployed to any Node.js server:

```bash
npm run build
npm run start
```

## Color Scheme

### Olive (Primary)
- `olive-900`: `#2a231a` - Dark backgrounds and text
- `olive-800`: `#3d3225` - Secondary dark
- `olive-700`: `#5a4a35` - Medium tones
- Lighter variants available

### Gold (Accent)
- `gold-500`: `#c99c42` - Primary accent
- `gold-600`: `#b8851a` - Hover state
- Various tints for backgrounds

## API Endpoints

### POST `/api/chat`
Handles chatbot messages using Claude API.

**Request:**
```json
{
  "message": "What funding options do you offer?",
  "conversationHistory": [
    { "text": "Hello", "sender": "user" },
    { "text": "Hi! How can I help?", "sender": "bot" }
  ]
}
```

**Response:**
```json
{
  "reply": "We offer multiple funding solutions including asset-based lending and invoice financing."
}
```

**Details:**
- System prompt dynamically built from `src/data/company-info.ts`
- Maintains conversation context for multi-turn conversations
- Max response: 1024 tokens
- Model: `claude-haiku-4-5-20251001`
- Responses kept brief (1-2 sentences, no markdown)

## Customization

### Adding a New Funding Solution
1. Add entry to `src/data/solutions.ts` with title, description, features, rates, terms
2. Dynamic route `src/app/solutions/[solution-id]/page.tsx` automatically generates detail pages
3. Update `src/data/company-info.ts` if adding new process steps or philosophy
4. Solution automatically available in chatbot context via `buildAIContext()`

### Updating Company Information
1. Edit `src/data/company-info.ts` (single source of truth)
2. Changes propagate to:
   - Chatbot AI system prompt (via `src/lib/ai.ts`)
   - Schema markup (via `src/lib/schema-generators.ts`)
   - All pages importing this data
   - No cache invalidation needed—built at request time

### Adding New Pages
1. Create folder in `src/app/[page-name]/`
2. Create `page.tsx` with content
3. Use design system components from `src/components/ui/`
4. Add navigation links in `src/components/Header.tsx` if needed

### Modifying the Chatbot
- **System prompt**: Edit `src/lib/ai.ts` `buildAIContext()` function
- **UI/styling**: Edit `src/components/Chatbot.tsx`
- **API logic**: Edit `src/app/api/chat/route.ts`
- **Behavior**: Modify conversation flow in `src/components/Chatbot.tsx`

### Adding SEO Schema Markup
1. Import schema generator from `src/lib/schema-generators.ts`
2. Create schema object with page data
3. Embed in page: `<script type="application/ld+json">{JSON.stringify(schema)}</script>`
4. Validate with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Updating Colors
Edit `tailwind.config.ts` to modify the olive/gold theme colors.

### Modifying Components
Design system components are in `src/components/ui/`. Use CVA (class-variance-authority) patterns for variants:
```tsx
import { button } from "@/components/ui/button"
<button className={button({ variant: "gold" })}>Click me</button>
```

## Performance

- Built with Next.js Turbopack for faster builds
- Static page generation for better performance
- API routes optimized for serverless deployment
- Responsive design with mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## AIEO/GEO Optimization (LLM Visibility)

This project is optimized for AI Engine Optimization (AIEO) to maximize visibility in LLM responses (ChatGPT, Claude, Perplexity, Google AI Overviews).

### Current Status: Phase 1 Complete
- ✅ Master data file: `src/data/company-info.ts` (46 items need verification)
- ✅ Schema generators: `src/lib/schema-generators.ts` (8 reusable functions)
- ✅ Organization schema live on every page

### Week 1: Verification (NOW)
**See:** `WEEK-1-VERIFICATION-CHECKLIST.md`

Fill in 46 verification items in `src/data/company-info.ts`:
- Company basics (address, phone, team size)
- Business metrics (capital facilitated, clients served)
- Founder information (background, education, credentials)
- Product rates & terms (verify with lending partners)
- Qualification criteria (credit score, revenue minimums)

**Timeline:** 3-4 hours to complete

### Weeks 2-4: Implementation
See `IMPLEMENTATION-GUIDE.md` for detailed roadmap:
- **Week 2:** FAQ page with 224 questions + FAQPage schema
- **Week 3:** Solutions page with Service schema (10 funding types)
- **Week 4:** Case studies with Review schema + Process with How-To schema

### How It Works
1. Data stored in `src/data/company-info.ts`
2. Schema generators transform to JSON-LD in `src/lib/schema-generators.ts`
3. React components render both visible content and invisible schema scripts
4. Next.js SSR ensures complete HTML sent to browsers and AI crawlers
5. AI bots parse schema, understand your offerings, cite your site in responses

**See:** `HOW-AI-SEES-YOUR-SITE.md` for complete technical details

### Key Files
- **Data:** `src/data/company-info.ts` - Master information hub
- **Schema:** `src/lib/schema-generators.ts` - Schema markup functions
- **Guides:**
  - `WEEK-1-VERIFICATION-CHECKLIST.md` - This week's tasks
  - `IMPLEMENTATION-GUIDE.md` - 4-week roadmap
  - `MARKET-RESEARCH-MOST-SEARCHED-QUESTIONS.md` - 224 FAQ questions
  - `HOW-AI-SEES-YOUR-SITE.md` - Architecture explanation

### Getting Started
1. Read: `WEEK-1-VERIFICATION-CHECKLIST.md`
2. Open: `src/data/company-info.ts`
3. Fill in: All 46 `[VERIFY:]` items
4. Validate: Schema with Google Rich Results Test
5. Commit: Changes to git

---

## License

© 2024 Serve Funding, LLC. All Rights Reserved.
