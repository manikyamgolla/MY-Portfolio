import { useMemo, useState } from 'react'
import SEO from '../lib/SEO'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import data from '../data/portfolio.json'

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(data.projects.map((p) => p.category)))],
    []
  )
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? data.projects : data.projects.filter((p) => p.category === active)

  return (
    <>
      <SEO
        title="Projects"
        description="Case studies of machine learning, computer vision, IoT, and full-stack projects by Manikyam Golla."
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Case studies of my work.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Click into any project for the full build story — problem, architecture, challenges,
            and results.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`focus-ring rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                  active === c
                    ? 'border-signal bg-signal/10 text-signal'
                    : 'border-line text-muted hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
