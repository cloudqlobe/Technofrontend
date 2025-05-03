import React from 'react';
import image2 from '../assets/Image/-robot-promotion-drink-with-isolated_38049140.png';
import {
  Bot,
  PlugZap,
  BarChart3,
  Headphones,
  Languages,
  UserCheck,
  Workflow,
  LayoutDashboard
} from 'lucide-react';

const Botanimation = () => {
  return (
    <div className="bg-blue-900 text-white py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Content with Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Revolutionize Customer Interactions with Our Bot Solution
          </h2>
          <p className="text-lg mb-6 text-blue-100 leading-relaxed">
            Our bot animation system streamlines customer support and communication. From AI-powered chatbots to automated responses, 
            enhance user experience and drive engagement with cutting-edge technology. Start automating your customer interactions today!
          </p>
        </div>

        {/* Right: Bot Image */}
        <div className="flex justify-center">
          <div className="relative w-[360px] h-[450px] overflow-hidden rounded-xl">
            <img
              src={image2}
              alt="Bot Animation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom: Tabs Section - Two Rows with Orange Border and Icons */}
      <section className="bg-blue-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-6">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-blue-500 transition duration-300">
              <Bot size={18} /> Bot Features
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-blue-500 transition duration-300">
              <PlugZap size={18} /> Integration Options
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-blue-500 transition duration-300">
              <BarChart3 size={18} /> Analytics & Insights
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-blue-500 transition duration-300">
              <Headphones size={18} /> Support
            </button>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-blue-500 transition duration-300">
              <Languages size={18} /> Multilingual Chat
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-blue-500 transition duration-300">
              <UserCheck size={18} /> Live Agent Handoff
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-blue-500 transition duration-300">
              <Workflow size={18} /> Custom Workflows
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-blue-500 transition duration-300">
              <LayoutDashboard size={18} /> Dashboard Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Botanimation;
