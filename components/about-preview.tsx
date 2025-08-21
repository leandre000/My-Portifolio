"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Target, Zap } from "lucide-react"

const highlights = [
  {
    icon: Building2,
    title: "Software Developer",
    description: "Building web applications and learning new technologies at Echo Tech.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Target,
    title: "Learning & Growth",
    description: "Passionate about continuous learning and improving development skills.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working with teams to build and deliver quality software solutions.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Web Development",
    description: "Full-stack development with modern technologies like React and Node.js.",
    color: "from-orange-500 to-red-500"
  }
]

export default function AboutPreview() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400 dark:text-emerald-400 drop-shadow-lg">
                About Me
              </h2>
              <p className="text-lg text-gray-200 dark:text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed">
                A young software developer passionate about building web applications and learning new technologies.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white dark:text-white">
                  About Me
                </h3>
                <p className="text-base text-gray-200 dark:text-gray-200 leading-relaxed font-medium">
                  I'm a young developer who loves building web applications and learning new technologies. I work at Echo Tech where I get to work on interesting projects and grow my skills.
                </p>
                <p className="text-base text-gray-200 dark:text-gray-200 leading-relaxed font-medium">
                  I believe in writing clean, maintainable code and always trying to learn something new. Whether it's frontend, backend, or new frameworks, I'm excited to explore and build with them.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, idx) => (
                  <div
                    key={highlight.title}
                    className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <highlight.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white dark:text-white text-sm mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 dark:text-gray-300 text-xs leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <Link href="/about">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Image */}
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <img
                    src="/myportifolio.jpg"
                    alt="Leandre - CEO & Founder of Echo"
                    className="w-full h-full object-cover rounded-2xl border-4 border-emerald-500/20 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.png"
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
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
                    <h4 className="text-xl font-bold text-emerald-400 dark:text-emerald-400">
                      Echo Tech
                    </h4>
                  </div>
                  <p className="text-gray-300 dark:text-gray-300 text-sm font-medium">
                    AI-Powered Solutions & Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
