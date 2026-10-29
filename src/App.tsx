import '@/App.css'

import { About } from '@/components/about-me/About.tsx'
import { Contact } from '@/components/contact/Contact.tsx'
import { Footer } from '@/components/footer/Footer.tsx'
import { Hero } from '@/components/hero/Hero.tsx'
import { Projects } from '@/components/projects/Projects.tsx'
import { Skills } from '@/components/skills/Skills.tsx'

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
