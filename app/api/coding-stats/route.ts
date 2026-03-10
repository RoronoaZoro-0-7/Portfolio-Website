import { NextResponse } from 'next/server'
import { LeetCode } from 'leetcode-query'

// LeetCode API using leetcode-query package
async function fetchLeetCodeStats(username: string) {
  try {
    const lc = new LeetCode()
    
    // Get user profile for solved counts
    const user = await lc.user(username)
    
    // Get calendar with streak using GraphQL
    const calendarQuery = `query userProfileCalendar($username: String!, $year: Int) {
      matchedUser(username: $username) {
        userCalendar(year: $year) {
          streak
          totalActiveDays
        }
      }
    }`
    
    const calendarData = await lc.graphql({
      query: calendarQuery,
      variables: { username, year: new Date().getFullYear() }
    })
    
    const submitStats = user.matchedUser?.submitStats?.acSubmissionNum || []
    const calendar = calendarData.data?.matchedUser?.userCalendar
    
    const totalSolved = submitStats.find((s: any) => s.difficulty === 'All')?.count || 0
    const easySolved = submitStats.find((s: any) => s.difficulty === 'Easy')?.count || 0
    const mediumSolved = submitStats.find((s: any) => s.difficulty === 'Medium')?.count || 0
    const hardSolved = submitStats.find((s: any) => s.difficulty === 'Hard')?.count || 0
    
    return {
      username: user.matchedUser?.username || username,
      ranking: user.matchedUser?.profile?.ranking || 0,
      reputation: user.matchedUser?.profile?.reputation || 0,
      contestRating: 0,
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      streak: calendar?.streak || 0,
      totalActiveDays: calendar?.totalActiveDays || 0
    }
  } catch (error) {
    console.error('LeetCode fetch error:', error)
    return null
  }
}

// GeeksforGeeks API using official auth API (has more data than profile-stats)
async function fetchGFGStats(username: string) {
  try {
    const response = await fetch(
      `https://authapi.geeksforgeeks.org/api-get/user-profile-info/?handle=${username}`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0'
        },
        next: { revalidate: 3600 }
      }
    )

    if (!response.ok) throw new Error('GFG API error')
    
    const result = await response.json()
    const data = result.data
    
    if (!data) throw new Error('No GFG data')
    
    return {
      username: data.name || username,
      codingScore: data.score || 0,
      monthlyScore: data.monthly_score || 0,
      totalProblemsSolved: data.total_problems_solved || 0,
      potdCount: data.pod_correct_submissions_count || 0,
      currentStreak: data.pod_solved_current_streak?.toString() || '0',
      maxStreak: data.pod_solved_longest_streak?.toString() || '0',
      instituteRank: data.institute_rank || '',
      instituteName: data.institute_name || '',
      avatar: data.profile_image_url || ''
    }
  } catch (error) {
    console.error('GFG fetch error:', error)
    return null
  }
}

export async function GET() {
  try {
    const [leetcode, gfg] = await Promise.all([
      fetchLeetCodeStats('Roronoa_Zoro_0703'),
      fetchGFGStats('user_3xfahfoirv6')
    ])

    return NextResponse.json({
      leetcode,
      gfg,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching coding stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch coding stats' },
      { status: 500 }
    )
  }
}
