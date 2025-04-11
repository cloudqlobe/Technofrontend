import React from 'react';
import image22 from '../assets/Image/14786-Picsart-AiImageEnhancer-removebg-preview.png';
import {
  FaUser,
  FaUserAlt,
  FaUserPlus,
  FaUserCircle,
  FaUserEdit,
  FaUsers,
  FaUserFriends,
  FaUserLock,
  FaUserShield,
  FaUserTimes,
  FaUserMd,
} from 'react-icons/fa';

const designFeatures = [
  { name: 'UI Design', icon: <FaUser size={24} className="text-orange-400" /> },
  { name: 'UX Design', icon: <FaUserAlt size={24} className="text-orange-400" /> },
  { name: 'Prototyping', icon: <FaUserPlus size={24} className="text-orange-400" /> },
  { name: 'Wireframing', icon: <FaUserCircle size={24} className="text-orange-400" /> },
  { name: 'Interaction Design', icon: <FaUserEdit size={24} className="text-orange-400" /> },
  { name: 'Responsive Design', icon: <FaUsers size={24} className="text-orange-400" /> },
  { name: 'UI Components', icon: <FaUserFriends size={24} className="text-orange-400" /> },
  { name: 'User Testing', icon: <FaUserLock size={24} className="text-orange-400" /> },
];

const DesignServices = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Text + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              UI/UX Design Services
            </h2>
            <p className="text-white text-lg">
              Our design services focus on creating intuitive, user-friendly interfaces and experiences that connect with your audience. From wireframing to user testing, we bring your ideas to life with attention to detail.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src={image22}
              alt="UI/UX Design Illustration"
               className="w-full max-w-[500px] h-[500px] "
            />
          </div>
        </div>

        {/* Bottom: Full-width Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-blue-800 p-6 rounded-xl">
          {designFeatures.map((feature, index) => (
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

export default DesignServices;
