'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { HubSpotNewsletterModalForm } from '@/components/Forms'

export function HubSpotNewsletterModalWrapper() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Show modal after initial paint (3 seconds delay)
  useEffect(() => {
    if (!isMounted || hasShown) return

    const timer = setTimeout(() => {
      setIsOpen(true)
      setHasShown(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [isMounted, hasShown])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-4 z-50 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-modal-title"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 z-10"
                aria-label="Close newsletter modal"
              >
                <X size={20} />
              </button>

              {/* Form Container */}
              <HubSpotNewsletterModalForm />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
