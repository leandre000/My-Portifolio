// Home Page: Clean, DRY, KISS, and clear section order
// 1. Hero
// 2. About Preview
// 3. Featured Projects
// 4. Tech Expertise
// 5. Professional Certifications
// 6. Client Testimonials (last)
import { Suspense } from "react";
import HeroSection from "@/components/hero-section";
import AboutPreview from "@/components/about-preview";
import FeaturedProjects from "@/components/featured-projects";
import TechStackPreview from "@/components/tech-stack-preview";
// import CertificatesSection from "@/components/certificates-section";
// import TestimonialsSection from "@/components/testimonials-section";
import LoadingAnimation from "@/components/loading-animation";
import MouseTrailer from "@/components/mouse-trailer";

export default function Home() {
  return (
    <div>
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

      {/* 4. Tech Expertise */}
      <Suspense fallback={<div className="h-96" />}>
        <TechStackPreview />
      </Suspense>

      {/* Temporarily disabled for debugging */}
      {/* <Suspense fallback={<div className="h-96" />}>
        <CertificatesSection />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <TestimonialsSection />
      </Suspense> */}
    </div>
  );
}
