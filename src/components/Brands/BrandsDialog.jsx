import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const BrandsDialog = ({ brand, products, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const carouselRef = useRef(null);

  if (!brand) return null;

  const filteredProducts = products.filter(product => product.brandId === brand.id);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedProducts = filteredProducts.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={brand.logo} alt={brand.name} className="h-10 object-contain" />
              <h2 className="text-2xl font-bold text-gray-900">{brand.name} Products</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="relative" ref={carouselRef}>
              <div className="flex justify-between items-center mb-6">
                <button 
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`p-2 rounded-full ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-sm text-gray-500">
                  Page {currentIndex + 1} of {totalPages}
                </div>
                <button 
                  onClick={handleNext}
                  disabled={currentIndex === totalPages - 1}
                  className={`p-2 rounded-full ${currentIndex === totalPages - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={currentIndex}
              >
                {displayedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BrandsDialog;