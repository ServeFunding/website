'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// --- Brand Colors ---
export const BRAND_COLORS = {
  primary: {
    darkGreen: "#65773D",     // Dark olive green from logo
    lightGreen: "#D3CE75",    // Light yellow-green from logo
  },
  neutral: {
    white: "#ffffff",
    gray: "#f5f5f5",
    "gray-dark": "#333333",
  },
}

// --- Spacing & Layout Constants ---
export const LAYOUT = {
  // Scroll margin for anchor links to account for fixed header
  // This ensures sections with IDs scroll into view with proper offset
  scrollMarginTop: "6rem", // 96px - accounts for fixed header height
}

// --- Typography ---

const headingVariants = cva(
  "font-serif font-bold tracking-tight",
  {
    variants: {
      size: {
        h1: "text-4xl md:text-5xl lg:text-6xl leading-tight",
        h2: "text-3xl md:text-4xl lg:text-5xl leading-tight",
        h3: "text-2xl md:text-3xl",
        h4: "text-xl md:text-2xl",
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

interface HeadingProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">, VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div"
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, color, as = "h2", style, ...props }, ref) => {
    const Comp = as as React.ElementType
    let headingStyle = style || {}

    // Apply gradient style if color is 'gradient'
    if (color === 'gradient') {
      headingStyle = {
        ...headingStyle,
        background: `linear-gradient(to right, ${BRAND_COLORS.primary.darkGreen}, ${BRAND_COLORS.primary.lightGreen})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }
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

interface TextProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">, VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div"
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, as = "p", ...props }, ref) => {
    const Comp = as as React.ElementType
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

// --- Buttons ---

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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

// --- Layout ---

export const Section = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & { background?: "white" | "gray" | "olive" }>(
  ({ className, background = "white", ...props }, ref) => {
    const bgColors = {
      white: "bg-white",
      gray: "bg-gray-50",
      olive: "bg-[#65773D]",
    }

    return (
      <section
        ref={ref}
        className={cn(
          "py-20 md:py-28 relative overflow-hidden",
          bgColors[background],
          className
        )}
        style={{ scrollMarginTop: LAYOUT.scrollMarginTop, ...props.style }}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

// --- Cards ---

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

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>>(
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

// --- Animation Wrappers ---

export const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    animate="show"
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// --- Form Components ---

const formLabelVariants = cva(
  "block text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "text-olive-900",
        gold: "text-gold-500",
        white: "text-white",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof formLabelVariants> {}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, variant, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(formLabelVariants({ variant }), className)}
      {...props}
    />
  )
)
FormLabel.displayName = "FormLabel"

const formInputVariants = cva(
  "w-full px-4 py-3 rounded-xl border outline-none",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:ring-1 focus:ring-gold-500",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof formInputVariants> {}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, variant, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(formInputVariants({ variant }), className)}
      {...props}
    />
  )
)
FormInput.displayName = "FormInput"

const formTextareaVariants = cva(
  "w-full px-4 py-3 rounded-xl border outline-none resize-none",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:ring-1 focus:ring-gold-500",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof formTextareaVariants> {}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, variant, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(formTextareaVariants({ variant }), className)}
      {...props}
    />
  )
)
FormTextarea.displayName = "FormTextarea"

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
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof formSelectVariants> {}

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, variant, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(formSelectVariants({ variant }), className)}
      {...props}
    />
  )
)
FormSelect.displayName = "FormSelect"

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("space-y-2", className)}
      {...props}
    />
  )
)
FormField.displayName = "FormField"

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2
}

export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
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
