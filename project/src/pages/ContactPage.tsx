import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
    }, 1500);
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
                  Contact Us
                </h1>
                <p className="text-xl opacity-90">
                  Get in touch with our team to discuss your IT procurement needs and how Optimity can help your business.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Phone className="w-8 h-8 text-optimity-blue" />,
                  title: "Call Us",
                  details: [
                    "+971 4 123 4567",
                    "+971 50 987 6543"
                  ],
                  delay: 0.1
                },
                {
                  icon: <Mail className="w-8 h-8 text-optimity-green" />,
                  title: "Email Us",
                  details: [
                    "info@optimity.com",
                    "sales@optimity.com"
                  ],
                  delay: 0.2
                },
                {
                  icon: <MapPin className="w-8 h-8 text-optimity-yellow" />,
                  title: "Visit Us",
                  details: [
                    "123 Business Avenue,",
                    "Tech District, Dubai, UAE"
                  ],
                  delay: 0.3
                }
              ].map((item, index) => (
                <AnimatedSection 
                  key={index}
                  delay={item.delay}
                  className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-700">{detail}</p>
                  ))}
                </AnimatedSection>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-optimity-blue to-blue-800 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-6">Get Early Access</h3>
                    <p className="mb-8 opacity-90">
                      Fill out the form to get early access to our services and receive a personalized quote for your IT procurement needs.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-optimity-yellow mr-3 mt-1" />
                        <p>Access to exclusive pricing</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-optimity-yellow mr-3 mt-1" />
                        <p>Priority procurement services</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-optimity-yellow mr-3 mt-1" />
                        <p>Dedicated account manager</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-optimity-yellow mr-3 mt-1" />
                        <p>Customized solutions for your business</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    {isSubmitted ? (
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="bg-green-100 rounded-full p-3 mb-4">
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                        <p className="text-gray-600 mb-6">
                          Your message has been received. Our team will get back to you shortly.
                        </p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="text-optimity-blue hover:underline"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name*
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-optimity-blue focus:border-optimity-blue"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address*
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-optimity-blue focus:border-optimity-blue"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-optimity-blue focus:border-optimity-blue"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-optimity-blue focus:border-optimity-blue"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message*
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-optimity-blue focus:border-optimity-blue"
                          ></textarea>
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full btn-primary flex items-center justify-center ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>Processing...</>
                          ) : (
                            <>
                              Send Message <Send size={16} className="ml-2" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="section-title">Our Location</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit our headquarters in Dubai, UAE
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9 h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9932118442!2d55.27180491501156!3d25.197201983895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Optimity Office Location"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="inline-block bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-left">
                  <div className="font-medium">Monday - Thursday:</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div className="font-medium">Friday:</div>
                  <div>9:00 AM - 1:00 PM</div>
                  <div className="font-medium">Saturday - Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ContactPage;