import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Leandre</h3>
            <p className="text-black/70 dark:text-white/70 max-w-md">
             Web Developer leveraging AI & ML to build intelligent, problem-solving digital products that drive innovation and real-world impact.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://shema-leandre.vercel.app/" 
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My portifolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  About
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
                  href="/contact"
                  className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/leandre000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a> */}
              <a
                href="https://x.com/shema_Leandre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/_shemaleandre_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 text-center text-sm text-black/60 dark:text-white/60">
          <p>© {new Date().getFullYear()} Leandre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
