import React from "react";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <div className="bg-white px-6 md:px-8 py-12 desktop-1500:mt-32">
      {/* Top Section */}
      <div className="min-h-[504px] flex flex-col desktop-1100:flex-row items-center  justify-around">
        {/* Left Side */}
        <div className="w-full desktop-1100:w-1/2 desktop-1500:ml-[35px] max-w-xl 
  flex flex-col items-center text-center 
  desktop-1100:items-start desktop-1100:text-left 
  mx-auto desktop-1100:mx-0
  desktop-1500:mt-[-200px]">
          <h1 className="text-2xl sm:text-3xl desktop-1500:text-4xl font-semibold mb-4">
            <span className="text-blue-800">One Partner, </span>
            <span className="text-orange-500">All Digital Solutions</span>
          </h1>
          <p className="text-gray-700 mb-6 text-sm text-justify leading-relaxed max-w-lg mx-auto desktop-1100:mx-0">
Codo Stack Pvt Ltd offers secure, scalable, and intelligent digital services. From web and app development to cloud hosting, cybersecurity, UI/UX design, and chatbot solutions—we deliver everything under one roof to drive growth, enhance user experience, and protect your data.          </p>

          <div className="mt-5 flex flex-col desktop-1100:flex-row gap-4 desktop-1100:gap-5 justify-center desktop-1100:justify-start w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 sm:px-7 py-3 text-base sm:text-lg font-semibold hover:bg-orange-600 transition w-full sm:w-auto"
            >
              Explore Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-500 text-gray-900 px-6 sm:px-7 py-3 text-base sm:text-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto"
            >
              Who We Are
            </motion.button>
          </div>
        </div>

        {/* Right Side - Infographic Cards (Desktop 1500px+ Only) */}
        <div className="hidden desktop-1500:block relative w-full desktop-1500:w-1/2 h-[600px] ml-[220px] mt-[-100px] scale-[0.85] origin-top-left">
          {/* Connecting Lines */}
          <div className="absolute left-[130px] top-[270px] h-[110px] w-2 bg-blue-500 z-0 shadow-lg rounded"></div>
          <div className="absolute left-[250px] top-[430px] w-[100px] h-2 bg-red-500 z-0 shadow-lg rounded"></div>
          <div className="absolute left-[600px] top-[125px] w-[173px] h-2 bg-orange-500 z-0 shadow-lg rounded"></div>
          <div className="absolute left-[500px] top-[210px] h-[70px] w-2 bg-green-500 z-0 shadow-lg rounded"></div>

          {/* Card: Analyse */}
          <div className="absolute top-[30px] left-[10px] w-[260px] h-[240px] p-6 bg-white border-[10px] border-blue-500 rounded-3xl shadow-2xl text-center z-10">
            <div className="text-5xl mb-2">📊</div>
            <h3 className="text-lg font-semibold">ANALYSE</h3>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-1 bg-blue-500 text-white rounded-xl text-sm shadow">CLICK HERE</button>
          </div>

          {/* Card: Idea */}
          <div className="absolute top-[370px] left-[70px] w-[190px] p-4 bg-white border-[10px] border-red-500 rounded-3xl shadow-2xl text-center z-10">
            <div className="text-4xl mb-2">💡</div>
            <h3 className="text-base font-semibold">IDEA</h3>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet.</p>
            <button className="mt-3 px-3 py-1 bg-red-500 text-white rounded-xl text-xs shadow">CLICK HERE</button>
          </div>

          {/* Card: Management */}
          <div className="absolute top-0 left-[280px] w-[190px] p-4 bg-white border-[10px] border-orange-400 rounded-3xl shadow-2xl text-center z-10 ml-[150px] mt-[40px]">
            <div className="text-4xl mb-2">🧑‍💼</div>
            <h3 className="text-base font-semibold">MANAGEMENT</h3>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet.</p>
            <button className="mt-3 px-3 py-1 bg-orange-400 text-white rounded-xl text-xs shadow">CLICK HERE</button>
          </div>

          {/* Card: Target Market */}
          <div className="absolute top-[280px] left-[250px] w-[250px] p-6 bg-white border-[10px] border-green-500 rounded-3xl shadow-2xl text-center z-10 ml-[100px]">
            <div className="text-5xl mb-2">🎯</div>
            <h3 className="text-lg font-semibold">TARGET MARKET</h3>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-1 bg-green-500 text-white rounded-xl text-sm shadow">CLICK HERE</button>
          </div>
        </div>

        <div className="hidden desktop-1100:grid desktop-1500:hidden w-1/2 grid-cols-2 gap-6 max-w-lg">
          {/* Analyse Card */}
          <div className="p-4 bg-white border-6 border-blue-500 rounded-2xl shadow-xl text-center">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-base font-semibold">ANALYSE</h3>
            <p className="text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
            <button className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-xl text-xs shadow">CLICK HERE</button>
          </div>

          {/* Idea Card */}
          <div className="p-4 bg-white border-6 border-red-500 rounded-2xl shadow-xl text-center">
            <div className="text-4xl mb-2">💡</div>
            <h3 className="text-base font-semibold">IDEA</h3>
            <p className="text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
            <button className="mt-3 px-3 py-1 bg-red-500 text-white rounded-xl text-xs shadow">CLICK HERE</button>
          </div>

          {/* Management Card */}
          <div className="p-4 bg-white border-6 border-orange-400 rounded-2xl shadow-xl text-center">
            <div className="text-4xl mb-2">🧑‍💼</div>
            <h3 className="text-base font-semibold">MANAGEMENT</h3>
            <p className="text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
            <button className="mt-3 px-3 py-1 bg-orange-400 text-white rounded-xl text-xs shadow">CLICK HERE</button>
          </div>

          {/* Target Market Card */}
          <div className="p-4 bg-white border-6 border-green-500 rounded-2xl shadow-xl text-center">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-base font-semibold">TARGET MARKET</h3>
            <p className="text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
            <button className="mt-3 px-3 py-1 bg-green-500 text-white rounded-xl text-xs shadow">CLICK HERE</button>
          </div>
        </div>
      </div>
      {/* Bottom Section - Reseller */}
    </div>
  );
}