import React from 'react';
import image22 from '../assets/Image/gpvg_tm01_220118.jpg';
import {
  FaServer,
  FaCloudUploadAlt,
  FaLock,
  FaShieldAlt,
  FaGlobe,
  FaHeadset,
  FaDatabase,
  FaSync,
} from 'react-icons/fa';

const hostingFeatures = [
  { name: 'Dedicated Servers', icon: <FaServer size={24} className="text-orange-400" /> },
  { name: 'Cloud Hosting', icon: <FaCloudUploadAlt size={24} className="text-orange-400" /> },
  { name: 'SSL Security', icon: <FaLock size={24} className="text-orange-400" /> },
  { name: 'DDoS Protection', icon: <FaShieldAlt size={24} className="text-orange-400" /> },
  { name: 'Global CDN', icon: <FaGlobe size={24} className="text-orange-400" /> },
  { name: '24/7 Support', icon: <FaHeadset size={24} className="text-orange-400" /> },
  { name: 'Database Hosting', icon: <FaDatabase size={24} className="text-orange-400" /> },
  { name: 'Automated Backups', icon: <FaSync size={24} className="text-orange-400" /> },
];

const HostingServices = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Text + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4 ml-[-40px]">
              Hosting Services
            </h2>
            <p className=" text-white mt-3 leading-relaxing text-lg text-justify ml-[-40px]">
              Our hosting solutions are built for performance, scalability, and security. Whether
              you're running a simple website or complex infrastructure, we provide the tools and
              support you need to thrive online.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src={image22}
              alt="Hosting Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Bottom: Full-width Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-blue-800 p-8 rounded-xl w-[1350px] ml-[-40px]">
          {hostingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-900 p-6 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition duration-300 border-2 border-yellow-400"
            >
              {feature.icon}
              <p className="mt-3 text-center font-medium">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostingServices;
