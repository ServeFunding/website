'use client'

import {
  Search,
  Clock,
  Shield,
  Leaf,
  ChevronLeft,
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
  StaggerItem,
  BRAND_COLORS
} from '@/components/design-system'
import { IndustriesGrid } from '@/components/IndustriesGrid'
import { IntroCallForm } from '@/components/Forms'
import { HeroAnimation } from '@/components/HeroAnimation'

export default function Home() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="!pt-0 !pb-0 md:!py-0 overflow-hidden -mt-[96px]">
        <Container>
          <HeroAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] pt-[96px]">
              <FadeIn className="px-4 sm:px-6 lg:px-8 py-12 lg:py-0 z-10">
                <Heading as="h1" size="h1" className="mb-6">
                  <span className="block">Creative Working Capital</span>
                  <span className="text-gold-500 block">Empowering Entrepreneurs</span>
                </Heading>
                <Text size="lg" className="mb-8 max-w-lg">
                  Because your company is unique, you want partners who truly understand your story and align with your objectives.
                </Text>
                <div className="flex gap-4">
                  {/* Slider Controls Placeholder - Visual only as per screenshot */}
                  <button className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-olive-900 hover:text-white transition-all duration-300">
                    <ChevronLeft size={24} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-olive-900 transition-all duration-300">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Construction workers"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay for text readability if needed, though design shows clean image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </FadeIn>
            </div>
          </HeroAnimation>
        </Container>
      </Section>

      {/* Value Props Section */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-20">
            <Heading as="h2" size="h2" color="gradient" className="mb-3">Need Business Growth Capital?</Heading>
            <Heading as="h2" size="h2" color="gradient">We Are Here to Serve You.</Heading>
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
                <Card className="flex flex-col items-center text-center h-full group transition-all duration-300 hover:-translate-y-2 bg-white value-card" style={{}}>
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
                  <Heading as="h3" size="h3" className="mb-4 text-olive-900" style={{ color: BRAND_COLORS.primary.darkGreen }}>{item.title}</Heading>
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
            <Heading as="h2" size="h1" color="gradient" className="mb-4">
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

      {/* Industries Section */}
      <Section>
        <Container>
          <FadeIn>
            <Heading as="h3" size="h2" color="gradient" className="mb-16 text-center">Industries Served</Heading>
          </FadeIn>
          <IndustriesGrid />
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="gray">
        <Container>
          <FadeIn>
            <Heading as="h3" size="h2" color="gradient" className="mb-16 text-center">Outlining Our Process</Heading>
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
              <StaggerItem key={item.step} className="flex flex-col items-center text-center group">
                <div
                  className="w-16 h-16 rounded-lg border-3 flex items-center justify-center text-2xl font-bold mb-8 transition-all duration-300"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: BRAND_COLORS.primary.darkGreen,
                    color: BRAND_COLORS.primary.darkGreen,
                  }}
                >
                  {item.step}
                </div>
                <Card
                  className="h-full flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(180deg, ${BRAND_COLORS.primary.lightGreen}80 0%, ${BRAND_COLORS.primary.darkGreen} 100%)`,
                  }}
                >
                  <div>
                    <Heading as="h4" size="h3" className="mb-6" style={{ color: BRAND_COLORS.primary.darkGreen }}>
                      {item.title}
                    </Heading>
                    <Text
                      size="lg"
                      className="font-serif"
                      style={{ color: '#ffffff' }}
                    >
                      {item.desc}
                    </Text>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Successful Client Fundings Section */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2" color="gradient">Successful Client Fundings</Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Acquisition Funding',
                desc: 'An established, Ohio-based tech services firm was looking to acquire a staffing firm specializing in their field to empower growth in the labor shortage of 2022.',
                icon: TrendingUp
              },
              {
                title: 'Payroll Save',
                desc: 'A growing, Atlanta, GA-based, niche services firm was facing an unexpected cash flow shortfall due to a large receivable their customer delayed paying.',
                icon: DollarSign
              },
              {
                title: 'Short-Term Cashflow',
                desc: 'Florida-based, $50MM transportation company sought help from their banker for an unexpected scenario',
                icon: Clock
              },
              {
                title: 'Partner Buy-Out',
                desc: 'Two specialty construction firms based in Georgia and South Carolina, respectively, came together years ago to join forces.',
                icon: Handshake
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div
                  className="flex flex-col h-full rounded-3xl p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND_COLORS.primary.darkGreen} 0%, ${BRAND_COLORS.primary.darkGreen}dd 100%)`
                  }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: BRAND_COLORS.primary.darkGreen, border: `2px solid ${BRAND_COLORS.primary.lightGreen}` }}>
                    <item.icon size={32} color={BRAND_COLORS.primary.lightGreen} />
                  </div>
                  <Heading as="h3" size="h3" className="mb-4 text-white">
                    {item.title}
                  </Heading>
                  <Text className="text-white/90 flex-1 mb-6">
                    {item.desc}
                  </Text>
                  <div className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all duration-200">
                    <span className="px-4 py-2 rounded-full" style={{ backgroundColor: BRAND_COLORS.primary.lightGreen, color: BRAND_COLORS.primary.darkGreen }}>
                      Read More
                    </span>
                    <ChevronRight size={18} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <IntroCallForm />

      {/* Network Affiliations - Logo Section */}
      <Section background="gray">
        <Container>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              {
                image: '/ACG Global Logo.png',
                alt: 'ACG Global'
              },
              {
                image: '/IFA.png',
                alt: 'IFA'
              },
              {
                image: '/Secured Finance Network.jpg',
                alt: 'Secured Finance Network'
              },
              {
                image: '/TMA.webp',
                alt: 'TMA'
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center justify-center h-32 bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-28 w-auto object-contain"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    </div>
  )
}
