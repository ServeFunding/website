'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { Button, Container } from "./ui"
import { motion } from "framer-motion"
import { COLORS } from "@/lib/colors"
import { trackNavClick, trackExternalLinkClick } from "@/lib/tracking"
import { CALENDLY_URL, headerNavConfig, getExpandMenuKey, type SimpleNavItem, type DropdownNavItem, type NavItem } from "@/lib/header-nav"
import { DropdownMenuItems, MobileMenuSection, HamburgerIcon } from "./header-components"

const navItemClasses = "text-gray-700 font-medium text-base h-full relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 after:w-0 hover:after:w-full flex items-center"
const underlineStyle = {
  '--underline-color': COLORS.primary,
} as React.CSSProperties & { '--underline-color': string }

// Type guards for discriminated union
const isSimpleNavItem = (item: NavItem): item is SimpleNavItem => item.type === 'link'
const isDropdownNavItem = (item: NavItem): item is DropdownNavItem => item.type === 'dropdown'

const getIsActive = (item: DropdownNavItem, pathname: string): boolean => {
  return item.basePath === '/solutions'
    ? pathname.startsWith('/solutions')
    : pathname === item.basePath
}

interface NavItemProps {
  href: string
  label: string
  isActive?: boolean
  onAnchorClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

function NavItem({ href, label, isActive, onAnchorClick }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackNavClick(label, href)
    onAnchorClick?.(e, href)
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${navItemClasses} ${isActive ? 'after:w-full' : ''}`}
      style={underlineStyle}
    >
      {label}
    </Link>
  )
}

interface NavDropdownProps {
  label: string
  items: Array<{ name: string; id: string }>
  basePath: string
  onAnchorClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  type?: 'pages' | 'anchors'
  isActive?: boolean
}

function NavDropdown({ label, items, basePath, onAnchorClick, type = 'pages', isActive }: NavDropdownProps) {
  return (
    <div className="group relative h-full flex items-center">
      <Link
        href={basePath}
        onClick={() => trackNavClick(label, basePath)}
        className={`${navItemClasses} group-hover:after:w-full ${isActive ? 'after:w-full' : ''} gap-1`}
        style={underlineStyle}
      >
        {label} <ChevronDown size={18} />
      </Link>

      {/* Dropdown Menu */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-96 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 group-hover:translate-y-2 z-50 overflow-hidden mt-2" style={{ backgroundColor: COLORS.primary }}>
        <div className="py-2 flex flex-col">
          <DropdownMenuItems items={items} basePath={basePath} label={label} type={type} onAnchorClick={onAnchorClick} />
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle same-page anchor links
    if (!href.startsWith('#')) {
      const currentPath = href.split('#')[0]
      if (currentPath !== pathname && currentPath !== '') {
        return // Let normal navigation happen
      }
    }

    const anchorId = href.includes('#') ? href.split('#')[1] : null
    if (!anchorId) return

    e.preventDefault()

    // Close mobile menu if open
    setIsMenuOpen(false)
    setExpandedMenu(null)

    // Find the element and scroll to it
    const element = document.getElementById(anchorId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
      isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-lg py-3"
        : "bg-white/60 backdrop-blur-sm shadow-sm py-4"
    } ${isMenuOpen ? 'shadow-lg' : ''}`}>
      <Container>
        {/* Single row header - Logo, centered nav, and CTA Button */}
        <div className="relative flex items-center justify-between gap-8">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 flex-shrink-0">
            <Image
              src="/Logo_Full-color_long_samecolor-1.png"
              alt="Serve Funding"
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`}
              width={305}
              height={84}
              priority
            />
          </Link>

          {/* Center Nav - Hidden on small screens, flex-1 to center it */}
          <nav className="hidden lg:flex items-stretch space-x-8 flex-1 justify-center">
            {headerNavConfig.items.map((item) => {
              if (isSimpleNavItem(item)) {
                return (
                  <NavItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    isActive={pathname === item.href}
                    onAnchorClick={handleAnchorClick}
                  />
                )
              }

              if (isDropdownNavItem(item)) {
                return (
                  <NavDropdown
                    key={item.label}
                    label={item.label}
                    basePath={item.basePath}
                    items={item.items}
                    isActive={getIsActive(item, pathname)}
                    onAnchorClick={handleAnchorClick}
                    type={item.itemType || 'pages'}
                  />
                )
              }
            })}
          </nav>

          {/* Right side: CTA Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick('Intro Call (Header)')}>
              <Button variant="default" size="sm" className="rounded-full flex-shrink-0">
                Intro Call
              </Button>
            </a>

            {/* Mobile Menu Button - Animated */}
            <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HamburgerIcon isOpen={isMenuOpen} />
            </div>
          </div>
        </div>

        {/* Mobile Menu - Inside header */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            {/* Navigation Links */}
            <div className="space-y-0 px-4 py-4">
              {headerNavConfig.items.map((item) => {
                const closeMenu = () => {
                  setIsMenuOpen(false)
                  setExpandedMenu(null)
                }

                if (isSimpleNavItem(item)) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        trackNavClick(item.label, item.href)
                        closeMenu()
                      }}
                      className="block text-base font-medium py-3 border-b border-gray-200 text-olive-green"
                    >
                      {item.label}
                    </Link>
                  )
                }

                if (isDropdownNavItem(item)) {
                  const expandKey = getExpandMenuKey(item.label)

                  return (
                    <MobileMenuSection
                      key={item.label}
                      label={item.label}
                      basePath={item.basePath}
                      items={item.items}
                      type={item.itemType || 'pages'}
                      isExpanded={expandedMenu === expandKey}
                      onToggle={() => setExpandedMenu(expandedMenu === expandKey ? null : expandKey)}
                      onClose={closeMenu}
                      onAnchorClick={handleAnchorClick}
                    />
                  )
                }
              })}

              {/* Intro Call Button */}
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick('Intro Call (Mobile Menu)')} className="w-full block pt-4">
                <Button variant="default" className="w-full">
                  Intro Call
                </Button>
              </a>
            </div>
        </motion.div>
        )}
      </Container>
    </header>
  )
}
