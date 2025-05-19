import React from "react";
import { Link } from "react-router";

const AboutUsSection = () => {
  return (
    <section className="py-16">
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
          <h2 className="text-3xl font-bold text-[#00224D] mb-4">
            About Jhinku Hobby Hub
          </h2>
          <p className="text-gray-700 mb-6 text-xl">
            Jhinku Hobby Hub was created to help people find joy in shared
            interests. Whether you're into art, music, sports, or tech, our
            platform connects you with like-minded individuals right in your
            community.
          </p>
          <p className="text-gray-700  text-xl mb-10">
            We believe that hobbies should be more than solo activities —
            they're opportunities to bond, learn, and grow together. Join
            groups, start discussions, and attend events that match your
            passion.
          </p>
          <Link
            to="/create-group"
            className=" bg-gradient-to-r from-[#C68EFD] to-[#a46bec] hover:from-[#b07bec] hover:to-[#9a5fd9] text-white py-3 px-6 rounded-md transition-all duration-300 ease-in-out cursor-pointer font-medium hover:-translate-y-2"
          >
            Create Group Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
