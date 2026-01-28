import fs from 'fs'
import path from 'path'

export interface BlogPost {
  id: string
  title: string
  subtitle: string
  excerpt: string
  author: string
  authorImage?: string
  date: string
  category: string
  image?: string
  relatedSolutions?: string[]
  relatedIndustries?: string[]
}

/**
 * Parse YAML frontmatter from markdown content
 */
function parseFrontmatter(content: string): Record<string, any> {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  let frontmatter: Record<string, any> = {}

  if (frontmatterMatch) {
    const yamlContent = frontmatterMatch[1]
    const lines = yamlContent.split('\n')
    for (const line of lines) {
      const [key, ...valueParts] = line.split(':')
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim()
        const cleanValue = value.replace(/^["']|["']$/g, '')

        if (cleanValue === 'true') frontmatter[key.trim()] = true
        else if (cleanValue === 'false') frontmatter[key.trim()] = false
        else if (!isNaN(Number(cleanValue)) && cleanValue !== '') frontmatter[key.trim()] = Number(cleanValue)
        else if (cleanValue.startsWith('[') && cleanValue.endsWith(']')) {
          // Parse arrays like [item1, item2]
          frontmatter[key.trim()] = cleanValue
            .slice(1, -1)
            .split(',')
            .map(item => item.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean)
        }
        else frontmatter[key.trim()] = cleanValue
      }
    }
  }

  return frontmatter
}

/**
 * Get all blog posts from the /posts directory
 * Only returns posts with publish dates on or before today
 */
export function getBlogPosts(): BlogPost[] {
  const postsDir = path.join(process.cwd(), 'posts')

  // If posts directory doesn't exist, return empty array (no posts yet)
  if (!fs.existsSync(postsDir)) {
    return []
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdoc'))

  return files
    .map(file => {
      const filePath = path.join(postsDir, file)
      const source = fs.readFileSync(filePath, 'utf-8')
      const frontmatter = parseFrontmatter(source)
      const id = file.replace('.mdoc', '')

      return {
        id,
        title: frontmatter.title || '',
        subtitle: frontmatter.subtitle || '',
        excerpt: frontmatter.excerpt || '',
        author: frontmatter.author || '',
        authorImage: frontmatter.authorImage,
        date: frontmatter.date || '',
        category: frontmatter.category || '',
        image: frontmatter.image,
        relatedSolutions: frontmatter.relatedSolutions,
        relatedIndustries: frontmatter.relatedIndustries,
      } as BlogPost
    })
    .filter(post => {
      if (!post.title || !post.date || !post.category) return false
      const postDate = new Date(post.date + 'T00:00:00Z')
      return postDate <= today
    })
}

/**
 * Get a single blog post by ID
 */
export function getBlogPost(id: string): (BlogPost & { content: string }) | null {
  const postsDir = path.join(process.cwd(), 'posts')
  const postPath = path.join(postsDir, `${id}.mdoc`)

  if (!fs.existsSync(postPath)) {
    return null
  }

  const source = fs.readFileSync(postPath, 'utf-8')
  const frontmatter = parseFrontmatter(source)

  // Remove frontmatter from content
  const content = source.replace(/^---\n[\s\S]*?\n---\n/, '')

  return {
    id,
    title: frontmatter.title || '',
    subtitle: frontmatter.subtitle || '',
    excerpt: frontmatter.excerpt || '',
    author: frontmatter.author || '',
    authorImage: frontmatter.authorImage,
    date: frontmatter.date || '',
    category: frontmatter.category || '',
    image: frontmatter.image,
    relatedSolutions: frontmatter.relatedSolutions,
    relatedIndustries: frontmatter.relatedIndustries,
    content,
  }
}

/**
 * Get all blog post IDs for static generation
 */
export function getBlogPostIds(): string[] {
  const postsDir = path.join(process.cwd(), 'posts')
  if (!fs.existsSync(postsDir)) return []

  return fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.mdoc'))
    .map(file => file.replace('.mdoc', ''))
}
