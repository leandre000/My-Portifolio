import type { Metadata } from "next"
import "./globals.css"
import ClientProviders from "./ClientProviders"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navigation from "@/components/navigation"

// ✅ This must remain in a server component (no "use client")
export const metadata: Metadata = {
  title: "Leandre - CEO & Founder of Echo | AI/ML Developer & Tech Leader",
  description: "Portfolio of Leandre, CEO & Founder of Echo Tech. Leading innovation in AI/ML, web development, and cybersecurity. Expert in penetration testing and cutting-edge technology solutions.",
  keywords: ["CEO", "Founder", "Echo Tech", "AI/ML", "Web Development", "Cybersecurity", "Penetration Testing", "Tech Leader"],
  authors: [{ name: "Leandre" }],
  creator: "Leandre",
  openGraph: {
    title: "Leandre - CEO & Founder of Echo Tech",
    description: "Leading innovation in AI/ML, web development, and cybersecurity",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandre - CEO & Founder of Echo Tech",
    description: "Leading innovation in AI/ML, web development, and cybersecurity",
  },
  icons: {
    icon: '/echo-logo.png',
    shortcut: '/echo-logo.png',
    apple: '/echo-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ClientProviders>
          <Navigation />
          {children}
        </ClientProviders>
        {/* Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
