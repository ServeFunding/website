'use client'

import { useEffect, useRef, useState } from 'react'
import { COLORS } from '@/lib/colors'

declare global {
  interface Window {
    Calendly?: any
  }
}

interface CalendlyWidgetProps {
  name: string
  email: string
  dealContext: string
  calendlyUrl: string
  height?: string
  customAnswers?: Record<string, string>
}

export function CalendlyWidget({ name, email, dealContext, height = '700px', calendlyUrl, customAnswers }: CalendlyWidgetProps) {
  // Build URL with prefilled parameters
  const params = new URLSearchParams({
    hide_event_type_details: '1',
    hide_gdpr_banner: '1',
    text_color: COLORS.dark.replace('#', ''),
    primary_color: COLORS.primary.replace('#', ''),
    ...(name && { name }),
    ...(email && { email }),
    // Use custom answers if provided, otherwise fall back to dealContext as a1
    ...(customAnswers
      ? Object.fromEntries(
          Object.entries(customAnswers).map(([key, val]) => [key, val.substring(0, 500)])
        )
      : dealContext ? { a1: dealContext.substring(0, 500) } : {}
    ),
  })

  // Use passed calendlyUrl or default to Michael's discovery call
  const baseUrl = calendlyUrl
  const url = `${baseUrl}?${params.toString().replace(/\+/g, '%20')}`

  const widgetRef = useRef<HTMLDivElement>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    // Use Intersection Observer to load Calendly only when widget is visible
    // This defers third-party script loading until user scrolls near the form
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !scriptLoaded) {
          loadCalendlyScript()
          observer.disconnect()
        }
      },
      { rootMargin: '50px' } // Start loading 50px before widget enters viewport
    )

    if (widgetRef.current) {
      observer.observe(widgetRef.current)
    }

    return () => observer.disconnect()
  }, [scriptLoaded])

  // Listen for Calendly event_scheduled to redirect to confirmation page
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        const payload = e.data?.payload || {}
        const params = new URLSearchParams({
          event_type_name: payload.event_type?.name || '',
          event_start_time: payload.event?.start_time || '',
          assigned_to: payload.event?.assigned_to?.[0] || '',
          invitee_full_name: payload.invitee?.name || name || '',
          invitee_email: payload.invitee?.email || email || '',
        })
        window.location.href = `/call-confirmed?${params.toString()}`
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [name, email])

  const loadCalendlyScript = () => {
    // If Calendly is already loaded, just initialize
    if (window.Calendly) {
      window.Calendly.initializeWidget?.()
      setScriptLoaded(true)
      return
    }

    // Otherwise load the script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      // Initialize widgets after script loads
      if (window.Calendly) {
        window.Calendly.initializeWidget?.()
      }
      setScriptLoaded(true)
    }
    document.body.appendChild(script)
  }

  return (
    <div
      ref={widgetRef}
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: '480px', height }}
    />
  )
}
