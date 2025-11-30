'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
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
  Card,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/ui'
import { COLORS as BRAND_COLORS } from '@/lib/colors'
import { IndustriesGrid } from '@/components/IndustriesGrid'
import { HeroAnimation } from '@/components/HeroAnimation'
import { LogoGrid } from '@/components/LogoGrid'

// Lazy load IntroCallForm since it's below the fold
const IntroCallForm = dynamic(() => import('@/components/Forms').then(mod => ({ default: mod.IntroCallForm })), {
  loading: () => <div className="h-[600px]" />, // Placeholder while loading
  ssr: false
})

export default function Home() {
  const heroSlides = [
    {
      heading: "The Right Funding Solutions for Healthy Business Growth",
      desc: "An advisory service committed to serve the best interests of your company's current needs and future goals.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      heading: "You Value Relationships Over Bots & Quick Fixes",
      desc: "We partner with like-minded business leaders who want trusted advisors in their corner to ensure they make the best decisions.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      heading: "Creative Working Capital Empowering Entrepreneurs",
      desc: "Because your company is unique, you want partners who truly understand your story and align with your objectives.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  const [heroIndex, setHeroIndex] = React.useState(0)
  const [isUserInteracting, setIsUserInteracting] = React.useState(false)

  React.useEffect(() => {
    if (isUserInteracting) return

    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [isUserInteracting])

  const handlePrev = () => {
    setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsUserInteracting(true)
    setTimeout(() => setIsUserInteracting(false), 8000)
  }

  const handleNext = () => {
    setHeroIndex((prev) => (prev + 1) % heroSlides.length)
    setIsUserInteracting(true)
    setTimeout(() => setIsUserInteracting(false), 8000)
  }

  const slide = heroSlides[heroIndex]

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="!pt-0 !pb-0 md:!py-0 overflow-hidden -mt-[96px] h-screen">
        <HeroAnimation>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center h-full pt-[96px] px-4 sm:px-6 lg:px-8 lg:justify-start">
            {/* Text Column */}
            <div className="z-10 flex-1">
              <Heading key={heroIndex} size="h2" className="mb-4 animate-fadeIn">
                {slide.heading}
              </Heading>
              <Text size="lg" className="mb-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                {slide.desc}
              </Text>
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-olive-900 hover:text-white transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-olive-900 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative w-full lg:flex-1 h-80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 lg:hover:shadow-[0_20px_60px_rgba(117,141,91,0.3)] lg:hover:-translate-y-2"
              style={{
                background: `linear-gradient(135deg, ${BRAND_COLORS.primary.darkGreen}10, ${BRAND_COLORS.primary.lightGreen}10)`,
                boxShadow: `0 25px 50px rgba(117,141,91,0.25), 0 0 1px rgba(117,141,91,0.1)`
              }}>
              <Image
                key={heroIndex}
                src={slide.image}
                alt={slide.heading}
                fill
                className="object-cover transition-all duration-700 lg:hover:scale-105"
                style={{
                  animation: 'fadeInSlide 0.4s ease-out forwards'
                }}
                priority={heroIndex === 0}
                loading={heroIndex === 0 ? 'eager' : 'lazy'}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 500px, 600px"
                quality={75}
                fetchPriority={heroIndex === 0 ? 'high' : 'auto'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </HeroAnimation>
      </Section>

      {/* Value Props Section */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-20">
            <Heading size="h2" className="mb-3">Need Business Growth Capital?</Heading>
            <Heading size="h2">We Are Here to Serve You.</Heading>
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

      {/* Industries Section */}
      <Section>
        <Container>
          <FadeIn>
            <Heading size="h3" color="gradient" className="mb-16 text-center">Industries Served</Heading>
          </FadeIn>
          <IndustriesGrid />
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="gray">
        <Container>
          <FadeIn>
            <Heading size="h3" color="gradient" className="mb-16 text-center">Outlining Our Process</Heading>
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
                    <Heading size="h4" className="mb-6" style={{ color: BRAND_COLORS.primary.darkGreen }}>
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
            <Heading size="h2">Successful Client Fundings</Heading>
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
                  <Heading size="h3" className="mb-4 text-white">
                    {item.title}
                  </Heading>
                  <Text className="text-white/90 flex-1 mb-6">
                    {item.desc}
                  </Text>
                  <div className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all duration-200">
                    <span className="px-4 py-2 rounded-full bg-white text-olive-900">
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
          <FadeIn>
            <LogoGrid
              logos={[
                { src: '/ACG Global Logo.png', alt: 'ACG Global', width: 280, height: 120 },
                { src: '/IFA.png', alt: 'IFA', width: 200, height: 100 },
                { src: '/Secured Finance Network.jpg', alt: 'Secured Finance Network', width: 320, height: 100 },
                { src: '/TMA.webp', alt: 'TMA', width: 240, height: 100 }
              ]}
              maxHeight={24}
            />
          </FadeIn>
        </Container>
      </Section>
    </div>
  )
}
