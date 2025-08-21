"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-emerald-500/20">
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
                <h3 className="text-xl font-bold text-white dark:text-white">Leandre</h3>
                <p className="text-sm text-emerald-300 dark:text-emerald-300 font-medium">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed max-w-md">
              Specializing in full-stack development and modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300 text-sm font-medium">
              <MapPin className="h-4 w-4" />
              <span>Rwanda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white dark:text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-sm font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-sm font-medium">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-sm font-medium">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-sm font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-white dark:text-white mb-4 text-lg">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:Iamshemaleandre@gmail.com"
                className="flex items-center gap-2 text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/shema_Leandre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 dark:text-gray-200 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
              >
                <Twitter className="h-4 w-4" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
