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
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-3xl font-semibold text-yellow-400 mb-4 ml-[-38px]">
            Powerful Cloud Infrastructure for Modern Businesses
          </h2>
          <p className="text-lg mb-6 text-blue-100 text-justify leading-relaxing ml-[-38px]">
            Scale your applications and data with confidence. Our cloud solutions offer secure, reliable, and fast infrastructure tailored to your business needs.
          </p>
          
        </div>

        {/* Right Image */}
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

      {/* Bottom: Button Grid */}
      <section className=" max-w-[1350px] bg-blue-800 py-12 mt-12">
        <div className=" mx-auto px-6 md:px-20 space-y-10">

          {/* Row 1 */}
          <div className="flex justify-center flex-wrap gap-10">
            <TabButton icon={<Server className="text-yellow-400" size={28} />} label="Infrastructure" />
            <TabButton icon={<Cloud className="text-yellow-400" size={28} />} label="Cloud Services" />
            <TabButton icon={<UploadCloud className="text-yellow-400" size={28} />} label="Backup" />
            <TabButton icon={<Database className="text-yellow-400" size={28} />} label="Cloud DB" />
            
          </div>

          {/* Row 2 */}
          <div className="flex justify-center flex-wrap gap-10">
            <TabButton icon={<ShieldCheck className="text-yellow-400" size={28} />} label="Security" />
            <TabButton icon={<Lock className="text-yellow-400" size={28} />} label="IAM" />
            <TabButton icon={<MonitorSmartphone className="text-yellow-400" size={28} />} label="Monitoring" />
            <TabButton icon={<RefreshCcw className="text-yellow-400" size={28} />} label="Deployment" />
            
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Button Component
const TabButton = ({ icon, label }) => (
  <button className="bg-blue-600 border-2 border-yellow-400 text-white py-6 px-8 w-[220px] rounded-lg hover:bg-blue-500 transition flex items-center justify-center gap-3 text-base">
    {icon}
    {label}
  </button>
);

export default CloudAnimation;
