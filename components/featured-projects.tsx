"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
    image: "/hospi.png",
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
    image: "/genzura.png",
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
    categories: ["Web Development", "Frontend", "Education"],
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
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Featured Projects
            </h2>
            <p className="text-black/70 dark:text-white/70 max-w-2xl">
              Explore a selection of my most recent and impactful projects, showcasing cutting-edge technology and innovative solutions.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/projects">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {orderedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Categories */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.categories.slice(0, 2).map((category, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Year */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-sm font-medium bg-white/90 dark:bg-gray-800/90 text-black dark:text-white rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Model Showcase */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-black dark:text-white">Interactive 3D Showcase</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setActiveModelIndex(activeModelIndex === index ? null : index)}
                >
                  <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Cube className="h-16 w-16 text-gray-400" />
                  </div>
                  <p className="mt-4 text-sm text-black/70 dark:text-white/70">
                    Click to view 3D model {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Model Viewer Modal */}
        {activeModelIndex !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-black dark:text-white">
                  3D Model Showcase {activeModelIndex + 1}
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveModelIndex(null)}
                >
                  Close
                </Button>
              </div>
              <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <ModelViewer />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
