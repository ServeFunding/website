import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  FadeIn
} from '@/components/ui'
import { BlogHeroFadeIn } from '@/components/blog-hero-fade-in'
import { Breadcrumb } from '@/components/breadcrumb'
import { CTA } from '@/components/cta'

const blogMetadata = {
  id: "steel-contractor-bank-exit",
  title: "$550K in Bridge Capital - Steel Framing Contractor",
  subtitle: "How One Referral Prevented a Costly Bank Exit Crisis",
  excerpt: "A specialty steel framing contractor lost their $500K bank line with four months to repay. Traditional financing rejected him. But one banker knew someone who could help. Here's how a $550K introduction turned a crisis into an opportunity—and made the banker the hero.",
  author: "Michael Kodinsky",
  date: "April 24, 2025",
  category: "Case Study",
}

export const metadata = {
  title: `${blogMetadata.title} | Serve Funding`,
  description: blogMetadata.excerpt,
  openGraph: {
    title: blogMetadata.title,
    description: blogMetadata.excerpt,
    url: `https://servefunding.com/blog/${blogMetadata.id}`,
    type: "article",
  },
}

export default function BlogPost() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'When a Bank Says No' }
      ]} />

      {/* Hero Section */}
      <BlogHeroFadeIn
        title={blogMetadata.title}
        subtitle={blogMetadata.subtitle}
        date={blogMetadata.date}
        author={blogMetadata.author}
        authorTitle="Founder & CEO"
        authorPhoto="/Michael Headshot.webp"
        category={blogMetadata.category}
      />

      {/* Main Article Content */}
      <Section background="white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto prose prose-lg">
            {/* Introduction */}
            <div className="mb-12">
              <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                A phone call at the wrong time can destroy a business. But a phone call from the right person at a critical moment can save it.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                This is a story about a specialty steel contractor who received one of those critical calls. Not from a savior with unlimited resources—but from a banker who knew someone who could help.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed">
                That referral turned a crisis into an opportunity. And it shows what servant leadership looks like in banking.
              </Text>
            </div>

            {/* Section 1: The Crisis */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Four Months to Find $500K
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                A Georgia-based specialty steel framing contractor was running a $5MM revenue business. They had customers. They had work. They had a solid operation.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Then their bank made a decision that blindsided them: your $500K line of credit is being terminated. You have four months to repay the balance in full.
              </Text>

              <Card className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                <Text className="text-gray-700 leading-relaxed italic">
                  "A timely referral turns a client's roadblock into a runway—and elevates you, their advisor, as a servant leader."
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed mb-6">
                This wasn't a warning. It was a deadline. For a contractor managing payroll, vendor payments, and ongoing project work, losing $500K in working capital with four months' notice wasn't just bad—it was potentially catastrophic.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                The contractor panicked. They approached their second bank for refinancing. They were direct about their situation and transparent about their needs.
              </Text>
            </div>

            {/* Section 2: The Traditional No */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Why Traditional Lenders Said No
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The second bank listened carefully. Then they delivered the verdict: we'd like to help, but we can't. Your last tax return showed a loss. Our underwriting won't approve this.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Here's the irony: a $5MM revenue contractor generating work and cash flow was being rejected for a single-year loss on a tax return. The numbers didn't match the business reality. But traditional lenders operate on systems and boxes, not business judgment.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The contractor was running out of time and options. They had maybe two months left to find another solution before the original bank's deadline started eating into their operational capital.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                At that moment, someone decided to make a phone call that changed everything.
              </Text>
            </div>

            {/* Section 3: The Referral */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Banker Who Knew Someone
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                A regional banker in Georgia—someone who actually understood this contractor's business—decided not to let the traditional box define the outcome. Instead, they made an introduction to Serve Funding.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                This banker didn't just pass along a name. They made a call on behalf of the client. They explained the situation. They vouched for the contractor's character and business fundamentals. They positioned Serve Funding as the right partner for a situation that conventional lenders couldn't solve.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                That's the call that saved this contractor's business.
              </Text>

              <Heading size="h3" className="text-olive-900 mb-4">
                The Solution
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                We moved fast. Within weeks, we structured a $300K unsecured term loan with monthly payments at mid-teens rates. This wasn't the cheapest capital ever offered, but it was available. It was responsive. And it covered the first portion of the bank payoff plus key vendor payables.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                A few months later, as the contractor stabilized operations and we built confidence in the relationship, we delivered an additional $250K. This final piece allowed them to completely resolve the outstanding bank balance and move forward with a clear capital structure.
              </Text>

              <div className="space-y-3 mb-8 text-gray-700 pl-6">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Month 1:</span>
                  <span>$300K unsecured term loan (monthly payments, mid-teens rate)</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Month 3-4:</span>
                  <span>$250K additional capital to complete bank payoff</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Total Bridge Capital:</span>
                  <span>$550K deployed</span>
                </div>
              </div>
            </div>

            {/* Section 4: The Real Winner */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Who Really Won Here
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Obviously, the contractor won. They kept their business intact, maintained payroll, stayed current with vendors, and resolved a crisis that could have forced a liquidation.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                But here's who else won: the banker.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                A few months after Serve Funding introduced the first tranche of capital, the contractor opened their full deposit and treasury relationship with that second bank. Not because the bank financed them (we did). But because the bank showed up as their advisor when it mattered most.
              </Text>

              <Card className="p-8 bg-gray-50 border-l-4 border-olive-900 mb-8">
                <Text className="text-gray-700 leading-relaxed">
                  That banker made a referral that solved the contractor's crisis. And in doing so, they positioned themselves as a trusted advisor for the next decade of the contractor's growth.
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed">
                That's the paradox of servant leadership in lending: sometimes the best way to win a client is to admit what you can't do—and know who can.
              </Text>
            </div>

            {/* Section 5: What Comes Next */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                From Crisis to Opportunity
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The contractor isn't in crisis mode anymore. They're in growth mode. And Serve Funding is continuing to evolve the capital structure to match that growth.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                We're currently underwriting a receivables-based revolver as the contractor lands larger bids. This will give them working capital that scales automatically with their order book—exactly what a growing steel contractor needs.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                And when a 5-year note matures on the company's mixed-use property, the contractor is planning a refinance. The new banking partner has first right of refusal.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                This is how relationships evolve. A crisis becomes an opportunity. A one-time solution becomes a long-term partnership. And a banker becomes a hero.
              </Text>
            </div>

            {/* Section 6: Responsibility in Action */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Responsibility: The Core Value That Makes This Possible
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                At Serve Funding, we don't just fund deals. We own outcomes. And that's what responsibility means to us.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                When that Georgia banker made the referral, they trusted us to:
              </Text>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Deliver on our word</span> to move fast and solve the problem</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Stay transparent</span> with both the banker and the contractor throughout the process</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Position the banker as the hero,</span> not compete for the relationship</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Remain accountable</span> when the deal required adjustments or follow-up</Text>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                That's not just operating philosophy. That's responsibility in action. And it's why bankers keep referring clients to us.
              </Text>
            </div>

            {/* Section 7: The Invitation */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                When Your Client Needs a Referral Partner
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're a banker or advisor with clients facing unexpected capital challenges. If you've ever wished you had a partner you could refer to who would make you look like the hero. If you want to elevate your advisory relationship by knowing when to say "I know someone who can help"—that's us.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                We don't compete for your clients. We strengthen your relationships by solving problems you can't, and positioning you as the advisor who had their back when it mattered most.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                Let's create more moments like this one. Together.
              </Text>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Be the Advisor Your Clients Remember"
        text="When your clients face capital challenges outside your lending box, you need a partner who delivers results with responsibility. Let's discuss how Serve Funding can strengthen your advisory relationships. Schedule a free partner call."
        buttonText="Book a Partner Call"
        href="/contact-us"
        source="blog-steel-contractor-referral"
        useBG={true}
      />
    </div>
  )
}
