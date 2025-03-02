import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Optimity</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading IT trading company with over 16 years of experience in the industry.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <p className="text-lg text-gray-700 mb-6">
              Optimity is a leading IT trading company specializing in the sourcing, distribution, 
              and supply of technology and consumer electronic products. We provide businesses 
              with high-quality IT hardware, software, and networking solutions from globally 
              recognized brands.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              With a strong network of trusted suppliers and partners, we ensure seamless 
              procurement, competitive pricing, and timely delivery of IT equipment, including 
              servers, computers, peripherals, networking devices, and enterprise solutions. Our 
              expertise extends to bulk trading, and customized technology solutions to meet 
              diverse business needs.
            </p>
            
            <p className="text-lg text-gray-700">
              At Optimity, we are committed to delivering excellence, reliability, and value to our 
              clients, helping them stay ahead in the fast-paced world of technology.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Expertise Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle mx-auto">
              With 16+ years of industry experience, we've developed specialized knowledge in various aspects of IT trading.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-blue"
            >
              <h3 className="text-xl font-bold mb-4">Global Sourcing & Trusted Partnerships</h3>
              <p className="text-gray-600 mb-4">
                We collaborate with top-tier manufacturers and distributors worldwide.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-green mt-1 mr-2" />
                  <span>Direct relationships with manufacturers</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-green mt-1 mr-2" />
                  <span>Global sourcing capabilities</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-green mt-1 mr-2" />
                  <span>Authentic product guarantee</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-green"
            >
              <h3 className="text-xl font-bold mb-4">Competitive Pricing & Bulk Trade Expertise</h3>
              <p className="text-gray-600 mb-4">
                Ensuring cost-effective solutions without compromising quality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-green mt-1 mr-2" />
                  <span>Volume-based discounts</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-green mt-1 mr-2" />
                  <span>Flexible payment options</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-green mt-1 mr-2" />
                  <span>Transparent pricing structure</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-yellow"
            >
              <h3 className="text-xl font-bold mb-4">Efficient Supply Chain & Logistics</h3>
              <p className="text-gray-600 mb-4">
                Timely and secure delivery of IT products.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-green mt-1 mr-2" />
                  <span>Streamlined logistics processes</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-green mt-1 mr-2" />
                  <span>Real-time shipment tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-green mt-1 mr-2" />
                  <span>International shipping expertise</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gray-50"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Our Mission" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We strive to be the most trusted partner for IT 
                hardware procurement, offering unparalleled service, competitive pricing, and 
                reliable delivery.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-blue rounded-full p-2 text-white mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Excellence</h3>
                    <p className="text-gray-600">Delivering the highest quality products and services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-green rounded-full p-2 text-white mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Reliability</h3>
                    <p className="text-gray-600">Being a dependable partner you can count on</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-yellow rounded-full p-2 text-white mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Value</h3>
                    <p className="text-gray-600">Providing competitive pricing without compromising quality</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
            Ready to partner with Optimity?
          </motion.h2>
          
          <motion.p 
            variants={fadeIn} 
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Let's discuss how our IT trading expertise can benefit your business.
          </motion.p>
          
          <motion.div variants={fadeIn}>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-primary-blue font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;