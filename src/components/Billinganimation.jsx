import React from 'react';
import {
  CreditCard, Banknote, FileBarChart2, HeadsetMic,
  ReceiptText, DollarSign, ShieldCheck, PieChart
} from "lucide-react";
import { FaIcicles } from 'react-icons/fa';

const Billinganimation = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Simplify Your Billing Process with Our Solution
          </h2>
          <p className="text-lg mb-6 text-blue-100 leading-relaxed">
            Our billing system automates invoicing, payments, and financial reporting to help your business grow.
            Whether you need subscription management or one-time payments, we have the tools to keep your financial processes smooth and secure.
          </p>

          
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-400">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Billing Animation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <p className="text-white text-xl font-bold">Billing in Action</p>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Feature Section */}
      <section className="bg-blue-800 py-16 mt-20 rounded-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-12">

          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <CreditCard size={32} />
              <span className="mt-2 font-semibold">Automated Invoicing</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <Banknote size={32} />
              <span className="mt-2 font-semibold">Payment Integration</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <FileBarChart2 size={32} />
              <span className="mt-2 font-semibold">Financial Reports</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <FaIcicles size={32} />
              <span className="mt-2 font-semibold">24/7 Support</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <ReceiptText size={32} />
              <span className="mt-2 font-semibold">Subscription Billing</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <DollarSign size={32} />
              <span className="mt-2 font-semibold">Multi-Currency Support</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <ShieldCheck size={32} />
              <span className="mt-2 font-semibold">Secure Payments</span>
            </div>
            <div className="flex flex-col items-center bg-blue-600 border-2 border-yellow-400 rounded-xl p-5 hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <PieChart size={32} />
              <span className="mt-2 font-semibold">Billing Analytics</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Billinganimation;
