import type { Metadata } from 'next'
import { SolutionsClient } from './client'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'
import { getOrganizationSchema, getFinancialServiceSchema } from '@/lib/schema-generators'
import { companyInfo } from '@/data/company-info'
import { fundingSolutions } from '@/data/solutions'

export const metadata: Metadata = {
  title: "Creative Working Capital Solutions $250K-$100MM | When Banks Say No",
  description: "Explore 10+ alternative funding solutions including debt refinance, payroll financing, asset-based lending, invoice factoring, and MCA consolidation. Fast funding in 3-10 days when traditional banks say no.",
  keywords: "debt refinance, payroll financing, mca consolidation, asset-based lending, invoice factoring, working capital loans, when banks say no, alternative business financing",
  openGraph: {
    title: "Creative Working Capital Solutions $250K-$100MM | When Banks Say No",
    description: "Explore 10+ alternative funding solutions including debt refinance, payroll financing, asset-based lending, invoice factoring, and MCA consolidation. Fast funding in 3-10 days when traditional banks say no.",
    url: "https://servefunding.com/solutions",
  },
}

export default function Solutions() {
  // Generate schema for the solutions overview page
  const organizationSchema = getOrganizationSchema({
    name: companyInfo.name,
    description: companyInfo.description,
    url: 'https://servefunding.com',
    phone: companyInfo.contact.phone,
    email: companyInfo.contact.email,
    address: companyInfo.contact.address,
    foundingDate: '2021',
    founderName: 'Michael Kodinsky',
    knowsAbout: fundingSolutions.map(s => s.title),
  })

  return (
    <>
      {/* Schema Markup */}
      <SchemaRenderer schema={organizationSchema} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'Solutions' }]} />

      <SolutionsClient />
    </>
  )
}
