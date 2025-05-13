import React from "react";
import { motion } from "framer-motion";
 // adjust path if needed

export default function AboutUsSection() {
  return (
    <div className="bg-white px-8 py-12">
      {/* Top Section */}
      <div className="min-h-[504px] flex flex-col md:flex-row items-center">
  {/* Left Side */}
  <div className="w-full md:w-1/2 ml-[35px] max-w-xl text-center md:text-left mt-[-200px]">
  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    <span className="text-blue-800">One Partner, </span>
    <span className="text-orange-500">All Digital Solutions</span>
  </h2>
  <p className="text-gray-700 mb-6 text-sm text-justify leading-relaxed">
    TechnoMagic Solutions Pvt Ltd offers secure, scalable, and intelligent digital services. From web and app development to cloud hosting, cybersecurity, UI/UX design, and chatbot solutions—we deliver everything under one roof to drive growth, enhance user experience, and protect your data.
  </p>

  <div className="mt-10 flex space-x-5">
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-orange-500 text-white px-7 py-3 squared-lg text-lg font-semibold hover:bg-orange-600 transition">
      Explore Services
    </motion.button>
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-gray-500 text-gray-900 px-7 py-3 squared-lg text-lg font-semibold hover:bg-gray-300 transition">
      Who We Are
    </motion.button>
  </div>
</div>



        {/* Right Side - Infographic Cards */}
        <div className="relative w-full md:w-1/2 h-[600px] ml-[220px] mt-[-100px] scale-[0.85] origin-top-left">

          {/* Connecting Lines */}
          <div className="absolute left-[130px] top-[270px] h-[110px] w-2 bg-blue-500 z-0 shadow-lg rounded"></div>
          <div className="absolute left-[250px] top-[430px] w-[100px] h-2 bg-red-500 z-0 shadow-lg rounded"></div>
          <div className="absolute left-[600px] top-[125px] w-[173px] h-2 bg-orange-500 z-0 shadow-lg rounded"></div>
          {/* <div className="absolute left-[515px] top-[-60px] h-[100px] w-2 bg-orange-400 z-0 shadow-lg rounded"></div> */}
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
      </div>

      {/* Bottom Section - Reseller */}
      
    </div>
  );
}
