'use client'

import { forwardRef, useRef } from "react"
import { motion } from "framer-motion"
import { COLORS, type CardColorOption } from "@/lib/colors"

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const

type CardPadding = keyof typeof paddingClasses

const baseCardClass = "relative z-10 rounded-[2rem] h-full flex flex-col"

// Shadow values mirror Tailwind's shadow-xl / shadow-2xl tinted with gray-400.
// Defined here (not as utility classes) so framer-motion can animate between them.
const RESTING_SHADOW =
  "0 20px 25px -5px rgb(156 163 175 / 0.5), 0 8px 10px -6px rgb(156 163 175 / 0.5)"
const HOVER_SHADOW =
  "0 30px 50px -12px rgb(156 163 175 / 0.55), 0 18px 30px -10px rgb(156 163 175 / 0.4)"

export const cardColorStyles = {
  white: {
    backgroundColor: COLORS.white,
  },
  background: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.tertiary,
  },
} as const

interface CardProps {
  color?: CardColorOption
  hoverColor?: string
  noHover?: boolean
  padding?: CardPadding
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  [key: string]: any
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, color, style, hoverColor, noHover, padding = 'lg', ...props }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const mergedRef = ref || cardRef

    const cardStyle = {
      ...cardColorStyles.white,
      ...(color && color in cardColorStyles
        ? cardColorStyles[color as keyof typeof cardColorStyles]
        : {}),
      ...(style || {}),
    }

    const bgColor = (cardStyle.backgroundColor as string) || COLORS.white

    return (
      <motion.div
        ref={mergedRef}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        }}
        whileHover={
          noHover
            ? undefined
            : {
                y: -8,
                boxShadow: HOVER_SHADOW,
                transition: { duration: 0.25, ease: "easeOut" },
              }
        }
        className={[baseCardClass, paddingClasses[padding as CardPadding], className].filter(Boolean).join(' ')}
        style={{
          boxShadow: RESTING_SHADOW,
          ...cardStyle,
          ...(hoverColor ? { transition: 'background-color 0.3s' } : {}),
        }}
        onMouseEnter={() => {
          if (hoverColor && typeof mergedRef === 'object' && mergedRef?.current) {
            mergedRef.current.style.backgroundColor = hoverColor
          }
        }}
        onMouseLeave={() => {
          if (hoverColor && typeof mergedRef === 'object' && mergedRef?.current) {
            mergedRef.current.style.backgroundColor = bgColor
          }
        }}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"
