import React, { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  Bot,
  PlugZap,
  Headphones,
  Languages,
  UserCheck,
  Workflow,
  LayoutDashboard,
  BarChart3,
} from "lucide-react";

const BotFormTech = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // handle form submission
  };

  return (
    <div className="bg-blue-900 text-white py-10 px-6 md:px-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-4">
            Revolutionize Customer Interactions with Our Bot Solution
          </h2>
          <p className="text-lg mb-6 text-blue-100 leading-relaxed text-justify">
            Our bot animation system streamlines customer support and communication. From AI-powered chatbots to automated responses, enhance user experience and drive engagement with cutting-edge technology. Start automating your customer interactions today!
          </p>
        </div>

        {/* Right Side Circular Form */}
        <div className="relative flex justify-center mt-[-20px]">
          {/* Left side icons */}
          <div className="absolute left-[40px] top-1/2 transform -translate-y-[60px] space-y-4 z-20">
            <div className="bg-yellow-400 text-blue-900 p-4 rounded-full shadow-md text-xl">
              <Mail size={24} />
            </div>
            <div className="bg-green-400 text-blue-900 p-4 rounded-full shadow-md text-xl">
              <FaPhoneAlt size={24} />
            </div>
          </div>

          {/* Right side icons */}
          <div className="absolute right-[40px] top-1/2 transform -translate-y-[60px] space-y-4 z-20">
            <div className="bg-orange-400 text-blue-900 p-4 rounded-full shadow-md text-xl">
              <MessageSquare size={24} />
            </div>
            <div className="bg-pink-400 text-blue-900 p-4 rounded-full shadow-md text-xl">
              <Send size={24} />
            </div>
          </div>

          <div className="relative w-[320px] h-[320px] bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 rounded-full border-[8px] border-orange-400 shadow-2xl flex items-center justify-center overflow-hidden">
            {/* User Icon */}
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
                    className="w-[100px] h-[45px] flex items-center justify-center text-white font-bold text-sm rounded-lg bg-gradient-to-br from-green-400 to-green-600 shadow-[0_4px_0_#2e7d32] hover:shadow-[0_2px_0_#2e7d32] active:translate-y-1 transition-all duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-[100px] h-[45px] flex items-center justify-center text-white font-bold text-sm rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_4px_0_#2e7d32] hover:shadow-[0_2px_0_#2e7d32] active:translate-y-1 transition-all duration-200"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom: Tech Icon Tabs Section */}
      <section className="max-w-[1350px] bg-blue-800 py-16 mt-20 mx-auto px-6 md:px-20 space-y-8 squared-2xl border border-blue-600 shadow-md ml-[-3px]">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <FeatureCard icon={<Bot size={32} />} label="Bot Features" />
          <FeatureCard icon={<PlugZap size={32} />} label="Integration Options" />
          <FeatureCard icon={<BarChart3 size={32} />} label="Analytics & Insights" />
          <FeatureCard icon={<Headphones size={32} />} label="Support" />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <FeatureCard icon={<Languages size={32} />} label="Multilingual Chat" />
          <FeatureCard icon={<UserCheck size={32} />} label="Live Agent Handoff" />
          <FeatureCard icon={<Workflow size={32} />} label="Custom Workflows" />
          <FeatureCard icon={<LayoutDashboard size={32} />} label="Dashboard Access" />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, label }) => (
  <div className="w-[250px] h-[100px] bg-blue-600 text-white rounded-xl border-2 border-orange-500 flex flex-col items-center justify-center hover:bg-blue-500 transition duration-300">
    <div className="text-orange-500 mb-2">{icon}</div>
    <span className="text-center text-sm font-medium">{label}</span>
  </div>
);

export default BotFormTech;
