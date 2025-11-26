import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const formFieldClasses = "w-full px-4 py-3 rounded-xl border outline-none bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"

export interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  as?: "input" | "textarea"
  rows?: number
}

export const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  ({ className, label, as = "input", rows = 3, ...props }, ref) => (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      {as === "textarea" ? (
        <textarea
          ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          className={cn(formFieldClasses, "resize-none", className)}
          rows={rows}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          ref={ref as React.ForwardedRef<HTMLInputElement>}
          className={cn(formFieldClasses, className)}
          {...props}
        />
      )}
    </div>
  )
)
FormInput.displayName = "FormInput"