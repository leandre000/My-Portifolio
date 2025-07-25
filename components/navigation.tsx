"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md py-5 md:py-6 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and home link */}
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <span className="bg-gradient-to-r from-black to-black/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
            Leandre
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
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
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-black dark:bg-white" />
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-black/10 dark:border-white/10 shadow-lg">
          <nav className="flex flex-col items-center py-6 space-y-6">
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
        </div>
      )}
    </header>
  );
}
