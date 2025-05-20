import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineDateRange, MdOutlinePushPin } from "react-icons/md";
import { Link } from "react-router";

const GroupDetailsCard = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl mx-auto mt-10">
        {/* Cover Image */}
        <div className="h-52 bg-gradient-to-r from-[#096f9e] via-[#30357c] to-[#250052] flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Sunset Sketchers</h1>
        </div>

        {/* Profile Image Placeholder */}
        <div className="relative -mt-12 ml-6">
          <img
            src="https://picsum.photos/seed/art/200 "
            alt="Group Avatar"
            className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#00224D] text-white text-xs px-3 py-1 rounded-full">
              Drawing & Painting
            </span>
            <span className="bg-[#1f5490] text-white text-xs px-3 py-1 rounded-full">
              15 Members
            </span>
            <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">
              Location: Central Park
            </span>
          </div>

          <p className="text-gray-700 mb-6">
            We meet every weekend at sunset to sketch the city skyline. All
            skill levels welcome! Bring your own materials or borrow some from
            the group kit.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Upcoming Event
            </h3>
            <p className="text-gray-600">
              <MdOutlineDateRange /> Saturday, April 10th @ 5:00 PM
            </p>
            <p className="text-gray-600">
              <MdOutlinePushPin /> Central Park East Meadow
            </p>
          </div>

          <div className="flex gap-4">
            <Link to="/create-group">
              <button className="bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] cursor-pointer hover:-translate-y-1 hover:shadow-lg  transform ease-in-out text-white py-2 px-6 rounded-md transition-all duration-300">
                Join Group <FaHandshake />
              </button>
            </Link>

            <Link
              to="/groups"
              className=" bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] cursor-pointer hover:-translate-y-1 hover:shadow-lg  transform ease-in-out text-white py-2 px-6 rounded-md transition-all duration-300"
            >
              <IoIosArrowBack />
              Back to Groups
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupDetailsCard;
