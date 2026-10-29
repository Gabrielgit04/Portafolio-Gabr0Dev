import { createContext } from 'react'
import type { Language, Translation } from '@/i18n/translations'

export interface LanguageContextValue {
  lang: Language
  t: Translation
  setLang: (lang: Language) => void
  toggleLang: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
