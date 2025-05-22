import React from "react";
import FeatureGroupCard from "./FeatureGroupCard";
import { Link } from "react-router";
import { useTheme } from "../../context/ThemeProvider";
import FeatureGroupCardLoading from "./FeatureGroupCardLoading";

const FeaturedGroups = ({ ongoingHobbyGroups, loading }) => {
  const { darkMode } = useTheme();

  return (
    <>
      <div className="my-40">
        <div className="max-w-7xl mx-auto">
          <h1
            className={`text-3xl font-bold  text-center mb-10 py-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Featured Groups
          </h1>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <>
                {[...Array(6)].map((_, index) => (
                  <FeatureGroupCardLoading key={index} />
                ))}
              </>
            ) : (
              ongoingHobbyGroups.map((group) => (
                <FeatureGroupCard
                  key={group._id}
                  darkMode={darkMode}
                  group={group}
                />
              ))
            )}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-4">
            <Link to="/groups">
              <button className="mt-4 group relative inline-flex h-12 items-center justify-center rounded-md px-6 font-medium bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] text-white cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 transform ease-in-out ">
                <span>Explore All Groups</span>
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
        </div>
      </div>
    </>
  );
};

export default FeaturedGroups;
