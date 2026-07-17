import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface CertificateModalProps {
  open: boolean
  title: string
  previewUrl: string
  onClose: () => void
}

export default function CertificateModal({ open, title, previewUrl, onClose }: CertificateModalProps) {
  // Close on Escape, lock background scroll while open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview: ${title}`}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <p className="truncate pr-4 font-display text-sm font-semibold text-ink">{title}</p>
              <button
                onClick={onClose}
                aria-label="Close preview"
                className="focus-ring shrink-0 rounded-full border border-line p-1.5 text-muted transition-colors hover:text-signal"
              >
                <X size={16} />
              </button>
            </div>
            <div className="relative flex-1 bg-black/20">
              <iframe
                src={previewUrl}
                title={`${title} certificate preview`}
                className="h-full w-full"
                allow="autoplay"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
            <p className="border-t border-line px-5 py-2.5 text-center font-mono text-[10px] text-muted">
              Preview only — downloading is disabled for this document.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
