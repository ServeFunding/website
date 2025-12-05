'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Chatbot to move 'framer-motion' (30kb+) out of the main bundle
const Chatbot = dynamic(() => import('@/components/Chatbot').then(mod => mod.Chatbot), {
  ssr: false,
  loading: () => null // No loading state needed, it will just appear when ready
})

export function ChatbotWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Load immediately on the client, but after the main HTML is parsed
    setShouldLoad(true)
  }, [])

  if (!shouldLoad) return null

  return <Chatbot />
}
