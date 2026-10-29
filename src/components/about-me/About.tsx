import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/i18n/useLanguage'

export const About = () => {
  const { t } = useLanguage()

  return (
    <section
      id="about-me"
      className="scroll-mt-[calc(var(--header-h)+1rem)] border-t border-line px-6 py-20 text-ink transition-colors duration-300"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl">{t.about.title}</h2>
        </Reveal>

        <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          <Reveal delay={100}>
            <p>{t.about.p1}</p>
          </Reveal>
          <Reveal delay={180}>
            <p>{t.about.p2}</p>
          </Reveal>
          <Reveal delay={260}>
            <p>{t.about.p3}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
