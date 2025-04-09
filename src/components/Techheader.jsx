import React from 'react';
import { FaLaptopCode, FaCog, FaChartLine, FaCloud, FaUsers, FaDatabase } from 'react-icons/fa';

const TechConsultancy = () => {
  const techIcons = [
    <FaLaptopCode size={30} className="text-blue-400" />,
    <FaCog size={30} className="text-blue-400" />,
    <FaChartLine size={30} className="text-blue-400" />,
    <FaCloud size={30} className="text-blue-400" />,
    <FaUsers size={30} className="text-blue-400" />,
    <FaDatabase size={30} className="text-blue-400" />,
  ];

  return (
    <div className="flex justify-between bg-white text-black py-16 px-6 md:px-20">
      {/* Left: Content */}
      <div className="w-full md:w-1/2 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Expert Tech Consultancy Services
        </h2>
        <p className="text-lg">
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

      {/* Right: Monitor with Scrolling Icons */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="absolute w-64 h-64 bg-white rounded-xl flex justify-center items-center shadow-lg border-4 border-gray-300">
          <div className="relative flex flex-col space-y-4">
            {techIcons.map((icon, index) => (
              <div
                key={index}
                className="animate-scrollIcon absolute top-0"
                style={{
                  animation: `scrollIcon 12s linear infinite`,
                  animationDelay: `${index * 2}s`, // Delay each icon to scroll one after another
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechConsultancy;
