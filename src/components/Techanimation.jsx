import React from 'react';
import { FaLaptopCode, FaCloud, FaDatabase, FaCog } from 'react-icons/fa';
import image2 from '../assets/Image/robottech.jpg';

const Techanimation = () => {
  const techIcons = [
    { icon: <FaLaptopCode size={20} className="text-blue-400" />, label: 'Software Development' },
    { icon: <FaCloud size={20} className="text-blue-400" />, label: 'Cloud Solutions' },
    { icon: <FaDatabase size={20} className="text-blue-400" />, label: 'Database Management' },
    { icon: <FaCog size={20} className="text-blue-400" />, label: 'Tech Support' },
  ];

  return (
    <div className="bg-blue-900 text-white min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Section: Left Content + Right Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Transform Your Business with Expert Tech Solutions
            </h2>
            <p className="text-lg">
              Our tech consultancy and animation services help businesses embrace the latest technologies to innovate and grow. From software development to cloud solutions, we have the expertise to guide you through your digital transformation.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300 mt-4">
              Get a Demo
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src={image2}
              alt="Tech Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Bottom Section: Tabs with Tech Consultancy Icons */}
        <div className="bg-blue-800 p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-bold text-yellow-400 text-center">Our Services</h3>
          <div className="flex justify-center space-x-8">
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className="bg-blue-900 p-4 rounded-lg flex flex-col items-center shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-3">{tech.icon}</div>
                <p className="text-center text-sm font-medium">{tech.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Techanimation;
