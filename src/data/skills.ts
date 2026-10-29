import { CodeXml, Database, Layers, Wrench, type LucideIcon } from 'lucide-react'
import type { Language } from '@/i18n/translations'

type LocalizedText = Record<Language, string>

export interface Skill {
  name: string
  icon: string
}

export interface SkillGroup {
  id: string
  title: LocalizedText
  description: LocalizedText
  icon: LucideIcon
  skills: readonly Skill[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'languages',
    title: {
      es: 'Lenguajes',
      en: 'Languages',
    },
    description: {
      es: 'Los lenguajes con los que escribo la interfaz, el backend y las apps.',
      en: 'The languages I use to write the interface, the backend and the apps.',
    },
    icon: CodeXml,
    skills: [
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'JavaScript', icon: '/skills/javascript.svg' },
      { name: 'PHP', icon: '/skills/php.svg' },
      { name: 'Kotlin', icon: '/skills/kotlin.svg' },
      { name: 'HTML5', icon: '/skills/html5.svg' },
      { name: 'CSS3', icon: '/skills/css.svg' },
    ],
  },
  {
    id: 'frameworks',
    title: {
      es: 'Frameworks & Librerías',
      en: 'Frameworks & Libraries',
    },
    description: {
      es: 'Librerías y herramientas de UI para construir sobre esa base.',
      en: 'Libraries and UI tools I build on top of that base.',
    },
    icon: Layers,
    skills: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TanStack', icon: '/skills/tanstack.svg' },
      { name: 'Tailwind CSS', icon: '/skills/tailwindcss.svg' },
      { name: 'shadcn/ui', icon: '/skills/shadcnui.svg' },
      { name: 'Jetpack Compose', icon: '/skills/jetpackcompose.svg' },
      { name: 'Material 3', icon: '/skills/materialdesign.svg' },
      { name: 'Dagger 2', icon: '/skills/dagger-2.svg' },
      { name: 'Lottie', icon: '/skills/lottiefiles.svg' },
      { name: 'XML Views', icon: '/skills/xml.svg' },
      { name: 'REST APIs', icon: '/skills/rest-api.svg' },
    ],
  },
  {
    id: 'databases',
    title: {
      es: 'Bases de datos',
      en: 'Databases',
    },
    description: {
      es: 'Persistencia, autenticación y servicios de datos.',
      en: 'Persistence, authentication and data services.',
    },
    icon: Database,
    skills: [
      { name: 'MySQL', icon: '/skills/mysql.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
      { name: 'SQLite', icon: '/skills/sqlite.svg' },
      { name: 'Supabase', icon: '/skills/supabase.svg' },
      { name: 'Firebase', icon: '/skills/firebase.svg' },
      { name: 'PDO', icon: '/skills/pdo.svg' },
    ],
  },
  {
    id: 'tools',
    title: {
      es: 'Herramientas',
      en: 'Tools',
    },
    description: {
      es: 'El entorno con el que versiono, pruebo y despliego.',
      en: 'The environment I use to version, test and deploy.',
    },
    icon: Wrench,
    skills: [
      { name: 'Git', icon: '/skills/git.svg' },
      { name: 'GitHub', icon: '/skills/github.svg' },
      { name: 'Android Studio', icon: '/skills/androidstudio.svg' },
      { name: 'Visual Studio Code', icon: '/skills/vscode.svg' },
      { name: 'Postman', icon: '/skills/postman.svg' },
      { name: 'Vite', icon: '/skills/vite.svg' },
      { name: 'Cloudflare Workers', icon: '/skills/cloudflareworkers.svg' },
      { name: 'Vercel', icon: '/skills/vercel.svg' },
    ],
  },
]
