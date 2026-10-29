import { Globe, Menu, Moon, Sun, X } from 'lucide-react'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/i18n/useLanguage'

const SECTION_IDS = ['home', 'about-me', 'projects', 'skills', 'contact'] as const

type SectionId = (typeof SECTION_IDS)[number]

export const Header = () => {
  const { lang, t, toggleLang } = useLanguage()
  const { isDark, toggleTheme } = useTheme()
  const [active, setActive] = useState<SectionId>('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const indicatorRef = useRef<HTMLLIElement>(null)

  const navItems = useMemo(
    () => [
      { id: 'home' as const, href: '#home', label: t.nav.home },
      { id: 'projects' as const, href: '#projects', label: t.nav.projects },
      { id: 'skills' as const, href: '#skills', label: t.nav.skills },
      { id: 'contact' as const, href: '#contact', label: t.nav.contact },
    ],
    [t],
  )

  const updateIndicator = useCallback(() => {
    const indicator = indicatorRef.current
    if (!indicator) return

    const item = listRef.current?.querySelector<HTMLElement>(`[data-section="${active}"]`)
    if (!item) {
      indicator.style.opacity = '0'
      return
    }

    indicator.style.left = `${item.offsetLeft}px`
    indicator.style.top = `${item.offsetTop}px`
    indicator.style.width = `${item.offsetWidth}px`
    indicator.style.height = `${item.offsetHeight}px`
    indicator.style.opacity = '1'
  }, [active])

  useLayoutEffect(() => {
    updateIndicator()
  }, [updateIndicator, lang])

  useLayoutEffect(() => {
    const header = headerRef.current
    if (!header) return

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`)
    }

    updateHeaderHeight()
    const resizeObserver = new ResizeObserver(updateHeaderHeight)
    resizeObserver.observe(header)

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const resizeObserver = new ResizeObserver(updateIndicator)
    resizeObserver.observe(list)
    window.addEventListener('resize', updateIndicator)
    document.fonts?.ready.then(updateIndicator)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateIndicator)
    }
  }, [updateIndicator])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (section): section is HTMLElement => section !== null,
    )

    if (sections.length === 0) return

    const lastSection = sections[sections.length - 1]

    const handleScroll = () => {
      const atPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      if (atPageBottom) setActive(lastSection.id as SectionId)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id as SectionId)
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)')
    const handleChange = () => {
      if (desktop.matches) setIsMenuOpen(false)
    }

    desktop.addEventListener('change', handleChange)
    return () => desktop.removeEventListener('change', handleChange)
  }, [])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 flex h-fit w-full justify-center p-5"
    >
      <div className="relative flex h-fit w-full max-w-7xl items-center justify-center">
        <nav className="flex w-full items-center gap-0.5 rounded-full bg-surface px-1.5 py-1 text-xs font-semibold shadow-sm ring-1 ring-line backdrop-blur md:w-auto">
          <h1 className="mr-auto ml-2 text-sm font-extrabold md:mr-28">
            Gabr0.<span className="text-brand">Dev</span>
          </h1>
          <ul ref={listRef} className="relative m-0 hidden list-none items-center gap-0.5 p-0 md:flex">
            <li
              ref={indicatorRef}
              aria-hidden="true"
              className="pointer-events-none absolute rounded-full bg-accent opacity-0 shadow-sm transition-all duration-300 ease-out"
            />

            {navItems.map(({ id, href, label }) => {
              const isActive = active === id

              return (
                <li key={id} data-section={id} className="relative">
                  <a
                    href={href}
                    onClick={() => setActive(id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative z-10 block cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-300 ${
                      isActive ? 'text-accent-fg' : 'hover:opacity-70'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          <span
            aria-hidden="true"
            className="mx-0.5 hidden h-4 w-px bg-muted/30 md:block"
          />

          <button
            type="button"
            onClick={toggleLang}
            className="flex h-8 cursor-pointer items-center gap-1 rounded-full px-2.5 text-xs transition-opacity hover:opacity-70"
            aria-label={t.actions.toggleLanguage}
            title={t.actions.toggleLanguage}
          >
            <Globe size={16} />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-70"
            aria-label={t.actions.toggleTheme}
            title={t.actions.toggleTheme}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? t.actions.closeMenu : t.actions.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-70 md:hidden"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>

        <div
          id="mobile-nav"
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
          className={`absolute inset-x-0 top-full mt-2 origin-top rounded-2xl bg-surface p-2 shadow-sm ring-1 ring-line transition-all duration-200 ease-out md:hidden ${
            isMenuOpen
              ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none -translate-y-2 scale-95 opacity-0'
          }`}
        >
          <ul className="flex flex-col">
            {navItems.map(({ id, href, label }) => {
              const isActive = active === id

              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={() => {
                      setActive(id)
                      setIsMenuOpen(false)
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-accent font-semibold text-accent-fg'
                        : 'text-ink hover:bg-page'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
