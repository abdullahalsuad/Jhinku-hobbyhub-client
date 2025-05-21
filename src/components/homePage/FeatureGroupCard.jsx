import React from "react";
import { GrValidate } from "react-icons/gr";
import { MdArrowOutward, MdOutlinePushPin } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { Link } from "react-router";

const FeatureGroupCard = () => {
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://images.pexels.com/photos/25211987/pexels-photo-25211987/free-photo-of-man-sitting-on-palace-courtyard-and-reading-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="groupName"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-[#00224D]">groupName</h2>
            <p className="text-[17px] text-[#1f5490] mt-1">
              category.toUpperCase
            </p>

            {/* user info */}
            <div className="my-2">
              <span className="flex items-center gap-2 text-gray-500">
                <GrValidate /> userName
              </span>
            </div>

            {/* members and location */}
            <div className="my-4 flex justify-between items-center text-[17px] text-purple-600">
              <span className="flex items-center gap-2">
                <RiTeamLine size={20} /> membersNumber Members
              </span>
              <span className="flex items-center gap-2">
                <MdOutlinePushPin size={20} /> meetingLocation
              </span>
            </div>
            <Link className="mt-4  text-[#1f5490] font-medium hover:text-[#00224D] transition flex items-center gap-4">
              See More <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureGroupCard;
