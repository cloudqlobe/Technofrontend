import React from "react";
import image19 from "../assets/Image/—Pngtree—charming robot illustration operating laptop_20059321.png"; // adjust path if needed
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
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left mt-[40px] ml-[20px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-blue-800">Build Powerful </span>
            <span className="text-orange-500">Web Apps</span>
          </h2>
          <p className="text-gray-700 mb-6">
            We create fast, responsive, and user-friendly web applications using
            the latest technologies to ensure high performance and optimal user
            experience.
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

        {/* Right Side - Steps */}
        <div className="flex flex-wrap justify-right gap-[-50px] ml-[-30px]">
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

      {/* Become a Reseller */}
       <div className="w-[1520px] bg-[#F1F5F9] py-12 px-6 md:px-20 rounded-xl shadow-md mt-[120px] ml-[-50px]  border border-bg-gray-400">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-orange-600 drop-shadow-sm">
              Become a Reseller
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
              Start your own business with zero development hassle. Offer world-class web design and development services under your brand, powered by us.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 squared-xl shadow-md transition-all duration-300">
                Register Now
              </button>
              <button className="bg-green-600 border border-green-600 text-white font-semibold px-6 py-3 squared-xl transition-all duration-300">
                Talk to Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={image19}  // Replace with actual image source
              alt="Reseller Opportunity"
              className="object-contain h-64 md:h-80 w-80 md:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
