import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import SectionTitle from '../components/ui/SectionTitle'
import AimeeFils from "../assets/aimefils.jpg"
import Nsanzineza from "../assets/nsanzineza moise.jpg"
import Ngabo from "../assets/portfolio.jpg"
import Ngabo from "../assets/dani5.png"
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
    name: 'Nsanzineza Moise',
    position: 'Full-Stack & Database Developer',
    bio: 'Full-Stack & Database Developer with expertise in building scalable web applications and optimizing data systems. Passionate about clean code, efficient databases, and seamless user experiences. Turning complex problems into elegant solutions.',
    image: Nsanzineza,
    social: {
      github: 'https://github.com/nsanzinezamoise-coder',
      linkedin: 'https://www.linkedin.com/in/nsanzineza-moise-6a9bb032a/',
      twitter: '#'
    }
  },
  {
    name: 'Benimana Obed',
    position: 'Full-Stack Developer & UI/UX Designer',
    bio: 'Full-Stack Developer & UI/UX Designer creating user-friendly and functional web applications',
    image: 'data:image/jpeg;base64,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',
    social: {
      github: 'https://github.com/benimanaobed12',
      linkedin: 'https://www.linkedin.com/in/benimana-obed-1a043134b/',
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