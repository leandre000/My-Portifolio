import type { Metadata } from "next"
import ExperiencePageClient from "./ExperiencePageClient"

// This would normally be in the page.tsx file, but since we're using client component
// we'll need to handle metadata differently in a production app
export const metadata: Metadata = {
  title: "Tech Stack | Leandre - Designer & Developer Portfolio",
  description: "Explore Leandre's Web development,AI,ML projects..",
}

export default function ExperiencePage() {
  return <ExperiencePageClient />
}
