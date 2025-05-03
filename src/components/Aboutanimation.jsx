import React from "react";
import { Users, Target, Lightbulb } from "lucide-react";

const Aboutanimation = () => {
  return (
    <div className="bg-[#0a1d56] text-white py-20 px-6 sm:px-12">
      {/* Top Section: Image & Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            What we do
          </h2>
          <p className="text-lg text-blue-100">
            We are a creative technology agency focused on delivering bold digital experiences.
            From concept to execution, we help businesses thrive through innovative software, design, and strategy.
          </p>
        </div>

        {/* Right "Monitor" Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-[#132c6e] p-4 rounded-2xl shadow-2xl border-4 border-blue-500 w-fit">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/web-developer-team-7294301-5958622.png"
              alt="Monitor Content"
              className="w-[300px] h-auto rounded-lg animate-pulse"
            />
          </div>
        </div>
      </div>

      {/* Bottom Icon Section */}
      <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center">
          <Users size={42} className="text-blue-300 mb-3" />
          <p className="text-lg font-semibold text-white">Team Focused</p>
        </div>
        <div className="flex flex-col items-center">
          <Target size={42} className="text-blue-300 mb-3" />
          <p className="text-lg font-semibold text-white">Goal Oriented</p>
        </div>
        <div className="flex flex-col items-center">
          <Lightbulb size={42} className="text-blue-300 mb-3" />
          <p className="text-lg font-semibold text-white">Creative Driven</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutanimation;
