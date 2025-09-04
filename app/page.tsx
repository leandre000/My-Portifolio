// Home Page: Clean, DRY, KISS, and clear section order
// 1. Hero
// 2. About Preview
// 3. Featured Projects
// 4. Client Testimonials (last)
import { Suspense } from "react";
import HeroSection from "@/components/hero-section";
import AboutPreview from "@/components/about-preview";
import FeaturedProjects from "@/components/featured-projects";
// import CertificatesSection from "@/components/certificates-section";
import TestimonialsSection from "@/components/testimonials-section";
import LoadingAnimation from "@/components/loading-animation";
import MouseTrailer from "@/components/mouse-trailer";
import SEOOptimizer from "@/components/seo-optimizer";

export default function Home() {
  return (
    <div className="page-container">
      <SEOOptimizer
        title="Leandre - Software Developer at Echo Tech"
        description="Portfolio of Leandre, a software developer passionate about building web applications and learning new technologies."
        keywords={[
          "Software Developer", "Web Development", "React", "Next.js", 
          "Full Stack Developer", "Portfolio", "Developer", "Echo Tech"
        ]}
        image="/me.jpg"
      />
      
      {/* Optional: Loading animation and mouse trailer */}
      <LoadingAnimation duration={1500} />
      <MouseTrailer />

      {/* 1. Hero Section */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection />
      </Suspense>

      {/* 2. About Preview */}
      <Suspense fallback={<div className="h-96" />}>
        <AboutPreview />
      </Suspense>

      {/* 3. Featured Projects */}
      <Suspense fallback={<div className="h-96" />}>
        <FeaturedProjects />
      </Suspense>

      {/* 4. Client Testimonials */}
      <Suspense fallback={<div className="h-96" />}>
        <TestimonialsSection />
      </Suspense>

      {/* Temporarily disabled for debugging */}
      {/* <Suspense fallback={<div className="h-96" />}>
        <CertificatesSection />
      </Suspense> */}
    </div>
  );
}
