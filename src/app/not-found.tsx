'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  FadeIn
} from '@/components/design-system'

export default function NotFound() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Section className="flex-1 flex items-center min-h-[70vh]">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto space-y-8">
            <Heading size="h1" color="gradient">
              We Got Lost
            </Heading>
            <Text size="lg">
              You've reached a page that doesn't exist. It might have moved, or we might have taken a wrong turn. Either way, we're here to help get you back on track.
            </Text>
            <Text size="lg">
              At Serve Funding, we believe in relationships and transparency. So here's the truth: this page isn't where you need to be. But let's get you to where you are looking.
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button variant="default" className="flex items-center gap-2">
                  Back to Home
                  <ChevronRight size={18} />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" className="flex items-center gap-2">
                  Explore Our Solutions
                  <ChevronRight size={18} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  )
}
