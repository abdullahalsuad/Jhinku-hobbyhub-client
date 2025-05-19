import React from "react";
import ReviewsSection from "../components/homePage/ReviewsSection";
import AboutUsSection from "../components/homePage/AboutUsSection";
import Banner from "../components/homePage/Banner";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* About US */}
      <AboutUsSection />
      {/* review */}
      <ReviewsSection />
    </>
  );
};

export default Home;
