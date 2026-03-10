"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import {
  ArrowRight,
  Download,
  Mail,
  Code,
  Brain,
  Layout,
  Building,
  MapPin,
  CalendarDays,
  Trophy,
  Star,
  Users,
  Award,
  Github,
  Linkedin,
  Send,
} from "lucide-react"
import { webProjects, aiProjects } from "@/lib/projects"
import CodingProfiles from "@/components/coding-profiles"

// Tech icons with descriptions
const expertiseIcons = [
  // Languages
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", desc: "OOP language for enterprise & Android apps" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", desc: "Versatile language for AI/ML & scripting" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", desc: "Type-safe JavaScript for scalable apps" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", desc: "Dynamic language for web development" },
  // Web
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", desc: "Component-based UI library by Meta" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", desc: "Full-stack React framework with SSR" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", desc: "JavaScript runtime for server-side apps" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", desc: "Minimal Node.js web framework" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", desc: "Progressive Node.js framework" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", desc: "Enterprise Java framework" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", desc: "Utility-first CSS framework" },
  // AI/ML
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", desc: "Deep learning framework by Meta" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", desc: "ML platform by Google" },
  { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", desc: "ML library for classical algorithms" },
  // Data Science
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", desc: "Data manipulation & analysis library" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", desc: "Numerical computing with arrays" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", desc: "Data visualization library" },
  // Databases
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", desc: "Advanced open-source SQL database" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", desc: "NoSQL document database" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", desc: "Popular relational database" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", desc: "In-memory data store & cache" },
  // Cloud & DevOps
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", desc: "Amazon cloud computing platform" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", desc: "Container platform for apps" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", desc: "Distributed version control system" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", desc: "Code hosting & collaboration platform" },
]

const experiences = [
  {
    title: "Full Stack Developer",
    company: "NIT Andhra Pradesh",
    period: "May 2025 - Sep 2025",
    type: "Internship",
    description:
      "Designed and developed full-stack applications including a centralized Student Portal and TNP Cell platform serving 2,000+ students.",
    technologies: ["TypeScript", "Next.js", "Nest.js", "Prisma", "Clerk"],
  },
  {
    title: "Backend Developer Intern",
    company: "Horeka Supply India Pvt Ltd",
    period: "Jan 2025 - Mar 2025",
    type: "Internship",
    description:
      "Built enterprise-grade Spring Boot modules, reducing DB latency by 30% through query optimization.",
    technologies: ["Spring Boot", "Java", "MySQL", "REST API"],
  },
]

const topAchievements = [
  { title: "Top 10 in Inspira Hackathon", icon: Trophy, color: "theme-accent" },
  { title: "1400+ Rating — LeetCode & GFG", icon: Trophy, color: "theme-accent-2" },
  { title: "Co-Secretary, CSE Association", icon: Star, color: "theme-accent-3" },
  { title: "Joint Secretary, Coding Club", icon: Code, color: "theme-accent" },
  { title: "Teaching Assistant at NIT AP", icon: Users, color: "theme-accent-2" },
  { title: "Open Source — 5,000+ users", icon: Award, color: "theme-accent-3" },
]

const certifications = [
  { title: "Machine Learning Concepts", issuer: "Microsoft" },
  { title: "Azure AI Fundamentals", issuer: "Microsoft" },
  { title: "REST API (Intermediate)", issuer: "HackerRank" },
  { title: "Python for Data Science", issuer: "NPTEL" },
]

const stats = [
  { label: "Months Experience", value: "7+" },
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "15+" },
  { label: "Certifications", value: "6" },
]

export default function HomePage() {
  const featuredProjects = [
    ...webProjects.filter((p) => p.featured),
    ...aiProjects.filter((p) => p.featured),
  ].slice(0, 4)

  // Scroll-triggered fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/professional-developer-headshot.png"
                alt="Nadipalli Jaswanth"
                className="w-40 h-32 rounded-xl mx-auto mb-6 border-2 theme-accent-border/20 object-cover theme-shadow-hover transition-all duration-500"
              />
            </div>

            <p className="text-sm font-medium tracking-widest uppercase theme-accent-text mb-4">Full-Stack Developer & AI Engineer</p>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance mb-6">
              Hi, I'm{" "}
              <span className="theme-gradient-text">
                Nadipalli Jaswanth
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
              I build scalable web platforms, deep learning systems, and
              user-centric products that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="min-w-[160px] btn-gradient">
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[160px] bg-transparent border-white/10 hover:border-white/25 hover:bg-white/5">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-2xl mx-auto">
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{s.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── What I Do ── */}
      <section className="py-14 home-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 section-heading-center">What I Do</h2>
            <p className="text-center text-muted-foreground mb-6 max-w-xl mx-auto">Specialized in three core areas that power modern digital products.</p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-feature fade-up">
                <CardContent className="pt-6 pb-6 pl-7">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon-ring theme-icon-box-2 shrink-0">
                      <Code className="w-5 h-5 theme-accent-2" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold mb-1.5">Backend Development</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Scalable server-side apps with Node.js, Python, Spring Boot, and cloud technologies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature fade-up fade-up-delay-1">
                <CardContent className="pt-6 pb-6 pl-7">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon-ring theme-icon-box-3 shrink-0">
                      <Brain className="w-5 h-5 theme-accent-3" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold mb-1.5">AI / ML Engineering</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Deep learning, NLP, transformers, sentiment analysis, and custom GPT with PyTorch & TensorFlow.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature fade-up fade-up-delay-2">
                <CardContent className="pt-6 pb-6 pl-7">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon-ring theme-icon-box shrink-0">
                      <Layout className="w-5 h-5 theme-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold mb-1.5">Frontend Development</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Responsive, interactive UIs with React, Next.js, Tailwind CSS, and modern design systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Expertise Section ── */}
      <section className="py-14 home-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8 fade-up">
              <h2 className="text-3xl font-bold section-heading">
                Expertise in<span className="theme-gradient-text">:</span>
              </h2>
              <Button asChild variant="ghost" size="sm" className="hover:bg-white/5">
                <Link href="/skills">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {expertiseIcons.map((tech, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <div
                      className="group flex flex-col items-center gap-1.5 p-2.5 rounded-lg bg-muted/20 border border-white/5 hover:border-white/20 hover:bg-muted/40 transition-all duration-300 fade-up cursor-default"
                      style={{ transitionDelay: `${i * 0.03}s` }}
                    >
                      <div className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                        {tech.name}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-[200px] text-center">
                    <p>{tech.desc}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Experience Preview ── */}
      <section className="py-14 home-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8 fade-up">
              <h2 className="text-3xl font-bold section-heading">Experience</h2>
              <Button asChild variant="ghost" size="sm" className="hover:bg-white/5">
                <Link href="/experience">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="timeline-card fade-up" style={{ transitionDelay: `${i * 0.15}s` }}>
                  <Card className="card-glow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building className="h-3.5 w-3.5" />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <CalendarDays className="h-3.5 w-3.5" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="badge-glow">{exp.type}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((t, j) => (
                          <Badge key={j} variant="outline" className="text-xs skill-badge">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Featured Projects ── */}
      <section className="py-14 home-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8 fade-up">
              <h2 className="text-3xl font-bold section-heading">Featured Projects</h2>
              <Button asChild variant="ghost" size="sm" className="hover:bg-white/5">
                <Link href="/projects">
                  All Projects <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, i) => (
                <Link key={i} href={`/projects/${project.id}`} className="block">
                  <Card className="overflow-hidden card-glow fade-up cursor-pointer" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="default" className="text-xs badge-glow">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="text-lg font-semibold mb-2 hover:text-[var(--t-text)] transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((t, j) => (
                          <Badge key={j} variant="outline" className="text-xs skill-badge">
                            {t}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Achievements Preview ── */}
      <section className="py-14 home-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8 fade-up">
              <h2 className="text-3xl font-bold section-heading">Achievements</h2>
              <Button asChild variant="ghost" size="sm" className="hover:bg-white/5">
                <Link href="/achievements">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {topAchievements.map((a, i) => (
                <Link key={i} href="/achievements" className="card-pill fade-up cursor-pointer" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className={`pill-icon bg-muted/50 ${a.color}`}>
                    <a.icon className="h-4 w-4" />
                  </div>
                  <p className="font-medium text-sm leading-snug">{a.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Certifications Preview ── */}
      <section className="py-14 home-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8 fade-up">
              <h2 className="text-3xl font-bold section-heading">Certifications</h2>
              <Button asChild variant="ghost" size="sm" className="hover:bg-white/5">
                <Link href="/certifications">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <Link key={i} href="/certifications" className="card-mini fade-up cursor-pointer" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="mini-dot" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">
                      {cert.title}
                      <span className="mini-issuer">{cert.issuer}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Coding Profiles ── */}
      <CodingProfiles />

      <hr className="gradient-divider" />

      {/* ── Contact CTA ── */}
      <section className="py-14 home-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <h2 className="text-3xl font-bold mb-4 section-heading-center">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-6 mt-4">
              I'm available for freelance projects, full-time roles, and consulting. Drop me a message and I'll get back
              to you within 24 hours.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <Badge className="text-sm px-4 py-2 badge-glow">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 inline-block animate-pulse" />
                Available for Hire
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="btn-gradient">
                <Link href="/contact">
                  <Send className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/10 hover:border-white/25 hover:bg-white/5">
                <Link href="https://github.com/RoronoaZoro-0-7" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/10 hover:border-white/25 hover:bg-white/5">
                <Link
                  href="https://linkedin.com/in/jaswanth-nadipalli-0a51982a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
