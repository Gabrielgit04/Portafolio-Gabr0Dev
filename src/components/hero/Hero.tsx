import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/i18n/useLanguage'

export const Hero = () => {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="hero-screen relative isolate flex items-center justify-center overflow-hidden py-10"
    >
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 translate-x-[70%] -translate-y-1/2 rounded-full bg-highlight/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 translate-x-[25%] -translate-y-1/2 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-5 p-4 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs text-muted ring-1 ring-line">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t.hero.badge}
          </span>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-2">
            <p className="text-sm text-muted">{t.hero.greeting}</p>
            <h1 className="text-3xl sm:text-5xl">{t.hero.name}</h1>
            <p className="text-base font-semibold text-highlight sm:text-lg">{t.hero.role}</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-xl text-sm text-muted sm:text-cyan-600">{t.hero.description}</p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://drive.google.com/uc?export=download&id=1NAF-hS4r8rVyVA1IoF8atapyW_QTUWA0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-80"
            >
              {t.hero.ctaResume}
            </a>
            <a
              href="#contact"
              className="rounded-full bg-surface px-5 py-2.5 text-sm font-semibold ring-1 ring-line transition-opacity hover:opacity-80"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
