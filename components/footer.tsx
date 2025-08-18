"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-emerald-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/myportifolio.jpg" 
                alt="Leandre Portfolio Logo" 
                className="w-16 h-16 rounded-full"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-logo.png"
                }}
              />
              <div>
                <h3 className="text-2xl font-bold text-white dark:text-white">Leandre</h3>
                <p className="text-lg text-emerald-300 dark:text-emerald-300 font-medium">Software Engineer</p>
              </div>
            </div>
            <p className="text-lg text-gray-200 dark:text-gray-200 mb-6 max-w-lg leading-relaxed font-medium">
              Passionate about creating innovative digital solutions that bridge technology and human needs. 
              Specializing in AI/ML, full-stack development, and cutting-edge technologies.
            </p>
            <div className="flex items-center gap-3 text-gray-300 dark:text-gray-300 text-lg font-medium">
              <MapPin className="h-5 w-5" />
              <span>Rwanda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white dark:text-white mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-lg font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-lg font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-lg font-medium">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-lg font-medium">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/tech-stack" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-lg font-medium">
                  Tech Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-white dark:text-white mb-6 text-xl">Connect</h4>
            <div className="space-y-4">
              <a
                href="mailto:Iamshemaleandre@gmail.com"
                className="flex items-center gap-3 text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-lg font-medium"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-lg font-medium"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-lg font-medium"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/shema_Leandre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-lg font-medium"
              >
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-300 text-lg font-medium">
            Built with Next.js, React, and Tailwind CSS
          </p>
          <p className="text-gray-300 dark:text-gray-300 text-lg font-medium mt-2">
            © 2025 Leandre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
