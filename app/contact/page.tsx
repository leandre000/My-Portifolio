import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Tech Stack | Leandre - Designer & Developer Portfolio",
  description: "Explore Leandre's Web development,AI,ML projects.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
