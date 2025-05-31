import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'

const About = () => {
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
            src="https://images.pexels.com/photos/7709987/pexels-photo-7709987.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="About Us" 
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <h1 className="mb-4 text-4xl font-bold text-center md:text-5xl">About Us</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-primary-100">
            Learn more about notify code.inc and our mission to develop innovative software solutions.
          </p>
        </div>
      </div>
      
      {/* About content placeholder - This would be filled with actual content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <SectionTitle 
                title="Our Story" 
                centered={false}
              />
              <p className="mb-4 text-gray-700">
                notify code.inc was founded in 2024 by Neza Hakim with a vision to develop real-world software solutions that address the unique challenges faced in our community in Rwanda, particularly in Gisenyi.
              </p>
              <p className="mb-4 text-gray-700">
                Starting with a small team of passionate developers, we have grown to include 7 talented individuals who share a common goal: to create innovative technology that improves lives and businesses in our region.
              </p>
              <p className="text-gray-700">
                Our focus has always been on understanding the local context and developing solutions that are not only technically excellent but also culturally relevant and accessible to our community.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-primary-500">Our Mission</h2>
              <p className="text-gray-700">
                To develop innovative, high-quality software solutions that address real-world challenges in our community, while contributing to Rwanda's technological advancement and empowering local businesses and individuals through technology.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-secondary-500">Our Vision</h2>
              <p className="text-gray-700">
                To become a leading software development company in East Africa, recognized for our technical excellence, innovative solutions, and positive impact on communities through technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16">
        <div className="container">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide our work and relationships"
          />
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary-500">Innovation</h3>
              <p className="text-gray-700">
                We constantly seek new and better ways to solve problems and create value through technology.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary-500">Quality</h3>
              <p className="text-gray-700">
                We are committed to delivering high-quality, reliable software solutions that exceed expectations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary-500">Integrity</h3>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and ethical principles.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary-500">Community</h3>
              <p className="text-gray-700">
                We are dedicated to making a positive impact in our local community and contributing to Rwanda's development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline placeholder - This would be filled with actual milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Journey" 
            subtitle="Key milestones in our company's growth"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {/* Item 1 */}
              <div className="flex flex-col items-center mb-12">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-500 rounded-full">
                  2024
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md max-w-lg">
                  <h3 className="mb-2 text-xl font-semibold">Company Founded</h3>
                  <p className="text-gray-700">
                    notify code.inc was established in Gisenyi, Rwanda by Neza Hakim with a team of 7 talented developers.
                  </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col items-center mb-12">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-500 rounded-full">
                  2024
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md max-w-lg">
                  <h3 className="mb-2 text-xl font-semibold">First Major Project</h3>
                  <p className="text-gray-700">
                    Completed our first major project, a custom software solution for a local business in Gisenyi.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-500 rounded-full">
                  2025
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md max-w-lg">
                  <h3 className="mb-2 text-xl font-semibold">Expansion Plans</h3>
                  <p className="text-gray-700">
                    Planning to expand our team and services to reach more clients across Rwanda and East Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About