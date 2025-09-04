import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"
import SEOOptimizer from "@/components/seo-optimizer"

export const metadata: Metadata = {
  title: "Contact | Leandre - Software Developer Portfolio",
  description: "Get in touch with Leandre for collaboration opportunities, project inquiries, or professional networking.",
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
