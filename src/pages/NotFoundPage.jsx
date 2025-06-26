import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
        {/* Icon */}
        <div className="flex justify-center mb-6 text-yellow-500">
          <FaExclamationTriangle className="w-16 h-16" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let’s get you back on
          track.
        </p>

        {/* Back to Home Button */}
        <Link to="/">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition duration-300 transform hover:scale-105 focus:outline-none">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
