import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCheckCircle, FaLightbulb, FaHandshake, FaChartLine, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };
  
  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        delay: 0.2 
      }
    }
  };
  
  const pulseAnimation = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black-900 mb-6">About Optimity</h1>
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

      {/* Our Journey Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-24 bg-white"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-primary-blue rounded-full text-sm font-semibold mb-4">OUR JOURNEY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003092] mb-6">16+ Years of Excellence</h2>
            <div className="h-1 w-24 bg-primary-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to becoming a global IT trading leader, our journey has been defined by innovation and excellence.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"
            ></motion.div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {[
                {
                  year: "2007",
                  title: "Company Founded",
                  description: "Optimity was established with a vision to revolutionize IT hardware trading."
                },
                {
                  year: "2012",
                  title: "Global Expansion",
                  description: "Expanded operations to international markets, establishing key partnerships."
                },
                {
                  year: "2016",
                  title: "Technology Innovation",
                  description: "Introduced advanced supply chain management systems for efficient operations."
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description: "Embraced digital solutions to enhance customer experience and operational efficiency."
                },
                {
                  year: "2025",
                  title: "Future Vision",
                  description: "Continuing to lead the industry with innovative IT trading solutions."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={slideIn}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary-blue hover:shadow-xl transition-shadow duration-300"
                    >
                      <span className="text-primary-blue font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white"
                  >
                    {index + 1}
                  </motion.div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Expertise Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-24 bg-gray-50"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-primary-green rounded-full text-sm font-semibold mb-4">OUR EXPERTISE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-6">What Sets Us Apart</h2>
            <div className="h-1 w-24 bg-primary-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With 16+ years of industry experience, we've developed specialized knowledge in various aspects of IT trading.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-blue group hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-primary-blue text-2xl mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                <FaGlobe />
              </div>
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
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-green group hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-primary-green text-2xl mb-6 group-hover:bg-primary-green group-hover:text-white transition-colors duration-300">
                <FaHandshake />
              </div>
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
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-yellow group hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center text-primary-yellow text-2xl mb-6 group-hover:bg-primary-yellow group-hover:text-white transition-colors duration-300">
                <FaChartLine />
              </div>
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
        variants={staggerContainer}
        className="py-24 bg-white"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={fadeIn}
              whileHover={pulseAnimation.animate}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary-yellow"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Our Mission" 
                className="rounded-xl shadow-2xl w-full h-auto z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary-yellow"></div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="space-y-6">
              <span className="inline-block px-4 py-1 bg-yellow-100 text-primary-yellow rounded-full text-sm font-semibold">OUR MISSION</span>
              <h2 className="text-4xl font-bold text-primary-yellow">Empowering Business Through Technology</h2>
              <div className="h-1 w-24 bg-primary-yellow mb-6"></div>
              <p className="text-lg text-gray-700">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We strive to be the most trusted partner for IT 
                hardware procurement, offering unparalleled service, competitive pricing, and 
                reliable delivery.
              </p>
              <div className="space-y-6 mt-8">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-primary-blue rounded-full p-3 text-white mr-4 shadow-lg">
                    <FaLightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Excellence</h3>
                    <p className="text-gray-600">Delivering the highest quality products and services</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-primary-green rounded-full p-3 text-white mr-4 shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Reliability</h3>
                    <p className="text-gray-600">Being a dependable partner you can count on</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-primary-yellow rounded-full p-3 text-white mr-4 shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Value</h3>
                    <p className="text-gray-600">Providing competitive pricing without compromising quality</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-24 bg-gradient-to-r to-[#003092] from-blue-700 text-white"
      >
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact in Numbers</h2>
            <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Over the years, we've achieved significant milestones that showcase our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "16+", label: "Years of Experience" },
              { number: "500+", label: "Global Clients" },
              { number: "50+", label: "Countries Served" },
              { number: "10,000+", label: "Products Delivered" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center border border-white/20"
              >
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.5 + (index * 0.2),
                    type: "spring"
                  }}
                  className="text-4xl md:text-5xl font-bold mb-2 text-white"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-xl text-gray-200">{stat.label}</p>
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
        className="py-24 bg-gradient-to-r to-[#003092] from-blue-700 text-white"
      >
        <div className="container-custom text-center">
          <motion.div 
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn} 
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to partner with Optimity?
            </motion.h2>
            
            <motion.p 
              variants={fadeIn} 
              className="text-xl mb-12 max-w-3xl mx-auto"
            >
              Let's discuss how our IT trading expertise can benefit your business and take your technology infrastructure to the next level.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-block px-10 py-5 bg-white text-primary-blue font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
      
      </motion.section>
    </div>
  );
};

export default About;