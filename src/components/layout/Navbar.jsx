import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Logo from '../ui/Logo'

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return
    
    const handleClickOutside = (e) => {
      if (!e.target.closest('nav')) {
        setMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [mobileMenuOpen])
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="z-10">
          <Logo scrolled={scrolled} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive 
                ? 'text-primary-500 font-semibold' 
                : `${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors`
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) =>
              isActive 
                ? 'text-primary-500 font-semibold' 
                : `${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) =>
              isActive 
                ? 'text-primary-500 font-semibold' 
                : `${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/team" 
            className={({ isActive }) =>
              isActive 
                ? 'text-primary-500 font-semibold' 
                : `${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors`
            }
          >
            Team
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) =>
              isActive 
                ? 'text-primary-500 font-semibold' 
                : `${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              isActive 
                ? 'text-primary-500 font-semibold' 
                : `${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors`
            }
          >
            Contact
          </NavLink>
        </nav>
        
        <div className="hidden md:block">
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          type="button" 
          className="z-10 p-2 md:hidden" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <FiX 
              className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} 
            />
          ) : (
            <FiMenu 
              className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} 
            />
          )}
        </button>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-0 flex bg-white"
          >
            <div className="flex flex-col items-center justify-center w-full h-full space-y-8">
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  `text-2xl font-semibold ${isActive ? 'text-primary-500' : 'text-gray-800 hover:text-primary-500'}`
                }
                onClick={() => setMobileMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) =>
                  `text-2xl font-semibold ${isActive ? 'text-primary-500' : 'text-gray-800 hover:text-primary-500'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) =>
                  `text-2xl font-semibold ${isActive ? 'text-primary-500' : 'text-gray-800 hover:text-primary-500'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/team" 
                className={({ isActive }) =>
                  `text-2xl font-semibold ${isActive ? 'text-primary-500' : 'text-gray-800 hover:text-primary-500'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) =>
                  `text-2xl font-semibold ${isActive ? 'text-primary-500' : 'text-gray-800 hover:text-primary-500'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) =>
                  `text-2xl font-semibold ${isActive ? 'text-primary-500' : 'text-gray-800 hover:text-primary-500'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              
              <Link 
                to="/contact" 
                className="mt-4 btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Navbar