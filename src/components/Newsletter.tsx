'use client'

import { ArrowRight } from "lucide-react"
import { Container, Heading, Text } from "./design-system"

export function Newsletter() {
  return (
    <section className="bg-[#f4f6e3] py-20 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* "Logo" recreation */}
            <div className="flex items-center gap-4 mb-8">
              <img src="/android-chrome-192x192.png" alt="Serve Funding" className="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-serif font-bold text-olive-900 leading-none">creative<br/>working<br/>capital</h3>
                <p className="text-xs text-olive-800 mt-1 italic">A monthly good newsletter from Serve Funding</p>
              </div>
            </div>

            <div>
              <Heading as="h2" size="h2" className="text-olive-800 mb-2">
                Sign-up for our newsletter:
              </Heading>
              <Heading as="h2" size="h2" className="text-olive-900 font-bold mb-6">
                CREATIVE WORKING CAPITAL
              </Heading>
              <Text className="text-olive-800/80 max-w-md text-lg">
                Receive exclusive access to monthly client success stories and detailed credit criteria from our preferred lender network.
              </Text>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-olive-900/10">
            <form
              action="https://formspree.io/f/xrbjwwlp"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-olive-900 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-olive-900 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-olive-900 mb-1">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-olive-900 focus:border-transparent outline-none transition-all bg-white pr-12"
                    placeholder="you@company.com"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
