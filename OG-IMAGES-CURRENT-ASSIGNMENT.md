# OG Image Assignment - Updated

All pages now use real images from your site for Open Graph sharing.

## Current OG Image Assignments

| Page | OG Image | Source |
|------|----------|--------|
| **Home** | `right funding solutions.webp` | 1st carousel slide |
| **Solutions (hub)** | `Asset Based Lending.webp` | Featured solution image |
| **About Us** | `runs in our blood.webp` | Founder's story section |
| **FAQ** | `blog.svg` | Placeholder (no specific image) |
| **Blog (hub)** | `blog.svg` | Placeholder (no specific image) |
| **Blog [post]** | `blog.svg` | Placeholder (no specific image) |
| **Contact Us** | `contact.svg` | Placeholder (no specific image) |
| **Partners** | `Trust.webp` | Partnership relationship image |
| **Solutions [detail]** | Dynamic | Uses each solution's image |

## Pages Still Using Placeholder SVGs

These pages don't have specific images on them, so SVG placeholders are appropriate:
- FAQ - `/og-images/faq.svg`
- Blog hub - `/og-images/blog.svg`
- Blog posts - `/og-images/blog.svg`
- Contact Us - `/og-images/contact.svg`

## How to Update Remaining Pages

If you want to add actual images for FAQ, Blog, or Contact Us pages later:

1. **Create an image** (1024x728 or 1200x630 pixels recommended)
2. **Save to `/public/og-images/`** directory
3. **Update metadata** in the corresponding `/src/app/*/page.tsx` file:
   ```typescript
   images: [
     {
       url: "https://servefunding.com/og-images/your-image.webp",
       width: 1024,
       height: 728,
       alt: "Description",
     },
   ],
   ```

## Notes

- Dynamic solution pages automatically use their associated solution image
- Image URLs are URL-encoded (spaces = `%20`)
- All images must be absolute URLs with https://
- Current images are WebP format (lightweight and modern)
