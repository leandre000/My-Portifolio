"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TechIcon } from "@/components/tech-icons"

// Define grouped tech expertise arrays as described
const techGroups = [
  {
    group: "AI & Machine Learning",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning"],
    icon: "🤖",
    color: "from-purple-500 to-pink-500"
  },
  {
    group: "Web Development",
    items: ["React", "React Query", "Next.js", "Spring Boot", "Express", "NestJS", "Node.js", "TypeScript"],
    icon: "🌐",
    color: "from-blue-500 to-cyan-500"
  },
  {
    group: "Project Management",
    items: ["Agile", "Scrum", "Kanban", "JIRA", "Git", "CI/CD", "DevOps"],
    icon: "📊",
    color: "from-green-500 to-emerald-500"
  },
  {
    group: "Mobile Development",
    items: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"],
    icon: "📱",
    color: "from-orange-500 to-red-500"
  },
  {
    group: "Design & Creative",
    items: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping", "Design Systems"],
    icon: "🎨",
    color: "from-pink-500 to-rose-500"
  },
  {
    group: "Cybersecurity",
    items: ["Penetration Testing", "Network Security", "Linux", "Ethical Hacking", "Security Audits"],
    icon: "🔒",
    color: "from-red-500 to-pink-500"
  }
];

export default function TechStackPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-neutral-900 dark:to-black">
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
              Tech Expertise
            </h2>
            <p className="text-black/70 dark:text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
              With over 2+ years of experience in software development and AI, I've mastered a comprehensive tech stack that enables me to build innovative, scalable solutions. My expertise spans from frontend frameworks to AI/ML technologies, allowing me to create cutting-edge applications that solve real-world problems.
            </p>
          </motion.div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techGroups.map((group, idx) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white dark:bg-black/20 p-6 rounded-2xl border border-black/10 dark:border-white/10 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
            >
              {/* Icon Header */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${group.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {group.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-4 tracking-wide text-center font-sans text-gray-900 dark:text-white">
                {group.group}
              </h3>
              
              <ul className="list-none space-y-2 w-full text-center">
                {group.items.map((item, itemIdx) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + itemIdx * 0.05 }}
                    viewport={{ once: true }}
                    className="text-sm font-medium text-gray-800 dark:text-gray-100 py-2 px-3 rounded-lg transition-all duration-200 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-black/10 dark:to-black/20 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 hover:scale-105 cursor-default"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/tech-stack">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="rounded-full px-8 py-4 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Full Tech Stack
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}
