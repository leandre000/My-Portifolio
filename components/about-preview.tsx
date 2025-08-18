"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Target, Zap } from "lucide-react"

const highlights = [
  {
    icon: Building2,
    title: "CEO & Founder",
    description: "Leading Echo, a cutting-edge tech company focused on AI, ML, and innovative web solutions.",
    color: "from-emerald-500 to-teal-500"
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
                As the CEO and Founder of Echo, I combine entrepreneurial vision with 2+ years of software development and AI experience to deliver innovative solutions.
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
                  With over 2+ years of software development and AI experience, I've dedicated myself to creating innovative solutions that bridge the gap between technology and human needs. As the founder of Echo, I'm passionate about building AI-powered applications that solve real-world problems.
                </p>
                <p className="text-base text-gray-200 dark:text-gray-200 leading-relaxed font-medium">
                  My journey in tech has been driven by curiosity and a desire to make technology more accessible and impactful. From full-stack development to AI integration, I believe in the power of combining multiple disciplines to create something truly extraordinary.
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
