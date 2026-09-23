import { useState } from 'react'
import { Eye, BadgeCheck } from 'lucide-react'
import Reveal from './Reveal'
import CertificateModal from './CertificateModal'

interface Certification {
  name: string
  issuer: string
  date: string | null
  previewUrl: string | null
}

export default function CertificationGallery({ certifications }: { certifications: Certification[] }) {
  const [active, setActive] = useState<Certification | null>(null)

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.04}>
            <div className="glass group flex h-full flex-col justify-between rounded-2xl p-5 transition-colors hover:border-signal">
              <div>
                <BadgeCheck size={20} className="text-mint" />
                <p className="mt-3 font-display text-sm font-semibold leading-snug text-ink">{c.name}</p>
                <p className="mt-1.5 font-mono text-xs text-muted">{c.issuer}</p>
                {c.date && <p className="mt-0.5 font-mono text-[11px] text-muted/70">{c.date}</p>}
              </div>

              {c.previewUrl ? (
                <button
                  onClick={() => setActive(c)}
                  className="focus-ring mt-5 flex items-center justify-center gap-2 rounded-lg border border-line py-2 font-mono text-xs text-ink transition-colors hover:border-signal hover:text-signal"
                >
                  <Eye size={14} /> Preview
                </button>
              ) : (
                <p className="mt-5 text-center font-mono text-[11px] text-muted/60">Preview coming soon</p>
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
