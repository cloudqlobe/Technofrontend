import React, { useEffect, useState } from 'react';
import { FaAngular } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiReactbootstrap } from "react-icons/si";

import { FaFigma, FaSketch, FaAdobe, FaGithub } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';
import {
  IoLogoHtml5, IoLogoCss3, IoLogoJavascript,
  IoLogoReact, IoLogoNodejs, IoLogoGithub,
  IoLogoAngular
} from 'react-icons/io5';

// Tech Stack Icons
const webTech = [
  { icon: IoLogoHtml5, label: 'HTML5', color: '#E34F26' },
  { icon: IoLogoCss3, label: 'CSS3', color: '#1572B6' },
  { icon: IoLogoJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: IoLogoReact, label: 'React', color: '#61DBFB' },
  { icon: IoLogoNodejs, label: 'Node.js', color: '#68A063' },
  { icon: IoLogoAngular, label: 'Angular', color: '#F1502F' },
];

// Design Tools
const designTools = [
  { icon: FaFigma, label: 'Figma', color: '#F24E1E' },
  { icon: SiPostman, label: 'Postman', color: '#FF9900' },
  { icon: SiReactbootstrap, label: 'Bootstrap', color: '#563D7C' },
  { icon: FaGithub, label: 'GitHub', color: '#181717' },
];

const Webheader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % webTech.length);
    }, 2000);
    return () => clearInterval(scrollInterval);
  }, []);

  const currentTool = webTech[currentIndex];

  return (
    <>
      <section className="w-full h-[600px] bg-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 ">
        {/* Left Text Section */}
        <div className="max-w-xl text-center md:text-left mt-[-190px] ml-[13px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-blue-800">Build Powerful </span>
            <span className="text-orange-500">Web Apps</span>
          </h2>
          <p className="text-sm text-gray-600 leading-relaxing text-justify mt-5 max-w-lg ">
            We create fast, responsive, and user-friendly web applications using the latest technologies to ensure high performance and optimal user experience.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 squared-lg font-semibold shadow">
              Get a Quote
            </button>
            <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 squared-lg font-semibold shadow">
              Get a Demo
            </button>
          </div>
        </div>

        {/* Monitor and Icons */}
        {/* Monitor and Icons */}
<div className="relative flex items-center justify-center mx-auto ml-[130px] mt-[-200px]">
  {/* Left Icons */}
  <div className="absolute left-[-50px] top-[50%] transform -translate-y-1/2 flex flex-col justify-center gap-12 items-center">
    {designTools.slice(0, 2).map((tool, index) => (
      <div key={index} className="flex flex-col items-center">
        <div
          className="text-white rounded-full flex items-center justify-center shadow-lg"
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: tool.color,
          }}
        >
          <tool.icon style={{ fontSize: '40px' }} />
        </div>
        <p className="text-sm mt-2 font-medium text-center">{tool.label}</p>
      </div>
    ))}
  </div>

  {/* Monitor */}
  <div className="relative w-[500px] h-[300px] rounded-[1rem] border-[4px] border-gray-400 shadow-xl bg-gray-100 flex items-center justify-center overflow-hidden mx-[4rem]">
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-blue-300 rounded-full"></div>
    
    <div
      key={currentIndex}
      title={currentTool.label}
      style={{
        color: currentTool.color,
        fontSize: '100px',  // Reduced font size
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {currentTool.icon ? (
        <currentTool.icon />
      ) : (
        <AiOutlineCode style={{ fontSize: '100px', color: '#6c757d' }} />
      )}
      <p className="text-sm mt-2 font-medium text-gray-700">{currentTool.label}</p> {/* Label Below */}
     
    </div>
    
  </div>
  <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-gray-500 rounded-b-full shadow-md border-t-[4px] border-gray-400"></div>


  {/* Right Icons */}
  <div className="absolute right-[-50px] top-[50%] transform -translate-y-1/2 flex flex-col justify-center gap-12 items-center">
    {designTools.slice(2).map((tool, index) => (
      <div key={index} className="flex flex-col items-center">
        <div
          className="text-white rounded-full flex items-center justify-center shadow-lg"
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: tool.color,
          }}
        >
          <tool.icon style={{ fontSize: '40px' }} />
        </div>
        <p className="text-sm mt-2 font-medium text-center">{tool.label}</p>
      </div>
    ))}
  </div>
</div>

      </section>
     


    </>
  );
};

export default Webheader;

