export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Leandre",
    "jobTitle": "CEO & Founder of Echo Tech",
    "description": "Leading innovation in AI/ML, web development, and cybersecurity. Expert in penetration testing and cutting-edge technology solutions.",
    "url": "https://leandre-portfolio.vercel.app",
    "image": "https://leandre-portfolio.vercel.app/myportifolio.jpg",
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
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "Cybersecurity",
      "Penetration Testing",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
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
