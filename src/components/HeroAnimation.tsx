'use client'

import React, { useRef, useEffect, useState, memo } from 'react'
import { motion } from 'framer-motion'
import { COLORS as BRAND_COLORS } from '@/lib/colors'

interface Leaf {
  id: number
  x: number
  y: number
  angle: number
  size: number
  opacity: number
  delay: number
  duration: number
  spawnTime?: number
  fadeOut?: boolean
}

// Leaf shape SVG component - Rounded organic leaf
const LeafShape = ({
  size = 100,
  angle = 0,
  opacity = 0.6,
  color = BRAND_COLORS.primary.lightGreen
}: {
  size?: number
  angle?: number
  opacity?: number
  color?: string
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    style={{
      transform: `rotate(${angle}deg)`,
      opacity,
      filter: `drop-shadow(0 0 8px ${color}60) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))`,
    }}
  >
    {/* Pointed teardrop leaf shape */}
    <path
      d="M 50 5 Q 70 20 72 45 Q 70 70 50 90 Q 30 70 28 45 Q 30 20 50 5 Z"
      fill={color}
      opacity="1"
    />
  </svg>
)

// Animated floating leaf that follows mouse
const FloatingLeaf = memo(({
  leaf,
  mouseX,
  mouseY,
  containerRect,
}: {
  leaf: Leaf
  mouseX: number
  mouseY: number
  containerRect: DOMRect | null
}) => {
  // Calculate distance from mouse to leaf
  const leafCenterX = containerRect ? leaf.x + containerRect.left : leaf.x
  const leafCenterY = containerRect ? leaf.y + containerRect.top : leaf.y

  const distX = mouseX - leafCenterX
  const distY = mouseY - leafCenterY
  const distance = Math.sqrt(distX * distX + distY * distY)

  // Subtle repulsion effect - gentle push away from mouse
  const repulsionRadius = 150
  const repulsionStrength = 15

  let offsetX = 0
  let offsetY = 0

  if (distance < repulsionRadius && distance > 0) {
    const angle = Math.atan2(distY, distX)
    const force = (repulsionRadius - distance) / repulsionRadius
    offsetX = -Math.cos(angle) * force * repulsionStrength
    offsetY = -Math.sin(angle) * force * repulsionStrength
  }

  // Calculate fade out opacity for spawned leaves
  let displayOpacity = leaf.opacity
  if (leaf.fadeOut && leaf.spawnTime) {
    const elapsed = (Date.now() - leaf.spawnTime) / 1000
    const fadeoutDuration = 2
    if (elapsed > fadeoutDuration) {
      displayOpacity = 0
    } else {
      displayOpacity = leaf.opacity * Math.max(0, 1 - elapsed / fadeoutDuration)
    }
  }

  return (
    <motion.div
      key={leaf.id}
      initial={{
        x: leaf.x,
        y: leaf.y,
        opacity: 0,
        rotate: leaf.angle,
      }}
      animate={{
        x: leaf.x + offsetX,
        y: leaf.y + offsetY,
        opacity: leaf.fadeOut ? displayOpacity : leaf.opacity,
        rotate: leaf.angle,
      }}
      transition={{
        x: { type: 'tween', duration: 0.3, ease: 'easeOut' },
        y: { type: 'tween', duration: 0.3, ease: 'easeOut' },
        opacity: { duration: 0.3 },
        rotate: { duration: 0 },
      }}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        willChange: 'transform, opacity',
      }}
    >
      <LeafShape
        size={leaf.size}
        angle={leaf.angle}
        opacity={1}
        color={BRAND_COLORS.primary.lightGreen}
      />
    </motion.div>
  )
}, (prevProps, nextProps) => {
  // Custom comparison - only re-render if leaf content or container changes
  return prevProps.leaf === nextProps.leaf &&
         prevProps.containerRect === nextProps.containerRect &&
         Math.abs(prevProps.mouseX - nextProps.mouseX) < 5 &&
         Math.abs(prevProps.mouseY - nextProps.mouseY) < 5
})

export const HeroAnimation = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [leaves, setLeaves] = useState<Leaf[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null)
  const nextLeafIdRef = useRef(0)
  const lastSpawnTimeRef = useRef(0)
  const [isHydrated, setIsHydrated] = useState(false)

  // Generate initial background leaves (fewer on mobile) - defer until after hydration
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return

    const generateInitialLeaves = () => {
      // Reduce leaf count on mobile: 4-6 leaves, desktop: 8-12 leaves
      const isMobile = window.innerWidth < 768
      const leafCount = isMobile
        ? Math.floor(Math.random() * 3) + 4  // 4-6 leaves on mobile
        : Math.floor(Math.random() * 5) + 8  // 8-12 leaves on desktop
      const newLeaves: Leaf[] = Array.from({ length: leafCount }, (_, i) => ({
        id: i,
        x: Math.random() * (containerRef.current?.clientWidth || 600),
        y: Math.random() * (containerRef.current?.clientHeight || 400),
        angle: Math.random() * 360,
        size: Math.random() * 50 + 25, // 25-75px
        opacity: Math.random() * 0.4 + 0.25, // 0.25-0.65
        delay: i * 0.01,
        duration: Math.random() * 2 + 3, // 3-5 seconds
        fadeOut: false,
      }))
      setLeaves(newLeaves)
      nextLeafIdRef.current = leafCount

      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect())
      }
    }

    // Defer leaf generation to after paint
    const timer = requestAnimationFrame(() => {
      generateInitialLeaves()
    })
    return () => cancelAnimationFrame(timer)
  }, [isHydrated])

  // Track mouse movement and spawn leaves (desktop only)
  useEffect(() => {
    // Skip mouse interaction on mobile/touch devices
    if (window.innerWidth < 768) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      // Spawn leaves at cursor position every 0.1-0.5 seconds
      const now = Date.now()
      const spawnInterval = Math.random() * 400 + 100 // 100-500ms

      if (now - lastSpawnTimeRef.current > spawnInterval) {
        lastSpawnTimeRef.current = now

        setLeaves((prev) => {
          if (!containerRef.current) return prev

          const containerRect = containerRef.current.getBoundingClientRect()
          const relativeX = e.clientX - containerRect.left
          const relativeY = e.clientY - containerRect.top

          // Only spawn if within container
          if (relativeX < 0 || relativeX > containerRect.width ||
              relativeY < 0 || relativeY > containerRect.height) {
            return prev
          }

          const newLeaf: Leaf = {
            id: nextLeafIdRef.current++,
            x: relativeX,
            y: relativeY,
            angle: Math.random() * 360,
            size: Math.random() * 40 + 20, // 20-60px
            opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7
            delay: 0,
            duration: 2,
            spawnTime: now,
            fadeOut: true,
          }

          return [...prev, newLeaf]
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Update container rect on resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect())
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Clean up old faded-out leaves periodically
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now()
      setLeaves((prev) =>
        prev.filter((leaf) => {
          // Keep non-fadeOut leaves always
          if (!leaf.fadeOut) return true
          // Remove fadeOut leaves after 2.5 seconds (2s fade + buffer)
          if (leaf.spawnTime && now - leaf.spawnTime > 2500) {
            return false
          }
          return true
        })
      )
    }, 1000)

    return () => clearInterval(cleanupInterval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{
        overflow: 'hidden',
      }}
    >
      {/* Background animated leaves */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        style={{ willChange: 'opacity' }}
      >
        {leaves.map((leaf) => (
          <FloatingLeaf
            key={leaf.id}
            leaf={leaf}
            mouseX={mousePos.x}
            mouseY={mousePos.y}
            containerRect={containerRect}
          />
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative h-full z-10">
        {children}
      </div>
    </div>
  )
}
