import { ReactNode } from "react"
import { FadeIn, Section, Container, Heading, Text, Button } from "./ui"
import Link from "next/link"
import type { SectionBackgroundOption } from "@/lib/colors"

interface CTAProps {
  title: string
  text: ReactNode
  buttonText: string
  href?: string
  useBG?: boolean
  background?: SectionBackgroundOption
}

export const CTA = ({ title, text, buttonText, href = "/lets-talk", useBG, background }: CTAProps) => {
  const bg = background ?? (useBG ? "background" : "white")
  const useAltButton = bg !== "white"

  return (
    <Section background={bg}>
      <Container>
        <FadeIn className="text-center">
          <Heading size="h2">{title}</Heading>
          <Text size="2xl" className="mt-4 text-gray-600 max-w-2xl mx-auto mb-8">
            {text}
          </Text>
          <Link href={href}>
            <Button variant={useAltButton ? "default" : "gold"} size="lg">
              {buttonText}
            </Button>
          </Link>
        </FadeIn>
      </Container>
    </Section>
  )
}