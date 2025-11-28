import Image from 'next/image'
import {
  Check,
  CheckCircle,
  Quote
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
import { HeroFadeIn } from '@/components/hero-fade-in'
import { PartnerInquiryForm } from '@/components/Forms'
import { COLORS } from '@/lib/colors'

interface PartnerType {
  title: string
  image: string
  benefits: string[]
  description: string
}

const partnerTypes: PartnerType[] = [
  {
    title: 'Commercial Bankers',
    image: '/partners/Professioanls talking.png',
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
    image: '/partners/Professional giving presentation.png',
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
    image: '/partners/Business Professionals looking at camera.png',
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
    image: '/partners/Handshake.png',
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
    image: '/partners/Equity close up.png',
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
    image: '/partners/Professional giving presentation.png',
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
      <HeroFadeIn
        title="Our Trusted Advisor Partners"
        subtitle="Partner with Serve Funding as a commercial banker, fractional CFO, investment banker, CPA, or business advisor. Access 10+ funding solutions from $250K-$100MM. Earn referral fees, expand client services, strengthen relationships, and tap into a network of specialized lenders for mid-market businesses."
      />

      {/* The Problem We Solve */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Referral Challenge
              </Heading>
              <Text size="lg" className="text-gray-700 mb-8">
                We know the reality: when you refer a client to an alternative lender, you often don't see a second win. Time gets wasted. Relationships get strained.
              </Text>
            </FadeIn>

            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <Card className="bg-white border-l-4 border-gold-500 p-8">
                  <Heading size="h3" className="text-olive-900 mb-3">Time Wasted, Credibility Lost</Heading>
                  <Text className="text-gray-700 leading-relaxed">
                    You refer a prospect or client to an alternative lender. They go down the road. Two to four weeks of underwriting pass. Then the lender hits a wall—maybe it's a customer contract clause that makes the deal impossible, maybe it's collateral issues, maybe the leverage doesn't work. The business owner gets turned down. Again. Meanwhile, weeks have passed, their opportunity window is closing, and your credibility takes a hit for the referral that didn't work out.
                  </Text>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="bg-white border-l-4 border-gold-500 p-8">
                  <Heading size="h3" className="text-olive-900 mb-3">If There's a Way, We'll Find It</Heading>
                  <Text className="text-gray-700 leading-relaxed">
                    Here's our commitment: if there's a way to get it done, we will find a way. We're not locked into one product or one box. We can layer solutions. We can look at multiple lenders at once. We can use real estate, equipment, personal assets, cash flow—whatever combination works. The only time we can't help is if expectations are just unrealistic. But as long as there's something viable to build on, we'll sweep the corners of the known credit universe to find it. That's how we protect your reputation.
                  </Text>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="bg-white border-l-4 border-gold-500 p-8">
                  <Heading size="h3" className="text-olive-900 mb-3">You Look Like the Hero</Heading>
                  <Text className="text-gray-700 leading-relaxed">
                    When we come through for your prospect, they remember that you went out of your way. They see you as the banker who didn't give up, who found a solution. They often come back to you as a stronger, more loyal client. When we solve for your existing clients, you protect that relationship by being the one who delivered. Either way—you've deepened trust, enhanced your reputation, and positioned yourself as the banker your clients can count on.
                  </Text>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </Container>
      </Section>

      {/* Partnership Overview */}
      <Section background='gray'>
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <Heading size="h2" className="mb-6 text-olive-900">
              Why Partner With Us
            </Heading>
            <Text size="lg" className="text-gray-700 mb-4">
              We value our trusted network. Partnering with Serve Funding means you're working with a committed team that understands the importance of your reputation with every referral.
            </Text>
            <Heading size="h3" className="mb-6 mt-12 text-center text-olive-900">
              Our Trusted Network
            </Heading>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Commercial Bankers', 'Fractional CFOs', 'Investment Bankers', 'Accountants', 'Private Equity', 'Business Advisors'].map((type, idx) => (
                <div key={idx} className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 rounded-full px-4 py-2">
                  <CheckCircle size={16} className="text-gold-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{type}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className='max-w-5xl mx-auto'>
            <Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left: Text Content */}
                <div>
                  <Heading size="h3" className="mb-4 text-olive-900">
                    The Importance of Trust: Your Reputation Matters
                  </Heading>
                  <Text className="text-gray-700">
                    We get it—when a banker declines credit and wants to refer a client to an alternative funding solution, they need assurance that their client is in trusted hands. By referring your clients and prospects to Serve Funding, you're introducing them to a trusted advisor who prioritizes their best interests.
                  </Text>
                </div>

                {/* Right: Trust Image */}
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/partners/Trust.png"
                    alt="Trust"
                    width={1024}
                    height={889}
                    className="w-full h-full object-cover rounded-2xl"
                    priority={false}
                  />
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Our Commitment */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading size="h2" className="mb-6 text-olive-900">
              Our Commitment to You
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {commitments.map((commitment, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full group hover:bg-[#D3CE75] transition-all duration-300 hover:-translate-y-2">
                  <Heading size="h3" className="mb-3 text-olive-900 group-hover:text-olive-900 transition-colors">
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


      {/* Testimonials */}
      <Section background="gray">
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading size="h2" className="text-olive-900">
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

      {/* Partner Types */}
      <>
        {partnerTypes.map((partner, idx) => {
              // Create ID from partner title
              const partnerId = partner.title.toLowerCase().replace(/[\s/&]/g, '-')
              return (
                <Section key={idx} id={partnerId}>
                  <Container>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-cols-2 lg:direction-rtl' : ''}`}>
                    {/* Text Content */}
                    <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                      <Heading size="h3" className="mb-6">
                        <span className="text-olive-900">{partner.title.split(' ').slice(0, -1).join(' ')}</span>
                        {partner.title.split(' ').length > 1 && <span className="text-gold-500"> {partner.title.split(' ').slice(-1)[0]}</span>}
                      </Heading>

                      <Text className="text-gray-700 mb-6 leading-relaxed text-lg">
                        {partner.description}
                      </Text>

                      <div className="space-y-3">
                        {partner.benefits.map((benefit, bidx) => (
                          <div key={bidx} className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.primary.darkGreen }} />
                            <Text className="text-gray-700">{benefit}</Text>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image Content */}
                    <div className={`relative h-96 bg-gradient-to-br from-olive-800 to-olive-700 rounded-3xl overflow-hidden group ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <img
                        src={partner.image}
                        alt={partner.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 to-transparent"></div>
                    </div>
                  </div>
                  </Container>
                </Section>
              )
            })}
      </>

      <PartnerInquiryForm />
    </div>
  )
}
