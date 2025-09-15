'use client'

import NoSSR from '@/components/no-ssr'
import dynamic from 'next/dynamic'

// Dynamic imports with no SSR
const DynamicCursor = dynamic(() => import("@/components/cursor"), { 
  ssr: false
})

const DynamicAnimatedBackground = dynamic(() => import("@/components/animated-background"), { 
  ssr: false
})

// Wrapper components that prevent hydration issues
export function CustomCursor() {
  return (
    <NoSSR>
      <DynamicCursor />
    </NoSSR>
  )
}

export function AnimatedBackground() {
  return (
    <NoSSR>
      <DynamicAnimatedBackground />
    </NoSSR>
  )
}