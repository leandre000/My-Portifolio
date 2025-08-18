"use client"

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
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                About Me
              </h2>
              <p className="text-black/70 dark:text-white/70 max-w-3xl mx-auto text-lg">
                As the CEO and Founder of Echo, I combine entrepreneurial vision with 2 years of software development and AI experience to deliver innovative solutions.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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
                  <div
                    key={highlight.title}
                    className="flex items-start gap-3 p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-black/10 dark:border-white/10 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
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
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <Link href="/about">
                  <Button className="rounded-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
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
                    className="w-full h-full object-cover rounded-2xl border-4 border-white/20 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.png"
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
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
                    <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      Echo Tech
                    </h4>
                  </div>
                  <p className="text-black/60 dark:text-white/60 text-sm">
                    AI-Powered Solutions & Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((highlight, idx) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={highlight.title}
                  className="text-center p-6 bg-white dark:bg-black/20 rounded-xl border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div>
              <Link href="/about">
                <Button 
                  className="rounded-full px-8 py-4 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More About Echo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
