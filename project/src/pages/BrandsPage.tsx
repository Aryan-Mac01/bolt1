import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';

interface Brand {
  name: string;
  logo: string;
  description: string;
}

const BrandsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const brands: Brand[] = [
    {
      name: 'Dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png',
      description: 'A leading provider of enterprise computing solutions including servers, storage, and networking products.'
    },
    {
      name: 'HPE',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hewlett_Packard_Enterprise_logo.svg/2560px-Hewlett_Packard_Enterprise_logo.svg.png',
      description: 'Hewlett Packard Enterprise delivers high-performance solutions for cloud environments and data centers.'
    },
    {
      name: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
      description: 'Global leader in networking equipment, offering a wide range of products for enterprise and service provider networks.'
    },
    {
      name: 'Jabra',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Jabra_logo.svg/2560px-Jabra_logo.svg.png',
      description: 'Specializes in audio equipment, headsets, and video conferencing solutions for businesses and consumers.'
    },
    {
      name: 'Poly',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Poly_Inc_logo.svg/2560px-Poly_Inc_logo.svg.png',
      description: 'Creates premium audio and video products for effective collaboration in the modern workplace.'
    },
    {
      name: 'Bose',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bose_logo.svg/2560px-Bose_logo.svg.png',
      description: 'Known for high-quality audio equipment including speakers, headphones, and professional sound systems.'
    },
    {
      name: 'Grandstream',
      logo: 'https://www.grandstream.com/hubfs/grandstream-logo.png',
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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/JBL_logo.svg/2560px-JBL_logo.svg.png',
      description: 'Provides premium speakers, headphones, and audio solutions for consumers and professional applications.'
    },
    {
      name: 'Ubiquiti',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ubiquiti_Networks_logo.svg/2560px-Ubiquiti_Networks_logo.svg.png',
      description: 'Specializes in wireless data communication products for enterprise and service provider markets.'
    }
  ];

  useEffect(() => {
    let interval: number | undefined;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % brands.length);
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, brands.length]);

  const handleDotClick = (index: number) => {
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
              <h2 className="section-title">Premium Technology Brands</h2>
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
                        <h3 className="text-2xl font-semibold text-optimity-blue mb-4 text-center">{brand.name}</h3>
                        <p className="text-gray-700 text-center">{brand.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrevClick}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-optimity-blue rounded-full p-3 shadow-md z-20 transition-all"
                  aria-label="Previous brand"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNextClick}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-optimity-blue rounded-full p-3 shadow-md z-20 transition-all"
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
                      activeSlide === index ? 'bg-optimity-blue scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="section-title">Our Complete Brand Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our extensive range of trusted technology partners.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <AnimatedSection 
                  key={brand.name}
                  delay={index * 0.1}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-20 flex items-center justify-center mb-4">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-gray-800">{brand.name}</h3>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="md:w-1/2">
                <h2 className="section-title">Why We Partner with Leading Brands</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Optimity, we carefully select our brand partners to ensure we provide our clients with the highest quality IT products and solutions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-optimity-green mr-2 text-xl">•</span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Quality Assurance:</strong> We partner only with brands known for their reliability and performance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-optimity-green mr-2 text-xl">•</span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Comprehensive Solutions:</strong> Our diverse brand portfolio allows us to offer complete end-to-end IT solutions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-optimity-green mr-2 text-xl">•</span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Competitive Pricing:</strong> Our strong relationships with these brands enable us to offer competitive pricing.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-optimity-green mr-2 text-xl">•</span>
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
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-optimity-blue rounded-lg -z-10"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-optimity-blue to-blue-700 text-white">
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
                className="btn-primary bg-white text-optimity-blue hover:bg-gray-100"
              >
                Request a Quote
              </a>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default BrandsPage;