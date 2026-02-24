import { ReactNode } from "react"
import { FadeIn, Section, Container, Heading, Text, Button } from "./ui"
import Link from "next/link"

interface CTAProps {
  title: string
  text: ReactNode
  buttonText: string
  href?: string
  useBG?: boolean
}

export const CTA = ({ title, text, buttonText, href = "/lets-talk", useBG }: CTAProps) => {
  const buttonHref = href

  return (
    <Section background={useBG ? "background" : "white"}>
      <Container>
        <FadeIn className="text-center">
          <Heading size="h2">{title}</Heading>
          <Text className="mt-4 text-gray-600 max-w-2xl mx-auto mb-8">
            {text}
          </Text>
          <Link href={buttonHref}>
            <Button variant={useBG ? "default" : "gold"} size="lg">
              {buttonText}
            </Button>
          </Link>
        </FadeIn>
      </Container>
    </Section>
  )
}