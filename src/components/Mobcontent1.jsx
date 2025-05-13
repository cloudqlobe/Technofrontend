import React from 'react';
import image1 from '../assets/Image/5044055.jpg'; // Replace with your actual image
import image2 from '../assets/Image/4950546.jpg'; // Replace with your actual image
import Mobcontent from './Mobcontent';

const Mobcontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Innovative <span className="text-blue-800">App Development Solutions</span> for Your Business
      </h1>

      {/* App Development Section 1 */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="App Development"
            className="w-[600px] h-[600px] object-cover rounded-lg mt-[30px] ml-[-130px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Mobile & Web <span className="text-orange-400">App Development</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[30px]">
            Our expert team builds scalable mobile and web applications tailored to your business goals. We take a full-stack approach to create solutions that are not only highly functional but also user-friendly. Our focus is to deliver seamless performance across platforms, whether it’s iOS, Android, or web-based applications. Using the latest technologies such as Flutter, React Native, and Node.js, we ensure your app performs optimally, offering smooth experiences for your users.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our approach to app development integrates agile methodologies to allow rapid iteration and continuous improvement. By placing a high priority on both the frontend and backend, we create scalable systems that are able to adapt to new business challenges. Additionally, we focus on performance optimization and responsive design to ensure your app delivers exceptional speed and a visually appealing interface across all devices, from smartphones to desktops.
          </p>
        </div>
      </div>

      {/* App Development Section 2 */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[-24px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Custom <span className="text-orange-400">App Solutions</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We specialize in building custom apps that solve real-world business problems. Whether it’s improving internal operations or launching a consumer-facing product, we create tailor-made applications that match your specific goals. From e-commerce apps and social platforms to healthcare solutions, we adapt to your industry’s unique challenges to deliver results. We focus on clean code, seamless integration, and rapid deployment to make sure your app is live and working with minimal downtime.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our custom app solutions provide long-term value by incorporating the latest industry standards for security, scalability, and functionality. We understand that every business has distinct needs, and as such, we provide fully personalized solutions that evolve with you. We ensure that your app will scale with the growth of your user base and remain secure while delivering a user-friendly experience. Our commitment to continuous maintenance and updates keeps your app current with new technologies and market trends.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Custom App Solutions"
            className="w-[600px] h-[600pxpx] object-cover rounded-lg ml-[100px] mt-[10px]"
          />
        </div>
      </div>

      {/* Additional Content (optional) */}
    </div>
  );
};

export default Mobcontent1;
