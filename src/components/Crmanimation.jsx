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
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Content with Description */}
        <div>
          <h2 className="text-3xl md:text-3xl font-semibold text-yellow-400 mb-4 ml-[-38px]">
            Build Stronger Customer Relationships with CRM
          </h2>
          <p className="text-lg mb-6 leading-relaxed text-justify ml-[-38px]">
            Our CRM system helps you manage customer interactions, track sales, and automate marketing efforts. With our powerful tools, you can enhance customer satisfaction and drive growth.
          </p>
        </div>

        {/* Right: Circle Form */}
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

      {/* Bottom: Features Grid */}
      <section className="max-w-[1350px] bg-blue-800 py-12 mt-16">
        <div className="mx-auto px-6 md:px-20 space-y-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
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
              <button key={index} className="flex flex-col items-center gap-2 border border-yellow-400 bg-blue-600 text-white py-6 px-8 rounded-lg hover:bg-blue-500 transition duration-300 w-[220px]">
                <Icon className="w-10 h-10 text-orange-400" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crmanimation;
