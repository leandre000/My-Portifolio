"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CuboidIcon as Cube } from "lucide-react"
import { Button } from "@/components/ui/button"
import ModelViewer from "@/components/model-viewer"
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
    title: "Agura",
    description:
      "Agura Ticketing App is a seamless mobile solution for booking and managing event tickets with real-time availability and secure access.",
    image: "/agura.avif",
    categories: ["Mobile-app"],
    year: 2025,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "https://github.com/leandre000/Agura",
    live: ""
  },
  {
    id: 2,
    title: "T-HealthSync",
    description:
      "A health system used to track a patient’s behavior and health status, and also predicts diseases using AI.",
    image: "/tele.jpg",
    categories: ["Artificial-Intelligence", "Machine-learning", "Mobile-app"],
    year: 2025,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "https://github.com//leandre000/T-HealthSync",
    live: ""
  },
  {
    id: 3,
    title: "Aguuka",
    description:
      "Aguuka is a fullstack MERN app with AI integration for smarter content creation and task automation.",
    image: "/aguka.jpg",
    categories: ["Mern-Stack", "Artificial-Intelligence"],
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
    description:
      "Tale-Connect is a Next.js application that empowers global talent.",
    image: "/tale.png",
    categories: ["Web-app"],
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
    description:
      "A cutting-edge frontend for an online learning platform.",
    image: "/edu.jpg",
    categories: ["Web-app"],
    year: 2023,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "https://github.com/leandre000/EduPlatform-Frontend",
    live: ""
  },
  {
    id: 6,
    title: "IntelliCV",
    description:
      "AI Resume Builder crafts professional resumes tailored to job roles using smart optimization.",
    image: "/intel.png",
    categories: ["Artificial-Intelligence", "Web-app"],
    year: 2024,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "",
    live: ""
  },
  {
    id: 7,
    title: "GiraSmart Farm",
    description:
      "GiraSmart AI uses computer vision to empower farmers with crop insights and precision agriculture.",
    image: "/gira.jpg",
    categories: ["Artificial-Intelligence", "Machine-Learning"],
    year: 2024,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "",
    live: ""
  },
  {
    id: 8,
    title: "SobanukirwaBot",
    description:
      "An intelligent chatbot mentor that supports learners and professionals through personalized guidance.",
    image: "/sob.webp",
    categories: ["Machine-Learning", "Web-app"],
    year: 2024,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "",
    live: ""
  },
  {
    id: 9,
    title: "SpeakWise",
    description:
      "SpeakWise is an AI voice assistant that executes tasks and answers questions hands-free.",
    image: "speak.webp",
    categories: ["Mobile-app", "Artificial-Intelligence"],
    year: 2024,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "",
    live: ""
  },
  {
    id: 10,
    title: "DevHelper AI",
    description:
      "DevHelper AI explains, refactors, and enhances code snippets using advanced algorithms.",
    image: "/dev.webp",
    categories: ["Artificial-Intelligence", "Web-app"],
    year: 2024,
    has3DModel: false,
    modelUrl: "",
    mediaType: "image",
    github: "",
    live: ""
  }
 
]

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeModelIndex, setActiveModelIndex] = useState<number | null>(null)

  const orderedProjects = [
    ...projects.filter((p) => p.categories.includes("Web-app")),
    ...projects.filter((p) => !p.categories.includes("Web-app")),
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-black/70 dark:text-white/70 max-w-2xl">
              Explore a selection of my most recent and impactful projects.
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

        {/* Carousel */}
        <div className="max-w-6xl mx-auto relative">
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
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      {activeModelIndex === index && project.has3DModel ? (
                        <>
                          <ModelViewer
                            modelUrl={project.modelUrl || ""}
                            className="w-full h-full"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
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
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </Link>
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
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <div>
                              <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                                {project.categories}
                              </span>
                              <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                              <p className="text-white/80 mt-2">{project.description}</p>
                              <div className="flex gap-2 mt-4">
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-black/80 text-black dark:text-white rounded hover:bg-white hover:text-black hover:underline transition"
                                  >
                                    GitHub
                                  </a>
                                )}
                                {project.live && (
                                  <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                  >
                                    Live Site
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <span className="text-sm text-black/60 dark:text-white/60">
                        {project.categories}
                      </span>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
