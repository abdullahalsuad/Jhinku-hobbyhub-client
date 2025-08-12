import { use, useEffect, useState, useMemo } from "react";

import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import GroupCard from "../allGroupsPage/GroupCard";
import { FetchDataContext } from "../../context/FetchDataProvider";
import LoadingSpinner from "../Loader/LoadingSpinner";

const Community = () => {
  const { hobbyGroups, loading } = use(FetchDataContext);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "drawing", label: "Drawing & Painting" },
    { value: "programming", label: "Programming" },
    { value: "photography", label: "Photography" },
    { value: "video gaming", label: "Video Gaming" },
    { value: "fishing", label: "Fishing" },
    { value: "running", label: "Running" },
    { value: "cooking", label: "Cooking" },
    { value: "reading", label: "Reading" },
    { value: "writing", label: "Writing" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredAndSortedHobbyGroups = useMemo(() => {
    if (!hobbyGroups) return [];

    let currentGroups = [...hobbyGroups];

    if (selectedCategory !== "all") {
      currentGroups = currentGroups.filter(
        (group) =>
          group.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    currentGroups.sort((a, b) => {
      const nameA = a.groupName ? a.groupName.toLowerCase() : "";
      const nameB = b.groupName ? b.groupName.toLowerCase() : "";

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    return currentGroups;
  }, [hobbyGroups, sortOrder, selectedCategory]);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 sm:gap-0">
            <h1 className="text-3xl font-bold text-gray-900 text-center sm:text-left">
              Explore All Groups
            </h1>

            <div className="flex items-center space-x-2">
              <Filter className="text-gray-600" size={20} />
              <label htmlFor="category-filter" className="sr-only">
                Filter by Category
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 cursor-pointer text-gray-800"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-gray-700 whitespace-nowrap">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {filteredAndSortedHobbyGroups.length > 0 ? (
              filteredAndSortedHobbyGroups.map((group) => (
                <GroupCard key={group._id} group={group} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600 text-lg py-10 bg-white rounded-lg shadow-inner">
                No groups found for the selected category.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
