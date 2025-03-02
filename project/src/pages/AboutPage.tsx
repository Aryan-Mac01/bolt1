import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, TrendingUp, Globe, ShieldCheck, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About Optimity
                </h1>
                <p className="text-xl opacity-90">
                  With over 16 years of experience, we've established ourselves as a leading IT trading company specializing in the sourcing, distribution, and supply of technology products.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="md:w-1/2">
                <h2 className="section-title">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2009, Optimity began with a simple mission: to bridge the gap between global technology manufacturers and businesses seeking reliable IT solutions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Over the years, we've grown from a small trading company to a trusted partner for businesses across multiple industries, providing them with high-quality IT hardware, software, and networking solutions from globally recognized brands.
                </p>
                <p className="text-lg text-gray-700">
                  Today, with our headquarters in Dubai and a network of partners worldwide, we continue to expand our reach while maintaining our commitment to excellence, reliability, and customer satisfaction.
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="md:w-1/2" delay={0.2}>
                <div className="relative">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Modern office with technology" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-optimity-yellow rounded-lg -z-10"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="section-title">Our Mission & Vision</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-optimity-blue mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To provide businesses with reliable, high-quality IT products and solutions through efficient sourcing, competitive pricing, and exceptional service, enabling them to thrive in an increasingly digital world.
                </p>
                <div className="flex items-center">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <TrendingUp className="w-6 h-6 text-optimity-blue" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Driving business growth through technology
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection className="bg-white p-8 rounded-lg shadow-sm" delay={0.2}>
                <h3 className="text-2xl font-semibold text-optimity-green mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  To be the most trusted global partner for IT trading, known for our integrity, reliability, and commitment to delivering value through innovative technology solutions.
                </p>
                <div className="flex items-center">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-optimity-green" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Building a connected world through trusted partnerships
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="section-title">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at Optimity
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-12 h-12 text-optimity-blue" />,
                  title: "Integrity",
                  description: "We conduct business with honesty, transparency, and ethical standards, building trust with our partners and clients.",
                  delay: 0.1
                },
                {
                  icon: <Award className="w-12 h-12 text-optimity-green" />,
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our operations, from product quality to customer service.",
                  delay: 0.2
                },
                {
                  icon: <Users className="w-12 h-12 text-optimity-yellow" />,
                  title: "Partnership",
                  description: "We believe in building long-term relationships with our clients, suppliers, and stakeholders based on mutual respect and benefit.",
                  delay: 0.3
                }
              ].map((value, index) => (
                <AnimatedSection 
                  key={index}
                  delay={value.delay}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Expertise */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Experience & Expertise
              </h2>
              <p className="text-xl opacity-80 max-w-3xl mx-auto">
                With over 16 years in the industry, we've developed specialized knowledge and capabilities
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection className="bg-gray-800 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-optimity-yellow" />
                  </div>
                  <h3 className="text-2xl font-semibold">16+ Years of Experience</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Our extensive experience in the IT trading industry has equipped us with deep market knowledge and strong industry relationships, allowing us to navigate complex procurement challenges effectively.
                </p>
                <ul className="space-y-3">
                  {[
                    "Established industry presence since 2009",
                    "Weathered market changes and technological shifts",
                    "Built lasting relationships with suppliers and clients",
                    "Developed efficient operational processes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-optimity-yellow mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              
              <AnimatedSection className="bg-gray-800 p-8 rounded-lg" delay={0.2}>
                <div className="flex items-center mb-6">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <Award className="w-6 h-6 text-optimity-green" />
                  </div>
                  <h3 className="text-2xl font-semibold">Specialized Expertise</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  We specialize in bulk trading and customized technology solutions, with expertise across various IT hardware categories and software solutions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Enterprise-grade servers and storage solutions",
                    "Networking equipment and infrastructure",
                    "End-user computing devices and peripherals",
                    "Software licensing and distribution",
                    "Custom configuration and bundling services"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-optimity-green mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-optimity-blue to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner with Optimity?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let us help you find the perfect IT solutions for your business needs.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary bg-white text-optimity-blue hover:bg-gray-100"
              >
                Contact Our Team
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;