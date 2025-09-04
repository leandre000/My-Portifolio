import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"
import SEOOptimizer from "@/components/seo-optimizer"

export const metadata: Metadata = {
  title: "Projects | Leandre - Software Developer Portfolio",
  description: "Explore Leandre's Web development, Artificial-Intelligence & Machine-Learning projects.",
}

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <SEOOptimizer
        title="Projects - Leandre Portfolio | Software Developer"
        description="Explore my portfolio of impactful projects including ClinixPro hospital management, Talent-Connect platform, and web development solutions."
        keywords={[
          "Projects", "Portfolio", "Hospital Management", "Talent Management", 
          "Web Development", "Full Stack", "React", "Next.js"
        ]}
        image="/passport.jpg"
      />
      <div className="content-wrapper">
        <ProjectsClientPage />
      </div>
    </div>
  )
}
