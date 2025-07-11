import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

// This would normally be in the page.tsx file, but since we're using client component
// we'll need to handle metadata differently in a production app
export const metadata: Metadata = {
  title: "Tech Stack | Leandre - Designer & Developer Portfolio",
  description: "Explore Leandre's Web development, Artificial-Intelligence & Machine-Learning projects.",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
