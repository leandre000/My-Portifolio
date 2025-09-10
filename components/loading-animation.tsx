"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingAnimationProps {
  duration?: number
}

export default function LoadingAnimation({ duration = 1500 }: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Initial */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600/20">
            <Image 
              src="/me.jpg" 
              alt="Shema Leandre - Software Developer" 
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
              quality={95}
            />
          </div>
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Shema Leandre
          </h1>
          <div className="flex items-center justify-center mt-2">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
              L
            </div>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-in-out"
            style={{ width: "100%" }}
          />
        </div>

        {/* Loading Text */}
        <div>
          <p className="text-lg text-black/70 dark:text-white/70 mb-2">
            Loading Portfolio
          </p>
          <p className="text-sm text-black/50 dark:text-white/50">
            Preparing your digital experience...
          </p>
        </div>
      </div>
    </div>
  )
}
