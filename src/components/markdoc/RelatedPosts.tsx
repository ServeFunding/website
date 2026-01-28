import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getBlogPosts } from '@/lib/blog-utils'

interface RelatedPostsProps {
  category?: string
  solution?: string
  limit?: number
}

export function RelatedPosts({ category, solution, limit = 3 }: RelatedPostsProps) {
  const blogPosts = getBlogPosts()

  // Filter by category or solution
  const relatedPosts = blogPosts
    .filter((post) => {
      if (category) return post.category === category
      if (solution) return post.relatedSolutions?.includes(solution)
      return false
    })
    .slice(0, limit)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-olive-900 mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="group cursor-pointer h-full">
              <div className="border border-gray-200 rounded-lg p-4 h-full hover:border-gold-500 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-2 text-olive-900 group-hover:text-gold-500 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-gold-500 font-medium">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
