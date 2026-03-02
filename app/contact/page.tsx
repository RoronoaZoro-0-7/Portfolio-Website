"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Clock, Globe } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("https://formspree.io/f/movnjbkg", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: new FormData(e.currentTarget)
      });
      const data = await res.json();
      if (data.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 page-hero">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 section-heading-center">Contact Me</h1>
            <p className="text-lg text-muted-foreground text-balance mt-3 max-w-2xl mx-auto">
              Let's discuss your project, collaboration opportunities, or just say hello. I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 theme-accent" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link
                        href="mailto:nadipallijaswanth2005@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        nadipallijaswanth2005@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link href="tel:+91 9492186976" className="text-sm text-muted-foreground hover:text-primary">
                        +91 9492186976
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Vijayawada, Andhra Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Timezone</p>
                      <p className="text-sm text-muted-foreground">IST (GMT +5 :30)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link
                      href="https://github.com/RoronoaZoro-0-7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">@RoronoaZoro-0-7</p>
                      </div>
                    </Link>

                    <Link
                      href="https://linkedin.com/in/jaswanth-nadipalli-0a51982a4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Nadipalli Jaswanth</p>
                      </div>
                    </Link>

                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Freelance Projects</span>
                      <span className="text-xs badge-glow px-2 py-1 rounded">Available</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Full-time Roles</span>
                      <span className="text-xs badge-glow px-2 py-1 rounded">Available</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Consulting</span>
                      <span className="text-xs badge-glow px-2 py-1 rounded">Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={submitting}
                          className="input-glow"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={submitting}
                          className="input-glow"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={submitting}
                        className="input-glow"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, questions, or how I can help..."
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={submitting}
                        className="input-glow"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-gradient" disabled={submitting}>
                      <Send className="mr-2 h-4 w-4" />
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                  {success && (
                    <div className="mt-4 font-medium theme-accent-text">Thank you! Your message has been sent.</div>
                  )}
                  {error && (
                    <div className="mt-4 font-medium text-destructive">{error}</div>
                  )}
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="mt-6 card-glow">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">What's your typical response time?</h4>
                      <p className="text-sm text-muted-foreground">
                        I usually respond to emails within 24 hours during business days.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Do you work on weekends?</h4>
                      <p className="text-sm text-muted-foreground">
                        I'm available for urgent matters, but prefer to discuss project work during weekdays.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">What types of projects do you take on?</h4>
                      <p className="text-sm text-muted-foreground">
                        I work on web applications, AI tools, and other software projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
