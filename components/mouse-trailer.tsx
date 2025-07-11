"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "next-themes"

export function MouseTrailer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 16) // center for 32px element
      y.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  if (!mounted) return null // Prevent hydration mismatch

  const isDark = resolvedTheme === "dark"

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.div
        className="w-8 h-8 rounded-full blur-xl mix-blend-difference"
        style={{
          backgroundColor: isDark ? "rgba(191, 219, 254, 0.15)" : "rgba(30, 58, 138, 0.2)",
        }}
        animate={{
          scale: [0.9, 1.2, 0.9],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
