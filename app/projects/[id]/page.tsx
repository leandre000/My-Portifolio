"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import LoadingAnimation from "@/components/loading-animation"
import dynamic from "next/dynamic"
const ModelViewer = dynamic(() => import("@/components/model-viewer"), { ssr: false })

const projects = [
   {
    "id": "1",
    "title": "Agura",
    "description": "Agura Ticketing App is a seamless mobile solution for booking and managing event tickets with real-time availability and secure access.",
    "fullDescription": "Agura Ticketing App is a modern, mobile-first solution for booking and managing event tickets seamlessly.",
    "image": "/agura.png",
    "category": "Mobile-app",
    "year": 2025,
    "client": "Client Project",
    "tools": ["React Native", "Spring Boot", "PostgreSQL"],
    "has3DModel": false,
     "github": "https://github.com/leandre000/Agura",
    "modelUrl": ""
  },
  {
    "id": "2",
    "title": "T-HealthSync",
    "description": "A health system used to track patients' behavior and health status and predicts diseases using AI.",
    "fullDescription": "A health system used to track patient behavior and health status and also predicts diseases using AI.",
    "image": "/tele.png",
    "category": "Artificial-Intelligence",
    "year": 2025,
    "client": "Hackathon Project",
    "tools": ["Node.js", "Python", "Machine Learning", "AI"],
    "has3DModel": false,
     "github": "https://github.com//leandre000/T-HealthSync",
    "modelUrl": ""
  },
  {
    "id": "3",
    "title": "Aguuka",
    "description": "Aguuka is a fullstack MERN app with AI integration for smarter content creation and task automation.",
    "fullDescription": "Aguuka is a modern web application built with the MERN stack, featuring AI-powered tools to streamline content generation and automate workflows.",
    "image": "/aguka.avif",
    "category": "MERN-Stack",
    "year": 2025,
    "client": "",
    "tools": ["Node.js", "React", "MongoDB"],
    "has3DModel": false,
     "github": "https://github.com/leandre000/Aguuka",
    "modelUrl": ""
  },
  {
    "id": "4",
    "title": "Tale-Connect",
    "description": "Tale-Connect is a Next.js application that empowers global talent to gain visibility, secure job opportunities, and advance their careers.",
    "fullDescription": "Tale-Connect is a Next.js application that empowers global talent to gain visibility, secure job opportunities, and advance their careers.",
    "image": "/tale.png",
    "category": "Web-app",
    "year": 2025,
    "client": "",
    "tools": ["Java", "React", "Next.js"],
    "has3DModel": false,
     "github": "https://github.com/leandre000/T-conekt",
    "modelUrl": ""
  },
  {
    "id": "5",
    "title": "EduPlatform",
    "description": "A cutting-edge frontend for an online learning platform.",
    "fullDescription": "A cutting-edge frontend for an online learning platform.",
    "image": "/edu.jpg",
    "category": "Web-app",
    "year": 2025,
    "client": "",
    "tools": ["TypeScript", "Next.js"],
    "has3DModel": false,
     "github": "https://github.com/leandre000/EduPlatform",
     "live":"https://eduplatform-iota.vercel.app/",
    "modelUrl": ""
  },
  {
    "id": "6",
    "title": "IntelliCV",
    "description": "AI Resume Builder crafts professional resumes tailored to job roles using smart optimization.",
    "fullDescription": "IntelliCV is an AI-powered resume builder that analyzes job descriptions and personal data to generate optimized CVs.",
    "image": "/intel.png",
    "category": "Artificial-Intelligence",
    "year": 2024,
    "client": "",
    "tools": ["React", "NLP", "OpenAI API"],
    "has3DModel": false,
    "github": "https://github.com/leandre000/IntelliCV",
    "modelUrl": ""
  },
  {
    "id": "7",
    "title": "GiraSmart Farm",
    "description": "GiraSmart AI uses computer vision to empower farmers with crop insights and precision agriculture.",
    "fullDescription": "A smart farming platform using computer vision and drone imagery to assess crop health and provide real-time intervention insights.",
    "image": "/gira.jpg",
    "category": "Machine-Learning",
    "year": 2024,
    "client": "",
    "tools": ["Python", "TensorFlow", "OpenCV", "Flask"],
    "has3DModel": false,
    "github": "https://github.com/leandre000/GiraSmart-Farm",
    "modelUrl": ""
  },
  {
    "id": "8",
    "title": "SobanukirwaBot",
    "description": "An intelligent chatbot mentor that supports learners and professionals through personalized guidance.",
    "fullDescription": "A personalized AI chatbot mentor.",
    "image": "/sob.webp",
    "category": "Machine-Learning",
    "year": 2024,
    "client": "",
    "tools": ["NLP", "Rasa", "React", "FastAPI"],
    "has3DModel": false,
    "github": "https://github.com/leandre000/SobanukirwaBot",
    "modelUrl": ""
  },
  {
    "id": "9",
    "title": "SpeakWise",
    "description": "SpeakWise is an AI voice assistant that executes tasks and answers questions hands-free.",
    "fullDescription": " A mobile voice AI assistant.",
    "image": "speak.webp",
    "category": "Mobile-app",
    "year": 2024,
    "client": "",
    "tools": ["React Native", "Voice AI", "Dialogflow"],
    "has3DModel": false,
     "github": "https://github.com/leandre000/SpeakWise",
    "modelUrl": ""
  },
  {
    "id": "10",
    "title": "DevHelper AI",
    "description": "DevHelper AI explains, refactors, and enhances code snippets using advanced algorithms.",
    "fullDescription": " A browser-based developer companion that explains, refactors, and debugs code snippets in real-time.",
    "image": "/dev.webp",
    "category": "Artificial-Intelligence",
    "year": 2024,
    "client": "",
    "tools": ["React", "Monaco Editor", "OpenAI", "TypeScript"],
    "has3DModel": false,
     "github": "https://github.com/leandre000/DevHelper-AI",
    "modelUrl": ""
  },
 {
    "id": "11",
    "title": "Website-Template",
    "description": "A multi-purpose website template built for startups and professional services.",
    "fullDescription": "This template offers an elegant layout for small businesses to establish a strong online presence.",
    "image": "/web.webp",
    "category": "Web-app",
    "year": 2024,
    "client": "",
    "tools": [],
    "has3DModel": false,
    "modelUrl": "",
    "github": "https://github.com/leandre000/Project-descriptor",
    "live": "https://lex-lake.vercel.app/"
  },
  {
    "id": "12",
    "title": "Restaurent-Template",
    "description": "A sleek, customizable restaurant website template for showcasing menus and reservations.",
    "fullDescription": "This modern restaurant template helps food businesses present their brand online with style and functionality.",
    "image": "/rest.jpg",
    "category": "Web-app",
    "year": 2024,
    "client": "",
    "tools": [],
    "has3DModel": false,
    "modelUrl": "",
    "github": "https://github.com/leandre000/restaurent",
    "live": "https://restaurent-lemon.vercel.app/"
  },
  {
    "id": "13",
    "title": "E-commerce",
    "description": "A feature-rich e-commerce solution for modern online shops.",
    "fullDescription": "This full-stack e-commerce application supports product catalogs, carts, payments, and admin management.",
    "image": "/commerce.png",
    "category": "Web-app",
    "year": 2025,
    "client": "",
    "tools": [],
    "has3DModel": false,
    "modelUrl": "",
    "github": "https://github.com/leandre000/e-commerce-springboot",
    "live": ""
  },
  {
    "id": "14",
    "title": "Company_Visitor_Management",
    "description": "A secure platform to manage company visitors, logins, and check-outs.",
    "fullDescription": "This system enables organizations to register, track, and log visitors with ease, improving front-desk operations and security.",
    "image": "/comp.webp",
    "category": "Web-app",
    "year": 2023,
    "client": "",
    "tools": [],
    "has3DModel": false,
    "modelUrl": "",
    "github": "https://github.com/leandre000/company_visitor_management",
    "live": ""
  },
  {
    "id": "15",
    "title": "Retail-store",
    "description": "A retail store management system for tracking inventory, sales, and analytics.",
    "fullDescription": "Sana is a lightweight retail solution for small to mid-sized stores to manage sales, stock, and customer data. It offers real-time dashboards, receipt generation, and sales reporting to improve business efficiency.",
    "image": "/store.png",
    "category": "Web-app",
    "year": 2025,
    "client": "",
    "tools": [],
    "has3DModel": false,
    "modelUrl": "",
    "github": "https://github.com/leandre000/Retail-Store-Management",
    "live": ""
  },
  {
    "id": "16",
    "title": "NextVibe",
    "description": "A next-gen social app designed for sharing moments and connecting with communities.",
    "fullDescription": "NexVibe brings people together with vibrant design, real-time interaction, and smooth content sharing.",
    "image": "/nex.webp",
    "category": "Web-app",
    "year": 2024,
    "client": "",
    "tools": [],
    "has3DModel": false,
    "modelUrl": "",
    "github": "https://github.com/leandre000/NexVibe",
    "live": ""
  }
  ,
  {
    "id": "17",
    "title": "Genzura",
    "description": "online inventory management system.",
    "fullDescription": "online inventory management system",
    "image": "/genzura.png",
    "category": "Web-app",
    "year": 2025,
    "client": "",
    "tools": [],
    "has3DModel": false,
    "modelUrl": "",
    "github": "https://github.com/leandre000/genzura",
    "live": ""
  }
  ,
  {
    "id": "18",
    "title": "HingaAi",
    "description": "agro_senseai is made  for helping farmers manage pests and  diseases of crops",
    "fullDescription": "agro_senseai is made  for helping farmers manage pests and  diseases of crops",
    "image": "/hinga.jpg",
    "category": "Web-app, Artificial-Intelligence,Machine-Learning",
    "year": 2025,
    "client": "",
    "tools": [],
    "has3DModel": false,
    "modelUrl": "",
    "github": "https://github.com/leandre000/Hinga-Ai",
    "live": ""
  }
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<typeof projects[0] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true)
      const foundProject = projects.find((p) => p.id === params.id)
      await new Promise((resolve) => setTimeout(resolve, 1000)) 
      setProject(foundProject || null)
      setLoading(false)
    }
    fetchProject()
  }, [params.id])

  if (loading) return <LoadingAnimation />

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
        <Button
          variant="ghost"
          className="mb-8 group flex items-center"
          onClick={() => router.push("/projects")}
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.has3DModel && project.modelUrl ? (
              <div className="aspect-video rounded-lg overflow-hidden">
                <ModelViewer modelUrl={project.modelUrl} className="w-full h-full" />
              </div>
            ) : (
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 capitalize">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">
                {project.category}
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">
                {project.year}
              </span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg mb-4">{project.description}</p>
              <p>{project.fullDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">
                  Client
                </h3>
                <p>{project.client || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">
                  Year
                </h3>
                <p>{project.year}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5"
                  >
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
