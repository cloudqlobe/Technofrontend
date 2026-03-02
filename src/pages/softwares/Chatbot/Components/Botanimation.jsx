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
    console.log(formData);
  };

  return (
    <div className="bg-blue-900 text-white py-10 px-4 sm:px-6 md:px-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-4">
            Revolutionize Customer Interactions with Our Bot Solution
          </h2>
          <p className="text-lg mb-6 text-blue-100 leading-relaxed text-justify">
            Our bot animation system streamlines customer support and communication. From AI-powered chatbots to automated responses, enhance user experience and drive engagement with cutting-edge technology. Start automating your customer interactions today!
          </p>
        </div>

        {/* Right Side Circular Form */}
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

      {/* Bottom Feature Section */}
      <section className="max-w-[1350px] bg-blue-800 py-16 mt-20 mx-auto px-4 sm:px-6 md:px-20 border border-blue-600 shadow-md">
        {/* 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          <FeatureCard icon={<Bot size={32} />} label="Bot Features" />
          <FeatureCard icon={<PlugZap size={32} />} label="Integration Options" />
          <FeatureCard icon={<BarChart3 size={32} />} label="Analytics & Insights" />
          <FeatureCard icon={<Headphones size={32} />} label="Support" />
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
  <div className="w-full max-w-[250px] h-[100px] bg-blue-600 text-white rounded-xl border-2 border-orange-500 flex flex-col items-center justify-center hover:bg-blue-500 transition duration-300">
    <div className="text-orange-500 mb-2">{icon}</div>
    <span className="text-center text-sm font-medium">{label}</span>
  </div>
);

export default BotFormTech;
