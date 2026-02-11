import React from 'react';
import image1 from '../assets/Image/10895191.jpg'; // Cloud Infra Image
import image2 from '../assets/Image/6478073.jpg'; // Cloud Design UI Image

const Cloudcontents1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-8 lg:px-12 py-10 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-black mb-8 mt-[30px] px-4">
        Cutting-Edge <span className="text-blue-800">Cloud Computing Solutions</span> for Your Business
      </h1>

      {/* App Development Section 1 */}
      <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-8 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2 order-1 md:order-1">
          <img
            src={image2}
            alt="Cloud Infrastructure"
            className="w-full max-w-[600px] h-auto md:h-[600px] object-cover rounded-lg mt-4 md:mt-[30px] md:ml-[-130px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-[600px] px-4 md:px-0 md:ml-[58px] order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-default text-grey-400 mt-4 md:mt-[30px]">
            Scalable <span className="text-orange-400">Cloud Infrastructure</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-justify mt-4 md:mt-[30px]">
            Our cloud computing solutions enable businesses to scale and innovate seamlessly. We provide scalable infrastructure that grows with your business needs, from hosting to storage, data processing, and virtualized environments. Whether it's public, private, or hybrid cloud, our solutions are designed to optimize performance while minimizing downtime. Cloud computing enhances business continuity and allows you to focus on core operations without worrying about infrastructure management.
          </p>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-justify mt-3 md:mt-[30px]">
            With our cloud solutions, you can leverage the power of advanced technologies like artificial intelligence (AI), machine learning (ML), and big data analytics, all hosted securely in the cloud. Our services also include disaster recovery planning, real-time data synchronization, and easy access to business-critical applications. We ensure a secure and compliant cloud environment with a focus on performance, scalability, and cost-efficiency.
          </p>
        </div>
      </div>

      {/* App Development Section 2 */}
      <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-8 mb-8 max-w-7xl mx-auto mt-4 md:mt-[-24px]">
        <div className="flex flex-col justify-center w-full px-4 md:px-0 md:ml-[-45px] order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-default text-grey-200 mt-4 md:mt-[30px]">
            Intelligent <span className="text-orange-400">Cloud-Powered Chatbots</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-justify mt-4 md:mt-[30px]">
            Harness the power of cloud computing to deliver intelligent, scalable chatbot solutions. Our cloud-based AI chatbots are designed to integrate effortlessly with your cloud infrastructure, enabling them to process vast amounts of data and interact with customers in real-time. Whether handling inquiries, processing transactions, or providing support, these chatbots offer an enhanced customer experience by leveraging the computational power and storage of the cloud.
          </p>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-justify mt-3 md:mt-[30px]">
            Our chatbots are powered by machine learning algorithms that allow them to continuously improve based on customer interactions. They can be easily integrated with cloud-based CRM systems, providing personalized and automated responses to customers. This makes your business operations more efficient by reducing manual tasks, lowering costs, and providing instant, 24/7 customer support. With cloud-based chatbots, you gain flexibility and scalability without compromising on performance or security.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2 order-1 md:order-2">
          <img
            src={image1}
            alt="Cloud Chatbot Solutions"
            className="w-full max-w-[500px] h-auto md:h-[500px] object-cover rounded-lg md:ml-[100px] mt-4 md:mt-[10px]"
          />
        </div>
      </div>

      {/* Additional Content (optional) */}
    </div>
  );
};

export default Cloudcontents1;