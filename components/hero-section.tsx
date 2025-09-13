

"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[100px] top-1/4 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-500/10 rounded-full blur-[60px] md:blur-[80px] top-3/4 right-1/4" />
        <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-teal-500/10 rounded-full blur-[40px] md:blur-[60px] bottom-1/4 left-1/4" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 text-center flex flex-col items-center justify-center">
        <div className="w-full">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="relative w-52 h-52 md:w-64 md:h-64 mx-auto">
              <Image
                src="/me.png"
                alt="Leandre - Software Engineer"
                fill
                className="object-cover rounded-full border-4 border-emerald-500/20 shadow-2xl"
                priority
                quality={95}
                sizes="(max-width: 768px) 208px, 256px"
              />
              <div className="absolute inset-0 rounded-full"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              Hi, I'm <span className="text-emerald-700 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Leandre</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-emerald-700">
              Software Developer
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Building innovative digital solutions with passion and precision.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="https://linkedin.com/in/leandre000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Icon icon="mdi:linkedin" className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/leandre000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Icon icon="mdi:github" className="h-6 w-6" />
            </a>
            <a
              href="mailto:Iamshemaleandre@gmail.com"
              className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Icon icon="mdi:email" className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/projects">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View My Work
                <Icon icon="mdi:arrow-right" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              onClick={() => window.open("https://drive.google.com/file/d/1892EVxhOVnGOAufcVB6M9tzhUqiseaEj/view?usp=drive_link", "_blank")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Icon icon="mdi:download" className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700 group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Projects</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700 group-hover:scale-110 transition-transform duration-300">3+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Years</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Success</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
