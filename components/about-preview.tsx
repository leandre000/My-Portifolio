"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Target, Zap } from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    icon: Building2,
    title: "Software Developer",
    description: "Building web applications and learning new technologies at Echo Solutions Ltd.",
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
          <div className="text-center mb-12 animate-fade-in-up">
            <div>
              <p className="text-lg md:text-xl text-gray-200 dark:text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed">
                A software developer passionate about building web applications and learning new technologies.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-200 dark:text-gray-200 leading-relaxed font-medium">
                  I'm a developer who loves building web applications and learning new technologies. I work at Echo Solutions Ltd where I get to work on interesting projects and grow my skills.
                </p>
                <p className="text-base md:text-lg text-gray-200 dark:text-gray-200 leading-relaxed font-medium">
                  I believe in writing clean, maintainable code and always trying to learn something new. Whether it's frontend, backend, or new frameworks, I'm excited to explore and build with them.
                </p>
                <p className="text-base md:text-lg text-gray-200 dark:text-gray-200 leading-relaxed font-medium">
                  My journey in tech has been driven by curiosity and a desire to make technology more accessible and impactful. I enjoy working with teams to create solutions that help people.
                </p>
                <p className="text-base md:text-lg text-gray-200 dark:text-gray-200 leading-relaxed font-medium">
                  I'm passionate about continuous learning and improving my development skills. Every project is an opportunity to grow and become a better developer.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, idx) => (
                  <div
                    key={highlight.title}
                    className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <highlight.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white dark:text-white text-sm md:text-base mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Image */}
                <div className="relative w-64 h-64 mx-auto mb-6 group">
                  <Image
                    src="/me.jpg"
                    alt="Leandre - Software Developer"
                    fill
                    className="object-cover rounded-2xl border-4 border-emerald-500/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-105"
                    quality={95}
                    sizes="(max-width: 768px) 256px, 256px"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
                </div>

                {/* Echo Tech Branding */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Image 
                      src="/echo.png" 
                      alt="Echo Logo" 
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                    <h4 className="text-xl md:text-2xl font-bold text-emerald-400 dark:text-emerald-400">
                      Echo Solutions Ltd
                    </h4>
                  </div>
                  <p className="text-gray-300 dark:text-gray-300 text-sm md:text-base font-medium">
                    Web Development & Digital Solutions
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
