import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Dieudonne - 3D Designer Portfolio",
  description:
    "Learn about Dieudonne's background, design philosophy, and experience as a 3D designer and visual artist.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              Passionate 3D designer with a focus on creating immersive digital experiences
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="sticky top-32">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/passportme.jpg"
                    alt="Dieudonne - 3D Designer"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Email</h4>
                    <p>munezadieudonne2021@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Location</h4>
                    <p>Bugesera, Rwanda</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">
                      Availability
                    </h4>
                    <p>Freelance</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">
                      Experience
                    </h4>
                    <p>3+ Years</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <p className="text-black/70 dark:text-white/70 mb-6">
                I'm MUNEZA Jean Dieudonne, a 3D designer and visual artist with a passion for creating immersive digital
                experiences. My journey in the world of 3D design began over 2 years ago when I discovered the power of
                bringing imagination to life through digital art and modeling.
              </p>
              <p className="text-black/70 dark:text-white/70 mb-6">
                After joining Rwanda Coding Academy, I honed my skills through every resource
                working on various projects and challenges even contributing to events like the 2024 Mashirika event.
              </p>
              <p className="text-black/70 dark:text-white/70 mb-10">
                Today, I specialize in creating detailed 3D models, environments, and visualizations that blend
                technical precision with artistic expression.
              </p>

              <h2 className="text-3xl font-bold mb-6">Design Philosophy</h2>
              <p className="text-black/70 dark:text-white/70 mb-6">
                My approach to 3D design centers around three core principles:
              </p>

              <div className="space-y-6 mb-10">
                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Attention to Detail</h3>
                  <p className="text-black/70 dark:text-white/70">
                    I believe that the smallest details can make the biggest impact. From subtle texturing to precise
                    lighting, I focus on creating 3D assets that feel authentic and lived-in.
                  </p>
                </div>

                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Functional Aesthetics</h3>
                  <p className="text-black/70 dark:text-white/70">
                    Beautiful design should also serve a purpose. Whether I'm creating product visualizations or
                    environmental assets, I ensure that form and function work together harmoniously.
                  </p>
                </div>

                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Narrative Focus</h3>
                  <p className="text-black/70 dark:text-white/70">
                    Every design tells a story. I approach each project with a narrative mindset, considering how the
                    visual elements contribute to the broader story being told.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Goals & Vision</h2>
              <p className="text-black/70 dark:text-white/70 mb-6">
                As I continue to grow as a 3D designer, my goal is to push the boundaries of what's possible in digital
                art and visualization. I'm particularly interested in exploring the intersection of traditional artistic
                techniques and cutting-edge technology.
              </p>
              <p className="text-black/70 dark:text-white/70">
                I'm always open to collaborations and new projects that challenge me creatively and technically. If
                you're looking for a 3D designer who can bring your vision to life with precision and artistic flair,
                I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
