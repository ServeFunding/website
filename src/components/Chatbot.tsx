'use client'

import { useState, useEffect, useRef, useCallback, memo } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAIResponse } from '@/lib/ai'
import { COLORS as BRAND_COLORS } from '@/lib/colors'
import { trackChatbotSessionStart, trackChatbotMessage } from '@/lib/tracking'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 Welcome to Serve Funding. How can I help you today? Feel free to ask me anything about our services, funding solutions, or how we can help your business grow.',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Enable VirtualKeyboard API for Chrome to handle keyboard overlays
  useEffect(() => {
    if ('virtualKeyboard' in navigator) {
      (navigator as any).virtualKeyboard.overlaysContent = true
    }
  }, [])

  // Track chatbot session start
  useEffect(() => {
    if (isOpen) {
      trackChatbotSessionStart()
    }
  }, [isOpen])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, isLoading])

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim()) return

    // Track message sent
    trackChatbotMessage()

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
      // Get AI response with conversation history
      const reply = await getAIResponse(inputValue, messages)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: reply,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
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
  }, [inputValue, messages])

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: BRAND_COLORS.primary.lightGreen,
        }}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50 hover:opacity-90"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-20 sm:right-5 sm:w-96 sm:h-[600px] bg-white rounded-none sm:rounded-2xl shadow-2xl flex flex-col z-50"
            style={{
              // Mobile: full viewport height with keyboard handling
              height: typeof window !== 'undefined' && window.innerWidth < 640 ? '100vh' : undefined,
              // @ts-ignore - dvh is valid CSS but TypeScript doesn't recognize it yet
              height: typeof window !== 'undefined' && window.innerWidth < 640 ? '100dvh' : undefined,
              maxHeight: typeof window !== 'undefined' && window.innerWidth < 640 ? 'calc(100dvh - env(keyboard-inset-height, 0px))' : 'calc(100vh - 80px)',
            }}
            role="dialog"
            aria-label="Serve Funding Chat Assistant"
          >
            {/* Header */}
            <div
              style={{ backgroundColor: BRAND_COLORS.primary.darkGreen }}
              className="text-white px-6 py-4 rounded-none sm:rounded-t-2xl flex items-center justify-between flex-shrink-0"
            >
              <div>
                <h3 className="font-semibold">Serve Funding AI Assistant</h3>
                <p className="text-sm opacity-90">Always here to serve</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:opacity-80 p-1 rounded transition-opacity"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0" role="log" aria-label="Chat messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    style={{
                      backgroundColor: message.sender === 'user' ? BRAND_COLORS.primary.lightGreen : '#f3f4f6',
                      color: message.sender === 'user' ? '#333333' : '#1f2937',
                    }}
                    className={`max-w-[85%] sm:max-w-[70%] px-4 py-2 rounded-lg break-words ${
                      message.sender === 'user'
                        ? 'rounded-br-none'
                        : 'rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4 rounded-none sm:rounded-b-2xl flex-shrink-0">
              <div className="flex gap-2 items-center">
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
                  placeholder="Ask a question..."
                  style={{
                    borderColor: BRAND_COLORS.primary.darkGreen,
                    '--tw-ring-color': BRAND_COLORS.primary.darkGreen,
                  } as React.CSSProperties}
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all text-base"
                  disabled={isLoading}
                  aria-label="Chat message input"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  style={{
                    backgroundColor: BRAND_COLORS.primary.lightGreen,
                  }}
                  className="text-gray-800 p-2 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
