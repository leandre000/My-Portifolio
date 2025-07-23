// Blog Detail Page: Shows the full story for each blog post
// Clean, DRY, KISS, and easy to extend
import { notFound } from "next/navigation";
import { blogs } from "@/data/blog";
import Image from "next/image";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  // Find the blog post by slug
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  // Defensive: Provide safe fallbacks for all fields
  const image = blog.image || "/placeholder.png";
  const title = blog.title || "Untitled Blog";
  const date = blog.date ? new Date(blog.date).toLocaleDateString() : "Unknown date";
  const description = blog.description || "";
  const fullContent = blog.fullContent || `
    This is the full story for "${title}". Here you would find a detailed, engaging, and understandable narrative that covers:
    - The background and context
    - The main ideas and insights
    - Key takeaways and lessons
    - Any relevant examples, stories, or case studies
    - A clear conclusion or call to action
    
    (Replace this with the actual full content for each blog post.)
  `;

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Blog header: image, title, date */}
        <div className="mb-8">
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="rounded-xl w-full h-64 object-cover mb-6"
            priority
          />
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <span className="text-black/60 dark:text-white/60 text-sm">
            {date}
          </span>
        </div>
        {/* Blog content: full story */}
        <div className="prose dark:prose-invert max-w-none text-lg">
          <p>{description}</p>
          <div style={{ whiteSpace: "pre-line" }}>{fullContent}</div>
        </div>
      </div>
    </div>
  );
} 