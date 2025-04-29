import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact | Dieudonne - 3D Designer Portfolio",
  description: "Get in touch with Dieudonne for 3D design projects, collaborations, or inquiries.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
