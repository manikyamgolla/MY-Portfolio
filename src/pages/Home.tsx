import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Mail, Github, FileText, CircleDot, Languages as LanguagesIcon, Coffee } from 'lucide-react'
import SEO from '../lib/SEO'
import SignalCanvas from '../components/SignalCanvas'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import ProfilePanel from '../components/ProfilePanel'
import data from '../data/portfolio.json'

export default function Home() {
  const featured = data.projects.slice(0, 3)

  return (
    <>
      <SEO
        title="Home"
        description={data.profile.tagline}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid-fade" aria-hidden="true" />
        <SignalCanvas />
        <div className="relative mx-auto grid min-h-[86vh] max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-mint"
            >
              <CircleDot size={12} /> {data.profile.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl md:text-6xl"
            >
              From ideas to <span className="text-signal">interactive web experiences</span>.
            </motion.h1>


            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href={data.profile.resumeUrl}
                download
                className="focus-ring flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-mono text-sm font-semibold text-void transition-transform hover:scale-[1.03]"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href={data.profile.resumePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-signal hover:text-signal"
              >
                <FileText size={16} /> Preview Resume
              </a>
              <Link
                to="/projects"
                className="focus-ring flex items-center gap-2 px-2 py-3 font-mono text-sm text-muted transition-colors hover:text-signal"
              >
                View Projects <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right: profile panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProfilePanel />
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="eyebrow">At a glance</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
            The résumé, in six data points.
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {data.profile.highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.05}>
              <div className="glass h-full rounded-xl p-5">
                <p className="font-display text-sm font-semibold text-signal sm:text-base">{h.label}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{h.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="eyebrow">Get to know me</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">About</h2>
        </Reveal>

        {/* About me */}
        <div className="mt-10 space-y-4 text-lg leading-relaxed text-muted">
          {data.profile.bio.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Languages I know */}
        <div className="mt-14">
          <Reveal>
            <div className="mb-6 flex items-center gap-2">
              <LanguagesIcon className="text-signal" size={20} />
              <h3 className="font-display text-xl font-semibold text-ink">Languages I Know</h3>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-3">
            {data.languages.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.05}>
                <div className="glass rounded-lg p-4">
                  <p className="text-sm font-medium text-ink">{l.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{l.level}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Outside of code */}
        <div className="mt-14">
          <Reveal>
            <div className="mb-6 flex items-center gap-2">
              <Coffee className="text-signal" size={20} />
              <h3 className="font-display text-xl font-semibold text-ink">Outside of Code</h3>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.hobbies.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.04}>
                <div className="glass rounded-lg p-4">
                  <p className="text-sm font-medium text-ink">{h.name}</p>
                  <p className="mt-1 text-xs text-muted">{h.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                A few things I've shipped.
              </h2>
            </div>
            <Link
              to="/projects"
              className="focus-ring flex items-center gap-1 font-mono text-sm text-signal"
            >
              All projects <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-2xl px-8 py-14 text-center">
            <p className="eyebrow justify-center">Open to opportunities</p>
            <h2 className="mx-auto mt-3 max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
              Looking for an intern or entry-level engineer who ships?
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="focus-ring flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-mono text-sm font-semibold text-void transition-transform hover:scale-[1.03]"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
              <a
                href={data.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-signal hover:text-signal"
              >
                <Github size={16} /> See my code
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
