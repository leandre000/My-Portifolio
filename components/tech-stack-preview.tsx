"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TechIcon } from "@/components/tech-icons"

// Define grouped tech expertise arrays as described
const techGroups = [
  {
    group: "Web Development",
    items: ["React", "React Query", "Next.js", "Spring Boot", "Express", "NestJS", "Node.js"]
  },
  {
    group: "Academic Curriculars",
    items: ["Cybersecurity", "Linux", "Photoshop", "Adobe Illustrator"]
  },
  {
    group: "Computer Basics",
    items: ["Word", "Excel", "PowerPoint", "Canva", "Hardware"]
  },
  {
    group: "AI & ML",
    items: ["Python", "Spring AI"]
  },
  {
    group: "Mobile Development",
    items: ["React Native"]
  },
  {
    group: "Design",
    items: ["Figma"]
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techGroups.map((group, idx) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black/20 p-6 rounded-xl border border-black/10 dark:border-white/10 flex flex-col items-center shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold mb-4 tracking-wide text-center font-sans text-gray-900 dark:text-white">
                {group.group}
              </h3>
              <ul className="list-none space-y-2 w-full text-center">
                {group.items.map((item) => (
                  <li key={item} className="text-base font-medium text-gray-800 dark:text-gray-100 py-1 px-2 rounded transition-colors bg-gray-50 dark:bg-black/10 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                    {item}
                  </li>
                ))}
              </ul>
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
