import { forwardRef, type HTMLAttributes } from "react"
import { LAYOUT } from "@/lib/layout"
import { COLORS, type SectionBackgroundOption } from "@/lib/colors"
import { HeroAnimation } from "@/components/HeroAnimation"

export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement> & { background?: SectionBackgroundOption }>(
  ({ className, background = "white", children, ...props }, ref) => {
    const sectionElement = (
      <section
        ref={ref}
        className={["pt-12 md:pt-18 pb-12 md:pb-18 relative overflow-hidden w-full", className].filter(Boolean).join(' ')}
        style={{ scrollMarginTop: LAYOUT.scrollMarginTop, backgroundColor: COLORS[background as keyof typeof COLORS], ...props.style }}
        {...props}
      >
        {children}
      </section>
    )

    // Map section background to a leaf color that will be excluded
    const bgToLeafColor: Record<SectionBackgroundOption, 'primary' | 'secondary' | 'highlight' | 'dark' | 'background' | undefined> = {
      'white': undefined, // white is not a leaf color option, so all colors will show
      'gray': undefined, // gray is not a leaf color option, so all colors will show
      'primary': 'primary',
      'background': 'background',
    }

    return (
      <HeroAnimation defer={true} backgroundColor={bgToLeafColor[background]}>
        {sectionElement}
      </HeroAnimation>
    )
  }
)
Section.displayName = "Section"