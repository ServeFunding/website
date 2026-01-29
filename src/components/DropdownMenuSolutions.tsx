'use client'

import Link from "next/link"
import { Zap, FileText, Wrench } from "lucide-react"
import { COLORS } from "@/lib/colors"
import { trackNavClick } from "@/lib/tracking"
import type { FeaturedDropdownItem } from "@/lib/header-nav"

interface DropdownMenuTwoSectionProps {
  items: FeaturedDropdownItem[]
  basePath: string
  label: string
  type?: 'pages' | 'anchors'
  onClose?: () => void
  description?: string
  featuredTitle?: string
  regularTitle?: string
  showHereToServe?: boolean
  onAnchorClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const featuredItemClasses = "flex items-start gap-3 p-4 transition-colors"
const regularItemClasses = "block px-4 py-2.5 text-sm font-medium transition-colors"

const getIcon = (iconName?: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap size={20} className="flex-shrink-0 mt-0.5" />,
    FileText: <FileText size={20} className="flex-shrink-0 mt-0.5" />,
    Wrench: <Wrench size={20} className="flex-shrink-0 mt-0.5" />,
  }
  return iconMap[iconName || '']
}

const Footer = ({ showHereToServe }: { showHereToServe?: boolean }) => {
  if (!showHereToServe) return null
  return (
    <div className="border-t px-6 lg:px-8 py-4 text-xs" style={{ borderColor: `${COLORS.primary}15`, color: `${COLORS.dark}80` }}>
      #heretoserve
    </div>
  )
}

export function DropdownMenuTwoSection({
  items,
  basePath,
  label,
  type = 'pages',
  onClose,
  description,
  featuredTitle = 'Featured',
  regularTitle = 'All Items',
  showHereToServe = true,
  onAnchorClick
}: DropdownMenuTwoSectionProps) {
  const handleClick = (id: string) => {
    trackNavClick(`${label} - ${id}`, basePath)
    onClose?.()
  }

  const featuredItems = items.filter(item => item.featured)
  const regularItems = items.filter(item => !item.featured)
  const allFeatured = featuredItems.length > 0 && regularItems.length === 0

  return (
    <div className="flex flex-col gap-0">
      {/* Header - Always show */}
      <div className="border-b p-6 lg:p-8 gap-3 flex flex-col" style={{ borderColor: `${COLORS.primary}15` }}>
        <div className="text-lg font-semibold font-serif" style={{ color: COLORS.dark }}>
          {label}
        </div>
        {description && (
          <div className="text-sm leading-relaxed max-w-2xl" style={{ color: COLORS.dark }}>
            {description}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        {allFeatured ? (
          // All featured - 3 column grid
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => {
              const href = type === 'anchors' ? `${basePath}#${item.id}` : `${basePath}/${item.id}`
              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={(e) => {
                    handleClick(item.id)
                    if (type === 'anchors') {
                      onAnchorClick?.(e as React.MouseEvent<HTMLAnchorElement>, href)
                    }
                  }}
                  className="flex flex-col gap-2 transition-colors p-3"
                  style={{ color: COLORS.dark }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.background
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <div className="font-semibold text-base">{item.name}</div>
                </Link>
              )
            })}
          </div>
        ) : featuredItems.length > 0 ? (
          // Mixed featured and regular - 2 section layout
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Featured Items - Left */}
            <div className="flex flex-col gap-3 lg:flex-shrink-0 lg:min-w-[280px]">
              {featuredItems.length > 0 && (
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: `${COLORS.primary}` }}>
                  {featuredTitle}
                </div>
              )}
              {featuredItems.map((item) => {
                const href = type === 'anchors' ? `${basePath}#${item.id}` : `${basePath}/${item.id}`
                return (
                  <Link
                    key={item.id}
                    href={href}
                    onClick={(e) => {
                      handleClick(item.id)
                      if (type === 'anchors') {
                        onAnchorClick?.(e as React.MouseEvent<HTMLAnchorElement>, href)
                      }
                    }}
                    className={featuredItemClasses}
                    style={{ color: COLORS.dark }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = COLORS.background
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    <div style={{ color: COLORS.primary }}>
                      {getIcon(item.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base leading-snug">{item.name}</div>
                      {item.subtitle && (
                        <div className="text-xs mt-1 leading-tight" style={{ color: `${COLORS.dark}80` }}>{item.subtitle}</div>
                      )}
                      {item.amount && (
                        <div className="text-xs mt-1 font-medium" style={{ color: COLORS.primary }}>{item.amount}</div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px" style={{ backgroundColor: `${COLORS.primary}15` }}></div>

            {/* Regular Items - Right */}
            <div className="flex flex-col gap-3 flex-1">
              {regularItems.length > 0 && (
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: `${COLORS.primary}` }}>
                  {regularTitle}
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 gap-y-1">
                {regularItems.map((item) => {
                  const href = type === 'anchors' ? `${basePath}#${item.id}` : `${basePath}/${item.id}`
                  return (
                    <Link
                      key={item.id}
                      href={href}
                      onClick={(e) => {
                        handleClick(item.id)
                        if (type === 'anchors') {
                          onAnchorClick?.(e as React.MouseEvent<HTMLAnchorElement>, href)
                        }
                      }}
                      className="block px-4 py-2 text-sm font-medium transition-colors"
                      style={{ color: COLORS.dark }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = COLORS.background
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }}
                    >
                      <div className="leading-snug line-clamp-2">{item.name}</div>
                      {item.amount && (
                        <div className="text-xs mt-0.5" style={{ color: `${COLORS.primary}80` }}>{item.amount}</div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          // Only regular items - single column
          <div className="flex flex-col gap-3">
            {items.map((item) => {
              const href = type === 'anchors' ? `${basePath}#${item.id}` : `${basePath}/${item.id}`
              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={(e) => {
                    handleClick(item.id)
                    if (type === 'anchors') {
                      onAnchorClick?.(e as React.MouseEvent<HTMLAnchorElement>, href)
                    }
                  }}
                  className="block px-4 py-2 text-sm font-medium transition-colors"
                  style={{ color: COLORS.dark }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.background
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <div className="leading-snug">{item.name}</div>
                  {item.amount && (
                    <div className="text-xs mt-1" style={{ color: `${COLORS.primary}80` }}>{item.amount}</div>
                  )}
                </Link>
              )
            })}
          </div>
        )}
      </div>

      <Footer showHereToServe={showHereToServe} />
    </div>
  )
}