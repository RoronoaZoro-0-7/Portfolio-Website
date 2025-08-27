import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/professional-developer-headshot.png"
                alt="Profile"
                className="w-40 h-32 rounded-xl mx-auto mb-6 border-4 border-primary/20 object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Hi, I'm <span className="text-primary">Nadipalli Jaswanth</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              Full-Stack Developer and Deep Learning Engineer specializing in NLP, scalable backend systems, and user-centric design — passionate about building impactful digital solutions for real-world challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="min-w-[160px]">
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[160px] bg-transparent">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                  <p className="text-muted-foreground">
                    Creating responsive, interactive user interfaces with modern frameworks like React, Next.js, and
                    Vue.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-secondary rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                  <p className="text-muted-foreground">
                    Building scalable server-side applications with Node.js, Python, and cloud technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    Designing intuitive user experiences with a focus on accessibility and user-centered design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your next project and bring your ideas to life.
            </p>
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
