import React from 'react';
import {
  FaLaptopCode,
  FaCog,
  FaChartLine,
  FaCloud,
  FaUsers,
  FaDatabase,
} from 'react-icons/fa';
import image22 from '../assets/Image/61535.jpg';

const Techheader = () => {
  const techIcons = [
    <FaLaptopCode size={30} className="text-blue-400" />,
    <FaCog size={30} className="text-green-400" />,
    <FaChartLine size={30} className="text-yellow-500" />,
    <FaCloud size={30} className="text-purple-500" />,
    <FaUsers size={30} className="text-pink-500" />,
    <FaDatabase size={30} className="text-red-400" />,
  ];

  return (
    <>
      {/* Tech Consultancy Section */}
      <div className="flex flex-col md:flex-row justify-between bg-white text-black py-16 px-6 md:px-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Expert Tech Consultancy Services
          </h2>
          <p className="text-lg text-gray-700">
            Our tech consultancy services help your business scale with the latest technologies.
            Whether you need guidance on software development, cloud infrastructure, or digital transformation, we’re here to guide you.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-300">
              Get a Demo
            </button>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
              Get Consultancy
            </button>
          </div>
        </div>

        {/* Right Monitor */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <div className="relative w-64 h-64 bg-white rounded-xl flex justify-center items-center shadow-lg border-4 border-gray-300">
            <div className="relative flex flex-col space-y-4">
              {techIcons.map((icon, index) => (
                <div
                  key={index}
                  className="animate-scrollIcon absolute top-0"
                  style={{
                    animation: `scrollIcon 12s linear infinite`,
                    animationDelay: `${index * 2}s`,
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reseller Section */}
      <section className="w-full bg-[#F1F5F9] py-20">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
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
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src={image22}
              alt="Reseller Opportunity"
            className="h-80 md:h-[450px] w-80 md:w-[750px] object-contain"


            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Techheader;
