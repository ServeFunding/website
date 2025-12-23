'use client'

import { useState, useEffect } from 'react'
import { useFormSubmit, FormSubmitData } from './useFormSubmit'
import { questions } from '@/components/Forms'
import { trackEvent } from '@/lib/tracking'

export function useDealInquiryForm(onSubmitSuccess?: (formData: FormSubmitData) => void) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [userRole, setUserRole] = useState('')
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

  // Track form initialization
  useEffect(() => {
    trackEvent('deal_inquiry_form_started')
  }, [])

  // Triage function - determines which calendly link based on deal size and business age
  const getTriagedCalendlyUrl = (funding: string, revenue: string, timeInBusiness: string): string => {
    const isSmallFunding = funding === '$100K–$250K'
    const isSmallRevenue = revenue === '$500K–$1MM'
    const isNewBusiness = timeInBusiness === '< 1 year'

    // Route small deals, young companies, or small revenue to Kyler
    if (isSmallFunding || isSmallRevenue || isNewBusiness) {
      return 'https://calendly.com/kyler-servefunding/30min'
    }

    // Default to standard deal inquiry
    return 'https://calendly.com/michael_kodinsky/discovery'
  }

  const { success, handleSubmit: baseHandleSubmit, formData } = useFormSubmit(
    'deal_inquiry',
    'https://aiascend.app.n8n.cloud/webhook/sf-inquiry',
    '',
    (data) => {
      // Store form data for the chat interface and call callback
      if (onSubmitSuccess) {
        onSubmitSuccess(data)
      }
    }
  )

  const getFieldValue = (fieldId: string) => {
    switch (fieldId) {
      case 'user_role': return userRole
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
    switch (fieldId) {
      case 'user_role': setUserRole(value); break
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

  const handleAnswer = (value: any) => {
    const currentQ = questions[currentQuestion]
    setFieldValue(currentQ.id, value)
    setSelectedAnswer(value)

    // Track question answered
    trackEvent('deal_inquiry_question_answered', {
      question_number: currentQuestion + 1,
      question_id: currentQ.id,
      answer_type: currentQ.type,
    })

    if (currentQ?.autoAdvance) {
      // Delay advancement to show highlight effect
      setTimeout(() => {
        moveToNextQuestion()
        setSelectedAnswer(null)
      }, 600)
    }
  }

  const moveToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1
      setCurrentQuestion(nextQuestion)

      // Track progress
      trackEvent('deal_inquiry_question_advanced', {
        from_question: currentQuestion + 1,
        to_question: nextQuestion + 1,
        progress_percentage: Math.round(((nextQuestion + 1) / questions.length) * 100),
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Stop the event from propagating to HubSpot's global listeners
    if (e.nativeEvent) {
      (e.nativeEvent as Event).stopImmediatePropagation?.()
    }

    // Determine triaged Calendly URL based on deal size, revenue, and business age
    const triagedCalendlyUrl = getTriagedCalendlyUrl(fundingAmount, annualRevenue, timeInBusiness)

    // Determine which path user is being routed to
    const isSmallFunding = fundingAmount === '$100K–$250K'
    const isSmallRevenue = annualRevenue === '$500K–$1MM'
    const isNewBusiness = timeInBusiness === '< 1 year'
    const triageRoute = (isSmallFunding || isSmallRevenue || isNewBusiness) ? 'kyler' : 'michael'

    // Track form submission with triage result
    trackEvent('deal_inquiry_form_submitted', {
      triage_route: triageRoute,
      funding_amount: fundingAmount,
      annual_revenue: annualRevenue,
      time_in_business: timeInBusiness,
      user_role: userRole,
      business_industry: businessIndustry,
    })

    // Add triaged calendly URL as hidden input so it goes to webhook
    const form = e.currentTarget
    const calendlyInput = document.createElement('input')
    calendlyInput.type = 'hidden'
    calendlyInput.name = 'calendly_url'
    calendlyInput.value = triagedCalendlyUrl
    form.appendChild(calendlyInput)

    // Build form data object for submission
    const formElement = new FormData(form)

    // Manually set all hidden inputs
    const hiddenInputs = form.querySelectorAll('input[type="hidden"]')
    hiddenInputs.forEach(input => {
      const name = (input as HTMLInputElement).name
      const value = (input as HTMLInputElement).value
      if (!formElement.has(name)) {
        formElement.set(name, value)
      }
    })

    await baseHandleSubmit(e)

    // Clean up the added input
    form.removeChild(calendlyInput)
  }

  return {
    currentQuestion,
    selectedAnswer,
    userRole,
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
    getFieldValue,
    setFieldValue,
    handleAnswer,
    moveToNextQuestion,
    handleSubmit,
  }
}
