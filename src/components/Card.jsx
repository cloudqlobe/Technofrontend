import { FaHeadset, FaUserTie, FaShieldAlt, FaUsers } from "react-icons/fa";
import business from "../assets/Image/20286034_6179122.svg";

export default function ResellerSection() {
  return (
    <div className="bg-white text-black p-6 lg:p-12 min-h-screen flex flex-col lg:flex-row items-center">
      
      {/* Image on Left */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center mt-10 lg:mt-16">
        <img
          src={business}
          alt="Business Illustration"
          className="
            w-[90%] sm:w-[80%] lg:w-[85%]
            h-auto lg:h-[75%]
            object-contain
            lg:ml-[-60px]
          "
        />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[50%] flex flex-col h-full justify-center lg:px-4 lg:pl-6">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 mb-8 lg:ml-6 text-center lg:text-left">
          Become a Reseller & <span className="text-orange-500">Grow with Us!</span>
        </h2>

        {/* Features Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-6 mb-8 w-full
            lg:ml-[-43px]
          "
        >
          <div className="bg-blue-100 p-5 h-20 flex items-center border border-blue-400 shadow-md">
            <FaHeadset className="text-blue-500 text-3xl mr-4" />
            <span className="text-lg font-semibold">24/7 Support</span>
          </div>

          <div className="bg-green-100 p-5 h-20 flex items-center border border-green-400 shadow-md">
            <FaUserTie className="text-green-500 text-3xl mr-4" />
            <span className="text-lg font-semibold">Dedicated Account Manager</span>
          </div>

          <div className="bg-yellow-100 p-5 h-20 flex items-center border border-yellow-400 shadow-md">
            <FaShieldAlt className="text-yellow-500 text-3xl mr-4" />
            <span className="text-lg font-semibold">Secure Transactions</span>
          </div>

          <div className="bg-purple-100 p-5 h-20 flex items-center border border-purple-400 shadow-md">
            <FaUsers className="text-purple-500 text-3xl mr-4" />
            <span className="text-lg font-semibold">Exclusive Partner Benefits</span>
          </div>
        </div>

        {/* Reseller Box */}
        <div
          className="
            bg-white p-8 lg:p-10
            border border-gray-400
            text-center w-full
            shadow-lg rounded-md
            lg:ml-[-43px]
          "
        >
          <h3 className="text-2xl font-bold mb-4">Become a Reseller</h3>
          <p className="text-md mb-5 text-gray-700">
            Join our reseller program and start earning by offering our services to your clients.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 text-lg rounded-md">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
