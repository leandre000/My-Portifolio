import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MouseTrail } from "@/components/mouse-trail"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// Load Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] })

// Define metadata for the site
export const metadata: Metadata = {
  title: "Dieudonne - Designer & Developer Portfolio",
  description: "Portfolio showcasing 3D design, web development, programming, and creative work by Dieudonne.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <MouseTrail />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
