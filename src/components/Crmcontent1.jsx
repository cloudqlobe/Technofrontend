import React from 'react';
import image1 from '../assets/Image/5242970.jpg'; // Replace with your actual image
import image2 from '../assets/Image/6333412.jpg'; // Replace with your actual image

const Crmcontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Transform Your Business with <span className="text-blue-800">CRM Solutions</span>
      </h1>

      {/* CRM Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="CRM Solutions"
            className="w-[550px] h-[550px] object-cover rounded-lg mt-[50px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Advanced <span className="text-orange-400">CRM Solutions</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[30px]">
            Our CRM solutions are designed to streamline customer management and enhance engagement across multiple touchpoints. By leveraging customer data, we help businesses build stronger relationships, increase customer satisfaction, and improve retention rates. We focus on providing businesses with a centralized platform that enables them to manage every aspect of their customer interactions, from sales and support to marketing automation. This ensures that every department is aligned and can deliver consistent, personalized experiences to customers.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            In addition, our CRM systems are highly customizable and scalable, ensuring they can adapt to the evolving needs of your business. By integrating with existing platforms like email, social media, and analytics tools, we ensure seamless data flow and real-time updates across all customer touchpoints. This powerful system empowers businesses to not only manage their customer relationships but to anticipate needs, track interactions, and forecast future trends, ultimately improving efficiency and bottom-line results.
          </p>
        </div>
      </div>

      {/* Customer Support Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[60px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">Enhanced <span className="text-orange-400">Customer Support</span></h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our CRM solutions come equipped with advanced customer support features that enable businesses to provide quicker, more efficient, and more personalized service. Integrated help desks, automated ticketing systems, and multi-channel support ensure that customer inquiries are addressed promptly and accurately. By empowering support teams with the tools they need to resolve issues quickly, businesses can significantly improve customer satisfaction and reduce response times, leading to enhanced loyalty and better customer experiences.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Furthermore, our CRM support systems incorporate AI-driven chatbots that provide instant responses to common customer inquiries, freeing up your support team to handle more complex issues. These AI assistants also continuously learn from customer interactions to offer increasingly accurate solutions over time. By incorporating detailed analytics and reporting features, our CRM solutions allow businesses to track the effectiveness of their customer support efforts, uncover trends, and make data-driven decisions that improve service levels and operational efficiency.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Customer Support"
            className="w-[550px] h-[550px] object-cover rounded-lg ml-[130px] mt-[-50px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Crmcontent1;
