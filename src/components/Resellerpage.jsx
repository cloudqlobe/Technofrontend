import React from "react";
import { Rocket, Package, DollarSign, BarChart2 } from "lucide-react";
import { LuLoaderPinwheel } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuAlarmClockCheck } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";


const Resellerpage = () => {
  return (
    <div className="bg-gray-400 flex justify-center px-4 py-4 mt-[-100px]">
      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row rounded-none overflow-hidden shadow-xl">

        {/* Left Side */}
        <div className="w-full lg:w-[60%] bg-white p-14 flex items-center flex-1">
          <div className="max-w-xl ml-4">
            <h2 className="text-3xl font-semibold text-black mb-4 mt-[-60px] ml-[-10px] ">
              Strategic Partnership <span className="text-orange-600">Amplified Success</span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxing text-justify mt-[20px] max-w-lg ml-[-10px]">
              Join a visionary reseller program built to deliver real business growth — through
              next-gen tools, expert support, and scalable solutions tailored to modern entrepreneurs.
              next-gen tools, expert support, and scalable solutions tailored to modern entrepreneurs.
            </p>
            
            <div className="space-x-4 ml-[-10px] ">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-none font-medium transition mt-[30px] ">
                Start Partnership
              </button>
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-5 py-2 rounded-none font-medium transition ">
                Explore Benefits
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[48%] flex flex-col flex-2">

          {/* Orange Section */}
          <div className="bg-orange-500 text-white px-8 py-16 flex items-center justify-center flex-col text-center flex-1">
            <h3 className="text-3xl font-semibold leading-snug">
              Start Your Business With Zero Investment!
            </h3>
            <p className="text-orange-100 max-w-sm mt-2 text-sm">
              Begin your entrepreneurial journey with no upfront cost. Everything you need is included.
            </p>
          </div>

          {/* Icon Section */}
{/* Icon Section */}
<div className="bg-[#f9f9f6] px-8 py-8 flex flex-col justify-center items-center flex-1">
  <div className="grid grid-cols-2 gap-10 w-full text-gray-500">
    
    {/* Item 1 */}
    <div className="flex items-center gap-6 w-full ml-[-10px]">
      <div className="border border-gray-400 w-[130px] h-[80px] flex items-center justify-center">
        <LuAlarmClockCheck size={48} className="text-gray-400" />
      </div>
      <div>
        <p className="text-base font-semibold text-orange-500">Fast Onboarding</p>
        <p className="text-gray-600 leading-relaxing text-xs text-justify mt-1">with minimal setup and instant access.</p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="flex items-center gap-6 w-full ml-[-10px]">
      <div className="border border-gray-400 w-[180px] h-[80px] flex items-center justify-center">
        <LuLoaderPinwheel size={48} className="text-gray-400" />
      </div>
      <div>
        <p className="text-base font-semibold text-orange-500">Diverse Products</p>
        <p className="text-gray-600 leading-relaxing text-xs text-justify mt-1">Offer a wide range of in-demand digital solutions.</p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="flex items-center gap-6 w-full ml-[-10px]">
      <div className="border border-gray-400 w-[180px] h-[80px] flex items-center justify-center">
        <GrMoney size={48} className="text-gray-400" />
      </div>
      <div>
        <p className="text-base font-semibold text-orange-500">High Margins</p>
        <p className="text-gray-600 leading-relaxing text-xs text-justify mt-1">Earn attractive commissions with strong profit potential.</p>
      </div>
    </div>

    {/* Item 4 */}
    <div className="flex items-center gap-6 w-full ml-[-10px]">
      <div className="border border-gray-400 w-[130px] h-[80px] flex items-center justify-center">
        <BsGraphUpArrow size={46} className="text-gray-400" />
      </div>
      <div>
        <p className="text-base font-semibold text-orange-500">Sales Insights</p>
        <p className="text-gray-600 leading-relaxing text-xs text-justify mt-1">Track customer behavior in real time .</p>
      </div>
    </div>

  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Resellerpage;
