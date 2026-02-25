import React from 'react';
import {
  FaServer,
  FaCloud,
  FaDatabase,
  FaCloudUploadAlt,
  FaCogs,
  FaShieldAlt,
} from 'react-icons/fa';
import { motion } from "framer-motion";

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

      <section className="w-full bg-white px-6 py-16 md:h-[750px] xl:h-[600px]">
        <div className="
          max-w-7xl mx-auto
          flex flex-col xl:flex-row
          items-center
          justify-between
          gap-16
        ">

          {/* LEFT CONTENT */}
          <div className="
            max-w-xl
            text-center xl:text-left
          ">
            <h1 className="text-3xl sm:text-4xl mb-4">
              <span className="text-blue-800">Reliable & Scalable </span>
              <span className="text-orange-500">Hosting Services</span>
            </h1>

            <p className="text-gray-700 mb-6 leading-relaxed text-sm text-center xl:text-justify">
              Experience fast, secure, and scalable hosting solutions designed for websites, web apps, and enterprise platforms. Our services ensure optimal performance with 24/7 monitoring and top-notch security. Enjoy seamless uptime and faster load speeds. Scale automatically to meet the growing demands of your digital presence.
            </p>

            <div className="
              mt-10
              flex flex-col sm:flex-row
              gap-4
              justify-center xl:justify-start
            ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-orange-500 text-white px-7 py-3 text-base font-semibold hover:bg-orange-600 transition"
              >
                Get Your Hosting Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-gray-500 text-gray-900 px-7 py-3 text-base font-semibold hover:bg-gray-300 transition"
              >
                Discover More Features
              </motion.button>
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="
            w-full xl:w-1/2
            flex flex-wrap
            justify-center xl:justify-between
            gap-10
          ">
            {icons.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-[140px]"
              >
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
                <p className="text-sm text-gray-700 text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default HostingHeader;
