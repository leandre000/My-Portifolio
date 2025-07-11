"use client"

import { useEffect, useState, Suspense, type ReactNode } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Environment } from "@react-three/drei"
import { useTheme } from "next-themes"

interface ThreeSceneProps {
  children: ReactNode
  className?: string
  onCreated?: () => void
}

export function ThreeScene({ children, className = "", onCreated }: ThreeSceneProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"
  const backgroundColor = isDark ? "#000000" : "#ffffff"

  if (!mounted) return null

  return (
    <div className={className}>
      <Canvas
        style={{ background: backgroundColor }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        onCreated={onCreated}
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.2}
          castShadow
        />
        <Environment preset="city" />

        <Suspense fallback={null}>
          {children}
        </Suspense>

        <OrbitControls
          enableZoom
          enableRotate
          enablePan
          minDistance={2}
          maxDistance={50}
        />
      </Canvas>
    </div>
  )
}
