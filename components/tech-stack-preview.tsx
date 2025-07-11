"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TechIcon } from "@/components/tech-icons"

const javaTech = {
  name: "Java",
  description: "Object-oriented language used for building scalable backend systems, APIs, and enterprise solutions.",
  experience: 90,
}

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
              Focused on delivering solid backend services, APIs, and full-stack systems powered by Java.
            </p>
          </motion.div>
        </div>

        {/* Java Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-black/20 p-6 rounded-xl border border-black/10 dark:border-white/10 max-w-md mx-auto"
        >
          <div className="bg-black/5 dark:bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <TechIcon name={javaTech.name} className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{javaTech.name}</h3>
          <p className="text-black/70 dark:text-white/70">{javaTech.description}</p>
        </motion.div>

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
