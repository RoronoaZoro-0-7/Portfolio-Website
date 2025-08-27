"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

const webProjects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.",
    images: [
      "/ecommerce-platform-screenshot.png",
      "/ecommerce-dashboard.png",
      "/ecommerce-checkout.png",
      "/ecommerce-products.png",
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Vercel"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    featured: true,
    date: "2024",
    status: "Completed",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Supports drag-and-drop functionality and deadline tracking.",
    images: [
      "/task-management-app-screenshot.png",
      "/task-board-view.png",
      "/task-calendar.png",
      "/task-analytics.png",
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
    liveUrl: "https://taskmanager-demo.netlify.app",
    githubUrl: "https://github.com/johndoe/task-manager",
    featured: true,
    date: "2023",
    status: "Completed",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and weather alerts. Features beautiful data visualizations and offline support.",
    images: ["/weather-dashboard-screenshot.png", "/weather-maps.png", "/weather-charts.png"],
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA", "Vuetify"],
    liveUrl: "https://weather-dashboard-vue.netlify.app",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    featured: false,
    date: "2023",
    status: "Completed",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A full-featured blogging platform with markdown support, comment system, user profiles, and SEO optimization. Includes admin panel for content management.",
    images: ["/blog-platform-screenshot.png", "/blog-editor.png", "/blog-admin.png"],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "MDX"],
    liveUrl: "https://blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/blog-platform",
    featured: false,
    date: "2023",
    status: "Completed",
  },
]

const aiProjects = [
  {
    id: "ai-chat-application",
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by AI with natural language processing, conversation history, and customizable chat themes. Built for seamless user experience.",
    images: ["/ai-chat-app-screenshot.png", "/ai-chat-interface.png", "/ai-chat-settings.png", "/ai-chat-history.png"],
    technologies: ["React", "OpenAI API", "Firebase", "Tailwind CSS", "Vercel AI SDK"],
    liveUrl: "https://ai-chat-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/ai-chat-app",
    featured: true,
    date: "2024",
    status: "In Progress",
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description:
      "A creative AI-powered image generation tool with multiple models, style presets, and batch processing capabilities. Features real-time preview and editing tools.",
    images: ["/ai-image-generator.png", "/ai-image-gallery.png", "/ai-image-editor.png"],
    technologies: ["Next.js", "Stable Diffusion", "DALL-E API", "Canvas API", "TypeScript"],
    liveUrl: "https://ai-image-gen.vercel.app",
    githubUrl: "https://github.com/johndoe/ai-image-generator",
    featured: true,
    date: "2024",
    status: "Completed",
  },
  {
    id: "ml-data-analyzer",
    title: "ML Data Analyzer",
    description:
      "A machine learning tool for data analysis and visualization with automated insights, predictive modeling, and interactive charts. Supports multiple data formats.",
    images: ["/ml-analyzer.png", "/ml-charts.png", "/ml-predictions.png"],
    technologies: ["Python", "TensorFlow", "Pandas", "Plotly", "Streamlit"],
    liveUrl: "https://ml-analyzer-demo.streamlit.app",
    githubUrl: "https://github.com/johndoe/ml-data-analyzer",
    featured: false,
    date: "2023",
    status: "Completed",
  },
]

function ImageSlideshow({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 1) {
    return <img src={images[0] || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
  }

  return (
    <div className="relative w-full h-full group">
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
            title="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
            title="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to image ${index + 1}`}
                title={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project, size = "default" }: { project: any; size?: "default" | "large" }) {
  const isLarge = size === "large"

  return (
    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
      <Link href={`/projects/${project.id}`}>
        <div className={`${isLarge ? "aspect-video" : "aspect-video"} bg-muted relative overflow-hidden`}>
          <ImageSlideshow images={project.images} title={project.title} />
          <div className="absolute top-4 right-4">
            <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
          </div>
        </div>
      </Link>
      <CardHeader className={isLarge ? "" : "pb-3"}>
        <div className="flex items-center justify-between">
          <CardTitle className={isLarge ? "text-xl" : "text-lg"}>{project.title}</CardTitle>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Calendar className="h-4 w-4" />
            {project.date}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className={`text-muted-foreground mb-4 leading-relaxed ${!isLarge ? "text-sm line-clamp-2" : ""}`}>
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {(isLarge ? project.technologies : project.technologies.slice(0, 3)).map((tech: string, i: number) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {!isLarge && project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Button asChild size="sm" className={isLarge ? "" : "flex-1"}>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {isLarge ? "Live Demo" : "Demo"}
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className={`${isLarge ? "" : "flex-1"} bg-transparent`}>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {isLarge ? "Source Code" : "Code"}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProjectsPage() {
  const featuredWebProjects = webProjects.filter((project) => project.featured)
  const otherWebProjects = webProjects.filter((project) => !project.featured)
  const featuredAIProjects = aiProjects.filter((project) => project.featured)
  const otherAIProjects = aiProjects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground text-balance">
              A showcase of my recent work, featuring web applications, AI tools, and experiments that demonstrate my
              technical skills and creativity.
            </p>
          </div>

          {/* Web Projects */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Web Development Projects</h2>

            {/* Featured Web Projects */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Featured Projects</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredWebProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} size="large" />
                ))}
              </div>
            </div>

            {/* Other Web Projects */}
            {otherWebProjects.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Other Web Projects</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherWebProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* AI Projects */}
          <section>
            <h2 className="text-3xl font-bold mb-8">AI & Machine Learning Projects</h2>

            {/* Featured AI Projects */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Featured Projects</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredAIProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} size="large" />
                ))}
              </div>
            </div>

            {/* Other AI Projects */}
            {otherAIProjects.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Other AI Projects</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherAIProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
