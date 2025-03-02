import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, TrendingUp, Truck, ShieldCheck, Server, Cpu, Wifi, Monitor } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';

const HomePage = () => {
  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Excellence in IT Trading & Distribution
                  </h1>
                  <p className="text-xl opacity-90 mb-8">
                    Optimity delivers high-quality IT hardware, software, and networking solutions from globally recognized brands.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="btn-primary">
                      Request a Quote
                    </Link>
                    <Link to="/about" className="btn bg-white/10 hover:bg-white/20 text-white border border-white/30">
                      Learn About Us
                    </Link>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: <Server className="w-8 h-8" />, label: "Servers" },
                        { icon: <Monitor className="w-8 h-8" />, label: "Computers" },
                        { icon: <Cpu className="w-8 h-8" />, label: "Peripherals" },
                        { icon: <Wifi className="w-8 h-8" />, label: "Networking" }
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                          <div className="bg-white/10 p-4 rounded-full mb-3">
                            {item.icon}
                          </div>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-optimity-yellow/30 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-optimity-green/30 rounded-full blur-2xl"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="section-title">Our Core Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive IT trading solutions to meet diverse business needs.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-12 h-12 text-optimity-blue" />,
                  title: "Global Sourcing",
                  description: "With our extensive network of trusted suppliers and partners worldwide, we ensure access to a wide range of IT products and solutions.",
                  delay: 0.1
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-optimity-green" />,
                  title: "Competitive Pricing",
                  description: "Our bulk trading expertise and strong industry relationships allow us to offer competitive pricing without compromising on quality.",
                  delay: 0.2
                },
                {
                  icon: <Truck className="w-12 h-12 text-optimity-yellow" />,
                  title: "Supply Chain Management",
                  description: "We handle the entire supply chain process, from procurement to delivery, ensuring timely and efficient fulfillment of orders.",
                  delay: 0.3
                }
              ].map((service, index) => (
                <AnimatedSection 
                  key={index}
                  delay={service.delay}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title">Why Businesses Choose Us</h2>
                <p className="text-xl text-gray-600">
                  With 16+ years of industry experience, we've built a reputation for reliability, quality, and exceptional service.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Server className="w-10 h-10 text-optimity-blue" />,
                  title: "Extensive Product Range",
                  description: "From servers to peripherals, we offer a comprehensive range of IT hardware and software solutions.",
                  delay: 0.1
                },
                {
                  icon: <ShieldCheck className="w-10 h-10 text-optimity-green" />,
                  title: "Trusted Global Brands",
                  description: "We partner with leading technology brands to ensure quality and reliability.",
                  delay: 0.2
                },
                {
                  icon: <Globe className="w-10 h-10 text-optimity-yellow" />,
                  title: "Global Reach",
                  description: "Our international network allows us to serve clients across different regions efficiently.",
                  delay: 0.3
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-optimity-blue" />,
                  title: "B2B Trading Specialists",
                  description: "We understand the unique requirements of business clients and tailor our services accordingly.",
                  delay: 0.4
                }
              ].map((item, index) => (
                <AnimatedSection 
                  key={index}
                  delay={item.delay}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-gray-50 p-3 rounded-full inline-block mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your IT Procurement?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Partner with Optimity for seamless sourcing, competitive pricing, and efficient delivery of IT equipment and solutions.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-white text-yellow-600 hover:bg-gray-100 hover:text-yellow-700 shadow-lg"
              >
                Contact Us Today
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomePage;