import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you shortly.')
  }
  
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind? Contact us today and let's discuss how we can help you achieve your goals."
        />
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-2xl font-semibold text-primary-900">Send us a message</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="p-8 mb-8 bg-primary-500 rounded-lg shadow-md text-white">
              <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 bg-white rounded-full">
                    <FiMapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Our Location</h4>
                    <p className="text-primary-100">Gisenyi, Rwanda</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 bg-white rounded-full">
                    <FiMail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Email Us</h4>
                    <p className="text-primary-100">
                      <a href="mailto:contact@notifycode.com" className="hover:underline">
                        contact@notifycode.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 bg-white rounded-full">
                    <FiPhone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Call Us</h4>
                    <p className="text-primary-100">
                      <a href="tel:+250780000000" className="hover:underline">
                        +250 780 000 000
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="flex-grow overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.41051361114!2d29.209693237989227!3d-1.7006296662543505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd4499759c4b57%3A0x83ecdf5beb41d65!2sGisenyi%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1653394696529!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="notify code.inc location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact