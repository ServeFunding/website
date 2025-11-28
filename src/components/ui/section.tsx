import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { LAYOUT } from "@/lib/layout"
import { COLORS } from "@/lib/colors"

export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement> & { background?: "white" | "gray" | "olive" }>(
  ({ className, background = "white", ...props }, ref) => {
    const bgColors = {
      white: "bg-white",
      gray: "bg-gray-50",
      olive: "bg-[#758d5b]",
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