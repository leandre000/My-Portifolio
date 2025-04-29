"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TechIcon } from "@/components/tech-icons"

const techItems = [
  {
    name: "Blender",
    description: "3D modeling, animation, rendering and simulation",
  },
  {
    name: "Unity",
    description: "Real-time 3D development and visualization",
  },
  {
    name: "Unreal Engine",
    description: "Real-time 3D creation platform",
  },
]

export default function TechStackPreview() {
  return (
    <section className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Technologies</h2>
            <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              The professional software and tools I use to bring creative visions to life through 3D design and
              visualization.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black/20 p-6 rounded-xl border border-black/10 dark:border-white/10"
            >
              <div className="bg-black/5 dark:bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TechIcon name={item.name} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-black/70 dark:text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>

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
