// Home Page: Clean, DRY, KISS, and clear section order
// 1. Hero
// 2. Featured Projects
// 3. Tech Expertise
// 4. Client Testimonials (last)
import { Suspense } from "react";
import HeroSection from "@/components/hero-section";
import FeaturedProjects from "@/components/featured-projects";
import TechStackPreview from "@/components/tech-stack-preview";
import TestimonialsSection from "@/components/testimonials-section";
import LoadingAnimation from "@/components/loading-animation";
import { MouseTrailer } from "@/components/mouse-trailer";

export default function Home() {
  return (
    <>
      {/* Optional: Loading animation and mouse trailer */}
      <LoadingAnimation duration={1500} />
      <MouseTrailer />

      {/* 1. Hero Section */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection />
      </Suspense>

      {/* 2. Featured Projects */}
      <Suspense fallback={<div className="h-96" />}>
        <FeaturedProjects />
      </Suspense>

      {/* 3. Tech Expertise */}
      <Suspense fallback={<div className="h-96" />}>
        <TechStackPreview />
      </Suspense>

      {/* 4. Client Testimonials (last) */}
      <Suspense fallback={<div className="h-96" />}>
        <TestimonialsSection />
      </Suspense>
    </>
  );
}
