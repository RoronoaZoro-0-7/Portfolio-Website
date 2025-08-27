import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description:
      "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led team of 5 developers on major product redesign",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to implement pixel-perfect UIs.",
    achievements: [
      "Built 15+ responsive web applications from scratch",
      "Improved code quality by implementing automated testing",
      "Reduced bug reports by 35% through better QA processes",
    ],
    technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis", "Git"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Digital Agency Pro",
    location: "Remote",
    period: "Summer 2019",
    type: "Internship",
    description:
      "Assisted in developing client websites and learned modern frontend development practices. Gained experience with responsive design and cross-browser compatibility.",
    achievements: [
      "Contributed to 8 client projects during internship",
      "Learned React and modern JavaScript frameworks",
      "Received outstanding intern performance review",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Sass", "Webpack"],
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
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
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
