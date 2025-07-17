import { notFound } from "next/navigation";
import { blogs } from "@/data/blog";
import Image from "next/image";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="rounded-xl w-full h-64 object-cover mb-6"
            priority
          />
          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
          <span className="text-black/60 dark:text-white/60 text-sm">
            {new Date(blog.date).toLocaleDateString()}
          </span>
        </div>
        <div className="prose dark:prose-invert max-w-none text-lg">
          <p>{blog.description}</p>
          {/* Add more detailed content here as needed */}
        </div>
      </div>
    </div>
  );
} 