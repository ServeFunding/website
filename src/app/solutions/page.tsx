import type { Metadata } from 'next'
import { SolutionsClient } from './client'

export const metadata: Metadata = {
  title: "Funding Solutions | Asset-Based Lending, Invoice Factoring & More | Serve Funding",
  description: "Explore 10+ working capital solutions including asset-based lending, invoice factoring, equipment leasing, SBA loans, and government contract financing.",
  keywords: "asset-based lending, invoice factoring, working capital loans, equipment leasing, real estate lending, PO funding, SBA loans",
  openGraph: {
    title: "Funding Solutions | Asset-Based Lending, Invoice Factoring & More | Serve Funding",
    description: "Explore 10+ working capital solutions including asset-based lending, invoice factoring, equipment leasing, SBA loans, and government contract financing.",
    url: "https://servefunding.com/solutions",
  },
}

export default function Solutions() {
  return <SolutionsClient />
}
