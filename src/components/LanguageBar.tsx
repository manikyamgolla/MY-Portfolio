import { motion } from 'framer-motion'

interface LanguageBarProps {
  name: string
  level: string
  proficiency: number
}

export default function LanguageBar({ name, level, proficiency }: LanguageBarProps) {
  return (
    <div className="glass rounded-lg p-4">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium text-ink">{name}</p>
        <p className="font-mono text-[11px] text-muted">{level}</p>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line/60">
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-signal to-mint"
        />
      </div>
    </div>
  )
}
