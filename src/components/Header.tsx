'use client'

import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button, Container } from "./design-system"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
      isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-lg py-3"
        : "bg-white/60 backdrop-blur-sm shadow-sm py-4"
    }`}>
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300">
            <img
              src="/Logo_Full-color_long_samecolor-1.png"
              alt="Serve Funding"
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 font-medium border-b-2 border-transparent hover:border-olive-900 transition-colors">Home</Link>

            <div className="group relative flex items-center gap-1 cursor-pointer text-gray-700 hover:text-olive-900 font-medium h-full py-4">
              <Link href="/solutions" className="flex items-center gap-1">Solutions <ChevronDown size={16} /></Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-olive-800 text-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                <div className="py-2 flex flex-col">
                  {[
                    { name: "Asset-Based Lending", id: "asset-based-lending" },
                    { name: "Invoice Factoring", id: "invoice-factoring" },
                    { name: "Working Capital Loans", id: "working-capital-loans" },
                    { name: "Inventory Financing", id: "inventory-financing" },
                    { name: "Equipment Leasing", id: "equipment-leasing" },
                    { name: "Real Estate Lending", id: "real-estate-lending" },
                    { name: "Purchase Order Funding", id: "purchase-order-funding" },
                    { name: "Government Contracts", id: "government-contracts" },
                    { name: "Unsecured & Sub-Debt", id: "unsecured-debt" },
                    { name: "SBA Loans", id: "sba-loans" }
                  ].map((item) => (
                    <Link
                      key={item.id}
                      href={`/solutions#${item.id}`}
                      className="px-6 py-3 hover:bg-olive-700 transition-colors text-sm font-medium border-b border-olive-700/30 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/fundings" className="text-gray-700 hover:text-olive-900 font-medium">Fundings</Link>

            <div className="group relative flex items-center gap-1 cursor-pointer text-gray-700 hover:text-olive-900 font-medium h-full py-4">
              <Link href="/partners" className="flex items-center gap-1">Partners <ChevronDown size={16} /></Link>

              {/* Partners Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-olive-800 text-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                <div className="py-2 flex flex-col">
                  {[
                    { name: "Commercial Bankers", id: "commercial-bankers" },
                    { name: "Fractional CFOs", id: "fractional-cfos" },
                    { name: "Investment Bankers", id: "investment-bankers" },
                    { name: "CPAs / Accountants", id: "cpas-accountants" },
                    { name: "Private Equity", id: "private-equity-firms" },
                    { name: "Business Advisors", id: "business-advisors" }
                  ].map((item) => (
                    <Link
                      key={item.id}
                      href={`/partners#${item.id}`}
                      className="px-6 py-3 hover:bg-olive-700 transition-colors text-sm font-medium border-b border-olive-700/30 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative flex items-center gap-1 cursor-pointer text-gray-700 hover:text-olive-900 font-medium h-full py-4">
              <Link href="/about-us" className="flex items-center gap-1">About Us <ChevronDown size={16} /></Link>

              {/* About Us Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-olive-800 text-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                <div className="py-2 flex flex-col">
                  {[
                    { name: "Our Story", id: "our-story" },
                    { name: "Core Values", id: "core-values" },
                    { name: "Doing Good", id: "doing-good" }
                  ].map((item) => (
                    <Link
                      key={item.id}
                      href={`/about-us#${item.id}`}
                      className="px-6 py-3 hover:bg-olive-700 transition-colors text-sm font-medium border-b border-olive-700/30 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="rounded">
                Intro Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm border-t mt-4 px-4 py-4 space-y-4">
          <Link href="/" className="block text-olive-900 font-medium">Home</Link>
          <Link href="/solutions" className="block text-gray-700">Solutions</Link>
          <Link href="/fundings" className="block text-gray-700">Fundings</Link>
          <Link href="/partners" className="block text-gray-700">Partners</Link>
          <Link href="/about-us" className="block text-gray-700">About Us</Link>
          <a href="https://calendly.com/michael_kodinsky/intro-call-with-serve-funding?month=2025-11" target="_blank" rel="noopener noreferrer" className="w-full block">
            <Button className="w-full">
              Intro Call
            </Button>
          </a>
        </div>
      )}
    </header>
  )
}
