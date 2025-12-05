import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { COLORS } from "@/lib/colors"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-[#758d5b] text-white hover:bg-[#6a7d4a] shadow-lg",
        light: "bg-[#c4d45a] text-[#2d3c1a] hover:bg-[#d4e46a] shadow-lg shadow-[#c4d45a]/20",
        gold: "bg-[#D3CE75] text-[#2d3c1a] hover:bg-[#c4bf63] shadow-lg shadow-[#D3CE75]/20",
        outline: "border-2 border-[#758d5b] text-[#758d5b] hover:bg-[#758d5b] hover:text-white",
        ghost: "hover:bg-gray-100 text-gray-700 hover:text-[#758d5b]",
        link: "text-[#758d5b] underline-offset-4 hover:underline",
        white: "bg-white text-[#758d5b] hover:bg-gray-100 shadow-lg",
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
  ({ className, variant, size, style, ...props }, ref) => {
    let buttonStyle = style || {}

    // Add shadow color based on variant for better color consistency
    if (variant === "default") {
      buttonStyle = {
        ...buttonStyle,
        boxShadow: `0 10px 15px -3px ${COLORS.primary.darkGreen}33`
      }
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