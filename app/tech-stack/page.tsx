"use client"

import { TechIcon } from "@/components/tech-icons"

type TechItem = {
  name: string
  description: string
  experience: number
}

type TechCategory = {
  name: string
  items: TechItem[]
}

const techCategories: TechCategory[] = [
  {
    name: "3D Modeling & Design",
    items: [
      { name: "Blender", description: "Open-source 3D creation suite for modeling, animation, rendering, and more", experience: 70 },
      { name: "Figma", description: "Collaborative interface design tool for UI/UX and prototyping.", experience: 85 },
    ],
  },
  // Removed Texturing & Materials and Animation & Rigging
  {
    name: "Web & Interactive",
    items: [
      { name: "Three.js", description: "JavaScript 3D library for creating 3D content on the web", experience: 70 },
      { name: "React", description: "JavaScript library for building user interfaces", experience: 90 },
      { name: "Next.js", description: "React framework for production-grade applications", experience: 90 },
      { name: "HTML", description: "Standard markup language for creating web pages", experience: 90 },
      { name: "JavaScript", description: "Programming language for web development", experience: 90 },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development", experience: 90 },
      { name: "Web3", description: "Decentralized web protocols and blockchain integration (Ethereum, smart contracts, etc.)", experience: 50 },
    ],
  },
  {
    name: "Backend & Databases",
    items: [
      { name: "Node.js", description: "JavaScript runtime for server-side development", experience: 85 },
      { name: "Express.js", description: "Web application framework for Node.js", experience: 85 },
      { name: "Spring Boot", description: "Java-based framework for building production-ready web applications and microservices", experience: 85 },
      { name: "NestJS", description: "Progressive Node.js framework for building efficient, scalable server-side applications.", experience: 80 },
      { name: "Supabase", description: "Open-source Firebase alternative for real-time databases and authentication.", experience: 75 },
      { name: "Prisma", description: "Next-generation ORM for Node.js and TypeScript.", experience: 80 },
      { name: "Hibernate", description: "Java ORM framework for database access and management", experience: 80 },
      { name: "PHP", description: "Server-side scripting language for web development", experience: 80 },
      { name: "MongoDB", description: "NoSQL database for modern applications", experience: 90 },
      { name: "Firebase", description: "Platform for developing web and mobile applications", experience: 80 },
      { name: "PostgreSQL", description: "Advanced open-source relational database", experience: 85 },
    ],
  },
  {
    name: "Programming Languages",
    items: [
      { name: "Java", description: "Object-oriented programming language used for web, mobile, and enterprise applications", experience: 90 },
      { name: "Python", description: "High-level programming language for general-purpose programming", experience: 70 },
      { name: "C++", description: "General-purpose programming language with high performance", experience: 70 },
      { name: "C", description: "Procedural programming language for system and application development", experience: 70 },
    ],
  },
  {
    name: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", description: "Open-source machine learning framework for deep learning and neural networks", experience: 80 },
    ],
  },
  {
    name: "Cloud & Deployment",
    items: [
      { name: "Vercel", description: "Platform for frontend deployment and edge computing", experience: 85 },
      { name: "Render", description: "Cloud platform for deploying web services, static sites, databases, and more with zero DevOps.", experience: 75 },
      { name: "Docker", description: "Tool for containerizing and deploying applications", experience: 80 },
    ],
  },
  {
    name: "Testing & CI/CD",
    items: [
      { name: "Postman", description: "Tool for testing APIs and endpoints", experience: 85 },
      { name: "Swagger UI", description: "API documentation and testing tool for RESTful APIs.", experience: 80 },
    ],
  },
  {
    name: "Hardware & IoT",
    items: [
      { name: "Arduino", description: "Open-source electronics platform for building digital devices and interactive objects", experience: 60 },
    ],
  },
]

function getExperienceLabel(exp: number): string {
  if (exp >= 100) return "Pro"
  if (exp >= 90) return "Advanced"
  if (exp >= 70) return "Intermediate"
  return "Basic"
}

export default function TechStackPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Stack</h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              The tools and technologies I use to create immersive 3D experiences, intelligent applications, and scalable web platforms.
            </p>
          </div>
        </div>
      </section>

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
