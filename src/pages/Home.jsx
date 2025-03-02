import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      title: "Global Sourcing & Trusted Partnerships",
      description: "We collaborate with top-tier manufacturers and distributors worldwide.",
      icon: "🌐"
    },
    {
      title: "Competitive Pricing & Bulk Trade Expertise",
      description: "Ensuring cost-effective solutions without compromising quality.",
      icon: "💰"
    },
    {
      title: "Efficient Supply Chain & Logistics",
      description: "Timely and secure delivery of IT products.",
      icon: "🚚"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen mt-[100px] mb-[140px]">
        <div className="relative w-auto h-[700px] shadow-2xl bg-white/30 rounded-3xl mx-[100px] pt-[100px] max-md:mx-[20px] max-md:h-auto max-md:pt-[50px]">
          <div className="absolute w-[98%] h-[96%] bg-white shadow-2xl rounded-3xl left-[13px] top-[13px] flex gap-[50px] max-md:flex-col max-md:h-auto max-md:static max-md:w-auto max-md:p-4">
            <div 
              className="w-full h-[97%] rounded-3xl shadow-lg mt-[10px] ml-[10px] bg-cover bg-center flex items-center justify-center max-md:h-[300px] max-md:m-0 max-md:mb-4"
              style={{ backgroundImage: "url('https://dl.dropboxusercontent.com/scl/fi/btuqnop2og68m2qr946go/artistic-blurry-colorful-wallpaper-background.jpg?rlkey=s2ueauvas02n5upfkvr2d6hg2&e=1&st=ojfe90jq&dl=0')"}}
            >
              <img className="w-[400px] max-md:w-[250px]" src="https://optimityinternationallc.netlify.app/Logo.png" alt="Logo" />
            </div>
            <div className="w-full mt-[150px] max-md:mt-0 max-md:p-4">
              <h1 className="text-4xl font-bold text-gray-900 font-heading">
                A New Way to <span className="text-blue-500 font-bold"><br className="md:hidden" />Excel</span> in IT<br /> Trading
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Providing top-tier IT hardware solutions for businesses globally. Trusted by enterprises for over 16 years.
              </p>
              <ul className="mt-4 list-none p-0">
                {[
                  "Extensive Product Range",
                  "Trusted Global Brands",
                  "16+ Years Industry Experience",
                  "B2B Trading Specialists",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-600 mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gray-50"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              With a strong network of trusted suppliers and partners, we ensure seamless procurement, 
              competitive pricing, and timely delivery of IT equipment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="section-title">Why Choose Optimity</h2>
            <p className="section-subtitle mx-auto">
              At Optimity, we are committed to delivering excellence, reliability, and value to our clients, 
              helping them stay ahead in the fast-paced world of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-green text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Extensive Product Range</h3>
                    <p className="text-gray-600">
                      Access to a wide variety of IT hardware, software, and networking solutions from globally recognized brands.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-green text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">16+ Years of Experience</h3>
                    <p className="text-gray-600">
                      Leveraging our industry expertise to provide the best solutions tailored to your business needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-green text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">B2B Trading Specialists</h3>
                    <p className="text-gray-600">
                      Dedicated to serving businesses with customized technology solutions and bulk trading options.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="IT Equipment" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-primary-blue text-white"
      >
        <div className="container-custom text-center">
          <motion.h2 
            variants={fadeIn} 
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Let's build a smarter future together!
          </motion.h2>
          
          <motion.p 
            variants={fadeIn} 
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Ready to transform your IT infrastructure with high-quality hardware and software solutions?
          </motion.p>
          
          <motion.div variants={fadeIn}>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-primary-blue font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;