'use client'

import { useEffect, ReactNode } from 'react'
import { trackSolutionDetailsView } from '@/lib/tracking'

interface SolutionDetailClientProps {
  solution: {
    title: string
  }
  children: ReactNode
}

export function SolutionDetailClient({ solution, children }: SolutionDetailClientProps) {
  useEffect(() => {
    trackSolutionDetailsView(solution.title)
  }, [solution.title])

  return <>{children}</>
}
