import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  FadeIn,
  StaggerContainer,
  SocialIcons,
} from '@/components/ui'
import { CTA } from '@/components/cta'
import { LogoGrid } from '@/components/LogoGrid'
import { Breadcrumb } from '@/components/breadcrumb'
import { COLORS } from '@/lib/colors'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Serve Funding | Our Story, Values & Mission",
  description: "Learn about Serve Funding's mission, core values rooted in TRUST, and commitment to supporting growing businesses and communities.",
  openGraph: {
    title: "About Serve Funding | Our Story, Values & Mission",
    description: "Learn about Serve Funding's mission, core values rooted in TRUST, and commitment to supporting growing businesses and communities.",
    url: "https://servefunding.com/about-us",
  },
}

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
      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Founder's Story Section */}
      <Section>
        <Container>
          <FadeIn>
            <Heading size="h2" className="text-center">
              Entrepreneurship Runs In Our Blood.
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="max-w-2xl">
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
            <Heading size="h2" className="mb-3">Our Core Values are Rooted in Trust</Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} color='background' className="text-center h-full flex flex-col items-center justify-start pt-8 group hover:bg-[#D3CE75] transition-all duration-300 hover:-translate-y-2">
                <span className="font-serif font-bold text-5xl mb-6 block" style={{ color: COLORS.primary }}>
                  {value.title.charAt(0)}
                </span>
                <Heading size="h4" className="mb-3 text-olive-900 group-hover:text-olive-900 transition-colors">
                  {value.title}
                </Heading>
                <Text className="text-gray-600 group-hover:text-gray-700 transition-colors text-sm">
                  {value.desc}
                </Text>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Philosophy Section */}
      <Section background="white" style={{ backgroundColor: COLORS.primary }}>
        <Container>
          <FadeIn>
            <Card className="max-w-5xl mx-auto mt-28">
              {/* Full Width Heading */}
              <Heading size="h2" className='!mt-0'>
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

                  <Text size="lg" className="font-bold">
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
                  <SocialIcons />
                </div>
              </div>
            </Card>
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
                { src: "/about/Hope Worldwide.webp", alt: "Hope for the Homeless" },
                { src: "/about/Frontline.webp", alt: "Frontline Response" },
                { src: "/about/Jamquest.webp", alt: "JAM Quest" }
              ]}
              maxHeight={32}
            />
          </FadeIn>
        </Container>
      </Section>

      {/* Contact Section */}
      <CTA
        title="Ready to Get Started?"
        text="Learn more about our funding solutions and how we can help your business grow. Schedule a consultation with one of our funding experts today."
        buttonText="Let's Talk!"
        source="about-us"
        useBG
      />
    </div>
  )
}
