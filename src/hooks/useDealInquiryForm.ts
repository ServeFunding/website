'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { useFormSubmit, FormSubmitData } from './useFormSubmit'
import { formQuestions } from '@/data/form-questions'
import { trackEvent, trackFormSubmission, trackHubSpotNativeForm } from '@/lib/tracking'
import { checkTriageRules, triageRules, type TriageAction } from '@/lib/triage-rules'

const WEBHOOK_URL = 'https://aiascend.app.n8n.cloud/webhook/sf-inquiry'
const CLAY_WEBHOOK_URL = process.env.NEXT_PUBLIC_CLAY_WEBHOOK_URL || ''

// Calendly URLs - split by person and owner vs partner role
export const CALENDLY_URLS = {
  michael: {
    owner: 'https://calendly.com/michael_kodinsky/30-minute-funding-call',
    partner: 'https://calendly.com/michael_kodinsky/partner-strategy-call',
  },
  kyler: {
    // TODO: Kyler to create matching Calendly links with same intake questions
    owner: 'https://calendly.com/d/cxqk-t6s-72q/30-minute-funding-strategy-call',
    partner: 'https://calendly.com/d/cxqk-t6s-72q/30-minute-funding-strategy-call',
  },
}

// Quick schedule link always goes to Kyler's owner calendar
export const QUICK_SCHEDULE_URL = CALENDLY_URLS.kyler.owner

function getRoleType(userRole: string): 'owner' | 'partner' {
  return userRole === 'A Business Owner or Operator Seeking Funding' ? 'owner' : 'partner'
}

function getCalendlyUrlForAction(action: string, userRole: string): string {
  const roleType = getRoleType(userRole)

  if (action === 'mike' || action === 'mike_with_chat') {
    return CALENDLY_URLS.michael[roleType]
  }

  if (action === 'kyler_with_chat') {
    return CALENDLY_URLS.kyler[roleType]
  }

  // Default: Michael
  return CALENDLY_URLS.michael[roleType]
}

export function useDealInquiryForm(onSubmitSuccess?: (formData: FormSubmitData) => void) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [skippedQuestions, setSkippedQuestions] = useState<Set<string>>(new Set())
  const [triageAction, setTriageAction] = useState<TriageAction | null>(null)
  const [questionHistory, setQuestionHistory] = useState<number[]>([])
  const [pendingSubmit, setPendingSubmit] = useState(false)
  const [earlySubmitted, setEarlySubmitted] = useState(false)
  const isEarlySubmitRef = useRef(false)

  // Form field states
  const [userRole, setUserRole] = useState('')
  const [businessIndustry, setBusinessIndustry] = useState('')
  const [timeInBusiness, setTimeInBusiness] = useState('')
  const [annualRevenue, setAnnualRevenue] = useState('')
  const [financingNeeds, setFinancingNeeds] = useState<string[]>([])
  const [fundingAmount, setFundingAmount] = useState('')
  const [ownerCreditScore, setOwnerCreditScore] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')

  // Dynamic "other" field responses (for single_with_other questions)
  const [otherResponses, setOtherResponses] = useState<Record<string, string>>({})

  // Track form initialization
  useEffect(() => {
    trackEvent('deal_inquiry_form_started')
  }, [])

  // Get visible questions (excluding skipped ones)
  const visibleQuestions = useMemo(() => {
    return formQuestions.filter(q => !skippedQuestions.has(q.id))
  }, [skippedQuestions])

  const currentQuestion = visibleQuestions[currentQuestionIndex]
  const totalVisibleQuestions = visibleQuestions.length
  const isLastQuestion = currentQuestionIndex === totalVisibleQuestions - 1

  const getFieldValue = (fieldId: string) => {
    // Handle dynamic "other" fields
    if (fieldId.endsWith('_other')) {
      return otherResponses[fieldId] || ''
    }

    switch (fieldId) {
      case 'user_role': return userRole
      case 'business_industry': return businessIndustry
      case 'time_in_business': return timeInBusiness
      case 'annual_revenue': return annualRevenue
      case 'financing_needs': return financingNeeds
      case 'funding_amount': return fundingAmount
      case 'owner_credit_score': return ownerCreditScore
      case 'name': return name
      case 'email': return email
      case 'phone': return phone
      case 'company': return company
      default: return ''
    }
  }

  const setFieldValue = (fieldId: string, value: any) => {
    // Handle dynamic "other" fields
    if (fieldId.endsWith('_other')) {
      setOtherResponses(prev => ({
        ...prev,
        [fieldId]: value
      }))
      return
    }

    switch (fieldId) {
      case 'user_role': setUserRole(value); break
      case 'business_industry': setBusinessIndustry(value); break
      case 'time_in_business': setTimeInBusiness(value); break
      case 'annual_revenue': setAnnualRevenue(value); break
      case 'financing_needs': setFinancingNeeds(value); break
      case 'funding_amount': setFundingAmount(value); break
      case 'owner_credit_score': setOwnerCreditScore(value); break
      case 'name': setName(value); break
      case 'email': setEmail(value); break
      case 'phone': setPhone(value); break
      case 'company': setCompany(value); break
    }
  }

  // Build current form state for triage evaluation
  const getCurrentFormState = () => ({
    user_role: userRole,
    business_industry: businessIndustry,
    time_in_business: timeInBusiness,
    annual_revenue: annualRevenue,
    financing_needs: financingNeeds,
    funding_amount: fundingAmount,
    owner_credit_score: ownerCreditScore,
  })

  // Helper to send data to webhooks
  const sendToWebhooks = async (data: Record<string, any>, formType: string) => {
    const payload = { ...data, formType, submittedAt: new Date().toISOString() }
    const urls = [WEBHOOK_URL, ...(CLAY_WEBHOOK_URL ? [CLAY_WEBHOOK_URL] : [])]

    try {
      await Promise.allSettled(
        urls.map(url =>
          fetch('/api/webhook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ webhookUrl: url, ...payload }),
          })
        )
      )
    } catch (error) {
      console.error('Webhook submission error:', error)
    }
  }

  // Early submit - captures contact info immediately after they fill it in
  const submitEarlyContactInfo = async () => {
    if (earlySubmitted) return // Only submit once

    const earlyData = {
      name,
      email,
      phone,
      company,
      user_role: userRole,
      is_early_capture: true,
    }

    setEarlySubmitted(true)
    await sendToWebhooks(earlyData, 'deal_inquiry_early')
    trackFormSubmission('deal_inquiry_early')
    trackHubSpotNativeForm('deal_inquiry')
    trackEvent('deal_inquiry_contact_captured', { name, email })

    // Send email notification (early capture)
    try {
      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...earlyData, type: 'early' }),
      })
    } catch (error) {
      console.error('Notify email error:', error)
    }
  }

  // Send current form state to webhook after each question (for Google Sheets upsert)
  const sendAnswerWebhook = (questionId: string, answerValue: any) => {
    const formState = {
      ...getCurrentFormState(),
      [questionId]: answerValue,
      name,
      email,
      phone,
      company,
    }
    sendToWebhooks(formState, 'deal_inquiry_answer')
  }

  const handleAnswer = (value: any) => {
    if (!currentQuestion) return

    setFieldValue(currentQuestion.id, value)
    setSelectedAnswer(value)

    // Send webhook with updated form state (no email, just webhook for Sheets upsert)
    sendAnswerWebhook(currentQuestion.id, value)

    // Track question answered
    trackEvent('deal_inquiry_question_answered', {
      question_id: currentQuestion.id,
      answer: value,
    })

    // Auto-advance for single-choice questions (not multi-select)
    if (currentQuestion?.type !== 'multi') {
      // Delay advancement to show highlight effect, then check triage
      setTimeout(() => {
        checkAndAdvance(currentQuestion.id, value)
        setSelectedAnswer(null)
      }, 600)
    }
  }

  const checkAndAdvance = (justAnsweredQuestionId?: string, justAnsweredValue?: any) => {
    // Build form state with the just-answered question included (handles async state updates)
    const baseFormState = getCurrentFormState()
    const formState = justAnsweredQuestionId
      ? { ...baseFormState, [justAnsweredQuestionId]: justAnsweredValue }
      : baseFormState

    const currentQuestionId = justAnsweredQuestionId || currentQuestion?.id

    // Recalculate which questions should be skipped based on current form state
    const newSkippedQuestions = new Set<string>()

    // Check all skip rules against the current form state
    triageRules.forEach(rule => {
      if (rule.then.action === 'skip_question' && rule.then.skipQuestionId) {
        // Check if this rule's conditions are met with current form state
        if (checkTriageRules(rule.question_id, formState)?.then.skipQuestionId === rule.then.skipQuestionId) {
          newSkippedQuestions.add(rule.then.skipQuestionId)
        }
      }
    })

    setSkippedQuestions(newSkippedQuestions)

    // Check if a rule applies for THIS question
    const applicableRule = checkTriageRules(currentQuestionId || '', formState)

    // If a mike triage rule matches, submit immediately (contact info already collected)
    if (applicableRule?.then.action === 'mike') {
      setTriageAction(applicableRule.then.action)
      setPendingSubmit(true)
      return
    }

    moveToNextQuestion()
  }

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < totalVisibleQuestions - 1) {
      const nextIndex = currentQuestionIndex + 1
      setQuestionHistory(prev => [...prev, currentQuestionIndex])
      setCurrentQuestionIndex(nextIndex)

      trackEvent('deal_inquiry_question_advanced', {
        from_question: currentQuestionIndex + 1,
        to_question: nextIndex + 1,
      })
    }
  }

  const moveToPreviousQuestion = () => {
    if (questionHistory.length > 0) {
      const previousIndex = questionHistory[questionHistory.length - 1]
      setQuestionHistory(prev => prev.slice(0, -1))
      setCurrentQuestionIndex(previousIndex)
    }
  }

  // Flag the next submit as an early contact-info capture
  const flagEarlySubmit = () => {
    isEarlySubmitRef.current = true
  }

  const getTriagedCalendlyUrl = (): string => {
    // If immediate routing rule matched, use that
    if (triageAction === 'mike') {
      return getCalendlyUrlForAction('mike', userRole)
    }

    // For form completion, check final state
    const formState = getCurrentFormState()

    // Check all rules one more time with complete form state
    const applicableRule = checkTriageRules('owner_credit_score', formState)

    if (applicableRule) {
      const { action } = applicableRule.then
      return getCalendlyUrlForAction(action, userRole)
    }

    // Default: Michael's calendar based on role
    return getCalendlyUrlForAction('mike_with_chat', userRole)
  }

  // Build Calendly custom answers based on role type and form data
  const getCalendlyCustomAnswers = (): Record<string, string> => {
    const roleType = getRoleType(userRole)

    if (roleType === 'owner') {
      // Owner Calendly questions:
      // a1: "Tell us briefly about your business"
      // a2: "What is your monthly revenue range?" (dropdown - can't reliably prefill)
      // a3: "What is your current funding need or goal?"
      // a4: "How soon are you looking to secure funding?" (dropdown - can't reliably prefill)
      const businessDesc = [
        company,
        businessIndustry ? `${businessIndustry} business` : '',
        timeInBusiness ? `${timeInBusiness} in operation` : '',
      ].filter(Boolean).join(', ')

      const fundingGoal = financingNeeds.length > 0
        ? financingNeeds.join(', ')
        : ''

      return {
        ...(businessDesc && { a1: businessDesc }),
        ...(fundingGoal && { a3: fundingGoal }),
      }
    } else {
      // Partner Calendly questions:
      // a1: "Briefly describe your role and the clients you typically serve"
      // a2: "What types of funding needs do your clients most often have?" (checkboxes)
      // a3: "Where do you currently see gaps in serving your clients' funding needs?"
      // a4: "Is there anything specific you'd like to cover during the call?"
      const roleDesc = userRole

      return {
        ...(roleDesc && { a1: roleDesc }),
      }
    }
  }

  const resetPendingSubmit = () => setPendingSubmit(false)

  // Build current partial form data (for schedule-directly escape hatch)
  const getCurrentFormData = (): FormSubmitData => {
    const calendlyUrl = getCalendlyUrlForAction('kyler_with_chat', userRole)
    return {
      name,
      email,
      phone,
      company,
      user_role: userRole,
      business_industry: businessIndustry,
      time_in_business: timeInBusiness,
      annual_revenue: annualRevenue,
      financing_needs: financingNeeds,
      funding_amount: fundingAmount,
      owner_credit_score: ownerCreditScore,
      calendly_url: calendlyUrl,
      triage_action: 'kyler_with_chat',
    }
  }

  const { success, handleSubmit: baseHandleSubmit, formData } = useFormSubmit(
    'deal_inquiry',
    'https://aiascend.app.n8n.cloud/webhook/sf-inquiry',
    '',
    (data) => {
      if (onSubmitSuccess) {
        onSubmitSuccess(data)
      }
    }
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (e.nativeEvent) {
      (e.nativeEvent as Event).stopImmediatePropagation?.()
    }

    // Early submit path: contact info capture, then continue form
    if (isEarlySubmitRef.current) {
      isEarlySubmitRef.current = false

      // Track in HubSpot using the actual form element (native form tracking)
      const form = e.currentTarget
      trackHubSpotNativeForm('deal_inquiry', form)

      // Also send to webhooks
      await submitEarlyContactInfo()

      // Continue to next question
      moveToNextQuestion()
      return
    }

    // Full submit path: end of form or mike triage
    setPendingSubmit(false)

    const triagedCalendlyUrl = getTriagedCalendlyUrl()

    // Track form submission
    trackEvent('deal_inquiry_form_submitted', {
      triage_action: triageAction || 'default',
      calendly_url: triagedCalendlyUrl,
      user_role: userRole,
    })

    // Add calendly URL and triage action as hidden inputs
    const form = e.currentTarget
    const calendlyInput = document.createElement('input')
    calendlyInput.type = 'hidden'
    calendlyInput.name = 'calendly_url'
    calendlyInput.value = triagedCalendlyUrl
    form.appendChild(calendlyInput)

    const triageActionInput = document.createElement('input')
    triageActionInput.type = 'hidden'
    triageActionInput.name = 'triage_action'
    triageActionInput.value = triageAction || ''
    form.appendChild(triageActionInput)

    await baseHandleSubmit(e)
    form.removeChild(calendlyInput)
    form.removeChild(triageActionInput)
  }

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: totalVisibleQuestions,
    selectedAnswer,
    userRole,
    businessIndustry,
    timeInBusiness,
    annualRevenue,
    financingNeeds,
    fundingAmount,
    ownerCreditScore,
    name,
    email,
    phone,
    company,
    success,
    formData,
    triageAction,
    otherResponses,
    isLastQuestion,
    pendingSubmit,
    getFieldValue,
    setFieldValue,
    handleAnswer,
    moveToNextQuestion,
    moveToPreviousQuestion,
    flagEarlySubmit,
    handleSubmit,
    resetPendingSubmit,
    getCalendlyCustomAnswers,
    getCurrentFormData,
  }
}
