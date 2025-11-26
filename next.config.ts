import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
