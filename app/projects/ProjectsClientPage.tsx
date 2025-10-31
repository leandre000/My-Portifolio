"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

// 1. Define new arrays for each section
const completedProjects = [
  // Flagship Enterprise Projects
  {
    id: 1,
    title: "Urukundo - Echo Solution Charity Platform",
    description: "Transformative charity and partnership platform empowering Echo Solution members and global partners to create meaningful social impact. Comprehensive donation management system featuring secure payment processing, transparent fund tracking, project showcases, and community engagement tools. Bridging the gap between generous hearts and those in need, fostering sustainable development and social change across communities.",
    image: "/urukundo.png",
    year: 2025,
    github: "https://github.com/leandre000/urukundo-charity",
    live: "https://urukundo.echo-solution.com/",
    featured: true,
    category: "Social Impact"
  },
  {
    id: 2,
    title: "Car Connect Rwanda",
    description: "Revolutionary automotive marketplace transforming Rwanda's car industry. Full-stack platform featuring advanced search algorithms, real-time inventory management, secure payment integration, and comprehensive dealer dashboard. Built with modern tech stack delivering exceptional user experience and driving digital transformation in East Africa's automotive sector.",
    image: "/car-connect.png",
    year: 2025,
    github: "https://github.com/leandre000/car-connect",
    live: "https://www.car-connect.rw/",
    featured: true,
    category: "Enterprise Marketplace"
  },
  {
    id: 3,
    title: "Android APK Builder",
    description: "Revolutionary cloud-based Android APK compilation platform. Advanced web-to-mobile converter featuring intelligent code optimization, automated build processes, and seamless deployment pipeline. Empowers developers and businesses to transform web applications into native Android apps with zero configuration, reducing development time by 80% and democratizing mobile app creation.",
    image: "/apk-builder.png",
    year: 2025,
    github: "https://github.com/leandre000/android-apk-builder",
    live: "https://android-apk-builder.vercel.app/",
    featured: true,
    category: "Mobile Development Platform"
  },
  // Additional Featured Projects
  {
    id: 4,
    title: "Stoka (SaaS)",
    description: "SaaS platform enabling product- and service-based businesses to manage inventory, suppliers, purchases, and reports with real‑time analytics. Multi-tenant ready, role-based access, beautiful dashboards, and exports.",
    image: "/blog/stoka-inventory.jpg",
    year: 2025,
    github: "https://github.com/leandre000/stoka",
    live: "https://stoka-green.vercel.app/",
    featured: true,
    category: "SaaS Platform"
  },
  {
    id: 5,
    title: "ClinixPro",
    description: "A comprehensive hospital management system with patient records, appointment scheduling, medical inventory management, and advanced analytics dashboard.",
    image: "/hospi.png",
    year: 2025,
    github: "https://github.com/leandre000/clinixpro",
    live: "https://clinix-pro-iota.vercel.app/",
    featured: true,
    category: "Healthcare Technology"
  },
  {
    id: 6,
    title: "Talent-Connect",
    description: "A modern talent management platform connecting skilled professionals with opportunities, featuring advanced matching algorithms and seamless user experience.",
    image: "/tale.png",
    year: 2025,
    github: "https://github.com/leandre000/talent-connect",
    live: "https://talent-connect-app.vercel.app/",
    featured: true,
    category: "HR Technology"
  },
  {
    id: 7,
    title: "Geenzura",
    description: "Advanced inventory management system with real-time tracking, analytics dashboard, seamless integrations, and comprehensive reporting tools.",
    image: "/genzura.png",
    year: 2025,
    github: "https://github.com/leandre000/genzura",
    live: "https://genzura-tau.vercel.app/",
    featured: true,
    category: "Inventory Management"
  },
  {
    id: 8,
    title: "Aguuka",
    description: "Aguuka is a fullstack MERN app with AI integration for smarter content creation and task automation.",
    image: "/aguka.jpg",
    year: 2023,
    github: "https://github.com/leandre000/Aguuka",
    live: "https://aguka-one.vercel.app/",
    featured: true,
    category: "AI Technology"
  },
  {
    id: 9,
    title: "EduPlatform",
    description: "A cutting-edge frontend for an online learning platform with modern UI/UX and responsive design.",
    image: "/edu.jpg",
    year: 2023,
    github: "https://github.com/leandre000/EduPlatform-Frontend",
    live: "https://eduplatform-iota.vercel.app/",
    featured: true,
    category: "Education Technology"
  }
];

const caseStudies = [
  {
    id: 1,
    title: "Agura Ticketing App",
    description: "Problem: Event organizers and attendees struggled with manual ticketing and real-time seat management. Solution: A seamless mobile app for booking and managing event tickets, with real-time availability, secure QR access, and analytics. For mockups or collaboration, contact: Iamshemaleandre@gmail.com.",
    image: "/agura.png"
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
  }
];

const futureUse = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Advanced analytics platform with machine learning capabilities for business intelligence and predictive modeling."
  },
  {
    id: 2,
    title: "Blockchain Supply Chain Solution",
    description: "Transparent and secure supply chain management system using blockchain technology for traceability and authenticity."
  },
  {
    id: 3,
    title: "IoT Smart Home Hub",
    description: "Centralized smart home management system with IoT device integration and AI-powered automation."
  }
];

export default function ProjectsClientPage() {
  const [activeTab, setActiveTab] = useState("completed")
  const completedRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const othersRef = useRef<HTMLDivElement>(null)
  const futureRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Explore my portfolio of impactful projects that showcase my skills in full-stack development, 
          AI integration, and modern web technologies.
        </p>
      </div>

      {/* Navigation Tabs (Sticky) */}
      <div className="sticky top-20 z-30 bg-white/80 dark:bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur flex flex-wrap justify-center gap-4 mb-16 py-4 border-b border-slate-200/70 dark:border-slate-800/70">
        <button
          onClick={() => scrollToSection(completedRef)}
          className="px-6 py-3 text-lg font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Featured Projects
        </button>
        <button
          onClick={() => scrollToSection(caseStudiesRef)}
          className="px-6 py-3 text-lg font-semibold rounded-lg bg-slate-600 text-white hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Case Studies
        </button>
        <button
          onClick={() => scrollToSection(othersRef)}
          className="px-6 py-3 text-lg font-semibold rounded-lg bg-slate-600 text-white hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Other Projects
        </button>
        <button
          onClick={() => scrollToSection(futureRef)}
          className="px-6 py-3 text-lg font-semibold rounded-lg bg-slate-600 text-white hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Future Projects
        </button>
      </div>

      {/* Featured Projects */}
      <section ref={completedRef} id="completed-projects" className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            These are my most impactful and technically advanced projects that demonstrate my full-stack capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {completedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-56 md:h-64 rounded-lg"
                  quality={95}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <span className="text-lg text-slate-500 dark:text-slate-400 font-medium">{project.year}</span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-base font-semibold bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-base font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section ref={caseStudiesRef} id="case-studies" className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Case Studies</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            In-depth analysis of complex problems and innovative solutions I've developed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="card p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={study.image}
                alt={study.title}
                width={600}
                height={400}
                className="object-cover w-full h-48 rounded-lg mb-6"
                loading={index === 0 ? undefined : "lazy"}
              />
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">{study.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Others */}
      <section ref={othersRef} id="others" className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Other Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Additional projects that showcase my diverse technical skills and interests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 hover:scale-105 transition-all duration-300 block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>
              <span className="inline-block px-4 py-2 text-base font-semibold bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition-all duration-200">
                View on GitHub
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Future Use */}
      <section ref={futureRef} id="future-use" className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Future Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Exciting projects I'm planning to work on in the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureUse.map((project, index) => (
            <motion.div
              key={project.id}
              className="card p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>
              <span className="inline-block px-4 py-2 text-base font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg">
                Coming Soon
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
