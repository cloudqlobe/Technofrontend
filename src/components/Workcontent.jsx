import React from "react";
import image1 from "../assets/Image/build-robots.jpg";
import image2 from "../assets/Image/10233603.jpg";
import image3 from "../assets/Image/12643942_5024145.svg";

const Workcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Driving Innovation Through <span className="text-blue-800">Complete IT Solutions</span>
      </h1>

      {/* Section 1: App & Web Development */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="App & Web Development"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mb-4">
            Powerful <span className="text-orange-400">App & Web Development</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[20px]">
            We specialize in developing fast, responsive, and scalable mobile applications and websites using cutting-edge technologies like React, Flutter, Node.js, and more. Our team ensures every project aligns with your brand vision while delivering high-performance functionality across devices. Whether it’s a consumer-facing app or an internal management system, we prioritize code quality, intuitive design, and flawless integration.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            From ideation and wireframing to backend infrastructure and launch, we offer end-to-end development services. Our team handles cross-platform compatibility, responsive design, and API integration to bring your ideas to life. We also ensure seamless updates and maintenance post-launch so your digital solutions remain optimized, secure, and ahead of the curve in user experience and performance.
          </p>
        </div>
      </div>

      {/* Section 2: UI/UX, Custom Software, Cybersecurity */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[-24px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200 mb-4 mt-[40px]">
            Tailored <span className="text-orange-400">UI/UX & Software Solutions</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We build intuitive, modern interfaces and robust software tailored to your business needs. Our UI/UX design team focuses on user behavior and interface logic to deliver visually appealing and highly usable experiences. From ERP systems to CRM tools and automation platforms, our custom software solutions are engineered for flexibility, scalability, and efficiency across all industries.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Security is at the heart of every solution we develop. We embed cybersecurity best practices into every layer—from secure coding and encrypted data handling to advanced threat detection and compliance protocols. Our team conducts regular audits, vulnerability assessments, and offers real-time protection mechanisms, ensuring your software remains resilient against cyber threats while delivering top performance.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="UI/UX and Security"
            className="w-[85%] h-[450px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 3: Cloud & Hosting */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-8 max-w-7xl mx-auto mt-[-50px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image3}
            alt="Cloud Hosting Solutions"
            className="w-[90%] h-[500px] object-cover mt-[10px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full ml-[30px]">
          <h2 className="text-4xl font-default text-grey-200 mb-2  mt-16">
          Cloud Infrastructure <span className="text-orange-400"> & Security</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our cloud hosting and infrastructure services are designed to ensure seamless scalability, performance, and uptime. Whether you need shared hosting, VPS, or a full cloud-native deployment, we help businesses modernize infrastructure and transition securely to the cloud with minimal downtime. Our solutions also support DevOps automation and multi-region architecture for global reach and business continuity.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We integrate cybersecurity into every cloud solution—offering firewalls, DDoS protection, data encryption, and compliance-ready configurations. With real-time monitoring and regular backups, your digital assets stay safe and operational. Partnering with top-tier providers, we deliver secure and cost-effective infrastructure that grows with your business while ensuring top-tier protection and support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workcontent;
