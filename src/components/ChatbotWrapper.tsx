'use client'

import { useState, useEffect } from 'react'
import { Chatbot } from '@/components/Chatbot'

export function ChatbotWrapper() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <Chatbot />
}
