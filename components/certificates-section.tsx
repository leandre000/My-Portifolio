"use client"

import { Download, ExternalLink, Shield, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    id: 1,
    title: "Penetration Testing",
    description: "Advanced penetration testing certification covering ethical hacking, vulnerability assessment, and security auditing techniques.",
    file: "/certificates/pt.pdf",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    featured: true
  },
  {
    id: 2,
    title: "Network Research",
    description: "Comprehensive network security and research methodologies for identifying and mitigating network vulnerabilities.",
    file: "/certificates/Network Research.pdf",
    icon: Zap,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Linux Fundamentals",
    description: "Core Linux administration skills including system management, security, and command-line proficiency.",
    file: "/certificates/Linux_fundamentals.pdf",
    icon: Award,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Python Fundamentals",
    description: "Python programming fundamentals with focus on automation, data processing, and AI/ML applications.",
    file: "/certificates/Python_fundamentals.pdf",
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 5,
    title: "Cybersecurity Introduction",
    description: "Introduction to cybersecurity principles, threat modeling, and security best practices.",
    file: "/certificates/Intro_to_cyber.pdf",
    icon: Shield,
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 6,
    title: "CYBERIUM",
    description: "Advanced cybersecurity and ethical hacking certification covering comprehensive security methodologies.",
    file: "/certificates/CYBERIUM.pdf",
    icon: Shield,
    color: "from-red-600 to-pink-600"
  }
]

export default function CertificatesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Professional Certifications
            </h2>
            <p className="text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              Validated expertise through industry-recognized certifications in cybersecurity, penetration testing, and technical skills.
            </p>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, idx) => {
            const IconComponent = cert.icon
            return (
              <div
                key={cert.id}
                className={`group relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  cert.featured ? 'ring-2 ring-yellow-400/50' : ''
                }`}
              >
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-bold bg-yellow-500 text-white shadow-lg">
                      ⭐ Featured Certification
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{cert.title}</h3>
                <p className="text-black/70 dark:text-white/70 mb-6 leading-relaxed">{cert.description}</p>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View
                    </Button>
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="flex-1"
                  >
                    <Button className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Ready to Validate Your Skills?
            </h3>
            <p className="text-black/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
              These certifications demonstrate my commitment to continuous learning and professional development in the ever-evolving tech landscape.
            </p>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
