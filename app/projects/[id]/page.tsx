"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ModelViewer from "@/components/model-viewer"
import LoadingAnimation from "@/components/loading-animation"

// Mock project data - in a real app, this would come from an API or database
const projects = [
  {
    id: "1",
    title: "Futuristic City",
    description:
      "A detailed 3D model of a futuristic cityscape with advanced architecture and environmental elements. This project explores the possibilities of urban design in a near-future setting.",
    fullDescription:
      "This futuristic city concept was created as part of a larger exploration into how urban environments might evolve in the next 50 years. The project involved extensive research into sustainable architecture, smart city technologies, and innovative transportation systems.\n\nThe modeling process began with blocking out the major structures and infrastructure, followed by detailed modeling of individual buildings and environmental elements. Special attention was paid to the integration of green spaces and the flow of pedestrian and vehicle traffic.\n\nThe final render includes atmospheric effects and lighting designed to evoke a sense of a living, breathing city of the future.",
    image: "/boat.png",
    category: "3D Modeling",
    year: 2023,
    client: "Personal Project",
    tools: ["Blender", "Substance Painter", "Cinema 4D"],
    has3DModel: false,
    modelUrl: "/models/boat.glb",
  },
  {
    id: "2",
    title: "Character Design",
    description:
      "Sci-fi character design with detailed texturing and rigging for animation. This character was created for a game project, with a focus on realistic proportions and expressive features.",
    fullDescription:
      "This character was designed for a science fiction game set in a post-apocalyptic world. The brief called for a character that balanced realism with stylized elements, capable of expressing a range of emotions through facial animations.\n\nThe design process began with concept sketches and mood boards, followed by blocking out the basic form in 3D. Detailed sculpting was done to create the facial features and clothing details, with careful attention to anatomical accuracy and material properties.\n\nThe character was then rigged with a full skeleton and facial rig to allow for a wide range of animations. The texturing process involved creating multiple texture maps for different surface properties, including diffuse, normal, roughness, and subsurface scattering.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Character Design",
    year: 2023,
    client: "GameVerse Interactive",
    tools: ["ZBrush", "Maya", "Substance Painter"],
    has3DModel: false,
    modelUrl: "/models/boat.glb",
  },
  // Add more projects as needed
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<(typeof projects)[0] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data from an API
    const fetchProject = async () => {
      setLoading(true)
      // In a real app, this would be an API call
      const foundProject = projects.find((p) => p.id === params.id)

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setProject(foundProject || null)
      setLoading(false)
    }

    fetchProject()
  }, [params.id])

  if (loading) {
    return <LoadingAnimation />
  }

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => router.push("/projects")}>Back to Projects</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-8 group flex items-center" onClick={() => router.push("/projects")}>
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {project.has3DModel ? (
              <div className="aspect-video rounded-lg overflow-hidden">
                <ModelViewer modelUrl={project.modelUrl} className="w-full h-full" />
              </div>
            ) : (
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            )}

            {project.has3DModel && (
              <div className="mt-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">{project.category}</span>
              <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">{project.year}</span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg mb-4">{project.description}</p>
              <p>{project.fullDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Client</h3>
                <p>{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Year</h3>
                <p>{project.year}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
