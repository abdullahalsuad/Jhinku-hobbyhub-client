import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const AboutUsSection = () => {
  return (
    <section className="py-16 my-30">
      <div className="w-10/12 mx-auto  md:px-12 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="People enjoying hobbies together"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold  mb-4 text-[#00224D] ">
            <Typewriter
              words={["About The Hub"]}
              loop={true} // or true for infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="mb-6 text-x text-gray-700">
            The Hub was created to help people find joy in shared interests.
            Whether you're into art, music, sports, or tech, our platform
            connects you with like-minded individuals right in your community.
          </p>
          <p className="mb-6 text-x text-gray-700 ">
            We believe that hobbies should be more than solo activities —
            they're opportunities to bond, learn, and grow together. Join
            groups, start discussions, and attend events that match your
            passion.
          </p>

          <Link to="/create-group">
            <button className="group relative inline-flex h-12 items-center justify-center rounded-md px-6 font-medium bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] text-white cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 transform ease-in-out ">
              <span>Create Group</span>
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
    </section>
  );
};

export default AboutUsSection;
