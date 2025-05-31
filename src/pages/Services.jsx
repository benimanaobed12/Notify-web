import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'

const Services = () => {
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
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Our Services" 
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <h1 className="mb-4 text-4xl font-bold text-center md:text-5xl">Our Services</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-primary-100">
            We offer comprehensive software development services tailored to your needs.
          </p>
        </div>
      </div>
      
      {/* Services page content - This would be filled with more detailed service information */}
      <section className="py-16">
        <div className="container">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Comprehensive software solutions designed to meet your specific needs."
          />
          
          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="mb-4 text-2xl font-bold text-primary-500">Web Development</h2>
                <p className="mb-4 text-gray-700">
                  We build responsive, user-friendly websites and web applications that provide exceptional user experiences and help you achieve your business goals.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Custom website development
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    E-commerce solutions
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Content management systems
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Progressive Web Apps (PWAs)
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Web portals and dashboards
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Web Development" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img 
                  src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Mobile App Development" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold text-primary-500">Mobile App Development</h2>
                <p className="mb-4 text-gray-700">
                  We create native and cross-platform mobile applications that deliver exceptional user experiences and help you connect with your audience on their preferred devices.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    iOS app development
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Android app development
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Cross-platform app development
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    App UI/UX design
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    App maintenance and support
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="mb-4 text-2xl font-bold text-primary-500">Custom Software Development</h2>
                <p className="mb-4 text-gray-700">
                  We develop tailored software solutions that address your specific business challenges and help you achieve your goals.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Business process automation
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Enterprise resource planning (ERP)
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Customer relationship management (CRM)
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Inventory management systems
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 mr-2 text-white bg-primary-500 rounded-full flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                    Healthcare management solutions
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Custom Software Development" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Development Process" 
            subtitle="We follow a structured approach to ensure we deliver high-quality solutions that meet your needs."
          />
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-500 rounded-full">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold">Discovery</h3>
              <p className="text-gray-700">
                We start by understanding your business, objectives, and specific requirements to define the scope of your project.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-500 rounded-full">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold">Planning</h3>
              <p className="text-gray-700">
                We create a detailed project plan, including timelines, milestones, and resource allocation.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-500 rounded-full">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold">Development</h3>
              <p className="text-gray-700">
                Our team designs and develops your solution using the latest technologies and best practices.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-500 rounded-full">
                4
              </div>
              <h3 className="mb-3 text-xl font-semibold">Delivery</h3>
              <p className="text-gray-700">
                We thoroughly test, deploy, and provide ongoing support for your solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services