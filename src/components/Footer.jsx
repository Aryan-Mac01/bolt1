import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://optimityinternationallc.netlify.app/Logo.png" 
              alt="Optimity Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-4">
              A leading IT trading company specializing in the sourcing, distribution, and supply of technology and consumer electronic products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Global Sourcing</li>
              <li className="text-gray-400">Competitive Pricing</li>
              <li className="text-gray-400">Bulk Trading</li>
              <li className="text-gray-400">Supply Chain Management</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block font-medium text-white">Address:</span>
                Optimity International LLC
              </li>
              <li className="text-gray-400">
                <span className="block font-medium text-white">Phone:</span>
                +1 (123) 456-7890
              </li>
              <li className="text-gray-400">
                <span className="block font-medium text-white">Email:</span>
                info@optimityinternational.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Optimity International LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer