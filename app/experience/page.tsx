import type { Metadata } from "next"
import ExperiencePageClient from "./ExperiencePageClient"

// This would normally be in the page.tsx file, but since we're using client component
// we'll need to handle metadata differently in a production app
export const metadata: Metadata = {
  title: "Experience | Dieudonne - 3D Designer Portfolio",
  description: "Explore Dieudonne's professional experience and educational background in 3D design.",
}

export default function ExperiencePage() {
  return <ExperiencePageClient />
}
