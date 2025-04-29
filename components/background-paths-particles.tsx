"use client"

import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function BackgroundPathsParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsMobile(window.innerWidth < 768) // Set mobile breakpoint
    }

    updateCanvasSize()

    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      scatteredColor: string
      colorTransition: number
      colorDirection: number
      life: number
    }[] = []

    let textImageData: ImageData | null = null

    function createTextImage() {
      if (!ctx || !canvas) return 0

      ctx.fillStyle = isDark ? "white" : "black"
      ctx.save()

      const fontSize = isMobile ? 48 : 72
      ctx.font = `bold ${fontSize}px sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Draw the text
      const text = "Dieudonne"
      ctx.fillText(text, canvas.width / 2, canvas.height / 2)

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.restore()
      return fontSize
    }

    function createParticle(scale: number) {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          // Generate colors with blue tints
          const baseColor = isDark ? "white" : "black"
          const scatteredColor = isDark ? "#e3f2fd" : "#333333"

          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1 + 0.5,
            color: baseColor,
            scatteredColor: scatteredColor,
            colorTransition: Math.random(), // 0-1 value for color transition
            colorDirection: Math.random() > 0.5 ? 1 : -1, // Direction of color transition
            life: Math.random() * 100 + 50,
          }
        }
      }

      return null
    }

    function createInitialParticles(scale: number) {
      const baseParticleCount = 12000 // High density
      const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)))
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale)
        if (particle) particles.push(particle)
      }
    }

    let animationFrameId: number

    function animate(scale: number) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = 240

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Update color transition
        p.colorTransition += 0.005 * p.colorDirection
        if (p.colorTransition > 1 || p.colorTransition < 0) {
          p.colorDirection *= -1
        }

        // Calculate color based on transition
        let fillColor
        if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 60
          const moveY = Math.sin(angle) * force * 60
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY

          // Use scattered color with transition
          if (isDark) {
            // Transition between white and light blue
            const r = 255 - Math.floor(28 * p.colorTransition) // 255 -> 227
            const g = 255 - Math.floor(13 * p.colorTransition) // 255 -> 242
            const b = 255 // Always 255
            fillColor = `rgb(${r}, ${g}, ${b})`
          } else {
            // Transition between black and dark blue
            const r = Math.floor(0 + 33 * p.colorTransition) // 0 -> 33
            const g = Math.floor(0 + 33 * p.colorTransition) // 0 -> 33
            const b = Math.floor(0 + 51 * p.colorTransition) // 0 -> 51
            fillColor = `rgb(${r}, ${g}, ${b})`
          }
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1

          // Use base color with subtle transition
          if (isDark) {
            // Transition between white and very light blue
            const r = 255 - Math.floor(15 * p.colorTransition) // 255 -> 240
            const g = 255 - Math.floor(7 * p.colorTransition) // 255 -> 248
            const b = 255 // Always 255
            fillColor = `rgb(${r}, ${g}, ${b})`
          } else {
            // Transition between black and very dark blue
            const r = Math.floor(0 + 15 * p.colorTransition) // 0 -> 15
            const g = Math.floor(0 + 15 * p.colorTransition) // 0 -> 15
            const b = Math.floor(0 + 25 * p.colorTransition) // 0 -> 25
            fillColor = `rgb(${r}, ${g}, ${b})`
          }
        }

        ctx.fillStyle = fillColor
        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(scale)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      const baseParticleCount = 12000
      const targetParticleCount = Math.floor(
        baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)),
      )
      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale)
        if (newParticle) particles.push(newParticle)
      }

      animationFrameId = requestAnimationFrame(() => animate(scale))
    }

    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    const handleResize = () => {
      updateCanvasSize()
      const newScale = createTextImage()
      particles = []
      createInitialParticles(newScale)
    }

    const handleMove = (x: number, y: number) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark, isMobile])

  return (
    <div className="relative w-full h-dvh flex flex-col items-center justify-center bg-transparent">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 touch-none z-10"
        aria-label="Interactive particle effect with 'Dieudonne' text"
      />
    </div>
  )
}
