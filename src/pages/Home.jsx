import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Team from '../components/home/Team'
import Projects from '../components/home/Projects'
import Contact from '../components/home/Contact'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <About />
      <Services />
      <Team />
      <Projects />
      <Contact />
    </motion.div>
  )
}

export default Home