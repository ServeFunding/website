# OG Image Placeholder Guide

All pages now have OG image placeholders set up. These are temporary SVG files with your branding that you can replace with actual designs.

## Current Setup

| Page | OG Image URL | Location |
|------|-------------|----------|
| Home | `/og-images/home.svg` | Used by layout.tsx (all pages) |
| Solutions | `/og-images/solutions.svg` | `/solutions` page |
| About Us | `/og-images/about.svg` | `/about-us` page |
| FAQ | `/og-images/faq.svg` | `/faq` page |
| Blog | `/og-images/blog.svg` | `/blog` page & individual blog posts |
| Contact Us | `/og-images/contact.svg` | `/contact-us` page |
| Partners | `/og-images/partners.svg` | `/partners` page |

## How to Replace Placeholders

### Option 1: Replace with PNG/JPG Images
1. Create your OG images (recommended size: **1200x630 pixels**)
2. Save them to `/public/og-images/` with the same filenames
3. The metadata will automatically use the new images

Example structure:
```
/public/og-images/
  ├── home.png
  ├── solutions.png
  ├── about.png
  ├── faq.png
  ├── blog.png
  ├── contact.png
  └── partners.png
```

### Option 2: Use Different Format
If you want to use `.webp`, `.jpg`, or other formats, update the file extensions in the metadata files:
- `/src/app/layout.tsx` (home)
- `/src/app/solutions/page.tsx`
- `/src/app/about-us/page.tsx`
- `/src/app/faq/page.tsx`
- `/src/app/blog/page.tsx`
- `/src/app/contact-us/page.tsx`
- `/src/app/partners/page.tsx`
- `/src/app/blog/[blog-id]/page.tsx` (blog posts)
- `/src/app/solutions/[solution-id]/page.tsx` (solution details)

### Option 3: Convert SVG to PNG
You can convert the SVG placeholders to PNG using:
- **Online tools**: cloudconvert.com, zamzar.com
- **Command line**: `npm install -g svgexport` then `svgexport home.svg home.png 1200:630`
- **Design tools**: Figma, Adobe XD (import SVG, export as PNG)

## Current Placeholders

The SVG placeholders use:
- **Colors**: Serve Funding brand colors (olive green #2D5016, gold #D3CE75)
- **Size**: 1200x630 pixels (standard OG image size)
- **Format**: SVG (lightweight, scalable)

## Testing

Once you replace the images:
1. Test with [Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/)
2. Test with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
3. Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Notes

- SVG files are already available as fallbacks in the browser
- All OG image URLs must be absolute (https://servefunding.com/og-images/...)
- Recommended image format: **PNG or WebP** for best compatibility
- Keep images under 5MB for optimal social media performance
