import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  SocialIcon,
} from '@/components/ui'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { CTA } from '@/components/cta'
import { LogoGrid } from '@/components/LogoGrid'
import { COLORS } from '@/lib/colors'
import { Linkedin, Facebook } from 'lucide-react'

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
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="max-w-2xl">
                <Heading size="h2" className="mb-8">
                  Entrepreneurship Runs In Our Blood.
                </Heading>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <Text>
                    At <span className="font-bold">Serve Funding</span>, we believe entrepreneurs embody the courage to pursue greater visions. Our company was founded on these values, inspired by my family's own journey as immigrants and entrepreneurs.
                  </Text>

                  <Text>
                    On <span className="font-bold">April 6, 1981</span>, my family arrived in the U.S. with just five suitcases and $300, having spent two years awaiting permission to leave the Soviet Union. My parents' pursuit of a better life reflected the same risk-taking and vision seen in successful entrepreneurs today.
                  </Text>

                  <Text>
                    In <span className="font-bold">1989</span>, my father founded Conextions, Inc., leaving behind a stable job to pursue an opportunity with <span className="font-bold">Steve Jobs' NeXT</span>. His entrepreneurial spirit paid off, and by 1999, his company had thrived and was acquired.
                  </Text>

                  <Text>
                    In <span className="font-bold">2021</span>, I launched Serve Funding on the 40th anniversary of our family's arrival in America. After 18 years of guiding small and mid-sized companies, I saw a common issue—<span className="font-bold">entrepreneurs often struggle with inefficient funding processes</span>, losing time they could use to grow their businesses. That's why I created Serve Funding.
                  </Text>
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <img
                  src="/runs in our blood.webp"
                  alt="Entrepreneurship runs in our blood"
                  className="rounded-xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Founder Expertise & Authority Section */}
      <Section background="white">
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-16">
              <Heading size="h2" className="mb-8 text-center">
                Michael Kodinsky: The Founder Behind Serve Funding
              </Heading>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center p-8 bg-gray-50">
                  <Heading size="h3" className="text-gold-600 mb-2">15+</Heading>
                  <Text className="text-gray-700 font-semibold">Years of Banking & Lending Experience</Text>
                </Card>
                <Card className="text-center p-8 bg-gray-50">
                  <Heading size="h3" className="text-gold-600 mb-2">$150MM+</Heading>
                  <Text className="text-gray-700 font-semibold">Capital Facilitated for 200+ Businesses</Text>
                </Card>
                <Card className="text-center p-8 bg-gray-50">
                  <Heading size="h3" className="text-gold-600 mb-2">2021</Heading>
                  <Text className="text-gray-700 font-semibold">Founded Serve Funding on 40th Immigration Anniversary</Text>
                </Card>
              </div>

              <div className="space-y-4 text-gray-700">
                <Text className="leading-relaxed">
                  <span className="font-semibold">Background:</span> Michael brings over 15 years of hands-on experience in commercial banking and alternative finance. His deep expertise spans asset-based lending, international trade finance, cash flow analysis, and complex restructuring. Before founding Serve Funding, Michael spent years advising 200+ growing businesses on financing strategies.
                </Text>
                <Text className="leading-relaxed">
                  <span className="font-semibold">Why He Founded Serve Funding:</span> In 2021, Michael witnessed a systemic problem: profitable, growing businesses were being rejected by banks for arbitrary reasons—a single bad quarter, concentrated customer base, or low credit scores despite positive cash flow. These companies needed capital immediately, not in 60 days. Serve Funding exists to bridge that gap with speed, transparency, and genuine partnership.
                </Text>
              </div>
            </div>
          </FadeIn>

          {/* Comparison Table: Serve Funding vs Others */}
          <FadeIn delay={0.1}>
            <div className="mb-16">
              <Heading size="h2" className="mb-8 text-center">
                Why Choose <span className="text-gold-500">Serve Funding?</span>
              </Heading>

              <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Factor</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Serve Funding</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Traditional Banks</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Online Lenders</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Speed</td>
                      <td className="px-6 py-4 text-gold-600 font-semibold">10-20 days</td>
                      <td className="px-6 py-4 text-gray-700">30-60 days</td>
                      <td className="px-6 py-4 text-gray-700">7-14 days (automated)</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Flexibility</td>
                      <td className="px-6 py-4 text-gold-600 font-semibold">Fully Custom</td>
                      <td className="px-6 py-4 text-gray-700">One-size-fits-all</td>
                      <td className="px-6 py-4 text-gray-700">Limited pre-set products</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Transparency</td>
                      <td className="px-6 py-4 text-gold-600 font-semibold">All costs upfront</td>
                      <td className="px-6 py-4 text-gray-700">Hidden fees</td>
                      <td className="px-6 py-4 text-gray-700">Variable, contract-dependent</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Personal Attention</td>
                      <td className="px-6 py-4 text-gold-600 font-semibold">Direct founder involvement</td>
                      <td className="px-6 py-4 text-gray-700">Committee review</td>
                      <td className="px-6 py-4 text-gray-700">Algorithm-based decisions</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Founder Expertise</td>
                      <td className="px-6 py-4 text-gold-600 font-semibold">15+ years, $150MM+ facilitated</td>
                      <td className="px-6 py-4 text-gray-700">Varies by institution</td>
                      <td className="px-6 py-4 text-gray-700">Tech-driven, less traditional banking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Commitment Section */}
      <Section background="gray">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src="/commitment to entreprenuers.webp"
                  alt="Our commitment to entrepreneurs"
                  className="rounded-xl shadow-lg w-full max-w-md object-cover"
                />
              </div>

              {/* Right: Text */}
              <div className="text-center md:text-left order-1 md:order-2">
                <Heading size="h2" className="mb-8">
                  Our Commitment to Entrepreneurs
                </Heading>

                <Text size="lg" className="text-gray-700 leading-relaxed mb-8">
                  We are committed to saving you time and prioritizing your growth. By leveraging our strong network of lender partners, we will find you the right funding solutions tailored to your business needs, allowing you to focus on building and growing your company.
                </Text>

                <Text size="lg" className="text-olive-900 font-semibold italic">
                  We are here to serve you, the visionary entrepreneur, even as we are living out our dream by serving you!
                </Text>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Core Values Section */}
      <Section id="core-values">
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading size="h2" className="mb-3">Our Core Values</Heading>
            <Text className="text-gold-500 font-semibold text-lg">Rooted in TRUST</Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <StaggerItem key={index}>
                <Card className="text-center h-full flex flex-col items-center justify-start pt-8 group hover:bg-[#D3CE75] transition-all duration-300 hover:-translate-y-2">
                  <span className="font-serif font-bold text-5xl mb-6 block" style={{ color: COLORS.primary.darkGreen }}>
                    {value.title.charAt(0)}
                  </span>
                  <Heading size="h4" className="mb-3 text-olive-900 group-hover:text-olive-900 transition-colors">
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
      <Section background="white" style={{ backgroundColor: COLORS.primary.darkGreen }}>
        <Container>
          <FadeIn>
            <div className="max-w-5xl mx-auto rounded-3xl p-12 bg-white">
              {/* Full Width Heading */}
              <Heading size="h2" className="text-olive-900 mb-12">
                We Believe Relationships {'>'} Bots
              </Heading>

              {/* Two Column Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left: Philosophy Text */}
                <div className="space-y-6">
                  <Text>
                    Serve Funding provides working capital advisory for business leaders who operate through trust-based and collaborative partnerships.
                  </Text>

                  <Text>
                    We take a servant leadership approach with all our clients, lenders and partners to ensure win-win outcomes. We are #HeretoServe.
                  </Text>

                  <Text>
                    We aim to partner with like-minded people, engaging in long-term, trusted relationships.
                  </Text>

                  <Text size="lg" weight="bold">
                    AND THAT's our WHY.
                  </Text>
                </div>

                {/* Right: Headshot with Social Icons */}
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-8">
                    <img
                      src="/Michael Headshot.webp"
                      alt="Michael Kodinsky, Founder of Serve Funding"
                      className="rounded-full shadow-lg w-64 h-64 object-cover"
                    />
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex gap-4">
                    <SocialIcon
                      href="https://www.linkedin.com/in/michael-kodinsky-61258313/"
                      icon={Linkedin}
                      label="LinkedIn"
                    />
                    <SocialIcon
                      href="https://web.facebook.com/ServeFunding/?_rdc=1&_rdr"
                      icon={Facebook}
                      label="Facebook"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Community Section */}
      <Section id="doing-good">
        <Container>
          <FadeIn className="text-center">
            <LogoGrid
              title="Doing Good: Supporting Our Community"
              subtitle="At Serve Funding, we give a percentage of our earnings to support exemplary non-profits. Doing good for those in need is a core part of our mission."
              logos={[
                { src: "/About Us Serve Funding.png", alt: "Hope for the Homeless" },
                { src: "/About Us Serve Funding (1).png", alt: "Frontline Response" },
                { src: "/About Us Serve Funding (2).png", alt: "JAM Quest" }
              ]}
              maxHeight={16}
            />
          </FadeIn>
        </Container>
      </Section>

      {/* Contact Section */}
      <CTA
        title="Ready to Get Started?"
        text="Learn more about our funding solutions and how we can help your business grow. Schedule a consultation with one of our funding experts today."
        buttonText="Schedule Your Consultation"
        source="about-us"
      />
    </div>
  )
}
