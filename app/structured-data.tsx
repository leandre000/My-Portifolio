export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shema Leandre",
    "jobTitle": "Software Developer",
    "description": "A young software developer passionate about building web applications and learning new technologies.",
    "url": "https://leandre-portfolio.vercel.app",
    "image": "https://leandre-portfolio.vercel.app/me.jpg",
    "sameAs": [
      "https://github.com/leandre000",
      "https://linkedin.com/in/shema-leandre",
      "https://twitter.com/shema_leandre"
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
