import { forwardRef, type SelectHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

const formSelectVariants = cva(
  "w-full px-4 py-3 rounded-xl border transition-all outline-none",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 text-gray-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof formSelectVariants> {}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, variant, ...props }, ref) => (
    <select
      ref={ref}
      className={[formSelectVariants({ variant }), className].filter(Boolean).join(' ')}
      {...props}
    />
  )
)
FormSelect.displayName = "FormSelect"