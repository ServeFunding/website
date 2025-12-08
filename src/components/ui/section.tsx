import { forwardRef, type HTMLAttributes } from "react"
import { LAYOUT } from "@/lib/layout"
import { COLORS, type SectionBackgroundOption } from "@/lib/colors"

export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement> & { background?: SectionBackgroundOption }>(
  ({ className, background = "white", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={["pb-12 md:pb-18 relative overflow-hidden", className].filter(Boolean).join(' ')}
        style={{ scrollMarginTop: LAYOUT.scrollMarginTop, backgroundColor: COLORS[background as keyof typeof COLORS], ...props.style }}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"