import Image from 'next/image'
import { Text, Heading } from './ui'

interface LogoGridProps {
  logos: Array<{
    src: string
    alt: string
    width?: number
    height?: number
    href?: string
  }>
  maxHeight?: number // in rem units (16 = 64px, 24 = 96px, etc)
  title?: string
  subtitle?: string
}

export function LogoGrid({ logos, maxHeight = 24, title, subtitle }: LogoGridProps) {
  // Convert rem to pixels (assuming 16px = 1rem)
  const heightInPixels = maxHeight * 4

  return (
    <div>
      {/* Optional Title and Subtitle */}
      {(title || subtitle) && (
        <div className="max-w-2xl mx-auto mb-12 text-center">
          {title && (
            <Heading size="h3">
              {title}
            </Heading>
          )}
          {subtitle && (
            <Text size="lg">
              {subtitle}
            </Text>
          )}
        </div>
      )}

      {/* Logo Grid */}
      <div className="flex flex-wrap justify-center items-center gap-8 py-8">
        {logos.map((logo, index) => {
          const logoWidth = logo.width || 200
          const logoHeight = logo.height || 100
          const aspectRatio = logoWidth / logoHeight
          const scaledWidth = heightInPixels * aspectRatio

          const imageElement = (
            <Image
              src={logo.src}
              alt={logo.alt}
              className="h-full w-auto object-contain"
              width={logoWidth}
              height={logoHeight}
            />
          )

          return (
            <div
              key={index}
              style={{
                height: `${heightInPixels}px`,
                width: `${scaledWidth}px`,
                aspectRatio: `${aspectRatio}`
              }}
              className="flex items-center px-4"
            >
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-full w-full hover:opacity-80 transition-opacity"
                  title={`Visit ${logo.alt}`}
                >
                  {imageElement}
                </a>
              ) : (
                imageElement
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
