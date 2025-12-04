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
  
  // Configure headers for caching
  async headers() {
    return [
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
