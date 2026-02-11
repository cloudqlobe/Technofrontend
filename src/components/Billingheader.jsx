import React from 'react';
import {
  MdAutorenew,
  MdReceipt,
  MdAccessTime,
  MdBarChart,
  MdCalculate,
  MdPower,
  MdSettings,
  MdAccountBalanceWallet,
} from 'react-icons/md';
import { motion } from "framer-motion";

const Billingheader = () => {
  const billingFeatures = [
    { icon: <MdAutorenew />, title: 'Auto Billing', bg: 'from-blue-500 to-blue-400' },
    { icon: <MdReceipt />, title: 'Invoices', bg: 'from-yellow-500 to-yellow-400' },
    { icon: <MdAccessTime />, title: 'Reminders', bg: 'from-purple-500 to-purple-400' },
    { icon: <MdBarChart />, title: 'Reports', bg: 'from-green-500 to-green-400' },
    { icon: <MdCalculate />, title: 'Tax', bg: 'from-pink-500 to-pink-400' },
    { icon: <MdPower />, title: 'API', bg: 'from-orange-500 to-orange-400' },
    { icon: <MdSettings />, title: 'Settings', bg: 'from-indigo-500 to-indigo-400' },
    { icon: <MdAccountBalanceWallet />, title: 'Wallet', bg: 'from-emerald-500 to-emerald-400' },
  ];

  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <style>{`
        @keyframes icon-only-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-icon-only {
          animation: icon-only-bounce 2s ease-in-out infinite;
          display: inline-block;
        }
        @media (max-width: 1024px) {
          .center-below-1024 {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            margin-top: 0 !important;
          }
          .center-below-1024 p {
            text-align: center;
          }
          .center-below-1024 .button-container {
            justify-content: center;
          }
        }
      `}</style>

      <div className="max-w-7xl lg:h-[472px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="center-below-1024 max-w-xl text-center md:text-left lg:mt-[-210px] lg:ml-[-45px] px-4 lg:px-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-blue-800">Smart </span>
            <span className="text-orange-500">Billing Automation</span>
          </h2>
          <p className="text-gray-700 mb-6 text-sm text-justify leading-relaxed">
            Upgrade to intelligent billing solutions built for accuracy, speed, and scalability. Our software automates invoicing, manages recurring payments, and delivers real-time financial insights—designed to grow with your business and simplify complex accounting workflows, all while ensuring control and compliance.
          </p>

          <div className="button-container mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center md:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="bg-orange-500 text-white px-7 py-3 text-lg font-semibold hover:bg-orange-600 transition w-full sm:w-auto">
              Try Demo
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="border border-gray-500 text-gray-900 px-7 py-3 text-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto">
              View Features
            </motion.button>
          </div>
        </div>


        {/* Right: Tablet Design with 3D Effect (Hidden below 1024px) */}
        <div className="hidden lg:flex justify-center mt-[-150px]">
          <div
            className="relative w-[750px] h-[390px] bg-[#fdfdfd] rounded-[2rem] border-[4px] border-gray-400 p-6 flex flex-col items-center pt-10 shadow-2xl"
            style={{
              transform: 'rotateY(-6deg) rotateX(3deg)',
              perspective: '1200px',
            }}
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-500 rounded-full z-10 opacity-50" />

            {/* 3x3 Icon Grid */}
            <div className="grid grid-cols-4 gap-12 mt-[20px]">
              {billingFeatures.map((item, i) => (
                <div key={i} className="flex flex-col items-center space-y-5">
                  <div className={`w-[70px] h-[70px] rounded-lg bg-gradient-to-br ${item.bg} shadow-lg flex items-center justify-center`}>
                    <span className="text-white text-3xl animate-icon-only">{item.icon}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reseller Section: Full Width of Screen */}
      
    </div>
  );
};

export default Billingheader;