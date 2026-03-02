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
    color: "theme-accent",
  },
  {
    title: "1400+ Rating on LeetCode & GeeksforGeeks",
    organization: "LeetCode & GeeksforGeeks",
    date: "2023-2025",
    description: "Solved 350+ algorithm problems.",
    icon: Trophy,
    category: "Coding",
    color: "theme-accent-2",
  },
  {
    title: "Teaching Assistant",
    organization: "NIT Andhra Pradesh",
    date: "2024-2025",
    description: "Introduction to Programming Lab.",
    icon: Users,
    category: "Academic",
    color: "theme-accent-3",
  },
  {
    title: "Co-Secretary",
    organization: "CSE Association, NIT Andhra Pradesh",
    date: "2024-2025",
    description: "Leadership role in organizing events and activities.",
    icon: Star,
    category: "Leadership",
    color: "theme-accent",
  },
  {
    title: "Joint Secretary",
    organization: "Coding Club, NIT Andhra Pradesh",
    date: "2024-2025",
    description: "Organized coding contests and workshops.",
    icon: Code,
    category: "Leadership",
    color: "theme-accent-2",
  },
  {
    title: "Open Source Contributor",
    organization: "College Technical Fest",
    date: "2024",
    description: "Website serving 5,000+ participants.",
    icon: Award,
    category: "Open Source",
    color: "theme-accent-3",
  },
  {
    title: "Web Team Member",
    organization: "TEDx NIT Andhra Pradesh",
    date: "2024",
    description: "Contributed to TEDx event website.",
    icon: Zap,
    category: "Community",
    color: "theme-accent",
  },
  {
    title: "Secured Mains & Advance All India Ranks",
    organization: "JEE",
    date: "2022",
    description: "Mains AIR 12968, Advance AIR 12286.",
    icon: Trophy,
    category: "Exams",
    color: "theme-accent-2",
  },
  {
    title: "Secured Ranks in AP EAMCET & TS EAMCET",
    organization: "AP & TS EAMCET",
    date: "2022",
    description: "AP EAMCET Rank 981, TS EAMCET Rank 1082.",
    icon: Star,
    category: "Exams",
    color: "theme-accent-3",
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
          <div className="text-center mb-6 page-hero">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 section-heading-center">Achievements</h1>
            <p className="text-lg text-muted-foreground text-balance mt-3 max-w-2xl mx-auto">
              Recognition, awards, and milestones that highlight my professional journey and contributions to the tech
              community.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <div className="stat-value">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Major Achievements */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 section-heading">Major Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="achievement-card card-glow">
                  <CardContent className="pt-5 pb-5">
                    <div className="achievement-content">
                      <div className="achievement-top-row">
                        <div className={`p-2 rounded-lg bg-muted/50 shrink-0 ${achievement.color}`}>
                          <achievement.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-semibold leading-snug mb-1">{achievement.title}</h3>
                          <div className="achievement-meta">
                            <span className="text-xs text-muted-foreground">{achievement.organization}</span>
                            <span className="text-xs text-muted-foreground opacity-40">|</span>
                            <span className="text-xs text-muted-foreground">{achievement.date}</span>
                            <Badge variant="outline" className="text-[10px] px-1.5 py-0 badge-glow">{achievement.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-11">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Recognition & Media */}
          <section>
            <h2 className="text-2xl font-bold mb-6 section-heading">Recognition & Media</h2>
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Notable Mentions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {recognitions.map((recognition, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 theme-dot rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{recognition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <Card className="mt-8 card-glow" style={{ borderColor: 'rgba(var(--t1-rgb),0.2)', background: 'rgba(var(--t1-rgb),0.03)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Achieve More Together?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's collaborate on your next project and create something amazing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge className="text-sm px-4 py-2 badge-glow">
                    Available for new opportunities
                  </Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2 badge-glow">
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
