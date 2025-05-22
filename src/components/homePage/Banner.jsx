// Banner.jsx
import React from "react";
import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slide Component
const Slide = ({ title, description, imageUrl }) => {
  return (
    <section className="h-[600px] bg-gradient-to-r from-[#00224D] via-[#1f5490] to-[#00224D] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-gray-300 mb-10 max-w-lg mx-auto md:mx-0 text-xl">
            {description}
          </p>

          <Link to={"/groups"}>
            <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full font-medium bg-gradient-to-r from-[#C68EFD] to-[#a46bec] hover:from-[#b07bec] hover:to-[#9a5fd9] transition-all duration-300 hover:w-48 cursor-pointer">
              <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                Explore Groups
              </div>
              <div className="absolute right-3.5">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

// Main Slider Component
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const slides = [
    {
      title: "Turn Interests Into Adventures.",
      description:
        "Discover new hobbies and unlock new passions by joining groups that match your interests.",
      imageUrl:
        "https://images.pexels.com/photos/5044193/pexels-photo-5044193.jpeg?auto=compress&cs=tinysrgb&w=600 ",
    },
    {
      title: "Connect With Like-Minded People.",
      description:
        "Find communities where you can share experiences, grow skills, and connect with others who love what you love.",
      imageUrl:
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600 ",
    },
    {
      title: "Explore New Hobbies Every Day.",
      description:
        "Whether it’s art, tech, fitness, or anything in between, there’s always something new to learn and enjoy.",
      imageUrl:
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600 ",
    },
    {
      title: "Enjoy You Free Time.",
      description:
        "Take a break and make the most of your free time with relaxing, fun, and fulfilling activities.",
      imageUrl:
        "https://images.pexels.com/photos/32190740/pexels-photo-32190740/free-photo-of-exciting-football-match-on-green-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </Slider>
  );
};

export default Banner;
