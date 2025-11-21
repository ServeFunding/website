import { Container, Section, Heading, Text, Button } from "@/components/design-system"
import { ArrowRight } from "lucide-react"

export default function Partners() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Section background="olive" className="py-32">
        <Container className="text-center">
          <Heading as="h1" size="h1" color="white" className="mb-6">
            Partner Types
          </Heading>
          <Text size="xl" color="white" className="max-w-3xl mx-auto opacity-90">
            Learn about our partner ecosystem.
          </Text>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <Heading as="h2" size="h2" className="mb-8 text-center">Coming Soon</Heading>
          <Text className="text-center mb-8">
            Our partners page is coming soon.
          </Text>
          <div className="text-center">
            <a href="https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11" target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg" className="mx-auto gap-2">
                Schedule Intro Call <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  )
}
