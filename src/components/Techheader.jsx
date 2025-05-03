import React from "react";
import image10 from "../assets/Image/250.jpg";
import {
  ServerCog,
  Cpu,
  Globe,
  ShieldCheck,
} from "lucide-react";
import image19 from "../assets/Image/367935039113420802-vmake.mp4";

const IconLabel = ({ icon: Icon, label, bgColor, size }) => {
  const iconSize = size === "lg" ? "w-10 h-10" : "w-6 h-6";
  const padding = size === "lg" ? "p-5" : "p-3";

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className={`${padding} rounded-full text-white shadow-md ${bgColor}`}>
        <Icon className={`${iconSize}`} />
      </div>
      <p className="text-sm font-semibold text-gray-800">{label}</p>
    </div>
  );
};

const TechConsultancyHeader = () => {
  return (
    <div className="w-full px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left mt-[-140px] ml-[-50px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-blue-800">Expert </span>
            <span className="text-orange-500">Tech Consultancy</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Unlock your business's full potential with our end-to-end technology consulting. From digital strategy and system architecture to custom software solutions and scalable infrastructure, 
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 squared-lg font-semibold shadow">
              Book a Consultation
            </button>
            <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 squared-lg font-semibold shadow">
              Explore Services
            </button>
          </div>
        </div>

        {/* Right Monitor Section */}
        {/* Right Monitor Section */}
<div className="relative w-full flex justify-center items-center -mt-14">

          {/* Top-left Icon */}
          <div className="absolute -left-8 top-[80px]">
            <IconLabel
              icon={ServerCog}
              label="Server Setup"
              bgColor="bg-blue-600"
              size="lg"
            />
          </div>

          {/* Bottom-left Icon */}
          <div className="absolute -left-8 bottom-[80px]">
            <IconLabel
              icon={Cpu}
              label="Infra Audit"
              bgColor="bg-green-600"
              size="lg"
            />
          </div>

          {/* Top-right Icon */}
          <div className="absolute -right-8 top-[80px]">
            <IconLabel
              icon={Globe}
              label="Cloud Migration"
              bgColor="bg-orange-500"
              size="lg"
            />
          </div>

          {/* Bottom-right Icon */}
          <div className="absolute -right-8 bottom-[80px]">
            <IconLabel
              icon={ShieldCheck}
              label="Security"
              bgColor="bg-purple-600"
              size="lg"
            />
          </div>

          {/* Monitor with Stand */}
          <div className="relative flex flex-col items-center">
            {/* Monitor */}
            <div className="w-[400px] h-[400px] border-4 border-gray-300 shadow-xl bg-white rounded-lg overflow-hidden z-10">
              <video
                src={image19}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Stand */}
            <div className="w-6 h-4 bg-gray-400 rounded-sm mt-1"></div>
            <div className="w-24 h-2 bg-gray-500 rounded-b-xl"></div>
          </div>
        </div>
      </div>

      {/* Become a Reseller Section */}
      <div className="w-[1515px] bg-[#F1F5F9] py-12 px-8 md:px-20 rounded-xl shadow-md mt-[25px] border border-gray-300 ml-[-20px] ">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
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

          {/* Image */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={image10}
              alt="Reseller Opportunity"
              className="object-contain h-64 md:h-80 w-80 md:w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechConsultancyHeader;
