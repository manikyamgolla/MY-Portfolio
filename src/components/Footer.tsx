import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import data from '../data/portfolio.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              Manikyam<span className="text-signal">.</span>Golla
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">{data.profile.tagline}</p>
          </div>

          <div>
            <p className="eyebrow mb-3">Navigate</p>
            <ul className="space-y-2 text-sm">
              {[
                ['/credentials', 'Credentials'],
                ['/skills', 'Skills'],
                ['/projects', 'Projects'],
                ['/resume', 'Resume'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="focus-ring text-muted transition-colors hover:text-signal">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Connect</p>
            <div className="flex gap-4">
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="focus-ring text-muted hover:text-signal">
                <Github size={20} />
              </a>
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="focus-ring text-muted hover:text-signal">
                <Linkedin size={20} />
              </a>
              <a href={data.socials.email} aria-label="Send an email" className="focus-ring text-muted hover:text-signal">
                <Mail size={20} />
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-muted">{data.profile.email}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {year} Manikyam Golla. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="focus-ring flex items-center gap-1 rounded-full border border-line px-3 py-1.5 transition-colors hover:text-signal"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
