'use client'

import Link from 'next/link'
import { COLORS } from '@/lib/colors'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [
    { label: 'Home', href: '/' },
    ...items
  ]

  return (
    <nav className="text-sm text-gray-600 px-6 py-4">
      {allItems.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:opacity-80 transition-opacity duration-200"
              style={{color: COLORS.primary.darkGreen}}
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-semibold">{item.label}</span>
          )}
          {index < allItems.length - 1 && <span className="mx-2" style={{color: COLORS.primary.darkGreen}}>{'>'}</span>}
        </span>
      ))}
    </nav>
  )
}
