import { motion } from 'framer-motion'
import { FiMonitor, FiSmartphone, FiServer, FiDatabase, FiLayout, FiCloud } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const servicesData = [
  {
    icon: <FiMonitor className="w-10 h-10" />,
    title: 'Web Development',
    description: 'Custom, responsive websites and web applications built with modern technologies like React, Vue, and Node.js.',
  },
  {
    icon: <FiSmartphone className="w-10 h-10" />,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
  },
  {
    icon: <FiServer className="w-10 h-10" />,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to address your specific business challenges and requirements.',
  },
  {
    icon: <FiLayout className="w-10 h-10" />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, engaging interfaces for your digital products.',
  },
  {
    icon: <FiDatabase className="w-10 h-10" />,
    title: 'Database Solutions',
    description: 'Efficient database design, implementation, and management to securely store and organize your data.',
  },
  {
    icon: <FiCloud className="w-10 h-10" />,
    title: 'Cloud Services',
    description: 'Scalable, reliable cloud infrastructure setup and management on AWS, Azure, or Google Cloud.',
  },
]

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  }
  
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle 
          title="Our Services" 
          subtitle="We offer a comprehensive range of software development services to meet your business needs."
        />
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-3 mb-4 text-primary-500 bg-primary-50 rounded-full w-fit">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button to="/services">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services