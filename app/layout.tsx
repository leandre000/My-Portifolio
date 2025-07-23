import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientProviders from "./ClientProviders"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] })

// ✅ This must remain in a server component (no "use client")
export const metadata: Metadata = {
  title: "Leandre - Designer & Developer Portfolio",
  description: "Portfolio showcasing Web development, Artificial-Intelligence & Machine-Learning Work.",
  icons: {
    icon: "/placeholder-logo.webp", // Use this as favicon
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
        <ClientProviders>
          {children}
        </ClientProviders>
        {/* Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
