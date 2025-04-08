import React from 'react';
import image20 from "../assets/Image/social-media-icons_1197721-44286.jpg";
import {
  Code,
  Smartphone,
  Rocket,
  Atom,
  Layers,
  Database,
  Cloud,
  ShieldCheck,
} from 'lucide-react';

const techStack = [
  {
    icon: <Atom className="text-orange-500 w-10 h-10" />,
    title: 'React Native',
  },
  {
    icon: <Smartphone className="text-orange-500 w-10 h-10" />,
    title: 'Flutter',
  },
  {
    icon: <Code className="text-orange-500 w-10 h-10" />,
    title: 'Java',
  },
  {
    icon: <Code className="text-orange-500 w-10 h-10" />,
    title: 'Kotlin',
  },
  {
    icon: <Database className="text-orange-500 w-10 h-10" />,
    title: 'Firebase',
  },
  {
    icon: <Cloud className="text-orange-500 w-10 h-10" />,
    title: 'Google Cloud',
  },
  {
    icon: <Rocket className="text-orange-500 w-10 h-10" />,
    title: 'App Store & Play Store',
  },
  {
    icon: <ShieldCheck className="text-orange-500 w-10 h-10" />,
    title: 'Security Standards',
  },
];

const Mobanimation = () => {
  return (
    <div className="bg-[#1E3A8A] text-white py-16 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Mobile App Technologies</h2>
          <p className="text-lg text-white">
            We build mobile apps using the most advanced technologies to ensure high performance, smooth UI, and native-like experience across platforms.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={image20}
            alt="App Dev Animation"
            className="w-full rounded-xl "
          />
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#2743AD] p-6 rounded-xl">
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
    </div>
  );
};

export default Mobanimation;
