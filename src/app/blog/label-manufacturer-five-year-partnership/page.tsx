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
  id: "label-manufacturer-five-year-partnership",
  title: "$1.65MM of Growth Capital for 22-Year-Old Manufacturer",
  subtitle: "How Evolving Capital Solutions Fueled 67% Revenue Growth",
  excerpt: "When a Texas-based label manufacturer needed more than one-time capital, they needed a partner who would grow with them. Over 5 years and 6 distinct financing structures, we learned what true partnership looks like—and what it takes to fuel 67% revenue growth.",
  author: "Michael Kodinsky",
  date: "June 3, 2025",
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
        { label: 'Five Years of Partnership' }
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
                Some business partnerships are transactional. You solve a problem. The deal closes. The relationship ends.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                But the best partnerships are different. They grow with you. They adapt. They understand that what you needed two years ago isn't what you need today.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed">
                This is a story about a minority-owned label manufacturer in Texas who became a partner in that deeper sense. And what we learned about true partnership along the way.
              </Text>
            </div>

            {/* Section 1: The Beginning */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Year One: Understanding the Mission
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                When we first met this label manufacturer, they were in a familiar position: a profitable business with 22+ years of track record, solid customers, and the right people in place. But growth requires capital that matches the pace of opportunity.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Their biggest orders were unpredictable in timing but predictable in value. They needed working capital that could flex with their business cycles. Traditional lenders looked at their situation and saw complexity. We saw opportunity.
              </Text>

              <Card className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                <Text className="text-gray-700 leading-relaxed italic">
                  "Growth doesn't wait. Neither should your capital."
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed">
                We didn't start with loan structures. We started with questions: What do you need? When do you need it? How can we help you scale without over-leveraging?
              </Text>
            </div>

            {/* Section 2: The Evolution */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Five Years of Evolution: Six Solutions for Six Different Moments
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Here's what true partnership looks like. Over 5+ years, we deployed six different financing structures, each designed for a specific moment in their growth journey. None were permanent. All were purpose-built.
              </Text>

              <Heading size="h3" className="text-olive-900 mb-6 mt-8">
                Solution 1: Unsecured Working Capital Facility ($580K)
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Over 2 years, in 4 separate tranches, we structured unsecured working capital lines to help them navigate large incoming orders while maintaining operational flexibility. This wasn't about locking in permanent debt. It was about flexibility.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-4 text-sm">
                <span className="font-semibold">Why unsecured?</span> Because when you've built a business with real fundamentals and strong execution, you shouldn't have to mortgage the company to grow it.
              </Text>

              <Heading size="h3" className="text-olive-900 mb-6 mt-8">
                Solution 2: Bank Credit Partnership ($500K)
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                In 2023, we leveraged our relationship with a Texas-based regional bank to arrange a $500K revolving line of credit. This was about bringing their primary bank into the growth equation. We didn't replace the banker—we enhanced the relationship.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-4 text-sm">
                <span className="font-semibold">Why do this?</span> Because the best capital strategy isn't competition—it's collaboration. The bank gets a stronger client. The client gets more runway. Everyone wins.
              </Text>

              <Heading size="h3" className="text-olive-900 mb-6 mt-8">
                Solution 3: SBA Loan Restructure ($350K)
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                When a previous SBA facility needed restructuring, we engineered a new $350K loan that gave their bank a senior lien position while improving the overall capital stack. It was a win-win alignment—the bank felt secure, the client felt supported, and the debt was optimized.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-4 text-sm">
                <span className="font-semibold">Why restructure?</span> Because sometimes the best solution isn't a new loan—it's making the existing debt work harder for everyone involved.
              </Text>

              <Heading size="h3" className="text-olive-900 mb-6 mt-8">
                Solution 4-6: Ongoing Refinancing & Growth Capital
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Most recently, in June 2025, we completed a $230K debt refinance with $50K cash out—enabling them to ramp up production for a surge of incoming orders.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                Each solution was different because their business was different at each moment. And that's the point. True partnership means flexibility, responsiveness, and the willingness to evolve the capital structure as the business evolves.
              </Text>
            </div>

            {/* Section 3: Where They're Headed */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Looking Ahead: From $3MM to $5MM
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The label manufacturer is forecasting a major leap in 2025: from $3MM to $5MM in annual revenue. That's 67% growth. That's significant.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                And we're already at the table, working alongside them and their bank, designing the next evolution of their capital structure. We're transitioning their revolving line into an AR-based (Accounts Receivable) revolver—built to scale with their expanding order book.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Why AR-based? Because their business model is driven by volume and customer payment cycles. An AR facility grows automatically with their sales. No refinancing needed. No new approvals needed. The capital scales with the opportunity.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                This is partnership in its truest form: anticipating the next phase before it arrives, and having the capital structure ready to support it.
              </Text>
            </div>

            {/* Section 4: What We Learned */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Deeper Lesson: Understanding Comes First
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If we're honest, the label manufacturer could have worked with multiple lenders over these 5 years. They could have refined their capital strategy with someone cheaper, or someone more convenient, or someone with a fancier website.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                But they chose to deepen the relationship with us. Why?
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Because we started with understanding, not with products. We asked about their priorities. We learned their business. We understood that 22+ years of profitable operation wasn't luck—it was discipline, execution, and the right people in the room.
              </Text>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Understanding</span> your story, not just your balance sheet</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Responsibility</span> to design capital structures that actually serve your mission</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Transparency</span> in every conversation about costs, terms, and long-term implications</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Trust</span> earned by showing up consistently and delivering on our word</Text>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                That's why they keep choosing us. Not because we're the only option. But because we've proven we understand them.
              </Text>
            </div>

            {/* Section 5: The Real Win */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                What Success Actually Looks Like
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The real win here isn't the $1.65MM+ in capital we've deployed. It's not even the 67% revenue growth they're forecasting.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The real win is that a minority-owned label manufacturer—built on 22+ years of discipline and execution—can scale their operation without compromising their values. They can pursue growth on their terms. They have a capital partner who understands their mission and designs solutions around it.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                And we get to be part of that story. That's the honor we're talking about.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                This is what true partnership looks like. Not transactional. Not one-off. But evolving, growing, and deepening over years.
              </Text>
            </div>

            {/* Section 6: Your Story */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                What's Your Growth Story?
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're a business owner forecasting significant growth. If you're an advisor with clients whose capital needs are evolving. If you want a partner who listens first and designs capital structures around your mission—not theirs—let's talk.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                We're honored to be part of your growth story. Just like we've been honored to grow alongside this label manufacturer for the past five years.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                And we're genuinely grateful for partners who trust us to deliver. Over and over again.
              </Text>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Build a Long-Term Partnership?"
        text="Whether you're forecasting major growth or looking for a capital partner who truly understands your business, let's explore what's possible. Schedule a free strategy call with our team."
        buttonText="Book a Strategy Call"
        href="/contact-us"
        source="blog-label-manufacturer-partnership"
        useBG={true}
      />
    </div>
  )
}
