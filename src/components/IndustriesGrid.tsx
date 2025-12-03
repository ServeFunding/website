'use client'

import { useState, useCallback } from 'react'
import { Factory, Truck, Shield, Users, UtensilsCrossed, Megaphone, ShoppingCart, Package, Briefcase, Sparkles, Lock, Wifi, HardHat, Navigation, Heart } from 'lucide-react'

const industries = [
  { name: "Manufacturing", desc: "Purchase raw materials upfront. Bridge cash gaps during long production cycles.", icon: Factory },
  { name: "Wholesale & Distribution", desc: "Buy inventory in bulk to meet demand. Smooth cash flow between buying and selling cycles.", icon: Truck },
  { name: "Government Contractors", desc: "Cover expenses while awaiting government payments. Maintain operations during long billing cycles.", icon: Shield },
  { name: "Staffing Firms", desc: "Pay staff before clients pay invoices. Keep talent onboard without cash flow issues.", icon: Users },
  { name: "Food & Beverage", desc: "Purchase perishables upfront. Navigate tight margins and fluctuating demand.", icon: UtensilsCrossed },
  { name: "Advertising & Media", desc: "Fund campaigns before client payments arrive. Keep creative projects on track.", icon: Megaphone },
  { name: "E-Commerce & Retail", desc: "Stock up on inventory ahead of sales. Manage cash flow during seasonal peaks.", icon: ShoppingCart },
  { name: "Consumer Products", desc: "Cover production and marketing costs upfront. Keep products flowing to market.", icon: Package },
  { name: "Consulting & IT Services", desc: "Pay staff before clients pay. Maintain operations during long project cycles.", icon: Briefcase },
  { name: "Cleaning & Janitorial", desc: "Cover payroll and supplies upfront. Keep services running smoothly.", icon: Sparkles },
  { name: "Security Guard Services", desc: "Pay guards before clients pay. Ensure continuous protection services.", icon: Lock },
  { name: "Telecommunications & IoT", desc: "Invest in equipment and infrastructure upfront. Keep up with fast-paced tech demands.", icon: Wifi },
  { name: "Construction", desc: "Purchase materials and equipment upfront. Manage cash flow during long project timelines.", icon: HardHat },
  { name: "Transportation & Logistics", desc: "Cover fuel and maintenance costs. Bridge cash flow gaps between deliveries and payments.", icon: Navigation },
  { name: "Healthcare Services", desc: "Fund operations and payroll ahead of reimbursements. Invest in equipment and supplies.", icon: Heart }
]

export function IndustriesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const handleMouseEnter = useCallback((index: number) => {
    // Disable hover animations on mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    if (!isMobile && !isTouchDevice && touchedIndex === null) {
      setHoveredIndex(index)
    }
  }, [isTouchDevice, touchedIndex])

  const handleMouseLeave = useCallback(() => {
    if (!isTouchDevice && touchedIndex === null) {
      setHoveredIndex(null)
    }
  }, [isTouchDevice, touchedIndex])

  const handleTouchStart = useCallback(() => {
    setIsTouchDevice(true)
  }, [])

  const handleClick = useCallback((index: number) => {
    if (isTouchDevice) {
      if (touchedIndex === index) {
        setTouchedIndex(null)
        setHoveredIndex(null)
      } else {
        setTouchedIndex(index)
        setHoveredIndex(index)
      }
    }
  }, [isTouchDevice, touchedIndex])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center relative" onTouchStart={handleTouchStart}>
      {industries.map((industry, index) => {
        const isHovered = hoveredIndex === index
        const Icon = industry.icon

        return (
          <div
            key={industry.name}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick(index)}
            onTouchStart={handleTouchStart}
            className="cursor-pointer relative w-full h-full flex justify-center items-start"
          >
            <div
              className={`flex justify-center transition-transform duration-300 ${isHovered ? 'scale-130 -translate-y-8' : ''}`}
              style={{
                width: '220px',
                zIndex: isHovered ? 10 : 0,
              }}
            >
              <div className="relative border-2 border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm bg-white w-full">
                <Icon size={32} className="text-gray-600 mb-2" strokeWidth={1.5} />
                <p className="font-medium text-gray-700 line-clamp-2 text-center text-sm">
                  {industry.name}
                </p>

                <div className={`overflow-hidden transition-all duration-200 ${isHovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs text-gray-600 leading-snug pt-2">
                    {industry.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
