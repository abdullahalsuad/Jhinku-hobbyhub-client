import React from "react";
import { HiOutlineSparkles } from "react-icons/hi"; // From Heroicons
import {
  FaGuitar,
  FaHiking,
  FaPaintBrush,
  FaSeedling,
  FaCamera,
  FaBook,
  FaRunning,
  FaRocket,
} from "react-icons/fa"; // Added more icons
import { Link } from "react-router";

const newGroups = [
  { name: "Beginner Guitar Club", category: "Music", icon: <FaGuitar /> },
  { name: "Urban Hikers Meetup", category: "Outdoor", icon: <FaHiking /> },
  { name: "Digital Art Enthusiasts", category: "Art", icon: <FaPaintBrush /> },
  {
    name: "Mindful Meditation Group",
    category: "Wellness",
    icon: <FaSeedling />,
  },
  { name: "Photography Basics", category: "Hobbies", icon: <FaCamera /> },
  { name: "Fantasy Book Club", category: "Reading", icon: <FaBook /> },
  { name: "Morning Runners", category: "Fitness", icon: <FaRunning /> },
  { name: "Startup Innovators", category: "Business", icon: <FaRocket /> },
];

const NewGroupsAlert = () => {
  return (
    <div className=" bg-gradient-to-r from-[#0442924b] via-[#b9d3f356] to-[#0442924b]  p-20 rounded-2xl shadow-xl pb-30   my-30 ">
      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900  mb-8 flex items-center justify-center text-center py-6">
        <HiOutlineSparkles className="text-4xl md:text-5xl mr-3 text-purple-600  animate-pulse" />
        Discover Fresh Communities!
      </h3>

      {/* Grid container for the 4x2 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {newGroups.map((group, idx) => (
          <div
            key={idx}
            className="bg-gray-50  rounded-xl p-6 shadow-md hover:shadow-lg
                       transition-all duration-300 transform hover:-translate-y-1
                       flex flex-col items-center text-center border border-gray-100 ray-600 "
          >
            <div className="text-5xl text-gray-500 ">
              {group.icon || <HiOutlineSparkles />}
            </div>
            <p className="font-bold text-xl text-gray-900 y-100 mb-2 truncate my-5">
              {group.name}
            </p>
            <span className="text-md text-gray-600   truncate">
              {group.category}
            </span>

            <Link to={"/groups"}>
              <button className="my-5 group relative inline-flex h-12 items-center justify-center rounded-md px-6 font-medium bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] text-white cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 transform ease-in-out ">
                <span> Explore Group</span>
                <div className="relative ml-1 h-5 w-5 overflow-hidden">
                  <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewGroupsAlert;
