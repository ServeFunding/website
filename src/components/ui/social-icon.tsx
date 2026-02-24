'use client'

import { LucideIcon } from 'lucide-react'
import { COLORS } from '@/lib/colors'

export interface SocialIconProps {
  href: string
  icon: LucideIcon
  label: string
  color?: string
}

const brandColors: Record<string, string> = {
  LinkedIn: '#0A66C2',
  Facebook: '#1877F2',
}

export function SocialIcon({
  href,
  icon: Icon,
  label,
  color,
}: SocialIconProps) {
  const bgColor = color || brandColors[label] || COLORS.primary

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== 'undefined' && window.umami?.track) {
          window.umami.track('external_link_click', {
            link: `Social - ${label}`,
            url: href
          })
        }
      }}
      className="text-white p-3 rounded-lg transition-opacity hover:opacity-80"
      style={{ backgroundColor: bgColor }}
      title={label}
      aria-label={label}
    >
      <Icon size={24} />
    </a>
  )
}
