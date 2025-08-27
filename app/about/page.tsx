import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Get to know more about my background, journey, and what drives me as a developer.
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <img
                      src="/professional-developer-portrait.png"
                      alt="Profile"
                      className="w-48 h-48 rounded-lg mx-auto mb-4 object-cover"
                    />
                    <h2 className="text-2xl font-bold mb-2">Nadipalli Jaswanth</h2>
                    <p className="text-muted-foreground mb-4">Full-Stack Developer</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Python</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a passionate full-stack developer with over 5 years of experience creating digital solutions
                    that make a difference. My journey began with a Computer Science degree, but my real education came
                    from building projects that solve real problems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in writing clean, maintainable code and creating user experiences that are both beautiful
                    and functional. When I'm not coding, you'll find me exploring new technologies, contributing to open
                    source projects, or mentoring aspiring developers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What I'm Working On</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Building scalable web applications with Next.js and React</li>
                    <li>• Exploring AI/ML integration in web development</li>
                    <li>• Contributing to open source projects</li>
                    <li>• Mentoring junior developers in my community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Interests */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Bachelor of Computer Science</h3>
                  <p className="text-sm text-muted-foreground">University of Technology • 2018-2022</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Graduated Magna Cum Laude with focus on Software Engineering and Web Development
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Relevant Coursework</h3>
                  <p className="text-sm text-muted-foreground">
                    Data Structures, Algorithms, Database Systems, Web Development, Software Engineering, Human-Computer
                    Interaction
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Technology</h4>
                    <p className="text-sm text-muted-foreground">AI/ML, Web3, Cloud Computing, DevOps</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Creative</h4>
                    <p className="text-sm text-muted-foreground">UI/UX Design, Photography, Digital Art</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Personal</h4>
                    <p className="text-sm text-muted-foreground">Hiking, Reading, Playing Guitar, Cooking</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Community</h4>
                    <p className="text-sm text-muted-foreground">Open Source Contributing, Tech Meetups, Mentoring</p>
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
