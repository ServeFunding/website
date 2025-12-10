'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Heading, Text } from '@/components/ui'
import { trackCaseStudyOpen } from '@/lib/tracking'
import { COLORS as BRAND_COLORS } from '@/lib/colors'

interface CaseStudy {
  amount: string
  title: string
  company: string
  description: string
  fullStory?: string
}

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  caseStudy: CaseStudy | null
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, caseStudy }) => {
  // Track case study modal opens
  useEffect(() => {
    if (isOpen && caseStudy) {
      trackCaseStudyOpen(caseStudy.title, caseStudy.amount)
    }
  }, [isOpen, caseStudy])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!caseStudy) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            style={{ zIndex: 1000 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none"
            style={{ zIndex: 1001 }}
          >
            <div className="pointer-events-auto bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
              {/* Content */}
              <div className="relative">
                {/* Close Button - Absolute positioned */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-700 z-10"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                <div className="p-8 md:p-10">
                  {/* Title with Amount */}
                  <Heading size="h2" className="!my-4">
                    {caseStudy.amount} {caseStudy.title}
                  </Heading>

                {/* Company */}
                <Text className="text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wide">
                  {caseStudy.company}
                </Text>

                {/* Description & Full Story - Uniform Typography */}
                <div className="space-y-4">
                  <Text size="lg" className="text-gray-700 leading-8">
                    {caseStudy.description}
                  </Text>

                  {/* Full Story */}
                  {caseStudy.fullStory && (
                    <>
                      <div className="space-y-4">
                        {caseStudy.fullStory.split('\n\n').map((paragraph, index) => (
                          <Text key={index} size="lg" className="text-gray-700 leading-8">
                            {paragraph}
                          </Text>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
