import { useEffect, useState } from "react";
import image4 from '../assets/Image/49307.jpg';
import {
  Server,
  Cloud,
  Globe,
  Database,
  Network,
  ShieldCheck,
  Cpu,
} from "lucide-react";
 // Adjust path based on your setup

const hostingIcons = [
  { icon: Server, label: "Dedicated Server", color: "text-red-500" },
  { icon: Cloud, label: "Cloud Hosting", color: "text-blue-500" },
  { icon: Globe, label: "Domain Services", color: "text-green-500" },
  { icon: Database, label: "MySQL DB", color: "text-yellow-500" },
  { icon: Network, label: "VPS Hosting", color: "text-purple-500" },
  { icon: ShieldCheck, label: "Security", color: "text-teal-600" },
  { icon: Cpu, label: "Performance", color: "text-pink-500" },
];

export default function HostingPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % hostingIcons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = hostingIcons[current].icon;
  const color = hostingIcons[current].color;
  const label = hostingIcons[current].label;

  return (
    <div className="w-full">
      {/* Hosting Header */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 leading-tight">
              Premium Web Hosting Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Fast, secure, and scalable hosting tailored for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-6 py-2 shadow">
                Get a Quote
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold rounded-xl px-6 py-2">
                Get a Demo
              </button>
            </div>
          </div>

          {/* Right Monitor */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-96 h-72 bg-gray-100 rounded-3xl border-4 border-blue-300 flex flex-col items-center justify-center shadow-lg">
              <div className="w-28 h-28 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center transition-opacity duration-500">
                <CurrentIcon className={`w-14 h-14 ${color}`} />
              </div>
              <p className="absolute bottom-6 text-sm text-gray-600 font-medium">
                {label}
              </p>
              {/* Monitor stand */}
              <div className="absolute -bottom-8 w-32 h-5 bg-blue-300 rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reseller Section */}
      <section className="w-full bg-[#F1F5F9] py-12 px-6 md:px-20 rounded-xl shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
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

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={image4}
              alt="Reseller Opportunity"
              className="object-contain h-[300px] w-[300px] md:h-[300px] md:w-[450px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
