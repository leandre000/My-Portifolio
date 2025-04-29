"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Creative Director, VisualStudio",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Dieudonne's attention to detail and technical skill in 3D modeling is exceptional. The assets created for our project exceeded our expectations and helped us deliver a truly immersive experience.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Game Developer, Nexus Games",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Working with Dieudonne was a pleasure. The character models delivered were not only visually stunning but also optimized perfectly for our game engine. I highly recommend their services.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Art Director, DesignWorks",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Dieudonne brings a unique artistic vision to 3D design. Their work on our architectural visualization project transformed our concept into a photorealistic masterpiece that impressed our clients.",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Product Manager, TechVision",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The product visualizations Dieudonne created for our marketing campaign were instrumental in our successful product launch. Their ability to capture the essence of our brand was remarkable.",
  },
]

export default function TestimonialsSection() {
  // Track which testimonial is currently active
  const [activeIndex, setActiveIndex] = useState(0)
  // Control autoplay functionality
  const [autoplay, setAutoplay] = useState(true)
  // Get current theme
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Navigation functions
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [autoplay, activeIndex])

  return (
    <section className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Hear what clients and collaborators have to say about working with me
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)} // Pause autoplay on hover
            onMouseLeave={() => setAutoplay(true)} // Resume autoplay when not hovering
          >
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `-${activeIndex * 100}%` }} // Slide to show active testimonial
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`rounded-2xl p-8 ${
                      isDark ? "bg-white/5" : "bg-black/5"
                    } border border-black/10 dark:border-white/10`}
                  >
                    <div className="flex items-center mb-6">
                      {/* Avatar */}
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Name and role */}
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-black/60 dark:text-white/60 text-sm">{testimonial.role}</p>
                      </div>
                      {/* Quote icon */}
                      <Quote className="ml-auto text-black/20 dark:text-white/20" size={32} />
                    </div>
                    {/* Testimonial content */}
                    <p className="text-black/80 dark:text-white/80 italic">{testimonial.content}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-black dark:bg-white"
                    : "bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full w-10 h-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10 opacity-70 hover:opacity-100 transition-opacity"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full w-10 h-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10 opacity-70 hover:opacity-100 transition-opacity"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
