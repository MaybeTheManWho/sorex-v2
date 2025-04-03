"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">About Us</h1>
            <div className="w-20 h-1 bg-primary-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're a team of passionate developers dedicated to creating custom solutions
              for all your digital needs.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Story</h2>
              <div className="w-20 h-1 bg-primary-green mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                DevCraft Studio began with a simple idea: to provide high-quality, custom development services that cater to the specific needs of our clients. We started as a small team of developers with a passion for creating innovative solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Over time, we've grown our expertise across various platforms and technologies, from web development to game plugins and everything in between. Our diverse skill set allows us to tackle a wide range of projects.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we're proud to have worked with clients from around the world, helping them bring their ideas to life through our tailored development services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-80 lg:h-96"
            >
              <div className="minecraft-panel h-full w-full flex items-center justify-center dark:bg-gray-800 dark:border-gray-700">
                <div className="p-8 bg-primary-green/10 dark:bg-primary-green/5 h-full w-full flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Our Team"
                    width={200}
                    height={200}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Values</h2>
            <div className="w-20 h-1 bg-primary-green mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">
              At DevCraft Studio, our work is guided by a set of core values that
              define who we are and how we approach every project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We're committed to delivering high-quality solutions that exceed expectations.",
                icon: (
                  <svg className="w-12 h-12 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We constantly explore new technologies and approaches to provide the best solutions.",
                icon: (
                  <svg className="w-12 h-12 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                )
              },
              {
                title: "Client-Focused",
                description: "We prioritize understanding and meeting our clients' unique needs and goals.",
                icon: (
                  <svg className="w-12 h-12 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="minecraft-panel text-center p-6 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Process</h2>
            <div className="w-20 h-1 bg-primary-green mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">
              We follow a structured approach to ensure every project is completed efficiently
              and to the highest standard.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Process Step Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Process Steps */}
            {[
              {
                title: "Discovery",
                description: "We begin by understanding your requirements, goals, and vision for the project.",
                icon: "1"
              },
              {
                title: "Planning",
                description: "We create a detailed plan outlining the scope, timeline, and approach for your project.",
                icon: "2"
              },
              {
                title: "Development",
                description: "Our team gets to work, building your solution with regular updates and feedback sessions.",
                icon: "3"
              },
              {
                title: "Testing",
                description: "We thoroughly test everything to ensure quality, functionality, and performance.",
                icon: "4"
              },
              {
                title: "Delivery",
                description: "We deliver the final product and provide guidance on implementation and usage.",
                icon: "5"
              },
              {
                title: "Support",
                description: "Our relationship doesn't end at delivery. We provide ongoing support as needed.",
                icon: "6"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 md:mb-24"
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Step Icon */}
                  <div className="minecraft-panel w-16 h-16 flex items-center justify-center mb-4 md:mb-0 z-10 bg-white dark:bg-gray-800 dark:border-gray-700">
                    <span className="text-2xl font-bold text-primary-green">{step.icon}</span>
                  </div>
                  
                  {/* Step Content */}
                  <div 
                    className={`minecraft-panel p-6 md:w-1/2 dark:bg-gray-800 dark:border-gray-700 ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8 md:text-right'
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss your project and how we can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="minecraft-btn inline-block px-8 py-4 bg-white text-primary-green hover:bg-gray-100"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}