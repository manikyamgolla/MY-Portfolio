import { Download, ExternalLink, FileText } from 'lucide-react'
import SEO from '../lib/SEO'
import Reveal from '../components/Reveal'
import data from '../data/portfolio.json'

export default function Resume() {
  return (
    <>
      <SEO
        title="Resume"
        description="Download Manikyam Golla's resume — AI & ML engineer, final-year B.Tech student."
      />

      <section className="mx-auto max-w-4xl px-5 py-24">
        <Reveal>
          <p className="eyebrow">Resume</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            One page, everything a recruiter needs.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Education, projects, certifications, and skills — kept current as I ship new work.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={data.profile.resumeUrl}
              download
              className="focus-ring flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-mono text-sm font-semibold text-void transition-transform hover:scale-[1.03]"
            >
              <Download size={16} /> Download PDF
            </a>
            <a
              href={data.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <ExternalLink size={16} /> Open in new tab
            </a>
            <a
              href={data.profile.resumePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-violet hover:text-violet"
            >
              <FileText size={16} /> Preview (Google Docs)
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass mt-10 overflow-hidden rounded-2xl">
            <iframe
              src={data.profile.resumeUrl}
              title="Manikyam Golla's résumé preview"
              className="h-[80vh] w-full"
            />
          </div>
        </Reveal>
      </section>
    </>
  )
}
