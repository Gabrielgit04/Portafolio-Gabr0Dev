import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Loader2,
  MessageCircle,
  Send,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { contact } from '@/data/contact'
import { useLanguage } from '@/i18n/useLanguage'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export const Contact = () => {
  const { t } = useLanguage()
  const [status, setStatus] = useState<FormStatus>('idle')

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    t.contact.whatsappMessage,
  )}`

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('_gotcha')) {
      setStatus('success')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Form submission failed')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[calc(var(--header-h)+1rem)] border-t border-line px-6 py-20 text-ink"
    >
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="max-w-md">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-muted uppercase">
              {t.contact.kicker}
            </p>
            <h2 className="mt-4 text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">{t.contact.subtitle}</p>

            <div className="mt-8 border-t border-line pt-6">
              <p className="text-xs text-muted">{t.contact.whatsappLabel}</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-brand"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand/15">
                  <MessageCircle size={16} />
                </span>
                {t.contact.whatsappCta}
                <ArrowUpRight
                  size={14}
                  className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <p className="mt-4 text-xs text-muted">{t.contact.responseTime}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="flex min-h-[28rem] flex-col items-start justify-center rounded-2xl bg-surface/30 p-6 ring-1 ring-line sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                <CheckCircle2 size={22} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{t.contact.successTitle}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                {t.contact.successText}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-80"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form
              action={contact.formspreeEndpoint}
              method="POST"
              onSubmit={handleSubmit}
              aria-busy={status === 'sending'}
              className="rounded-2xl bg-surface/30 p-6 ring-1 ring-line sm:p-8"
            >
              <h3 className="text-lg font-semibold text-ink">{t.contact.formTitle}</h3>

              <input type="hidden" name="_subject" value={t.contact.subject} />
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
                    {t.contact.name}
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={t.contact.namePlaceholder}
                    className="mt-2 block w-full border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-brand"
                  />
                </label>

                <label className="block">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
                    {t.contact.email}
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="mt-2 block w-full border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-brand"
                  />
                </label>
              </div>

              <label className="mt-6 block">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
                  {t.contact.projectType}
                </span>
                <span className="relative mt-2 block">
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="block w-full appearance-none border-b border-line bg-transparent py-2.5 pr-7 text-sm text-ink outline-none transition-colors focus:border-brand"
                  >
                    <option value="" disabled>
                      {t.contact.projectTypePlaceholder}
                    </option>
                    <option value="web">{t.contact.projectTypes.web}</option>
                    <option value="android">{t.contact.projectTypes.android}</option>
                    <option value="both">{t.contact.projectTypes.both}</option>
                    <option value="other">{t.contact.projectTypes.other}</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    size={15}
                    className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-muted"
                  />
                </span>
              </label>

              <label className="mt-6 block">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
                  {t.contact.message}
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className="mt-2 block w-full resize-y border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-brand"
                />
              </label>

              {status === 'error' && (
                <p role="alert" className="mt-6 text-sm text-red-600 dark:text-red-400">
                  {t.contact.error}
                </p>
              )}

              <div className="mt-7 flex flex-col items-start gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.submit}
                      <Send
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
                <p className="text-[11px] leading-relaxed text-muted">{t.contact.privacy}</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
