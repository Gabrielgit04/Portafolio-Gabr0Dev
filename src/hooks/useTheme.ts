import { useEffect, useState } from 'react'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false

  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const useTheme = () => {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    root.style.colorScheme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return {
    isDark,
    toggleTheme: () => setIsDark((prev) => !prev),
  }
}
