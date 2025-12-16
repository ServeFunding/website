'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { COLORS as BRAND_COLORS } from '@/lib/colors'
import { trackChatbotMessage } from '@/lib/tracking'
import { getAIDealResponse } from '@/lib/ai'
import { Container } from '@/components/ui'
import { Button } from '@/components/ui'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface DealInquiryChatProps {
  formData: {
    firstname?: string
    lastname?: string
    email?: string
    phone?: string
    company?: string
    capital_for?: string
    contact_us_details?: string
  }
}

export function DealInquiryChat({ formData }: DealInquiryChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hi ${formData.firstname}! 👋`,
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [dealContext, setDealContext] = useState('')
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const generationAttemptedRef = useRef(false)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  // Generate second message when component mounts (only once)
  useEffect(() => {
    if (generationAttemptedRef.current) return
    generationAttemptedRef.current = true

    const generateSecondMessage = async () => {
      setIsLoading(true)
      try {
        // Use initial greeting as first user message context
        const reply = await getAIDealResponse(
          'I just filled out the form above with my deal details.',
          [{ text: `Hi ${formData.firstname}! 👋`, sender: 'bot' }],
          formData
        )

        const parsed = JSON.parse(reply)
        const displayText = parsed.message
        const context = parsed.context || ''

        const botMessage: Message = {
          id: Date.now().toString(),
          text: displayText,
          sender: 'bot',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setDealContext(context)
      } catch (error) {
        console.error('Error generating second message:', error)
      } finally {
        setIsLoading(false)
      }
    }

    generateSecondMessage()
  }, [])

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim()) return

    // Track message sent
    trackChatbotMessage(undefined, inputValue)

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Get AI response with conversation history and deal context
      const reply = await getAIDealResponse(inputValue, messages, formData)

      // Parse JSON response
      const parsed = JSON.parse(reply)
      const displayText = parsed.message
      const context = parsed.context || ''

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: displayText,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])

      // Update context with latest summary
      if (context) {
        setDealContext(context)
      }
    } catch (error) {
      console.error('Error getting AI response:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble responding right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }, [inputValue, messages, formData])

  return (
    <div className="w-full py-8">
      <Container className="max-w-3xl">
        {/* Chat Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2" style={{ color: BRAND_COLORS.primary }}>
            Let's Talk About Your Deal
          </h2>
          <p className="text-gray-600">
            I have a few questions to help us understand your situation better.
          </p>
        </div>

        {/* Messages Container with Input at Bottom */}
        <div
          ref={messagesContainerRef}
          className="bg-gray-50 rounded-xl p-6 flex flex-col"
          style={{ minHeight: 'auto', overflowY: 'visible' }}
          role="log"
          aria-label="Chat messages"
        >
          <div className="space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  style={{
                    backgroundColor: message.sender === 'user' ? BRAND_COLORS.primary : '#ffffff',
                    borderLeft: message.sender === 'bot' ? `4px solid ${BRAND_COLORS.primary}` : 'none',
                    color: message.sender === 'user' ? '#ffffff' : '#1f2937',
                  }}
                  className={`max-w-[85%] sm:max-w-[70%] px-4 py-3 rounded-lg break-words shadow-sm`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white px-4 py-3 rounded-lg border-l-4" style={{ borderLeftColor: BRAND_COLORS.primary }}>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="relative flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
                placeholder="Type your response..."
                style={{
                  borderColor: BRAND_COLORS.secondary,
                }}
                className="flex-1 px-4 py-4 pr-8 border rounded-lg focus:outline-none transition-all text-base bg-white"
                disabled={isLoading}
                aria-label="Chat message input"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                style={{
                  color: BRAND_COLORS.primary,
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70 disabled:opacity-50"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
            {/* AI Disclaimer */}
            <div className="mt-2">
              <p className="text-xs text-gray-500 text-center">
                <span className="font-semibold">AI can make mistakes.</span> For important funding decisions, please speak with our team directly.
              </p>
            </div>
          </div>
        </div>

        {/* Schedule Call Button */}
        <div className="mt-6 flex justify-center">
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              const baseUrl = 'https://calendly.com/michael_kodinsky/discovery'
              const now = new Date()
              const monthParam = now.toISOString().split('T')[0].substring(0, 7)

              const params = new URLSearchParams({
                name: `${formData.firstname || ''} ${formData.lastname || ''}`.trim(),
                email: formData.email || '',
                month: monthParam,
                a1: dealContext.substring(0, 500), // Just the context, Calendly has URL limits
                date: now.toISOString().split('T')[0],
              })
              const calendlyUrl = `${baseUrl}?${params.toString()}`
              window.open(calendlyUrl, '_blank')
            }}
          >
            Schedule a Call
          </Button>
        </div>
      </Container>
    </div>
  )
}
