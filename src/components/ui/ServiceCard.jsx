"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PlaceholderImage from './PlaceholderImage';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  href = '#',
  animationDelay = 0,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration:.5, delay: animationDelay }}
      viewport={{ once: true }}
      className="minecraft-panel rounded-lg relative overflow-hidden dark:bg-gray-800 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Hover Effect */}
      <div 
        className={`absolute inset-0 bg-primary-green/10 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      <div className="p-6">
        {/* Icon */}
        <div className="w-16 h-16 mb-4 relative">
          <PlaceholderImage text={title} />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        {/* Link */}
        <Link 
          href={href}
          className={`inline-flex items-center text-primary-green font-medium transition-all ${
            isHovered ? 'translate-x-2' : ''
          }`}
        >
          Learn more
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;