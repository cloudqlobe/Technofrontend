import React from "react";
import image1 from "../assets/Image/4117025.jpg";
import image2 from "../assets/Image/4574923.jpg";

const Erpcontents1 = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-8 lg:px-16 py-12 overflow-hidden">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-4xl text-center text-black lg:mb-20 mb-12">
        Innovative ERP Solutions{" "}
        <span className="text-blue-800">for Your Business</span>
      </h1>

      {/* ===== ERP Solutions Section ===== */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto mb-16">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image1}
            alt="ERP Solutions"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">
            Cutting-edge{" "}
            <span className="text-orange-400">ERP Solutions</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify mb-4">
            Our ERP solutions are designed to streamline your business processes,
            integrating various functions such as inventory management, order
            processing, accounting, and human resources. By centralizing data
            across all departments, ERP systems help businesses make more
            informed decisions, improve operational efficiency, and reduce
            manual errors. With real-time reporting, our ERP solutions provide
            a comprehensive view of your business, helping you stay agile in a
            fast-changing market.
          </p>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify">
            Our ERP system offers a range of customizable modules, so you can
            choose the features that align with your specific business needs.
            Whether you're looking to improve supply chain management, automate
            accounting processes, or enhance customer relationship management,
            our solutions are scalable and adaptable. With cloud-based options,
            you can access your data securely from anywhere, empowering your
            team to collaborate efficiently and boost productivity.
          </p>
        </div>
      </div>

      {/* ===== ERP Chatbot Solutions Section ===== */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">

        {/* Content First on Mobile */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">
            Intelligent{" "}
            <span className="text-orange-400">
              ERP Chatbot Solutions
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify mb-4">
            Our AI-powered ERP chatbots are designed to improve the user
            experience by automating tasks, providing instant support, and
            answering user queries about ERP systems. These chatbots seamlessly
            integrate with your ERP software, enabling employees to access
            real-time data, track orders, or generate reports without navigating
            through complex menus. By leveraging natural language processing,
            they make it easier for users to interact with the system,
            resulting in increased efficiency and reduced dependency on IT
            support teams.
          </p>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify">
            These chatbots can be customized to address specific needs,
            whether for HR management, sales tracking, or inventory management.
            With continuous learning capabilities, they evolve to provide more
            accurate and relevant responses over time. By integrating with ERP
            systems, the chatbots also enhance the accessibility of vital
            business information, enabling faster decision-making and enhancing
            operational workflows across departments. Empower your team with
            AI-driven ERP support and take your business to the next level.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={image2}
            alt="ERP Chatbot Solutions"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-lg object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default Erpcontents1;
