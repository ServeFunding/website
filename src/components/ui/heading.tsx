import { forwardRef, type HTMLAttributes, type ElementType } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { COLORS } from "@/lib/colors"

const headingVariants = cva(
  "font-serif tracking-tight",
  {
    variants: {
      size: {
        h1: "text-5xl md:text-6xl lg:text-7xl leading-tight font-light",
        h2: "text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-12",
        h3: "text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-12",
        h4: "text-xl md:text-2xl font-bold",
      },
      color: {
        default: "text-olive-900",
        gold: "text-gold-500",
        white: "text-white",
        dark: "text-gray-900",
        gradient: "",
      }
    },
    defaultVariants: {
      size: "h2",
      color: "default",
    },
  }
)

interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, "color">, VariantProps<typeof headingVariants> {}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size = "h2", color, style, ...props }, ref) => {
    const Comp = size as ElementType
    let headingStyle = style || {}

    // Apply gradient by default for h1 and h2
    if ((size === 'h1' || size === 'h2') && color !== 'white') {
      headingStyle = {
        ...headingStyle,
        background: `linear-gradient(to right, ${COLORS.primary.darkGreen}, ${COLORS.primary.lightGreen})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }
      color = 'gradient'
    }

    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ size, color, className }))}
        style={headingStyle}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"