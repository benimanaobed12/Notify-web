import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    document.addEventListener('scroll', handleScroll)
    
    // Initialize animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el)
    })
    
    return () => {
      document.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [scrolled])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  )
}

export default App