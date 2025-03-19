import React from 'react';
import { FaShieldAlt, FaHeadset, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      {/* Heading */}
      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Support Services
      </motion.h1>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaHeadset className="text-orange-500 text-5xl mb-3" />
          <h2 className="text-2xl font-semibold mb-2">24/7 Support</h2>
          <p className="text-gray-600">We are available round the clock to assist you with any queries or issues.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaShieldAlt className="text-red-500 text-5xl mb-3" />
          <h2 className="text-2xl font-semibold mb-2">High Security</h2>
          <p className="text-gray-600">Our platform is secured with advanced encryption to protect your data.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaTools className="text-blue-500 text-5xl mb-3" />
          <h2 className="text-2xl font-semibold mb-2">Advanced Technology</h2>
          <p className="text-gray-600">We leverage the latest tech to provide seamless and reliable services.</p>
        </div>
      </div>

      {/* Get a Free Quote Form */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Get a Free Quote</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <textarea placeholder="Describe your requirements" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Support;
