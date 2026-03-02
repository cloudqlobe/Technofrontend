import React from "react";
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

const Cloudheader = () => {
  return (
    <>
      {/* ☁️ Cloud Computing Section */}
<section className="
  w-full
  min-h-[800px] xl:min-h-[728px]
  bg-white
  py-12 xl:py-20
  px-6 xl:px-20
  mt-[80px] xl:mt-0
">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-10 xl:mt-[160px] mt-0 xl:ml-[30px] ml-0">

          {/* LEFT SIDE – Content */}
          <div className="max-w-xl text-center xl:text-left xl:mt-[-100px] mt-0 xl:ml-[-48px] ml-0">
            <h1 className="text-2xl sm:text-3xl xl:text-4xl font-semibold mb-4 xl:whitespace-nowrap whitespace-normal">
              <span className="text-blue-800">Enterprise-Grade </span>
              <span className="text-orange-500">Cloud Infrastructure</span>
            </h1>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed text-center sm:text-justify xl:ml-[5px] ml-0">
              Harness secure, scalable, and globally distributed cloud architecture—built for high availability and peak performance. Our solutions enable faster deployments, cost efficiency, data resilience, and real-time collaboration, all while ensuring compliance and operational reliability.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center xl:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-orange-500 text-white px-6 sm:px-7 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-600 transition w-full sm:w-auto"
              >
                Get Started 
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="border border-gray-500 text-gray-900 px-6 sm:px-7 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto"
              >
                Learn More 
              </motion.button>
            </div>
          </div>

          {/* RIGHT SIDE – Icon Grid (Hidden below xl/1280px, visible on xl+) */}
          <div className="hidden xl:block xl:w-1/2 mt-[-40px]">
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

          {/* TABLET & MOBILE: Simple Icon Grid (visible below xl/1280px) */}
          <div className="block xl:hidden w-full mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {cloudFeatures.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center shadow-md text-white transition-transform duration-300 transform hover:scale-110 cursor-pointer ${item.color}`}
                  >
                    {React.cloneElement(item.icon, { size: 32 })}
                  </div>
                  <h4 className="font-semibold text-orange-600 mt-3 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Cloudheader;