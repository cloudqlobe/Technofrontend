import React from "react";
import image19 from "../assets/Image/—Pngtree—charming robot illustration operating laptop_20059321.png"; // adjust path if needed

export default function AboutUsSection() {
  return (
    <div className="bg-white px-8 py-12">
      {/* Top Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center">
  {/* Left Side */}
  <div className="w-full md:w-1/2 ml-[35px] max-w-xl text-center md:text-left mt-[-330px]">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
      <span className="text-blue-800">About </span>
      <span className="text-orange-500">TechnoMagic Solutions </span>
    </h2>
    <p className="text-gray-700 mb-6">
      TechnoMagic Solutions Pvt is a forward-thinking technology company committed to delivering innovative software and digital solutions. We specialize in custom ERP systems, web development, 
    </p>
   
    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 squared-xl font-semibold shadow-md transition">
        Get to Know Us
      </button>
      <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 squared-xl font-semibold shadow-md transition">
        Learn More
      </button>
    </div>
  </div>



        {/* Right Side - Infographic Cards */}
        <div className="relative w-full md:w-1/2 h-[600px] ml-[220px] mt-[-250px] scale-[0.85] origin-top-left">

          {/* Connecting Lines */}
          <div className="absolute left-[130px] top-[270px] h-[110px] w-2 bg-blue-500 z-0 shadow-lg rounded"></div>
          <div className="absolute left-[250px] top-[430px] w-[100px] h-2 bg-red-500 z-0 shadow-lg rounded"></div>
          <div className="absolute left-[600px] top-[125px] w-[173px] h-2 bg-orange-500 z-0 shadow-lg rounded"></div>
          {/* <div className="absolute left-[515px] top-[-60px] h-[100px] w-2 bg-orange-400 z-0 shadow-lg rounded"></div> */}
          <div className="absolute left-[500px] top-[210px] h-[70px] w-2 bg-green-500 z-0 shadow-lg rounded"></div>

          {/* Card: Analyse */}
          <div className="absolute top-[30px] left-[10px] w-[260px] h-[240px] p-6 bg-white border-[10px] border-blue-500 rounded-3xl shadow-2xl text-center z-10">
            <div className="text-5xl mb-2">📊</div>
            <h3 className="text-lg font-semibold">ANALYSE</h3>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-1 bg-blue-500 text-white rounded-xl text-sm shadow">CLICK HERE</button>
          </div>

          {/* Card: Idea */}
          <div className="absolute top-[370px] left-[70px] w-[190px] p-4 bg-white border-[10px] border-red-500 rounded-3xl shadow-2xl text-center z-10">
            <div className="text-4xl mb-2">💡</div>
            <h3 className="text-base font-semibold">IDEA</h3>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet.</p>
            <button className="mt-3 px-3 py-1 bg-red-500 text-white rounded-xl text-xs shadow">CLICK HERE</button>
          </div>

          {/* Card: Management */}
          <div className="absolute top-0 left-[280px] w-[190px] p-4 bg-white border-[10px] border-orange-400 rounded-3xl shadow-2xl text-center z-10 ml-[150px] mt-[40px]">
            <div className="text-4xl mb-2">🧑‍💼</div>
            <h3 className="text-base font-semibold">MANAGEMENT</h3>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet.</p>
            <button className="mt-3 px-3 py-1 bg-orange-400 text-white rounded-xl text-xs shadow">CLICK HERE</button>
          </div>

          {/* Card: Target Market */}
          <div className="absolute top-[280px] left-[250px] w-[250px] p-6 bg-white border-[10px] border-green-500 rounded-3xl shadow-2xl text-center z-10 ml-[100px]">
            <div className="text-5xl mb-2">🎯</div>
            <h3 className="text-lg font-semibold">TARGET MARKET</h3>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-1 bg-green-500 text-white rounded-xl text-sm shadow">CLICK HERE</button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Reseller */}
      <div className="w-[1510px] bg-[#F1F5F9] py-12 px-6 md:px-20 rounded-xl shadow-md mt-[-270px] ml-[60px] ml-[-30px] border border-bg-gray-400">
        <div className="max-w-9xl  flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
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

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={image19}
              alt="Reseller Opportunity"
              className="object-contain h-64 md:h-80 w-80 md:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
