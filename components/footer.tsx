import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="footer-enhanced">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-extrabold nav-brand inline-block mb-1">
              &lt;NJ /&gt;
            </Link>
            <p className="text-xs text-muted-foreground">
              Full-Stack Developer & AI Engineer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/RoronoaZoro-0-7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link text-muted-foreground hover:text-primary"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/jaswanth-nadipalli-0a51982a4"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:nadipallijaswanth2005@gmail.com"
              className="footer-social-link text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              © {new Date().getFullYear()} · Built with <Heart className="h-3 w-3 text-red-500 inline" /> by Nadipalli Jaswanth
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
