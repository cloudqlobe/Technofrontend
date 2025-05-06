import React from "react";

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
    <div className="w-full px-6 py-20 bg-white h-[600px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left mt-[-90px] ml-[-45px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-blue-800">Expert </span>
            <span className="text-orange-500">Tech Consultancy</span>
          </h2>
          <p className="text-sm text-gray-600 leading-relaxing text-justify mt-5 max-w-lg ">
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
<div className="relative w-full flex justify-center items-center -mt-14 ml-[10px]">

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
          <div className="absolute -right-4 bottom-[80px]">
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
      </div>
  );
};

export default TechConsultancyHeader;
