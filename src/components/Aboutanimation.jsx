import React, { useState } from "react";
import {
  Users,
  Target,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Brain,
  Globe,
  Code2,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPhoneAlt,
  FaMailBulk,
  FaSeedling,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaMessage } from "react-icons/fa6";

const OurVision = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setStep(1);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="bg-[#0a1d56] text-white py-24 px-6 sm:px-12">
      {/* Vision Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Vision Content */}
        <div className="md:w-1/2 space-y-6 mt-[-150px]">
          <h2 className="text-3xl md:text-3xl font-semibold text-yellow-400 ml-[-110px]">
            The Vision Behind Technomagic
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed text-justify ml-[-110px]">
            At <span className="text-white font-semibold">Technomagic Solutions</span>, our vision is to revolutionize
            the digital landscape by merging creativity with technology. We empower
            businesses through intelligent automation, user-centric design, and scalable
            solutions — built with purpose and passion.
          </p>
        </div>

        {/* Right: Vision Image with Form */}
        <div className="relative flex justify-center items-center gap-8 mt-[-20px] ml-[60px]">
          {/* Left side icons */}
          <div className="flex flex-col items-center justify-center gap-8 ml-[40px]">
            <div className="bg-yellow-400 text-blue-900 p-4 squared-lg shadow-md text-xl">
              <FaMailBulk size={24} />
            </div>
            <div className="bg-green-400 text-blue-900 p-4 squared-lg shadow-md text-xl">
              <FaPhoneAlt size={24} />
            </div>
          </div>

          {/* Circle with form */}
          <div className="relative w-[320px] h-[320px] bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 squared-full border-2 border-orange-400 shadow-2xl flex items-center justify-center overflow-hidden mx-auto">
            {/* User Icon */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-[80px] h-[80px] bg-white text-blue-900 rounded-full flex items-center justify-center shadow-lg">
                <User size={38} />
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-[85%] space-y-3 text-blue-900 text-sm absolute z-10 pt-20"
            >
              {step === 1 && (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              )}
              {step === 2 && (
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              )}
              {step === 3 && (
                <input
                  type="text"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              )}

              <div className="pt-3 flex justify-center">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-[100px] h-[45px] flex items-center justify-center text-white font-bold text-sm rounded-lg bg-gradient-to-br from-green-400 to-green-600 shadow-[0_4px_0_#2e7d32] hover:shadow-[0_2px_0_#2e7d32] active:translate-y-1 transition-all duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-[100px] h-[45px] flex items-center justify-center text-white font-bold text-sm rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_4px_0_#2e7d32] hover:shadow-[0_2px_0_#2e7d32] active:translate-y-1 transition-all duration-200"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right side icons */}
          <div className="flex flex-col items-center justify-center gap-8 mr-[30px]">
            <div className="bg-orange-400 text-blue-900 p-4 squared-lg shadow-md text-xl">
              <FaMessage size={24} />
            </div>
            <div className="bg-pink-400 text-blue-900 p-4 squared-lg shadow-md text-xl">
              <FaSeedling size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-24 max-w-[1350px] bg-[#0e255f] px-6 py-12 rounded-2xl border border-blue-700 shadow-lg ml-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: <Users size={48} className="text-yellow-400 mb-4" />,
              title: "People-First",
              desc: "Collaboration and empathy are at the heart of everything we build.",
            },
            {
              icon: <Target size={48} className="text-yellow-400 mb-4" />,
              title: "Goal-Oriented",
              desc: "We align technology with business outcomes that truly matter.",
            },
            {
              icon: <Lightbulb size={48} className="text-yellow-400 mb-4" />,
              title: "Innovation-Led",
              desc: "We turn bold ideas into scalable, user-centric digital products.",
            },
            {
              icon: <Rocket size={48} className="text-yellow-400 mb-4" />,
              title: "Fast Execution",
              desc: "We believe in shipping fast, iterating faster, and always learning.",
            },
            {
              icon: <ShieldCheck size={48} className="text-yellow-400 mb-4" />,
              title: "Secure by Design",
              desc: "Security is embedded at every layer of our development process.",
            },
            {
              icon: <Brain size={48} className="text-yellow-400 mb-4" />,
              title: "AI-Powered",
              desc: "We use AI to automate, optimize, and augment digital capabilities.",
            },
            {
              icon: <Globe size={48} className="text-yellow-400 mb-4" />,
              title: "Global Mindset",
              desc: "We build platforms ready for scale and international expansion.",
            },
            {
              icon: <Code2 size={48} className="text-yellow-400 mb-4" />,
              title: "Tech Excellence",
              desc: "Quality code, robust architecture, and scalable infrastructure.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#132c6e] p-6 rounded-xl border-t-4 border-yellow-400 hover:scale-105 transition transform duration-300"
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-blue-200">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurVision;
