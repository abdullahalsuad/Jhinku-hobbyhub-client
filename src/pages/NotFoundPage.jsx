import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex items-center justify-center px-4 mt-40   ">
        <div className="text-center   rounded-md py-20 px-20 bg-gradient-to-r from-[#ffd2c5] via-[#fcedad] to-[#ffa07b]">
          <h1 className="text-5xl font-bold text-black mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#C68EFD] mb-4">
            Page Not Found
          </h2>
          <p className="text-black mb-6 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. Let's get you back
            on track.
          </p>

          <Link to={"/"}>
            <button className="bg-[#C68EFD] hover:bg-[#b07bec] text-black py-2 px-6 rounded-md transition duration-300 cursor-pointer">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
