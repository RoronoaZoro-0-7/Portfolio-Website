'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Mobile version with stars animation */}
      <div className="block md:hidden">
        {/* Dark space background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-black"></div>
        
        {/* Animated stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Larger twinkling stars */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`big-${i}`}
            className="absolute w-2 h-2 bg-blue-300 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Floating particles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-3 h-3 bg-purple-400/30 rounded-full blur-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Desktop version - your existing beautiful animations */}
      <div className="hidden md:block">
        {/* Simplified gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-purple-950/20"></div>
        
        {/* Enhanced mesh gradient overlay with beautiful floating orbs */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 rounded-full mix-blend-multiply filter blur-xl animate-float-diagonal"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full mix-blend-multiply filter blur-xl animate-float-up"></div>
        </div>
        
        {/* Beautiful floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-cyan-400/40 rounded-full animate-float-particle-1"></div>
          <div className="absolute top-[70%] left-[80%] w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-float-particle-2"></div>
          <div className="absolute top-[40%] left-[10%] w-2.5 h-2.5 bg-blue-400/30 rounded-full animate-float-particle-3"></div>
          <div className="absolute top-[85%] left-[60%] w-1 h-1 bg-indigo-400/50 rounded-full animate-float-particle-4"></div>
          <div className="absolute top-[15%] left-[75%] w-1.5 h-1.5 bg-cyan-300/35 rounded-full animate-float-particle-5"></div>
          <div className="absolute top-[60%] left-[25%] w-1 h-1 bg-purple-300/40 rounded-full animate-float-particle-6"></div>
        </div>
        
        {/* Simplified matrix rain - only 3 lines */}
        <div className="absolute inset-0">
          <div className="absolute left-1/6 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-matrix-rain"></div>
          <div className="absolute left-3/6 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-matrix-rain-delayed-1"></div>
          <div className="absolute left-5/6 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-matrix-rain-delayed-2"></div>
        </div>
        
        {/* Simplified code elements - only 3 elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/8 text-cyan-400/40 text-sm font-mono animate-pulse">
            const portfolio = () =&gt;
          </div>
          <div className="absolute bottom-1/4 right-1/8 text-purple-400/40 text-sm font-mono animate-pulse [animation-delay:1s]">
            &lt;Developer /&gt;
          </div>
          <div className="absolute top-2/3 left-1/3 text-blue-400/40 text-sm font-mono animate-pulse [animation-delay:2s]">
            npm run dev
          </div>
        </div>
        
        {/* Minimal floating elements for better performance */}
        <div className="absolute inset-0">
          {/* Single small terminal window */}
          <div className="absolute top-1/4 right-1/12 w-48 h-20 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-2 animate-pulse">
            <div className="text-xs text-green-400/60 font-mono">$ npm run dev</div>
            <div className="text-xs text-cyan-400/50 font-mono">✓ Ready</div>
          </div>
          
          {/* Simple floating symbols */}
          <div className="absolute top-1/3 left-1/8 text-2xl text-cyan-400/30 font-mono animate-bounce">
            {"{}"}
          </div>
          <div className="absolute bottom-1/3 right-1/6 text-2xl text-purple-400/30 font-mono animate-pulse">
            &lt;/&gt;
          </div>
        </div>
        
        {/* Minimal particle system - only 3 particles */}
        <div className="absolute inset-0">
          <div className="particle-glow particle-1"></div>
          <div className="particle-glow particle-2"></div>
          <div className="particle-glow particle-3"></div>
        </div>
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40"></div>
      </div>
    </div>
  )
}