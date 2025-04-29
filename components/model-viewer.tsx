"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { useTheme } from "next-themes"
import type * as THREE from "three"

// Component to render the 3D model with rotation animation
function Model({ url }: { url: string }) {
  // Load the 3D model from the provided URL
  const { scene } = useGLTF(url)
  const modelRef = useRef<THREE.Group>(null)

  // Add a subtle rotation animation to the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002 // Slow rotation around Y axis
    }
  })

  return <primitive ref={modelRef} object={scene} scale={1.5} position={[0, 0, 0]} />
}

interface ModelViewerProps {
  modelUrl: string
  className?: string
}

// Main component that renders a 3D model viewer with controls
export default function ModelViewer({ modelUrl, className = "" }: ModelViewerProps) {
  const [loading, setLoading] = useState(true)
  const controlsRef = useRef<any>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Camera control functions
  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(1.2) // Zoom in by 20%
    }
  }

  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(1.2) // Zoom out by 20%
    }
  }

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/10 dark:bg-black/10 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 animate-spin text-black/70 dark:text-white/70" />
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Loading 3D model...</p>
          </div>
        </div>
      )}

      {/* Camera control buttons */}
      <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handleZoomIn}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleZoomOut}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleReset}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* 3D Canvas */}
      <Canvas style={{ background: isDark ? "#000" : "#fff" }} onCreated={() => setLoading(false)}>
        {/* Camera setup */}
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        {/* Suspense for async loading of model */}
        <Suspense fallback={null}>
          <Model url={modelUrl} />
          <Environment preset="city" /> {/* Environmental lighting */}
          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={50}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
