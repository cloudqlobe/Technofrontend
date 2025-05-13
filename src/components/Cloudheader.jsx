import React from "react";
import image26 from '../assets/Image/97ec0abf-3ba8-4ee5-99f5-cf02780b30aa.jpg';
import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Server,
  CloudUpload,
  CloudDrizzle,
  CloudCog
} from "lucide-react";

const cloudFeatures = [
  { title: "Cloud Computing", icon: <Cloud />, color: "bg-sky-500", desc: "On-demand computing" },
  { title: "Cloud Storage", icon: <Database />, color: "bg-sky-400", desc: "Secure cloud data" },
  { title: "Cloud Backup", icon: <CloudUpload />, color: "bg-green-400", desc: "Automated data backups" },
  { title: "Cloud Platform", icon: <CloudDrizzle />, color: "bg-yellow-400", desc: "Platform as a service" },
  { title: "SaaS", icon: <CloudCog />, color: "bg-red-400", desc: "Software as a Service apps" },
  { title: "Data Center", icon: <Server />, color: "bg-green-500", desc: "Modern data infrastructure" },
];

const Designheader = () => {
  return (
    <>
      {/* ☁️ Cloud Computing Section */}
      <section className="w-full h-[728px] bg-white py-20 px-6 md:px-20 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-[160px] ml-[30pxpx]">

          {/* LEFT SIDE – Content */}
          <div className="max-w-xl text-center md:text-left mt-[-100px] ml-[-48px]">
  <h2 className="text-4xl font-semibold mb-4 whitespace-nowrap">
    <span className="text-blue-800">Enterprise-Grade </span>
    <span className="text-orange-500">Cloud Infrastructure</span>
  </h2>
  <p className="text-gray-700 mb-6 text-sm leading-relaxed text-justify ml-[5px]">
  Harness secure, scalable, and globally distributed cloud architecture—built for high availability and peak performance. Our solutions enable faster deployments, cost efficiency, data resilience, and real-time collaboration, all while ensuring compliance and operational reliability.
</p>

  <div className="mt-10 flex space-x-5">
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-orange-500 text-white px-7 py-3 squared-lg text-lg font-semibold hover:bg-orange-600 transition text-justify leading-relaxed">
      Get Started 
    </motion.button>
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-gray-500 text-gray-900 px-7 py-3 squared-lg text-lg font-semibold hover:bg-gray-300 transition">
      Learn More 
    </motion.button>
  </div>
</div>


          {/* RIGHT SIDE – Centered Icon Columns */}
          <div className="max-w-7xl md:w-1/2 mt-[-40px] ">
            <div className="flex justify-center gap-8 mt-[-10px] ml-[100px]">

              {/* LEFT TEXT (for right icons) */}
              <div className="flex flex-col justify-between gap-6 text-right pr-2">
                {cloudFeatures.slice(3, 6).map((item, i) => (
                  <div key={i} className="w-40">
                    <h4 className="font-semibold text-orange-600">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CENTER LEFT ICONS */}
              <div className="flex flex-col gap-6">
                {cloudFeatures.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    className={`w-24 h-24 rounded-lg flex items-center justify-center shadow-md text-white transition-transform duration-300 transform hover:scale-110 cursor-pointer ${item.color}`}
                  >
                    {React.cloneElement(item.icon, { size: 36 })}
                  </div>
                ))}
              </div>

              {/* CENTER RIGHT ICONS */}
              <div className="flex flex-col gap-6">
                {cloudFeatures.slice(3, 6).map((item, i) => (
                  <div
                    key={i}
                    className={`w-24 h-24 rounded-lg flex items-center justify-center shadow-md text-white transition-transform duration-300 transform hover:scale-110 cursor-pointer ${item.color}`}
                  >
                    {React.cloneElement(item.icon, { size: 36 })}
                  </div>
                ))}
              </div>

              {/* RIGHT TEXT (for left icons) */}
              <div className="flex flex-col justify-between gap-6 text-left pl-2">
                {cloudFeatures.slice(0, 3).map((item, i) => (
                  <div key={i} className="w-40">
                    <h4 className="font-semibold text-orange-600">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 🔻 Become a Reseller Section – Bottom 🔻 */}
      
    </>
  );
};

export default Designheader;
