import React from "react";
import {
  FaSearch,
  FaClock,
  FaCogs,
  FaCheck,
  FaComments,
  FaChartBar,
  FaBoxes,
  FaTruck,
} from "react-icons/fa";
import { motion } from "framer-motion";

// <-- update this path as needed

const benefits = [
  { icon: FaSearch, label: "Transparency" },
  { icon: FaClock, label: "Real-Time Data" },
  { icon: FaCogs, label: "Automation" },
  { icon: FaCheck, label: "Standardization" },
  { icon: FaComments, label: "Collaboration" },
  { icon: FaChartBar, label: "Productivity" },
  { icon: FaBoxes, label: "Inventory" },
  { icon: FaTruck, label: "Supply Chain" },
];

const mainColor = "#396D8A";
const hoverColor = "#f97316"; // orange-500

const ERPHeader = () => {
  return (
    <div className="bg-white">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0); }
          }
          .hover-bounce:hover .icon-animate {
            animation: float 0.8s ease-in-out infinite;
          }
        `}
      </style>

      {/* ERP Header */}
      <div className="min-h-[200px] px-6 py-8">
        <div className="max-w-screen-2xl h-[536px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Side Content */}
          <div className="max-w-xl text-center md:text-left mt-[50px] ml-[50px]">
  <h2 className="text-2xl md:text-4xl font-semibold mb-4">
    <span className="text-blue-800">Optimize </span>
    <span className="text-orange-500">Your Operations with ERP</span>
  </h2>
  <p className="text-gray-700 mb-6 text-sm text-justify leading-relaxing ml-[5px]">
  Integrate all business functions into a unified platform with our tailored ERP solutions. Streamline operations across finance, HR, and inventory. 
  Enhance efficiency, minimize errors, and drive productivity. Get real-time insights to make smarter decisions and accelerate growth.
</p>

  <div className="mt-10 flex space-x-5">
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-orange-500 text-white px-7 py-3 squared-lg text-lg font-semibold hover:bg-orange-600 transition text-justify leading relaxing">
      Get Started Now
    </motion.button>
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-gray-500 text-gray-900 px-7 py-3 squared-lg text-lg font-semibold hover:bg-gray-300 transition">
      Learn More
    </motion.button>
  </div>
</div>


          {/* Right Side - Monitor Box */}
          <div className="w-[700px] h-[420px] bg-white rounded-lg p-8 border-4 border-bg-gray-1000 mr-[60px] mt-[-30px]">
            <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: mainColor }}>
              Benefits of ERP
            </h2>

            <div className="grid grid-cols-4 gap-6 mb-6">
              {benefits.slice(0, 4).map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="hover-bounce group flex flex-col items-center text-center transition duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <div className="w-24 h-24 flex items-center justify-center bg-white border-2 rounded-md" style={{ borderColor: mainColor }}>
                      <Icon size={42} className="icon-animate text-[#396D8A] group-hover:text-orange-500 transition-colors duration-300" />
                    </div>
                    <p className="text-sm mt-3 font-medium" style={{ color: mainColor }}>{item.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-4 gap-6">
              {benefits.slice(4, 8).map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index + 4}
                    className="hover-bounce group flex flex-col items-center text-center transition duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <div className="w-24 h-24 flex items-center justify-center bg-white border-2 rounded-md" style={{ borderColor: mainColor }}>
                      <Icon size={42} className="icon-animate text-[#396D8A] group-hover:text-orange-500 transition-colors duration-300" />
                    </div>
                    <p className="text-sm mt-3 font-medium" style={{ color: mainColor }}>{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Reseller Section */}
      
    </div>
  );
};

export default ERPHeader;
