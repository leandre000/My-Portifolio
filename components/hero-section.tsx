"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-neutral-900 dark:to-black">
      
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-indigo-300/10 dark:bg-indigo-500/10 rounded-full blur-[80px] md:blur-[100px] top-1/4 left-1/2 -translate-x-1/2 animate-pulse" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-8 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-black to-black/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
          >
            Leandre
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl font-medium mb-4 text-black/80 dark:text-white/80"
          >
            AI & Web Developer — Crafting intelligent, human-centered digital experiences.
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Blending code and creativity to build smart, scalable, and story-driven products using AI, ML, and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap w-full"
          >
            {/* View Projects */}
            <motion.div className="flex-1 min-w-[180px]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects">
                <Button className="w-full rounded-full px-6 py-4 text-base font-medium bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90" size="lg">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Contact Me */}
            <motion.div className="flex-1 min-w-[180px]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full rounded-full px-6 py-4 text-base font-medium border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5"
                  size="lg"
                >
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            {/* Resume */}
            <motion.div className="flex-1 min-w-[180px]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/docs/resume.pdf" download>
                <Button className="w-full rounded-full px-6 py-4 text-base font-medium bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90" size="lg">
                  Resume
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-black/30 dark:border-white/30 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-black/50 dark:bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
