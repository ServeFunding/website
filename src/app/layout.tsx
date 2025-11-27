import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { NewsletterForm } from "@/components/Forms"
import { ChatbotWrapper } from "@/components/ChatbotWrapper"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Serve Funding - Working Capital Solutions for Growing Businesses",
  description: "Creative working capital solutions from $250K to $100MM. Asset-based lending, invoice factoring, equipment leasing, and more for entrepreneurs.",
  keywords: "working capital, business loans, asset-based lending, invoice factoring, equipment leasing, business funding",
  openGraph: {
    title: "Serve Funding - Working Capital Solutions for Growing Businesses",
    description: "Creative working capital solutions from $250K to $100MM. Asset-based lending, invoice factoring, equipment leasing, and more for entrepreneurs.",
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
    <html lang="en">
      <head>
        {/* Preconnect to critical third-party resources */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://umami-production-25e0.up.railway.app" />

        {/* Umami Analytics */}
        <script
          defer
          src="https://umami-production-25e0.up.railway.app/script.js"
          data-website-id="4493b6db-f043-4505-a592-03c371ce8998"
        />
        {/* Organization Schema - Global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "@id": "https://servefunding.com",
              "name": "Serve Funding LLC",
              "description": "Boutique working capital advisory providing creative financing solutions from $250K to $100MM for growing businesses",
              "url": "https://servefunding.com",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "serviceType": "Working Capital Advisory",
              "knowsAbout": [
                "Asset-Based Lending",
                "Invoice Factoring",
                "Equipment Leasing",
                "Working Capital Loans",
                "Purchase Order Financing",
                "Government Contract Financing",
                "Real Estate Financing",
                "SBA Loans",
                "Inventory Financing",
                "Unsecured Debt"
              ],
              "foundingDate": "2021",
              "founder": {
                "@type": "Person",
                "name": "Michael Kodinsky",
                "jobTitle": "Founder & CEO",
                "url": "https://www.linkedin.com/in/michael-kodinsky/",
                "sameAs": "https://www.linkedin.com/in/michael-kodinsky/",
                "description": "15+ years of commercial banking and alternative financing experience"
              },
              "sameAs": [
                "https://www.linkedin.com/company/serve-funding",
                "https://www.facebook.com/servefunding",
                "https://twitter.com/servefunding"
              ]
            })
          }}
        />
      </head>
      <body className="bg-white">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <NewsletterForm />
        <Footer />
        <ChatbotWrapper />
      </body>
    </html>
  )
}
