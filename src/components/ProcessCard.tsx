'use client'

import { Card, Heading, Text } from '@/components/ui'
import { COLORS as BRAND_COLORS } from '@/lib/colors'

interface ProcessCardProps {
  step: number
  title: string
  desc: string
}

export function ProcessCard({ step, title, desc }: ProcessCardProps) {
  return (
    <Card 
      className="h-full flex flex-col items-center text-center group transition-all duration-300 md:hover:-translate-y-2 bg-white" 
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = BRAND_COLORS.secondary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'white';
      }}
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 bg-white/50 border-2 border-gold-light" style={{ color: BRAND_COLORS.primary }}>
        <span className="text-2xl font-bold">{step}</span>
      </div>
      <Heading size="h3" className="mb-4 transition-colors" style={{ color: BRAND_COLORS.primary }}>
        {title}
      </Heading>
      <Text className="text-gray-600 font-medium transition-colors group-hover:text-gray-600">
        {desc}
      </Text>
    </Card>
  )
}
