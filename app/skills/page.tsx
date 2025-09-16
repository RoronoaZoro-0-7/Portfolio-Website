import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Prolog"],
  },
  {
    title: "AI/ML Frameworks",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face Transformers"],
  },
  {
    title: "Deep Learning",
    skills: ["Neural Networks", "LSTM", "Transformers", "CNNs", "Self-Attention", "RAG"],
  },
  {
    title: "Web Technologies",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "NestJS", "Spring Boot", "Tailwind CSS", "EJS"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "NLTK", "FAISS", "LangChain"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Schema Design"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "GitHub", "Google Colab", "VS Code"],
  },
  {
    title: "Development Practices",
    skills: ["System Design", "Microservices", "Agile", "RESTful APIs", "JWT Authentication", "Vercel"],
  },
]

const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Communication",
  "Project Management",
  "Mentoring",
  "Agile/Scrum",
  "Code Review",
  "Technical Writing",
  "User Experience",
  "Performance Optimization",
  "Critical Thinking",
  "Adaptability",
]

const certifications = [
  "Microsoft Certifications: Introduction to Machine Learning Concepts, Azure AI Fundamentals",
  "HackerRank Certifications: REST API (Intermediate), Python (Basic), SQL (Basic)",
  "NPTEL: Python for Data Science",
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground text-balance">
              A comprehensive overview of my technical skills, AI expertise, and professional competencies.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills, Certifications, and Skills Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm hover:bg-secondary/80 transition-colors duration-200 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200 cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Overview */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Skills Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <div className="text-2xl font-bold text-primary mb-1">Frontend</div>
                  <p className="text-sm text-muted-foreground">React, TypeScript</p>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <div className="text-2xl font-bold text-primary mb-1">Backend</div>
                  <p className="text-sm text-muted-foreground">Node.js, Spring Boot, APIs</p>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <div className="text-2xl font-bold text-primary mb-1">AI/ML</div>
                  <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, NLP</p>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <div className="text-2xl font-bold text-primary mb-1">Cloud</div>
                  <p className="text-sm text-muted-foreground">AWS, Docker, Render, Vercel, CI/CD</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
