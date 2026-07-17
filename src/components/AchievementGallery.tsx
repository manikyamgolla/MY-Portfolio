import { useState } from 'react'
import { Eye, Trophy } from 'lucide-react'
import Reveal from './Reveal'
import CertificateModal from './CertificateModal'

interface Achievement {
  name: string
  detail: string
  previewUrl: string | null
}

export default function AchievementGallery({ achievements }: { achievements: Achievement[] }) {
  const [active, setActive] = useState<Achievement | null>(null)

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.name} delay={i * 0.05}>
            <div className="glass flex h-full flex-col justify-between rounded-2xl p-5 transition-colors hover:border-mint">
              <div>
                <Trophy size={20} className="text-mint" />
                <p className="mt-3 font-display text-sm font-semibold text-ink">{a.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{a.detail}</p>
              </div>

              {a.previewUrl && (
                <button
                  onClick={() => setActive(a)}
                  className="focus-ring mt-5 flex items-center justify-center gap-2 rounded-lg border border-line py-2 font-mono text-xs text-ink transition-colors hover:border-mint hover:text-mint"
                >
                  <Eye size={14} /> Preview
                </button>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <CertificateModal
        open={!!active}
        title={active?.name ?? ''}
        previewUrl={active?.previewUrl ?? ''}
        onClose={() => setActive(null)}
      />
    </>
  )
}
