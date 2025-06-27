import { use, useEffect, useState, useMemo } from "react";
import GroupCard from "../components/allGroupsPage/GroupCard";
import { FetchDataContext } from "../context/FetchDataProvider";
import LoadingSpinner from "../components/Loader/LoadingSpinner";
import { ChevronDown, ChevronUp } from "lucide-react";

const AllGroupsPage = () => {
  const { hobbyGroups, loading } = use(FetchDataContext);
  const [sortOrder, setSortOrder] = useState("asc");

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Memoize the sorted groups to prevent unnecessary re-sorts on every render
  const sortedHobbyGroups = useMemo(() => {
    if (!hobbyGroups) return [];

    const sorted = [...hobbyGroups].sort((a, b) => {
      const nameA = a.groupName ? a.groupName.toLowerCase() : "";
      const nameB = b.groupName ? b.groupName.toLowerCase() : "";

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    return sorted;
  }, [hobbyGroups, sortOrder]);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="min-h-screen py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">
              Explore All Groups
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-gray-700">
                Sort by Name:
              </span>
              <button
                onClick={() => setSortOrder("asc")}
                className={`px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
                  sortOrder === "asc"
                    ? "bg-blue-900 text-white shadow-md"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                } flex items-center`}
              >
                Ascending <ChevronUp size={18} className="ml-1" />
              </button>
              <button
                onClick={() => setSortOrder("desc")}
                className={`px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
                  sortOrder === "desc"
                    ? "bg-blue-900 text-white shadow-md"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                } flex items-center`}
              >
                Descending <ChevronDown size={18} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {sortedHobbyGroups.length > 0 ? (
              sortedHobbyGroups.map((group) => (
                <GroupCard key={group._id} group={group} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600 text-lg">
                No groups found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGroupsPage;
