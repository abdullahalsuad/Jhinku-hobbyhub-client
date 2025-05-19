import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-[#00224D] via-[#1f5490] to-[#00224D] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Turn Interests Into Adventures.
          </h1>
          <p className="text-gray-300 mb-10 max-w-lg mx-auto md:mx-0">
            Discover new hobbies and unlock new passions by joining groups that
            match your interests. Whether it’s art, tech, fitness, or anything
            in between, there’s a community waiting to welcome you. Share
            experiences, grow your skills, and connect with people who love what
            you love.
          </p>

          <Link
            to="/groups"
            className=" bg-gradient-to-r from-[#C68EFD] to-[#a46bec] hover:from-[#b07bec] hover:to-[#9a5fd9] text-white py-3 px-6 rounded-md transition-all duration-300 ease-in-out cursor-pointer font-medium hover:-translate-y-2"
          >
            Explore Groups
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://images.pexels.com/photos/5044193/pexels-photo-5044193.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="People enjoying hobbies together"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
