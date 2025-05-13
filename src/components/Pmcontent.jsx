import React from "react";
import image4 from "../assets/Image/4197677.jpg";
import image5 from "../assets/Image/6502432.jpg";
import image6 from "../assets/Image/5397869.jpg";

const Pmcontents = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-10 mt-10">
        Scalable <span className="text-blue-800">Project Management Systems & Software Solutions</span>
      </h1>

      {/* Section 1: Task & Workflow Automation */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-16 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Task and Workflow"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[57px]">
          <h2 className="text-4xl font-default text-gray-800 mb-2">
            Efficient <span className="text-orange-500">Task & Workflow Management</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify mt-6">
            Our project management system provides a centralized dashboard where users can create, assign, prioritize, and track tasks across customizable workflows. With drag-and-drop interfaces and visual kanban or Gantt boards, teams gain complete visibility into each stage of execution. Recurring tasks, time tracking, reminders, and deadline alerts help streamline daily operations and maintain focus on high-impact priorities—resulting in better productivity and consistent output across the board.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-4">
            Teams can categorize and group projects by client, department, timeline, or urgency while applying industry-standard templates for agile, waterfall, or hybrid methods. Dependencies, approvals, and sub-task hierarchies allow for better control over complex deliverables. Managers can evaluate team capacity and performance through real-time insights and reassign workloads instantly to avoid burnout. This eliminates chaos, minimizes human error, and increases accountability at every organizational level.
          </p>
        </div>
      </div>

      {/* Section 2: Team Collaboration Tools */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-gray-800 mb-4">
            Real-Time <span className="text-orange-500">Team Collaboration</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify mt-4">
            Our platform brings distributed teams together with integrated messaging, file sharing, video conferencing, and real-time notifications. Chat threads, @mentions, and inline comments reduce the need for external communication tools, while collaborative editing ensures everyone stays on the same page. Teams can sync calendars, schedule virtual meetings, and coordinate deliverables without jumping between apps—saving time and avoiding confusion.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-4">
            With role-based access control, sensitive information is always secure, and external clients or stakeholders can collaborate with limited visibility where needed. Shared boards and feedback threads increase transparency and help reduce repetitive follow-ups. Team members can work together from anywhere, on any device, making it easy to brainstorm, co-author proposals, or track updates in real-time. This results in fewer miscommunications and a unified, agile working experience.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Team Collaboration"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px] ml-[30px]"
          />
        </div>
      </div>

      {/* Section 3: Analytics, Reporting & Integrations */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Analytics and Custom Modules"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px]">
          <h2 className="text-4xl font-default text-gray-800 mb-4 mt-16">
            Insightful <span className="text-orange-500">Analytics, Custom Modules & Integrations</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify mt-4">
            Our analytics suite transforms raw project data into actionable insights with customizable dashboards, charts, and reports. Whether you’re tracking time spent, progress rates, financial metrics, or user activity—everything is captured and displayed with clarity. Managers can schedule automated reports, visualize milestones, and identify risks early through AI-driven predictions. These insights not only track current performance but also drive strategic planning and team optimization.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-4">
            Our platform supports integrations with CRMs, ERPs, communication tools, and cloud storage systems like Google Drive, Slack, Trello, and more. With open APIs and customizable modules, you can build functionality around your existing systems, automate cross-platform workflows, and avoid double data entry. Use custom triggers to push or pull data between tools, manage your business logic more efficiently, and extend your solution with modules tailored to your industry’s unique requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pmcontents;
