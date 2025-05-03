import React from 'react';
import image1 from '../assets/Image/7056551.jpg';
import image2 from '../assets/Image/9628536.jpg';

const Techcontent1 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-4xl text-center font-semibold text-black tracking-wide mb-16">
         Tech Consultancy <span className='text-blue-800'>for Scalable Digital Growth</span>
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="Tech Strategy"
            className="w-[80%] h-[450px] object-cover rounded-xl mb-2 mr-[100px] "
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-3xl font-default mb-4 text-blue-900">
            <span className="text-text-gray-700">Strategize Smarter,</span>{' '}
            <span className="text-blue-600">Scale Confidently</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            At the heart of every successful tech-driven business is a solid foundation — a strategy that’s future-ready, scalable, and aligned with clear business objectives. Our tech consultancy services are tailored to provide exactly that. We partner with organizations to understand their current capabilities and deliver customized strategies that empower growth and digital transformation.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            From ideation to execution, our consultants offer actionable insights that optimize resource allocation, improve workflows, and drive sustainable success. Whether you're a startup laying the groundwork for a robust SaaS platform or an enterprise looking to revamp your infrastructure, we bring decades of collective experience in product thinking, cloud strategy, DevOps, and agile development to help you thrive.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We take a hands-on approach to understanding your technical landscape, ensuring that each solution is practical, scalable, and adaptable to change. Our strategies not only solve today’s challenges but also equip your organization for future opportunities in an ever-evolving digital space.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="Tech Optimization"
            className="w-[90%] h-[450px] object-cover rounded-xl mb-2 "
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-3xl font-default mb-4 text-blue-900">
            <span className="text-gray-700">Architecture Audits</span>{' '}
            <span className="text-blue-600">& Process Optimization</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Legacy systems and outdated processes can silently erode your efficiency and profitability. Our team performs in-depth technical audits to identify weaknesses in your application architecture, data pipelines, security protocols, and deployment practices. These audits are rooted in industry best practices and powered by tools that give you real-time, actionable diagnostics.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We go beyond basic recommendations — delivering a strategic plan to reengineer your systems using modern architectures such as microservices, serverless computing, and container orchestration with Kubernetes or Docker. Our consultants are experts in CI/CD pipelines, API scalability, and security-first frameworks to ensure every optimization makes your tech stack leaner, faster, and more resilient.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            The result is a well-documented, fine-tuned ecosystem that not only accelerates development cycles but also improves user satisfaction, lowers maintenance costs, and positions your business to pivot effortlessly in response to market changes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Techcontent1;
