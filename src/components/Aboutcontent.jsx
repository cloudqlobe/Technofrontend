import React from "react";
import image4 from "../assets/Image/6603271.jpg";
import image5 from "../assets/Image/3826348.jpg";
import image6 from "../assets/Image/6548437.jpg";

const Aboutcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Who <span className="text-blue-800">We Are</span>
      </h1>

      {/* Our Identity Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Our Identity"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">
            Passionate <span className="text-blue-600">Innovators</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            TechnoMagic isn’t just a company — it’s a vision brought to life by dreamers, creators,
            and problem-solvers. We are driven by curiosity and guided by innovation, working
            relentlessly to shape experiences that matter.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our roots lie in tech, but our heartbeat is human. With every project, we aim to
            connect technology with real-world impact.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">
            A Mission <span className="text-blue-600">with Purpose</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            At our core, we believe in delivering more than just products — we deliver
            transformations. Our mission is to empower businesses, elevate user experiences,
            and create lasting value through technology.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether collaborating remotely or brainstorming in the same room, our team thrives
            on transparency, adaptability, and empathy.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Our Mission"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px]"
          />
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="What Sets Us Apart"
            className="w-[90%] h-[450px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">
            What <span className="text-blue-600">Sets Us Apart</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            We don’t just code. We listen. We ideate. We co-create. Our strength lies in our ability
            to align with your goals and translate them into real-world solutions that scale.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            From startups to enterprises, we treat every project with care, precision, and a
            forward-thinking mindset. With TechnoMagic, you’re not just getting a service — you’re
            gaining a partner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
