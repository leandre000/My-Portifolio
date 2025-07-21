"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

// 1. Define new arrays for each section
const completedProjects = [
  {
    id: 1,
    title: "Aguuka",
    description: "Aguuka is a fullstack MERN app with AI integration for smarter content creation and task automation.",
    image: "/aguka.jpg",
    year: 2023,
    github: "https://github.com/leandre000/Aguuka",
    live: "https://hrms-frontend-ashen.vercel.app/"
  },
  {
    id: 2,
    title: "Stoka",
    description: "Stoka is an online inventory management system designed to help businesses track stock, sales, and analytics in real time. Features include product management, reporting, and seamless integrations.",
    image: "/blog/stoka-inventory.jpg",
    year: 2025,
    github: "https://github.com/leandre000/stoka",
    live: "https://stoka-green.vercel.app/"
  },
  {
    id: 3,
    title: "EduPlatform",
    description: "A cutting-edge frontend for an online learning platform.",
    image: "/edu.jpg",
    year: 2023,
    github: "https://github.com/leandre000/EduPlatform-Frontend",
    live: "https://eduplatform-iota.vercel.app/"
  },
  {
    id: 4,
    title: "Restaurent-Template",
    description: "A sleek, customizable restaurant website template for showcasing menus and reservations.",
    image: "/rest.jpg",
    year: 2024,
    github: "https://github.com/leandre000/restaurent",
    live: "https://restaurent-lemon.vercel.app/"
  },
  {
    id: 5,
    title: "Website-Template",
    description: "A multi-purpose website template built for startups and professional services.",
    image: "/web.webp",
    year: 2024,
    github: "https://github.com/leandre000/Project-descriptor",
    live: "https://lex-lake.vercel.app/"
  }
];

const caseStudies = [
  {
    id: 1,
    title: "Agura Ticketing App",
    description: "Problem: Event organizers and attendees struggled with manual ticketing and real-time seat management. Solution: A seamless mobile app for booking and managing event tickets, with real-time availability, secure QR access, and analytics. For mockups or collaboration, contact: Iamshemaleandre@gmail.com.",
    image: "/agura.avif"
  },
  {
    id: 2,
    title: "Hinga AI",
    description: "Problem: Farmers faced crop loss due to late pest/disease detection. Solution: Hinga AI uses computer vision and ML to help farmers identify and manage crop issues early. For solution details or mockups, contact: Iamshemaleandre@gmail.com.",
    image: "/hinga.jpg"
  }
];

const others = [
  {
    id: 1,
    title: "HingaAI",
    description: "Agro_senseai helps farmers manage pests and diseases of crops.",
    github: "https://github.com/leandre000/Hinga-Ai"
  },
  {
    id: 2,
    title: "Genzura",
    description: "Online inventory management system.",
    github: "https://github.com/leandre000/genzura"
  },
  {
    id: 3,
    title: "T-HealthSync",
    description: "Tracks patient behavior and health status, predicts diseases using AI.",
    github: "https://github.com/leandre000/T-HealthSync"
  },
  {
    id: 4,
    title: "NextVibe",
    description: "A next-gen social app for sharing moments and connecting with communities.",
    github: "https://github.com/leandre000/NexVibe"
  },
  {
    id: 5,
    title: "Company_Visitor_Management",
    description: "A secure platform to manage company visitors, logins, and check-outs.",
    github: "https://github.com/leandre000/company_visitor_management"
  }
];

const futureUse = [
  {
    id: 1,
    title: "DevHelper AI",
    description: "A browser-based developer companion that explains, refactors, and debugs code snippets in real-time. To be worked on in the future."
  },
  {
    id: 2,
    title: "SpeakWise",
    description: "AI voice assistant for hands-free task execution. To be worked on in the future."
  },
  {
    id: 3,
    title: "SobanukirwaBot",
    description: "Intelligent chatbot mentor for learners and professionals. To be worked on in the future."
  },
  {
    id: 4,
    title: "GiraSmart Farm",
    description: "AI-powered crop insights and precision agriculture. To be worked on in the future."
  },
  {
    id: 5,
    title: "IntelliCV",
    description: "AI Resume Builder for optimized CVs. To be worked on in the future."
  }
];

export default function ProjectsClientPage() {
  const [activeTab, setActiveTab] = useState("completed")
  const completedRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const othersRef = useRef<HTMLDivElement>(null)
  const futureRef = useRef<HTMLDivElement>(null)

  const handleTabClick = (tab: string, ref: React.RefObject<HTMLDivElement>) => {
    setActiveTab(tab)
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-black/70 dark:text-white/70">
            Explore my portfolio of impactful, real-world projects.
          </p>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="sticky top-0 z-40 bg-white dark:bg-black/90 shadow flex justify-center gap-4 py-3 mb-8">
        <Button
          variant={activeTab === "completed" ? "default" : "ghost"}
          onClick={() => handleTabClick("completed", completedRef)}
          className={activeTab === "completed" ? "font-bold" : ""}
        >
          Completed Projects
        </Button>
        <Button
          variant={activeTab === "case" ? "default" : "ghost"}
          onClick={() => handleTabClick("case", caseStudiesRef)}
          className={activeTab === "case" ? "font-bold" : ""}
        >
          Case Studies
        </Button>
        <Button
          variant={activeTab === "others" ? "default" : "ghost"}
          onClick={() => handleTabClick("others", othersRef)}
          className={activeTab === "others" ? "font-bold" : ""}
        >
          Others
        </Button>
            <Button
          variant={activeTab === "future" ? "default" : "ghost"}
          onClick={() => handleTabClick("future", futureRef)}
          className={activeTab === "future" ? "font-bold" : ""}
        >
          Future Use
            </Button>
        </div>

      {/* Completed Projects */}
      <section ref={completedRef} id="completed-projects" className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Completed Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
            <motion.div
              key={project.id}
                className="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white dark:bg-black border border-black/10 dark:border-white/10"
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  loading={index === 0 ? undefined : "lazy"}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-black/70 dark:text-white/70 mb-4">{project.description}</p>
                  <div className="flex gap-2">
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
                      className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition opacity-0 group-hover:opacity-100"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
                  ))}
                </div>
              </div>
      </section>

      {/* Case Studies */}
      <section ref={caseStudiesRef} id="case-studies" className="py-12 bg-gray-50 dark:bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="rounded-lg overflow-hidden shadow bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 flex flex-col"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-40 mb-4"
                  loading={index === 0 ? undefined : "lazy"}
                />
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-black/70 dark:text-white/70 mb-2">{study.description}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Others */}
      <section ref={othersRef} id="others" className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Others</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((project, index) => (
              <a
                key={project.id}
                href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 hover:shadow-lg transition-shadow"
                  >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-black/70 dark:text-white/70 mb-2">{project.description}</p>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-black/80 text-black dark:text-white rounded hover:bg-white hover:text-black hover:underline transition">
                    GitHub
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Future Use */}
      <section ref={futureRef} id="future-use" className="py-12 bg-gray-50 dark:bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Future Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureUse.map((project, index) => (
              <div
                key={project.id}
                className="rounded-lg overflow-hidden shadow bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-black/70 dark:text-white/70 mb-2">{project.description}</p>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded">
                  To be worked on in the future
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
