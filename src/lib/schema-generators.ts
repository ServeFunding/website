/**
 * SCHEMA MARKUP GENERATORS
 *
 * Reusable functions to generate JSON-LD schema markup for various content types.
 * These improve AI visibility and structured data understanding.
 *
 * Used for: SEO, Featured Snippets, Google Rich Results, LLM training data
 */

// ============================================================================
// ORGANIZATION SCHEMA (Global - Add to Layout)
// ============================================================================

export const getOrganizationSchema = (config: {
  name: string
  description: string
  url: string
  logo: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  foundingDate: string
  founderName?: string
  knowsAbout: string[]
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
}) => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": config.url,
  "name": config.name,
  "description": config.description,
  "url": config.url,
  "logo": config.logo,
  "image": config.logo,
  "telephone": config.phone,
  "email": config.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": config.address.street,
    "addressLocality": config.address.city,
    "addressRegion": config.address.state,
    "postalCode": config.address.zip,
    "addressCountry": config.address.country
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "foundingDate": config.foundingDate,
  ...(config.founderName && {
    "founder": {
      "@type": "Person",
      "name": config.founderName
    }
  }),
  "knowsAbout": config.knowsAbout,
  "sameAs": [
    // Add social media URLs
  ],
  ...(config.aggregateRating && {
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": config.aggregateRating.ratingValue,
      "reviewCount": config.aggregateRating.reviewCount
    }
  })
})

// ============================================================================
// FINANCIAL SERVICE SCHEMA (For each funding solution)
// ============================================================================

export const getFinancialServiceSchema = (service: {
  id: string
  title: string
  shortDesc: string
  fullDesc: string
  features: string[]
  ratesAndTerms?: {
    minAmount?: string
    maxAmount?: string
    interestRate?: string
    closingTime?: string
  }
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://servefunding.com/solutions#${service.id}`,
  "serviceType": service.title,
  "name": service.title,
  "description": service.fullDesc,
  "additionalType": "FinancialService",
  "provider": {
    "@type": "FinancialService",
    "@id": "https://servefunding.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "category": "Working Capital Financing",
  "offers": {
    "@type": "Offer",
    "name": service.title,
    "priceCurrency": "USD",
    ...(service.ratesAndTerms?.minAmount && {
      "priceRange": `${service.ratesAndTerms.minAmount} - ${service.ratesAndTerms.maxAmount}`
    })
  }
})

// ============================================================================
// FAQ PAGE SCHEMA
// ============================================================================

export const getFAQPageSchema = (faqs: Array<{
  question: string
  answer: string
}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

// ============================================================================
// ARTICLE/BLOG POST SCHEMA
// ============================================================================

export const getArticleSchema = (article: {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  author?: {
    name: string
    url?: string
  }
  content: string
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.headline,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author?.name || "Serve Funding",
    ...(article.author?.url && { "url": article.author.url })
  },
  "publisher": {
    "@type": "Organization",
    "name": "Serve Funding",
    "logo": {
      "@type": "ImageObject",
      "url": "https://servefunding.com/logo.png"
    }
  },
  "articleBody": article.content
})

// ============================================================================
// BREADCRUMB SCHEMA (Navigation Context)
// ============================================================================

export const getBreadcrumbSchema = (items: Array<{
  name: string
  url: string
}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

// ============================================================================
// PERSON SCHEMA (Founder/Team)
// ============================================================================

export const getPersonSchema = (person: {
  name: string
  jobTitle: string
  description: string
  linkedinUrl?: string
  image?: string
  education?: {
    school: string
    degree: string
  }
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.jobTitle,
  "description": person.description,
  "image": person.image,
  ...(person.linkedinUrl && { "sameAs": person.linkedinUrl }),
  ...(person.education && {
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": person.education.school,
      "educationalCredentialAwarded": person.education.degree
    }
  })
})

// ============================================================================
// REVIEW/TESTIMONIAL SCHEMA (Case Studies)
// ============================================================================

export const getReviewSchema = (review: {
  companyName: string
  title: string
  description: string
  fullStory: string
  ratingValue?: number
  amount: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "FinancialService",
    "name": "Serve Funding"
  },
  "name": review.title,
  "reviewBody": `${review.description}\n\n${review.fullStory}`,
  "author": {
    "@type": "Organization",
    "name": review.companyName
  },
  ...(review.ratingValue && {
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.ratingValue,
      "bestRating": "5"
    }
  })
})

// ============================================================================
// AGGREGATE RATING SCHEMA (Overall Reputation)
// ============================================================================

export const getAggregateRatingSchema = (stats: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": stats.ratingValue,
  "reviewCount": stats.reviewCount,
  "bestRating": stats.bestRating || 5,
  "worstRating": stats.worstRating || 1
})

// ============================================================================
// HOW-TO SCHEMA (Process Steps)
// ============================================================================

export const getHowToSchema = (howTo: {
  name: string
  description: string
  image?: string
  steps: Array<{
    name: string
    description: string
    image?: string
  }>
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howTo.name,
  "description": howTo.description,
  ...(howTo.image && { "image": howTo.image }),
  "step": howTo.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.description,
    ...(step.image && { "image": step.image })
  }))
})

// ============================================================================
// COMPARISON SCHEMA (For comparison tables)
// ============================================================================

export const getComparisonSchema = (comparison: {
  title: string
  description: string
  items: Array<{
    name: string
    pros: string[]
    cons: string[]
  }>
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": comparison.title,
  "description": comparison.description,
  "articleBody": `Comparison of: ${comparison.items.map(i => i.name).join(", ")}`
})

// ============================================================================
// HELPER: Create Full Page Schema Bundle
// ============================================================================

export const getFullPageSchemaBundle = (config: {
  organizationData: any
  pageSchemas: any[]
  breadcrumbs?: any
}) => [
  config.organizationData,
  ...(config.breadcrumbs ? [config.breadcrumbs] : []),
  ...config.pageSchemas
]

// ============================================================================
// IMPLEMENTATION HELPERS
// ============================================================================

/**
 * Convert schema object to JSON string for script tag
 * Use in: <script dangerouslySetInnerHTML={{__html: schemaToScript(schema)}} />
 */
export const schemaToScript = (schema: any): string => {
  return JSON.stringify(schema, null, 2)
}

/**
 * Create script tag component data
 */
export const createSchemaScript = (schema: any) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: {
    __html: schemaToScript(schema)
  }
})

export default {
  getOrganizationSchema,
  getFinancialServiceSchema,
  getFAQPageSchema,
  getArticleSchema,
  getBreadcrumbSchema,
  getPersonSchema,
  getReviewSchema,
  getAggregateRatingSchema,
  getHowToSchema,
  getComparisonSchema,
  getFullPageSchemaBundle,
  schemaToScript,
  createSchemaScript
}
