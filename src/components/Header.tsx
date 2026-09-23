import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Menu, X, Moon, Sun, Download } from 'lucide-react'
import { useTheme } from '../lib/theme'
import data from '../data/portfolio.json'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/credentials', label: 'Credentials' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-glass' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Primary">
        <Link
          to="/"
          className="focus-ring font-display text-lg font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Manikyam<span className="text-signal">.</span>Golla
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `focus-ring rounded-md px-3 py-2 font-mono text-sm transition-colors ${
                  isActive ? 'text-signal' : 'text-muted hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={data.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="focus-ring text-muted transition-colors hover:text-signal"
          >
            <Github size={18} />
          </a>
          <a
            href={data.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="focus-ring text-muted transition-colors hover:text-signal"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={data.socials.email}
            aria-label="Send an email"
            className="focus-ring text-muted transition-colors hover:text-signal"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="focus-ring rounded-full border border-line p-2 text-muted transition-colors hover:text-signal"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={data.profile.resumeUrl}
            download
            className="focus-ring flex items-center gap-2 rounded-md bg-signal px-3 py-2 font-mono text-xs font-medium text-void transition-transform hover:scale-[1.03]"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        <button
          className="focus-ring text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-line px-5 pb-6 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `focus-ring rounded-md px-3 py-3 font-mono text-sm ${
                    isActive ? 'text-signal' : 'text-muted'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center gap-4 px-3">
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted hover:text-signal">
                <Github size={20} />
              </a>
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-muted hover:text-signal">
                <Linkedin size={20} />
              </a>
              <a href={data.socials.email} aria-label="Send an email" className="text-muted hover:text-signal">
                <Mail size={20} />
              </a>
              <button onClick={toggle} aria-label="Toggle theme" className="text-muted hover:text-signal">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <a
              href={data.profile.resumeUrl}
              download
              className="focus-ring mt-3 flex items-center justify-center gap-2 rounded-md bg-signal px-3 py-3 font-mono text-sm font-medium text-void"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
