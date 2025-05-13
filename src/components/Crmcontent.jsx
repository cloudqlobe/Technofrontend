import React from "react";
import image4 from "../assets/Image/5922860.jpg";
import image5 from "../assets/Image/4990138.jpg";
import image6 from "../assets/Image/5_communication02.jpg";
import Crmcontent1 from "./Crmcontent1";

const Crmcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Advanced <span className="text-blue-800">CRM Solutions</span>
      </h1>

      {/* CRM Front-End Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto mt-[-30px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="CRM Frontend Development"
            className="w-[600px] h-[600px] object-cover rounded-lg ml-[-120px] mt-[20px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[57px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Intuitive <span className="text-orange-400">CRM Interfaces</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We design seamless, user-friendly CRM interfaces to make managing customer relationships effortless. From contact management to sales pipelines, our CRM systems provide intuitive layouts that enhance user experience across devices. Whether you're working on the go or in the office, our interfaces ensure a smooth workflow and easy access to critical data.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            The custom CRM dashboards we develop allow businesses to track customer interactions, analyze sales metrics, and improve team collaboration. Additionally, we incorporate flexible data entry forms, task management features, and real-time reporting tools that give your team the ability to address customer needs quickly and effectively, ultimately leading to higher conversion rates and more personalized service.
          </p>
        </div>
      </div>

      {/* CRM Backend Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[60px]">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Scalable <span className="text-orange-400">CRM Backend Systems</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our CRM backend systems are designed to handle large amounts of customer data while maintaining top-tier security and performance. By leveraging technologies like Node.js and Express, we ensure that your CRM application scales with your business. Whether it’s managing leads, tracking customer activities, or automating workflows, our back-end solutions provide a solid foundation for CRM systems that drive growth.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We integrate crucial backend features like role-based access control, customer segmentation, and advanced analytics to give you deeper insights into your business. The architecture we use ensures that your CRM grows with your customer base, supporting everything from simple lead management to complex customer journeys. This scalable and secure framework guarantees that as your customer database expands, the system remains fast, responsive, and easy to manage.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="CRM Backend Development"
            className="w-[550px] h-[550px] object-cover rounded-lg mt-[-50px] ml-[100px]"
          />
        </div>
      </div>

      {/* Custom CRM Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto mt-[100px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Custom CRM Solutions"
            className="w-[700px] h-[700px] object-cover mt-[-100px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Tailored <span className="text-orange-400">CRM Solutions</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our custom CRM systems are built to cater to your business’s unique needs. Whether you require advanced reporting, custom workflow automation, or integration with third-party tools, we have the expertise to create CRM solutions that meet your specifications. Using technologies like the MERN stack, we ensure that your CRM system is not only easy to use but also flexible and extensible, capable of evolving as your business grows.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We design CRM systems that integrate seamlessly with your existing business processes, whether it's for customer support, sales, or marketing. Our development approach includes detailed data tracking, real-time analytics, and custom features that align with your business goals. The result is a CRM system that helps you build long-lasting relationships with your customers, streamlining interactions, and improving retention. By combining powerful functionality with a user-friendly interface, we ensure that your CRM becomes a key asset in growing your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crmcontent;
