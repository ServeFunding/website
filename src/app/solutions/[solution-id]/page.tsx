import { fundingSolutions } from '@/data/solutions'
import { blogPosts } from '@/data/blog-posts'
import { getOrganizationSchema, getFinancialServiceSchema } from '@/lib/schema-generators'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { getTitleAsString } from '@/lib/solution-helpers'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  StaggerContainer
} from '@/components/ui'
import { FeatureList } from '@/components/FeatureList'
import { CTA } from '@/components/cta'
import { FAQSectionWithSchema } from '@/components/FAQSection'
import { Breadcrumb } from '@/components/breadcrumb'
import { SolutionDetailClient } from './client'
import type { Metadata } from 'next'

interface SolutionDetailPageProps {
  params: Promise<{
    'solution-id': string
  }>
}

export async function generateMetadata({ params }: SolutionDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const solution = fundingSolutions.find(s => s.id === resolvedParams['solution-id'])

  if (!solution) {
    return {
      title: 'Solution Not Found | Serve Funding',
    }
  }

  const titleStr = getTitleAsString(solution.title)
  return {
    title: `${titleStr} | Serve Funding`,
    description: solution.shortDesc,
    openGraph: {
      title: `${titleStr} | Serve Funding`,
      description: solution.shortDesc,
      url: `https://servefunding.com/solutions/${solution.id}`,
      type: 'website',
    },
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
      {/* Schemas */}
      <SchemaRenderer
        schemas={[
          getFinancialServiceSchema({
            id: solution.id,
            title: getTitleAsString(solution.title),
            shortDesc: solution.shortDesc,
            fullDesc: solution.fullDesc,
            features: solution.features,
            ratesAndTerms: solution.ratesAndTerms,
          }),
        ]}
      />

      <SolutionDetailClient solution={solution}>
        <Breadcrumb items={[
          { label: 'Solutions', href: '/solutions' },
          { label: getTitleAsString(solution.title) }
        ]} />

        {/* Header Section with Image */}
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto">
              <Heading size="h1" className="mb-4">
                {`What ${getTitleAsString(solution.title).endsWith('s') ? 'are' : 'is'} ${getTitleAsString(solution.title)}?`}
              </Heading>

              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block bg-olive-green text-white text-sm font-semibold px-4 py-2 rounded">
                  {solution.category}
                </span>
              </div>

              {/* Solution Image */}
              {solution.image && (
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg h-80">
                  <img
                    src={solution.image}
                    alt={getTitleAsString(solution.title)}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Answer Capsule - AI-optimized definition */}
              <div className="p-6 mb-8 rounded-lg bg-gold-light/10 border-l-4 border-olive-green">
                <Text size="lg">
                  {solution.whatIs}
                </Text>
              </div>

              {/* Key Details Table */}
              {solution.ratesAndTerms && (
                <table className="w-full border-collapse border border-olive-green">
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
                    {solution.bestFor && (
                      <tr>
                        <td className="border border-olive-green p-4 font-semibold text-olive-green">Best For</td>
                        <td className="border border-olive-green p-4">
                          {solution.bestFor.join(', ')}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </Container>
        </Section>

        {/* Full Description Section */}
        <Section background="gray">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Heading size="h2" className="mb-4">How It Works</Heading>
              <Text size="lg">
                {solution.fullDesc}
              </Text>
            </div>
          </Container>
        </Section>

        {/* Features/Benefits Section */}
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto">
              <Heading size="h2" className="mb-6">Key Features & Benefits</Heading>
              <FeatureList features={solution.features} />
            </div>
          </Container>
        </Section>

        {/* Rates & Terms Section */}
        {solution.ratesAndTerms && (
          <Section background="gray">
            <Container>
              <div className="max-w-4xl mx-auto">
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
              </div>
            </Container>
          </Section>
        )}

        {/* FAQ Section - AIEO Optimized */}
        {solution.commonQuestions && solution.commonQuestions.length > 0 && (
          <FAQSectionWithSchema
            title={`${getTitleAsString(solution.title)} - Common Questions`}
            description={`Get answers to the most common questions about ${getTitleAsString(solution.title).toLowerCase()}`}
            faqs={solution.commonQuestions}
            background="white"
            schemaName={getTitleAsString(solution.title)}
          />
        )}

        {/* CTA Button Section */}
        <CTA
          title="Ready to Get Started?"
          text={`Learn more about ${getTitleAsString(solution.title)} and how it can help your business grow. Schedule a consultation with one of our funding experts today.`}
          buttonText="Let's Talk!"
          source={`solution-${solution.id}`}
          useBG
        />

        {/* Qualification Criteria */}
        {solution.qualificationCriteria && Object.keys(solution.qualificationCriteria).length > 0 && (
          <Section background="gray">
            <Container>
              <div className="max-w-4xl mx-auto">
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
              </div>
            </Container>
          </Section>
        )}

        {/* Related Blog Posts / Case Studies */}
        {(() => {
          const relatedPosts = blogPosts.filter(post =>
            post.relatedSolutions?.includes(solution.id)
          ).slice(0, 3)

          return relatedPosts.length > 0 ? (
            <Section background="gray">
              <Container>
                <div className="max-w-4xl mx-auto">
                  <Heading size="h2" className="mb-4">See It In Action</Heading>
                  <Text size="lg" className="text-gray-700 mb-8">
                    Real companies using {solution.title} to solve their capital challenges
                  </Text>
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map(post => (
                      <Link key={post.id} href={`/blog/${post.id}`} className="group h-full">
                        <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white flex flex-col">
                          <Heading size="h3" className="mb-3 text-olive-900 group-hover:text-gold-500 transition-colors line-clamp-2">
                            {post.title}
                          </Heading>
                          <Text className="text-gray-700 text-sm mb-4 flex-grow">
                            {post.excerpt}
                          </Text>
                          <Text className="text-xs text-gray-600 mb-4">
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </Text>
                          <div className="flex items-center gap-2 text-gold-500 group-hover:gap-3 transition-all">
                            <span className="text-sm font-semibold">Read Story</span>
                            <ChevronRight size={16} />
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </StaggerContainer>
                </div>
              </Container>
            </Section>
          ) : null
        })()}

        {/* Related Solutions */}
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto">
              <Heading size="h2" className="mb-6">Other Funding Solutions</Heading>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {fundingSolutions
                  .filter(s => s.id !== solution.id)
                  .slice(0, 3)
                  .map(relatedSolution => (
                    <Link key={relatedSolution.id} href={`/solutions/${relatedSolution.id}`} className="h-full block">
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
                  ))}
              </StaggerContainer>
            </div>
          </Container>
        </Section>

        {/* Navigation Back */}
        <Section>
          <Container>
            <div className="text-center">
              <Link
                href="/solutions"
                className="inline-block hover:underline font-semibold text-olive-green"
              >
                ← Back to All Solutions
              </Link>
            </div>
          </Container>
        </Section>
      </SolutionDetailClient>
    </main>
  )
}
