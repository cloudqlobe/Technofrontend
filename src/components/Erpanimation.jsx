import React, { useState } from 'react';
import image9 from "../assets/Image/2011.i039.004..big data science analysis isometric set.jpg";
import {
  Settings, Layers, BarChart3, LifeBuoy,
  Package, MonitorSmartphone, RefreshCw, ShieldCheck,
  Mail, MessageSquare, Send, User
} from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

const Erpanimation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div>
          <h2 className="text-3xl md:text-3xl font-semibold text-yellow-400 mb-4 ml-[-40px]">
            Streamline Your Business with ERP Solutions
          </h2>
          <p className="text-lg mb-6 text-blue-100 leading-relaxed text-justify ml-[-40px]">
            Our ERP system provides a centralized platform to manage business processes, from financials to operations. 
            Automate workflows, improve efficiency, and gain deeper insights into your data with a comprehensive solution tailored to your needs.
          </p>
        </div>

        {/* Right: Circular Form */}
        <div className="relative flex justify-center mt-[-20px]">
          {/* Left icons */}
          <div className="absolute left-[40px] top-1/2 transform -translate-y-[60px] space-y-4 z-20">
            <div className="bg-yellow-400 text-blue-900 p-4 rounded-full shadow-md">
              <Mail size={24} />
            </div>
            <div className="bg-green-400 text-blue-900 p-4 rounded-full shadow-md">
              <FaPhoneAlt size={24} />
            </div>
          </div>

          {/* Right icons */}
          <div className="absolute right-[40px] top-1/2 transform -translate-y-[60px] space-y-4 z-20">
            <div className="bg-orange-400 text-blue-900 p-4 rounded-full shadow-md">
              <MessageSquare size={24} />
            </div>
            <div className="bg-pink-400 text-blue-900 p-4 rounded-full shadow-md">
              <Send size={24} />
            </div>
          </div>

          <div className="relative w-[320px] h-[320px] bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 rounded-full border-[8px] border-orange-400 shadow-2xl flex items-center justify-center overflow-hidden">
            {/* User icon */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-[80px] h-[80px] bg-white text-blue-900 rounded-full flex items-center justify-center shadow-lg">
                <User size={38} />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-[85%] space-y-3 text-blue-900 text-sm absolute z-10 pt-20">
              {step === 1 && (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              )}
              {step === 2 && (
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              )}
              {step === 3 && (
                <input
                  type="text"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              )}

              <div className="pt-3 flex justify-center">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-[100px] h-[45px] text-white font-bold rounded-lg bg-gradient-to-br from-green-400 to-green-600 shadow-[0_4px_0_#2e7d32] hover:shadow-[0_2px_0_#2e7d32] active:translate-y-1 transition-all duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-[100px] h-[45px] text-white font-bold rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_4px_0_#2e7d32] hover:shadow-[0_2px_0_#2e7d32] active:translate-y-1 transition-all duration-200"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Tabs with Icons + Labels */}
      <section className="max-w-[1348px] bg-blue-800 py-16 mt-20 rounded-xl shadow-md">
        <div className="mx-auto px-6 md:px-18 space-y-10">

          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{
              icon: <Settings size={30} />, label: "ERP Features"
            }, {
              icon: <Layers size={30} />, label: "Integration Options"
            }, {
              icon: <BarChart3 size={30} />, label: "Analytics & Insights"
            }, {
              icon: <LifeBuoy size={30} />, label: "Support"
            }].map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
                {item.icon}
                <span className="mt-2 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{
              icon: <Package size={30} />, label: "Inventory"
            }, {
              icon: <MonitorSmartphone size={30} />, label: "Mobile Access"
            }, {
              icon: <RefreshCw size={30} />, label: "Automation"
            }, {
              icon: <ShieldCheck size={30} />, label: "Security"
            }].map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 hover:bg-yellow-400 hover:text-blue-900 transition-all">
                {item.icon}
                <span className="mt-2 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Erpanimation;
