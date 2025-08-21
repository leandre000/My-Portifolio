import type { Metadata } from "next"
import "./globals.css"
import ClientProviders from "./ClientProviders"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navigation from "@/components/navigation"
import StructuredData from "./structured-data"

// ✅ This must remain in a server component (no "use client")
export const metadata: Metadata = {
  title: "Leandre - CEO & Founder of Echo | AI/ML Developer & Tech Leader",
  description: "Portfolio of Leandre, CEO & Founder of Echo Tech. Leading innovation in AI/ML, web development, and cybersecurity. Expert in penetration testing and cutting-edge technology solutions.",
  keywords: [
    "CEO", "Founder", "Echo Tech", "AI/ML", "Web Development", "Cybersecurity", 
    "Penetration Testing", "Tech Leader", "Full Stack Developer", "React", "Next.js", 
    "Node.js", "Python", "Machine Learning", "Artificial Intelligence", "Hospital Management", 
    "Inventory Management", "Talent Management", "Portfolio", "Software Engineer", "Tech Entrepreneur"
  ],
  authors: [{ name: "Leandre", url: "https://leandre-portfolio.vercel.app" }],
  creator: "Leandre",
  publisher: "Echo Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://leandre-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Leandre - CEO & Founder of Echo Tech | AI/ML Developer & Tech Leader",
    description: "Leading innovation in AI/ML, web development, and cybersecurity. Expert in penetration testing and cutting-edge technology solutions.",
    type: "website",
    locale: "en_US",
    url: "https://leandre-portfolio.vercel.app",
    siteName: "Leandre Portfolio",
    images: [
      {
        url: "/myportifolio.jpg",
        width: 1200,
        height: 630,
        alt: "Leandre - Tech Leader & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandre - CEO & Founder of Echo Tech",
    description: "Leading innovation in AI/ML, web development, and cybersecurity",
    images: ["/myportifolio.jpg"],
    creator: "@leandre",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: '/echo-logo.png',
    shortcut: '/echo-logo.png',
    apple: '/echo-logo.png',
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Leandre Portfolio" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
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
