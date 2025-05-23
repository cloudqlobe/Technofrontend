import React, { useState } from "react";
import image7 from "../assets/Image/380621791_11479203.svg";

const techIcons = [
  { emoji: "⚛️", label: "React.js", desc: "Component-based frontend library" },
  { emoji: "📦", label: "Next.js", desc: "React framework with SSR support" },
  { emoji: "🎨", label: "Tailwind CSS", desc: "Utility-first CSS framework" },
  { emoji: "📜", label: "JavaScript", desc: "Core scripting language of the web" },
  { emoji: "🌐", label: "Node.js", desc: "JavaScript runtime for backend" },
  { emoji: "🚏", label: "Express.js", desc: "Minimalist backend web framework" },
  { emoji: "🍃", label: "MongoDB", desc: "NoSQL document database" },
  { emoji: "🐬", label: "MySQL", desc: "Relational database system" },
  { emoji: "☁️", label: "AWS", desc: "Cloud infrastructure platform" },
  { emoji: "🚀", label: "Vercel", desc: "Fast frontend deployment platform" },
  { emoji: "🔧", label: "GitHub", desc: "Code hosting & collaboration" },
  { emoji: "🎯", label: "Figma", desc: "UI/UX design & prototyping tool" },
];

const Webanimation = () => {
  return (
    <div className="w-full min-h-screen px-6 md:px-10 py-14 bg-[#1E3A8A] text-white">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-14 ">
        {/* Left - Content */}
        <div className="ml-[40px] mt-[-50px]">
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            Build Powerful <span className="text-yellow-400">Web Solutions</span>
          </h2>
          <p className="text-lg text-gray-200 mb-4 leading-relaxing text-justify">
          From responsive design to dynamic backend systems, we build web solutions that are fast, modern, and scalable. Our expert team creates seamless user experiences using cutting-edge technologies. We focus on crafting robust websites with unique patterns and strategic architecture. Every project is tailored to meet your business goals with precision and efficiency.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center items-center">
          <img
            src={image7}// Replace with your actual image path
            alt="Web Design Illustration"
            className="w-full max-w-md rounded-xl "
          />
        </div>
      </div>

      {/* Bottom Section - Tech Icons */}
      <div className="mt-[-10px] text-center">
  <h3 className="text-4xl font-semibold text-yellow-400 mb-12">
    Technologies We Work With
  </h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-[1350px] mx-auto mb-[30px] ml-[40px]">
    {techIcons.map((tech, index) => (
      <div
        key={index}
        className="bg-white/10 border-2 border-orange-400 p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
        title={tech.label}
      >
        <div className="text-4xl mb-2">{tech.emoji}</div>
        <span className="text-sm font-semibold mb-1">{tech.label}</span>
        <p className="text-xs text-center text-gray-300">{tech.desc}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Webanimation;
