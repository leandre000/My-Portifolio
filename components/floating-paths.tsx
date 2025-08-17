"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Path {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

export default function FloatingPaths() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pathsRef = useRef<Path[]>([])
  const animationRef = useRef<number>()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Generate random paths
    const generatePaths = () => {
      const paths: Path[] = []
      const pathCount = Math.min(50, Math.floor(window.innerWidth / 20))

      for (let i = 0; i < pathCount; i++) {
        paths.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          duration: Math.random() * 20000 + 10000,
          delay: Math.random() * 5000
        })
      }
      pathsRef.current = paths
    }

    generatePaths()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pathsRef.current.forEach((path) => {
        const time = Date.now() + path.delay
        const progress = (time % path.duration) / path.duration

        // Create smooth floating motion
        const x = path.x + Math.sin(progress * Math.PI * 4) * 50
        const y = path.y + Math.cos(progress * Math.PI * 3) * 30

        // Draw path with gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, path.size * 2)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${path.opacity})`)
        gradient.addColorStop(0.5, `rgba(147, 51, 234, ${path.opacity * 0.5})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, path.size, 0, Math.PI * 2)
        ctx.fill()

        // Add connecting lines between nearby paths
        pathsRef.current.forEach((otherPath) => {
          if (otherPath.id === path.id) return

          const distance = Math.sqrt(
            Math.pow(x - otherPath.x, 2) + Math.pow(y - otherPath.y, 2)
          )

          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.1
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enhanced Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Canvas for Dynamic Paths */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
    </div>
  )
}
