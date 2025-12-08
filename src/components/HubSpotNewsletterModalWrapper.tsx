'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { HubSpotNewsletterModalForm } from '@/components/Forms'

export function HubSpotNewsletterModalWrapper() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const showModal = () => {
      setIsOpen(true)
    }

    // Show modal after 2.5 seconds (form already rendering in background)
    if (document.readyState === 'complete') {
      setTimeout(showModal, 2500)
    } else {
      window.addEventListener('load', () => {
        setTimeout(showModal, 2500)
      })
    }
  }, [])

  if (!isMounted) return null

  return (
    <>
      {/* Hidden form - renders off-screen so HubSpot script can execute */}
      <div className="fixed -left-[10000px]">
        <HubSpotNewsletterModalForm />
      </div>

      {/* Modal */}
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
              className="fixed inset-0 bg-black/50 z-[1000]"
              aria-hidden="true"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] sm:w-full max-w-2xl z-[1001] max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="newsletter-modal-title"
            >
              <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl overflow-hidden relative">
                {/* Form Container */}
                <div className="pointer-events-auto">
                  <HubSpotNewsletterModalForm />
                </div>

                {/* Close button - positioned on top */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 z-[9999] cursor-pointer"
                  aria-label="Close newsletter modal"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
