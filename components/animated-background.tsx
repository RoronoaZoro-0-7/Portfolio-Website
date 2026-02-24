'use client'

import { useState, useEffect, useCallback } from 'react'

type BgStyle = 'developer' | 'constellation' | 'grid' | 'hacker'

const STYLE_LABELS: Record<BgStyle, string> = {
  developer: 'Developer',
  constellation: 'Constellation',
  grid: 'Grid + Particles',
  hacker: 'Hacker',
}

const STORAGE_KEY = 'portfolio-bg-style'

/* ───────────────────────────── Style 1: Developer (redesigned) ───────────────────────────── */
function DeveloperBg() {
  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-black" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${(i * 5 + 2) % 100}%`,
              top: `${(i * 7 + 3) % 100}%`,
              animationDelay: `${(i * 0.15) % 3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`big-${i}`}
            className="absolute w-2 h-2 bg-blue-300 rounded-full animate-ping"
            style={{
              left: `${(i * 12 + 5) % 100}%`,
              top: `${(i * 11 + 10) % 100}%`,
              animationDelay: `${(i * 0.5) % 4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Desktop — redesigned with glassmorphic elements */}
      <div className="hidden md:block">
        {/* Deep layered gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a0e27] to-[#0c0520]" />

        {/* Soft ambient glows */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full filter blur-[100px] animate-float-slow" />
          <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full filter blur-[100px] animate-float-reverse" />
          <div className="absolute top-[50%] left-[50%] w-[350px] h-[350px] bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full filter blur-[80px] animate-drift-diagonal" />
        </div>

        {/* SVG flowing connection paths */}
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 300 Q 300 200, 600 350 T 1200 300" fill="none" stroke="rgba(34,211,238,0.15)" strokeWidth="1" style={{ animation: 'path-flow 4s ease-in-out infinite' }} />
          <path d="M 0 500 Q 400 400, 800 550 T 1600 500" fill="none" stroke="rgba(168,85,247,0.12)" strokeWidth="1" style={{ animation: 'path-flow-delayed 4s ease-in-out infinite 2s' }} />
          <path d="M 200 0 Q 350 300, 500 600 T 800 1200" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="1" style={{ animation: 'path-flow-delayed-2 4s ease-in-out infinite 4s' }} />
        </svg>

        {/* Glassmorphic terminal — top-right */}
        <div className="absolute top-[15%] right-[8%] animate-glass-float">
          <div className="mega-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="terminal-title">index.tsx</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line"><span className="code-keyword">import</span> <span className="code-text">React</span> <span className="code-keyword">from</span> <span className="code-string">&apos;react&apos;</span></div>
              <div className="terminal-line"><span className="code-keyword">import</span> <span className="code-text">{'{ motion }'}</span> <span className="code-keyword">from</span> <span className="code-string">&apos;framer-motion&apos;</span></div>
              <div className="terminal-line" />
              <div className="terminal-line"><span className="code-keyword">const</span> <span className="code-text">App</span> <span className="code-operator">=</span> <span className="code-bracket">()</span> <span className="code-operator">=&gt;</span> <span className="code-bracket">{'{'}</span></div>
              <div className="terminal-line">&nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-bracket">(</span></div>
              <div className="terminal-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-bracket">&lt;</span><span className="code-text">Portfolio</span> <span className="json-key">animate</span><span className="code-operator">=</span><span className="code-bracket">{'{'}</span><span className="json-value">true</span><span className="code-bracket">{'}'}</span> <span className="code-bracket">/&gt;</span></div>
              <div className="terminal-line">&nbsp;&nbsp;<span className="code-bracket">)</span></div>
              <div className="terminal-line"><span className="code-bracket">{'}'}</span></div>
            </div>
          </div>
        </div>

        {/* Glassmorphic terminal — bottom-left (purple variant) */}
        <div className="absolute bottom-[12%] left-[5%] animate-glass-float-delayed">
          <div className="mega-terminal purple">
            <div className="terminal-header purple">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="terminal-title">terminal</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line"><span className="prompt">~$</span> <span className="command">npm run build</span></div>
              <div className="terminal-line"><span className="output">▸ Creating optimized build...</span></div>
              <div className="terminal-line success"><span className="output">✓ Compiled successfully</span></div>
              <div className="terminal-line"><span className="output">✓ 13 pages generated</span></div>
            </div>
          </div>
        </div>

        {/* Organic floating symbols */}
        <div className="absolute top-[35%] left-[42%] organic-symbol animate-organic-float" style={{ animationDelay: '0s' }}>
          <span className="text-4xl text-cyan-400/25 symbol-glow">&lt;/&gt;</span>
        </div>
        <div className="absolute top-[60%] right-[35%] organic-symbol animate-organic-float-reverse" style={{ animationDelay: '3s' }}>
          <span className="text-3xl text-purple-400/20 symbol-glow">{'{}'}</span>
        </div>
        <div className="absolute top-[20%] left-[60%] organic-symbol animate-organic-float" style={{ animationDelay: '6s' }}>
          <span className="text-2xl text-blue-400/20 symbol-glow">()</span>
        </div>

        {/* Code bubbles */}
        <div className="absolute top-[45%] left-[8%] code-bubble animate-bubble-float" style={{ animationDelay: '0s' }}>
          <span className="bubble-text">const dev = true</span>
        </div>
        <div className="absolute top-[75%] right-[20%] code-bubble animate-bubble-float-delayed" style={{ animationDelay: '2s' }}>
          <span className="bubble-text">async/await</span>
        </div>
        <div className="absolute top-[25%] left-[30%] code-bubble animate-bubble-float-slow" style={{ animationDelay: '4s' }}>
          <span className="bubble-text">npm install</span>
        </div>

        {/* Connection nodes with pulses */}
        <div className="absolute top-[30%] left-[20%] connection-node animate-node-organic" style={{ animationDelay: '0s' }}>
          <div className="node-core bg-cyan-400/40" />
          <div className="node-ring" />
          <div className="node-outer-ring" />
        </div>
        <div className="absolute top-[65%] left-[70%] connection-node animate-node-organic-delayed" style={{ animationDelay: '2s' }}>
          <div className="node-core bg-purple-400/40" />
          <div className="node-ring" style={{ borderColor: 'rgba(168,85,247,0.3)' }} />
          <div className="node-outer-ring" style={{ borderColor: 'rgba(168,85,247,0.15)' }} />
        </div>

        {/* Scattered glow particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`particle-glow particle-${i + 1}`}
            />
          ))}
        </div>

        {/* Vignette/gradient fade */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
      </div>
    </>
  )
}

/* ───────────────────────────── Style 2: Constellation ───────────────────────────── */
function ConstellationBg() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d2b] to-[#0a0a1a]" />

      {/* Fixed star dots */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="constellation-star"
          style={{
            left: `${(i * 2.5 + 1) % 100}%`,
            top: `${(i * 3.7 + 2) % 100}%`,
            width: `${1.5 + (i % 3)}px`,
            height: `${1.5 + (i % 3)}px`,
            animationDelay: `${(i * 0.3) % 5}s`,
          }}
        />
      ))}

      {/* Connecting lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="15%" x2="25%" y2="30%" className="constellation-line anim-line-1" />
        <line x1="25%" y1="30%" x2="45%" y2="20%" className="constellation-line anim-line-2" />
        <line x1="45%" y1="20%" x2="60%" y2="40%" className="constellation-line anim-line-3" />
        <line x1="60%" y1="40%" x2="80%" y2="25%" className="constellation-line anim-line-1" />
        <line x1="80%" y1="25%" x2="92%" y2="45%" className="constellation-line anim-line-2" />
        <line x1="15%" y1="60%" x2="35%" y2="75%" className="constellation-line anim-line-3" />
        <line x1="35%" y1="75%" x2="55%" y2="65%" className="constellation-line anim-line-1" />
        <line x1="55%" y1="65%" x2="75%" y2="80%" className="constellation-line anim-line-2" />
        <line x1="75%" y1="80%" x2="90%" y2="70%" className="constellation-line anim-line-3" />
        <line x1="25%" y1="30%" x2="35%" y2="75%" className="constellation-line anim-line-2" />
        <line x1="45%" y1="20%" x2="55%" y2="65%" className="constellation-line anim-line-3" />
        <line x1="80%" y1="25%" x2="75%" y2="80%" className="constellation-line anim-line-1" />
      </svg>

      {/* Glowing nodes */}
      {[
        { x: 10, y: 15, c: 'cyan' }, { x: 25, y: 30, c: 'blue' }, { x: 45, y: 20, c: 'purple' },
        { x: 60, y: 40, c: 'cyan' }, { x: 80, y: 25, c: 'blue' }, { x: 92, y: 45, c: 'purple' },
        { x: 15, y: 60, c: 'cyan' }, { x: 35, y: 75, c: 'blue' }, { x: 55, y: 65, c: 'purple' },
        { x: 75, y: 80, c: 'cyan' }, { x: 90, y: 70, c: 'blue' },
      ].map((n, i) => (
        <div
          key={i}
          className={`constellation-node constellation-node-${n.c}`}
          style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * 0.4}s` }}
        />
      ))}

      {/* Soft radial glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-glow animation-delay-2000" />
    </>
  )
}

/* ───────────────────────────── Style 3: Grid + Particles ───────────────────────────── */
function GridBg() {
  return (
    <>
      <div className="absolute inset-0 bg-[#07070f]" />

      {/* Dot grid */}
      <div className="absolute inset-0 grid-dots" />

      {/* Floating glow particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="grid-particle"
          style={{
            left: `${(i * 8 + 4) % 100}%`,
            top: `${(i * 9 + 6) % 100}%`,
            width: `${3 + (i % 3)}px`,
            height: `${3 + (i % 3)}px`,
            animationDelay: `${(i * 0.7) % 8}s`,
            animationDuration: `${10 + (i % 5) * 2}s`,
          }}
        />
      ))}

      {/* Crosshair accent lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />

      {/* Corner glow accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl" />
    </>
  )
}

/* ───────────────────────────── Style 4: Hacker ───────────────────────────── */
function HackerBg() {
  const hexChars = '0123456789ABCDEF'
  return (
    <>
      <div className="absolute inset-0 bg-[#020a02]" />

      {/* CRT scanlines overlay */}
      <div className="absolute inset-0 hacker-scanlines pointer-events-none" />

      {/* Horizontal glitch scan line */}
      <div className="absolute left-0 w-full h-px hacker-scan-line" />

      {/* Green grid lines */}
      <div className="absolute inset-0 hacker-grid" />

      {/* Scrolling hex data columns */}
      {Array.from({ length: 14 }).map((_, col) => (
        <div
          key={col}
          className="hacker-hex-column"
          style={{
            left: `${col * 7 + 1.5}%`,
            animationDelay: `${(col * 0.4) % 5}s`,
            animationDuration: `${6 + (col % 4) * 2}s`,
          }}
        >
          {Array.from({ length: 8 }).map((_, row) => (
            <span
              key={row}
              className={`hacker-hex-char ${row === 0 ? 'hacker-hex-head' : ''}`}
              style={{ animationDelay: `${(col * 0.15 + row * 0.2) % 3}s` }}
            >
              {`${hexChars[(col * 3 + row * 7) % 16]}${hexChars[(col * 5 + row * 11) % 16]}`}
            </span>
          ))}
        </div>
      ))}

      {/* Floating terminal boxes */}
      <div className="absolute top-[12%] left-[5%] hacker-terminal" style={{ animationDelay: '0s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">root@sys</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>$ nmap -sV 192.168.1.0/24</div>
          <div className="text-green-500/40">Scanning 254 hosts...</div>
          <div className="text-green-300/60 hacker-blink">PORT &nbsp;STATE &nbsp;SERVICE</div>
        </div>
      </div>

      <div className="absolute top-[55%] right-[6%] hacker-terminal" style={{ animationDelay: '2s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">decrypt</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>$ ssh -i key.pem admin@10.0.0.1</div>
          <div className="text-green-300/70 hacker-blink">ACCESS GRANTED</div>
        </div>
      </div>

      <div className="absolute bottom-[18%] left-[30%] hacker-terminal" style={{ animationDelay: '4s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">trace</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>$ traceroute target.onion</div>
          <div className="text-green-500/40">1 &nbsp;10.0.0.1 &nbsp;2ms</div>
          <div className="text-green-500/40">2 &nbsp;172.16.0.1 &nbsp;8ms</div>
          <div className="text-green-300/60 hacker-blink">3 &nbsp;*.*.*.* &nbsp;???</div>
        </div>
      </div>

      {/* Green glow spots */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-green-500/4 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-green-400/3 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />

      {/* Glitch flicker overlay */}
      <div className="absolute inset-0 hacker-glitch" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
    </>
  )
}

/* ───────────────────────────── Style Picker ───────────────────────────── */
const STYLES: BgStyle[] = ['developer', 'constellation', 'grid', 'hacker']

const THEME_COLORS: Record<BgStyle, string> = {
  developer: '#3b82f6',
  constellation: '#a855f7',
  grid: '#06b6d4',
  hacker: '#22c55e',
}

function StylePicker({ current, onChange }: { current: BgStyle; onChange: (s: BgStyle) => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Options panel */}
      {open && (
        <div className="bg-card/90 backdrop-blur-lg border border-border rounded-xl p-2 shadow-2xl mb-1 min-w-[180px] max-h-[70vh] overflow-y-auto scrollbar-hide animate-in fade-in slide-in-from-bottom-2 duration-200">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 pt-1 pb-2 font-medium sticky top-0 bg-card/90 backdrop-blur-lg z-10">Theme</p>
          {STYLES.map((s) => (
            <button
              key={s}
              onClick={() => { onChange(s); setOpen(false) }}
              className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 ${
                current === s
                  ? 'bg-primary/15 text-primary font-medium'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: THEME_COLORS[s] }} />
              {STYLE_LABELS[s]}
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-lg border shadow-lg flex items-center justify-center hover:bg-card transition-colors group"
        style={{ borderColor: THEME_COLORS[current] }}
        title="Change theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    </div>
  )
}

/* ───────────────────────────── Main Export ───────────────────────────── */
const BG_MAP: Record<BgStyle, () => JSX.Element> = {
  developer: DeveloperBg,
  constellation: ConstellationBg,
  grid: GridBg,
  hacker: HackerBg,
}

export default function AnimatedBackground() {
  const [style, setStyle] = useState<BgStyle>('developer')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as BgStyle | null
      if (saved && STYLES.includes(saved)) setStyle(saved)
    } catch {}
  }, [])

  // Sync data-theme attribute for CSS variable theming
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', style)
  }, [style])

  const changeStyle = useCallback((s: BgStyle) => {
    setStyle(s)
    try { localStorage.setItem(STORAGE_KEY, s) } catch {}
  }, [])

  const ActiveBg = BG_MAP[style]

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden">
        <ActiveBg />
      </div>
      <StylePicker current={style} onChange={changeStyle} />
    </>
  )
}