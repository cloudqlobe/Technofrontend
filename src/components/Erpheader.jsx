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

import image19 from '../assets/Image/—Pngtree—ai robot_18121576.png'; // <-- update this path as needed

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
      <div className="min-h-screen px-6 py-20">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Side Content */}
          <div className="max-w-xl text-center md:text-left mt-[25px] ml-[50px]">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-blue-800">Enterprise </span>
              <span className="text-orange-500">ERP Development</span>
            </h2>
            <p className="text-gray-700 mb-6">
              We develop scalable ERP systems to manage your operations, finance, HR, and inventory under one unified platform. Boost productivity with smart automation and real-time insights.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 squared-lg font-semibold shadow">
                Get a Quote
              </button>
              <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 squared-lg font-semibold shadow">
                Get a Demo
              </button>
            </div>
          </div>

          {/* Right Side - Monitor Box */}
          <div className="w-[700px] h-[420px] bg-white rounded-lg p-8 border-4 border-bg-gray-1000 mr-[60px] mt-[-50px]">
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
      <div className="w-full bg-[#F1F5F9] py-12 px-6 md:px-20 rounded-xl shadow-md mt-[-230px] border border-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-orange-600 drop-shadow-sm">
              Become a Reseller
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
              Start your own business with zero development hassle. Offer world-class web design and development services under your brand, powered by us.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300">
                🚀 Register Now
              </button>
              <button className="bg-green-600 border border-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                💬 Talk to Us
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <img
              src={image19}
              alt="Reseller Opportunity"
              className="object-contain h-64 md:h-80 w-80 md:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPHeader;
