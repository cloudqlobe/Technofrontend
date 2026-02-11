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
  <div className="bg-blue-900 text-white py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-20 overflow-hidden">
    <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left: Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4 lg:ml-[-40px]">
            Premium Hosting Services for Your Digital Presence
          </h2>

          <p className="text-white text-base sm:text-lg text-justify leading-relaxed lg:ml-[-40px]">
            Our hosting solutions deliver unmatched performance, scalability, and security to ensure your business thrives online. From basic websites to high-performance applications, we provide the infrastructure and support needed to meet your growth demands.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src={image22}
            alt="Hosting Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-4 
        gap-4 sm:gap-5 md:gap-6 
        bg-blue-800 
        p-4 sm:p-6 md:p-8 
        rounded-xl 
        w-full 
        min-[1410px]:w-[1350px] 
        min-[1410px]:ml-[-40px]"
      >
        {hostingFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-900 p-5 sm:p-6 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition duration-300 border-2 border-yellow-400"
          >
            {feature.icon}
            <p className="mt-3 text-center font-medium text-sm sm:text-base">
              {feature.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
);

};

export default HostingServices;