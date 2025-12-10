'use client'

import React, { useRef, useEffect, useState, memo } from 'react'
import { motion } from 'framer-motion'
import { COLORS as BRAND_COLORS } from '@/lib/colors'

type LeafColorOption = 'primary' | 'secondary' | 'highlight' | 'dark' | 'background' | 'white'

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
  color: LeafColorOption
}

// Leaf shape SVG component - Rounded organic leaf
const LeafShape = ({
  size = 100,
  angle = 0,
  opacity = 0.6,
  color = 'primary'
}: {
  size?: number
  angle?: number
  opacity?: number
  color?: LeafColorOption
}) => {
  const colorValue = BRAND_COLORS[color]
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        transform: `rotate(${angle}deg)`,
        opacity,
        filter: `drop-shadow(0 0 8px ${colorValue}60) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))`,
      }}
    >
      {/* Pointed teardrop leaf shape */}
      <path
        d="M 50 5 Q 70 20 72 45 Q 70 70 50 90 Q 30 70 28 45 Q 30 20 50 5 Z"
        fill={colorValue}
        opacity="1"
      />
    </svg>
  )
}

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
        color={leaf.color}
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
  defer = false,
  backgroundColor,
  leafColorOptions = ['primary', 'secondary', 'highlight', 'dark', 'background'],
}: {
  children?: React.ReactNode
  defer?: boolean
  backgroundColor?: LeafColorOption
  leafColorOptions?: LeafColorOption[]
}) => {
  // Filter out the background color to avoid leaves matching the background
  const allowedColors = backgroundColor
    ? leafColorOptions.filter(color => color !== backgroundColor)
    : leafColorOptions
  const containerRef = useRef<HTMLDivElement>(null)
  const [leaves, setLeaves] = useState<Leaf[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null)
  const nextLeafIdRef = useRef(0)
  const lastSpawnTimeRef = useRef(0)
  const [isHydrated, setIsHydrated] = useState(false)

  // Generate initial background leaves (fewer on mobile) - defer until after hydration
  useEffect(() => {
    if (defer) {
      // If defer is true, wait for idle callback to initialize leaves
      if ('requestIdleCallback' in window) {
        const id = requestIdleCallback(() => setIsHydrated(true))
        return () => cancelIdleCallback(id)
      } else {
        // Fallback for browsers without requestIdleCallback
        const timer = setTimeout(() => setIsHydrated(true), 1000)
        return () => clearTimeout(timer)
      }
    } else {
      setIsHydrated(true)
    }
  }, [defer])

  useEffect(() => {
    if (!isHydrated) return

    const generateInitialLeaves = () => {
      if (!containerRef.current) return

      // Get current dimensions - wait for container to have actual size
      const rect = containerRef.current.getBoundingClientRect()
      const width = rect.width || containerRef.current.clientWidth || 600
      const height = rect.height || containerRef.current.clientHeight || 400

      // Only generate leaves if we have meaningful dimensions
      if (height < 10) {
        // Container hasn't rendered yet, try again
        setTimeout(generateInitialLeaves, 100)
        return
      }

      // Scale leaf count based on container height with constant multiplier
      const isMobile = window.innerWidth < 768
      const leafMultiplier = isMobile ? 0.005 : 0.008  // More leaves per pixel on desktop
      const scaledLeafCount = Math.max(4, Math.floor(height * leafMultiplier + Math.random() * 3))
      const leafCount = scaledLeafCount
      const maxLeafSize = 75 // Maximum leaf size
      const horizontalBuffer = 20 // Only buffer horizontally on mobile
      const newLeaves: Leaf[] = Array.from({ length: leafCount }, (_, i) => ({
        id: i,
        x: Math.random() * (width - maxLeafSize - horizontalBuffer) + horizontalBuffer / 2,
        y: Math.random() * height,
        angle: Math.random() * 360,
        size: Math.random() * 50 + 25, // 25-75px
        opacity: Math.random() * 0.4 + 0.25, // 0.25-0.65
        delay: i * 0.01,
        duration: Math.random() * 2 + 3, // 3-5 seconds
        fadeOut: false,
        color: allowedColors[Math.floor(Math.random() * allowedColors.length)],
      }))
      setLeaves(newLeaves)
      nextLeafIdRef.current = leafCount
      setContainerRect(rect)
    }

    // Wait a bit for layout to settle before generating leaves
    const timer = setTimeout(() => {
      generateInitialLeaves()
    }, 300)
    return () => clearTimeout(timer)
  }, [isHydrated])

  // Track mouse movement and spawn leaves (desktop only)
  useEffect(() => {
    // Skip mouse interaction on mobile/touch devices
    if (window.innerWidth < 768) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      // Spawn leaves at cursor position every 0.03-0.15 seconds
      const now = Date.now()
      const spawnInterval = Math.random() * 200 + 100 // 100-300ms

      if (now - lastSpawnTimeRef.current > spawnInterval) {
        lastSpawnTimeRef.current = now

        setLeaves((prev) => {
          if (!containerRef.current) return prev

          const containerRect = containerRef.current.getBoundingClientRect()
          const relativeX = e.clientX - containerRect.left
          const relativeY = e.clientY - containerRect.top
          const maxLeafSize = 60 // Max size for spawned leaves
          const isMobile = window.innerWidth < 768
          const horizontalBuffer = isMobile ? 20 : 0

          // Only spawn if within container bounds (horizontal buffer on mobile only)
          if (relativeX < horizontalBuffer / 2 || relativeX > containerRect.width - maxLeafSize - horizontalBuffer / 2 ||
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
            color: allowedColors[Math.floor(Math.random() * allowedColors.length)],
          }

          return [...prev, newLeaf]
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Update container rect on resize and scroll
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect())
      }
    }

    // Use ResizeObserver to detect when container size changes (better than just window resize)
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect())
      }
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
    }
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
    >
      {/* Main content - lower z-index */}
      <div className="relative h-full">
        {children}
      </div>

      {/* Background animated leaves - on top but non-interactive */}
      {isHydrated && (
        <div
          className="absolute inset-0 pointer-events-none z-5"
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
        </div>
      )}
    </div>
  )
}
