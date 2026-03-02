import { Card, CardContent } from "@/components/ui/card"
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
          <div className="text-center mb-6 page-hero">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 section-heading-center">Experience</h1>
            <p className="text-lg text-muted-foreground text-balance mt-3 max-w-2xl mx-auto">
              My professional journey and the roles that have shaped my career in software development.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-card">
              <Card className="relative card-glow overflow-hidden">
                <CardContent className="pt-5 pb-5">
                  {/* Top row: title + meta */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold leading-tight">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Building className="h-3.5 w-3.5" />{exp.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{exp.location}</span>
                        <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{exp.period}</span>
                      </div>
                    </div>
                    <Badge variant={exp.type === "Full-time" ? "default" : "secondary"} className="badge-glow shrink-0">{exp.type}</Badge>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Key Achievements</h4>
                    <ul className="space-y-0.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground text-sm pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--t2)]">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="skill-badge text-xs py-0.5 px-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {[
              { value: "7", label: "Months Experience" },
              { value: "15+", label: "Projects Completed" },
              { value: "15+", label: "Technologies Mastered" },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
