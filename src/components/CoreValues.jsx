import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cpu, BarChart, Zap } from 'lucide-react';

const CoreValues = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const valueItems = [
    {
      icon: <Lightbulb size={48} className="text-black" />,
      title: "Source. Supply. Upgrade",
      description: "We source top-quality IT hardware, supply it seamlessly, and help businesses upgrade for better performance."
    },
    {
      icon: <Cpu size={48} className="text-black" />,
      title: "Reliable Hardware. Seamless Performance",
      description: "Get dependable IT hardware that ensures smooth and uninterrupted business operations."
    },
    {
      icon: <BarChart size={48} className="text-black" />,
      title: "Trusted Tech. Smarter Business",
      description: "Leverage high-quality technology to optimize processes and grow your business efficiently."
    },
    {
      icon: <Zap size={48} className="text-black" />,
      title: "Powering IT. Driving Growth",
      description: "Enhance your IT infrastructure with cutting-edge hardware and scale your business with confidence."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="section-title font-bold text-black mb-4">
            Our Core Values <span className="text-black">&</span>
          </h2>
          <h2 className="section-title font-bold text-black">
            Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {valueItems.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Optimity International LLC, we are committed to providing top-quality IT hardware solutions that drive business success. Our approach is built on four key pillars.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoreValues;