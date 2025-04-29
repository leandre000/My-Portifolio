"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import FloatingPaths from "./floating-paths"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Background floating paths animation */}
      {/* <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div> */}

      {/* Main content with animations */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main heading with gradient text effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter bg-gradient-to-r from-black to-black/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
          >
            Dieudonne
          </motion.h1>

          {/* Subtitle with staggered animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl font-medium mb-6 text-black/80 dark:text-white/80"
          >
            3D Designer, Web Developer & Programmer
          </motion.h2>

          {/* Description paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-2xl mx-auto mb-10"
          >
            Creating immersive digital experiences, interactive web applications, and stunning 3D visuals using tools like React, Next.js, Blender, Node.js, and more.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/projects">
              <Button
                className="rounded-full px-8 py-6 text-base font-medium bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                size="lg"
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
              >
                View Projects
                <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-medium border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5"
                size="lg"
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
              >
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-black/30 dark:border-white/30 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-1 h-2 bg-black/50 dark:bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
