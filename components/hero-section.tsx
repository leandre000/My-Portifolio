"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Github } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-[80px] md:blur-[100px] top-1/4 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-100/20 dark:bg-indigo-900/20 rounded-full blur-[60px] md:blur-[80px] top-3/4 right-1/4" />
        <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-purple-100/20 dark:bg-purple-900/20 rounded-full blur-[40px] md:blur-[60px] bottom-1/4 left-1/4" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-8 text-center flex flex-col items-center justify-center">
        <div className="w-full">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="relative w-32 h-32 mx-auto">
              <img
                src="/myportifolio.jpg"
                alt="Leandre - Software Engineer"
                className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png"
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-black dark:text-white">Hi, I'm </span>
              <span className="text-blue-600 dark:text-blue-400">
                Leandre
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Software Engineer & AI Developer
            </h2>
            <h3 className="text-lg md:text-xl text-black/70 dark:text-white/70 mb-6">
              Full-Stack Developer & AI Enthusiast
            </h3>
            <p className="text-base md:text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              With over 2+ years of experience in AI/ML and full-stack development. Currently working at LOXOTECH TECH and building innovative digital solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://linkedin.com/in/leandre000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/leandre000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:Iamshemaleandre@gmail.com"
              className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:-translate-y-1">
                Get In Touch
              </Button>
            </Link>
            <Button 
              onClick={() => window.open("https://drive.google.com/file/d/1PWKLOKlNxBXP-WZrkKj3Shya0vuFmYWy/view?usp=drive_link", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              View Resume
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
              <div className="text-sm text-black/60 dark:text-white/60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
              <div className="text-sm text-black/60 dark:text-white/60">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
              <div className="text-sm text-black/60 dark:text-white/60">Success</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
