"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src="/passportme.jpg"
              alt="Dieudonne - 3D Designer"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-black/70 dark:text-white/70 mb-4">
              I'm Dieudonne, a passionate 3D designer and visual artist with over 3 years of experience creating
              immersive digital experiences. My work spans from detailed design to stylized modeling
              and product rendering.
            </p>
            <p className="text-black/70 dark:text-white/70 mb-6">
              My design philosophy centers around blending technical precision with artistic expression, creating
              visually stunning and functionally effective 3D assets and environments.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Based in</h4>
                <p className="text-black/70 dark:text-white/70">Bugesera, Rwanda</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-black/70 dark:text-white/70">3+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Specialization</h4>
                <p className="text-black/70 dark:text-white/70">3D Modeling & Animation,Programming and Web development.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability</h4>
                <p className="text-black/70 dark:text-white/70">Freelance less than 3 hrs</p>
              </div>
            </div>

            <Link href="/about">
              <Button variant="ghost" className="group">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
