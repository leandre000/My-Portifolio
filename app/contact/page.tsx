import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"
import SEOOptimizer from "@/components/seo-optimizer"

export const metadata: Metadata = {
  title: "Contact Shema Leandre | Software Developer & Full Stack Engineer",
  description: "Get in touch with Shema Leandre for software development projects, web applications, collaboration opportunities, and professional networking. Available for freelance work and new opportunities.",
  keywords: [
    "contact", "software developer", "full stack developer", "web developer",
    "freelance developer", "collaboration", "project inquiry", "hire developer",
    "Shema Leandre", "portfolio contact", "professional networking",
    "React developer", "Next.js developer", "TypeScript developer"
  ],
  authors: [{ name: "Shema Leandre" }],
  creator: "Shema Leandre",
  publisher: "Shema Leandre",
  openGraph: {
    title: "Contact Shema Leandre | Software Developer",
    description: "Ready to bring your ideas to life? Let's discuss your next software project or collaboration opportunity.",
    url: "https://shemaleandre.dev/contact",
    siteName: "Shema Leandre Portfolio",
    images: [
      {
        url: "/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Shema Leandre - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Shema Leandre | Software Developer",
    description: "Let's build something amazing together. Get in touch for your next project.",
    creator: "@shema_leandre",
    images: ["/contact-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function ContactPage() {
  return (
    <div className="page-container">
      <SEOOptimizer
        title="Contact - Leandre Portfolio | Software Developer"
        description="Connect with me for collaboration opportunities, project inquiries, or professional networking. Let's build something amazing together."
        keywords={[
          "Contact", "Software Developer", "Collaboration", "Project Inquiry",
          "Professional Networking", "Portfolio", "Get In Touch"
        ]}
        image="/passport.jpg"
      />
      <div className="content-wrapper">
        <ContactPageClient />
      </div>
    </div>
  )
}
