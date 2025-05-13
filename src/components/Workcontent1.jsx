import React from "react";
import image1 from "../assets/Image/build-robots.jpg";
import image2 from "../assets/Image/10233603.jpg";

const Workcontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        All-in-One <span className="text-blue-800">Business Software Suite</span>
      </h1>

      {/* Chatbot Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-16 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="Chatbot Solutions"
            className="w-[85%] h-[450px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:ml-[58px]">
          <h2 className="text-4xl font-default text-gray-800  mt-[30px]">
            AI-Powered <span className="text-orange-400">Chatbot Solutions</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[30px]">
            Transform how your business communicates with customers using our AI-driven chatbot solutions. Our chatbots simulate real-time, human-like conversations and are available 24/7 — enabling faster query resolution, reducing support costs, and increasing engagement across digital touchpoints. Designed with intuitive conversational flows, they not only answer questions but also guide users through product selection, onboarding processes, and even post-purchase support.
          </p>
          <p className="text-gray-600 mt-5 leading-relaxing text-lg text-justify mt-[30px]">
            Powered by advanced natural language processing (NLP) and machine learning algorithms, our chatbots learn from interactions and evolve continuously. They seamlessly integrate with websites, mobile apps, messaging platforms, and CRMs to provide cohesive service across all channels. Ideal for industries such as e-commerce, healthcare, finance, and education, these bots handle everything from appointment scheduling and lead generation to feedback collection and real-time analytics — making them a strategic tool for business growth.
          </p>
        </div>
      </div>

      {/* CRM + Project + Billing Software Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center w-full md:ml-[-45px]">
          <h2 className="text-4xl font-default text-gray-800  mt-[30px]">
            Seamless <span className="text-orange-400">Business Software Integration</span>
          </h2>

          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-5 mt-[30px]">
            Our integrated business suite combines CRM, project management, and billing software into a single streamlined system. The CRM module empowers your team to manage leads, track client interactions, automate follow-ups, and drive better customer relationships. Meanwhile, the project management system helps teams stay organized and collaborative with Gantt charts, milestones, task tracking, and real-time progress updates — ensuring timely project completion with full visibility.
          </p>

          <p className="text-gray-600 mt-5 leading-relaxing text-lg text-justify mt-[30px]">
            On the financial side, our billing and invoicing platform simplifies operations with features like customizable invoice templates, recurring billing, tax management, multi-currency support, and automated reminders. Everything is accessible from one central dashboard, allowing you to reduce manual errors, save time, and make data-driven decisions for scaling your business efficiently — whether you’re running a startup or a large enterprise.
          </p>
        </div>

        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Business Software Suite"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Workcontent1;
