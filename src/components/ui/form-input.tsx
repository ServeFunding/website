import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react"
import { COLORS } from "@/lib/colors"

const formFieldClasses = "w-full px-4 py-3 rounded-xl border outline-none text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-1"

export interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  as?: "input" | "textarea"
  rows?: number
}

export const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  ({ className, label, as = "input", rows = 3, ...props }, ref) => {
    const inputId = props.id || props.name
    const inputStyle = {
      backgroundColor: "#f3f4f6",
      borderColor: "#d1d5db",
      color: COLORS.dark,
    }
    const focusStyle = {
      borderColor: COLORS.secondary,
    }
    return (
      <div className="flex flex-col gap-2 mb-8">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        {as === "textarea" ? (
          <textarea
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            id={inputId}
            className={[formFieldClasses, "resize-none", className].filter(Boolean).join(' ')}
            rows={rows}
            style={inputStyle}
            onFocus={(e) => {
              Object.assign(e.currentTarget.style, focusStyle)
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#d1d5db"
            }}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            id={inputId}
            className={[formFieldClasses, className].filter(Boolean).join(' ')}
            style={inputStyle}
            onFocus={(e) => {
              Object.assign(e.currentTarget.style, focusStyle)
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#d1d5db"
            }}
            {...props}
          />
        )}
      </div>
    )
  }
)
FormInput.displayName = "FormInput"