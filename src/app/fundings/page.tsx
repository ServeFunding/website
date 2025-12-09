'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRight
} from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  StaggerContainer,
  StaggerItem
} from '@/components/ui'
import { fundingCases } from '@/data/fundingData'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { CaseStudyModal } from '@/components/CaseStudyModal'
import { CTA } from '@/components/cta'
import { Breadcrumb } from '@/components/breadcrumb'
import { COLORS as BRAND_COLORS } from '@/lib/colors'

function generateSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-')
}

const caseStudies = fundingCases.map(c => ({
  amount: c.amount,
  title: c.title,
  company: c.company,
  description: c.description,
  fullStory: c.fullStory
}))

export default function Fundings() {
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [highlightedId, setHighlightedId] = useState<string>('')

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setHighlightedId(hash)
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [])

  const openModal = (study: typeof caseStudies[0]) => {
    setSelectedStudy(study)
    setIsModalOpen(true)
  }

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'Fundings' }]} />

      {/* Hero Section */}
      <HeroFadeIn
        title="Client Success Stories"
        subtitle={<>At Serve Funding, we provide flexible, customized working capital solutions<br />to help businesses overcome financial challenges and seize new growth opportunities. From acquisition funding to payroll financing and beyond, we deliver fast,<br />reliable financial solutions that drive success.</>}
        compact
      />

      {/* Recent Fundings Grid */}
      <Section background='primary' className='overflow-visible'>
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const slug = generateSlug(study.title)
              const isHighlighted = highlightedId === slug

              return (
                <StaggerItem key={index}>
                  <button
                    id={slug}
                    onClick={() => openModal(study)}
                    className="w-full h-full text-left focus:outline-none rounded-[2rem] scroll-mt-32"
                  >
                    <motion.div
                      className="flex flex-col h-full group transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-2xl p-6"
                      initial={isHighlighted ? { backgroundColor: BRAND_COLORS.secondary } : { backgroundColor: 'white' }}
                      animate={{ backgroundColor: 'white' }}
                      transition={isHighlighted ? { duration: 3.5, ease: 'easeInOut' } : { duration: 0 }}
                    >
                      <Heading size="h4" className="mb-4 text-olive-900 group-hover:text-gold-500 transition-colors">
                        <span 
                          className="bg-gradient-to-b bg-clip-text text-transparent"
                          style={{ backgroundImage: `linear-gradient(to bottom, ${BRAND_COLORS.secondary}, ${BRAND_COLORS.dark})` }}
                        >
                          {study.amount}
                        </span>{' '}
                        {study.title}
                      </Heading>

                      <Text className="text-sm text-gray-500 mb-4">
                        {study.company}
                      </Text>

                      <div className='flex-1'>
                        <Text className="line-clamp-5">
                          {study.fullStory}
                        </Text>
                      </div>

                      <div className="flex items-center gap-2 mt-6 text-gold-500 group-hover:text-olive-900 transition-colors font-semibold">
                        Read More
                        <ChevronRight size={18} />
                      </div>
                    </motion.div>
                  </button>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Schema Markup for AI/SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Table",
          "name": "2024-2025 Serve Funding Results",
          "description": "Structured data of funding transactions facilitated by Serve Funding across multiple industries",
          "rows": fundingCases.map(result => ({
            "@type": "TableRow",
            "cells": [
              { "@type": "TableCell", "text": result.industry },
              { "@type": "TableCell", "text": result.fundingType },
              { "@type": "TableCell", "text": result.amount },
              { "@type": "TableCell", "text": result.challengeResolved },
              { "@type": "TableCell", "text": result.timeline }
            ]
          }))
        })}
      </script>

      {/* Contact Section */}
      <CTA
        title="Ready to explore your financing options?"
        text="Let's discuss how we can help your business grow with the right working capital solution."
        buttonText="Let's Talk!"
        source="fundings"
      />

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        caseStudy={selectedStudy}
      />
    </div>
  )
}
