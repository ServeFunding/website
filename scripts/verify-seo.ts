#!/usr/bin/env node
/**
 * SEO Verification Script
 *
 * Validates all metadata (titles, descriptions) across the codebase
 * to prevent SEO issues from being deployed to production.
 *
 * Runs at build time and fails the build if validation errors are found.
 */

import fs from 'fs'
import path from 'path'

// Constants
const TITLE_MAX_LENGTH = 70
const DESCRIPTION_MAX_LENGTH = 160
const DESCRIPTION_MIN_LENGTH = 120
const SUFFIX = ' | Serve Funding' // 17 chars
const TITLE_WITH_SUFFIX_MAX = TITLE_MAX_LENGTH - SUFFIX.length // 53 chars

interface ValidationResult {
  file: string
  field: string
  value: string
  length: number
  maxLength?: number
  minLength?: number
  valid: boolean
  error?: string
}

/**
 * Extract YAML frontmatter from Markdoc files
 */
function extractFrontmatter(content: string): Record<string, string> {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  const frontmatter: Record<string, string> = {}

  if (frontmatterMatch) {
    const yamlContent = frontmatterMatch[1]
    const lines = yamlContent.split('\n')

    for (const line of lines) {
      if (!line.trim()) continue
      const colonIndex = line.indexOf(':')
      if (colonIndex === -1) continue

      const key = line.substring(0, colonIndex).trim()
      let value = line.substring(colonIndex + 1).trim()

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }

      if (key) {
        frontmatter[key] = value
      }
    }
  }

  return frontmatter
}

/**
 * Validate blog posts from /posts/*.mdoc
 */
function validateBlogPosts(): ValidationResult[] {
  const results: ValidationResult[] = []
  const postsDir = path.join(process.cwd(), 'posts')

  if (!fs.existsSync(postsDir)) {
    return results
  }

  const mdocFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdoc'))

  for (const file of mdocFiles) {
    const filePath = path.join(postsDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const frontmatter = extractFrontmatter(content)

    // Validate title (will get suffix added)
    if (frontmatter.title) {
      const title = frontmatter.title
      const finalTitleLength = title.length + SUFFIX.length

      if (finalTitleLength > TITLE_MAX_LENGTH) {
        results.push({
          file: `posts/${file}`,
          field: 'title',
          value: title,
          length: finalTitleLength,
          maxLength: TITLE_MAX_LENGTH,
          valid: false,
          error: `Title with suffix exceeds ${TITLE_MAX_LENGTH} chars (${finalTitleLength} chars). Max title length: ${TITLE_WITH_SUFFIX_MAX}`
        })
      } else {
        results.push({
          file: `posts/${file}`,
          field: 'title',
          value: title,
          length: finalTitleLength,
          maxLength: TITLE_MAX_LENGTH,
          valid: true
        })
      }
    }

    // Validate excerpt
    if (frontmatter.excerpt) {
      const excerpt = frontmatter.excerpt

      if (excerpt.length > DESCRIPTION_MAX_LENGTH) {
        results.push({
          file: `posts/${file}`,
          field: 'excerpt',
          value: excerpt,
          length: excerpt.length,
          maxLength: DESCRIPTION_MAX_LENGTH,
          valid: false,
          error: `Excerpt exceeds ${DESCRIPTION_MAX_LENGTH} chars (${excerpt.length} chars)`
        })
      } else if (excerpt.length < DESCRIPTION_MIN_LENGTH) {
        results.push({
          file: `posts/${file}`,
          field: 'excerpt',
          value: excerpt,
          length: excerpt.length,
          minLength: DESCRIPTION_MIN_LENGTH,
          valid: false,
          error: `Excerpt is below recommended minimum ${DESCRIPTION_MIN_LENGTH} chars (${excerpt.length} chars)`
        })
      } else {
        results.push({
          file: `posts/${file}`,
          field: 'excerpt',
          value: excerpt,
          length: excerpt.length,
          maxLength: DESCRIPTION_MAX_LENGTH,
          valid: true
        })
      }
    } else {
      results.push({
        file: `posts/${file}`,
        field: 'excerpt',
        value: '',
        length: 0,
        maxLength: DESCRIPTION_MAX_LENGTH,
        valid: false,
        error: 'Missing excerpt field'
      })
    }
  }

  return results
}

/**
 * Validate centralized SEO data from src/lib/seo.ts
 */
function validateCentralizedSEO(): ValidationResult[] {
  const results: ValidationResult[] = []

  try {
    const seoPath = path.join(process.cwd(), 'src', 'lib', 'seo.ts')
    const content = fs.readFileSync(seoPath, 'utf-8')

    // Find each metadata object by matching key: { ... }
    // Use a more robust approach to handle quotes inside strings
    const objectPattern = /(\w+)\s*:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g
    let match

    while ((match = objectPattern.exec(content)) !== null) {
      const key = match[1]
      const objectContent = match[2]

      // Only process pageMetaData entries (they contain title, description, keywords, canonical)
      if (!objectContent.includes('title') || !objectContent.includes('description')) {
        continue
      }

      // Extract title - look for title: "..."
      const titleMatch = objectContent.match(/title\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/);
      if (titleMatch) {
        const title = titleMatch[1]

        if (title.length > TITLE_MAX_LENGTH) {
          results.push({
            file: `src/lib/seo.ts (${key})`,
            field: 'title',
            value: title,
            length: title.length,
            maxLength: TITLE_MAX_LENGTH,
            valid: false,
            error: `Title exceeds ${TITLE_MAX_LENGTH} chars (${title.length} chars)`
          })
        } else {
          results.push({
            file: `src/lib/seo.ts (${key})`,
            field: 'title',
            value: title,
            length: title.length,
            maxLength: TITLE_MAX_LENGTH,
            valid: true
          })
        }
      }

      // Extract description - look for description: "..."
      const descMatch = objectContent.match(/description\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/);
      if (descMatch) {
        const description = descMatch[1]

        if (description.length > DESCRIPTION_MAX_LENGTH) {
          results.push({
            file: `src/lib/seo.ts (${key})`,
            field: 'description',
            value: description,
            length: description.length,
            maxLength: DESCRIPTION_MAX_LENGTH,
            valid: false,
            error: `Description exceeds ${DESCRIPTION_MAX_LENGTH} chars (${description.length} chars)`
          })
        } else if (description.length < DESCRIPTION_MIN_LENGTH) {
          results.push({
            file: `src/lib/seo.ts (${key})`,
            field: 'description',
            value: description,
            length: description.length,
            minLength: DESCRIPTION_MIN_LENGTH,
            valid: false,
            error: `Description is below recommended minimum ${DESCRIPTION_MIN_LENGTH} chars (${description.length} chars)`
          })
        } else {
          results.push({
            file: `src/lib/seo.ts (${key})`,
            field: 'description',
            value: description,
            length: description.length,
            maxLength: DESCRIPTION_MAX_LENGTH,
            valid: true
          })
        }
      }
    }
  } catch (error) {
    console.warn('Warning: Could not parse src/lib/seo.ts - skipping validation')
  }

  return results
}

/**
 * Validate solutions data from src/data/solutions.tsx
 */
function validateSolutionsData(): ValidationResult[] {
  const results: ValidationResult[] = []

  try {
    const solutionsPath = path.join(process.cwd(), 'src', 'data', 'solutions.tsx')
    const content = fs.readFileSync(solutionsPath, 'utf-8')

    // Match each solution object: { id: "...", title: "...", seoTitle: "...", shortDesc: "..." }
    const solutionMatches = content.matchAll(/{\s*id:\s*["']([^"']+)["'][^}]*?}/gs)

    for (const match of solutionMatches) {
      const solutionBlock = match[0]
      const id = match[1]

      // Extract seoTitle
      const seoTitleMatch = solutionBlock.match(/seoTitle\s*:\s*["']([^"']+)["']/)
      if (seoTitleMatch) {
        const seoTitle = seoTitleMatch[1]
        const finalTitleLength = seoTitle.length + SUFFIX.length

        if (finalTitleLength > TITLE_MAX_LENGTH) {
          results.push({
            file: `src/data/solutions.tsx (${id})`,
            field: 'seoTitle',
            value: seoTitle,
            length: finalTitleLength,
            maxLength: TITLE_MAX_LENGTH,
            valid: false,
            error: `SEO Title with suffix exceeds ${TITLE_MAX_LENGTH} chars (${finalTitleLength} chars). Max title length: ${TITLE_WITH_SUFFIX_MAX}`
          })
        } else {
          results.push({
            file: `src/data/solutions.tsx (${id})`,
            field: 'seoTitle',
            value: seoTitle,
            length: finalTitleLength,
            maxLength: TITLE_MAX_LENGTH,
            valid: true
          })
        }
      }

      // Extract shortDesc
      const shortDescMatch = solutionBlock.match(/shortDesc\s*:\s*["']([^"']+)["']/)
      if (shortDescMatch) {
        const shortDesc = shortDescMatch[1]

        if (shortDesc.length > DESCRIPTION_MAX_LENGTH) {
          results.push({
            file: `src/data/solutions.tsx (${id})`,
            field: 'shortDesc',
            value: shortDesc,
            length: shortDesc.length,
            maxLength: DESCRIPTION_MAX_LENGTH,
            valid: false,
            error: `Short description exceeds ${DESCRIPTION_MAX_LENGTH} chars (${shortDesc.length} chars)`
          })
        } else if (shortDesc.length < DESCRIPTION_MIN_LENGTH) {
          results.push({
            file: `src/data/solutions.tsx (${id})`,
            field: 'shortDesc',
            value: shortDesc,
            length: shortDesc.length,
            minLength: DESCRIPTION_MIN_LENGTH,
            valid: false,
            error: `Short description is below recommended minimum ${DESCRIPTION_MIN_LENGTH} chars (${shortDesc.length} chars)`
          })
        } else {
          results.push({
            file: `src/data/solutions.tsx (${id})`,
            field: 'shortDesc',
            value: shortDesc,
            length: shortDesc.length,
            maxLength: DESCRIPTION_MAX_LENGTH,
            valid: true
          })
        }
      }
    }
  } catch (error) {
    console.warn('Warning: Could not parse src/data/solutions.tsx - skipping validation')
  }

  return results
}

/**
 * Display validation results in a clear format
 */
function displayResults(allResults: ValidationResult[]): void {
  const failures = allResults.filter(r => !r.valid)
  const successes = allResults.filter(r => r.valid)

  console.log('\n📋 SEO Validation Report\n')
  console.log(`✅ Valid: ${successes.length} fields`)

  if (failures.length > 0) {
    console.log(`\n❌ Failures (${failures.length}):\n`)

    failures.forEach((fail, index) => {
      console.log(`  ${index + 1}. ${fail.file}`)
      console.log(`     Field: ${fail.field}`)
      console.log(`     Error: ${fail.error}`)

      const preview = fail.value.substring(0, 75).replace(/\n/g, ' ')
      const endEllipsis = fail.value.length > 75 ? '...' : ''
      console.log(`     Value: "${preview}${endEllipsis}"`)
      console.log()
    })
  }

  console.log(`\n📊 Summary: ${successes.length}/${allResults.length} fields pass validation\n`)
}

/**
 * Main validation runner
 */
function validateAllSEO(): void {
  console.log('\n🔍 Starting SEO Validation...\n')

  const allResults = [
    ...validateBlogPosts(),
    ...validateCentralizedSEO(),
    ...validateSolutionsData()
  ]

  if (allResults.length === 0) {
    console.log('⚠️  No SEO data found to validate')
    return
  }

  displayResults(allResults)

  const failures = allResults.filter(r => !r.valid)

  if (failures.length > 0) {
    console.error('❌ SEO Validation Failed')
    console.error('\nFix the errors above and try again.\n')
    console.error('Guidelines:')
    console.error(`  - Titles with " | Serve Funding" suffix must be ≤ ${TITLE_WITH_SUFFIX_MAX} chars`)
    console.error(`  - Descriptions must be ${DESCRIPTION_MIN_LENGTH}-${DESCRIPTION_MAX_LENGTH} chars`)
    console.error(`  - Blog post titles max: ${TITLE_WITH_SUFFIX_MAX} chars (suffix added by template)`)
    console.error(`  - Solution SEO titles max: ${TITLE_WITH_SUFFIX_MAX} chars (suffix added by template)\n`)
    process.exit(1)
  }

  console.log('✅ All SEO metadata passes validation\n')
  process.exit(0)
}

// Run validation
validateAllSEO()
