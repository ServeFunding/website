import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Modern output for better performance
  output: 'standalone',
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Enable compression
  compress: true,
  
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Configure headers for caching and security
  async headers() {
    return [
      // Security headers for all routes
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.hsforms.net https://js.hs-scripts.com https://js.hscollectedforms.net https://js.hs-banner.com https://js.hs-analytics.net https://js.hsadspixel.net https://umami-production-25e0.up.railway.app",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://api.hsforms.com https://forms.hsforms.com https://forms.hscollectedforms.net https://forms-na1.hsforms.com https://api.hubapi.com https://umami-production-25e0.up.railway.app",
              "frame-src 'self' https://forms.hsforms.com https://js.hsforms.net http://js.hsforms.net",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self' https://forms.hsforms.com"
            ].join('; ')
          }
        ],
      },
      // Static asset caching
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www redirect - SEO best practice to prevent duplicate content
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.servefunding.com",
          },
        ],
        destination: "https://servefunding.com/:path*",
        permanent: true,
      },
      // WordPress legacy redirects
      {
        source: "/frequently-asked-questions-faq",
        destination: "/faq",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/sample-page",
        destination: "/",
        permanent: true, // 301 redirect to home
      },
      // Old WordPress category/blog pages to new blog
      {
        source: "/category/uncategorized",
        destination: "/blog",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/category/:category",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true, // 301 redirect for SEO
      },
      // Client success pages - alias to fundings
      {
        source: "/client-success",
        destination: "/fundings",
        permanent: true, // 301 redirect for SEO
      },
      // Core values - redirect to about-us where E-A-T is featured
      {
        source: "/core-values",
        destination: "/about-us",
        permanent: true, // 301 redirect for SEO
      },
      // Consolidated FAQ redirects
      {
        source: "/faq/working-capital",
        destination: "/faq",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/faq/about-serve-funding",
        destination: "/faq",
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

export default nextConfig;
