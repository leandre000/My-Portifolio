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
         "image": "/aguka.jpg",
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
    "id": "7",
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
    "id": "8",
    "title": "SpeakWise",
    "description": "SpeakWise is an AI voice assistant that executes tasks and answers questions hands-free.",
    "fullDescription": " A mobile voice AI assistant.",
         "image": "/speak.webp",
    "category": "Mobile-app",
    "year": 2024,
    "client": "",
    "tools": ["React Native", "Voice AI", "Dialogflow"],
    "has3DModel": false,
     "github": "https://github.com/leandre000/SpeakWise",
    "modelUrl": ""
  },
  {
    "id": "9",
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
    "id": "10",
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
    "id": "11",
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
    "id": "12",
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
    "id": "13",
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
    "id": "14",
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
    "id": "15",
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
    "id": "16",
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
    "id": "17",
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

// 1. Define new arrays for each section (mirroring ProjectsClientPage)
const completedProjects = [
  {
    id: "3",
    title: "Aguuka",
    description: "Aguuka is a fullstack MERN app with AI integration for smarter content creation and task automation.",
    fullDescription: "Aguuka is a modern web application built with the MERN stack, featuring AI-powered tools to streamline content generation and automate workflows.",
         image: "/aguka.jpg",
    year: 2023,
    client: "",
    tools: ["Node.js", "React", "MongoDB"],
    github: "https://github.com/leandre000/Aguuka",
    live: "https://aguka-one.vercel.app/"
  },
  {
    id: "18",
    title: "Stoka",
    description: "Stoka is an online inventory management system designed to help businesses track stock, sales, and analytics in real time. Features include product management, reporting, and seamless integrations.",
    fullDescription: "Stoka is an online inventory management system designed to help businesses track stock, sales, and analytics in real time. Features include product management, reporting, and seamless integrations.",
    image: "/blog/stoka-inventory.jpg",
    year: 2025,
    client: "",
    tools: [],
    github: "https://github.com/leandre000/stoka",
    live: "https://stoka-green.vercel.app/"
  },
  {
    id: "5",
    title: "EduPlatform",
    description: "A cutting-edge frontend for an online learning platform.",
    fullDescription: "A cutting-edge frontend for an online learning platform.",
    image: "/edu.jpg",
    year: 2023,
    client: "",
    tools: ["TypeScript", "Next.js"],
    github: "https://github.com/leandre000/EduPlatform-Frontend",
    live: "https://eduplatform-iota.vercel.app/"
  },
  {
    id: "11",
    title: "Restaurent-Template",
    description: "A sleek, customizable restaurant website template for showcasing menus and reservations.",
    fullDescription: "This modern restaurant template helps food businesses present their brand online with style and functionality.",
    image: "/rest.jpg",
    year: 2024,
    client: "",
    tools: [],
    github: "https://github.com/leandre000/restaurent",
    live: "https://restaurent-lemon.vercel.app/"
  },
  {
    id: "10",
    title: "Website-Template",
    description: "A multi-purpose website template built for startups and professional services.",
    fullDescription: "This template offers an elegant layout for small businesses to establish a strong online presence.",
    image: "/web.webp",
    year: 2024,
    client: "",
    tools: [],
    github: "https://github.com/leandre000/Project-descriptor",
    live: "https://lex-lake.vercel.app/"
  }
];

const caseStudies = [
  {
    id: "1",
    title: "Agura Ticketing App",
    description: "Problem: Event organizers and attendees struggled with manual ticketing and real-time seat management. Solution: A seamless mobile app for booking and managing event tickets, with real-time availability, secure QR access, and analytics.",
    image: "/agura.png",
    contact: "Iamshemaleandre@gmail.com"
  },
  {
    id: "17",
    title: "Hinga AI",
    description: "Problem: Farmers faced crop loss due to late pest/disease detection. Solution: Hinga AI uses computer vision and ML to help farmers identify and manage crop issues early.",
    image: "/hinga.jpg",
    contact: "Iamshemaleandre@gmail.com"
  }
];

const others = [
  {
    id: "17",
    title: "HingaAI",
    description: "Agro_senseai helps farmers manage pests and diseases of crops.",
    github: "https://github.com/leandre000/Hinga-Ai"
  },
  {
    id: "16",
    title: "Genzura",
    description: "Online inventory management system.",
    github: "https://github.com/leandre000/genzura"
  },
  {
    id: "2",
    title: "T-HealthSync",
    description: "Tracks patient behavior and health status, predicts diseases using AI.",
    github: "https://github.com/leandre000/T-HealthSync"
  },
  {
    id: "15",
    title: "NextVibe",
    description: "A next-gen social app for sharing moments and connecting with communities.",
    github: "https://github.com/leandre000/NexVibe"
  },
  {
    id: "13",
    title: "Company_Visitor_Management",
    description: "A secure platform to manage company visitors, logins, and check-outs.",
    github: "https://github.com/leandre000/company_visitor_management"
  }
];

const futureUse = [
  {
    id: "9",
    title: "DevHelper AI",
    description: "A browser-based developer companion that explains, refactors, and debugs code snippets in real-time. To be worked on in the future."
  },
  {
    id: "8",
    title: "SpeakWise",
    description: "AI voice assistant for hands-free task execution. To be worked on in the future."
  },
  {
    id: "7",
    title: "SobanukirwaBot",
    description: "Intelligent chatbot mentor for learners and professionals. To be worked on in the future."
  },
  {
    id: "6",
    title: "GiraSmart Farm",
    description: "AI-powered crop insights and precision agriculture. To be worked on in the future."
  },
  {
    id: "12",
    title: "IntelliCV",
    description: "AI Resume Builder for optimized CVs. To be worked on in the future."
  }
];

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()

  // Find the project in the correct section
  const project = completedProjects.find((p) => p.id === params.id)
    || caseStudies.find((p) => p.id === params.id)
    || others.find((p) => p.id === params.id)
    || futureUse.find((p) => p.id === params.id)

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

  // Completed Projects
  if (completedProjects.find((p) => p.id === params.id)) {
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={`${project.title} preview`} fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 capitalize">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">{project.year}</span>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg mb-4">{project.description}</p>
                <p>{project.fullDescription}</p>
              </div>
              {project.tools && Array.isArray(project.tools) && project.tools.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">{tool}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-2 mt-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-black/80 text-black dark:text-white rounded hover:bg-white hover:text-black hover:underline transition">GitHub</a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition">Live Site</a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  // Case Studies
  if (caseStudies.find((p) => p.id === params.id)) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <Button variant="ghost" className="mb-8 group flex items-center" onClick={() => router.push("/projects")}> <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Projects </Button>
          <div className="max-w-2xl mx-auto bg-white dark:bg-black/80 rounded-xl shadow p-8">
            <Image src={project.image} alt={project.title} width={800} height={400} className="object-cover w-full h-56 rounded mb-6" />
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-black/70 dark:text-white/70 mb-4">{project.description}</p>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Contact for mockups: <a href="mailto:{project.contact}" className="underline">{project.contact}</a></span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Others
  if (others.find((p) => p.id === params.id)) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <Button variant="ghost" className="mb-8 group flex items-center" onClick={() => router.push("/projects")}> <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Projects </Button>
          <div className="max-w-2xl mx-auto bg-white dark:bg-black/80 rounded-xl shadow p-8">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-black/70 dark:text-white/70 mb-4">{project.description}</p>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-black/80 text-black dark:text-white rounded hover:bg-white hover:text-black hover:underline transition">GitHub</a>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Future Use
  if (futureUse.find((p) => p.id === params.id)) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <Button variant="ghost" className="mb-8 group flex items-center" onClick={() => router.push("/projects")}> <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Projects </Button>
          <div className="max-w-2xl mx-auto bg-white dark:bg-black/80 rounded-xl shadow p-8">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-black/70 dark:text-white/70 mb-4">{project.description}</p>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded">To be worked on in the future</span>
          </div>
        </div>
      </div>
    )
  }
}
