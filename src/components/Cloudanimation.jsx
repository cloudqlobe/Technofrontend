import React from 'react';
import image2 from '../assets/Image/49445.jpg';
import {
  Cloud,
  Server,
  UploadCloud,
  ShieldCheck,
  RefreshCcw,
  Database,
  Lock,
  Settings,
  Globe,
  MonitorSmartphone,
} from 'lucide-react';

const CloudAnimation = () => {
  return (
    <div className="bg-blue-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Powerful Cloud Infrastructure for Modern Businesses
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            Scale your applications and data with confidence. Our cloud solutions offer secure, reliable, and fast infrastructure tailored to your business needs.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <Cloud className="text-white" size={20} />
              Scalable Cloud Architecture
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-white" size={20} />
              Advanced Security & Compliance
            </li>
            <li className="flex items-center gap-3">
              <UploadCloud className="text-white" size={20} />
              Seamless Data Sync & Backup
            </li>
            <li className="flex items-center gap-3">
              <RefreshCcw className="text-white" size={20} />
              Continuous Deployment & Updates
            </li>
          </ul>

          
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="relative w-[600px] h-[600px] rounded-xl overflow-hidden">
            <img
              src={image2}
              alt="Cloud Computing"
              className="w-full h-full object-contain p-6"
            />
          </div>
        </div>
      </div>

      {/* Bottom: Tabs Section */}
      <section className="bg-blue-800 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-6">

          {/* Top Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <TabButton icon={<Server size={28} />} label="Infrastructure" />
            <TabButton icon={<Cloud size={28} />} label="Cloud Services" />
            <TabButton icon={<UploadCloud size={28} />} label="Backup" />
            <TabButton icon={<Database size={28} />} label="Cloud DB" />
            <TabButton icon={<Settings size={28} />} label="Auto Scaling" />
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <TabButton icon={<ShieldCheck size={28} />} label="Security" />
            <TabButton icon={<Lock size={28} />} label="IAM" />
            <TabButton icon={<MonitorSmartphone size={28} />} label="Monitoring" />
            <TabButton icon={<RefreshCcw size={28} />} label="Deployment" />
            <TabButton icon={<Globe size={28} />} label="Global CDN" />
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Tab Button
const TabButton = ({ icon, label }) => (
  <button className="bg-blue-600 border-2 border-orange-500 text-white py-4 px-8 min-w-[180px] rounded-lg hover:bg-blue-500 transition flex items-center justify-center gap-3 text-lg">
    {icon}
    {label}
  </button>
);

export default CloudAnimation;
