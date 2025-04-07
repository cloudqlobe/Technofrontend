import React from 'react';
import image12 from "../assets/Image/4934425.jpg";

const Webregister = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="grid md:grid-cols-2 w-full max-w-8xl border-2 border-grey-400 squared-md overflow-hidden">
        
        {/* Left Image Section */}
        <div className="hidden md:flex items-center justify-center p-8 bg-white">
          <img
            src={image12}
            alt="Register Illustration"
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>

        {/* Right Form Section */}
        <div className="p-10 md:p-14 bg-white w-full ">
          <h2 className="text-3xl font-semibold text-center mb-12 text-orange-500">
            Register Now
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 squared-md"
              />
            </div>
             {/* Contact Number */}
             <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
              <input
                type="tel"
                placeholder="Your Contact Number"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 squared-md"
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 squared-md"
              />
            </div>

            {/* Contact Number */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Number</label>
              <input
                type="tel"
                placeholder="Your Contact Number"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 squared-md"
              />
            </div>

            {/* Empty div for alternate alignment */}
            <div className="col-span-1"></div>

            {/* Description - Full width */}
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="Tell us about your requirement"
                rows="4"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 squared-md"
              ></textarea>
            </div>

            {/* Submit Button - Full width */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 text-lg font-semibold rounded-md"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Webregister;
