"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import services from '@/data/services';

const Services = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-section">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Our Services</h2>
          <div className="w-20 h-1 bg-primary-green mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            We offer a wide range of development services to meet your specific needs.
            From websites to game plugins, we've got you covered.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={`/services#${service.id}`}
              animationDelay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            href="/services"
            className="minecraft-btn inline-block px-8 py-3"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;