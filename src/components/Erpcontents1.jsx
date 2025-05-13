import React from 'react';
import image1 from '../assets/Image/4117025.jpg'; // Replace with your actual image
import image2 from '../assets/Image/4574923.jpg'; // Replace with your actual image
import Designcontent from './Designcontent';

const Erpcontents1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Innovative ERP Solutions <span className="text-blue-800">for Your Business</span>
      </h1>

      {/* ERP Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="ERP Solutions"
            className="w-[550px] h-[550px] object-cover rounded-lg mt-[30px] ml-[-80px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Cutting-edge <span className="text-orange-400">ERP Solutions</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[30px]">
            Our ERP solutions are designed to streamline your business processes, integrating various functions such as inventory management, order processing, accounting, and human resources. By centralizing data across all departments, ERP systems help businesses make more informed decisions, improve operational efficiency, and reduce manual errors. With real-time reporting, our ERP solutions provide a comprehensive view of your business, helping you stay agile in a fast-changing market.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our ERP system offers a range of customizable modules, so you can choose the features that align with your specific business needs. Whether you're looking to improve supply chain management, automate accounting processes, or enhance customer relationship management, our solutions are scalable and adaptable. With cloud-based options, you can access your data securely from anywhere, empowering your team to collaborate efficiently and boost productivity.
          </p>
        </div>
      </div>

      {/* ERP Chatbot Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[-24px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Intelligent <span className="text-orange-400">ERP Chatbot Solutions</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our AI-powered ERP chatbots are designed to improve the user experience by automating tasks, providing instant support, and answering user queries about ERP systems. These chatbots seamlessly integrate with your ERP software, enabling employees to access real-time data, track orders, or generate reports without navigating through complex menus. By leveraging natural language processing, they make it easier for users to interact with the system, resulting in increased efficiency and reduced dependency on IT support teams.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            These chatbots can be customized to address specific needs, whether for HR management, sales tracking, or inventory management. With continuous learning capabilities, they evolve to provide more accurate and relevant responses over time. By integrating with ERP systems, the chatbots also enhance the accessibility of vital business information, enabling faster decision-making and enhancing operational workflows across departments. Empower your team with AI-driven ERP support and take your business to the next level.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="ERP Chatbot Solutions"
            className="w-[600px] h-[600px] object-cover rounded-lg ml-[130px] "
          />
        </div>
      </div>

      {/* ERP Custom Solutions Section */}
      
    </div>
  );
};

export default Erpcontents1;
