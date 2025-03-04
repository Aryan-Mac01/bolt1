import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';
import { brands as dataBrands, products as dataProducts } from '../data';

const Brands = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // For the brand portfolio carousel
  const [portfolioPage, setPortfolioPage] = useState(0);
  const portfolioRef = useRef(null);
  
  // For individual brand carousels
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const brands = [
    {
      name: 'Dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png',
      description: 'A leading provider of enterprise computing solutions including servers, storage, and networking products.'
    },
    {
      name: 'HPE',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg',
      description: 'Hewlett Packard Enterprise delivers high-performance solutions for cloud environments and data centers.'
    },
    {
      name: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
      description: 'Global leader in networking equipment, offering a wide range of products for enterprise and service provider networks.'
    },
    {
      name: 'Jabra',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Jabra_logo.svg',
      description: 'Specializes in audio equipment, headsets, and video conferencing solutions for businesses and consumers.'
    },
    {
      name: 'Poly',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Poly_Inc._Logo.svg',
      description: 'Creates premium audio and video products for effective collaboration in the modern workplace.'
    },
    {
      name: 'Bose',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Bose_logo.svg',
      description: 'Known for high-quality audio equipment including speakers, headphones, and professional sound systems.'
    },
    {
      name: 'Grandstream',
      logo: 'https://iconape.com/wp-content/files/xl/348928/svg/348928.svg',
      description: 'Manufactures IP communication solutions including IP phones, IP PBXs, and video conferencing systems.'
    },
    {
      name: 'Mikrotik',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MikroTik_logo.svg/1280px-MikroTik_logo.svg.png',
      description: 'Develops networking equipment for ISPs and enterprise networks, known for their RouterOS software.'
    },
    {
      name: 'Razer',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png',
      description: 'Designs and builds gaming hardware, peripherals, and software for gamers and esports professionals.'
    },
    {
      name: 'JBL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/JBL_logo.svg',
      description: 'Provides premium speakers, headphones, and audio solutions for consumers and professional applications.'
    },
    {
      name: 'Ubiquiti',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ubiquiti_Networks_logo.svg/2560px-Ubiquiti_Networks_logo.svg.png',
      description: 'Specializes in wireless data communication products for enterprise and service provider markets.'
    }
  ];

  // Map brand names to IDs from data.js
  const brandNameToId = {
    'Dell': 'dell',
    'HPE': 'hpe',
    'Cisco': 'cisco',
    'Jabra': 'jabra',
    'Poly': 'poly',
    'Bose': 'bose',
    'Grandstream': 'grandstream',
    'Mikrotik': 'mikrotik',
    'Razer': 'razer',
    'JBL': 'jbl',
    'Ubiquiti': 'ubiquiti'
  };

  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % brands.length);
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, brands.length]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
    setAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handlePrevClick = () => {
    setActiveSlide((prev) => (prev - 1 + brands.length) % brands.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleNextClick = () => {
    setActiveSlide((prev) => (prev + 1) % brands.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // For the portfolio carousel
  const brandsPerPage = 8;
  const totalPortfolioPages = Math.ceil(brands.length / brandsPerPage);

  const handlePortfolioPrev = () => {
    setPortfolioPage((prev) => Math.max(0, prev - 1));
  };

  const handlePortfolioNext = () => {
    setPortfolioPage((prev) => Math.min(totalPortfolioPages - 1, prev + 1));
  };

  const visibleBrands = brands.slice(
    portfolioPage * brandsPerPage,
    (portfolioPage + 1) * brandsPerPage
  );

  // For individual brand carousels
  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setCurrentProductIndex(0);
  };

  const handleCloseDialog = () => {
    setSelectedBrand(null);
  };

  const handleProductPrev = () => {
    if (!selectedBrand) return;
    
    const brandId = brandNameToId[selectedBrand.name];
    const brandProducts = dataProducts.filter(product => product.brandId === brandId);
    
    setCurrentProductIndex((prev) => 
      (prev - 1 + brandProducts.length) % brandProducts.length
    );
  };

  const handleProductNext = () => {
    if (!selectedBrand) return;
    
    const brandId = brandNameToId[selectedBrand.name];
    const brandProducts = dataProducts.filter(product => product.brandId === brandId);
    
    setCurrentProductIndex((prev) => 
      (prev + 1) % brandProducts.length
    );
  };

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
                  Our Trusted Brand Partners
                </h1>
                <p className="text-xl opacity-90">
                  Optimity partners with leading global technology brands to deliver high-quality IT solutions to our clients.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brands Carousel */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Premium Technology Brands</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We source products from the world's most trusted technology manufacturers.
              </p>
            </AnimatedSection>

            <div className="relative max-w-5xl mx-auto">
              {/* Carousel */}
              <div className="overflow-hidden rounded-lg shadow-lg bg-gray-50">
                <div className="relative h-[500px]">
                  {brands.map((brand, index) => (
                    <motion.div
                      key={brand.name}
                      className="absolute inset-0 flex flex-col items-center justify-center p-8"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ 
                        opacity: activeSlide === index ? 1 : 0,
                        x: activeSlide === index ? 0 : activeSlide > index ? -100 : 100,
                        zIndex: activeSlide === index ? 10 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md mx-auto">
                        <div className="h-32 flex items-center justify-center mb-6">
                          <img 
                            src={brand.logo} 
                            alt={`${brand.name} logo`} 
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">{brand.name}</h3>
                        <p className="text-gray-700 text-center">{brand.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrevClick}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 rounded-full p-3 shadow-md z-20 transition-all"
                  aria-label="Previous brand"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNextClick}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 rounded-full p-3 shadow-md z-20 transition-all"
                  aria-label="Next brand"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {brands.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeSlide === index ? 'bg-blue-700 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Portfolio Carousel */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Complete Brand Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our extensive range of trusted technology partners.
              </p>
            </AnimatedSection>

            <div className="relative max-w-6xl mx-auto" ref={portfolioRef}>
              <div className="flex justify-between items-center mb-6">
                <button 
                  onClick={handlePortfolioPrev}
                  disabled={portfolioPage === 0}
                  className={`p-2 rounded-full ${portfolioPage === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-sm text-gray-500">
                  Page {portfolioPage + 1} of {totalPortfolioPages}
                </div>
                <button 
                  onClick={handlePortfolioNext}
                  disabled={portfolioPage === totalPortfolioPages - 1}
                  className={`p-2 rounded-full ${portfolioPage === totalPortfolioPages - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <motion.div 
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
                  key={portfolioPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {visibleBrands.map((brand, index) => (
                    <motion.div
                      key={brand.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-105 cursor-pointer"
                      onClick={() => handleBrandClick(brand)}
                    >
                      <div className="h-20 flex items-center justify-center mb-4">
                        <img 
                          src={brand.logo} 
                          alt={`${brand.name} logo`} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-center text-gray-800">{brand.name}</h3>
                      <p className="text-sm text-gray-600 text-center mt-2 line-clamp-2">{brand.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Dots Navigation for Portfolio */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPortfolioPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPortfolioPage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      portfolioPage === index ? 'bg-blue-700 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to portfolio page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Why We Partner with Leading Brands</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Optimity, we carefully select our brand partners to ensure we provide our clients with the highest quality IT products and solutions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">•</span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Quality Assurance:</strong> We partner only with brands known for their reliability and performance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">•</span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Comprehensive Solutions:</strong> Our diverse brand portfolio allows us to offer complete end-to-end IT solutions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">•</span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Competitive Pricing:</strong> Our strong relationships with these brands enable us to offer competitive pricing.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">•</span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Technical Expertise:</strong> Our team is certified and trained on the products we supply.
                    </span>
                  </li>
                </ul>
              </AnimatedSection>
              
              <AnimatedSection className="md:w-1/2" delay={0.2}>
                <div className="relative">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Technology partnership concept" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Products from These Brands?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us today to discuss your IT procurement needs and get competitive quotes.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Request a Quote
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Brand Products Dialog */}
        <AnimatePresence>
          {selectedBrand && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={handleCloseDialog}
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
                    <img src={selectedBrand.logo} alt={selectedBrand.name} className="h-10 object-contain" />
                    <h2 className="text-2xl font-bold text-gray-900">{selectedBrand.name} Products</h2>
                  </div>
                  <button 
                    onClick={handleCloseDialog}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                  {(() => {
                    const brandId = brandNameToId[selectedBrand.name];
                    const brandProducts = dataProducts.filter(product => product.brandId === brandId);
                    
                    if (brandProducts.length === 0) {
                      return (
                        <div className="text-center py-12">
                          <p className="text-gray-500">No products available for this brand.</p>
                        </div>
                      );
                    }

                    return (
                      <div className="relative">
                        <div className="flex justify-between items-center mb-6">
                          <button 
                            onClick={handleProductPrev}
                            className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <div className="text-sm text-gray-500">
                            Product {currentProductIndex + 1} of {brandProducts.length}
                          </div>
                          <button 
                            onClick={handleProductNext}
                            className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </div>
                        
                        <div className="relative overflow-hidden">
                          <motion.div
                            className="flex flex-col md:flex-row gap-8"
                            key={currentProductIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="md:w-1/2">
                              <div className="bg-gray-50 rounded-lg overflow-hidden h-80">
                                <img 
                                  src={brandProducts[currentProductIndex].image} 
                                  alt={brandProducts[currentProductIndex].name} 
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </div>
                            <div className="md:w-1/2">
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {brandProducts[currentProductIndex].name}
                              </h3>
                              <p className="text-lg text-blue-700 font-semibold mb-4">
                                {brandProducts[currentProductIndex].price}
                              </p>
                              <p className="text-gray-700 mb-6">
                                {brandProducts[currentProductIndex].description}
                              </p>
                              <div className="flex space-x-4">
                                <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                                  Request Quote
                                </button>
                                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="mt-8">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">More Products</h4>
                          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                            {brandProducts.map((product, index) => (
                              <div 
                                key={product.id}
                                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                                  index === currentProductIndex ? 'border-blue-700 shadow-md' : 'border-transparent hover:border-gray-300'
                                }`}
                                onClick={() => setCurrentProductIndex(index)}
                              >
                                <img 
                                  src={product.image} 
                                  alt={product.name} 
                                  className="w-full h-16 object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Brands;