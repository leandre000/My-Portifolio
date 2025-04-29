"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CuboidIcon as Cube } from "lucide-react"
import { Button } from "@/components/ui/button"
import ModelViewer from "@/components/model-viewer"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Stylized boat",
    description: "A detailed 3D model of a boat with minimal shading.",
    image: "/boat.png",
    category: "3D Modeling",
    has3DModel: false,
    modelUrl: "/models/boat.glb",
  },
  {
    id: 2,
    title: "Stylized Abandoned robot",
    description: "Default cubes usually get trashed fast, but they're not useless—this awesome model was made using only cubes! Inspired by the Cubic Worlds course by CGBoost, it proves even the most boring block can build something cool. 🧊🔥",
    image: "/robot.png",
    category: "Character Design",
    has3DModel: false,
    modelUrl: "/models/robot.glb",
  },
  {
    id: 3,
    title: "Product Visualization",
    description: "Photorealistic 3D visualization of consumer shoes for marketing",
    image: "/shoes.png",
    category: "Product Visualization",
    has3DModel: false,
    modelUrl: "/models/shoes.glb"
  },
  {
    id: 10,
    title: "Neuros (AI Business Analytics)",
    description: "A generative business intelligence platform for analysts. AI-powered analytics, real-time dashboards, and seamless integrations. Built with Next.js, TypeScript, and advanced data visualization.",
    image: "/neuros.png",
    category: "Web App / AI / Dashboard",
    has3DModel: false,
    github: "https://github.com/Dieudonne000/neuros",
    live: "https://neuros-omega.vercel.app/",
  },
]

export default function FeaturedProjects() {
  // Track which project is being hovered
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  // Track which project has its 3D model active
  const [activeModelIndex, setActiveModelIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-black/70 dark:text-white/70 max-w-2xl">
              Explore a selection of my most recent and impactful 3D design work, showcasing a range of styles and
              techniques.
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
              <Button variant="ghost" className="group">
                View All Projects
                <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                {/* Show 3D model if active, otherwise show image */}
                {activeModelIndex === index && project.has3DModel ? (
                  <div className="w-full h-full">
                    {/* 3D model viewer component */}
                    <ModelViewer modelUrl={project.modelUrl || ""} className="w-full h-full" />
                    {/* Button to switch back to image view */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
                      onClick={() => setActiveModelIndex(null)}
                    >
                      Show Image
                    </Button>
                  </div>
                ) : (
                  <>
                    <Link href={`/projects/${project.id}`}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    {/* Button to view 3D model if available */}
                    {project.has3DModel && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
                        onClick={(e) => {
                          e.preventDefault()
                          setActiveModelIndex(index)
                        }}
                      >
                        <Cube className="h-4 w-4 mr-2" />
                        View 3D Model
                      </Button>
                    )}
                    {/* Overlay with project details on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                        <p className="text-white/80 mt-2">{project.description}</p>
                        {/* Add GitHub and Live buttons if available */}
                        {project.github && project.live && (
                          <div className="flex gap-2 mt-4">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-black/80 text-black dark:text-white rounded hover:bg-white hover:text-black hover:underline transition"
                            >
                              GitHub
                            </a>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                              Live Site
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
              {/* Project title and category below the image/model */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <span className="text-sm text-black/60 dark:text-white/60">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
