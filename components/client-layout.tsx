"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"
import Navigation from "@/components/navigation"
import { MouseTrailer } from "@/components/mouse-trailer"
import Footer from "@/components/footer"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navigation />
      <MouseTrailer />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
} 