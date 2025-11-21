'use client'

import {
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/design-system'

const caseStudies = [
  {
    amount: '$2MM',
    title: 'Short-Term Cashflow',
    company: 'Transportation Company, FL',
    description: 'A Florida-based, commercial transportation company earning over $50MM in annual revenue found themselves in an unexpected situation when one of the largest online retailers appointed them as a direct delivery partner.'
  },
  {
    amount: '$150K',
    title: 'Fast Payroll Cover',
    company: 'Specialty Services Firm, GA',
    description: 'A growing niche services firm, based in GA and specializing in the interstate transport of private luxury items, faced an urgent cash flow crisis when a large receivable was unexpectedly delayed by a key customer.'
  },
  {
    amount: '$750K',
    title: 'Resolve Aged AR',
    company: 'Oil & Gas Services, TX',
    description: 'A rapidly growing provider of solids control services in the oil and gas sector, specializing in managing solids during the drilling process, was facing financial strain due to $550,000+ in aged receivables that were ineligible for financing.'
  },
  {
    amount: '$150K',
    title: 'Partner Buyout',
    company: 'Foundation Contractor, GA',
    description: 'Our client is a specialty contractor with offices in GA and SC.'
  },
  {
    amount: '$34MM',
    title: 'Equipment Financing',
    company: 'Plastics Recycling, FL / OH',
    description: 'A publicly traded plastics recycler, headquartered in Florida and with its first plant in Southern Ohio, went public via a SPAC in 2023.'
  },
  {
    amount: '$515K',
    title: 'Strategic Acquisition',
    company: 'Telecom Engineering Staffing, OH',
    description: 'A service disabled veteran & minority-owned telecom engineering staffing firm was pursuing a strategic acquisition to expand its reach in the telecommunications sector.'
  },
  {
    amount: '$3.1MM',
    title: 'Total Working Capital',
    company: 'Medical Device Manufacturer, FL',
    description: 'This medical device manufacturer, headquartered in Central Florida, was referred to Serve Funding by a banker after narrowly missing the bank\'s debt service coverage ratio requirements.'
  },
  {
    amount: '$300K',
    title: 'Refi Of Termed Bank Line',
    company: 'Steel Framing Contractor, GA',
    description: 'This specialty contractor, focusing on steel framing, was introduced to Serve Funding by a banker they approached for credit.'
  },
  {
    amount: '$1.2MM',
    title: 'Total Working Capital',
    company: 'Labels Manufacturer, TX',
    description: 'This minority-owned company, based in Texas with operations in both Texas and Mexico, has been a loyal client of Serve Funding for over three years.'
  },
  {
    amount: '$205K',
    title: 'Total Funding For Inventory',
    company: 'Landscape Materials Co, OH',
    description: 'This small, family-owned business, led by a husband and wife team in Cincinnati, OH, has been in operation for over 20 years.'
  },
  {
    amount: '$550K',
    title: 'Total Bridge Financing',
    company: 'Wine Transport & Storage Co, GA',
    description: 'A premier provider of climate-controlled wine transport and storage services faced a series of cash shortfalls that jeopardized their ability to meet payroll.'
  },
  {
    amount: '$500K',
    title: 'Working Capital',
    company: 'Oil & Gas PubCo, TX & NM',
    description: 'In late 2023, an experienced oil & gas executive team successfully completed a SPAC acquisition of a 30-year-old drilling operation based in Southeast New Mexico.'
  },
  {
    amount: '$135K',
    title: 'Payroll Cover',
    company: 'Cybersecurity Tech Firm, CA',
    description: 'This minority & veteran-owned company, based in Southern California, developed an innovative cybersecurity solution and was heading for significant growth.'
  },
  {
    amount: '$75K',
    title: 'Asset Purchase',
    company: 'HVAC Contractor, GA',
    description: 'A Georgia-based HVAC technician, with over a decade of experience, initially acquired the assets of a 40-year-old company from a retiring owner.'
  },
  {
    amount: '$55K',
    title: 'Refinance 2 MCA\'s',
    company: 'Welding Contractor, NJ',
    description: 'This specialty welding contractor, recognized for high-end metalwork projects throughout the Tri-State Area.'
  }
]

export default function Fundings() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: '#5a6c40' }}>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[400px] py-20 text-center">
            <FadeIn className="text-white max-w-3xl">
              <Heading as="h1" size="h1" color="white" className="mb-6">
                Creative Working Capital Solutions
              </Heading>
              <Text size="lg" className="text-white/90">
                At Serve Funding, we provide flexible, customized working capital solutions to help businesses overcome financial challenges and seize new growth opportunities. From acquisition funding to payroll financing and beyond, we deliver fast, reliable financial solutions that drive success.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Recent Fundings Grid */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-3">Recent Funding Transactions</Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <StaggerItem key={index}>
                <Card className="flex flex-col h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-baseline gap-2 mb-4">
                    <Text className="text-2xl font-bold text-gold-500">
                      {study.amount}
                    </Text>
                  </div>
                  
                  <Heading as="h3" size="h3" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                    {study.title}
                  </Heading>
                  
                  <Text className="text-sm font-semibold text-gray-500 mb-4">
                    {study.company}
                  </Text>
                  
                  <Text className="text-gray-600 group-hover:text-gray-700 transition-colors flex-1">
                    {study.description}
                  </Text>
                  
                  <div className="flex items-center gap-2 mt-6 text-gold-500 group-hover:text-olive-900 transition-colors font-semibold">
                    Read More
                    <ChevronRight size={18} />
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Why We're Different Section */}
      <Section background="gray">
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2">Why Serve Funding?</Heading>
            <Text className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Whether you need capital for acquisitions, bridging cash flow gaps, or payroll funding, we deliver the right funding at the right time. Our expertise has empowered companies across industries to achieve their goals, even in difficult market conditions.
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section background="olive" className="relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center">
              <Heading as="h2" size="h1" color="white" className="mb-8">Let's Talk.</Heading>
              <Text size="lg" color="white" className="mb-12">
                Please fill out this form and we'll schedule a call
              </Text>
            </FadeIn>
            <FadeIn delay={0.2}>
              <form className="space-y-6 text-left bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gold-500 ml-1">First Name</label>
                    <input type="text" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gold-500 ml-1">Last Name</label>
                    <input type="text" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gold-500 ml-1">Company Name</label>
                  <input type="text" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gold-500 ml-1">Email Address</label>
                    <input type="email" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gold-500 ml-1">Phone Number</label>
                    <input type="tel" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gold-500 ml-1">Capital For</label>
                  <input type="text" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gold-500 ml-1">Please add any details you'd like us to know before we speak</label>
                  <textarea rows={4} className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"></textarea>
                </div>

                <Button variant="gold" size="lg" className="w-full">Get Started</Button>
              </form>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </div>
  )
}
