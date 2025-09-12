"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Blaise Ndizeye",
    role: "UI/UX Designer",
    company: "Creative Studio",
    content: "Leandre's attention to detail and user experience understanding is exceptional. He consistently delivers intuitive and beautiful interfaces that users love.",
    rating: 5,
    image: "/placeholder.png"
  },
  {
    name: "Rukundo Prince",
    role: "Fullstack Developer",
    company: "Tech Solutions",
    content: "Working with Leandre on fullstack projects has been amazing. His technical skills and problem-solving abilities make complex development tasks seem effortless.",
    rating: 5,
    image: "/placeholder.png"
  },
  {
    name: "Mahinga Rodin",
    role: "AI/ML Engineer",
    company: "AI Research Lab",
    content: "Leandre's expertise in AI and machine learning is outstanding. He has a deep understanding of complex algorithms and always finds innovative solutions.",
    rating: 5,
    image: "/placeholder.png"
  },
  {
    name: "Landry Chretien",
    role: "Frontend Developer",
    company: "Web Agency",
    content: "Leandre's frontend development skills are top-notch. He creates responsive, performant, and visually stunning user interfaces that exceed expectations.",
    rating: 5,
    image: "/placeholder.png"
  },
  {
    name: "Iranzi Dianah",
    role: "Project Manager",
    company: "Digital Solutions",
    content: "Leandre is an excellent team player and communicator. His project management skills and ability to deliver on time make him a valuable asset to any team.",
    rating: 5,
    image: "/placeholder.png"
  },
  {
    name: "Ihirwe Patrick",
    role: "Senior UI/UX Designer",
    company: "Design Studio",
    content: "Leandre's collaboration skills and technical expertise are outstanding. His ability to translate complex design requirements into functional, beautiful applications is remarkable. Working with him has been a pleasure.",
    rating: 5,
    image: "/placeholder.png"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400 dark:text-emerald-400">
              What People Say
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
              Testimonials from colleagues and clients about my work and collaboration
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Quote Icon */}
                <div className="flex justify-end mb-4">
                  <Quote className="h-8 w-8 text-emerald-400/50" />
                </div>

                {/* Content */}
                <p className="text-gray-200 dark:text-gray-200 mb-8 leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white dark:text-white text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-emerald-300 dark:text-emerald-300 text-sm font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-400 dark:text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white dark:text-white mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-gray-300 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss your project and see how I can help bring your ideas to life with innovative technology solutions.
              </p>
              <a
                href="/contact"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
