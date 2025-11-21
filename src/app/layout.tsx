import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Newsletter } from "@/components/Newsletter"
import { Chatbot } from "@/components/Chatbot"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Serve Funding - Working Capital Solutions",
  description: "Creative working capital solutions for growing businesses",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Newsletter />
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
