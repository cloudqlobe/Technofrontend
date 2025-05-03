import React from "react";
import image4 from "../assets/Image/5370051.jpg"; // Replace with cloud-related image if needed
import image5 from "../assets/Image/4709950.jpg";
import image6 from "../assets/Image/6500398.jpg";

const Pmcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Cloud <span className="text-blue-800">Computing Solutions</span>
      </h1>

      {/* Cloud Infrastructure Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Cloud Infrastructure"
             className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Reliable <span className="text-blue-600">Cloud Infrastructure</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our cloud infrastructure services are built to offer businesses unmatched performance, uptime, and scalability. We help you architect and deploy on industry-leading platforms like AWS, Microsoft Azure, and Google Cloud, leveraging their global presence and redundancy.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            We specialize in multi-region, multi-zone deployment strategies, load balancing, auto-scaling, and distributed storage systems—ensuring high availability and fault tolerance. Whether it's a public cloud, private setup, or hybrid model, we design solutions aligned with your operational and compliance requirements.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our team provides 24/7 monitoring, disaster recovery setups, and cost optimization practices to ensure your infrastructure is not only powerful but also economically sustainable.
          </p>
        </div>
      </div>

      {/* Cloud Services & Automation Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Scalable <span className="text-blue-600">Cloud Services</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            We offer a comprehensive suite of cloud services designed to streamline your IT operations and development lifecycle. With Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) models, we support full digital transformation across departments.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our automation solutions include CI/CD pipelines, containerization using Docker, orchestration with Kubernetes, and configuration management with tools like Terraform and Ansible. This ensures rapid deployment, version control, and minimal downtime.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            We also offer API integrations, serverless computing, and microservices architecture that allows your applications to run efficiently at scale while reducing infrastructure overhead and increasing development agility.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Cloud Services"
            className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Cloud Strategy & Consulting Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Cloud Consulting"
             className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">Expert <span className="text-blue-600">Cloud Consulting</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            Our cloud consulting services are designed to guide businesses at every stage of their cloud journey—from planning and migration to optimization and innovation. We begin by evaluating your existing IT ecosystem and business goals to define a strategic roadmap for cloud adoption.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            We help you make critical decisions such as choosing the right deployment model, estimating TCO, managing vendor lock-in, and ensuring governance and compliance. Whether you need help with cloud-native app design, container migration, or legacy modernization, our consultants bring deep technical and business insight.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            With hands-on support, documentation, training, and ongoing advisory services, we ensure your cloud environment is secure, efficient, and capable of supporting future growth with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pmcontent;
