import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Worldtech from "../assets/worldx-tech.png"

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'A complete e-commerce solution for local businesses in Rwanda, featuring product management, order processing, and payment integration.',
    client: 'Local Retail Association',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    year: 2024
  },
  {
    id: 2,
    title: 'World X-Tech',
    category: 'Web Development Development',
    image: Worldtech,
    description: 'A comprehensive software that discover the latest innovations in AI, Space Exploration, Virtual Reality, and more. Stay ahead with cutting-edge technological advancements.',
    client: "Not assigned",
    technologies: ['React', 'Taiwlind css'],
    year: 2024
  },
  {
    id: 3,
    title: 'Agriculture Monitoring App',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Mobile application helping farmers track crops, monitor weather conditions, and optimize agricultural practices.',
    client: 'Rwanda Farming Cooperative',
    technologies: ['React Native', 'Firebase', 'Weather API'],
    year: 2024
  },
  {
    id: 4,
    title: 'School Management Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'A complete school management solution with student records, attendance tracking, grade management, and parent communication features.',
    client: 'Gisenyi International School',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    year: 2024
  },
  {
    id: 5,
    title: 'Restaurant Ordering System',
    category: 'Software Development',
    image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1600',
    description: 'A digital ordering system for restaurants, including menu management, order processing, and kitchen display system.',
    client: 'Restaurant Association of Rwanda',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    year: 2024
  },
  {
    id: 6,
    title: 'Tourism Guide App',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Mobile application showcasing tourist attractions in Rwanda, with interactive maps, booking features, and local guides information.',
    client: 'Rwanda Tourism Board',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    year: 2024
  }
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  
  const categories = ['All', 'Web Development', 'Mobile App', 'Software Development']
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)
  
  const openProjectDetails = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }
  
  const closeProjectDetails = () => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="relative py-24 bg-primary-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Our Projects" 
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <h1 className="mb-4 text-4xl font-bold text-center md:text-5xl">Our Projects</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-primary-100">
            Explore our portfolio of innovative software solutions and successful client projects.
          </p>
        </div>
      </div>
      
      {/* Projects */}
      <section className="py-16">
        <div className="container">
          <SectionTitle 
            title="Our Portfolio" 
            subtitle="We're proud of the work we've done for our clients. Browse our recent projects to see our expertise in action."
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 mb-2 text-sm font-medium transition-colors rounded-md ${
                  activeFilter === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden bg-white rounded-lg shadow-md cursor-pointer group"
                onClick={() => openProjectDetails(project)}
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 mb-2 text-xs font-medium text-white bg-secondary-500 rounded">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-medium text-white bg-secondary-500 rounded">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-gray-600 line-clamp-2">{project.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      openProjectDetails(project)
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Project Details Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeProjectDetails}>
              <motion.div 
                className="relative w-full max-w-4xl p-6 mx-4 bg-white rounded-lg max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute p-2 text-gray-500 bg-white rounded-full top-4 right-4 hover:text-gray-700"
                  onClick={closeProjectDetails}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-auto mb-4 rounded-lg"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-100 rounded-lg">
                        <h4 className="mb-1 text-sm font-semibold text-gray-500">Client</h4>
                        <p className="font-medium">{selectedProject.client}</p>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-lg">
                        <h4 className="mb-1 text-sm font-semibold text-gray-500">Year</h4>
                        <p className="font-medium">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-primary-500">{selectedProject.title}</h2>
                    <div className="mb-4">
                      <span className="inline-block px-2 py-1 mb-2 text-xs font-medium text-white bg-secondary-500 rounded">
                        {selectedProject.category}
                      </span>
                    </div>
                    <p className="mb-6 text-gray-700">{selectedProject.description}</p>
                    
                    <h3 className="mb-2 text-lg font-semibold">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-sm font-medium text-primary-500 bg-primary-50 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="primary">
                      Request Similar Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container">
          <div className="p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-100">
              Let's work together to bring your ideas to life. Contact us today to discuss your software development needs.
            </p>
            <Button to="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects