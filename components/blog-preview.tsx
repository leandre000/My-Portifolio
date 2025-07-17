"use client"

import { blogs } from "@/data/blog"
import BlogCard from "@/components/blog-card"
import { motion } from "framer-motion"

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white/5 dark:bg-black/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Insights</h2>
          <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Get inspired by innovations in AI, sustainability, and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
