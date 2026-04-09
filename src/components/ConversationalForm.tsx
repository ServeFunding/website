'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MessageCircle, ChevronRight, Send } from 'lucide-react'
import { useDealInquiryForm, type ChosenPath } from '@/hooks/useDealInquiryForm'
import { formQuestions } from '@/data/form-questions'
import { FormSubmitData } from '@/hooks/useFormSubmit'
import { COLORS } from '@/lib/colors'
import { Button, Text } from '@/components/ui'
import { CalendlyWidget } from '@/components/CalendlyWidget'
import { CALENDLY_URLS } from '@/hooks/useDealInquiryForm'
import { getAIDealResponse } from '@/lib/ai'
import { trackEvent } from '@/lib/tracking'

interface ConversationalFormProps {
  initialRole?: string
  onComplete: (data: FormSubmitData, path: 'schedule' | 'ai_chat') => void
}

// Help text is hardcoded in form-questions.ts (not user input), safe to render
function HelpText({ html }: { html: string }) {
  return <div className="mt-1 text-xs text-white/50" dangerouslySetInnerHTML={{ __html: html }} />
}

// Question row — left-aligned, 80% width container
function QuestionRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="px-8 py-4 rounded-2xl inline-block text-center" style={{ backgroundColor: '#323b1e' }}>
        <p className="font-semibold text-lg leading-snug" style={{ color: COLORS.highlight }}>{children}</p>
      </div>
    </div>
  )
}

// Answer row — centered
function AnswerRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  )
}

// Right-aligned chat bubble (answer from user)
function AnswerBubble({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={onClick}
        className="group"
      >
        <div className="bg-white/20 backdrop-blur-sm border border-white/15 rounded-2xl rounded-tr-sm px-5 py-3 text-white font-medium text-base transition-all group-hover:bg-white/30 group-hover:scale-[1.01] flex items-center gap-2">
          {children}
          <span className="text-white/40 text-xs opacity-0 group-hover:opacity-100 transition-opacity">edit</span>
        </div>
      </button>
    </div>
  )
}

// Answer option pill button
function OptionPill({ label, isSelected, onClick, disabled }: {
  label: string
  isSelected: boolean
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={disabled ? {} : { scale: 1.02, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      animate={isSelected
        ? { backgroundColor: COLORS.highlight, color: COLORS.dark }
        : { backgroundColor: 'rgba(255,255,255,0.92)', color: '#1f2937' }
      }
      transition={{ duration: 0.15 }}
      className="px-8 py-4 rounded-2xl font-medium text-[15px]"
      disabled={disabled}
    >
      {label}
    </motion.button>
  )
}

function ContactInfoFields({
  isPartner,
  name, email, phone, company,
  setFieldValue,
  chosenPath,
  getFieldValue,
  handleSubmit,
}: {
  isPartner: boolean
  name: string
  email: string
  phone: string
  company: string
  setFieldValue: (id: string, value: any) => void
  chosenPath: ChosenPath
  getFieldValue: (id: string) => any
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  return (
    <form className="form-deal_inquiry" onSubmit={handleSubmit}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {[
          { name: 'name_field', value: name, field: 'name', placeholder: isPartner ? 'Your name *' : 'Your name *', required: true, type: 'text' },
          { name: 'company_field', value: company, field: 'company', placeholder: isPartner ? 'Your firm' : 'Business name', required: false, type: 'text' },
          { name: 'email_field', value: email, field: 'email', placeholder: 'Email *', required: true, type: 'email' },
          { name: 'phone_field', value: phone, field: 'phone', placeholder: 'Phone (optional)', required: false, type: 'tel' },
        ].map((input) => (
          <input
            key={input.name}
            type={input.type}
            name={input.name}
            value={input.value}
            onChange={(e) => setFieldValue(input.field, e.target.value)}
            required={input.required}
            placeholder={input.placeholder}
            style={{
              backgroundColor: '#f3f4f6',
              color: '#1f2937',
              borderRadius: '12px',
              padding: '14px 20px',
              fontSize: '15px',
              border: 'none',
              outline: 'none',
              width: '100%',
            }}
          />
        ))}
        <p style={{ fontSize: '12px', color: '#9ca3af', marginLeft: '4px' }}>We respect your privacy. No spam, ever.</p>
      </div>

      {/* Hidden inputs for all triage form fields */}
      {formQuestions.map((question) => {
        const fieldValue = getFieldValue(question.id)
        if (question.type === 'contact-info') return null
        if (Array.isArray(fieldValue)) {
          return fieldValue.map((value) => (
            <input key={`${question.id}-${value}`} type="hidden" name={question.id} value={value} />
          ))
        }
        return <input key={question.id} type="hidden" name={question.id} value={fieldValue as string} />
      })}
      <input type="hidden" name="name" value={name} />
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="phone" value={phone} />
      <input type="hidden" name="company" value={company} />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
        <Button
          type="submit"
          variant="white"
          size="lg"
          disabled={!name || !email}
        >
          {chosenPath === 'schedule' ? 'Continue to Scheduling' : 'Continue to Chat'}
          <ChevronRight size={18} className="ml-1" />
        </Button>
      </div>
    </form>
  )
}

export function ConversationalForm({ initialRole, onComplete }: ConversationalFormProps) {
  const activeQuestionRef = useRef<HTMLDivElement>(null)

  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    userRole,
    name,
    email,
    phone,
    company,
    success,
    showChoicePoint,
    chosenPath,
    answeredQuestions,
    isContactInfoStep,
    getFieldValue,
    setFieldValue,
    handleAnswer,
    moveToNextQuestion,
    handleGoBack,
    handlePathChoice: hookHandlePathChoice,
    handleSubmit,
    getCurrentFormData,
    getCalendlyCustomAnswers,
  } = useDealInquiryForm(
    (data) => {
      if (chosenPath === 'ai_chat') {
        // Contact info submitted — now start AI chat inline
        setShowAIChat(true)
        startAIChat()
      } else if (chosenPath) {
        onComplete(data, chosenPath)
      }
    },
    initialRole
  )

  const [showCalendlyInline, setShowCalendlyInline] = useState(false)
  const [showAIChat, setShowAIChat] = useState(false)
  const [aiMessages, setAiMessages] = useState<Array<{ text: string; sender: 'bot' | 'user' }>>([])
  const [aiInput, setAiInput] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const aiInputRef = useRef<HTMLInputElement>(null)

  const handlePathChoice = (path: 'schedule' | 'ai_chat') => {
    trackEvent('discover_path_choice', { path })
    hookHandlePathChoice(path)
    if (path === 'schedule') {
      setShowCalendlyInline(true)
    }
    // AI chat path goes through contact info first (handled by the hook advancing to contact_info question)
  }

  const startAIChat = async () => {
    setAiLoading(true)
    try {
      const formData = getCurrentFormData()
      const reply = await getAIDealResponse(
        'I just shared my deal details and would like to explore options.',
        [{ text: `Hi ${name || 'there'}!`, sender: 'bot' }],
        formData
      )
      const parsed = JSON.parse(reply)
      setAiMessages([{ text: parsed.message, sender: 'bot' }])
    } catch {
      setAiMessages([{ text: "Hi! I'd love to help you explore your funding options. What questions do you have?", sender: 'bot' }])
    } finally {
      setAiLoading(false)
    }
  }

  const sendAIMessage = async () => {
    if (!aiInput.trim() || aiLoading) return
    const userMsg = aiInput.trim()
    setAiInput('')
    setAiMessages(prev => [...prev, { text: userMsg, sender: 'user' }])
    setAiLoading(true)

    try {
      const reply = await getAIDealResponse(userMsg, aiMessages, getCurrentFormData())
      const parsed = JSON.parse(reply)
      setAiMessages(prev => [...prev, { text: parsed.message, sender: 'bot' }])
    } catch {
      setAiMessages(prev => [...prev, { text: "Sorry, I'm having trouble right now. Please try again.", sender: 'bot' }])
    } finally {
      setAiLoading(false)
    }
  }

  // Auto-scroll to active question
  useEffect(() => {
    if (activeQuestionRef.current) {
      setTimeout(() => {
        activeQuestionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 300)
    }
  }, [currentQuestionIndex, showChoicePoint])

  const isPartner = userRole === 'A Banker / Business Advisor'

  const getDisplayTitle = (question: typeof formQuestions[0]) => {
    return (isPartner && question.partnerTitle) ? question.partnerTitle : question.title
  }

  if (success) return null

  return (
    <div className="py-8 w-full relative z-10">
      <div className="flex flex-col gap-5">

        {/* Answered Questions Thread — chat style */}
        <AnimatePresence mode="popLayout">
          {answeredQuestions.map((aq, index) => (
            <motion.div
              key={`answered-${aq.questionId}-${index}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3"
            >
              {/* Question — left aligned */}
              <QuestionRow>{aq.displayTitle}</QuestionRow>

              {/* All options — right aligned, selected one highlighted */}
              <AnswerRow>
                {aq.options.length > 0 ? (
                  aq.options.map((option) => {
                    const isSelected = Array.isArray(aq.answer)
                      ? aq.answer.includes(option)
                      : aq.answer === option
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleGoBack(index)}
                        className="px-8 py-4 rounded-2xl font-medium text-[15px] transition-all hover:scale-[1.01]"
                        style={{
                          backgroundColor: isSelected ? COLORS.highlight : 'rgba(255,255,255,0.5)',
                          color: isSelected ? COLORS.dark : 'rgba(255,255,255,0.6)',
                        }}
                      >
                        {option}
                      </button>
                    )
                  })
                ) : (
                  <AnswerBubble onClick={() => handleGoBack(index)}>
                    {Array.isArray(aq.answer) ? aq.answer.join(', ') : aq.answer}
                  </AnswerBubble>
                )}
              </AnswerRow>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Choice Point */}
        {showChoicePoint && !chosenPath && (
          <motion.div
            ref={activeQuestionRef}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            <QuestionRow>Thanks for sharing! Would you like to speak with our team or explore options with our AI assistant?</QuestionRow>

            <AnswerRow>
              <OptionPill
                label="Schedule a Call"
                isSelected={false}
                onClick={() => handlePathChoice('schedule')}
              />
              <OptionPill
                label="Explore with our Funding Navigator"
                isSelected={false}
                onClick={() => handlePathChoice('ai_chat')}
              />
            </AnswerRow>
          </motion.div>
        )}

        {/* Active Question */}
        {!showChoicePoint && !showCalendlyInline && !showAIChat && currentQuestion && !isContactInfoStep && (
          <motion.div
            ref={activeQuestionRef}
            key={`active-${currentQuestion.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            {/* Question — left aligned */}
            {currentQuestion.title && (
              <div>
                <QuestionRow>{getDisplayTitle(currentQuestion)}</QuestionRow>
                {currentQuestion.helpHtml && (
                  <div className="ml-1 mt-1">
                    <HelpText html={currentQuestion.helpHtml} />
                  </div>
                )}
              </div>
            )}

            {/* Answer options — right aligned */}
            {currentQuestion.type === 'single' && (
              <AnswerRow>
                {currentQuestion.answers.map((option) => {
                  const isSelected = selectedAnswer === option || getFieldValue(currentQuestion.id) === option
                  return (
                    <OptionPill
                      key={option}
                      label={option}
                      isSelected={isSelected}
                      onClick={() => {
                        trackEvent('discover_step_answered', {
                          question: currentQuestion.id,
                          step: currentQuestionIndex + 1,
                          answer: option,
                        })
                        handleAnswer(option)
                      }}
                      disabled={selectedAnswer !== null}
                    />
                  )
                })}
              </AnswerRow>
            )}

            {currentQuestion.type === 'multi' && (
              <div style={{ width: '100%' }} className="flex flex-col items-center gap-3">
                <p className="text-white/50 text-xs">Select all that apply</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {currentQuestion.answers.map((option) => {
                    const currentValues = (getFieldValue(currentQuestion.id) as string[]) || []
                    const isSelected = currentValues.includes(option)
                    return (
                      <OptionPill
                        key={option}
                        label={option}
                        isSelected={isSelected}
                        onClick={() => {
                          const values = currentValues.includes(option)
                            ? currentValues.filter(v => v !== option)
                            : [...currentValues, option]
                          setFieldValue(currentQuestion.id, values)
                        }}
                      />
                    )
                  })}
                </div>
                <Button
                  type="button"
                  variant="white"
                  size="lg"
                  onClick={() => {
                    trackEvent('discover_step_answered', {
                      question: currentQuestion.id,
                      step: currentQuestionIndex + 1,
                      answer: ((getFieldValue(currentQuestion.id) as string[]) || []).join(', '),
                    })
                    moveToNextQuestion()
                  }}
                  disabled={(getFieldValue(currentQuestion.id) as string[])?.length === 0}
                >
                  Continue <ChevronRight size={18} className="ml-1" />
                </Button>
              </div>
            )}
          </motion.div>
        )}

        {/* Contact Info (after choice point) */}
        {isContactInfoStep && chosenPath && !showCalendlyInline && !showAIChat && (
          <motion.div
            ref={activeQuestionRef}
            key="contact-info"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            <QuestionRow>{getDisplayTitle(currentQuestion!)}</QuestionRow>

            <div style={{ width: '100%', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              <ContactInfoFields
                isPartner={isPartner}
                name={name}
                email={email}
                phone={phone}
                company={company}
                setFieldValue={setFieldValue}
                chosenPath={chosenPath}
                getFieldValue={getFieldValue}
                handleSubmit={handleSubmit}
              />
            </div>
          </motion.div>
        )}

        {/* Inline Calendly — appears in conversation after choosing Schedule */}
        {showCalendlyInline && (
          <motion.div
            ref={activeQuestionRef}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            <QuestionRow>Pick a time that works for you</QuestionRow>

            <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
              <CalendlyWidget
                name={name}
                email={email}
                dealContext=""
                height="1100px"
                calendlyUrl={
                  userRole === 'A Banker / Business Advisor'
                    ? CALENDLY_URLS.michael.partner
                    : CALENDLY_URLS.michael.owner
                }
                customAnswers={getCalendlyCustomAnswers()}
              />
            </div>
          </motion.div>
        )}

        {/* Inline AI Chat — continues the conversation */}
        {showAIChat && (
          <motion.div
            ref={activeQuestionRef}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            {/* AI Messages */}
            {aiMessages.map((msg, i) => (
              <div key={i}>
                {msg.sender === 'bot' ? (
                  <QuestionRow>{msg.text}</QuestionRow>
                ) : (
                  <AnswerRow>
                    <div style={{
                      backgroundColor: COLORS.highlight,
                      borderRadius: '16px',
                      padding: '14px 20px',
                      color: COLORS.dark,
                      fontSize: '15px',
                      fontWeight: 500,
                    }}>
                      {msg.text}
                    </div>
                  </AnswerRow>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {aiLoading && (
              <QuestionRow>
                <span className="flex gap-1.5">
                  <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </QuestionRow>
            )}

            {/* Input */}
            <AnswerRow>
              <div style={{
                display: 'flex',
                gap: '8px',
                width: '100%',
                alignItems: 'center',
              }}>
                <input
                  ref={aiInputRef}
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      sendAIMessage()
                    }
                  }}
                  placeholder="Type your response..."
                  disabled={aiLoading}
                  style={{
                    flex: 1,
                    backgroundColor: 'white',
                    color: '#1f2937',
                    borderRadius: '16px',
                    padding: '14px 20px',
                    fontSize: '15px',
                    border: 'none',
                    outline: 'none',
                  }}
                />
                <button
                  onClick={sendAIMessage}
                  disabled={aiLoading || !aiInput.trim()}
                  style={{
                    backgroundColor: COLORS.highlight,
                    color: COLORS.dark,
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: aiLoading || !aiInput.trim() ? 0.5 : 1,
                    flexShrink: 0,
                  }}
                >
                  <Send size={18} />
                </button>
              </div>
            </AnswerRow>

            {/* Schedule call option */}
            <AnswerRow>
              <OptionPill
                label="Schedule a Call"
                isSelected={false}
                onClick={() => {
                  setShowAIChat(false)
                  setShowCalendlyInline(true)
                }}
              />
            </AnswerRow>
          </motion.div>
        )}
      </div>
    </div>
  )
}
