'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { Button, Container } from "./ui"
import { motion } from "framer-motion"
import { fundingSolutions } from "@/data/company-info"
import { COLORS } from "@/lib/colors"
import { trackNavClick, trackExternalLinkClick } from "@/lib/tracking"

interface DropdownItem {
  name: string
  id: string
}

const navItemClasses = "text-gray-700 font-medium text-base h-full relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#65773D] after:transition-all after:duration-300 after:w-0 hover:after:w-full"

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
      className={`${navItemClasses} ${isActive ? 'after:w-full' : ''} flex items-center`}
    >
      {label}
    </Link>
  )
}

interface NavDropdownProps {
  label: string
  items: DropdownItem[]
  basePath: string
  onAnchorClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  type?: 'pages' | 'anchors'
  isActive?: boolean
}

function NavDropdown({ label, items, basePath, onAnchorClick, type = 'pages', isActive }: NavDropdownProps) {
  const isAnchorBased = type === 'anchors'

  const handleDropdownClick = (itemName: string, href: string) => {
    trackNavClick(`${label} - ${itemName}`, href)
  }

  return (
    <div className="group relative h-full flex items-center">
      <Link
        href={basePath}
        onClick={() => trackNavClick(label, basePath)}
        className={`${navItemClasses} group-hover:after:w-full ${isActive ? 'after:w-full' : ''} flex items-center gap-1`}
      >
        {label} <ChevronDown size={18} />
      </Link>

      {/* Dropdown Menu */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-96 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 group-hover:translate-y-2 z-50 overflow-hidden mt-2" style={{ backgroundColor: COLORS.primary.darkGreen }}>
        <div className="py-2 flex flex-col">
          {items.map((item) => {
            const href = isAnchorBased ? `${basePath}#${item.id}` : `${basePath}/${item.id}`

            if (isAnchorBased) {
              return (
                <a
                  key={item.id}
                  href={href}
                  onClick={(e) => {
                    handleDropdownClick(item.name, href)
                    onAnchorClick(e, href)
                  }}
                  className="px-6 py-3.5 text-white transition-colors text-base font-medium border-b border-white/10 last:border-0"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.primary.lightGreen}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {item.name}
                </a>
              )
            }

            return (
              <Link
                key={item.id}
                href={href}
                onClick={() => handleDropdownClick(item.name, href)}
                className="px-6 py-3.5 text-white transition-colors text-base font-medium border-b border-white/10 last:border-0 block"
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.primary.lightGreen}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {item.name}
              </Link>
            )
          })}
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
            <img
              src="/Logo_Full-color_long_samecolor-1.png"
              alt="Serve Funding"
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`}
            />
          </Link>

          {/* Center Nav - Hidden on small screens, flex-1 to center it */}
          <nav className="hidden lg:flex items-stretch space-x-8 flex-1 justify-center">
            <NavItem href="/" label="Home" isActive={pathname === '/'} onAnchorClick={handleAnchorClick} />

            <NavDropdown
              label="Solutions"
              basePath="/solutions"
              items={fundingSolutions.map(solution => ({
                name: solution.title,
                id: solution.id
              }))}
              isActive={pathname.startsWith('/solutions')}
              onAnchorClick={handleAnchorClick}
            />

            <NavItem href="/fundings" label="Fundings" isActive={pathname === '/fundings'} onAnchorClick={handleAnchorClick} />

            <NavDropdown
              label="Partners"
              basePath="/partners"
              items={[
                { name: "Commercial Bankers", id: "commercial-bankers" },
                { name: "Fractional CFOs", id: "fractional-cfos" },
                { name: "Investment Bankers", id: "investment-bankers" },
                { name: "CPAs / Accountants", id: "cpas---accountants" },
                { name: "Private Equity Firms", id: "private-equity-firms" },
                { name: "Business Advisors", id: "business-advisors" }
              ]}
              isActive={pathname === '/partners'}
              onAnchorClick={handleAnchorClick}
              type="anchors"
            />

            <NavDropdown
              label="About Us"
              basePath="/about-us"
              items={[
                { name: "Our Story", id: "our-story" },
                { name: "Core Values", id: "core-values" },
                { name: "Doing Good", id: "doing-good" }
              ]}
              isActive={pathname === '/about-us'}
              onAnchorClick={handleAnchorClick}
              type="anchors"
            />
          </nav>

          {/* Right side: CTA Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <a href="https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11" target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick('Intro Call (Header)')}>
              <Button variant="default" size="sm" className="rounded-full flex-shrink-0">
                Intro Call
              </Button>
            </a>

            {/* Mobile Menu Button - Animated */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 w-6 h-6 flex flex-col justify-center gap-1.5 relative">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="block w-6 h-0.5 bg-gray-700 origin-center"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="block w-6 h-0.5 bg-gray-700"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="block w-6 h-0.5 bg-gray-700 origin-center"
                />
              </button>
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
            {/* Home */}
            <Link href="/" onClick={() => trackNavClick('Home', '/')} className="block text-base font-medium py-3 border-b border-gray-200 text-olive-green">Home</Link>

            {/* Solutions - Expandable */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'solutions' ? null : 'solutions')}
                className="w-full flex items-center justify-between text-base font-medium py-3 text-olive-green"
              >
                Solutions
                <motion.div animate={{ rotate: expandedMenu === 'solutions' ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              {expandedMenu === 'solutions' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-0">
                    {fundingSolutions.map((solution) => (
                      <Link key={solution.id} href={`/solutions/${solution.id}`} onClick={() => trackNavClick(`Solutions - ${solution.title}`, `/solutions/${solution.id}`)} className="block text-base font-medium py-3 border-b border-gray-200 text-gray-700 pl-6">
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Fundings */}
            <Link href="/fundings" onClick={() => trackNavClick('Fundings', '/fundings')} className="block text-base font-medium py-3 border-b border-gray-200 text-gray-700">Fundings</Link>

            {/* Partners - Expandable */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'partners' ? null : 'partners')}
                className="w-full flex items-center justify-between text-base font-medium py-3 text-olive-green"
              >
                Partners
                <motion.div animate={{ rotate: expandedMenu === 'partners' ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              {expandedMenu === 'partners' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-0">
                    {[
                      { name: "Commercial Bankers", id: "commercial-bankers" },
                      { name: "Fractional CFOs", id: "fractional-cfos" },
                      { name: "Investment Bankers", id: "investment-bankers" },
                      { name: "CPAs / Accountants", id: "cpas---accountants" },
                      { name: "Private Equity Firms", id: "private-equity-firms" },
                      { name: "Business Advisors", id: "business-advisors" }
                    ].map((item) => (
                      <a key={item.id} href={`/partners#${item.id}`} onClick={(e) => {
                        trackNavClick(`Partners - ${item.name}`, `/partners#${item.id}`)
                        handleAnchorClick(e, `/partners#${item.id}`)
                      }} className="block text-base font-medium py-3 border-b border-gray-200 text-gray-700 pl-6">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* About Us - Expandable */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'about' ? null : 'about')}
                className="w-full flex items-center justify-between text-base font-medium py-3 text-olive-green"
              >
                About Us
                <motion.div animate={{ rotate: expandedMenu === 'about' ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              {expandedMenu === 'about' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-0">
                    {[
                      { name: "Our Story", id: "our-story" },
                      { name: "Core Values", id: "core-values" },
                      { name: "Doing Good", id: "doing-good" }
                    ].map((item) => (
                      <Link key={item.id} href={`/about-us#${item.id}`} onClick={() => trackNavClick(`About Us - ${item.name}`, `/about-us#${item.id}`)} className="block text-base font-medium py-3 border-b border-gray-200 text-gray-700 pl-6">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Intro Call Button */}
            <a href="https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11" target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick('Intro Call (Mobile Menu)')} className="w-full block pt-4">
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
