import React from 'react';
import image1 from '../assets/Image/6548442.jpg'; // Chatbot Section Image 1
import image2 from '../assets/Image/10286772.jpg'; // Chatbot Section Image 2

const Botcontents1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Advanced <span className="text-blue-800">AI Chatbot Solutions</span> for Modern Businesses
      </h1>

      {/* Section 1: AI-Powered Customer Engagement */}
      <div className="grid md:grid-cols-2 items-center gap-6 max-w-7xl mx-auto mt-10">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            AI-Powered <span className="text-orange-400">Customer Engagement</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify mt-[30px] leading-relaxing">
            Our AI chatbots are equipped with cutting-edge natural language processing (NLP) engines and machine learning models that allow them to interact with users in a highly intuitive and human-like manner. They analyze customer inputs, recognize patterns, and provide tailored responses that guide users toward their desired outcomes. Whether handling routine inquiries or providing detailed product recommendations, our bots deliver consistent, 24/7 support that significantly reduces the need for human intervention while maintaining high service quality.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-[30px] leading-relaxing">
            These intelligent systems are easily integrated into websites, mobile apps, social media platforms, and CRM tools, offering businesses a unified communication strategy across all digital touchpoints. They come with features like multilingual conversation handling, sentiment detection, escalation to live agents when necessary, and real-time performance tracking. With continuous learning algorithms, the bots improve with every interaction, making your customer service not just automated, but smarter over time. This results in improved CSAT scores, reduced operational costs, and increased customer loyalty.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="AI Customer Engagement"
            className="w-[700px] h-[700px] object-cover rounded-lg ml-[120px]"
          />
        </div>
      </div>

      {/* Section 2: Domain-Specific Smart Chatbots */}
      <div className="grid md:grid-cols-2 items-center gap-6 max-w-7xl mx-auto mt-[-100px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Domain-Specific Chatbots"
            className="w-[700px] h-[700px] object-cover rounded-lg mt-[130px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Domain-Specific <span className="text-orange-400">Smart Chatbots</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify  leading-relaxing mt-[30px]">
            Our chatbot solutions go beyond generic automation—they are meticulously engineered for specific domains like healthcare, retail, education, travel, and finance. Each chatbot is customized with a knowledge base and interaction flows that reflect the nuances of the industry it serves. In healthcare, for instance, bots can help manage appointments, deliver post-care instructions, and even support basic symptom assessments, all while adhering to HIPAA compliance. In e-commerce, chatbots assist with product discovery, cart management, and order tracking, creating a personalized shopping experience.
          </p>
          <p className="text-gray-600 mt-3 text-lg text-justify leading-relaxing mt-[30px]">
            These bots are equipped with advanced contextual memory, role-based access, and secure data handling protocols, ensuring both functionality and compliance with regulatory standards. They also support visual inputs (like image uploads), voice conversations, and even predictive analytics to offer data-driven suggestions. With dashboards for admin oversight, continuous performance optimization, and integration with backend systems like ERPs and databases, our domain-specific chatbots are more than just a support tool—they're a scalable digital asset that drives customer satisfaction and operational efficiency across sectors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Botcontents1;
