import React from 'react';
import image1 from '../assets/Image/4667617.jpg'; // Project planning image
import image2 from '../assets/Image/6072171.jpg'; // Team collaboration image

const Pmcontents1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Streamlined <span className="text-blue-800">Project Management Software</span> for Every Business
      </h1>

      {/* Project Planning Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="Project Planning"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mb-4">
            Efficient <span className="text-orange-400">Project Planning</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[20px]">
            Our project management software empowers businesses to plan smarter and execute with precision. From setting up milestones to assigning team responsibilities, every aspect of project organization becomes seamless. Visual tools like Gantt charts, task boards, and dynamic timelines provide clarity and control over project timelines, dependencies, and deliverables. You can manage resources, track workloads, and adjust project flows effortlessly as team priorities evolve.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            With advanced features like automated task reminders, project templates, time estimation, and budget planning, you minimize the risks of delays and scope creep. Real-time dashboards keep stakeholders informed, and built-in analytics allow for performance tracking and post-project reviews. Whether managing internal workflows or client-facing projects, our platform offers the flexibility and structure required to ensure successful delivery, every time.
          </p>
        </div>
      </div>

      {/* Team Collaboration Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[-24px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200 mb-4 mt-[40px]">
            Unified <span className="text-orange-400">Team Collaboration</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our collaboration features are designed to keep everyone in sync—no matter where they work. Built-in messaging, file sharing, mentions, and real-time comment threads eliminate communication barriers across departments. Teams can collaborate directly within tasks and projects, reducing the need for endless meetings or third-party chat tools. Everything is documented and searchable, so no context is lost, and all ideas are accessible.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            The platform also includes role-based permissions, version control, and integration with popular communication and storage tools like Microsoft Teams, Google Drive, Zoom, and Slack. Project members receive timely updates and can view activity logs, ensuring transparency and accountability. From onboarding new teammates to managing remote collaboration, our software brings efficiency, clarity, and connection into every project you manage.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Team Collaboration"
            className="w-[85%] h-[450px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Pmcontents1;
