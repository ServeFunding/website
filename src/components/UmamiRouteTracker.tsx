"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Sends a manual Umami pageview on route changes to improve SPA tracking fidelity.
export function UmamiRouteTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === "undefined") return
    const url = `${window.location.pathname}${window.location.search}`
    const umami = (window as any).umami
    if (umami?.track) {
      umami.track("pageview", { url })
    }
  }, [pathname, searchParams])

  return null
}
