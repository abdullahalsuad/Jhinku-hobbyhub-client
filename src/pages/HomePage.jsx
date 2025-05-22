import React, { use } from "react";
import ReviewsSection from "../components/homePage/ReviewsSection";
import AboutUsSection from "../components/homePage/AboutUsSection";
import Banner from "../components/homePage/Banner";
import FeaturedGroups from "../components/homePage/FeaturedGroups";
import { useTheme } from "../context/ThemeProvider";
import { FetchDataContext } from "../context/FetchDataProvider";

const Home = () => {
  const { darkMode } = useTheme();
  const { ongoingHobbyGroups } = use(FetchDataContext);

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
        <FeaturedGroups ongoingHobbyGroups={ongoingHobbyGroups} />
        {/* About US */}
        <AboutUsSection />
        {/* review */}
        <ReviewsSection />
      </div>
    </>
  );
};

export default Home;
