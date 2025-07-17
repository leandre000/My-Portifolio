import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MouseTrail } from "@/components/mouse-trail"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] })

// ✅ This must remain in a server component (no "use client")
export const metadata: Metadata = {
  title: "Leandre - Designer & Developer Portfolio",
  description: "Portfolio showcasing Web development, Artificial-Intelligence & Machine-Learning Work.",
  icons: {
    icon: "/placeholder-logo.webp", // Ensure this image is in the public folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Theming & Client UI */}
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

        {/* Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
