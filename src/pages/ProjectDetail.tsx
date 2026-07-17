import { useParams, Link, Navigate } from 'react-router-dom'
import { Github, ExternalLink, ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, TrendingUp, Rocket } from 'lucide-react'
import SEO from '../lib/SEO'
import Reveal from '../components/Reveal'
import data from '../data/portfolio.json'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = data.projects.findIndex((p) => p.slug === slug)
  const project = data.projects[index]

  if (!project) return <Navigate to="/projects" replace />

  const prev = data.projects[(index - 1 + data.projects.length) % data.projects.length]
  const next = data.projects[(index + 1) % data.projects.length]
  const related = data.projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <SEO title={project.name} description={project.tagline} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-grid-fade">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Link to="/projects" className="focus-ring inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-signal">
            <ArrowLeft size={14} /> Back to projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">{project.category}</span>
            <span className="rounded-full bg-signal/10 px-3 py-1 font-mono text-[11px] text-signal">{project.status}</span>
            <span className="font-mono text-[11px] text-muted">{project.period}</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 rounded-lg bg-signal px-5 py-2.5 font-mono text-sm font-semibold text-void transition-transform hover:scale-[1.03]"
              >
                <Github size={16} /> View GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-signal hover:text-signal"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        {/* Overview */}
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink">Overview</h2>
        </Reveal>
        <div className="mt-4 space-y-4 text-muted">
          {project.overview.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Key features */}
        <div className="mt-14">
          <Reveal>
            <h2 className="mb-6 font-display text-2xl font-semibold text-ink">Key Features</h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.04}>
                <div className="glass flex items-start gap-3 rounded-lg p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-mint" size={18} />
                  <span className="text-sm text-ink">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Development workflow — a real sequence, so numbering earns its place */}
        <div className="mt-14">
          <Reveal>
            <h2 className="mb-6 font-display text-2xl font-semibold text-ink">Development Workflow</h2>
          </Reveal>
          <ol className="relative ml-3 border-l border-line">
            {project.workflow.map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <li className="relative mb-8 pl-8 last:mb-0">
                  <span className="absolute -left-[15px] flex h-7 w-7 items-center justify-center rounded-full bg-panel font-mono text-[11px] text-signal ring-1 ring-line">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-ink">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Challenges & Learnings */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-2">
                <Lightbulb size={18} className="text-violet" />
                <h2 className="font-display text-xl font-semibold text-ink">Challenges</h2>
              </div>
            </Reveal>
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <Reveal key={c} delay={i * 0.05}>
                  <li className="text-sm leading-relaxed text-muted">— {c}</li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp size={18} className="text-mint" />
                <h2 className="font-display text-xl font-semibold text-ink">Solutions & Learnings</h2>
              </div>
            </Reveal>
            <ul className="space-y-3">
              {project.learnings.map((l, i) => (
                <Reveal key={l} delay={i * 0.05}>
                  <li className="text-sm leading-relaxed text-muted">— {l}</li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="mt-14">
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <h2 className="font-display text-xl font-semibold text-ink">Results</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.results}</p>
            </div>
          </Reveal>
        </div>

        {/* Future improvements */}
        <div className="mt-14">
          <Reveal>
            <div className="mb-4 flex items-center gap-2">
              <Rocket size={18} className="text-signal" />
              <h2 className="font-display text-xl font-semibold text-ink">Future Improvements</h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap gap-2">
            {project.future.map((f) => (
              <span key={f} className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub repo card */}
        {project.repo && (
          <div className="mt-14">
            <Reveal>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass focus-ring flex items-center justify-between rounded-xl p-5 transition-colors hover:border-signal"
              >
                <div className="flex items-center gap-3">
                  <Github size={22} className="text-ink" />
                  <div>
                    <p className="text-sm font-medium text-ink">{project.name}</p>
                    <p className="font-mono text-xs text-muted">{project.tech[0]} · Public repository</p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-muted" />
              </a>
            </Reveal>
          </div>
        )}
      </section>

      {/* Related + prev/next nav */}
      <section className="mx-auto max-w-4xl border-t border-line px-5 py-16">
        <Reveal>
          <h2 className="mb-6 font-display text-xl font-semibold text-ink">More Projects</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="glass focus-ring rounded-xl p-4 transition-colors hover:border-signal"
            >
              <p className="eyebrow">{p.category}</p>
              <p className="mt-1 text-sm font-medium text-ink">{p.name}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
          <Link to={`/projects/${prev.slug}`} className="focus-ring flex items-center gap-2 font-mono text-sm text-muted hover:text-signal">
            <ArrowLeft size={16} /> {prev.name}
          </Link>
          <Link to={`/projects/${next.slug}`} className="focus-ring flex items-center gap-2 font-mono text-sm text-muted hover:text-signal">
            {next.name} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
