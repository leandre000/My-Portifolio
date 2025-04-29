"use client"

import Image from "next/image"
import { Cloud, Cpu, Box } from "lucide-react"

interface TechIconProps {
  name: string
  className?: string
}

const iconMap: Record<string, string> = {
  "Blender": "https://download.blender.org/branding/blender_logo.png",
  "Figma": "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  "Adobe Illustrator": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
  "Adobe Photoshop": "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg",
  "Unity": "https://cdn.worldvectorlogo.com/logos/unity-69.svg",
  "Unreal Engine": "https://upload.wikimedia.org/wikipedia/commons/2/20/UE_Logo_Black_Centered.svg",
  "Cycles": "https://download.blender.org/branding/blender_logo.png", // Using Blender logo as Cycles is part of Blender
  "Eevee": "https://download.blender.org/branding/blender_logo.png", // Using Blender logo as Eevee is part of Blender
  "Mixamo": "https://www.adobe.com/content/dam/cc/icons/mixamo.svg",
  "Three.js": "https://raw.githubusercontent.com/mrdoob/three.js/dev/files/icon.svg",
}

export function TechIcon({ name, className = "" }: TechIconProps) {
  const iconUrl = iconMap[name]
  
  // Return Lucide icons for specific cases
  if (name === "Fox Renderfarm") {
    return <Cloud className={className} />
  }
  if (name === "WebGL") {
    return <Cpu className={className} />
  }
  if (name === "Spline") {
    return <Box className={className} />
  }

  if (!iconUrl) return null

  return (
    <div className={className}>
      <Image
        src={iconUrl}
        alt={`${name} icon`}
        width={24}
        height={24}
        className="object-contain"
        unoptimized // Some SVG icons might not work with Next.js optimization
      />
    </div>
  )
} 