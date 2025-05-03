import React from "react";
import image4 from "../assets/Image/5922860.jpg";
import image5 from "../assets/Image/4990138.jpg";
import image6 from "../assets/Image/5_communication02.jpg";
import Crmcontent1 from "./Crmcontent1";

const Crmcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        CRM <span className="text-blue-800">Development Solutions</span>
      </h1>

      {/* CRM Strategy & Design Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="CRM Strategy"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Strategic <span className="text-blue-600">CRM Planning</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            A successful CRM begins with a solid strategy. We start by identifying your business goals, customer touchpoints, and internal workflows. With this foundation, we create a roadmap for CRM implementation that boosts productivity, collaboration, and customer satisfaction.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our CRM solutions are not just tools — they’re enablers of customer-centric growth. Whether you need lead tracking, lifecycle marketing, or service automation, we tailor the features and modules to your exact requirements. 
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            From onboarding new customers to managing post-sales support, our strategic design ensures every stakeholder has access to the right data, right when they need it.
          </p>
        </div>
      </div>

      {/* CRM Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Custom <span className="text-blue-600">CRM Development</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            We develop fully custom CRM platforms that work the way you do — not the other way around. Built using modern technologies and secure backend frameworks, our CRMs ensure real-time data access, fast performance, and reliable security.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Whether you're managing sales funnels, customer feedback, support tickets, or internal teams, our CRM systems streamline everything into a unified dashboard. You’ll get advanced features like role-based access control, smart analytics, and real-time reporting.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our approach includes scalable architecture, easy customization, and cloud hosting options—making your CRM future-proof, mobile-friendly, and built to grow with your business.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="CRM Development"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px]"
          />
        </div>
      </div>

      {/* CRM Integration & Automation Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="CRM Integration"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">Intelligent <span className="text-blue-600">CRM Automation</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            Streamline your customer operations with intelligent CRM automation. Our systems are equipped with tools that automate lead distribution, email follow-ups, status updates, invoice generation, and more — saving your team valuable time.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            We also enable seamless integration with your marketing platforms, social media tools, email clients, and third-party APIs to ensure that your CRM becomes the central hub of all business operations.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            With built-in analytics and performance tracking, you gain actionable insights into customer behavior and campaign success. Empower your team with the data they need to convert leads faster and serve clients better — all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crmcontent;
