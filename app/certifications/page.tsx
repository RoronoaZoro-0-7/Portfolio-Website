"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Award, X, ZoomIn, ZoomOut } from "lucide-react"

const certifications = [
  {
    title: "Introduction to Machine Learning Concepts",
    issuer: "Microsoft",
    date: "2025",
    description: "Microsoft Certification for Machine Learning Concepts.",
    skills: ["Machine Learning", "AI Fundamentals"],
    certificateImage: "/certificates/microsoft machine learning.png",
    status: "Active",
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    description: "Microsoft Certification for Azure AI Fundamentals.",
    skills: ["Azure", "AI"],
    certificateImage: "/certificates/azure-ai-fundamentals.png",
    status: "Active",
  },
  {
    title: "REST API (Intermediate)",
    issuer: "HackerRank",
    date: "2025",
    description: "HackerRank Certification for REST API (Intermediate).",
    skills: ["REST API", "Web Development"],
    certificateImage: "/certificates/rest-api-hackerrank.png",
    status: "Active",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2025",
    description: "HackerRank Certification for Python (Basic).",
    skills: ["Python"],
    certificateImage: "/certificates/python-basic-hackerrank.png",
    status: "Active",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2025",
    description: "HackerRank Certification for SQL (Basic).",
    skills: ["SQL"],
    certificateImage: "/certificates/sql-basic-hackerrank.png",
    status: "Active",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "2025",
    description: "NPTEL Certification for Python for Data Science.",
    skills: ["Python", "Data Science"],
    certificateImage: "/certificates/python-for-data-science-nptel.jpg",
    status: "Active",
  },
]

const continuingEducation = [
  {
    title: "Machine Learning",
    provider: "Udemy",
    date: "2025",
    hours: "40 hours",
  },
  {
    title: "Web Development",
    provider: "Udemy",
    date: "2025",
    hours: "35 hours",
  },
  {
    title: "Dockers",
    provider: "YouTube",
    date: "2024",
    hours: "10 hours",
  },
  {
    title: "AWS",
    provider: "YouTube",
    date: "2024",
    hours: "12 hours",
  },
]


import React, { useState } from "react"

export default function CertificationsPage() {
  const activeCertifications = certifications
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")
  const [modalTitle, setModalTitle] = useState("")
  const [zoomLevel, setZoomLevel] = useState(1)

  const handleImageClick = (img: string, title: string) => {
    setModalImage(img)
    setModalTitle(title)
    setZoomLevel(1)
    setModalOpen(true)
  }

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5))
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 page-hero">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 section-heading-center">Certifications</h1>
            <p className="text-lg text-muted-foreground text-balance mt-3 max-w-2xl mx-auto">
              Professional certifications and credentials that validate my expertise in various technologies and methodologies.
            </p>
          </div>

          {/* Active Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 section-heading">
              <Award className="h-6 w-6 theme-accent" />
              Professional Certifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-5">
              {activeCertifications.map((cert, index) => (
                <Card key={index} className="relative overflow-hidden card-glow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="default" className="badge-glow">
                        Certified
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="mb-4 relative cursor-pointer group"
                      onClick={() => handleImageClick(cert.certificateImage, cert.title)}
                    >
                      <img
                        src={cert.certificateImage || "/placeholder.svg?height=300&width=300&query=professional certificate"}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-68 object-cover rounded-lg border group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-lg pointer-events-none">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{cert.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="font-medium">Issued:</span>
                        <p className="text-muted-foreground">{cert.date}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="font-medium text-sm mb-2 block">Skills Validated:</span>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certificate Modal */}
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogContent 
              className="max-w-[95vw] md:max-w-[85vw] lg:max-w-[75vw] max-h-[95vh] p-0 bg-black/95 border-white/10 overflow-hidden"
              showCloseButton={false}
            >
              <DialogTitle className="sr-only">{modalTitle}</DialogTitle>
              <div className="relative flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <h3 className="text-lg font-semibold text-white truncate pr-4">{modalTitle}</h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-white/10 border-white/20 hover:bg-white/20"
                      onClick={handleZoomOut}
                      disabled={zoomLevel <= 0.5}
                    >
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-white/70 w-16 text-center">{Math.round(zoomLevel * 100)}%</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-white/10 border-white/20 hover:bg-white/20"
                      onClick={handleZoomIn}
                      disabled={zoomLevel >= 3}
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-white/10 border-white/20 hover:bg-white/20 ml-2"
                      onClick={() => setModalOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Image Container */}
                <div className="flex-1 overflow-auto p-4 flex items-center justify-center min-h-[60vh]">
                  <img
                    src={modalImage}
                    alt={modalTitle}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Continuing Education */}
          <section>
            <h2 className="text-2xl font-bold mb-6 section-heading">Continuing Education</h2>
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Recent Courses & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {continuingEducation.map((course, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-2 h-2 theme-dot rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.provider}</p>
                        {/* Removed hours and year from display */}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
