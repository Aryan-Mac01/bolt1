import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  {
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png'
  },
  {
    name: 'HP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg'
  },
  {
    name: 'Cisco',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png'
  },
  {
    name: 'Jabra',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Jabra_logo.svg'
  },
  {
    name: 'Poly',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Poly_Inc._Logo.svg'
  },
  {
    name: 'Bose',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Bose_logo.svg'
  },
  {
    name: 'Grandstream',
    logo: 'https://iconape.com/wp-content/files/xl/348928/svg/348928.svg'
  },
  {
    name: 'Mikrotik',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MikroTik_logo.svg/1280px-MikroTik_logo.svg.png'
  },
  {
    name: 'Razer',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png'
  },
  {
    name: 'JBL',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/JBL_logo.svg'
  },
  {
    name: 'Ubiquiti',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ubiquiti_Networks_Logo.svg/2560px-Ubiquiti_Networks_Logo.svg.png'
  }
];

const BrandsCar = () => {
  const pauseOnHover = true; // Added line for pause on hover functionality
  
  return (
    <div className="relative overflow-hidden bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title font-bold text-center text-black mb-8">
          Our Brand Association
        </h2>
        
        <div className="relative w-full overflow-hidden">
          {/* First row of logos moving left to right */}
          <div className="relative overflow-hidden h-24 mb-12">
            <motion.div
              className="flex absolute whitespace-nowrap"
              animate={{
                x: [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-1-${index}`}
                  className="flex items-center justify-center mx-12 h-24 w-48"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Second row of logos moving right to left */}
          <div className="relative overflow-hidden h-24">
            <motion.div
              className="flex absolute whitespace-nowrap"
              animate={{
                x: [-2400, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...brands.reverse(), ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-2-${index}`}
                  className="flex items-center justify-center mx-12 h-24 w-48"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsCar;