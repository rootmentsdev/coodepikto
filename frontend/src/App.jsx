import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'Codepikto Studio | Modern Digital Experiences'
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
