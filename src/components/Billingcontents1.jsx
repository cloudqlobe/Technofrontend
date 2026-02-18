import React from 'react';
import image1 from '../assets/Image/4667617.jpg';
import image2 from '../assets/Image/6072171.jpg';

const Billingcontents1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-12 py-10 overflow-hidden">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Powerful <span className="text-blue-800">Billing Software Solutions</span> for Seamless Business Operations
      </h1>

      {/* Section 1 - Image left on desktop, top on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12 max-w-7xl mx-auto">
        
        {/* Image: top on mobile, left on desktop */}
        <div className="flex justify-center items-center w-full order-1 md:order-1">
          <img
            src={image1}
            alt="Billing Software"
            className="w-full max-w-[500px] md:max-w-[600px] h-auto md:h-[600px] object-cover rounded-lg"
          />
        </div>

        {/* Title + Description: below image on mobile, right on desktop */}
        <div className="flex flex-col justify-center w-full md:max-w-[600px] md:ml-[40px] order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-400 mt-[30px]">
            Smart <span className="text-orange-400">Billing Management</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify mt-[30px]">
            Our advanced billing software is built to streamline your business's entire financial workflow. From generating detailed invoices to tracking real-time payments, the system is tailored to reduce manual errors and improve operational efficiency. It supports various billing formats, integrates seamlessly with inventory and CRM platforms, and ensures GST-compliance and tax automation, giving you the peace of mind to focus on scaling your business.
          </p>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify mt-[30px]">
            With a user-friendly interface and customizable templates, businesses can personalize client invoices and automate recurring billing for subscriptions and long-term contracts. Real-time dashboards provide comprehensive insights into outstanding balances, revenue patterns, and financial projections. Whether you're a startup, SME, or an enterprise, our solution adapts to your business logic, making it an essential asset in modern financial management.
          </p>
        </div>
      </div>

      {/* Section 2 - Text left on desktop, but image on top for mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12 max-w-7xl mx-auto">

        {/* Image: top on mobile (order-1), right on desktop (order-2) */}
        <div className="flex justify-center items-center w-full order-1 md:order-2">
          <img
            src={image2}
            alt="Invoice Automation"
            className="w-full max-w-[500px] md:max-w-[600px] h-auto md:h-[450px] object-cover rounded-lg"
          />
        </div>

        {/* Title + Description: below image on mobile (order-2), left on desktop (order-1) */}
        <div className="flex flex-col justify-center w-full md:pr-6 order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-200 mt-[30px]">
            Automated <span className="text-orange-400">Invoice & Payment Solutions</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify mt-[30px]">
            Experience the power of automation with our invoice and payment system designed to keep your cash flow healthy and your customers informed. Automatically generate and send invoices, schedule due date reminders, and accept payments through integrated gateways such as UPI, credit cards, and net banking. Say goodbye to follow-up hassles and missed payments with our proactive notification system that keeps both you and your clients in sync.
          </p>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify mt-[30px]">
            Our platform also enables detailed transaction tracking and digital receipts for complete transparency. Custom payment links and QR code generation enhance ease of use for your customers, while advanced reporting tools provide accurate forecasts and audit-ready summaries. Built with data security and compliance at its core, the software supports multi-layer encryption, user access control, and audit logs to ensure your financial data is protected and fully traceable.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Billingcontents1;