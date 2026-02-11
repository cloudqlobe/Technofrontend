import React from "react";
import image4 from "../assets/Image/10625917.jpg";
import image5 from "../assets/Image/6502435.jpg";
import image6 from "../assets/Image/6224584.jpg";

const Techcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-8 lg:px-12 py-10 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-black mb-8 mt-[30px] px-4">
        End-to-End <span className="text-blue-800">Tech Consultancy Solutions</span>
      </h1>

      {/* Tech Strategy Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-8 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2 order-1 md:order-1">
          <img
            src={image4}
            alt="Tech Strategy"
            className="w-full max-w-[550px] h-auto md:h-[550px] object-cover rounded-lg mt-4 md:mt-[60px] md:ml-[-150px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-[600px] px-4 md:px-0 md:ml-[58px] order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-default text-grey-400 mb-2 mt-4 md:mt-[30px]">
            Strategic <span className="text-orange-400">Technology Roadmapping</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg text-justify mt-4 md:mt-[30px] leading-relaxed">
            We specialize in crafting tailored technology roadmaps that align your digital assets with long-term business goals. Our strategic approach begins with a comprehensive analysis of your workflows, infrastructure, and market opportunities. We evaluate your current systems, identify gaps, and introduce future-ready technology stacks that support scalability, innovation, and efficiency. Every roadmap is customized to empower business leaders with tech-driven decision-making capabilities that foster growth and adaptability in a competitive landscape.
          </p>
          <p className="text-gray-600 text-base lg:text-lg text-justify mt-3 md:mt-[30px] leading-relaxed">
            Our consultants blend deep technical knowledge with industry foresight to integrate transformative technologies like AI, cloud-native solutions, and automation. We ensure each milestone in the roadmap includes practical, implementable steps — from stakeholder alignment and resource planning to budget forecasting and risk mitigation. The result is a seamless strategy that transitions your business from its current digital state to an optimized, high-performing ecosystem.
          </p>
        </div>
      </div>

      {/* Systems Architecture Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-8 mb-10 max-w-7xl mx-auto mt-4 md:mt-[-20px]">
        <div className="flex flex-col justify-center w-full md:w-[600px] px-4 md:px-0 md:ml-[-40px] order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-default text-grey-400 mt-4 md:mt-[30px]">
            Resilient <span className="text-orange-400">System Architecture</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg text-justify mt-4 md:mt-[30px] leading-relaxed">
            Robust architecture is the backbone of high-performance systems, and our consultants focus on building infrastructure that can handle scale, complexity, and change. Whether designing from scratch or optimizing an existing system, we emphasize modularity, microservices, fault-tolerance, and secure data flows. We use modern architecture patterns such as event-driven designs and containerized environments that allow systems to evolve smoothly as business demands grow.
          </p>
          <p className="text-gray-600 text-base lg:text-lg text-justify mt-3 md:mt-[30px] leading-relaxed">
            We help clients move away from monolithic structures and legacy bottlenecks by introducing technologies like Kubernetes, API gateways, and hybrid cloud frameworks. Our team ensures seamless interoperability between services, disaster recovery planning, and compliance with industry standards. The result is a highly available and scalable tech stack designed for operational efficiency, cost optimization, and long-term resilience.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2 order-1 md:order-2">
          <img
            src={image5}
            alt="System Architecture"
            className="w-full max-w-[600px] h-auto md:h-[600px] object-cover rounded-lg md:mt-[10px] md:ml-[80px]"
          />
        </div>
      </div>

      {/* Audits & Optimization Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2 order-1 md:order-1">
          <img
            src={image6}
            alt="Tech Audits"
            className="w-full max-w-[600px] h-auto md:h-[750px] object-cover md:mt-[-10px] md:ml-[-70px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-[600px] px-4 md:px-0 md:ml-[22px] md:mt-[-40px] order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-default text-grey-400 mt-4 md:mt-[40px]">
            Comprehensive <span className="text-orange-400">Tech Audits & Optimization</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg text-justify mt-4 md:mt-[30px] leading-relaxed">
            Our tech audit services uncover performance bottlenecks, outdated practices, and hidden vulnerabilities across your technology stack. We conduct full-stack diagnostics, analyzing code health, infrastructure efficiency, cloud cost usage, and DevOps processes. By using tools like static code analysis, vulnerability scanners, and real-time monitoring frameworks, we provide a 360° view of your system's current state with prioritized recommendations for action.
          </p>
          <p className="text-gray-600 text-base lg:text-lg text-justify mt-4 md:mt-[30px] leading-relaxed">
            Post-audit, we guide your team through tactical optimization — from performance tuning and cost control to security hardening and automation. We empower you with structured improvement plans that reduce latency, increase throughput, and enforce secure best practices. Whether refactoring legacy modules or streamlining CI/CD pipelines, our goal is to turn your existing infrastructure into a future-proof, high-efficiency digital environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Techcontent;