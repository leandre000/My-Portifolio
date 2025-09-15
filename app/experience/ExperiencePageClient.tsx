"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import PdfPreviewer from "@/components/ui/PdfPreviewer.client"

const workExperience = [
  {
    id: 1,
    title: "Software Developer",
    company: "Echo Solutions Ltd",
    period: "2025 - Present",
    description: "Working as a fullstack developer on multiple projects including Umuhinzilink, Healthlink, and land management systems.",
    responsibilities: [
      "Developed and maintained Umuhinzilink project - a comprehensive digital platform",
      "Worked on Healthlink project - healthcare management and patient tracking system",
      "Built and updated land management system with modern web technologies",
      "Implemented CI/CD pipelines: build, push to main branch, and automated redeployment",
      "Collaborated with cross-functional teams on system architecture and design decisions",
      "Ensured code quality through best practices and comprehensive testing",
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "LOXOTECH TECH",
    period: "2025 - Present",
    description: "Working on cutting-edge software solutions and contributing to innovative projects in a dynamic tech environment.",
    responsibilities: [
      "Backend development using modern technologies",
      "Collaborating with cross-functional teams",
      "Implementing best practices and coding standards",
      "Contributing to product architecture and design decisions",
    ],
  },
  {
    id: 3,
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
    id: 4,
    title: "Software Developer",
    company: "T-HealthSync",
    period: "January 2025 - July",
    description: "Developing a health system that tracks patient behavior and health status.",
    responsibilities: [
      "System integration and development",
      "Data tracking and analysis",
      "Ensuring system reliability and performance",
    ],
  },
  {
    id: 5,
    title: "Fullstack Developer",
    company: "Aguuka",
    period: "2025",
    description: "Built a fullstack MERN app for content creation and task automation.",
    responsibilities: [
      "Frontend and backend development",
      "Content automation features",
      "Task automation implementation",
    ],
  },
  {
    id: 6,
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
    id: 7,
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
    degree: "A Level (SPE)",
    institution: "Rwanda Coding Academy",
    period: "2023 - Present",
    description: "Currently studying Software Programming and Embedded Systems (SPE)."
  },
  {
    degree: "O Level",
    institution: "Groupe Scolaire Officielle de Butare",
    period: "Until 2023",
    description: "Completed O Level at GS Officielle de Butare."
  },
  {
    degree: "Primary",
    institution: "L'EDUCATEUR",
    period: "—",
    description: "Completed primary education at L'EDUCATEUR."
  }
]

const certificates = [
  {
    file: "certificate of network research.pdf",
    label: "Network Research Certificate",
    description: "Advanced networking and research methodologies certification."
  },
  {
    file: "CYBERIUM.pdf",
    label: "Cybersecurity Fundamentals",
    description: "Comprehensive cybersecurity and ethical hacking certification."
  },
  {
    file: "Intro_to_cyber.pdf",
    label: "Introduction to Cybersecurity",
    description: "Foundation course in cybersecurity principles and practices."
  },
  {
    file: "Linux_fundamentals.pdf",
    label: "Linux Fundamentals",
    description: "Essential Linux system administration and command line skills."
  },
  {
    file: "Network Research.pdf",
    label: "Advanced Network Research",
    description: "Specialized network analysis and research techniques."
  },
  {
    file: "pt.pdf",
    label: "Penetration Testing",
    description: "Professional penetration testing and security assessment."
  },
  {
    file: "Python_fundamentals.pdf",
    label: "Python Programming",
    description: "Core Python programming and development fundamentals."
  }
]

export default function ExperiencePageClient() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          My Experience
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my professional journey, educational background, and technical certifications.
        </p>
      </div>

      {/* Work Experience */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Work Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My professional journey in software development and technology.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {workExperience.map((job, index) => (
            <div
              key={job.company + job.period}
              className="mb-16 relative pl-10 border-l-4 border-emerald-200 dark:border-emerald-800 last:mb-0 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors duration-300"
            >
              <div className="absolute w-5 h-5 bg-emerald-600 dark:bg-emerald-400 rounded-full -left-[10px] top-0"></div>
              <span className="text-lg font-medium text-slate-500 dark:text-slate-400">{job.period}</span>
              <h3 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">{job.title}</h3>
              <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4">{job.company}</h4>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{job.description}</p>
              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Key Responsibilities:</h5>
                <ul className="list-disc pl-6 space-y-2 text-lg text-slate-600 dark:text-slate-400">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i} className="leading-relaxed">{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Education</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My academic background and educational achievements.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.institution + edu.period}
              className="mb-12 relative pl-10 border-l-4 border-emerald-200 dark:border-emerald-800 last:mb-0 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors duration-300"
            >
              <div className="absolute w-5 h-5 bg-emerald-600 dark:bg-emerald-400 rounded-full -left-[10px] top-0"></div>
              <span className="text-lg font-medium text-slate-500 dark:text-slate-400">{edu.period}</span>
              <h3 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">{edu.degree}</h3>
              <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4">{edu.institution}</h4>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Certifications</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Professional certifications that validate my technical skills and expertise.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Carousel>
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem key={cert.file} className="flex justify-center">
                  <Dialog>
                    <div className="card p-8 flex flex-col items-center w-full max-w-md hover:scale-105 transition-all duration-300">
                      <div className="text-4xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">{index + 1}</div>
                      <h3 className="text-xl font-semibold mb-3 text-center text-slate-900 dark:text-white">{cert.label}</h3>
                      <div className="text-slate-600 dark:text-slate-400 text-lg mb-6 text-center min-h-[60px] leading-relaxed">{cert.description}</div>
                      <div className="flex gap-3 w-full">
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-1/2 text-lg py-3">Preview</Button>
                        </DialogTrigger>
                        <a href={`/certificates/${encodeURIComponent(cert.file)}`} download target="_blank" rel="noopener noreferrer" className="w-1/2">
                          <Button variant="default" className="w-full text-lg py-3">Download</Button>
                        </a>
                      </div>
                      <DialogContent className="max-w-4xl w-full h-[80vh] flex flex-col">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{cert.label}</DialogTitle>
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
      </section>
    </div>
  )
}
