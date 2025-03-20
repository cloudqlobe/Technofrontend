import React from 'react';
import { FaPython, FaJava, FaReact, FaRust, FaNodeJs, FaDocker, FaDatabase, FaRuby, FaMagento, FaAws, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { SiMongodb, SiExpress, SiKubernetes, SiTensorflow, SiGraphql, SiPostgresql, SiRedis } from "react-icons/si";

const iconData = [
  { Icon: FaReact, bgColor: "bg-blue-500" },      
  { Icon: FaNodeJs, bgColor: "bg-green-700" },    
  { Icon: FaPython, bgColor: "bg-yellow-500" },   
  { Icon: FaJava, bgColor: "bg-red-600" },        
  { Icon: FaRust, bgColor: "bg-orange-500" },     
  { Icon: FaDatabase, bgColor: "bg-gray-700" },   
  { Icon: SiMongodb, bgColor: "bg-green-600" },   
  { Icon: SiExpress, bgColor: "bg-black" },       
  { Icon: FaDocker, bgColor: "bg-blue-400" },     
  { Icon: FaMagento, bgColor: "bg-red-700" },     
  { Icon: FaAws, bgColor: "bg-yellow-500" },      
  { Icon: FaGoogle, bgColor: "bg-red-500" },      
  // { Icon: FaMicrosoft, bgColor: "bg-blue-700" },  
  // { Icon: SiKubernetes, bgColor: "bg-blue-500" }, 
  // { Icon: SiTensorflow, bgColor: "bg-orange-600" },
  // { Icon: SiGraphql, bgColor: "bg-pink-500" },    
  // { Icon: SiPostgresql, bgColor: "bg-blue-900" }, 
  // { Icon: SiRedis, bgColor: "bg-red-600" }        
];

const Model = () => {
  return (
    <div className="bg-white min-h-screen p-16 font-sans flex flex-col items-center justify-center">
      
      {/* Tech Stack & Get a Quote Section */}
      <div className="flex flex-col lg:flex-row items-start justify-center w-full space-x-28"> 
        
        {/* Left Side - Programming Languages & Tech */}
        <div className="flex flex-col lg:w-1/2 text-left flex-shrink-0 mb-10 relative left-[-34px] mt-10">
          <h3 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
            Code the Future: Build, Scale & Innovate  
            <span className="text-orange-500 block text-center ">Next-Gen Technologies</span>
          </h3>

          <div className="mt-12 grid grid-cols-6 gap-12 mt-28"> 
            {iconData.map(({ Icon, bgColor }, index) => (
              <div 
                key={index} 
                className={`w-16 h-16 flex items-center justify-center ${bgColor} text-white text-4xl shadow-md 
                transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-gray-400`}
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Get a Quote Form (Pop Animation on Hover) */}
        <div 
          className="bg-white p-6 shadow-lg w-full max-w-sm border-2 border-orange-300 flex flex-col h-auto flex-shrink-0 rounded-none relative left-[-34px]
          transform transition-all duration-300 hover:scale-105"
        >  
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-4">Get a Free Quote</h3>
          <p className="text-gray-600 text-center mb-4 text-base">
            Let's craft cutting-edge solutions tailored to your needs.
          </p>
          <form className="flex flex-col space-y-3">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-3 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-base"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-3 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-base"
            />
            <input 
              type="text" 
              placeholder="Company Name" 
              className="p-3 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-base"
            />
            <textarea 
              placeholder="Describe your requirements" 
              className="p-3 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-16 w-full text-base"
            ></textarea>
            <button className="bg-blue-500 text-white py-3 text-lg font-semibold hover:bg-blue-600 transition shadow-md w-full">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Model;
