import { MetadataRoute } from 'next'
import { fundingSolutions } from '@/data/solutions'
import { getBlogPosts } from '@/lib/blog-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://servefunding.com'

  // Static routes
  const routes = [
    '',
    '/about-us',
    '/solutions',
    '/fundings',
    '/partners',
    '/contact-us',
    '/faq',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic solution routes
  const solutionRoutes = fundingSolutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Dynamic blog routes
  const blogPosts = getBlogPosts()
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...solutionRoutes, ...blogRoutes]
}
