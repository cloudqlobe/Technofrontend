import React from "react";
import image26 from '../assets/Image/97ec0abf-3ba8-4ee5-99f5-cf02780b30aa.jpg';
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
      <section className="w-full bg-white py-20 px-6 md:px-20 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-[160px] ml-[30pxpx]">

          {/* LEFT SIDE – Content */}
          <div className="max-w-xl text-center md:text-left mt-[-110px] ml-[-60px]">
            <h2 className="text-4xl font-semibold mb-4 whitespace-nowrap">
              <span className="text-blue-800">Powerful & Flexible </span>
              <span className="text-orange-500">Cloud Computing</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Leverage secure, scalable, and on-demand cloud solutions for your applications, infrastructure, and business operations — anytime, anywhere.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 squared-lg font-semibold shadow">
                Explore Cloud Solutions
              </button>
              <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 squared-lg font-semibold shadow">
                View Cloud Plans
              </button>
            </div>
          </div>

          {/* RIGHT SIDE – Centered Icon Columns */}
          <div className="max-w-7xl md:w-1/2 mt-[-40px]">
            <div className="flex justify-center gap-8 mt-[-10px]">

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
      <section className="max-w-8xl bg-[#F1F5F9] py-12 mt-[10px]  border border-gray-300">
        <div className="max-w-8xl flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-orange-600 drop-shadow-sm">
              Become a Reseller
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
              Start your own business with zero development hassle. Offer world-class web design
              and development services under your brand, powered by us.
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

          <div className="md:w-1/2 flex justify-end relative z-20 -my-20 md:-my-32">
            <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] rounded-xl" />
            <img
              src={image26}
              alt="Reseller Opportunity"
              className="h-80 md:h-[480px] w-80 md:w-[750px] object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Designheader;
