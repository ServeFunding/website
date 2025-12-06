'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Heading, Text } from '@/components/ui'

interface HeroSlide {
  heading: string
  desc: string
  image: string
  width: number
  height: number
}

interface HeroCarouselProps {
  slides: HeroSlide[]
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [heroIndex, setHeroIndex] = React.useState(0)
  const [isUserInteracting, setIsUserInteracting] = React.useState(false)
  const [pageLoaded, setPageLoaded] = React.useState(false)

  // Wait for page to load before enabling carousel auto-rotation
  React.useEffect(() => {
    if (document.readyState === 'complete') {
      setPageLoaded(true)
    } else {
      window.addEventListener('load', () => setPageLoaded(true))
      return () => window.removeEventListener('load', () => setPageLoaded(true))
    }
  }, [])

  React.useEffect(() => {
    if (isUserInteracting || !pageLoaded) return

    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isUserInteracting, pageLoaded, slides.length])

  const handlePrev = () => {
    setHeroIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setIsUserInteracting(true)
    setTimeout(() => setIsUserInteracting(false), 8000)
  }

  const handleNext = () => {
    setHeroIndex((prev) => (prev + 1) % slides.length)
    setIsUserInteracting(true)
    setTimeout(() => setIsUserInteracting(false), 8000)
  }

  const slide = slides[heroIndex]

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-center lg:justify-start h-full px-3 lg:px-8 pb-6">
      {/* Text Column */}
      <div className="relative z-20">
        <Heading key={`heading-${heroIndex}`} size="h2">
          {slide.heading}
        </Heading>
        <Text size="lg" className="mb-6 lg:mb-8 text-base sm:text-lg">
          {slide.desc}
        </Text>
        <div className="flex gap-3 sm:gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-olive-900 hover:text-white transition-all duration-300 flex-shrink-0"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-olive-900 transition-all duration-300 flex-shrink-0"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Image Column - 2:1 on mobile, original aspect ratio on desktop */}
      <div
        className="relative w-full mx-4 sm:mx-6 lg:mx-0 rounded-2xl overflow-hidden shadow-lg lg:hover:shadow-xl transition-shadow duration-500 flex items-center justify-center aspect-[2/1] lg:aspect-auto"
        style={{
          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)`
        }}>
        {/* Render all images in HTML - browser discovers them all early */}
        {slides.map((s, index) => (
          <Image
            key={s.image}
            src={s.image}
            alt={s.heading}
            width={s.width}
            height={s.height}
            className={`absolute inset-0 w-full h-full object-cover lg:object-contain transition-opacity duration-500 ease-out ${
              index === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 50vw"
            quality={85}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
      </div>
    </div>
  )
}
