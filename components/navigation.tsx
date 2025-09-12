"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm" : "bg-white/80 backdrop-blur"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <img src="/myportfolio.jpg" alt="Leandre Portfolio Logo" className="w-10 h-10 rounded-full" onError={(e) => { e.currentTarget.src = "/placeholder-logo.png" }} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-900">Leandre</h1>
              <p className="text-sm text-emerald-700 font-medium">Software Engineer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-150 font-medium text-lg ${
                    isActive ? "text-emerald-700" : "text-gray-700 hover:text-emerald-700"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white rounded-lg mt-2 border border-gray-200">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-md transition-colors duration-150 text-lg font-medium ${
                      isActive ? "text-emerald-700 bg-emerald-50" : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full text-lg font-semibold py-3">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
