import React from 'react';
import image9 from "../assets/Image/2011.i039.004..big data science analysis isometric set.jpg";
import {
  Settings, Layers, BarChart3, LifeBuoy,
  Package, MonitorSmartphone, RefreshCw, ShieldCheck
} from "lucide-react";

const Erpanimation = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Streamline Your Business with ERP Solutions
          </h2>
          <p className="text-lg mb-6 text-blue-100 leading-relaxed">
            Our ERP system provides a centralized platform to manage business processes, from financials to operations. 
            Automate workflows, improve efficiency, and gain deeper insights into your data with a comprehensive solution tailored to your needs.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="relative w-70 h-70">
            <img
              src={image9}
              alt="ERP Animation"
              className="w-full max-w-md "
            />
          </div>
        </div>
      </div>

      {/* Bottom Tabs with Icons + Labels */}
      <section className="bg-blue-800 py-16 mt-20 rounded-xl shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-10">

          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <Settings size={30} />
              <span className="mt-2 font-medium">ERP Features</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <Layers size={30} />
              <span className="mt-2 font-medium">Integration Options</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <BarChart3 size={30} />
              <span className="mt-2 font-medium">Analytics & Insights</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <LifeBuoy size={30} />
              <span className="mt-2 font-medium">Support</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <Package size={30} />
              <span className="mt-2 font-medium">Inventory</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <MonitorSmartphone size={30} />
              <span className="mt-2 font-medium">Mobile Access</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <RefreshCw size={30} />
              <span className="mt-2 font-medium">Automation</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <ShieldCheck size={30} />
              <span className="mt-2 font-medium">Security</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Erpanimation;
