/**
 * /llms-full.txt — Full-content GEO endpoint
 *
 * 2026 GEO convention: ship a single, plain-text concatenation of the site's
 * most important content so that AI assistants (ChatGPT search, Perplexity,
 * Claude, Gemini) can ingest the canonical knowledge of the business in one
 * fetch — without crawling 40+ pages and dropping content past their token
 * window.
 *
 * Companion to /llms.txt (which is a short index). This route returns the long
 * form: company profile + every solution + every FAQ + every blog post excerpt
 * with links back to canonical URLs.
 */

import { NextResponse } from 'next/server'
import { companyInfo, founder, coreValues, serveFundingProcess } from '@/data/company-info'
import { fundingSolutions } from '@/data/solutions'
import {
  topLevelFAQs,
  aboutServeFundingFAQs,
  workingCapitalFAQs,
  solutionSpecificFAQs,
  solutionComparisonFAQs,
} from '@/data/faq-data'
import { fundingCases } from '@/data/fundingData'
import { getBlogPosts } from '@/lib/blog-utils'
import { getTitleAsString } from '@/lib/solution-helpers'
import type { FAQ } from '@/types/faq'

export const dynamic = 'force-static'
// Revalidate once a day — content changes are infrequent and stale-by-1-day is fine for AI ingestion.
export const revalidate = 86400

const SITE = 'https://servefunding.com'

function renderFaqList(title: string, faqs: FAQ[]): string {
  if (!faqs.length) return ''
  const items = faqs.map(f => `### ${f.q}\n\n${f.a}`).join('\n\n')
  return `## ${title}\n\n${items}\n`
}

function renderSolutions(): string {
  const blocks = fundingSolutions.map(s => {
    const title = getTitleAsString(s.title)
    const features = (s.features || []).map(f => `- ${f}`).join('\n')
    const bestFor = s.bestFor?.length
      ? `\n\n**Best for:**\n${s.bestFor.map(b => `- ${b}`).join('\n')}`
      : ''
    return [
      `### ${title}`,
      `Canonical URL: ${SITE}/solutions/${s.id}`,
      `Category: ${s.category}`,
      '',
      `**What it is:** ${s.whatIs}`,
      '',
      s.fullDesc,
      '',
      '**Features & terms:**',
      features,
      bestFor,
    ].join('\n')
  })
  return `## Funding Solutions\n\n${blocks.join('\n\n---\n\n')}\n`
}

function renderCaseStudies(): string {
  if (!fundingCases.length) return ''
  const blocks = fundingCases.map(c => [
    `### ${c.amount} — ${c.title} (${c.company})`,
    `Industry: ${c.industry} | Funding type: ${c.fundingType} | Timeline: ${c.timeline}`,
    '',
    c.description,
    '',
    c.fullStory,
    '',
    `**Challenge resolved:** ${c.challengeResolved}`,
  ].join('\n'))
  return `## Case Studies\n\n${blocks.join('\n\n---\n\n')}\n`
}

function renderBlogPosts(): string {
  const posts = getBlogPosts()
  if (!posts.length) return ''

  const sorted = [...posts].sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  const blocks = sorted.map(p => {
    const updated = p.lastUpdated ? ` (updated ${p.lastUpdated})` : ''
    return [
      `### ${p.title}`,
      `${SITE}/blog/${p.id}`,
      `Published: ${p.date}${updated} | Author: ${p.author} | Category: ${p.category}`,
      '',
      p.excerpt,
    ].join('\n')
  })
  return `## Blog Posts\n\n${blocks.join('\n\n---\n\n')}\n`
}

function renderCompany(): string {
  const values = coreValues
    .map(v => `- **${v.acronym} — ${v.value}**: ${v.description}`)
    .join('\n')
  const process = serveFundingProcess
    .map(s => `${s.step}. **${s.name}** — ${s.description}`)
    .join('\n')

  return [
    `# Serve Funding — Full Knowledge Base`,
    '',
    `> ${companyInfo.description}`,
    '',
    `Last generated: ${new Date().toISOString().split('T')[0]}`,
    '',
    `## Company`,
    '',
    `- Name: ${companyInfo.name}`,
    `- Tagline: ${companyInfo.tagline}`,
    `- Founded: ${companyInfo.founded.year} (${companyInfo.founded.description})`,
    `- Address: ${companyInfo.contact.address.street}, ${companyInfo.contact.address.city}, ${companyInfo.contact.address.state} ${companyInfo.contact.address.zip}`,
    `- Phone: ${companyInfo.contact.phone}`,
    `- Email: ${companyInfo.contact.email}`,
    `- Website: ${SITE}`,
    `- LinkedIn (founder): ${founder.linkedinUrl}`,
    '',
    `## Key Metrics`,
    '',
    `- Total capital facilitated: ${companyInfo.metrics.totalCapitalFacilitated}`,
    `- Total clients served: ${companyInfo.metrics.totalClientsServed}`,
    `- Average deal size: ${companyInfo.metrics.averageDealSize}`,
    `- Repeat client rate: ${companyInfo.metrics.repeatClientRate}`,
    `- Deal range: $250K – $100MM`,
    `- Funding speed: 3–10 business days (vs. 60–90 days at traditional banks)`,
    `- Fee structure: success-only, 1–2% of funded amount`,
    `- Lender network: 30+ alternative lenders`,
    '',
    `## Founder`,
    '',
    `**${founder.name}**, ${founder.title}`,
    '',
    founder.background,
    '',
    founder.motivation,
    '',
    `Memberships: ${founder.credentials.memberships.join(', ')}`,
    '',
    `## Core Values — TRUST`,
    '',
    values,
    '',
    `## Process: Discovery → Diligence → Delivery`,
    '',
    process,
    '',
  ].join('\n')
}

function buildLlmsFull(): string {
  const allFaqs = [
    renderFaqList('Top Questions', topLevelFAQs),
    renderFaqList('About Serve Funding', aboutServeFundingFAQs),
    renderFaqList('Working Capital, MCA & Refinancing', workingCapitalFAQs),
    renderFaqList('Funding Solutions in Detail', solutionSpecificFAQs),
    renderFaqList('Comparing Your Options', solutionComparisonFAQs),
  ].filter(Boolean).join('\n')

  return [
    renderCompany(),
    renderSolutions(),
    `For a side-by-side comparison of all 12 funding solutions, see ${SITE}/solutions/compare`,
    '',
    renderCaseStudies(),
    allFaqs,
    renderBlogPosts(),
    '',
    `---`,
    `Index version: see ${SITE}/llms.txt`,
    `Generated by Serve Funding's GEO endpoint. All data sourced from the live site at ${SITE}.`,
  ].join('\n\n')
}

export async function GET() {
  const body = buildLlmsFull()
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
