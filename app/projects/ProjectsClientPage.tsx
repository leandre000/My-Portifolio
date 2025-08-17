"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

// 1. Define new arrays for each section
const completedProjects = [
  {
    id: 1,
    title: "ClinixPro",
    description: "A comprehensive hospital management system with patient records, appointment scheduling, medical inventory management, and advanced analytics dashboard.",
    image: "/hospi.png",
    year: 2025,
    github: "https://github.com/leandre000/clinixpro",
    live: "https://clinix-b1b335gka-leandre000s-projects.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Geenzura",
    description: "Advanced inventory management system with real-time tracking, analytics dashboard, seamless integrations, and comprehensive reporting tools.",
    image: "/genzura.png",
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
    year: 2023,
    github: "https://github.com/leandre000/Aguuka",
    live: "https://hrms-frontend-ashen.vercel.app/"
  },
  {
    id: 4,
    title: "Stoka",
    description: "Stoka is an online inventory management system designed to help businesses track stock, sales, and analytics in real time. Features include product management, reporting, and seamless integrations.",
    image: "/blog/stoka-inventory.jpg",
    year: 2025,
    github: "https://github.com/leandre000/stoka",
    live: "https://stoka-green.vercel.app/"
  },
  {
    id: 5,
    title: "EduPlatform",
    description: "A cutting-edge frontend for an online learning platform with modern UI/UX and responsive design.",
    image: "/edu.jpg",
    year: 2023,
    github: "https://github.com/leandre000/EduPlatform-Frontend",
    live: "https://eduplatform-iota.vercel.app/"
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
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Completed Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
            <motion.div
              key={project.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-black border border-black/10 dark:border-white/10"
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                  loading={index === 0 ? undefined : "lazy"}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{project.title}</h3>
                  <p className="text-black/70 dark:text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Site
                      </a>
                    )}
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
