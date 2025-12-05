import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {
  Search,
  Clock,
  Shield,
  Leaf,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Handshake
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
import { COLORS as BRAND_COLORS } from '@/lib/colors'
import { topLevelFAQs } from '@/data/faq-data'
import { fundingSolutions } from '@/data/solutions'
import { LoadingSkeleton } from '@/components/LoadingSkeleton'
import { HeroAnimation } from '@/components/HeroAnimation'
import { HeroCarousel } from '@/components/HeroCarousel'
import { FAQSectionWithSchema } from '@/components/FAQSection'
import { ProcessCard } from '@/components/ProcessCard'

// Lazy load below-the-fold components
const IndustriesGrid = dynamic(() => import('@/components/IndustriesGrid').then(mod => ({ default: mod.IndustriesGrid })), {
  loading: () => <LoadingSkeleton />
})

const IntroCallForm = dynamic(() => import('@/components/Forms').then(mod => ({ default: mod.IntroCallForm })), {
  loading: () => <LoadingSkeleton />
})

const heroSlides = [
  {
    heading: "The Right Funding Solutions for Healthy Business Growth",
    desc: "An advisory service committed to serve the best interests of your company's current needs and future goals.",
    image: "/home/right funding solutions.webp",
    width: 1024,
    height: 832
  },
  {
    heading: "You Value Relationships Over Bots & Quick Fixes",
    desc: "We partner with like-minded business leaders who want trusted advisors in their corner to ensure they make the best decisions.",
    image: "/home/value relationships over bots.webp",
    width: 1024,
    height: 819
  },
  {
    heading: "Creative Working Capital Empowering Entrepreneurs",
    desc: "Because your company is unique, you want partners who truly understand your story and align with your objectives.",
    image: "/home/creative working capital.webp",
    width: 1024,
    height: 945
  }
]

export default function Home() {

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <div className="overflow-hidden h-screen">
        <HeroAnimation>
          <HeroCarousel slides={heroSlides} />
        </HeroAnimation>
      </div>

      {/* Value Props Section */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-20">
            <Heading size="h2" className="mb-3">Need Business Growth Capital?<br />We Are Here to Serve You.</Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Transparent",
                icon: Search,
                desc: "We value honest, open communication. We believe that transparency is where trust-based relationships begin."
              },
              {
                title: "Timely",
                icon: Clock,
                desc: "Time is your most valuable resource. We invest our time and expertise to ensure an efficient process."
              },
              {
                title: "Trusted",
                icon: Shield,
                desc: "We represent your firm to our trusted lender partners to protect your best interests."
              }
            ].map((item, index) => (
              <StaggerItem key={index} className={index === 1 ? "md:-translate-y-6 relative z-10" : ""}>
                <Card className="flex flex-col items-center text-center h-full group transition-all duration-300 md:hover:-translate-y-2 bg-white value-card" style={{}}>
                  <div
                    className="icon-flip-outer w-24 h-24 rounded-full mb-8"
                    style={{
                      perspective: '1000px'
                    }}
                  >
                    <div
                      className="icon-flip-inner w-24 h-24 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: BRAND_COLORS.primary.darkGreen
                      }}
                    >
                      <item.icon
                        size={40}
                        style={{ color: BRAND_COLORS.primary.lightGreen }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <Heading size="h3" className="mb-4 text-olive-900" style={{ color: BRAND_COLORS.primary.darkGreen }}>{item.title}</Heading>
                  <Text className="text-gray-600 font-medium">
                    {item.desc}
                  </Text>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Funding Solutions Section */}
      <Section background="gray">
        <Container>
          <FadeIn className="text-center mb-20">
            <Heading size="h2" className="mb-4">
              Funding Solutions From $250K to $100MM
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
            {[
              "Financing Periods Of Rapid Growth",
              "The Bank Says \"No,\" Or Calls Your Line",
              "Fund New Contracts & Purchase Orders",
              "Unsecured Loans & Lines Of Credit",
              "Bridge Funding For Short-Term Gaps",
              "M & A: Capital For Strategic Acquisitions",
              "Longer Payment Terms: Net-60, Net-90 +",
              "Working Capital For Seasonal Shortfalls",
              "MCA (Cash Advance) Consolidations",
              "Cover Unexpected Payroll Shortfalls"
            ].map((item, index) => (
              <StaggerItem key={index} className="flex items-start gap-4 group">
                <div className="mt-1 p-1 bg-gold-500/20 rounded-full">
                  <Leaf className="text-olive-900 flex-shrink-0" size={16} fill="currentColor" />
                </div>
                <span className="text-xl font-semibold text-gray-800 group-hover:text-olive-900 transition-colors">{item}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Solutions Showcase Section */}
      <Section className="py-20" style={{ backgroundColor: BRAND_COLORS.primary.darkGreen }}>
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading size="h2" color="white" className="mb-4" style={{ color: '#ffffff'}}>
              Our Funding Solutions
            </Heading>
            <Text size="lg" className="text-white/90 max-w-2xl mx-auto">
              From $250K to $100MM, we offer creative working capital solutions tailored to your business needs
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {fundingSolutions.slice(0, 6).map((solution) => (
              <StaggerItem key={solution.id}>
                <Link href={`/solutions#${solution.id}`} className="group cursor-pointer block h-full">
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                    <Heading size="h3" className="mb-3 text-olive-900 group-hover:text-gold-500 transition-colors">
                      {solution.title}
                    </Heading>
                    <Text className="text-gray-700 text-sm leading-relaxed">
                      {solution.shortDesc}
                    </Text>
                    <div className="mt-4 flex items-center gap-2 text-gold-500 group-hover:gap-3 transition-all">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ChevronRight size={16} />
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center">
            <Link href="/solutions">
              <Button variant="white" size="lg">Explore All Solutions</Button>
            </Link>
          </FadeIn>
        </Container>
      </Section>

      {/* Industries Section */}
      <Section>
        <Container>
          <FadeIn>
            <Heading size="h2" className="mb-16 text-center">Industries Served</Heading>
          </FadeIn>
          <IndustriesGrid />
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="gray">
        <Container>
          <FadeIn>
            <Heading size="h2" className="mb-16 text-center">Outlining Our Process</Heading>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {[
              {
                step: 1,
                title: "Discovery",
                desc: "We genuinely care and listen to your needs and objectives so our process stays strategic to your growth goals."
              },
              {
                step: 2,
                title: "Diligence",
                desc: "We lead a comprehensive capital search and advise you on your evolving options for short and long-term growth."
              },
              {
                step: 3,
                title: "Delivery",
                desc: "We take responsibility to guide your lender engagements all the way to a timely closing. We are here to serve you."
              }
            ].map((item) => (
              <StaggerItem key={item.step}>
                <ProcessCard step={item.step} title={item.title} desc={item.desc} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Successful Client Fundings Section */}
      <Section className="py-20" style={{ backgroundColor: BRAND_COLORS.primary.darkGreen }}>
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading size="h2" color="white" className="mb-4">Successful Client Fundings</Heading>
            <Text size="lg" className="text-white/90 max-w-2xl mx-auto">
              See how we've helped businesses across industries secure the capital they needed to grow
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Strategic Acquisition',
                desc: 'An established, Ohio-based tech services firm was looking to acquire a staffing firm specializing in their field to empower growth in the labor shortage of 2022.',
                icon: TrendingUp,
                href: '/fundings#strategic-acquisition'
              },
              {
                title: 'Fast Payroll Cover',
                desc: 'A growing, Atlanta, GA-based, niche services firm was facing an unexpected cash flow shortfall due to a large receivable their customer delayed paying.',
                icon: DollarSign,
                href: '/fundings#fast-payroll-cover'
              },
              {
                title: 'Short-Term Cashflow',
                desc: 'Florida-based, $50MM transportation company sought help from their banker for an unexpected scenario',
                icon: Clock,
                href: '/fundings#short-term-cashflow'
              },
              {
                title: 'Partner Buyout',
                desc: 'Two specialty construction firms based in Georgia and South Carolina, respectively, came together years ago to join forces.',
                icon: Handshake,
                href: '/fundings#partner-buyout'
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <Link href={item.href} className="group cursor-pointer block h-full">
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white flex flex-col">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: BRAND_COLORS.primary.darkGreen, border: `2px solid ${BRAND_COLORS.primary.lightGreen}` }}>
                      <item.icon size={32} color={BRAND_COLORS.primary.lightGreen} />
                    </div>
                    <Heading size="h3" className="mb-4 text-olive-900 group-hover:text-gold-500 transition-colors">
                      {item.title}
                    </Heading>
                    <Text className="text-gray-700 flex-1 mb-6">
                      {item.desc}
                    </Text>
                    <div className="flex items-center gap-2 text-gold-500 group-hover:gap-3 transition-all">
                      <span className="text-sm font-semibold">Read More</span>
                      <ChevronRight size={16} />
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center">
            <Link href="/fundings">
              <Button variant="white" size="lg">Explore All Fundings</Button>
            </Link>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ Section - AIEO Optimized */}
      <FAQSectionWithSchema
        title="Frequently Asked Questions"
        description="Get answers to the most common questions about Serve Funding and working capital financing"
        faqs={topLevelFAQs}
        background="white"
        schemaName="Business Financing Advisory"
      />

      <IntroCallForm />
    </div>
  )
}
