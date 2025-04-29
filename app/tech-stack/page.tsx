"use client"

import { TechIcon } from "@/components/tech-icons"

const techCategories = [
  {
    name: "3D Modeling & Design",
    items: [
      {
        name: "Blender",
        description: "Open-source 3D creation suite for modeling, animation, rendering, and more",
        experience: 90,
      },
    ],
  },
  {
    name: "Texturing & Materials",
    items: [
      {
        name: "Figma",
        description: "I mostly use this when creating simple textures",
        experience: 90,
      },
      {
        name: "Adobe Illustrator",
        description: "Vector graphics editor",
        experience: 70,
      },
      {
        name: "Adobe Photoshop",
        description: "Raster graphics editor for texture creation and image manipulation",
        experience: 90,
      },
      {
        name: "Blender",
        description: "Open-source 3D creation suite for modeling, animation, rendering, and more",
        experience: 90,
      },
    ],
  },
  {
    name: "Real-time & Game Engines",
    items: [
      {
        name: "Unity",
        description: "Cross-platform game engine for 2D and 3D development",
        experience: 70,
      },
      {
        name: "Unreal Engine",
        description: "Advanced real-time 3D creation platform",
        experience: 70,
      },
    ],
  },
  {
    name: "Rendering & Visualization",
    items: [
      {
        name: "Cycles",
        description: "Advanced Photorealistic rendering plugin for blender",
        experience: 90,
      },
      {
        name: "Eevee",
        description: "Realtime rendering engine for blender.",
        experience: 100,
      },
      {
        name: "FoxRender farm",
        description: "Cloud rendering service for complex project which saves a lot of time",
        experience: 90,
      },
    ],
  },
  {
    name: "Animation & Rigging",
    items: [
      {
        name: "Mixamo",
        description: "Character animation service with auto-rigging",
        experience: 90,
      },
      {
        name: "Blender",
        description: "Open-source 3D creation suite for modeling, animation, rendering, and more",
        experience: 90,
      },
    ],
  },
  {
    name: "Web & Interactive",
    items: [
      {
        name: "Three.js",
        description: "JavaScript 3D library for creating 3D content on the web",
        experience: 70,
      },
      {
        name: "WebGL",
        description: "JavaScript API for rendering interactive 3D graphics in browsers",
        experience: 40,
      },
      {
        name: "Spline",
        description: "A place to design and collaborate in 3D",
        experience: 70,
      },
      {
        name: "React",
        description: "JavaScript library for building user interfaces",
        experience: 90,
      },
      {
        name: "Next.js",
        description: "React framework for production-grade applications",
        experience: 90,
      },
      {
        name: "HTML",
        description: "Standard markup language for creating web pages",
        experience: 90,
      },
      {
        name: "JavaScript",
        description: "Programming language for web development",
        experience: 90,
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
        experience: 90,
      },
    ],
  },
  {
    name: "Backend & Databases",
    items: [
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side development",
        experience: 70,
      },
      {
        name: "Express.js",
        description: "Web application framework for Node.js",
        experience: 70,
      },
      {
        name: "PHP",
        description: "Server-side scripting language for web development",
        experience: 70,
      },
      {
        name: "MongoDB",
        description: "NoSQL database for modern applications",
        experience: 70,
      },
      {
        name: "Firebase",
        description: "Platform for developing web and mobile applications",
        experience: 70,
      },
    ],
  },
  {
    name: "Programming Languages",
    items: [
      {
        name: "Python",
        description: "High-level programming language for general-purpose programming",
        experience: 70,
      },
      {
        name: "C++",
        description: "General-purpose programming language with high performance",
        experience: 70,
      },
      {
        name: "C",
        description: "Procedural programming language for system and application development",
        experience: 70,
      },
    ],
  },
]

// Helper to map numeric experience to word
function getExperienceLabel(exp: number) {
  if (typeof exp === 'string') return exp;
  if (exp >= 100) return 'Pro';
  if (exp >= 90) return 'Advanced';
  if (exp >= 70) return 'Intermediate';
  return 'Basic';
}

export default function TechStackPage() {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Stack</h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              The tools and technologies I use to create immersive 3D experiences and web applications
            </p>
          </div>
        </div>
      </section>

      {/* Tech stack categories */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {techCategories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-black/10 dark:border-white/10">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white dark:bg-black/20 p-6 rounded-xl border border-black/10 dark:border-white/10 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start">
                        <div className="bg-black/5 dark:bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                          <TechIcon name={item.name} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <span className="text-xs font-medium bg-black/5 dark:bg-white/5 px-2 py-1 rounded-full">
                              {getExperienceLabel(item.experience)}
                            </span>
                          </div>
                          <p className="text-black/70 dark:text-white/70 mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
