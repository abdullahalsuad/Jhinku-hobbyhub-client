import React from "react";

const FeatureGroupCardLoading = () => {
  return (
    <>
      <div
        className="rounded-lg border border-gray-300 shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl bg-gray-200 animate-pulse"
        aria-label="Loading card"
      >
        {/* Image Placeholder */}
        <div className="w-full h-48 bg-gray-300"></div>

        <div className="p-6 space-y-4">
          {/* Title */}
          <h2 className="h-6 w-3/4 bg-gray-300 rounded"></h2>

          {/* Category */}
          <p className="h-5 w-1/2 bg-gray-300 rounded"></p>

          {/* User Info */}
          <div className="my-2 h-5 w-2/3 bg-gray-300 rounded"></div>

          {/* Members & Location */}
          <div className="my-4 flex justify-between">
            <div className="h-5 w-24 bg-gray-300 rounded"></div>
            <div className="h-5 w-28 bg-gray-300 rounded"></div>
          </div>

          {/* See More Link */}
          <div className="mt-4 h-5 w-20 bg-gray-300 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default FeatureGroupCardLoading;
