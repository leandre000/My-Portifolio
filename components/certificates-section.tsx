"use client"

import { motion } from "framer-motion"
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-neutral-900 dark:to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Professional Certifications
            </h2>
            <p className="text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              Validated expertise through industry-recognized certifications in cybersecurity, penetration testing, and technical skills.
            </p>
          </motion.div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, idx) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative bg-white dark:bg-black/20 p-6 rounded-2xl border border-black/10 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm ${
                  cert.featured ? 'ring-2 ring-yellow-400/50' : ''
                }`}
              >
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                      ⭐ Featured Certification
                    </span>
                  </div>
                )}

                {/* Icon Header */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 mb-6 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Download Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Download className="h-4 w-4" />
                    View Certificate
                  </a>
                </motion.div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Ready to Validate Your Skills?
            </h3>
            <p className="text-black/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
              These certifications demonstrate my commitment to continuous learning and professional development in cybersecurity and technology.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="rounded-full px-8 py-4 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download All Certificates
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
