import Link from "next/link"
import { Container, Heading, Text } from "./design-system"

export function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-16 border-t border-gray-200 font-sans">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Menu */}
          <div>
            <Heading as="h3" size="h4" className="text-olive-900 mb-6">Menu</Heading>
            <div className="space-y-3 flex flex-col">
              <Link href="/" className="text-olive-900 hover:text-gold-500 transition-colors">Home</Link>
              <Link href="/solutions" className="text-olive-900 hover:text-gold-500 transition-colors">Solutions</Link>
              <Link href="/fundings" className="text-olive-900 hover:text-gold-500 transition-colors">Fundings</Link>
              <Link href="/partners" className="text-olive-900 hover:text-gold-500 transition-colors">Partners</Link>
              <Link href="/about-us" className="text-olive-900 hover:text-gold-500 transition-colors">About us</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Heading as="h3" size="h4" className="text-olive-900 mb-6">Quick Links</Heading>
            <div className="space-y-3 flex flex-col">
              <Link href="/privacy-policy" className="text-olive-900 hover:text-gold-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-olive-900 hover:text-gold-500 transition-colors">Terms of Service</Link>
              <Link href="/contact-us" className="text-olive-900 hover:text-gold-500 transition-colors">Contact Us</Link>
              <Link href="/faq" className="text-olive-900 hover:text-gold-500 transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <Heading as="h3" size="h4" className="text-olive-900 mb-6">Get In Touch</Heading>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-olive-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a href="mailto:michael@servefunding.com" className="text-olive-900 hover:text-gold-500 transition-colors">michael@servefunding.com</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-olive-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.423 1.157 1.03 2.268 1.87 3.109.84.84 1.952 1.447 3.109 1.87l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <a href="tel:+7708207409" className="text-olive-900 hover:text-gold-500 transition-colors">+770-820-7409</a>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img src="/Logo_Full-color_long_samecolor-1.png" alt="Serve Funding" className="h-12" />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <Text size="sm" className="text-gray-600 text-center">
            © 2024 All Rights Reserved – Serve Funding, LLC.
          </Text>
        </div>
      </Container>
    </footer>
  )
}
