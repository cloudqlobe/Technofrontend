import React from "react";
import image4 from "../../../../assets/Image/4590506.jpg";
import image5 from "../../../../assets/Image/4673526.jpg";
import image6 from "../../../../assets/Image/5397869.jpg";

const Billingcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-12 py-10 overflow-hidden">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Comprehensive <span className="text-blue-800">Billing Software Solutions</span> for Your Business Needs
      </h2>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 items-center gap-8 mb-12 max-w-7xl mx-auto mt-[40px]">
        
        {/* Image: top on mobile, left on desktop */}
        <div className="flex justify-center items-center w-full order-1 md:order-1">
          <img
            src={image4}
            alt="Frontend Development"
            className="w-full sm:w-[85%] md:w-[80%] h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg md:mr-[100px]"
          />
        </div>

        {/* Title + Description: below image on mobile, right on desktop */}
        <div className="flex flex-col justify-center w-full md:w-[600px] md:ml-[58px] order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-400 mt-[30px]">
            Interactive <span className="text-orange-400">Billing Interfaces</span> for Seamless User Experience
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We specialize in crafting user-friendly, responsive billing software interfaces that cater to the needs of businesses of all sizes. Using modern frameworks like React, Vue, and Next.js, we ensure that every billing component is tailored to provide a seamless, intuitive experience across devices. From generating invoices to making payments and reviewing transaction history, every interaction within our platform is designed to be smooth and highly responsive.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our design-first approach ensures that every visual element serves a functional purpose, enhancing user experience without sacrificing performance. Whether you need to handle multiple invoices, track payment statuses, or manage billing details efficiently, we provide interfaces that make it easy to navigate. Our goal is to offer a system that reduces the complexity of financial operations while increasing user satisfaction.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 items-center gap-8 mb-10 max-w-7xl mx-auto mt-[60px]">

        {/* Image: top on mobile (order-1), right on desktop (order-2) */}
        <div className="flex justify-center items-center w-full order-1 md:order-2">
          <img
            src={image5}
            alt="Backend Development"
            className="w-full sm:w-[85%] md:w-[80%] h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg md:mt-[50px] md:ml-[30px]"
          />
        </div>

        {/* Title + Description: below image on mobile (order-2), left on desktop (order-1) */}
        <div className="flex flex-col justify-center w-full order-2 md:order-1 md:ml-[-40px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-200 mt-[30px]">
            Robust <span className="text-orange-400">Backend Systems</span> for Secure Billing Operations
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our backend systems are engineered to handle complex billing processes seamlessly. Built with technologies like Node.js, Express, and other modern stacks, we ensure that your web applications are secure, fast, and highly reliable. From handling payments and generating invoices to offering detailed reports and transaction management, our backend services provide a robust foundation for your billing operations.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We focus on building scalable, secure, and high-performing APIs that integrate with various payment gateways, making the process of accepting payments and managing subscriptions a breeze. Our backend also includes powerful features like user authentication, role-based access control, session handling, and data encryption to ensure the utmost security and confidentiality of your business and customer data.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-24 mb-12 max-w-7xl mx-auto">

        {/* Image: top on mobile, left on desktop */}
        <div className="flex justify-center items-center w-full order-1 md:order-1">
          <img
            src={image6}
            alt="Custom Web Applications"
            className="w-full sm:w-[90%] md:w-[90%] h-[250px] sm:h-[320px] md:h-[400px] object-cover md:mt-24"
          />
        </div>

        {/* Title + Description: below image on mobile, right on desktop */}
        <div className="flex flex-col justify-center w-full md:mb-[100px] md:ml-[30px] order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-200 mb-2 mt-[30px]">
            Tailored <span className="text-orange-400">Billing Software Solutions</span> for Every Business Need
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our custom billing software solutions are designed to adapt to the specific needs of your business, no matter the size or industry. Whether you need a fully integrated payment gateway, a subscription management platform, or a detailed invoicing system, we've got you covered. Using the MERN stack and other modern technologies, we create scalable, secure, and feature-rich billing applications that cater to your exact requirements, helping you automate billing and improve customer satisfaction.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our team focuses on delivering flexible, high-performance billing systems that ensure reliability, ease of use, and full scalability. From managing recurring billing cycles to offering dynamic pricing, automated invoices, and payment reminders, our solutions provide businesses with everything they need to streamline financial operations. We also prioritize data security and regulatory compliance, ensuring your software is ready for the future.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Billingcontent;