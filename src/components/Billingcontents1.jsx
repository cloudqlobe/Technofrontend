import React from 'react';
import image1 from '../assets/Image/4667617.jpg'; // Billing-related image
import image2 from '../assets/Image/6072171.jpg'; // Invoice/finance image

const Billingcontents1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Powerful <span className="text-blue-800">Billing Software Solutions</span> for Seamless Business Operations
      </h1>

      {/* Billing Software Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="Billing Software"
            className="w-[600px] h-[600px] object-cover rounded-lg mb-2"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Smart <span className="text-orange-400">Billing Management</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[30px]">
            Our advanced billing software is built to streamline your business’s entire financial workflow. From generating detailed invoices to tracking real-time payments, the system is tailored to reduce manual errors and improve operational efficiency. It supports various billing formats, integrates seamlessly with inventory and CRM platforms, and ensures GST-compliance and tax automation, giving you the peace of mind to focus on scaling your business.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            With a user-friendly interface and customizable templates, businesses can personalize client invoices and automate recurring billing for subscriptions and long-term contracts. Real-time dashboards provide comprehensive insights into outstanding balances, revenue patterns, and financial projections. Whether you're a startup, SME, or an enterprise, our solution adapts to your business logic, making it an essential asset in modern financial management.
          </p>
        </div>
      </div>

      {/* Invoice & Payment Automation Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[24px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Automated <span className="text-orange-400">Invoice & Payment Solutions</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Experience the power of automation with our invoice and payment system designed to keep your cash flow healthy and your customers informed. Automatically generate and send invoices, schedule due date reminders, and accept payments through integrated gateways such as UPI, credit cards, and net banking. Say goodbye to follow-up hassles and missed payments with our proactive notification system that keeps both you and your clients in sync.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our platform also enables detailed transaction tracking and digital receipts for complete transparency. Custom payment links and QR code generation enhance ease of use for your customers, while advanced reporting tools provide accurate forecasts and audit-ready summaries. Built with data security and compliance at its core, the software supports multi-layer encryption, user access control, and audit logs to ensure your financial data is protected and fully traceable.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Invoice Automation"
            className="w-[85%] h-[450px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Billingcontents1;
