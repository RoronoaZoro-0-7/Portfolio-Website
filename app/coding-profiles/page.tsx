"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowLeft, ArrowRight, Flame, Trophy, ExternalLink, RefreshCw, Target, Calendar } from "lucide-react"

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
  size = 140,
  strokeWidth = 12,
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
        <span className="text-3xl font-bold">{solved}</span>
        <span className="text-xs text-muted-foreground">/{total}</span>
        <span className="text-[10px] text-muted-foreground mt-1">Solved</span>
      </div>
    </div>
  )

  if (!showTooltip) return circleContent

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {circleContent}
      </TooltipTrigger>
      <TooltipContent className="bg-background/95 backdrop-blur border border-border p-4 shadow-xl">
        <div className="space-y-3 min-w-[160px]">
          <div className="text-sm font-medium text-muted-foreground mb-3">Difficulty Breakdown</div>
          <div className="flex items-center justify-between">
            <span className="text-green-400 font-medium">Easy</span>
            <span className="text-green-400 font-bold text-lg">{easy}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-amber-400 font-medium">Medium</span>
            <span className="text-amber-400 font-bold text-lg">{medium}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-red-400 font-medium">Hard</span>
            <span className="text-red-400 font-bold text-lg">{hard}</span>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default function CodingProfilesPage() {
  const [stats, setStats] = useState<CodingStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  // Calculate streaks from reference dates
  const leetcodeDailyStreak = calculateDaysSince(LEETCODE_DAILY_REF)
  const leetcodePotdStreak = calculateDaysSince(LEETCODE_POTD_REF)

  async function fetchStats() {
    try {
      setRefreshing(true)
      const res = await fetch('/api/coding-stats', { cache: 'no-store' })
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setStats(data)
      setError(false)
    } catch (err) {
      console.error('Error fetching coding stats:', err)
      setError(true)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Coding Profiles</h1>
                <p className="text-muted-foreground">Track my competitive programming journey in real-time</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchStats}
                disabled={refreshing}
                className="bg-transparent"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* LeetCode Card */}
            <Card className="card-glow overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 p-6 border-b border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-9 h-9 text-white" fill="currentColor">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold">LeetCode</h2>
                      <p className="text-muted-foreground">@Roronoa_Zoro_0703</p>
                    </div>
                    <Link
                      href="https://leetcode.com/u/Roronoa_Zoro_0703/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Stats Body */}
                <div className="p-6">
                  {loading ? (
                    <div className="space-y-4">
                      <div className="h-20 bg-muted/50 rounded-lg animate-pulse"></div>
                      <div className="h-10 bg-muted/50 rounded animate-pulse"></div>
                      <div className="h-10 bg-muted/50 rounded animate-pulse"></div>
                    </div>
                  ) : error || !stats?.leetcode ? (
                    <div className="text-center py-8 text-muted-foreground">
                      Failed to load stats. Click refresh to try again.
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Circular Progress and Stats */}
                      <div className="flex items-center gap-6">
                        <CircularProgressWithTooltip 
                          solved={stats.leetcode.totalSolved}
                          total={3500}
                          size={140}
                          strokeWidth={12}
                          color="#f59e0b"
                          easy={stats.leetcode.easySolved}
                          medium={stats.leetcode.mediumSolved}
                          hard={stats.leetcode.hardSolved}
                          showTooltip={true}
                        />
                        <div className="flex-1 space-y-3">
                          <div className="bg-muted/30 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-orange-400 flex items-center justify-center gap-2">
                              <Flame className="w-7 h-7" />
                              {leetcodeDailyStreak}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Daily Streak</div>
                          </div>
                          <div className="bg-muted/30 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-emerald-400 flex items-center justify-center gap-2">
                              <Target className="w-7 h-7" />
                              {leetcodePotdStreak}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">POTD Streak</div>
                          </div>
                        </div>
                      </div>

                      {/* Extra Stats */}
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400">
                          #{(stats.leetcode.ranking / 1000).toFixed(0)}K Global Rank
                        </Badge>
                        <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-400">
                          {stats.leetcode.totalActiveDays} Active Days
                        </Badge>
                        {stats.leetcode.reputation > 0 && (
                          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
                            {stats.leetcode.reputation} Reputation
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* GeeksforGeeks Card */}
            <Card className="card-glow overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 p-6 border-b border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-9 h-9 text-white" fill="currentColor">
                        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.282-.8h3.503l.602-1.3H14.2a3.774 3.774 0 0 1 .062-.78h4.667l.601-1.3h-4.976a3.787 3.787 0 0 1 1.427-1.942 3.79 3.79 0 0 1 1.927-.608 4.618 4.618 0 0 1 2.692.56l.602-1.3a5.74 5.74 0 0 0-3.138-.69 5.387 5.387 0 0 0-2.898.891 5.384 5.384 0 0 0-2.067 2.489H9.592l-.602 1.3h3.39a5.263 5.263 0 0 0-.062.78H8.99l-.602 1.3h3.932a5.306 5.306 0 0 0 .236.8 5.384 5.384 0 0 0 2.067 2.489 5.387 5.387 0 0 0 2.898.89 5.744 5.744 0 0 0 3.45-1.003l.48.93 1.3-.602-.48-.93a5.317 5.317 0 0 0 .7-2.09l-1.3.602c.032.22.048.443.048.668zM2.55 14.315a5.272 5.272 0 0 0 .048-.668l-1.3-.602a5.317 5.317 0 0 0 .7 2.09l-.48.93 1.3.602.48-.93a5.744 5.744 0 0 0 3.45 1.003 5.387 5.387 0 0 0 2.898-.89 5.384 5.384 0 0 0 2.067-2.489 5.306 5.306 0 0 0 .236-.8h-1.49a3.571 3.571 0 0 1-.282.8 3.79 3.79 0 0 1-2.135 2.078 4.51 4.51 0 0 1-3.116.016 3.691 3.691 0 0 1-1.104-.695 2.662 2.662 0 0 1-.565-.745z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold">GeeksforGeeks</h2>
                      <p className="text-muted-foreground">@user_3xfahfoirv6</p>
                    </div>
                    <Link
                      href="https://www.geeksforgeeks.org/user/user_3xfahfoirv6/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Stats Body */}
                <div className="p-6">
                  {loading ? (
                    <div className="space-y-4">
                      <div className="h-20 bg-muted/50 rounded-lg animate-pulse"></div>
                      <div className="h-10 bg-muted/50 rounded animate-pulse"></div>
                    </div>
                  ) : error || !stats?.gfg ? (
                    <div className="text-center py-8 text-muted-foreground">
                      Failed to load stats. Click refresh to try again.
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Circular Progress and Stats */}
                      <div className="flex items-center gap-6">
                        <CircularProgressWithTooltip 
                          solved={stats.gfg.totalProblemsSolved}
                          total={2000}
                          size={140}
                          strokeWidth={12}
                          color="#10b981"
                          showTooltip={false}
                        />
                        <div className="flex-1 space-y-3">
                          <div className="bg-muted/30 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-emerald-400 flex items-center justify-center gap-2">
                              <Calendar className="w-7 h-7" />
                              {stats.gfg.potdCount || 0}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">POTD Solved</div>
                          </div>
                          <div className="bg-muted/30 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-green-400">{stats.gfg.codingScore}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Coding Score</div>
                          </div>
                        </div>
                      </div>

                      {/* Extra Stats */}
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-400">
                          <Trophy className="w-3 h-3 mr-1" />
                          {stats.gfg.maxStreak} Max Streak
                        </Badge>
                        {stats.gfg.monthlyScore && stats.gfg.monthlyScore > 0 && (
                          <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400">
                            {stats.gfg.monthlyScore} Monthly Score
                          </Badge>
                        )}
                        {stats.gfg.instituteName && (
                          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
                            {stats.gfg.instituteName}
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Last Updated */}
          {stats?.lastUpdated && !loading && (
            <p className="text-center text-sm text-muted-foreground mt-8">
              Last updated: {new Date(stats.lastUpdated).toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
