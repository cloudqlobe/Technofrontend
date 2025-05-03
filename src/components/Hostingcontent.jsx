import React from 'react';
import image16 from "../assets/Image/4351528.jpg";
import image17 from "../assets/Image/6500398.jpg";
import image18 from "../assets/Image/5730353.jpg";

const Hostingcontent = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      <h2 className="text-center text-4xl font-semibold text-black mb-16">
        Hosting Services <span className='text-blue-800'>Highlights</span>
      </h2>

      {/* Section 1 - Image Left */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0">
          <img
            src={image18}
            alt="High Performance Hosting"
           className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">High-Performance</span>{' '}
            <span className="text-blue-600">Infrastructure</span>
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Our hosting services are built on cutting-edge infrastructure designed for speed, stability, and scalability. With high-speed SSD and NVMe storage, your websites and applications load faster than ever. Paired with a global CDN and advanced caching mechanisms, we ensure your content is delivered swiftly across the world—no matter where your audience is located.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            We understand the demands of modern websites, whether you're running a blog, a high-traffic eCommerce store, or a mission-critical SaaS product. That's why our hosting plans are optimized for peak performance under all conditions. You get 99.9% uptime, low latency, and seamless user experience, even during traffic spikes or promotional campaigns.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-20">
        <div className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0">
          <img
            src={image16}
            alt="Secure Hosting"
            className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">Security-Focused</span>{' '}
            <span className="text-blue-600">Architecture</span>
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Your data’s safety is non-negotiable. Our hosting platform includes multi-layered security measures such as enterprise-grade firewalls, real-time malware scanning, brute-force prevention, and DDoS attack mitigation. Each hosting environment is isolated, reducing the risk of cross-contamination and keeping your data protected at all times.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            We also offer automated daily backups, file integrity checks, and proactive threat monitoring to ensure you’re always one step ahead of potential vulnerabilities. SSL certificates are provided by default, and with our secured access and two-factor authentication options, managing your account is both simple and secure.
          </p>
        </div>
      </div>

      {/* Section 3 - Image Left */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0">
          <img
            src={image17}
            alt="Control Panel Interface"
            className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">User-Friendly</span>{' '}
            <span className="text-blue-800">Control Panel</span>
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Take control of your hosting with an intuitive, easy-to-navigate control panel. Whether you're managing domains, installing applications, creating databases, or checking email traffic, our panel simplifies everything. Built for both beginners and advanced users, it offers all the tools you need in a single dashboard.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Features like one-click installations for WordPress and other CMSs, resource usage tracking, auto-renewal controls, FTP access, and file manager make your hosting experience seamless. Plus, our AI-powered support and knowledge base are just a click away if you ever need help. Spend less time managing and more time building your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hostingcontent;
