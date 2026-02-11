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
  MonitorSmartphone,
} from 'lucide-react';

const CloudAnimation = () => {
  return (
    <div className="bg-blue-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Content */}
        <div className="px-4 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4 md:ml-[-38px]">
            Powerful Cloud Infrastructure for Modern Businesses
          </h2>
          <p className="text-base sm:text-lg mb-6 text-blue-100 text-justify leading-relaxed md:ml-[-38px]">
            Scale your applications and data with confidence. Our cloud 
            solutions offer secure, reliable, and fast infrastructure tailored to your business needs.
            Scale your applications and data with confidence. Our cloud solutions offer secure, reliable, and fast infrastructure tailored to your business needs.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden">
            <img
              src={image2}
              alt="Cloud Computing"
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>
      </div>

      {/* Bottom: Button Grid */}
      <section className="max-w-[1350px] bg-blue-800 py-8 sm:py-10 md:py-12 mt-8 sm:mt-10 md:mt-12 mx-auto rounded-lg md:rounded-none">
        <div className="mx-auto px-4 sm:px-6 md:px-20 space-y-6 sm:space-y-8 md:space-y-10">

          {/* Row 1 */}
          <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-10">
            <TabButton icon={<Server className="text-yellow-400" size={28} />} label="Infrastructure" />
            <TabButton icon={<Cloud className="text-yellow-400" size={28} />} label="Cloud Services" />
            <TabButton icon={<UploadCloud className="text-yellow-400" size={28} />} label="Backup" />
            <TabButton icon={<Database className="text-yellow-400" size={28} />} label="Cloud DB" />
          </div>

          {/* Row 2 */}
          <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-10">
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
  <button className="bg-blue-600 border-2 border-yellow-400 text-white py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-8 w-full sm:w-[180px] md:w-[220px] rounded-lg hover:bg-blue-500 transition flex items-center justify-center gap-3 text-sm sm:text-base">
    {icon}
    {label}
  </button>
);

export default CloudAnimation;