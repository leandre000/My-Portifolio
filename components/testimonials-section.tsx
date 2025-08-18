"use client"

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Recognition & Impact
          </h2>
          <p className="text-black/70 dark:text-white/70 max-w-3xl mx-auto text-lg">
            Industry recognition and client testimonials that validate my expertise in software development and AI/ML.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.label}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {achievement.number}
              </div>
              <div className="text-lg font-semibold text-black dark:text-white mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-black/60 dark:text-white/60">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => {
              const IconComponent = testimonial.icon
              return (
                <div
                  key={testimonial.id}
                  className="relative p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-3 left-6 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-black/80 dark:text-white/80 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-black/60 dark:text-white/60">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Ready to Work Together?
            </h3>
            <p className="text-black/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how my expertise in software development, AI/ML, and leadership can help drive your next project to success.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
