import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/myportifolio.jpg" 
                alt="Leandre Portfolio Logo" 
                className="w-12 h-12 rounded-full"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-logo.png"
                }}
              />
              <div>
                <h3 className="text-xl font-bold">Leandre</h3>
                <p className="text-sm text-black/60 dark:text-white/60">Software Engineer</p>
              </div>
            </div>
            <p className="text-black/70 dark:text-white/70 max-w-md mb-4">
              Full-stack developer specializing in modern web technologies, AI/ML integration, and building scalable digital solutions that drive business value.
            </p>
            <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
              <MapPin className="w-4 h-4" />
              <span>Rwanda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-black dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/tech-stack"
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-black dark:text-white">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:Iamshemaleandre@gmail.com"
                className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Iamshemaleandre@gmail.com</span>
              </a>
              <a
                href="https://github.com/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">github.com/leandre000</span>
              </a>
              <a
                href="https://www.linkedin.com/in/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">linkedin.com/in/leandre000</span>
              </a>
              <a
                href="https://x.com/shema_Leandre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span className="text-sm">@shema_Leandre</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 text-center text-sm text-black/60 dark:text-white/60">
          <p>© {new Date().getFullYear()} Leandre. All rights reserved.</p>
          <p className="mt-1">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
