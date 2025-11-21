import { DollarSign, ArrowRight } from "lucide-react"
import { Container, Section, Heading, Text, Button, Card, FadeIn, StaggerContainer, StaggerItem } from "@/components/design-system"

export default function Fundings() {
  const successStories = [
    {
      amount: "$2MM",
      title: "Short-Term Cashflow",
      desc: "Transportation Company, FL",
      details: "Fast funding for unexpected cash flow gap while awaiting large customer payment"
    },
    {
      amount: "$1.5MM",
      title: "Asset-Based Line",
      desc: "Manufacturing Firm, TX",
      details: "Revolving credit for equipment and working capital expansion"
    },
    {
      amount: "$750K",
      title: "Invoice Factoring",
      desc: "Staffing Agency, CA",
      details: "Improved cash flow by financing outstanding invoices"
    },
    {
      amount: "$5MM",
      title: "Term Loan",
      desc: "Equipment Expansion, NY",
      details: "Financing for capital equipment purchase and facility upgrade"
    },
    {
      amount: "$300K",
      title: "Bridge Loan",
      desc: "Construction Project, GA",
      details: "Quick funding to bridge payment gaps on active construction projects"
    },
    {
      amount: "$10MM",
      title: "Acquisition Funding",
      desc: "Tech Company, WA",
      details: "Capital for strategic business acquisition and integration"
    }
  ]

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section background="olive" className="py-20">
        <Container className="text-center">
          <FadeIn>
            <Heading as="h1" size="h1" color="white" className="mb-6">
              Successful Client Fundings
            </Heading>
            <Text size="xl" color="white" className="max-w-3xl mx-auto opacity-90">
              Recent transactions demonstrating our ability to secure capital for growing businesses across diverse industries.
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* Transactions List */}
      <Section>
        <Container className="max-w-5xl">
          <StaggerContainer className="space-y-6">
            {successStories.map((item, index) => (
              <StaggerItem key={index}>
                <Card variant="flat" className="p-6 md:p-8 group hover:shadow-md transition-shadow duration-300 bg-white border-l-4 border-gold-500 hover:border-olive-900">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
                      <DollarSign className="text-gold-500 group-hover:text-white transition-colors duration-300" size={32} />
                    </div>
                    <div className="flex-grow">
                      <Heading as="h3" size="h3" className="mb-2 text-olive-900">{item.amount}</Heading>
                      <Heading as="h4" size="h4" className="mb-1 text-gray-700">{item.title}</Heading>
                      <Text size="sm" className="text-gray-500 mb-2">{item.desc}</Text>
                      <Text size="sm" className="text-gray-600 italic">{item.details}</Text>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center text-gold-500 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <Container className="max-w-4xl text-center">
          <FadeIn>
            <Heading as="h2" size="h2" className="mb-8">See What We Can Do For You</Heading>
            <a href="https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11" target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg" className="mx-auto gap-2">
                Get Funded <ArrowRight size={20} />
              </Button>
            </a>
          </FadeIn>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-4">What Our Clients Say</Heading>
            <Text size="lg" className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses we've helped secure the capital they needed.
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Serve Funding helped us close a critical gap in our cash flow. Their process was transparent and incredibly fast.",
                author: "Sarah Johnson",
                company: "Manufacturing Co."
              },
              {
                quote: "As a staffing firm, managing invoices is always challenging. This solution changed our cash flow completely.",
                author: "Michael Chen",
                company: "Staffing Solutions"
              },
              {
                quote: "The team understood our business needs better than traditional banks. We got exactly what we needed.",
                author: "Jennifer Rodriguez",
                company: "Tech Startups"
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <Card className="h-full bg-gray-50 hover:bg-gold-400/5 transition-colors duration-300">
                  <Text className="italic mb-6 text-gray-700">\"{item.quote}\"</Text>
                  <div className="pt-6 border-t border-gray-200">
                    <Heading as="h4" size="h4" color="dark" className="mb-1">{item.author}</Heading>
                    <Text size="sm" className="text-gold-500 font-semibold">{item.company}</Text>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    </div>
  )
}
