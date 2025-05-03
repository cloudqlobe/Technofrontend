import React from "react";
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
import image19 from '../assets/Image/—Pngtree—ai robot_18121576.png';

export default function CRMSection() {
  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center px-2 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - CONTENT */}
          <div className="max-w-xl text-center md:text-left mt-[-340px] ml-[-47px]">

  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    <span className="text-blue-800">Custom </span>
    <span className="text-orange-500">CRM Development</span>
  </h2>
  <p className="text-gray-700 mb-6">
    We build tailored CRM solutions to streamline your sales, support, and customer engagement workflows. Optimize client relationships with automation, analytics, and seamless integrations.
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

          {/* RIGHT SIDE - CRM Design */}
          <div className="relative w-full h-[650px] right-[130px] top-[-100px]">

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
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit ametmavsjhabnbnasbnn
              </p>
            </div>

            {/* Icon Cards */}
            <IconCard icon={<Network size={40} />} x="left-[80px]" y="top-[100px]" width="w-[125px]" height="h-[125px]" />
            <IconCard icon={<Headphones size={30} />} x="left-[250px]" y="top-[80px]" width="w-[155px]" height="h-[150px]" />
            <IconCard icon={<TrendingUp size={30} />} x="left-[110px]" y="top-[255px]" width="w-[110px]" height="h-[95px]" />
            <IconCard icon={<ShoppingCart size={30} />} x="left-[520px]" y="top-[440px]" width="w-[125px]" height="h-[125px]" />
            <IconCard icon={<BadgeCheck size={30} />} x="left-[140px]" y="top-[460px]" width="w-[100px]" height="h-[100px]" />
            <IconCard icon={<Users size={30} />} x="left-[370px]" y="top-[500px]" width="w-[110px]" height="h-[95px]" />
            <IconCard icon={<Settings size={30} />} x="left-[690px]" y="top-[150px]" width="w-[90px]" height="h-[90px]" />
            <IconCard icon={<HeartHandshake size={30} />} x="left-[510px]" y="top-[250px]" width="w-[180px]" height="h-[170px]" />
            <IconCard icon={<Lightbulb size={30} />} x="left-[680px]" y="top-[440px]" width="w-[90px]" height="h-[80px]" />

          </div>
        </div>
      </div>

      {/* 🔻 RESELLER SECTION AT BOTTOM 🔻 */}
      <div className="w-full bg-[#F1F5F9] py-12 px-6 md:px-20 rounded-xl shadow-md mt-[-200px] border border-gray-300">
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

          {/* Image Side */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={image19}
              alt="Reseller Opportunity"
              className="object-contain h-64 md:h-80 w-80 md:w-[400px]"
            />
          </div>
        </div>
      </div>
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
      <Laptop size={30} />
      <p className="text-[10px] text-center text-gray-700 mt-1 px-1">
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
}
