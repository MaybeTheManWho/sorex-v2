"use client";

import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">Contact Us</h1>
            <div className="w-20 h-1 bg-primary-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have a project in mind? Get in touch with our team to discuss how we can help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary-green mb-6"></div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're here to answer any questions you have about our services. Reach out to us and we'll respond as soon as we can.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-green mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">contact@devcraft.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-green mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.9 3.998c.11.313.168.646.168.998v6l-3.326-2h-2.578v-.004h-5.342v.004H2V5c0-.354.057-.69.17-1.004A3.002 3.002 0 015 2h10c1.262 0 2.341.779 2.791 1.882l.109.116zm1.534 7.478a2.995 2.995 0 01-.534 1.692A3.001 3.001 0 0115 15.002H5a2.999 2.999 0 01-2.9-2.198 3 3 0 01-.168-.998v-1.806h4.166v.004H15V10h2.902l1.531.999v.475l.001.002z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Discord</h3>
                    <p className="text-gray-600 dark:text-gray-300">Join our Discord server to chat with our team directly</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-green mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Response Time</h3>
                    <p className="text-gray-600 dark:text-gray-300">We typically respond within 24-48 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="minecraft-panel p-6 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Custom solutions tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Experienced developers in multiple platforms</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Ongoing support after project completion</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Clear communication throughout the process</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}