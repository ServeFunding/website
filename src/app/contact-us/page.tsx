import { Container, Section, Heading, Text, Button } from "@/components/design-system"
import { ArrowRight } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Section background="olive" className="py-32">
        <Container className="text-center">
          <Heading as="h1" size="h1" color="white" className="mb-6">
            Contact Us
          </Heading>
          <Text size="xl" color="white" className="max-w-3xl mx-auto opacity-90">
            Get in touch with our team.
          </Text>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <Heading as="h2" size="h2" className="mb-8 text-center">Coming Soon</Heading>
          <Text className="text-center mb-8">
            Our contact page is coming soon. In the meantime, reach out directly.
          </Text>
          <div className="text-center space-y-4">
            <a href="mailto:michael@servefunding.com" className="block">
              <Button variant="gold" size="lg" className="mx-auto gap-2">
                Email Us
              </Button>
            </a>
            <a href="https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="mx-auto gap-2">
                Schedule Intro Call <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  )
}
