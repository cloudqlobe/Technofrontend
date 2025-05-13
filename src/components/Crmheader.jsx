import React from "react";
import { LuAperture } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbSettingsCheck } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";

import {
  Laptop,
  ShoppingCart,
  Headphones,
  Settings,
  Users,
  HeartHandshake,
  BadgeCheck,
  TrendingUp,
  Network,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";


export default function CRMSection() {
  return (
    <>
      <div className="min-h-[100px] bg-white flex items-center justify-center px-2 py-4">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - CONTENT */}
          <div className="max-w-xl text-center md:text-left mt-[-170px] ml-[-47px]">

  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    <span className="text-blue-800">Comprehensive </span>
    <span className="text-orange-500">CRM Solutions</span>
  </h2>
  <p className="text-gray-700 mb-6 text-sm text-justify leading relaxing ml-[5px]">
    Revolutionize your business with custom CRM systems that optimize every customer interaction. Streamline sales, automate tasks, and enhance client relationships with advanced technology. 
    Gain real-time insights to unlock growth opportunities tailored to your needs. Drive efficiency and improve your bottom line with seamless CRM integration.
</p>

  <div className="mt-10 flex space-x-5">
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-orange-500 text-white px-7 py-3 squared-lg text-lg font-semibold hover:bg-orange-600 transition text-justify leading relaxing">
      Start Your Journey
    </motion.button>
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-gray-500 text-gray-900 px-7 py-3 squared-lg text-lg font-semibold hover:bg-gray-300 transition">
      Discover More
    </motion.button>
  </div>
</div>

          {/* RIGHT SIDE - CRM Design */}
          <div className="relative w-full h-[568px] right-[-20px] top-[-50px] scale-[0.8] origin-top-left">


            {/* First Row: Single Box */}
            <Square color="bg-[#1CA7EC]" x="left-[160px]" y="top-[20px]" width="w-28" height="h-28" />

            {/* Second Row: Three Boxes */}
            <Square color="bg-[#FFA500]" x="left-[150px]" y="top-[180px]" width="w-36" height="h-32" />
            <Square color="bg-red-600" x="left-[430px]" y="top-[190px]" width="w-[150px]" height="h-[140px]" />
            <Square color="bg-[#008B8B]" x="left-[200px]" y="top-[385px]" width="w-[110px]" height="h-[110px]" />

            {/* Third Row: Three Boxes with the first box opposite to the information box */}
            <Square color="bg-[#FFA500]" x="left-[400px]" y="top-[370px]" width="w-[190px]" height="h-[180px]" />
            <Square color="bg-[#008B8B]" x="left-[630px]" y="top-[185px]" width="w-[110px]" height="h-[120px]" />
            <Square color="bg-red-600" x="left-[610px]" y="top-[370px]" width="w-[120px]" height="h-[120px]" />
            
            <MainCard />

            {/* Info Text Top Right */}
            <div className="absolute left-[445px] top-[100px] max-w-[400px] ">
              <h2 className="text-2xl font-default">INFORMATION</h2>
              <p className="text-sm text-gray-600  ">
              AI-based CRM system for smarter customer 
              </p>
            </div>

            {/* Icon Cards */}
            <IconCard icon={<Network size={50} />} x="left-[80px]" y="top-[100px]" width="w-[125px]" height="h-[125px]" />
            <IconCard icon={<RiCustomerService2Fill size={50} />} x="left-[250px]" y="top-[80px]" width="w-[155px]" height="h-[150px]" />
            <IconCard icon={<LuAperture size={50} />} x="left-[110px]" y="top-[255px]" width="w-[110px]" height="h-[95px]" />
            <IconCard icon={<ShoppingCart size={50} />} x="left-[520px]" y="top-[440px]" width="w-[125px]" height="h-[125px]" />
            <IconCard icon={<LuBadgeDollarSign size={50} />} x="left-[140px]" y="top-[460px]" width="w-[100px]" height="h-[100px]" />
            <IconCard icon={<FaUsers size={50} />} x="left-[370px]" y="top-[500px]" width="w-[110px]" height="h-[95px]" />
            <IconCard icon={<TbSettingsCheck size={50} />} x="left-[690px]" y="top-[150px]" width="w-[90px]" height="h-[90px]" />
            <IconCard icon={<HeartHandshake size={50} />} x="left-[510px]" y="top-[250px]" width="w-[180px]" height="h-[170px]" />
            <IconCard icon={<Lightbulb size={50} />} x="left-[680px]" y="top-[440px]" width="w-[90px]" height="h-[80px]" />

          </div>
        </div>
      </div>

      {/* 🔻 RESELLER SECTION AT BOTTOM 🔻 */}
     
      
    </>
  );
}

// Colored rectangle component
function Square({ color, x, y, width = "w-28", height = "h-16" }) {
  return (
    <div className={`absolute ${width} ${height} ${color} rounded-2xl ${x} ${y}`} />
  );
}

// White icon card (optional)
function IconCard({ icon, x, y, width = "w-20", height = "h-20" }) {
  return (
    <div
      className={`absolute ${width} ${height} bg-white border-2 border-bg-gray-400 rounded-2xl shadow flex items-center justify-center ${x} ${y}`}
    >
      {icon}
    </div>
  );
}

function MainCard() {
  return (
    <div className="absolute w-[240px] h-[220px] bg-white border-2 border-bg-gray-400  shadow rounded-2xl flex flex-col items-center justify-center left-[250px] top-[250px] z-10">
      < FaLaptop size={150} className="" />
      <p className="text-sm text-center text-gray-700 mt-1 px-1">
        Innovative Customer Relationship<br></br> Management.
      </p>
    </div>
  );
}
