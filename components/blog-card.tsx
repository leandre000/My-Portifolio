"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { memo } from "react"

interface BlogCardProps {
  id: string
  title: string
  description: string
  image: string
  date: string
  slug: string
  priority?: boolean
}

function BlogCardComponent({ id, title, description, image, date, slug, priority = false }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
      className="bg-white dark:bg-black/80 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full transition-all duration-200"
    >
      <div className="relative w-full h-48">
        <Image
          src={image || "/placeholder.png"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs text-black/60 dark:text-white/60 mb-2">{new Date(date).toLocaleDateString()}</span>
        <h3 className="text-lg font-bold mb-2 text-black dark:text-white line-clamp-2">{title}</h3>
        <p className="text-sm text-black/70 dark:text-white/70 mb-4 flex-1 line-clamp-3">{description}</p>
        <Link href={`/blog/${slug}`} className="mt-auto text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
          Read More
        </Link>
      </div>
    </motion.div>
  )
}

export default memo(BlogCardComponent)
