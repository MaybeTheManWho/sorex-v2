"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textOptions = [
    "Websites",
    "Discord Bots",
    "Minecraft Plugins",
    "FiveM Scripts",
    "Roblox Scripts",
    "Applications"
  ];
  
  // Cycle through text options
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Background with Minecraft-inspired elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Optional: Add a subtle grid pattern for a Minecraft feel */}
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-40" 
          style={{
            backgroundImage: `linear-gradient(rgba(68, 189, 50, 0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(68, 189, 50, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Floating blocks (Minecraft style) */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-primary-green opacity-20 animate-float" 
          style={{ animationDelay: '0.5s' }}
        />
        <div className="absolute top-3/4 left-1/4 w-12 h-12 bg-secondary-green opacity-20 animate-float" 
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-wood-brown opacity-10 animate-float" 
          style={{ animationDelay: '1.5s' }}
        />
      </div>
      
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
              Custom Development for Your Digital Needs
            </h1>
            
            <div className="h-16 mb-6">
              <div className="text-2xl md:text-3xl font-bold text-primary-green">
                We build{' '}
                <span className="inline-block min-w-[180px]">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {textOptions[currentTextIndex]}
                  </motion.span>
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team of experienced developers specializes in creating custom solutions 
              for your projects, from websites and applications to game plugins and scripts.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="/services" minecraft={true}>
                Our Services
              </Button>
              <Button href="/contact" variant="outline">
                Get Started
              </Button>
            </div>
          </motion.div>
          
          {/* Right Column: Image or 3D Object */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            {/* Server Profile */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 p-4 minecraft-panel dark:bg-gray-800 dark:border-gray-700">
                <div className="h-full w-full bg-primary-green/20 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/profile.png" 
                    alt="Server Profile" 
                    width={200}
                    height={200}
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 -right-8 w-16 h-16 minecraft-panel dark:bg-gray-800 dark:border-gray-700 animate-float" 
                style={{ animationDelay: '0.2s' }}
              >
                <div className="h-full w-full bg-secondary-green/20 flex items-center justify-center">
                  <span className="text-secondary-green text-2xl">JS</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 -left-8 w-16 h-16 minecraft-panel dark:bg-gray-800 dark:border-gray-700 animate-float" 
                style={{ animationDelay: '0.7s' }}
              >
                <div className="h-full w-full bg-wood-brown/20 flex items-center justify-center">
                  <span className="text-wood-brown text-2xl">LUA</span>
                </div>
              </div>
              
              <div className="absolute -bottom-8 right-1/4 w-16 h-16 minecraft-panel dark:bg-gray-800 dark:border-gray-700 animate-float" 
                style={{ animationDelay: '1.2s' }}
              >
                <div className="h-full w-full bg-dark-green/20 flex items-center justify-center">
                  <span className="text-dark-green text-2xl">JAVA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            y: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;