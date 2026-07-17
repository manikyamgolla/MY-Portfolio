import { useState, FormEvent } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, Download, CheckCircle2, FileText, AlertCircle, Loader2 } from 'lucide-react'
import SEO from '../lib/SEO'
import Reveal from '../components/Reveal'
import data from '../data/portfolio.json'

// Get a free access key at https://web3forms.com (enter your email, no
// account/password needed — the key arrives in your inbox). Paste it below.
// Until you do, submissions fall back to opening the visitor's email client.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      // No key configured yet — fall back to a mailto draft so the message
      // still reaches the visitor's email client.
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${data.profile.email}?subject=${encodeURIComponent(
        form.subject || 'Portfolio inquiry'
      )}&body=${body}`
      setStatus('sent')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio inquiry',
          message: form.message,
          to: data.profile.email,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Manikyam Golla for internship, collaboration, or hiring opportunities."
      />

      <section className="mx-auto max-w-5xl px-5 py-24">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Let's talk about your team.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Open to internships and entry-level AI/ML roles. The fastest way to reach me is email.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          {/* Info column */}
          <Reveal className="md:col-span-2">
            <div className="glass space-y-6 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-signal" />
                <div>
                  <p className="text-sm font-medium text-ink">Email</p>
                  <a href={data.socials.email} className="focus-ring font-mono text-xs text-muted hover:text-signal">
                    {data.profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-signal" />
                <div>
                  <p className="text-sm font-medium text-ink">Location</p>
                  <p className="font-mono text-xs text-muted">{data.profile.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin size={18} className="mt-0.5 text-signal" />
                <div>
                  <p className="text-sm font-medium text-ink">LinkedIn</p>
                  <a
                    href={data.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring font-mono text-xs text-muted hover:text-signal"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Github size={18} className="mt-0.5 text-signal" />
                <div>
                  <p className="text-sm font-medium text-ink">GitHub</p>
                  <a
                    href={data.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring font-mono text-xs text-muted hover:text-signal"
                  >
                    View repositories
                  </a>
                </div>
              </div>
              <a
                href={data.profile.resumeUrl}
                download
                className="focus-ring flex items-center justify-center gap-2 rounded-lg bg-signal px-4 py-3 font-mono text-sm font-semibold text-void transition-transform hover:scale-[1.02]"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href={data.profile.resumePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-3 font-mono text-sm text-ink transition-colors hover:border-violet hover:text-violet"
              >
                <FileText size={16} /> Preview Resume
              </a>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal className="md:col-span-3" delay={0.1}>
            {status === 'sent' ? (
              <div className="glass flex h-full flex-col items-center justify-center rounded-2xl p-10 text-center">
                <CheckCircle2 size={36} className="text-mint" />
                <p className="mt-4 font-display text-lg font-semibold text-ink">Message sent</p>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Thanks for reaching out — I'll reply as soon as I can.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="focus-ring mt-6 font-mono text-xs text-signal"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="focus-ring w-full rounded-lg border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none"
                      placeholder="Jane Recruiter"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="focus-ring w-full rounded-lg border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block font-mono text-xs text-muted">
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="focus-ring w-full rounded-lg border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none"
                    placeholder="AI/ML Internship opportunity"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="focus-ring w-full resize-none rounded-lg border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none"
                    placeholder="Tell me a bit about the role..."
                  />
                </div>
                {status === 'error' && (
                  <p className="flex items-center gap-2 font-mono text-xs text-red-400">
                    <AlertCircle size={14} /> Something went wrong — please try again, or email me directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="focus-ring flex w-full items-center justify-center gap-2 rounded-lg bg-signal px-4 py-3 font-mono text-sm font-semibold text-void transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
