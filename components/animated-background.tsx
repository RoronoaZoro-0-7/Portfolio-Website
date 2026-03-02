'use client'

import { useState, useEffect, useCallback } from 'react'

type BgStyle = 'developer' | 'constellation' | 'hacker'

const STYLE_LABELS: Record<BgStyle, string> = {
  developer: 'Developer',
  constellation: 'Constellation',
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
      </div>

      {/* Desktop — clean modern developer aesthetic */}
      <div className="hidden md:block">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a0f1c] to-[#0a0618]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 dev-grid-pattern opacity-[0.03]" />

        {/* Very soft ambient glows - reduced intensity */}
        <div className="absolute inset-0">
          <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-blue-500/8 rounded-full filter blur-[150px]" />
          <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-purple-500/6 rounded-full filter blur-[150px]" />
          <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full filter blur-[120px]" />
        </div>

        {/* Floating code card 1 — top right */}
        <div className="absolute top-[12%] right-[6%] dev-code-card animate-float-gentle" style={{ animationDelay: '0s' }}>
          <div className="dev-card-header">
            <span className="dev-card-dot bg-red-400/80" />
            <span className="dev-card-dot bg-yellow-400/80" />
            <span className="dev-card-dot bg-green-400/80" />
            <span className="dev-card-title">app.tsx</span>
          </div>
          <div className="dev-card-body">
            <span className="dev-ln">1</span><span className="dev-kw">export</span> <span className="dev-kw">default</span> <span className="dev-fn">App</span><span className="dev-op">()</span>
          </div>
        </div>

        {/* Floating code card 2 — bottom left */}
        <div className="absolute bottom-[15%] left-[4%] dev-code-card dev-card-purple animate-float-gentle-reverse" style={{ animationDelay: '2s' }}>
          <div className="dev-card-header purple">
            <span className="dev-card-dot bg-red-400/80" />
            <span className="dev-card-dot bg-yellow-400/80" />
            <span className="dev-card-dot bg-green-400/80" />
            <span className="dev-card-title">terminal</span>
          </div>
          <div className="dev-card-body">
            <span className="dev-ln">$</span><span className="dev-cmd">npm run dev</span>
          </div>
        </div>

        {/* Floating code card 3 — top center-right */}
        <div className="absolute top-[35%] right-[18%] dev-code-card dev-card-cyan animate-float-gentle" style={{ animationDelay: '4s' }}>
          <div className="dev-card-header cyan">
            <span className="dev-card-dot bg-red-400/80" />
            <span className="dev-card-dot bg-yellow-400/80" />
            <span className="dev-card-dot bg-green-400/80" />
            <span className="dev-card-title">utils.ts</span>
          </div>
          <div className="dev-card-body">
            <span className="dev-ln">1</span><span className="dev-kw">export</span> <span className="dev-fn">const</span> <span className="dev-op">format</span>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-[25%] left-[55%] dev-hex animate-spin-very-slow" style={{ animationDuration: '40s' }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M40 5 L70 22.5 L70 57.5 L40 75 L10 57.5 L10 22.5 Z" stroke="rgba(34,211,238,0.15)" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute top-[70%] right-[25%] dev-hex animate-spin-very-slow-reverse" style={{ animationDuration: '50s' }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 4 L52.5 17 L52.5 43 L30 56 L7.5 43 L7.5 17 Z" stroke="rgba(168,85,247,0.12)" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute top-[15%] left-[35%] dev-hex animate-spin-very-slow" style={{ animationDuration: '35s' }}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M25 3 L44 14.5 L44 35.5 L25 47 L6 35.5 L6 14.5 Z" stroke="rgba(59,130,246,0.1)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Floating brackets/symbols — very subtle */}
        <div className="absolute top-[40%] right-[40%] animate-pulse-slow opacity-20">
          <span className="text-3xl text-cyan-300 font-mono">&lt;/&gt;</span>
        </div>
        <div className="absolute top-[65%] left-[45%] animate-pulse-slow opacity-15" style={{ animationDelay: '1.5s' }}>
          <span className="text-2xl text-purple-300 font-mono">{'{}'}</span>
        </div>
        <div className="absolute top-[20%] right-[55%] animate-pulse-slow opacity-15" style={{ animationDelay: '3s' }}>
          <span className="text-xl text-blue-300 font-mono">()</span>
        </div>

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="15%" y1="20%" x2="45%" y2="35%" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="4 8" className="animate-dash-flow" />
          <line x1="55%" y1="30%" x2="85%" y2="45%" stroke="rgba(168,85,247,0.25)" strokeWidth="1" strokeDasharray="4 8" className="animate-dash-flow" style={{ animationDelay: '1s' }} />
          <line x1="10%" y1="60%" x2="40%" y2="75%" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="4 8" className="animate-dash-flow" style={{ animationDelay: '2s' }} />
        </svg>

        {/* Small floating dots */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-slow"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 6.5 + 3) % 95}%`,
              top: `${(i * 7.2 + 5) % 90}%`,
              backgroundColor: i % 3 === 0 ? 'rgba(34,211,238,0.4)' : i % 3 === 1 ? 'rgba(168,85,247,0.35)' : 'rgba(59,130,246,0.35)',
              animationDelay: `${(i * 0.3) % 4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />
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

/* ───────────────────────────── Style 3: Hacker ───────────────────────────── */
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

      {/* Floating terminal boxes with cybersecurity commands */}
      <div className="absolute top-[8%] right-[4%] hacker-terminal animate-float-gentle" style={{ animationDelay: '0s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">metasploit</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>msf6 &gt; use exploit/multi/handler</div>
          <div className="text-green-500/40">msf6 exploit &gt; set PAYLOAD windows/meterpreter</div>
          <div className="text-green-300/60 hacker-blink">[*] Exploit running as background job</div>
        </div>
      </div>

      <div className="absolute top-[25%] right-[12%] hacker-terminal animate-float-gentle" style={{ animationDelay: '0.5s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">burpsuite</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>Proxy &gt; Intercept is on</div>
          <div className="text-green-500/40">POST /api/login HTTP/1.1</div>
          <div className="text-green-300/60 hacker-blink">[!] SQLi vulnerability detected</div>
        </div>
      </div>

      <div className="absolute top-[12%] left-[5%] hacker-terminal animate-float-gentle" style={{ animationDelay: '1s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">hydra</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>$ hydra -l admin -P wordlist.txt ssh://target</div>
          <div className="text-green-500/40">[DATA] attacking ssh://192.168.1.100:22</div>
          <div className="text-green-300/60 hacker-blink">[22][ssh] host: 192.168.1.100 login: admin</div>
        </div>
      </div>

      <div className="absolute top-[55%] right-[6%] hacker-terminal animate-float-gentle" style={{ animationDelay: '2s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">wireshark</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>$ tshark -i eth0 -f "port 443"</div>
          <div className="text-green-500/40">Capturing on 'eth0'</div>
          <div className="text-green-300/70 hacker-blink">TCP 192.168.1.1 → 10.0.0.5 [SYN]</div>
        </div>
      </div>

      <div className="absolute bottom-[18%] left-[30%] hacker-terminal animate-float-gentle" style={{ animationDelay: '3s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">hashcat</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>$ hashcat -m 1000 hash.txt rockyou.txt</div>
          <div className="text-green-500/40">Session: hashcat | Status: Running</div>
          <div className="text-green-300/60 hacker-blink">Cracked: 847/1000 (84.70%)</div>
        </div>
      </div>

      <div className="absolute top-[38%] left-[8%] hacker-terminal animate-float-gentle" style={{ animationDelay: '4s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">sqlmap</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>$ sqlmap -u "http://target/id=1" --dbs</div>
          <div className="text-green-500/40">[INFO] testing connection to target URL</div>
          <div className="text-green-300/60 hacker-blink">[VULN] GET parameter 'id' is injectable</div>
        </div>
      </div>

      <div className="absolute bottom-[35%] right-[25%] hacker-terminal animate-float-gentle" style={{ animationDelay: '5s' }}>
        <div className="hacker-terminal-header">
          <span className="hacker-terminal-dot" />
          <span className="text-green-500/60 text-[9px] font-mono ml-1.5">nmap</span>
        </div>
        <div className="text-[10px] text-green-400/50 font-mono leading-relaxed">
          <div>$ nmap -sS -sV -O 10.0.0.0/24</div>
          <div className="text-green-500/40">22/tcp &nbsp;open &nbsp;ssh &nbsp;OpenSSH 8.2</div>
          <div className="text-green-300/60 hacker-blink">80/tcp &nbsp;open &nbsp;http &nbsp;Apache 2.4</div>
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
const STYLES: BgStyle[] = ['developer', 'constellation', 'hacker']

const THEME_COLORS: Record<BgStyle, string> = {
  developer: '#3b82f6',
  constellation: '#a855f7',
  hacker: '#22c55e',
}

const THEME_DESCRIPTIONS: Record<BgStyle, string> = {
  developer: 'Blue & cyan glassmorphic',
  constellation: 'Purple & pink stellar',
  hacker: 'Green terminal vibes',
}

function StylePicker({ current, onChange }: { current: BgStyle; onChange: (s: BgStyle) => void }) {
  const [open, setOpen] = useState(false)

  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    if (open) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  return (
    <>
      {/* Backdrop on mobile when open */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
        {/* Options panel */}
        {open && (
          <div className="
            fixed bottom-0 left-0 right-0 sm:relative sm:bottom-auto sm:left-auto sm:right-auto
            bg-card/95 backdrop-blur-xl border-t sm:border border-border
            sm:rounded-xl rounded-t-2xl
            p-3 sm:p-2 shadow-2xl sm:mb-1
            sm:min-w-[200px] sm:max-h-[70vh]
            animate-in fade-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 duration-200
          ">
            {/* Mobile drag handle */}
            <div className="w-10 h-1 rounded-full bg-muted-foreground/30 mx-auto mb-3 sm:hidden" />
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 pt-1 pb-2 font-medium">Theme</p>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-0">
              {STYLES.map((s) => (
                <button
                  key={s}
                  onClick={() => { onChange(s); setOpen(false) }}
                  className={`text-left text-sm px-3 py-2.5 sm:py-1.5 rounded-xl sm:rounded-lg transition-all flex items-center gap-2.5 ${
                    current === s
                      ? 'bg-[rgba(var(--t1-rgb),0.12)] ring-1 ring-[rgba(var(--t1-rgb),0.25)] font-medium'
                      : 'hover:bg-muted/60 text-foreground'
                  }`}
                >
                  <span
                    className={`w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 transition-shadow ${current === s ? 'shadow-[0_0_8px_2px]' : ''}`}
                    style={{ background: THEME_COLORS[s], ...(current === s ? { boxShadow: `0 0 8px 2px ${THEME_COLORS[s]}50` } : {}) }}
                  />
                  <div className="min-w-0">
                    <span className="block leading-tight">{STYLE_LABELS[s]}</span>
                    <span className="block text-[10px] text-muted-foreground leading-tight sm:hidden">{THEME_DESCRIPTIONS[s]}</span>
                  </div>
                </button>
              ))}
            </div>
            {/* Safe area spacing for phones with gesture bar */}
            <div className="h-2 sm:hidden" />
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-card/80 backdrop-blur-lg border shadow-lg flex items-center justify-center hover:bg-card transition-all group active:scale-90"
          style={{ borderColor: THEME_COLORS[current], boxShadow: `0 0 16px 2px ${THEME_COLORS[current]}20, 0 4px 12px rgba(0,0,0,0.3)` }}
          title="Change theme"
        >
          <span
            className="w-4 h-4 rounded-full transition-all group-hover:scale-110"
            style={{ background: `conic-gradient(${THEME_COLORS.developer}, ${THEME_COLORS.constellation}, ${THEME_COLORS.hacker}, ${THEME_COLORS.developer})` }}
          />
        </button>
      </div>
    </>
  )
}

/* ───────────────────────────── Main Export ───────────────────────────── */
const BG_MAP: Record<BgStyle, () => JSX.Element> = {
  developer: DeveloperBg,
  constellation: ConstellationBg,
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