# Manikyam Golla — Portfolio

A dark-mode-first, glassmorphism-styled recruiter portfolio built with React, TypeScript,
Tailwind CSS, Framer Motion, and GSAP.

## Design

- **Palette:** near-black void (`#0B0F14`) + glass panels, with a signal-cyan / violet /
  mint accent system — chosen to read as "AI/data" without the generic acid-green-on-black
  or neural-net-particle clichés.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels, tags, code-style UI).
- **Signature element:** a custom canvas "signal graph" in the hero — drifting nodes that
  link when close, like a live data readout, instead of a stock particle system.
- **Motion:** Framer Motion for reveals, hovers, and the top scroll-progress bar; GSAP +
  ScrollTrigger for the skill-proficiency bar fills.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · React Router · Framer Motion · GSAP · lucide-react

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Editing your content

**Everything on the site — projects, skills, socials, education, certifications, resume
path — lives in one file:**

```
src/data/portfolio.json
```

Add a new project by adding an object to the `projects` array (give it a unique `slug` —
that becomes its URL at `/projects/{slug}`). No component code needs to change.

## Resume

Your résumé PDF lives at `public/resume.pdf`. The Download Resume buttons (header, home,
contact, and the dedicated `/resume` page) all point at `/resume.pdf` — replace that file
whenever you update your résumé and every download link updates automatically.

## Deployment

This is a client-side-routed SPA, so your host needs a rewrite rule sending all paths to
`index.html`:

- **Vercel:** `vercel.json` is already included — just import the repo at vercel.com/new.
- **Netlify:** `public/_redirects` is already included — connect the repo, build command
  `npm run build`, publish directory `dist`.

## Get real-time emails from the contact form

The contact form is wired to [Web3Forms](https://web3forms.com) — a free service that
delivers submissions straight to your Gmail inbox in real time, no backend server needed.

1. Go to **web3forms.com** and enter `manikyamgolla12@gmail.com` (or whichever inbox you
   want submissions sent to). No account or password required.
2. Web3Forms emails you an **access key** — copy it.
3. Open `src/pages/Contact.tsx` and replace:
   ```ts
   const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'
   ```
   with your real key.
4. Redeploy (or restart `npm run dev`). Every submission now lands in your inbox within
   seconds.

Until you add a key, the form falls back to opening the visitor's own email app with a
pre-filled draft — so it still works, just isn't automatic.

## Add your photo

The hero's right-side panel looks for `public/profile.jpg`. Drop a photo in with that exact
name and it appears automatically; until then it shows a clean monogram placeholder instead
of a broken image.

## Notes on what's stubbed for later

- **Contact form** delivers real-time email via Web3Forms once you add your access key (see
  above) — see the setup section for details.
- **SEO tags** update per-page via `src/lib/SEO.tsx` on the client. If you want tags present
  before JS runs (better for some crawlers/social scrapers), consider Vite's prerender
  plugin or moving to a framework like Next.js/Astro.
- **Analytics** (Google Analytics/Plausible) isn't wired in — add your snippet to
  `index.html` when you have a tracking ID.
- **Tests** aren't included yet; the component structure (one component per concern) is
  set up to make Jest/React Testing Library straightforward to add later.
