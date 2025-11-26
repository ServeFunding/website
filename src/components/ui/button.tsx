import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-[#5a6c40] text-white hover:bg-[#4a5c30] shadow-lg shadow-[#5a6c40]/20",
        light: "bg-[#c4d45a] text-[#5a6c40] hover:bg-[#d4e46a] shadow-lg shadow-[#c4d45a]/20",
        gold: "bg-[#D3CE75] text-[#333333] hover:bg-[#c4bf63] shadow-lg shadow-[#D3CE75]/20",
        outline: "border-2 border-[#5a6c40] text-[#5a6c40] hover:bg-[#5a6c40] hover:text-white",
        ghost: "hover:bg-gray-100 text-gray-700 hover:text-[#5a6c40]",
        link: "text-[#5a6c40] underline-offset-4 hover:underline",
        white: "bg-white text-[#5a6c40] hover:bg-gray-100 shadow-lg",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"