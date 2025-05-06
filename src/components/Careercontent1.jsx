import React from 'react';

const jobs = [
  {
    title: "Zonal Manager - Enterprise Accounts || 99Acres",
    company: "Info Edge",
    rating: "3.9",
    reviews: "2077 Reviews",
    exp: "8-13 Yrs",
    salary: "Not disclosed",
    location: "Bengaluru",
    tags: ["Enterprise Sales", "Large Account", "Strategic Account", "Key Account Management"],
    daysAgo: "2 Days Ago",
  },
  {
    title: "SAM - Senior Manager - Deal & Gift Voucher",
    company: "Paytm",
    rating: "3.3",
    reviews: "7808 Reviews",
    exp: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Bengaluru",
    tags: ["loyalty marketing", "corporate sales", "sales", "relationship management", "rewards"],
    daysAgo: "5 Days Ago",
  },
];

const JobPortal = () => {
  return (
    <div className="min-h-screen w-full p-8 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Job Listings */}
        <div className="lg:col-span-2 space-y-8 w-full lg:w-[650px]"> {/* Decreased width */}
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white squared-lg shadow-md p-6 w-full min-h-[255px] ml-[50px]" // Adjusted width and padding
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {job.company} • ⭐ {job.rating} • {job.reviews}
                  </p>
                  <div className="flex flex-wrap text-sm mt-2 text-gray-700 gap-x-4 gap-y-1">
                    <p>🧳 {job.exp}</p>
                    <p>💰 {job.salary}</p>
                    <p>📍 {job.location}</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{job.tags.join(" • ")}</p>
                </div>
                <div className="text-xs text-gray-500 whitespace-nowrap">{job.daysAgo}</div>
              </div>

              {/* Apply Button */}
              <div className="mt-4 text-right">
                <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Demat Account & Investment Promo */}
        <div className="space-y-6 lg:ml-[-100px]"> {/* Negative margin to shift left */}
          {/* DEMAT Account Offer */}
          <div className=" w-[550px] bg-white rounded-lg shadow-md p-6 text-center space-y-4 ml-[-50px] ">
            <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block">
              #1 in India
            </div>
            <div>
              <p className="text-xs text-gray-600">Best Retail Brokerages</p>
              <p className="text-xs text-gray-600 mb-2">ASIAMONEY BROKERS POLL 2023</p>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 leading-tight">
              OPEN FREE* DEMAT AND TRADING ACCOUNT IN 15 MIN**
            </h3>
            <p className="text-xs text-gray-500">Limited Period Offer</p>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-400"
            />
            <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition">
              START / RESUME APPLICATION
            </button>
            <p className="text-xs text-gray-600">
              <input type="checkbox" className="mr-1" />
              I agree to all <span className="text-orange-500 underline cursor-pointer">Terms and Conditions</span>
            </p>
          </div>

          {/* Orange Club Investment CTA */}
          <div className=" w-[550px] bg-blue-900 text-white rounded-lg shadow-md p-6 space-y-3 ml-[-50px]">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🪑</div>
              <p className="text-sm">
                Want to invest 5 lakhs+ with Mirae Asset Sharekhan?
              </p>
            </div>
            <p className="text-xs">
              Click on KNOW MORE to learn about our Orange Club A/C Opening Package
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm font-medium">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>

      {/* Pagination with arrows */}
      <div className="mt-10 flex justify-center items-center gap-2">
        <button className="w-10 h-10 bg-white border border-gray-300 rounded hover:bg-gray-200 text-lg">
          ⬅
        </button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className="w-10 h-10 bg-white border border-gray-300 rounded hover:bg-gray-200 transition text-lg font-medium"
          >
            {num}
          </button>
        ))}
        <button className="w-10 h-10 bg-white border border-gray-300 rounded hover:bg-gray-200 text-lg">
          ➡
        </button>
      </div>
    </div>
  );
};

export default JobPortal;
