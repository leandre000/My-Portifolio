"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

interface LoadingAnimationProps {
  duration?: number
}

export default function LoadingAnimation({ duration = 2000 }: LoadingAnimationProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)
    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
            isDark ? "bg-black" : "bg-white"
          }`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Logo Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: [0.95, 1, 0.95] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-6"
          >
            <Image
              src="/placeholder-logo.webp"
              alt="Leandre Logo"
              width={100}
              height={100}
              className="rounded-xl object-contain"
              priority
            />
          </motion.div>

          {/* Spinner */}
          <motion.div
            className="w-12 h-12 rounded-full border-4 border-t-transparent"
            style={{
              borderColor: isDark ? "#ffffff40" : "#00000025",
            }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 1,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
