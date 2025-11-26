import { fundingSolutions, companyInfo } from '@/data/company-info'
import { getOrganizationSchema, getFinancialServiceSchema } from '@/lib/schema-generators'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  StaggerContainer,
  StaggerItem,
  CTA
} from '@/components/design-system'

interface SolutionDetailPageProps {
  params: {
    'solution-id': string
  }
}

export async function generateStaticParams() {
  return fundingSolutions.map((solution) => ({
    'solution-id': solution.id,
  }))
}

export default async function SolutionDetailPage({ params }: SolutionDetailPageProps) {
  const resolvedParams = await params
  const solution = fundingSolutions.find(s => s.id === resolvedParams['solution-id'])

  if (!solution) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Global Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getOrganizationSchema({
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
          ),
        }}
      />

      {/* Solution-Specific Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getFinancialServiceSchema({
              id: solution.id,
              title: solution.title,
              shortDesc: solution.shortDesc,
              fullDesc: solution.fullDesc,
              features: solution.features,
              ratesAndTerms: solution.ratesAndTerms,
            })
          ),
        }}
      />

      <Section>
        <Container>
          <article className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="mb-8 text-sm text-gray-600">
              <Link href="/solutions" className="hover:underline text-olive-green">
                Solutions
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-semibold">{solution.title}</span>
            </nav>

            {/* Header Section */}
            <section className="mb-12">
              <Heading size="h1" className="mb-4">
                {`What ${solution.title.endsWith('s') ? 'are' : 'is'} ${solution.title}?`}
              </Heading>

              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block bg-olive-green text-white text-sm font-semibold px-4 py-2 rounded">
                  {solution.category}
                </span>
              </div>

              {/* Answer Capsule - AI-optimized definition */}
              <div className="p-6 mb-8 rounded-lg bg-gold-light/10 border-l-4 border-olive-green">
                <Text size="lg">
                  {solution.whatIs}
                </Text>
              </div>

              {/* Key Details Table */}
              <table className="w-full mb-12 border-collapse border border-olive-green">
                <tbody>
                  <tr className="bg-gold-light/20">
                    <td className="border border-olive-green p-4 font-semibold text-olive-green">Typical Amount</td>
                    <td className="border border-olive-green p-4">
                      {solution.ratesAndTerms.minAmount} - {solution.ratesAndTerms.maxAmount}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-olive-green p-4 font-semibold text-olive-green">Cost</td>
                    <td className="border border-olive-green p-4">
                      {solution.ratesAndTerms.interestRate ||
                       solution.ratesAndTerms.factorFeeRange ||
                       solution.ratesAndTerms.monthlyFactorRate}
                    </td>
                  </tr>
                  <tr className="bg-gold-light/20">
                    <td className="border border-olive-green p-4 font-semibold text-olive-green">Funding Timeline</td>
                    <td className="border border-olive-green p-4">
                      {solution.ratesAndTerms.closingTimeframe ||
                       solution.ratesAndTerms.fundingSpeed ||
                       solution.ratesAndTerms.fundingTime}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-olive-green p-4 font-semibold text-olive-green">Best For</td>
                    <td className="border border-olive-green p-4">
                      {solution.bestFor.join(', ')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Full Description Section */}
            <section className="mb-12">
              <Heading size="h2" className="mb-4">How It Works</Heading>
              <Text size="lg">
                {solution.fullDesc}
              </Text>
            </section>

            {/* Features/Benefits Section */}
            <section className="mb-12">
              <Heading size="h2" className="mb-6">Key Features & Benefits</Heading>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-1 text-white bg-olive-green">
                      <span className="font-semibold">✓</span>
                    </span>
                    <Text>{feature}</Text>
                  </li>
                ))}
              </ul>
            </section>

            {/* Rates & Terms Section */}
            <section className="mb-12">
              <Heading size="h2" className="mb-6">Rates & Terms</Heading>
              <div className="p-8 rounded-lg bg-gold-light/20 border border-olive-green">
                <table className="w-full">
                  <tbody>
                    {Object.entries(solution.ratesAndTerms).map(([key, value]) => (
                      <tr key={key} className="border-b border-olive-green last:border-b-0">
                        <td className="py-3 font-semibold capitalize text-olive-green">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </td>
                        <td className="py-3 text-right text-gray-700">{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ Section */}
            {solution.commonQuestions && solution.commonQuestions.length > 0 && (
              <section className="mb-12">
                <Heading size="h2" className="mb-6">Common Questions</Heading>
                <div className="space-y-6">
                  {solution.commonQuestions.map((qa, idx) => (
                    <div key={idx} className="pl-6 border-l-4 border-olive-green">
                      <Heading size="h3" className="mb-2">
                        {qa.q}
                      </Heading>
                      <Text>
                        {qa.a}
                      </Text>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Button Section */}
            <CTA
              title="Ready to Get Started?"
              text={`Learn more about ${solution.title} and how it can help your business grow. Schedule a consultation with one of our funding experts today.`}
              buttonText="Schedule Your Consultation"
              source={`solution-${solution.id}`}
            />

            {/* Qualification Criteria */}
            {solution.qualificationCriteria && Object.keys(solution.qualificationCriteria).length > 0 && (
              <section className="mb-12">
                <Heading size="h2" className="mb-6">Who Qualifies?</Heading>
                <div className="p-6 rounded-lg bg-gold-light/10 border border-gold-light/50">
                  <ul className="space-y-3">
                    {Object.entries(solution.qualificationCriteria).map(([key, value]) => (
                      <li key={key}>
                        <Text><span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}{String(value)}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Related Solutions */}
            <section className="mb-12">
              <Heading size="h2" className="mb-6">Other Funding Solutions</Heading>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {fundingSolutions
                  .filter(s => s.id !== solution.id)
                  .slice(0, 3)
                  .map(relatedSolution => (
                    <StaggerItem key={relatedSolution.id}>
                      <Link href={`/solutions/${relatedSolution.id}`} className="h-full block">
                        <Card className="h-full">
                          <Heading size="h3" className="mb-2">
                            {relatedSolution.title}
                          </Heading>
                          <Text size="sm" className="mb-4 line-clamp-2">
                            {relatedSolution.whatIs}
                          </Text>
                          <span className="font-semibold text-sm text-olive-green">Learn More →</span>
                        </Card>
                      </Link>
                    </StaggerItem>
                  ))}
              </StaggerContainer>
            </section>

            {/* Navigation Back */}
            <div className="text-center">
              <Link
                href="/solutions"
                className="inline-block hover:underline font-semibold text-olive-green"
              >
                ← Back to All Solutions
              </Link>
            </div>
          </article>
        </Container>
      </Section>
    </main>
  )
}
