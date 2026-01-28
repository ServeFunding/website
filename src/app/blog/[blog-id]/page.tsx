import Markdoc from '@markdoc/markdoc'
import {
  Section,
  Container,
  Heading,
  Text,
  FadeIn,
  Card
} from '@/components/ui'
import { BlogHeroFadeIn } from '@/components/blog-hero-fade-in'
import { Breadcrumb } from '@/components/breadcrumb'
import { CTA } from '@/components/cta'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { SocialShareButtons } from '@/components/SocialShareButtons'
import { getArticleSchema } from '@/lib/schema-generators'
import { getBlogPost, getBlogPostIds, isPostPublished } from '@/lib/blog-utils'
import { fundingSolutions } from '@/data/solutions'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { renderMarkdoc } from '@/markdoc/renderer'
import { config } from '@/markdoc/config'

interface Props {
  params: Promise<{
    'blog-id': string
  }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const postIds = getBlogPostIds()
  return postIds.map((id) => ({
    'blog-id': id,
  }))
}

// Format date for display
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export async function generateMetadata({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = getBlogPost(blogId)

  if (!blogPost || !isPostPublished(blogPost.date)) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  // Use blog post image if available, fallback to logo
  const imageUrl = blogPost.image
    ? `https://servefunding.com${blogPost.image}`
    : "https://servefunding.com/Logo_Full-color_long_samecolor-1.webp"

  return {
    title: `${blogPost.title} | Serve Funding`,
    description: blogPost.excerpt,
    openGraph: {
      title: blogPost.title,
      description: blogPost.excerpt,
      url: `https://servefunding.com/blog/${blogPost.id}`,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1024,
          height: 728,
          alt: blogPost.title,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = getBlogPost(blogId)

  if (!blogPost || !isPostPublished(blogPost.date)) {
    notFound()
  }

  const formattedDate = formatDate(blogPost.date)

  // Parse markdown content
  const ast = Markdoc.parse(blogPost.content)
  const transformed = Markdoc.transform(ast, config)

  // Generate article schema
  const articleSchema = getArticleSchema({
    headline: blogPost.title,
    description: blogPost.excerpt,
    datePublished: formattedDate,
    author: {
      name: blogPost.author,
      url: 'https://servefunding.com/about-us'
    },
    content: blogPost.excerpt
  })

  return (
    <>
      {/* Schema Markup */}
      <SchemaRenderer schema={articleSchema} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: blogPost.title }
      ]} />

      {/* Hero Section */}
      <BlogHeroFadeIn
        title={blogPost.title}
        subtitle={blogPost.subtitle}
        date={formattedDate}
        author={blogPost.author}
        authorTitle="Founder & CEO"
        authorPhoto="/Michael Headshot.webp"
        category={blogPost.category}
        backgroundImage={blogPost.image}
      />

      {/* Main Article Content */}
      <Section background="white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto">
            {renderMarkdoc(transformed)}
          </FadeIn>

          {/* Social Share Buttons */}
          <SocialShareButtons
            title={blogPost.title}
            excerpt={blogPost.excerpt}
            url={`https://servefunding.com/blog/${blogPost.id}`}
          />
        </Container>
      </Section>

      {/* Related Solutions Section */}
      {blogPost.relatedSolutions && blogPost.relatedSolutions.length > 0 && (
        <Section background="white">
          <Container>
            <FadeIn className="text-center mb-12">
              <Heading size="h2" className="mb-4">Related Funding Solutions</Heading>
              <Text size="lg" className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Explore the funding solutions mentioned above.
              </Text>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {blogPost.relatedSolutions.map((solutionId) => {
                const solution = fundingSolutions.find(s => s.id === solutionId)
                return solution ? (
                  <Link key={solutionId} href={`/solutions#${solutionId}`} className="group">
                    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                      <Heading size="h3" className="mb-3 text-olive-900 group-hover:text-gold-500 transition-colors">
                        {solution.title}
                      </Heading>
                      <Text className="text-gray-600 text-sm mb-4">
                        {solution.shortDesc}
                      </Text>
                      <div className="text-gold-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <ChevronRight size={16} />
                      </div>
                    </Card>
                  </Link>
                ) : null
              })}
            </div>
          </Container>
        </Section>
      )}

      <CTA
        title="Ready to explore your financing options?"
        text="Let's discuss how we can help your business grow with the right working capital solution."
        buttonText="Get in Touch"
        useBG={true}
      />
    </>
  )
}
