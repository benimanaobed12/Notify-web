import { Link } from 'react-router-dom'
import { FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import Logo from '../ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo light />
            </div>
            <p className="mb-6 text-gray-400">
              Building real-world software solutions for our community in Rwanda since 2024.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Database Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Gisenyi, Rwanda
                </span>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                <a 
                  href="mailto:contact@notifycode.com" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  contact@notifycode.com
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                <a 
                  href="tel:+250780000000" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  +250 780 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-4 text-center border-t border-gray-800">
        <p className="text-gray-500">
          &copy; {currentYear} notify code.inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer