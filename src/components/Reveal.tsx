import { motion } from 'framer-motion'
import React from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  y?: number
}

export default function Reveal({ children, delay = 0, className, y = 18 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
