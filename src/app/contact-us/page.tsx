import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin
} from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  SocialIcon
} from '@/components/ui'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { IntroCallForm } from '@/components/Forms'

export default function ContactUs() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <HeroFadeIn
        title="Contact Us"
        subtitle="Contact Serve Funding for expert working capital solutions. Our team of funding specialists provides personalized advisory for businesses seeking $250K-$100MM in creative financing. We specialize in asset-based lending, invoice factoring, equipment leasing, PO financing, and government contract funding for mid-market companies."
      />

      {/* Main Contact Info Section */}
      <Section>
        <Container>
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <Heading size="h2" className="mb-6 text-olive-900">
              We're Here to Serve Your Business Growth
            </Heading>
            <Text size="lg" className="text-gray-700">
              We believe that great relationships start with a conversation. Whether you have questions about our services, need assistance with financing, or want to explore partnership opportunities, our team is here to help. Reach out to us using the contact information below, and we'll get back to you as soon as possible.
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                content: '3101 Cobb Pkwy SE, Ste 124',
                subContent: 'Atlanta, Georgia 30339, US'
              },
              {
                icon: Phone,
                title: 'Phone Number',
                content: '+1 (770) 820-7409',
                subContent: 'Speak directly with a funding advisor'
              },
              {
                icon: Mail,
                title: 'Email Address',
                content: 'michael@servefunding.com',
                subContent: 'For general inquiries and support'
              }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <Card className="text-center h-full flex flex-col items-center justify-center group hover:bg-[#D3CE75] transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-olive-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                    <item.icon size={32} className="text-[#D3CE75] group-hover:text-olive-900 transition-colors" />
                  </div>
                  <Heading size="h3" className="mb-2 text-olive-900 group-hover:text-olive-900 transition-colors">
                    {item.title}
                  </Heading>
                  <Text className="text-gray-700 group-hover:text-gray-700 transition-colors font-semibold mb-2">
                    {item.content}
                  </Text>
                  <Text className="text-sm text-gray-600 group-hover:text-gray-600 transition-colors">
                    {item.subContent}
                  </Text>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Schedule Consultation Section */}
      <IntroCallForm
        title="Schedule a Consultation"
        subtitle="Ready to discuss your business financing needs? Schedule a free consultation with one of our funding experts. Simply fill out the form below, and we'll get in touch to arrange a time that works for you."
      />

      {/* Social Media & Partnerships Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <FadeIn>
              <Card className="h-full p-8">
                <Heading size="h3" className="mb-4 text-olive-900">
                  Connect With Us On Social Media
                </Heading>
                <Text className="text-gray-700 mb-6">
                  Stay up-to-date with the latest news, funding tips, and success stories by following us on social media.
                </Text>
                <div className="flex gap-4">
                  <SocialIcon
                    href="https://www.facebook.com/ServeFunding/"
                    icon={Facebook}
                    label="Facebook"
                  />
                  <SocialIcon
                    href="https://www.linkedin.com/company/serve-funding/"
                    icon={Linkedin}
                    label="LinkedIn"
                  />
                </div>
              </Card>
            </FadeIn>

            <FadeIn>
              <Card className="h-full p-8">
                <Heading size="h3" className="mb-4 text-olive-900">
                  Partnership Opportunities
                </Heading>
                <Text className="text-gray-700 mb-6">
                  Are you a banker, accountant, or financial advisor interested in partnering with Serve Funding? We'd love to discuss how we can collaborate to better serve your clients.
                </Text>
                <Text className="text-gold-500 font-semibold">
                  Contact us at{' '}
                  <a href="mailto:michael@servefunding.com" className="hover:text-olive-900">
                    michael@servefunding.com
                  </a>
                </Text>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </div>
  )
}
