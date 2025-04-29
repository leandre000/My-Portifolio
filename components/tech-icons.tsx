"use client"

import Image from "next/image"
import { Cloud, Cpu, Box } from "lucide-react"
import { 
  SiReact, 
  SiNextdotjs, 
  SiHtml5, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPhp, 
  SiMongodb, 
  SiFirebase, 
  SiPython, 
  SiCplusplus, 
  SiC 
} from "react-icons/si"

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

const colorMap: Record<string, string> = {
  "React": "#61DAFB",
  "Next.js": "#000000",
  "HTML": "#E34F26",
  "JavaScript": "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  "Express.js": "#000000",
  "PHP": "#777BB4",
  "MongoDB": "#47A248",
  "Firebase": "#FFCA28",
  "Python": "#3776AB",
  "C++": "#00599C",
  "C": "#A8B9CC",
}

export function TechIcon({ name, className = "" }: TechIconProps) {
  const iconUrl = iconMap[name]
  const iconColor = colorMap[name]
  
  // Return Lucide icons for specific cases
  if (name === "FoxRender farm") {
    return <Cloud className={className} />
  }
  if (name === "WebGL") {
    return <Cpu className={className} />
  }
  if (name === "Spline") {
    return <Box className={className} />
  }

  // Return React icons for web technologies
  if (name === "React") {
    return <SiReact className={className} color={iconColor} />
  }
  if (name === "Next.js") {
    return <SiNextdotjs className={className} color={iconColor} />
  }
  if (name === "HTML") {
    return <SiHtml5 className={className} color={iconColor} />
  }
  if (name === "JavaScript") {
    return <SiJavascript className={className} color={iconColor} />
  }
  if (name === "Tailwind CSS") {
    return <SiTailwindcss className={className} color={iconColor} />
  }
  if (name === "Node.js") {
    return <SiNodedotjs className={className} color={iconColor} />
  }
  if (name === "Express.js") {
    return <SiExpress className={className} color={iconColor} />
  }
  if (name === "PHP") {
    return <SiPhp className={className} color={iconColor} />
  }
  if (name === "MongoDB") {
    return <SiMongodb className={className} color={iconColor} />
  }
  if (name === "Firebase") {
    return <SiFirebase className={className} color={iconColor} />
  }
  if (name === "Python") {
    return <SiPython className={className} color={iconColor} />
  }
  if (name === "C++") {
    return <SiCplusplus className={className} color={iconColor} />
  }
  if (name === "C") {
    return <SiC className={className} color={iconColor} />
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