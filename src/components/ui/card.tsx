import { forwardRef, type HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-[2rem] p-8 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2",
        highlight: "bg-gold-500 shadow-xl shadow-gold-500/20 hover:-translate-y-2",
        flat: "bg-gray-50 border border-gray-100",
        transparent: "bg-transparent border border-white/20",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"