import React from "react";
import ReviewsSection from "../components/homePage/ReviewsSection";
import AboutUsSection from "../components/homePage/AboutUsSection";
import Banner from "../components/homePage/Banner";
import FeaturedGroups from "../components/homePage/FeaturedGroups";
import { useTheme } from "../context/ThemeProvider";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <>
      <div
        className={`min-h-screen flex flex-col ${
          darkMode ? "bg-[#1b344b]" : "bg-[#F2F9FF]"
        }`}
      >
        {/* Banner */}
        <Banner />
        {/* feature */}
        <FeaturedGroups />
        {/* About US */}
        <AboutUsSection />
        {/* review */}
        <ReviewsSection />
      </div>
    </>
  );
};

export default Home;
