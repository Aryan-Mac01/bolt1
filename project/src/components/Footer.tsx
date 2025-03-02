import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-optimity-green">O</span>
              <span className="text-white">ptimity</span>
            </h3>
            <p className="text-gray-400 mb-4">
              A leading IT trading company with 16+ years of experience in sourcing, distribution, and supply of technology products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-optimity-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-optimity-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-optimity-yellow transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-optimity-yellow transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-400 hover:text-white transition-colors">Our Brands</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Global Sourcing</li>
              <li className="text-gray-400">Competitive Pricing</li>
              <li className="text-gray-400">Supply Chain Management</li>
              <li className="text-gray-400">Bulk Trading</li>
              <li className="text-gray-400">Customized Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-optimity-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Business Avenue, Tech District, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-optimity-yellow mr-2 flex-shrink-0" />
                <span className="text-gray-400">+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-optimity-yellow mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@optimity.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Optimity International LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;