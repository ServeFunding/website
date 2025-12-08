/**
 * Umami Analytics Tracking Utility
 * Provides a consistent interface for tracking events throughout the application
 */

'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    umami?: {
      track: (name: string, properties?: Record<string, string | number | boolean>) => void
    }
    hbspt?: {
      forms: {
        addEventListener: (event: string, callback: () => void) => void
        create: (config: { portalId: string; formId: string; target: string }) => void
      }
    }
  }
}

/**
 * Track a custom event in Umami Analytics
 * @param eventName - Name of the event (e.g., 'form_submit_intro_call')
 * @param properties - Optional properties to attach to the event
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.umami?.track) {
    window.umami.track(eventName, properties)
  }
}

/**
 * Track form submission
 * @param formType - Type of form (e.g., 'intro_call', 'referral', 'newsletter', 'partner_inquiry')
 */
export function trackFormSubmission(formType: string) {
  trackEvent(`form_submit_${formType}`)
}

/**
 * Track form validation error
 * @param formType - Type of form
 * @param fieldName - Name of the field with error
 */
export function trackFormError(formType: string, fieldName: string) {
  trackEvent(`form_error_${formType}`, { field: fieldName })
}

/**
 * Track case study modal open
 * @param caseStudyTitle - Title of the case study
 * @param amount - Funding amount
 */
export function trackCaseStudyOpen(caseStudyTitle: string, amount?: string) {
  trackEvent("case_study_opened", {
    title: caseStudyTitle,
    ...(amount && { amount }),
  })
}

/**
 * Track solution clicked
 * @param solutionName - Name of the solution
 */
export function trackSolutionClick(solutionName: string) {
  trackEvent("solution_clicked", { solution: solutionName })
}

/**
 * Track solution details page view
 * @param solutionName - Name of the solution
 */
export function trackSolutionDetailsView(solutionName: string) {
  trackEvent("solution_details_viewed", { solution: solutionName })
}

/**
 * Track chatbot session start
 */
export function trackChatbotSessionStart() {
  trackEvent("chatbot_session_start")
}

/**
 * Track chatbot message sent
 * @param topic - Topic or intent of the message
 */
export function trackChatbotMessage(topic?: string) {
  trackEvent("chatbot_message_sent", {
    ...(topic && { topic }),
  })
}

/**
 * Track navigation click
 * @param linkName - Name/label of the link
 * @param destination - URL or page destination
 */
export function trackNavClick(linkName: string, destination?: string) {
  trackEvent("nav_click", {
    link: linkName,
    ...(destination && { destination }),
  })
}

/**
 * Track external link click
 * @param linkName - Name/label of the link
 * @param url - URL of external link
 */
export function trackExternalLinkClick(linkName: string, url?: string) {
  trackEvent("external_link_click", {
    link: linkName,
    ...(url && { url }),
  })
}

/**
 * Hook to track HubSpot form submissions
 * Use this hook in components that embed HubSpot forms
 * @param formType - Type of form (e.g., 'intro_call', 'newsletter', 'contact')
 */
export function useHubSpotFormTracking(formType: string) {
  useEffect(() => {
    if (window.hbspt) {
      window.hbspt.forms.addEventListener("onFormSubmit", () => {
        trackFormSubmission(formType)
      })
    }
  }, [formType])
}