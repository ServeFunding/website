import { FadeIn, Section, Container, Card, Heading, Text, Button } from "./ui"

interface CTAProps {
  title: string
  text: string
  buttonText: string
  href?: string
  source?: string
  useGreenBackground?: boolean
}

export const CTA = ({ title, text, buttonText, href = "/contact-us", source, useGreenBackground }: CTAProps) => {
  const buttonHref = source ? `${href}?source=${source}` : href

  return (
    <Section background={useGreenBackground ? "olive" : "white"}>
      <Container>
        <FadeIn className="max-w-3xl mx-auto">
          <Card className="p-8 bg-olive-50 border border-olive-200">
            <Heading size="h2" className="mb-4 text-olive-900">
              {title}
            </Heading>
            <Text className="mb-6 text-gray-700">
              {text}
            </Text>
            <a href={buttonHref}>
              <Button variant="gold" size="lg">
                {buttonText}
              </Button>
            </a>
          </Card>
        </FadeIn>
      </Container>
    </Section>
  )
}