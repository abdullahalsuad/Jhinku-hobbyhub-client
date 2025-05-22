import React from "react";
import { GrValidate } from "react-icons/gr";
import { MdArrowOutward, MdOutlinePushPin } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { Link } from "react-router";

const FeatureGroupCard = ({ darkMode, group }) => {
  return (
    <>
      <div>
        <div
          className={` rounded-lg border border-gray-300 shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl ${
            darkMode ? "bg-gray-500" : "bg-white"
          }`}
        >
          <img
            src={group.groupImg}
            alt={group.groupName}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2
              className={`text-xl font-semibold text-[#00224D] ${
                darkMode ? "text-white" : "text-[#00224D]"
              }`}
            >
              {group.groupName}
            </h2>
            <p
              className={`text-[17px]  mt-1 ${
                darkMode ? "text-white" : "text-[#1f5490]"
              } `}
            >
              {group.category.toUpperCase()}
            </p>

            {/* user info */}
            <div className="my-2">
              <span
                className={`flex items-center gap-2  ${
                  darkMode ? "text-white" : "text-gray-500"
                }   `}
              >
                <GrValidate /> {group.userName}
              </span>
            </div>

            {/* members and location */}
            <div
              className={`my-4 flex justify-between items-center text-[17px]   ${
                darkMode ? "text-white" : "text-purple-600"
              }`}
            >
              <span className="flex items-center gap-2">
                <RiTeamLine size={20} /> {group.membersNumber} Members
              </span>
              <span className="flex items-center gap-2">
                <MdOutlinePushPin size={20} /> {group.meetingLocation}
              </span>
            </div>
            <Link
              className={`mt-4  ] font-medium hover:text-[#00224D] transition flex items-center gap-4  ${
                darkMode ? "text-black" : "text-[#1f5490]"
              }`}
            >
              See More <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureGroupCard;
