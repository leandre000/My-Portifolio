"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import LoadingAnimation from "./loading-animation"
import { useUser } from "@/components/UserContext"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Experience", path: "/experience" },
  { name: "Blog", path: "/blog" }, 
  { name: "Contact", path: "/contact" },
]

// Navigation: Top bar for all pages
// - Shows logo, user info, and dropdown menu
// - User info is dynamic and updates on login/signup/logout
// - Logout button logs out and redirects to login
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useUser()
  const [displayName, setDisplayName] = useState("User")
  const [avatarLetter, setAvatarLetter] = useState("U")
  const [profilePic, setProfilePic] = useState<string | null>(null)

  useEffect(() => {
    console.log('NAV USER DEBUG', user)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (user && user.email) {
      const namePart = user.email.split("@")[0]
      setDisplayName(namePart.charAt(0).toUpperCase() + namePart.slice(1))
      setAvatarLetter(namePart[0]?.toUpperCase() || "U")
      setProfilePic(user.profilePic || null)
    } else {
      setDisplayName("User")
      setAvatarLetter("U")
      setProfilePic(null)
    }
  }, [user])

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
            {user && <ModeToggle />}
          </nav>

          {/* User Info and Actions */}
          <div className="flex items-center gap-3 ml-4 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-black/10 dark:border-white/10 shadow-sm">
            {profilePic ? (
              <Image src={profilePic} alt="Profile" width={36} height={36} className="rounded-full object-cover" />
            ) : (
              <Avatar>
                <AvatarFallback>{avatarLetter}</AvatarFallback>
              </Avatar>
            )}
            <span className="font-semibold text-black dark:text-white text-base">{displayName}</span>
            <button
              onClick={() => {
                logout();
                router.push("/login");
              }}
              className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-600 dark:text-red-300 transition"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            {user && <ModeToggle />}
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
            className="fixed inset-0 z-40 bg-white dark:bg-black pt-24 sm:pt-20"
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
