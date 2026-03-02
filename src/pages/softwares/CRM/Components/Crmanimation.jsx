import React, { useState } from 'react';
import {
  LayoutDashboard,
  LineChart,
  Megaphone,
  FileBarChart,
  Users,
  Workflow,
  Contact,
  MessageSquare,
  Send,
  Mail,
  User
} from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';

const Crmanimation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // You can add API submission logic here
  };

  return (
    <div className="bg-blue-900 text-white py-8 md:py-16 px-4 sm:px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left: Content with Description */}
        <div className="text-center md:text-left px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-3 md:mb-4 md:ml-[-38px]">
            Build Stronger Customer Relationships with CRM
          </h2>
          <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed text-justify md:ml-[-38px]">
            Our CRM system helps you manage customer interactions, track sales, and automate marketing efforts. With our powerful tools, you can enhance customer satisfaction and drive growth.
          </p>
        </div>

        {/* Right: Circle Form */}
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

      {/* Bottom: Features Grid */}
      <section className="max-w-[1350px] bg-blue-800 py-8 md:py-12 mt-8 md:mt-16">
        <div className="mx-auto px-4 sm:px-6 md:px-20 space-y-6 md:space-y-10">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6 md:gap-x-10 md:gap-y-10">
            {[
              ['Customer Dashboard', LayoutDashboard],
              ['Sales Tracking', LineChart],
              ['Marketing Automation', Megaphone],
              ['Reports & Insights', FileBarChart],
              ['Lead Management', Users],
              ['Workflow Automation', Workflow],
              ['Contact Segmentation', Contact],
              ['Feedback & Surveys', MessageSquare]
            ].map(([label, Icon], index) => (
              <button key={index} className="flex flex-col items-center gap-2 border border-yellow-400 bg-blue-600 text-white py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 rounded-lg hover:bg-blue-500 transition duration-300 w-[140px] sm:w-[180px] md:w-[220px]">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-orange-400" />
                <span className="text-xs sm:text-sm font-medium text-center">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crmanimation;