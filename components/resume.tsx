"use client"

import { Download, Building2, Award, Code, Shield, Globe, Users } from "lucide-react"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Resume() {
  const skills = [
    { category: "Programming Languages", items: ["JavaScript/TypeScript", "Python", "Java", "HTML/CSS"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Express", "NestJS", "Spring Boot"] },
    { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] }
  ]

  const softSkills = [
    { category: "Teamwork & Collaboration", items: ["Team Leadership", "Cross-functional Coordination", "Mentoring Junior Developers", "Agile/Scrum Methodology"] },
    { category: "Communication Skills", items: ["Technical Documentation", "Client Presentations", "Stakeholder Communication", "Clear Code Documentation"] },
    { category: "Problem Solving", items: ["Critical Thinking", "Analytical Approach", "Creative Solutions", "System Design"] },
    { category: "Adaptability", items: ["Fast Learning", "Technology Adoption", "Change Management", "Continuous Improvement"] }
  ]

  const projects = [
    {
      name: "ClinixPro",
      description: "Hospital Management System",
      tech: "React, Node.js, MongoDB",
      live: "https://clinix-pro-iota.vercel.app/",
      github: "https://github.com/leandre000/clinixpro"
    },
    {
      name: "Tale-Connect",
      description: "Talent Management Platform",
      tech: "Next.js, TypeScript, Tailwind CSS",
      live: "https://talent-connect-app.vercel.app/",
      github: "https://github.com/leandre000/talent-connect"
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
      description: "MERN Stack Application",
      tech: "MERN Stack, Full-stack Development",
      live: "https://aguka-one.vercel.app/",
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
    "Python Fundamentals - Programming",
    "Cybersecurity Introduction - Security Principles"
  ]

  const handleGoogleDriveRedirect = () => {
    // Actual Google Drive resume link
    const resumeUrl = "https://drive.google.com/file/d/1892EVxhOVnGOAufcVB6M9tzhUqiseaEj/view?usp=drive_link"
    if (typeof window !== 'undefined') {
      window.open(resumeUrl, "_blank")
    }
  }

  const handleDirectDownload = () => {
    // Direct PDF download
    const pdfUrl = "/cv.pdf"
    if (typeof window !== 'undefined') {
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = 'Leandre_Shema_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="min-h-screen bg-white py-8 print:py-0">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none" role="main" aria-label="Leandre Shema's Resume">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 print:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">Leandre Shema</h1>
              <h2 className="text-xl font-semibold mb-4">Software Developer</h2>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:email" className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all">Iamshemaleandre@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:github" className="h-4 w-4 flex-shrink-0" />
                  <span>github.com/leandre000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 flex-shrink-0" />
                  <span>shemaleandre.vercel.app</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:map-marker" className="h-4 w-4 flex-shrink-0" />
                  <span>Kigali, Rwanda</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 relative">
                <Image
                  src="/me.jpg"
                  alt="Leandre Shema - Software Developer"
                  fill
                  className="rounded-full object-cover border-4 border-white/30 shadow-lg"
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-8 print:p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-600" />
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Software developer with over 3+ years of experience specializing in full-stack web development and cybersecurity. 
            Currently working at Echo Solutions Ltd to focus on innovative web solutions and secure applications. 
            Passionate about creating user-friendly, scalable solutions that solve real-world problems.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="p-8 print:p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={skillGroup.category}
                className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="p-8 print:p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Users className="h-5 w-5 text-green-600" />
            Soft Skills & Professional Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skillGroup, idx) => (
              <div
                key={skillGroup.category}
                className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
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
        <div className="p-8 print:p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-blue-600" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Software Developer - Echo Solutions Ltd
                  </h4>
                  <p className="text-gray-600">
                    Working as a fullstack developer building web applications
                  </p>
                </div>
                <span className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
                  Jan 2025 - Present
                </span>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Lead development team in creating innovative web applications</li>
                <li>• Strategic planning and business development for tech solutions</li>
                <li>• Focus on full-stack development and cybersecurity solutions</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Backend Developer - LOXOTECH TECH
                  </h4>
                  <p className="text-gray-600">
                    Working on cutting-edge software solutions and backend development
                  </p>
                </div>
                <span className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
                  2025 - Present
                </span>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Backend development using modern technologies</li>
                <li>• Collaborating with cross-functional teams</li>
                <li>• Implementing best practices and coding standards</li>
                <li>• Contributing to product architecture and design decisions</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Mobile Developer - AGURA TICKETS
                  </h4>
                  <p className="text-gray-600">
                    Developing mobile solutions for event ticket booking and management
                  </p>
                </div>
                <span className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
                  June 2025 - Present
                </span>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Mobile application development for iOS and Android</li>
                <li>• Integration and testing of mobile applications</li>
                <li>• Mentoring junior developers and providing technical guidance</li>
                <li>• Real-time availability and secure access implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="p-8 print:p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            Key Projects
          </h3>
          <div className="grid gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.name}
                className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {project.name}
                    </h4>
                    <p className="text-gray-600">
                      {project.description}
                    </p>
                    <p className="text-sm text-blue-600 mt-1">
                      {project.tech}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full hover:bg-green-200 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="p-8 print:p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={cert}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="p-8 print:p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-600" />
            Education
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800">
                A Level (SPE) - Software Programming & Embedded Systems
              </h4>
              <p className="text-gray-600 text-sm">
                Rwanda Coding Academy (2023 - Present)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                O Level
              </h4>
              <p className="text-gray-600 text-sm">
                Groupe Scolaire Officielle de Butare (Until 2023)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Primary Education
              </h4>
              <p className="text-gray-600 text-sm">
                L'EDUCATEUR
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Modern Web & Cloud Technologies
              </h4>
              <p className="text-gray-600 text-sm">
                Self-taught with focus on React, Next.js, and cloud deployment
              </p>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="p-8 bg-gray-50 text-center">
          <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center justify-center gap-2">
            <Download className="h-5 w-5 text-blue-600" />
            Download Resume
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleDirectDownload}
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleGoogleDriveRedirect}
            >
              <Globe className="h-5 w-5 mr-2" />
              View on Google Drive
            </Button>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Choose your preferred method to access the full resume
          </p>
        </div>
      </div>
    </div>
  )
}
