import React, { useState } from 'react';
import image22 from '../assets/Image/6072191.jpg';

const Careerregister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    experience: '',
    phone: '',
    ctc: '',
    location: '',
    coverLetter: '',
    file: null,
    captcha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the data to an API)
    console.log(formData);
  };

  return (
    <div className="bg-white py-20 px-6 sm:px-12 mt-[-50px]  border border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Full-width Centered Heading Section */}

        {/* Content: Image on Left and Form on Right in a Single Row */}
        <div className="flex items-center gap-12">
          {/* Left Side: Image/Illustration */}
          <div className="flex justify-center items-center w-1/2">
            <img
              src={image22}
              alt="Join our team"
              className="w-[850px] h-[600px] ml-[-100px] "
            />
          </div>

          {/* Right Side: Form */}
          <div className="w-1/2 ml-[100px]">
            <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-8 squared-lg shadow-lg border border-orange-300">
              <div className="space-y-4"> {/* This will add spacing between each row */}
                {/* First Name */}
                <div className="flex items-center gap-6 mb-4">
                  <label htmlFor="firstName" className="w-1/3 text-lg font-default text-gray-500">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-2/3 px-4 py-2 border border-gray-300 squared-lg"
                  />
                </div>

                {/* Last Name */}
                <div className="flex items-center gap-6 mb-4">
                  <label htmlFor="lastName" className="w-1/3 text-lg font-default text-gray-500">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-2/3 px-4 py-2 border border-gray-300 squared-lg"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-6 mb-4">
                  <label htmlFor="email" className="w-1/3 text-lg font-default text-gray-500">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-2/3 px-4 py-2 border border-gray-300 squared-lg"
                  />
                </div>

                {/* Position */}
                <div className="flex items-center gap-6 mb-4">
                  <label htmlFor="position" className="w-1/3 text-lg font-default text-gray-500">
                    Position *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-2/3 px-4 py-2 border border-gray-300 squared-lg"
                  />
                </div>

                {/* Experience */}
                <div className="flex items-center gap-6 mb-4">
                  <label htmlFor="experience" className="w-1/3 text-lg font-default text-gray-500">
                    Experience *
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-2/3 px-4 py-2 border border-gray-300 squared-lg"
                  />
                </div>

                {/* Phone */}
                <div className="flex items-center gap-6 mb-4">
                  <label htmlFor="phone" className="w-1/3 text-lg font-default text-gray-500">
                    Phone *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-2/3 px-4 py-2 border border-gray-300 squared-lg"
                  />
                </div>
                <div className="flex items-center gap-6 mb-4">
                  <label htmlFor="location" className="w-1/3 text-lg font-default text-gray-500">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-2/3 px-4 py-2 border border-gray-300 squared-lg"
                  />
                </div>

                {/* Upload Resume */}
                <div className="flex items-center gap-6 mb-4">
                  <label htmlFor="file" className="w-1/3 text-lg font-default text-gray-500">
                    Upload Resume *
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    required
                    className="w-2/3 px-4 py-2 border border-gray-300 squared-lg"
                  />
                </div>

                {/* CTC */}
                

                {/* Location */}
               

                {/* Cover Letter */}
               

                {/* Captcha */}
                
              </div>

              <button
                type="submit"
                className="bg-orange-400 text-white px-6 py-3 squared-lg w-full hover:bg-orange-700 transition mt-[20px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerregister;
