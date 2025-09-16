"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { webProjects, aiProjects } from "@/lib/projects"

function ImageSlideshow({ images, title, isMobile = false }: { images: string[]; title: string; isMobile?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 1) {
    return (
      <img 
        src={images[0] || "/placeholder.svg"} 
        alt={title} 
        className={`w-full object-cover ${isMobile ? 'h-24' : 'h-full'}`}
      />
    )
  }

  return (
    <div className="relative w-full h-full group">
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${title} - Image ${currentIndex + 1}`}
        className={`w-full object-cover transition-opacity duration-300 ${isMobile ? 'h-24' : 'h-full'}`}
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

function ProjectCard({ project, size = "default", isMobile = false }: { project: any; size?: "default" | "large"; isMobile?: boolean }) {
  const isLarge = size === "large"

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div className={`${isLarge ? "aspect-video" : isMobile ? "h-24" : "aspect-[4/3] md:aspect-video"} bg-muted relative overflow-hidden`}>
        <ImageSlideshow images={project.images} title={project.title} isMobile={isMobile} />
        <div className="absolute top-2 right-2">
          <Badge variant={project.status === "Completed" ? "default" : "secondary"} className={isMobile ? "text-xs" : ""}>
            {project.status}
          </Badge>
        </div>
      </div>
      <CardHeader className={isLarge ? "" : "pb-3"}>
        <div className="flex items-center justify-between">
          <CardTitle className={`${isLarge ? "text-xl" : isMobile ? "text-base" : "text-lg"}`}>
            <Link href={`/projects/${project.id}`} className="hover:underline">
              {project.title}
            </Link>
          </CardTitle>
          <div className={`flex items-center gap-1 text-muted-foreground ${isMobile ? "text-xs" : "text-sm"}`}>
            <Calendar className="h-3 w-3" />
            {project.date}
          </div>
        </div>
      </CardHeader>
      <CardContent className={isMobile ? "p-3 pt-0" : ""}>
        <p className={`text-muted-foreground mb-4 leading-relaxed ${!isLarge ? "text-sm line-clamp-2" : ""} ${isMobile ? "text-xs line-clamp-1 mb-2" : ""}`}>
          {project.description}
        </p>

        <div className={isMobile ? "mb-2" : "mb-4"}>
          <div className="flex flex-wrap gap-1">
            {(isLarge ? project.technologies : project.technologies.slice(0, isMobile ? 2 : 3)).map((tech: string, i: number) => (
              <Badge key={i} variant="outline" className={isMobile ? "text-xs px-1 py-0" : "text-xs"}>
                {tech}
              </Badge>
            ))}
            {!isLarge && project.technologies.length > (isMobile ? 2 : 3) && (
              <Badge variant="outline" className={isMobile ? "text-xs px-1 py-0" : "text-xs"}>
                +{project.technologies.length - (isMobile ? 2 : 3)}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm" className={`${isLarge ? "" : "flex-1"} bg-transparent ${isMobile ? "text-xs px-2 py-1 h-auto" : ""}`}>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className={`mr-1 ${isMobile ? "h-3 w-3" : "h-4 w-4"}`} />
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
                {/* Mobile: Horizontal scroll */}
                <div className="block md:hidden">
                  <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {otherWebProjects.map((project, index) => (
                      <div key={index} className="min-w-[250px] snap-start slide-in-mobile" style={{ animationDelay: `${index * 0.1}s` }}>
                        <ProjectCard project={project} isMobile={true} />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center">← Swipe to see more projects →</p>
                </div>
                {/* Desktop: Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {/* Mobile: Horizontal scroll */}
                <div className="block md:hidden">
                  <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {otherAIProjects.map((project, index) => (
                      <div key={index} className="min-w-[250px] snap-start slide-in-mobile" style={{ animationDelay: `${index * 0.1}s` }}>
                        <ProjectCard project={project} isMobile={true} />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center">← Swipe to see more projects →</p>
                </div>
                {/* Desktop: Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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