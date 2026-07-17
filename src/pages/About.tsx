import SEO from '../lib/SEO'
import Reveal from '../components/Reveal'
import CertificationGallery from '../components/CertificationGallery'
import AchievementGallery from '../components/AchievementGallery'
import data from '../data/portfolio.json'
import { GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <>
      <SEO
        title="Credentials"
        description="Education, certifications, and achievements for Manikyam Golla, AI & ML student."
      />

      <section className="mx-auto max-w-4xl px-5 py-24">
        <Reveal>
          <p className="eyebrow">Credentials</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Education, certificates, and recognition — verified.
          </h1>
        </Reveal>

        {/* Education */}
        <div className="mt-10">
          <Reveal>
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="text-signal" size={20} />
              <h2 className="font-display text-xl font-semibold text-ink">Education</h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {data.education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.06}>
                <div className="glass flex flex-col justify-between gap-1 rounded-xl p-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-display font-semibold text-ink">{e.school}</p>
                    <p className="text-sm text-muted">{e.detail}</p>
                    <p className="text-xs text-muted">{e.location}</p>
                  </div>
                  <p className="font-mono text-xs text-signal">{e.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <Reveal>
            <p className="eyebrow">Verified credentials</p>
            <h2 className="mt-1 mb-6 font-display text-xl font-semibold text-ink">Certificates</h2>
          </Reveal>
          <CertificationGallery certifications={data.certifications} />
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <Reveal>
            <p className="eyebrow">Recognition</p>
            <h2 className="mt-1 mb-6 font-display text-xl font-semibold text-ink">Achievements</h2>
          </Reveal>
          <AchievementGallery achievements={data.achievements} />
        </div>
      </section>
    </>
  )
}
