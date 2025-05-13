import React from "react";
import image4 from "../assets/Image/5370051.jpg"; // Cloud-related image
import image5 from "../assets/Image/4709950.jpg"; // Cloud-related image
import image6 from "../assets/Image/6500398.jpg"; // Cloud-related image

const Cloudcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
  Transform Your Business with <span className="text-blue-800">Cloud Computing Excellence</span>
</h1>


      {/* Cloud Infrastructure Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto mt-[-40px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Cloud Infrastructure"
            className="w-[650px] h-[650px] object-cover rounded-lg mt-[50px] ml-[-150px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[57px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Scalable and Reliable <span className="text-orange-400">Cloud Infrastructure</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our cloud infrastructure solutions are designed to scale with your business needs. By leveraging state-of-the-art cloud platforms, we ensure your systems are both flexible and resilient. We use a combination of public, private, and hybrid cloud models to create a tailored infrastructure that suits your business's unique requirements. This approach helps you reduce overhead, improve accessibility, and ensure high uptime for your critical systems.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            With an emphasis on security and performance, we implement robust cloud solutions that allow your business to stay competitive. Our team utilizes the best industry practices to ensure data privacy, disaster recovery, and business continuity. By incorporating cloud monitoring and performance optimization, we enable your systems to deliver superior performance while reducing operational costs. Our cloud infrastructure is built to scale, grow with your business, and handle future demands with ease.
          </p>
        </div>
      </div>

      {/* Cloud Security Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[60px]">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Robust <span className="text-orange-400">Cloud Security</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            As more businesses move to the cloud, securing your data becomes critical. Our cloud security services include comprehensive encryption, identity and access management, and regular audits to ensure your systems are protected from unauthorized access and data breaches. We design security strategies that adhere to compliance standards like GDPR, HIPAA, and more. By utilizing cutting-edge security technologies, we keep your business safe while maintaining high availability.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We also implement multi-layered protection, including firewalls, intrusion detection systems, and continuous monitoring to defend against potential threats. Our cloud security services are customized to meet the specific needs of your organization, whether you’re operating in a highly regulated industry or need a solution for more general business operations. With a focus on risk management, our solutions provide you peace of mind, allowing you to focus on growing your business without worrying about security vulnerabilities.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Cloud Security"
            className="w-[650px] h-[650px] object-cover rounded-lg mt-[-50px] ml-[100px]"
          />
        </div>
      </div>

      {/* Cloud Management Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto mt-[100px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Cloud Management"
            className="w-[650px] h-[650px] object-cover mt-[-130px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Expert <span className="text-orange-400">Cloud Management</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our expert cloud management services are designed to streamline and optimize the administration of your cloud infrastructure. We provide 24/7 monitoring, performance analysis, and proactive maintenance to ensure your cloud environment is always running at its best. Our team works closely with your organization to understand your objectives, ensuring that your cloud solutions are both cost-effective and performance-driven. From managing resources to ensuring compliance, we take care of your cloud environment, so you don’t have to.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We also offer cost optimization strategies, helping you manage cloud expenses efficiently by eliminating underutilized resources and scaling your infrastructure based on demand. By implementing automation and best practices, we simplify cloud operations, allowing your IT teams to focus on innovation. Our cloud management services ensure maximum efficiency, reliability, and scalability, all while enabling you to focus on what matters most—your business's growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cloudcontent;
