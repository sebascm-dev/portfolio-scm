import Image from 'next/image'

import Header from '@/components/Header'
import Portada from '@/components/Portada'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto z-0 scroll-smooth'>

      {/* Header */}
      <Header />

      {/* Portada */}
      <section id='portada'>
        <Portada />
      </section>

      {/* About */}
      <section id='about'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience'>
        <Experience />
      </section>

      {/* Skills */}
      <section id='skills'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects'>
        <Projects />
      </section>
    </main>
  )
}
