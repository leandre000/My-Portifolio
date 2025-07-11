"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ModelViewer from "@/components/model-viewer"
import { CuboidIcon, PlayIcon } from "lucide-react"

const categories = [
  "All",
  "3D Modeling",
  "Character Design",
  "Product Visualization",
  "Architectural",
  "Animation",
  "Web App",
  "AI",
  "Dashboard",
  "Mobile app",
  "Group project",
  "Mern Stack",
  "NEX-Java stack",
  "TypeScript-powered Next.js app"
]

const projects = [
  {
    id: 1,
    title: "Agura",
    description:
      "Agura Ticketing App is a seamless mobile solution for booking and managing event tickets with real-time availability and secure access.",
    image: "/agura.png",
    categories: ["Mobile app"],
    year: 2025,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "https://github.com/leandre000/Agura",
    live: "https://agura.app"
  },
  {
    id: 2,
    title: "T-HealthSync",
    description:
      "A health system used to track a patient’s behavior and health status, and also predicts diseases using AI.",
    image: "/robot.png",
    categories: ["Group project", "AI"],
    year: 2025,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "https://github.com/T-HealthSync",
    live: ""
  },
  {
    id: 3,
    title: "Aguuka",
    description:
      "Aguuka is a fullstack MERN app with AI integration for smarter content creation and task automation.",
    image: "/aguka.png",
    categories: ["Mern Stack", "AI"],
    year: 2023,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "https://github.com/leandre000/Aguuka",
    live: ""
  },
  {
    id: 4,
    title: "Tale_Connect",
    description: "Tale-Connect is a Next.js application that empowers global talent.",
    image: "/tale.png",
    categories: ["NEX-Java stack", "Web App"],
    year: 2023,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "https://github.com/leandre000/Tale-connect",
    live: ""
  },
  {
    id: 5,
    title: "EduPlatform",
    description: "A cutting-edge frontend for an online learning platform.",
    image: "/edu.png",
    categories: ["TypeScript-powered Next.js app", "Dashboard"],
    year: 2025,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "https://github.com/leandre000/EduPlatform-Frontend",
    live: ""
  }
]

export default function ProjectsClientPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [viewMode, setViewMode] = useState<"image" | "3d" | "video">("image")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeCategory))

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-black/70 dark:text-white/70">
            Explore my portfolio of 3D design work and web development across various categories and styles.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-black border-y border-black/10 dark:border-white/10 sticky top-16 z-30 backdrop-blur-md bg-white/80 dark:bg-black/80">
        <div className="container mx-auto px-4 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full ${
                activeCategory === category
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-black/70 dark:text-white/70"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedProject(project)
                setViewMode(project.mediaType === "video" ? "video" : "image")
              }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.mediaType === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayIcon className="h-12 w-12 text-white" />
                  </div>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="text-sm text-black/60 dark:text-white/60">{project.year}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span key={category} className="text-sm text-black/60 dark:text-white/60">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-sm text-black/60 dark:text-white/60">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              {/* View Mode Controls */}
              <div className="flex justify-end mt-4 gap-2">
                {selectedProject.has3DModel && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setViewMode(viewMode === "3d" ? "image" : "3d")}
                    className="flex items-center gap-2"
                  >
                    <CuboidIcon className="h-4 w-4" />
                    {viewMode === "3d" ? "View Image" : "View 3D Model"}
                  </Button>
                )}
              </div>

              {/* Media Viewer */}
              <div className="mt-4">
                {viewMode === "3d" && selectedProject.has3DModel ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <ModelViewer modelUrl={selectedProject.modelUrl} className="w-full h-full" />
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="mt-4 text-black/70 dark:text-white/70">{selectedProject.description}</div>

              <div className="flex gap-2 mt-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-black/80 text-black dark:text-white rounded hover:bg-white hover:text-black hover:underline transition"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
