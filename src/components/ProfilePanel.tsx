import { Award, Sparkles, Code2, FileCode2, Palette } from 'lucide-react'

/**
 * Right-side hero visual. Replaces the old photo/avatar panel with a
 * circuit-style tech badge (inspired by the reference graphic) that puts the
 * core stack — Python, HTML, CSS — front and center instead of a headshot.
 */

const TECH = [
  { name: 'Python', Icon: Code2 },
  { name: 'HTML', Icon: FileCode2 },
  { name: 'CSS', Icon: Palette },
]

// Radiating circuit traces, generated once — evenly spaced angles with
// slightly varied lengths so it doesn't read as a perfect mechanical ring.
const TRACES = Array.from({ length: 20 }, (_, i) => {
  const angle = (i / 20) * Math.PI * 2
  const rInner = 118
  const rOuter = 118 + (i % 3 === 0 ? 78 : i % 2 === 0 ? 60 : 42)
  const cx = 230
  const cy = 230
  return {
    x1: cx + Math.cos(angle) * rInner,
    y1: cy + Math.sin(angle) * rInner,
    x2: cx + Math.cos(angle) * rOuter,
    y2: cy + Math.sin(angle) * rOuter,
    dot: i % 2 === 0,
  }
})

export default function ProfilePanel() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="glass relative overflow-hidden rounded-3xl p-3 shadow-glass">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-panel2 to-void">
          <svg viewBox="0 0 460 460" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4CC9F0" stopOpacity="0.35" />
                <stop offset="70%" stopColor="#4CC9F0" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#4CC9F0" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ambient core glow */}
            <circle cx="230" cy="230" r="150" fill="url(#coreGlow)" />

            {/* circuit traces */}
            {TRACES.map((t, i) => (
              <g key={i}>
                <line
                  x1={t.x1}
                  y1={t.y1}
                  x2={t.x2}
                  y2={t.y2}
                  stroke="#4CC9F0"
                  strokeOpacity={0.35}
                  strokeWidth={1}
                />
                {t.dot && <circle cx={t.x2} cy={t.y2} r={2.5} fill="#9D7BFF" fillOpacity={0.8} />}
              </g>
            ))}

            {/* concentric rings */}
            <circle cx="230" cy="230" r="118" fill="none" stroke="#233042" strokeWidth="10" />
            <circle
              cx="230"
              cy="230"
              r="118"
              fill="none"
              stroke="#4CC9F0"
              strokeWidth="4"
              strokeDasharray="120 80 40 200"
              strokeLinecap="round"
              className="origin-center animate-[spin_18s_linear_infinite]"
              opacity="0.9"
            />
            <circle cx="230" cy="230" r="96" fill="none" stroke="#161E29" strokeWidth="14" />
          </svg>

          {/* center content: core tech stack */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal">Core Stack</p>
            <div className="flex flex-col items-center gap-2.5">
              {TECH.map(({ name, Icon }) => (
                <div
                  key={name}
                  className="glass flex items-center gap-2 rounded-full px-4 py-1.5 shadow-glass"
                >
                  <Icon size={14} className="text-signal" />
                  <span className="font-display text-xs font-semibold text-ink">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="glass absolute -left-6 top-6 flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-glass animate-floaty">
        <Sparkles size={16} className="text-signal" />
        <div>
          <p className="font-display text-xs font-semibold text-ink">B.Tech AI & ML</p>
          <p className="font-mono text-[10px] text-muted">4th Year</p>
        </div>
      </div>

      <div
        className="glass absolute -bottom-5 -right-4 flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-glass animate-floaty"
        style={{ animationDelay: '1.2s' }}
      >
        <Award size={16} className="text-mint" />
        <div>
          <p className="font-display text-xs font-semibold text-ink">2× Hackathon Winner</p>
          <p className="font-mono text-[10px] text-muted">Gradify · Give Hope</p>
        </div>
      </div>
    </div>
  )
}
