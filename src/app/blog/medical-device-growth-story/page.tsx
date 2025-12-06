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
  id: "medical-device-growth-story",
  title: "$3.35MM in Game-Changing Capital",
  subtitle: "When Traditional Lending Said No, Strategic Partnerships Said Yes",
  excerpt: "A Florida medical device manufacturer missed traditional financing by a narrow margin. Through strategic partnerships and creative capital solutions, we funded $3.35MM in growth and helped the company achieve 30%+ YoY revenue growth.",
  author: "Michael Kodinsky",
  date: "March 27, 2025",
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
        { label: 'From Shortfall to $3.35MM' }
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
                March isn't just about March Madness brackets and basketball upsets. In business, it's about momentum—and the teams with the right strategy and trusted partners who advance.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                We recently celebrated a client win that perfectly illustrates this principle: a five-year-old, growth-stage medical device manufacturer in Central Florida who came to us with a challenge every banker knows.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed">
                They had a banker who believed in them. But the bank's credit box didn't.
              </Text>
            </div>

            {/* Section 1: The Challenge */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                So Close, Yet Rejected
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                A trusted commercial banker in Orlando referred this medical device manufacturer to us with a simple but critical problem: they'd missed traditional financing qualification by a narrow margin. Their debt service coverage ratio (DSCR)—the metric banks use to determine if a company can service its debt—was just slightly below the threshold.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                To most lenders, that rejection would be final. The company was outside the box. Move on.
              </Text>

              <Card className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                <Text className="text-gray-700 leading-relaxed italic">
                  "Growth isn't always linear, and it rarely fits neatly into a box. That's why we build creative capital solutions that meet our clients where they are—and get them where they want to go."
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed">
                But that banker knew something important: DSCR shortfall doesn't mean the company can't succeed. It means traditional lending isn't the right tool. It means you need a partner who thinks creatively.
              </Text>
            </div>

            {/* Section 2: Creative Capital in Action */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                When One Solution Becomes Many
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Over the next 10 months, we didn't fund one deal. We funded a complete growth strategy for this client. Here's how:
              </Text>

              <div className="space-y-4 mb-8 text-gray-700 pl-6">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Month 1-2:</span>
                  <span>$400K 12-month unsecured term loan with monthly payments—quick capital to get them moving.</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Month 3:</span>
                  <span>$1MM accounts receivable (AR) revolver at a 92% advance rate with Prime +2 pricing—flexible working capital tied directly to their growth.</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Month 4:</span>
                  <span>$500K term loan refinancing the original with cash-out proceeds—freeing up capital for operations.</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Month 5:</span>
                  <span>$550K second mortgage using a bank-statement-only approach—creative collateral strategy to retire friends and family investment.</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Month 6-8:</span>
                  <span>AR revolver increased to $1.5MM as revenues surged—scaling capital with their momentum.</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Month 9:</span>
                  <span>$550K term loan—second refinance of the original with additional cash out.</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">January 2025:</span>
                  <span><span className="font-semibold">Our first direct capital injection:</span> $240K interest-only term loan from Serve Funding's own family funds—because this client needed to move inventory out of China ahead of Chinese New Year and new tariffs. We didn't just refer. We invested alongside our referral partner.</span>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold">Total Capital: $3.35MM</span>
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                That's not one deal. That's a partnership. That's a complete capital strategy designed around one client's unique growth journey.
              </Text>
            </div>

            {/* Section 3: The Results */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                What Happened Next
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                This client didn't just survive. They thrived. In 2024, they achieved 30%+ year-over-year revenue growth. That's not coincidence. That's what happens when a company has the right capital at the right time, structured in the right way.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                More importantly, the banker who referred them? They went from being the person who had to say "no" to being the hero who knew someone who could say "yes." Their relationship with that client deepened. Their credibility as a trusted advisor strengthened. And they became part of a growth story instead of the obstacle to it.
              </Text>
            </div>

            {/* Section 4: Built on T.R.U.S.T. */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Why This Matters: The Value of Partnership
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                This isn't just a funding story. It's a partnership story. And it was built on five core values that guide everything we do at Serve Funding—values we call T.R.U.S.T.
              </Text>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Transparency</Heading>
                  <Text className="text-gray-700">We communicated clearly about every option, every rate, every term. The client knew exactly what they were getting and why.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Responsibility</Heading>
                  <Text className="text-gray-700">We followed through on every commitment—from the first unsecured loan to our personal investment in January. Our word meant something.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Understanding</Heading>
                  <Text className="text-gray-700">We listened to their unique challenges: DSCR shortfall, inventory timing, tariff pressures, founder equity constraints. We didn't force them into a standard box.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Service</Heading>
                  <Text className="text-gray-700">We prioritized their win—not our commission. We moved fast. We solved problems. We thought creatively.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Thankfulness</Heading>
                  <Text className="text-gray-700">We operated with deep gratitude for the banker's trust, the client's partnership, and every opportunity to serve.</Text>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                These five values aren't just words on a wall. They're why this story happened. They're why the banker picked up the phone. They're why the client trusted us with $3.35MM. They're why we invested our own family funds.
              </Text>
            </div>

            {/* Section 5: The Invitation */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Your Clients Deserve This Too
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're a banker, advisor, or lender with clients whose situations don't fit conventional boxes, this story is for you. Your clients don't deserve to be rejected based on one metric. They deserve partners who think creatively, move fast, and believe in their potential.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                That's what Serve Funding is here for. We don't compete with banks. We partner with them. We don't replace your relationships—we deepen them. And we prove that when a banker says "I know someone," they become the hero in their client's growth story.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                Let's create more moments like this together.
              </Text>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Build a Partnership?"
        text="If your clients need creative capital solutions, let's discuss how Serve Funding can help you serve them better. Schedule a free partner strategy call."
        buttonText="Book a Partner Call"
        href="/contact-us"
        source="blog-medical-device-story"
        useBG={true}
      />
    </div>
  )
}
