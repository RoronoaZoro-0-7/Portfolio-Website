'use client'

import React from 'react'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Mobile-optimized version with fewer elements */}
      <div className="block md:hidden">
        {/* Simplified background for mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/60 to-purple-950/40"></div>
        
        {/* Basic animated elements for mobile */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-reverse"></div>
        </div>
        
        {/* Minimal glowing elements for mobile */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/8 text-cyan-400/60 text-sm font-mono animate-glow-pulse">
            const mobile = true
          </div>
          <div className="absolute bottom-1/3 right-1/8 text-purple-400/60 text-sm font-mono animate-pulse-bright">
            responsive()
          </div>
        </div>
      </div>

      {/* Full desktop version */}
      <div className="hidden md:block">
      {/* Dynamic gradient background with movement */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/60 to-purple-950/40 animate-gradient-shift"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full mix-blend-multiply filter blur-2xl animate-drift-diagonal"></div>
      </div>
      
      {/* Enhanced matrix rain effect */}
      <div className="absolute inset-0">
        <div className="absolute left-1/12 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-matrix-rain"></div>
        <div className="absolute left-2/12 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/35 to-transparent animate-matrix-rain-delayed-1"></div>
        <div className="absolute left-4/12 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent animate-matrix-rain-delayed-2"></div>
        <div className="absolute left-6/12 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/35 to-transparent animate-matrix-rain-delayed-3"></div>
        <div className="absolute left-8/12 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent animate-matrix-rain-delayed-4"></div>
        <div className="absolute left-10/12 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400/35 to-transparent animate-matrix-rain-delayed-5"></div>
      </div>
      
      {/* Glowing code elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/8 text-cyan-400/60 text-lg font-mono animate-glow-pulse shadow-lg">
          const portfolio = () =&gt;
        </div>
        <div className="absolute top-1/3 right-1/5 text-blue-400/50 text-md font-mono animate-drift-glow">
          &lt;Developer /&gt;
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-purple-400/60 text-lg font-mono animate-pulse-bright">
          async build()
        </div>
        <div className="absolute top-2/3 right-1/8 text-green-400/50 text-md font-mono animate-slide-glow">
          npm run dev
        </div>
        <div className="absolute bottom-1/6 right-2/5 text-yellow-400/60 text-lg font-mono animate-bounce-glow">
          git push origin
        </div>
        <div className="absolute top-1/2 left-1/6 text-pink-400/50 text-md font-mono animate-rotate-glow">
          {"{ useEffect }"}
        </div>
        <div className="absolute top-1/8 right-1/3 text-emerald-400/60 text-lg font-mono animate-float-glow">
          export default
        </div>
      </div>
      
      {/* SUPER OBVIOUS Floating Elements */}
      <div className="absolute inset-0">
        {/* MASSIVE glowing terminal windows - you can't miss these! */}
        <div className="absolute top-1/6 right-1/12 mega-terminal animate-mega-bounce">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <span className="terminal-title">portfolio.dev</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command animate-typing">npm run awesome</span>
            </div>
            <div className="terminal-line success">
              <span className="output">✨ Portfolio loaded successfully!</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-1/5 left-1/10 mega-terminal animate-mega-float">
          <div className="terminal-header purple">
            <div className="terminal-dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <span className="terminal-title">skills.json</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="json-key">"framework"</span>: 
              <span className="json-value">"React"</span>
            </div>
            <div className="terminal-line">
              <span className="json-key">"level"</span>: 
              <span className="json-value animate-pulse-text">"Expert"</span>
            </div>
          </div>
        </div>
        
        {/* GIANT floating code symbols that GLOW like crazy */}
        <div className="absolute top-1/4 right-1/8 giant-symbol animate-symbol-mega">
          <div className="symbol-ultra-glow text-8xl text-cyan-400 font-mono">
            {"{"}
          </div>
          <div className="symbol-trail"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/8 giant-symbol animate-symbol-mega-reverse">
          <div className="symbol-ultra-glow text-8xl text-cyan-400 font-mono">
            {"}"}
          </div>
          <div className="symbol-trail"></div>
        </div>
        
        {/* Neon-style floating tags */}
        <div className="absolute top-1/3 left-1/15 neon-tag animate-neon-pulse">
          <span className="neon-bracket">&lt;</span>
          <span className="neon-text">DEVELOPER</span>
          <span className="neon-bracket">/&gt;</span>
        </div>
        
        {/* HUGE pulsing orbs */}
        <div className="absolute top-2/5 left-1/2 mega-orb animate-orb-mega">
          <div className="orb-core cyan"></div>
          <div className="orb-ring-1"></div>
          <div className="orb-ring-2"></div>
          <div className="orb-ring-3"></div>
        </div>
        
        <div className="absolute bottom-1/2 right-1/4 mega-orb animate-orb-mega-delayed">
          <div className="orb-core purple"></div>
          <div className="orb-ring-1"></div>
          <div className="orb-ring-2"></div>
          <div className="orb-ring-3"></div>
        </div>
        
        {/* Lightning-style connections */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lightningGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
              <stop offset="50%" stopColor="rgba(34, 211, 238, 1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
            <linearGradient id="lightningGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 1)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
            </linearGradient>
            <filter id="lightning-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M 50% 40% L 55% 35% L 60% 42% L 66% 45%" stroke="url(#lightningGradient1)" strokeWidth="4" fill="none" filter="url(#lightning-glow)" className="animate-lightning"/>
          <path d="M 15% 50% L 25% 45% L 35% 48% L 50% 40%" stroke="url(#lightningGradient2)" strokeWidth="4" fill="none" filter="url(#lightning-glow)" className="animate-lightning-delayed"/>
        </svg>
        
        {/* FLOATING CODE CARDS - way more obvious */}
        <div className="absolute top-1/8 left-1/3 floating-code-card animate-card-float">
          <div className="card-glow">
            <div className="card-content">
              <span className="code-keyword">const</span>
              <span className="code-text"> magic = </span>
              <span className="code-string">"✨"</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-1/6 right-2/5 floating-code-card animate-card-float-delayed">
          <div className="card-glow">
            <div className="card-content">
              <span className="code-keyword">async</span>
              <span className="code-text"> function</span>
              <span className="code-bracket">()</span>
            </div>
          </div>
        </div>
        
        <div className="absolute top-3/5 left-1/6 floating-code-card animate-card-float-slow">
          <div className="card-glow">
            <div className="card-content">
              <span className="code-operator">=&gt;</span>
              <span className="code-text"> success</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced particle system */}
      <div className="absolute inset-0">
        <div className="particle-glow particle-1"></div>
        <div className="particle-glow particle-2"></div>
        <div className="particle-glow particle-3"></div>
        <div className="particle-glow particle-4"></div>
        <div className="particle-glow particle-5"></div>
        <div className="particle-glow particle-6"></div>
        <div className="particle-glow particle-7"></div>
        <div className="particle-glow particle-8"></div>
        <div className="particle-glow particle-9"></div>
        <div className="particle-glow particle-10"></div>
      </div>
      
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40"></div>
      </div>
    </div>
  )
}