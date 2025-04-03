"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    discord: '',
    contactVia: 'email',
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleRadioChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      contactVia: e.target.value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: '',
    });
    
    // Here you would normally send the form data to your backend
    // For this example, we'll simulate a successful submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        discord: '',
        contactVia: 'email',
      });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: 'Oops! Something went wrong. Please try again later.',
      });
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="minecraft-panel rounded-lg max-w-2xl mx-auto dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Us a Message</h2>
      
      {formStatus.isSubmitted ? (
        <div 
          className={`p-4 rounded-md mb-6 ${
            formStatus.isError 
              ? 'bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800' 
              : 'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
          }`}
        >
          <p>{formStatus.message}</p>
          {!formStatus.isError && (
            <button 
              onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
              className="mt-4 text-green-700 dark:text-green-400 underline"
            >
              Send another message
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Preferred Contact Method *
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactVia"
                  value="email"
                  checked={formData.contactVia === 'email'}
                  onChange={handleRadioChange}
                  className="h-4 w-4 text-primary-green focus:ring-primary-green dark:bg-gray-700"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Email</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactVia"
                  value="discord"
                  checked={formData.contactVia === 'discord'}
                  onChange={handleRadioChange}
                  className="h-4 w-4 text-primary-green focus:ring-primary-green dark:bg-gray-700"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Discord</span>
              </label>
            </div>
          </div>
          
          {formData.contactVia === 'email' ? (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          ) : (
            <div>
              <label htmlFor="discord" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Discord Username *
              </label>
              <input
                type="text"
                id="discord"
                name="discord"
                value={formData.discord}
                onChange={handleChange}
                required
                placeholder="username#0000 or username"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          )}
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={formStatus.isSubmitting}
              className="minecraft-btn w-full py-3 text-center"
            >
              {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;