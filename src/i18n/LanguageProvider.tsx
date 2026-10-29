import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext } from '@/i18n/language-context'
import { translations, type Language } from '@/i18n/translations'

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es'

  const stored = localStorage.getItem('lang')
  if (stored === 'es' || stored === 'en') return stored

  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'es' ? 'en' : 'es')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
