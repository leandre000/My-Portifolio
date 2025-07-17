"use client"

import { motion } from "framer-motion"
import BlogCard from "@/components/blog-card"
import { blogs } from "@/data/blog"

export default function BlogPage() {
  return (
    <section className="py-20 bg-black/5 dark:bg-white/5 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Insights & Innovation</h2>
          <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Explore expert articles and innovative ideas driving modern software, AI, and sustainable engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
