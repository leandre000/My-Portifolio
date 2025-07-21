"use client"

import { motion } from "framer-motion"
import BlogCard from "@/components/blog-card"
import { useEffect, useState } from "react"
import { blogs } from "@/data/blog"
import { Skeleton } from "@/components/ui/skeleton"

const BLOGS_PER_PAGE = 6;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = blogs.slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);

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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {!mounted
            ? Array.from({ length: BLOGS_PER_PAGE }).map((_, i) => (
                <div key={i} className="bg-white dark:bg-black/80 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full transition-all duration-200">
                  <Skeleton className="w-full h-48" />
                  <div className="flex flex-col flex-1 p-6">
                    <Skeleton className="w-1/2 h-4 mb-2" />
                    <Skeleton className="w-3/4 h-6 mb-2" />
                    <Skeleton className="w-full h-4 mb-4 flex-1" />
                    <Skeleton className="w-24 h-4 mt-auto" />
                  </div>
                </div>
              ))
            : paginatedBlogs.map((blog, i) => (
                <BlogCard key={blog.id} {...blog} priority={i === 0 && page === 1} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded bg-black/10 dark:bg-white/10 text-black dark:text-white disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-black/70 dark:text-white/70">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded bg-black/10 dark:bg-white/10 text-black dark:text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
