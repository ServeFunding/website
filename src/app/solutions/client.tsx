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
import { getTitleAsString } from '@/lib/solution-helpers'

export function SolutionsClient() {
  const handleSolutionClick = (solutionId: string) => {
    trackSolutionClick(solutionId)
  }

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <HeroFadeIn
        title={<>The Right Funding<br />for Your Business</>}
        subtitle={<>Serve Funding offers working capital solutions including asset-based lending, <br />invoice factoring, equipment leasing, PO financing, government contracting, <br />inventory financing, and unsecured loans. Funding range: $250K-$100MM.</>}
      />

      {/* Solutions Overview with CTA */}
      <Section background="white" className="py-16">
        <Container>
          <FadeIn>
            <Heading size="h2" className='text-center'>
              Our Creative Working Capital Solutions
            </Heading>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {fundingSolutions.map((solution, index) => (
                <StaggerItem key={solution.id}>
                  <Link
                    href={`/solutions/${solution.id}`}
                    onClick={() => handleSolutionClick(solution.id)}
                    className="group cursor-pointer block h-full"
                  >
                    <Card color='background' className="p-8 h-full hover:shadow-lg transition-all duration-300">
                      <Heading size="h3" color='primary' className="mb-3 group-hover:text-gold-500 transition-colors">
                        {solution.title}
                      </Heading>
                      {/* Answer Capsule - AI Optimized */}
                      <Text color='dark' className="text-sm leading-relaxed mb-3 italic border-l-2 border-gold-500 pl-4">
                        {solution.whatIs}
                      </Text>
                      <Text color='dark' className="text-sm leading-relaxed">
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
            <StaggerItem key="channel-neutral">
              <Card className="p-8 h-full">
                <Heading size="h4" className="mb-4 text-olive-900">
                  Tailored Solutions
                </Heading>
                <Text className="text-gray-700">
                  Every business is unique. Our funding options are customized to your specific needs.
                </Text>
              </Card>
            </StaggerItem>

            <StaggerItem key="fast-decisions">
              <Card className="p-8 h-full">
                <Heading size="h4" className="mb-4 text-olive-900">
                  Expert Guidance
                </Heading>
                <Text className="text-gray-700">
                  Our team has years of experience in structuring financing that drives growth.
                </Text>
              </Card>
            </StaggerItem>

            <StaggerItem key="relationships">
              <Card className="p-8 h-full">
                <Heading size="h4" className="mb-4 text-olive-900">
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
              <Button variant="gold" size="lg">Let's Talk!</Button>
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
                <div id={solution.id} style={{ scrollMarginTop: LAYOUT.scrollMarginTop }} className={`flex flex-col lg:flex-row gap-12 w-full lg:items-stretch ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text Content */}
                  <div className={`lg:w-2/3 ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
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
                    <Link href={`/solutions/${solution.id}`} onClick={() => handleSolutionClick(solution.id)}>
                      <Button variant="default" className="flex items-center gap-2">
                        Learn More <ChevronRight size={18} />
                      </Button>
                    </Link>
                  </div>

                  {/* Image Content */}
                  <div className={`relative h-auto rounded-3xl overflow-hidden group m-4 lg:m-0 lg:mt-20 lg:flex-shrink-0 lg:w-1/3`}>
                    <Image
                      src={solution.image}
                      alt={getTitleAsString(solution.title)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
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
