'use client'

import { Container, Heading, Text, Button, FormField, FormLabel, FormInput } from "./design-system"

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
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <form
              action="https://formspree.io/f/xrbjwwlp"
              method="POST"
              className="space-y-4"
            >
              <FormField>
                <FormLabel>First Name</FormLabel>
                <FormInput
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  placeholder="Your first name"
                />
              </FormField>
              <FormField>
                <FormLabel>Email Address</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                />
              </FormField>
              <div className="flex gap-4">
                <Button
                  type="submit"
                  variant="default"
                  className="flex-1"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
