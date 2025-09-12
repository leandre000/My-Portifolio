import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Leandre - Designer & Developer Portfolio",
  description: "Discover Leandre’s work in Web Development, AI, and Machine Learning.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-black/70 dark:text-white/70">
              Full-stack developer passionate about AI, ML, and digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Panel */}
            <div>
              <div className="sticky top-32">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/me.jpg"
                    alt="Leandre - Designer & Developer"
                    fill
                    className="object-cover"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8 text-black">
                  <div>
                    <h4 className="text-sm text-black/50 mb-1">Email</h4>
                    <p>Iamshemaleandre@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-black/50 mb-1">Location</h4>
                    <p>Kigali, Rwanda</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-black/50 mb-1">Availability</h4>
                    <p>Freelance</p>
                  </div>
                                       <div>
                       <h4 className="text-sm text-black/50 mb-1">Experience</h4>
                       <p>3+ Years</p>
                     </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Description</h2>
              <p className="text-black/70 mb-6">
                I’m Leandre, a full-stack developer with a focus on intelligent systems and modern UI. 
                I blend backend logic with elegant frontend experiences.
                From AI to scalable applications, I build tech that’s clean, fast, and human-centered.
              </p>

              <h2 className="text-3xl font-bold mb-6">Core Practices</h2>
              <div className="space-y-6 mb-10">
                <div className="bg-black/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Crafted Precision</h3>
                  <p className="text-black/70">
                    Every interaction and line of code is deliberate—refined for clarity, speed, and maintainability.
                  </p>
                </div>

                <div className="bg-black/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Purposeful Design</h3>
                  <p className="text-black/70">
                    UI and logic are shaped together—form follows function across every platform and system.
                  </p>
                </div>

                <div className="bg-black/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Problem-First Thinking</h3>
                  <p className="text-black/70">
                    Every solution begins with a real-world need—delivering elegant outcomes through deep analysis.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Vision</h2>
              <p className="text-black/70">
                To craft meaningful digital products where design meets intelligent engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
