import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'A complete e-commerce solution for local businesses in Rwanda.',
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'Software Development',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'A comprehensive system for managing healthcare services and patient records.',
  },
  {
    id: 3,
    title: 'Agriculture Monitoring App',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Mobile application helping farmers track crops and optimize agricultural practices.',
  },
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  
  return (
    <section id="projects" className="section bg-primary-900 text-white">
      <div className="container">
        <SectionTitle 
          title="Our Projects" 
          subtitle="We develop innovative solutions across various industries. Here are some of our recent projects."
          light
        />
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative w-full h-72">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2 py-1 mb-2 text-xs font-medium text-white bg-secondary-500 rounded">
                  {project.category}
                </span>
                <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                <p 
                  className={`text-gray-300 transition-all duration-300 ${
                    activeProject === project.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button to="/projects" variant="outline" className="border-white text-white hover:bg-white/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects