import React from 'react';
import {
  FaLaptopCode,
  FaCloud,
  FaDatabase,
  FaCog,
  FaShieldAlt,
  FaNetworkWired,
  FaMobileAlt,
  FaTools,
} from 'react-icons/fa';
import image2 from '../assets/Image/robottech.jpg';

const Techanimation = () => {
  const techIcons = [
    { icon: <FaLaptopCode size={24} className="text-blue-400" />, label: 'Software Development' },
    { icon: <FaCloud size={24} className="text-blue-400" />, label: 'Cloud Solutions' },
    { icon: <FaDatabase size={24} className="text-blue-400" />, label: 'Database Management' },
    { icon: <FaCog size={24} className="text-blue-400" />, label: 'Tech Support' },
    { icon: <FaShieldAlt size={24} className="text-blue-400" />, label: 'Cyber Security' },
    { icon: <FaNetworkWired size={24} className="text-blue-400" />, label: 'Network Setup' },
    { icon: <FaMobileAlt size={24} className="text-blue-400" />, label: 'Mobile Apps' },
    { icon: <FaTools size={24} className="text-blue-400" />, label: 'Maintenance' },
  ];

  return (
    <div className="bg-blue-900 text-white min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ml-[-45px]">
          <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
          Empower Your Business with Tech Consultancy
</h2>
<p className="text-white mt-3 leading-relaxing text-lg text-justify mt-[30px]">
  Our tech consultancy services provide businesses with innovative solutions to enhance efficiency and growth. We specialize in custom software development, cloud integration, and digital transformation. Let us help you implement the right technologies that fit your business needs and drive success.
</p>


           
          </div>
          <div className="flex justify-center">
            <img
              src={image2}
              alt="Tech Illustration"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-blue-800 p-10 squared-xl w-[1350px] mx-auto ml-[-40px]">
  <h3 className="text-2xl font-semibold text-yellow-400 text-center mb-8">Our Services</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
    {techIcons.map((tech, index) => (
      <div
        key={index}
        className="bg-blue-900 p-4 squared-lg flex flex-col items-center border border-yellow-400 shadow-md hover:shadow-lg transition duration-300 w-52"
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
