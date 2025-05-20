import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { GrValidate } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import {
  MdAccessTime,
  MdOutlineDateRange,
  MdOutlinePushPin,
} from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router";

const GroupDetailsCard = ({ singleHobbyGroup }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl mx-auto mt-10">
        {/* Cover Image */}
        <div>
          <img
            src={singleHobbyGroup?.groupImg}
            className="h-96 w-full"
            alt=""
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="bg-[#00224D] text-white text-[14px] px-4 py-2 rounded-full tracking-wider">
              {singleHobbyGroup?.category}
            </span>
            <span className="bg-[#003479] text-white text-[14px] px-4 py-2 rounded-full tracking-wider">
              {singleHobbyGroup?.membersNumber} Members
            </span>
            <span className="bg-[#1f5490] text-white text-[14px] px-4 py-2 rounded-full tracking-wider">
              {singleHobbyGroup?.meetingLocation}
            </span>
            <span className="bg-[#284a75] text-white text-[14px] px-4 py-2 rounded-full tracking-wider">
              {singleHobbyGroup?.startDate}
            </span>
          </div>

          <div className="mt-10 mb-10">
            <h1 className="text-3xl font-bold text-black mb-6">
              {singleHobbyGroup?.groupName}
            </h1>
            <span className="inline-flex items-center gap-2 text-gray-700 text-sm font-medium bg-purple-100 px-5 py-1 rounded-full mr-4">
              <GrValidate className="w-5 h-5 text-[#00224D]" />
              Created By :-
              <span className="text-[#00224D] font-semibold">
                {singleHobbyGroup?.userName}
              </span>
            </span>

            <span className="inline-flex items-center gap-2 text-gray-700 text-sm font-medium bg-purple-100 px-5 py-1 rounded-full mr-4">
              <FiSend className="w-5 h-5 text-[#00224D]" />
              Mail :-
              <span className="text-[#00224D] font-semibold">
                {singleHobbyGroup?.userEmail}
              </span>
            </span>
          </div>

          <p className="text-gray-700 mb-6  text-xl mt-4">
            {singleHobbyGroup?.description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Upcoming Event
            </h3>
            <p className="text-gray-600 flex items-center gap-3 mb-2 text-[17px]">
              <MdOutlineDateRange size={20} color="#00224D" />
              {singleHobbyGroup?.startDate}
            </p>
            <p className="text-gray-600 flex items-center gap-3 text-[17px]">
              <MdOutlinePushPin size={20} color="#00224D" />{" "}
              {singleHobbyGroup?.meetingLocation}
            </p>
          </div>

          <div className="flex gap-4 my-8">
            <Link to="/create-group">
              <button className="bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] cursor-pointer hover:-translate-y-1 hover:shadow-lg  transform ease-in-out text-white py-3 px-6 rounded-md transition-all duration-300 flex items-center gap-2 ">
                Join Group <FaHandshake size={20} />
              </button>
            </Link>

            <Link
              to="/groups"
              className="py-3 bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] cursor-pointer hover:-translate-y-1 hover:shadow-lg  transform ease-in-out text-white  px-6 rounded-md transition-all duration-300 flex items-center gap-2"
            >
              <IoIosArrowBack size={20} />
              Back to Groups
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupDetailsCard;
