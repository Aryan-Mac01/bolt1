import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const brands = [
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png",
      description: "A leading provider of enterprise computing solutions including servers, storage, and networking products."
    },
    {
      name: "HPE",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hewlett_Packard_Enterprise_logo.svg/1200px-Hewlett_Packard_Enterprise_logo.svg.png",
      description: "Hewlett Packard Enterprise offers advanced technology solutions for enterprise IT infrastructure."
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
      description: "Global leader in networking equipment, telecommunications hardware, and high-technology services."
    },
    {
      name: "Jabra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Jabra_logo.svg/2560px-Jabra_logo.svg.png",
      description: "Specializes in audio equipment, particularly headsets and speakerphones for business and consumers."
    },
    {
      name: "Poly",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Poly_Inc_logo.svg/2560px-Poly_Inc_logo.svg.png",
      description: "Creates premium audio and video products for effective collaboration in the modern workplace."
    },
    {
      name: "Bose",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bose_logo.svg/2560px-Bose_logo.svg.png",
      description: "Known for high-quality audio equipment including speakers, headphones, and professional sound systems."
    },
    {
      name: "Grandstream",
      logo: "https://www.grandstream.com/hubfs/grandstream-logo.png",
      description: "Manufactures IP communication solutions including IP phones, IP PBXs, and video conferencing systems."
    },
    {
      name: "Mikrotik",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MikroTik_logo.svg/1280px-MikroTik_logo.svg.png",
      description: "Develops networking equipment for ISPs, businesses, and individuals with a focus on routing and wireless products."
    },
    {
      name: "Razer",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png",
      description: "Designs and builds gaming hardware, peripherals, and software for gamers and gaming enthusiasts."
    },
    {
      name: "JBL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/JBL_logo.svg/2560px-JBL_logo.svg.png",
      description: "Produces audio equipment including loudspeakers and headphones for consumer and professional markets."
    },
    {
      name: "Ubiquiti",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ubiquiti_Networks_Logo.svg/2560px-Ubiquiti_Networks_Logo.svg.png",
      description: "Specializes in wireless data communication products for enterprise and consumer markets."
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Partner Brands</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with globally recognized technology brands to provide you with the highest quality IT hardware solutions.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Brand Carousel */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn}>
            <Slider {...sliderSettings} className="brand-carousel mb-16">
              {brands.map((brand, index) => (
                <div key={index} className="px-4">
                  <div className="h-32 flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </motion.section>

      {/* Brand Grid */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-gray-50"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="section-title">Featured Brands</h2>
            <p className="section-subtitle mx-auto">
              Explore our comprehensive range of trusted technology partners.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-24 flex items-center justify-center mb-6">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{brand.name}</h3>
                <p className="text-gray-600 text-center">{brand.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-primary-blue text-white"
      >
        <div className="container-custom text-center">
          <motion.h2 
            variants={fadeIn} 
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Looking for a specific brand or product?
          </motion.h2>
          
          <motion.p 
            variants={fadeIn} 
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Our extensive network allows us to source products from many more brands beyond those listed here.
          </motion.p>
          
          <motion.div variants={fadeIn}>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-primary-blue font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Our Sourcing Team
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Brands;