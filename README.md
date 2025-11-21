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
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts          # AI chat API endpoint
│   │   ├── layout.tsx                 # Root layout with header/footer
│   │   ├── page.tsx                   # Home page
│   │   ├── fundings/page.tsx          # Funding scenarios & success stories
│   │   ├── solutions/page.tsx         # Funding solutions overview
│   │   ├── partners/page.tsx          # Partner information
│   │   ├── about-us/page.tsx          # About page
│   │   ├── contact-us/page.tsx        # Contact page
│   │   ├── faq/page.tsx               # FAQ page
│   │   ├── privacy-policy/page.tsx    # Privacy policy
│   │   ├── terms-of-service/page.tsx  # Terms of service
│   │   └── globals.css                # Global styles
│   ├── components/
│   │   ├── Header.tsx                 # Navigation header with dropdowns
│   │   ├── Footer.tsx                 # Footer with links and contact info
│   │   ├── Chatbot.tsx                # AI chatbot component
│   │   ├── Newsletter.tsx             # Newsletter signup form
│   │   └── design-system.tsx          # Reusable design system components
│   └── lib/
│       ├── ai.ts                      # AI integration and context
│       ├── seo.ts                     # SEO metadata configuration
│       └── utils.ts                   # Utility functions
├── public/                             # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.mjs
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
- Floating chatbot widget with message history
- Real-time responses powered by Claude 3.5 Sonnet
- System prompt trained on Serve Funding business context
- Streaming UI with loading states

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
  "message": "What funding options do you offer?"
}
```

**Response:**
```json
{
  "reply": "We offer multiple funding solutions including..."
}
```

## Customization

### Adding New Pages
1. Create a new folder in `src/app/[page-name]/`
2. Create `page.tsx` with your page content
3. Add navigation links in `Header.tsx` if needed

### Updating Colors
Edit `tailwind.config.ts` to modify the color palette.

### Modifying Components
All design system components are in `src/components/design-system.tsx` for easy customization.

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

## License

© 2024 Serve Funding, LLC. All Rights Reserved.
