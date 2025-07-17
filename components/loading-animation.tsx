"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

interface LoadingAnimationProps {
  duration?: number
}

export default function LoadingAnimation({ duration = 2000 }: LoadingAnimationProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { resolvedTheme } = useTheme()

  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme])

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
          key="loading-skeleton"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Skeleton className="w-24 h-24 rounded-xl mb-6" />
          <Skeleton className="w-40 h-6 mb-2" />
          <Skeleton className="w-32 h-4" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
