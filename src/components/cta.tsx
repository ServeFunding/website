import { FadeIn, Section, Container, Heading, Text, Button } from "./ui"
import Link from "next/link"

interface CTAProps {
  title: string
  text: string
  buttonText: string
  href?: string
  source?: string
  useBG?: boolean
}

export const CTA = ({ title, text, buttonText, href = "/contact-us", source, useBG }: CTAProps) => {
  const buttonHref = source ? `${href}?source=${source}` : href

  return (
    <Section background={useBG ? "gray" : "white"}>
      <Container>
        <FadeIn className="text-center mb-16">
          <Heading size="h2">{title}</Heading>
          <Text className="mt-4 text-gray-600 max-w-2xl mx-auto mb-8">
            {text}
          </Text>
          <Link href={buttonHref}>
            <Button variant="gold" size="lg">
              {buttonText}
            </Button>
          </Link>
        </FadeIn>
      </Container>
    </Section>
  )
}