import { Reveal } from '@/components/ui/Reveal'
import { skillGroups } from '@/data/skills'
import { useLanguage } from '@/i18n/useLanguage'
import { asset } from '@/lib/asset'

export const Skills = () => {
  const { lang, t } = useLanguage()
  const totalSkills = skillGroups.reduce((total, group) => total + group.skills.length, 0)

  return (
    <section
      id="skills"
      className="scroll-mt-[calc(var(--header-h)+1rem)] border-t border-line px-6 py-20 text-ink"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-muted uppercase">
                {t.skills.kicker}
              </p>
              <h2 className="mt-4 max-w-xl text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {t.skills.title}
              </h2>
            </div>

            <div className="max-w-md md:justify-self-end md:pb-1">
              <p className="text-sm leading-relaxed text-muted">{t.skills.subtitle}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                <span>
                  {String(totalSkills).padStart(2, '0')} {t.skills.technologies}
                </span>
                <span aria-hidden="true" className="h-3 w-px bg-line" />
                <span>
                  {String(skillGroups.length).padStart(2, '0')} {t.skills.categories}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            const isLast = index === skillGroups.length - 1

            return (
              <Reveal key={group.id} delay={index * 70}>
                <article
                  className={`grid gap-6 py-8 md:grid-cols-[14rem_1fr] md:gap-10 md:py-10 ${
                    isLast ? '' : 'border-b border-line'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="text-4xl leading-none font-light tabular-nums text-muted/30"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon aria-hidden="true" size={14} className="shrink-0 text-highlight" />
                        <h3 className="text-sm font-semibold text-ink">{group.title[lang]}</h3>
                      </div>
                      <p className="text-xs leading-relaxed text-muted">
                        {group.description[lang]}
                      </p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 xl:grid-cols-4">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="group flex min-w-0 items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface/60 ring-1 ring-line transition-colors duration-300 group-hover:ring-brand/30 dark:bg-white/90 dark:ring-white/10">
                          <img
                            src={asset(skill.icon)}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </span>
                        <span className="min-w-0 text-xs leading-tight text-muted transition-colors duration-300 group-hover:text-ink">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
