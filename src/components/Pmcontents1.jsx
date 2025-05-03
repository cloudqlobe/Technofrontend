import React from 'react';
import image1 from '../assets/Image/4667617.jpg'; // Replace with your actual image
import image2 from '../assets/Image/6072171.jpg'; // Replace with your actual image
import Designcontent from './Designcontent';

const Pmcontents1 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font- semibold text-gray-800 mb-16">
        Cutting-Edge <span className="text-blue-800">Project Management</span> Solutions
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="Project Management"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-gray-800">Streamline Your</span>{' '}
            <span className="text-blue-700">Project Workflow</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our project management solutions help businesses efficiently manage their projects from start to finish. Whether it’s software development, marketing campaigns, or infrastructure projects, we ensure that every task is tracked, deadlines are met, and resources are optimized for success.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We provide robust tools for project planning, task assignment, progress tracking, and collaboration, all while fostering transparency across teams. Our goal is to ensure that every project is delivered on time, within scope, and on budget.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With custom workflows, real-time reporting, and powerful analytics, we help your team stay organized and focused on achieving project goals, whether working in the office or remotely.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="Project Management Tools"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-gray-600">Collaborative Tools</span>{' '}
            <span className="text-blue-800">for Seamless Project Delivery</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed  mb-4">
            We offer a range of collaborative tools that improve team communication, document sharing, and overall project coordination. From Gantt charts and Kanban boards to time tracking and task management, our solutions make it easy to keep everyone on the same page.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our project management systems ensure complete visibility of every task, making it easier to identify potential bottlenecks and resolve issues before they impact your project timeline. We empower teams to collaborate effectively, increase productivity, and reduce project risks.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With real-time updates, automated notifications, and centralized documentation, our platform helps your team stay aligned and focused on delivering the best results for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pmcontents1;
