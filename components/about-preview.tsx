"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Target, Zap } from "lucide-react"

const highlights = [
  {
    icon: Building2,
    title: "CEO & Founder",
    description: "Leading Echo, a cutting-edge tech company focused on AI, ML, and innovative web solutions.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Strategic Vision",
    description: "Driving technological innovation and business growth through strategic planning and execution.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Building and managing high-performing teams to deliver exceptional results and client satisfaction.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description: "Hands-on expertise in AI/ML, full-stack development, and cutting-edge technologies.",
    color: "from-orange-500 to-red-500"
  }
]

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-neutral-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-black/70 dark:text-white/70 max-w-3xl mx-auto text-lg">
                As the CEO and Founder of Echo, I combine entrepreneurial vision with 2 years of software development and AI experience to deliver innovative solutions.
              </p>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  About Me
                </h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  With over 2+ years of software development and AI experience, I've dedicated myself to creating innovative solutions that bridge the gap between technology and human needs. As the founder of Echo, formed this month, I'm passionate about building AI-powered applications that solve real-world problems.
                </p>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  My journey in tech has been driven by curiosity and a desire to make technology more accessible and impactful. From full-stack development to AI integration, I believe in the power of combining multiple disciplines to create something truly extraordinary.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, idx) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-black/10 dark:border-white/10 backdrop-blur-sm"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <highlight.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white text-sm">
                        {highlight.title}
                      </h4>
                      <p className="text-black/60 dark:text-white/60 text-xs leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/about">
                  <Button className="rounded-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More About Me
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Image */}
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <motion.img
                    src="/myportifolio.png"
                    alt="Leandre - CEO & Founder of Echo"
                    className="w-full h-full object-cover rounded-2xl border-4 border-white/20 shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.png"
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                </div>

                {/* Echo Tech Branding */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <img 
                      src="/echo-logo.png" 
                      alt="Echo Logo" 
                      className="w-12 h-12"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-logo.png"
                      }}
                    />
                    <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Echo Tech
                    </h4>
                  </div>
                  <p className="text-black/60 dark:text-white/60 text-sm">
                    AI-Powered Solutions & Innovation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((highlight, idx) => {
              const IconComponent = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center p-6 bg-white dark:bg-black/20 rounded-xl border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white shadow-lg`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/about">
                <Button 
                  className="rounded-full px-8 py-4 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More About Echo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
