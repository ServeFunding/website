'use client'

import { motion } from "framer-motion"
import { COLORS } from "@/lib/colors"
import { LAYOUT } from "@/lib/layout"
import { Section, Container, Heading, Text } from "./ui"

interface HeroFadeInProps {
  title: string
  subtitle?: string
  compact?: boolean
}

export const HeroFadeIn = ({ title, subtitle, compact }: HeroFadeInProps) => (
  <Section className={`pt-20 pb-0 md:py-0 overflow-hidden ${compact ? '!pb-0' : ''}`} style={{ backgroundColor: COLORS.primary.darkGreen, scrollMarginTop: LAYOUT.scrollMarginTop }}>
    <Container>
      <div className={`flex flex-col items-center justify-center ${compact ? 'min-h-[200px] py-12' : 'min-h-[400px] py-20'} text-center`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <Heading size="h1" color="white" className="mb-6">
            {title}
          </Heading>
          {subtitle && (
            <Text size="lg" className="text-white/90">
              {subtitle}
            </Text>
          )}
        </motion.div>
      </div>
    </Container>
  </Section>
)