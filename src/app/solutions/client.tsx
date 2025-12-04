'use client'

import {
  CheckCircle,
  ChevronRight
} from 'lucide-react'
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
        title="The Right Funding for Your Business"
        subtitle="Serve Funding offers 10+ working capital solutions including asset-based lending, invoice factoring, equipment leasing, PO financing, government contracts, inventory financing, and unsecured loans. Funding range: $250K-$100MM. Fast decisions within 24 hours. Trusted by manufacturers, distributors, and professional services firms."
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
              {fundingSolutions.map((solution) => (
                <StaggerItem key={solution.id}>
                  <Link href={`/solutions/${solution.id}`} onClick={() => handleSolutionClick(solution.title)} className="group cursor-pointer block h-full">
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
                <Heading size="h3" className="mb-4 text-olive-900">
                  Tailored Solutions
                </Heading>
                <Text className="text-gray-700">
                  Every business is unique. Our funding options are customized to your specific needs.
                </Text>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-8 h-full">
                <Heading size="h3" className="mb-4 text-olive-900">
                  Expert Guidance
                </Heading>
                <Text className="text-gray-700">
                  Our team has years of experience in structuring financing that drives growth.
                </Text>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-8 h-full">
                <Heading size="h3" className="mb-4 text-olive-900">
                  Flexible Terms
                </Heading>
                <Text className="text-gray-700">
                  We offer flexible terms that adapt as your business evolves.
                </Text>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="text-center">
            <Text size="lg" className="mb-6 text-gray-700">
              Ready to find the right solution for your business? Our team is ready to guide you through every step.
            </Text>
            <Link href="/contact-us">
              <Button>Get Started Today</Button>
            </Link>
          </FadeIn>
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

                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="p-1 bg-gold-500/20 rounded-full mt-1">
                            <CheckCircle size={16} className="text-olive-900 flex-shrink-0" />
                          </div>
                          <Text className="text-gray-700">{feature}</Text>
                        </div>
                      ))}
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
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
        buttonText="Schedule Your Consultation"
        href="/contact-us"
        source="solutions-bottom"
      />
    </div>
  )
}
