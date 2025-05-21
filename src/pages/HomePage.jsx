import React from "react";
import ReviewsSection from "../components/homePage/ReviewsSection";
import AboutUsSection from "../components/homePage/AboutUsSection";
import Banner from "../components/homePage/Banner";
import FeaturedGroups from "../components/homePage/FeaturedGroups";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* feature */}
      <FeaturedGroups />
      {/* About US */}
      <AboutUsSection />
      {/* review */}
      <ReviewsSection />
    </>
  );
};

export default Home;
