"use client"

const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "LOXOTECH TECH",
    period: "2025 - Present",
    description: "Working on cutting-edge software solutions and contributing to innovative projects in a dynamic tech environment.",
    responsibilities: [
      "Full-stack development using modern technologies",
      "Collaborating with cross-functional teams",
      "Implementing best practices and coding standards",
      "Contributing to product architecture and design decisions",
    ],
  },
  {
    id: 2,
    title: "Software Developer",
    company: "AGURA TICKETS",
    period: "June 2025 - Present",
    description: "Developing a seamless mobile solution for booking and managing event tickets with real-time availability and secure access.",
    responsibilities: [
      "Mobile application development",
      "Integration and testing",
      "Mentoring junior web developers and providing technical guidance",
    ],
  },
  {
    id: 3,
    title: "AI Enthusiast",
    company: "T-HealthSync",
    period: "January 2025 - July",
    description: "Developing a health system that tracks patient behavior and health status, and predicts diseases using AI.",
    responsibilities: [
      "AI model integration",
      "Data tracking and analysis",
      "Ensuring system reliability and performance",
    ],
  },
  {
    id: 4,
    title: "Fullstack Developer",
    company: "Aguuka",
    period: "2025",
    description: "Built a fullstack MERN app with AI integration for smarter content creation and task automation.",
    responsibilities: [
      "Frontend and backend development",
      "AI integration for content automation",
      "Task automation implementation",
    ],
  },
  {
    id: 5,
    title: "Community Services Volunteer (Excel & Linux)",
    company: "Various Community Projects",
    period: "2020 - Present",
    description: "Utilized Excel and Linux to support data management, automation, and digital literacy in community service initiatives.",
    responsibilities: [
      "Organized and analyzed community data using Excel",
      "Automated repetitive tasks and improved workflows with Linux scripting",
      "Provided digital literacy training on Linux systems",
      "Supported local organizations with open-source solutions"
    ],
  },
  {
    id: 6,
    title: "Fullstack & Cloud Developer (Modern Stacks)",
    company: "Freelance & Open Source Projects",
    period: "2022 - Present",
    description: "Designed and built scalable web apps, APIs, and SaaS platforms using modern stacks: React, Vue.js, Next.js, NestJS, Express, GraphQL, Appwrite, Docker, Vercel, Render, and more.",
    responsibilities: [
      "Developed and deployed fullstack apps with React, Vue.js, and Next.js",
      "Built secure APIs with Express, NestJS, GraphQL, and Appwrite",
      "Implemented authentication with passport.js and modern auth flows",
      "Containerized apps with Docker and automated CI/CD pipelines",
      "Deployed to Vercel, Render, and cloud platforms",
      "Integrated shadcn/ui, HeroUI, and Tailwind for beautiful UIs",
      "Worked with TypeORM, PostgreSQL, and cloud databases",
      "Built and maintained embedded systems and IoT solutions"
    ],
  },
]

const education = [
  {
    degree: "A Level",
    institution: "Rwanda Coding Academy",
    period: "2023 - 2026",
    description:
      "Currently studying Software Programming, Embedded Systems, and Cybersecurity. Expected to graduate in 2026.",
  },
  {
    degree: "O Level",
    institution: "Groupe Scolaire Officiel de Butare",
    period: "2020 - 2023",
    description:
      "Completed junior secondary studies from Grade 7 to Grade 9.",
  },
  {
    degree: "Primary Education",
    institution: "LEDUCATEUR",
    period: "2012 - 2019",
    description:
      "Completed primary education from Grade 1 to Grade 6.",
  },
  {
    degree: "Modern Web & Cloud Technologies (Self-Taught)",
    institution: "Online & Community Learning",
    period: "2021 - Present",
    description:
      "Completed advanced courses and hands-on projects in fullstack development, cloud deployment, DevOps, and embedded systems. Specialized in React, Vue.js, Next.js, NestJS, Docker, Vercel, Render, and modern backend technologies.",
  },
]

// List of certificate files in public/certificates
const certificates = [
  {
    file: "Intro_to_cyber.pdf",
    label: "Introduction to Cybersecurity",
    description: "Covers the basics of cybersecurity principles and practices."
  },
  {
    file: "Penetration_testing.pdf",
    label: "Penetration Testing",
    description: "Certificate for hands-on penetration testing skills."
  },
  {
    file: "Network Research.pdf",
    label: "Network Research",
    description: "Awarded for research and analysis in computer networks."
  },
  {
    file: "Linux_fundamentals.pdf",
    label: "Linux Fundamentals",
    description: "Demonstrates proficiency in Linux operating systems."
  },
  {
    file: "Python_fundamentals.pdf",
    label: "Python Fundamentals",
    description: "Certificate for foundational Python programming skills."
  },
]

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import dynamic from "next/dynamic"
const PdfPreviewer = dynamic(() => import("@/components/ui/PdfPreviewer.client"), { ssr: false })

export default function ExperiencePageClient() {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              My professional journey and educational background in Web Development 
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>

          <div className="max-w-4xl mx-auto">
            {workExperience.map((job, index) => (
              <div
                key={job.company + job.period}
                className="mb-16 relative pl-8 border-l-2 border-blue-200 dark:border-blue-800 last:mb-0 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-300"
              >
                <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                <span className="text-sm font-medium text-black/60 dark:text-white/60">{job.period}</span>
                <h3 className="text-2xl font-bold mt-1">{job.title}</h3>
                <h4 className="text-lg font-medium text-black/80 dark:text-white/80 mb-4">{job.company}</h4>
                <p className="text-black/70 dark:text-white/70 mb-4">{job.description}</p>
                <div className="mt-4">
                  <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-black/70 dark:text-white/70">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={edu.institution + edu.period}
                className="mb-12 relative pl-8 border-l-2 border-blue-200 dark:border-blue-800 last:mb-0 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-300"
              >
                <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                <span className="text-sm font-medium text-black/60 dark:text-white/60">{edu.period}</span>
                <h3 className="text-2xl font-bold mt-1">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-black/80 dark:text-white/80 mb-4">{edu.institution}</h4>
                <p className="text-black/70 dark:text-white/70">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="max-w-3xl mx-auto relative">
            <Carousel>
              <CarouselContent>
                {certificates.map((cert, index) => (
                  <CarouselItem key={cert.file} className="flex justify-center">
                    <Dialog>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center w-full max-w-md hover:shadow-lg transition-shadow duration-300">
                        <div className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">{index + 1}</div>
                        <h3 className="text-lg font-semibold mb-2 text-center">{cert.label}</h3>
                        <div className="text-black/70 dark:text-white/70 text-sm mb-4 text-center min-h-[48px]">{cert.description}</div>
                        <div className="flex gap-2 w-full">
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-1/2">Preview</Button>
                          </DialogTrigger>
                          <a href={`/certificates/${encodeURIComponent(cert.file)}`} download target="_blank" rel="noopener noreferrer" className="w-1/2">
                            <Button variant="default" className="w-full">Download</Button>
                          </a>
                        </div>
                        <DialogContent className="max-w-3xl w-full h-[80vh] flex flex-col">
                          <DialogHeader>
                            <DialogTitle>{cert.label}</DialogTitle>
                          </DialogHeader>
                          <PdfPreviewer url={`/certificates/${encodeURIComponent(cert.file)}`} className="flex-1 w-full rounded-lg border" />
                        </DialogContent>
                      </div>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  )
}
