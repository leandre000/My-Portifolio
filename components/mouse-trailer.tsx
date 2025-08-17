"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function MouseTrailer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      
      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      // Hide trailer after mouse stops moving
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 100)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Main Trailer */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-full h-full bg-white dark:bg-black rounded-full shadow-lg" />
      </motion.div>

      {/* Secondary Trailer */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.3,
          delay: 0.05,
        }}
      >
        <div className="w-full h-full bg-blue-500 rounded-full shadow-md" />
      </motion.div>

      {/* Particle Trail */}
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-30"
          initial={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 1,
            opacity: 0.8,
          }}
          animate={{
            x: mousePosition.x - 4 + (Math.random() - 0.5) * 20,
            y: mousePosition.y - 4 + (Math.random() - 0.5) * 20,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="w-full h-full bg-purple-400 rounded-full" />
        </motion.div>
      )}

      {/* Hover Effects for Interactive Elements */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.8,
          delay: 0.1,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
      </motion.div>
    </>
  )
}
