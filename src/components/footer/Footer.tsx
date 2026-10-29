import { ArrowUp, Mail, MessageCircle } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { contact } from '@/data/contact'
import { useLanguage } from '@/i18n/useLanguage'

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

type SocialIcon = ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>

export const Footer = () => {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    t.contact.whatsappMessage,
  )}`

  const socialLinks: { label: string; href: string; icon: SocialIcon }[] = [
    { label: 'GitHub', href: contact.github, icon: GithubIcon },
    { label: 'LinkedIn', href: contact.linkedin, icon: LinkedinIcon },
    { label: 'Email', href: `mailto:${contact.email}`, icon: Mail },
    { label: 'WhatsApp', href: whatsappHref, icon: MessageCircle },
  ]

  return (
    <footer className="border-t border-line px-6 py-12 text-ink">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="grid gap-8 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
            <div>
              <p className="text-sm font-extrabold">
                Gabr0.<span className="text-brand">Dev</span>
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {t.hero.role} · {t.hero.badge}
              </p>
            </div>

            <nav aria-label={t.footer.navLabel} className="sm:justify-self-center">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:flex-col sm:items-start sm:gap-2">
                <li>
                  <a
                    href="#home"
                    className="rounded-sm text-muted transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                  >
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="rounded-sm text-muted transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                  >
                    {t.nav.projects}
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="rounded-sm text-muted transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                  >
                    {t.nav.skills}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="rounded-sm text-muted transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                  >
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label={t.footer.socialLabel} className="sm:justify-self-end">
              <ul className="flex items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      title={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-surface/50 text-muted ring-1 ring-line transition-colors hover:text-brand hover:ring-brand/40 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.footer.rights} · {t.footer.builtWith}
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            {t.footer.backToTop}
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
