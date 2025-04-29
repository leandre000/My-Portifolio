"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// Component that renders animated floating paths as a background element
export default function FloatingPaths({ position }: { position: number }) {
  // Get theme from context
  const { resolvedTheme } = useTheme()
  // Track component mounting to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Only apply theme after component is mounted
  const isDark = mounted && resolvedTheme === "dark"

  // Generate an array of path data with varying properties
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    // Complex path data that creates flowing curves
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${
      470 - i * 6
    } ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    // Increasing width for each path
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className={`w-full h-full ${isDark ? "text-white" : "text-slate-950"}`} viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03} // Increasing opacity for each path
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3], // Breathing effect
              pathOffset: [0, 1, 0], // Animation along the path
            }}
            transition={{
              duration: 20 + Math.random() * 10, // Random duration for variety
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}
