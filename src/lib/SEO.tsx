import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
}

/**
 * Lightweight SEO helper: updates document title + meta description per route
 * without pulling in a routing-head library. For SSR/prerendering, swap this
 * for react-helmet-async or Vite's prerender plugin of choice.
 */
export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} · Manikyam Golla`
    document.title = fullTitle

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
  }, [title, description])

  return null
}
