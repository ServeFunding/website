'use client'

import {
  CheckCircle,
  Quote
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
  BRAND_COLORS,
  LAYOUT
} from '@/components/design-system'
import { PartnerInquiryForm } from '@/components/Forms'

const partnerTypes = [
  {
    title: 'Commercial Bankers',
    benefits: [
      'Elevate Client Trust: Provide access to specialized funding.',
      'Expand Your Network: Benefit from reciprocal client referrals.',
      'Boost Your Earnings: Receive competitive fees for referrals.',
      'Streamlined Collaboration: Transparent and efficient processes.',
      'Partner with Integrity: Join forces with a trusted financial leader.'
    ],
    description: 'As a Commercial Banker, partnering with Serve Funding empowers you to be the hero your clients need. By connecting them with our specialized financial solutions, you enhance their business strategies and growth potential. Your partnership with Serve Funding transforms you into a key facilitator of your clients\' financial triumphs, solidifying your role as their trusted commercial banker.'
  },
  {
    title: 'Fractional CFOs',
    benefits: [
      'Enhance Service Range: Offer access to specialized funding.',
      'Forge Strategic Alliances: Strengthen your professional network.',
      'Increase Earnings: Gain referral fees from successful funding.',
      'Boost Client Loyalty: Tackle complex funding needs, enhancing retention.',
      'Access Market Insights: Stay informed on the latest funding trends.'
    ],
    description: 'As a Fractional CFO, elevate your client impact by partnering with Serve Funding. Our brokerage specializes in securing bespoke funding solutions that empower you to go beyond conventional financial management. With our expertise in complex financing, you can enhance your advisory role, becoming an indispensable asset in your clients\' growth.'
  },
  {
    title: 'Investment Bankers',
    benefits: [
      'Broaden Financial Solutions: Access specialized capital and lending options.',
      'Enhance Deal Flow: Connect with mid-market companies for new opportunities.',
      'Diversify Revenue: Earn referral fees without impacting core services.',
      'Strengthen Client Bonds: Address funding challenges, improving retention.',
      'Acquire Market Insights: Deepen your knowledge of operational finance needs.'
    ],
    description: 'As an Investment Banker, your goal is to enhance client value beyond traditional deal-making. Partnering with Serve Funding opens up strategic avenues in corporate finance. Your comprehensive understanding of complex funding scenarios ensures tailored solutions that bolster your clients\' operational strategies.'
  },
  {
    title: 'CPAs / Accountants',
    benefits: [
      'Expand Financial Solutions: Access specialized funding beyond conventional options.',
      'Generate Additional Revenue: Earn referral fees from successful placements.',
      'Enhance Client Loyalty: Address complex funding needs, bolstering retention.',
      'Professional Growth: Learn advanced funding strategies to enhance your expertise.',
      'Gain Competitive Advantage: Offer unique financial solutions, attracting premium clients.'
    ],
    description: 'As an accountant, your role extends beyond number crunching to being a trusted advisor in your clients\' financial narratives. Partnering with Serve Funding can significantly expand your advisory capabilities. Through your partnership, you evolve from a traditional accountant to a holistic financial advisor.'
  },
  {
    title: 'Private Equity Firms',
    benefits: [
      'Optimize Portfolio Performance: Access specialized capital options for growth.',
      'Discover Investment Opportunities: Identify potential investments early.',
      'Accelerate Value Creation: Address liquidity challenges efficiently.',
      'Mitigate Financial Risks: Diversify funding sources to enhance stability.',
      'Enhance Due Diligence: Gain insights into financing trends and strategies.'
    ],
    description: 'As a private equity firm, your goal is to enhance value and discover new investment opportunities. Partnering with Serve Funding offers a competitive edge by providing specialized funding solutions for your portfolio companies. Your competitive edge in deal sourcing and value creation drives superior investor returns.'
  },
  {
    title: 'Business Advisors',
    benefits: [
      'Provide Tailored Financial Options: Enhance your ability to meet clients\' strategic and operational needs.',
      'Strengthen Your Credibility: Broaden your expertise with bespoke funding solutions.',
      'Generate Additional Revenue: Earn referral fees, complementing your advisory income.',
      'Deepen Client Engagement: Address complex funding needs, securing client loyalty.',
      'Access Advanced Insights: Stay updated on funding trends to advise effectively.'
    ],
    description: 'As a Business Advisor, enriching your advisory toolkit with Serve Funding\'s resources can transform your client relationships. Our trusted brokerage facilitates access to specialized funding solutions, allowing you to extend beyond strategic advice to operational financial support.'
  }
]

const commitments = [
  {
    title: 'Clear And Efficient Processes',
    desc: 'We guide your clients through a streamlined process of obtaining alternative working capital, eliminating wasted time and frustration.'
  },
  {
    title: 'Transparent Communication',
    desc: 'We keep you in the loop so you can continue to serve your clients by sending updates at key checkpoints to keep you informed of progress.'
  },
  {
    title: 'Personalized Support',
    desc: 'We believe in trust-based, collaborative partnerships over impersonal interactions.'
  },
  {
    title: 'Proven Results',
    desc: 'We take a servant leadership approach with all our clients, lenders and partners to ensure win-win outcomes.'
  }
]

const testimonials = [
  {
    text: 'I know I can count on the Serve Funding team to respond quickly, seek to understand my client\'s needs and really follow through. I am confident when I refer my clients to them that they are in great hands and it reflects well on me.',
    author: 'Commercial Banker'
  },
  {
    text: 'My client was in a difficult spot needing some quick funding but was concerned she would be taken advantage of. We knew by sending her to Serve Funding they would look out for her best interest and sure enough they did. She was relieved and called to thank me for the introduction!',
    author: 'Fractional CFO'
  },
  {
    text: 'A long-time client with a growing business needed capital and initially believed he knew the best solution. However, after consulting with Serve, he was pleasantly surprised by their openness to exploring various options. Ultimately, the solution came in an unexpected form, and it proved to be a better outcome for him in the long run',
    author: 'Business Advisor'
  }
]

export default function Partners() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: BRAND_COLORS.primary.darkGreen }}>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[400px] py-20 text-center">
            <FadeIn className="text-white max-w-3xl">
              <Heading as="h1" size="h1" color="white" className="mb-6">
                Our Trusted Advisor Partners
              </Heading>
              <Text size="lg" className="text-white/90">
                Why Partner with Us?
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Partnership Overview */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-16">
              <Text size="lg" className="text-gray-700 mb-4">
                We value our trusted network. Partnering with Serve Funding means you're working with a committed team that understands the importance of your reputation with every referral.
              </Text>
            </FadeIn>

            <FadeIn>
              <Heading as="h3" size="h3" className="mb-8 text-olive-900">
                Our Trusted Network
              </Heading>
              <ul className="space-y-3 mb-12">
                {['Commercial Bankers', 'Fractional CFOs', 'Investment Bankers', 'Accountants', 'Private Equity', 'Business Advisors'].map((type, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0" />
                    <span className="font-semibold">{type}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <Card className="bg-gold-50 border-2 border-gold-500 p-8">
                <Heading as="h3" size="h3" className="mb-4 text-olive-900">
                  The Importance of Trust: Your Reputation Matters
                </Heading>
                <Text className="text-gray-700">
                  We get it—when a banker declines credit and wants to refer a client to an alternative funding solution, they need assurance that their client is in trusted hands. By referring your clients and prospects to Serve Funding, you're introducing them to a trusted advisor who prioritizes their best interests.
                </Text>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Our Commitment */}
      <Section background="gray">
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-6 text-olive-900">
              Our Commitment to You
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {commitments.map((commitment, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full group hover:bg-[#D3CE75] transition-all duration-300 hover:-translate-y-2">
                  <Heading as="h3" size="h4" className="mb-3 text-olive-900 group-hover:text-olive-900 transition-colors">
                    {commitment.title}
                  </Heading>
                  <Text className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {commitment.desc}
                  </Text>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Partner Types */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2" className="text-olive-900">
              Partnership Opportunities
            </Heading>
          </FadeIn>

          <StaggerContainer className="space-y-24">
            {partnerTypes.map((partner, idx) => {
              // Create ID from partner title
              const partnerId = partner.title.toLowerCase().replace(/[\s/&]/g, '-')
              return (
                <StaggerItem key={idx} className="scroll-mt-24">
                  <div id={partnerId} style={{ scrollMarginTop: LAYOUT.scrollMarginTop }} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-cols-2 lg:direction-rtl' : ''}`}>
                    {/* Text Content */}
                    <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                      <Heading as="h3" size="h2" className="mb-6">
                        <span className="text-olive-900">{partner.title.split(' ').slice(0, -1).join(' ')}</span>
                        {partner.title.split(' ').length > 1 && <span className="text-gold-500"> {partner.title.split(' ').slice(-1)[0]}</span>}
                      </Heading>

                      <Text className="text-gray-700 mb-6 leading-relaxed text-lg">
                        {partner.description}
                      </Text>

                      <div className="space-y-3">
                        {partner.benefits.map((benefit, bidx) => (
                          <div key={bidx} className="flex items-start gap-3">
                            <div className="p-1 bg-gold-500/20 rounded-full mt-1">
                              <CheckCircle size={16} className="text-olive-900 flex-shrink-0" fill="currentColor" />
                            </div>
                            <Text className="text-gray-700">{benefit}</Text>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image Content */}
                    <div className={`relative h-96 bg-gradient-to-br from-olive-800 to-olive-700 rounded-3xl overflow-hidden group ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <img
                        src={`https://images.unsplash.com/photo-${
                          idx === 0
                            ? '1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                            : idx === 1
                            ? '1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                            : idx === 2
                            ? '1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                            : idx === 3
                            ? '1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                            : idx === 4
                            ? '1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                            : '1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                        }`}
                        alt={partner.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 to-transparent"></div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="gray">
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2" className="text-olive-900">
              Feedback From Our Partners
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <StaggerItem key={idx}>
                <Card className="relative p-8 h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <Quote className="text-gold-500 mb-4" size={32} />
                  <Text className="text-gray-700 mb-6 italic leading-relaxed flex-1">
                    "{testimonial.text}"
                  </Text>
                  <Text className="text-olive-900 font-semibold">
                    — {testimonial.author}
                  </Text>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <PartnerInquiryForm />
    </div>
  )
}
