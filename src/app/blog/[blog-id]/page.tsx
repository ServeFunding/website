import {
  Section,
  Container,
  Heading,
  Text,
  FadeIn
} from '@/components/ui'
import { BlogHeroFadeIn } from '@/components/blog-hero-fade-in'
import { Breadcrumb } from '@/components/breadcrumb'
import { CTA } from '@/components/cta'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { SocialShareButtons } from '@/components/SocialShareButtons'
import { getArticleSchema } from '@/lib/schema-generators'
import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    'blog-id': string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    'blog-id': post.id,
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
  const blogPost = blogPosts.find(p => p.id === blogId)

  if (!blogPost) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  return {
    title: `${blogPost.title} | Serve Funding`,
    description: blogPost.excerpt,
    openGraph: {
      title: blogPost.title,
      description: blogPost.excerpt,
      url: `https://servefunding.com/blog/${blogPost.id}`,
      type: 'article',
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = blogPosts.find(p => p.id === blogId)

  if (!blogPost) {
    notFound()
  }

  const formattedDate = formatDate(blogPost.date)

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
      />

      {/* Main Article Content */}
      <Section background="white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto prose prose-lg">
            {blogPost.content.map((block, index) => {
              if (block.type === 'h2') {
                return (
                  <Heading key={index} size="h2">
                    {block.text}
                  </Heading>
                )
              }

              if (block.type === 'h3') {
                return (
                  <Heading key={index} size="h3">
                    {block.text}
                  </Heading>
                )
              }

              if (block.type === 'blockquote') {
                return (
                  <div key={index} className="p-8 bg-gold-50 border-l-4 border-gold-500 mb-8">
                    <Text className="text-gray-700 leading-relaxed italic">
                      {block.text}
                    </Text>
                  </div>
                )
              }

              // Default to paragraph for 'p' type
              return (
                <Text key={index} className="text-gray-700 leading-relaxed mb-6">
                  {block.text}
                </Text>
              )
            })}
          </FadeIn>

          {/* Social Share Buttons */}
          <SocialShareButtons
            title={blogPost.title}
            excerpt={blogPost.excerpt}
            url={`https://servefunding.com/blog/${blogPost.id}`}
          />
        </Container>
      </Section>

      <CTA
        title="Ready to explore your financing options?"
        text="Let's discuss how we can help your business grow with the right working capital solution."
        buttonText="Get in Touch"
        source={`blog-${blogPost.id}`}
        useBG={true}
      />
    </>
  )
}
