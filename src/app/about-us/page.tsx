import {
  Handshake
} from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  FadeIn,
  HeroFadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/design-system'
import { IntroCallForm } from '@/components/Forms'
import { COLORS } from '@/lib/colors'

const coreValues = [
  {
    title: 'Transparency',
    desc: 'We communicate honestly to build a long-term relationship.'
  },
  {
    title: 'Responsibility',
    desc: 'We take responsibility to stay accountable to you always.'
  },
  {
    title: 'Understanding',
    desc: 'We seek to understand you to meet and exceed your goals.'
  },
  {
    title: 'Service',
    desc: 'We are here to always serve you and your best interests.'
  },
  {
    title: 'Thankfulness',
    desc: 'We practice authentic gratitude for the opportunity to serve.'
  }
]

export default function AboutUs() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <HeroFadeIn
        title="Working Capital Advisory"
        subtitle="Serve Funding is a boutique working capital advisory firm providing creative financing solutions from $250K to $100MM for mid-market businesses. Founded in 2021, we specialize in asset-based lending, invoice factoring, equipment leasing, and specialized funding for growing companies seeking fast, flexible capital."
      />

      {/* Founder's Story Section */}
      <Section id="our-story">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <Heading as="h2" size="h2" className="mb-8">
                Our Story
              </Heading>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <Text>
                  At Serve Funding, we believe entrepreneurs embody the courage to pursue greater visions. Our company was founded on these values, inspired by my family's own journey as immigrants and entrepreneurs.
                </Text>

                <Text>
                  On April 6, 1981, my family arrived in the U.S. with just five suitcases and $300, having spent two years awaiting permission to leave the Soviet Union. My parents' pursuit of a better life reflected the same risk-taking and vision seen in successful entrepreneurs today.
                </Text>

                <Text>
                  In 1989, my father founded Conextions, Inc., leaving behind a stable job to pursue an opportunity with Steve Jobs' NeXT. His entrepreneurial spirit paid off, and by 1999, his company had thrived and was acquired.
                </Text>

                <Text>
                  In 2021, I launched Serve Funding on the 40th anniversary of our family's arrival in America. After 18 years of guiding small and mid-sized companies, I saw a common issue—entrepreneurs often struggle with inefficient funding processes, losing time they could use to grow their businesses. That's why I created Serve Funding.
                </Text>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Commitment Section */}
      <Section background="gray">
        <Container>
          <FadeIn className="max-w-3xl mx-auto text-center">
            <Heading as="h2" size="h2" className="mb-8">
              Our Commitment to Entrepreneurs
            </Heading>
            
            <Text size="lg" className="text-gray-700 leading-relaxed mb-8">
              We are committed to saving you time and prioritizing your growth. By leveraging our strong network of lender partners, we will find you the right funding solutions tailored to your business needs, allowing you to focus on building and growing your company.
            </Text>

            <Text size="lg" className="text-olive-900 font-semibold italic">
              We are here to serve you, the visionary entrepreneur, even as we are living out our dream by serving you!
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* Core Values Section */}
      <Section id="core-values">
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-3">Our Core Values</Heading>
            <Text className="text-gold-500 font-semibold text-lg">Rooted in TRUST</Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <StaggerItem key={index}>
                <Card className="text-center h-full flex flex-col items-center justify-start pt-8 group hover:bg-[#D3CE75] transition-all duration-300 hover:-translate-y-2">
                  <span className="font-serif font-bold text-5xl mb-6 block" style={{ color: COLORS.primary.darkGreen }}>
                    {value.title.charAt(0)}
                  </span>
                  <Heading as="h3" size="h4" className="mb-3 text-olive-900 group-hover:text-olive-900 transition-colors">
                    {value.title}
                  </Heading>
                  <Text className="text-gray-600 group-hover:text-gray-700 transition-colors text-sm">
                    {value.desc}
                  </Text>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Philosophy Section */}
      <Section background="gray">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-2xl p-12 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Handshake size={40} className="text-gold-500" />
                  <Heading as="h3" size="h2">
                    Relationships {'>'}  Bots
                  </Heading>
                </div>

                <div className="space-y-6">
                  <Text className="text-gray-700 text-lg">
                    Serve Funding provides working capital advisory for business leaders who operate through trust-based and collaborative partnerships.
                  </Text>

                  <Text className="text-gray-700">
                    We take a servant leadership approach with all our clients, lenders and partners to ensure win-win outcomes. We are #HeretoServe.
                  </Text>

                  <Text className="text-gray-700">
                    We aim to partner with like-minded people, engaging in long-term, trusted relationships.
                  </Text>

                  <Text className="text-olive-900 font-semibold italic text-lg">
                    AND THAT's our WHY.
                  </Text>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Community Section */}
      <Section id="doing-good">
        <Container>
          <FadeIn className="text-center">
            <Heading as="h2" size="h2" className="mb-8">
              Doing Good: Supporting Our Community
            </Heading>
            
            <div className="max-w-2xl mx-auto mb-12">
              <Text size="lg" className="text-gray-700 mb-8">
                At Serve Funding, we give a percentage of our earnings to support exemplary non-profits. Doing good for those in need is a core part of our mission.
              </Text>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 py-8">
              <div className="h-24 flex items-center px-4">
                <img src="/About Us Serve Funding.png" alt="Hope for the Homeless" className="h-full object-contain" />
              </div>
              <div className="h-24 flex items-center px-4">
                <img src="/About Us Serve Funding (1).png" alt="Frontline Response" className="h-full object-contain" />
              </div>
              <div className="h-24 flex items-center px-4">
                <img src="/About Us Serve Funding (2).png" alt="JAM Quest" className="h-full object-contain" />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Contact Section */}
      <IntroCallForm />
    </div>
  )
}
