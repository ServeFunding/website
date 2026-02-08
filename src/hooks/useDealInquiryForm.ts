'use client'

import { useState, useEffect, useMemo } from 'react'
import { useFormSubmit, FormSubmitData } from './useFormSubmit'
import { formQuestions } from '@/data/form-questions'
import { trackEvent } from '@/lib/tracking'
import { checkTriageRules, triageRules, type TriageAction } from '@/lib/triage-rules'

export function useDealInquiryForm(onSubmitSuccess?: (formData: FormSubmitData) => void) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [skippedQuestions, setSkippedQuestions] = useState<Set<string>>(new Set())
  const [triageAction, setTriageAction] = useState<TriageAction | null>(null)
  const [questionHistory, setQuestionHistory] = useState<number[]>([])

  // Form field states
  const [userRole, setUserRole] = useState('')
  const [partnerType, setPartnerType] = useState('')
  const [businessIndustry, setBusinessIndustry] = useState('')
  const [timeInBusiness, setTimeInBusiness] = useState('')
  const [annualRevenue, setAnnualRevenue] = useState('')
  const [financingNeeds, setFinancingNeeds] = useState<string[]>([])
  const [fundingAmount, setFundingAmount] = useState('')
  const [ownerCreditScore, setOwnerCreditScore] = useState('')
  const [contactUsDetails, setContactUsDetails] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [companyState, setCompanyState] = useState('')

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

  const getFieldValue = (fieldId: string) => {
    // Handle dynamic "other" fields
    if (fieldId.endsWith('_other')) {
      return otherResponses[fieldId] || ''
    }

    switch (fieldId) {
      case 'user_role': return userRole
      case 'partner_type': return partnerType
      case 'business_industry': return businessIndustry
      case 'time_in_business': return timeInBusiness
      case 'annual_revenue': return annualRevenue
      case 'financing_needs': return financingNeeds
      case 'funding_amount': return fundingAmount
      case 'owner_credit_score': return ownerCreditScore
      case 'contact_us_details': return contactUsDetails
      case 'name': return name
      case 'email': return email
      case 'phone': return phone
      case 'company': return company
      case 'company_state': return companyState
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
      case 'partner_type': setPartnerType(value); break
      case 'business_industry': setBusinessIndustry(value); break
      case 'time_in_business': setTimeInBusiness(value); break
      case 'annual_revenue': setAnnualRevenue(value); break
      case 'financing_needs': setFinancingNeeds(value); break
      case 'funding_amount': setFundingAmount(value); break
      case 'owner_credit_score': setOwnerCreditScore(value); break
      case 'contact_us_details': setContactUsDetails(value); break
      case 'name': setName(value); break
      case 'email': setEmail(value); break
      case 'phone': setPhone(value); break
      case 'company': setCompany(value); break
      case 'company_state': setCompanyState(value); break
    }
  }

  // Build current form state for triage evaluation
  const getCurrentFormState = () => ({
    user_role: userRole,
    partner_type: partnerType,
    business_industry: businessIndustry,
    time_in_business: timeInBusiness,
    annual_revenue: annualRevenue,
    financing_needs: financingNeeds,
    funding_amount: fundingAmount,
    owner_credit_score: ownerCreditScore,
    contact_us_details: contactUsDetails,
  })

  const handleAnswer = (value: any) => {
    if (!currentQuestion) return

    setFieldValue(currentQuestion.id, value)
    setSelectedAnswer(value)

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

    // If a triage rule matches, skip to contact form instead of submitting
    if (applicableRule?.then.action === 'mike') {
      setTriageAction(applicableRule.then.action)

      // Jump to contact question - skip all questions between current and contact
      const contactIndex = visibleQuestions.findIndex(q => q.id === 'contact_info')
      if (contactIndex !== -1) {
        const questionsToSkip = visibleQuestions
          .slice(currentQuestionIndex + 1, contactIndex)
          .map(q => q.id)

        // Calculate what the contact question index will be after skipping
        const newSkippedQuestions = new Set([...skippedQuestions, ...questionsToSkip])
        const newVisibleQuestions = formQuestions.filter(q => !newSkippedQuestions.has(q.id))
        const newContactIndex = newVisibleQuestions.findIndex(q => q.id === 'contact_info')

        setSkippedQuestions(newSkippedQuestions)
        setCurrentQuestionIndex(newContactIndex)
        setQuestionHistory(prev => [...prev, newContactIndex])
      }
      return // Don't call moveToNextQuestion
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

  // Calendly URLs
  const KYLER_CALENDLY = 'https://calendly.com/kyler-servefunding/30min'
  const MICHAEL_DISCOVERY = 'https://calendly.com/michael_kodinsky/discovery'

  const getTriagedCalendlyUrl = (): string => {
    // If immediate routing rule matched, use that
    if (triageAction === 'mike') {
      return MICHAEL_DISCOVERY
    }

    // For form completion, check final state
    const formState = getCurrentFormState()

    // Check all rules one more time with complete form state
    const applicableRule = checkTriageRules('owner_credit_score', formState)

    if (applicableRule) {
      const { action } = applicableRule.then
      if (action === 'kyler_with_chat') {
        return KYLER_CALENDLY
      }
    }

    // Default: Michael's calendar
    return MICHAEL_DISCOVERY
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
    partnerType,
    businessIndustry,
    timeInBusiness,
    annualRevenue,
    financingNeeds,
    fundingAmount,
    ownerCreditScore,
    contactUsDetails,
    name,
    email,
    phone,
    company,
    companyState,
    success,
    formData,
    triageAction,
    otherResponses,
    getFieldValue,
    setFieldValue,
    handleAnswer,
    moveToNextQuestion,
    moveToPreviousQuestion,
    handleSubmit,
  }
}
