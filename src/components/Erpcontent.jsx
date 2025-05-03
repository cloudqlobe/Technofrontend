import React from "react";
import image4 from "../assets/Image/5031659.jpg";
import image5 from "../assets/Image/10197785.jpg";
import image6 from "../assets/Image/5024152.jpg";
import Erpcontents1 from "./Erpcontents1";

const Erpcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        ERP <span className="text-blue-800">Design & Development Solutions</span>
      </h1>

      {/* ERP UI/UX Design Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="ERP Design"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">User-Centric <span className="text-blue-600">ERP Interface Design</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            ERP systems need to be functional, but also intuitive. Our design team creates clean and efficient user interfaces that simplify complex processes and improve user adoption. Every screen is tailored to streamline your workflows and make operations smoother.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            From dashboards to detailed modules, our UI/UX design ensures accessibility, responsiveness, and visual clarity across all user roles — be it finance, HR, inventory, or project management.
          </p>
        </div>
      </div>

      {/* ERP Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Comprehensive <span className="text-blue-600">ERP Development</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our development team builds scalable, secure ERP systems that centralize and automate business operations. We use modern frameworks and robust architectures to ensure your ERP handles real-time transactions and large data volumes effortlessly.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            From core modules like finance and HR to custom-built features, we provide fully integrated solutions tailored to your business logic — enhancing collaboration and operational efficiency across departments.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="ERP Development"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px]"
          />
        </div>
      </div>

      {/* Custom ERP Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Custom ERP Solutions"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">Tailored <span className="text-blue-600">ERP Solutions</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            We understand that every organization has unique processes. Our custom ERP solutions are designed around your workflows—whether it’s multi-location inventory management, supply chain automation, or advanced reporting.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            Our goal is to build ERP systems that not only meet your current needs but scale with your growth. We integrate third-party services, support mobile dashboards, and offer real-time analytics for informed business decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Erpcontent;
