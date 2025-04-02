import { FaHeadset, FaUserTie, FaShieldAlt, FaUsers } from "react-icons/fa";
import business from "../assets/Image/business1.png";

export default function ResellerSection() {
  return (
    <div className="bg-white text-black p-12 h-screen flex flex-col items-center">
      
      {/* Main Heading */}
      <h2 className="text-4xl font-semibold text-center mb-10 text-grey-600 mt-8">
        Become a Reseller & <span className="text-orange-500">Grow with Us!</span>
      </h2>

      <div className="flex items-center justify-between w-full mt-8">
        {/* Image on Left */}
        <div className="w-1/2 h-full flex items-center mt-4 mr-6">
          <img 
            src={business}
            alt="Business Illustration" 
            className="w-[110%] h-[85%] object-contain" 
          />
        </div>

        {/* Features on Right */}
        <div className="w-[50%] flex flex-col items-start h-full justify-center pl-6 mt-8">
          <div className="grid grid-cols-2 gap-6 mb-8 w-full">
            <div className="bg-blue-100 p-5 h-20 w-full flex items-center border border-blue-400 shadow-md rounded-md transition-transform duration-300 hover:scale-105">
              <FaHeadset className="text-blue-500 text-3xl mr-4" />
              <span className="text-lg font-semibold">24/7 Support</span>
            </div>
            <div className="bg-green-100 p-5 h-20 w-full flex items-center border border-green-400 shadow-md rounded-md transition-transform duration-300 hover:scale-105">
              <FaUserTie className="text-green-500 text-3xl mr-4" />
              <span className="text-lg font-semibold">Dedicated Account Manager</span>
            </div>
            <div className="bg-yellow-100 p-5 h-20 w-full flex items-center border border-yellow-400 shadow-md rounded-md transition-transform duration-300 hover:scale-105">
              <FaShieldAlt className="text-yellow-500 text-3xl mr-4" />
              <span className="text-lg font-semibold">Secure Transactions</span>
            </div>
            <div className="bg-purple-100 p-5 h-20 w-full flex items-center border border-purple-400 shadow-md rounded-md transition-transform duration-300 hover:scale-105">
              <FaUsers className="text-purple-500 text-3xl mr-4" />
              <span className="text-lg font-semibold">Exclusive Partner Benefits</span>
            </div>
          </div>

          {/* Reseller Section */}
          <div className="bg-white p-10 border border-gray-400 text-center w-full shadow-lg rounded-md">
            <h3 className="text-2xl font-bold mb-4">Become a Reseller</h3>
            <p className="text-md mb-5 text-gray-700">Join our reseller program and start earning by offering our services to your clients.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 text-lg rounded-md">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
