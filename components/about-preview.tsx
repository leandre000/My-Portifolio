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
                As the CEO and Founder of Echo, I combine entrepreneurial leadership with deep technical expertise to drive innovation and deliver exceptional results.
              </p>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
                Leading Innovation at Echo
              </h3>
              <div className="space-y-4 text-black/70 dark:text-white/70">
                <p>
                  As the CEO and Founder of Echo, I lead a dynamic team focused on creating cutting-edge technology solutions that solve real-world problems. My journey combines entrepreneurial vision with hands-on technical expertise.
                </p>
                <p>
                  With over 5 years of experience in AI/ML, full-stack development, and cybersecurity, I bring a unique perspective to both technical challenges and business strategy. Echo specializes in AI-powered applications, secure web solutions, and innovative digital experiences.
                </p>
                <p>
                  My approach combines strategic thinking with technical execution, ensuring that every project not only meets technical requirements but also drives business value and user satisfaction.
                </p>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                    E
                  </div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-2">Echo Tech</h4>
                  <p className="text-black/60 dark:text-white/60 text-sm">Innovation • Excellence • Impact</p>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute top-1/2 right-8 w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
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
