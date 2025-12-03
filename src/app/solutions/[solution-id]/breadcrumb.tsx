'use client'

import Link from 'next/link'
import { COLORS } from '@/lib/colors'

interface BreadcrumbProps {
  solutionTitle: string
}

export function SolutionBreadcrumb({ solutionTitle }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-600 px-6 py-4">
      <Link
        href="/solutions"
        className="transition-opacity duration-200"
        style={{color: COLORS.primary.darkGreen}}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        Solutions
      </Link>
      <span className="mx-2">/</span>
      <span className="text-gray-900 font-semibold">{solutionTitle}</span>
    </nav>
  )
}
