import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import SectionTitle from '../components/ui/SectionTitle'
import AimeeFils from "../assets/aimefils.jpg"
import Ngabo from "../assets/dani5.png"
import Ngabo from "../assets/portfolio.jpg"
import Hypolite from "../assets/hypolite.jpg"
const teamMembers = [
  {
    name: 'Neza Hakim',
    position: 'Founder & CEO',
    bio: 'Founder of notify code.inc with a vision to create innovative software solutions for Rwanda.',
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
    bio: 'Leads our development team with expertise in both frontend and backend technologies.',
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
    bio: 'Expert in backend development, frontend development, and database administration.',
    image: Ngabo,
    social: {
      github: 'https://github.com/ngabodaniel1000',
      linkedin: 'https://www.linkedin.com/in/ngabo-daniel-011118283/'
    }
  },
  {
    name: 'Jean Claude',
    position: 'Frontend Developer',
    bio: 'Creates beautiful and responsive user interfaces with modern frontend frameworks.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Marie Claire',
    position: 'UI/UX Designer',
    bio: 'Designs intuitive and engaging user experiences for web and mobile applications.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Iratuzi Hypolite',
    position: 'Full-Stack Developer',
    bio: 'Specializes in building frontend and robust server-side applications and APIs.',
    image: Hypolite,
    social: {
      github: 'https://github.com/loxxcode/',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Pascal Uwimana',
    position: 'Mobile Developer',
    bio: 'Develops native and cross-platform mobile applications for iOS and Android.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  }
]

const Team = () => {
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
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Our Team" 
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <h1 className="mb-4 text-4xl font-bold text-center md:text-5xl">Our Team</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-primary-100">
            Meet the talented people behind notify code.inc who make everything possible.
          </p>
        </div>
      </div>
      
      {/* Team members */}
      <section className="py-16">
        <div className="container">
          <SectionTitle 
            title="The People Behind Our Success" 
            subtitle="Our team of skilled developers and designers is passionate about creating innovative software solutions."
          />
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden bg-white rounded-lg shadow-md group"
              >
                <div className="relative overflow-hidden h-64">
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
                   
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="mb-3 text-primary-500">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join our team */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container">
          <div className="p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold">Join Our Team</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-100">
              We're always looking for talented, passionate people to join our team. If you're interested in working with us, check out our current openings or send us your resume.
            </p>
            <a 
              href="mailto:careers@notifycode.com" 
              className="inline-flex items-center justify-center px-6 py-3 font-medium text-primary-500 transition-colors bg-white rounded-md hover:bg-gray-100"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Team