"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bytehire-bg border-t border-emerald-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/myportifolio.jpg" 
                alt="Leandre Portfolio Logo" 
                className="w-12 h-12 rounded-full"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-logo.png"
                }}
              />
              <div>
                <h3 className="text-xl font-bold text-white">Leandre</h3>
                <p className="text-emerald-300 text-sm">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Passionate about creating innovative digital solutions that bridge technology and human needs. 
              Specializing in AI/ML, full-stack development, and cutting-edge technologies.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Rwanda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/tech-stack" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Tech Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:Iamshemaleandre@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Twitter className="h-4 w-4" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Built with Next.js, React, and Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2025 Leandre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
