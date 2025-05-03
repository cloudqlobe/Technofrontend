import React from 'react';
import {
  FaServer,
  FaCloud,
  FaDatabase,
  FaCloudUploadAlt,
  FaCogs,
  FaShieldAlt,
} from 'react-icons/fa';
import image19 from '../assets/Image/—Pngtree—ai robot_18121576.png';

const icons = [
  { icon: <FaServer />, label: 'Dedicated Server', color: 'bg-red-600' },
  { icon: <FaCloud />, label: 'Cloud Hosting', color: 'bg-blue-600' },
  { icon: <FaDatabase />, label: 'Database', color: 'bg-green-600' },
  { icon: <FaCloudUploadAlt />, label: 'Cloud Upload', color: 'bg-purple-600' },
  { icon: <FaCogs />, label: 'Managed Services', color: 'bg-yellow-500' },
  { icon: <FaShieldAlt />, label: 'Security', color: 'bg-orange-600' },
];

const HostingHeader = () => {
  return (
    <>
      <style>{`
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-12px); }
          60% { transform: translateY(6px); }
        }
        .icon-bounce {
          animation: iconBounce 2s ease-in-out infinite;
        }
      `}</style>

      <section className="flex flex-col lg:flex-row items-center justify-between bg-white text-gray-800 px-6 py-16">
        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left mt-[10px] ml-[40px]">
  <h2 className="text-4xl font-semibold mb-4 whitespace-nowrap">
    <span className="text-blue-800">Reliable & Scalable </span>
    <span className="text-orange-500">Hosting Services</span>
  </h2>
  <p className="text-gray-700 mb-6">
    Get lightning-fast, secure, and scalable hosting solutions tailored for websites, web apps, and business platforms.
  </p>
  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 squared-lg font-semibold shadow">
      Get Hosting Now
    </button>
    <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 squared-lg font-semibold shadow">
      View Plans
    </button>
  </div>
</div>



        {/* Right Side Icons */}
        <div className="lg:w-1/2 w-full grid grid-cols-3 gap-x-10 gap-y-10 justify-center items-center">
          {icons.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full shadow-xl ${item.color} mb-2 transition-transform duration-300 transform hover:scale-110`}
              >
                <div
                  className="text-white text-4xl icon-bounce"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {item.icon}
                </div>
              </div>
              <p className="text-sm text-gray-700 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Reseller Section */}
      <div className="w-full bg-[#F1F5F9] py-12 px-6 md:px-20 rounded-xl shadow-md mt-[110px]  border border-gray-300">
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
};

export default HostingHeader;
