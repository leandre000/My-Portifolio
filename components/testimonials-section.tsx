"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const testimonials = [
  {
    id: 1,
    name: "Rukundo Prince",
    role: "Fullstack using MERN",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Leandre's MERN stack expertise brought our platform to life. His ability to architect scalable backend solutions and create intuitive frontends made our product robust and user-friendly.",
  },
  {
    id: 2,
    name: "Asimwe Landry",
    role: "Web Development using Nextjs",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Leandre’s contributions to our Next.js web project were outstanding. His integration of modern features and clean, maintainable code played a crucial role in meeting our tight deadlines.",
  },
  {
    id: 3,
    name: "Ndizeye Blaise",
    role: "UI & UX",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Leandre merges technical precision with design excellence. The UI/UX he delivered not only looked stunning but also aligned perfectly with user behavior and accessibility standards.",
  },
  {
    id: 4,
    name: "Dushimire Aine",
    role: "Mobile development",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Leandre’s mobile development skills helped us launch a seamless app experience. His attention to detail and user-centric approach made our app a success.",
  },
  {
    id: 5,
    name: "Mahinga Rodin",
    role: "AI integration and ML",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Leandre’s expertise in AI and machine learning integration transformed our product. His innovative solutions and deep technical knowledge set our project apart.",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => nextTestimonial(), 5000)
    return () => clearInterval(interval)
  }, [autoplay, activeIndex])

  return (
    <section className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Hear what clients and collaborators have to say about working with me.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `-${activeIndex * 100}%` }}
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
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-black/60 dark:text-white/60 text-sm">{testimonial.role}</p>
                      </div>
                      <Quote className="ml-auto text-black/20 dark:text-white/20" size={32} />
                    </div>
                    <p className="text-black/80 dark:text-white/80 italic">{testimonial.content}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
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

          {/* Arrows */}
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
