"use client"

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { useTheme } from 'next-themes'
import type { ReactNode } from 'react'

interface ThreeSceneProps {
  children: ReactNode
  className?: string
  onCreated?: () => void
}

export function ThreeScene({ children, className = "", onCreated }: ThreeSceneProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={className}>
      <Canvas
        style={{ background: isDark ? "#000" : "#fff" }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        onCreated={onCreated}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />
        <Suspense fallback={null}>
          {children}
          <OrbitControls
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