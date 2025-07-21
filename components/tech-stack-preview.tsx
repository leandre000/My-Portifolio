"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TechIcon } from "@/components/tech-icons"

// Define grouped tech expertise arrays as described
const techGroups = [
  {
    group: "Web Development",
    items: [
      { name: "React", description: "Library for building fast, reusable UI components in modern single-page apps." },
      { name: "Tanstack (React Query)", description: "Powerful data-fetching and state management library for React applications." },
      { name: "Next.js", description: "React-based framework for full-stack web applications with built-in SSR and API routes." },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for fast UI styling with fully customizable design systems." },
    ]
  },
  {
    group: "Fullstack & Backend",
    items: [
      { name: "Next.js", description: "React-based framework for full-stack web applications with built-in SSR and API routes." },
      { name: "Node.js", description: "JavaScript runtime for server-side development." },
      { name: "Express.js", description: "Minimal and flexible Node.js web application framework for building APIs and web servers." },
      { name: "NestJS", description: "Progressive Node.js framework for building efficient, scalable server-side applications." },
      { name: "Spring Boot", description: "Java-based framework for building production-ready, scalable, and fast backend applications." },
    ]
  },
  {
    group: "Academic Curriculars",
    items: [
      { name: "Penetration Testing", description: "Hands-on skills in identifying and exploiting security vulnerabilities." },
      { name: "Network Research", description: "Research and analysis in computer networks." },
      { name: "Linux Fundamentals", description: "Proficiency in Linux operating systems." },
      { name: "Linux", description: "Open-source operating system used for development, server management, and automation." },
      { name: "Word", description: "Document creation and editing." },
      { name: "Excel", description: "Data analysis, automation, and reporting." },
      { name: "PowerPoint", description: "Presentation creation and delivery." },
      { name: "Canva", description: "Graphic design and content creation." },
      { name: "Hardware", description: "Computer hardware basics and troubleshooting." },
      { name: "Photoshop", description: "Raster graphics editor for image manipulation." },
      { name: "Adobe Illustrator", description: "Vector graphics editor." },
      { name: "Python", description: "High-level programming language for general-purpose scripting and automation." },
      { name: "SpringAI", description: "Spring ecosystem extension for integrating AI and machine learning into Java applications." },
    ]
  },
  {
    group: "Mobile Development",
    items: [
      { name: "React Native", description: "Framework for building native mobile apps using React." },
    ]
  },
  {
    group: "Design",
    items: [
      { name: "Figma", description: "Collaborative interface design tool for UI/UX and prototyping." },
    ]
  },
];

export default function TechStackPreview() {
  return (
    <section className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Expertise</h2>
            <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              Focused on delivering high-quality backend and full-stack solutions across modern technologies.
            </p>
          </motion.div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black/20 p-6 rounded-xl border border-black/10 dark:border-white/10"
            >
              <div className="bg-black/5 dark:bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TechIcon name={group.group} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{group.group}</h3>
              <div className="grid gap-2">
                {group.items.map((item, itemIndex) => (
                  <div key={item.name} className="flex items-start gap-2 text-sm text-black/70 dark:text-white/70">
                    <span>{item.name}:</span>
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/tech-stack">
            <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 py-4 text-base font-medium">
              View Full Tech Stack
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
