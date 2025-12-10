import dynamic from 'next/dynamic'
import {
  Section,
  Container,
  Heading,
  Text,
  FadeIn,
} from '@/components/ui'

const PartnerInquiryForm = dynamic(() => import('@/components/Forms').then(mod => ({ default: mod.PartnerInquiryForm })), {
  loading: () => <div className="h-96 bg-gray-100 rounded-lg animate-pulse" />
})

export const metadata = {
  title: "Serve Funding Empowers Bankers | Serve Funding",
  description: "Download our overview and explore how Serve Funding helps you deliver funding solutions quickly and confidently.",
}

export default function BankersPage() {
  return (
    <Section background="background" className="pt-20 pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <Heading size="h1" className="mb-6">
              Serve Funding Empowers Bankers
            </Heading>
            <Text className="text-lg text-gray-600 mb-6">
              Download this overview and explore how Serve Funding helps you deliver funding solutions quickly and confidently.
            </Text>
            <Text className="text-lg text-gray-600">
              Bankers are trusted advisors — but when a client or prospect needs financing outside traditional lending, having the right options at your fingertips matters. Our 1‑page guide makes it simple to understand where Serve Funding fits in, so you can provide fast, flexible solutions and keep your client or prospective client relationship strong.
            </Text>
          </FadeIn>

          <FadeIn delay={0.1}>
            <PartnerInquiryForm />
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
