"use client"
// ...existing code...
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  // ...existing code...
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 page-hero">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 section-heading-center">About Me</h1>
            <p className="text-lg text-muted-foreground text-balance mt-6 max-w-2xl mx-auto">
              Full-Stack Developer & Deep Learning Engineer specializing in NLP, scalable backend systems, and user-centric design. Passionate about building impactful digital solutions for real-world challenges.
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-1">
              <Card className="card-glow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <img
                      src="/professional-developer-portrait.png"
                      alt="Profile"
                      className="w-50 h-83 rounded-lg mx-auto mb-4 object-cover hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-500 cursor-pointer"
                    />
                    <h2 className="text-2xl font-bold mb-2">Nadipalli Jaswanth</h2>
                    <p className="text-muted-foreground mb-4">B.Tech CSE, NIT Andhra Pradesh</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary" className="skill-badge">Java</Badge>
                      <Badge variant="secondary" className="skill-badge">TypeScript</Badge>
                      <Badge variant="secondary" className="skill-badge">JavaScript</Badge>
                      <Badge variant="secondary" className="skill-badge">Python</Badge>
                      <Badge variant="secondary" className="skill-badge">SQL</Badge>
                      <Badge variant="secondary" className="skill-badge">React</Badge>
                      <Badge variant="secondary" className="skill-badge">Next.js</Badge>
                      <Badge variant="secondary" className="skill-badge">Node.js</Badge>
                      <Badge variant="secondary" className="skill-badge">Spring Boot</Badge>
                      <Badge variant="secondary" className="skill-badge">PyTorch</Badge>
                      <Badge variant="secondary" className="skill-badge">TensorFlow</Badge>
                    </div>
                  </div>
                  {/* Modal removed from About page */}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I am currently pursuing my B.Tech in Computer Science and Engineering at NIT Andhra Pradesh. My academic journey is complemented by hands-on experience in full-stack development and AI/ML research, with a focus on Natural Language Processing and scalable backend systems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I have built and deployed web platforms for institutional use, including a centralized Student Portal and a Training & Placement Cell platform serving 2,000+ students. My AI/ML projects include transformer-based sentiment analysis tools and custom GPT implementations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I am passionate about learning, collaborating, and solving real-world problems through technology. I hold certifications from Microsoft, HackerRank, and NPTEL in AI, Python, and Data Science.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <CardTitle>What I'm Working On</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Full-stack web platforms for education and training</li>
                    <li>• Deep learning and NLP research projects</li>
                    <li>• Scalable backend APIs and microservices</li>
                    <li>• AI/ML model deployment and optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Interests */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">B.Tech, Computer Science and Engineering</h3>
                  <p className="text-sm text-muted-foreground">National Institute of Technology, Andhra Pradesh • 2022-2026</p>
                  <p className="text-sm text-muted-foreground mt-1">GPA: 8.23</p>
                </div>
                <div>
                  <h3 className="font-semibold">Relevant Course Work</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    Machine Learning, Natural Language Processing,
                    Deep Learning for Computer Vision, Big Data Engineering, Web Application Development,
                    Data Structures and Algorithms, Design and Analysis of Algorithms,
                    Object Oriented Programming, Operating Systems, Database Management Systems,
                    MicroProcessors, Artificial Intelligence, Software Engineering, Computer Networks
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Technology</h4>
                    <p className="text-sm text-muted-foreground">AI/ML, NLP, Web Development</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Personal</h4>
                    <p className="text-sm text-muted-foreground">Anime, Reading, Traveling, Music</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Currently Learning</h4>
                    <p className="text-sm text-muted-foreground">Deep Learning for Computer Vision and GEN AI</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Community</h4>
                    <p className="text-sm text-muted-foreground">Reading, Problem Solving, Open Source, Tech Community</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
