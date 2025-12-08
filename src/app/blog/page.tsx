import { ArrowRight, Calendar } from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  StaggerContainer,
  StaggerItem,
  Button
} from '@/components/ui'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { CTA } from '@/components/cta'
import { Breadcrumb } from '@/components/breadcrumb'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { blogPosts } from '@/data/blog-posts'
import Link from 'next/link'

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate + 'T00:00:00Z')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Blog collection schema
const blogCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Serve Funding Blog",
  "description": "Insights, case studies, and financing guides for growing businesses",
  "url": "https://servefunding.com/blog",
  "mainEntity": {
    "@type": "Blog",
    "name": "Serve Funding Blog",
    "blogPosts": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://servefunding.com/blog/${post.id}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  }
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Schema Markup */}
      <SchemaRenderer schema={blogCollectionSchema} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'Blog' }]} />

      {/* Hero Section */}
      <HeroFadeIn
        title="Serve Funding Blog"
        subtitle="Insights on working capital financing, business growth strategies, and alternative lending for entrepreneurs and business leaders."
      />

      {/* Blog Posts List */}
      <Section background="white">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  <Card className="p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <Calendar size={16} className="text-gold-500" />
                      <span>{formatDate(post.date)}</span>
                    </div>

                    <span className="inline-block mb-4 px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full w-fit">
                      {post.category}
                    </span>

                    <Heading size="h3" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                      {post.title}
                    </Heading>

                    <Text className="text-gray-600 text-sm mb-4">
                      {post.subtitle}
                    </Text>

                    <Text className="text-gray-700 mb-6 flex-1 leading-relaxed">
                      {post.excerpt}
                    </Text>

                    <Button variant="link" className="text-gold-500 hover:text-gold-600 p-0 flex items-center gap-2 w-fit">
                      Read More <ArrowRight size={16} />
                    </Button>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to explore your financing options?"
        text="Let's discuss how we can help your business grow with the right working capital solution."
        buttonText="Start Your Consultation"
        source="blog"
        useBG={true}
      />
    </div>
  )
}
