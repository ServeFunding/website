import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ChatbotWrapper } from "@/components/ChatbotWrapper"
import { NewsletterModal } from "@/components/NewsletterModal"
import { ScrollToTop } from "@/components/ScrollToTop"
import Script from "next/script"
import { SchemaRenderer } from "@/components/SchemaRenderer"
import { getOrganizationSchema } from "@/lib/schema-generators"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/app/globals.css"
import { Inter, Merriweather } from 'next/font/google'

// Lazy load NewsletterForm to improve LCP
const NewsletterForm = dynamic(() => import("@/components/Forms").then(mod => ({ default: mod.NewsletterForm })), {
  ssr: true,
  loading: () => <div className="py-20" />
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Serve Funding - When Banks Say No, We Say How | $250K-$100MM",
  description: "Boutique working capital advisory specializing in debt refinance, payroll financing, MCA consolidation, and alternative funding when traditional banks decline. Relationships over bots. Fast funding in 3-10 days.",
  keywords: "debt refinance, payroll financing, mca consolidation, when banks say no, alternative business financing, asset-based lending, invoice factoring, channel neutral advisor, boutique lender",
  openGraph: {
    title: "Serve Funding - When Banks Say No, We Say How | $250K-$100MM",
    description: "Boutique working capital advisory specializing in debt refinance, payroll financing, MCA consolidation, and alternative funding when traditional banks decline. Relationships over bots. Fast funding in 3-10 days.",
    url: "https://servefunding.com/",
    siteName: "Serve Funding",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serve Funding - Working Capital Solutions for Growing Businesses",
    description: "Creative working capital solutions from $250K to $100MM. Asset-based lending, invoice factoring, equipment leasing, and more for entrepreneurs.",
  },
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        {/* Schema Markup */}
        <SchemaRenderer schema={getOrganizationSchema()} />

        {/* Preconnect to critical third-party origins for LCP improvement */}
        {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL && (
          <link rel="preconnect" href={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL} />
        )}
      </head>
      <body className="bg-white">
        <ScrollToTop />
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <NewsletterForm />
        <Footer />
        <ChatbotWrapper />
        <NewsletterModal />

        {/* Load third-party scripts after main content */}
        <Script
          src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL!}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="lazyOnload"
        />

        {/* Vercel Speed Insights for real user monitoring */}
        <SpeedInsights />
      </body>
    </html>
  )
}
