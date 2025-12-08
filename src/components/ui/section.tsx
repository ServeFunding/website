import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { LAYOUT } from "@/lib/layout"
import { COLORS } from "@/lib/colors"

export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement> & { background?: "white" | "gray" | "olive" | "primary" | "light" }>(
  ({ className, background = "white", ...props }, ref) => {
    const bgColorMap = {
      white: "bg-white",
      gray: "bg-gray-50",
      olive: "bg-white",
      primary: "bg-white",
      light: "bg-white",
    }

    const bgColorStyle = {
      white: {},
      gray: {},
      olive: { backgroundColor: COLORS.primary },
      primary: { backgroundColor: COLORS.primary },
      light: { backgroundColor: COLORS.background },
    }

    return (
      <section
        ref={ref}
        className={cn(
          "pb-12 md:pb-18 relative overflow-hidden",
          bgColorMap[background],
          className
        )}
        style={{ scrollMarginTop: LAYOUT.scrollMarginTop, ...bgColorStyle[background], ...props.style }}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"