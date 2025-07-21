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
              src="/passport.jpg"
              alt="Leandre -  Designer & Developer"
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
              I'm Leandre, Web Developer leveraging AI & ML to build intelligent, problem-solving digital products that drive innovation and real-world impact.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Based in</h4>
                <p className="text-black/70 dark:text-white/70">Kigali, Rwanda</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-black/70 dark:text-white/70">2 Years</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Specialization</h4>
                <p className="text-black/70 dark:text-white/70"> Design, Web Development, Programming,Artificial Intelligence & Machine Learning</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability</h4>
                <p className="text-black/70 dark:text-white/70">Freelance less than 5 hrs</p>
              </div>
            </div>

            <Link href="/about">
              <Button variant="ghost" className="w-full sm:w-auto rounded-full px-6 py-4 text-base font-medium group">
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
