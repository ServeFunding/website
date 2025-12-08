'use client'

import { useState, useEffect, useRef, useCallback, memo } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAIResponse } from '@/lib/ai'
import { COLORS as BRAND_COLORS } from '@/lib/colors'
import { trackChatbotSessionStart, trackChatbotMessage } from '@/lib/tracking'
import { AIIntroForm } from './Forms'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  actionButtons?: Array<{ label: string; action: string }>
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [hasShownNotification, setHasShownNotification] = useState(false)
  const [showIntroModal, setShowIntroModal] = useState(false)
  const [aiContext, setAiContext] = useState('')
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
      messagesEndRef.current.scrollIntoView()
    }
  }, [messages, isOpen, isLoading])

  // Show notification after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true)
      setHasShownNotification(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  // // Show notification on scroll
  // useEffect(() => {
  //   if (hasShownNotification || isOpen) return

  //   const handleScroll = () => {
  //     if (window.scrollY > 1000 && !hasShownNotification) {
  //       setShowNotification(true)
  //       setHasShownNotification(true)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [hasShownNotification, isOpen])

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

      // Parse JSON response (guaranteed to be JSON via API response_format)
      const parsed = JSON.parse(reply)
      const displayText = parsed.message
      const showForm = parsed.showForm === true
      const context = parsed.context || ''

      if (showForm) {
        setAiContext(context)
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: displayText,
        sender: 'bot',
        timestamp: new Date(),
        actionButtons: showForm ? [
          { label: "Let's talk!", action: 'open_intro_modal' }
        ] : undefined
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

  const handleActionButtonClick = useCallback((action: string) => {
    if (action === 'open_intro_modal') {
      setShowIntroModal(true)
    }
  }, [])

  const handleIntroFormSubmit = useCallback(() => {
    // Add thank you message
    const thankYouMessage: Message = {
      id: Date.now().toString(),
      text: "Thanks for filling out the form! We've got your information and will reach out soon to connect you with the right person. Is there anything else I can help you with in the meantime?",
      sender: 'bot',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, thankYouMessage])
  }, [])

  return (
    <>
      {/* Notification - appears above chatbot */}
      <AnimatePresence>
        {showNotification && !isOpen && (
        <motion.div
          onClick={() => {
            setIsOpen(true)
            setShowNotification(false)
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{
            duration: 0.4,
            ease: 'easeOut'
          }}
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '20px',
            width: '280px',
            zIndex: 40,
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '14px 16px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.16)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
              <p className="font-semibold mb-1" style={{ color: BRAND_COLORS.primary }}>Have any questions?</p>
              <p className="text-sm text-gray-600 leading-relaxed">We're here to serve you.</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowNotification(false)
              }}
              className="text-gray-400 text-lg flex-shrink-0 leading-none"
              style={{ marginTop: '-2px' }}
            >
              ✕
            </button>
          </div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen) setShowNotification(false)
        }}
        style={{
          backgroundColor: BRAND_COLORS.secondary,
        }}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50 hover:opacity-90"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
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
              style={{ backgroundColor: BRAND_COLORS.primary }}
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
                  className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    style={{
                      backgroundColor: message.sender === 'user' ? BRAND_COLORS.secondary : '#f3f4f6',
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
                  {/* Action Buttons */}
                  {message.actionButtons && message.actionButtons.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {message.actionButtons.map((btn, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleActionButtonClick(btn.action)}
                          style={{
                            backgroundColor: BRAND_COLORS.secondary,
                            color: '#333333',
                          }}
                          className="text-sm px-3 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  )}
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
                    borderColor: BRAND_COLORS.primary,
                    '--tw-ring-color': BRAND_COLORS.primary,
                  } as React.CSSProperties}
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all text-base"
                  disabled={isLoading}
                  aria-label="Chat message input"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  style={{
                    backgroundColor: BRAND_COLORS.secondary,
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

      {/* AI Intro Form Modal */}
      <AnimatePresence>
        {showIntroModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowIntroModal(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-0"
            >
              <AIIntroForm
                aiMessage={aiContext || 'I would like to learn more about your services.'}
                conversationContext={messages
                  .filter(m => m.sender === 'user')
                  .map(m => m.text)
                  .join('\n')}
                onClose={() => {
                  setShowIntroModal(false)
                  handleIntroFormSubmit()
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
