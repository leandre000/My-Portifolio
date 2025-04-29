import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

// This would normally be in the page.tsx file, but since we're using client component
// we'll need to handle metadata differently in a production app
export const metadata: Metadata = {
  title: "Projects | Dieudonne - 3D Designer Portfolio",
  description: "Explore Dieudonne's 3D design projects, including models, visualizations, and animations.",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
