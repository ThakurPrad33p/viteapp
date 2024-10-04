import React from "react";
import Header from "./Header";
import "./index.css";

const Lastpage = () => {
  const navItems = ["Sales Force", "Transformation", "Amazon S3", "Configure"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C157F] via-[#090909] to-[#200434] text-white p-6">
      <Header />
      <div className="px-64 py-10">
        {/* Navigation */}
        <nav className="flex justify-between mb-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`px-8 py-4 rounded-xl transition-colors duration-200 ${
                item === "Configure"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "hover:bg-blue-500"
              }`}
            >
              <span className="text-4xl font-semibold">{item}</span>
            </button>
          ))}
        </nav>

        {/* Form Section */}
        <div className="mx-auto max-w-xl p-12  rounded-xl">
          <div className="mb-8">
            {/* Application Name Field */}
            <div className="flex flex-row mb-6 justify-between">
              <label className="text-2xl font-semibold mb-2 whitespace-nowrap">
                Application Name 
              </label>
              <input
                type="text"
                className="w-30 bg-[#0f1821] rounded-md outline-blue-600 py-3 px-4   text-white focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>

            {/* Description Field */}
            <div className="flex flex-row mb-6 justify-between">
              <label className="text-2xl font-semibold mb-2">Description</label>
              <input
                type="text"
                className="w-30 bg-[#0f1821] rounded-md outline-blue-600 py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Tags Field */}
            <div className="flex flex-row mb-6 justify-between">
              <label className="text-2xl font-semibold mb-2">Tags</label>
              <input
                type="text"
                className="w-30 bg-[#0f1821] rounded-md outline-blue-600 py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Application Deployment Button */}
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-xl font-semibold">
              Application Deployment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lastpage;
