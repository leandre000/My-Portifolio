import type { Metadata } from "next"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import ClientProviders from "./ClientProviders"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navigation from "@/components/navigation"
import StructuredData from "./structured-data"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-poppins" })

// ✅ This must remain in a server component (no "use client")
export const metadata: Metadata = {
  title: "Shema Leandre - Software Developer",
  description: "Portfolio of Shema Leandre, a young software developer passionate about building web applications and learning new technologies.",
  keywords: [
    "Software Developer", "Web Development", "React", "Next.js", "Node.js", 
    "Full Stack Developer", "Portfolio", "Developer", "Shema Leandre"
  ],
  authors: [{ name: "Shema Leandre", url: "https://leandre-portfolio.vercel.app" }],
  creator: "Shema Leandre",
  publisher: "Shema Leandre",
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
    title: "Shema Leandre - Software Developer",
    description: "A young software developer passionate about building web applications and learning new technologies.",
    type: "website",
    locale: "en_US",
    url: "https://shemaleandre.vercel.app",
    siteName: "Shema Leandre Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Shema Leandre - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shema Leandre - Software Developer",
    description: "A young software developer passionate about building web applications",
    images: ["/me.jpg"],
    creator: "@shema_leandre",
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
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <StructuredData />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shema Leandre Portfolio" />
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
