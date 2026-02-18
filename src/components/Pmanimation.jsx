import React, { useState } from 'react';
import {
  LayoutDashboard, ClipboardList, Users, BarChart,
  TimerReset, MessageSquareMore, Layers3, BellRing,
  User, Mail, MessageSquare, Send
} from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

const Pmanimation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => setStep(prev => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="bg-blue-900 text-white py-12 md:py-16 px-4 sm:px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400">
            Transform Your Business with Smart Project Management
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-justify md:text-left">
            Our project management solutions empower businesses to streamline operations, enhance collaboration, and deliver results with precision. Whether you're managing client deliverables, internal workflows, or long-term strategies, our tools help teams stay aligned, deadlines met, and resources optimized.
          </p>
        </div>

        {/* Right Circle Form */}
         {/* Right: Circle Form */}
              <div className="relative flex justify-center">
                        {/* Left icons */}
                        <div className="absolute left-0 sm:left-6 top-1/2 -translate-y-1/2 space-y-4 z-20">
                          <div className="bg-yellow-400 text-blue-900 p-3 sm:p-4 rounded-full shadow-md">
                            <Mail size={20} />
                          </div>
                          <div className="bg-green-400 text-blue-900 p-3 sm:p-4 rounded-full shadow-md">
                            <FaPhoneAlt size={20} />
                          </div>
                        </div>
              
                        {/* Right icons */}
                        <div className="absolute right-0 sm:right-6 top-1/2 -translate-y-1/2 space-y-4 z-20">
                          <div className="bg-orange-400 text-blue-900 p-3 sm:p-4 rounded-full shadow-md">
                            <MessageSquare size={20} />
                          </div>
                          <div className="bg-pink-400 text-blue-900 p-3 sm:p-4 rounded-full shadow-md">
                            <Send size={20} />
                          </div>
                        </div>
              
                        {/* Circle */}
                        <div
                          className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] 
                          bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 
                          rounded-full border-[6px] sm:border-[8px] border-orange-400 
                          shadow-2xl flex items-center justify-center overflow-hidden"
                        >
                          {/* User Icon */}
                          <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-20">
                            <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-white text-blue-900 rounded-full flex items-center justify-center shadow-lg">
                              <User size={28} />
                            </div>
                          </div>
              
                          {/* Form */}
                          <form
                            onSubmit={handleSubmit}
                            className="w-[85%] space-y-3 text-blue-900 text-sm absolute z-10 pt-16 sm:pt-20"
                          >
                            {step === 1 && (
                              <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                              />
                            )}
              
                            {step === 2 && (
                              <input
                                type="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                              />
                            )}
              
                            {step === 3 && (
                              <input
                                type="text"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                              />
                            )}
              
                            <div className="pt-3 flex justify-center">
                              {step < 3 ? (
                                <button
                                  type="button"
                                  onClick={handleNext}
                                  className="w-[100px] h-[42px] text-white font-bold rounded-lg bg-gradient-to-br from-green-400 to-green-600 shadow-md hover:scale-105 transition"
                                >
                                  Next
                                </button>
                              ) : (
                                <button
                                  type="submit"
                                  className="w-[100px] h-[42px] text-white font-bold rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-md hover:scale-105 transition"
                                >
                                  Submit
                                </button>
                              )}
                            </div>
                          </form>
                          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <section className="bg-blue-800 max-w-[1348px] py-12 md:py-16 mt-16 md:mt-20 rounded-xl shadow-lg">
        <div className="mx-auto px-4 sm:px-6 md:px-20 space-y-8 md:space-y-12">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {[["Project Dashboard", LayoutDashboard],
              ["Task Management", ClipboardList],
              ["Collaboration Tools", Users],
              ["Reports & Insights", BarChart]].map(([label, Icon], idx) => (
                <div key={idx} className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 md:p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
                  <Icon size={26} />
                  <span className="mt-2 text-sm md:text-base font-semibold">{label}</span>
                </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {[["Time Tracking", TimerReset],
              ["Real-Time Chat", MessageSquareMore],
              ["Kanban Boards", Layers3],
              ["Reminders & Alerts", BellRing]].map(([label, Icon], idx) => (
                <div key={idx} className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-4 md:p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
                  <Icon size={26} />
                  <span className="mt-2 text-sm md:text-base font-semibold">{label}</span>
                </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Pmanimation;
