'use client'

import {
  ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/ui'
import { FeatureList } from '@/components/FeatureList'
import { LAYOUT } from '@/lib/layout'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { CTA } from '@/components/cta'
import { fundingSolutions } from '@/data/solutions'
import Link from 'next/link'
import { trackSolutionClick } from '@/lib/tracking'

export function SolutionsClient() {
  const handleSolutionClick = (solutionName: string) => {
    trackSolutionClick(solutionName)
  }

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <HeroFadeIn
        title={<>The Right Funding<br />for Your Business</>}
        subtitle="Explore alternative funding solutions from $250K-$100MM. From emergency payroll financing to debt refinance and MCA consolidation, we help growing businesses access creative working capital when traditional banks decline. Fast decisions, flexible terms, and a channel-neutral advisor fighting for your best interests."
      />

      {/* Solutions Overview with CTA */}
      <Section background="white" className="py-16">
        <Container>
          <FadeIn>
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900">
                <span className="text-olive-900">Explore Our Options for</span>
                <br />
                <span className="text-gold-500">Creative Working Capital</span>
              </Heading>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {fundingSolutions.map((solution, index) => (
                <StaggerItem key={solution.id}>
                  <Link 
                    href={`/solutions/${solution.id}`} 
                    onClick={() => handleSolutionClick(solution.title)} 
                    className="group cursor-pointer block h-full"
                  >
                    <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
                      <Heading size="h3" className="mb-3 text-olive-900 group-hover:text-gold-500 transition-colors">
                        {solution.title}
                      </Heading>
                      {/* Answer Capsule - AI Optimized */}
                      <Text className="text-gray-700 text-sm leading-relaxed mb-3 italic border-l-2 border-gold-500 pl-4">
                        {solution.whatIs}
                      </Text>
                      <Text className="text-gray-600 text-sm leading-relaxed">
                        {solution.shortDesc}
                      </Text>
                    </Card>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </Container>
      </Section>

      {/* Why Choose Serve Funding Section */}
      <Section background="gray">
        <Container>
          <FadeIn className="text-center mb-12">
            <Heading size="h2">
              Why Choose <span className="text-gold-500">Serve Funding?</span>
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <StaggerItem>
              <Card className="p-8 h-full">
                <Heading size="h4" className="mb-4 text-olive-900">
                  Channel-Neutral Advisor
                </Heading>
                <Text className="text-gray-700">
                  We are not a lender. We are your advocate with access to 30+ lenders across multiple underwriting styles. We fight to negotiate the best terms for you.
                </Text>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-8 h-full">
                <Heading size="h4" className="mb-4 text-olive-900">
                  Fast Decisions
                </Heading>
                <Text className="text-gray-700">
                  Most solutions close in 3-10 business days. Emergency payroll funding in 24-72 hours. When time matters, we deliver.
                </Text>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-8 h-full">
                <Heading size="h4" className="mb-4 text-olive-900">
                  Relationships Over Bots
                </Heading>
                <Text className="text-gray-700">
                  No automated platforms. No algorithms. Just trusted advisors who understand your story and protect your best interests.
                </Text>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="text-center">
            <Text size="lg" className="mb-6 text-gray-700">
              Ready to find the right solution for your business? Our team is ready to guide you through every step.
            </Text>
            <Link href="/contact-us">
              <Button variant="gold" size="lg">Let's Talk!</Button>
            </Link>
          </FadeIn>
        </Container>
      </Section>

      {/* Client Testimonials Section */}
      <Section background="white" className="py-20">
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading size="h2" className="mb-4">What Our Clients Say</Heading>
            <Text size="lg" className="text-gray-700 max-w-2xl mx-auto">
              Hear from business owners and advisors who've experienced the Serve Funding difference
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <StaggerItem>
              <Card className="p-8 bg-gold-50 border border-gold-200 h-full flex flex-col">
                <Text className="text-gray-800 italic mb-6 flex-grow">
                  "We could have worked with multiple lenders over these 5 years. But Serve Funding started with understanding, not with products. They designed solutions around our mission, not theirs. That's why we keep choosing them."
                </Text>
                <div>
                  <Heading size="h4" className="text-olive-900 mb-1">Label Manufacturer, Texas</Heading>
                  <Text className="text-sm text-gray-600">$1.65MM deployed over 5 years • 67% revenue growth</Text>
                </div>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-8 bg-gold-50 border border-gold-200 h-full flex flex-col">
                <Text className="text-gray-800 italic mb-6 flex-grow">
                  "When our bank wouldn't increase our line, we were stuck. Serve Funding not only found us $1MM in PO financing, they did it through relationships they'd built. Speed, flexibility, and advisors who actually cared about our growth."
                </Text>
                <div>
                  <Heading size="h4" className="text-olive-900 mb-1">Coffee Trader, International</Heading>
                  <Text className="text-sm text-gray-600">$1MM facility • Scaled with demand surge</Text>
                </div>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-8 bg-gold-50 border border-gold-200 h-full flex flex-col">
                <Text className="text-gray-800 italic mb-6 flex-grow">
                  "Our surgeon client was about to lose a major exit because of a cash gap. Serve Funding closed in less than 2 weeks. The quality of their relationships and speed of execution made us the hero in our client's story."
                </Text>
                <div>
                  <Heading size="h4" className="text-olive-900 mb-1">Private Banker, Southeast</Heading>
                  <Text className="text-sm text-gray-600">$1.475MM bridge • 2-week close</Text>
                </div>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-8 bg-gold-50 border border-gold-200 h-full flex flex-col">
                <Text className="text-gray-800 italic mb-6 flex-grow">
                  "We hit our bank line ceiling but were still growing 30% YoY. Serve Funding provided 3 different options with different lenders. They educated us, explained the trade-offs, and let us decide. That's the opposite of how fintech platforms work."
                </Text>
                <div>
                  <Heading size="h4" className="text-olive-900 mb-1">Medical Device Manufacturer, Florida</Heading>
                  <Text className="text-sm text-gray-600">$3.35MM over 10 months • 30%+ growth</Text>
                </div>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </Section>

      {/* Detailed Solutions Section */}
      <Section background="white" className="py-20">
        <Container>
          <StaggerContainer className="space-y-24">
            {fundingSolutions.map((solution, index) => (
              <StaggerItem key={solution.id} className="scroll-mt-24">
                <div id={solution.id} style={{ scrollMarginTop: LAYOUT.scrollMarginTop }} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2 lg:direction-rtl' : ''}`}>
                  {/* Text Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Heading size="h2" className="mb-6 text-olive-900">
                      <span className="text-olive-900">{solution.title}</span>
                    </Heading>
                    <Text className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {solution.fullDesc}
                    </Text>

                    <div className="mb-8">
                      <FeatureList features={solution.features} />
                    </div>

                    {/* Learn More Link to Detail Page */}
                    <Link href={`/solutions/${solution.id}`} onClick={() => handleSolutionClick(solution.title)}>
                      <Button variant="default" className="flex items-center gap-2">
                        Learn More <ChevronRight size={18} />
                      </Button>
                    </Link>
                  </div>

                  {/* Image Content */}
                  <div className={`relative h-96 bg-gradient-to-br from-olive-800 to-olive-700 rounded-3xl overflow-hidden group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 to-transparent"></div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTA
        title="Ready to Take the Next Step?"
        text="Connect with our team of funding experts to discuss which solution is right for your business and get started on your path to growth."
        buttonText="Let's Talk!"
        href="/contact-us"
        source="solutions-bottom"
      />
    </div>
  )
}
