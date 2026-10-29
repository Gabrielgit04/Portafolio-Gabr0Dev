import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, CodeXml, X } from 'lucide-react'
import type { Project } from '@/data/projects'
import { useLanguage } from '@/i18n/useLanguage'
import { asset } from '@/lib/asset'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { lang, t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeTimeoutRef = useRef<number | undefined>(undefined)
  const closingRef = useRef(false)
  const [isClosing, setIsClosing] = useState(false)
  const title = project.title[lang]

  const requestClose = () => {
    if (closingRef.current) return
    closingRef.current = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onClose()
      return
    }

    setIsClosing(true)
    closeTimeoutRef.current = window.setTimeout(onClose, 200)
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (!dialog.open) dialog.showModal()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(closeTimeoutRef.current)
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      data-closing={isClosing ? 'true' : 'false'}
      onCancel={(event) => {
        event.preventDefault()
        requestClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose()
      }}
      className="project-modal m-auto w-[min(92vw,44rem)] max-w-none overflow-hidden rounded-2xl border border-line bg-page p-0 text-ink shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={requestClose}
        aria-label={t.projects.close}
        className="absolute top-3 right-3 z-20 rounded-full bg-page/80 p-2 text-muted ring-1 ring-line backdrop-blur transition-colors hover:text-ink"
      >
        <X size={16} />
      </button>

      <div className="max-h-[90dvh] overflow-y-auto">
        <div className="relative aspect-2/1 overflow-hidden border-b border-line bg-page">
          {project.image ? (
            <img
              src={asset(project.image)}
              alt={project.imageAlt?.[lang] ?? title}
              className="h-full w-full object-cover"
            />
          ) : (
            <>
              <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-70" />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center text-3xl text-muted/50"
              >
                {'{ }'}
              </span>
            </>
          )}
        </div>

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
            <span className="rounded-full bg-surface px-2 py-0.5 ring-1 ring-line">
              {project.category === 'web' ? 'Web' : 'Android'}
            </span>
            <span>{project.year}</span>
            {project.team && (
              <span className="rounded-full bg-brand/10 px-2 py-0.5 text-brand ring-1 ring-brand/20">
                {t.projects.team}
              </span>
            )}
          </div>

          <div className="space-y-3">
            <h3
              id="project-modal-title"
              className="text-2xl font-semibold text-ink sm:text-3xl"
            >
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{project.summary[lang]}</p>
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-muted">
            {project.description[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-xs font-semibold tracking-wider text-muted uppercase">
                {t.projects.role}
              </h4>
              <p className="text-sm text-ink">{project.role[lang]}</p>
            </div>

            <div>
              <h4 className="mb-2 text-xs font-semibold tracking-wider text-muted uppercase">
                {t.projects.stack}
              </h4>
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-surface px-2 py-0.5 text-[10px] text-muted ring-1 ring-line"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-line pt-5">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-fg transition-opacity hover:opacity-90"
              >
                {t.projects.demo}
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <span className="text-xs text-muted">{t.projects.noDemo}</span>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-xs font-semibold text-ink ring-1 ring-line transition-colors hover:ring-brand/40"
              >
                <CodeXml size={14} />
                {t.projects.code}
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  )
}
