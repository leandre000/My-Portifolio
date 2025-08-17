"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CuboidIcon as Cube, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
const ModelViewer = dynamic(() => import("@/components/model-viewer"), { ssr: false })
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const projects = [
  {
    id: 1,
    title: "ClinixPro",
    description: "A comprehensive hospital management system with patient records, appointment scheduling, and medical inventory management.",
    image: "/commerce.png",
    categories: ["Web Development", "Fullstack", "Healthcare"],
    year: 2025,
    github: "https://github.com/leandre000/clinixpro",
    live: "https://clinix-b1b335gka-leandre000s-projects.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Geenzura",
    description: "Advanced inventory management system with real-time tracking, analytics dashboard, and seamless integrations.",
    image: "/genzura.webp",
    categories: ["Web Development", "Fullstack", "E-commerce"],
    year: 2025,
    github: "https://github.com/leandre000/genzura",
    live: "https://genzura-tau.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "Aguuka",
    description: "Aguuka is a fullstack MERN app with AI integration for smarter content creation and task automation.",
    image: "/aguka.jpg",
    categories: ["Web Development", "Fullstack", "AI"],
    year: 2023,
    github: "https://github.com/leandre000/Aguuka",
    live: "https://hrms-frontend-ashen.vercel.app/"
  },
  {
    id: 4,
    title: "Stoka",
    description: "Stoka is an online inventory management system designed to help businesses track stock, sales, and analytics in real time. Features include product management, reporting, and seamless integrations.",
    image: "/blog/stoka-inventory.jpg",
    categories: ["Web Development", "Fullstack", "Inventory"],
    year: 2025,
    github: "https://github.com/leandre000/stoka",
    live: "https://stoka-green.vercel.app/"
  },
  {
    id: 5,
    title: "EduPlatform",
    description: "A cutting-edge frontend for an online learning platform with modern UI/UX and responsive design.",
    image: "/edu.jpg",
    categories: ["Web Development", "Education"],
    year: 2023,
    github: "https://github.com/leandre000/EduPlatform-Frontend",
    live: "https://eduplatform-iota.vercel.app/"
  }
]

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeModelIndex, setActiveModelIndex] = useState<number | null>(null)

  const orderedProjects = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ]

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-black/70 dark:text-white/70 max-w-2xl">
              Explore a selection of my most recent and impactful projects, showcasing cutting-edge technology and innovative solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Link href="/projects">
              <Button variant="ghost" className="w-full sm:w-auto rounded-full px-6 py-4 text-base font-medium group hover:bg-blue-50 dark:hover:bg-blue-900/20">
                View All Projects
                <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="max-w-7xl mx-auto relative">
          <Carousel>
            <CarouselContent>
              {orderedProjects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className="flex justify-center basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group w-full h-auto px-2"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500">
                      {activeModelIndex === index && project.has3DModel ? (
                        <>
                          <ModelViewer
                            modelUrl={project.modelUrl || ""}
                            className="w-full h-full"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/90 backdrop-blur-sm"
                            onClick={() => setActiveModelIndex(null)}
                          >
                            Show Image
                          </Button>
                        </>
                      ) : (
                        <>
                          <Link href={`/projects/${project.id}`}>
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                            />
                          </Link>
                          
                          {/* Featured Badge */}
                          {project.featured && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                              className="absolute top-4 left-4 z-10"
                            >
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                                ⭐ Featured
                              </span>
                            </motion.div>
                          )}

                          {project.has3DModel && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/90 backdrop-blur-sm"
                              onClick={(e) => {
                                e.preventDefault()
                                setActiveModelIndex(index)
                              }}
                            >
                              <Cube className="h-4 w-4 mr-2" />
                              View 3D Model
                            </Button>
                          )}

                          {/* Enhanced Overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {project.categories.map((category, idx) => (
                                  <span key={idx} className="text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                    {category}
                                  </span>
                                ))}
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                              <p className="text-white/90 text-sm mb-4 leading-relaxed">{project.description}</p>
                              <div className="flex gap-2">
                                {project.github && (
                                  <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold bg-white/90 text-black rounded-lg hover:bg-white hover:scale-105 transition-all duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Github className="h-3 w-3" />
                                    GitHub
                                  </motion.a>
                                )}
                                {project.live && (
                                  <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <ExternalLink className="h-3 w-3" />
                                    Live Site
                                  </motion.a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </div>
                    
                    {/* Project Info Below */}
                    <motion.div 
                      className="mt-4 p-4 bg-white dark:bg-black/20 rounded-lg border border-black/5 dark:border-white/5"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{project.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.categories.slice(0, 2).map((category, idx) => (
                            <span key={idx} className="text-xs text-black/60 dark:text-white/60 bg-black/5 dark:bg-white/5 px-2 py-1 rounded-full">
                              {category}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-black/40 dark:text-white/40 font-medium">
                          {project.year}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black" />
            <CarouselNext className="bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
