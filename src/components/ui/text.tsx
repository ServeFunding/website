import { forwardRef, type HTMLAttributes, type ElementType } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
  "font-sans text-gray-600 leading-relaxed",
  {
    variants: {
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg font-light",
        xl: "text-xl font-light",
      },
      weight: {
        default: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
      color: {
        default: "text-gray-600",
        dark: "text-gray-900",
        olive: "text-olive-900",
        gold: "text-gold-500",
        white: "text-white",
        muted: "text-gray-400",
      }
    },
    defaultVariants: {
      size: "default",
      weight: "default",
      color: "default",
    },
  }
)

interface TextProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "color">, VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div"
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, as = "p", ...props }, ref) => {
    const Comp = as as ElementType
    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ size, weight, color, className }))}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"