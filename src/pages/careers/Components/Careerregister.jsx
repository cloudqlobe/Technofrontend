import React, { useState } from 'react';
import image22 from '../../../assets/Image/6072191.jpg';

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
    console.log(formData);
  };

  const fields = [
    { id: 'firstName', label: 'First Name *', type: 'text', name: 'firstName' },
    { id: 'lastName', label: 'Last Name *', type: 'text', name: 'lastName' },
    { id: 'email', label: 'Email *', type: 'email', name: 'email' },
    { id: 'position', label: 'Position *', type: 'text', name: 'position' },
    { id: 'experience', label: 'Experience *', type: 'text', name: 'experience' },
    { id: 'phone', label: 'Phone *', type: 'text', name: 'phone' },
    { id: 'location', label: 'Location *', type: 'text', name: 'location' },
  ];

  return (
    <div className="bg-white py-10 md:py-20 px-4 sm:px-6 md:px-12 border border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Image: top on mobile, left on desktop */}
          <div className="flex justify-center items-center w-full lg:w-1/2 order-1 lg:order-1">
            <img
              src={image22}
              alt="Join our team"
              className="w-full max-w-[500px] lg:max-w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover rounded-lg"
            />
          </div>

          {/* Form: below image on mobile, right on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white p-5 sm:p-8 shadow-lg border border-orange-300"
            >
              <div className="space-y-4">

                {/* Text Fields */}
                {fields.map(({ id, label, type, name }) => (
                  <div key={id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <label htmlFor={id} className="sm:w-1/3 text-base font-default text-gray-500 shrink-0">
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                      className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
                    />
                  </div>
                ))}

                {/* Upload Resume */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <label htmlFor="file" className="sm:w-1/3 text-base font-default text-gray-500 shrink-0">
                    Upload Resume *
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    required
                    className="w-full sm:w-2/3 px-2 py-2 border border-gray-300 rounded text-sm text-gray-600 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-orange-400 text-white px-6 py-3 rounded w-full hover:bg-orange-700 transition mt-6"
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