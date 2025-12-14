import type { Metadata } from 'next'
import { SolutionsClient } from './client'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: "Creative Working Capital Solutions $250K-$100MM | When Banks Say No",
  description: "10+ alternative funding solutions: debt refinance, payroll financing, asset-based lending, invoice factoring, MCA consolidation. Fast funding in 3-10 days.",
  keywords: "debt refinance, payroll financing, mca consolidation, asset-based lending, invoice factoring, working capital loans, when banks say no, alternative business financing",
  openGraph: {
    title: "Creative Working Capital Solutions $250K-$100MM | When Banks Say No",
    description: "Explore 10+ alternative funding solutions including debt refinance, payroll financing, asset-based lending, invoice factoring, and MCA consolidation. Fast funding in 3-10 days when traditional banks say no.",
    url: "https://servefunding.com/solutions",
    type: "website",
    images: [
      {
        url: "https://servefunding.com/solutions/Asset%20Based%20Lending.webp",
        width: 1024,
        height: 728,
        alt: "Alternative Funding Solutions",
      },
    ],
  },
}

export default function Solutions() {
  return (
    <>
      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'Solutions' }]} />

      <SolutionsClient />
    </>
  )
}
