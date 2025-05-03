import React from 'react';
import {
  LayoutDashboard, ClipboardList, Users, BarChart,
  TimerReset, MessageSquareMore, Layers3, BellRing
} from "lucide-react";

const Pmanimation = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Manage Projects Efficiently with Our Tool
          </h2>
          <p className="text-lg mb-6 text-blue-100 leading-relaxed">
            Our Project Management System helps you streamline workflows, collaborate in real time, 
            and keep track of your team's progress. Simplify task management, set deadlines, and get the insights you need for success.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-400">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project Management Animation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <p className="text-white text-xl font-bold">Project Management in Action</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs with Icons */}
      <section className="bg-blue-800 py-16 mt-20 rounded-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-12">

          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <LayoutDashboard size={32} />
              <span className="mt-2 font-semibold">Project Dashboard</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <ClipboardList size={32} />
              <span className="mt-2 font-semibold">Task Management</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <Users size={32} />
              <span className="mt-2 font-semibold">Collaboration Tools</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <BarChart size={32} />
              <span className="mt-2 font-semibold">Reports & Insights</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <TimerReset size={32} />
              <span className="mt-2 font-semibold">Time Tracking</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <MessageSquareMore size={32} />
              <span className="mt-2 font-semibold">Real-Time Chat</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <Layers3 size={32} />
              <span className="mt-2 font-semibold">Kanban Boards</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <BellRing size={32} />
              <span className="mt-2 font-semibold">Reminders & Alerts</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Pmanimation;
