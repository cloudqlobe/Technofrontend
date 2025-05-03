import React from 'react';
import {
  MdAutorenew,
  MdReceipt,
  MdAccessTime,
  MdBarChart,
  MdCalculate,
  MdPower,
  MdSettings,
  MdAccountBalanceWallet,
} from 'react-icons/md';

const Billingheader = () => {
  const billingFeatures = [
    { icon: <MdAutorenew />, title: 'Auto Billing', bg: 'from-blue-500 to-blue-400' },
    { icon: <MdReceipt />, title: 'Invoices', bg: 'from-yellow-500 to-yellow-400' },
    { icon: <MdAccessTime />, title: 'Reminders', bg: 'from-purple-500 to-purple-400' },
    { icon: <MdBarChart />, title: 'Reports', bg: 'from-green-500 to-green-400' },
    { icon: <MdCalculate />, title: 'Tax', bg: 'from-pink-500 to-pink-400' },
    { icon: <MdPower />, title: 'API', bg: 'from-orange-500 to-orange-400' },
    { icon: <MdSettings />, title: 'Settings', bg: 'from-indigo-500 to-indigo-400' },
    { icon: <MdAccountBalanceWallet />, title: 'Wallet', bg: 'from-emerald-500 to-emerald-400' },
  ];

  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left mt-[-50px] ml-[-40px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-blue-800">Advanced </span>
            <span className="text-orange-500">Billing Software</span>
          </h2>
          <p className="text-gray-700 mb-6">
            We offer customized billing software solutions that streamline invoicing, payment tracking, and financial reporting. Our systems are designed for scalability and ease of use to ensure seamless business operations.
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

        {/* Right: Tablet Design with 3D Effect */}
        <div className="flex justify-center mt-[-40px]">
          <div
            className="relative w-[750px] h-[390px] bg-[#fdfdfd] rounded-[2rem] border-[4px] border-gray-400 p-6 flex flex-col items-center pt-10 shadow-2xl"
            style={{
              transform: 'rotateY(-6deg) rotateX(3deg)',
              perspective: '1200px',
            }}
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-500 rounded-full z-10 opacity-50" />

            {/* 3x3 Icon Grid */}
            <div className="grid grid-cols-4 gap-12 mt-[20px]">
              {billingFeatures.map((item, i) => (
                <div key={i} className="flex flex-col items-center space-y-5">
                  <div className={`w-[70px] h-[70px] rounded-lg bg-gradient-to-br ${item.bg} shadow-lg flex items-center justify-center`}>
                    <span className="text-white text-3xl animate-icon-only">{item.icon}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reseller Section: Full Width of Screen */}
      <section className="w-10xl bg-[#F1F5F9] py-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 ml-[-90px] mr-[-80px] mt-[70px]">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-orange-600 drop-shadow-sm">
            Become a Reseller
          </h2>
          <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed text-center md:text-left">
            Start your own business with zero development hassle. Offer world-class web design and development services under your brand, powered by us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 shadow-md transition-all duration-300">
              🚀 Register Now
            </button>
            <button className="bg-green-600 border border-green-600 text-white font-semibold px-6 py-3 transition-all duration-300">
              💬 Talk to Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-end">
          <img
            src="https://img.freepik.com/premium-photo/vibrant-whimsical-illustration-featuring-social-media-day_1201937-571.jpg"
            alt="Reseller Opportunity"
            className="object-contain h-64 md:h-80 w-80 md:w-[400px]"
          />
        </div>
      </section>

      {/* Icon Animation Only */}
      <style>{`
        @keyframes icon-only-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-icon-only {
          animation: icon-only-bounce 2s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Billingheader;
