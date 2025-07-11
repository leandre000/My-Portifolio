import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Leandre - Designer & Developer Portfolio",
  description:
    "Explore Leandre's Web development,Artificial-Intelligence,Machine-Learning work",
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
              Disciplinary developer in web development, Artificial Intelligence and Machine-Learning.
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
                    src="/passport.jpg"
                    alt="Leandre - Designer & Developer"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Email</h4>
                    <p>Iamshemaleandre@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Location</h4>
                    <p>Kigali, Rwanda</p>
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
                I'm IZERE Shema Leandre, a developer passionate about both AI,ML and web development. My journey began over 2 years ago, exploring how Artificial Intelligence, interactive web applications, and programming can come together to build immersive experiences. From detailed design to full-stack web apps.
              </p>
              <p className="text-black/70 dark:text-white/70 mb-6">
                After joining Rwanda Coding Academy, I honed my skills in software programming, embedded systems, and cybersecurity, while also working on projects—including contributing to events like the 2024 Mashirika event.
              </p>
              <p className="text-black/70 dark:text-white/70 mb-10">
                Today, I specialize in Machine Learning and robust web applications using tools like TensorFlow, React, Next.js, Node.js, and more. My work blends technical precision with artistic expression, whether I'm coding, designing.
              </p>

              <h2 className="text-3xl font-bold mb-6">Philosophy</h2>
              <p className="text-black/70 dark:text-white/70 mb-6">
              At the heart of my process are three foundational principles:
              </p>

              <div className="space-y-6 mb-10">
                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Attention to Detail</h3>
                  <p className="text-black/70 dark:text-white/70">
                   In web development, I believe thoughtful design and clean, maintainable code—down to the smallest detail—make the biggest impact
                  </p>
                </div>

                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Functional Aesthetics</h3>
                  <p className="text-black/70 dark:text-white/70">
                    Beautiful design and strong code must serve a purpose, seamlessly blending form and function across models, interfaces, and backend systems
                  </p>
                </div>

                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Narrative & Problem Solving</h3>
                  <p className="text-black/70 dark:text-white/70">
                   Every project tells a story and solves a problem, blending visuals and tech with a problem-solving mindset.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Goals & Vision</h2>
              <p className="text-black/70 dark:text-white/70 mb-6">
                As I continue to grow as a designer and developer, my goal is to push the boundaries of what's possible in digital art, web technology, and interactive experiences. I'm particularly interested in exploring how traditional artistic techniques and modern programming can work together.
              </p>
              <p className="text-black/70 dark:text-white/70">
                I'm always open to collaborations and new projects that challenge me creatively and technically. If you're looking for someone who can bring your vision to life with both precision and creativity—whether in ML, web, or code—I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
