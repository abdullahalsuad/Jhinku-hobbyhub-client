import React from "react";

const GroupDetailsCardLoading = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl mx-auto mt-10 mb-20 animate-pulse">
        {/* Cover Image Skeleton */}
        <div className="h-96 w-full bg-gray-300"></div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-6">
          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <div className="h-8 w-24 bg-gray-300 rounded-full"></div>
            <div className="h-8 w-28 bg-gray-300 rounded-full"></div>
            <div className="h-8 w-32 bg-gray-300 rounded-full"></div>
            <div className="h-8 w-24 bg-gray-300 rounded-full"></div>
          </div>

          {/* Title and Creator Info */}
          <div className="mt-10 mb-10 space-y-4">
            <div className="h-10 w-3/4 bg-gray-300 rounded-md"></div>
            <div className="flex flex-wrap gap-4">
              <div className="h-8 w-40 bg-gray-300 rounded-full"></div>
              <div className="h-8 w-52 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
          </div>

          {/* Upcoming Event Section */}
          <div className="mb-6 space-y-3">
            <div className="h-5 w-32 bg-gray-300 rounded"></div>
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-40 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-40 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex gap-4 my-8">
            <div className="h-12 w-40 bg-gray-300 rounded-md"></div>
            <div className="h-12 w-40 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupDetailsCardLoading;
