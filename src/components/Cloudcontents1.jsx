import React from 'react';
import image1 from '../assets/Image/10895191.jpg'; // Cloud Infra Image
import image2 from '../assets/Image/6478073.jpg'; // Cloud Design UI Image
import Designcontent from './Designcontent';

const Cloudcontents1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Cutting-Edge <span className="text-blue-800">Cloud Computing Solutions</span> for Your Business
      </h1>

      {/* Cloud Infrastructure Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Cloud Infrastructure"
            className="w-[500px] h-[500px] object-cover rounded-lg ml-[-120px] mt-[30px] "
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Scalable <span className="text-orange-400">Cloud Infrastructure</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[30px]">
            Our cloud computing solutions enable businesses to scale and innovate seamlessly. We provide scalable infrastructure that grows with your business needs, from hosting to storage, data processing, and virtualized environments. Whether it's public, private, or hybrid cloud, our solutions are designed to optimize performance while minimizing downtime. Cloud computing enhances business continuity and allows you to focus on core operations without worrying about infrastructure management.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            With our cloud solutions, you can leverage the power of advanced technologies like artificial intelligence (AI), machine learning (ML), and big data analytics, all hosted securely in the cloud. Our services also include disaster recovery planning, real-time data synchronization, and easy access to business-critical applications. We ensure a secure and compliant cloud environment with a focus on performance, scalability, and cost-efficiency.
          </p>
        </div>
      </div>

      {/* Cloud-based Chatbot Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[100px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Intelligent <span className="text-orange-400">Cloud-Powered Chatbots</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Harness the power of cloud computing to deliver intelligent, scalable chatbot solutions. Our cloud-based AI chatbots are designed to integrate effortlessly with your cloud infrastructure, enabling them to process vast amounts of data and interact with customers in real-time. Whether handling inquiries, processing transactions, or providing support, these chatbots offer an enhanced customer experience by leveraging the computational power and storage of the cloud.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our chatbots are powered by machine learning algorithms that allow them to continuously improve based on customer interactions. They can be easily integrated with cloud-based CRM systems, providing personalized and automated responses to customers. This makes your business operations more efficient by reducing manual tasks, lowering costs, and providing instant, 24/7 customer support. With cloud-based chatbots, you gain flexibility and scalability without compromising on performance or security.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="Cloud Chatbot Solutions"
            className="w-[600px] h-[600px] object-cover rounded-lg ml-[170px] mt-[-50px]"
          />
        </div>
      </div>

      {/* Custom Cloud Software Solutions Section */}
    </div>
  );
};

export default Cloudcontents1;
