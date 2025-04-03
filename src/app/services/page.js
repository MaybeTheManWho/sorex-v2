"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import services from '@/data/services';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  
  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">Our Services</h1>
            <div className="w-20 h-1 bg-primary-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We offer a range of custom development services to meet your specific needs.
              Browse our offerings below.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={`#${service.id}`}
                  onClick={() => setActiveService(service.id === activeService ? null : service.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Details Sections */}
      {services.map((service, idx) => (
        <section 
          key={`detail-${service.id}`}
          id={`detail-${service.id}`}
          className={`py-20 ${
            idx % 2 === 1 
              ? 'bg-gray-50 dark:bg-gray-800' 
              : 'bg-white dark:bg-gray-900'
          }`}
        >
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{service.title}</h2>
                <div className="w-20 h-1 bg-primary-green mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.longDescription}</p>
                
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Features & Capabilities</h3>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className="minecraft-btn inline-block"
                >
                  Inquire About This Service
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="minecraft-panel p-6 dark:bg-gray-800 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Case Studies</h3>
                  
                  <div className="space-y-6">
                    {service.cases.map((caseStudy, index) => (
                      <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{caseStudy.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{caseStudy.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Service Icon */}
                  <div className="mt-8 flex justify-center">
                    <div className="w-32 h-32 relative">
                      <div className="w-32 h-32 bg-primary-green/20 dark:bg-primary-green/10 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-green">
                          {service.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary-green mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions about our services? Here are answers to some common questions.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How much do your services cost?",
                answer: "Our pricing varies depending on the scope, complexity, and requirements of each project. We provide custom quotes after an initial consultation to understand your specific needs."
              },
              {
                question: "How long does it take to complete a project?",
                answer: "Project timelines vary based on the complexity and scope of work. Simple projects may take a few days, while more complex ones could take several weeks or months. We'll provide you with a timeline estimate during our initial consultation."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes, we offer ongoing support and maintenance for all our projects. We can discuss support packages that fit your needs during the project planning phase."
              },
              {
                question: "How do we get started with a project?",
                answer: "Getting started is easy! Simply contact us through our contact form, and we'll schedule an initial consultation to discuss your project requirements, timeline, and budget."
              },
              {
                question: "Can you modify existing websites or applications?",
                answer: "Yes, we can work with existing projects to add features, fix issues, or make improvements. We'll first evaluate the current state of your project to determine the best approach."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="minecraft-panel p-6 mb-4 dark:bg-gray-800 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary-green text-white">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project and how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="minecraft-btn inline-block px-8 py-4 bg-white text-primary-green hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}