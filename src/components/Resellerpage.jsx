import { LuLoaderPinwheel, LuAlarmClockCheck } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";

const Resellerpage = () => {
  return (
    <div className="bg-gray-400 flex justify-center px-4 py-6 lg:mt-[-100px]">
      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row shadow-xl">

        {/* Left Side */}
        <div className="w-full lg:w-[60%] bg-white p-6 sm:p-10 lg:p-14 flex items-center">
          <div className="max-w-xl lg:ml-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 lg:mt-[-60px] lg:ml-[-10px]">
              Strategic Partnership{" "}
              <span className="text-orange-600">Amplified Success</span>
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed text-justify mt-5 max-w-lg lg:ml-[-10px]">
Join a visionary reseller program built to deliver real business growth — through next-gen tools, expert support, and scalable solutions tailored to modern entrepreneurs. next-gen tools, expert support, and scalable solutions tailored to modern entrepreneurs.


            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:ml-[-10px]">
              <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-none font-medium transition">
                Start Partnership
              </button>

              <button className="w-full sm:w-auto border border-orange-500 text-orange-500 hover:bg-orange-50 px-5 py-2 rounded-none font-medium transition">
                Explore Benefits
              </button>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[48%] flex flex-col">

          {/* Orange Section */}
          <div className="bg-orange-500 text-white px-6 sm:px-8 py-12 sm:py-16 flex items-center justify-center flex-col text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
              Start Your Business With Zero Investment!
            </h3>
            <p className="text-orange-100 max-w-sm mt-3 text-sm">
              Begin your entrepreneurial journey with no upfront cost.
              Everything you need is included.
            </p>
          </div>

          {/* Icon Section */}
          <div className="bg-[#f9f9f6] px-6 sm:px-8 py-10 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full text-gray-500">

              {/* Item */}
              {[
                {
                  icon: <LuAlarmClockCheck size={44} />,
                  title: "Fast Onboarding",
                  desc: "Join our reseller network with instant access and simple setup.",
                },
                {
                  icon: <LuLoaderPinwheel size={44} />,
                  title: "Diverse Products",
                  desc: "Resell top-demand digital services under one platform.",
                },
                {
                  icon: <GrMoney size={44} />,
                  title: "High Margins",
                  desc: "Enjoy competitive commission rates with strong earning potential.",
                },
                {
                  icon: <BsGraphUpArrow size={42} />,
                  title: "Sales Insights",
                  desc: "Track customers and sales in real time with analytics.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 w-full lg:ml-[-10px]"
                >
                  <div className="border border-gray-400 w-[80px] h-[80px] sm:w-[180px] flex items-center justify-center">
                    <div className="text-gray-400">{item.icon}</div>
                  </div>

                  <div>
                    <p className="text-base font-semibold text-orange-500">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-xs text-justify mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resellerpage;
