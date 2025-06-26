import React, { use } from "react";
import ReviewsSection from "../components/homePage/ReviewsSection";
import AboutUsSection from "../components/homePage/AboutUsSection";
import Banner from "../components/homePage/Banner";
import FeaturedGroups from "../components/homePage/FeaturedGroups";

import { FetchDataContext } from "../context/FetchDataProvider";
import PopularActivities from "../components/homePage/PopularActivities";
import NewGroupsAlert from "../components/homePage/NewGroupsAlert";
import UpcomingEvents from "../components/homePage/UpcomingEvents";
import HobbyTipsAndGuides from "../components/homePage/HobbyTipsAndGuides";
import CommunitySpotlight from "../components/homePage/CommunitySpotlight ";

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

        <NewGroupsAlert />

        {/* 
        <PopularActivities /> */}

        {/* About US */}
        <AboutUsSection />

        <UpcomingEvents />

        <HobbyTipsAndGuides />

        <CommunitySpotlight />

        {/* review
        <ReviewsSection /> */}
      </div>
    </>
  );
};

export default Home;
