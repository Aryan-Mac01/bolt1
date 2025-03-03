import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const LogoPreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  // Colors for the segments based on your logo
  const colors = [
    '#87CEEB', // light blue
    '#6FB1D9', // medium blue
    '#5A9AD7', // blue
    '#4682B4', // steel blue
    '#1E3F66', // dark blue
    '#C1E1C1', // light green
    '#A1D6A1', // lighter green
    '#7FBF7F', // light green
    '#2E8B57'  // sea green
  ];
  
  useEffect(() => {
    // Reset loading state on route change
    setIsLoading(true);
    
    // Show preloader for a shorter time (1000ms = 1 second)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  // Animation variants for the container
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0, 
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      } 
    }
  };
  
  // Variants for the segments
  const segmentVariants = {
    initial: { 
      scale: 0.8, 
      opacity: 0 
    },
    animate: (i) => ({ 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.2,
        delay: i * 0.03
      }
    }),
    exit: (i) => ({
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.1,
        delay: i * 0.01
      }
    })
  };
  
  // Creates an SVG segment path with spacing
  const createSegmentPath = (index, total) => {
    const angle = 360 / total;
    const gap = 3; // Gap in degrees between segments
    const startAngle = index * angle - 90 + gap / 2; // Start from top with half gap
    const endAngle = startAngle + angle - gap; // End with gap
    
    // Convert angles to radians
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    // Calculate points
    const innerRadius = 30;
    const outerRadius = 70;
    
    const startOuterX = 100 + outerRadius * Math.cos(startRad);
    const startOuterY = 100 + outerRadius * Math.sin(startRad);
    const endOuterX = 100 + outerRadius * Math.cos(endRad);
    const endOuterY = 100 + outerRadius * Math.sin(endRad);
    
    const startInnerX = 100 + innerRadius * Math.cos(endRad);
    const startInnerY = 100 + innerRadius * Math.sin(endRad);
    const endInnerX = 100 + innerRadius * Math.cos(startRad);
    const endInnerY = 100 + innerRadius * Math.sin(startRad);
    
    // Create arc flag
    const largeArcFlag = (angle - gap) > 180 ? 1 : 0;
    
    // Create the path
    return `
      M ${startOuterX} ${startOuterY}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuterX} ${endOuterY}
      L ${startInnerX} ${startInnerY}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${endInnerX} ${endInnerY}
      Z
    `;
  };
  
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="w-40 h-40"
              animate={{ 
                rotate: 360 
              }} 
              transition={{ 
                duration: 1.2,
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              <svg width="160" height="160" viewBox="0 0 200 200">
                {colors.map((color, index) => (
                  <motion.path
                    key={index}
                    d={createSegmentPath(index, colors.length)}
                    fill={color}
                    variants={segmentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={index}
                  />
                ))}
                <circle cx="100" cy="100" r="28" fill="white" />
              </svg>
            </motion.div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoPreloader;