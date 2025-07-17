"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TechIcon } from "@/components/tech-icons"

const techStack = [
  {
    name: "Java",
    description:
      "Object-oriented language used for building scalable backend systems, APIs, and enterprise solutions.",
    experience: 90,
  },
  {
    name: "Python",
    description:
      "High-level programming language for general-purpose scripting, automation, and AI development.",
    experience: 70,
  },
  {
    name: "C++",
    description:
      "General-purpose programming language with high performance used in system software and games.",
    experience: 70,
  },
  {
    name: "C",
    description:
      "Procedural programming language for low-level system and embedded development.",
    experience: 70,
  },
  {
    name: "Next.js",
    description:
      "React-based framework for full-stack web applications with built-in SSR and API routes.",
    experience: 85,
  },
  {
    name: "TensorFlow",
    description:
      "End-to-end open-source platform for machine learning and deep learning model development.",
    experience: 60,
  },
  {
    name: "Spring Boot",
    description:
      "Java-based framework for building production-ready, scalable, and fast backend applications.",
    experience: 80,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for fast UI styling with fully customizable design systems.",
    experience: 90,
  },
  {
    name: "React",
    description:
      "Library for building fast, reusable UI components in modern single-page apps.",
    experience: 95,
  },
]

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
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black/20 p-6 rounded-xl border border-black/10 dark:border-white/10"
            >
              <div className="bg-black/5 dark:bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TechIcon name={tech.name} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm text-black/70 dark:text-white/70">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/tech-stack">
            <Button variant="outline" className="rounded-full">
              View Full Tech Stack
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
