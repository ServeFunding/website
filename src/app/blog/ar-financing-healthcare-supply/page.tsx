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
  id: "ar-financing-healthcare-supply",
  title: "$1MM Invoice Factoring Revolver at Single-Digit Rates?!",
  subtitle: "How AR Financing Unlocked Strategic Growth Beyond the Bank Line",
  excerpt: "A healthcare supply manufacturer hit the bank line ceiling despite solid growth. Their tax return showed a loss, so traditional financing was off the table. But their invoices told a different story. How $1MM in AR financing—at better terms than a bank loan—fueled rapid expansion.",
  author: "Michael Kodinsky",
  date: "August 12, 2025",
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
        { label: 'Beyond the Bank Line' }
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
                Here's a truth about business that doesn't always show up on a balance sheet: you can be growing, profitable in operations, and completely unable to qualify for traditional financing.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                Why? Because last year's tax return might show a loss. Or your bank line is maxed out. Or your growth is too fast for conventional lenders to understand.
              </Text>
              <Text className="text-lg text-gray-700 leading-relaxed">
                But there's an asset sitting right there on your balance sheet that traditional lenders overlook. We don't.
              </Text>
            </div>

            {/* Section 1: The Paradox */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Paradox of Growing Too Fast
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                A healthcare supply manufacturer in central Florida was in an enviable position. They were growing year over year. Sales were solid. Customers were paying. The business model worked.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                But they had a problem. Their largest customer represented 80–90% of their incoming orders each month, and that customer had announced a major expansion project. The opportunity was massive.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                They went to their bank for a growth line. They approached multiple banks. The answer was the same: your last tax return shows a loss. We can't help you.
              </Text>

              <Card className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                <Text className="text-gray-700 leading-relaxed italic">
                  "You can't pay vendor bills with open receivables, but AR financing done right will pay for steady growth."
                </Text>
              </Card>

              <Text className="text-gray-700 leading-relaxed">
                The irony was stark: a growing company with strong customers, consistent orders, and real revenue was being told no because of accounting entries, not business fundamentals.
              </Text>
            </div>

            {/* Section 2: What Banks Don't See */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                The Invoices Tell the Real Story
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Here's what traditional lenders miss: invoices are assets.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                When a customer orders $100,000 in supplies and that order is shipped, an invoice is created. That invoice represents real money that's owed to the company. It's not a maybe. It's not a projection. It's a contractual obligation from a creditworthy customer.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Banks look at tax returns and P&Ls. We look at invoices. And that healthcare supply manufacturer's invoices told a completely different story than their tax return.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                One of their competing bankers understood this. They referred the manufacturer to Serve Funding. And within 3 weeks, we had them approved and funded.
              </Text>

              <Heading size="h3" className="text-olive-900 mb-4">
                The Structure
              </Heading>

              <div className="space-y-3 mb-8 text-gray-700 pl-6">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Facility Size:</span>
                  <span>$1,000,000 (expanded to $1.5MM within 2 months as sales grew)</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Advance Rate:</span>
                  <span>92% on eligible receivables</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Invoice Fee:</span>
                  <span>0.25% (25 basis points) on new incoming invoices</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-fit">Interest Rate:</span>
                  <span>Prime + 2% on funds drawn</span>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                Let's be clear: this pricing is better than most bank term loans. And unlike a term loan, this is a revolving facility—it grows with the business. As invoices come in, capital is available. As those invoices are paid, the facility replenishes itself.
              </Text>
            </div>

            {/* Section 3: Why AR Financing Is Strategic */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                AR Financing Isn't a Last Resort—It's Smart Capital Planning
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                This is the mindset shift we're trying to create in the market. Accounts Receivable financing isn't something you do when you're desperate. It's something you do when you're smart.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Here's why this healthcare supply manufacturer's situation is actually textbook ideal for AR financing:
              </Text>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Strong Sales with Long Payment Cycles</Heading>
                  <Text className="text-gray-700">Their customers pay in 30–90 days. But the invoices are real from day one. Why wait for cash flow when you've already earned it?</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Growth That Outpaces Traditional Lending</Heading>
                  <Text className="text-gray-700">Banks are slow to adapt to rapid growth. AR facilities scale automatically—the more you sell, the more you can borrow. It grows with you.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">Flexible, Selective Funding</Heading>
                  <Text className="text-gray-700">You don't have to use the whole line. Use it when you need it. It's working capital when you need it most—during growth surges or seasonal spikes.</Text>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <Heading size="h3" className="text-olive-900 mb-2">No Accumulated Debt</Heading>
                  <Text className="text-gray-700">A term loan sits on your balance sheet. An AR facility is self-liquidating—as your customers pay, the borrowing goes away automatically.</Text>
                </div>
              </div>

              <Text className="text-gray-700 leading-relaxed">
                The healthcare supply manufacturer didn't have a problem. They had a business model that traditional lenders couldn't see. AR financing was the answer.
              </Text>
            </div>

            {/* Section 4: Who Should Consider This */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Is AR Financing Right for Your Situation?
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If any of these sound familiar, AR financing might be exactly what you need:
              </Text>

              <ul className="list-disc space-y-3 mb-8 text-gray-700 pl-6">
                <li>You have strong sales but slow-paying customers (30–90 days)</li>
                <li>You need payroll covered before contract payment arrives</li>
                <li>You won a big order but can't fund materials until invoices clear</li>
                <li>You're in staffing, construction, manufacturing, healthcare, or government contracting</li>
                <li>You've maxed your bank line but you're still growing</li>
                <li>Your last tax return didn't tell the real story of your business</li>
                <li>You need flexible capital that scales with your sales</li>
              </ul>

              <Text className="text-gray-700 leading-relaxed">
                These aren't signs of a struggling company. These are signs of a growing company that needs strategic capital.
              </Text>
            </div>

            {/* Section 5: The Bigger Picture */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Why Banks Should Embrace This Too
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're a banker reading this, think about your clients who are hitting your credit box limits. The ones whose tax returns don't match their revenue. The ones growing so fast you can't keep up with their needs.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                Introducing them to AR financing isn't admitting defeat. It's actually strengthening your relationship. You become the advisor who has solutions for every situation. You're not the person who says "no"—you're the person who says "I know someone who can help."
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                The banker who referred this healthcare supply manufacturer to us? They're now part of that company's expansion story. The manufacturer is grateful. The banker is a hero. And we get to deploy capital that makes a difference.
              </Text>

              <Text className="text-gray-700 leading-relaxed">
                That's the ecosystem we're building.
              </Text>
            </div>

            {/* Section 6: The Invitation */}
            <div className="mb-12">
              <Heading size="h2" className="mb-6 text-olive-900">
                Your Invoices Are Assets. Let's Activate Them.
              </Heading>

              <Text className="text-gray-700 leading-relaxed mb-6">
                If you're a founder wondering how to fuel growth without hitting the bank line ceiling. If you're a banker with clients whose situations don't fit traditional boxes. If you're someone who understands that invoices represent real value that shouldn't sit unpaid for 90 days—let's talk.
              </Text>

              <Text className="text-gray-700 leading-relaxed mb-6">
                AR financing done right isn't expensive. It's strategic. And it's exactly what your growing business deserves.
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
        title="Ready to Unlock Your Growth?"
        text="If your invoices are telling a different story than your tax return, it's time to talk. Let's explore how AR financing can fuel your strategic growth. Schedule a free consultation."
        buttonText="Book a Consultation"
        href="/contact-us"
        source="blog-ar-financing"
        useBG={true}
      />
    </div>
  )
}
