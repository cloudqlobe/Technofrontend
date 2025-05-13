import React from "react";
import { Play, Download, Upload, Plus, User, Lock } from "lucide-react";
import { motion } from "framer-motion";


const Designheader = () => {
  return (
    <div className="h-[600px] flex flex-col items-center w-full bg-white">
      {/* UI/UX Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-20 py-20">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mt-[-140px] ml-[-5px]">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
  <span className="text-blue-800">Pioneering </span>
  <span className="text-orange-500">Next-Gen Design Solutions</span>
</h2>

  <p className="mt-4 text-gray-600 text-sm text-justify leading-relaxing">
    Crafting visually stunning designs that make a lasting impression. Our design solutions combine creativity, strategy, and innovation to elevate your brand and captivate your audience. We focus on delivering sleek, user-friendly designs that resonate across all platforms. Let us help you create a powerful visual identity for your business.
  </p>
  <div className="mt-10 flex space-x-5">
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-orange-500 text-white px-7 py-3 squared-lg text-lg font-semibold hover:bg-orange-600 transition text-justify leading relaxing">
      Start Your Design Journey
    </motion.button>
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-gray-500 text-gray-900 px-7 py-3 squared-lg text-lg font-semibold hover:bg-gray-300 transition">
      Discover Our Approach
    </motion.button>
  </div>
</div>


        {/* Right Visual */}
        <div className="md:w-1/2 relative flex justify-center items-center mt-0 md:mt-[-110px] h-[500px] ">
          {/* Phone */}
          <div className="relative w-64 h-[480px] rounded-[2.5rem] bg-white border-[6px] border-gray-300 shadow-xl pt-20 pb-10 z-10 overflow-visible">
            {/* Notches */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-300 rounded-b-xl z-20" />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[80px] h-[10px] bg-gray-300 rounded-xl z-20 mt-[20px]" />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[50px] h-[10px] bg-gray-300 rounded-xl z-20 mt-[50px]" />

            {/* UI/UX Boxes */}
            <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-[140px] h-[120px] bg-orange-400 text-white rounded-xl flex items-center justify-center text-5xl font-default shadow-lg z-20 mt-[-40px]">
              UI
            </div>
            <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[140px] h-[120px] bg-green-400 text-white rounded-xl flex items-center justify-center text-5xl font-default shadow-lg z-20 mt-[-40px]">
              UX
            </div>

            {/* Sliders */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col gap-6 z-30 ml-[130px]">
              <div className="w-[120px] h-[80px] rounded-md bg-gray-300 shadow absolute bottom-[-5px] ml-[-140px]" />
              <div className="relative w-[200px] h-2 rounded-full bg-gray-400">
                <div className="absolute left-0 top-0 h-full bg-orange-500" style={{ width: '85%' }} />
                <div className="absolute left-[85%] top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-gray-300 rounded-full shadow-md" />
              </div>
              <div className="relative w-[200px] h-2 rounded-full bg-gray-400">
                <div className="absolute left-0 top-0 h-full bg-blue-500" style={{ width: '55%' }} />
                <div className="absolute left-[55%] top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-gray-300 rounded-full shadow-md" />
              </div>
              <div className="relative w-[200px] h-2 rounded-full bg-gray-400">
                <div className="absolute left-0 top-0 h-full bg-green-500" style={{ width: '30%' }} />
                <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-gray-300 rounded-full shadow-md" />
              </div>
            </div>

            {/* Tabs */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              <div className="w-[170px] h-[25px] rounded-md bg-yellow-400 to-blue-400 shadow" />
              <div className="w-[130px] h-[7px] rounded-md bg-white shadow ml-[-160px] mt-[10px]" />
            </div>
          </div>

          {/* Left Floating UI */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-6 z-20 mt-[20px]">
            {/* Inputs */}
           
         

            {/* Toggles */}
            

            {/* Progress Circle - 75% */}
            

            {/* Icon Buttons */}
           
          </div>

          {/* Right Floating UI */}
          <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-6 z-20">
            {/* Buttons */}
            

            {/* Progress Circle - 95% */}
            

            {/* Action Buttons */}
            
            
          </div>
        </div>
      </div>

      {/* Become a Reseller Section */}
      
    </div>
  );
};

export default Designheader;
