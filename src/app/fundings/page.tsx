'use client'

import { useState } from 'react'
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
import { CaseStudyModal } from '@/components/CaseStudyModal'
import { IntroCallForm } from '@/components/Forms'

const caseStudies = [
  {
    amount: '$2MM',
    title: 'Short-Term Cashflow',
    company: 'Transportation Company, FL',
    description: 'A Florida-based, commercial transportation company earning over $50MM in annual revenue found themselves in an unexpected situation when one of the largest online retailers appointed them as a direct delivery partner.',
    fullStory: 'Although it came as an honor, this sudden change brought a significant shift in their invoicing terms, moving from net-7 to net-60 overnight. This effectively tied up over $2MM in invoices for what would be 60+ days.\n\nFaced with an urgent cash flow shortage, the company\'s banker reached out to Serve Funding for a quick and effective solution. After considering various options, including invoice factoring, which wasn\'t viable due to the retailer\'s internal processes, Serve Funding sourced a short-term lender to come through quickly for this client. The lender underwrote the financing based on the company\'s cash flow and provided a $2MM bridge loan in a matter of days. This allowed the transportation company to smoothly navigate the 60-day gap without disrupting their operations.'
  },
  {
    amount: '$150K',
    title: 'Fast Payroll Cover',
    company: 'Specialty Services Firm, GA',
    description: 'A growing niche services firm, based in GA and specializing in the interstate transport of private luxury items, faced an urgent cash flow crisis when a large receivable was unexpectedly delayed by a key customer.',
    fullStory: 'The risk was they would fall short on meeting their payroll funding requirement, so the firm\'s leadership needed a swift solution to avoid disrupting their operations and staff morale.\n\nTheir account executive, working with a new PEO partner, reached out to Serve Funding for immediate assistance. Understanding the urgency, we quickly sourced a $150,000 term loan with an 18-month repayment structure. The loan closed in just under four business days, allowing the firm to meet payroll on time and avoid any operational setbacks. Crisis averted!'
  },
  {
    amount: '$750K',
    title: 'Resolve Aged AR',
    company: 'Oil & Gas Services, TX',
    description: 'A rapidly growing provider of solids control services in the oil and gas sector, specializing in managing solids during the drilling process, was facing financial strain due to $550,000+ in aged receivables that were ineligible for financing.',
    fullStory: 'The company, based in Texas, had built a reputation for reliability and environmental compliance, supporting some of the largest energy producers since its founding in 2018.\n\nTo continue its growth trajectory and manage these outstanding balances, the firm was referred to Serve Funding by a long-time partner in the ABL financing sector. Michael and his team collaborated with a second-lien lender to secure a $750,000 term loan over 24 months with monthly payments. This enabled the company to resolve the aged receivables and provide additional working capital during this critical transition.\n\nWith Serve Funding\'s assistance, the company stabilized its finances and was able to focus on capitalizing on new opportunities in the energy sector, continuing its rapid expansion while ensuring optimized drilling performance for its clients.'
  },
  {
    amount: '$150K',
    title: 'Partner Buyout',
    company: 'Foundation Contractor, GA',
    description: 'Our client is a specialty contractor with offices in GA and SC.',
    fullStory: 'The owner-operators are a husband and wife team, specializing in residential and commercial foundation repair and build-outs. They had been operating over 12 years in business when they approached Serve Funding. The owners faced a time-sensitive partner buyout opportunity.\n\nYears prior, their company had merged with a complementary contractor, and the combined business thrived under a unified name. When the retiring partner decided to exit, he demanded a $150,000 buyout for his share of the business, placing the owner under immense pressure with a strict, 30-day deadline. They found Serve Funding directly on LinkedIn and turned to us for a quick solution to their pressing problem.\n\nMichael and his team moved swiftly, sourcing a lender and structuring the $150,000 as an 18-month bridge loan, designed with favorable early payoff discounts. This gave the client the breathing room it needed to settle the buyout without derailing the business operations. Six months later, the company was able to refinance the loan through a 10-year SBA facility, effectively converting the short-term debt into a more manageable long-term structure.'
  },
  {
    amount: '$34MM',
    title: 'Equipment Financing',
    company: 'Plastics Recycling, FL / OH',
    description: 'A publicly traded plastics recycler, headquartered in Florida and with its first plant in Southern Ohio, went public via a SPAC in 2023.',
    fullStory: 'The company, utilizing proprietary technology to recycle polypropylene, raised an aggregate of nearly $1B through Ohio state revenue bonds as well as their stock offerings.\n\nAs a pre-revenue startup, they sought creative ways to extend their cash runway, especially after using equity to purchase equipment that was not yet installed. A banker in Central Florida introduced them to Serve Funding, and Michael worked to secure financing for tens of millions, a challenging task for a pre-revenue company.\n\nAfter a thorough seven-month process involving two term sheets and 2 corresponding site visits, $22MM million was funded against one equipment schedule. About a year later, another $12MM was closed for a second schedule by a separate equipment lender sourced by Serve Funding. As the company approaches revenue generation, Serve Funding\'s efforts have provided some additional liquidity needed to support their growth, positioning them as a future leader in sustainable plastics.'
  },
  {
    amount: '$515K',
    title: 'Strategic Acquisition',
    company: 'Telecom Engineering Staffing, OH',
    description: 'A service disabled veteran & minority-owned telecom engineering staffing firm was pursuing a strategic acquisition to expand its reach in the telecommunications sector.',
    fullStory: 'The target was a profitable staffing company in the same industry, poised to enhance their service offerings and market presence. However, after two failed attempts to secure financing from other lenders, the firm was at risk of losing the deal due to growing seller deal-fatigue.\n\nThat\'s when their investment banker reached out to Michael at Serve Funding for help. Michael acted quickly, securing a $515,000 short-term, revenue-based bridge loan that enabled the firm to meet the seller\'s deadline and close the acquisition.\n\nThe bridge loan was structured with an early-out clause, allowing the client to refinance at a lower interest rate soon after the deal was completed. This not only ensured the acquisition but also saved the company a significant amount in interest costs, highlighting Serve Funding\'s expertise in managing complex, time-sensitive transactions.'
  },
  {
    amount: '$3.1MM',
    title: 'Total Working Capital',
    company: 'Medical Device Manufacturer, FL',
    description: 'This medical device manufacturer, headquartered in Central Florida, was referred to Serve Funding by a banker after narrowly missing the bank\'s debt service coverage ratio requirements.',
    fullStory: 'They needed working capital to support longer payment terms as customers requested net-60-day terms, and to build deeper inventory for new, larger customer orders.\n\nOver a six-month span, Serve Funding closed four tranches of capital. The first was a $400K, 12-month unsecured working capital loan with monthly payments, primarily used for adding inventory and supporting extended payment terms. Two months later, they secured a $1MM revolving line of credit backed by accounts receivable, enabling faster onboarding of new, high-volume customers.\n\nThe following month, the original term loan was refinanced into a $500K facility, maintaining the same rate and terms, while still remaining unsecured. Shortly after, the company sought funds to repay friends and family investors. With existing assets tapped out, Serve Funding arranged a $550K second mortgage on the owner\'s home using a bank-statement-only approach. A month later, as sales surged, Serve Funding secured an increase in the AR line to $1.5MM.\n\nDECEMBER 2024 UPDATE: Serve closed another term loan for an additional $550k for our client. The company is closing out 2024 at over $5MM in revenue which represents 30% + YoY growth.'
  },
  {
    amount: '$300K',
    title: 'Refi Of Termed Bank Line',
    company: 'Steel Framing Contractor, GA',
    description: 'This specialty contractor, focusing on steel framing, was introduced to Serve Funding by a banker they approached for credit.',
    fullStory: 'Their current bank unexpectedly terminated their line of credit with a tight, 4-month deadline, forcing the company into large monthly payments to settle the balance by year-end. After seeking help from another banker, who was unable to extend credit due to the company\'s 2023 tax losses, they were referred to Michael at Serve Funding.\n\nRecognizing the urgency, Michael and his team swiftly developed a strategic, three-phase financing plan. The initial step was securing a $300,000 bridge loan, structured over 12 months with manageable monthly payments and a competitive interest rate in the mid-teens. This loan alleviated immediate pressure by paying off the bank line, significantly reducing the company\'s financial burden.\n\nThis bridge solution was the first step in a comprehensive strategy to stabilize the contractor\'s finances. Next, Serve Funding plans to arrange a cash-out refinance using the company\'s commercial property, followed by establishing an accounts receivable-based line of credit for long-term working capital needs. With this step-by-step plan, the client is now optimistic and relieved, confident that Serve Funding\'s tailored approach will keep their business on track and poised for future growth.'
  },
  {
    amount: '$1.2MM',
    title: 'Total Working Capital',
    company: 'Labels Manufacturer, TX',
    description: 'This minority-owned company, based in Texas with operations in both Texas and Mexico, has been a loyal client of Serve Funding for over three years.',
    fullStory: 'With a 20-year history, the business manufactures industrial labels and has shown consistent growth and profitability. Like many expanding companies, they frequently faced cash flow challenges as they adapted to larger customer orders.\n\nIn mid-2023, Serve Funding secured a $500,000 revolving line of credit from a regional bank in TX, complemented by a $350,000 SBA loan to replace an existing facility, enabling the bank to hold a senior lien position. Additionally, over the past two years, Serve Funding arranged three tranches of unsecured working capital totaling $350,000.\n\nThe company remains a strong supporter of Serve Funding and is currently collaborating on transitioning the bank line into an AR-based facility. This adjustment will accommodate their expected surge in sales over the next 12 to 18 months, ensuring the facility can scale rapidly to support their growth.'
  },
  {
    amount: '$205K',
    title: 'Total Funding For Inventory',
    company: 'Landscape Materials Co, OH',
    description: 'This small, family-owned business, led by a husband and wife team in Cincinnati, OH, has been in operation for over 20 years.',
    fullStory: 'They faced significant challenges after a family member in the same industry betrayed their trust, stealing key customers and accounts, which led to years of struggle. Determined to rebuild, they approached Serve Funding during their busy seasons seeking inventory solutions.\n\nDespite being highly leveraged personally and the company facing its own credit challenges, Serve Funding identified lenders willing to work with them and fought to negotiate reasonable terms and pricing, despite this client\'s high-risk profile. Over nine months, we secured four separate tranches of funding, totaling just over $205,000, helping the company sustain operations and support them through their off seasons.'
  },
  {
    amount: '$550K',
    title: 'Total Bridge Financing',
    company: 'Wine Transport & Storage Co, GA',
    description: 'A premier provider of climate-controlled wine transport and storage services faced a series of cash shortfalls that jeopardized their ability to meet payroll.',
    fullStory: 'Referred to Serve Funding by a long-time partner in the PEO sector, the company needed a swift solution to avoid serious disruption.\n\nIn January, Michael and his team secured a $200,000 bridge loan to cover the initial shortfall. When the company encountered the same issue in February, Serve Funding provided another $200,000 tranche from the same unsecured bridge lender. Operations continued smoothly until August, when a third shortfall occurred. This time, Serve Funding sourced $150,000 from a separate lender to ensure payroll was once again met on time.\n\nThanks to Serve Funding\'s timely interventions and strategic financial support, the company stabilized and has continued to grow without further capital needs.'
  },
  {
    amount: '$500K',
    title: 'Working Capital',
    company: 'Oil & Gas PubCo, TX & NM',
    description: 'In late 2023, an experienced oil & gas executive team successfully completed a SPAC acquisition of a 30-year-old drilling operation based in Southeast New Mexico.',
    fullStory: 'With plans to restart up to 100 idle wells, they sought additional working capital through a sale-leaseback of equipment, initially approved as a subordination by their bank.\n\nThey had an offer from a well-known equipment financing company, but delays from that lender raised concerns. The CEO had worked with Michael previously on another venture, so he reached out for help. Michael and the Serve Funding team presented multiple term sheets within a few short weeks, positioning the deal to move forward. However, when the equipment appraisal revealed high value, the bank unexpectedly withdrew its agreement to subordinate the assets, creating an unforeseen obstacle.\n\nMichael acted swiftly, pivoting from the original plan and securing a $500,000 short-term working capital loan. This funding provided the necessary liquidity to proceed with equipment updates, while discussions with the bank continued to revisit the refinancing agreement.'
  },
  {
    amount: '$135K',
    title: 'Payroll Cover',
    company: 'Cybersecurity Tech Firm, CA',
    description: 'This minority & veteran-owned company, based in Southern California, developed an innovative cybersecurity solution and was heading for significant growth.',
    fullStory: 'They had yet to achieve consistent revenues. They were speaking to an AR financing firm in hopes of securing a revolving line to support their unsteady revenues but that was simply not a fit. As they found themselves facing an upcoming payroll crunch, the AR lender introduced the owner to Michael of Serve Funding.\n\nWe went to bat for this awesome client and secured a $60,000 cash-advance tranche to cover their immediate payroll shortfall. A month and a half later, they returned facing a similar cash flow gap, and we arranged another $75,000 tranche under similar terms from the same lender.\n\nBoth advances included early payoff clauses, enabling the company to save on interest when they raised additional equity. Today, the firm is thriving, generating revenues at well over an 8-figure ARR, and is truly poised to become a leader in the cybersecurity sector.'
  },
  {
    amount: '$75K',
    title: 'Asset Purchase',
    company: 'HVAC Contractor, GA',
    description: 'A Georgia-based HVAC technician, with over a decade of experience, initially acquired the assets of a 40-year-old company from a retiring owner.',
    fullStory: 'The following year, he sought to expand further by purchasing the customer list of another local competitor, consisting of over 3,500 valuable contacts. This strategic acquisition would significantly boost his client base and market reach, but securing financing was challenging due to his less-than-ideal credit and the business being less than two years old.\n\nRecognizing the opportunity, Michael structured a favorable short-term bridge loan with aggressive early payoff options. The loan was secured just in time for the peak summer season, enabling the technician to onboard new clients efficiently. Since acquiring these accounts, the company has grown steadily, moving closer to long-term profitability and a stronger foothold in the local HVAC market.'
  },
  {
    amount: '$55K',
    title: 'Refinance 2 MCA\'s',
    company: 'Welding Contractor, NJ',
    description: 'This specialty welding contractor, recognized for high-end metalwork projects throughout the Tri-State Area.',
    fullStory: 'The contractor was introduced to Serve Funding by an AR financing executive who trusted Michael\'s reputation. After being misled into two high-cost merchant cash advances (MCAs) by an unscrupulous broker, the company struggled with burdensome payments. Despite these challenges, the business showed steady post-COVID growth. Additionally, they faced modest tax liabilities and were working through a tax lien resolution.\n\nMichael structured a $55,000 term loan to refinance the 2 much higher priced cash advances. This loan also provided additional funds to support payroll and materials for ongoing projects. By refinancing and adding liquidity, Serve Funding positioned the contractor to manage immediate cash flow needs and focus on growth.'
  }
]

export default function Fundings() {
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (study: typeof caseStudies[0]) => {
    setSelectedStudy(study)
    setIsModalOpen(true)
  }

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
                <button
                  onClick={() => openModal(study)}
                  className="w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded-[2rem]"
                >
                  <Card className="flex flex-col h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
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
                </button>
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
      <IntroCallForm />

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        caseStudy={selectedStudy}
      />
    </div>
  )
}
