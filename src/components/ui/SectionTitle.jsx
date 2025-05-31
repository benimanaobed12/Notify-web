import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        className={`relative inline-block mb-4 text-3xl font-bold md:text-4xl ${light ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        {title}
        <span className="absolute bottom-0 left-0 w-12 h-1 mt-2 bg-primary-500"></span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`max-w-2xl ${centered ? 'mx-auto' : ''} text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle