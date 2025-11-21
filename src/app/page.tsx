'use client'

import {
  Search,
  Clock,
  Shield,
  Leaf,
  ChevronLeft,
  ChevronRight
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
  StaggerItem,
  BRAND_COLORS
} from '@/components/design-system'

export default function Home() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <FadeIn className="px-4 sm:px-6 lg:px-8 py-12 lg:py-0 z-10">
              <Heading as="h1" size="h1" className="mb-6">
                <span className="block">Creative Working Capital</span>
                <span className="text-gold-500 block">Empowering Entrepreneurs</span>
              </Heading>
              <Text size="lg" className="mb-8 max-w-lg">
                Because your company is unique, you want partners who truly understand your story and align with your objectives.
              </Text>
              <div className="flex gap-4">
                {/* Slider Controls Placeholder - Visual only as per screenshot */}
                <button className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-olive-900 hover:text-white transition-all duration-300">
                  <ChevronLeft size={24} />
                </button>
                <button className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-olive-900 transition-all duration-300">
                  <ChevronRight size={24} />
                </button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full min-h-[400px] lg:min-h-[700px] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Construction workers"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient Overlay for text readability if needed, though design shows clean image */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:via-transparent"></div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Value Props Section */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-20">
            <Heading as="h2" size="h2" className="mb-3">Need Business Growth Capital?</Heading>
            <Heading as="h2" size="h2" color="gold">We Are Here to Serve You.</Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Transparent",
                icon: Search,
                desc: "We value honest, open communication. We believe that transparency is where trust-based relationships begin."
              },
              {
                title: "Timely",
                icon: Clock,
                desc: "Time is your most valuable resource. We invest our time and expertise to ensure an efficient process."
              },
              {
                title: "Trusted",
                icon: Shield,
                desc: "We represent your firm to our trusted lender partners to protect your best interests."
              }
            ].map((item, index) => (
              <StaggerItem key={index} className={index === 1 ? "md:-translate-y-6 relative z-10" : ""}>
                <Card className="flex flex-col items-center text-center h-full group transition-all duration-300 hover:-translate-y-2 bg-white hover:bg-opacity-100" style={{ backgroundColor: 'white' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND_COLORS.primary.lightGreen; const circle = e.currentTarget.querySelector('[data-flip-circle]'); if (circle) (circle as HTMLElement).style.transform = 'rotateY(180deg)' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; const circle = e.currentTarget.querySelector('[data-flip-circle]'); if (circle) (circle as HTMLElement).style.transform = 'rotateY(0deg)' }}>
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all duration-500" style={{ backgroundColor: BRAND_COLORS.primary.darkGreen }} data-flip-circle>
                    <item.icon size={40} className="transition-colors" style={{ color: BRAND_COLORS.primary.lightGreen }} strokeWidth={1.5} />
                  </div>
                  <Heading as="h3" size="h3" className="mb-4 text-olive-900">{item.title}</Heading>
                  <Text className="text-gray-600 group-hover:text-olive-900 transition-colors font-medium">
                    {item.desc}
                  </Text>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Funding Solutions Section */}
      <Section background="gray">
        <Container>
          <FadeIn className="text-center mb-20">
            <Heading as="h2" size="h1" className="mb-4">
              <span className="text-gold-500">Funding Solutions From</span>
              <br />
              <span className="text-olive-900">$250K to $100MM</span>
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
            {[
              "Financing Periods Of Rapid Growth",
              "The Bank Says \"No,\" Or Calls Your Line",
              "Fund New Contracts & Purchase Orders",
              "Unsecured Loans & Lines Of Credit",
              "Bridge Funding For Short-Term Gaps",
              "M & A: Capital For Strategic Acquisitions",
              "Longer Payment Terms: Net-60, Net-90 +",
              "Working Capital For Seasonal Shortfalls",
              "MCA (Cash Advance) Consolidations",
              "Cover Unexpected Payroll Shortfalls"
            ].map((item, index) => (
              <StaggerItem key={index} className="flex items-start gap-4 group">
                <div className="mt-1 p-1 bg-gold-500/20 rounded-full">
                  <Leaf className="text-olive-900 flex-shrink-0" size={16} fill="currentColor" />
                </div>
                <span className="text-xl font-semibold text-gray-800 group-hover:text-olive-900 transition-colors">{item}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Industries Section */}
      <Section>
        <Container>
          <FadeIn>
            <Heading as="h3" size="h2" className="mb-16 text-center">Industries Served</Heading>
          </FadeIn>
          <div className="space-y-6">
            {[
              { row: [0, 1, 2, 3, 4], direction: "left" },
              { row: [5, 6, 7, 8, 9], direction: "right" },
              { row: [10, 11, 12, 13, 14], direction: "left" }
            ].map((rowData, rowIndex) => (
              <div key={rowIndex} className="flex gap-4 justify-center flex-wrap">
                {rowData.row.map((industryIndex) => {
                  const industries = [
                    { name: "Manufacturing", desc: "Purchase raw materials upfront. Bridge cash gaps during long production cycles." },
                    { name: "Wholesale & Distribution", desc: "Buy inventory in bulk to meet demand. Smooth cash flow between buying and selling cycles." },
                    { name: "Government Contractors", desc: "Cover expenses while awaiting government payments. Maintain operations during long billing cycles." },
                    { name: "Staffing Firms", desc: "Pay staff before clients pay invoices. Keep talent onboard without cash flow issues." },
                    { name: "Food & Beverage", desc: "Purchase perishables upfront. Navigate tight margins and fluctuating demand." },
                    { name: "Advertising & Media", desc: "Fund campaigns before client payments arrive. Keep creative projects on track." },
                    { name: "E-Commerce & Retail", desc: "Stock up on inventory ahead of sales. Manage cash flow during seasonal peaks." },
                    { name: "Consumer Products", desc: "Cover production and marketing costs upfront. Keep products flowing to market." },
                    { name: "Consulting & IT Services", desc: "Pay staff before clients pay. Maintain operations during long project cycles." },
                    { name: "Cleaning & Janitorial", desc: "Cover payroll and supplies upfront. Keep services running smoothly." },
                    { name: "Security Guard Services", desc: "Pay guards before clients pay. Ensure continuous protection services." },
                    { name: "Telecommunications & IoT", desc: "Invest in equipment and infrastructure upfront. Keep up with fast-paced tech demands." },
                    { name: "Construction", desc: "Purchase materials and equipment upfront. Manage cash flow during long project timelines." },
                    { name: "Transportation & Logistics", desc: "Cover fuel and maintenance costs. Bridge cash flow gaps between deliveries and payments." },
                    { name: "Healthcare Services", desc: "Fund operations and payroll ahead of reimbursements. Invest in equipment and supplies." }
                  ]
                  const industry = industries[industryIndex]
                  return (
                    <div key={industry.name} className="group relative flex-1 min-w-[140px] h-[100px]">
                      <div className="absolute inset-0 bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center justify-center text-center text-gray-700 font-medium cursor-pointer transition-all duration-300 group-hover:shadow-lg group-hover:border-gold-500 group-hover:text-olive-900 group-hover:scale-125 group-hover:z-10">
                        <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 line-clamp-2">
                          {industry.name}
                        </div>
                        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                          <p className="font-semibold text-sm text-olive-900 mb-2">{industry.name}</p>
                          <p className="text-xs text-gray-600 leading-snug">{industry.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="gray">
        <Container>
          <FadeIn>
            <Heading as="h3" size="h2" className="mb-16 text-center">Outlining Our Process</Heading>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

            {[
              { 
                step: 1, 
                title: "Discovery", 
                desc: "We genuinely care and listen to your needs and objectives so our process stays strategic to your growth goals." 
              },
              { 
                step: 2, 
                title: "Diligence", 
                desc: "We lead a comprehensive capital search and advise you on your evolving options for short and long-term growth." 
              },
              { 
                step: 3, 
                title: "Delivery", 
                desc: "We take responsibility to guide your lender engagements all the way to a timely closing. We are here to serve you." 
              }
            ].map((item) => (
              <StaggerItem key={item.step} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-gold-500 rounded-full flex items-center justify-center text-olive-900 text-3xl font-bold mb-8 shadow-lg group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                  {item.step}
                </div>
                <Heading as="h4" size="h3" color="dark" className="mb-3">{item.title}</Heading>
                <Text size="lg">{item.desc}</Text>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Successful Client Fundings Section */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-16">
            <Heading as="h2" size="h2">Successful Client Fundings</Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Acquisition Funding',
                desc: 'An established, Ohio-based tech services firm was looking to acquire a staffing firm specializing in their field to empower growth in the labor shortage of 2022.'
              },
              {
                title: 'Payroll Save',
                desc: 'A growing, Atlanta, GA-based, niche services firm was facing an unexpected cash flow shortfall due to a large receivable their customer delayed paying.'
              },
              {
                title: 'Short-Term Cashflow',
                desc: 'Florida-based, $50MM transportation company sought help from their banker for an unexpected scenario'
              },
              {
                title: 'Partner Buy-Out',
                desc: 'Two specialty construction firms based in Georgia and South Carolina, respectively, came together years ago to join forces.'
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <Card className="flex flex-col h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <Heading as="h3" size="h3" className="mb-4 text-olive-900 group-hover:text-gold-500 transition-colors">
                    {item.title}
                  </Heading>
                  <Text className="text-gray-600 group-hover:text-gray-700 transition-colors flex-1">
                    {item.desc}
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

      {/* Contact Section */}
      <Section background="olive" className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Leaf size={400} className="absolute -right-20 -bottom-20 text-white transform rotate-45" />
            <Leaf size={200} className="absolute left-10 top-10 text-white transform -rotate-12" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center">
              <Heading as="h3" size="h1" color="white" className="mb-12">Let's Talk.</Heading>
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
                    <label className="text-sm font-medium text-gold-500 ml-1">Email</label>
                    <input type="email" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gold-500 ml-1">Phone</label>
                    <input type="tel" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gold-500 ml-1">Capital For</label>
                  <input type="text" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gold-500 ml-1">Message</label>
                  <textarea rows={4} className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"></textarea>
                </div>

                <Button variant="light" size="lg" className="w-full">Get Started</Button>
              </form>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </div>
  )
}
