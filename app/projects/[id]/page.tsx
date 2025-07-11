"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ModelViewer from "@/components/model-viewer"
import LoadingAnimation from "@/components/loading-animation"

// Mock project data - in a real app, this would come from an API or database
const projects = [
  {
    id: "1",
    title: "agura",
    description:
      "Agura Ticketing App is a seamless mobile solution for booking and managing event tickets with real-time availability and secure access.",
    fullDescription:
      "Agura Ticketing App is a modern, mobile-first solution for booking and managing event tickets seamlessly. Built with React Native, Spring Boot, and PostgreSQL, the app features secure authentication, real-time ticket availability, and a user-friendly interface — making event access easier and more efficient for both organizers and attendees.",
    image: "/agura.png",
    category: "Mobile app",
    year: 2025,
    client: "Client Project",
    tools: ["React Native"],
    has3DModel: false,
    modelUrl: false
  },
  {id: "2",
    title: "T-HealthSync",
    description:
      "A health system used to track a patients behavior and health status and also predicts diseases using AI",
    fullDescription:
      "A health system used to track a patients behavior and health status and also predicts diseases using AI with A machine learning model that predicts diseases from health data collected",
    image: "/tele.png",
    category: "Group project",
    year: 2025,
    client: "Hackathon Project",
    tools: ["Node.js, Python, ML, AI"],
    has3DModel: false,
    modelUrl:"https://github.com/T-HealthSync",
  },
  {
    id: "3",
    title: "Aguuka",
    description:
      "Aguuka is a fullstack MERN app with AI integration for smarter content creation and task automation",
    fullDescription:
      "Aguuka is a modern web application built with the MERN stack, featuring AI-powered tools to streamline content generation and automate workflows. It enhances user productivity with intelligent recommendations and seamless user experience..",
    image: "/aguka.png",
    category: "Mern Stack",
    year: 2025,
    client: "",
    tools: ["Node.js", "React", "MongoDB"],
    has3DModel: false,
    modelUrl: false,
  },
   {
    id: "4",
    title: "Tale-Connect",
    description:
      "Tale-Connect is a Next.js application that empowers global talent to gain visibility, secure job opportunities, and advance their careers.",
    fullDescription:
      "Tale-Connect is a Next.js application that empowers global talent to gain visibility, secure job opportunities, and advance their careers.",
    image: "/tale.png",
    category: "NEX-Java stack",
    year: 2025,
    client: "",
    tools: ["java", "React", "Next.js"],
    has3DModel: false,
    modelUrl:"https://github.com/leandre000/Tale-connect",
  },
  {
    id: "5",
    title: "EduPlatform",
    description:
      "A cutting-edge frontend for an online learning platform.",
    fullDescription:
      "A cutting-edge frontend for an online learning platform delivering a lightning-fast, responsive, and intuitive user experience to revolutionize course management",
    image: "/edu.png",
    category: "TypeScript-powered Next.js app",
    year: 2025,
    client: "",
    tools: ["Typescript", "Next.js"],
    has3DModel: false,
    modelUrl: "https://github.com/leandre000/EduPlatform-Frontend",
  }
  // Add more projects as needed
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<(typeof projects)[0] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data from an API
    const fetchProject = async () => {
      setLoading(true)
      // In a real app, this would be an API call
      const foundProject = projects.find((p) => p.id === params.id)

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setProject(foundProject || null)
      setLoading(false)
    }

    fetchProject()
  }, [params.id])

  if (loading) {
    return <LoadingAnimation />
  }

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => router.push("/projects")}>Back to Projects</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-8 group flex items-center" onClick={() => router.push("/projects")}>
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {project.has3DModel ? (
              <div className="aspect-video rounded-lg overflow-hidden">
                <ModelViewer modelUrl={project.modelUrl} className="w-full h-full" />
              </div>
            ) : (
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            )}

            {project.has3DModel && (
              <div className="mt-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">{project.category}</span>
              <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">{project.year}</span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg mb-4">{project.description}</p>
              <p>{project.fullDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Client</h3>
                <p>{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Year</h3>
                <p>{project.year}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
