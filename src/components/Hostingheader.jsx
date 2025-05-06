import React from 'react';
import {
  FaServer,
  FaCloud,
  FaDatabase,
  FaCloudUploadAlt,
  FaCogs,
  FaShieldAlt,
} from 'react-icons/fa';


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

      <section className=" h-[600px] flex flex-col lg:flex-row items-center justify-between bg-white text-gray-800 px-6 py-16">
        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left mt-[-190px] ml-[50px]">
  <h2 className="text-4xl font-semibold mb-4 whitespace-nowrap">
    <span className="text-blue-800">Reliable & Scalable </span>
    <span className="text-orange-500">Hosting Services</span>
  </h2>
  <p className="text-gray-700 mb-6 leading-relaxing text-justify text-sm ml-[5px]">
    Get lightning-fast, secure, and scalable hosting solutions tailored for websites, web apps, and business platforms.
  </p>
  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 squared-lg font-semibold shadow ml-[5px]">
      Get Hosting Now
    </button>
    <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 squared-lg font-semibold shadow ml-[5px]">
      View Plans
    </button>
  </div>
</div>



        {/* Right Side Icons */}
        <div className="lg:w-1/2 w-full grid grid-cols-3 gap-x-10 gap-y-10 justify-center items-center mt-[-180px]">
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
     
    </>
  );
};

export default HostingHeader;
