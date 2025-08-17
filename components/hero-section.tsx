"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Github } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-neutral-900 dark:to-black">
      
      {/* Enhanced Background Glow with Multiple Layers */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-indigo-300/20 dark:bg-indigo-500/20 rounded-full blur-[80px] md:blur-[100px] top-1/4 left-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-300/15 dark:bg-blue-500/15 rounded-full blur-[60px] md:blur-[80px] top-3/4 right-1/4 animate-pulse delay-1000" />
        <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-[40px] md:blur-[60px] bottom-1/4 left-1/4 animate-pulse delay-2000" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-8 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <motion.img
                src="/myportifolio.png"
                alt="Leandre - CEO & Founder of Echo"
                className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png"
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-black dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                Leandre
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CEO & Founder of Echo
            </h2>
            <h3 className="text-lg md:text-xl text-black/70 dark:text-white/70 mb-6">
              Software Developer & AI Engineer
            </h3>
            <p className="text-base md:text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              With over 2+ years of experience in AI/ML, full-stack development, and cybersecurity, I bring a unique perspective to both technical challenges and business strategy. Echo specializes in AI-powered applications, secure web solutions, and innovative digital experiences.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center gap-4 mb-8"
          >
            <motion.a
              href="https://linkedin.com/in/leandre"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://github.com/leandre000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:Iamshemaleandre@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap w-full"
          >
            {/* View Projects */}
            <motion.div 
              className="flex-1 min-w-[180px]" 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/projects">
                <Button className="w-full rounded-full px-6 py-4 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Resume */}
            <motion.div 
              className="flex-1 min-w-[180px]" 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/resume">
                <Button className="w-full rounded-full px-6 py-4 text-base font-medium bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                  View Resume
                </Button>
              </Link>
            </motion.div>

            {/* Contact Me */}
            <motion.div 
              className="flex-1 min-w-[180px]" 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full rounded-full px-6 py-4 text-base font-medium border-2 border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/40 dark:hover:border-white/40 transition-all duration-300"
                  size="lg"
                >
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-blue-600/50 dark:border-blue-400/50 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
