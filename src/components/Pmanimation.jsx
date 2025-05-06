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
    // You can reset the form or show a success message
  };

  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-3xl font-semibold text-yellow-400 mt-[-20px] ml-[-40px]">
            Transform Your Business with Expert Tech Solutions
          </h2>
          <p className="text-white mt-3 leading-relaxing text-lg text-justify mt-[30px] ml-[-35px]">
            Our tech consultancy and animation services help businesses embrace the latest technologies to innovate and grow. From software development to cloud solutions,
          </p>
        </div>

        {/* Right Circle Form */}
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

          {/* Circular Form */}
          <div className="relative w-[320px] h-[320px] bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 rounded-full border-[8px] border-orange-400 shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-[80px] h-[80px] bg-white text-blue-900 rounded-full flex items-center justify-center shadow-lg">
                <User size={38} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="w-[85%] space-y-3 text-blue-900 text-sm absolute z-10 pt-20">
              {step === 1 && (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              )}
              {step === 2 && (
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              )}
              {step === 3 && (
                <input
                  type="text"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

      {/* Tabs Section */}
      <section className="bg-blue-800 max-w-[1348px] py-16 mt-20 rounded-xl shadow-lg">
        <div className="mx-auto px-6 md:px-20 space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[["Project Dashboard", LayoutDashboard],
              ["Task Management", ClipboardList],
              ["Collaboration Tools", Users],
              ["Reports & Insights", BarChart]].map(([label, Icon], idx) => (
                <div key={idx} className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
                  <Icon size={32} />
                  <span className="mt-2 font-semibold">{label}</span>
                </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[["Time Tracking", TimerReset],
              ["Real-Time Chat", MessageSquareMore],
              ["Kanban Boards", Layers3],
              ["Reminders & Alerts", BellRing]].map(([label, Icon], idx) => (
                <div key={idx} className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
                  <Icon size={32} />
                  <span className="mt-2 font-semibold">{label}</span>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pmanimation;
