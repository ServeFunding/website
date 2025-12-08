'use client'

import { forwardRef, type HTMLAttributes, useRef } from "react"
import { COLORS, type CardColorOption } from "@/lib/colors"

const baseCardClass = "rounded-[2rem] p-8 transition-all duration-300 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2"

// Card color styles
export const cardColorStyles = {
  white: {
    backgroundColor: COLORS.white,
  },
  background: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.tertiary,
  }
} as const

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  color?: CardColorOption
  hoverColor?: string
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, color, style, hoverColor, ...props }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const mergedRef = ref || cardRef

    const cardStyle = {
      ...cardColorStyles.white,
      ...(color && cardColorStyles[color] ? cardColorStyles[color] : {}),
      ...(style || {}),
    }

    const bgColor = (cardStyle.backgroundColor as string) || COLORS.white

    return (
      <div
        ref={mergedRef}
        className={[baseCardClass, className].filter(Boolean).join(' ')}
        style={{
          ...cardStyle,
          transition: hoverColor ? 'background-color 0.3s' : undefined,
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