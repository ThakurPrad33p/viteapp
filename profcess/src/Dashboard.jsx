import React from "react";
import "./index.css";
import Header from "./Header";
import { FaFacebookSquare, FaCloudUploadAlt, FaDatabase } from 'react-icons/fa';
import { SiAmazons3, SiAtlassian } from 'react-icons/si';
import { MdSource } from 'react-icons/md'; // For 'Source' icon
import { AiOutlineCloudUpload } from 'react-icons/ai'; // For 'File Upload' icon
import { IoLogoNodejs } from 'react-icons/io'; // Placeholder for NodeJS logo (if applicable)
import { GrStatusWarning } from 'react-icons/gr'; // Placeholder for Status (if applicable)
import { TiTick } from 'react-icons/ti'; // Placeholder for success/tick icon
import { RiErrorWarningLine } from 'react-icons/ri'; // Placeholder for warning icon
import { BsFillPersonFill } from 'react-icons/bs'; // Placeholder for 'Person' icon (if applicable)

const sponsors = [
  { icon: <MdSource size={40} color="black" />, name: 'Source' }, // Source icon
  { icon: <AiOutlineCloudUpload size={40} color="black" />, name: 'File Upload' }, // Upload icon
  { icon: <FaDatabase size={40} color="gray" />, name: 'Data Admin' }, // Database icon
  { icon: <SiAmazons3 size={40} color="red" />, name: 'Amazon S3' }, // Amazon S3 icon
  { icon: <FaFacebookSquare size={40} color="#2068e6" />, name: 'Facebook' }, // Facebook icon
  { icon: <SiAtlassian size={40} color="blue" />, name: 'Atlassian' }, // Atlassian icon
  { icon: <IoLogoNodejs size={40} color="green" />, name: 'NodeJS' }, // NodeJS icon
  { icon: <GrStatusWarning size={40} color="orange" />, name: 'Status' }, // Status icon
  { icon: <TiTick size={40} color="green" />, name: 'Success' }, // Success icon
  { icon: <RiErrorWarningLine size={40} color="red" />, name: 'Warning' }, // Warning icon
];

const Dashboard = () => {
  const navItems = ["Sales Force", "Transformation", "Target", "Configure"];
  const tags = [
    "all connections",
    "marketing",
    "collaboration",
    "ERP&CRM",
    "E-commerce",
    "database",
    "analytics",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C157F] via-[#090909] to-[#200434] text-white p-6">
      <Header />

      <div className="px-64 py-10">
        <nav className="flex justify-between mb-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`px-8 py-4 rounded-xl transition-colors duration-200 ${
                item === "Target"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "hover:bg-blue-500"
              }`}
            >
              <span className="text-4xl font-semibold">{item}</span>
            </button>
          ))}
        </nav>

        <div className="mb-8 py-10">
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                🔍
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white rounded-lg text-black  px-4 mx-4 py-1 text-md font-semibold hover:bg-gray-300 cursor-pointer transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        

        <div className="flex flex-wrap justify-between gap-4 my-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full mb-2 flex items-center justify-center text-gray-600 font-bold">
                {sponsor.icon}
              </div>
              {/* Optionally display the sponsor name */}
              {/* <span className="text-gray-800 text-sm">{sponsor.name}</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
