import React from "react";
import image4 from "../assets/Image/6603271.jpg";
import image5 from "../assets/Image/3826348.jpg";
import image6 from "../assets/Image/6548437.jpg";

const Botcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-12 py-10 overflow-hidden">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Intelligent <span className="text-blue-800">Chatbot Solutions</span> with <span className="text-orange-500">Conduvt</span>
      </h1>

      {/* Section 1 - Image left on desktop, top on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-16 max-w-7xl mx-auto">
        
        {/* Image: top on mobile, left on desktop */}
        <div className="flex justify-center items-center w-full order-1 md:order-1">
          <img
            src={image4}
            alt="Chatbot AI"
            className="w-full max-w-[500px] md:max-w-[650px] h-auto md:h-[650px] object-cover rounded-lg"
          />
        </div>

        {/* Title + Description: below image on mobile, right on desktop */}
        <div className="flex flex-col justify-center w-full md:max-w-[600px] md:ml-10 order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-400 mt-[30px]">
            Meet <span className="text-orange-400">Conduvt</span> – Your AI Chat Assistant
          </h2>

          <p className="text-gray-600 mt-[30px] text-base sm:text-lg text-justify">
            Conduvt is our proprietary AI-powered chatbot built to transform customer interactions into seamless, intelligent conversations. More than a typical chatbot, Conduvt functions as a dynamic virtual assistant capable of understanding user intent, responding contextually, and driving engagement across platforms like websites, WhatsApp, and mobile apps. It streamlines communication, reduces support workload, and increases operational efficiency by automating repetitive tasks, capturing leads, scheduling appointments, and offering tailored product recommendations — all with a natural, human-like tone.
          </p>

          <p className="text-gray-600 mt-[30px] text-base sm:text-lg text-justify">
            Designed for businesses of all sizes, Conduvt enables 24/7 support without sacrificing quality. It uses advanced NLP and contextual awareness to deliver personalized answers, escalate complex queries to human agents when needed, and constantly learn from interactions to improve accuracy. Whether you're a startup looking to scale or an enterprise seeking operational efficiency, Conduvt offers a scalable, flexible, and secure solution that bridges the gap between user needs and business outcomes, while elevating your brand's digital presence.
          </p>
        </div>
      </div>

      {/* Section 2 - Text left on desktop, but image on top for mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-16 max-w-7xl mx-auto">

        {/* Image: top on mobile (order-1), right on desktop (order-2) */}
        <div className="flex justify-center items-center w-full order-1 md:order-2">
          <img
            src={image5}
            alt="Chatbot Features"
            className="w-full max-w-[500px] md:max-w-[700px] h-auto md:h-[700px] object-cover rounded-lg"
          />
        </div>

        {/* Title + Description: below image on mobile (order-2), left on desktop (order-1) */}
        <div className="flex flex-col justify-center w-full md:pr-6 order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-200 mt-[30px]">
            Custom Features Built <span className="text-orange-400">for You</span>
          </h2>

          <p className="text-gray-600 mt-[30px] text-base sm:text-lg text-justify">
            Conduvt is packed with intelligent features tailored to diverse industries — from e-commerce and education to healthcare and enterprise SaaS. Its conversation builder allows businesses to customize interactions using condition-based logic, quick replies, action buttons, file uploads, OTP verification, and even multilingual support. With Conduvt, you can automate onboarding, appointment bookings, real-time FAQs, feedback collection, and lead qualification — all in one unified system. Each response is crafted based on user behavior, ensuring maximum relevance and personalization.
          </p>

          <p className="text-gray-600 mt-[30px] text-base sm:text-lg text-justify">
            Beyond automation, Conduvt provides real-time analytics and insights to monitor performance, understand user flow, and optimize conversations. Integration is seamless with your favorite tools — CRMs, payment gateways, email marketing services, and internal dashboards. The bot can automatically route complex inquiries to human agents, escalate complaints, and sync data to your database without manual input. Whether you're managing a support desk or driving a sales funnel, Conduvt gives you full control, smart customization, and a better way to engage your audience.
          </p>
        </div>
      </div>

      {/* Section 3 - Image left on desktop, top on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-16 max-w-7xl mx-auto">
        
        {/* Image: top on mobile, left on desktop */}
        <div className="flex justify-center items-center w-full order-1 md:order-1">
          <img
            src={image6}
            alt="Chatbot Tech Stack"
            className="w-full max-w-[500px] md:max-w-[700px] h-auto md:h-[700px] object-cover rounded-lg"
          />
        </div>

        {/* Title + Description: below image on mobile, right on desktop */}
        <div className="flex flex-col justify-center w-full md:ml-6 order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-200 mt-[30px]">
            Scalable, Secure & <span className="text-orange-400">Integration-Ready</span>
          </h2>

          <p className="text-gray-600 mt-[30px] text-base sm:text-lg text-justify">
            At the core of Conduvt lies a powerful and scalable architecture built using modern technologies like Node.js, WebSockets, and secure REST APIs. Our cloud-native deployment ensures uptime, resilience, and global accessibility with minimal latency. Whether you're handling 10 or 10,000 users simultaneously, Conduvt performs with high efficiency. All user data is encrypted and handled in compliance with data privacy laws, ensuring your users' trust is never compromised. The chatbot engine is modular, enabling plug-and-play use cases tailored to your workflows.
          </p>

          <p className="text-gray-600 mt-[30px] text-base sm:text-lg text-justify">
            Conduvt connects effortlessly with platforms like WhatsApp Business API, Google Sheets, Stripe for payments, Mailchimp, CRMs like Salesforce and HubSpot, and internal ERPs. Whether you're automating payment reminders, collecting survey data, or driving newsletter subscriptions, Conduvt fits right into your digital ecosystem. The bot is also fully responsive and can be deployed as a widget, modal, or full-page assistant. This means you can offer consistent, intelligent service to customers — anywhere, anytime, on any device.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Botcontent;