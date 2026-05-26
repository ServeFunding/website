import { MetadataRoute } from 'next'
import { fundingSolutions } from '@/data/solutions'
import { getBlogPosts } from '@/lib/blog-utils'

// Stable build-time date for static routes — using `new Date()` per-route makes
// every URL look freshly updated to crawlers, which is noise, not signal.
// Bump this when you ship a meaningful redesign or content sweep of static pages.
const STATIC_PAGES_LAST_REVIEWED = new Date('2026-05-01T00:00:00Z')

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://servefunding.com'

  const routes = [
    '',
    '/about-us',
    '/solutions',
    '/solutions/compare',
    '/fundings',
    '/partners',
    '/discover',
    '/faq',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: STATIC_PAGES_LAST_REVIEWED,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const solutionRoutes = fundingSolutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.id}`,
    lastModified: STATIC_PAGES_LAST_REVIEWED,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const blogPosts = getBlogPosts()
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date((post.lastUpdated || post.date) + 'T00:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...solutionRoutes, ...blogRoutes]
}
