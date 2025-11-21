import { Container, Section, Heading, Text } from "@/components/design-system"

export default function TermsOfService() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Section background="olive" className="py-32">
        <Container className="text-center">
          <Heading as="h1" size="h1" color="white" className="mb-6">
            Terms of Service
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <Heading as="h2" size="h2" className="mb-8">Coming Soon</Heading>
          <Text>
            Our terms of service are coming soon.
          </Text>
        </Container>
      </Section>
    </div>
  )
}
