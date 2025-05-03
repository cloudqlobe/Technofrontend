import React from "react";
import { MapPin, Clock } from "lucide-react";

const Careercontent = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description: "Create stunning UI experiences using React.js and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      location: "Bangalore",
      type: "Full-Time",
      description: "Design and build robust APIs using Node.js and MySQL.",
    },
    {
      title: "UI/UX Designer",
      location: "Hybrid",
      type: "Part-Time",
      description: "Craft beautiful and user-friendly interfaces using Figma or Adobe XD.",
    },
    {
      title: "Digital Marketing Executive",
      location: "Remote",
      type: "Internship",
      description: "Manage campaigns, analyze metrics, and boost our online presence.",
    },
  ];

  return (
    <div className="bg-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Open Positions Section */}
        <h2 className="text-4xl font-bold text-[#0a1d56] mb-4">Open Positions</h2>
        <p className="text-gray-600 text-lg mb-12">
          Explore exciting opportunities to work with a dynamic and passionate team.
        </p>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#0a1d56] mb-2">{job.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-2">
                  <MapPin className="text-blue-600" size={16} /> {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="text-blue-600" size={16} /> {job.type}
                </span>
              </div>
              <p className="text-gray-700 mb-6">{job.description}</p>
              <button className="bg-[#0a1d56] text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Careercontent;
