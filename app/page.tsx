import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import FeaturedProjects from "@/components/featured-projects"
import TechStackPreview from "@/components/tech-stack-preview"
import AboutPreview from "@/components/about-preview"
import TestimonialsSection from "@/components/testimonials-section"
import BlogPreview from "@/components/blog-preview"
import LoadingAnimation from "@/components/loading-animation"
import { MouseTrailer } from "@/components/mouse-trailer"

export default function Home() {
  return (
    <>
      <LoadingAnimation duration={1500} />
      <MouseTrailer />

      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <AboutPreview />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <FeaturedProjects />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <BlogPreview />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <TechStackPreview />
      </Suspense>
    </>
  )
}
