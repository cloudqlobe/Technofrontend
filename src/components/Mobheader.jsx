import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import {
  FaApple,
  FaWindows,
  FaAndroid,
  FaChrome,
  FaReact,
  FaJava,
} from 'react-icons/fa';
import {
  SiFlutter,
  SiKotlin,
  SiGo,
  SiAndroidstudio,
} from 'react-icons/si';

// import image14 from '../assets/image14.png'; // make sure this path is correct

const icons = [
  { icon: <SiFlutter />, label: 'Flutter', color: '#02569B' },
  { icon: <FaReact />, label: 'React Native', color: '#61DBFB' },
  { icon: <SiKotlin />, label: 'Kotlin', color: '#7F52FF' },
  { icon: <FaJava />, label: 'Java', color: '#f89820' },
  { icon: <SiGo />, label: 'GoLang', color: '#00ADD8' },
  { icon: <SiAndroidstudio />, label: 'Android Studio', color: '#3DDC84' },
];

const Mobheader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(scrollInterval);
  }, []);

  const currentIcon = icons[currentIndex];

  return (
    <>
      {/* Mobile Header Section */}
      <section className="w-full h-[600px] bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl text-left md:text-left mt-[-240px] ml-[5px]">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
  <span className="text-blue-800"> Build Seamless </span>
  <span className="text-orange-500">Apps for Business</span>
</h2>
<p className="text-sm text-gray-600 mb-6 leading-relaxed text-justify max-w-lg ml-[5px]">
  We specialize in building high-performance mobile apps that offer smooth user experiences. Utilizing cross-platform and native technologies, our apps enhance productivity, engagement, and user satisfaction.
</p>

{/* Action Buttons */}
<div className="mt-10 flex space-x-5">
  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-orange-500 text-white px-7 py-3 squared-lg text-lg font-semibold hover:bg-orange-600 transition">
    Start Your Project
  </motion.button>
  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-gray-500 text-gray-900 px-7 py-3 squared-lg text-lg font-semibold hover:bg-gray-300 transition">
    Discover Our Work
  </motion.button>
</div>

        </div>

        {/* Phone and Icons Section */}
        <div className="relative flex items-center justify-center mx-auto mt-[-150px] ml-[320px]">
          {/* Left Side Icons */}
          <div className="flex flex-col justify-center gap-12 mr-4 items-center">
            <div className="flex flex-col items-center">
              <div className="bg-black text-white p-5 rounded-full">
                <FaApple size={48} />
              </div>
              <p className="text-sm mt-2 font-medium text-center">iOS</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white p-5 rounded-full">
                <FaWindows size={48} />
              </div>
              <p className="text-sm mt-2 font-medium text-center">Windows</p>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative w-[240px] h-[480px] rounded-[2.5rem] border-[4px] border-gray-400 shadow-xl bg-gray-100 flex items-center justify-center overflow-hidden mx-4">
            {/* Phone Top */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-blue-300 rounded-full"></div>
            <div className="absolute top-3 right-4 text-orange-500 font-bold text-sm">v2.1</div>

            {/* Animated Icon */}
            <div
              key={currentIndex}
              className="text-8xl font-bold transition-all duration-500 ease-in-out"
              style={{ color: currentIcon.color }}
              title={currentIcon.label}
            >
              {currentIcon.icon}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex flex-col justify-center gap-12 ml-4 items-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white p-5 rounded-full">
                <FaAndroid size={48} />
              </div>
              <p className="text-sm mt-2 font-medium text-center">Android</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 text-white p-5 rounded-full">
                <FaChrome size={48} />
              </div>
              <p className="text-sm mt-2 font-medium text-center">Web / PWA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reseller Section */}
      
    </>
  );
};

export default Mobheader;
