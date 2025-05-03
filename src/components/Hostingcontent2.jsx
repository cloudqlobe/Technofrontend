import React from 'react';
import image1 from '../assets/Image/4709950.jpg'; // Replace with your actual image
import image2 from '../assets/Image/5648291.jpg'; // Replace with your actual image

const Hostingcontent2 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-semibold text-black mb-16">
        Premium Hosting Services for<span className='text-blue-800'> Fast, Secure, and Scalable Websites</span>
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="Hosting Performance"
            className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black ">Fast Loading,</span>{' '}
            <span className="text-blue-800">Reliable Hosting</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our hosting solutions are designed for speed and reliability. Using cutting-edge SSD and NVMe storage, along with high-performance servers and a global CDN, your website will load in milliseconds — keeping users engaged and conversions high.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Whether you are hosting a simple website, a growing eCommerce platform, or a high-traffic blog, our infrastructure ensures uptime, speed, and dependability. We offer scalable plans that grow with your business.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Enjoy one-click installations, free domain registration, and lightning-fast support to help you get online effortlessly and stay ahead of the curve.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="Secure Hosting"
           className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">Top-Tier Security</span>{' '}
            <span className="text-blue-800">& Peace of Mind</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Security is our top priority. Our hosting plans come with built-in firewall protection, free SSL certificates, DDoS attack mitigation, and real-time malware scanning to safeguard your website and customer data.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            With automated daily backups, two-factor authentication, and secure access management, we make sure your site remains protected against any potential threat — so you can focus on growing your business.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From small businesses to enterprise-level applications, our secure hosting ensures peace of mind every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hostingcontent2;
