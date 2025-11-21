'use client'

import {
  CheckCircle,
  ChevronRight
} from 'lucide-react'
import { IntroCallForm } from '@/components/Forms'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  LAYOUT
} from '@/components/design-system'

const fundingSolutions = [
  {
    id: 'asset-based-lending',
    title: 'Asset-Based Lending',
    shortDesc: 'Leverage business assets such as AR, Inventory, Equipment & CRE for flexible lines of credit that grow with your business.',
    fullDesc: 'Asset-Based Lending (ABL) allows businesses to leverage their accounts receivable, inventory, equipment, and commercial real estate as collateral to access flexible working capital. These lines of credit provide are ideal for companies which are going through seasons of rapid growth or experiencing temporary financial challenges. ABL lines are typically used for working capital, expansion, acquisitions, or debt restructuring.',
    features: [
      'Facility amounts from $1MM – $100MM',
      'Revolving credit lines available',
      '70-90% advance on receivables',
      '50-75% advance on inventory',
      'Rates based on SOFR or Prime +1-5%',
      'Suitable for US-based, B2B and B2C'
    ]
  },
  {
    id: 'invoice-factoring',
    title: 'Invoice (AR) Financing',
    shortDesc: 'Turn your open B2B invoices into immediate cash flow to maximize growth and maintain smooth operations.',
    fullDesc: 'Invoice financing (also called factoring) turns your open B2B invoices into immediate cash to maximize growth and maintain smooth operations. This solution is ideal for companies with commercial AR to enhance cash flow and reduce credit risk. Factoring suits businesses that sell to both US-based & international commercial customers. It takes longer terms such as net-30, net-60, net-90 + and provides access to the cash trapped in those invoices on day 1!',
    features: [
      'Facility amounts from $250K – $100MM',
      'Revolving lines of credit',
      'Advance rates of 75%–95% on AR',
      'Interest tied to SOFR or Prime + 1-6%',
      'Factor fees from 0.25% to 1% per invoice',
      'Not a loan; no balance sheet impact',
      'Options for single debtor factoring'
    ]
  },
  {
    id: 'working-capital-loans',
    title: 'Working Capital Loans',
    shortDesc: 'Secure creative working capital options which close quickly, serving as bridge funding to cover expenses & support growth.',
    fullDesc: 'Working capital funding is typically funded on a revenue-based underwriting model. They can be closed quickly – often within days – and provide essential funding for managing day-to-day operating expenses. They are typically used for help to cover payroll, fund additional inventory, address accounts payable, and more. Working capital loans ensure smooth operations amid cash flow challenges stemming from the unexpected to seasonal fluctuations.',
    features: [
      'Loan amounts from $100K to $5MM+',
      'Flexible terms from 6 to 24 months',
      'Approval within 1-3 business days',
      'Monthly factor rates of 1.25-3% +',
      'For B2B and B2C businesses',
      'Fast-growing companies across industries'
    ]
  },
  {
    id: 'inventory-financing',
    title: 'Inventory Financing',
    shortDesc: 'Access the value tied up in your existing inventory or use specialized financing solutions to purchase new inventory.',
    fullDesc: 'Inventory financing is a short-term loan option that leverages existing inventory as collateral, offering businesses the liquidity to manage inventory levels. It\'s ideal for companies needing to maintain stock to satisfy customer demand while facing interim cash flow issues.',
    features: [
      'Loan amounts from $500K to $20M',
      'Revolving credit lines available',
      'Advance rate up to 85% of liquidation value',
      'Inventory audit / review typically required',
      'Interest based on Prime + 6-12%',
      'Suited for B2B and B2C companies',
      'Great solution for e-commerce firms'
    ]
  },
  {
    id: 'equipment-leasing',
    title: 'Equipment Leasing & Loans',
    shortDesc: 'Take advantage of flexible equipment financing & lease options to purchase new equipment or cash-out of existing equipment.',
    fullDesc: 'Equipment leasing offers businesses a practical solution to acquire essential machinery, vehicles, and technology without large upfront costs. By opting for a lease or loan specifically for equipment, companies can efficiently manage cash flow while securing the assets necessary for their operations. This financing method is ideal for most industries, including manufacturing, construction, transportation, healthcare, and technology.',
    features: [
      'Loan range from $100K to $50MM+',
      'Terms of 3 to 7 years are most typical',
      '70%–85% advance of liquidation value',
      'Equipment appraisal or audit required',
      'Rates: Prime + 3% to 10%',
      'Applicable for B2B and B2C sectors',
      'Sale-leaseback options for existing equipment'
    ]
  },
  {
    id: 'purchase-order-funding',
    title: 'Purchase Order (PO) Funding',
    shortDesc: 'Maximize growth through funding solutions designed to fulfill new PO\'s and mobilize contracts without straining cash-flow.',
    fullDesc: 'Purchase Order Funding provides businesses with crucial financing to fulfill large orders without the cash to cover initial production or purchase costs. Ideal for companies experiencing cash flow issues, limited traditional financing access, or rapid expansion, this funding bridges gaps and ensures timely order fulfillment.',
    features: [
      'Loan amounts from $250K to $50M',
      'Revolving credit available',
      'Funds 70%-100% of P.O. value',
      'Fees from 1.5% to 3% per 30 days',
      'Supports drop-shipped orders',
      'Includes warehouse and processing orders',
      'For B2B and B2C businesses',
      'Serving USA and Canada'
    ]
  },
  {
    id: 'government-contracts',
    title: 'Government Contract Financing',
    shortDesc: 'Access flexible lines of credit designed exclusively to provide financing for federal, state & local government contracts.',
    fullDesc: 'Government Contract Financing offers tailored funding to businesses awarded contracts with federal, state, or local agencies. This financial solution ensures seamless cash flow management, covering upfront costs without depleting working capital, thereby enabling contractors to meet obligations and compete effectively in government projects.',
    features: [
      'Financing facilities from $250K to $50MM',
      'Up to 90% advance on contract value',
      'Approval in 5-10 business days',
      'Rates from Prime + 2% to 8%',
      'For prime and subcontractors',
      'Options: factoring, asset-based, credit lines',
      'USA-focused for government contracts'
    ]
  },
  {
    id: 'real-estate-lending',
    title: 'Real Estate Financing Commercial & Investor',
    shortDesc: 'Receive bridge & long-term financing on commercial properties, including purchases, refinancing and cash-out options.',
    fullDesc: 'Our real estate lending options provide financing solutions through banks, credit unions, specialized alternative lenders, private investors, and equity funds. These loans cater to the complex needs of commercial properties and cover all asset classes such as industrial, office, retail, single and multi-family investment portfolios and more. Our clients receive financing in both short-term bridge offerings of 12-36 months as well as permanent commercial loans with 25-30 terms.',
    features: [
      'Loan amounts $500K to $100MM+',
      '25-30 year amortization periods',
      '50-80% Loan-to-Value (LTV)',
      'Rates: 5-10 year Treasury + 3.5% to 7%',
      'Interest-Only Bridge Loan Options',
      'Options available in all 50 states'
    ]
  },
  {
    id: 'unsecured-debt',
    title: 'Unsecured & Sub-Debt Loans',
    shortDesc: 'Obtain timely working capital without leveraging any collateral or accepting lien filings through unsecured and subordinated debt.',
    fullDesc: 'Mezzanine Financing, or subordinated debt, offers a unique funding option that sits behind senior debt in repayment priority during liquidation or bankruptcy. Due to its lower claim on assets, it carries higher risk, requiring lenders to charge relatively higher interest rates.',
    features: [
      'Loan amounts from $250K to $20MM',
      'Terms span 12-60 months',
      'Lends at 1-5 times EBITDA',
      'Interest: Prime + 4% to 8%',
      'Options or warrants may apply',
      'Available in the USA only'
    ]
  },
  {
    id: 'sba-loans',
    title: 'Small Business Administration Loans',
    shortDesc: 'Tap into lower-interest and longer-term loans and lines of credit in Federal SBA programs for working capital & real estate financing.',
    fullDesc: 'SBA Loans foster small business growth by offering government-backed guarantees on loans from banks or credit unions. This support reduces lenders\' risk, enabling businesses to secure essential capital. With options like the versatile 7(a) Loan for various needs, the 504 Loan for asset purchases, and the Express Loans for quick funding, SBA Loans cater to diverse business requirements.',
    features: [
      'Loan amounts from $250K to $5MM+',
      'Typical term up to 10 years',
      'Advance rates based on cash flow and assets',
      'Available exclusively in the USA'
    ]
  }
]

export default function Solutions() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: '#5a6c40' }}>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[400px] py-20 text-center">
            <FadeIn className="text-white max-w-3xl">
              <Heading as="h1" size="h1" color="white" className="mb-6">
                The Right Funding for Your Business
              </Heading>
              <Text size="lg" className="text-white/90">
                Explore our comprehensive range of creative working capital solutions designed to meet your business's unique needs.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Solutions Overview with Contact Form */}
      <Section background="white" className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Solutions List */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="mb-12">
                  <Heading as="h2" size="h2" className="text-olive-900">
                    <span className="text-olive-900">Explore Our Options for</span>
                    <br />
                    <span className="text-gold-500">Creative Working Capital</span>
                  </Heading>
                </div>

                <StaggerContainer className="space-y-6">
                  {fundingSolutions.slice(0, 6).map((solution) => (
                    <StaggerItem key={solution.id}>
                      <div className="group cursor-pointer">
                        <Heading as="h3" size="h4" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                          {solution.title}
                        </Heading>
                        <Text className="text-gray-600 text-sm leading-relaxed">
                          {solution.shortDesc}
                        </Text>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="bg-gradient-to-br from-gold-400 to-gold-500 rounded-3xl p-8 md:p-12 sticky top-20">
                  <Heading as="h3" size="h2" color="white" className="mb-2">
                    Let's Talk.
                  </Heading>
                  <Text size="lg" color="white" className="mb-8 font-semibold">
                    Please Fill Out This Form To Schedule A Call:
                  </Text>

                  <form className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white ml-1">First Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" 
                        placeholder="First Name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white ml-1">Last Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" 
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white ml-1">Company Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" 
                        placeholder="Company"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white ml-1">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" 
                        placeholder="Email"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white ml-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" 
                        placeholder="Phone"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white ml-1">Capital For *</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" 
                        placeholder="What do you need capital for?"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white ml-1">Message</label>
                      <textarea 
                        rows={3}
                        maxLength={180}
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none" 
                        placeholder="Please add any details you'd like us to know before we speak"
                      ></textarea>
                      <Text className="text-xs text-white/70 text-right">0 / 180</Text>
                    </div>

                    <Button variant="gold" size="lg" className="w-full mt-6 bg-white text-gold-500 hover:bg-gray-100">
                      Get Started
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Serve Funding Section */}
      <Section background="gray" className="py-16">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <Heading as="h2" size="h2" className="mb-4 text-olive-900">
                Why Choose <span className="text-gold-500">Serve Funding?</span>
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-olive-900" fill="currentColor" />
                  </div>
                  <Heading as="h3" size="h3" className="mb-4 text-olive-900">
                    Tailored Solutions
                  </Heading>
                  <Text className="text-gray-600">
                    Every business is unique. Our funding options are customized to your specific needs.
                  </Text>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-olive-900" fill="currentColor" />
                  </div>
                  <Heading as="h3" size="h3" className="mb-4 text-olive-900">
                    Expert Guidance
                  </Heading>
                  <Text className="text-gray-600">
                    Our team has years of experience in structuring financing that drives growth.
                  </Text>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-olive-900" fill="currentColor" />
                  </div>
                  <Heading as="h3" size="h3" className="mb-4 text-olive-900">
                    Flexible Terms
                  </Heading>
                  <Text className="text-gray-600">
                    We offer flexible terms that adapt as your business evolves.
                  </Text>
                </Card>
              </FadeIn>
            </div>
          </FadeIn>
        </Container>
      </Section>
      {/* Detailed Solutions Section */}
      <Section background="white" className="py-20">
        <Container>
          <StaggerContainer className="space-y-24">
            {fundingSolutions.map((solution, index) => (
              <StaggerItem key={solution.id} className="scroll-mt-24">
                <div id={solution.id} style={{ scrollMarginTop: LAYOUT.scrollMarginTop }} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2 lg:direction-rtl' : ''}`}>
                  {/* Text Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Heading as="h3" size="h2" className="mb-6 text-olive-900">
                      <span className="text-olive-900">{solution.title}</span>
                    </Heading>
                    <Text className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {solution.fullDesc}
                    </Text>

                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="p-1 bg-gold-500/20 rounded-full mt-1">
                            <CheckCircle size={16} className="text-olive-900 flex-shrink-0" fill="currentColor" />
                          </div>
                          <Text className="text-gray-700">{feature}</Text>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className={`relative h-96 bg-gradient-to-br from-olive-800 to-olive-700 rounded-3xl overflow-hidden group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 
                          ? '1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                          : index === 1
                          ? '1460925895917-adc19c6ffcc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                          : index === 2
                          ? '1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                          : index === 3
                          ? '1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                          : index === 4
                          ? '1504384308090-fb894fdccdfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                          : '1460925895917-adc19c6ffcc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                      }`}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 to-transparent"></div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <IntroCallForm />
    </div>
  )
}
