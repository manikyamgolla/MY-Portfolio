import { Link } from 'react-router-dom'
import SEO from '../lib/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="This page doesn't exist." />
      <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">This page went missing.</h1>
        <p className="mt-3 text-muted">Even a well-trained model can't find what isn't here.</p>
        <Link
          to="/"
          className="focus-ring mt-8 rounded-lg bg-signal px-5 py-3 font-mono text-sm font-semibold text-void"
        >
          Back to home
        </Link>
      </section>
    </>
  )
}
