"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

interface LoadingAnimationProps {
  duration?: number // Duration in milliseconds before hiding the loader
}

// Component that displays a loading animation for a specified duration
export default function LoadingAnimation({ duration = 2000 }: LoadingAnimationProps) {
  // Track loading state
  const [isLoading, setIsLoading] = useState(true)
  // Get current theme
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    // Hide loader after specified duration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-white dark:bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Spinner with theme-aware colors */}
            <motion.div
              className={`w-16 h-16 rounded-full border-4 border-t-transparent ${
                isDark ? "border-white/30" : "border-black/30"
              }`}
              animate={{ rotate: 360 }} // Continuous rotation
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
            />
            {/* Center initial */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-lg font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className={`text-sm ${isDark ? "text-white/70" : "text-black/70"}`}>D</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
