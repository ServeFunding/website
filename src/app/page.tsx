import { Container, Section, Heading, Text, Button, Card, FadeIn, StaggerContainer, StaggerItem } from "@/components/design-system"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section background="olive" className="py-32">
        <Container className="text-center">
          <FadeIn>
            <Heading as="h1" size="h1" color="white" className="mb-6">
              Creative Working Capital Solutions
            </Heading>
            <Text size="xl" color="white" className="max-w-3xl mx-auto opacity-90 mb-8">
              Access $250K to $100MM in flexible working capital from our network of preferred lenders. Fast funding, transparent process, zero upfront fees.
            </Text>
            <a href="https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11" target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg" className="mx-auto gap-2">
                Schedule Intro Call <ArrowRight size={20} />
              </Button>
            </a>
          </FadeIn>
        </Container>
      </Section>

      {/* Solutions Overview */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-4">Our Funding Solutions</Heading>
            <Text size="lg" className="text-gray-600 max-w-2xl mx-auto">
              We connect growing businesses with the right funding solution for their specific needs.
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Asset-Based Lending",
                desc: "Leverage your assets for working capital"
              },
              {
                title: "Invoice Factoring",
                desc: "Convert outstanding invoices into immediate cash"
              },
              {
                title: "Equipment Financing",
                desc: "Finance equipment purchases and upgrades"
              },
              {
                title: "Term Loans",
                desc: "Fixed-rate financing for capital needs"
              },
              {
                title: "Lines of Credit",
                desc: "Flexible revolving credit for ongoing needs"
              },
              {
                title: "Bridge Loans",
                desc: "Quick funding for payment gaps"
              }
            ].map((solution, index) => (
              <StaggerItem key={index}>
                <Card>
                  <Heading as="h3" size="h3" className="mb-3">{solution.title}</Heading>
                  <Text className="mb-4">{solution.desc}</Text>
                  <div className="flex items-center text-gold-500 font-semibold group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Why Serve Funding */}
      <Section background="gray">
        <Container className="max-w-4xl">
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-4">Why Choose Serve Funding</Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Funding",
                desc: "Get funded in as little as 24-48 hours"
              },
              {
                title: "No Upfront Fees",
                desc: "We're paid when you get funded"
              },
              {
                title: "Multiple Options",
                desc: "Access 10+ funding solutions in one place"
              },
              {
                title: "Expert Guidance",
                desc: "Navigate the funding process with our advisors"
              },
              {
                title: "Flexible Terms",
                desc: "Funding solutions tailored to your needs"
              },
              {
                title: "Network of Lenders",
                desc: "Access to preferred lenders nationwide"
              }
            ].map((benefit, index) => (
              <StaggerItem key={index}>
                <Card variant="flat">
                  <Heading as="h4" size="h4" className="mb-2 text-olive-900">{benefit.title}</Heading>
                  <Text size="sm">{benefit.desc}</Text>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-32">
        <Container className="max-w-4xl text-center">
          <FadeIn>
            <Heading as="h2" size="h2" className="mb-8">Ready to Get Funded?</Heading>
            <Text size="lg" className="mb-8">
              Let's discuss your funding needs and explore the best options for your business.
            </Text>
            <a href="https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11" target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg" className="mx-auto gap-2">
                Schedule Your Intro Call <ArrowRight size={20} />
              </Button>
            </a>
          </FadeIn>
        </Container>
      </Section>
    </div>
  )
}
