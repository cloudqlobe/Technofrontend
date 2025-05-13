import React from "react";
import { motion } from "framer-motion";
 // adjust path if needed
import {
  Lightbulb,
  ClipboardList,
  Settings,
  FileSearch,
  Handshake,
} from "lucide-react";

const OurWorks = () => {
  return (
    <div className="w-full py-16 px-4 md:px-12 bg-white">
      <div className="max-w-8xl h-[472px] mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left mt-[20px] ml-[28px]">
  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    <span className="text-blue-800">Empowering </span>
    <span className="text-orange-500">Digital Innovation</span>
  </h2>
  <p className="text-sm text-gray-600 leading-relaxing text-justify mt-5 max-w-lg">
  At TechnoMagic, we deliver cutting-edge digital solutions that drive growth and efficiency. Our team specializes in crafting custom software, scalable applications, and seamless integrations, enabling businesses to innovate and evolve with precision and agility.
</p>

  <div className="mt-10 flex space-x-5">
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-orange-500 text-white px-7 py-3 squared-lg text-lg font-semibold hover:bg-orange-600 transition text-justify leading relaxing">
      Explore Our Innovations
    </motion.button>
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-gray-500 text-gray-900 px-7 py-3 squared-lg text-lg font-semibold hover:bg-gray-300 transition">
      View Our Success Stories
    </motion.button>
  </div>
</div>



        {/* Right Side - Steps */}
        <div className="flex flex-wrap justify-right gap-[-50px] ml-[-30px]">
          {/* Step 1: Initiation */}
          <div className="transform -translate-x-10">
  <div className="flex flex-wrap gap-[-50px] ml-[-30px]">
    {/* Step 1: Initiation */}
    <div className="relative w-44 text-center ml-[-300px]">
      <div
        className="relative aspect-[1/0.866] w-full bg-blue-600 text-white clip-hexagon flex flex-col items-center justify-center shadow-lg"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <div className="mt-6 ">
          <Lightbulb size={36} />
        </div>
        <h3 className="text-white font-semibold mt-2">Initiation</h3>
      </div>
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white border-4 border-blue-500 w-[60px] h-[60px] rounded-full flex items-center justify-center font-extrabold text-blue-500 text-2xl shadow-lg mt-[-15px]">
        01
      </div>
      <p className="mt-3 font-semibold text-blue-600">Initiation</p>
      <p className="text-gray-500 text-xs px-1">
        Elements in the subject that have purposes
      </p>
    </div>

    {/* Step 2: Planning */}
    <div className="relative w-44 text-center mt-[80px] ml-[-30px]">
      <div
        className="relative aspect-[1/0.866] w-full bg-teal-500 text-white clip-hexagon flex flex-col items-center justify-center shadow-lg"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <div className="mt-6">
          <ClipboardList size={36} />
        </div>
        <h3 className="text-white font-semibold mt-2">Planning</h3>
      </div>
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white border-4 border-teal-500 w-[60px] h-[60px] rounded-full flex items-center justify-center font-extrabold text-teal-500 text-2xl shadow mt-[-15px]">
        02
      </div>
      <p className="mt-3 font-semibold text-teal-500">Planning</p>
      <p className="text-gray-500 text-xs px-1">
        Elements in the subject that have purposes
      </p>
    </div>

    {/* Step 3: Execution */}
    <div className="relative w-44 text-center ml-[-30px] ">
      <div
        className="relative aspect-[1/0.866] w-full bg-yellow-500 text-white clip-hexagon flex flex-col items-center justify-center shadow-lg"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <div className="mt-6">
          <Settings size={36} />
        </div>
        <h3 className="text-white font-semibold mt-2">Execution</h3>
      </div>
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white border-4 border-yellow-500 w-[60px] h-[60px] rounded-full flex items-center justify-center font-extrabold text-yellow-500 text-2xl shadow mt-[-15px]">
        03
      </div>
      <p className="mt-3 font-semibold text-yellow-500">Execution</p>
      <p className="text-gray-500 text-xs px-1">
        Elements in the subject that have purposes
      </p>
    </div>

    {/* Step 4: Controlling */}
    <div className="relative w-44 text-center mt-[80px] ml-[-30px] ">
      <div
        className="relative aspect-[1/0.866] w-full bg-pink-600 text-white clip-hexagon flex flex-col items-center justify-center shadow-lg"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <div className="mt-6">
          <FileSearch size={36} />
        </div>
        <h3 className="text-white font-semibold mt-2">Controlling</h3>
      </div>
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white border-4 border-pink-700 w-[60px] h-[60px] rounded-full flex items-center justify-center font-extrabold text-pink-700 text-2xl shadow mt-[-15px]">
        04
      </div>
      <p className="mt-3 font-semibold text-pink-600">Controlling</p>
      <p className="text-gray-500 text-xs px-1">
        Elements in the subject that have purposes
      </p>
    </div>

    {/* Step 5: Closing */}
    <div className="relative w-44 text-center ml-[-30px]">
      <div
        className="relative aspect-[1/0.866] w-full bg-purple-700 text-white clip-hexagon flex flex-col items-center justify-center shadow-lg"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <div className="mt-6">
          <Handshake size={36} />
        </div>
        <h3 className="text-white font-semibold mt-2">Closing</h3>
      </div>
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white border-4 border-purple-700 w-[60px] h-[60px] rounded-full flex items-center justify-center font-extrabold text-purple-700 text-2xl shadow mt-[-15px]">
        05
      </div>
      <p className="mt-3 font-semibold text-purple-700">Closing</p>
      <p className="text-gray-500 text-xs px-1">
        Elements in the subject that have purposes
      </p>
    </div>
  </div>
</div>
</div>
</div>


      {/* Become a Reseller */}
       
    </div>
  );
};

export default OurWorks;
