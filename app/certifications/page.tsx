"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"

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

  const handleImageClick = (img: string) => {
    setModalImage(img)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalImage("")
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
                    <div className="mb-4 cert-image-wrap">
                      <img
                        src={cert.certificateImage || "/placeholder.svg?height=300&width=300&query=professional certificate"}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-68 object-cover rounded-lg border cursor-pointer"
                        onClick={() => handleImageClick(cert.certificateImage)}
                      />
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
          {modalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
              onClick={closeModal}
            >
              <img
                src={modalImage}
                alt="Certificate Preview"
                className="max-w-3xl max-h-[80vh] rounded-lg shadow-2xl border-4 border-white"
                onClick={e => e.stopPropagation()}
              />
            </div>
          )}

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
