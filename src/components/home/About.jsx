import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="About notify code.inc" 
          subtitle="Founded in 2024, we are a passionate team of developers dedicated to creating impactful software solutions in Rwanda."
        />
        
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left side - Image */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Our team working together" 
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded shadow-lg hidden md:block">
                <span className="block text-4xl font-bold">7+</span>
                <span className="text-primary-100">Developers</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 text-2xl font-semibold">Our Story</h3>
            <p className="mb-4 text-gray-700">
              notify code.inc was founded by Neza Hakim in 2024 with a vision to develop real-world software solutions that address challenges in our local community in Rwanda, particularly in Gisenyi.
            </p>
            <p className="mb-6 text-gray-700">
              Our team consists of 7 talented developers including Ngabo Daniel who specializes in backend development, frontend development, and database administration, and Aime Fils who leads our development efforts as team leader with expertise in both frontend and backend technologies.
            </p>
            
            <h3 className="mb-6 text-2xl font-semibold">Our Mission</h3>
            <p className="mb-6 text-gray-700">
              We are committed to creating innovative, high-quality software solutions that provide real value to businesses and individuals in Rwanda and beyond. We believe in using technology to solve local problems and contribute to the growth of Rwanda's tech ecosystem.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button to="/about">
                Learn More
              </Button>
              <Button to="/team" variant="outline">
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About