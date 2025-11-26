import { ArrowRight, Calendar, User } from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Button
} from '@/components/ui'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { IntroCallForm } from '@/components/Forms'
import Link from 'next/link'

export const metadata = {
  title: "Blog - Working Capital Insights | Serve Funding",
  description: "Read our latest insights on working capital financing, business growth, and alternative lending strategies for growing companies.",
  openGraph: {
    title: "Blog - Working Capital Insights",
    description: "Read our latest insights on working capital financing, business growth, and alternative lending strategies for growing companies.",
    url: "https://servefunding.com/blog",
  },
}

const blogPosts = [
  {
    id: "relationships-over-bots",
    title: "Relationships Over Bots",
    subtitle: "Why Known Partners Are Key to Sustainable Business Growth",
    excerpt: "In an age of automation and algorithms, discover why trust-based partnerships outperform automated systems in working capital financing.",
    author: "Michael Kodinsky",
    date: "November 26, 2024",
    category: "Business Growth",
    featured: true,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "government-vs-private",
    title: "Government Financing vs. Private Lenders",
    subtitle: "A 2025 Guide to SBA Loans vs. Private Lending Options",
    excerpt: "Compare SBA loans, government contract financing, and private lender options. See which government or private funding solution fits your business.",
    author: "Michael Kodinsky",
    date: "2024",
    category: "Comparisons",
    featured: false,
    image: null
  },
  {
    id: "abl-vs-factoring",
    title: "Asset-Based Lending vs. Factoring",
    subtitle: "How ABL and Invoice Factoring Compare",
    excerpt: "Understand the key differences between asset-based lending and invoice factoring to choose the right solution for your business.",
    author: "Michael Kodinsky",
    date: "2024",
    category: "Comparisons",
    featured: false,
    image: null
  },
  {
    id: "the-true-cost-of-bank-rejection",
    title: "The True Cost of Bank Rejection",
    subtitle: "What Banks Really Mean When They Say 'No'",
    excerpt: "What does bank rejection actually mean for your business? Explore why profitable companies get rejected and what alternative financing options exist.",
    author: "Michael Kodinsky",
    date: "Coming Soon",
    category: "Lending Insights",
    featured: false,
    image: null
  },
  {
    id: "asset-based-lending-decoded",
    title: "Asset-Based Lending Decoded",
    subtitle: "Everything You Need to Know About ABL",
    excerpt: "A comprehensive guide to asset-based lending: how it works, when it makes sense, and how it compares to traditional bank loans.",
    author: "Michael Kodinsky",
    date: "Coming Soon",
    category: "Funding Solutions",
    featured: false,
    image: null
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const otherPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <HeroFadeIn
        title="Serve Funding Blog"
        subtitle="Insights on working capital financing, business growth strategies, and alternative lending for entrepreneurs and business leaders."
      />

      {/* Featured Post */}
      {featuredPost && (
        <Section background="gray">
          <Container>
            <FadeIn>
              <Heading size="h2" className="mb-12 text-center">
                Featured <span className="text-gold-500">Article</span>
              </Heading>

              <Link href={`/blog/${featuredPost.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image */}
                    {featuredPost.image && (
                      <div className="h-64 md:h-80 overflow-hidden bg-gray-200">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gold-500" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-gold-500" />
                          <span>{featuredPost.author}</span>
                        </div>
                      </div>

                      <span className="inline-block mb-4 px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full w-fit">
                        {featuredPost.category}
                      </span>

                      <Heading size="h2" className="mb-3 text-olive-900 group-hover:text-gold-500 transition-colors">
                        {featuredPost.title}
                      </Heading>

                      <Text className="text-gray-600 mb-4">
                        {featuredPost.subtitle}
                      </Text>

                      <Text className="text-gray-700 mb-8 leading-relaxed">
                        {featuredPost.excerpt}
                      </Text>

                      <Button variant="gold" className="w-fit">
                        Read Full Article <ArrowRight size={18} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          </Container>
        </Section>
      )}

      {/* Other Posts */}
      <Section background="white">
        <Container>
          <FadeIn className="mb-12">
            <Heading size="h2" className="mb-4 text-center">
              More <span className="text-gold-500">Articles</span>
            </Heading>
            <Text className="text-center text-gray-600 max-w-2xl mx-auto">
              Explore our library of articles on working capital financing, business growth, and lending strategies.
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link href={post.date === "Coming Soon" ? "#" : `/blog/${post.id}`}>
                  <Card className={`p-8 h-full flex flex-col ${post.date === "Coming Soon" ? "opacity-60 cursor-default" : "hover:shadow-lg transition-all duration-300 cursor-pointer group"}`}>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <Calendar size={16} className="text-gold-500" />
                      <span>{post.date}</span>
                    </div>

                    <span className="inline-block mb-4 px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full w-fit">
                      {post.category}
                    </span>

                    <Heading size="h3" className={`mb-2 text-olive-900 ${post.date !== "Coming Soon" ? "group-hover:text-gold-500 transition-colors" : ""}`}>
                      {post.title}
                    </Heading>

                    <Text className="text-gray-600 text-sm mb-4">
                      {post.subtitle}
                    </Text>

                    <Text className="text-gray-700 mb-6 flex-1 leading-relaxed">
                      {post.excerpt}
                    </Text>

                    {post.date !== "Coming Soon" && (
                      <Button variant="link" className="text-gold-500 hover:text-gold-600 p-0 flex items-center gap-2 w-fit">
                        Read More <ArrowRight size={16} />
                      </Button>
                    )}

                    {post.date === "Coming Soon" && (
                      <Text className="text-gold-600 font-semibold text-sm">
                        Coming Soon
                      </Text>
                    )}
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <Container>
          <FadeIn className="max-w-2xl mx-auto text-center">
            <Heading size="h2" className="mb-6">
              Want to Learn More?
            </Heading>
            <Text className="text-gray-700 text-lg mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest insights on working capital financing and business growth strategies.
            </Text>
            <Button variant="gold" size="lg">
              Schedule a Consultation
            </Button>
          </FadeIn>
        </Container>
      </Section>

      <IntroCallForm />
    </div>
  )
}
