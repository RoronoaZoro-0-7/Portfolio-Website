"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowRight, TrendingUp, Target, Flame, Trophy, Calendar } from "lucide-react"

interface LeetCodeStats {
  username: string
  ranking: number
  reputation: number
  contestRating: number
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  streak: number
  totalActiveDays: number
}

interface GFGStats {
  username: string
  currentStreak: string
  maxStreak: string
  codingScore: number
  monthlyScore?: number
  totalProblemsSolved: number
  potdCount?: number
  instituteRank?: string
  instituteName?: string
  avatar?: string
}

interface CodingStats {
  leetcode: LeetCodeStats | null
  gfg: GFGStats | null
  lastUpdated: string
}

// Calculate days since a reference date
function calculateDaysSince(refDateStr: string): number {
  const refDate = new Date(refDateStr)
  const today = new Date()
  const diffTime = today.getTime() - refDate.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return diffDays + 1 // Include the reference date
}

// LeetCode Daily streak reference: Dec 29, 2025
const LEETCODE_DAILY_REF = "2025-12-29"
// LeetCode POTD streak reference: Oct 29, 2025
const LEETCODE_POTD_REF = "2025-10-29"

// Circular Progress Component with Tooltip
function CircularProgressWithTooltip({ 
  solved, 
  total, 
  size = 100,
  strokeWidth = 8,
  color = "#f59e0b",
  easy = 0,
  medium = 0,
  hard = 0,
  showTooltip = false
}: { 
  solved: number
  total: number
  size?: number
  strokeWidth?: number
  color?: string
  easy?: number
  medium?: number
  hard?: number
  showTooltip?: boolean
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const percentage = Math.min((solved / total) * 100, 100)
  const offset = circumference - (percentage / 100) * circumference

  const circleContent = (
    <div className="relative cursor-pointer" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/30"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold">{solved}</span>
        <span className="text-[9px] text-muted-foreground">/{total}</span>
      </div>
    </div>
  )

  if (!showTooltip) return circleContent

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {circleContent}
      </TooltipTrigger>
      <TooltipContent className="bg-background/95 backdrop-blur border border-border p-3 shadow-xl">
        <div className="space-y-2 min-w-[140px]">
          <div className="text-xs font-medium text-muted-foreground mb-2">Difficulty Breakdown</div>
          <div className="flex items-center justify-between">
            <span className="text-green-400 text-sm font-medium">Easy</span>
            <span className="text-green-400 font-bold">{easy}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-amber-400 text-sm font-medium">Medium</span>
            <span className="text-amber-400 font-bold">{medium}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-red-400 text-sm font-medium">Hard</span>
            <span className="text-red-400 font-bold">{hard}</span>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default function CodingProfiles() {
  const [stats, setStats] = useState<CodingStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Calculate streaks from reference dates
  const leetcodeDailyStreak = calculateDaysSince(LEETCODE_DAILY_REF)
  const leetcodePotdStreak = calculateDaysSince(LEETCODE_POTD_REF)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/coding-stats')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setStats(data)
      } catch (err) {
        console.error('Error fetching coding stats:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  return (
    <section className="py-14 home-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 fade-up">
            <h2 className="text-3xl font-bold section-heading-center">Coding Profiles</h2>
            <p className="text-muted-foreground mt-3">Track my competitive programming journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LeetCode Card */}
            <Link
              href="/coding-profiles"
              className="fade-up"
            >
              <Card className="card-glow h-full hover:scale-[1.02] transition-transform duration-300 cursor-pointer overflow-hidden">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">LeetCode</h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm">@Roronoa_Zoro_0703</p>
                    </div>
                  </div>

                  {loading ? (
                    <div className="space-y-2">
                      <div className="h-4 bg-muted/50 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-muted/50 rounded animate-pulse w-1/2"></div>
                    </div>
                  ) : error || !stats?.leetcode ? (
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-amber-500/10 border-amber-500/30 text-amber-400">
                        1400+ Rating
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/30 text-green-400">
                        200+ Problems
                      </Badge>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      {/* Circular Progress Sphere with Tooltip */}
                      <CircularProgressWithTooltip 
                        solved={stats.leetcode.totalSolved}
                        total={3500}
                        size={90}
                        strokeWidth={8}
                        color="#f59e0b"
                        easy={stats.leetcode.easySolved}
                        medium={stats.leetcode.mediumSolved}
                        hard={stats.leetcode.hardSolved}
                        showTooltip={true}
                      />
                      
                      {/* Streak Info */}
                      <div className="flex-1 space-y-2">
                        <div className="bg-muted/30 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-orange-400 flex items-center justify-center">
                            <Flame className="w-4 h-4 mr-1" />
                            {leetcodeDailyStreak}
                          </div>
                          <div className="text-[9px] text-muted-foreground uppercase">Daily Streak</div>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-emerald-400 flex items-center justify-center">
                            <Target className="w-4 h-4 mr-1" />
                            {leetcodePotdStreak}
                          </div>
                          <div className="text-[9px] text-muted-foreground uppercase">POTD Streak</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>

            {/* GeeksforGeeks Card */}
            <Link
              href="/coding-profiles"
              className="fade-up"
              style={{ transitionDelay: '0.1s' }}
            >
              <Card className="card-glow h-full hover:scale-[1.02] transition-transform duration-300 cursor-pointer overflow-hidden">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.282-.8h3.503l.602-1.3H14.2a3.774 3.774 0 0 1 .062-.78h4.667l.601-1.3h-4.976a3.787 3.787 0 0 1 1.427-1.942 3.79 3.79 0 0 1 1.927-.608 4.618 4.618 0 0 1 2.692.56l.602-1.3a5.74 5.74 0 0 0-3.138-.69 5.387 5.387 0 0 0-2.898.891 5.384 5.384 0 0 0-2.067 2.489H9.592l-.602 1.3h3.39a5.263 5.263 0 0 0-.062.78H8.99l-.602 1.3h3.932a5.306 5.306 0 0 0 .236.8 5.384 5.384 0 0 0 2.067 2.489 5.387 5.387 0 0 0 2.898.89 5.744 5.744 0 0 0 3.45-1.003l.48.93 1.3-.602-.48-.93a5.317 5.317 0 0 0 .7-2.09l-1.3.602c.032.22.048.443.048.668zM2.55 14.315a5.272 5.272 0 0 0 .048-.668l-1.3-.602a5.317 5.317 0 0 0 .7 2.09l-.48.93 1.3.602.48-.93a5.744 5.744 0 0 0 3.45 1.003 5.387 5.387 0 0 0 2.898-.89 5.384 5.384 0 0 0 2.067-2.489 5.306 5.306 0 0 0 .236-.8h-1.49a3.571 3.571 0 0 1-.282.8 3.79 3.79 0 0 1-2.135 2.078 4.51 4.51 0 0 1-3.116.016 3.691 3.691 0 0 1-1.104-.695 2.662 2.662 0 0 1-.565-.745z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">GeeksforGeeks</h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm">@user_3xfahfoirv6</p>
                    </div>
                  </div>

                  {loading ? (
                    <div className="space-y-2">
                      <div className="h-4 bg-muted/50 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-muted/50 rounded animate-pulse w-1/2"></div>
                    </div>
                  ) : error || !stats?.gfg ? (
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/30 text-green-400">
                        550+ Score
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
                        160+ Problems
                      </Badge>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      {/* Circular Progress Sphere */}
                      <CircularProgressWithTooltip 
                        solved={stats.gfg.totalProblemsSolved}
                        total={2000}
                        size={90}
                        strokeWidth={8}
                        color="#10b981"
                        showTooltip={false}
                      />
                      
                      {/* GFG Stats */}
                      <div className="flex-1 space-y-2">
                        <div className="bg-muted/30 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-emerald-400 flex items-center justify-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {stats.gfg.potdCount || 0}
                          </div>
                          <div className="text-[9px] text-muted-foreground uppercase">POTD Solved</div>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-green-400">{stats.gfg.codingScore}</div>
                          <div className="text-[9px] text-muted-foreground uppercase">Coding Score</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* View Full Stats Link */}
          <div className="text-center mt-6 fade-up">
            <Link 
              href="/coding-profiles"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View Full Stats
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Last updated indicator */}
          {stats?.lastUpdated && !loading && (
            <p className="text-center text-[10px] text-muted-foreground mt-4 opacity-60">
              Stats refreshed: {new Date(stats.lastUpdated).toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
