export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shema Leandre",
    "jobTitle": "Software Developer",
    "description": "A young software developer passionate about building web applications and learning new technologies.",
    "url": "https://shemaleandre.vercel.app",
    "image": "https://shemaleandre.vercel.app/me.png",
    "sameAs": [
      "https://github.com/leandre000",
      "https://www.thecn.com/il314?event=eyJ0eXBlIjoic2hvd192aXNpdG9yX2xpc3QiLCJwYXJhbXMiOnsidG1zIjoxNzU3NTQ4ODAwfX0%3D",
      "https://x.com/shema_Leandre",
      "https://www.instagram.com/_fliicky_/",
      "https://linkedin.com/in/shema-leandre"
    ],
    "knowsAbout": [
      "Web Development",
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Software Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Developer",
      "occupationCategory": "Computer and Information Technology"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
