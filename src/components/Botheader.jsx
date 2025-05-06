import React from 'react';
import { FaCommentDots, FaQuestion, FaCog } from 'react-icons/fa';
import { MdTextsms } from 'react-icons/md';
import image12 from "../assets/Image/369748101520986116-vmake.mp4";
 // adjust path if needed

const Botheader = () => {
  return (
    <>
      {/* Bot Section */}
      <div className="bg-white text-gray-900 py-16 px-6 md:px-20">
        <div className="max-w-7xl h-[472px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left mt-[-150px] ml-[-40px]">
  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    <span className="text-blue-800">Custom </span>
    <span className="text-orange-500">AI Solutions</span>
  </h2>
  <p className="text-gray-700 mb-6 text-sm text-justify leading relaxing">
    We specialize in creating cutting-edge AI solutions tailored to your business needs. From predictive analytics to machine learning models, we help you harness the power of AI to optimize operations, improve decision-making, and deliver personalized experiences.
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



          {/* Phone with Bubbles */}
          <div className="flex justify-center relative w-full max-w-sm h-[480px] ml-[150px] mt-[-120px]">
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
