"use client"

import { Download, Mail, Github, MapPin, Calendar, Building2, Award, Code, Shield, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  const skills = [
    { category: "Programming Languages", items: ["JavaScript/TypeScript", "Python", "Java", "HTML/CSS"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Express", "NestJS", "Spring Boot"] },
    { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] }
  ]

  const projects = [
    {
      name: "ClinixPro",
      description: "Hospital Management System",
      tech: "React, Node.js, MongoDB",
      live: "https://clinix-b1b335gka-leandre000s-projects.vercel.app/",
      github: "https://github.com/leandre000/clinixpro"
    },
    {
      name: "Geenzura",
      description: "Inventory Management System",
      tech: "Next.js, TypeScript, Tailwind CSS",
      live: "https://genzura-tau.vercel.app/",
      github: "https://github.com/leandre000/genzura"
    },
    {
      name: "Aguuka",
      description: "AI-Powered MERN App",
      tech: "MERN Stack, AI Integration",
      live: "https://hrms-frontend-ashen.vercel.app/",
      github: "https://github.com/leandre000/Aguuka"
    },
    {
      name: "Stoka",
      description: "Inventory Management",
      tech: "React, Node.js, Express",
      live: "https://stoka-green.vercel.app/",
      github: "https://github.com/leandre000/stoka"
    }
  ]

  const certifications = [
    "Penetration Testing - Advanced",
    "Network Research - Security Methodologies",
    "Linux Fundamentals - System Administration",
    "Python Fundamentals - AI/ML Applications",
    "Cybersecurity Introduction - Security Principles"
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Leandre</h1>
              <h2 className="text-xl font-semibold mb-4">Software Developer & AI Engineer</h2>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Iamshemaleandre@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>github.com/leandre000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>shemaleandre.vercel.app</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kigali, Rwanda</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
                L
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-600" />
            Professional Summary
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Software developer with over 2+ years of experience specializing in AI/ML integration, full-stack web development, and cybersecurity. 
            Recently founded Echo Tech to focus on innovative AI-powered solutions and secure web applications. 
            Passionate about creating user-friendly, scalable solutions that solve real-world problems.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={skillGroup.category}
                className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <Building2 className="h-5 w-5 text-blue-600" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    CEO & Founder - Echo Tech
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Founded technology company focused on AI-powered solutions
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                  Jan 2025 - Present
                </span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>• Lead development team in creating innovative web applications</li>
                <li>• Strategic planning and business development for tech solutions</li>
                <li>• Focus on AI/ML integration and cybersecurity solutions</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Backend Developer - LOXOTECH TECH
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Working on cutting-edge software solutions and backend development
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                  2025 - Present
                </span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>• Full-stack development using modern technologies</li>
                <li>• Collaborating with cross-functional teams</li>
                <li>• Implementing best practices and coding standards</li>
                <li>• Contributing to product architecture and design decisions</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Mobile Developer - AGURA TICKETS
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Developing mobile solutions for event ticket booking and management
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                  June 2025 - Present
                </span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>• Mobile application development for iOS and Android</li>
                <li>• Integration and testing of mobile applications</li>
                <li>• Mentoring junior developers and providing technical guidance</li>
                <li>• Real-time availability and secure access implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            Key Projects
          </h3>
          <div className="grid gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.name}
                className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {project.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                      {project.tech}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={cert}
                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Languages */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    A Level - Software Programming, Embedded Systems, Cybersecurity
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Rwanda Coding Academy (2023 - 2026)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    O Level
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Groupe Scolaire Officiel de Butare (2020 - 2023)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Primary Education
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    LEDUCATEUR (2012 - 2019)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Modern Web & Cloud Technologies
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Self-taught with focus on React, Next.js, AI/ML, and cloud deployment
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                Languages
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">English</span>
                  <span className="text-blue-600 font-semibold">Professional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Kinyarwanda</span>
                  <span className="text-blue-600 font-semibold">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">French</span>
                  <span className="text-blue-600 font-semibold">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="p-8 bg-gray-50 dark:bg-gray-900 text-center">
          <div>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.print()}
            >
              <Download className="h-5 w-5 mr-2" />
              Download/Print Resume
            </Button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
            Use browser print function to save as PDF
          </p>
        </div>
      </div>
    </div>
  )
}
