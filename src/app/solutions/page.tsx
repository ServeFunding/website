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
  LAYOUT,
  HeroFadeIn
} from '@/components/design-system'
import { fundingSolutions } from '@/data/company-info'
import Link from 'next/link'

export default function Solutions() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <HeroFadeIn
        title="The Right Funding for Your Business"
        subtitle="Serve Funding offers 10+ working capital solutions including asset-based lending, invoice factoring, equipment leasing, PO financing, government contracts, inventory financing, and unsecured loans. Funding range: $250K-$100MM. Fast decisions within 24 hours. Trusted by manufacturers, distributors, and professional services firms."
      />

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

                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="p-1 bg-gold-500/20 rounded-full mt-1">
                            <CheckCircle size={16} className="text-olive-900 flex-shrink-0" fill="currentColor" />
                          </div>
                          <Text className="text-gray-700">{feature}</Text>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link to Detail Page */}
                    <Link href={`/solutions/${solution.id}`}>
                      <Button variant="default" className="flex items-center gap-2">
                        Learn More <ChevronRight size={18} />
                      </Button>
                    </Link>
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
