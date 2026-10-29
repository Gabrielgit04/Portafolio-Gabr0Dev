import type { Language } from '@/i18n/translations'

export type ProjectCategory = 'web' | 'android'

type LocalizedText = Record<Language, string>
type LocalizedParagraphs = Record<Language, readonly string[]>

export interface Project {
  id: string
  title: LocalizedText
  summary: LocalizedText
  description: LocalizedParagraphs
  category: ProjectCategory
  year: string
  role: LocalizedText
  stack: readonly string[]
  team?: boolean
  image?: string
  imageAlt?: LocalizedText
  demoUrl?: string
  repoUrl?: string
}

export const projects: readonly Project[] = [
  {
    id: 'g-amount',
    title: {
      es: 'G-amount',
      en: 'G-amount',
    },
    summary: {
      es: 'Aplicación web para registrar ingresos y egresos, controlar cuentas por cobrar/pagar y generar reportes exportables, con una experiencia responsiva para escritorio y móvil.',
      en: 'Web app to track income and expenses, manage accounts receivable/payable and generate exportable reports, with a responsive experience on desktop and mobile.',
    },
    description: {
      es: [
        'G-amount es una aplicación web de gestión financiera que centraliza ingresos, egresos, cuentas por cobrar y cuentas por pagar en un solo panel. El objetivo es entender la situación financiera sin depender de planillas dispersas.',
        'La app permite registrar movimientos, organizarlos por cuentas y generar reportes exportables. La interfaz está construida con React, TypeScript y shadcn/ui, con Supabase y PostgreSQL para la persistencia de datos. El diseño es responsive y está pensado para usarse tanto en escritorio como en móvil.',
        'Como desarrollador full stack me encargué del modelo de datos, la integración con Supabase, la lógica de negocio, la interfaz y el despliegue en Cloudflare Workers.',
      ],
      en: [
        'G-amount is a web app for financial management that brings income, expenses, accounts receivable and accounts payable into a single dashboard. The goal is to understand your financial position without relying on scattered spreadsheets.',
        'It lets you record transactions, organize them by account and generate exportable reports. The interface is built with React, TypeScript and shadcn/ui, with Supabase and PostgreSQL powering data persistence. The responsive design works on both desktop and mobile.',
        'As a full-stack developer, I handled the data model, Supabase integration, business logic, UI and deployment on Cloudflare Workers.',
      ],
    },
    category: 'web',
    year: '2026',
    role: {
      es: 'Desarrollo full stack: frontend, backend y despliegue',
      en: 'Full-stack development: frontend, backend and deployment',
    },
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'shadcn/ui'],
    image: '/projects/g-amount.jpg',
    imageAlt: {
      es: 'Página principal de G-amount, aplicación de gestión financiera',
      en: 'G-amount landing page, a financial management application',
    },
    demoUrl: 'https://resources-control-app.gabrielmoises1202.workers.dev/',
    repoUrl: 'https://github.com/Gabrielgit04/Resources-Control-App',
  },
  {
    id: 'terminal-ali-primera',
    title: {
      es: 'Terminal Alí Primera',
      en: 'Terminal Alí Primera',
    },
    summary: {
      es: 'Sistema de gestión para el terminal de pasajeros: entradas y salidas de unidades, rutas, conductores, vehículos, usuarios y reportes operativos.',
      en: 'Management system for the bus terminal: vehicle entries and exits, routes, drivers, vehicles, users and operational reports.',
    },
    description: {
      es: [
        'Terminal Alí Primera es un sistema de gestión para digitalizar la operación diaria del terminal de pasajeros: registro de entradas y salidas de autobuses, control de pasajeros, rutas, conductores, vehículos y usuarios con roles.',
        'Incluye un dashboard con indicadores, control operativo y semanal, gráficos, filtros por fecha y exportación de reportes a PDF. La interfaz está construida con React 19, TypeScript, TanStack Start/Router, Tailwind CSS y shadcn/ui, con Supabase y PostgreSQL como base de datos.',
        'El sistema cubre autenticación por roles, CRUDs completos, vinculación automática de entradas y salidas y cálculo de tasas. Como desarrollador full stack trabajé en la interfaz, la lógica de negocio, la integración con Supabase y los reportes.',
      ],
      en: [
        'Terminal Alí Primera is a management system designed to digitize the daily operation of a passenger terminal: bus entries and exits, passenger tracking, routes, drivers, vehicles and role-based users.',
        'It includes a dashboard with KPIs, operational and weekly controls, charts, date filters and PDF report export. The interface is built with React 19, TypeScript, TanStack Start/Router, Tailwind CSS and shadcn/ui, with Supabase and PostgreSQL as the database.',
        'The system covers role-based authentication, full CRUDs, automatic matching of entries and exits and fare calculations. As a full-stack developer, I worked on the UI, business logic, Supabase integration and reporting.',
      ],
    },
    category: 'web',
    year: '2026',
    role: {
      es: 'Desarrollo full stack',
      en: 'Full-stack development',
    },
    stack: ['React', 'TypeScript', 'TanStack', 'Tailwind CSS', 'shadcn/ui', 'Supabase'],
    image: '/projects/terminal-ali-primera.jpg',
    imageAlt: {
      es: 'Panel principal de Terminal Alí Primera, sistema de gestión de terminal de pasajeros',
      en: 'Terminal Alí Primera main dashboard, a passenger terminal management system',
    },
    repoUrl: 'https://github.com/Gabrielgit04/Project-for-terminal-Only-panel-admin',
  },
  {
    id: 'consejo-comunal-las-margaritas',
    title: {
      es: 'Consejo Comunal Las Margaritas',
      en: 'Las Margaritas Community Council',
    },
    summary: {
      es: 'Sistema administrativo para un consejo comunal: registro civil, gestión de proyectos comunitarios y usuarios administradores.',
      en: 'Administrative system for a community council: civil registry, community project management and admin users.',
    },
    description: {
      es: [
        'Consejo Comunal Las Margaritas es un sistema de gestión administrativa para el consejo comunal "Unidos en Victoria, Siempre Venceremos" de Las Margaritas, Estado Falcón. Permite administrar el registro civil de la comunidad, los proyectos comunitarios y los usuarios administradores.',
        'Incluye autenticación con recuperación de contraseña por preguntas de seguridad, CRUD de ciudadanos con búsqueda y validaciones por campo, y gestión de proyectos con presupuestos y gastos. Está construido con PHP, SQLite/PDO, HTML5, CSS3 y JavaScript vanilla, con consultas preparadas y hash de contraseñas.',
        'Como desarrollador full stack me encargué de la arquitectura, el modelo de datos, la lógica del backend y la interfaz del sistema.',
      ],
      en: [
        'Las Margaritas Community Council is an administrative management system for the "Unidos en Victoria, Siempre Venceremos" community council in Las Margaritas, Falcón State. It manages the community civil registry, community projects and administrator users.',
        'It includes authentication with password recovery through security questions, a citizen CRUD with search and field-level validation, and project management with budgets and expenses. It is built with PHP, SQLite/PDO, HTML5, CSS3 and vanilla JavaScript, with prepared statements and password hashing.',
        'As a full-stack developer, I handled the architecture, data model, backend logic and system UI.',
      ],
    },
    category: 'web',
    year: '2026',
    role: {
      es: 'Desarrollo full stack',
      en: 'Full-stack development',
    },
    stack: ['PHP', 'SQLite', 'PDO', 'JavaScript', 'HTML/CSS'],
    team: true,
    image: '/projects/community-service.jpg',
    imageAlt: {
      es: 'Panel principal del Consejo Comunal Las Margaritas',
      en: 'Las Margaritas Community Council main dashboard',
    },
    repoUrl: 'https://github.com/Gabrielgit04/Community-Service',
  },
  {
    id: 'healthypath-portfolio',
    title: {
      es: 'Healthypath — Sitio oficial',
      en: 'Healthypath — Official site',
    },
    summary: {
      es: 'Sitio oficial de Healthypath con la presentación de la app, sus funciones, el equipo de desarrollo y la descarga del APK.',
      en: 'Official Healthypath website with the app presentation, features, development team and APK download.',
    },
    description: {
      es: [
        'Sitio web oficial de Healthypath, la app móvil de salud y bienestar creada por un equipo de estudiantes de UNEFA. Presenta la aplicación, sus tres áreas principales (actividad física, alimentación y sueño) y funcionalidades como el cálculo de IMC, el requerimiento proteico y el chatbot.',
        'Incluye una página de inicio con secciones informativas, una página del equipo de desarrollo, enlaces de contacto y la descarga del APK. Está construido con HTML5 y CSS3, con estilos modulares por página y diseño responsive.',
        'Como desarrollador web me encargué de la estructura, los estilos y la publicación del sitio.',
      ],
      en: [
        'Official website for Healthypath, the health and wellness mobile app created by a UNEFA student team. It presents the app, its three main areas (physical activity, nutrition and sleep) and features such as BMI calculation, protein requirements and the chatbot.',
        'It includes a home page with informative sections, a development team page, contact links and the APK download. It is built with HTML5 and CSS3, with modular per-page styles and a responsive design.',
        'As a web developer, I handled the structure, styles and site deployment.',
      ],
    },
    category: 'web',
    year: '2025',
    role: {
      es: 'Desarrollo web completo',
      en: 'End-to-end web development',
    },
    stack: ['HTML5', 'CSS3'],
    image: '/projects/healthypath-portfolio.jpg',
    imageAlt: {
      es: 'Página de inicio del sitio oficial de Healthypath',
      en: 'Healthypath official website home page',
    },
    demoUrl: 'https://healthypath-portfolio.vercel.app',
    repoUrl: 'https://github.com/Gabrielgit04/Healthypath_portfolio',
  },
  {
    id: 'healthypath-android',
    title: {
      es: 'Healthypath — App Android',
      en: 'Healthypath — Android app',
    },
    summary: {
      es: 'App Android de salud y bienestar con cálculo de IMC, actividad física, sueño y un chatbot con inteligencia artificial.',
      en: 'Android health and wellness app with BMI calculation, physical activity, sleep guidance and an AI chatbot.',
    },
    description: {
      es: [
        'Healthypath es una aplicación Android de salud y bienestar que reúne nutrición, actividad física y sueño en una sola experiencia. Incluye autenticación con Firebase, cálculo de IMC, requerimiento proteico, rutinas y recomendaciones, y un chatbot con Google Gemini.',
        'La app está desarrollada en Kotlin con Jetpack Compose y vistas XML, usando Firebase Authentication, Firestore y Analytics, Dagger 2 para inyección de dependencias, arquitectura MVP en el login, Navigation Component, Material 3 y Lottie.',
        'Como desarrollador Android me encargué del desarrollo de la app, la integración con Firebase y Gemini y la versión beta publicada como APK.',
      ],
      en: [
        'Healthypath is an Android health and wellness app that brings nutrition, physical activity and sleep into a single experience. It includes Firebase authentication, BMI calculation, protein requirements, routines and recommendations, and a chatbot powered by Google Gemini.',
        'The app is built with Kotlin, Jetpack Compose and XML views, using Firebase Authentication, Firestore and Analytics, Dagger 2 for dependency injection, MVP architecture in the login flow, Navigation Component, Material 3 and Lottie.',
        'As an Android developer, I handled the app development, Firebase and Gemini integration and the beta version released as an APK.',
      ],
    },
    category: 'android',
    year: '2025',
    role: {
      es: 'Desarrollo Android completo',
      en: 'End-to-end Android development',
    },
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Gemini', 'Dagger 2', 'Material 3'],
    team: true,
    repoUrl: 'https://github.com/Gabrielgit04/Healthypath',
  },
]
