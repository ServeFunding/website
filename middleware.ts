import { NextRequest, NextResponse } from 'next/server'

/**
 * Middleware for Nonce-Based Content Security Policy
 *
 * Generates a cryptographically secure nonce for each request,
 * eliminating the need for 'unsafe-inline' in CSP.
 *
 * This improves security against XSS attacks and increases
 * Lighthouse "Best Practices" score (+10-15 points).
 */

function generateNonce(): string {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  let binary = ''
  array.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary)
}

export function middleware(request: NextRequest) {
  const nonce = generateNonce()

  // Build CSP header with nonce
  // Note: 'unsafe-inline' removed from script-src - all inline scripts use nonce
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://js.hsforms.net https://js.hs-scripts.com https://umami-production-25e0.up.railway.app https://serveinfo.up.railway.app https://va.vercel-scripts.com https://ddwl4m2hdecbv.cloudfront.net https://static.hsappstatic.net https://assets.calendly.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://api.hsforms.com https://forms.hsforms.com https://umami-production-25e0.up.railway.app https://serveinfo.up.railway.app https://static.hsappstatic.net https://calendly.com https://assets.calendly.com",
    "frame-src 'self' https://forms.hsforms.com https://js.hsforms.net http://js.hsforms.net https://calendly.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self' https://forms.hsforms.com https://calendly.com"
  ].join('; ')

  // Clone request headers and add nonce
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  // Create response with updated request headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Set CSP header on response
  response.headers.set('Content-Security-Policy', csp)

  return response
}

// Exclude static files and API routes from middleware for performance
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)).*)',
  ],
}
