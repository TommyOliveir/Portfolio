import { useLocation } from 'react-router-dom'
import { About } from '../components/about/About'
import { Skills } from '../components/skills/Skills'
import { Hero } from './Hero'
import { useEffect } from 'react'
import { Projects } from '../components/projects/Projects'
import { Contact } from '../components/contact/Contact'

export const Home = () => {
  const { hash } = useLocation()

  // this effect scroll to very top if hash is root '/'
  useEffect(() => {
    if (!hash || hash === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
