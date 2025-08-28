import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "National Institute of Technology, Andhra Pradesh",
    location: "Remote",
    period: "May 2025 - Sep 2025",
    type: "Internship",
    description: "Designed and developed full-stack applications for institutional use, including a centralized Student Portal and a Training & Placement (TNP) Cell platform serving 2,000+ students.",
    achievements: [
      "Built scalable APIs and microservices architecture with authentication, caching, and query optimization, improving system performance by 20%.",
      "Implemented role-based access (Admin/Student) for the TNP Cell, enabling job postings, one-click applications, and resume management."
    ],
    technologies: ["TypeScript", "Node.js", "Express", "Prisma", "Next.js", "Nest.js", "Clerk"]
  },
  {
    title: "Backend Developer Intern",
    company: "Horeka Supply India Private Limited",
    location: "Remote",
    period: "Jan 2025 - Mar 2025",
    type: "Internship",
    description: "Built enterprise-grade Spring Boot modules, reducing DB latency by 30% through query optimization.",
    achievements: [
      "Developed scalable API architecture following industry best practices for internal tools.",
      "Contributed to debugging, unit testing, documentation, and code reviews for backend services."
    ],
    technologies: ["Spring Boot", "Java", "MySQL", "REST API", "Git"]
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Experience</h1>
            <p className="text-xl text-muted-foreground text-balance">
              My professional journey and the roles that have shaped my career in software development.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant={exp.type === "Full-time" ? "default" : "secondary"}>{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground text-sm">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <p className="text-muted-foreground">Months of Professional Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
