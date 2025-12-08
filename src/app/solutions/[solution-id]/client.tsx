'use client'

import { useEffect, ReactNode } from 'react'
import { trackSolutionDetailsView } from '@/lib/tracking'
import { getTitleAsString } from '@/lib/solution-helpers'

interface SolutionDetailClientProps {
  solution: {
    title: string | ReactNode
  }
  children: ReactNode
}

export function SolutionDetailClient({ solution, children }: SolutionDetailClientProps) {
  const titleStr = getTitleAsString(solution.title)

  useEffect(() => {
    trackSolutionDetailsView(titleStr)
  }, [titleStr])

  return <>{children}</>
}
