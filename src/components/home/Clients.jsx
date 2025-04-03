"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import clients from '@/data/clients';

// CSS keyframes and animation classes will be added to globals.css

const Clients = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef(null);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Auto-rotate through testimonials
  useEffect(() => {
    if (!isMounted) return;
    
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % clients.length);
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMounted]);

  // Circle logic - increased radius for a bigger circle
  const radius = 170; // Radius of the circle in pixels (increased from 140)
  const numItems = clients.length;
  const angleStep = (2 * Math.PI) / numItems;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const circleAnimations = {
    pulse: {
      scale: [1, 1.02, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }
    },
    pulseFast: {
      scale: [1, 1.05, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  };
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-section">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Our Clients</h2>
          <div className="w-20 h-1 bg-primary-green mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            We've had the pleasure of working with amazing gaming communities and servers.
            Check out what they have to say about our work.
          </p>
        </motion.div>
        
        {/* Circular Client Logo Animation */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="relative h-[500px] flex items-center justify-center">
            
            {/* Background decorative circles */}
            <motion.div 
              className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-gray-200 dark:border-gray-700"
              animate="pulse"
              variants={circleAnimations}
            ></motion.div>
            
            <motion.div 
              className="absolute w-[340px] h-[340px] rounded-full border border-gray-200 dark:border-gray-700"
              animate="pulseFast"
              variants={circleAnimations}
            ></motion.div>
            
            <motion.div 
              className="absolute w-[450px] h-[450px] rounded-full border border-gray-100 dark:border-gray-800 opacity-30"
            ></motion.div>
            
            {/* Center logo (active client) */}
            <motion.div
              className="absolute z-20 rounded-full overflow-hidden bg-primary-green/10 p-1 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src={`/server${activeTestimonial + 1}.png`}
                  alt={clients[activeTestimonial].name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            
            {/* Rotating circle of clients - using CSS animation class instead of JS rotation */}
            <div className="absolute spin-circle">
              {clients.map((client, index) => {
                const angle = index * angleStep;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const isActive = index === activeTestimonial;
                
                return (
                  <motion.div
                    key={client.id}
                    className={`absolute cursor-pointer ${isActive ? 'z-10' : 'z-0'}`}
                    style={{
                      width: '70px',
                      height: '70px',
                      left: `calc(50% - 35px + ${x}px)`,
                      top: `calc(50% - 35px + ${y}px)`,
                    }}
                    animate={{
                      scale: isActive ? 1.3 : 1,
                      opacity: isActive ? 1 : 0.7,
                      transition: { duration: 0.3 }
                    }}
                    whileHover={{ scale: 1.3, opacity: 1 }}
                    onClick={() => setActiveTestimonial(index)}
                  >
                    <div 
                      className={`w-[70px] h-[70px] rounded-lg overflow-hidden counter-spin shadow-md ${
                        isActive ? 'ring-4 ring-primary-green' : ''
                      }`}
                    >
                      <Image
                        src={`/server${index + 1}.png`}
                        alt={client.name}
                        width={70}
                        height={70}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
        
        {/* Testimonial Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={testimonialVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="minecraft-panel p-8 rounded-lg relative dark:bg-gray-800 dark:border-gray-700">
              {/* Quote mark */}
              <div className="absolute top-4 left-4 text-5xl text-primary-green opacity-20">
                "
              </div>
              
              <div className="relative">
                <blockquote className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300 mb-6">
                  {clients[activeTestimonial].testimonial}
                </blockquote>
                
                <div className="flex items-center">
                  {/* Client server logo small */}
                  <div className="w-16 h-16 relative mr-4 rounded-md overflow-hidden">
                    <Image
                      src={`/server${activeTestimonial + 1}.png`}
                      alt={clients[activeTestimonial].name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">{clients[activeTestimonial].contact}</p>
                    <p className="text-primary-green font-medium">{clients[activeTestimonial].name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{clients[activeTestimonial].description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index 
                      ? 'bg-primary-green scale-125' 
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Clients;