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

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate + 'T00:00:00Z')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const blogMetadata = {
  id: "building-people-estonia-trip",
  title: "$1.475MM Bridge to Large M&A for Medical & Surgery Practice",
  subtitle: "How a Trip to Estonia Reminded Us What Really Matters",
  excerpt: "A journey to Tallinn to visit his son turned into a powerful lesson about entrepreneurship, mentorship, and the importance of cultivating the next generation of leaders. Plus: how we deployed $1.475MM in bridge capital to help a surgeon protect his life's work.",
  author: "Michael Kodinsky",
  date: "2025-10-07",
  category: "Insights",
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
        { label: 'Building People, Not Just Enterprises' }
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
                We just returned from Tallinn, Estonia—and my perspective on business shifted.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                We went to see our son, who moved there recently. While we were there, he got engaged to his Estonian fiancée. Beyond that personal milestone, I was struck by something deeper: the entrepreneurial spirit alive in that city, and what it taught me about what really matters in business.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed">
                This story isn't just about a trip. It's about why we do what we do at Serve Funding.
              </Text>
            </div>

            {/* Section 1: Estonia's Lesson */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                What Estonia Taught Me About Business
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Estonia is one of the most business-friendly countries in the world. The digital infrastructure is world-class. The trust-based business culture fuels constant innovation. And everywhere you look, there are entrepreneurs building something meaningful.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                But the most striking thing? The mentorship culture.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                I had the privilege of sitting down with four incredible Estonian entrepreneurs—seasoned business owners with real track records. And what I noticed wasn't their success metrics or their balance sheets. It was their commitment to the next generation.
              </Text>

              <Card className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                <Text className="text-gray-700 leading-relaxed italic">
                  "Entrepreneurship isn't just about building enterprises. It's about building people."
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed mb-6">
                These founders weren't gatekeeping their knowledge or protecting their turf. They were actively mentoring the next generation—including our son. They were investing their time, their wisdom, and their networks in younger entrepreneurs who would build the future.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                That's when it hit me: true entrepreneurship isn't a zero-sum game. It's about lifting others as you climb.
              </Text>
            </div>

            {/* Section 2: Gratitude */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Coming Home with New Perspective
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                I returned to Atlanta grateful for three things:
              </Text>

              <div className="space-y-4 mb-8 text-gray-700 pl-6">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">1.</span>
                  <span>For the beauty of Tallinn and the rich culture of Estonia.</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">2.</span>
                  <span>For the entrepreneurial spirit of our son who's forging a life there, building not just a business but a community.</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">3.</span>
                  <span>For the privilege of learning from fellow innovators who are building companies AND the next generation of leaders.</span>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                That gratitude is exactly what we try to embody at Serve Funding. We're not just here to fund transactions. We're here to build partnerships that last. To invest in people, not just deals. To be part of a community of entrepreneurs, bankers, and advisors who lift each other up.
              </Text>
            </div>

            {/* Section 3: The Deal Story */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                When Timing Matters: Protecting a Surgeon's Life Work
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Sometimes that philosophy shows up in the details of a deal. Case in point: a successful surgeon running multiple medical and surgical practices in the Southeast had just accepted an offer to sell his companies to a large hospital system. It was a big exit—the kind that represents decades of work, sacrifice, and building.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                But there was a gap. The liquidity event was pending, but closing was still weeks away. In the meantime, he needed substantial capital to cover year-end business expenses and operational needs. He needed more than $1.25MM within a matter of weeks—or he'd have to delay the closing and miss his window.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                His private banker at a major national bank knew exactly who to call. She had a counterpart on the commercial team who had a 9-year relationship with me. That banker introduced us, and we got to work.
              </Text>

              <Heading size="h3" className="text-olive-900 mb-4">
                The Solution
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                We didn't just offer one option. We provided multiple solutions: an interest-only bridge loan tied to the doctor's property, and several revenue-based business term loans. We negotiated aggressively on his behalf—because his exit was too important to leave money on the table.
              </Text>

              <div className="space-y-3 mb-8 text-gray-700 pl-6">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Capital Deployed:</span>
                  <span>$1.475MM</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Structure:</span>
                  <span>Flexible bridge with aggressive prepay discounts</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Timeline:</span>
                  <span>Funded in less than 2 weeks—well ahead of the surgeon's closing date</span>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                This deal did something important: it gave a founder peace of mind during the most critical moment of his career. It protected his upside. It removed the stress of a cash gap during a major life transition. That's not just capital. That's partnership.
              </Text>
            </div>

            {/* Section 4: The Philosophy */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Capital Funds Growth. Community Fuels It.
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The Estonian entrepreneurs I met understood something fundamental: proximity to other purpose-driven people matters. Whether it's across the globe in Tallinn or at your next client lunch, every encounter has the potential to unlock insight, share wisdom, or forge opportunity.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                That's why Serve Funding exists. Not just to fund companies—though we do that really well. But to cultivate a trusted ecosystem for visionary entrepreneurs, bankers, and advisors.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                When a banker refers a surgeon to us, it's not a transaction. It's an act of trust. We honor that by:
              </Text>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700">Moving fast when timing is critical—because delays don't just cost money, they cost opportunities.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700">Providing options, not just offers—because every entrepreneur's situation is unique.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700">Negotiating aggressively on the client's behalf—because their success is our success.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700">Strengthening banker relationships—because the partner who made the referral becomes part of the client's win.</Text>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                That's the Estonia lesson in action. Building enterprises. Building people. Building partnerships that last.
              </Text>
            </div>

            {/* Section 5: The Invitation */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Let's Build Together
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're a banker, advisor, or entrepreneur with a situation that doesn't fit conventional lending boxes, we want to partner with you. Not because we're chasing deals—but because we believe in building enterprises, people, and communities.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Your clients deserve capital that moves fast. Entrepreneurs deserve partners who believe in them. Bankers deserve to be the hero in their client's story.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                Let's keep growing together.
              </Text>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Build a Partnership?"
        text="Let's discuss how Serve Funding can help you serve your clients and build enterprises that last. Schedule a free partner strategy call with our team."
        buttonText="Book a Partner Call"
        href="/contact-us"
        source="blog-estonia-people"
        useBG={true}
      />
    </div>
  )
}
