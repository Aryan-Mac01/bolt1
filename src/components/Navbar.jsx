import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://optimityinternationallc.netlify.app/Logo.png" 
              alt="Optimity Logo" 
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-blue font-medium" 
                  : "text-gray-700 hover:text-primary-blue transition-colors duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-blue font-medium" 
                  : "text-gray-700 hover:text-primary-blue transition-colors duration-300"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/brands" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-blue font-medium" 
                  : "text-gray-700 hover:text-primary-blue transition-colors duration-300"
              }
            >
              Brands
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-blue font-medium" 
                  : "text-gray-700 hover:text-primary-blue transition-colors duration-300"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-blue font-medium" 
                    : "text-gray-700 hover:text-primary-blue transition-colors duration-300"
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-blue font-medium" 
                    : "text-gray-700 hover:text-primary-blue transition-colors duration-300"
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/brands" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-blue font-medium" 
                    : "text-gray-700 hover:text-primary-blue transition-colors duration-300"
                }
                onClick={() => setIsOpen(false)}
              >
                Brands
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-blue font-medium" 
                    : "text-gray-700 hover:text-primary-blue transition-colors duration-300"
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar