import React from "react";
import {
  FaUtensils,
  FaPaintBrush,
  FaHiking,
  FaCameraRetro,
  FaGamepad,
  FaBookOpen,
} from "react-icons/fa";
import { IoBarbellOutline, IoGlobeOutline } from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";

const PopularActivities = () => {
  const activities = [
    { name: "Cooking", icon: <FaUtensils /> },
    { name: "Drawing", icon: <FaPaintBrush /> },
    { name: "Hiking", icon: <FaHiking /> },
    { name: "Photography", icon: <FaCameraRetro /> },
    { name: "Gaming", icon: <FaGamepad /> },
    { name: "Reading", icon: <FaBookOpen /> },
    { name: "Fitness", icon: <IoBarbellOutline /> },
    { name: "Coding", icon: <MdOutlineComputer /> },
    { name: "Traveling", icon: <IoGlobeOutline /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#cfdef14b] via-[#a3c7f356] to-[#cfdef14b]  ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 ">
          Explore Popular Activities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#08213f]  p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center text-center border border-gray-100 cursor-pointer"
            >
              <div className="text-5xl mb-4 text-indigo-600 ">
                {activity.icon}
              </div>
              <p className="font-semibold text-xl text-white ">
                {activity.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularActivities;
