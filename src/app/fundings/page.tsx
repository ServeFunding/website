'use client'

import { useState } from 'react'
import {
  ChevronRight
} from 'lucide-react'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  StaggerContainer,
  StaggerItem
} from '@/components/ui'
import { fundingCases } from '@/data/fundingData'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { CaseStudyModal } from '@/components/CaseStudyModal'
import { CTA } from '@/components/cta'
import { Breadcrumb } from '@/components/breadcrumb'

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
            {caseStudies.map((study, index) => (
              <StaggerItem key={index}>
                <button
                  id={generateSlug(study.title)}
                  onClick={() => openModal(study)}
                  className="w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded-[2rem] scroll-mt-32"
                >
                  <Card className="flex flex-col h-full group transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    <div className="flex items-baseline gap-2 mb-4">
                      <Text className="text-2xl font-bold text-gold-500">
                        {study.amount}
                      </Text>
                    </div>

                    <Heading size="h4" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                      {study.title}
                    </Heading>

                    <Text className="text-sm font-semibold text-gray-500 mb-4">
                      {study.company}
                    </Text>

                    <Text className="text-gray-600 group-hover:text-gray-700 transition-colors flex-1">
                      {study.description}
                    </Text>

                    <div className="flex items-center gap-2 mt-6 text-gold-500 group-hover:text-olive-900 transition-colors font-semibold">
                      Read More
                      <ChevronRight size={18} />
                    </div>
                  </Card>
                </button>
              </StaggerItem>
            ))}
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
