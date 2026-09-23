import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight, Award, ExternalLink } from 'lucide-react'

interface Project {
  slug: string
  name: string
  category: string
  status: string
  period: string
  tagline: string
  repo: string | null
  demo?: string | null
  tech: string[]
}

const isWinnerStatus = (status: string) => /winner/i.test(status)

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="glass group relative flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-glass"
    >
      {isWinnerStatus(project.status) && (
        <span className="absolute -top-3 right-5 flex items-center gap-1 rounded-full bg-mint px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-void">
          <Award size={11} /> {project.status}
        </span>
      )}

      <p className="eyebrow">{project.category}</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink">{project.name}</h3>
      <p className="mt-1 font-mono text-xs text-muted">{project.period}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <Link
          to={`/projects/${project.slug}`}
          className="focus-ring flex items-center gap-1 font-mono text-xs font-medium text-signal transition-transform group-hover:translate-x-0.5"
        >
          View case study <ArrowUpRight size={14} />
        </Link>
        <div className="flex items-center gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live preview`}
              className="focus-ring text-muted transition-colors hover:text-mint"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub repository`}
              className="focus-ring text-muted transition-colors hover:text-signal"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
