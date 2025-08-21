import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"
import SEOOptimizer from "@/components/seo-optimizer"

// This would normally be in the page.tsx file, but since we're using client component
// we'll need to handle metadata differently in a production app
export const metadata: Metadata = {
  title: "Tech Stack | Leandre - Designer & Developer Portfolio",
  description: "Explore Leandre's Web development, Artificial-Intelligence & Machine-Learning projects.",
}

export default function ProjectsPage() {
  return (
    <>
      <SEOOptimizer
        title="Projects - Leandre Portfolio | Software Developer"
        description="Explore my portfolio of impactful projects including ClinixPro hospital management, Talent-Connect platform, and web development solutions."
        keywords={[
          "Projects", "Portfolio", "Hospital Management", "Talent Management", 
          "Web Development", "Full Stack", "React", "Next.js"
        ]}
        image="/myportifolio.jpg"
      />
      <ProjectsClientPage />
    </>
  )
}
