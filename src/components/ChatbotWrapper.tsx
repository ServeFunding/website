'use client'

import dynamic from 'next/dynamic'

const Chatbot = dynamic(() => import('@/components/Chatbot').then(mod => ({ default: mod.Chatbot })), {
  ssr: false,
  loading: () => null
})

export function ChatbotWrapper() {
  return <Chatbot />
}
