"use client"

import { motion } from "framer-motion"

const workExperience = [
  {
    title: "Senior 3D Designer",
    company: "Mashirika Ubumuntu event",
    period: "May 2024 - August 2024",
    description:
      "3D designer for VR traditional culture Gallery. Collaborated with my team to make 3D assets and animations for the gallery.",
    responsibilities: [
      "Create detailed 3D models and environments for the project",
      "Develop texturing and lighting for more appealing presentation",
      "Mentor junior designers and provide technical direction",
    ],
  },
]

const education = [
  {
    degree: "A2 degree",
    institution: "Rwanda Coding Academy",
    period: "2023 - 2026",
    description:
      "I am currently studying at this school, focusing on Software Programming, Embedded Systems, and Cybersecurity. I expect to graduate in 2026.",
  },
  {
    degree: "O level completion certificate",
    institution: "Groupe Scolaire Officiel de Butare",
    period: "2020 - 2023",
    description:
      "I completed my junior secondary studies at this school, from Grade 7 to Grade 9.",
  },
]

// const certifications = [
//   {
//     name: "Certified Substance Designer Professional",
//     issuer: "Adobe",
//     year: "2022",
//   },
//   {
//     name: "Unity Certified 3D Artist",
//     issuer: "Unity Technologies",
//     year: "2021",
//   },
//   {
//     name: "Autodesk Maya Professional Certification",
//     issuer: "Autodesk",
//     year: "2020",
//   },
// ]

export default function ExperiencePageClient() {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              My professional journey and educational background in 3D design
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
              <motion.div
                key={job.company + job.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-16 relative pl-8 border-l-2 border-black/10 dark:border-white/10 last:mb-0"
              >
                <div className="absolute w-4 h-4 bg-black dark:bg-white rounded-full -left-[9px] top-0"></div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-black/5 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution + edu.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 relative pl-8 border-l-2 border-black/10 dark:border-white/10 last:mb-0"
              >
                <div className="absolute w-4 h-4 bg-black dark:bg-white rounded-full -left-[9px] top-0"></div>
                <span className="text-sm font-medium text-black/60 dark:text-white/60">{edu.period}</span>
                <h3 className="text-2xl font-bold mt-1">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-black/80 dark:text-white/80 mb-4">{edu.institution}</h4>
                <p className="text-black/70 dark:text-white/70">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black/20 p-6 rounded-xl border border-black/10 dark:border-white/10"
              >
                <div className="text-3xl font-bold mb-2">{cert.year}</div>
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-black/70 dark:text-white/70 text-sm">Issued by {cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}
