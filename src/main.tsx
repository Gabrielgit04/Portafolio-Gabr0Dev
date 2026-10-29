import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Header } from '@/components/header/Header.tsx'
import { LanguageProvider } from '@/i18n/LanguageProvider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <Header />
    <App />
  </LanguageProvider>,
)
