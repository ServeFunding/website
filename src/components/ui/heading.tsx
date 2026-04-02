import { forwardRef, type HTMLAttributes, type ElementType } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { COLORS, type HeadingColorOption } from "@/lib/colors"

const headingVariants = cva(
  "tracking-tight",
  {
    variants: {
      size: {
        hero: "text-[34px] md:text-[48px] lg:text-[60px] font-bold leading-[1.1] mb-6 md:mb-12",
        h1: "text-[32px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] mb-6 md:mb-12",
        h2: "text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.2] mb-6 mt-8 md:mb-12 md:mt-18",
        h3: "text-[22px] md:text-[26px] lg:text-[30px] font-semibold leading-[1.25] mb-4 md:mb-8",
        h4: "text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.3]",
      },
    },
    defaultVariants: {
      size: "h2",
    },
  }
)

interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, "color">, VariantProps<typeof headingVariants> {
  color?: HeadingColorOption
}


export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size = "h2", color, style, ...props }, ref) => {
    const Comp = (size === 'hero' ? 'h1' : size) as ElementType
    let headingStyle = style || {}
    let finalColor = color

    // Apply gradient by default for hero, h1 and h2, or when explicitly requested
    if ((size === 'hero' || size === 'h1' || size === 'h2') && !color) {
      finalColor = 'gradient'
    }

    if (finalColor === 'gradient') {
      headingStyle = {
        ...headingStyle,
        background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }
    } else if (finalColor && finalColor in COLORS) {
      headingStyle = {
        ...headingStyle,
        color: COLORS[finalColor as keyof typeof COLORS]
      }
    }

    return (
      <Comp
        ref={ref}
        className={[headingVariants({ size }), className].filter(Boolean).join(' ')}
        style={headingStyle}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"