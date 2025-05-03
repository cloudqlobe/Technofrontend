import React from "react";
import image4 from "../assets/Image/10625917.jpg";
import image5 from "../assets/Image/6502435.jpg";
import image6 from "../assets/Image/6224584.jpg";

const Techcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        End-to-End <span className="text-blue-800">Tech Consultancy Solutions</span>
      </h1>

      {/* Tech Strategy Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Tech Strategy"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">
            Strategic <span className="text-blue-600">Technology Planning</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Unlock your digital potential with strategic technology planning tailored to your business objectives. Our consultancy services are designed to align your tech vision with market demands, helping you stay ahead in a rapidly evolving digital landscape. Whether you're launching a startup or transforming an enterprise, we deliver actionable strategies that ensure every tech decision serves your long-term vision.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            We conduct deep-dive assessments to understand your current ecosystem, identify key gaps, and map out a sustainable tech roadmap. This includes everything from selecting the right cloud services to planning AI integrations, automation frameworks, and more. Our expert consultants help you reduce risk, improve ROI, and innovate faster with clarity and confidence.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            We don’t just suggest tools—we become your partners in growth, helping you choose scalable platforms, optimize workflows, and stay competitive in your industry.
          </p>
        </div>
      </div>

      {/* Systems & Architecture Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">
            Reliable <span className="text-blue-600">Systems & Architecture</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Building the foundation for scalable tech requires solid architectural choices. Our consultants design robust system architectures that support high availability, data integrity, and business continuity. We work across cloud-native and hybrid environments, using the latest patterns such as microservices, containerization, event-driven architectures, and serverless systems.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Every organization has unique demands—whether it’s handling thousands of users, syncing data across systems, or maintaining low latency. We engineer solutions that meet these needs while allowing for future expansion. Our approach involves extensive documentation, risk mitigation, integration planning, and performance tuning.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            The result? A resilient and adaptive architecture that minimizes downtime, improves user experience, and supports your growth without constant overhauls.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="System Architecture"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px]"
          />
        </div>
      </div>

      {/* Audits & Optimization Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Tech Audits"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">
            In-Depth <span className="text-blue-600">Tech Audits & Optimization</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            Are your systems underperforming, vulnerable, or simply outdated? Our tech audits reveal what’s slowing your business down. From backend infrastructure to front-end performance and cybersecurity, we provide a full health check of your tech stack.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            We analyze load handling, API efficiency, code quality, database queries, server configurations, and more. Based on our findings, you’ll receive a detailed report outlining inefficiencies, potential security threats, and bottlenecks—along with practical optimization strategies.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            Optimization isn’t just about speed—it’s about boosting reliability, reducing costs, and preparing your platform for scale. Let our consultants future-proof your tech infrastructure and improve operational excellence across all areas of your digital ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Techcontent;
