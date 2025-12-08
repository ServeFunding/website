import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { COLORS } from "@/lib/colors"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:-translate-y-0.5 hover:opacity-90",
  {
    variants: {
      variant: {
        default: "text-white shadow-lg",
        gold: "text-white shadow-lg",
        outline: "border-2 hover:text-white",
        ghost: "hover:bg-gray-100 text-gray-700",
        link: "underline-offset-4 hover:underline",
        white: "hover:bg-gray-100 shadow-lg",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-4",
        lg: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size, style, ...props }, ref) => {
    const baseStyle: React.CSSProperties = style || {}

    // Apply variant-specific styles using COLORS
    let buttonStyle: React.CSSProperties = baseStyle

    switch (variant) {
      case "default":
        buttonStyle = {
          ...baseStyle,
          backgroundColor: COLORS.primary,
          boxShadow: `0 10px 15px -3px ${COLORS.primary}33`
        }
        break
      case "gold":
        buttonStyle = {
          ...baseStyle,
          backgroundColor: COLORS.secondary,
          color: COLORS.dark,
          boxShadow: `0 10px 15px -3px ${COLORS.secondary}33`
        }
        break
      case "outline":
        buttonStyle = {
          ...baseStyle,
          borderColor: COLORS.primary,
          color: COLORS.primary
        }
        break
      case "ghost":
        buttonStyle = {
          ...baseStyle,
          color: COLORS.primary
        }
        break
      case "link":
        buttonStyle = {
          ...baseStyle,
          color: COLORS.primary
        }
        break
      case "white":
        buttonStyle = {
          ...baseStyle,
          backgroundColor: "white",
          color: COLORS.primary
        }
        break
      default:
        buttonStyle = {
          ...baseStyle,
          backgroundColor: COLORS.primary,
          boxShadow: `0 10px 15px -3px ${COLORS.primary}33`
        }
        break
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        style={buttonStyle}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"