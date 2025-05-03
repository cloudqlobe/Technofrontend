import React, { useState } from "react";
import Confetti from "react-confetti";
import logoVideo from "../assets/Image/8942db49a1c64b05a4f499c448b45648.webm";

export default function StatsSection() {
  const [celebratingBox, setCelebratingBox] = useState(null);

  const handleMouseEnter = (index) => {
    setCelebratingBox(index);
  };

  const handleMouseLeave = () => {
    setCelebratingBox(null);
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-800 min-h-[100vh] relative px-10 overflow-x-hidden">
      {/* Left Text Section */}
      <div className="flex flex-col items-start text-white max-w-xl mt-[-500px] ml-[80px] space-y-4">
        <h1 className="text-2xl font-semibold leading-snug mr-[50px]">
          Celebrating Milestones, <span className="text-yellow-400">Driving Excellence</span>
        </h1>
        <p className="text-base font-medium text-white">
          With over <span className="text-yellow-300">150+ completed projects</span> and a <span className="text-pink-400">98% client satisfaction rate</span>,
          we continue to set new benchmarks in the tech industry. Our solutions are trusted globally for their reliability and performance.
        </p>
      </div>

      {/* Center Video */}
      <div className="absolute bottom-[10px] left-[150px] flex flex-col items-center">
        <video
          src={logoVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-[250px] md:w-[350px] lg:w-[400px] object-contain z-10"
        />
        <div className="w-[250px] md:w-[300px] lg:w-[350px] h-[35px] bg-gradient-to-t from-white via-gray-200 to-transparent rounded-full blur-[50px] opacity-80 mt-[-15px] z-0"></div>
      </div>

      {/* Right Stats Section */}
      <div className="flex flex-col items-end space-y-3">
        {/* Top Row */}
        <div className="flex justify-center mt-[70px]">
          <div className="flex flex-col items-center">
            <div className="text-yellow-500 text-6xl mb-[20px]">🏆</div>
            <div
              className="bg-white p-6 shadow-md border border-orange-500 w-60 h-36 flex flex-col items-center justify-center mb-[-70px] relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              {celebratingBox === 0 && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                  <Confetti numberOfPieces={300} gravity={0.2} recycle={false} width={240} height={140} />
                </div>
              )}
              <div className="text-purple-500 text-4xl mt-2">🏆</div>
              <h2 className="text-xl font-bold text-gray-800">50+</h2>
              <p className="text-gray-600">Cutting-Edge Tech</p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center space-x-4 items-start">
          <div className="flex flex-col items-center">
            <div className="text-yellow-500 text-6xl mb-4 ml-[150px]">🏆</div>
            <div
              className="bg-white p-6 shadow-md border border-orange-500 w-60 h-36 flex flex-col items-center justify-center rounded-none ml-[160px] relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              {celebratingBox === 1 && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                  <Confetti numberOfPieces={300} gravity={0.2} recycle={false} width={240} height={140} />
                </div>
              )}
              <div className="text-green-500 text-4xl">✅</div>
              <h2 className="text-xl font-bold text-gray-800">150+</h2>
              <p className="text-gray-600">Completed Projects</p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-[50px]">
            <div
              className="bg-white p-6 shadow-md border border-orange-500 w-60 h-36 flex flex-col items-center justify-center rounded-none mt-[25px] relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              {celebratingBox === 2 && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                  <Confetti numberOfPieces={300} gravity={0.2} recycle={false} width={240} height={140} />
                </div>
              )}
              <div className="text-blue-500 text-4xl">👥</div>
              <h2 className="text-xl font-bold text-gray-800">98%</h2>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center space-x-4">
          <div className="flex flex-col items-center mt-[-75px]">
            <div className="text-yellow-500 text-6xl mb-4">🏆</div>
            <div
              className="bg-white p-6 shadow-md border border-orange-500 w-60 h-36 flex flex-col items-center justify-center rounded-none relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              {celebratingBox === 3 && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                  <Confetti numberOfPieces={300} gravity={0.2} recycle={false} width={240} height={140} />
                </div>
              )}
              <div className="text-yellow-500 text-4xl">🌍</div>
              <h2 className="text-xl font-bold text-gray-800">120+</h2>
              <p className="text-gray-600">Innovative Solutions</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="bg-white p-6 shadow-md border border-orange-500 w-60 h-36 flex flex-col items-center justify-center rounded-none relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              {celebratingBox === 4 && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                  <Confetti numberOfPieces={300} gravity={0.2} recycle={false} width={240} height={140} />
                </div>
              )}
              <div className="text-purple-500 text-4xl">✔️</div>
              <h2 className="text-xl font-bold text-gray-800">99.5%</h2>
              <p className="text-gray-600">Data Accuracy</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="bg-white p-6 shadow-md border border-orange-500 w-60 h-36 flex flex-col items-center justify-center rounded-none relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
              {celebratingBox === 5 && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                  <Confetti numberOfPieces={300} gravity={0.2} recycle={false} width={240} height={140} />
                </div>
              )}
              <div className="text-yellow-500 text-4xl">🌍</div>
              <h2 className="text-xl font-bold text-gray-800">50+ Regions</h2>
              <p className="text-gray-600">Global Expansion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
