import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { useLanguage } from '@/i18n/useLanguage'
import { asset } from '@/lib/asset'

export interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const { lang, t } = useLanguage()
  const title = project.title[lang]
  const summary = project.summary[lang]

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-surface/40 ring-1 ring-line transition-colors duration-300 hover:ring-brand/40 focus-within:ring-brand/40">
      <div className="relative aspect-2/1 overflow-hidden border-b border-line bg-page">
        {project.image ? (
          <img
            src={asset(project.image)}
            alt={project.imageAlt?.[lang] ?? title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-70" />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center text-2xl text-muted/50"
            >
              {'{ }'}
            </span>
          </>
        )}

        <span className="absolute top-3 left-3 rounded-full bg-page/80 px-2 py-0.5 text-[10px] text-muted ring-1 ring-line backdrop-blur">
          {project.category === 'web' ? 'Web' : 'Android'}
        </span>

        <span className="absolute top-3 right-3 rounded-full bg-page/80 px-2 py-0.5 text-[10px] text-muted ring-1 ring-line backdrop-blur">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-ink">{title}</h3>
          {project.team && (
            <span className="shrink-0 rounded-full bg-brand/10 px-2 py-0.5 text-[10px] text-brand ring-1 ring-brand/20">
              {t.projects.team}
            </span>
          )}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted">{summary}</p>

        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-page px-2 py-0.5 text-[10px] text-muted ring-1 ring-line"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="inline-flex items-center gap-1 pt-1 text-xs font-semibold text-highlight">
          {t.projects.viewProject}
          <ArrowUpRight size={13} />
        </span>
      </div>

      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`${t.projects.viewProject}: ${title}`}
        className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:ring-2 focus-visible:ring-highlight/60 focus-visible:ring-inset focus-visible:outline-none"
      />
    </article>
  )
}
