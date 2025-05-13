import React from 'react';
import image16 from "../assets/Image/4351528.jpg";
import image17 from "../assets/Image/6500398.jpg";
import image18 from "../assets/Image/5730353.jpg";

const Hostingcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Advanced Hosting <span className="text-blue-800"> Solutions For Your Business</span>
      </h1>

      {/* Web Hosting Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto mt-[-40px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image18}
            alt="Web Hosting"
            className="w-[600px] h-[550px] object-cover rounded-lg mt-[40px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Reliable <span className="text-orange-400">Web Hosting</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our web hosting services are designed to offer high performance and reliability for websites of all sizes. Whether you're launching a small blog or a large e-commerce platform, our hosting solutions ensure that your site operates smoothly. With unlimited bandwidth, SSD storage, and high availability, we guarantee optimal performance for your users. Our hosting infrastructure is backed by the latest technologies, ensuring lightning-fast page loading speeds and a reliable online presence.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Security is a top priority for us. We offer free SSL certificates to encrypt your site, as well as automatic backups to protect your data. Our data centers are equipped with robust security measures and monitoring systems to safeguard against threats. Additionally, our customer support team is available 24/7 to assist with any issues, ensuring that your hosting experience is seamless and worry-free. With our scalable plans, you can easily upgrade your hosting as your business grows.
          </p>
        </div>
      </div>

      {/* Cloud Hosting Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-30px]">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Scalable <span className="text-orange-400">Cloud Hosting</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our cloud hosting services offer unmatched flexibility and scalability, perfect for businesses looking to expand. With our cloud infrastructure, you can scale your resources up or down in real time, ensuring that your website always has the resources it needs, no matter the traffic volume. By using multiple servers across the globe, we ensure that your website has high uptime and fast load times, regardless of where your customers are located.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We manage everything from server setup to security updates, so you can focus on growing your business without worrying about technical details. Our cloud hosting comes with a robust control panel, allowing you to monitor usage, adjust settings, and install software with ease. Additionally, we provide advanced security features such as firewalls, DDoS protection, and encryption to keep your data safe. With our global data centers, you can rest assured knowing your website is always running smoothly, no matter the time of day.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image16}
            alt="Cloud Hosting"
            className="w-[600px] h-[600px] object-cover rounded-lg mt-[30px] ml-[120px]"
          />
        </div>
      </div>

      {/* VPS Hosting Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto mt-[40px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image17}
            alt="VPS Hosting"
            className="w-[600px] h-[600px] object-cover mt-[-100px] ml-[-60px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Powerful <span className="text-orange-400">VPS Hosting</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our Virtual Private Server (VPS) hosting is ideal for businesses that require greater control over their hosting environment. With dedicated resources and full root access, you can customize your VPS to suit your specific needs. This means you can install custom software, configure security settings, and optimize your server's performance, all while benefiting from the stability and reliability of a dedicated server at a fraction of the cost.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            VPS hosting offers the perfect balance between shared and dedicated hosting. It provides more power, security, and control, making it an excellent choice for businesses with growing websites or web applications. With our VPS hosting, you also get high-level performance, secure isolated environments, and fully managed services, which allow you to focus on running your business without worrying about server maintenance. Plus, our customer support is available around the clock to assist with any technical challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hostingcontent;
