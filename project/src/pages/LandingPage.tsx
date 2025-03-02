import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Globe, TrendingUp } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const LandingPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 z-0"></div>
          
          {/* Animated Background Elements */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-white opacity-10"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  A New Way to Excel in IT Trading
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl text-white opacity-90 mb-8">
                  With 16+ years of experience, Optimity delivers excellence in IT hardware, software, and networking solutions from globally recognized brands.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact" className="btn bg-white text-yellow-600 hover:bg-gray-100">
                  Get Early Access
                </Link>
                <Link to="/home" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Optimity?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine global sourcing capabilities with competitive pricing and efficient supply chain management.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-12 h-12 text-optimity-blue" />,
                  title: "Global Sourcing",
                  description: "Access to a vast network of trusted suppliers and partners worldwide.",
                  delay: 0
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-optimity-green" />,
                  title: "Competitive Pricing",
                  description: "Leverage our bulk trading expertise to get the best value for your investment.",
                  delay: 0.2
                },
                {
                  icon: <Server className="w-12 h-12 text-optimity-yellow" />,
                  title: "Efficient Supply Chain",
                  description: "Seamless procurement and timely delivery of IT equipment and solutions.",
                  delay: 0.4
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: feature.delay }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link to="/home" className="inline-flex items-center text-optimity-blue font-medium hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link to="/home" className="btn-primary inline-flex items-center">
                Explore Our Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default LandingPage;