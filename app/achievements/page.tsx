import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Users, Code, Zap } from "lucide-react"

const achievements = [
  {
    title: "Top 10 Selection in Inspira Hackathon",
    organization: "Inspira Hackathon",
    date: "2025",
    description: "Got selected as one of the top 10 teams in Inspira Hackathon.",
    icon: Zap,
    category: "Competition",
    color: "text-red-600",
  },
  {
    title: "1400+ Rating on LeetCode & GeeksforGeeks",
    organization: "LeetCode & GeeksforGeeks",
    date: "2023-2025",
    description: "Solved 350+ algorithm problems.",
    icon: Trophy,
    category: "Coding",
    color: "text-yellow-600",
  },
  {
    title: "Teaching Assistant",
    organization: "NIT Andhra Pradesh",
    date: "2024-2025",
    description: "Introduction to Programming Lab.",
    icon: Users,
    category: "Academic",
    color: "text-blue-600",
  },
  {
    title: "Co-Secretary",
    organization: "CSE Association, NIT Andhra Pradesh",
    date: "2024-2025",
    description: "Leadership role in organizing events and activities.",
    icon: Star,
    category: "Leadership",
    color: "text-purple-600",
  },
  {
    title: "Joint Secretary",
    organization: "Coding Club, NIT Andhra Pradesh",
    date: "2024-2025",
    description: "Organized coding contests and workshops.",
    icon: Code,
    category: "Leadership",
    color: "text-green-600",
  },
  {
    title: "Open Source Contributor",
    organization: "College Technical Fest",
    date: "2024",
    description: "Website serving 5,000+ participants.",
    icon: Award,
    category: "Open Source",
    color: "text-orange-600",
  },
  {
    title: "Web Team Member",
    organization: "TEDx NIT Andhra Pradesh",
    date: "2024",
    description: "Contributed to TEDx event website.",
    icon: Zap,
    category: "Community",
    color: "text-pink-600",
  },
  {
    title: "Secured Mains & Advance All India Ranks",
    organization: "JEE",
    date: "2022",
    description: "Mains AIR 12968, Advance AIR 12286.",
    icon: Trophy,
    category: "Exams",
    color: "text-yellow-600",
  },
  {
    title: "Secured Ranks in AP EAMCET & TS EAMCET",
    organization: "AP & TS EAMCET",
    date: "2022",
    description: "AP EAMCET Rank 981, TS EAMCET Rank 1082.",
    icon: Star,
    category: "Exams",
    color: "text-blue-600",
  },
]

const stats = [
  { label: "Years of Experience in Programming", value: "2+", icon: Trophy },
  { label: "Projects Completed", value: "15+", icon: Code },
  { label: "Open Source Contributions", value: "3+", icon: Star },
  { label: "Team Members Mentored", value: "10+", icon: Users },
]

const recognitions = [
  "Conducted interviews for CSE Association members at NIT Andhra Pradesh",
  "Building a project for college Training & Placement (TNP) cell",
  "Developing a student portal for NIT Andhra Pradesh",
]

export default function AchievementsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Achievements</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Recognition, awards, and milestones that highlight my professional journey and contributions to the tech
              community.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Major Achievements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8">Major Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg bg-muted ${achievement.color}`}>
                        <achievement.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <Badge variant="outline">{achievement.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                        <p className="text-sm text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Recognition & Media */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Recognition & Media</h2>
            <Card>
              <CardHeader>
                <CardTitle>Notable Mentions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {recognitions.map((recognition, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{recognition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Achieve More Together?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's collaborate on your next project and create something amazing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    Available for new opportunities
                  </Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2">
                    Open to collaboration
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
