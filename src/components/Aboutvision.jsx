import React from 'react';
import { Eye } from 'lucide-react';

const Aboutvision = () => {
  return (
    <div className="relative bg-white text-gray-900 py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center bg-blue-100 p-4 rounded-full w-fit shadow-md">
            <Eye size={36} className="text-blue-600 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-700">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To shape a world where businesses thrive through technology-driven creativity. We envision delivering solutions that don’t just work — they inspire.
          </p>
          <p className="text-blue-500 font-semibold italic text-base">
            — Innovate. Empower. Transform.
          </p>
        </div>

        {/* Right Side: Image or Visual */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-8125.jpg"
            alt="Vision Illustration"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutvision;
