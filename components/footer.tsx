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
              {/* Email */}
              <a
                href="mailto:Iamshemaleandre@gmail.com"
                className="group flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors duration-150 text-sm font-medium"
                aria-label="Email"
              >
                <Icon icon="mdi:email" className="h-4 w-4" />
                <span>Email</span>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-150 text-sm font-medium"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              {/* TheCN */}
              <a
                href="https://www.thecn.com/il314?event=eyJ0eXBlIjoic2hvd192aXNpdG9yX2xpc3QiLCJwYXJhbXMiOnsidG1zIjoxNzU3NTQ4ODAwfX0%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors duration-150 text-sm font-medium"
                aria-label="TheCN"
              >
                <Icon icon="mdi:earth" className="h-4 w-4" />
                <span>TheCN</span>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/shema_Leandre"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-150 text-sm font-medium"
                aria-label="X"
              >
                <Icon icon="mdi:twitter" className="h-4 w-4" />
                <span>X (Twitter)</span>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/_fliicky_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors duration-150 text-sm font-medium"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              {/* LinkedIn last */}
              <a
                href="https://linkedin.com/in/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
