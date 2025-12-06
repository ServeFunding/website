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
  id: "coffee-trader-po-financing",
  title: "Creative Capital: $1MM PO Financing Line for a Coffee Trader",
  subtitle: "When Demand Outpaces Working Capital, The Game Changes",
  excerpt: "A family-owned specialty coffee trader faced an unexpected problem: demand from corporate roasters surged overnight, but their existing $150K facility couldn't keep pace. How we secured $1MM in PO financing to scale their operations and unlock their growth potential.",
  author: "Michael Kodinsky",
  date: "September 2, 2025",
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
        { label: 'The Right Play at the Right Time' }
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
                It's September, which means one thing in this house: football season is here.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                There's something about a fresh start that gets you excited. New season, new momentum, new opportunities. And in business, the best opportunities are the ones where demand shows up faster than you expected—if you have the right partners ready to support your growth.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed">
                This is a story about a family-owned business that got that opportunity. And why having the right capital partner made all the difference.
              </Text>
            </div>

            {/* Section 1: The Opportunity */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Demand Surges Overnight
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                An international specialty coffee trader had built a solid business over the years. They sourced premium green coffee from producers around the world and supplied corporate roasters with exactly what they needed. It was steady, reliable, relationship-based business.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Then something unexpected happened: demand from corporate roasters surged almost overnight.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                This was exactly the kind of problem every founder wants. More orders means more revenue. More customers means more momentum. This was growth.
              </Text>

              <Card className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                <Text className="text-gray-700 leading-relaxed italic">
                  "Growth isn't a Hail Mary; it's a series of right plays made at the right time with the right partners."
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed">
                But growth without working capital isn't growth—it's a stall. And that's exactly where this coffee trader found themselves.
              </Text>
            </div>

            {/* Section 2: The Problem */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Outgrowing Your Limits
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The company had an existing purchase order (PO) facility in place. It had served them well. But like many growing businesses, they'd hit its ceiling: $150,000.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                For a specialty coffee importer managing orders from corporate roasters around the country, $150K wasn't going to cut it anymore. To fulfill these new orders, they needed capital to:
              </Text>

              <div className="space-y-4 mb-8 text-gray-700 pl-6">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">→</span>
                  <span>Pay overseas suppliers without delays</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">→</span>
                  <span>Offset rising tariff costs through bulk order discounts</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">→</span>
                  <span>Keep production moving at the pace the market demanded</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">→</span>
                  <span>Keep customers happy with reliable, on-time delivery</span>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed mb-6">
                They asked their existing lender to increase the facility. The answer was no—the lender wouldn't budge from the $150K cap.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                So they needed a partner who could think bigger. Someone who understood that growth sometimes outpaces your original financing partner's appetite. Someone who could move fast.
              </Text>
            </div>

            {/* Section 3: The Play Call */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Right Partnership at the Right Time
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The specialty coffee importer was introduced to Serve Funding by one of our asset-based lending partners. This partner relationship was the foundation—they knew our track record, our speed, and our ability to structure creative solutions.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                We had something else working in our favor: we leverage relationships with lenders we've worked with for years. In this case, we had an almost 10-year-old relationship with a PO lender who specialized in exactly this kind of scenario.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                We called them. We explained the situation. We vouched for the client's business model and growth trajectory. And leveraging that trust-based relationship, we secured a $1,000,000 Purchase Order facility.
              </Text>

              <Heading size="h3" className="text-olive-900 mb-4">
                What $1MM Unlocked
              </Heading>

              <div className="space-y-3 mb-8 text-gray-700 pl-6">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">✓</span>
                  <span>The ability to pay overseas suppliers without delays—maintaining supply chain reliability</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">✓</span>
                  <span>Access to bulk order discounts from suppliers—offsetting the tariff cost pressures everyone was facing</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">✓</span>
                  <span>The confidence to take on bigger orders—scaling with customer demand instead of rationing it</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">✓</span>
                  <span>Predictable cash flow—because PO financing is backed by actual customer orders, not just hopeful projections</span>
                </div>
              </div>
            </div>

            {/* Section 4: Why This Matters */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Why This Is More Than Just Capital
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                On the surface, this is a $1MM deal. A growing business got the capital it needed. Everyone wins.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                But there's something deeper happening here. This deal is about what happens when:
              </Text>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Trust-Based Relationships Matter</Heading>
                  <Text className="text-gray-700">We didn't just go shopping for capital. We leveraged a 10-year relationship with a lender who believed in us. Those relationships are built on years of doing right by clients and partners.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Partnership Ecosystems Are Powerful</Heading>
                  <Text className="text-gray-700">An asset-based lending partner introduced us. We brought a 10-year lender relationship. Together, we solved for a problem that couldn't be solved alone.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Growth Looks Different For Every Business</Heading>
                  <Text className="text-gray-700">The coffee trader's original lender had a $150K limit. That wasn't personal—it was just their appetite. We found someone whose appetite matched the client's growth.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Capital Should Enable, Not Limit</Heading>
                  <Text className="text-gray-700">This family-owned business had the orders, the relationships, and the execution. What they needed was capital that scaled with their opportunity. Now they have it.</Text>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                That's how we approach every deal: not just "how do we fund this?" but "how do we empower this founder to build the business they're meant to build?"
              </Text>
            </div>

            {/* Section 5: The Kickoff */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Game On
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                September brings fresh starts. New seasons. New opportunities. And sometimes, a business gets that surge in demand when the timing is right.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The question is: do you have the capital, the partners, and the strategy to execute when that moment comes?
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                For this coffee trader, the answer is now yes. And it all came down to finding the right play at the right time with the right partners.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                That's what Serve Funding does. We don't just fund deals. We empower founders building thriving enterprises and lasting legacies.
              </Text>
            </div>

            {/* Section 6: The Call to Action */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Your Growth Moment Is Waiting
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're a founder with demand outpacing your working capital. If you're an advisor or banker with clients in that same situation. If you're someone who understands that growth doesn't always fit in neat boxes—we want to partner with you.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                Let's create more growth stories. Together.
              </Text>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Scale Your Business?"
        text="When demand surges, you need a capital partner who can move fast. Let's discuss how Serve Funding can fuel your growth. Schedule a free strategy call."
        buttonText="Book a Strategy Call"
        href="/contact-us"
        source="blog-coffee-trader-po"
        useBG={true}
      />
    </div>
  )
}
