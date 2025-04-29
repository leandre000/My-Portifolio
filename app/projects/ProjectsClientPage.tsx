"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ModelViewer from "@/components/model-viewer"
import { CuboidIcon, PlayIcon } from "lucide-react"

const categories = ["All", "3D Modeling", "Character Design", "Product Visualization", "Architectural", "Animation", "Web App", "AI", "Dashboard"]

const projects = [
  {
    id: 1,
    title: "Stylized boat",
    description: "A detailed 3D model of a boat with minimal shading.",
    image: "/boat.png",
    categories: ["3D Modeling", "Architectural"],
    year: 2024,
    has3DModel: false,
    modelUrl: "/models/boat.glb",
    mediaType: "image",
  },
  {
    id: 2,
    title: "Stylized Abandoned robot",
    description: "Default cubes usually get trashed fast, but they're not useless—this awesome model was made using only cubes! Inspired by the Cubic Worlds course by CGBoost, it proves even the most boring block can build something cool. 🧊🔥",
    image: "/robot.png",
    categories: ["Character Design", "3D Modeling"],
    year: 2025,
    has3DModel: false,
    modelUrl: "/models/robot.glb",
    mediaType: "image",
  },
  {
    id: 3,
    title: "Consumer Shoes",
    description: "Photorealistic 3D visualization of consumer shoes for marketing",
    image: "/shoes.png",
    categories: ["Product Visualization", "3D Modeling"],
    year: 2023,
    has3DModel: false,
    modelUrl: "/models/shoes.glb",
    mediaType: "image",
  },
  {
    id: 4,
    title: "Headphones",
    description: "Realistic 3D visualization of Headphones for marketing",
    image: "/headphone.png",
    categories: ["Product Visualization", "3D Modeling"],
    year: 2023,
    has3DModel: false,
    modelUrl: "/models/headphone.glb",
    mediaType: "image",
  },
  {
    id: 5,
    title: "Stylized Jeep",
    description: "I made this stylized jeep in blender. it is mainly better for animations",
    image: "/jeep.png",
    categories: ["Architectural", "3D Modeling", "Animation"],
    year: 2025,
    has3DModel: false,
    modelUrl: "/models/jeep.glb",
    mediaType: "image",
  },
  {
    id: 6,
    title: "Marshmello mask",
    description: "Nothing is better than letting your thoughts run wild, this is one of my creations too.",
    image: "/marshmello.png",
    categories: ["3D Modeling", "Character Design"],
    year: 2023,
    has3DModel: false,
    modelUrl: "/models/marshmello.glb",
    mediaType: "image",
  },
  {
    id: 7,
    title: "Cinematic Opening",
    description: "Photorealistic Cinematic opening featuring my name",
    image: "/cinematic-opening.png",
    categories: ["Animation"],
    year: 2023,
    has3DModel: false,
    mediaType: "video",
    videoUrl: "/videos/cinematic-opening.mp4",
  },
  {
    id: 100,
    title: "Neuros (AI Business Analytics)",
    description: "A generative business intelligence platform for analysts. AI-powered analytics, real-time dashboards, and seamless integrations. Built with Next.js, TypeScript, and advanced data visualization.",
    image: "/neuros.png",
    categories: ["Web App", "AI", "Dashboard"],
    year: 2025,
    has3DModel: false,
    github: "https://github.com/Dieudonne000/neuros",
    live: "https://neuros-omega.vercel.app/",
    mediaType: "image",
  },
  {
    id: 101,
    title: "Umurava UI Dashboard",
    description: "A talent portal and dashboard for skills challenges, hackathons, and community engagement. Built with Next.js, TypeScript, and a modern UI/UX.",
    image: "/umurava.png",
    categories: ["Web App", "Dashboard"],
    year: 2025,
    has3DModel: false,
    github: "https://github.com/Dieudonne000/UmuravaUI-dashboard",
    live: "https://umurava-ui-dashboard.vercel.app/talent",
    mediaType: "image",
  },
]

export default function ProjectsClientPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [viewMode, setViewMode] = useState<"image" | "3d" | "video">("image")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeCategory))

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              Explore my portfolio of 3D design work and Web development across various categories and styles
            </p>
          </div>
        </div>
      </section>

      {/* Filter categories */}
      <section className="py-8 bg-white dark:bg-black border-y border-black/10 dark:border-white/10 sticky top-16 z-30 backdrop-blur-md bg-white/80 dark:bg-black/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.categories.map((category) => (
                          <span
                            key={category}
                            className="text-xs font-medium text-white/80 uppercase tracking-wider"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                    </div>
                  </div>
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
        </div>
      </section>

      {/* Project modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <div className="space-y-2">
                  <DialogDescription className="text-sm text-black/60 dark:text-white/60">
                    {selectedProject.description}
                  </DialogDescription>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.categories.map((category) => (
                      <span key={category} className="text-sm text-black/60 dark:text-white/60">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </DialogHeader>

              {/* View mode toggle */}
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
                {selectedProject.mediaType === "video" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setViewMode(viewMode === "video" ? "image" : "video")}
                    className="flex items-center gap-2"
                  >
                    <PlayIcon className="h-4 w-4" />
                    {viewMode === "video" ? "View Image" : "View Video"}
                  </Button>
                )}
              </div>

              {/* Content area */}
              <div className="mt-4">
                {viewMode === "3d" && selectedProject.has3DModel ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <ModelViewer modelUrl={selectedProject.modelUrl || ""} className="w-full h-full" />
                  </div>
                ) : viewMode === "video" && selectedProject.mediaType === "video" ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <video
                      src={selectedProject.videoUrl}
                      controls
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                    />
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

              <div className="mt-4">
                <p className="text-black/70 dark:text-white/70">{selectedProject.description}</p>
              </div>

              <div className="flex gap-2 mt-4">
                {selectedProject?.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-black/80 text-black dark:text-white rounded hover:bg-white hover:text-black hover:underline transition"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject?.live && (
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
