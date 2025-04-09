import React from "react";
import {
  MonitorSmartphone,
  PenTool,
  Paintbrush,
  Figma,
  Ruler,
  Brush,
  SquareCode,
} from "lucide-react";

const tools = [
  { name: "Figma", icon: <Figma className="w-6 h-6 text-orange-500" /> },
  { name: "Adobe XD", icon: <Brush className="w-6 h-6 text-pink-600" /> },
  { name: "Sketch", icon: <PenTool className="w-6 h-6 text-yellow-500" /> },
  { name: "Zeplin", icon: <Ruler className="w-6 h-6 text-blue-600" /> },
  { name: "Canva", icon: <Paintbrush className="w-6 h-6 text-cyan-500" /> },
  { name: "Framer", icon: <SquareCode className="w-6 h-6 text-purple-500" /> },
];

const Designheader = () => {
  return (
    <>
      {/* UI/UX Design Header Section */}
      <section className="w-full bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-6">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4 leading-tight">
              Creative UI/UX Design Services
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              We craft intuitive, visually appealing digital experiences that keep your users engaged
              and coming back. Let design speak louder than words.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl px-6 py-3 shadow-md">
                Get Started
              </button>
              <button className="border border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold rounded-xl px-6 py-3">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Monitor Design with Tools Inside */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-96 h-80 bg-gray-100 rounded-3xl border-4 border-orange-300 shadow-lg flex flex-col justify-center items-center px-4">
              <div className="absolute top-4 left-4 flex gap-3">
                <Figma className="w-6 h-6 text-orange-400" />
                <Paintbrush className="w-6 h-6 text-blue-400" />
                <PenTool className="w-6 h-6 text-pink-500" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1 text-xs text-gray-700"
                  >
                    {tool.icon}
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
              <p className="absolute bottom-4 text-sm text-gray-600 font-medium">
                UI/UX Tool Showcase
              </p>
              {/* Monitor Stand */}
              <div className="absolute -bottom-8 w-32 h-5 bg-orange-300 rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reseller Section */}
      <section className="w-screen bg-[#F1F5F9] py-12 mt-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-orange-600 drop-shadow-sm">
              Become a Reseller
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
              Start your own business with zero development hassle. Offer world-class web design
              and development services under your brand, powered by us.
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
              src="https://img.freepik.com/premium-photo/vibrant-whimsical-illustration-featuring-social-media-day_1201937-571.jpg"
              alt="Reseller Opportunity"
              className="object-contain h-64 md:h-80 w-80 md:w-[400px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Designheader;
