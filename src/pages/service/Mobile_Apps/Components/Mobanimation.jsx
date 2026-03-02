import React from "react";
import image20 from "../../../../assets/Image/9260584.png";
import {
  Code,
  Smartphone,
  Rocket,
  Atom,
  Database,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const techStack = [
  { icon: <Atom className="text-orange-500 w-10 h-10" />, title: "React Native" },
  { icon: <Smartphone className="text-orange-500 w-10 h-10" />, title: "Flutter" },
  { icon: <Code className="text-orange-500 w-10 h-10" />, title: "Java" },
  { icon: <Code className="text-orange-500 w-10 h-10" />, title: "Kotlin" },
  { icon: <Database className="text-orange-500 w-10 h-10" />, title: "Firebase" },
  { icon: <Cloud className="text-orange-500 w-10 h-10" />, title: "Google Cloud" },
  { icon: <Rocket className="text-orange-500 w-10 h-10" />, title: "App Store & Play Store" },
  { icon: <ShieldCheck className="text-orange-500 w-10 h-10" />, title: "Security Standards" },
];

const Mobanimation = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-16 px-4 overflow-hidden">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-16">

        {/* TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:-ml-24 lg:-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
            Advanced Web & Mobile App Development
          </h2>
          <p className="text-white leading-relaxed text-base sm:text-lg text-justify lg:text-left mt-6">
            We craft high-performance web and mobile apps using cutting-edge
            technologies. Our solutions ensure fast load times, seamless user
            experiences, and scalable architectures — built to power modern
            businesses across all platforms.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:ml-24">
          <img
            src={image20}
            alt="App Dev Animation"
            className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px]
                       h-auto rounded-xl"
          />
        </div>
      </div>

      <div className="max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#2743AD] p-6 squared-xl">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-[#1E3A8A] p-6 rounded-lg text-center shadow-md hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{tech.icon}</div>
            <h4 className="text-white text-lg font-semibold">{tech.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mobanimation;
