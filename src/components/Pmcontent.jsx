import React from "react";
import image4 from "../assets/Image/4197677.jpg";
import image5 from "../assets/Image/6502432.jpg";
import image6 from "../assets/Image/5397869.jpg";

const Pmcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Project <span className="text-blue-800">Management Development</span> Solutions
      </h1>

      {/* Project Planning Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Project Planning"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Smart <span className="text-blue-600">Project Planning</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Empower your teams with intelligent planning tools that simplify task allocation, timeline tracking, and resource management. We build custom project planning modules to suit your workflow.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our focus is to reduce complexity while giving you control over every step of the project lifecycle. Expect intuitive UIs and real-time updates to keep your teams aligned.
          </p>
        </div>
      </div>

      {/* Task Management Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Efficient <span className="text-blue-600">Task Management</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our development ensures that every task, milestone, and deadline is monitored through a centralized system. We integrate task automation and smart notifications to boost productivity.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether you’re managing a single project or multiple teams, our solutions scale to meet your evolving needs, offering clarity and control at every stage.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Task Management"
            className="w-[100%] h-[450px] object-cover rounded-lg mt-[50px]"
          />
        </div>
      </div>

      {/* Reporting and Analytics Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Reporting and Analytics"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">Insightful <span className="text-blue-600">Analytics</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            Make informed decisions with real-time dashboards and comprehensive reporting tools. We create custom analytics that highlight key project metrics and team performance.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            Our reporting modules are built to support strategic planning and retrospective analysis, helping you improve efficiency and deliver better results over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pmcontent;
