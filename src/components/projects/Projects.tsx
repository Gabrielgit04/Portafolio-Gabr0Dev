import { useState } from 'react'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectModal } from '@/components/projects/ProjectModal'
import { Reveal } from '@/components/ui/Reveal'
import { projects, type Project } from '@/data/projects'
import { useLanguage } from '@/i18n/useLanguage'

export const Projects = () => {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="scroll-mt-[calc(var(--header-h)+1rem)] border-t border-line px-6 py-20 text-ink"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl">{t.projects.title}</h2>
            <p className="text-sm text-muted">{t.projects.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80} className="h-full">
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
