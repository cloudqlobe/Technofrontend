import React from "react";

import {
  ServerCog,
  Cpu,
  Globe,
  ShieldCheck,
} from "lucide-react";
import image19 from "../../../../assets/video/367935039113420802-vmake.mp4";
import { motion } from "framer-motion";

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

const Techheader = () => {
  return (
    <div className="w-full px-6 py-12 desktop-1400:py-20 bg-white min-h-[600px]">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Container - 2 columns on desktop-1100+ */}
<div
  className="
    flex justify-around
    desktop-1400:grid
    desktop-1400:grid-cols-2
    desktop-1400:gap-12
    items-center
  "
>
          {/* Left Content */}
          <div className="max-w-xl text-center desktop-1100:text-left desktop-1400:mt-[-120px] mt-0 desktop-1400:ml-[-45px] mx-auto desktop-1100:mx-0">
            <h1 className="text-2xl sm:text-3xl desktop-1400:text-4xl font-semibold mb-4">
              <span className="text-blue-800">Transformative </span>
              <span className="text-orange-500">Tech Consultancy</span>
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mt-5 max-w-lg mx-auto desktop-1100:mx-0">
              Drive transformative business outcomes with our cutting-edge technology consulting. Our solutions, from AI-driven digital transformations to scalable, high-performance systems, are designed to empower your enterprise with the agility and innovation needed to thrive in the digital era. 
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center desktop-1100:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-orange-500 text-white px-6 sm:px-7 py-3 text-base sm:text-lg font-semibold hover:bg-orange-600 transition w-full sm:w-auto"
              >
                Book a Session
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="border border-gray-500 text-gray-900 px-6 sm:px-7 py-3 text-base sm:text-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto"
              >
                Discover Solutions
              </motion.button>
            </div>
          </div>

          {/* Right Monitor Section - Only visible on desktop-1400+ */}
          <div className="hidden desktop-1400:flex relative w-full justify-center items-center -mt-14 ml-[10px]">
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

          {/* Icons Only on Right Side - Visible between 1100px-1399px */}
          <div className="hidden desktop-1100:flex desktop-1400:hidden justify-center items-center">
            <div className="grid grid-cols-2 gap-8 max-w-xs">
              <IconLabel
                icon={ServerCog}
                label="Server Setup"
                bgColor="bg-blue-600"
                size="lg"
              />
              <IconLabel
                icon={Globe}
                label="Cloud Migration"
                bgColor="bg-orange-500"
                size="lg"
              />
              <IconLabel
                icon={Cpu}
                label="Infra Audit"
                bgColor="bg-green-600"
                size="lg"
              />
              <IconLabel
                icon={ShieldCheck}
                label="Security"
                bgColor="bg-purple-600"
                size="lg"
              />
            </div>
          </div>
        </div>

        {/* Icons Below - Visible below 1100px */}
        <div className="block desktop-1100:hidden w-full mt-12">
          <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
            <IconLabel
              icon={ServerCog}
              label="Server Setup"
              bgColor="bg-blue-600"
              size="lg"
            />
            <IconLabel
              icon={Globe}
              label="Cloud Migration"
              bgColor="bg-orange-500"
              size="lg"
            />
            <IconLabel
              icon={Cpu}
              label="Infra Audit"
              bgColor="bg-green-600"
              size="lg"
            />
            <IconLabel
              icon={ShieldCheck}
              label="Security"
              bgColor="bg-purple-600"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techheader;