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

export const blogMetadata = {
  id: "banker-saved-wedding-season",
  title: "The Banker Who Saved a Wedding Season",
  subtitle: "How One Referral Became an Act of Leadership",
  excerpt: "When a Florida wedding venue faced a critical cash shortfall, one banker refused to walk away. Instead, they made a referral that became an act of servant leadership—and $150K funded in 3 days.",
  author: "Michael Kodinsky",
  date: "November 20, 2025",
  category: "Partnerships",
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
        { label: 'The Banker Who Saved a Wedding Season' }
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
                Every banker knows the feeling.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                A valued client calls with urgency in their voice — payroll due, cash tied up, and the clock ticking. You want to help. But your bank's credit box says no.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed">
                That's the moment every banker dreads. Because it's also the moment that defines your reputation as a trusted advisor.
              </Text>
            </div>

            {/* Section 1: The Moment */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                When the Clock Is Ticking
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                A Florida wedding venue was thriving. Bookings were strong. Business was booming. But success came with a challenge: they had 15 weddings scheduled over three consecutive weeks, and their cash wasn't flowing fast enough to cover payroll, vendor bills, and operational costs.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The owner called their banker. They were direct about the need: We need $150,000, and we need it within weeks, not months.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The banker knew the client. Knew the business. Knew they were creditworthy. But the bank's lending box didn't have room for this request. The timeline was too tight. The revenue model didn't fit the standard lending criteria. The answer was no.
              </Text>

              <Card className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                <Text className="text-gray-700 leading-relaxed italic">
                  "When a client's opportunity clock is ticking, a servant-leader banker makes a lasting impact."
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed">
                But this banker refused to let that be the end of the story.
              </Text>
            </div>

            {/* Section 2: The Referral */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Banker Who Said "I Know Someone"
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Instead of saying "sorry, we can't help," the banker said something different: "I know someone who can."
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                They picked up the phone and called Serve Funding. They explained the situation. The venue's strong bookings. The predictable cash flow. The tight timeline. The need for a partner who could move fast and think creatively.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Within 72 hours, we had the venue approved and funded for $150,000. The banker didn't just make a referral. They became the hero in their client's story.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The results spoke for themselves:
              </Text>

              <ul className="list-disc space-y-3 mb-8 text-gray-700 pl-6">
                <li><span className="font-semibold">Speed:</span> $150K funded in 3 business days</li>
                <li><span className="font-semibold">Fairness:</span> Reviewed competing offers and identified better terms</li>
                <li><span className="font-semibold">Transparency:</span> Educated the client on all options and prepay discounts</li>
                <li><span className="font-semibold">Impact:</span> 15 weddings scheduled. 15 weddings delivered. Staff paid. Vendors happy. Business thriving.</li>
              </ul>
            </div>

            {/* Section 3: The Real Win */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                What This Referral Really Meant
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Here's what people often miss when they think about partnerships in lending:
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The banker didn't just move a deal to someone else. They deepened their relationship with their client. They proved that when conventional paths don't work, they have answers. They positioned themselves as someone who thinks creatively, moves quickly, and fights for their clients even when their own bank can't be the hero.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                That client will never forget how their banker showed up for them. And they'll recommend that banker to every business owner they know.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                That's the power of a trusted partnership. That's what servant-leadership looks like in banking.
              </Text>
            </div>

            {/* Section 4: Our Responsibility */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Why We Exist
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Serve Funding exists for moments like this. We don't exist to compete with bankers. We exist to make bankers better at what they do.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                When you introduce a client to us, they stay your client. Your relationship doesn't get weaker—it gets stronger. Because you became the person who had the answer when it mattered most.
              </Text>

              <Heading size="h3" className="mb-4 text-olive-900">
                We Take Responsibility With You
              </Heading>

              <ul className="list-disc space-y-3 mb-8 text-gray-700 pl-6">
                <li>We take personal ownership of your client's needs</li>
                <li>We position you as the hero in your client's story—from start to finish</li>
                <li>We never cross-sell or compete for the relationship</li>
                <li>We move fast, communicate clearly, and deliver on our word</li>
              </ul>

              <Text className="text-gray-700 leading-relaxed">
                The banker in this story isn't just a referral source. They're a partner. And because they trusted us with their client, they've become even more valuable to their clients.
              </Text>
            </div>

            {/* Section 5: The Invitation */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Let's Create More Moments Like This
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're a banker, advisor, or lender with clients whose situations don't fit conventional lending boxes—we want to partner with you.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Your clients deserve creative solutions. Your business deserves to grow. And your reputation deserves to be protected and strengthened by partnerships that actually work.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                Let's talk about how we can help you create more moments where you become the banker your clients will never forget.
              </Text>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Build a Partnership?"
        text="Let's discuss how Serve Funding can help you serve your clients better. Schedule a free partner strategy call with our team."
        buttonText="Book a Partner Call"
        href="/contact-us"
        source="blog-banker-wedding-season"
        useBG={true}
      />
    </div>
  )
}
