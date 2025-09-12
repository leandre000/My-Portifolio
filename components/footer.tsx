"use client"

import Link from "next/link"
import { Icon } from "@iconify/react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-gray-900">Leandre</h3>
              <p className="text-sm text-emerald-700 font-medium">Software Engineer</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Specializing in full-stack development and modern web technologies.
            </p>
            <div className="flex items-start gap-2 text-gray-600 text-sm font-medium mt-2">
              <Icon icon="mdi:map-marker" className="h-4 w-4 mt-0.5" />
              <span>Kigali, Rwanda · KN 3 Rd, Kicukiro · +250 788 000 000</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-emerald-700 transition-colors duration-150 text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-emerald-700 transition-colors duration-150 text-sm font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-700 hover:text-emerald-700 transition-colors duration-150 text-sm font-medium">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-700 hover:text-emerald-700 transition-colors duration-150 text-sm font-medium">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-emerald-700 transition-colors duration-150 text-sm font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 text-lg">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:Iamshemaleandre@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition-colors duration-150 text-sm font-medium"
              >
                <Icon icon="mdi:email" className="h-4 w-4" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition-colors duration-150 text-sm font-medium"
              >
                <Icon icon="mdi:github" className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition-colors duration-150 text-sm font-medium"
              >
                <Icon icon="mdi:linkedin" className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/shema_Leandre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition-colors duration-150 text-sm font-medium"
              >
                <Icon icon="mdi:twitter" className="h-4 w-4" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
