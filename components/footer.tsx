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
              href="https://leetcode.com/u/Roronoa_Zoro_0703/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link text-muted-foreground hover:text-amber-500"
              title="LeetCode"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              <span className="sr-only">LeetCode</span>
            </Link>
            <Link
              href="https://www.geeksforgeeks.org/profile/user_3xfahfoirv6"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link text-muted-foreground hover:text-green-500"
              title="GeeksforGeeks"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.282-.8h3.503l.602-1.3H14.2a3.774 3.774 0 0 1 .062-.78h4.667l.601-1.3h-4.976a3.787 3.787 0 0 1 1.427-1.942 3.79 3.79 0 0 1 1.927-.608 4.618 4.618 0 0 1 2.692.56l.602-1.3a5.74 5.74 0 0 0-3.138-.69 5.387 5.387 0 0 0-2.898.891 5.384 5.384 0 0 0-2.067 2.489H9.592l-.602 1.3h3.39a5.263 5.263 0 0 0-.062.78H8.99l-.602 1.3h3.932a5.306 5.306 0 0 0 .236.8 5.384 5.384 0 0 0 2.067 2.489 5.387 5.387 0 0 0 2.898.89 5.744 5.744 0 0 0 3.45-1.003l.48.93 1.3-.602-.48-.93a5.317 5.317 0 0 0 .7-2.09l-1.3.602c.032.22.048.443.048.668zM2.55 14.315a5.272 5.272 0 0 0 .048-.668l-1.3-.602a5.317 5.317 0 0 0 .7 2.09l-.48.93 1.3.602.48-.93a5.744 5.744 0 0 0 3.45 1.003 5.387 5.387 0 0 0 2.898-.89 5.384 5.384 0 0 0 2.067-2.489 5.306 5.306 0 0 0 .236-.8h-1.49a3.571 3.571 0 0 1-.282.8 3.79 3.79 0 0 1-2.135 2.078 4.51 4.51 0 0 1-3.116.016 3.691 3.691 0 0 1-1.104-.695 2.662 2.662 0 0 1-.565-.745z"/>
              </svg>
              <span className="sr-only">GeeksforGeeks</span>
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
