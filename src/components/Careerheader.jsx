import React from 'react';
import { FaUsersGear } from "react-icons/fa6";
import { DiRuby} from "react-icons/di";
import { BsDiagram3 } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";

import { LuBrainCog,LuBadgeCheck,LuCpu,LuLocateFixed ,LuSnowflake,LuTarget  } from "react-icons/lu";


const Careerheader = () => {
  return (
    <div className="bg-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left mt-[-110px] ml-[-60px]">
          <h2 className="text-4xl font-semibold mb-4 whitespace-nowrap">
            <span className="text-blue-800">Join Our Team </span>
            <span className="text-orange-500">Shape Your Future</span>
          </h2>
          <p className="text-gray-700 mb-6">
            We’re on the lookout for passionate, driven individuals to be part of our growing family. Explore exciting career opportunities and take the next step toward a rewarding future with us.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow">
              Explore Open Roles
            </button>
            <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-lg font-semibold shadow">
              Life at Our Company
            </button>
          </div>
        </div>

        {/* Right Side (Boxes) */}
        <div className="relative w-[450px] h-[450px] ml-[100px]">

          {/* Center big blocks */}

<div className="absolute w-[125px] h-[130px] top-[60px] left-[200px] squared-md border border-gray-800 flex items-center justify-center" 
     style={{ background: 'rgb(24, 50, 89)' }}>
  <FaUsersGear className="text-white w-[50px] h-[50px]" />
</div>

          <div className="absolute w-[80px] h-[70px] top-[60px] left-[120px] squared-md shadow-md" 
          style={{background:'rgb(54 117 136)'}}/>
          
          <div className="absolute w-[68px] h-[68px] top-[25px] left-[324px]  squared-md shadow-md" 
          style={{background:'rgb(80 141 159)'}}/>
           <div className="absolute w-[15px] h-[15px] top-[50px] left-[350px] bg-white squared-md shadow-md" 
          />
          <div className="absolute w-[35px] h-[35px] top-[50px] left-[-120px] bg-[#F97316] squared-md shadow-md" />
         

<div
  className="absolute w-[60px] h-[60px] top-[0px] left-[160px] squared-md shadow-md border border-gray-800 flex items-center justify-center"
  style={{ background: 'rgb(25, 86, 117)' }}
>
  <DiRuby className="text-white w-[30px] h-[30px]" />
</div>


<div
  className="absolute w-[93px] h-[95px] top-[140px] left-[325px] squred-md shadow-md flex items-center justify-center"
  style={{ background: 'rgb(54, 117, 136)' }}
>
  <BsDiagram3 className="text-white w-[40px] h-[40px]" />
</div>
          <div className="absolute w-[70px] h-[70px] top-[170px] left-[130px]  squared-md shadow-md"
          style={{background:'rgb(80 141 159)'}} />
         

<div
  className="absolute w-[90px] h-[90px] top-[190px] left-[180px] squared-md shadow-md flex items-center justify-center"
  style={{ background: 'rgb(52, 118, 136)' }}
>
  <FaAward  className="text-white w-[50px] h-[50px]" />
</div>


          {/* Middle random blocks */}
          <div className="absolute w-[40px] h-[40px] top-[20px] left-[220px] bg-[#F97316] squared-md shadow-md" />
          <div className="absolute w-[15px] h-[15px] top-[33px] left-[232px] bg-white squared-md shadow-md" />
          <div className="absolute w-[55px] h-[58px] top-[190px] left-[270px]  squared-md shadow-md" 
          style={{background:'rgb(25 86 117)'}}/>
           <div className="absolute w-[15px] h-[15px] top-[212px] left-[290px] bg-white squared-md shadow-md" />
          <div className="absolute w-[30px] h-[30px] top-[111px] left-[373px] bg-[#165668] squared-md shadow-md" />
          <div className="absolute w-[45px] h-[40px] top-[130px] left-[155px] bg-[#FF6700] squared-md shadow-md" />
          <div className="absolute w-[40px] h-[40px] top-[-50px] left-[320px] bg-[#FF6700] squared-md shadow-md" />
          <div
  className="absolute w-[80px] h-[80px] top-[-20px] left-[260px] squared-md flex items-center justify-center"
  style={{ backgroundColor: 'rgb(55, 116, 134)' }}
>
<LuBadgeCheck  className="text-white w-[50px] h-[50px]" />
</div>

          <div className="absolute w-[40px] h-[40px] top-[170px] left-[90px] bg-[#FF6700] squared-md shadow-md" />
          <div className="absolute w-[15px] h-[15px] top-[182px] left-[104px] bg-white squared-md shadow-md" />
          <div className="absolute w-[85px] h-[85px] top-[75px] left-[60px]  squared-md shadow-md flex items-center justify-center"
          style={{background:'rgb(9 71 104)'}} 
          >
<LuBrainCog   className="text-white w-[50px] h-[50px]" />
</div>

          {/* Outer scattered blocks */}
          <div className="absolute w-[20px] h-[20px] top-[-60px] left-[-80px]  squared-md shadow-md" 
          style={{background:'rgb(22 88 115)'}}/>
          
          <div className="absolute w-[15px] h-[15px] top-[60px] left-[-109px] bg-white squared-md shadow-md" />
          <div className="absolute w-[15px] h-[15px] top-[350px] left-[-110px] bg-[#FF6700] squared-md shadow-md" />
          <div className="absolute w-[20px] h-[20px] top-[-40px] left-[230px]  squared-md shadow-md"
          style={{background:'rgb(24 86 119)'}} />
          
          <div className="absolute w-[65px] h-[65px] top-[-60px] left-[500px]  squared-md shadow-md flex items-center justify-center" 
          style={{background:'rgb(81 140 159)'}}
          >
          <LuCpu   className="text-white w-[40px] h-[40px]" />
          </div>
          
          <div className="absolute w-[24px] h-[24px] top-[40px] left-[540px] bg-[#FF6700] squared-md shadow-md" />
          <div className="absolute w-[15px] h-[15px] top-[105px] left-[480px]  squared-md shadow-md"
          style={{background:'rgb(81 140 159)'}} />

          <div className="absolute w-[33px] h-[33px] top-[120px] left-[590px] squared-md shadow-md" 
           style={{background:'rgb(81 140 159)'}} />

          <div className="absolute w-[20px] h-[20px] top-[126px] left-[596px] bg-white squared-md shadow-md" />
          <div className="absolute w-[90px] h-[90px] top-[235px] left-[290px]  squared-md shadow-md flex items-center justify-center" 
          style={{background:'rgb(239 108 32)'}}
          >
          <LuLocateFixed    className="text-white w-[40px] h-[40px]" />
          </div>
          
          <div className="absolute w-[15px] h-[15px] top-[15px] left-[10px] bg-[#165668] squared-md shadow-md" />
          <div className="absolute w-[48px] h-[48px] top-[92px] left-[325px]  squared-md shadow-md" 
          style={{background:'rgb(225 95 25)'}} />
          <div className="absolute w-[18px] h-[18px] top-[107px] left-[340px] bg-white squared-md shadow-md" />
          <div className="absolute w-[40px] h-[40px] top-[53px] left-[390px] bg-[#FF6700] squared-md shadow-md" />
          <div className="absolute w-[30px] h-[30px] top-[-20px] left-[100px] bg-[#FF6700] squared-md shadow-md" />
          <div className="absolute w-[20px] h-[20px] top-[330px] left-[190px] squared-md shadow-md" 
          style={{background:'rgb(81 140 159)'}} />
          <div className="absolute w-[20px] h-[20px] top-[170px] left-[-30px]  squared-md shadow-md" 
          style={{background:'rgb(81 140 159)'}} />
          
          <div className="absolute w-[60px] h-[60px] top-[270px] left-[-10px] squared-md shadow-md flex items-center justify-center"
          style={{background:'rgb(25 85 119)'}} 
          >
          <LuSnowflake className="text-white w-[40px] h-[40px]" />
          </div>

          <div className="absolute w-[55px] h-[55px] top-[172px] left-[410px]  squared-md shadow-md flex items-center justify-center"
          style={{background:'rgb(231 97 17)'}} 
            >
          <LuTarget className="text-white w-[40px] h-[40px]" />
          </div>
          <div className="absolute w-[35px] h-[35px] top-[270px] left-[440px] bg-[#165668] squared-md shadow-md" />
          <div className="absolute w-[20px] h-[20px] top-[277px] left-[448px] bg-white squared-md shadow-md" />
          <div className="absolute w-[20px] h-[20px] top-[320px] left-[620px]  squared-md shadow-md" 
          style={{background:'rgb(81 140 159)'}} />
          <div className="absolute w-[15px] h-[15px] top-[20px] left-[640px] bg-[#165668] squared-md shadow-md" />
          

        </div>

      </div>

      {/* Reseller Section */}
      <div className="max-w-[1700px] bg-[#F1F5F9] py-12 px-6 md:px-20 rounded-xl shadow-md mt-[-30px] ml-[-70px] mr-[-48px] border border-gray-300 ">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-orange-600 drop-shadow-sm">
              Become a Reseller
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
              Start your own business with zero development hassle. Offer world-class web design and development services under your brand, powered by us.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300">
                🚀 Register Now
              </button>
              <button className="bg-green-600 border border-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                💬 Talk to Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={require("../assets/Image/—Pngtree—charming robot illustration operating laptop_20059321.png")}
              alt="Reseller Opportunity"
              className="object-contain h-64 md:h-80 w-80 md:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerheader;
