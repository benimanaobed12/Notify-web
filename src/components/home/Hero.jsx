import { motion } from 'framer-motion'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-screen text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Team collaboration" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="mb-6 text-5xl font-bold leading-tight md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building <span className="text-secondary-500">Innovative</span> Software Solutions
          </motion.h1>
          
          <motion.p 
            className="mb-8 text-xl text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            notify code.inc delivers cutting-edge software solutions designed to solve real-world problems in Rwanda and beyond. Our team transforms ideas into reality.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button to="/services" size="lg">
              Our Services
            </Button>
            <Button to="/projects" variant="outline" size="lg" className="bg-white/10">
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero