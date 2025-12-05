import { MetadataRoute } from 'next'
import { fundingSolutions } from '@/data/solutions'

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

  // Blog posts
  const blogRoutes = [
    'relationships-over-bots',
    'banker-saved-wedding-season'
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...solutionRoutes, ...blogRoutes]
}
