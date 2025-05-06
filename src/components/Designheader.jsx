import React from "react";
import { Play, Download, Upload, Plus, User, Lock } from "lucide-react";


const Designheader = () => {
  return (
    <div className="h-[600px] flex flex-col items-center w-full bg-white">
      {/* UI/UX Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-20 py-20">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mt-[-140px] ml-[-5px]">
          <h2 className="text-4xl font-semibold text-[#1B3BAC]">
            Engaging <span className="text-[#FF6A00]">UI & Seamless UX Design</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm text-justify leading relaxing">
            Create user-first designs that are visually stunning and functionally smooth. Our UI/UX services blend creativity with usability to elevate your digital experience.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 squared-lg font-semibold shadow ml-[5px]">
              Get a Quote
            </button>
            <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 squared-lg font-semibold shadow">
              Get a Demo
            </button>
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
