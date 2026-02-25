import React from 'react';
import { FaCommentDots, FaQuestion, FaCog } from 'react-icons/fa';
import { MdTextsms } from 'react-icons/md';
import image12 from "../assets/Image/369748101520986116-vmake.mp4";
import { motion } from "framer-motion";
 // adjust path if needed

const Botheader = () => {
  return (
    <>
      <style>{`
        @media (max-width: 1229px) {
          .center-below-1230 {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            margin-top: 0 !important;
          }
          .center-below-1230 p {
            text-align: center;
          }
          .center-below-1230 .button-container {
            justify-content: center;
          }
          .center-below-1230 h2 {
            white-space: normal;
          }
        }
        @media (min-width: 1024px) and (max-width: 1229px) {
          .bot-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 60vh;
          }
        }
      `}</style>

      {/* Bot Section */}
      <div className="bg-white text-gray-900 py-16 px-6 md:px-20">
        <div className="bot-container max-w-7xl min-[1230px]:h-[472px] mx-auto grid grid-cols-1 min-[1230px]:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="center-below-1230 max-w-xl text-center md:text-left min-[1230px]:mt-[-210px] min-[1230px]:ml-[-45px] px-4 min-[1230px]:px-0">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 min-[1230px]:whitespace-nowrap">
              <span className="text-blue-800">Revolutionize </span>
              <span className="text-orange-500">Your Business with AI</span>
            </h1>

            <p className="text-gray-700 mb-6 text-sm text-justify leading-relaxed">
              Transform your business with intelligent, scalable AI systems designed for real-world impact. From advanced machine learning to real-time data analysis, our custom solutions seamlessly streamline operations, boost overall productivity, and drive smarter, faster, and more strategic decisions.
            </p>

            <div className="button-container mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center md:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-orange-500 text-white px-7 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition w-full sm:w-auto">
                Explore AI Potential
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="border border-gray-500 text-gray-900 px-7 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto">
                View Use Cases
              </motion.button>
            </div>
          </div>

          {/* Phone with Bubbles (Hidden below 1230px) */}
          <div className="hidden min-[1230px]:flex justify-center relative w-full max-w-sm h-[480px] ml-[150px] mt-[-120px]">
            {/* Phone */}
            <div className="relative w-[300px] h-[460px] rounded-[2.5rem] border-[4px] border-gray-400 shadow-xl bg-white flex items-center justify-center overflow-hidden z-10">
              <video
                src={image12}
                className="object-cover w-[250px] h-[300px]"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-blue-300 rounded-full"></div>
              <div className="absolute top-3 right-4 text-orange-500 font-bold text-sm">v2.1</div>
            </div>

            {/* Ground Shadow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-5 bg-gray-400 rounded-full blur-md opacity-40 z-0"></div>

            {/* Chat Bubbles */}
            <div className="absolute top-6 -left-14">
              <div className="relative bg-green-500 text-white px-5 py-3 rounded-2xl shadow-lg text-3xl">
                <FaCommentDots />
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-green-500"></div>
              </div>
            </div>

            <div className="absolute bottom-6 -right-14">
              <div className="relative bg-blue-500 text-white px-5 py-3 rounded-2xl shadow-lg text-3xl">
                <FaQuestion />
                <div className="absolute -top-2 right-6 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[14px] border-l-transparent border-r-transparent border-b-blue-500"></div>
              </div>
            </div>

            <div className="absolute top-1/3 -right-14">
              <div className="relative bg-yellow-500 text-white px-5 py-3 rounded-2xl shadow-lg text-3xl">
                <FaCog />
                <div className="absolute -top-2 right-6 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[14px] border-l-transparent border-r-transparent border-b-yellow-500"></div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-14">
              <div className="relative bg-purple-500 text-white px-5 py-3 rounded-2xl shadow-lg text-3xl">
                <MdTextsms />
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-purple-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reseller Section */}
      
    </>
  );
};

export default Botheader;