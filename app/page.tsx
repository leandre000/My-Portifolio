// Home Page: Clean, DRY, KISS, and clear section order
// 1. Hero
// 2. About Preview
// 3. Featured Projects
// 4. Client Testimonials (last)
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import SEOOptimizer from "@/components/seo-optimizer";

// Lightweight, code-split sections with skeleton fallbacks
const HeroSection = dynamic(() => import("@/components/hero-section"), {
  loading: () => (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-10 w-40" />
        </div>
        <Skeleton className="h-72 w-full rounded-xl" />
      </div>
    </section>
  )
});

const AboutPreview = dynamic(() => import("@/components/about-preview"), {
  loading: () => (
    <section className="container mx-auto px-4 py-12">
      <Skeleton className="h-8 w-40 mb-6" />
      <div className="grid md:grid-cols-3 gap-6">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
    </section>
  )
});

const FeaturedProjects = dynamic(() => import("@/components/featured-projects"), {
  loading: () => (
    <section className="container mx-auto px-4 py-12">
      <Skeleton className="h-8 w-56 mb-6" />
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden">
            <Skeleton className="h-40 w-full" />
            <div className="p-4 space-y-3">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-9 w-28" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
});

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => (
    <section className="container mx-auto px-4 py-12">
      <Skeleton className="h-8 w-56 mb-6" />
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-6 rounded-xl border">
            <Skeleton className="h-4 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </section>
  )
});


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEOOptimizer
        title="Shema Leandre - Software Developer"
        description="Portfolio of Shema Leandre, a software developer passionate about building web applications and learning new technologies."
        keywords={[
          "Software Developer", "Web Development", "React", "Next.js", 
          "Full Stack Developer", "Portfolio", "Developer", "Shema Leandre"
        ]}
        image="/me.jpg"
      />
      
      {/* 1. Hero Section */}
      <Suspense>
        <HeroSection />
      </Suspense>

      {/* 2. About Preview */}
      <Suspense>
        <AboutPreview />
      </Suspense>

      {/* 3. Featured Projects */}
      <Suspense>
        <FeaturedProjects />
      </Suspense>

      {/* 4. Client Testimonials */}
      <Suspense>
        <TestimonialsSection />
      </Suspense>

      {/* Temporarily disabled for debugging */}
      {/* <Suspense fallback={<div className="h-96" />}>
        <CertificatesSection />
      </Suspense> */}
    </div>
  );
}
