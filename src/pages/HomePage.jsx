import React, { use } from "react";
import ReviewsSection from "../components/homePage/ReviewsSection";
import AboutUsSection from "../components/homePage/AboutUsSection";
import Banner from "../components/homePage/Banner";
import FeaturedGroups from "../components/homePage/FeaturedGroups";

import { FetchDataContext } from "../context/FetchDataProvider";

const Home = () => {
  const { ongoingHobbyGroups, loading } = use(FetchDataContext);

  return (
    <>
      <div>
        {/* Banner */}
        <Banner />
        {/* feature */}
        <FeaturedGroups
          ongoingHobbyGroups={ongoingHobbyGroups}
          loading={loading}
        />
        {/* About US */}
        <AboutUsSection />
        {/* review */}
        <ReviewsSection />
      </div>
    </>
  );
};

export default Home;
