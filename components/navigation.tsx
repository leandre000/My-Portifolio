"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import LoadingAnimation from "./loading-animation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Experience", path: "/experience" },
  { name: "Blog", path: "/blog" }, 
  { name: "Contact", path: "/contact" },
]


export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (path: string) => {
    setIsLoading(true)
    router.push(path)
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <LoadingAnimation duration={1000} />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-black to-black/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
             Leandre
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors hover:text-black/70 dark:hover:text-white/70 ${
                  pathname === item.path ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"
                }`}
              >
                {item.name}
              </button>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black pt-20"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-lg font-medium transition-colors hover:text-black/70 dark:hover:text-white/70 ${
                    pathname === item.path ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
