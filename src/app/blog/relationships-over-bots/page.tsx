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
  id: "relationships-over-bots",
  title: "Partnerships: Relationships Over Bots",
  subtitle: "Why Known Partners Are Key to Sustainable Growth",
  excerpt: "In an age of automation and algorithms, discover why trust-based partnerships outperform automated systems in working capital financing.",
  author: "Michael Kodinsky",
  date: "November 26, 2024",
  category: "Business Growth",
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
        { label: 'Relationships Over Bots' }
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
                In an age of automation and algorithms, businesses are increasingly turning to chatbots, robo-advisors, and algorithmic decision-making. While these tools have their place, they fundamentally miss something critical to sustainable business growth: the power of human relationships and trusted partnerships.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed">
                At Serve Funding, we believe that the best capital strategies aren't born from algorithms—they're built on trust, experience, and genuine partnership.
              </Text>
            </div>

            {/* Section 1: The Power of Trust-Based Relationships */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Power of Trust-Based Relationships
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Over 15 years of working with growing businesses, we've learned that the companies that succeed aren't just looking for a lender. They're looking for a partner who understands their industry, their challenges, and their vision.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                When you work with a known partner, you get:
              </Text>

              <ul className="list-disc space-y-3 mb-8 text-gray-700 pl-6">
                <li><span className="font-semibold">Reliability:</span> You're not a file number in a system. You're a relationship with continuity and accountability.</li>
                <li><span className="font-semibold">Transparency:</span> A trusted partner tells you the truth—even when it's not what you want to hear. They advise on the full picture, not just how to close a deal.</li>
                <li><span className="font-semibold">Customized Solutions:</span> Algorithms don't understand nuance. A real partner takes time to understand your specific situation and tailors their advice accordingly.</li>
                <li><span className="font-semibold">Speed:</span> When your lender knows you and your business, decisions happen faster. You're not waiting for a system to process paperwork—you're working with someone who can move.</li>
              </ul>

              <Text className="text-gray-700 leading-relaxed">
                These aren't small advantages. In working capital financing, they're often the difference between a company that survives and one that thrives.
              </Text>
            </div>

            {/* Section 2: Sustainable Growth vs. Quick Fixes */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Sustainable Growth vs. Quick Fixes
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Many businesses approach financing as a transactional problem: "I need $X by date Y. Find me the cheapest option." That mindset often leads to predatory lending, mismatched financing structures, or solutions that create bigger problems later.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                A trusted partner asks different questions:
              </Text>

              <ul className="list-disc space-y-3 mb-8 text-gray-700 pl-6">
                <li>What is this capital for, and does it actually solve your problem?</li>
                <li>What are the long-term implications of this financing structure?</li>
                <li>Is there a better path forward, even if it takes slightly longer?</li>
                <li>How does this capital enable your next chapter of growth?</li>
              </ul>

              <Card className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                <Text className="text-gray-700 leading-relaxed italic">
                  "Sustainable growth comes from partnerships where both sides are invested in the long-term success of the business. When your lender wins only if you win, decisions are made differently."
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed">
                That's the difference between a transaction and a partnership.
              </Text>
            </div>

            {/* Section 3: Serve Funding's Philosophy */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Serve Funding's Approach: Relationships First
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                We built Serve Funding on a simple principle: <span className="font-semibold">Relationships &gt; Bots.</span>
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                This isn't just marketing language. It shapes how we work every day.
              </Text>

              <Heading size="h3" className="mb-4 text-olive-900">
                Personal Advisory, Not Algorithmic Decisions
              </Heading>
              <Text className="text-gray-700 leading-relaxed mb-8">
                When you call Serve Funding, you're talking to someone with 15+ years of real lending experience. Not a chatbot. Not an underwriting algorithm. A human being who understands your industry and can make decisions based on the full context of your situation.
              </Text>

              <Heading size="h3" className="mb-4 text-olive-900">
                Creative Solutions, Tailored to Your Needs
              </Heading>
              <Text className="text-gray-700 leading-relaxed mb-8">
                Banks say no. Online lenders offer pre-set products. We ask: "What does your business actually need?" And then we structure a solution that works. Asset-based lending, invoice factoring, equipment leasing, bridge financing, government contracts—we've pieced together creative packages that have enabled hundreds of businesses to grow.
              </Text>

              <Heading size="h3" className="mb-4 text-olive-900">
                Honest Advice, Even When It Costs Us
              </Heading>
              <Text className="text-gray-700 leading-relaxed mb-8">
                If a bank line of credit at Prime + 2% is cheaper than our factoring solution, we tell you that. If an SBA loan makes more sense than a bridge loan, we say so. We're not trying to maximize our fees—we're trying to maximize your success. That honesty builds trust, and trust builds sustainable partnerships.
              </Text>

              <Heading size="h3" className="mb-4 text-olive-900">
                Long-Term Partnerships, Not One-Off Transactions
              </Heading>
              <Text className="text-gray-700 leading-relaxed">
                Many of our clients come back to us repeatedly as their businesses grow. We've funded the same companies multiple times because we've earned their trust. A 65% repeat client rate isn't an accident—it's the result of building genuine partnerships where both sides win.
              </Text>
            </div>

            {/* Section 4: The Bottom Line */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Bottom Line
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                In a world of algorithms and automation, businesses that thrive are the ones that prioritize human relationships and trusted partnerships. They're the ones who choose advisors over algorithms, personal attention over chatbots, and long-term strategies over quick fixes.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're looking for a lender who sees you as a partner—not a file number—let's talk. We're here to serve your growth, not just close a deal.
              </Text>

            </div>
          </FadeIn>
        </Container>
      </Section>

      <CTA
        title="Ready to explore your financing options?"
        text="Let's discuss how we can help your business grow with the right working capital solution."
        buttonText="Get in Touch"
        source="blog-relationships"
        useBG={true}
      />
    </div>
  )
}
