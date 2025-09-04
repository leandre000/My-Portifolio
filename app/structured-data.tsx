export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Leandre",
    "jobTitle": "Software Developer at Echo Tech",
    "description": "A young software developer passionate about building web applications and learning new technologies.",
    "url": "https://shemaleandre.vercel.app",
    "image": "https://shemaleandre.vercel.app/passport.jpg",
    "sameAs": [
      "https://github.com/leandre000",
      "https://linkedin.com/in/leandre",
      "https://twitter.com/leandre"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Echo Tech",
      "url": "https://echo-tech.com"
    },
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
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Echo Tech"
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
