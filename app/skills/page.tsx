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
          <div className="text-center mb-6 page-hero">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 section-heading-center">Skills & Expertise</h1>
            <p className="text-lg text-muted-foreground text-balance mt-3 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, AI expertise, and professional competencies.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 theme-dot rounded-full"></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-sm skill-badge"
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
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm skill-badge"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Frontend", desc: "React, TypeScript" },
              { label: "Backend", desc: "Node.js, Spring Boot, APIs" },
              { label: "AI/ML", desc: "TensorFlow, PyTorch, NLP" },
              { label: "Cloud", desc: "AWS, Docker, Vercel, CI/CD" },
            ].map((item, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value !text-xl">{item.label}</div>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
