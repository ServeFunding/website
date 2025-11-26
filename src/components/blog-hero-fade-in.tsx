'use client'

import { motion } from "framer-motion"
import { COLORS } from "@/lib/colors"
import { LAYOUT } from "@/lib/layout"
import { Section, Container, Heading, Text } from "./ui"

interface BlogHeroFadeInProps {
  title: string
  subtitle?: string
  date?: string
  author?: string
}

export const BlogHeroFadeIn = ({ title, subtitle, date, author }: BlogHeroFadeInProps) => (
  <Section className="py-12 md:py-16 overflow-hidden" style={{ backgroundColor: COLORS.primary.darkGreen, scrollMarginTop: LAYOUT.scrollMarginTop }}>
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        {(date || author) && (
          <Text size="sm" className="text-white/70 mb-3">
            {date && <span>{date}</span>}
            {date && author && <span> • </span>}
            {author && <span>{author}</span>}
          </Text>
        )}
        <Heading size="h1" color="white" className="mb-4">
          {title}
        </Heading>
        {subtitle && (
          <Text size="lg" className="text-white/90">
            {subtitle}
          </Text>
        )}
      </motion.div>
    </Container>
  </Section>
)