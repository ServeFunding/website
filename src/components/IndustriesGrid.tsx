'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Factory, Truck, Shield, Users, UtensilsCrossed, Megaphone, ShoppingCart, Package, Briefcase, Sparkles, Lock, Wifi, HardHat, Navigation, Heart, Building2 } from 'lucide-react'
import { COLORS } from '@/lib/colors'

const industries = [
  { name: "Manufacturing", desc: "See how we've helped growing businesses secure working capital to thrive.", icon: Factory },
  { name: "Wholesale & Distribution", desc: "See how we've helped growing businesses secure working capital to thrive.", icon: Truck },
  { name: "Construction", desc: "See how we've helped growing businesses secure working capital to thrive.", icon: HardHat },
  { name: "Healthcare", desc: "See how we've helped growing businesses secure working capital to thrive.", icon: Heart },
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
  { name: "Transportation & Logistics", desc: "Cover fuel and maintenance costs. Bridge cash flow gaps between deliveries and payments.", icon: Navigation },
  { name: "Professional Services", desc: "Cover operational costs and payroll before client invoicing cycles complete. Manage cash flow across projects.", icon: Building2 }
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
            className="cursor-pointer relative z-10 w-full h-full flex justify-center items-start"
          >
            <motion.div
              animate={{
                scale: isHovered ? 1.3 : 1,
                y: isHovered ? -30 : 0,
                zIndex: isHovered ? 10 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="w-fit"
              style={{
                width: '220px',
                height: '140px',
              }}
            >
              <div
                style={{
                  backgroundColor: COLORS.background,
                  borderColor: COLORS.primary,
                }}
                className="relative z-10 border-2 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <Icon size={32} className="mb-2" style={{ color: COLORS.primary }} strokeWidth={1.5} />
                <p className="font-medium text-gray-700 line-clamp-2 text-center text-sm">
                  {industry.name}
                </p>

                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-gray-600 leading-snug pt-2">
                    {industry.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
