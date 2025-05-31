import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import AimeeFils from "../../assets/aimefils.jpg"
import Ngabo from "../../assets/portfolio.jpg"

const teamMembers = [
  {
    name: 'Neza Hakim',
    position: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Aime Fils',
    position: 'Team Leader & Full-Stack Developer',
    image: AimeeFils,
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Ngabo Daniel',
    position: 'Full-Stack & Database Developer',
    image: Ngabo,
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  }
]

const Team = () => {
  return (
    <section id="team" className="section bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="Meet Our Team" 
          subtitle="Our talented team of developers is passionate about creating innovative software solutions."
        />
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-md group"
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 transition-transform duration-300 translate-y-full bg-primary-500 group-hover:translate-y-0">
                  <div className="flex space-x-4">
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary-300 transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary-300 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary-300 transition-colors"
                      aria-label="Twitter"
                    >
                      <FiTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button to="/team">
            View All Team Members
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Team