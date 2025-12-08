import Link from "next/link"
import Image from "next/image"
import { Container, Heading, Text, SocialIcons } from "./ui"
import { COLORS as BRAND_COLORS } from "@/lib/colors"
import { blogPosts } from "@/data/blog-posts"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Serve Funding",
  "url": "https://servefunding.com",
  "logo": "https://servefunding.com/Logo_Full-color_long_samecolor-1.png",
  "description": "Creative working capital solutions for growing businesses",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+770-820-7409",
    "email": "michael@servefunding.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.linkedin.com/company/serve-funding"
  ]
}

export function Footer() {
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <footer className="bg-white text-gray-800 border-t border-gray-200 font-sans">
        <div className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Menu */}
              <div>
                <Heading size="h3" className="text-olive-900 font-bold mb-6">Menu</Heading>
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
                <Heading size="h3" className="text-olive-900 font-bold mb-6">Quick Links</Heading>
                <div className="space-y-3 flex flex-col">
                  <Link href="/privacy-policy" className="text-olive-900 hover:text-gold-500 transition-colors">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="text-olive-900 hover:text-gold-500 transition-colors">Terms of Service</Link>
                  <Link href="/contact-us" className="text-olive-900 hover:text-gold-500 transition-colors">Contact Us</Link>
                  <Link href="/faq" className="text-olive-900 hover:text-gold-500 transition-colors">FAQ</Link>
                </div>
              </div>

              {/* Blog */}
              <div>
                <Heading size="h3" className="text-olive-900 font-bold mb-6">Blog</Heading>
                <div className="space-y-3 flex flex-col">
                  {sortedBlogPosts.slice(0, 4).map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="text-olive-900 hover:text-gold-500 transition-colors text-sm">
                      {post.title}
                    </Link>
                  ))}
                  <Link href="/blog" className="text-gold-500 hover:text-gold-600 transition-colors text-sm font-semibold mt-2">
                    View All Posts →
                  </Link>
                </div>
              </div>

              {/* Get In Touch */}
              <div>
                <Heading size="h3" className="text-olive-900 font-bold mb-6">Get In Touch</Heading>
                <div className="space-y-3 mb-6">
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
                {/* Social Icons */}
                <SocialIcons />
              </div>
            </div>

            {/* Network Affiliations and Logo */}
            <div className="border-t border-gray-200 pt-12">
              <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
                <a href="https://www.acg.org/" target="_blank" rel="noopener noreferrer" title="Visit ACG Global - Association for Corporate Growth" className="hover:opacity-80 transition-opacity">
                  <Image src="/ACG Global Logo.png" alt="ACG Global - Association for Corporate Growth" width={140} height={60} className="h-16 w-auto" />
                </a>
                <a href="https://www.factoring.org/" target="_blank" rel="noopener noreferrer" title="Visit IFA - International Factoring Association" className="hover:opacity-80 transition-opacity">
                  <Image src="/IFA.png" alt="IFA - International Factoring Association" width={100} height={50} className="h-16 w-auto" />
                </a>
                <a href="https://www.sfnet.com/" target="_blank" rel="noopener noreferrer" title="Visit Secured Finance Network" className="hover:opacity-80 transition-opacity">
                  <Image src="/Secured Finance Network.jpg" alt="Secured Finance Network" width={160} height={50} className="h-16 w-auto" />
                </a>
                <a href="https://www.turnaround.org/" target="_blank" rel="noopener noreferrer" title="Visit TMA - Turnaround Management Association" className="hover:opacity-80 transition-opacity">
                  <Image src="/TMA.webp" alt="TMA - Turnaround Management Association" width={120} height={50} className="h-16 w-auto" />
                </a>
              </div>
              <div className="flex justify-center mt-24">
                <Image
                  src="/Logo_Full-color_long_samecolor-1.png"
                  alt="Serve Funding"
                  className="h-28 w-auto"
                  width={428}
                  height={118}
                />
              </div>
            </div>
          </Container>
        </div>

        {/* Copyright - Full Width */}
        <div className="py-4" style={{ backgroundColor: BRAND_COLORS.primary }}>
          <Container>
            <Text size="sm" className="text-center" style={{ color: '#ffffff' }}>
              © 2025 All Rights Reserved — Serve Funding, LLC.
            </Text>
          </Container>
        </div>
      </footer>
    </>
  )
}
