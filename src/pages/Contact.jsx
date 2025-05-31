import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    // In a real scenario, we would send this data to a server
    setFormSubmitted(true)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    // Show success message temporarily
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
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
            src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Contact Us" 
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <h1 className="mb-4 text-4xl font-bold text-center md:text-5xl">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-primary-100">
            Get in touch with our team to discuss your project or ask any questions.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="h-full p-8 bg-primary-500 rounded-lg text-white">
                <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
                <p className="mb-8">
                  We would love to hear from you. Reach out to us through any of the following channels or fill out the contact form.
                </p>
                
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
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 mr-4 bg-white rounded-full">
                      <FiClock className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium">Working Hours</h4>
                      <p className="text-primary-100">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <SectionTitle 
                  title="Send Us a Message" 
                  subtitle="Fill out the form below and we'll get back to you as soon as possible."
                  centered={false}
                />
                
                {formSubmitted ? (
                  <div className="p-6 mb-6 text-center bg-green-100 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mb-2 text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                    <p className="text-green-700">Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="+250 780 000 000"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                        <input 
                          type="text" 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Project Inquiry"
                          required
                        />
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="How can we help you?"
                          required
                        ></textarea>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <Button type="submit" className="w-full md:w-auto">
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-8">
        <div className="container">
          <div className="overflow-hidden rounded-lg shadow-md h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.41051361114!2d29.209693237989227!3d-1.7006296662543505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd4499759c4b57%3A0x83ecdf5beb41d65!2sGisenyi%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1653394696529!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="notify code.inc location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to some common questions about our services and process."
          />
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary-500">How much does a typical project cost?</h3>
              <p className="text-gray-700">
                Project costs vary depending on complexity, scope, and requirements. We provide detailed quotes after understanding your specific needs during our initial consultation.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary-500">How long does it take to complete a project?</h3>
              <p className="text-gray-700">
                Project timelines depend on the scope and complexity. Simple websites might take 2-4 weeks, while complex software applications can take several months. We'll provide a timeline during our project planning phase.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary-500">Do you provide ongoing support after project completion?</h3>
              <p className="text-gray-700">
                Yes, we offer various maintenance and support packages to ensure your software continues to function properly and stays up-to-date with the latest security updates.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary-500">Can you work with clients outside of Rwanda?</h3>
              <p className="text-gray-700">
                Absolutely! While we're based in Rwanda, we work with clients globally. We use various communication tools to ensure smooth collaboration regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact