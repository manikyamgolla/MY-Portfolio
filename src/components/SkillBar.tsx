import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SkillBarProps {
  name: string
  level: string
  years: number
}

// Years-worked is the meaningful scale here, not an arbitrary percentage.
const widthForYears = (years: number) => {
  if (years <= 0) return '20%'
  if (years === 1) return '65%'
  return '90%'
}

export default function SkillBar({ name, level, years }: SkillBarProps) {
  const fillRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fill = fillRef.current
    const wrap = wrapRef.current
    if (!fill || !wrap) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { width: '0%' },
        {
          width: widthForYears(years),
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 90%',
            once: true,
          },
        }
      )
    }, wrap)

    return () => ctx.revert()
  }, [years])

  return (
    <div ref={wrapRef} className="py-2.5">
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-sm text-ink">{name}</span>
        <span className="font-mono text-[11px] text-muted">{level}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-line/60">
        <div ref={fillRef} className="h-full rounded-full bg-gradient-to-r from-signal to-violet" />
      </div>
    </div>
  )
}
