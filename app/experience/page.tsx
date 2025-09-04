import type { Metadata } from "next"
import ExperiencePageClient from "./ExperiencePageClient"
import SEOOptimizer from "@/components/seo-optimizer"

export const metadata: Metadata = {
  title: "Experience | Leandre - Software Developer Portfolio",
  description: "Explore Leandre's professional experience in software development, AI, and machine learning.",
}

export default function ExperiencePage() {
  return (
    <div className="page-container">
      <SEOOptimizer
        title="Experience - Leandre Portfolio | Software Developer"
        description="View my professional journey in software development, including roles at Echo Solutions, LOXOTECH TECH, and various innovative projects."
        keywords={[
          "Experience", "Software Developer", "Full Stack", "AI", "Machine Learning",
          "Web Development", "Career", "Portfolio"
        ]}
        image="/passport.jpg"
      />
      <div className="content-wrapper">
        <ExperiencePageClient />
      </div>
    </div>
  )
}
