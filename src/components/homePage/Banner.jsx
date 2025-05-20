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
          <Link to="/groups"></Link>

          <button class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full font-medium bg-gradient-to-r from-[#C68EFD] to-[#a46bec] hover:from-[#b07bec] hover:to-[#9a5fd9]  transition-all duration-300 hover:w-48 cursor-pointer">
            <div class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              Explore Groups
            </div>
            <div class="absolute right-3.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
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
