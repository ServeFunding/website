import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2
}

export const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, columns = 1, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "space-y-6",
        columns === 2 && "grid grid-cols-1 md:grid-cols-2 gap-6",
        className
      )}
      {...props}
    />
  )
)
FormGroup.displayName = "FormGroup"