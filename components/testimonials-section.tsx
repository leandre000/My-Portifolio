"use client"

import { motion } from "framer-motion"
import { Star, Quote, Building2, Users, Award } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rodin Mwangi",
    role: "Senior Software Engineer at Microsoft",
    content: "Leandre's technical expertise and innovative approach to problem-solving are exceptional. His work on AI/ML projects demonstrates deep understanding of cutting-edge technologies. A true professional who consistently delivers outstanding results.",
    rating: 5,
    company: "Microsoft",
    icon: Building2
  },
  {
    id: 2,
    name: "Pazzo Ochieng",
    role: "CTO at InnovateTech Solutions",
    content: "Working with Leandre has been a game-changer for our company. His strategic vision, technical leadership, and ability to execute complex projects make him an invaluable asset. Echo's success is a testament to his capabilities.",
    rating: 5,
    company: "InnovateTech",
    icon: Users
  },
  {
    id: 3,
    name: "Prince Kamau",
    role: "AI Research Lead at DeepMind",
    content: "Leandre's portfolio showcases exceptional AI/ML expertise and innovative thinking. His approach to complex technical challenges and his leadership in founding Echo demonstrates the kind of forward-thinking that drives technological advancement.",
    rating: 5,
    company: "DeepMind",
    icon: Award
  }
]

const achievements = [
  {
    number: "20+",
    label: "Projects Completed",
    description: "Successfully delivered across various industries"
  },
  {
    number: "2+",
    label: "Years Experience",
    description: "Software development and AI integration"
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    description: "Consistent positive feedback and results"
  },
  {
    number: "1",
    label: "Company Founded",
    description: "Echo Tech - AI-powered solutions"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Recognition & Impact
            </h2>
            <p className="text-black/70 dark:text-white/70 max-w-3xl mx-auto text-lg">
              Industry recognition and client testimonials that validate my expertise in software development and AI/ML.
            </p>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {achievement.number}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-white/60">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => {
              const IconComponent = testimonial.icon
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-3 left-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/80 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-blue-400 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 max-w-4xl mx-auto border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Work Together?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how my expertise in software development, AI/ML, and leadership can help drive your next project to success.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
