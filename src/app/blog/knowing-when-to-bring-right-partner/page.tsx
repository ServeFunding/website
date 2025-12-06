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
  id: "knowing-when-to-bring-right-partner",
  title: "Unsecured Line of Credit - Product Highlight by Serve Funding",
  subtitle: "Knowing When to Refer: The Smartest Move Isn't Always Saying Yes",
  excerpt: "A powerful principle in lending and life: the ability to say 'I know someone who can help' transforms you from a gatekeeper into an indispensable advisor. Here's why knowing when to refer is the mark of a strategic partner.",
  author: "Michael Kodinsky",
  date: "July 18, 2025",
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
        { label: 'Knowing When to Bring in the Right Partner' }
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
                There's a quote that keeps coming back to me: "In lending, as in life, the smartest move isn't always saying yes—it's knowing who else can."
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                Most advisors focus on what they can do. The great ones focus on what they can do for their clients by connecting them with the right partners.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed">
                That difference separates a gatekeeper from a strategic advisor.
              </Text>
            </div>

            {/* Section 1: The Advisor's Dilemma */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Moments That Define Your Value
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Every advisor faces this moment: a client comes to you with a need your institution can't fully meet. Maybe it's:
              </Text>

              <ul className="list-disc space-y-3 mb-8 text-gray-700 pl-6">
                <li>A client who's hit your credit box limits but is still growing</li>
                <li>A situation that's too unique, too fast, or too flexible for standard lending</li>
                <li>A business owner who doesn't quite fit your traditional criteria but whose fundamentals are sound</li>
                <li>A bridge need that's situational—not permanent debt, just temporary breathing room</li>
              </ul>

              <Card className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                <Text className="text-gray-700 leading-relaxed italic">
                  "In lending, as in life, the smartest move isn't always saying yes—it's knowing who else can."
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed mb-6">
                At this moment, you have two choices:
              </Text>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Option 1: The Gatekeeper</Heading>
                  <Text className="text-gray-700">You say no. "We can't help with this. It doesn't fit our box." Your client leaves disappointed. Their business stalls. And they remember you as the person who couldn't help when it mattered.</Text>
                </div>
                <div className="p-6 bg-gold-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Option 2: The Strategic Advisor</Heading>
                  <Text className="text-gray-700">You say, "Here's what we can do, and here's who can help with the rest." Your client gets their answer. Their business keeps growing. And you become the person they trust to have answers for every situation.</Text>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                The strategic advisor doesn't lose the client to a competitor. They deepen the relationship. They prove they're resourceful, collaborative, and committed to the client's success—not just their own balance sheet.
              </Text>
            </div>

            {/* Section 2: The Trust Equation */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                When Knowing Who Else Can Builds Trust
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Think about the advisors you trust most. What do they have in common?
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                It's not that they have all the answers. It's that they know where to find them. When you need something outside their wheelhouse, they don't pretend to have a solution. They give you a real one—from a trusted partner.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                When you introduce a client to Serve Funding, you're demonstrating:
              </Text>

              <div className="space-y-3 mb-8 text-gray-700 pl-6">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">→</span>
                  <span><span className="font-semibold">Resourcefulness:</span> You have solutions for situations others give up on</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">→</span>
                  <span><span className="font-semibold">Confidence:</span> You're comfortable letting a partner shine alongside you</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">→</span>
                  <span><span className="font-semibold">Commitment:</span> You care more about solving the problem than protecting your turf</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">→</span>
                  <span><span className="font-semibold">Partnership:</span> You're building an ecosystem, not a silo</span>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                That's what transforms a good advisor into an indispensable one. And it's why bankers who bring clients to Serve Funding often find those clients coming back to them with more business later—because the advisor became the hero of their growth story.
              </Text>
            </div>

            {/* Section 3: The Tools We Bring */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Flexible Capital for Every Situation
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                There are moments when your client needs "stretch capital"—something beyond what their bank can provide. Maybe they already have a facility maxed out. Maybe they're pre-bank (not yet qualified). Or maybe they need something that's flexible enough to adapt to their situation.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                This is where a flexible line of credit becomes powerful. Consider this product:
              </Text>

              <div className="p-6 bg-gray-50 rounded-lg mb-8">
                <Heading size="h3" className="text-olive-900 mb-4">Revolving Line of Credit Program</Heading>
                <div className="space-y-3 text-gray-700">
                  <div className="flex gap-4">
                    <span className="font-semibold min-w-fit">Term:</span>
                    <span>Up to 36 months</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold min-w-fit">Rates:</span>
                    <span>1.16%–1.29% per month</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold min-w-fit">Security:</span>
                    <span>Personal guarantee + UCC</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold min-w-fit">Draw:</span>
                    <span>Flexible—use what you need, when you need it</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold min-w-fit">Transparency:</span>
                    <span>Amortization schedule provided for clarity</span>
                  </div>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Why is this more powerful than a traditional term loan? Because it's built for today's reality:
              </Text>

              <ul className="list-disc space-y-3 mb-8 text-gray-700 pl-6">
                <li><span className="font-semibold">Speed:</span> When timing matters, this closes faster than bank processes</li>
                <li><span className="font-semibold">Flexibility:</span> Draw only what you need. Pay back as you go. No debt that lingers if you don't use it</li>
                <li><span className="font-semibold">Bridge scenarios:</span> Perfect for temporary cash gaps, receivables timing, or inventory cycles</li>
                <li><span className="font-semibold">Scaling inventory:</span> Seasonal businesses, project-based work, or businesses with lumpy cash flow benefit from this structure</li>
                <li><span className="font-semibold">Outside the bank box:</span> Clients who don't fit traditional criteria can still access capital</li>
              </ul>

              <Text className="text-gray-700 leading-relaxed">
                This isn't a replacement for good banking relationships. It's a complement. It's the tool you reach for when your standard toolkit isn't quite enough.
              </Text>
            </div>

            {/* Section 4: Service in Action */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                What Service Really Means
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                At Serve Funding, service isn't just something we deliver. It's how we lead. And it starts with one principle: we show up to serve your best interests—every time, in every conversation.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                That means:
              </Text>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Listening first,</span> before recommending a solution</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Acting with urgency and care</span> when your client needs speed</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Prioritizing long-term outcomes</span> over short-term transaction wins</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Text className="text-gray-700"><span className="font-semibold">Being accountable</span> not just when deals go smoothly, but when things get complicated</Text>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                When you partner with us, your relationship with your client doesn't weaken. It strengthens. Because you're the person who knew where to find the answer when it mattered most.
              </Text>
            </div>

            {/* Section 5: The Invitation */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Let's Be That Partner for You
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're a banker or advisor with clients who need that "stretch capital." If you've ever wished you had a partner you could refer to who would take great care of your client and make you look like a hero. If you believe that the smartest move isn't always saying yes—it's knowing who else can.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Let's build that partnership.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                Your clients deserve advisors who know when to bring in the right partners. And we'd be honored to be that partner for you.
              </Text>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Become the Advisor Your Clients Need?"
        text="Let's discuss how Serve Funding can complement your lending capabilities and strengthen your client relationships. Schedule a free partner strategy call."
        buttonText="Book a Partner Call"
        href="/contact-us"
        source="blog-knowing-right-partner"
        useBG={true}
      />
    </div>
  )
}
