import React from "react";
import { Play, Download, Upload, Plus, User, Lock } from "lucide-react";
import image19 from '../assets/Image/vector-watercolor-happy-holi-background_921039-1989__1_-removebg-preview.png';

const Designheader = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      {/* UI/UX Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-20 py-20">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mt-[-150px] ml-[-10px]">
          <h2 className="text-4xl font-semibold text-[#1B3BAC]">
            Engaging <span className="text-[#FF6A00]">UI & Seamless UX Design</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm">
            Create user-first designs that are visually stunning and functionally smooth. Our UI/UX services blend creativity with usability to elevate your digital experience.
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

        {/* Right Visual */}
        <div className="md:w-1/2 relative flex justify-center items-center mt-0 md:mt-[-80px] h-[500px]">
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
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-6 z-20">
            {/* Inputs */}
            <div className="space-y-3 pl-4 mt-[-30px]">
              <div className="flex items-center gap-2 bg-[#1e293b] text-white px-3 py-2 rounded-lg shadow-md w-[150px] text-sm">
                <User size={20} />
                <div className="w-[50px] h-[3px] bg-white"></div>
              </div>
              <div className="flex items-center gap-2 bg-[#1e293b] text-white px-3 py-2 rounded-lg shadow-md w-[150px] text-sm">
                <Lock size={20} />
                <span>••••••••</span>
              </div>
            </div>

            {/* Toggles */}
            <div className="flex flex-col gap-2 pl-4 mt-[200px] ml-[90px]">
              <div className="w-[90px] h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full relative">
                <div className="absolute right-0 top-0 bottom-0 m-1 w-6 h-6 bg-black rounded-full" />
              </div>
              <div className="w-18 h-8 bg-gray-300 rounded-full relative">
                <div className="absolute left-0 top-0 bottom-0 m-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
              </div>
            </div>

            {/* Progress Circle - 75% */}
            <div className="flex items-center gap-3 pr-4">
              <div className="relative w-[100px] h-[100px] mt-[-350px]">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from -90deg,rgb(106, 215, 104) 0% 75%, #e2e8f0 75% 100%)`,
                  }}
                />
                <div className="absolute inset-[10px] rounded-full bg-white flex items-center justify-center text-black text-lg font-bold">
                  75%
                </div>
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="flex flex-row gap-4 pl-4 items-center">
              <button className="w-14 h-14 rounded-md bg-green-500 text-white shadow-md flex items-center justify-center ml-[30px]">
                <Upload size={25} />
              </button>
              <button className="w-12 h-12 rounded-full bg-blue-500 text-white shadow-md flex items-center justify-center ml-[10px]">
                <Plus size={25} />
              </button>
            </div>
          </div>

          {/* Right Floating UI */}
          <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-6 z-20">
            {/* Buttons */}
            <div className="flex gap-3 pr-4 mt-6">
              <button className="w-14 h-14 rounded-xl bg-red-500 text-white shadow-md flex items-center justify-center">
                <Play size={28} />
              </button>
              <button className="w-14 h-14 rounded-xl bg-blue-500 text-white shadow-md flex items-center justify-center">
                <Download size={28} />
              </button>
            </div>

            {/* Progress Circle - 95% */}
            <div className="flex items-center gap-3 pr-4">
              <div className="relative w-[100px] h-[100px] mt-[-80px] ml-[30px]">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from -90deg,rgb(96, 147, 231) 0% 95%, #e2e8f0 95% 100%)`,
                  }}
                />
                <div className="absolute inset-[10px] rounded-full bg-white flex items-center justify-center text-black text-lg font-bold">
                  95%
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 pr-4">
              <button className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm shadow-md">
                <div className="w-full h-[1px] bg-white" />
              </button>
              <button className="px-4 py-2 rounded-md bg-red-500 text-white text-sm shadow-md">
                <div className="w-full h-[1px] bg-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Become a Reseller Section */}
      <div className="w-full bg-[#F1F5F9] py-12 px-6 md:px-20 rounded-xl shadow-md mt-[-60px] border border-gray-300">
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
              className="object-overflow h-[400px] w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designheader;
