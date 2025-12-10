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
    _hsq?: Array<unknown> & {
      push: (...args: unknown[]) => number
    }
  }
}

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "23433903"

type HubSpotQueue = Array<unknown> & {
  push: (...args: unknown[]) => number
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
 * @param messageText - Raw user message (trimmed for privacy)
 */
export function trackChatbotMessage(topic?: string, messageText?: string) {
  const preview = messageText ? messageText.slice(0, 200) : undefined

  trackEvent("chatbot_message_sent", {
    ...(topic && { topic }),
    ...(preview && { message_preview: preview, message_length: messageText?.length ?? 0 }),
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
 * Push non-HubSpot (native) form submissions into HubSpot
 * so submissions show in the portal alongside embedded forms.
 */
export function trackHubSpotNativeForm(formType: string, formEl?: HTMLFormElement) {
  if (typeof window === "undefined") return

  if (!window._hsq) {
    window._hsq = [] as unknown as HubSpotQueue
  }

  const queue = window._hsq as HubSpotQueue
  const formId = `serve-funding-${formType}`

  try {
    queue.push([
      "trackForm",
      formEl ?? `.form-${formType}`,
      {
        portalId: HUBSPOT_PORTAL_ID,
        formId,
        conversionName: `Non-HubSpot ${formType}`,
      },
    ])
  } catch (error) {
    console.warn("HubSpot native form tracking failed", error)
  }
}